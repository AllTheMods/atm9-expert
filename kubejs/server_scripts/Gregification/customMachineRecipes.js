//@ts-check
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const tiers = {
        ULV: 8,
        LV: 32,
        MV: 128,
        HV: 512,
        EV: 2048,
        IV: 8192,
        LuV: 32768,
        ZPM: 131072,
        UV: 524288,
        UHV: 2097152,
        UEV: 8388608,
        UIV: 33554432,
        UXV: 134217728,
        OpV: 536870912,
        MAX: 2147483647
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

    /**
 * Helper to add crafting recipes for custom GT machines.
 * @param {string} machineID - The registry name of the machine.
 * @param {string[]} pattern - The 3x3 crafting grid pattern.
 * @param {Object} keys - The mapping of characters in the pattern to items/tags.
 */
    const addMachineRecipe = (machineID, pattern, keys) => {
        // Generate a clean ID for the recipe
        const recipeID = machineID.replace(':', '_');

        allthemods.shaped(machineID, pattern, keys).id(`gregification:machine/${recipeID}`);
    };

    // Define your tiers
    const machineTiers = [
        { t: 1, tier: 'lv', metal: 'steel', metal2: 'tin' },
        { t: 2, tier: 'mv', metal: 'aluminum', metal2: 'copper' },
        { t: 3, tier: 'hv', metal: 'stainless_steel', metal2: 'gold' },
        { t: 4, tier: 'ev', metal: 'titanium', metal2: 'aluminium' },
        { t: 5, tier: 'iv', metal: 'tungsten_steel', metal2: 'platinum' },
        { t: 6, tier: 'luv', metal: 'rhodium_plated_palladium', metal2: 'niobium_titanium' },
        { t: 7, tier: 'zpm', metal: 'naquadah_alloy', metal2: 'vanadium_gallium' },
        { t: 8, tier: 'uv', metal: 'darmstadtium', metal2: 'yttrium_barium_cuprate' },
        { t: 9, tier: 'uhv', metal: 'draconium_awakened', metal2: 'alloy_atomic' },
        { t: 10, tier: 'uev', metal: 'eternium', metal2: 'alltheneutronium' },
        { t: 11, tier: 'uiv', metal: 'cosmic_alloy', metal2: 'vibtronium' },
        { t: 12, tier: 'uxv', metal: 'antimatter_alloy', metal2: 'unobtronium' },
        { t: 13, tier: 'opv', metal: 'singularity_alloy', metal2: 'deorum_alloy' },
        { t: 14, tier: 'max', metal: 'absolute_alloy', metal2: 'demonic_alloy' }
    ];

    addAssembler(
        [
            '4x #forge:small_gears/desh',
            '4x #forge:gears/titanium',
            '2x #gtceu:circuits/ev',
            '2x gtceu:ev_electric_piston',
            'gtceu:ev_machine_hull',
            '4x #forge:rods/long/enderium',
            '16x #forge:screws/terrasteel'
        ],
        [
            'gtceu:soldering_alloy 576',
            'gtceu:polytetrafluoroethylene 576'
        ],
        'gtceu:empowerer',
        EV,
        1200
    )

    //superconducting coil blocks will need to be replaced
    addAssemblyLine(
        'gtceu:atmospheric_collector',
        [
            '8x #forge:plates/rhodium_plated_palladium',
            '4x gtceu:niobium_titanium_huge_fluid_pipe',
            '8x gtceu:luv_electric_motor',
            '2x gtceu:luv_electric_pump',
            'gtceu:luv_machine_hull',
            '4x #gtceu:circuits/luv'
        ],
        [
            'gtceu:soldering_alloy 1152',
            'gtceu:polybenzimidazole 1152'
        ],
        1200,
        LuV,
        'gtceu:vacuum_freezer'
    )



    machineTiers.forEach(tData => {
        let bConverter = `gtceu:${tData.tier}_mana_converter`;
        let bBurner = `gtceu:${tData.tier}_mana_burner`;       

        let bPetal = `gtceu:${tData.tier}_petal_apothecary`;
        let bRunic = `gtceu:${tData.tier}_runic_altar`;
        //let bInfuser = `gtceu:${tData.tier}_mana_infuser`;
        let bPortal = `gtceu:${tData.tier}_alfheim_trader`;
        let bPool = `gtceu:${tData.tier}_mana_pool`;
        let aChamber = `gtceu:${tData.tier}_imbument_chamber`;
        let baChamber = `gtceu:${tData.tier}_alchemical_workbench`;
        let airCompressor = `gtceu:${tData.tier}_air_compressor`;

        let machineR = `gtceu:${tData.tier}_reconstructor`;
        let machineL = `gtceu:${tData.tier}_liquifier`;
        let machineS = `gtceu:${tData.tier}_sanguine_refinery`;
        let machineU = `gtceu:${tData.tier}_unifier`;
        let machineG = `gtceu:${tData.tier}_gem_polisher`;
        let hull = `gtceu:${tData.tier}_machine_hull`;
        let plate = `#forge:plates/${tData.metal}`;
        let circuit = `#gtceu:circuits/${tData.tier}`;        
        let wire = `gtceu:${tData.metal2}_single_cable`;
        let piston = `gtceu:${tData.tier}_electric_piston`;
        let conveyor = `gtceu:${tData.tier}_conveyor_module`;
        let pump = `gtceu:${tData.tier}_electric_pump`;
        let motor = `gtceu:${tData.tier}_electric_motor`;
        let magnetic = 'gtceu:long_magnetic_eternium_rod';        
        let magnetic2 = 'gtceu:magnetic_eternium_rod';        

        if (tData.t >= 1 && tData.t <= 8) {
            allthemods.shaped(airCompressor, [
                'PUP',
                'CHC',
                'PUP'
            ], {
                P: plate,
                C: circuit,
                H: hull,                
                U: pump
            }).id(`gregification:${airCompressor.split(':')[1]}`); 

        }
        if (tData.t == 3) {
            addAssembler(
                [
                    'botania:fabulous_pool','ars_nouveau:source_jar',`gtceu:${tData.tier}_energy_input_hatch`,hull, `2x ${pump}`, circuit, `2x ${plate}`
                ],
                null,
                bConverter,
                tierValues[tData.t - 1],
                600,
                11
            );       
             addAssembler(
                [
                    'botania:fabulous_pool','ars_nouveau:source_jar',`gtceu:${tData.tier}_energy_input_hatch`,hull, `2x ${pump}`, circuit, `2x ${plate}`
                ],
                null,
                bBurner,
                tierValues[tData.t - 1],
                600,
                12
            );              
        }

        if (tData.t >= 3 && tData.t <= 8) {
            addAssembler(
                [
                    'ars_nouveau:imbuement_chamber', hull, `2x ${pump}`, piston, `2x ${circuit}`, `4x ${plate}`
                ],
                [
                    '#forge:source 1440'
                ],
                aChamber,
                tierValues[tData.t - 1],
                600
            );     
            

            if (tData.t >= 4){
            addAssembler(
                [
                    'bloodmagic:alchemicalreactionchamber', '2x #forge:frames/hellforged', 'bloodmagic:alchemytable', hull, `2x ${pump}`, piston, `2x ${circuit}`, `4x ${plate}`
                ],
                [
                    '#forge:sanguine_concentrate 1440'
                ],
                baChamber,
                tierValues[tData.t - 1],
                600
            );}
            

            addAssembler(
                [
                    'botania:fabulous_pool', hull, pump, `2x ${circuit}`, `8x ${plate}`
                ],
                [
                    '#forge:mana_essence 9200'                    
                ],
                bPool,
                tierValues[tData.t - 1],
                600
            );   
             

            addAssembler(
                [
                    'botania:alfheim_portal', '2x botania:natura_pylon', hull, pump, `2x ${circuit}`, `4x ${plate}`, `2x ${motor}`
                ],
                [
                    '#forge:mana_essence 36800'                    
                ],
                bPortal,
                tierValues[tData.t - 1],
                600
            ); 

            addAssembler(
                [
                    'botania:apothecary_default', hull, pump, piston, circuit, `4x ${plate}`
                ],
                [
                    '#forge:mana_essence 9200'                    
                ],
                bPetal,
                tierValues[tData.t - 1],
                600
            );    

            addAssembler(
                [
                    'botania:runic_altar', hull, pump, `2x ${piston}`, `2x ${circuit}`, `2x ${plate}`
                ],
                [
                    '#forge:mana_essence 9200'                
                ],
                bRunic,
                tierValues[tData.t - 1],
                600
            );                            
        }

        if (tData.t >= 6 && tData.t <= 8) {
            addAssemblyLine(
                machineG,
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
        if (tData.t >= 2 && tData.t <= 8) {
            addMachineRecipe(
                machineU,
                [
                    'BTB',
                    'PHP',
                    'BCB'
                ],
                {
                    'H': hull,
                    'P': pump,
                    'T': piston,
                    'C': circuit,
                    'B': 'minecraft:book'
                    
                }
            );
            addMachineRecipe(
                machineS,
                [
                    'WTW',
                    'PHP',
                    'TCT'
                ],
                {
                    'H': hull,
                    'P': pump,
                    'T': plate,
                    'C': circuit,
                    'W': wire
                    
                }
            );
            addMachineRecipe(
                machineR,
                [
                    'PTP',
                    'WHW',
                    'PCP'
                ],
                {
                    'H': hull,
                    'P': plate,
                    'C': circuit,
                    'W': wire,
                    'T': piston
                }
            );
            addMachineRecipe(
                machineL,
                [
                    'PCP',
                    'UHT',
                    'PCP'
                ],
                {
                    'H': hull,
                    'P': plate,
                    'C': circuit,
                    'U': pump,
                    'T': piston
                }
            );
        }
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
                    `16x gtceu:fine_${tData.metal2}_wire`
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
                    `4x #forge:rods/long/${tData.metal}`,
                    `#forge:gears/${tData.metal}`,
                    `3x #forge:small_gears/${tData.metal}`,
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
                    `2x #forge:rods/long/${tData.metal}`,
                    `2x #forge:rings/${tData.metal}`,
                    `4x #forge:rounds/${tData.metal}`,
                    `96x #forge:fine_wires/${tData.metal2}`,
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
                    `2x #forge:plates/${tData.metal}`,
                    `4x #forge:rings/${tData.metal}`,
                    `16x #forge:rounds/${tData.metal}`,
                    `4x #forge:screws/${tData.metal}`,
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
                    `2x #forge:plates/${tData.metal}`,
                    `8x #forge:screws/${tData.metal}`,
                    `4x gtceu:silicone_rubber_ring`,
                    `4x #forge:rotors/${tData.metal2}`,
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
                    `4x #forge:plates/${tData.metal}`,
                    `4x #forge:rings/${tData.metal}`,
                    `16x #forge:rounds/${tData.metal}`,
                    `4x #forge:rods/${tData.metal}`,
                    `#forge:gears/${tData.metal}`,
                    `2x #forge:small_gears/${tData.metal}`,
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
                    `#forge:frames/${tData.metal}`,
                    `gtceu:${tData.tier}_electric_motor`,
                    `4x #forge:plates/${tData.metal2}`,
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
                    `#forge:frames/${tData.metal}`,
                    `gtceu:${tData.tier}_electric_motor`,
                    `4x #forge:rods/long/${tData.metal2}`,
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
                    `#forge:frames/${tData.metal}`,
                    `6x #forge:plates/${tData.metal2}`,
                    `gtceu:quantum_star`,
                    `2x gtceu:${tData.tier}_emitter`,
                    `${circuit}`,
                    `128x #forge:fine_wires/${tData.metal2}`,
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
            addMachineRecipe(
                `${item}_rotor_holder`,
                [
                    'SGS',
                    'GHG',
                    'SGS'
                ],
                {
                    'H': `gtceu:${tData.tier}_machine_hull`,
                    'S': `#forge:small_gears/${tData.metal}`,
                    'G': `#forge:gears/${tData.metal2}`

                }
            );
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
                    `4x #forge:springs/${tData.metal2}`,
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
        { name: 'eternium', tier: 'uev' },
        { name: 'cosmic_alloy', tier: 'uiv' },
        { name: 'singularity_alloy', tier: 'uxv' },
        { name: 'antimatter_alloy', tier: 'opv' },
        { name: 'absolute_alloy', tier: 'max' }
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
            currentVoltage,
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
    const eutFor = { hv: 480, ev: 1920, iv: 7680, luv: 30720, zpm: 122880, uv: 491520, uhv: 1966080 };
    const circuitCountFor = { hv: 1, ev: 1, iv: 1, luv: 2, zpm: 2, uv: 2, uhv: 2 };
 
    controllers.forEach(function(c) {
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