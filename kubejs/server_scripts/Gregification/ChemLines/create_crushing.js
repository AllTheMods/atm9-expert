// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    const stoneInputs = [
        {stone: 'minecraft:deepslate', eu: EV},
        {stone: 'minecraft:mossy_cobblestone', eu: EV},
        {stone: 'create:scorchia', eu: EV},
        {stone: 'create:scoria', eu: EV},
        {stone: 'create:asurine', eu: EV},
        {stone: 'create:ochrum', eu: EV},
        {stone: 'create:veridium', eu: EV},
        {stone: 'create:crimsite', eu: EV},
        {stone: 'ad_astra:moon_stone', eu: IV, macerate: true, fluidA: 'allthemodium:soul_lava', fluidB: 'gtceu:water_stage_3'},
        {stone: 'minecraft:prismarine', eu: IV, macerate: true, fluidA: 'allthemodium:soul_lava', fluidB: 'gtceu:water_stage_3'}
    ];
    stoneInputs.forEach(stone => {
        let result = allthemods.recipes.gtceu.rock_breaker(`gregification:rock_breaker/${stone.stone.replace(':', '_')}`)
            .notConsumable(`${stone.stone}`)
            .itemOutputs(`${stone.stone}`)            
            .adjacentFluids(stone.fluidA ?? 'minecraft:lava',stone.fluidB ?? 'minecraft:water')
            .duration(120)
            .EUt(stone.eu)        
        if (stone.macerate) {
            allthemods.recipes.gtceu.macerator(`gregification:macerate_${stone.stone.replace(':', '_')}`)
                .itemInputs(`${stone.stone}`)
                .itemOutputs(`gtceu:${stone.stone.split(':')[1]}_dust`)
                .duration(100)
                .EUt(stone.eu);
        }
    });

    allthemods.recipes.gtceu.rock_breaker('netherrack')
        .notConsumable('minecraft:netherrack')
        .itemOutputs('minecraft:netherrack')
        .adjacentFluids('minecraft:lava', 'minecraft:water')
        .duration(16)
        .EUt(EV)

    allthemods.recipes.gtceu.rock_breaker('end_stone')
        .notConsumable('minecraft:end_stone')
        .itemOutputs('minecraft:end_stone')
        .adjacentFluids('minecraft:lava', 'minecraft:water')
        .duration(16)
        .EUt(IV)

    //prismarine
    const stoneCrush = [
        ['minecraft:basalt', [{ output: 'gtceu:basalt_dust', chance: 1 },               { output: 'gtceu:olivine_dust', chance: 0.2 }, { output: 'minecraft:iron_nugget', chance: 0.4 }, { output: 'gtceu:calcite_dust', chance: 0.4 }], 250],
        ['minecraft:granite', [{ output: 'gtceu:granite_dust', chance: 1 },             { output: 'minecraft:red_sand', chance: 0.4 }, { output: 'create:crushed_raw_copper', chance: 0.4 }, { output: 'minecraft:gold_nugget', chance: 0.2 }], 250],
        ['gtceu:red_granite', [{ output: 'gtceu:granite_red_dust', chance: 1 },         { output: 'create:crushed_raw_aluminum', chance: 0.6 }, { output: 'gtceu:potassium_feldspar_dust', chance: 0.1 }, { output: 'alltheores:aluminum_nugget', chance: 0.3 }], 250],
        ['gtceu:marble', [{ output: 'gtceu:marble_dust', chance: 1 },                   { output: 'gtceu:magnesium_dust', chance: 0.2 }, { output: 'gtceu:calcite_dust', chance: 0.4 }, { output: 'alltheores:zinc_nugget', chance: 0.4 }], 250],
        ['minecraft:deepslate', [{ output: 'gtceu:deepslate_dust', chance: 1 },         { output: 'gtceu:silicon_dioxide_dust', chance: 0.1 }, { output: 'gtceu:biotite_dust', chance: 0.7 }, { output: 'alltheores:aluminum_nugget', chance: 0.2 }], 250],
        ['minecraft:blackstone', [{ output: 'gtceu:blackstone_dust', chance: 1 },       { output: 'create:crushed_raw_lead', chance: 0.5 }, { output: 'alltheores:silver_nugget', chance: 0.5 }], 250],
        ['minecraft:mossy_cobblestone', [{ output: 'gtceu:stone_dust', chance: 1 },     { output: 'gtceu:bio_chaff', chance: 0.4 }, { output: 'create:crushed_raw_nickel', chance: 0.2 }, { output: 'alltheores:tin_nugget', chance: 0.4 }], 250],
        ['create:scorchia', [{ output: 'gtceu:stone_dust', chance: 1 },                 { output: 'create:crushed_raw_lead', chance: 0.6 }, { output: 'alltheores:lead_nugget', chance: 0.4 }], 250],
        ['create:scoria', [{ output: 'gtceu:stone_dust', chance: 1 },                   { output: 'create:crushed_raw_silver', chance: 0.4 }, { output: 'alltheores:tin_nugget', chance: 0.6 }], 250],

        ['tconstruct:earth_slime_crystal_block', [{ output: 'gtceu:malachite_dust',          chance: 0.4 }, { output: 'create:crushed_raw_nickel',    chance: 0.3 }, { output: 'alltheores:zinc_nugget',     chance: 0.3 }], 250],
        ['tconstruct:sky_slime_crystal_block',   [{ output: 'gtceu:lapis_dust',              chance: 0.2 }, { output: 'create:crushed_raw_silver',   chance: 0.4 }, { output: 'alltheores:aluminum_nugget', chance: 0.4 }], 250],
        ['tconstruct:ichor_slime_crystal_block', [{ output: 'minecraft:magma_cream',         chance: 0.3 }, { output: 'minecraft:blaze_powder',      chance: 0.2 }, { output: 'gtceu:sulfur_dust', chance: 0.4 }, { output: 'minecraft:gold_nugget', chance: 0.1 }], 250],
        ['tconstruct:ender_slime_crystal_block', [{ output: 'gtceu:ender_pearl_dust',        chance: 0.3 }, { output: 'minecraft:chorus_fruit',      chance: 0.4 }, { output: 'create:crushed_raw_platinum', chance: 0.3 }], 250],
        ['ad_astra:moon_stone', [
            { output: 'gtceu:moon_stone_dust', chance: 1 },
            { output: 'alltheores:platinum_dust',  chance: 0.30 },
            { output: 'alltheores:silver_dust',    chance: 0.20 },
            { output: 'alltheores:aluminum_dust',  chance: 0.25 },
            { output: 'gtceu:nether_quartz_dust',         chance: 0.20 },            
            { output: 'alltheores:iridium_nugget', chance: 0.05 } 
        ], 250],
         ['minecraft:prismarine', [
            { output: 'gtceu:prismarine_dust',            chance: 1 },            
            { output: 'gtceu:salt_dust',                  chance: 0.6 },
            { output: 'gtceu:magnesium_dust',             chance: 0.2 },
            { output: 'gtceu:barium_dust',                chance: 0.2 }
        ], 250],
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

    allthemods.custom({
        type: 'create:haunting',
        ingredients: [
            { 'tag': 'forge:hot_ingots/soularium' }
        ],
        results: [
            { 'count': 1, 'item': 'gtceu:hot_blazing_soularium_ingot' }            
        ],
        processingTime: 150
    }).id('gregification:haunting/hot_blazing_soularium')

    allthemods.custom({
        type: 'create:haunting',
        ingredients: [
            { 'tag': 'forge:hot_ingots/energetic_alloy' }
        ],
        results: [
            { 'count': 1, 'item': 'gtceu:hot_blazing_energetic_alloy_ingot' }            
        ],
        processingTime: 150
    }).id('gregification:haunting/hot_blazing_energetic_alloy')

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
