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


    allthemods.recipes.gtceu.industrial_leacher('gregification:moon_stone/leach')
        .itemInputs('64x #forge:dusts/moon_stone')
        .inputFluids('#forge:sulfuric_acid 40000')
        .outputFluids('gtceu:muddy_moon_stone 40000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.dissolution_tank('gregification:moon_stone/quench')
        .inputFluids('#forge:muddy_moon_stone 40000', '#forge:water 15000', '#forge:hydrogen_peroxide 3000')
        .itemOutputs('22x gtceu:moon_silica_residue_dust', '6x gtceu:gypsum_dust', '1x gtceu:titanium_dioxide_dust')
        .chancedOutput('gtceu:gypsum_dust', 7000, 500)             // +1 gypsum at 70%
        .chancedOutput('gtceu:titanium_dioxide_dust', 1500, 1000)  // +1 TiO2 at 15%
        .outputFluids('gtceu:diluted_moon_stone_mud 40000', 'gtceu:diluted_sulfuric_acid 6000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.sifter('gregification:moon_stone/sift_residue')
        .itemInputs('4x gtceu:moon_silica_residue_dust')
        .itemOutputs('4x gtceu:silicon_dioxide_dust')
        .chancedOutput('2x gtceu:iron_dust', 3500, 500)            // nanophase iron
        .chancedOutput('gtceu:nickel_dust', 1200, 1000)
        .chancedOutput('gtceu:platinum_dust', 500, 500)
        .chancedOutput('gtceu:iridium_dust', 500, 500)
        .chancedOutput('gtceu:lunarium_dust', 100, 100)           // ~1% per sift
        .duration(durationSimple)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.dissolution_tank('gregification:moon_stone/oxalate_strip')
        .inputFluids('#forge:diluted_moon_stone_mud 40000', '#forge:oxalic_acid 2000')
        .itemOutputs('2x gtceu:kreep_concentrate_dust')
        .chancedOutput('2x gtceu:kreep_concentrate_dust', 5000, 1000)
        .outputFluids('gtceu:clarified_moon_mud 40000', 'gtceu:carbon_dioxide 3000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.sifter('gregification:moon_stone/sift_kreep')
        .itemInputs('4x gtceu:kreep_concentrate_dust')
        .itemOutputs('4x gtceu:cerium_oxide_dust')
        .chancedOutput('gtceu:neodymium_dust', 5000, 1000)
        .chancedOutput('gtceu:samarium_dust', 3500, 1000)
        .chancedOutput('gtceu:europium_dust', 100, 100)
        .chancedOutput('gtceu:thorium_dust', 4000, 1000)
        .chancedOutput('gtceu:uranium_dust', 1000, 1000)
        .duration(durationSimple)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:moon_stone/precipitate')
        .inputFluids('#forge:clarified_moon_mud 40000')
        .itemInputs('27x #forge:dusts/calcium_hydroxide')
        .itemOutputs('32x gtceu:moon_hydroxide_cake_dust')
        .outputFluids('gtceu:moon_brine 30000')
        .blastFurnaceTemp(COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.sifter('gregification:moon_stone/sift_cake')
        .itemInputs('8x gtceu:moon_hydroxide_cake_dust')
        .itemOutputs('1x gtceu:iron_hydroxide_dust', '6x gtceu:gypsum_dust')
        .chancedOutput('gtceu:iron_hydroxide_dust', 1500, 1000)             // +1 at 15%
        .chancedOutput('gtceu:gypsum_dust', 7500, 500)                      // +1 at 75%
        .chancedOutput('2x gtceu:aluminium_hydroxide_dust', 8750, 500)      // 2 at 87.5%
        .chancedOutput('2x gtceu:magnesia_dust', 7500, 500)                 // 2 at 75%
        .duration(durationSimple)
        .EUt(EUComplex);

    
    allthemods.recipes.gtceu.distillation_tower('gregification:moon_stone/evaporate_brine')
        .inputFluids('#forge:moon_brine 30000')
        .itemOutputs('8x gtceu:sodium_sulfate_dust')
        .outputFluids(
            'gtceu:diluted_sulfuric_acid 3000',
            'gtceu:diluted_hydrochloric_acid 3000',
            'gtceu:nitrogen 2000',
            'gtceu:argon 1000',
            'gtceu:neon 500',
            'gtceu:helium_3 250'
        )
        .duration(durationComplex)
        .EUt(EUComplex);


    allthemods.recipes.gtceu.chemical_reactor('gregification:gypsum_to_calcium_hydroxide')
        .itemInputs('#forge:dusts/gypsum', '2x #forge:dusts/sodium_hydroxide')
        .itemOutputs('gtceu:calcium_hydroxide_dust', 'gtceu:sodium_sulfate_dust')
        .duration(durationSimple)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.chemical_reactor('gregification:gypsum_to_quicklime')
        .itemInputs('2x #forge:dusts/gypsum', '#forge:dusts/carbon')
        .itemOutputs('2x gtceu:quicklime_dust')
        .outputFluids('gtceu:sulfur_dioxide 2000', 'gtceu:carbon_dioxide 1000')
        .duration(durationSimple)
        .EUt(EUSimple);

});