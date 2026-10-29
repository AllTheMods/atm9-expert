// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//@ts-check
const rodMetals = ['iron', 'gold', 'copper', 'tin', 'lead', 'silver', 'nickel', 'aluminum', 'zinc', 'osmium', 'steel', 'brass' ];
const rodMetalsATM = [ 'allthemodium', 'vibranium', 'unobtainium' ];

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA



    const addCentrifugeChanced = (itemsIn, fluidIn, itemsOut, chancedItems, fluidOut, eu, duration, ID) => {
        // Generate a base ID using the first item of the guaranteed outputs
        const baseName = itemsOut.length > 0 ? itemsOut[0].split(':')[1] : 'processing';
        //const outputID = baseName.replace(/[^a-z0-9]/gi, '_');
        
        let recipe = allthemods.recipes.gtceu.centrifuge(`allthemods:centrifuge/${ID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);

        // Add chanced outputs: [item, chance, bonusChance]
        chancedItems.forEach(chanced => {
            recipe.chancedOutput(chanced[0], chanced[1], chanced[2] || 0);
        });

        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
        if (fluidOut) {
            recipe.outputFluids(fluidOut);
        }
    };
        	
	rodMetals.forEach(metal => {
        allthemods.custom({
            "type": "thermal:press",
            "ingredients": [
                { "tag": `forge:ingots/${metal}` },
                { "item": "thermal_extra:press_rod_die" } 
            ],
            "result": [
                { "item": `alltheores:${metal}_rod` }
            ],
            "energy": 6000
        }).id(`gregification:thermal/press/${metal}_rod`);
    });
    
    rodMetalsATM.forEach(metal => {
        allthemods.custom({
            "type": "thermal:press",
            "ingredients": [
                { "tag": `forge:ingots/${metal}` },
                { "item": "thermal_extra:press_rod_die" } 
            ],
            "result": [
                { "item": `allthemodium:${metal}_rod` }
            ],
            "energy": 6000
        }).id(`gregification:thermal/press/${metal}_rod`);
    });

    addCentrifugeChanced(
        ['4x thermal:oil_sand'],      // Guaranteed Input
        null,                              // Fluid In
        [],          // Guaranteed Output
        [
            ['minecraft:sand', 8500], // 85% chance (in basis points)
            ['gtceu:sulfur_dust', 1000, 500], // 10% base, 5% bonus
            ['minecraft:gunpowder', 1000, 500], // 10% base, 5% bonus
            ['thermal:bitumen', 1000, 500], // 10% base, 5% bonus
            ['gtceu:carbon_dust', 1000, 500], // 10% base, 5% bonus
        ],
        'gtceu:oil 1000',                              // Fluid Out
        MV,                                // EUt
        1200,                                // duration
        'bituminous_sand_processing'
    );

   
    
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
