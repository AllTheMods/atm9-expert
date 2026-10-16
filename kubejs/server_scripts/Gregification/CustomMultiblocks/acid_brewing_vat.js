ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
    const EUSimple = EV;
    const EUComplex = IV;
    const durationSimple = 200;
    const durationComplex = 400;

    const COIL_TEMPS = {
        CUPRONICKEL: 1800,
        KANTHAL: 2700,
        NICHROME: 3600,
        RTM: 4500,
        HSS_G: 5400,
        NAQUADAH: 7200,
        TRINIUM: 9000,
        TRITANIUM: 10800,
        DRACONIUM: 11200,
        DRACONIUM_AWAKENED: 12800,
        ETRIUM: 13500,
        INFINITY: 15000
    };
        // ---- Recycling (IV) ----
    allthemods.recipes.gtceu.acid_brewing_vat('gregification:acid/recycle_acetic')
        .inputFluids('#forge:diluted_acetic_acid 8000')
        .outputFluids('gtceu:acetic_acid 6000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(IV);

    allthemods.recipes.gtceu.acid_brewing_vat('gregification:acid/recycle_hydrochloric')
        .inputFluids('#forge:diluted_hydrochloric_acid 8000')
        .outputFluids('gtceu:hydrochloric_acid 4000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(IV);

    allthemods.recipes.gtceu.acid_brewing_vat('gregification:acid/recycle_sulfuric')
        .inputFluids('#forge:diluted_sulfuric_acid 12000')
        .outputFluids('gtceu:sulfuric_acid 4000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(IV);

    // ---- Cooking (LuV) ----
    allthemods.recipes.gtceu.acid_brewing_vat('gregification:acid/cook_sulfuric')
        .itemInputs('4x #forge:dusts/sulfur')
        .inputFluids('#forge:oxygen 12000', '#forge:water 4000')
        .outputFluids('gtceu:sulfuric_acid 4000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(LuV);

    allthemods.recipes.gtceu.acid_brewing_vat('gregification:acid/cook_oxalic')
        .inputFluids('#forge:carbon_monoxide 8000', '#forge:oxygen 4000', '#forge:water 4000')
        .outputFluids('gtceu:oxalic_acid 4000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(LuV);

    allthemods.recipes.gtceu.acid_brewing_vat('gregification:acid/cook_hydrofluoric')
        .itemInputs('4x #forge:dusts/fluorite')
        .inputFluids('#forge:sulfuric_acid 4000', '#forge:water 8000')
        .itemOutputs('4x gtceu:gypsum_dust')
        .outputFluids('gtceu:hydrofluoric_acid 8000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(LuV);
});