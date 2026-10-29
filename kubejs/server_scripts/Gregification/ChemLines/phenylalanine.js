// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const phenylalanineEU = EV;
    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/ethylene_oxide')
        .notConsumable('#forge:dusts/silver')
        .inputFluids('#forge:ethylene 1000', '#forge:oxygen 1000')
        .outputFluids('gtceu:ethylene_oxide 1000')
        .duration(300)
        .EUt(phenylalanineEU);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/phenylacetaldehyde')
        .inputFluids(['#forge:benzene 1000', '#forge:ethylene_oxide 1000'])
        .outputFluids(['gtceu:phenylacetaldehyde 1000', 'gtceu:hydrogen 2000'])
        .duration(300)
        .EUt(phenylalanineEU);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/phenyl_dust')
        .notConsumable('#forge:dusts/platinum')
        .inputFluids(['#forge:chlorobenzene 1000', '#forge:hydrogen 1000'])
        .itemOutputs('gtceu:phenyl_dust')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .duration(300)
        .EUt(phenylalanineEU);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/phenylacetaldehyde_from_phenyl')
        .itemInputs('#forge:dusts/phenyl')
        .inputFluids('#forge:acetaldehyde 1000')
        .outputFluids(['gtceu:phenylacetaldehyde 1000', 'gtceu:hydrogen 1000'])
        .duration(300)
        .EUt(phenylalanineEU);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/phenylalanine_nitrile')
        .inputFluids(['#forge:phenylacetaldehyde 1000', '#forge:ammonia 1000', '#forge:hydrogen_cyanide 1000'])
        .outputFluids(['gtceu:phenylalanine_nitrile 1000', 'minecraft:water 1000'])
        .duration(300)
        .EUt(phenylalanineEU);


    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/phenylalanine')
        .inputFluids(['#forge:phenylalanine_nitrile 1000', '#forge:hydrochloric_acid 1000', '#forge:water 2000'])
        .itemOutputs(['gtceu:ammonium_chloride_dust', 'gtceu:phenylalanine_dust'])
        .duration(300)
        .EUt(phenylalanineEU);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/zinc_phenol')
        .itemInputs('#forge:dusts/zinc')
        .inputFluids('#forge:phenol 1000')
        .itemOutputs(['gtceu:zincite_dust', 'gtceu:phenyl_dust'])
        .outputFluids('gtceu:hydrogen 1000')
        .duration(300)
        .EUt(phenylalanineEU);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/phenolic_resin')
        .itemInputs('#forge:dusts/phenyl')
        .inputFluids(['#forge:formaldehyde 1000', '#forge:oxygen 1000'])
        .outputFluids(['gtceu:phenolic_resin 1000', 'gtceu:hydrogen 1000'])
        .duration(300)
        .EUt(phenylalanineEU);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
