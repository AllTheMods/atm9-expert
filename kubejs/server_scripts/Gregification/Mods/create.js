// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
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

    bendPlate('forge:ingots/tin_alloy', 'gtceu:tin_alloy_plate')
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

    allthemods.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: 'forge:dusts/andesite' },
            { tag: 'forge:dusts/andesite' },
            { tag: 'forge:dusts/andesite' },
            { tag: 'forge:dusts/andesite' },
            { tag: 'forge:dusts/iron' },
            { tag: 'forge:dusts/iron' },
            { tag: 'forge:dusts/iron' },
            { tag: 'forge:dusts/iron' }
        ],
        results: [
            { item: 'gtceu:andesite_alloy_dust' }
        ]
    }).id('gregification:mixing/andesite_alloy_dust_iron')

    allthemods.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: 'forge:dusts/andesite' },
            { tag: 'forge:dusts/andesite' },
            { tag: 'forge:dusts/andesite' },
            { tag: 'forge:dusts/andesite' },
            { tag: 'forge:dusts/zinc' },
            { tag: 'forge:dusts/zinc' },
            { tag: 'forge:dusts/zinc' },
            { tag: 'forge:dusts/zinc' }
        ],
        results: [
            { item: 'gtceu:andesite_alloy_dust' }
        ]
    }).id('gregification:mixing/andesite_alloy_dust_zinc')



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



    //without this recipe, you have to use steam age gt to get to andesite alloy, not sure if I should add it or not
    /*allthemods.shapeless('gtceu:andesite_dust', ['#forge:tools/mortars', 'minecraft:andesite'])
        .damageIngredient('#forge:tools/mortars')
        .id('gregification:andesite_dust_from_mortar')*/


    allthemods.recipes.gtceu.assembler('gregification:crafting/steam_engine')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:mv_electric_pump', '2x #gtceu:circuits/mv', 'create:copper_casing', '4x forbidden_arcanus:spawner_scrap')
        .inputFluids('#forge:soldering_alloy 288')
        .itemOutputs('create:steam_engine')
        .duration(600)
        .EUt(MV);

    allthemods.shaped('create:empty_blaze_burner',
        [
            'sps',
            'pSp',
            'sns'
        ],
        {
            s: '#forge:screws/steel',
            p: '#forge:double_plates/steel',
            S: '#gtceu:tools/crafting_screwdrivers',
            n: 'minecraft:netherrack'
        }
    ).id('gregification:create/empty_blaze_burner')

    allthemods.shapeless('gtceu:andesite_alloy_dust', ['4x #forge:dusts/andesite', '4x #forge:dusts/zinc']).id('gregification:andesite_alloy_dust');

    allthemods.shaped('create:mechanical_drill',
        [
            'PCP',
            'PHP',
            'PDP'
        ],
        {
            H: 'gtceu:mv_machine_hull',
            P: '#forge:plates/aluminum',
            C: 'create:andesite_casing',
            D: 'gtceu:vanadium_steel_drill_head'
        }
    ).id('gregification:create/mechanical_drill');

    allthemods.custom({
        type: 'create:mixing',
        ingredients: [            
            { tag: 'forge:dusts/charcoal' },
            { tag: 'forge:dusts/gunpowder' },
            { tag: 'forge:dusts/niter' },
            { item: 'minecraft:glass_bottle' }
        ],
        results: [
            { item: 'minecraft:fire_charge', count: 1 }
        ]
    }).id('gregification:mixing/fire_charge');

    allthemods.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: 'forge:dusts/magma_cream' },
            { fluid: 'minecraft:lava', amount: 1000 }
        ],
        results: [
            { item: 'minecraft:magma_cream' }
        ]
    }).id('gregification:mixing/magma_cream');

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
