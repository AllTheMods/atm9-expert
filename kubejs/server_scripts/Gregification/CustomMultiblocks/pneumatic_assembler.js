// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const tempTiers = [1800, 2700, 3600, 4500, 5400, 7200, 9001, 10800];
    const energyTiers = [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ];
    const addPA = (itemsIn, itemOut, tier, program, customID) => {

        let outputID = '';

        if (customID) {
            outputID = customID;
        }
        else if (itemOut) {
            let raw = typeof itemOut === 'string' ? itemOut : itemOut.getId();
            outputID = raw.replace(/^\d+x\s*/, '').replace(/[^a-z0-9]/gi, '_');        
        } else {
            outputID = 'dissolution_' + Math.floor(Math.random() * 1000);
        }
        

        let recipe = allthemods.recipes.gtceu.pneumatic_assembler(`gregification:dissolution/${outputID}`)
            .notConsumable('pneumaticcraft:assembly_program_drill_laser')
            .inputFluids(`#forge:compressed_air ${tier+1}0000`)
            .duration((tier+1)*400)
            .EUt(energyTiers[tier+1])

        // Safety check for inputs
        if (program) recipe.circuit(program);
        if (itemsIn) recipe.itemInputs(itemsIn);
        if (itemOut) recipe.itemOutputs(itemOut);
                
    };

    //advanced pressure tube
    addPA(
        '8x #forge:ingots/compressed_iron',
        '8x pneumaticcraft:advanced_pressure_tube',
        3        
    );

    //aphorism tile
    addPA(
        '#forge:storage_blocks/quartz',
        '4x pneumaticcraft:aphorism_tile',
        3
    );

    //unassembled pcb
    addPA(
        'pneumaticcraft:empty_pcb',
        'pneumaticcraft:unassembled_pcb',
        3
    );

    //solar cell
    addPA(
        'pneumaticcraft:solar_wafer',
        'pneumaticcraft:solar_cell',        
        2
    );

    //netherite drill bit
    addPA(
        'pneumaticcraft:unassembled_netherite_drill_bit',
        'pneumaticcraft:drill_bit_netherite',                
        4
    );

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
