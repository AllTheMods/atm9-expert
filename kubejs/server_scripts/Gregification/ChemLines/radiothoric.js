ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const RadioEUSimple = HV;
    const RadioEUComplex = LuV;
    // --- Radioactive Chain ---

    // Step 1: Chemical Bath
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:radio_thoric_leaching')
        .itemInputs('#forge:dusts/radio_thoric_phosphate')
        .inputFluids('#forge:acetic_acid 12000', '#forge:dissolved_calcium_acetate 6000')
        .itemOutputs('2x gtceu:tricalcium_phosphate_dust')
        .outputFluids('gtceu:radioactive_acetate_slurry 3000')
        .duration(400).EUt(RadioEUComplex); // ZPM Tier

    // Step 2: Centrifuge
    allthemods.recipes.gtceu.centrifuge('gregification:radioactive_slurry_separation')
        .inputFluids('#forge:radioactive_acetate_slurry 3000')
        .outputFluids('gtceu:mixed_radioactive_concentrate 1000', 'gtceu:diluted_acetic_acid 2000')
        .duration(300).EUt(RadioEUComplex); // ZPM Tier

    // Step 3: Distillation Tower
    allthemods.recipes.gtceu.distillation_tower('gregification:radioactive_fractionation')
        .inputFluids('#forge:mixed_radioactive_concentrate 2000')
        .outputFluids(
            'gtceu:radium_acetate 600',
            'gtceu:astatine_acetate 600',
            'gtceu:francium_acetate 600',
            'gtceu:thorium_phosphate_solution 200' // Moved here as a fluid
        )
        .duration(600).EUt(RadioEUComplex); // UV Tier

        // 1. DECOMPOSE THE 3 ACTETATES INTO DILUTED ACETIC ACID
    // Radium Acetate -> Diluted Acetic Acid + Radium Dust
    allthemods.recipes.gtceu.centrifuge('gregification:decompose_radium_acetate')
        .inputFluids('#forge:radium_acetate 3000', '#forge:oxygen 3000')
        .outputFluids('gtceu:diluted_acetic_acid 3000', 'gtceu:carbon_monoxide 6000')
        .itemOutputs('3x gtceu:radium_dust')
        .duration(200).EUt(RadioEUComplex);        

    // Astatine Acetate -> Diluted Acetic Acid + Astatine Dust
    allthemods.recipes.gtceu.centrifuge('gregification:decompose_astatine_acetate')
        .inputFluids('#forge:astatine_acetate 3000', '#forge:oxygen 3000')
        .outputFluids('gtceu:diluted_acetic_acid 3000', 'gtceu:carbon_monoxide 6000')
        .itemOutputs('3x gtceu:astatine_dust')
        .duration(200).EUt(RadioEUComplex);

    // Francium Acetate -> Diluted Acetic Acid + Francium Dust
    allthemods.recipes.gtceu.centrifuge('gregification:decompose_francium_acetate')
        .inputFluids('#forge:francium_acetate 3000', '#forge:oxygen 3000')
        .outputFluids('gtceu:diluted_acetic_acid 3000', 'gtceu:carbon_monoxide 6000')
        .itemOutputs('3x gtceu:francium_dust')
        .duration(200).EUt(RadioEUComplex);


    // RECIPE 1: Output Pure Acetic Acid only (Circuit 1)
    allthemods.recipes.gtceu.distillery('gregification:distill_acetic_acid_only')
        .inputFluids('#forge:diluted_acetic_acid 80')
        .circuit(1)                           // Uses Integrated Circuit 1
        .outputFluids('gtceu:acetic_acid 60') // Only outputs the acid
        .duration(160)
        .EUt(RadioEUSimple);

    // RECIPE 2: Output Water only (Circuit 2)
    allthemods.recipes.gtceu.distillery('gregification:distill_water_only')
        .inputFluids('#forge:diluted_acetic_acid 80')
        .circuit(2)                           // Uses Integrated Circuit 2
        .outputFluids('minecraft:water 20')       // Only outputs the water
        .duration(160)
        .EUt(RadioEUSimple);


    // 3. ELECTROLYZE THE RADIOACTIVE BIORESIDUE (Correct 8-part ratio)
    allthemods.recipes.gtceu.electrolyzer('gregification:electrolyze_thorium_phosphate_solution')
        .itemInputs('7x #forge:dusts/carbon')
        .inputFluids('#forge:thorium_phosphate_solution 8000')
        .itemOutputs('2x gtceu:protactinium_dust', '6x gtceu:thorium_dust', '4x gtceu:phosphorus_pentoxide_dust')
        .outputFluids('gtceu:carbon_tetroxide 7000')
        .duration(400).EUt(RadioEUComplex);
});
