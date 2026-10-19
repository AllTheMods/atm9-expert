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
        RTM: 4500
    };
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sea_brine/acidify')
        .inputFluids('#forge:salt_water 50000', '#forge:diluted_sulfuric_acid 1000')
        .outputFluids('gtceu:acidified_brine 50000')        
        .duration(durationSimple)
        .EUt(EUSimple);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sea_brine/acidify_mekanism_brine')
        .inputFluids('#forge:brine 25000', 'minecraft:water 25000', '#forge:diluted_sulfuric_acid 1000')
        .outputFluids('gtceu:acidified_brine 50000')
        .duration(durationSimple)
        .EUt(EUSimple);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sea_brine/chlorinate')
        .inputFluids('#forge:acidified_brine 50000', '#forge:chlorine 3000')
        .outputFluids('gtceu:bromine_laden_brine 50000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.distillation_tower('gregification:sea_brine/blow_out')
        .inputFluids('#forge:bromine_laden_brine 50000', '#forge:air 20000')
        .itemOutputs('8x gtceu:salt_dust')
        .outputFluids(
            'gtceu:bromine_laden_air 20000',
            'gtceu:debrominated_brine 42000'
        )
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sea_brine/scrub')
        .inputFluids('#forge:bromine_laden_air 20000', '#forge:sulfur_dioxide 4000', 'minecraft:water 8000')
        .outputFluids('gtceu:hydrobromic_acid 8000', 'gtceu:diluted_sulfuric_acid 4000', 'gtceu:air 20000')
        .duration(durationComplex)
        .EUt(EUComplex);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sea_brine/rechlorinate')
        .inputFluids('#forge:hydrobromic_acid 8000', '#forge:chlorine 4000')
        .outputFluids('gtceu:crude_bromine_solution 12000')
        .duration(durationComplex)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.distillation_tower('gregification:sea_brine/steam_distill')
        .inputFluids('#forge:crude_bromine_solution 12000', '#forge:steam 6000')
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids(
            'gtceu:bromine 4000',
            'gtceu:hydrochloric_acid 8000'
        )
        .duration(durationComplex)
        .EUt(EUComplex);
});