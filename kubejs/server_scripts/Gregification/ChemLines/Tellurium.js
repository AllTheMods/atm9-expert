// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const TelluriumEUSimple = HV;
    const TelluriumEUComplex = LuV;

    // --- Tellurium Chain ---

    // Step 1: Blast Furnace
    allthemods.recipes.gtceu.electric_blast_furnace('gregification:calaverite_roasting')
        .itemInputs('3x #forge:dusts/calaverite', '6x #forge:dusts/soda_ash')
        .inputFluids('#forge:oxygen 6000')
        .itemOutputs('6x gtceu:sodium_tellurite_dust', '3x minecraft:gold_ingot')
        .outputFluids('gtceu:carbon_monoxide 6000')
        .blastFurnaceTemp(7200)
        .duration(200)
        .EUt(TelluriumEUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:kurilite_roasting')
        .itemInputs('#forge:dusts/kurilite', '3x #forge:dusts/soda_ash')
        .inputFluids('#forge:sulfuric_acid 4000')
        .itemOutputs('3x gtceu:sodium_tellurite_dust', '4x gtceu:silver_sulfate_dust')
        .outputFluids('gtceu:hydrogen_selenide 1000, gtceu:propene 1000')
        .blastFurnaceTemp(7200)
        .duration(200)
        .EUt(TelluriumEUComplex);

    // Step 2: Chemical Bath
    allthemods.recipes.gtceu.chemical_bath('gregification:sodium_tellurite_leaching')
        .itemInputs('6x #forge:dusts/sodium_tellurite')
        .inputFluids('#forge:sulfuric_acid 6000')
        .itemOutputs('6x gtceu:sodium_sulfate_dust')
        .outputFluids('gtceu:tellurous_acid 6000')
        .duration(150).EUt(TelluriumEUComplex);

    // Step 3: Centrifuge
    allthemods.recipes.gtceu.centrifuge('gregification:tellurous_acid_separation')
        .inputFluids('#forge:tellurous_acid 4000')
        .itemOutputs('4x gtceu:tellurium_dioxide_dust')
        .outputFluids('minecraft:water 4000')
        .duration(200)
        .EUt(TelluriumEUComplex);


    // Step 4: Large Chemical Reactor
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sodium_tellurite_solution')
        .itemInputs('3x #forge:dusts/tellurium_dioxide', '6x #forge:dusts/sodium_hydroxide')
        .outputFluids('gtceu:sodium_tellurite_solution 3000', 'minecraft:water 3000')
        .duration(150)
        .EUt(TelluriumEUComplex);

    // Step 5: Electrolyzer
    allthemods.recipes.gtceu.chemical_reactor('gregification:tellurium_recovery')
        .inputFluids('#forge:sodium_tellurite_solution 2000', 'gtceu:acetic_acid 1000') 
        .outputFluids('gtceu:carbon_dioxide 2000')
        .itemOutputs('2x gtceu:tellurium_dust', '4x gtceu:sodium_hydroxide_dust')
        .duration(300).EUt(TelluriumEUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:telluride_roasting')
        .itemInputs('2x #forge:dusts/telluride', '2x #forge:dusts/soda_ash')
        .inputFluids('#forge:oxygen 4000')
        .itemOutputs('2x gtceu:sodium_tellurite_dust', '2x #forge:ingots/silver')
        .outputFluids('gtceu:carbon_dioxide 2000') // Matches your Calaverite gas output convention
        .blastFurnaceTemp(7200)
        .duration(200)
        .EUt(TelluriumEUComplex);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
