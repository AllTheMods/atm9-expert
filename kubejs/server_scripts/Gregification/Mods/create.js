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

    
    

})
