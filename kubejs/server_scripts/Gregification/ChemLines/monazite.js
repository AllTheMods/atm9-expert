ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
    const EUSimple = EV;
    const EUComplex = IV;
    const durationSimple = 200;
    const durationComplex = 400;

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
    
    allthemods.recipes.gtceu.chemical_reactor('gregification:monazite/caustic_solution')
        .itemInputs('24x #forge:dusts/sodium_hydroxide')
        .inputFluids('#forge:water 24000')
        .outputFluids('gtceu:caustic_soda_solution 24000')
        .duration(durationSimple)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.industrial_leacher('gregification:monazite/caustic_crack')
        .itemInputs('64x #forge:dusts/monazite')
        .inputFluids('#forge:caustic_soda_solution 24000')
        .outputFluids('gtceu:monazite_hydroxide_slurry 40000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:monazite/phosphate_wash')
        .inputFluids('#forge:monazite_hydroxide_slurry 40000', '#forge:water 20000')
        .itemOutputs('20x gtceu:monazite_hydroxide_cake_dust')
        .chancedOutput('5x gtceu:monazite_hydroxide_cake_dust', 5000, 500)
        .outputFluids('gtceu:phosphate_liquor 35000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.distillation_tower('gregification:monazite/phosphate_terminal')
        .inputFluids('#forge:phosphate_liquor 35000')
        .itemOutputs('8x gtceu:phosphate_dust')
        .outputFluids('minecraft:water 25000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.dissolution_tank('gregification:monazite/selective_dissolution')
        .inputFluids('#forge:hydrochloric_acid 12000', '#forge:water 25000')
        .itemInputs('20x #forge:dusts/monazite_hydroxide_cake')
        .itemOutputs('6x gtceu:thorium_cake_dust')
        .outputFluids('gtceu:rare_earth_chloride_solution 35000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.sifter('gregification:monazite/sift_thorium_cake')
        .itemInputs('4x gtceu:thorium_cake_dust')
        .itemOutputs('3x gtceu:thorium_dust', '1x gtceu:protactinium_dust')
        .chancedOutput('gtceu:protactinium_dust', 7500, 1000)
        .chancedOutput('gtceu:uranium_dust', 3500, 1000)
        .chancedOutput('gtceu:radium_dust', 1000, 1000)
        .duration(durationSimple)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:monazite/oxalate_precipitate')
        .inputFluids('#forge:rare_earth_chloride_solution 35000', '#forge:oxalic_acid 5000')
        .itemOutputs('10x gtceu:rare_earth_oxalate_dust')
        .outputFluids('gtceu:diluted_hydrochloric_acid 12000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:monazite/calcine')
        .itemInputs('10x #forge:dusts/rare_earth_oxalate')
        .itemOutputs('8x gtceu:mixed_rare_earth_oxide_dust')
        .outputFluids('gtceu:carbon_dioxide 5000')
        .blastFurnaceTemp(COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:monazite/nitrate_dissolution')
        .itemInputs('8x #forge:dusts/mixed_rare_earth_oxide')
        .inputFluids('#forge:nitric_acid 12000', '#forge:water 20000')
        .outputFluids('gtceu:rare_earth_nitrate_liquor 30000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:monazite/extraction')
        .inputFluids('#forge:rare_earth_nitrate_liquor 30000', '#forge:rare_earth_extractant 20000')
        .outputFluids('gtceu:monazite_loaded_extractant 20000', 'gtceu:heavy_rare_earth_nitrate 25000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:monazite/light_terminal')
        .inputFluids('#forge:monazite_loaded_extractant 20000', '#forge:oxalic_acid 4000')
        .itemOutputs('4x gtceu:cerium_oxide_dust', '3x gtceu:lanthanum_hydroxide_dust')
        .chancedOutput('gtceu:neodymium_dust', 4000, 1000)
        .chancedOutput('gtceu:praseodymium_dust', 3000, 1000)
        .outputFluids('gtceu:rare_earth_extractant 19000', 'gtceu:carbon_dioxide 3000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:monazite/fluoride_precipitate')
        .inputFluids('#forge:heavy_rare_earth_nitrate 25000', '#forge:hydrofluoric_acid 6000')
        .itemOutputs('8x gtceu:heavy_rare_earth_fluoride_dust')
        .outputFluids('gtceu:nitric_acid 4000', 'minecraft:water 15000')
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.electric_blast_furnace('gregification:monazite/reduction')
        .itemInputs('8x #forge:dusts/heavy_rare_earth_fluoride', '6x #forge:dusts/calcium')
        .itemOutputs('6x gtceu:heavy_rare_earth_metal_mix_dust', '6x gtceu:calcium_fluoride_dust')
        .blastFurnaceTemp(COIL_TEMPS.NAQUADAH)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.sifter('gregification:monazite/sift_heavy')
        .itemInputs('4x gtceu:heavy_rare_earth_metal_mix_dust')
        .itemOutputs('3x gtceu:yttrium_dust')
        .chancedOutput('2x gtceu:dysprosium_dust', 5000, 1000)
        .chancedOutput('gtceu:terbium_dust', 3500, 1000)
        .chancedOutput('gtceu:gadolinium_dust', 1500, 1000)
        .duration(durationSimple)
        .EUt(EUSimple);

});