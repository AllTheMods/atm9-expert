// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.recipes.gtceu.extractor('gregification:menril_from_plank')
        .itemInputs('integrateddynamics:menril_planks')
        .outputFluids('integrateddynamics:menril_resin 250')
        .duration(150)
        .EUt(MV);
    allthemods.recipes.gtceu.extractor('gregification:menril_from_logs')
        .itemInputs('integrateddynamics:menril_log')
        .outputFluids('integrateddynamics:menril_resin 1000')
        .duration(150)
        .EUt(MV);
        
    ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'].forEach(color => {
        allthemods.recipes.gtceu.extractor(`gregification:petal_from_${color}_flower`)
            .itemInputs(`botania:${color}_mystical_flower`)
            .itemOutputs(`4x botania:${color}_petal`)
            .duration(150)
            .EUt(MV);

        allthemods.recipes.gtceu.extractor(`gregification:petal_from_${color}_flower`)
            .itemInputs(`botania:${color}_double_flower`)
            .itemOutputs(`8x botania:${color}_petal`)
            .duration(150)
            .EUt(MV);
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
