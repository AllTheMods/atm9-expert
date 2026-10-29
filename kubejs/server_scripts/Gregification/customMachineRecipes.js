// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

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
        { machine: '_enchanting_apparatus', startTier: 3, endTier: 8 },
        { machine: '_scribes_table', startTier: 3, endTier: 8 },
        //{ machine: '_alchemical_workbench', startTier: 4, endTier: 8 },
        { machine: '_sanguine_alchemy', startTier: 1, endTier: 8 },
        { machine: '_sanguine_forge', startTier: 1, endTier: 8 },
        { machine: '_sanguine_arc', startTier: 1, endTier: 8 },
        { machine: '_sanguine_array', startTier: 1, endTier: 8 },
        { machine: '_air_compressor', startTier: 1, endTier: 8 },
        { machine: '_reconstructor', startTier: 2, endTier: 8 },
        { machine: '_liquifier', startTier: 2, endTier: 8 },
        { machine: '_sanguine_refinery', startTier: 2, endTier: 8 },
        { machine: '_unifier', startTier: 2, endTier: 8 },        
        { machine: '_gem_polisher', startTier: 6, endTier: 8 },
        { machine: '_gem_crusher', startTier: 3, endTier: 8 },
        { machine: '_botanical_brewery', startTier: 3, endTier: 8 },
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
            if (mData.machine == '_botanical_brewery' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_botanical_brewery`, [
                    'TAT',
                    'CHC',
                    'TUT'
                ], {
                    H: hull,
                    A: 'botania:brewery',
                    U: pump,
                    C: circuit,
                    T: plate
                }).id(`gregification:${tData.tier}_botanical_brewery`);
            }
            if (mData.machine == '_enchanting_apparatus' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_enchanting_apparatus`, [
                    'TAT',
                    'CHC',
                    'TUT'
                ], {
                    H: hull,
                    A: 'ars_nouveau:enchanting_apparatus',
                    U: pump,
                    C: circuit,
                    T: plate
                }).id(`gregification:${tData.tier}_enchanting_apparatus`);
            }
            if (mData.machine == '_scribes_table' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_scribes_table`, [
                    'TAT',
                    'CHC',
                    'TUT'
                ], {
                    H: hull,
                    A: 'ars_nouveau:scribes_table',
                    U: pump,
                    C: circuit,
                    T: plate
                }).id(`gregification:${tData.tier}_scribes_table`);
            }
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
            /*if (mData.machine == '_alchemical_workbench' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
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
            }*/
           
            if (mData.machine == '_sanguine_alchemy' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_sanguine_alchemy`, [
                    'TRT',
                    'UHI',
                    'CFC'
                ], {
                    H: hull,
                    R: 'bloodmagic:alchemytable',
                    F: '#forge:frames/hellforged',
                    U: pump,
                    C: circuit,
                    T: plate,
                    I: piston
                }).id(`gregification:${tData.tier}_sanguine_alchemy`);
            }

            if (mData.machine == '_sanguine_forge' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_sanguine_forge`, [
                    'TRT',
                    'UHI',
                    'CFC'
                ], {
                    H: hull,
                    R: 'bloodmagic:soulforge',
                    F: '#forge:frames/hellforged',
                    U: pump,
                    C: circuit,
                    T: plate,
                    I: piston
                }).id(`gregification:${tData.tier}_sanguine_forge`);
            }

            if (mData.machine == '_sanguine_arc' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_sanguine_arc`, [
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
                }).id(`gregification:${tData.tier}_sanguine_arc`);
            }

            if (mData.machine == '_sanguine_array' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_sanguine_array`, [
                    'TRT',
                    'UHI',
                    'CFC'
                ], {
                    H: hull,
                    R: 'bloodmagic:arcaneashes',
                    F: '#forge:frames/hellforged',
                    U: pump,
                    C: circuit,
                    T: plate,
                    I: piston
                }).id(`gregification:${tData.tier}_sanguine_array`);
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
                        U: pump,
                        V: conveyor,                        
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
            if (mData.machine == '_gem_crusher' && tData.t >= mData.startTier && tData.t <= mData.endTier) {
                allthemods.shaped(`gtceu:${tData.tier}_gem_crusher`, [
                    'TIT',
                    'MHM',
                    'CGC'
                ], {
                    H: hull,
                    T: plate,
                    C: circuit,
                    I: piston,
                    M: motor,
                    G: 'gtceu:diamond_grinding_head'
                }).id(`gregification:${tData.tier}_gem_crusher`);
            }
        })
    });



    machineTiers.forEach(tData => {

        let hull = `gtceu:${tData.tier}_machine_hull`;
        let plate = `#forge:plates/${tData.structural}`;
        let circuit = `#gtceu:circuits/${tData.tier}`;
        let wire = `gtceu:${tData.conductive}_single_cable`;
        let fluid = `#forge:naquadria_awakened ${(tData.t - 3) * 144}`;
        let solder = `#forge:soldering_alloy ${(tData.t + 4) * 144}`;
        let lubricant = '#forge:lubricant 1000'
        let rubber = `#forge:styrene_butadiene_rubber ${((tData.t - 5) * 8) * 144}`

        let magnetic = '';
        let magnetic2 = '';
        if (tData.magnetic) {
            magnetic =  `#forge:rods/long/magnetic_${tData.magnetic}`;
            magnetic2 = `#forge:rods/magnetic_${tData.magnetic}`;
        }
        let gem = '';
        switch (tData.tier) {
            case 'uev':
            case 'uiv':
            case 'uxv':
            case 'opv':
                gem = `#forge:exquisite_gems/${tData.structural.split('_')[0]}`
                break;
            case 'max':
                gem = '#forge:exquisite_gems/demon'
                break;
            default:
                gem = '#forge:exquisite_gems/nitro_crystal'
                break;
        }

        if (tData.t >= 9 && tData.t <= 13) {
            //add voltage coil recipes here            
            //check
            let item = `gtceu:${tData.tier}`;
            let prev1 = machineTiers[tData.t - 1].tier;
            let prev2 = machineTiers[tData.t - 2].tier;
            let prev3 = machineTiers[tData.t - 3].tier;

            let prevTier = machineTiers[tData.t - 2].tier
            let prevEU   = tierValues[tData.t - 2]            

            //robot arm        
            addAssemblyLine(
                `${item}_robot_arm`,
                [
                    `4x #forge:rods/long/${tData.structural}`,
                    `#forge:gears/${tData.structural}`,
                    `3x #forge:small_gears/${tData.structural}`,
                    `2x gtceu:${tData.tier}_electric_motor`,
                    `gtceu:${tData.tier}_electric_piston`,
                    `1x #gtceu:circuits/${prev1}`,
                    `2x #gtceu:circuits/${prev2}`,
                    `4x #gtceu:circuits/${prev3}`,
                    `4x ${wire}`
                ],
                [
                    solder,
                    lubricant,
                    fluid
                    
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_robot_arm`,
                64
            );

            //motor
            addAssemblyLine(
                `${item}_electric_motor`,
                [
                    `${magnetic}`,
                    `4x #forge:rods/long/${tData.structural}`,
                    `4x #forge:rings/${tData.structural}`,
                    `8x #forge:rounds/${tData.structural}`,
                    `64x #forge:fine_wires/${tData.component}`,
                    `32x #forge:fine_wires/${tData.component}`,
                    `2x ${wire}`
                ],
                [
                    solder,
                    lubricant,
                    fluid
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_electric_motor`,
                64
            );

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
                    solder,
                    lubricant,
                    rubber,
                    fluid
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_conveyor_module`,
                64
            );

            //pump
            addAssemblyLine(
                `${item}_electric_pump`,
                [
                    `gtceu:${tData.tier}_electric_motor`,
                    `#gtceu:pipes/fluid/huge/${tData.structural}`,
                    `2x #forge:plates/${tData.structural}`,
                    `8x #forge:screws/${tData.structural}`,
                    `16x gtceu:silicone_rubber_ring`,
                    `4x #forge:rotors/${tData.component}`,
                    `2x ${wire}`
                ],
                [
                    solder,
                    lubricant,
                    fluid
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_electric_pump`,
                64
                //64
            );

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
                    solder,
                    lubricant,
                    fluid
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_electric_piston`,
                64
            );
            //sensor
            addAssemblyLine(
                `${item}_sensor`,
                [
                    `#forge:frames/${tData.structural}`,
                    `gtceu:${tData.tier}_electric_motor`,
                    `4x #forge:plates/${tData.component}`,
                    `2x ${gem}`,
                    `2x ${circuit}`,
                    `64x #forge:foils/${tData.polymer}`,
                    `32x #forge:foils/${tData.polymer}`,
                    `4x ${wire}`
                ],
                [
                    solder,
                    fluid
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_sensor`,
                64
            );

            //emitter
            addAssemblyLine(
                `${item}_emitter`,
                [
                    `#forge:frames/${tData.structural}`,
                    `gtceu:${tData.tier}_electric_motor`,
                    `4x #forge:rods/long/${tData.component}`,
                    `2x ${gem}`,
                    `2x ${circuit}`,
                    `64x #forge:foils/${tData.polymer}`,
                    `32x #forge:foils/${tData.polymer}`,
                    `4x ${wire}`
                ],
                [
                    solder,
                    fluid
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_emitter`,
                64
            );

            
            //field generator
            addAssemblyLine(
                `${item}_field_generator`,
                [
                    `#forge:frames/${tData.structural}`,
                    `6x #forge:plates/${tData.structural}`,
                    gem,
                    `2x gtceu:${tData.tier}_emitter`,
                    `2x ${circuit}`,
                    `64x #forge:fine_wires/${tData.component}`,
                    `64x #forge:fine_wires/${tData.component}`,
                    `4x ${wire}`
                ],
                [
                    solder,
                    fluid
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_field_generator`,
                64
            );

            //regulator
            addAssembler(
                [
                    `gtceu:${tData.tier}_electric_pump`,
                    `2x ${circuit}`
                ],
                null,
                `${item}_fluid_regulator`,
                prevEU,
                50,
                1
            );

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
            
            //quantum chest
            if (tData.t > 9) {
                allthemods.shaped(`gtceu:${tData.tier}_quantum_chest`,
                    [
                        'CPC',
                        'PHP',
                        'CFC'
                    ], {
                    C: circuit,
                    H: hull,
                    P: plate,
                    F: `gtceu:${prevTier}_field_generator`
                }).id(`gregification:${tData.tier}_quantum_chest`)
            }            
        }
        if (tData.t >= 9) {

            let item = `gtceu:${tData.tier}`;            

            let prevTier = machineTiers[tData.t - 2].tier
            let prevEU   = tierValues[tData.t - 2]

            //voltage coil
            addAssembler(
                [
                    magnetic2,
                    `16x gtceu:fine_${tData.conductive}_wire`
                ],
                null,
                `${item}_voltage_coil`,
                prevEU,
                200,
                1
            )

            if (tData.t >= 10) {
                //casing
                allthemods.shaped(`gtceu:${tData.tier}_machine_casing`, ['PPP', 'PWP', 'PPP'], {
                P: plate,
                W: '#forge:tools/wrenches'}).id(`gregification:${tData.tier}_machine_casing`)
            
                addAssembler(
                    [`8x ${plate}`],
                    null,
                    `gtceu:${tData.tier}_machine_casing`,
                    LV,
                    50,
                    8
                );

                //machine hull
                addAssembler(          
                    [`gtceu:${tData.tier}_machine_casing`,`2x ${wire}`],
                    `#forge:${tData.polymer} 288`,
                    `gtceu:${tData.tier}_machine_hull`,
                    LV,
                    50
                );
            }
            
            //energy hatch
            addAssemblyLine(
                `${item}_energy_input_hatch`,
                [
                    `gtceu:${tData.tier}_machine_hull`,
                    `4x ${wire}`,
                    `2x gtceu:${tData.tier}_pic_chip`,
                    `${circuit}`,
                    `2x gtceu:${tData.tier}_voltage_coil`
                ],
                [
                    `#forge:sodium_potassium ${(tData.t - 3) * 2000}`,
                    `#forge:soldering_alloy 4320`
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_energy_input_hatch`,
                64
            );

            //dynamo hatch
            addAssemblyLine(
                `${item}_energy_output_hatch`,
                [
                    `gtceu:${tData.tier}_machine_hull`,
                    `4x #forge:springs/${tData.component}`,
                    `2x gtceu:${tData.tier}_pic_chip`,
                    `${circuit}`,
                    `2x gtceu:${tData.tier}_voltage_coil`
                ],
                [
                    `#forge:sodium_potassium ${(tData.t - 3) * 2000}`,
                    `#forge:soldering_alloy 4320`
                ],
                600,
                prevEU,
                `gtceu:${prevTier}_energy_output_hatch`,
                64
            );

            //nonuple
            allthemods.shaped(`gtceu:${tData.tier}_output_hatch_9x`, [' P ', ' H ', '   '], {
                P: `gtceu:${tData.tier}_output_hatch`,
                H: `gtceu:${tData.structural}_nonuple_fluid_pipe`}
            ).id(`gregification:${tData.tier}_nonuple_output_hatch`)

            allthemods.shaped(`gtceu:${tData.tier}_input_hatch_9x`, [' P ', ' H ', '   '], {
                P: `gtceu:${tData.tier}_input_hatch`,
                H: `gtceu:${tData.structural}_nonuple_fluid_pipe`}
            ).id(`gregification:${tData.tier}_nonuple_input_hatch`)

            //quadruple
            allthemods.shaped(`gtceu:${tData.tier}_output_hatch_4x`, [' P ', ' H ', '   '], {
                P: `gtceu:${tData.tier}_output_hatch`,
                H: `gtceu:${tData.structural}_quadruple_fluid_pipe`}
            ).id(`gregification:${tData.tier}_quadruple_output_hatch`)

            allthemods.shaped(`gtceu:${tData.tier}_input_hatch_4x`, [' P ', ' H ', '   '], {
                P: `gtceu:${tData.tier}_input_hatch`,
                H: `gtceu:${tData.structural}_quadruple_fluid_pipe`}
            ).id(`gregification:${tData.tier}_quadruple_input_hatch`)
        }
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
    
    allthemods.recipes.gtceu.assembler('gregification:craft_arcane_atelier')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '2x gtceu:hv_electric_motor',
            '2x #forge:plates/stainless_steel',
            '2x ars_nouveau:arcane_pedestal',
            '1x ars_nouveau:enchanting_apparatus',
            '2x gtceu:sourcestone_plating_casing'
        )
        .inputFluids('#forge:source 16000')
        .itemOutputs('gtceu:arcane_atelier')
        .duration(300)
        .EUt(HV);


});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
