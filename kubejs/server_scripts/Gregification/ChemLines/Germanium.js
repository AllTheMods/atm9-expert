// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const GermaniumEUSimple = MV;
    const GermaniumEUComplex = LuV; //LuV

    allthemods.recipes.gtceu.chemical_reactor('gregification:soda_ash_via_bisulfate')
        .itemInputs('2x #forge:dusts/sodium_bisulfate')
        .inputFluids('#forge:carbon_tetroxide 1000')
        .itemOutputs('gtceu:soda_ash_dust')
        .outputFluids('gtceu:peroxodisulfuric_acid 1000, gtceu:oxygen 1000')
        .duration(200)
        .EUt(GermaniumEUSimple);

    allthemods.recipes.gtceu.chemical_reactor('gregification:soda_ash_via_solvay')
        .itemInputs('2x #forge:dusts/salt', '1x #forge:dusts/calcite')
        .itemOutputs('gtceu:soda_ash_dust', 'gtceu:calcium_chloride_dust')
        .duration(400)
        .EUt(GermaniumEUSimple);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:peroxodisulfuric_acid_synthesis')
        .itemInputs('1x #forge:dusts/sodium_bisulfate', '#forge:dusts/sodium_hydroxide')
        .inputFluids('#forge:phthalic_acid 1000', '#forge:sulfuric_acid 1000')
        .itemOutputs('1x gtceu:soda_ash_dust', '5x gtceu:carbon_dust')
        .outputFluids('gtceu:peroxodisulfuric_acid 1000', 'gtceu:polyethylene 1000', 'minecraft:water 2000')
        .duration(1200)
        .EUt(GermaniumEUComplex);

    // ==========================================
    // PRECURSOR: CARBON TETROXIDE SYNTHESIS
    // ==========================================
    allthemods.recipes.gtceu.chemical_reactor('gregification:carbon_tetroxide_synthesis')
        .inputFluids('#forge:carbon_monoxide 1000', '#forge:ozone 1000')
        .outputFluids('gtceu:carbon_tetroxide 1000')
        .duration(200).EUt(GermaniumEUComplex);

    // ==========================================
    // 4-STEP GERMANIUM EXTRACTION CHAIN
    // ==========================================

    // Step 1: Hyper-Oxidation
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:germanium_oxidation')
        .itemInputs('#forge:dusts/argyrodite')
        .inputFluids('#forge:carbon_tetroxide 2000', '#forge:oxygen 16000')
        .itemOutputs('gtceu:germanium_sulfate_dust', '2x gtceu:carbon_dust', '4x gtceu:silver_sulfate_dust')
        .duration(300).EUt(GermaniumEUComplex); 

    // Step 2: Carbonate Leaching 
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:germanium_carbonate_leaching')
        .itemInputs('#forge:dusts/germanium_sulfate', '3x #forge:dusts/soda_ash')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('2x gtceu:sodium_sulfate_dust')
        .outputFluids('gtceu:sodium_germanate_solution 1000', 'gtceu:carbon_dioxide 3000')
        .duration(200).EUt(GermaniumEUComplex);

    // Step 3: Acidic Precipitation
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:germanium_precipitation')
        .inputFluids('#forge:sodium_germanate_solution 1000', '#forge:sulfuric_acid 1000')
        .itemOutputs('gtceu:germanium_dioxide_dust', 'gtceu:sodium_sulfate_dust')
        .outputFluids('minecraft:water 2000')
        .duration(200).EUt(GermaniumEUComplex);

    // Step 4: Hydrogen Reduction
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:germanium_reduction')
        .itemInputs('#forge:dusts/germanium_dioxide', '2x #forge:dusts/sodium')
        .inputFluids('#forge:hydrogen 2000')
        .itemOutputs('gtceu:germanium_dust', '2x gtceu:sodium_hydroxide_dust')
        .duration(200).EUt(GermaniumEUComplex);
    
        // Electrolyze the Sodium Sulfate from the Germanium line to recover acid and base
        allthemods.recipes.gtceu.electrolyzer('gregification:sodium_sulfate_recovery')
            .itemInputs('#forge:dusts/sodium_sulfate')
            .inputFluids('minecraft:water 2000')
            .itemOutputs('2x gtceu:sodium_hydroxide_dust')
            .outputFluids('gtceu:sulfuric_acid 1000')
            .duration(300).EUt(GermaniumEUComplex); 

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
