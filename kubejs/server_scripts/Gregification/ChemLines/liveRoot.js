// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const liverootDuration = 1200;
    const liverootDurationShort = 400;
    const liverootEut = MV;
    const liverootCoilTemp = 1800;

    allthemods.recipes.gtceu.mixer('gregification:liveroot/extraction')
        .itemInputs('8x twilightforest:liveroot')
        .inputFluids('minecraft:water 4000')
        .itemOutputs('8x gtceu:extracted_liveroot_dust')
        .outputFluids('gtceu:liveroot_extract 1000')
        .duration(liverootDurationShort)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.distillation_tower('gregification:liveroot/extract_distillation')
        .inputFluids('#forge:liveroot_extract 1000')
        .outputFluids('gtceu:pinene 4000', 'minecraft:water 4000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:liveroot/kraft_cook')
        .itemInputs('8x gtceu:extracted_liveroot_dust', '10x #forge:dusts/sodium_hydroxide', '2x #forge:dusts/sodium_sulfide')
        .inputFluids('minecraft:water 5000')
        .itemOutputs('15x gtceu:cellulose_pulp_dust')
        .outputFluids('gtceu:black_liquor 2000', 'gtceu:methanol 4000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:liveroot/tall_oil_acidification')
        .inputFluids('#forge:black_liquor 2000', '#forge:sulfuric_acid 1000')
        .itemOutputs('3x gtceu:sodium_sulfate_dust')
        .outputFluids('gtceu:crude_tall_oil 1000', 'gtceu:desoaped_black_liquor 2000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.distillation_tower('gregification:liveroot/tall_oil_distillation')
        .inputFluids('#forge:crude_tall_oil 1000')
        .itemOutputs('forestry:bitumen_bit')
        .outputFluids('gtceu:tall_oil_fatty_acid 1000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:liveroot/fatty_acid_hydrogenation')
        .inputFluids('#forge:tall_oil_fatty_acid 1000', '#forge:hydrogen 2000')
        .notConsumable('#forge:dusts/nickel')
        .itemOutputs('gtceu:stearic_acid_dust')
        .duration(liverootDurationShort)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:liveroot/lignin_precipitation')
        .inputFluids('#forge:desoaped_black_liquor 2000', '#forge:sulfuric_acid 2000')
        .itemOutputs('2x gtceu:lignin_dust')
        .outputFluids('gtceu:spent_liquor 2000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:liveroot/lignin_hydrogenolysis')
        .itemInputs('2x #forge:dusts/lignin')
        .inputFluids('#forge:hydrogen 24000')
        .notConsumable('#forge:dusts/cobalt')
        .outputFluids('gtceu:phenol 2000', 'gtceu:methane 6000', 'minecraft:water 4000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:liveroot/liquor_burning')
        .inputFluids('#forge:spent_liquor 2000')
        .itemOutputs('2x gtceu:soda_ash_dust', '2x gtceu:sodium_sulfide_dust')
        .blastFurnaceTemp(liverootCoilTemp)
        .duration(liverootDurationShort)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:liveroot/causticizing')
        .itemInputs('2x #forge:dusts/soda_ash', '2x #forge:dusts/calcium_hydroxide')
        .itemOutputs('4x gtceu:sodium_hydroxide_dust', '2x gtceu:calcium_carbonate_dust')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:liveroot/lime_kiln')
        .itemInputs('2x #forge:dusts/calcium_carbonate')
        .itemOutputs('2x gtceu:quicklime_dust')
        .outputFluids('gtceu:carbon_dioxide 2000')
        .blastFurnaceTemp(liverootCoilTemp)
        .duration(liverootDurationShort)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:liveroot/cellulose_hydrolysis')
        .itemInputs('8x #forge:dusts/cellulose_pulp')
        .inputFluids('minecraft:water 4000')
        .notConsumableFluid('#forge:sulfuric_acid 1000')
        .itemOutputs('gtceu:hydrolysis_residue_dust')
        .outputFluids('gtceu:cellulose_hydrolysate 7000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:liveroot/hydrolysate_fermentation')
        .inputFluids('#forge:cellulose_hydrolysate 1000')
        .outputFluids('gtceu:ethanol 2000', 'gtceu:carbon_dioxide 2000')
        .duration(liverootDurationShort)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.pyrolyse_oven('gregification:liveroot/residue_pyrolysis')
        .itemInputs('16x #forge:dusts/hydrolysis_residue')
        .itemOutputs('8x gtceu:biochar_dust')
        .outputFluids('gtceu:bio_oil 4000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:liveroot/bio_oil_hydrotreating')
        .inputFluids('#forge:bio_oil 1000', '#forge:hydrogen 24000')
        .notConsumable('#forge:dusts/cobalt')
        .notConsumable('#forge:dusts/molybdenum')
        .outputFluids('gtceu:toluene 2000', 'gtceu:xylene 1000', 'minecraft:water 6000')
        .duration(liverootDuration)
        .EUt(liverootEut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:liveroot/biochar_activation')
        .itemInputs('8x #forge:dusts/biochar', '4x #forge:dusts/potassium_hydroxide')
        .itemOutputs('6x gtceu:activated_carbon_dust', '2x gtceu:potash_dust')
        .outputFluids('minecraft:water 6000')
        .duration(liverootDuration)
        .EUt(liverootEut);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.