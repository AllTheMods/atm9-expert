ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.recipes.gtceu.extractor('gregification:menril_from_plank')
        .itemInputs('integrateddynamics:menril_planks')
        .outputFluids('integrateddynamics:menril_resin 250')
        .duration(150)
        .EUt(MV)
    allthemods.recipes.gtceu.extractor('gregification:menril_from_logs')
        .itemInputs('integrateddynamics:menril_log')
        .outputFluids('integrateddynamics:menril_resin 1000')
        .duration(150)
        .EUt(MV)
});