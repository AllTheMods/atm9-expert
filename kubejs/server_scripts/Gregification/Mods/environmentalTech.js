// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const solder = '#forge:soldering_alloy 144'
    const imbuedPlate = 'envirocore:redstone_imbued_obsidian_plate'
    const structural = 'gtceu:structural_casing'
    const micaFoil = '#forge:foils/mica_insulator'
    const lonsdaleitePlate = '#forge:plates/lonsdaleite'

    const tiers = [
        { crystal: 'litherite', tier: 'lv', eut: LV, metal: 'steel', plate: 'steel', polymer: 'polyethylene', baseBoule: 'gtceu:silicon_boule', coilTemp: 1800, feIn: '{tier:1,energy:{capacity:1024}}', feOut: '{tier:1,energy:{capacity:1024}}' },
        { crystal: 'erodium', tier: 'mv', eut: MV, metal: 'aluminium', plate: 'aluminum', polymer: 'polyethylene', baseBoule: 'gtceu:silicon_boule', coilTemp: 2700, feIn: '{tier:2,energy:{capacity:8192}}', feOut: '{tier:2,energy:{capacity:8192}}' },
        { crystal: 'kyronite', tier: 'hv', eut: HV, metal: 'stainless_steel', plate: 'stainless_steel', polymer: 'polyethylene', baseBoule: 'gtceu:phosphorus_boule', coilTemp: 3600, feIn: '{tier:3,energy:{capacity:65536}}', feOut: '{tier:3,energy:{capacity:65536}}' },
        { crystal: 'pladium', tier: 'ev', eut: EV, metal: 'titanium', plate: 'titanium', polymer: 'polyethylene', baseBoule: 'gtceu:phosphorus_boule', coilTemp: 4500, feIn: '{tier:4,energy:{capacity:524288}}', feOut: '{tier:4,energy:{capacity:524288}}' },
        { crystal: 'ionite', tier: 'iv', eut: IV, metal: 'tungsten_steel', plate: 'tungsten_steel', polymer: 'polytetrafluoroethylene', baseBoule: 'gtceu:phosphorus_boule', coilTemp: 5400, feIn: '{tier:5,energy:{capacity:4194304}}', feOut: '{tier:5,energy:{capacity:4194304}}' },
        { crystal: 'aethium', tier: 'luv', eut: LuV, metal: 'rhodium_plated_palladium', plate: 'rhodium_plated_palladium', polymer: 'polytetrafluoroethylene', baseBoule: 'gtceu:cubic_zirconia_boule', coilTemp: 7200, feIn: '{tier:6,energy:{capacity:33554432}}', feOut: '{tier:6,energy:{capacity:33554432}}' },
        { crystal: 'nanorite', tier: 'zpm', eut: ZPM, metal: 'naquadah_alloy', plate: 'naquadah_alloy', polymer: 'polybenzimidazole', baseBoule: 'gtceu:bismuth_telluride_boule', coilTemp: 9000, feIn: '{tier:7,energy:{capacity:268435456}}', feOut: '{tier:7,energy:{capacity:268435456}}' },
        { crystal: 'xerothium', tier: 'uv', eut: UV, metal: 'darmstadtium', plate: 'darmstadtium', polymer: 'polybenzimidazole', baseBoule: 'gtceu:naquadah_boule', coilTemp: 10800, feIn: '{tier:8,energy:{capacity:2147483647}}', feOut: '{tier:8,energy:{capacity:2147483647}}' }
    ]

    const modifierFamilies = [
        {
            id: 'amplification', item: 'envirocore:amplification_modifier', gem: 'ruby', startTier: 1, nbt: [
                '{tier:1,attributes:{"envirocore:energy_cost_multiplier":1.0,"envirocore:amplification":0.2}}',
                '{tier:2,attributes:{"envirocore:energy_cost_multiplier":1.1,"envirocore:amplification":0.4}}',
                '{tier:3,attributes:{"envirocore:energy_cost_multiplier":1.2,"envirocore:amplification":0.6}}',
                '{tier:4,attributes:{"envirocore:energy_cost_multiplier":1.3,"envirocore:amplification":0.8}}',
                '{tier:5,attributes:{"envirocore:energy_cost_multiplier":1.4,"envirocore:amplification":1.0}}',
                '{tier:6,attributes:{"envirocore:energy_cost_multiplier":1.5,"envirocore:amplification":1.2}}',
                '{tier:7,attributes:{"envirocore:energy_cost_multiplier":1.6,"envirocore:amplification":1.4}}',
                '{tier:8,attributes:{"envirocore:energy_cost_multiplier":1.7,"envirocore:amplification":1.6}}'
            ]
        },
        {
            id: 'frequency', item: 'envirocore:frequency_modifier', gem: 'sapphire', startTier: 1, nbt: [
                '{tier:1,attributes:{"envirocore:energy_cost_multiplier":1.0,"envirocore:frequency":0.2}}',
                '{tier:2,attributes:{"envirocore:energy_cost_multiplier":1.1,"envirocore:frequency":0.4}}',
                '{tier:3,attributes:{"envirocore:energy_cost_multiplier":1.2,"envirocore:frequency":0.6}}',
                '{tier:4,attributes:{"envirocore:energy_cost_multiplier":1.3,"envirocore:frequency":0.8}}',
                '{tier:5,attributes:{"envirocore:energy_cost_multiplier":1.4,"envirocore:frequency":1.0}}',
                '{tier:6,attributes:{"envirocore:energy_cost_multiplier":1.5,"envirocore:frequency":1.1}}',
                '{tier:7,attributes:{"envirocore:energy_cost_multiplier":1.6,"envirocore:frequency":1.2}}',
                '{tier:8,attributes:{"envirocore:energy_cost_multiplier":1.7,"envirocore:frequency":1.3}}'
            ]
        },
        {
            id: 'piezo', item: 'envirocore:piezo_modifier', gem: 'olivine', startTier: 1, nbt: [
                '{tier:1,attributes:{"envirocore:piezo":0.2}}',
                '{tier:2,attributes:{"envirocore:piezo":0.4}}',
                '{tier:3,attributes:{"envirocore:piezo":0.6}}',
                '{tier:4,attributes:{"envirocore:piezo":0.8}}',
                '{tier:5,attributes:{"envirocore:piezo":1.0}}',
                '{tier:6,attributes:{"envirocore:piezo":1.2}}',
                '{tier:7,attributes:{"envirocore:piezo":1.4}}',
                '{tier:8,attributes:{"envirocore:piezo":1.6}}'
            ]
        },
        {
            id: 'radiant', item: 'envirocore:radiant_modifier', gem: 'opal', startTier: 1, nbt: [
                '{tier:1,attributes:{"envirocore:radiant":0.2}}',
                '{tier:2,attributes:{"envirocore:radiant":0.4}}',
                '{tier:3,attributes:{"envirocore:radiant":0.6}}',
                '{tier:4,attributes:{"envirocore:radiant":0.8}}',
                '{tier:5,attributes:{"envirocore:radiant":1.0}}',
                '{tier:6,attributes:{"envirocore:radiant":1.2}}',
                '{tier:7,attributes:{"envirocore:radiant":1.4}}',
                '{tier:8,attributes:{"envirocore:radiant":1.6}}'
            ]
        },
        {
            id: 'bandwidth', item: 'envirocore:bandwidth_modifier', gem: 'green_sapphire', startTier: 5, nbt: [
                '{tier:5,attributes:{"envirocore:energy_cost_multiplier":1.0,"envirocore:bandwidth":1}}',
                '{tier:6,attributes:{"envirocore:energy_cost_multiplier":1.2,"envirocore:bandwidth":2}}',
                '{tier:7,attributes:{"envirocore:energy_cost_multiplier":1.4,"envirocore:bandwidth":3}}',
                '{tier:8,attributes:{"envirocore:energy_cost_multiplier":1.6,"envirocore:bandwidth":4}}'
            ]
        },
        {
            id: 'electrostatic', item: 'envirocore:electrostatic_modifier', gem: 'topaz', startTier: 5, nbt: [
                '{tier:5,attributes:{"envirocore:electrostatic":0.4}}',
                '{tier:6,attributes:{"envirocore:electrostatic":0.6}}',
                '{tier:7,attributes:{"envirocore:electrostatic":0.8}}',
                '{tier:8,attributes:{"envirocore:electrostatic":1.0}}'
            ]
        }
    ]

    const coloredLenses = [
        { dye: 'white', source: 'industrialforegoing:laser_lens0', color: -1 },
        { dye: 'orange', source: 'industrialforegoing:laser_lens1', color: -25856 },
        { dye: 'magenta', source: 'industrialforegoing:laser_lens2', color: -1690906 },
        { dye: 'light_blue', source: 'industrialforegoing:laser_lens3', color: -15098881 },
        { dye: 'yellow', source: 'industrialforegoing:laser_lens4', color: -256 },
        { dye: 'lime', source: 'industrialforegoing:laser_lens5', color: -16711936 },
        { dye: 'pink', source: 'industrialforegoing:laser_lens6', color: -38476 },
        { dye: 'gray', source: 'industrialforegoing:laser_lens7', color: -9868951 },
        { dye: 'light_gray', source: 'industrialforegoing:laser_lens8', color: -5658199 },
        { dye: 'cyan', source: 'industrialforegoing:laser_lens9', color: -16725796 },
        { dye: 'purple', source: 'industrialforegoing:laser_lens10', color: -8453889 },
        { dye: 'blue', source: 'industrialforegoing:laser_lens11', color: -16766746 },
        { dye: 'brown', source: 'industrialforegoing:laser_lens12', color: -7650029 },
        { dye: 'green', source: 'industrialforegoing:laser_lens13', color: -16744704 },
        { dye: 'red', source: 'industrialforegoing:laser_lens14', color: -3342336 },
        { dye: 'black', source: 'industrialforegoing:laser_lens15', color: -16777216 }
    ]

    const crystalLenses = [
        { crystal: 'litherite', color: -16152752 },
        { crystal: 'erodium', color: -8558945 },
        { crystal: 'kyronite', color: -10805166 },
        { crystal: 'pladium', color: -14008192 },
        { crystal: 'ionite', color: -12400641 },
        { crystal: 'aethium', color: -15395563 },
        { crystal: 'nanorite', color: -8964458 },
        { crystal: 'xerothium', color: -8392961 }
    ]

    const cutterFluids = [
        { id: 'water', fluid: 'minecraft:water 1000', duration: 800 },
        { id: 'distilled', fluid: 'gtceu:distilled_water 750', duration: 600 },
        { id: 'lubricant', fluid: 'gtceu:lubricant 250', duration: 400 }
    ]

    allthemods.recipes.gtceu.mixer('gregification:envirotech/litherite_crystal')
        .itemInputs(['minecraft:ender_pearl', '#forge:gems/emerald', 'minecraft:quartz'])
        .itemOutputs('3x envirocore:litherite_crystal')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/redstone_imbued_obsidian_plate')
        .itemInputs(['4x #gtceu:wires/single/cadmium_copper', '4x gtceu:redstone_plate', '#forge:plates/obsidian'])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs(imbuedPlate)
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.circuit_assembler('gregification:envirotech/volatile_memory')
        .itemInputs(['2x gtceu:ram_chip', '4x #forge:plates/beryllium', '#forge:dusts/ender_pearl'])
        .inputFluids(solder)
        .itemOutputs('envirocore:volatile_memory')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.circuit_assembler('gregification:envirotech/cpu')
        .itemInputs(['gtceu:cpu_chip', '2x #gtceu:transistors', '2x #gtceu:resistors', '4x #forge:fine_wires/gold', '#forge:dusts/redstone'])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('envirocore:cpu')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.circuit_assembler('gregification:envirotech/laser_diode')
        .itemInputs(['2x #gtceu:diodes', '#forge:dusts/glass', '4x #forge:fine_wires/tin', '#forge:dusts/redstone'])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('envirocore:laser_diode')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/laser_core')
        .itemInputs(['6x ' + imbuedPlate, '2x #forge:lenses/diamond', '16x #forge:fine_wires/cadmium_copper', '4x #forge:rods/compressed_iron'])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('envirocore:laser_core')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/laser_lens_holder')
        .itemInputs(['gtceu:lv_machine_hull', '4x #gtceu:circuits/lv', '4x ' + imbuedPlate, '8x #forge:screws/compressed_iron'])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('envirocore:laser_lens_holder')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/mica_casing')
        .itemInputs(['#forge:frames/compressed_iron', 'envirocore:mica', '4x ' + micaFoil, '4x #forge:screws/manasteel', '4x #forge:plates/bronze'])
        .inputFluids('#forge:polyethylene 36')
        .itemOutputs('gtceu:mica_casing')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/structural_casing')
        .itemInputs(['gtceu:lv_machine_casing', '6x ' + imbuedPlate, '8x #forge:screws/compressed_iron', '4x #forge:dusts/andesite_alloy'])
        .inputFluids('#forge:concrete 144')
        .itemOutputs('2x ' + structural)
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/structure_panel')
        .itemInputs([structural, '4x #forge:plates/compressed_iron', '4x #forge:screws/manasteel'])
        .itemOutputs('envirocore:structure_panel')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/null_modifier')
        .itemInputs([structural, '4x #forge:plates/umbral_steel', '4x ' + micaFoil])
        .inputFluids(solder)
        .itemOutputs('envirocore:null_modifier')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/memory_programmer')
        .itemInputs(['gtceu:lv_machine_hull', '2x #gtceu:circuits/lv', 'envirocore:cpu', '2x envirocore:volatile_memory', '4x ' + imbuedPlate])
        .inputFluids(solder)
        .itemOutputs('envirocore:memory_programmer')
        .duration(600)
        .EUt(LV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/item_output')
        .itemInputs([structural, 'gtceu:lv_output_bus', '6x #forge:plates/compressed_iron', '4x #forge:screws/manasteel'])
        .inputFluids(solder)
        .itemOutputs('envirocore:item_output')
        .duration(600)
        .EUt(LV)

    tiers.forEach((t, i) => {
        const crystal = t.crystal
        const prevCrystal = i > 0 ? tiers[i - 1].crystal : null

        allthemods.recipes.gtceu.electric_blast_furnace(`gregification:envirotech/${crystal}_boule`)
            .itemInputs([`8x #forge:dusts/${crystal}`, t.baseBoule])
            .itemOutputs(`envirocore:${crystal}_boule`)
            .duration(800)
            .EUt(t.eut)
            .blastFurnaceTemp(t.coilTemp)

        cutterFluids.forEach(f => {
            const cut = allthemods.recipes.gtceu.cutter(`gregification:envirotech/${crystal}_wafer_${f.id}`)
                .itemInputs(`envirocore:${crystal}_boule`)
                .inputFluids(f.fluid)
                .itemOutputs(`4x envirocore:${crystal}_wafer`)
                .duration(f.duration)
                .EUt(t.eut)
            if (i >= 4) {
                cut.cleanroom(CleanroomType.CLEANROOM)
            }
        })

        allthemods.recipes.gtceu.assembler(`gregification:envirotech/${crystal}_interconnect`)
            .itemInputs([imbuedPlate, `2x envirocore:${crystal}_wafer`, `2x #forge:plates/${crystal}`])
            .inputFluids(`#forge:${t.polymer} 144`)
            .itemOutputs(`envirocore:${crystal}_interconnect`)
            .duration(600)
            .EUt(t.eut)

        allthemods.recipes.gtceu.assembler(`gregification:envirotech/${crystal}_frame`)
            .itemInputs([structural, `envirocore:${crystal}_interconnect`, `2x #forge:plates/${crystal}`, `gtceu:${t.tier}_machine_casing`])
            .inputFluids(solder)
            .itemOutputs(`2x envirocore:${crystal}_frame`)
            .duration(600)
            .EUt(t.eut)

        const hatchInputs = [
            structural,
            `envirocore:${crystal}_interconnect`,
            `2x envirocore:${crystal}_wafer`,
            `2x #gtceu:circuits/${t.tier}`,
            `4x #forge:plates/${t.plate}`,
            `2x #forge:plates/${crystal}`
        ]
        if (i >= 2) {
            hatchInputs.push(`2x ${lonsdaleitePlate}`)
        }

        allthemods.recipes.gtceu.assembler(`gregification:envirotech/fe_input_${crystal}`)
            .itemInputs(hatchInputs.concat([`gtceu:${t.tier}_energy_input_hatch`]))
            .inputFluids('#forge:sodium_potassium 2000')
            .itemOutputs(Item.of('envirocore:fe_input', t.feIn))
            .duration(600)
            .EUt(t.eut)

        allthemods.recipes.gtceu.assembler(`gregification:envirotech/fe_output_${crystal}`)
            .itemInputs(hatchInputs.concat([`gtceu:${t.tier}_energy_output_hatch`]))
            .inputFluids('#forge:sodium_potassium 2000')
            .itemOutputs(Item.of('envirocore:fe_output', t.feOut))
            .duration(600)
            .EUt(t.eut)

        modifierFamilies.forEach(m => {
            if (i + 1 < m.startTier) {
                return
            }
            const nbtIndex = i + 1 - m.startTier
            const isStart = i + 1 === m.startTier
            const base = isStart ? 'envirocore:null_modifier' : Item.of(m.item, m.nbt[nbtIndex - 1]).strongNBT()
            const inputs = [
                base,
                `envirocore:${crystal}_interconnect`,
                `4x #forge:plates/${crystal}`,
                `4x #forge:screws/${t.metal}`,
                `2x ${micaFoil}`,
                `2x ${lonsdaleitePlate}`
            ]
            if (isStart) {
                inputs.push(`2x #forge:plates/${m.gem}`)
            }
            allthemods.recipes.gtceu.assembler(`gregification:envirotech/${m.id}_modifier_${crystal}`)
                .itemInputs(inputs)
                .itemOutputs(Item.of(m.item, m.nbt[nbtIndex]))
                .duration(600)
                .EUt(t.eut)
        })
    })

    allthemods.recipes.gtceu.assembler('gregification:envirotech/dimensional_modifier')
        .itemInputs([structural, 'minecraft:ender_chest', 'gtceu:iv_field_generator', '4x #forge:plates/tungsten_steel', '4x #forge:screws/end_steel', '2x bloodmagic:demonslate', '2x botania:rune_mana'])
        .inputFluids('#forge:polybenzimidazole 576')
        .itemOutputs(Item.of('envirocore:dimensional_modifier', '{attributes:{"envirocore:energy_cost_multiplier":5.0,"envirocore:dimensional":true}}'))
        .duration(600)
        .EUt(IV)

    allthemods.recipes.gtceu.assembler('gregification:envirotech/interdimensional_modifier')
        .itemInputs([Item.of('envirocore:dimensional_modifier', '{attributes:{"envirocore:energy_cost_multiplier":5.0,"envirocore:dimensional":true}}').withCount(2).strongNBT(), structural, 'gtceu:luv_field_generator', '4x #forge:plates/rhodium_plated_palladium', '4x #forge:screws/draconium', '2x #forge:plates/aethium'])
        .inputFluids('#forge:polybenzimidazole 1152')
        .itemOutputs(Item.of('envirocore:interdimensional_modifier', '{attributes:{"envirocore:energy_cost_multiplier":10.0,"envirocore:interdimensional":true}}'))
        .duration(600)
        .EUt(LuV)

    coloredLenses.forEach(l => {
        allthemods.recipes.gtceu.lathe(`gregification:envirotech/lens_${l.dye}`)
            .itemInputs(l.source)
            .itemOutputs(Item.of('envirocore:lens', `{config:{focus:"envirotech:${l.dye}",color:${l.color}}}`))
            .duration(600)
            .EUt(LV)
    })

    crystalLenses.forEach((l, i) => {
        allthemods.recipes.gtceu.lathe(`gregification:envirotech/crystal_lens_${l.crystal}`)
            .itemInputs(`envirocore:${l.crystal}`)
            .itemOutputs(Item.of('envirocore:crystal_lens', `{config:{focus:"envirotech:${l.crystal}",color:${l.color}}}`))
            .duration(600)
            .EUt(tiers[i].eut)
    })

    const controllers = [
        { crystal: 'litherite', tier: 'lv', eut: LV, metal: 'steel', polymer: 'polyethylene' },
        { crystal: 'erodium', tier: 'mv', eut: MV, metal: 'aluminium', polymer: 'polyethylene' },
        { crystal: 'kyronite', tier: 'hv', eut: HV, metal: 'stainless_steel', polymer: 'polyethylene' },
        { crystal: 'pladium', tier: 'ev', eut: EV, metal: 'titanium', polymer: 'polyethylene' },
        { crystal: 'ionite', tier: 'iv', eut: IV, metal: 'tungsten_steel', polymer: 'polytetrafluoroethylene' },
        { crystal: 'aethium', tier: 'luv', eut: LuV, metal: 'rhodium_plated_palladium', polymer: 'polytetrafluoroethylene' },
        { crystal: 'nanorite', tier: 'zpm', eut: ZPM, metal: 'naquadah_alloy', polymer: 'polybenzimidazole' },
        { crystal: 'xerothium', tier: 'uv', eut: UV, metal: 'darmstadtium', polymer: 'polybenzimidazole' }
    ]

    controllers.forEach(c => {
        allthemods.recipes.gtceu.assembler(`gregification:envirotech/${c.crystal}_void_miner_ccu`)
            .itemInputs([
                `gtceu:${c.tier}_machine_hull`,
                `4x #gtceu:circuits/${c.tier}`,
                `8x #forge:screws/${c.metal}`,
                `4x #forge:plates/${c.crystal}`,
                'envirocore:laser_core',
                'envirocore:laser_diode',
                `2x envirocore:${c.crystal}_wafer`
            ])
            .inputFluids(`#forge:${c.polymer} 576`)
            .itemOutputs(`envirotech:${c.crystal}_void_miner_ccu`)
            .duration(600)
            .EUt(c.eut)
    })
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
