ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.recipes.gtceu.hydro_electromagnetic_separator('gregificatoion:tenebrium_separation')
        .itemInputs('#forge:dusts/bedrockium')
        .inputFluids('gtceu:water_stage_6 100')
        .chancedOutput('gtceu:tenebrium_dust', 5000, 500)
        .duration(400)
        .EUt(UV);
});