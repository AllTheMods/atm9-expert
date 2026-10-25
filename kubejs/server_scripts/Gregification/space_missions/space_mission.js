ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const VOLT = { HV: HV, EV: EV, IV: IV, LuV: LuV, ZPM: ZPM, UV: UV };
    const S = global.SPACE;
    const DEST = global.SPACE_DESTINATIONS;
    const TIER_NAMES = ['', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv'];
    const volt = (table, t) => VOLT[table[t]];

    const itemOk = id => Item.exists(id);
    const fluidOk = id => Fluid.exists(id);
    const firstItem = list => {
        for (var i = 0; i < list.length; i++) {
            if (itemOk(list[i])) return list[i];
        }
        return null;
    };

    const resolve = (name, kind, amount) => {
        if (S.ITEM_OVERRIDES[name] && itemOk(S.ITEM_OVERRIDES[name])) {
            return { type: 'item', id: S.ITEM_OVERRIDES[name], count: amount };
        }
        let list = [];
        if (kind === 'fluid') {
            var fluidId = 'gtceu:' + name;
            if (fluidOk(fluidId)) return { type: 'fluid', id: fluidId, amount: amount * S.FLUID_BUCKET };
            return null;
        }
        if (kind === 'ore') {
            S.ORE_NAMESPACES.forEach(ns => { list.push(ns + ':raw_' + name); });
            S.ORE_NAMESPACES.forEach(ns => { list.push(ns + ':' + name + '_ore'); });
            var found = firstItem(list);
            return found ? { type: 'item', id: found, count: amount } : null;
        }
        S.ORE_NAMESPACES.forEach(ns => { list.push(ns + ':' + name + '_dust'); });
        S.ORE_NAMESPACES.forEach(ns => { list.push(ns + ':' + name); });
        const item = firstItem(list);
        if (item) return { type: 'item', id: item, count: amount };
        const fid = 'gtceu:' + name;
        if (fluidOk(fid)) return { type: 'fluid', id: fid, amount: amount * S.FLUID_BUCKET };
        return null;
    };

    const circuitStack = (tier, count) => {
        const ing = Ingredient.of('#gtceu:circuits/' + TIER_NAMES[tier]);
        const first = ing.first;
        if (!first || first.isEmpty()) return null;
        return Item.of(first.id, count);
    };

    const planetOf = gate => {
        const m = /\((\w+)\)/.exec(gate || '');
        return m ? m[1].toLowerCase() : null;
    };

    const typeOf = code => S.DATA_TYPES[code] || null;

    const groupIndex = {};
    const counters = {};
    DEST.forEach(d => {
        counters[d.mk] = (counters[d.mk] || 0) + 1;
        groupIndex[d.id] = counters[d.mk];
    });

    DEST.forEach(d => {
        const planet = planetOf(d.gate);
        const inputs = ['gtceu:blank_destination_card', 'gtceu:encoder_plate_mk' + d.mk];
        if (planet && S.PLANET_COMPONENT[planet]) {
            inputs.push(S.COMPONENT_PLATES + 'x #forge:plates/' + S.PLANET_COMPONENT[planet]);
        }
        allthemods.recipes.gtceu['destination_encoder_t' + d.mk]('gregification:space/encode/' + d.id)
            .itemInputs(inputs)
            .circuit(groupIndex[d.id])
            .itemOutputs(Item.of('gtceu:destination_card', { destination: d.id, name: d.name, distance: d.d, tier: d.mk }))
            .duration(S.ENCODE_DURATION)
            .EUt(volt(S.ENCODER_VOLTAGE, d.mk));
    });

    DEST.forEach(d => {
        const ship = 'gtceu:ship_mk' + d.mk;
        S.FUELS.forEach(f => {
            if (f.tier < d.mk) return;
            const fuelAmount = Math.round(d.d * f.perDistance);
            const fluids = [f.fluid + ' ' + fuelAmount];
            if (f.naquadria > 0) fluids.push(S.NAQUADRIA_FLUID + ' ' + f.naquadria);
            if (f.darkMatter > 0) fluids.push(S.DARK_MATTER_FLUID + ' ' + f.darkMatter);
            const seconds = S.FLIGHT_BASE_SECONDS + (d.d * S.FLIGHT_SECONDS_PER_DISTANCE) / f.speed;
            allthemods.recipes.gtceu.launch_platform('gregification:space/launch/' + d.id + '/' + f.id)
                .notConsumable(ship)
                .itemInputs(Item.of('gtceu:destination_card', { destination: d.id, name: d.name, distance: d.d, tier: d.mk }).strongNBT())
                .inputFluids(fluids)
                .itemOutputs(Item.of('gtceu:cargo_pod', { destination: d.id, name: d.name }))
                .duration(Math.round(seconds * 20))
                .EUt(volt(S.SHIP_TIER_VOLTAGE, d.mk));
        });
    });

    DEST.forEach(d => {
        var r = allthemods.recipes.gtceu.payload_opener('gregification:space/open/' + d.id)
            .itemInputs(Item.of('gtceu:cargo_pod', { destination: d.id, name: d.name }).strongNBT())
            .duration(S.OPEN_DURATION)
            .EUt(volt(S.OPENER_VOLTAGE, d.mk));

        d.haul.forEach(h => {
            var res = resolve(h[0], h[2], h[1]);
            if (!res) {
                console.warn('[space_mission] unresolved haul ' + h[0] + ' (' + h[2] + ') for ' + d.id);
                return;
            }
            if (res.type === 'item') {
                r.chancedOutput(Item.of(res.id, res.count), S.HAUL_CHANCE_BASE, S.HAUL_CHANCE_BOOST_PER_TIER);
            } else {
                r.chancedFluidOutput(res.id + ' ' + res.amount, S.HAUL_CHANCE_BASE, S.HAUL_CHANCE_BOOST_PER_TIER);
            }
        });

        if (d.mk === 6) {
            r.itemOutputs(Item.of('gtceu:cosmic_research_fragment', S.COSMIC_GUARANTEED));
            r.chancedOutput(Item.of('gtceu:cosmic_research_fragment', 1), S.COSMIC_EXTRA_CHANCE, 0);
        } else {
            var dataType = typeOf(d.data);
            if (dataType) {
                r.chancedOutput(Item.of('gtceu:' + dataType + '_research_fragment_mk' + d.mk, S.FRAGMENT_COUNT), S.RESEARCH_CHANCE_BASE, S.RESEARCH_CHANCE_BOOST_PER_TIER);
            }
        }
    });

    const types = ['thermal', 'propulsion', 'navigation'];
    for (var t = 1; t <= 5; t++) {
        types.forEach(ty => {
            allthemods.recipes.gtceu.research_compiler('gregification:space/compile/' + ty + '_mk' + t)
                .itemInputs(S.FRAGMENTS_PER_RESEARCH + 'x gtceu:' + ty + '_research_fragment_mk' + t)
                .circuit(1)
                .itemOutputs('gtceu:' + ty + '_research_mk' + t)
                .duration(S.COMPILE_DURATION)
                .EUt(MV);
            allthemods.recipes.gtceu.research_compiler('gregification:space/knowledge/' + ty + '_mk' + t)
                .itemInputs('gtceu:' + ty + '_research_fragment_mk' + t)
                .circuit(2)
                .itemOutputs(Item.of('gtceu:cosmic_knowledge', t))
                .duration(S.COMPILE_DURATION / 4)
                .EUt(MV);
        });
    }
    allthemods.recipes.gtceu.research_compiler('gregification:space/compile/cosmic_research')
        .itemInputs(S.COSMIC_FRAGMENTS_NEEDED + 'x gtceu:cosmic_research_fragment')
        .circuit(1)
        .itemOutputs('gtceu:cosmic_research')
        .duration(S.COMPILE_DURATION)
        .EUt(MV);

    const reclaim = (id, input) => {
        const r = allthemods.recipes.gtceu.scrap_reclaimer('gregification:space/reclaim/' + id)
            .itemInputs(S.SCRAP_BATCH + 'x ' + input)
            .duration(S.RECLAIM_DURATION)
            .EUt(HV);
        S.SCRAP_OUTPUTS.forEach(o => {
            const tierIndex = TIER_NAMES.indexOf(o[0]);
            const stack = circuitStack(tierIndex, o[1]);
            if (!stack) {
                console.warn('[space_mission] no circuit for tier ' + o[0]);
                return;
            }
            if (o[2] >= 10000) {
                r.itemOutputs(stack);
            } else {
                r.chancedOutput(stack, o[2], S.SCRAP_CHANCE_BOOST_PER_TIER);
            }
        });
    };
    reclaim('circuit_scrap', 'gtceu:circuit_scrap');

    allthemods.recipes.gtceu.macerator('gregification:space/kuiper_rock_dust')
        .itemInputs('gtceu:kuiper_rock')
        .itemOutputs('gtceu:kuiper_rock_dust')
        .duration(200)
        .EUt(HV);
    const sift = allthemods.recipes.gtceu.sifter('gregification:space/kuiper_sift')
        .itemInputs('gtceu:kuiper_rock_dust')
        .duration(400)
        .EUt(EV);
    S.KUIPER_SIFT.forEach(o => { sift.chancedOutput(o[0], o[1], 0); });

    allthemods.recipes.gtceu.assembler('gregification:space/blank_destination_card')
        .itemInputs('1x #forge:plates/aluminum', '2x #forge:foils/copper')
        .circuit(5)
        .itemOutputs('4x gtceu:blank_destination_card')
        .duration(100)
        .EUt(HV);

    // Molten metal per tier (assembler: HV steel, EV titanium; assembly line: tungsten steel + lubricant + solder)
    const SHIP_METAL = { 1: 'stainless_steel', 2: 'titanium', 3: 'tungsten_steel', 4: 'rhodium_plated_palladium', 5: 'naquadah_alloy', 6: 'etrium' };
    const shipFluids = tier => {
        var f = ['gtceu:' + SHIP_METAL[tier] + ' 15984'];
        if (tier >= 3) f.push('gtceu:lubricant 16000', '#forge:soldering_alloy 16000');
        return f;
    };

    const addPart = (id, tier, inputs, outputs, research) => {
        const rid = 'gregification:space/part/' + id;
        const r = (tier <= 2 ? allthemods.recipes.gtceu.assembler(rid) : allthemods.recipes.gtceu.assembly_line(rid))
            .itemInputs(inputs)
            .itemOutputs(outputs)
            .duration(tier <= 2 ? S.PART_DURATION : S.PART_DURATION * 2)
            .EUt(VOLT[S.SHIP_TIER_VOLTAGE[tier]]);
        if (research) r.notConsumable(research);
        return r;
    };

    const ENGINE_EXTRAS = {
        3: { plate: 'enderium', rod: 'end_steel' },
        4: { plate: 'rheni_zirconium_alloy', rod: 'desh' },
        5: { plate: 'scandium', rod: 'ostrum' },
        6: { plate: 'etrium', rod: 'etrium' }
    };
    const smd = tier => tier >= 4
        ? ['gtceu:advanced_smd_transistor', 'gtceu:advanced_smd_resistor', 'gtceu:advanced_smd_capacitor', 'gtceu:advanced_smd_diode']
        : ['gtceu:smd_transistor', 'gtceu:smd_resistor', 'gtceu:smd_capacitor', 'gtceu:smd_diode'];

    for (var t = 1; t <= 6; t++) {
        var p = S.PARTS[t];
        var frame = '1x #forge:frames/' + p.engine;
        var prev = t - 1;
        var rTherm = t > 1 ? 'gtceu:thermal_research_mk' + prev : null;
        var rProp = t > 1 ? 'gtceu:propulsion_research_mk' + prev : null;
        var rNav = t > 1 ? 'gtceu:navigation_research_mk' + prev : null;
        var circ = '#gtceu:circuits/' + TIER_NAMES[t];

        var hullInputs = [frame];
        hullInputs.push('8x #forge:plates/' + p.hull);
        addPart('hull_mk' + t, t, hullInputs, 'gtceu:ship_hull_mk' + t, rTherm);

        var engineInputs = [frame];
        if (t <= 2) {
            engineInputs.push('4x #forge:rotors/' + p.engine, '4x #forge:rods/long/' + p.engine);
        } else {
            var x = ENGINE_EXTRAS[t];
            engineInputs.push('4x #forge:gears/' + p.engine, '8x #forge:plates/' + x.plate, '4x #forge:rods/' + x.rod);
        }
        if (t >= 4) {
            engineInputs.push('1x gtceu:beryllium_sphere', S.PART_CIRCUITS_PER_SHIP + 'x ' + circ);
        }
        addPart('engine_mk' + t, t, engineInputs, 'gtceu:ship_engine_mk' + t, rProp);

        var avInputs = [frame, '4x #forge:plates/' + p.avionics, '2x #forge:rods/long/' + p.avionics, '1x gtceu:' + TIER_NAMES[t] + '_sensor', '1x gtceu:' + TIER_NAMES[t] + '_emitter'];
        var planetMats = [];
        if (t === 3) planetMats.push('hafnium');
        if (t === 4) planetMats.push('rhenium');
        if (t === 5) planetMats.push('strontium', 'tellurium');
        if (t === 6) planetMats.push('etrium');
        planetMats.forEach(m => { avInputs.push(S.COMPONENT_PLATES + 'x #forge:plates/' + m); });
        addPart('avionics_mk' + t, t, avInputs, 'gtceu:ship_avionics_mk' + t, rNav);

        if (t >= 3) {
            addPart('guidance_computer_mk' + t, t,
                ['4x #forge:dusts/cadmium_selenide', '1x ' + circ, frame],
                'gtceu:guidance_computer_mk' + t, null);
            var gInputs = ['1x gtceu:guidance_computer_mk' + t, frame, '4x #forge:plates/' + p.avionics, '2x #forge:rotors/' + p.avionics, '2x #forge:rods/long/' + p.avionics];
            planetMats.forEach(m => { gInputs.push(S.COMPONENT_PLATES + 'x #forge:plates/' + m); });
            addPart('guidance_mk' + t, t, gInputs, 'gtceu:ship_guidance_mk' + t, rNav);
        }

        if (t >= 2) {
            var cInputs = ['4x ' + circ, frame, '2x gtceu:ram_chip'];
            smd(t).forEach(s => { cInputs.push('2x ' + s); });
            addPart('onboard_computer_mk' + t, t, cInputs, 'gtceu:onboard_computer_mk' + t, rNav);
        }

        var shipInputs = ['1x gtceu:ship_hull_mk' + t, '1x gtceu:ship_engine_mk' + t, '1x gtceu:ship_avionics_mk' + t];
        if (t >= 3) shipInputs.push('1x gtceu:ship_guidance_mk' + t);
        if (t >= 2) shipInputs.push('1x gtceu:onboard_computer_mk' + t);
        if (t >= 5) shipInputs.push(S.PART_CIRCUITS_PER_SHIP + 'x ' + circ);
        var shipId = 'gregification:space/ship_mk' + t;
        (t <= 2 ? allthemods.recipes.gtceu.assembler(shipId) : allthemods.recipes.gtceu.assembly_line(shipId))
            .itemInputs(shipInputs)
            .itemOutputs('gtceu:ship_mk' + t)
            .inputFluids(shipFluids(t))
            .duration(S.SHIP_DURATION)
            .EUt(VOLT[S.SHIP_TIER_VOLTAGE[t]]);

        allthemods.recipes.gtceu.assembler('gregification:space/encoder_plate_mk' + t)
            .itemInputs('2x #forge:plates/' + p.hull)
            .circuit(6)
            .itemOutputs('4x gtceu:encoder_plate_mk' + t)
            .duration(100)
            .EUt(VOLT[S.SHIP_TIER_VOLTAGE[t]]);
    }
});