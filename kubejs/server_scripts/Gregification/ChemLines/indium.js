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
    allthemods.recipes.gtceu.industrial_leacher('gregification:indium/sulfation_bake')
        .itemInputs('8x #forge:dusts/sphalerite', '8x #forge:dusts/galena')
        .inputFluids('#forge:sulfuric_acid 8000')
        .outputFluids('gtceu:sulfated_zinc_slurry 16000', 'gtceu:sulfur_dioxide 8000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.dissolution_tank('gregification:indium/water_leach')
        .inputFluids('#forge:sulfated_zinc_slurry 16000', '#forge:water 16000')
        .itemOutputs('8x gtceu:lead_sulfate_cake_dust')
        .outputFluids('gtceu:zinc_indium_liquor 28000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.sifter('gregification:indium/sift_lead_cake')
        .itemInputs('4x gtceu:lead_sulfate_cake_dust')
        .itemOutputs('3x gtceu:lead_dust')
        .chancedOutput('gtceu:silver_dust', 3000, 500)
        .chancedOutput('gtceu:sulfur_dust', 5000, 500)
        .chancedOutput('gtceu:bismuth_dust', 1500, 1000)
        .duration(durationSimple)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:indium/purification')
        .itemInputs('4x #forge:dusts/zinc')
        .inputFluids('#forge:zinc_indium_liquor 28000')
        .itemOutputs('3x gtceu:cadmium_dust')
        .chancedOutput('gtceu:gallium_dust', 2000, 1000)
        .outputFluids('gtceu:purified_indium_liquor 28000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:indium/extraction')
        .inputFluids('#forge:purified_indium_liquor 28000', '#forge:rare_earth_extractant 20000')
        .outputFluids('gtceu:indium_loaded_extractant 20000', 'gtceu:zinc_raffinate 28000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.distillation_tower('gregification:indium/raffinate_terminal')
        .inputFluids('#forge:zinc_raffinate 28000')
        .itemOutputs('8x gtceu:zinc_sulfate_dust')
        .outputFluids('minecraft:water 18000', 'gtceu:oxygen 2000', 'gtceu:diluted_sulfuric_acid 2000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:indium/strip')
        .inputFluids('#forge:indium_loaded_extractant 20000', '#forge:sulfuric_acid 6000')
        .outputFluids('gtceu:indium_concentrate 20000', 'gtceu:rare_earth_extractant 19000')
        .duration(durationComplex)
        .EUt(EUComplex);
});