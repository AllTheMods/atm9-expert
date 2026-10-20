ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
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

    allthemods.recipes.gtceu.assembler('gregification:crafting/steam_engine')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:mv_electric_pump', '2x #gtceu:circuits/mv', 'create:copper_casing', '4x forbidden_arcanus:spawner_scrap')        
        .inputFluids('#forge:soldering_alloy 288')
        .itemOutputs('create:steam_engine')
        .duration(600)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:crafting/blaze_burner')
        .itemInputs('gtceu:mv_machine_hull', '6x #forge:plates/steel', 'reliquary:molten_core', 'gtceu:cupronickel_coil_block')
        .inputFluids('#forge:soldering_alloy 288')
        .itemOutputs('create:blaze_burner')
        .duration(300)
        .EUt(MV);
    
    allthemods.shapeless('gtceu:andesite_alloy_dust', ['4x #forge:dusts/andesite', '4x #forge:dusts/zinc']).id('gregification:andesite_alloy_dust');    

})
