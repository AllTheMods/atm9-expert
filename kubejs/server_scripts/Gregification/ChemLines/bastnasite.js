// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

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

    
    allthemods.recipes.gtceu.industrial_leacher('gregification:bastnasite/acid_bake')
        .itemInputs('64x #forge:dusts/bastnasite')
        .inputFluids('#forge:sulfuric_acid 40000')
        .outputFluids('gtceu:bastnasite_sulfate_slurry 40000', 'gtceu:hydrofluoric_acid 8000', 'gtceu:carbon_dioxide 8000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.dissolution_tank('gregification:bastnasite/water_leach')
        .inputFluids('#forge:bastnasite_sulfate_slurry 40000', '#forge:water 20000')
        .itemOutputs('12x gtceu:bastnasite_gangue_dust')
        .chancedOutput('4x gtceu:bastnasite_gangue_dust', 5000, 500)
        .outputFluids('gtceu:rare_earth_sulfate_liquor 50000', 'gtceu:diluted_sulfuric_acid 5000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.sifter('gregification:bastnasite/sift_gangue')
        .itemInputs('4x gtceu:bastnasite_gangue_dust')
        .itemOutputs('2x gtceu:barite_dust')
        .chancedOutput('2x gtceu:silicon_dioxide_dust', 6000, 500)
        .chancedOutput('2x gtceu:gypsum_dust', 5000, 500)
        .chancedOutput('gtceu:thorium_dust', 1500, 1000)
        .chancedOutput('gtceu:uranium_dust', 800, 1000)
        .duration(durationSimple)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:bastnasite/double_sulfate')
        .inputFluids('#forge:rare_earth_sulfate_liquor 50000')
        .itemInputs('12x #forge:dusts/sodium_sulfate')
        .itemOutputs('16x gtceu:light_rare_earth_double_sulfate_dust')
        .outputFluids('gtceu:heavy_rare_earth_liquor 40000')
        .blastFurnaceTemp(COIL_TEMPS.HSS_G)        
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.dissolution_tank('gregification:bastnasite/heavy_terminal')
        .inputFluids('#forge:heavy_rare_earth_liquor 40000', '#forge:oxalic_acid 3000')
        .itemOutputs('4x gtceu:yttrium_oxide_dust', '2x gtceu:samarium_dust')
        .chancedOutput('gtceu:gadolinium_dust', 500, 500)
        .chancedOutput('gtceu:europium_dust', 100, 100)
        .chancedOutput('gtceu:promethium_dust', 3000, 1000)
        .outputFluids('gtceu:carbon_dioxide 3000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:bastnasite/hydroxide')
        .inputFluids('#forge:water 10000')
        .itemInputs('16x #forge:dusts/light_rare_earth_double_sulfate', '16x #forge:dusts/sodium_hydroxide')
        .itemOutputs('12x gtceu:light_rare_earth_hydroxide_dust', '12x gtceu:sodium_sulfate_dust')
        .outputFluids('minecraft:water 5000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:bastnasite/cerium_split')
        .inputFluids('#forge:hydrochloric_acid 12000', '#forge:oxygen 3000', '#forge:water 25000')
        .itemInputs('12x #forge:dusts/light_rare_earth_hydroxide')
        .itemOutputs('4x gtceu:cerium_oxide_dust')
        .chancedOutput('2x gtceu:cerium_oxide_dust', 5000, 500)
        .outputFluids('gtceu:rare_earth_chloride_liquor 40000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);

    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:bastnasite/extraction')
        .inputFluids('#forge:rare_earth_chloride_liquor 40000', '#forge:rare_earth_extractant 20000')
        .outputFluids('gtceu:loaded_extractant 20000', 'gtceu:lanthanum_raffinate 35000')        
        .duration(durationComplex)
        .EUt(EUComplex);

    
    allthemods.recipes.gtceu.electric_blast_furnace('gregification:bastnasite/lanthanum_terminal')
        .inputFluids('#forge:lanthanum_raffinate 35000')
        .itemInputs('6x #forge:dusts/soda_ash')
        .itemOutputs('4x gtceu:lanthanum_hydroxide_dust')
        .chancedOutput('2x gtceu:lanthanum_hydroxide_dust', 5000, 500)        
        .blastFurnaceTemp(COIL_TEMPS.HSS_G)
        .duration(durationComplex)
        .EUt(EUComplex);

    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:bastnasite/strip')
        .inputFluids('#forge:loaded_extractant 20000', '#forge:hydrochloric_acid 6000')
        .outputFluids('gtceu:neodymium_praseodymium_chloride 20000', 'gtceu:rare_earth_extractant 19000')
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:bastnasite/oxalate_calcine')
        .inputFluids('#forge:neodymium_praseodymium_chloride 20000', '#forge:oxalic_acid 4000')
        .itemOutputs('6x gtceu:neodymium_praseodymium_oxide_dust')
        .outputFluids('gtceu:carbon_dioxide 4000', 'gtceu:diluted_hydrochloric_acid 8000')        
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.sifter('gregification:bastnasite/sift_neodymium')
        .itemInputs('4x gtceu:neodymium_praseodymium_oxide_dust')
        .itemOutputs('3x gtceu:neodymium_dust')
        .chancedOutput('2x gtceu:praseodymium_dust', 6500, 1000)
        .chancedOutput('gtceu:samarium_dust', 1200, 1000)
        .chancedOutput('gtceu:gadolinium_dust', 1000, 1000)
        .duration(durationSimple)
        .EUt(EUSimple);
    
    allthemods.recipes.gtceu.acid_brewing_vat('gregification:bastnasite/extractant')
        .inputFluids('#forge:naphtha 3000', '#forge:phosphoric_acid 1000')
        .outputFluids('gtceu:rare_earth_extractant 4000')
        .duration(durationSimple)
        .EUt(EUSimple);

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
