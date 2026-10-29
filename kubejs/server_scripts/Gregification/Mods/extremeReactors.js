// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//@ts-check
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

       

    

    //adding new recipes

    // --- CONTROLLERS ---
    const basicControllers = [
        { item: 'basic_reactorcontroller' },
        { item: 'basic_turbinecontroller' }

    ];
    basicControllers.forEach((controller, index) => {
        addAssembler(
            [
                'gtceu:ev_machine_hull',
                '4x #gtceu:circuits/ev',
                '2x gtceu:ev_field_generator',
                '4x #forge:gears/lumium',
                '8x #forge:rods/end_steel',
                '4x #forge:double_plates/graphite'
            ],
            'gtceu:polyethylene 576',
            `bigreactors:${controller.item}`,
            EV, 2000,
            index + 1
        );
    });

    const advancedControllers = [
        { item: 'reinforced_reactorcontroller' },
        { item: 'reinforced_turbinecontroller' },
        { item: 'reprocessorcontroller' },
        { item: 'fluidizercontroller' },
        { item: 'energizercontroller' }

    ];
    advancedControllers.forEach((controller, index) => {
        addAssembler(
            [
                'gtceu:iv_machine_hull',
                '4x #gtceu:circuits/iv',
                '2x gtceu:iv_field_generator',
                '4x #forge:gears/enderium',
                '8x #forge:rods/hafnium',
                '4x #forge:double_plates/graphite'
            ],
            'gtceu:polytetrafluoroethylene 576',
            `bigreactors:${controller.item}`,
            IV, 2000,
            index + 3
        );
    });

    // --- CASINGS ---
    const basicCasings = [
        { item: 'basic_reactorcasing' },
        { item: 'basic_turbinecasing' }

    ];
    basicCasings.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/end_steel',
                '4x #forge:double_plates/graphite',
                '8x #forge:plates/titanium',
                '2x #forge:screws/lumium',
                'pneumaticcraft:reinforced_stone'
            ],
            'gtceu:polyethylene 288',
            `bigreactors:${controller.item}`,
            EV, 1000,
            index + 1
        );
    });

    const advancedCasings = [
        { item: 'reinforced_turbinecasing' },
        { item: 'reinforced_reactorcasing' },
        { item: 'reprocessorcasing' },
        { item: 'fluidizercasing' },
        { item: 'energizercasing' }
    ];
    advancedCasings.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/draconium',
                '4x #forge:double_plates/graphite',
                '2x #forge:screws/enderium',
                '8x #forge:plates/hafnium',
                '8x #forge:plates/tungsten_steel',
                'pneumaticcraft:reinforced_stone'
            ],
            'gtceu:polytetrafluoroethylene 288',
            `bigreactors:${controller.item}`,
            IV, 1000,
            index + 3
        );
    });

    // --- CONTROL RODS ---
    addAssembler(
        [
            '#forge:frames/end_steel',
            '8x #forge:rods/graphite',
            '4x #forge:plates/titanium',
            '2x #forge:rings/lumium'

        ],
        'gtceu:polyethylene 144',
        'bigreactors:basic_reactorcontrolrod',
        EV, 1000
    );
    addAssembler(
        [
            '#forge:frames/draconium',
            '8x #forge:rods/graphite',
            '4x #forge:plates/tungsten_steel',
            '16x #forge:screws/hafnium',
            '2x #forge:rings/enderium'
        ],
        'gtceu:polytetrafluoroethylene 144',
        'bigreactors:reinforced_reactorcontrolrod',
        IV, 1000
    );

    // --- FUEL RODS ---
    addAssembler(
        [
            '#forge:frames/end_steel',
            '6x #forge:rods/graphite',
            '3x #forge:ingots/uranium',
            '2x #forge:rings/lumium'

        ],
        'gtceu:polyethylene 144',
        'bigreactors:basic_reactorfuelrod',
        EV, 1000
    );
    addAssembler(
        [
            '#forge:frames/draconium',
            '6x #forge:rods/graphite',
            '3x #forge:ingots/uranium',
            '2x #forge:rings/enderium',
            '4x #forge:plates/hafnium'
        ],
        'gtceu:polytetrafluoroethylene 144',
        'bigreactors:reinforced_reactorfuelrod',
        IV, 1000
    );

    // --- ACCESS PORTS ---
    addAssembler(
        [
            '#forge:frames/end_steel',
            '2x gtceu:ev_conveyor_module',
            'gtceu:ev_robot_arm',
            '4x #forge:small_gears/plastic',
            '4x #forge:small_gears/hafnium',
            'gtceu:item_detector_cover'

        ],
        'gtceu:polyethylene 144',
        'bigreactors:basic_reactorsolidaccessport',
        EV, 1000
    );

    const injectors = [
        { item: 'reinforced_reactorsolidaccessport' },
        { item: 'fluidizersolidinjector' },
        { item: 'reprocessorwasteinjector' },
        { item: 'reprocessoroutputport' },
    ];

    injectors.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/draconium',
                '2x gtceu:iv_conveyor_module',
                'gtceu:iv_robot_arm',
                '4x #forge:gears/plastic',
                '4x #forge:small_gears/hafnium',
                'gtceu:advanced_item_detector_cover'
            ],
            'gtceu:polytetrafluoroethylene 144',
            `bigreactors:${controller.item}`,
            IV, 1000,
            index + 1
        );
    });

    // --- FLUID PORTS ---
    const fluidPortsBasic = [
        { item: 'basic_turbinefluidport_forge_active' },
        { item: 'basic_turbinefluidport_forge_passive' }
    ];
    fluidPortsBasic.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/end_steel',
                '6x #forge:double_plates/graphite',
                '6x #forge:plates/titanium',
                'pneumaticcraft:reinforced_stone',
                'gtceu:ev_electric_pump',
                '2x #forge:screws/lumium',
                'gtceu:fluid_detector_cover'
            ],
            'gtceu:polyethylene 288',
            `bigreactors:${controller.item}`,
            EV, 1000,
            index + 10
        );
    });

    const fluidPortsAdvanced = [
        { item: 'reinforced_reactorfluidport_forge_active' },
        { item: 'reinforced_reactorfluidport_forge_passive' },
        { item: 'reinforced_reactorfluidaccessport' },
        { item: 'reinforced_reactorfluidport_mekanism_passive' },
        { item: 'reinforced_turbinefluidport_forge_active' },
        { item: 'reinforced_turbinefluidport_forge_passive' },
        { item: 'fluidizerfluidinjector' },
        { item: 'fluidizeroutputport' },
        { item: 'reprocessorfluidinjector' }
    ];
    fluidPortsAdvanced.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/draconium',
                '6x #forge:double_plates/graphite',
                '6x #forge:plates/tungsten_steel',
                'pneumaticcraft:reinforced_stone',
                'gtceu:iv_electric_pump',
                '2x #forge:screws/enderium',
                '4x #forge:small_gears/hafnium',
                'gtceu:advanced_fluid_detector_cover'
            ],
            'gtceu:polytetrafluoroethylene 288',
            `bigreactors:${controller.item}`,
            IV, 1000,
            index + 12
        );
    });


    // --- ROTORS ---
    // --- BEARING ---
    addAssembler(
        [
            '#forge:frames/end_steel',
            'pneumaticcraft:reinforced_stone',
            '2x #forge:small_gears/graphite',
            '4x #forge:plates/titanium',            
            '2x #forge:screws/lumium'

        ],
        'gtceu:polyethylene 144',
        'bigreactors:basic_turbinerotorbearing',
        EV, 1000
    );
    addAssembler(
        [
            '#forge:frames/draconium',
            'pneumaticcraft:reinforced_stone',
            '2x #forge:gears/graphite',
            '4x #forge:plates/tungsten_steel',
            '2x #forge:rods/hafnium',
            '2x #forge:screws/enderium'
        ],
        'gtceu:polytetrafluoroethylene 144',
        'bigreactors:reinforced_turbinerotorbearing',
        IV, 1000
    );

    // --- COLLECTOR ---
    addAssembler(
        [
            '#forge:frames/draconium',
            'pneumaticcraft:reinforced_stone',
            '4x #forge:gears/graphite',
            '4x #forge:plates/hafnium',
            '2x gtceu:iv_field_generator',
            '4x #forge:rods/hop_graphite'

        ],
        'gtceu:polytetrafluoroethylene 144',
        'bigreactors:reprocessorcollector',
        IV, 1000
    );

    // --- SHAFT ---
    addAssembler(
        [
            '#forge:frames/end_steel',
            '4x #forge:screws/titanium',
            '2x #forge:rotors/graphite',
            '2x #forge:plates/titanium',            
            '#forge:rings/titanium'

        ],
        'gtceu:polyethylene 144',
        'bigreactors:basic_turbinerotorshaft',
        EV, 1000
    );
    addAssembler(
        [
            '#forge:frames/draconium',
            '4x #forge:screws/tungsten_steel',
            '2x #forge:rotors/graphite',
            '2x #forge:plates/tungsten_steel',
            '2x #forge:rods/hafnium',
            '#forge:rings/titanium'
        ],
        'gtceu:polytetrafluoroethylene 144',
        'bigreactors:reinforced_turbinerotorshaft',
        IV, 1000
    );

    // --- BLADE ---
    addAssembler(
        [
            '#forge:rods/end_steel',
            '2x #forge:plates/end_steel',
            '2x #forge:plates/titanium',
            '4x #forge:screws/titanium'
        ],
        'gtceu:polyethylene 144',
        'bigreactors:basic_turbinerotorblade',
        EV, 1000
    );
    addAssembler(
        [
            '#forge:rods/draconium',
            '2x #forge:plates/draconium',
            '2x #forge:plates/tungsten_steel',
            '4x #forge:screws/tungsten_steel',
            '2x #forge:plates/hafnium'
        ],
        'gtceu:polytetrafluoroethylene 144',
        'bigreactors:reinforced_turbinerotorblade',
        IV, 1000,
    );

    // --- POWER TAPS ---
    const basicPowerCasings = [
        { item: 'basic_reactorpowertapfe_active' },
        { item: 'basic_reactorpowertapfe_passive' },
        { item: 'basic_turbinepowertapfe_active' },
        { item: 'basic_turbinepowertapfe_passive' }

    ];
    basicPowerCasings.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/end_steel',
                '2x gtceu:mpic_chip',
                '2x gtceu:ev_voltage_coil',
                '2x #forge:screws/lumium',
                '4x #forge:plates/plastic',
                'pneumaticcraft:reinforced_stone',
                'gtceu:energy_detector_cover'
            ],
            'gtceu:polyethylene 288',
            `bigreactors:${controller.item}`,
            EV, 1000,
            index + 1
        );
    });

    const advancedPowerCasings = [
        { item: 'reinforced_reactorpowertapfe_active' },
        { item: 'reinforced_reactorpowertapfe_passive' },
        { item: 'reinforced_turbinepowertapfe_active' },
        { item: 'reinforced_turbinepowertapfe_passive' },
        { item: 'fluidizerpowerport' },
        { item: 'reprocessorpowerport' },
        { item: 'energizerpowerport_fe' },
        { item: 'energizerpowerport_fe_active' }
    ];

    advancedPowerCasings.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/draconium',
                '2x gtceu:hpic_chip',
                '2x gtceu:iv_voltage_coil',
                '2x #forge:screws/enderium',
                '4x #forge:plates/plastic',      
                '4x #forge:small_gears/hafnium',
                'gtceu:advanced_energy_detector_cover'
            ],
            'gtceu:polytetrafluoroethylene 288',
            `bigreactors:${controller.item}`,
            IV, 1000,
            index + 5
        );
    });

    // --- CHARGING PORTS
    const basicCharging = [
        { item: 'basic_turbinechargingportfe' },
        { item: 'basic_reactorchargingportfe' }                 
    ];
    basicCharging.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/end_steel',
                'gtceu:mpic_chip',
                'gtceu:ev_voltage_coil',
                '2x #forge:screws/lumium',
                '2x #forge:plates/plastic',
                'pneumaticcraft:reinforced_stone',
                'gtceu:energy_detector_cover'
            ],
            'gtceu:polyethylene 288',
            `bigreactors:${controller.item}`,
            EV, 1000,
            index + 10
        );
    });

    const advancedCharging = [
        { item: 'reinforced_turbinechargingportfe' },
        { item: 'reinforced_reactorchargingportfe' },
        { item: 'energizerchargingport_fe' }
    ];

    advancedCharging.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/draconium',
                'gtceu:hpic_chip',
                'gtceu:iv_voltage_coil',
                '2x #forge:screws/enderium',
                '2x #forge:plates/plastic',
                '4x #forge:small_gears/hafnium',
                'gtceu:advanced_energy_detector_cover'
            ],
            'gtceu:polytetrafluoroethylene 288',
            `bigreactors:${controller.item}`,
            IV, 1000,
            index + 13
        );
    });
    
    // --- REDSTONE PORTS ---
    addAssembler(
        [
            '#forge:frames/end_steel',
            '2x #forge:screws/lumium',
            '4x #forge:plates/plastic',
            'pneumaticcraft:reinforced_stone',
            'gtceu:activity_detector_cover'
        ],
        'gtceu:polyethylene 288',
        'bigreactors:basic_reactorredstoneport',
        EV, 1000,
        1
    );

    addAssembler(
        [
            '#forge:frames/end_steel',
            '2x #forge:screws/lumium',
            '4x #forge:plates/plastic',
            'pneumaticcraft:reinforced_stone',
            'gtceu:activity_detector_cover'
        ],
        'gtceu:polyethylene 288',
        'bigreactors:basic_turbineredstoneport',
        EV, 1000,
        2
    );

    const redstonePorts = [
        { item: 'reinforced_reactorredstoneport' },
        { item: 'reinforced_turbineredstoneport' }
    ];

    redstonePorts.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/draconium',
                '2x #forge:screws/enderium',
                '4x #forge:plates/plastic',
                'pneumaticcraft:reinforced_stone',
                '4x #forge:small_gears/hafnium',
                'gtceu:advanced_activity_detector_cover'
            ],
            'gtceu:polytetrafluoroethylene 288',
            `bigreactors:${controller.item}`,
            IV, 1000,
            index + 2
        );
    });

    // --- COMPUTER PORTS ---   
    const computerPorts = [
        { item: 'reinforced_reactorcomputerport' },
        { item: 'reinforced_turbinecomputerport' },
        { item: 'energizercomputerport' }
    ];

    computerPorts.forEach((controller, index) => {
        addAssembler(
            [
                '#forge:frames/draconium',
                '2x #forge:screws/enderium',
                '4x #forge:plates/plastic',
                'pneumaticcraft:reinforced_stone',
                'gtceu:cpu_chip',
                '2x pneumaticcraft:printed_circuit_board',
                '4x #forge:small_gears/hafnium',
                'gtceu:computer_monitor_cover'
            ],
            'gtceu:polytetrafluoroethylene 288',
            `bigreactors:${controller.item}`,
            IV, 1000,
            index + 2
        );
    });      
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
