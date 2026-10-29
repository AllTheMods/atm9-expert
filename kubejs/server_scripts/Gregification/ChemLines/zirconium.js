// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;
    const zEU = ZPM;
    const zEU2 = IV;
    // Recipe 1: Zircon Roasting
    // Converts Zircon and Quicklime into Calcium Zirconate and Wollastonite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:zircon_roasting')
        .itemInputs('6x #forge:dusts/zircon', '12x #forge:dusts/quicklime')
        .itemOutputs('6x gtceu:calcium_zirconate_dust', '6x gtceu:wollastonite_dust')
        .duration(400)
        .EUt(zEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:baddeleyite_roasting')
        .itemInputs('6x #forge:dusts/baddeleyite', '4x #forge:dusts/gypsum', '2x #forge:dusts/quicklime')
        .itemOutputs('6x gtceu:calcium_zirconate_dust')
        .outputFluids('gtceu:sulfur_trioxide 4000')
        .duration(400)
        .EUt(zEU);

    // Recipe 2: Acid Digestion (Mass Balanced)    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:acid_digestion')
        .itemInputs('2x #forge:dusts/calcium_zirconate')
        .itemOutputs('2x #forge:dusts/quicklime')
        .inputFluids('#forge:hydrofluoric_acid 4000', '#forge:fluorine 8000')
        .outputFluids('gtceu:hexafluorozirconic_acid 2000', 'gtceu:oxygen 4000')
        .duration(400)
        .EUt(zEU);

    // Recipe 3: Alkali Precipitation (5x Batch)    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:alkali_precipitation')
        .inputFluids('#forge:hexafluorozirconic_acid 1000')
        .itemInputs('2x #forge:dusts/potassium_hydroxide')
        .itemOutputs('gtceu:potassium_hexafluorozirconate_dust')
        .outputFluids('minecraft:water 2000')
        .duration(400)
        .EUt(zEU);

    // Recipe 4: Final Zirconium Reduction (5x Batch)
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:zirconium_reduction')
        .itemInputs('#forge:dusts/potassium_hexafluorozirconate', '2x #forge:dusts/calcium')
        .itemOutputs('gtceu:zirconium_dust', '2x gtceu:potassium_fluoride_dust', '2x gtceu:calcium_fluoride_dust')
        .duration(400)
        .EUt(zEU);

    // Recipe 5: Acid Recovery (Base Ratio)
    // Reacts 1x Calcium Fluoride with 1x Sulfuric Acid
    allthemods.recipes.gtceu.chemical_reactor('gregification:acid_recovery')
        .itemInputs('2x #forge:dusts/calcium_fluoride')
        .inputFluids('#forge:sulfuric_acid 2000')
        .itemOutputs('2x gtceu:gypsum_dust')
        .outputFluids('gtceu:hydrofluoric_acid 4000')
        .duration(400)
        .EUt(zEU2);

    // Recipe 6: Potassium Recovery
    // Converts Potassium Fluoride back into Potassium Hydroxide
    allthemods.recipes.gtceu.chemical_reactor('gregification:potassium_recovery')
        .itemInputs('2x #forge:dusts/potassium_fluoride', '#forge:dusts/calcium_hydroxide')
        .itemOutputs('2x gtceu:potassium_hydroxide_dust', 'gtceu:calcium_fluoride_dust')
        .duration(400)
        .EUt(zEU2);

    // Recipe 7: Calcium Sulfide Production
    // Converts Gypsum and Carbon into Calcium Sulfide
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:calcium_sulfide_production')
        .itemInputs('#forge:dusts/gypsum', '4x #forge:dusts/carbon')
        .itemOutputs('gtceu:calcium_sulfide_dust')
        .outputFluids('gtceu:carbon_monoxide 4000')
        .duration(400)
        .EUt(zEU2); // Using your lower EU tier for this reagent step

    // Recipe 8: Potassium Calcium Silicate Synthesis
    // Mixes Wollastonite and Potassium Fluoride to create the silicate precursor
    allthemods.recipes.gtceu.mixer('gregification:potassium_calcium_silicate_synthesis')
        .itemInputs('#forge:dusts/wollastonite', '#forge:dusts/potassium_fluoride')
        .itemOutputs('gtceu:potassium_calcium_silicate_dust')
        .duration(400)
        .EUt(zEU2);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sodium_sulfide_synthesis')
        .itemInputs('#forge:dusts/sodium_sulfate', '4x #forge:dusts/carbon')
        .itemOutputs('gtceu:sodium_sulfide_dust')
        .outputFluids('gtceu:carbon_monoxide 4000')
        .duration(400)
        .EUt(zEU2);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:phosphorus_pentoxide_synthesis')
        .itemInputs('#forge:dusts/tricalcium_phosphate')
        .inputFluids('#forge:carbon_monoxide 3000', '#forge:oxygen 3000')
        .itemOutputs('3x gtceu:calcite_dust', 'gtceu:phosphorus_pentoxide_dust')
        .duration(400)
        .EUt(zEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:fluorozirconic_composite')
        .itemInputs('#forge:dusts/potassium_hexafluorozirconate', '#forge:dusts/calcium_fluoride', '2x #forge:dusts/carbon')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:fluorozirconic_composite 1000', 'gtceu:hydrogen 2000')
        .itemOutputs('2x gtceu:potassium_fluoride_dust', 'gtceu:calcium_hydroxide_dust')
        .duration(400)
        .EUt(131072); // ZPM Tier

    allthemods.recipes.gtceu.mixer('gregification:rheni_zirconium_alloy')
        .itemInputs('#forge:dusts/zirconium', '4x #forge:dusts/rhenium_nickel_alloy')
        .itemOutputs('5x gtceu:rheni_zirconium_alloy_dust')
        .duration(400)
        .EUt(zEU2);

    // Primary Production: Wollastonite
    allthemods.recipes.gtceu.chemical_reactor('gregification:wollastonite_primary')
        .itemInputs('#forge:dusts/calcite', '#forge:dusts/silicon_dioxide')
        .itemOutputs('gtceu:wollastonite_dust')
        .outputFluids('gtceu:carbon_dioxide 1000')
        .duration(400)
        .EUt(zEU2);

    // Primary Production: Potassium Fluoride
    allthemods.recipes.gtceu.chemical_reactor('gregification:potassium_fluoride_primary')
        .itemInputs('2x #forge:dusts/potassium_carbonate')
        .inputFluids('#forge:hydrofluoric_acid 4000')
        .itemOutputs('4x gtceu:potassium_fluoride_dust')
        .outputFluids('gtceu:carbon_monoxide 2000', 'gtceu:hydrogen_peroxide 2000')
        .duration(400)
        .EUt(zEU2);

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
