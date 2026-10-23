ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
    const COIL_TEMPS = {
        CUPRONICKEL: 1800,
        KANTHAL: 2700,
        NICHROME: 3600,
        RTM: 4500,
        HSS_G: 5400,
        NAQUADAH: 7200,
        TRINIUM: 9000,
        TRITANIUM: 10800,
        DRACONIUM: 11200,
        DRACONIUM_AWAKENED: 12800,
        ETRIUM: 13500,
        INFINITY: 15000
    };


    const leachEUt = EV;
    const leachDuration = 400;

    const addEBF = (itemsIn, fluidIn, itemsOut, fluidOut, temp, duration, eu, program, rID) => {
        const source = Array.isArray(itemsOut) ? itemsOut[0] : itemsOut;
        const outputID = String(source || 'unknown').replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.electric_blast_furnace(`gregification:blasting/${rID || outputID}_blasting`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .blastFurnaceTemp(temp)
            .duration(duration)
            .EUt(eu);
        if (program) { recipe.circuit(program); }
        if (fluidIn) { recipe.inputFluids(fluidIn); }
        if (fluidOut) { recipe.outputFluids(fluidOut); }
    };

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/mafic_leach')
        .itemInputs('16x #forge:dusts/basalt', '16x #forge:dusts/deepslate', '8x #forge:dusts/olivine')
        .inputFluids('#forge:sulfuric_acid 8000')
        .itemOutputs('12x gtceu:silicon_dioxide_dust')
        .outputFluids('gtceu:silicate_leach_liquor 8000', 'gtceu:diluted_sulfuric_acid 4000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.mixer('gregification:silicate_leach/felsic_lime_mix')
        .itemInputs('16x #forge:dusts/granite_red', '16x #forge:dusts/potassium_feldspar', '8x #forge:dusts/biotite', '24x #forge:dusts/calcite')
        .itemOutputs('64x gtceu:felsic_lime_mix_dust')
        .duration(leachDuration)
        .EUt(leachEUt);

    addEBF('64x gtceu:felsic_lime_mix_dust', null, '48x gtceu:silicate_sinter_dust', 'gtceu:carbon_dioxide 8000',
        COIL_TEMPS.CUPRONICKEL, leachDuration, leachEUt, null, 'silicate_leach_lime_sinter');

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/sinter_acid_leach')
        .itemInputs('48x gtceu:silicate_sinter_dust')
        .inputFluids('#forge:silicate_leach_liquor 8000', '#forge:sulfuric_acid 12000')
        .itemOutputs('20x gtceu:silicon_dioxide_dust', '24x gtceu:gypsum_dust')
        .outputFluids('gtceu:silicate_leach_liquor 16000', 'gtceu:diluted_sulfuric_acid 6000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.vacuum_freezer('gregification:silicate_leach/alum_crystallise')
        .inputFluids('#forge:silicate_leach_liquor 16000')
        .itemOutputs('16x gtceu:potassium_alum_dust')
        .outputFluids('gtceu:alum_mother_liquor 16000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.sifter('gregification:silicate_leach/sift_alum')
        .itemInputs('16x gtceu:potassium_alum_dust')
        .itemOutputs('10x gtceu:potassium_dust', '6x gtceu:crude_rubidium_caesium_alum_dust')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/alum_dissolve')
        .itemInputs('6x gtceu:crude_rubidium_caesium_alum_dust')
        .inputFluids('minecraft:water 8000')
        .outputFluids('gtceu:alum_solution 8000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.vacuum_freezer('gregification:silicate_leach/alum_recrystallise')
        .inputFluids('#forge:alum_solution 8000')
        .itemOutputs('5x gtceu:refined_rubidium_caesium_alum_dust')
        .outputFluids('minecraft:water 8000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.sifter('gregification:silicate_leach/sift_refined_alum')
        .itemInputs('5x gtceu:refined_rubidium_caesium_alum_dust')
        .itemOutputs('12x gtceu:rubidium_dust')
        .chancedOutput('gtceu:caesium_dust', 5000, 500)
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/iron_titanium')
        .itemInputs('16x #forge:dusts/calcite')
        .inputFluids('#forge:alum_mother_liquor 16000', '#forge:oxygen 2000')
        .itemOutputs('12x gtceu:iron_dust', '1x gtceu:titanium_dust', '16x gtceu:gypsum_dust')
        .outputFluids('gtceu:iron_free_liquor 16000', 'gtceu:carbon_dioxide 8000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/vanadium')
        .inputFluids('#forge:iron_free_liquor 16000', '#forge:ammonia 2000')
        .itemOutputs('13x gtceu:vanadium_dust')
        .outputFluids('gtceu:vanadium_free_liquor 16000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/aluminium_gallium')
        .itemInputs('16x #forge:dusts/calcite')
        .inputFluids('#forge:vanadium_free_liquor 16000')
        .itemOutputs('17x gtceu:aluminium_dust', '1x gtceu:gallium_dust', '16x gtceu:gypsum_dust')
        .outputFluids('gtceu:aluminium_free_liquor 16000', 'gtceu:carbon_dioxide 4000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/rare_earths')
        .itemInputs('8x #forge:dusts/calcite')
        .inputFluids('#forge:aluminium_free_liquor 16000', '#forge:phosphoric_acid 2000', '#forge:hydrofluoric_acid 1000')
        .itemOutputs('4x gtceu:monazite_dust', '3x gtceu:bastnasite_dust')
        .chancedOutput('gtceu:thorium_dust', 3000, 500)
        .outputFluids('gtceu:rare_earth_free_liquor 16000', 'gtceu:calcium_fluoride 1000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/nickel_cobalt_zinc')
        .itemInputs('24x #forge:dusts/calcium_hydroxide')
        .inputFluids('#forge:rare_earth_free_liquor 16000')
        .itemOutputs('15x gtceu:nickel_dust', '2x gtceu:cobalt_dust', '7x gtceu:zinc_dust')
        .outputFluids('gtceu:magnesium_brine 16000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/magnesium')
        .itemInputs('12x #forge:dusts/calcium_hydroxide', '6x #forge:dusts/sodium_hydroxide')
        .inputFluids('#forge:magnesium_brine 16000')
        .itemOutputs('11x gtceu:magnesium_dust', '12x gtceu:gypsum_dust')
        .outputFluids('gtceu:lithium_brine 16000')
        .duration(leachDuration)
        .EUt(leachEUt);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:silicate_leach/calcium_lithium')
        .itemInputs('8x #forge:dusts/soda_ash')
        .inputFluids('#forge:lithium_brine 16000')
        .itemOutputs('8x gtceu:calcite_dust', '4x gtceu:lithium_dust', '8x gtceu:sodium_sulfate_dust')
        .outputFluids('minecraft:water 12000')
        .duration(leachDuration)
        .EUt(leachEUt);
});