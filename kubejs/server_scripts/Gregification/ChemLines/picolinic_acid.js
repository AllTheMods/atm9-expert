// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const EUSimple = HV;
    const duration = 300;
    const EUComplex = UV; //UV Tier
    // Step 1: 2x Acetaldehyde + 2x Formaldehyde + 1x Ammonia -> 1x Picoline + 4x Water
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/picoline')
        .inputFluids('#forge:acetaldehyde 2000', '#forge:formaldehyde 2000', '#forge:ammonia 1000')
        .outputFluids('gtceu:picoline 1000', 'minecraft:water 4000')
        .duration(duration)
        .EUt(EUSimple);

    // Step 2: 2x Picoline + 3x Oxygen + 2x Ammonia -> 2x Cyanopyridine + 6x Water
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/cyanopyridine')
        .inputFluids('#forge:picoline 2000', '#forge:oxygen 6000', '#forge:ammonia 2000')
        .outputFluids('gtceu:cyanopyridine 2000', 'minecraft:water 6000')
        .duration(duration)
        .EUt(EUSimple);

    // Step 3: 1x Cyanopyridine + 2x Water -> 1x Picolinic Acid (Dust) + 1x Ammonia
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/picolinic_acid')
        .itemOutputs('1x gtceu:picolinic_acid_dust')
        .inputFluids('#forge:cyanopyridine 1000', 'minecraft:water 2000')
        .outputFluids('gtceu:ammonia 1000')
        .duration(duration)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.chemical_reactor('allthemods:chemical_reactor/acetaldehyde')
        .inputFluids('#forge:ethanol 1000', '#forge:oxygen 1000')
        .outputFluids('gtceu:acetaldehyde 1000')
        .duration(duration)
        .EUt(EUSimple);

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
