//@ts-check
ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    const tiers = {
        ULV: ULV,
        LV: LV,
        MV: MV,
        HV: HV,
        EV: EV,
        IV: IV,
        LuV: LuV,
        ZPM: ZPM,
        UV: UV,
        UHV: UHV,
        UEV: UEV,
        UIV: UIV,
        UXV: UXV,
        OpV: OpV,
        MAX: MAX
    };
    const tierValues = [LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX];

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
            recipe.circuit(program)
        }
    };

    const addAssemblyLine = (output, inputs, fluids, duration, eu, researchItem, CWUt) => {

        let itemName = output.replace(/^\d+x\s+/, '').split(':').pop();
        let generatedId = `gregification:assembly_line/${itemName}`;

        let recipe = allthemods.recipes.gtceu.assembly_line(generatedId)
            .itemOutputs(output)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (fluids && fluids.length > 0) {
            recipe.inputFluids(fluids);
        }

        if (researchItem) {
            if (CWUt) {
                recipe.stationResearch(b =>
                    b.researchStack(researchItem)  // Uses the 'researchItem' argument             
                        .EUt(eu)                  // 1/4th EU is standard for research
                        .CWUt(CWUt)                     // Computation Units (Standard default)
                );

            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }
    };


    const structural = {
        UEV: 'corrosive_etrium_alloy',
        UIV: 'destructive_scandozirconium',
        UXV: 'vengeful_gadomeitnerium_alloy',
        OpV: 'steadfast_rhenobedrock_alloy',
        MAX: 'demonic_antimatter_alloy'
    }

    const component = {
        UEV: 'infused_star',
        UIV: 'reinforced_star',
        UXV: 'atomic_star',
        OpV: 'dark_matter',
        MAX: 'red_matter'
    }


    const conductive = {
        UEV: 'copernicium_dysprosium_alloy',
        UIV: 'nihonium_bismuth_alloy',
        UXV: 'flerovium_terbium_alloy',
        OpV: 'moscovium_roentgenium_alloy',
        MAX: 'livermorium_astatine_alloy'
    }

    const polymers = {
        UEV: 'polyimide',
        UIV: 'organic_polymer',
        UXV: 'chaos_plastic',
        OpV: 'naquadria_awakened',
        MAX: 'fifth_element'
    }


    const machineTiers = [
        { t: 1, tier: 'lv', structural: 'steel', component: 'tin', conductive: 'copper', polymer: 'wrought_iron' },
        { t: 2, tier: 'mv', structural: 'aluminum', component: 'bronze', conductive: 'cupronickel', polymer: 'wrought_iron' },
        { t: 3, tier: 'hv', structural: 'stainless_steel', component: 'steel', conductive: 'kanthal', polymer: 'polyethylene' },
        { t: 4, tier: 'ev', structural: 'titanium', component: 'stainless_steel', conductive: 'nichrome', polymer: 'polyethylene' },
        { t: 5, tier: 'iv', structural: 'tungsten_steel', component: 'tungsten_steel', conductive: 'rtm_alloy', polymer: 'polytetrafluoroethylene' },
        { t: 6, tier: 'luv', structural: 'rhodium_plated_palladium', component: 'rhodium_plated_palladium', conductive: 'hssg', polymer: 'polytetrafluoroethylene' },
        { t: 7, tier: 'zpm', structural: 'naquadah_alloy', component: 'naquadah_alloy', conductive: 'naquadah', polymer: 'polybenzimidazole' },
        { t: 8, tier: 'uv', structural: 'darmstadtium', component: 'darmstadtium', conductive: 'naquadah_alloy', polymer: 'polybenzimidazole' },
        { t: 9, tier: 'uhv', structural: 'neutronium', component: 'darmstadtium', conductive: 'gaia', polymer: 'polybenzimidazole', magnetic: 'samarium' },
        { t: 10, tier: 'uev', structural: 'corrosive_etrium_alloy', component: 'infused_star', conductive: 'etrium', polymer: 'polyimide', magnetic: 'eternium' },
        { t: 11, tier: 'uiv', structural: 'destructive_scandozirconium', component: 'reinforced_star', conductive: 'tenebrium', polymer: 'organic_polymer', magnetic: 'neodymium_dysprosium' },
        { t: 12, tier: 'uxv', structural: 'vengeful_gadomeitnerium_alloy', component: 'atomic_star', conductive: 'infinity', polymer: 'chaos_plastic', magnetic: 'neodymium_dysprosium' },
        { t: 13, tier: 'opv', structural: 'steadfast_rhenobedrock_alloy', component: 'dark_matter', conductive: 'dark_matter', polymer: 'naquadria_awakened', magnetic: 'neodymium_terbium' },
        { t: 14, tier: 'max', structural: 'demonic_antimatter_alloy', component: 'red_matter', conductive: 'red_matter', polymer: 'fifth_element', magnetic: 'neodymium_terbium' }
    ];

    const customMachines = [
        { machine: '_mana_converter', startTier: 3, endTier: 8 },
        { machine: '_mana_burner', startTier: 3, endTier: 8 },
        { machine: '_petal_apothecary', startTier: 3, endTier: 8 },
        { machine: '_runic_altar', startTier: 3, endTier: 8 },
        { machine: '_alfheim_trader', startTier: 3, endTier: 8 },
        { machine: '_mana_pool', startTier: 3, endTier: 8 },
        { machine: '_imbument_chamber', startTier: 3, endTier: 8 },
        { machine: '_alchemical_workbench', startTier: 4, endTier: 8 },
        { machine: '_air_compressor', startTier: 1, endTier: 8 },
        { machine: '_reconstructor', startTier: 2, endTier: 8 },
        { machine: '_liquifier', startTier: 2, endTier: 8 },
        { machine: '_sanguine_refinery', startTier: 2, endTier: 8 },
        { machine: '_unifier', startTier: 2, endTier: 8 },
        { machine: '_gem_polisher', startTier: 6, endTier: 8 }
    ]

    machineTiers.forEach(tData => {
        //single block machine recipes
        let hull = `gtceu:${tData.tier}_machine_hull`;
        let plate = `#forge:plates/${tData.structural}`;
        let circuit = `#gtceu:circuits/${tData.tier}`;
        let wire = `gtceu:${tData.conductive}_single_cable`;
        let piston = `gtceu:${tData.tier}_electric_piston`;
        let conveyor = `gtceu:${tData.tier}_conveyor_module`;
        let pump = `gtceu:${tData.tier}_electric_pump`;
        let motor = `gtceu:${tData.tier}_electric_motor`;

        customMachines.forEach(mData => {
            if (mData.machine == '_mana_converter' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_mana_converter`, [
                    'TPT',
                    'UHC',
                    'TJT'
                ], {
                    H: hull,
                    P: 'botania:fabulous_pool',
                    J: 'ars_nouveau:source_jar',
                    T: plate,
                    U: pump,
                    C: circuit
                }).id(`gregification:${tData.tier}_mana_converter`);
            }
            if (mData.machine == '_mana_burner' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_mana_burner`, [
                    'JTP',
                    'UHC',
                    'TFT'
                ], {
                    H: hull,
                    P: 'botania:fabulous_pool',
                    J: 'ars_nouveau:source_jar',
                    T: plate,
                    U: pump,
                    C: circuit,
                    F: `gtceu:${tData.tier}_electric_furnace`
                }).id(`gregification:${tData.tier}_mana_burner`);
            }
            if (mData.machine == '_petal_apothecary' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_petal_apothecary`, [
                    'TAT',
                    'CHC',
                    'TUT'
                ], {
                    H: hull,
                    A: 'botania:apothecary_default',
                    U: pump,
                    C: circuit,
                    T: plate
                }).id(`gregification:${tData.tier}_petal_apothecary`);
            }
            if (mData.machine == '_runic_altar' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_runic_altar`, [
                    'TAT',
                    'UHI',
                    'TCT'
                ], {
                    H: hull,
                    A: 'botania:runic_altar',
                    U: pump,
                    C: circuit,
                    T: plate,
                    I: piston
                }).id(`gregification:${tData.tier}_runic_altar`);
            }
            if (mData.machine == '_alfheim_trader' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_alfheim_trader`, [
                    'PCP',
                    'UHI',
                    'TGT'
                ], {
                    H: hull,
                    P: 'botania:natura_pylon',
                    G: 'botania:alfheim_portal',
                    U: pump,
                    I: piston,
                    C: circuit,
                    T: plate
                }).id(`gregification:${tData.tier}_alfheim_trader`);
            }
            if (mData.machine == '_mana_pool' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_mana_pool`, [
                    'TPT',
                    'UHT',
                    'TCT'
                ], {
                    H: hull,
                    P: 'botania:fabulous_pool',
                    U: pump,
                    C: circuit,
                    T: plate
                }).id(`gregification:${tData.tier}_mana_pool`);
            }
            if (mData.machine == '_imbument_chamber' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_imbument_chamber`, [
                    'TPT',
                    'CHI',
                    'TUT'
                ], {
                    H: hull,
                    P: 'ars_nouveau:imbuement_chamber',
                    U: pump,
                    C: circuit,
                    T: plate,
                    I: piston
                }).id(`gregification:${tData.tier}_imbument_chamber`);
            }
            if (mData.machine == '_alchemical_workbench' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_alchemical_workbench`, [
                    'TRT',
                    'UHI',
                    'CFC'
                ], {
                    H: hull,
                    R: 'bloodmagic:alchemicalreactionchamber',
                    F: '#forge:frames/hellforged',
                    U: pump,
                    C: circuit,
                    T: plate,
                    I: piston
                }).id(`gregification:${tData.tier}_alchemical_workbench`);
            }
            if (mData.machine == '_air_compressor' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_air_compressor`, [
                    'PUP',
                    'CHC',
                    'PUP'
                ], {
                    P: plate,
                    C: circuit,
                    H: hull,
                    U: pump
                }).id(`gregification:${tData.tier}_air_compressor`);
            }
            if (mData.machine == '_reconstructor' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_reconstructor`, [
                    'PTP',
                    'WHW',
                    'PCP'
                ],
                    {
                        H: hull,
                        P: plate,
                        C: circuit,
                        W: wire,
                        T: piston
                    }).id(`gregification:${tData.tier}_reconstructor`);
            }
            if (mData.machine == '_liquifier' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_liquifier`, [
                    'PCP',
                    'UHT',
                    'PCP'
                ],
                    {
                        H: hull,
                        P: plate,
                        C: circuit,
                        U: pump,
                        T: piston
                    }).id(`gregification:${tData.tier}_liquifier`);
            }
            if (mData.machine == '_sanguine_refinery' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_sanguine_refinery`, [
                    'WTW',
                    'PHP',
                    'TCT'
                ],
                    {
                        H: hull,
                        P: pump,
                        T: plate,
                        C: circuit,
                        W: wire
                    }).id(`gregification:${tData.tier}_sanguine_refinery`);
            }
            if (mData.machine == '_unifier' && tData.t >= mData.startTier && tData.t <= mData.endTier) {                                            
                allthemods.shaped(`gtceu:${tData.tier}_unifier`, [
                    'TCT',
                    'UHV',
                    'TCT'
                ],
                    {
                        H: hull,
                        V: conveyor,
                        P: pump,
                        T: plate,
                        C: circuit
                    }).id(`gregification:${tData.tier}_unifier`);
            }
            if (mData.machine == '_gem_polisher' && tData.t >= mData.startTier && tData.t <= mData.endTier) {                
                addAssemblyLine(
                    `gtceu:${tData.tier}_gem_polisher`,
                    [
                        hull,
                        `2x ${circuit}`,
                        `2x ${piston}`,
                        `2x ${motor}`,
                        `4x ${plate}`,
                        'gtceu:tungsten_grinding_head',

                    ],
                    ['#forge:soldering_alloy 576',
                        '#forge:lubricant 2000'],
                    600,
                    tierValues[tData.t - 1]
                )
            }
        })
    });


    
    machineTiers.forEach(tData => {

        let hull = `gtceu:${tData.tier}_machine_hull`;
        let plate = `#forge:plates/${tData.structural}`;
        let circuit = `#gtceu:circuits/${tData.tier}`;
        let wire = `gtceu:${tData.conductive}_single_cable`;
        let piston = `gtceu:${tData.tier}_electric_piston`;
        let conveyor = `gtceu:${tData.tier}_conveyor_module`;
        let pump = `gtceu:${tData.tier}_electric_pump`;
        let motor = `gtceu:${tData.tier}_electric_motor`;
        let magnetic = 'gtceu:long_magnetic_eternium_rod';        
        let magnetic2 = 'gtceu:magnetic_eternium_rod';   

        if (tData.t >= 9 && tData.t <= 13) {
            //add voltage coil recipes here            
            //check
            let item = `gtceu:${tData.tier}`;
            let prev1 = machineTiers[tData.t - 1].tier;
            let prev2 = machineTiers[tData.t - 2].tier;
            let prev3 = machineTiers[tData.t - 3].tier;
            
            //voltage coil
            addAssembler(
                [
                    magnetic2,
                    `16x gtceu:fine_${tData.conductive}_wire`
                ],
                null,
                `${item}_voltage_coil`,
                tierValues[tData.t - 1],
                200,
                1
            )
            
            //robot arm        
            addAssemblyLine(
                `${item}_robot_arm`,
                [
                    `4x #forge:rods/long/${tData.structural}`,
                    `#forge:gears/${tData.component}`,
                    `3x #forge:small_gears/${tData.structural}`,
                    `2x gtceu:${tData.tier}_electric_motor`,
                    `gtceu:${tData.tier}_electric_piston`,
                    `1x #gtceu:circuits/${prev1}`,
                    `2x #gtceu:circuits/${prev2}`,
                    `4x #gtceu:circuits/${prev3}`,
                    `4x ${wire}`
                ],
                [
                    '#forge:lubricant 1000',
                    'gtceu:naquadria 576',
                    'gtceu:soldering_alloy 1728'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_robot_arm`,
                64
            )
            
            //motor
            addAssemblyLine(
                `${item}_electric_motor`,
                [
                    `${magnetic}`,
                    `2x #forge:rods/long/${tData.structural}`,
                    `2x #forge:rings/${tData.structural}`,
                    `4x #forge:rounds/${tData.structural}`,
                    `96x #forge:fine_wires/${tData.component}`,
                    `2x ${wire}`
                ],
                [
                    '#forge:lubricant 250',
                    'gtceu:soldering_alloy 144'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_electric_motor`,
                64
            )
            
            //conveyor
            addAssemblyLine(
                `${item}_conveyor_module`,
                [
                    `2x gtceu:${tData.tier}_electric_motor`,
                    `2x #forge:plates/${tData.structural}`,
                    `4x #forge:rings/${tData.structural}`,
                    `16x #forge:rounds/${tData.structural}`,
                    `4x #forge:screws/${tData.structural}`,
                    `2x ${wire}`
                ],
                [
                    '#forge:lubricant 250',
                    'gtceu:soldering_alloy 144',
                    'gtceu:styrene_butadiene_rubber 1584'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_conveyor_module`,
                64
            )
            
            //pump
            addAssemblyLine(
                `${item}_electric_pump`,
                [
                    `gtceu:${tData.tier}_electric_motor`,
                    `#gtceu:pipes/small/${tData.metal2}`,
                    `2x #forge:plates/${tData.structural}`,
                    `8x #forge:screws/${tData.structural}`,
                    `4x gtceu:silicone_rubber_ring`,
                    `4x #forge:rotors/${tData.component}`,
                    `2x ${wire}`
                ],
                [
                    '#forge:lubricant 250',
                    'gtceu:soldering_alloy 144'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_electric_pump`,
                64
            )
            
            //piston
            addAssemblyLine(
                `${item}_electric_piston`,
                [
                    `gtceu:${tData.tier}_electric_motor`,
                    `4x #forge:plates/${tData.structural}`,
                    `4x #forge:rings/${tData.structural}`,
                    `16x #forge:rounds/${tData.structural}`,
                    `4x #forge:rods/${tData.structural}`,
                    `#forge:gears/${tData.structural}`,
                    `2x #forge:small_gears/${tData.structural}`,
                    `2x ${wire}`
                ],
                [
                    '#forge:lubricant 250',
                    'gtceu:soldering_alloy 144'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_electric_piston`,
                64
            )
            //sensor
            addAssemblyLine(
                `${item}_sensor`,
                [
                    `#forge:frames/${tData.structural}`,
                    `gtceu:${tData.tier}_electric_motor`,
                    `4x #forge:plates/${tData.component}`,
                    `gtceu:quantum_star`,
                    `${circuit}`,
                    `64x #forge:foils/chaos_plastic`,
                    `4x ${wire}`
                ],
                [
                    'gtceu:soldering_alloy 288'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_sensor`,
                64
            )
            
            //emitter
            addAssemblyLine(
                `${item}_emitter`,
                [
                    `#forge:frames/${tData.structural}`,
                    `gtceu:${tData.tier}_electric_motor`,
                    `4x #forge:rods/long/${tData.component}`,
                    `gtceu:quantum_star`,
                    `${circuit}`,
                    `64x #forge:foils/chaos_plastic`,
                    `4x ${wire}`
                ],
                [
                    'gtceu:soldering_alloy 144'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_emitter`,
                64
            )
            
            //field generator
            addAssemblyLine(
                `${item}_field_generator`,
                [
                    `#forge:frames/${tData.structural}`,
                    `6x #forge:plates/${tData.component}`,
                    `gtceu:quantum_star`,
                    `2x gtceu:${tData.tier}_emitter`,
                    `${circuit}`,
                    `128x #forge:fine_wires/${tData.component}`,
                    `4x ${wire}`
                ],
                [
                    'gtceu:soldering_alloy 288'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_field_generator`,
                64
            )
            
            //regulator
            addAssembler(
                [
                    `gtceu:${tData.tier}_electric_pump`,
                    `2x ${circuit}`
                ],
                null,
                `${item}_fluid_regulator`,
                tierValues[tData.t - 1],
                50,
                1
            )
            
            //rotor holders
            allthemods.shaped(`${item}_rotor_holder`,
                [
                    'SGS',
                    'GHG',
                    'SGS'
                ],
                {
                    H: `gtceu:${tData.tier}_machine_hull`,
                    S: `#forge:small_gears/${tData.structural}`,
                    G: `#forge:gears/${tData.component}`

                }
            ).id(`gregification:${tData.tier}_rotor_holder`);
            //energy hatch
            addAssemblyLine(
                `${item}_energy_input_hatch`,
                [
                    `gtceu:${tData.tier}_machine_hull`,
                    `4x ${wire}`,
                    `2x gtceu:uhpic_chip`,
                    `${circuit}`,
                    `2x gtceu:${tData.tier}_voltage_coil`
                ],
                [
                    'gtceu:soldering_alloy 2880',
                    'gtceu:sodium_potassium 10080'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_energy_input_hatch`,
                64
            )
            
            //dynamo hatch
            addAssemblyLine(
                `${item}_energy_output_hatch`,
                [
                    `gtceu:${tData.tier}_machine_hull`,
                    `4x #forge:springs/${tData.component}`,
                    `2x gtceu:uhpic_chip`,
                    `${circuit}`,
                    `2x gtceu:${tData.tier}_voltage_coil`
                ],
                [
                    'gtceu:soldering_alloy 2880',
                    'gtceu:sodium_potassium 10080'
                ],
                600,
                tierValues[tData.t - 1],
                `gtceu:${prev1}_energy_output_hatch`,
                64
            )
        }
    });
    
    //casings

    const materials = [
        { name: 'corrosive_etrium_alloy', tier: 'uev' },
        { name: 'destructive_scandozirconium', tier: 'uiv' },
        { name: 'vengeful_gadomeitnerium_alloy', tier: 'uxv' },
        { name: 'steadfast_rhenobedrock_alloy', tier: 'opv' },
        { name: 'demonic_antimatter_alloy', tier: 'max' }
    ]

    materials.forEach((mat, index) => {
        // Force the Casing Recipe
        allthemods.shaped(`gtceu:${mat.tier}_machine_casing`, ['PPP', 'PWP', 'PPP'], {
            P: `gtceu:${mat.name}_plate`,
            W: '#forge:tools/wrenches'
        })
        let tierKeys = Object.keys(tiers);
        let startTierIndex = tierKeys.indexOf('UHV');
        let currentTierKey = tierKeys[startTierIndex + index];
        let currentVoltage = tiers[currentTierKey];
        addAssembler(
            [`8x gtceu:${mat.name}_plate`],
            null,
            `gtceu:${mat.tier}_machine_casing`,
            LV,
            50,
            8
        );
    });

    //grind head
    allthemods.shaped('gtceu:eternium_grinding_head',
        [
            'APA',
            'PDP',
            'ADA'
        ],
        {
            A: '#forge:double_plates/draconium_awakened',
            P: '#forge:plates/eternium',
            D: 'minecraft:diamond'
        }
    )




    //lazy controllers need to change
    const materialFor = {
        hv: 'stainless_steel',
        ev: 'titanium',
        iv: 'tungsten_steel',
        luv: 'rhodium_plated_palladium',
        zpm: 'naquadah_alloy',
        uv: 'darmstadtium',
        uhv: 'neutronium'
    };

    const controllers = [
        // HV tier -> assembler (1 extra fluid)
        { id: 'water_filtration_plant', tier: 'hv', fluid: true, extra: ['4x gtceu:filter_casing'], extraFluids: ['#forge:soldering_alloy 1000'] },
        { id: 'hydro_electromagnetic_separator', tier: 'hv', fluid: true, extra: ['2x gtceu:tempered_glass', '2x gtceu:magnetic_steel_rod'], extraFluids: ['#forge:soldering_alloy 1000'] },
        { id: 'fractional_gas_separator', tier: 'hv', fluid: true, extra: ['4x #forge:rotors/stainless_steel', '4x gtceu:tempered_glass'], extraFluids: ['#forge:soldering_alloy 1000'] },
        { id: 'botanical_factory', tier: 'hv', fluid: true, extra: ['2x botania:bifrost_perm', '4x botania:rune_mana'], extraFluids: ['#forge:mana_essence 16000'] },
        { id: 'large_mana_burner', tier: 'hv', fluid: true, extra: ['4x #gtceu:wires/quadruple/kanthal', '4x botania:rune_mana'], extraFluids: ['#forge:mana_essence 16000'] },
        { id: 'large_mana_converter', tier: 'hv', fluid: true, extra: ['4x #forge:gears/terrasteel', '2x botania:bifrost_perm'], extraFluids: ['#forge:mana_essence 16000'] },

        // EV tier -> assembler (1 extra fluid)
        { id: 'ozonation_plant', tier: 'ev', fluid: true, extra: ['4x gtceu:titanium_normal_fluid_pipe'], extraFluids: ['#forge:polytetrafluoroethylene 1000'] },

        // IV tier -> assembler (1 extra fluid)
        { id: 'flocculation_plant', tier: 'iv', fluid: true, extra: ['4x gtceu:tungsten_steel_normal_fluid_pipe'], extraFluids: ['gtceu:polyaluminium_chloride 8000'] },
        { id: 'drone_station', tier: 'iv', fluid: false, extra: ['gtceu:tungsten_steel_crate', '4x #forge:gears/enderium'], extraFluids: ['gtceu:lubricant 4000'] },

        // LuV tier -> assembly_line (2 extra fluids)
        { id: 'microbial_filtration_array', tier: 'luv', fluid: true, extra: ['4x #forge:gears/rhodium_plated_palladium', '4x gtceu:cleanroom_glass'], extraFluids: ['#forge:selenium 2000', '#forge:ionized_oxygen 2000'] },

        // ZPM tier -> assembly_line (2 extra fluids)
        { id: 'laser_purification', tier: 'zpm', fluid: true, extra: ['4x gtceu:fusion_glass', '4x gtceu:superconducting_coil'], extraFluids: ['#forge:soldering_alloy 2000', '#forge:hafnium 2000'] },
        { id: 'oil_processing_plant', tier: 'zpm', fluid: true, extra: ['16x gtceu:rubidium_foil', '4x gtceu:laminated_glass'], extraFluids: ['#forge:polybenzimidazole 2000', '#forge:selenium 2000'] },

        // UV tier -> assembly_line (2 extra fluids)
        { id: 'cryogenic_unit', tier: 'uv', fluid: true, extra: ['2x #forge:rotors/strontium', '4x ad_astra:ice_shard', '4x #forge:gears/gadolinium'], extraFluids: ['#forge:blue_ice 16000', '#forge:tellurium 2000'] },

        // UHV tier -> assembly_line (2 extra fluids)
        { id: 'baryonic_separator', tier: 'uhv', fluid: false, extra: ['4x gtceu:superconducting_coil', '4x #forge:plates/rubidium'], extraFluids: ['#forge:naquadria 2000', '#forge:rubidium 2000'] },
        { id: 'baryonic_stabilizer', tier: 'uhv', fluid: true, extra: ['4x gtceu:fusion_coil', '4x #forge:gears/rubidium'], extraFluids: ['#forge:naquadria 2000', '#forge:rubidium 2000'] },
        { id: 'magnetic_containment_chamber', tier: 'uhv', fluid: true, extra: ['4x #forge:gears/francium', '4x #forge:plates/germanium'], extraFluids: ['#forge:selenium 2000', '#forge:radium 2000'] },
    ];

    const assemblerTiers = ['hv', 'ev', 'iv'];
    const assemblyLineTiers = ['luv', 'zpm', 'uv', 'uhv'];
    const eutFor = { hv: HV, ev: EV, iv: IV, luv: LuV, zpm: ZPM, uv: UV, uhv: UHV };
    const circuitCountFor = { hv: 1, ev: 1, iv: 1, luv: 2, zpm: 2, uv: 2, uhv: 2 };

    controllers.forEach(function (c) {
        let hull = 'gtceu:' + c.tier + '_machine_hull';
        let circuit = circuitCountFor[c.tier] + 'x #gtceu:circuits/' + c.tier;
        let plate = '2x #forge:plates/' + materialFor[c.tier];
        let movementPart = c.fluid
            ? '2x gtceu:' + c.tier + '_electric_pump'
            : '2x gtceu:' + c.tier + '_conveyor_module';
        let motor = '2x gtceu:' + c.tier + '_electric_motor';
        let eu = eutFor[c.tier];

        let inputs = [hull, circuit, movementPart, motor, plate].concat(c.extra);
        //console.error (inputs)
        if (assemblerTiers.indexOf(c.tier) !== -1) {
            let recipe = allthemods.recipes.gtceu.assembler('bacteria/craft_' + c.id);
            recipe.itemInputs.apply(recipe, inputs);
            if (c.extraFluids && c.extraFluids.length) {
                recipe.inputFluids.apply(recipe, c.extraFluids);
            }
            recipe.itemOutputs('gtceu:' + c.id)
                .duration(300)
                .EUt(eu);
        } else if (assemblyLineTiers.indexOf(c.tier) !== -1) {
            let recipe = allthemods.recipes.gtceu.assembly_line('bacteria/craft_' + c.id);
            recipe.itemInputs.apply(recipe, inputs);
            if (c.extraFluids && c.extraFluids.length) {
                recipe.inputFluids.apply(recipe, c.extraFluids);
            }
            recipe.itemOutputs('gtceu:' + c.id)
                .duration(600)
                .EUt(eu);
        }
    });
});