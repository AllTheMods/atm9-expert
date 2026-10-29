ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const EUSimple = IV;
    const duration = 300;
    const EUComplex = LuV;

    const demonicWill = Item.of('bloodmagic:basemonstersoul', '{souls:5.0d}').strongNBT();

    // Rows WITH ash:    leaves/saplings/fruit -> pyrolyse to bio-ash -> leach (or centrifuge). machine = leach machine override.
    // Rows WITHOUT ash: leaves/saplings/fruit -> one step in `machine` straight to the product.
    const phytomining = [
        // --- Hard materials (end-of-line trees) ---
        { tree: 'star_fruit', fruit: 'productivetrees:star_fruit', ash: 'pgm_bio_ash', leach: 'gtceu:aqua_regia 1000', outItem: 'gtceu:platinum_group_sludge_dust', eu: IV },
        { tree: 'carob', fruit: 'productivetrees:carob', ash: 'rare_earth_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outFluid: ['gtceu:mixed_rare_earth_sulfate 500'], eu: IV },
        { tree: 'salak', fruit: 'productivetrees:snake_fruit', ash: 'radium_bio_ash', leach: 'gtceu:acetic_acid 1000', outFluid: ['gtceu:radium_acetate 300', 'gtceu:astatine_acetate 300'], machine: 'chemical_reactor', eu: LuV },
        { tree: 'logwood', ash: 'indium_bio_ash', leach: 'gtceu:sulfuric_acid 4000', outFluid: ['gtceu:indium_concentrate 1000'], eu: LuV },
        { tree: 'purpleheart', ash: 'iodine_bio_ash', leach: 'gtceu:peroxodisulfuric_acid 1000', outItem: 'gtceu:iodine_dust', eu: LuV },
        { tree: 'pomegranate', fruit: 'productivetrees:pomegranate', ash: 'strontium_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:celestite_dust', eu: ZPM },
        { tree: 'sandalwood', ash: 'rhenium_bio_ash', leach: 'gtceu:nitric_acid 1000', outFluid: ['gtceu:perrhenic_acid 100'], eu: ZPM },
        { tree: 'tangerine', fruit: 'productivetrees:tangerine', ash: 'tantalum_bio_ash', leach: 'gtceu:hydrofluoric_acid 1000', outItem: 'gtceu:niobium_tantalum_residue_dust', eu: IV },
        { tree: 'monkey_puzzle', ash: 'caesium_bio_ash', leach: 'gtceu:hydrochloric_acid 1000', outItem: 'gtceu:caesium_potassium_carbonate_dust', eu: IV },
        { tree: 'myrtle_ebony', ash: 'antimony_bio_ash', leach: null, outItem: 'gtceu:antimony_trioxide_dust', eu: EV },

        // --- Space materials (gated above their space tier) ---
        { tree: 'pistachio', fruit: 'productivetrees:pistachio', ash: 'selenium_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:clausthalite_dust', eu: ZPM }, // space IV
        { tree: 'pink_ivory', ash: 'hafnium_bio_ash', leach: 'gtceu:fluoroantimonic_acid 250', outItem: 'gtceu:hafnon_dust', outFluid: ['gtceu:hexafluorozirconic_acid 500'], eu: ZPM }, // space IV
        { tree: 'nutmeg', fruit: 'productivetrees:nutmeg', ash: 'lutetium_bio_ash', leach: 'gtceu:nitric_acid 1000', outItem: 'gtceu:xenotime_dust', eu: UV }, // space LuV
        { tree: 'satsuma', fruit: 'productivetrees:satsuma', ash: 'samarium_bio_ash', leach: 'gtceu:hydrochloric_acid 1000', outItem: 'gtceu:samarskite_dust', eu: UV }, // space LuV
        { tree: 'juniper', fruit: 'productivetrees:juniper_berry', ash: 'scandium_bio_ash', leach: 'gtceu:phosphoric_acid 1000', outItem: 'gtceu:thortveitite_dust', eu: UV }, // space LuV
        { tree: 'buddhas_hand', fruit: 'productivetrees:buddhas_hand', ash: 'tellurium_bio_ash', leach: 'gtceu:aqua_regia 1000', outItem: 'gtceu:calaverite_dust', eu: UV }, // space ZPM

        // --- Low-end materials (IV) ---
        { tree: 'grapefruit', fruit: 'productivetrees:grapefruit', ash: 'boron_bio_ash', leach: 'gtceu:hydrochloric_acid 1000', outItem: 'gtceu:borax_dust', eu: IV },
        { tree: 'osange_orange', fruit: 'productivetrees:osange_orange', ash: 'uranium_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:uraninite_dust', eu: IV },
        { tree: 'cinnamon', ash: 'manganese_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:pyrolusite_dust', eu: IV },
        { tree: 'lime', fruit: 'productivetrees:lime', ash: 'magnesium_bio_ash', leach: 'gtceu:hydrochloric_acid 1000', outItem: 'gtceu:magnesite_dust', eu: IV },
        { tree: 'finger_lime', fruit: 'productivetrees:finger_lime', ash: 'lithium_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:spodumene_dust', eu: IV },
        { tree: 'greenheart', ash: 'nickel_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:garnierite_dust', eu: IV },
        { tree: 'boxwood', ash: 'zinc_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:sphalerite_dust', eu: IV },
        { tree: 'asai_palm', fruit: 'productivetrees:asai_berry', ash: 'tin_bio_ash', leach: 'gtceu:hydrochloric_acid 1000', outItem: 'gtceu:cassiterite_dust', eu: IV },
        { tree: 'douglas_fir', ash: 'cobalt_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:cobaltite_dust', eu: IV },
        { tree: 'cedar', ash: 'copper_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:chalcopyrite_dust', eu: IV },
        { tree: 'flowering_crabapple', fruit: 'productivetrees:flowering_crabapple', ash: 'lead_bio_ash', leach: 'gtceu:nitric_acid 1000', outItem: 'gtceu:galena_dust', eu: IV },
        { tree: 'socotra_dragon', ash: 'chromium_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:chromite_dust', eu: IV },
        { tree: 'hawthorn', fruit: 'productivetrees:haw', ash: 'silver_bio_ash', leach: 'gtceu:nitric_acid 1000', outItem: 'gtceu:silver_dust', eu: IV },
        { tree: 'grandidiers_baobab', fruit: 'productivetrees:baobab_fruit', ash: 'titanium_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:ilmenite_dust', eu: IV },

        // --- Direct products from other mods (no ash, one step) ---
        { tree: 'water_wonder', machine: 'extractor', outFluid: ['gtceu:mana_essence 1000'], eu: EV },
        { tree: 'night_fuchsia', machine: 'extractor', outFluid: ['gtceu:source 1000'], eu: EV },
        { tree: 'rubber_tree', machine: 'extractor', outFluid: ['industrialforegoing:latex 500'], eu: EV },
        { tree: 'brown_amber', machine: 'mixer', extra: '4x minecraft:sand', outItem: 'thermal:oil_sand', eu: IV },
        { tree: 'foggy_blast', machine: 'pyrolyse_oven', outItem: '3x occultism:otherworld_ashes', eu: EV },
        { tree: 'blackthorn', machine: 'centrifuge', fruit: 'productivetrees:sloe', outItem: 'evilcraft:condensed_blood', outFluid: ['gtceu:sanguine_concentrate 100'], eu: EV },
        { tree: 'thunder_bolt', machine: 'electrolyzer', outItem: '2x thermal:blitz_powder', eu: IV },
        { tree: 'slimy_delight', machine: 'extractor', outFluid: ['industrialforegoing:pink_slime 250'], eu: IV },

        // --- Phytomining (ash route) ---
        { tree: 'hornbeam', ash: 'iron_bio_ash', leach: 'gtceu:sulfuric_acid 1000', outItem: 'gtceu:magnetite_dust', eu: EV },

        // --- Direct products ---
        { tree: 'time_traveller', machine: 'electromagnetic_separator', chanced: [{ item: 'gtceu:tachyon', chance: 100 }], eu: UV },
        { tree: 'blue_yonder', machine: 'vacuum_freezer', fruit: 'productivetrees:planet_peach', outItem: '2x thermal:blizz_powder', eu: IV },
        { tree: 'black_ember', machine: 'macerator', outItem: '2x thermal:basalz_powder', eu: IV },
        { tree: 'aquilaria', machine: 'centrifuge', outItem: 'gtceu:agarwood', eu: HV },
        { tree: 'black_locust', machine: 'centrifuge', outItem: '2x thermal:niter_dust', eu: EV },
        { tree: 'red_banana', machine: 'centrifuge', fruit: 'productivetrees:red_banana', outItem: '2x gtceu:potassium_dust', eu: EV },
        { tree: 'padauk', machine: 'centrifuge', outItem: '4x minecraft:redstone', eu: EV },

        { tree: 'iroko', machine: 'centrifuge', outItem: 'gtceu:calcite_dust', eu: EV },
        { tree: 'olive', machine: 'extractor', fruit: 'productivetrees:olive', outFluid: ['gtceu:seed_oil 25'], eu: HV },
        { tree: 'avocado', machine: 'extractor', fruit: 'productivetrees:avocado', outFluid: ['gtceu:seed_oil 25'], eu: HV },

        { tree: 'nectarine', machine: 'chemical_reactor', fruit: 'productivetrees:nectarine', fluidIn: 'minecraft:water 1000', outItem: 'gtceu:amygdalin_dust', eu: IV },
        { tree: 'cherry_plum', machine: 'chemical_reactor', fruit: 'productivetrees:cherry_plum', fluidIn: 'minecraft:water 1000', outItem: 'gtceu:amygdalin_dust', eu: IV },
        { tree: 'jackfruit', machine: 'extractor', fruit: 'productivetrees:jackfruit', outFluid: ['industrialforegoing:latex 250'], eu: EV },
        { tree: 'firecracker', machine: 'centrifuge', outItem: '4x minecraft:gunpowder', eu: EV },
        { tree: 'flickering_sun', machine: 'centrifuge', outItem: '4x minecraft:glowstone_dust', eu: EV },
        { tree: 'great_sallow', machine: 'centrifuge',                                     outItem: '2x irons_spellbooks:arcane_essence', eu: IV },
        { tree: 'butternut',    machine: 'centrifuge', fruit: 'productivetrees:butternut', outItem: 'evilcraft:dark_gem',                eu: IV },
        { tree: 'yew', machine: 'centrifuge', outItem: demonicWill, eu: IV },
    ];

    phytomining.forEach(p => {
        let eu = p.eu || EUComplex;

        let inputs = [
            { id: 'leaves', item: `16x productivetrees:${p.tree}_leaves`, circuit: 1 },
            { id: 'saplings', item: `8x productivetrees:${p.tree}_sapling`, circuit: 2 },
        ];
        if (p.fruit) inputs.push({ id: 'fruit', item: `4x ${p.fruit}`, circuit: 3 });


        // Direct products: one step straight to the result
        if (!p.ash) {
            inputs.forEach(i => {
                let r = allthemods.recipes.gtceu[p.machine](`gregification:${p.tree}_${i.id}_product`)
                    .itemInputs([i.item].concat(p.extra || []))
                    .duration(duration).EUt(eu);
                if (p.outItem) r.itemOutputs(p.outItem);
                if (p.outFluid) r.outputFluids(p.outFluid);
                if (p.fluidIn) r.inputFluids(p.fluidIn);
                if (p.chanced) p.chanced.forEach(c => r.chancedOutput(c.item, c.chance, 0));
                if (p.circuit) r.circuit(p.circuit);
            });
            return;
        }

        // Step 1: CO2-assisted pyrolysis to bio-ash
        inputs.forEach(i => {
            allthemods.recipes.gtceu.pyrolyse_oven(`gregification:${p.ash}_${i.id}`)
                .itemInputs(i.item)
                .inputFluids('gtceu:carbon_dioxide 500')
                .outputFluids('gtceu:carbon_monoxide 1000')
                .itemOutputs(`gtceu:${p.ash}_dust`)
                .circuit(i.circuit)
                .duration(duration).EUt(eu);
        });

        // Step 2: acid leach, or centrifuge when no leach is set
        let step2 = p.leach
            ? allthemods.recipes.gtceu[p.machine || 'chemical_bath'](`gregification:leach_${p.ash}`).inputFluids(p.leach)
            : allthemods.recipes.gtceu.centrifuge(`gregification:separate_${p.ash}`);
        step2.itemInputs(`gtceu:${p.ash}_dust`)
            .itemOutputs([p.outItem, 'gtceu:ash_dust'].filter(Boolean))
            .duration(duration).EUt(eu);
        if (p.outFluid) step2.outputFluids(p.outFluid)
        if (p.chanced) p.chanced.forEach(c => step2.chancedOutput(c.item, c.chance, 0));
    });

    allthemods.recipes.gtceu.chemical_reactor('gregification:amygdalin')
        .itemInputs('16x productivetrees:apricot_leaves')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('gtceu:amygdalin_dust')
        .duration(duration).EUt(EUSimple);

    allthemods.recipes.gtceu.chemical_reactor('gregification:poison_from_amygdalin')
        .itemInputs('#forge:dusts/amygdalin')
        .inputFluids('gtceu:enzyme_solution 250')
        .outputFluids('evilcraft:poison 50')
        .duration(duration).EUt(EUSimple);
});