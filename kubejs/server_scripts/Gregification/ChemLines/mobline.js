//@ts-check

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
    const COIL_TEMPS = { CUPRONICKEL: 1800 };

    const addEBF = (itemsIn, fluidIn, itemsOut, fluidOut, temp, duration, eu, program, rID) => {
        let recipe = allthemods.recipes.gtceu.electric_blast_furnace(`gregification:mob_chemline/${rID}_blasting`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .blastFurnaceTemp(temp)
            .duration(duration)
            .EUt(eu);
        if (program) { recipe.circuit(program); }
        if (fluidIn) { recipe.inputFluids(fluidIn); }
        if (fluidOut) { recipe.outputFluids(fluidOut); }
    };

    addEBF('32x #forge:bones', null, 'gtceu:tricalcium_phosphate_dust', null,
        COIL_TEMPS.CUPRONICKEL, 200, HV, null, 'bone_ash');

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/phosphoric_acid_digestion')
        .itemInputs('#forge:dusts/tricalcium_phosphate')
        .inputFluids('#forge:sulfuric_acid 3000', 'minecraft:water 6000')
        .itemOutputs('3x gtceu:gypsum_dust')
        .outputFluids('gtceu:phosphoric_acid 2000')
        .duration(200)
        .EUt(HV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/ammonia_hydrolysis')
        .itemInputs('32x #forge:dusts/sodium_hydroxide')
        .inputFluids('#forge:rotten_flesh 4608', 'minecraft:water 32000')
        .itemOutputs('16x gtceu:soda_ash_dust')
        .outputFluids('gtceu:ammonia 32000', 'gtceu:oxygen 16000')
        .duration(400)
        .EUt(HV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/sulfide_fusion_cloth')
        .itemInputs('32x eidolon:tattered_cloth', '32x #forge:dusts/sodium_hydroxide')
        .itemOutputs('16x gtceu:sodium_sulfide_dust')
        .outputFluids('minecraft:water 16000', 'gtceu:oxygen 16000')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/sulfide_fusion_spider_eyes')
        .itemInputs('32x minecraft:spider_eye', '32x #forge:dusts/sodium_hydroxide')
        .itemOutputs('16x gtceu:sodium_sulfide_dust')
        .outputFluids('minecraft:water 16000', 'gtceu:oxygen 16000')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/hydrogen_sulfide_release')
        .itemInputs('16x #forge:dusts/sodium_sulfide')
        .inputFluids('#forge:hydrochloric_acid 32000')
        .itemOutputs('32x gtceu:salt_dust')
        .outputFluids('gtceu:hydrogen_sulfide 16000')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/sulfur_from_hydrogen_sulfide')
        .inputFluids('#forge:hydrogen_sulfide 16000', '#forge:oxygen 16000')
        .itemOutputs('16x gtceu:sulfur_dust')
        .outputFluids('minecraft:water 16000')
        .duration(300)
        .EUt(MV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/gypsum_decomposition')
        .itemInputs('2x #forge:dusts/gypsum', '2x #forge:dusts/silicon_dioxide')
        .itemOutputs('2x gtceu:wollastonite_dust')
        .outputFluids('gtceu:sulfur_trioxide 2000', 'minecraft:water 4000')
        .duration(400)
        .EUt(EV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/hydrofluoric_acid_from_fluorite')
        .itemInputs('#forge:dusts/fluorite')
        .inputFluids('#forge:sulfuric_acid 1000', 'minecraft:water 2000')
        .itemOutputs('gtceu:gypsum_dust')
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .duration(200)
        .EUt(HV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:mob_chemline/pearl_oxidation')
        .itemInputs('16x #forge:dusts/ender_pearl')
        .inputFluids('#forge:oxygen 208000')
        .itemOutputs('64x gtceu:saltpeter_dust', '16x gtceu:beryllium_oxide_dust')
        .outputFluids('gtceu:nitrogen 16000')
        .duration(600)
        .EUt(EV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mob_chemline/nitric_acid_from_saltpeter')
        .itemInputs('64x #forge:dusts/saltpeter')
        .inputFluids('#forge:sulfuric_acid 32000')
        .itemOutputs('32x gtceu:potassium_sulfate_dust')
        .outputFluids('gtceu:nitric_acid 64000')
        .duration(400)
        .EUt(EV);
});