// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    // --- Strontium Chain ---
    const StrontiumEUSimple = HV;
    const StrontiumEUComplex = LuV;
    // Step 1: Blast Furnace
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:strontium_sulfide_smelting')
        .itemInputs('#forge:dusts/celestite', '#forge:dusts/carbon')
        .itemOutputs('gtceu:strontium_sulfide_dust')
        .outputFluids('gtceu:carbon_tetroxide')
        .blastFurnaceTemp(2500)
        .duration(300).EUt(StrontiumEUComplex);

    // Step 2: Large Chemical Reactor
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:strontium_carbonate_reaction')
        .itemInputs('#forge:dusts/strontium_sulfide', '#forge:dusts/soda_ash')
        .itemOutputs('gtceu:strontium_carbonate_dust', 'gtceu:sodium_sulfide_dust')
        .duration(200).EUt(StrontiumEUComplex); 

    // Step 3: Chemical Reactor
    allthemods.recipes.gtceu.chemical_bath('gregification:strontium_chloride_conversion')
        .itemInputs('#forge:dusts/strontium_carbonate')
        .inputFluids('#forge:hydrochloric_acid 2000')
        .itemOutputs('gtceu:strontium_chloride_dust')
        .outputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000')
        .duration(200).EUt(StrontiumEUComplex); 
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
