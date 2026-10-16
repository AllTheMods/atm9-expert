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
    
    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/roast_chalcopyrite')
        .itemInputs('8x #forge:dusts/chalcopyrite')
        .inputFluids('#forge:oxygen 8000')
        .itemOutputs('8x gtceu:pgm_calcine_dust')
        .chancedOutput('2x gtceu:copper_dust', 5000, 500)
        .outputFluids('gtceu:sulfur_dioxide 8000')
        .blastFurnaceTemp(COIL_TEMPS.RTM)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/roast_chalcocite')
        .itemInputs('8x #forge:dusts/chalcocite')
        .inputFluids('#forge:oxygen 8000')
        .itemOutputs('8x gtceu:pgm_calcine_dust')
        .chancedOutput('3x gtceu:copper_dust', 5000, 500)
        .outputFluids('gtceu:sulfur_dioxide 8000')
        .blastFurnaceTemp(COIL_TEMPS.RTM)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/roast_bornite')
        .itemInputs('8x #forge:dusts/bornite')
        .inputFluids('#forge:oxygen 8000')
        .itemOutputs('8x gtceu:pgm_calcine_dust')
        .chancedOutput('2x gtceu:copper_dust', 5000, 500)
        .chancedOutput('gtceu:iron_dust', 3000, 500)
        .outputFluids('gtceu:sulfur_dioxide 8000')
        .blastFurnaceTemp(COIL_TEMPS.RTM)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/roast_tetrahedrite')
        .itemInputs('8x #forge:dusts/tetrahedrite')
        .inputFluids('#forge:carbon_monoxide 8000')
        .itemOutputs('8x gtceu:pgm_calcine_dust')
        .chancedOutput('2x gtceu:copper_dust', 5000, 500)
        .chancedOutput('gtceu:antimony_dust', 3000, 500)
        .outputFluids('gtceu:sulfur_dioxide 8000')
        .blastFurnaceTemp(COIL_TEMPS.RTM)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/roast_pentlandite')
        .itemInputs('8x #forge:dusts/pentlandite')
        .inputFluids('#forge:carbon_monoxide 8000')
        .itemOutputs('8x gtceu:pgm_calcine_dust')
        .chancedOutput('2x gtceu:nickel_dust', 5000, 500)
        .chancedOutput('gtceu:iron_dust', 3000, 500)
        .outputFluids('gtceu:sulfur_dioxide 8000')
        .blastFurnaceTemp(COIL_TEMPS.RTM)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/roast_sheldonite')
        .itemInputs('8x #forge:dusts/cooperite')
        .inputFluids('#forge:oxygen 8000')
        .itemOutputs('16x gtceu:pgm_calcine_dust')
        .chancedOutput('2x gtceu:nickel_dust', 5000, 500)
        .outputFluids('gtceu:sulfur_dioxide 8000')
        .blastFurnaceTemp(COIL_TEMPS.RTM)
        .duration(durationComplex).EUt(EUComplex);
    
    allthemods.recipes.gtceu.industrial_leacher('gregification:pgm/leach')
        .itemInputs('8x #forge:dusts/pgm_calcine')
        .inputFluids('#forge:aqua_regia 8000')
        .outputFluids('gtceu:pgm_chloride_liquor 10000')
        .addData('ebf_temp', COIL_TEMPS.RTM)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pgm/platinum_precipitate')
        .itemInputs('6x #forge:dusts/ammonium_chloride')
        .inputFluids('#forge:pgm_chloride_liquor 10000')
        .itemOutputs('8x gtceu:platinum_salt_dust')
        .chancedOutput('2x gtceu:platinum_raw_dust', 3000, 500)
        .outputFluids('gtceu:palladous_ammine_liquor 8000', 'gtceu:diluted_hydrochloric_acid 2000')
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/platinum_calcine')
        .itemInputs('8x #forge:dusts/platinum_salt')
        .itemOutputs('6x gtceu:platinum_dust')
        .outputFluids('gtceu:chlorine 4000')
        .blastFurnaceTemp(COIL_TEMPS.RTM)
        .duration(durationSimple).EUt(EUSimple);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pgm/ammine_conditioning')
        .inputFluids('#forge:palladous_ammine_liquor 8000', '#forge:ammonia 4000')
        .outputFluids('gtceu:palladium_tetraammine_liquor 10000')
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.dissolution_tank('gregification:pgm/palladium_split')
        .inputFluids('#forge:palladium_tetraammine_liquor 10000', '#forge:formic_acid 4000')
        .itemOutputs('4x gtceu:palladium_dust', '6x gtceu:pgm_residue_cake_dust')
        .chancedOutput('gtceu:gold_dust', 2500, 500)
        .chancedOutput('2x gtceu:copper_dust', 3000, 500)
        .chancedOutput('gtceu:palladium_raw_dust', 2000, 500)
        .outputFluids('gtceu:ammonia 4000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/rhodium_strip')
        .itemInputs('6x #forge:dusts/pgm_residue_cake')
        .inputFluids('#forge:sulfuric_acid 3000')
        .itemOutputs('6x gtceu:pgm_leach_residue_dust')
        .chancedOutput('3x gtceu:inert_metal_mixture_dust', 3000, 500)
        .outputFluids('gtceu:rhodium_sulfate 2000')
        .blastFurnaceTemp(COIL_TEMPS.HSS_G)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pgm/rhodium_zinc_strike')
        .itemInputs('3x #forge:dusts/zinc')
        .inputFluids('#forge:rhodium_sulfate 2000')
        .itemOutputs('2x gtceu:rhodium_sponge_dust', '3x gtceu:zinc_sulfate_dust')
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/rhodium_chloride_fusion')
        .itemInputs('2x #forge:dusts/rhodium_sponge', '2x #forge:dusts/salt')
        .inputFluids('#forge:chlorine 2000')
        .itemOutputs('2x gtceu:rhodium_salt_dust')
        .blastFurnaceTemp(COIL_TEMPS.HSS_G)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electrolyzer('gregification:pgm/rhodium_electrolysis')
        .itemInputs('2x #forge:dusts/rhodium_salt')
        .itemOutputs('2x gtceu:rhodium_dust')
        .outputFluids('gtceu:chlorine 3000')
        .duration(durationSimple).EUt(EUSimple);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pgm/ruthenium_fusion')
        .itemInputs('6x #forge:dusts/pgm_leach_residue', '4x #forge:dusts/saltpeter')
        .inputFluids('#forge:chlorine 4000')
        .itemOutputs('4x gtceu:rarest_metal_mixture_dust')
        .outputFluids('gtceu:ruthenium_tetroxide_solution 6000')
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.distillation_tower('gregification:pgm/ruthenium_distill')
        .inputFluids('#forge:ruthenium_tetroxide_solution 6000')
        .itemOutputs('15x gtceu:ruthenium_tetroxide_dust')
        .outputFluids('minecraft:water 3000', 'gtceu:chlorine 1000', 'gtceu:diluted_hydrochloric_acid 1000')
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pgm/rarest_split')
        .itemInputs('4x #forge:dusts/rarest_metal_mixture')
        .inputFluids('#forge:hydrochloric_acid 3000')
        .itemOutputs('4x gtceu:iridium_metal_residue_dust')
        .outputFluids('gtceu:acidic_osmium_solution 2000', 'gtceu:hydrogen 2000')
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/iridium_roast')
        .itemInputs('4x #forge:dusts/iridium_metal_residue')
        .inputFluids('#forge:oxygen 2000')
        .itemOutputs('4x gtceu:iridium_dioxide_dust', '1x gtceu:platinum_sludge_residue_dust')
        .blastFurnaceTemp(COIL_TEMPS.HSS_G)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pgm/iridium_chloride')
        .itemInputs('4x #forge:dusts/iridium_dioxide', '2x #forge:dusts/ammonium_chloride')
        .inputFluids('#forge:hydrochloric_acid 4000')
        .itemOutputs('4x gtceu:iridium_chloride_dust')
        .outputFluids('gtceu:ammonia 2000', 'minecraft:water 2000')
        .duration(durationComplex).EUt(EUComplex);
    
    allthemods.recipes.gtceu.sifter('gregification:pgm/sift_iridium')
        .itemInputs('4x gtceu:iridium_chloride_dust')
        .itemOutputs('2x gtceu:iridium_dust')
        .chancedOutput('gtceu:platinum_sludge_residue_dust', 4000, 500)
        .chancedOutput('gtceu:osmium_dust', 1500, 500)
        .chancedOutput('gtceu:ruthenium_dust', 1500, 500)
        .chancedOutput('gtceu:rhodium_dust', 1500, 500)
        .duration(durationSimple).EUt(EUSimple);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:pgm/residue_fusion')
        .itemInputs('4x #forge:dusts/platinum_sludge_residue', '3x #forge:dusts/soda_ash', '2x #forge:dusts/saltpeter')
        .itemOutputs('4x gtceu:fused_pgm_melt_dust')
        .outputFluids('gtceu:carbon_dioxide 2000')
        .blastFurnaceTemp(COIL_TEMPS.HSS_G)
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pgm/residue_melt_leach')
        .itemInputs('4x #forge:dusts/fused_pgm_melt')
        .inputFluids('#forge:water 6000')
        .itemOutputs('3x gtceu:pgm_oxide_cake_dust')
        .outputFluids('gtceu:sodium_ruthenate_liquor 3000')
        .duration(durationComplex).EUt(EUComplex);

    allthemods.recipes.gtceu.sifter('gregification:pgm/sift_oxide_cake')
        .itemInputs('3x gtceu:pgm_oxide_cake_dust')
        .itemOutputs('1x gtceu:rarest_metal_mixture_dust')
        .chancedOutput('gtceu:gold_dust', 4000, 500)
        .chancedOutput('gtceu:silicon_dioxide_dust', 5000, 500)
        .chancedOutput('gtceu:platinum_dust', 3000, 500)
        .chancedOutput('gtceu:iridium_dioxide_dust', 2500, 500)
        .duration(durationSimple).EUt(EUSimple);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pgm/residue_chlorinate')
        .inputFluids('#forge:sodium_ruthenate_liquor 3000', '#forge:chlorine 2000')
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids('gtceu:ruthenium_tetroxide_solution 3000')
        .duration(durationComplex).EUt(EUComplex);
});