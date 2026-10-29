// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

  ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;
    const RheniumEUSimple = HV;
    const RheniumEUComplex = LuV; //LuV
    // ==========================================
    // THE 4-STEP RHENIUM EXTRACTION CHAIN
    // ==========================================
    
    // Step 1: Perrhenate Synthesis
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rhenium_perrhenate_synthesis')
        .itemInputs('2x #forge:dusts/rhenite', '#forge:dusts/soda_ash')
        .inputFluids('#forge:peroxodisulfuric_acid 1000', 'gtceu:oxygen 12000')
        .itemOutputs('2x gtceu:sodium_perrhenate_dust')
        .outputFluids('gtceu:carbon_dioxide 1000', 'gtceu:sulfur_dioxide 6000', 'minecraft:water 1000')
        .duration(400).EUt(RheniumEUComplex);

    // Step 2: Acidification
    allthemods.recipes.gtceu.chemical_reactor('gregification:perrhenic_acid_synthesis')
        .itemInputs('#forge:dusts/sodium_perrhenate')
        .inputFluids('#forge:hydrochloric_acid 1000')
        .itemOutputs('1x gtceu:salt_dust')
        .outputFluids('gtceu:perrhenic_acid 1000')
        .duration(200).EUt(RheniumEUComplex); 

    // Step 3: Sulfide Precipitation
    allthemods.recipes.gtceu.chemical_reactor('gregification:rhenium_sulfide_precipitation')
        .inputFluids('#forge:perrhenic_acid 2000', 'gtceu:hydrogen_sulfide 7000')
        .itemOutputs('1x gtceu:rhenium_heptasulfide_dust')
        .outputFluids('minecraft:water 8000')
        .duration(300).EUt(RheniumEUComplex); 

    // Step 4: High-Temp Reduction & Gas Recovery
    allthemods.recipes.gtceu.electric_blast_furnace('gregification:rhenium_reduction')
        .itemInputs('#forge:dusts/rhenium_heptasulfide')
        .inputFluids('#forge:hydrogen 14000')
        .itemOutputs('2x gtceu:rhenium_dust') 
        .outputFluids('gtceu:hydrogen_sulfide 7000')
        .blastFurnaceTemp(3200)
        .duration(600).EUt(RheniumEUComplex); 

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:tarkianite_reaction')
        .itemInputs(['#forge:dusts/tarkianite', '8x #forge:dusts/silicon_dioxide'])
        .inputFluids(['minecraft:water 9000', '#forge:oxygen 23000'])
        .itemOutputs(['gtceu:copper_ii_sulfate_dust', '4x gtceu:molybdenum_disilicide_dust'])
        .outputFluids(['gtceu:perrhenic_acid 4000', 'gtceu:sulfuric_acid 7000'])
        .duration(400).EUt(RheniumEUComplex);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
