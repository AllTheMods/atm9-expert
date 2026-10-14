ServerEvents.recipes(allthemods => {

    // --- Helper Function ---
    const bendPlate = (input, output, customID) => {
        let id = customID ? `gregification:mechanical_press/${customID}` : `gregification:mechanical_press/${output.split(':')[1]}_plate`;
        allthemods.custom({
            type: 'create:pressing',
            ingredients: [
                { tag: input } // Input
            ],
            results: [
                { item: output } // Output
            ]
        }).id(id)
    }

    bendPlate('forge:ingots/tin_alloy_ingot', 'gtceu:tin_alloy_plate')
    bendPlate('forge:ingots/wrought_iron', 'gtceu:wrought_iron_plate')


    const crushDust = (input, output, customID) => {
        const id = customID
            ? `gregification:crushing/${customID}`
            : `gregification:crushing/${output.split(':')[1]}`;
        allthemods.custom({
            type: 'create:crushing',
            ingredients: [{ tag: input }],
            processingTime: 250,
            results: [
                { item: output }
            ]
        }).id(id);
    };

    const baseMetals = [
        { dust: 'alltheores:iron_dust', ingot: 'forge:ingots/iron' },
        { dust: 'alltheores:gold_dust', ingot: 'forge:ingots/gold' },
        { dust: 'alltheores:copper_dust', ingot: 'forge:ingots/copper' },
        { dust: 'alltheores:tin_dust', ingot: 'forge:ingots/tin' },
        { dust: 'alltheores:lead_dust', ingot: 'forge:ingots/lead' },
        { dust: 'alltheores:silver_dust', ingot: 'forge:ingots/silver' },
        { dust: 'alltheores:nickel_dust', ingot: 'forge:ingots/nickel' },
        { dust: 'alltheores:aluminum_dust', ingot: 'forge:ingots/aluminum' },
        { dust: 'alltheores:zinc_dust', ingot: 'forge:ingots/zinc' },
        { dust: 'alltheores:bronze_dust', ingot: 'forge:ingots/bronze' },
        { dust: 'alltheores:brass_dust', ingot: 'forge:ingots/brass' },
        { dust: 'alltheores:invar_dust', ingot: 'forge:ingots/invar' },
        { dust: 'alltheores:electrum_dust', ingot: 'forge:ingots/electrum' },
        { dust: 'alltheores:constantan_dust', ingot: 'forge:ingots/constantan' },
        { dust: 'alltheores:steel_dust', ingot: 'forge:ingots/steel' },
        { dust: 'alltheores:lumium_dust', ingot: 'forge:ingots/lumium' },
        { dust: 'alltheores:signalum_dust', ingot: 'forge:ingots/signalum' },
        { dust: 'alltheores:enderium_dust', ingot: 'forge:ingots/enderium' },
        { dust: 'alltheores:uranium_dust', ingot: 'forge:ingots/uranium' }
    ];

    baseMetals.forEach(metal => {
        crushDust(metal.ingot, metal.dust);
    });

    // [input, [{output, chance}], processingTime]
    const stoneCrush = [
        ['minecraft:basalt', [{ output: 'gtceu:basalt_dust', chance: 1 }, { output: 'gtceu:olivine_dust', chance: 0.3 }, { output: 'minecraft:iron_nugget', chance: 0.2 }, { output: 'gtceu:calcite_dust', chance: 0.2 }], 350],
        ['minecraft:granite', [{ output: 'gtceu:granite_dust', chance: 1 }, { output: 'gtceu:red_sand_dust', chance: 0.8 }, { output: 'create:crushed_raw_copper', chance: 0.4 }, { output: 'minecraft:gold_nugget', chance: 0.2 }], 350],
        ['gtceu:red_granite', [{ output: 'gtceu:granite_red_dust', chance: 1 }, { output: 'create:crushed_raw_aluminum', chance: 0.6 }, { output: 'gtceu:potassium_feldspar_dust', chance: 0.1 }, { output: 'gtceu:aluminium_nugget', chance: 0.2 }], 350],
        ['gtceu:marble', [{ output: 'gtceu:marble_dust', chance: 1 }, { output: 'gtceu:magnesium_dust', chance: 0.2 }, { output: 'gtceu:calcite_dust', chance: 0.2 }, { output: 'alltheores:zinc_nugget', chance: 0.2 }], 350],
        ['minecraft:deepslate', [{ output: 'gtceu:deepslate_dust', chance: 1 }, { output: 'gtceu:silicon_dioxide_dust', chance: 0.6 }, { output: 'gtceu:biotite_dust', chance: 0.1 }, { output: 'alltheores:aluminium_nugget', chance: 0.4 }], 350],
        ['minecraft:blackstone', [{ output: 'gtceu:blackstone_dust', chance: 1 }, { output: 'create:crushed_raw_lead', chance: 0.4 }, { output: 'alltheores:lead_nugget', chance: 0.2 }], 350],
        ['minecraft:mossy_cobblestone', [{ output: 'gtceu:stone_dust', chance: 1 }, { output: 'gtceu:bio_chaff', chance: 0.8 }, { output: 'create:crushed_raw_nickel', chance: 0.4 }, { output: 'alltheores:tin_nugget', chance: 0.2 }], 350],
        ['create:scorchia', [{ output: 'gtceu:stone_dust', chance: 1 }, { output: 'create:crushed_raw_lead', chance: 0.6 }, { output: 'alltheores:silver_nugget', chance: 0.2 }], 350],
        ['create:scoria', [{ output: 'gtceu:stone_dust', chance: 1 }, { output: 'create:crushed_raw_silver', chance: 0.6 }, { output: 'alltheores:tin_nugget', chance: 0.2 }], 350],

        ['tconstruct:earth_slime_crystal_block', [{ output: 'gtceu:malachite_dust',          chance: 0.6 }, { output: 'create:crushed_raw_nickel',    chance: 0.4 }, { output: 'alltheores:zinc_nugget',     chance: 0.4 }], 250],
        ['tconstruct:sky_slime_crystal_block',   [{ output: 'gtceu:lapis_dust',              chance: 0.6 }, { output: 'create:crushed_raw_silver',   chance: 0.4 }, { output: 'alltheores:aluminum_nugget', chance: 0.4 }], 250],
        ['tconstruct:ichor_slime_crystal_block', [{ output: 'minecraft:magma_cream',         chance: 0.5 }, { output: 'minecraft:blaze_powder',      chance: 0.4 }, { output: 'gtceu:sulfur_dust', chance: 0.4 }, { output: 'minecraft:gold_nugget', chance: 0.3 }], 250],
        ['tconstruct:ender_slime_crystal_block', [{ output: 'gtceu:ender_pearl_dust',        chance: 0.4 }, { output: 'minecraft:chorus_fruit',      chance: 0.4 }, { output: 'create:crushed_raw_platinum', chance: 0.3 }], 250]
    ];

    stoneCrush.forEach(([input, outputs]) => {
        const name = input.replace(/^#/, '').replace(':', '_');
        allthemods.custom({
            type: 'create:crushing',
            ingredients: [input.startsWith('#')
                ? { tag: input.slice(1) }
                : { item: input }],
            processingTime: 250,
            results: outputs.map(o => ({ item: o.output, chance: o.chance }))
        }).id(`gregification:crushing/${name}`);
    });


})
