// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    

    const addLatex = (itemsIn, itemOut, fluidIn, fluidOut, eu, duration, program) => {
        let outputID = '';

        if (itemOut) {
            let raw = typeof itemOut === 'string' ? itemOut : itemOut.getId();
            outputID = raw.replace(/^\d+x\s*/, '').replace(/[^a-z0-9]/gi, '_');
        } else if (fluidOut) {
            let raw = fluidOut.replace(/^\d+x\s*/, '').split(' ')[0];
            outputID = raw.replace(/[^a-z0-9]/gi, '_');
        } else {
            outputID = 'latex_' + Math.floor(Math.random() * 1000);
        }

        if (program) outputID += `_config_${program}`;

        let voltage = eu;

        let recipe = allthemods.recipes.gtceu.latex_synthesizer(`gregification:latex/${outputID}`)
            .duration(duration)
            .EUt(voltage);

        if (program) {
            recipe.circuit(program);
        }


        if (itemsIn) recipe.itemInputs(itemsIn);
        if (fluidIn) recipe.inputFluids(fluidIn);
        if (itemOut) recipe.itemOutputs(itemOut);
        if (fluidOut) recipe.outputFluids(fluidOut);
    };

    //latex
    addLatex(
        '#minecraft:logs',
        '80x industrialforegoing:tinydryrubber',
        'minecraft:water 40000',
        null,
        HV,
        200,
        1
    );

    //logs
    addLatex(
        '#minecraft:logs',
        null,
        'minecraft:water 60000',
        'industrialforegoing:latex 60000',
        HV,
        800,
        2
    );
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
