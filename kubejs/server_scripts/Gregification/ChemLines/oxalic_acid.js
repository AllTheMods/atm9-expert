ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
    const EUSimple = EV;
    const EUComplex = IV;
    const durationSimple = 200;
    const durationComplex = 400;

    allthemods.recipes.gtceu.chemical_reactor('gregification:oxalic/sodium_formate')
        .itemInputs('4x #forge:dusts/sodium_hydroxide')
        .inputFluids('#forge:carbon_monoxide 4000')
        .itemOutputs('4x gtceu:sodium_formate_dust')
        .duration(durationComplex)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.chemical_reactor('gregification:oxalic/sodium_oxalate')
        .itemInputs('4x #forge:dusts/sodium_formate')
        .itemOutputs('2x gtceu:sodium_oxalate_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .duration(durationComplex)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.chemical_reactor('gregification:oxalic/oxalic_acid')
        .itemInputs('2x #forge:dusts/sodium_oxalate')
        .inputFluids('#forge:sulfuric_acid 2000')
        .itemOutputs('2x gtceu:sodium_sulfate_dust')
        .outputFluids('gtceu:oxalic_acid 2000')
        .duration(durationComplex)
        .EUt(EUSimple);
});