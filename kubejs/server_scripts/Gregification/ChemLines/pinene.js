ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const EUSimple = HV;
    const duration = 300;
    const EUComplex = IV;
    allthemods.recipes.gtceu.chemical_reactor('gregification:pinene_dimerization')
        .inputFluids('#forge:pinene 2000')
        .itemInputs('#forge:dusts/clay')
        .outputFluids('gtceu:pinene_dimer 1000')
        .duration(duration).EUt(EUSimple);

    //for insence
    allthemods.recipes.gtceu.chemical_reactor('gregification:pinene_dimer_hydrogenation')
        .inputFluids('#forge:pinene_dimer 1000', '#forge:hydrogen 4000')
        .notConsumable('#forge:dusts/palladium')
        .outputFluids('gtceu:hydrogenated_pinene_dimer 1000')
        .duration(duration).EUt(EUComplex);

    allthemods.recipes.gtceu.chemical_reactor('gregification:camphene_from_pinene')
        .inputFluids('#forge:pinene 1000')
        .notConsumable('#forge:dusts/rutile')
        .itemOutputs('gtceu:camphene_dust')
        .duration(duration).EUt(EUComplex);

    allthemods.recipes.gtceu.chemical_reactor('gregification:isobornyl_acetate')
        .itemInputs('#forge:dusts/camphene')
        .inputFluids('#forge:acetic_acid 1000', '#forge:sulfuric_acid 50')
        .outputFluids('gtceu:isobornyl_acetate 1000')
        .duration(duration).EUt(EUComplex);

    allthemods.recipes.gtceu.chemical_reactor('gregification:isoborneol_hydrolysis')
        .inputFluids('#forge:isobornyl_acetate 1000', '#forge:water 1000')
        .itemOutputs('gtceu:isoborneol_dust')
        .outputFluids('gtceu:acetic_acid 1000')
        .duration(duration).EUt(EUComplex);

    allthemods.recipes.gtceu.chemical_reactor('gregification:camphor_dehydrogenation')
        .itemInputs('#forge:dusts/isoborneol')
        .notConsumable('#forge:dusts/copper')
        .itemOutputs('gtceu:camphor_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .duration(duration).EUt(EUComplex);

    allthemods.recipes.gtceu.chemical_reactor('gregification:exo_pinane_dimer')
        .inputFluids('#forge:hydrogenated_pinene_dimer 1000')
        .notConsumable('#forge:dusts/aluminium_chloride')
        .outputFluids('gtceu:exo_pinane_dimer 1000')
        .duration(duration).EUt(EUComplex);

    
    allthemods.recipes.gtceu.mixer('gregification:terpene_jet_fuel')
        .inputFluids('#forge:exo_pinane_dimer 900', '#forge:cineole 100')
        .outputFluids('gtceu:terpene_jet_fuel 1000')
        .duration(duration).EUt(EUComplex);

    
    allthemods.recipes.gtceu.mixer('gregification:boron_slurry_fuel')
        .itemInputs('#forge:dusts/boron')
        .inputFluids('#forge:terpene_jet_fuel 900', '#forge:crystallized_oil 100')
        .outputFluids('gtceu:boron_slurry_fuel 1000')
        .duration(duration).EUt(EUComplex);

    allthemods.recipes.gtceu.chemical_reactor('gregification:cineole_phosphate_adduct')
        .inputFluids('gtceu:eucalyptus_oil 1000', 'gtceu:phosphoric_acid 500')
        .itemOutputs('gtceu:cineole_phosphate_dust')
        .outputFluids('gtceu:pinene 250')
        .duration(duration)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.chemical_reactor('gregification:cineole_from_adduct')
        .itemInputs('#forge:dusts/cineole_phosphate')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:cineole 750', 'gtceu:phosphoric_acid 500')
        .duration(duration)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.distillation_tower('gregification:cineole_from_eucalyptus_oil')
        .inputFluids('gtceu:eucalyptus_oil 1000')
        .outputFluids('gtceu:cineole 750', 'gtceu:pinene 250')
        .duration(duration)
        .EUt(EUComplex);

    allthemods.recipes.gtceu.chemical_reactor('gregification:aluminium_chloride')
        .itemInputs('#forge:dusts/aluminium')
        .inputFluids('#forge:chlorine 3000')
        .itemOutputs('gtceu:aluminium_chloride_dust')
        .duration(duration).EUt(EUSimple);

    const gumLogs = [
        'productivetrees:rainbow_gum_log',
        'productivetrees:rose_gum_log',
        'productivetrees:swamp_gum_log'
    ];

    gumLogs.forEach(log => {
        let id = log.split(':')[1];
        allthemods.recipes.gtceu.chemical_reactor(`gregification:pinene_from_${id}`)
            .itemInputs(log)
            .inputFluids('#forge:steam 1000')
            .outputFluids('gtceu:pinene 250')
            .itemOutputs('2x gtceu:wood_dust')
            .duration(duration).EUt(EUSimple);
    });

    allthemods.recipes.gtceu.mixer('gregification:camphor_incense')
        .itemInputs('#forge:dusts/camphor', '2x gtceu:agarwood', '#forge:dusts/charcoal', 'botania:incense_stick')
        .itemOutputs('gtceu:camphor_incense')
        .duration(duration).EUt(EUSimple);

    const gumTrees = [
        {name: 'rainbow_gum', amount: 350},
        {name: 'rose_gum', amount: 150},
        {name: 'swamp_gum', amount: 500}
    ];
    const oilSources = [
        { suffix: 'leaves',  count: 4 },
        { suffix: 'sapling', count: 2 }
    ];

    gumTrees.forEach(tree => {
        oilSources.forEach(src => {
            let item = `productivetrees:${tree.name}_${src.suffix}`;
            allthemods.recipes.gtceu.chemical_reactor(`gregification:eucalyptus_oil_from_${tree.name}_${src.suffix}`)
                .itemInputs(`${src.count}x ${item}`)
                .inputFluids('#forge:steam 1000')
                .outputFluids(`gtceu:eucalyptus_oil ${tree.amount}`)
                .duration(duration).EUt(EUSimple);
        });
    });
});