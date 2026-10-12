ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration, program) => {
        
        const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');

        let recipe = allthemods.recipes.gtceu.assembler(`gregification:assembler/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
        if (program) {
            recipe.circuit(program);
        }
    };

    allthemods.recipes.gtceu.canner('mekanism_energy_tablet')
        .itemInputs([
            '16x #forge:dusts/alloy_infused',
            'gtceu:hv_battery_hull'
        ])
        .itemOutputs('mekanism:energy_tablet')
        .duration(200)
        .EUt(HV);


    //module base
    addAssembler(
        [
            'mekanism:hdpe_sheet',
            '#gtceu:circuits/luv',
            '4x #forge:ingots/ferrognetic',
            '4x mekanism:alloy_atomic'
        ],
        null,
        'mekanism:module_base',
        LuV,
        600
    );

    addAssembler(
        [
            '5x #forge:dusts/bismuth_germanate',
            '#forge:circuits/basic',
            '4x #forge:plates/lead'

        ],
        '#forge:soldering_alloy 288',
        'mekanism:geiger_counter',
        IV,
        600
    );

    addAssembler(
        [
            'mekanism:module_base',
            'mekanism:geiger_counter',
            '4x #forge:ingots/alloy_infused',
            '3x mekanism:hdpe_sheet'

        ],
        '#forge:soldering_alloy 288',
        'mekanism:module_geiger_unit',
        LuV,
        600
    );

    //basic tier
    addAssembler(
        [
            '#forge:circuits/basic',
            '#gtceu:circuits/luv',
            'mekanism:energy_tablet',
            '4x #forge:plates/ferrognetic',
            '4x #forge:plates/hafnium'
        ],
        [
            '#forge:argon 1000'
        ],
        'mekanism:basic_tier_installer',
        IV,
        600
    );

    //advanced tier
    addAssembler(
        [
            '#forge:circuits/advanced',
            '#gtceu:circuits/luv',
            'mekanism:energy_tablet',
            '4x #forge:plates/alloy_infused',
            '4x #forge:plates/scandium'            
        ],
        [
            '#forge:neon 1000'
        ],
        'mekanism:advanced_tier_installer',
        LuV,
        600
    );

    //elite tier
    addAssembler(
        [
            '#forge:circuits/elite',
            '#gtceu:circuits/luv',
            'mekanism:energy_tablet',
            '4x #forge:plates/alloy_reinforced',
            '4x #forge:plates/thallium'
        ],
        [
            '#forge:xenon 1000'
        ],
        'mekanism:elite_tier_installer',
        ZPM,
        600
    );

    //ultimate tier
    addAssembler(
        [
            '#forge:circuits/ultimate',
            '#gtceu:circuits/luv',
            'mekanism:energy_tablet',
            '4x #forge:plates/alloy_atomic',
            '4x #forge:plates/rubidium'
        ],
        [
            '#forge:radon 1000'
        ],
        'mekanism:ultimate_tier_installer',
        UV,
        600
    );

    //upgrade speed
    addAssembler(
        [
            '4x #forge:plates/osmium',
            '2x #forge:circuits/ultimate',
            '2x #forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ],
        [
            'gtceu:polytetrafluoroethylene 100'
        ],
        'mekanism:upgrade_speed',
        LuV,
        600
    );

    //upgrade energy
    addAssembler(
        [
            '4x #forge:plates/gold',
            '2x #forge:circuits/ultimate',
            '2x #forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ],
        [
            'gtceu:polytetrafluoroethylene 100'
        ],
        'mekanism:upgrade_energy',
        LuV,
        600
    );

    //upgrade filter
    addAssembler(
        [
            '4x #forge:plates/tin',
            '2x #forge:circuits/ultimate',
            '2x #forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ],
        [
            'gtceu:polytetrafluoroethylene 100'
        ],
        'mekanism:upgrade_filter',
        LuV,
        600
    );

    //upgrade gas
    addAssembler(
        [
            '4x #forge:plates/steel',
            '2x #forge:circuits/ultimate',
            '2x #forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ],
        [
            'gtceu:polytetrafluoroethylene 100'
        ],
        'mekanism:upgrade_gas',
        LuV,
        600
    );

     //upgrade muffler
    addAssembler(
        [
            '4x #forge:plates/stainless_steel',
            '2x #forge:circuits/ultimate',
            '2x #forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ],
        [
            'gtceu:polytetrafluoroethylene 100'
        ],
        'mekanism:upgrade_muffling',
        LuV,
        600
    );


    var mekMachines = [
        { machine: 'mekanism:energized_smelter', factory: 'smelting' },
        { machine: 'mekanism:enrichment_chamber', factory: 'enriching' },
        { machine: 'mekanism:crusher', factory: 'crushing' },
        { machine: 'mekanism:osmium_compressor', factory: 'compressing' },
        { machine: 'mekanism:combiner', factory: 'combining' },
        { machine: 'mekanism:purification_chamber', factory: 'purifying' },
        { machine: 'mekanism:chemical_injection_chamber', factory: 'injecting' },
        { machine: 'mekanism:precision_sawmill', factory: 'sawing' },
        { machine: 'mekanism:metallurgic_infuser', factory: 'infusing' }
    ];

    let upgradeTiers = ['advanced', 'elite', 'ultimate'];

    mekMachines.forEach(function(entry) {
        let machine = entry.machine;
        let factory = entry.factory;

        // base machine -> basic factory
        allthemods.shapeless(
            'mekanism:basic_' + factory + '_factory',
            [machine, 'mekanism:basic_tier_installer']
        );

        // each subsequent tier upgrades the previous factory
        upgradeTiers.forEach(function(tier, i) {
            let prevTier = i === 0 ? 'basic' : upgradeTiers[i - 1];
            allthemods.shapeless(
                'mekanism:' + tier + '_' + factory + '_factory',
                ['mekanism:' + prevTier + '_' + factory + '_factory', 'mekanism:' + tier + '_tier_installer']
            );
        });
    });


    //structural glass
    allthemods.recipes.gtceu.forming_press('gregification:mekanism/structural_glass')
    .itemInputs([
        '2x gtceu:laminated_glass',
        '4x #forge:dusts/thallium_carbonate'
    ])
    .itemOutputs('mekanism:structural_glass')
    .duration(200)
    .EUt(IV);

    allthemods.recipes.gtceu.forming_press('gregification:mekanism/reactor_glass')
    .itemInputs([
        'mekanism:structural_glass',
        '2x #forge:dusts/thallium_carbonate'
    ])
    .itemOutputs('mekanismgenerators:reactor_glass')
    .duration(400)
    .EUt(IV);

})