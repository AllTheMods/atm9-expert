// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// Priority: 0
// Builds every UHV+ circuit recipe from the global.circuit* arrays in startup_scripts/circuits.js:
//   - the part / smd / chipset / core / board / soc step recipes (generic walker)
//   - the four circuit stages per family (processor, assembly, computer, mainframe) from global.circuitRecipes
ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    // step name in the arrays -> recipe type
    const STEP_MACHINE = {
        matrix: 'assembler',
        matrix_alt: 'assembler',
        assemble: 'assembler',
        boule: 'crystal_growth_chamber',
        wafer_cut: 'cutter',
        engrave: 'laser_engraver',
        cut: 'cutter',
        circuit_assemble: 'circuit_assembler',
        print: 'assembler'
    }

    // max inputs per recipe type (items, fluids); a lens counts as an item
    const LIMITS = {
        assembler: { items: 9, fluids: 1 },
        circuit_assembler: { items: 6, fluids: 1 },
        assembly_line: { items: 16, fluids: 4 },
        cutter: { items: 1, fluids: 1 },
        laser_engraver: { items: 2, fluids: 1 },
        crystal_growth_chamber: { items: 6, fluids: 3 }
    }

    const nsId = id => (id.indexOf(':') === -1 ? 'gtceu:' + id : id)
    const withCount = (id, n) => (n > 1 ? n + 'x ' + id : id)
    const idSafe = s => String(s).replace(/[^a-z0-9]/gi, '_')

    // material forms are always referenced by forge tag, never by item id
    const FORM_TAGS = { fine_wire: 'fine_wires', foil: 'foils', plate: 'plates', frame: 'frames', bolt: 'bolts' }
    const formTag = (form, material) =>
        form === 'double_wire' ? '#gtceu:wires/double/' + material : '#forge:' + FORM_TAGS[form] + '/' + material
    const itemRef = id => {
        if (id.indexOf(':') === -1) {
            const m = /^(.+)_(fine_wire|double_wire|foil|plate|frame|bolt)$/.exec(id)
            if (m) return formTag(m[2], m[1])
        }
        return nsId(id)
    }

    const fluidStr = (name, amount) => {
        if (name === 'water') return 'minecraft:water ' + amount
        return '#forge:' + name + ' ' + amount
    }

    const bacteriaStack = (species, n) =>
        Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"' + species + '"}').withCount(n).strongNBT()

    // assembly line item buses are ULV: nothing over 64 per slot, so split into 64s plus the remainder
    const pushItem = (list, id, n, split) => {
        if (!split) {
            list.push(withCount(id, n))
            return
        }
        const full = Math.floor(n / 64)
        const rest = n - full * 64
        for (var k = 0; k < full; k++) list.push(withCount(id, 64))
        if (rest > 0) list.push(withCount(id, rest))
    }

    const isSterile = machine => machine && machine.cleanroom === 'sterile'

    // ids / tags that are not in the game; the recipe is skipped and they are logged
    const tagEmpty = tag => {
        try { return Ingredient.of(tag).isEmpty() } catch (e) { return false }
    }
    const missingIds = list => {
        const out = []
        list.forEach(entry => {
            if (typeof entry !== 'string') return
            const id = entry.replace(/^\d+x /, '')
            if (id.charAt(0) === '#') {
                if (tagEmpty(id)) out.push(id + ' (empty or unknown tag)')
            } else if (!Item.exists(id)) out.push(id)
        })
        return out
    }

    // returns true when the recipe was registered
    const register = (type, recipeId, ins, outId, outAmount, eut, duration, sterile, extra) => {
        const itemCount = ins.items.length + ins.notConsumable.length
        const lim = LIMITS[type]
        if (lim && (itemCount > lim.items || ins.fluids.length > lim.fluids)) {
            console.error('[circuits] ' + recipeId + ' skipped: ' + type + ' takes ' + lim.items + ' items / ' + lim.fluids +
                ' fluids, recipe has ' + itemCount + ' / ' + ins.fluids.length)
            return false
        }
        const missing = missingIds(ins.items).concat(missingIds(ins.notConsumable)).concat(missingIds([withCount(nsId(outId), outAmount)]))
        if (missing.length > 0) {
            console.error('[circuits] ' + recipeId + ' skipped: item does not exist: ' + missing.join(', '))
            return false
        }
        const r = allthemods.recipes.gtceu[type](recipeId)
        if (ins.items.length > 0) r.itemInputs(ins.items)
        ins.notConsumable.forEach(n => r.notConsumable(n))
        if (ins.fluids.length > 0) r.inputFluids(ins.fluids)
        r.itemOutputs(withCount(nsId(outId), outAmount))
        r.duration(duration)
        r.EUt(eut)
        if (sterile) r.cleanroom(CleanroomType.STERILE_CLEANROOM)
        if (extra) extra(r)
        return true
    }

    // ---------------------------------------------------------------- step recipes (parts, smds, chipsets, cores, boards, socs)
    // NOTE: no const/let inside loop bodies anywhere in this file - Rhino keeps the first value of a block-scoped
    // variable declared in a loop body, so every iteration would see the first element. forEach gives a fresh scope.
    const resolveComponents = (components, recipeId, split) => {
        const ins = { items: [], fluids: [], notConsumable: [] }
        let failed = false
        components.forEach(c => {
            if (failed) return
            if (c.lens) {
                ins.notConsumable.push('#forge:lenses/' + c.lens)
                return
            }
            if (c.amount === undefined || c.amount === null) {
                console.error('[circuits] ' + recipeId + ' skipped: component without an amount ' + JSON.stringify(c))
                failed = true
                return
            }
            if (c.fluid) ins.fluids.push(fluidStr(c.fluid, c.amount))
            else if (c.dust) pushItem(ins.items, '#forge:dusts/' + c.dust, c.amount, split)
            else if (c.gem) pushItem(ins.items, '#forge:gems/' + c.gem, c.amount, split)
            else if (c.bacteria) ins.items.push(bacteriaStack(c.bacteria, c.amount))
            else if (c.item) pushItem(ins.items, itemRef(c.item), c.amount, split)
            else {
                console.error('[circuits] ' + recipeId + ' skipped: unknown component ' + JSON.stringify(c))
                failed = true
            }
        })
        return failed ? null : ins
    }

    const walk = (node, key, cb) => {
        if (!node || typeof node !== 'object' || Array.isArray(node)) return
        if (node.components && node.output) {
            cb(key, node)
            return
        }
        Object.keys(node).forEach(k => {
            if (k === 'perStage') return
            walk(node[k], k, cb)
        })
    }

    let stepCount = 0
    const roots = [
        global.circuitParts, global.smdParts, global.chipsetParts,
        global.circuitCores, global.circuitBoards, global.socParts
    ]
    roots.forEach(root => {
        walk(root, '', (step, def) => {
            if (!def.machine) {
                console.error('[circuits] ' + step + ' -> ' + def.output.item + ' skipped: no machine (duration entry missing in circuitDurations)')
                return
            }
            const type = STEP_MACHINE[step]
            if (!type) {
                console.error('[circuits] unknown step "' + step + '" (output ' + def.output.item + ')')
                return
            }
            const recipeId = 'gregification:circuits/' + step + '/' + idSafe(def.output.item)
            const ins = resolveComponents(def.components, recipeId, true)
            if (!ins) return
            if (register(type, recipeId, ins, def.output.item, def.output.amount,
                def.machine.eut, def.machine.duration, isSterile(def.machine))) stepCount++
        })
    })

    // ---------------------------------------------------------------- circuit stages
    const stages = global.circuitStages          // processor, assembly, computer, mainframe (customCircuits.js)
    const scale = global.circuitScale
    const tpls = global.circuitRecipes

    const circuitId = (family, stage) => global.circuitItemName({ id: family.id }, stage)

    // one slot -> { fluid: bool, id, amount } or null when the slot has nothing to add at this stage
    const resolveSlot = (f, stageIdx, s) => {
        let amount
        if (s.perStage) {
            const part = global.circuitParts[s.slot]
            amount = part.perStage[stageIdx]
        } else if (s.fixed) {
            amount = s.amount
        } else {
            amount = Math.ceil(s.amount * scale[f.id])
        }
        if (!amount || amount <= 0) return null

        switch (s.slot) {
            case 'core': case 'board': case 'cpu_1': case 'cpu_2':
            case 'smd_capacitor': case 'smd_resistor': case 'smd_diode': case 'smd_inductor': case 'smd_transistor':
            case 'ram_chip': case 'alternate_chip': case 'bus': case 'oscillator':
                return { id: nsId(f[s.slot]), amount: amount }
            case 'soc':
                return { id: 'gtceu:' + global.socParts[f.id].id, amount: amount }
            case 'previous':
                return { id: 'gtceu:' + circuitId(f, stages[stageIdx - 1]), amount: amount }
            case 'fineWire': return { id: formTag('fine_wire', f.fineWire), amount: amount }
            case 'doubleWire': return { id: formTag('double_wire', f.doubleWire), amount: amount }
            case 'foil': return { id: formTag('foil', f.foil), amount: amount }
            case 'plate': return { id: formTag('plate', f.plate), amount: amount }
            case 'frame': return { id: formTag('frame', f.frame), amount: amount }
            case 'bolt': return { id: formTag('bolt', f.bolt), amount: amount }
            case 'polymer': return { fluid: true, id: f.polymer, amount: amount }
            case 'solder': return { fluid: true, id: 'soldering_alloy', amount: amount }
        }
        console.error('[circuits] unknown stage slot "' + s.slot + '"')
        return null
    }

    let stageCount = 0
    global.circuitLadder.forEach(f => {
        stages.forEach((stage, si) => {
            const tpl = tpls[stage.id]
            if (!tpl) return

            const variants = [{ suffix: '', slots: tpl.slots, duration: tpl.duration, output: tpl.output }]
            if (tpl.soc && global.socParts[f.id]) {
                variants.push({ suffix: '_soc', slots: tpl.soc.slots, duration: tpl.soc.duration, output: tpl.soc.output })
            }

            variants.forEach(v => {
                const recipeId = 'gregification:circuits/stage/' + circuitId(f, stage) + v.suffix
                const split = true
                const ins = { items: [], fluids: [], notConsumable: [] }
                v.slots.forEach(s => {
                    const r = resolveSlot(f, si, s)
                    if (!r) return
                    if (r.fluid) ins.fluids.push(fluidStr(r.id, r.amount))
                    else pushItem(ins.items, r.id, r.amount, split)
                })

                const eut = f.stageEut[stage.id]
                const research = f.research ? f.research[tpl.research] : null
                const cwut = f.cwut ? f.cwut[tpl.research] : null
                const extra = (tpl.machine === 'assembly_line' && research)
                    ? r => r.stationResearch(b => b.researchStack(Item.of(research)).EUt(eut).CWUt(cwut))
                    : null

                if (register(tpl.machine, recipeId, ins, circuitId(f, stage), v.output,
                    eut, v.duration, true, extra)) stageCount++
            })
        })
    })

    console.info('[circuits] registered ' + stepCount + ' step recipes and ' + stageCount + ' stage recipes')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
