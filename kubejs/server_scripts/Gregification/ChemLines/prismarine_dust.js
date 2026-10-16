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

    
    allthemods.recipes.gtceu.industrial_leacher('gregification:prismarine/leach')
        .itemInputs('64x #forge:dusts/prismarine')
        .inputFluids('#forge:hydrochloric_acid 40000')
        .outputFluids('gtceu:prismarine_chloride_slurry 40000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.dissolution_tank('gregification:prismarine/chlorinate')
        .inputFluids('#forge:prismarine_chloride_slurry 40000', '#forge:chlorine 6000', '#forge:water 10000')
        .itemOutputs('16x gtceu:prismarine_nodule_residue_dust')
        .chancedOutput('4x gtceu:prismarine_nodule_residue_dust', 6000, 500)
        .outputFluids('gtceu:halogen_brine 50000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.sifter('gregification:prismarine/sift_nodules')
        .itemInputs('4x gtceu:prismarine_nodule_residue_dust')
        .itemOutputs('2x gtceu:pyrolusite_dust')
        .chancedOutput('2x gtceu:iron_dust', 3500, 500)
        .chancedOutput('gtceu:copper_dust', 2500, 500)
        .chancedOutput('gtceu:nickel_dust', 2000, 1000)
        .chancedOutput('gtceu:cobalt_dust', 1500, 1000)
        .chancedOutput('gtceu:molybdenum_dust', 800, 1000)
        .duration(durationSimple)
        .EUt(EUSimple);

    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:prismarine/lime')
        .inputFluids('#forge:halogen_brine 50000')
        .itemInputs('20x #forge:dusts/calcium_hydroxide')
        .itemOutputs('12x gtceu:prismarine_magnesia_cake_dust')
        .outputFluids('gtceu:limed_brine 50000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(EUComplex);

    
    allthemods.recipes.gtceu.sifter('gregification:prismarine/sift_magnesia')
        .itemInputs('4x gtceu:prismarine_magnesia_cake_dust')
        .itemOutputs('3x gtceu:magnesia_dust')
        .chancedOutput('2x gtceu:calcite_dust', 6000, 500)
        .chancedOutput('gtceu:strontium_sulfide_dust', 100, 500)
        .duration(durationSimple)
        .EUt(EUSimple);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:prismarine/soda_ash')
        .inputFluids('#forge:limed_brine 50000')
        .itemInputs('8x #forge:dusts/soda_ash')
        .itemOutputs('6x gtceu:calcite_dust', '1x gtceu:lithium_carbonate_dust')
        .chancedOutput('2x gtceu:lithium_carbonate_dust', 4000, 1000)
        .outputFluids('gtceu:lithium_stripped_brine 45000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.distillation_tower('gregification:prismarine/distill_brine')
        .inputFluids('#forge:lithium_stripped_brine 45000')
        .itemOutputs('8x gtceu:salt_dust')
        .outputFluids(
            'minecraft:water 20000',
            'gtceu:bromine 2000',
            'gtceu:chlorine 1000',
            'gtceu:diluted_hydrochloric_acid 3000',
            'gtceu:deuterium 500'
        )
        .duration(durationComplex)
        .EUt(EUComplex);

});