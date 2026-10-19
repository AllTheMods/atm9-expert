ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    /*const tiers = {
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
    };*/

    const mekShort = 100;
    const mekLong = 1000;
    
    const addAssemblyLine = (output, inputs, fluids, duration, eu, researchItem, CWUt) => {

        let itemName = output.replace(/^\d+x\s+/, '').replace(':', '_');
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
                    b.researchStack(researchItem)
                        .EUt(eu / 4)
                        .CWUt(CWUt)
                );
            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }
    };




    
    //farming for blockheads - market
    addAssemblyLine("farmingforblockheads:market",
        [
            '#forge:frames/naquamodium',
            "allthemodium:allthemodium_hoe",
            '2x #forge:double_plates/ferrognetic',
            '4x #forge:gears/terrasteel',
            '8x #forge:plates/emerald'
        ],
        [
            'gtceu:aetheric_sanguine_singularity 32000',
            'gtceu:super_coolant 64000',
        ],
        mekLong,
        LuV,
        "allthemodium:allthemodium_hoe"
    );

    //draconic evolution - bacterial vat
    addAssemblyLine('gtceu:bacterial_vat',
        [
            'gtceu:luv_machine_hull',
            '8x #forge:frames/ferrognetic',
            '4x #gtceu:circuits/luv',
            '4x #forge:rods/protactinium',
            '32x gtceu:plascrete'
            
        ],
        [
            '#forge:selenium 1000',
            '#forge:lubricant 1000'

        ],
        mekLong,
        LuV,
        '#forge:rods/protactinium'
    );

    
    addAssemblyLine(
        'gtceu:elven_forge',
        [
            'gtceu:luv_machine_hull',
            '8x #forge:plates/vibranium',
            '8x #forge:rods/long/desh',
            '#forge:frames/ferrognetic',
            '2x #gtceu:circuits/luv',            
            '32x gtceu:plascrete'
        ],
        [
            '#forge:terrasteel 576',
            '#forge:selenium 576',
            '#forge:gaia 576'
        ],
        mekLong,
        LuV,
        '#forge:ingots/gaia'
    );
    
    //working on this recipe
    addAssemblyLine(
        'gtceu:magical_soil',
        [
            '#kubejs:farmland/insanium',
            '4x #forge:storage_blocks/insanium_essence'
        ],
        [
            '#forge:saturated_tau 10000',
            '#forge:saturated_life_fertilizer 10000'
        ],
        mekShort,
        LuV,
        'mysticalagradditions:insanium_block'
    );

    

    //mekanism - steel casing
    addAssemblyLine('mekanism:steel_casing',
        [
            'thermal:machine_frame',
            '4x #forge:plates/osmiridium',
            '4x #forge:plates/hafnium',
            '8x #forge:gears/plastic',
            '2x #forge:rods/hop_graphite',
        ],
        [
            '#forge:soldering_alloy 288',
            '#forge:lubricant 288'
        ],
        mekShort,
        LuV,
        'thermal:machine_frame'
    );

    //mekanism - energized smelter
    addAssemblyLine('mekanism:energized_smelter',
        [
            'mekanism:steel_casing',
            '4x gtceu:hssg_quadruple_wire',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - enrichment chamber
    addAssemblyLine('mekanism:enrichment_chamber',
        [
            'mekanism:steel_casing',
            '4x #forge:rods/rhodium_plated_palladium',
            '4x #forge:plates/hafnium',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - rotary condensentrator
    addAssemblyLine('mekanism:rotary_condensentrator',
        [
            'mekanism:steel_casing',            
            '4x #forge:plates/hafnium',
            '2x gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            '4x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - chemical oxidier
    addAssemblyLine('mekanism:chemical_oxidizer',
        [
            'mekanism:steel_casing',            
            'gtceu:luv_electric_motor',
            'gtceu:luv_conveyor_module',
            '4x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'            
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - chemical infuser
    addAssemblyLine('mekanism:chemical_infuser',
        [
            'mekanism:steel_casing',   
            'gtceu:luv_conveyor_module',         
            'gtceu:luv_electric_motor',            
            '6x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv',
            '4x #forge:plates/alloy_infused'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - electrolytic separator
    addAssemblyLine('mekanism:electrolytic_separator',
        [
            'mekanism:steel_casing',
            'mekanism:electrolytic_core',
            '2x #forge:plates/alloy_infused',
            'gtceu:luv_electric_motor',            
            'gtceu:luv_electric_pump',
            '2x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'            
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - chemical dissolution chamber
    addAssemblyLine('mekanism:chemical_dissolution_chamber',
        [
            'mekanism:steel_casing',
            '4x #forge:plates/refined_obsidian',            
            '2x gtceu:luv_electric_pump',
            'gtceu:luv_electric_motor',            
            '6x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'            
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - chemical washer
    addAssemblyLine('mekanism:chemical_washer',
        [
            'mekanism:steel_casing',
            '4x gtceu:luv_electric_pump',
            '4x #forge:plates/refined_obsidian',
            'gtceu:luv_electric_motor',            
            '2x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'            
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - teleporter
    addAssemblyLine('mekanism:teleporter',
        [
            'mekanism:steel_casing',
            'mekanism:teleportation_core',
            'gtceu:luv_emitter',
            'gtceu:luv_sensor',            
            '4x #forge:plates/hafnium',            
            '4x #gtceu:circuits/luv',
            '4x #forge:plates/alloy_atomic'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',            
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

        //mekanism - teleporter frame
    addAssemblyLine('9x mekanism:teleporter_frame',
        [
            'mekanism:steel_casing',   
            '4x #forge:plates/graphite',         
            '4x #forge:plates/hafnium',            
            '4x #forge:plates/alloy_atomic',
            '8x #forge:rods/rhodium_plated_palladium'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',            
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - teleportation core
    addAssemblyLine('mekanism:teleportation_core',
        [            
            '4x gtceu:luv_field_generator',
            '64x #forge:rings/hafnium',            
            '16x #gtceu:circuits/luv',
            '16x #forge:plates/alloy_atomic'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',            
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - digital miner
    addAssemblyLine('mekanism:digital_miner',
        [
            'mekanism:steel_casing',
            'mekanism:teleportation_core',
            'gtceu:luv_field_generator',            
            '16x #forge:plates/hafnium',            
            '8x #gtceu:circuits/luv',
            '8x #forge:plates/alloy_atomic',
            '#occultism:miners/eldritch'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',            
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - logistical sorter
    addAssemblyLine('mekanism:logistical_sorter',
        [
            'mekanism:steel_casing',            
            'gtceu:luv_sensor',
            '2x gtceu:luv_electric_motor',
            '2x gtceu:luv_conveyor_module',
            '2x #gtceu:circuits/luv',
            '2x #forge:plates/rhodium_plated_palladium'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',            
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - electric pump
    addAssemblyLine('mekanism:electric_pump',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_pump',
            '2x gtceu:luv_electric_motor',            
            '2x #gtceu:circuits/luv',
            '4x #forge:plates/rhodium_plated_palladium'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - chemical crystallizer
    addAssemblyLine('mekanism:chemical_crystallizer',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_pump',
            '4x #forge:plates/refined_obsidian',
            '4x #forge:plates/hafnium',
            '4x gtceu:luv_electric_motor',                                    
            '2x #gtceu:circuits/luv'            
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - pressurised reaction chamber
    addAssemblyLine('mekanism:pressurized_reaction_chamber',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_piston',
            '2x gtceu:luv_electric_pump',            
            '4x #forge:plates/hafnium',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - mekanism:isotopic centrifuge
    addAssemblyLine('mekanism:isotopic_centrifuge',
        [
            'mekanism:steel_casing',            
            'gtceu:luv_electric_pump',            
            '6x #forge:plates/hafnium',
            '6x #forge:plates/graphite',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - resistive heater
    addAssemblyLine('mekanism:resistive_heater',
        [
            'mekanism:steel_casing',                        
            '4x #forge:plates/hafnium',
            '4x #forge:plates/graphite',
            '2x gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            'mekanism:energy_tablet'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - antiprotonic nucleosynthesizer
    addAssemblyLine('mekanism:antiprotonic_nucleosynthesizer',
        [
            'mekanism:steel_casing',
            '4x #forge:plates/alloy_atomic',
            '2x mekanism:pellet_antimatter',
            '4x #forge:plates/hafnium',
            '4x #forge:plates/graphite',
            '2x gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',            
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - pigment extractor
    addAssemblyLine('mekanism:pigment_extractor',
        [
            'mekanism:steel_casing',                        
            '4x #forge:plates/rhodium_plated_palladium',            
            '2x gtceu:luv_electric_motor',
            'gtceu:luv_electric_pump',
            '2x #gtceu:circuits/luv',            
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - pigment mixer
    addAssemblyLine('mekanism:pigment_mixer',
        [
            'mekanism:steel_casing',                        
            'gtceu:rhodium_plated_palladium_rotor',
            '4x #forge:plates/rhodium_plated_palladium',            
            'gtceu:luv_electric_motor',
            'gtceu:luv_electric_pump',
            '2x #gtceu:circuits/luv',
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - basic energy cube
    addAssemblyLine('mekanism:basic_energy_cube',
        [
            'mekanism:steel_casing',                        
            '4x #forge:plates/rhodium_plated_palladium',                                    
            '2x #gtceu:circuits/luv',
            '2x mekanism:energy_tablet',
            '2x gtceu:hpic_chip'
        ],
        [
            '#forge:sodium_potassium 1000',
            '#forge:soldering_alloy 1000'
        ],
        mekLong,
        LuV
    );

    //mekanism - advanced energy cube
    addAssemblyLine('mekanism:advanced_energy_cube',
        [
            'mekanism:basic_energy_cube',
            '4x #forge:plates/alloy_infused',
            '2x #gtceu:circuits/luv',
            '2x mekanism:energy_tablet',
            '2x gtceu:hpic_chip'
        ],
        [
            '#forge:sodium_potassium 1000',
            '#forge:soldering_alloy 1000'
        ],
        mekLong,
        LuV
    );

    //mekanism - elite energy cube
    addAssemblyLine('mekanism:elite_energy_cube',
        [
            'mekanism:advanced_energy_cube',
            '4x #forge:plates/alloy_reinforced',
            '2x #gtceu:circuits/luv',
            '2x mekanism:energy_tablet',
            '2x gtceu:hpic_chip'
        ],
        [
            '#forge:sodium_potassium 1000',
            '#forge:soldering_alloy 1000'
        ],
        mekLong,
        LuV
    );

    //mekanism - ultimate energy cube
    addAssemblyLine('mekanism:ultimate_energy_cube',
        [
            'mekanism:elite_energy_cube',
            '4x #forge:plates/alloy_atomic',
            '2x #gtceu:circuits/luv',
            '2x mekanism:energy_tablet',
            '2x gtceu:hpic_chip'
        ],
        [
            '#forge:sodium_potassium 1000',
            '#forge:soldering_alloy 1000'
        ],
        mekLong,
        LuV
    );

    



    //mekanism - crusher
    addAssemblyLine('mekanism:crusher',
        [
            'mekanism:steel_casing',
            'gtceu:tungsten_grinding_head',
            'gtceu:luv_electric_motor',
            'gtceu:luv_electric_piston',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - osmium compressor
    addAssemblyLine('mekanism:osmium_compressor',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_piston',
            '4x #forge:plates/hafnium',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - combiner
    addAssemblyLine('mekanism:combiner',
        [
            'mekanism:steel_casing',
            'gtceu:osmiridium_rotor',
            '4x #forge:plates/hafnium',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
        null
    );

    //mekanism - purification chamber
    addAssemblyLine('mekanism:purification_chamber',
        [
            'mekanism:enrichment_chamber',
            '4x #forge:plates/osmiridium',
            '4x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - chemical injection chamber
    addAssemblyLine('mekanism:chemical_injection_chamber',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_conveyor_module',
            'gtceu:luv_electric_pump',
            '2x #gtceu:circuits/luv',
            '4x #forge:plates/hafnium',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - precision sawmill
    addAssemblyLine('mekanism:precision_sawmill',
        [
            'mekanism:steel_casing',
            'gtceu:hsse_buzz_saw_blade',
            'gtceu:luv_electric_motor',
            'gtceu:luv_conveyor_module',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - metallurgic infuser
    addAssemblyLine('mekanism:metallurgic_infuser',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_pump',
            'gtceu:luv_electric_motor',
            '2x gtceu:luv_conveyor_module',
            '2x #gtceu:circuits/luv',
            '4x #forge:plates/hafnium',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - fusion reactor controller
    addAssemblyLine('mekanismgenerators:fusion_reactor_controller',
        [
            'gtceu:luv_fusion_reactor',
            '4x gtceu:luv_field_generator',
            '2x gtceu:luv_electric_pump',
            '2x gtceu:luv_conveyor_module',
            '8x #gtceu:circuits/luv',
            '2x mekanism:ultimate_control_circuit',
            '4x gtceu:laminated_glass',
            '16x #forge:plates/hafnium',
            '4x mekanismgenerators:fusion_reactor_frame'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
        'gtceu:luv_fusion_reactor',
        16
    );

    //mekanism - fusion reactor frame
    addAssemblyLine('mekanismgenerators:fusion_reactor_frame',
        [
            'gtceu:fusion_casing',
            '2x gtceu:laminated_glass',
            '4x #forge:plates/alloy_atomic',
            '16x #forge:rods/hafnium',
            '4x mekanism:pellet_polonium'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
    );

    //mekanism - fusion reactor port
    addAssemblyLine('mekanismgenerators:fusion_reactor_port',
        [
            'mekanismgenerators:fusion_reactor_frame',
            '2x gtceu:laminated_glass',
            'gtceu:luv_input_bus',
            'gtceu:luv_input_hatch',
            'mekanism:ultimate_control_circuit',
            '16x #forge:rods/hafnium',
            '#gtceu:circuits/luv'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - sps casing
    addAssemblyLine('mekanism:sps_casing',
        [
            '4x mekanism:hdpe_sheet',
            '#forge:frames/strontium_aluminate',
            '4x mekanism:pellet_polonium',
            '4x mekanism:pellet_plutonium',
            '4x #forge:plates/scandium',
            '2x mekanism:ultimate_control_circuit',
            '2x #forge:plates/alloy_atomic',
            '#gtceu:circuits/luv'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
        'mekanismgenerators:fusion_reactor_controller',
        16
    );

    //mekanism - sps port
    addAssemblyLine('mekanism:sps_port',
        [
            '4x mekanism:hdpe_sheet',
            'gtceu:luv_input_bus',
            'gtceu:luv_input_hatch',
            '4x #forge:rods/scandium',
            '2x mekanism:ultimate_control_circuit',
            '2x #forge:plates/alloy_atomic',
            '#gtceu:circuits/luv'

        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - fission reactor casing
    addAssemblyLine('mekanismgenerators:fission_reactor_casing',
        [
            'mekanism:steel_casing',
            '4x #forge:double_plates/hop_graphite',
            '4x #forge:rods/long/graphite',
            '16x #forge:double_plates/lead'

        ],
        [
            'gtceu:polybenzimidazole 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
        '#forge:ingots/plutonium'
    );

    //mekanism - fission reactor port
    addAssemblyLine('mekanismgenerators:fission_reactor_port',
        [
            'mekanismgenerators:fission_reactor_casing',
            'gtceu:luv_input_bus',
            'gtceu:luv_input_hatch',
            '2x mekanism:ultimate_control_circuit',
            '2x #forge:plates/alloy_atomic',
            '#gtceu:circuits/luv'

        ],
        [
            'gtceu:polybenzimidazole 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //mekanism - fission fuel assembly
    addAssemblyLine('mekanismgenerators:fission_fuel_assembly',
        [
            'mekanismgenerators:fission_reactor_casing',
            '2x mekanism:ultimate_chemical_tank',
            '2x mekanism:ultimate_control_circuit',
            '2x #forge:plates/alloy_atomic',
            '4x #forge:rods/cadmium',
            '#gtceu:circuits/luv'

        ],
        [
            'gtceu:polybenzimidazole 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV
    );

    //here
    addAssemblyLine('gtceu:gadolinium_casing',
        [
            'gtceu:luv_machine_hull',
            'gtceu:samarium_cobalt_magnetic_rotor',
            '12x #forge:plates/gadolinium',
            '12x #forge:plates/strontium_ferrite'
        ],
        [
            'gtceu:polybenzimidazole 1440',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
        'gtceu:samarium_cobalt_magnetic_rotor'
    );
    //environmental_accumulator
    addAssemblyLine(
        'gtceu:environmental_accumulator',
        [
            'gtceu:zpm_machine_hull',
            '#forge:frames/mithril',
            'evilcraft:environmental_accumulation_core',
            '16x #forge:plates/ostrum',
            '4x #gtceu:circuits/zpm',
            '8x #forge:rods/long/hafnium'
        ],
        [
            'gtceu:polybenzimidazole 1440',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
        'evilcraft:environmental_accumulation_core'
    );

    //3d printer
    addAssemblyLine(
        'gtceu:printer',
        [
            'gtceu:uv_machine_hull',
            '4x #forge:exquisite_gems/empowered_restonia',
            '4x #forge:exquisite_gems/empowered_diamatine',
            '4x #forge:exquisite_gems/empowered_palis',
            '4x #forge:exquisite_gems/empowered_emeradic',
            '2x #gtceu:circuits/uv',
            '4x gtceu:uv_electric_motor',
            '2x gtceu:uv_electric_pump',
            '6x gtceu:yttrium_barium_cuprate_single_cable'
        ],
        [
            '#forge:lubricant 1440',
            'gtceu:soldering_alloy 1440'
        ],
        2400,
        UV,
        'gtceu:uv_reconstructor'
    );

    //alchemical casing
    addAssemblyLine(
        'gtceu:alchemical_casing',
        [
            'gtceu:hexagonal_bio_composite',
            '8x #forge:plates/unobtainium',
            '4x #gtceu:circuits/uv',
            '8x naturesaura:depth_ingot'
        ],
        [
            'gtceu:mana_essence 1296',
            'gtceu:primordial_cosmic_soup 1000'

        ],
        1200,
        UV,
        'gtceu:hexagonal_bio_composite'
    );

   

    //chunk destroyer
    addAssemblyLine(
        "quarryplus:adv_quarry",
        [
            "3x quarryplus:quarry",
            "2x quarryplus:pump_plus",
            "4x minecraft:dragon_head",
            "allthecompressed:nether_star_block_3x",
            "32x #forge:plates/alloy_atomic",
            "64x #forge:plates/draconium_awakened",
            "16x thermal:redstone_servo",
            "12x #gtceu:circuits/luv"

        ],
        [
            "gtceu:europium 1152",
            "gtceu:saturated_tau 2000",
            "gtceu:primordial_cosmic_soup 2000"

        ],
        1200,
        ZPM,
        "quarryplus:quarry", 128
    );

    //enchantment mover
    addAssemblyLine(
        "quarryplus:book_mover",
        [
            "4x quarryplus:mover",            
            "4x minecraft:dragon_head",
            "allthecompressed:nether_star_block_3x",
            "16x #forge:plates/alloy_atomic",
            "32x #forge:plates/draconium_awakened",
            "8x thermal:redstone_servo",
            "12x #gtceu:circuits/luv"
        ],
        [
            "gtceu:europium 1152",
            "gtceu:saturated_tau 2000",
            "gtceu:primordial_cosmic_soup 2000"

        ],
        1200,
        LuV,
        "quarryplus:mover", 128
    );


    addAssemblyLine(
        "gtceu:thorium_single",
        [
            "8x #forge:dusts/thorium_oxide",
            "4x #forge:rods/graphite",
            '8x #forge:plates/potassium_calcium_orthosilicate'
        ],
        [
            "#forge:hop_graphite 1000",
            "#forge:selenium 1000",
            "#forge:beryllium 1000"

        ],
        1200,
        LuV,
        "#forge:dusts/thorium_oxide"
    );

    addAssemblyLine(
        "gtceu:thorium_double",
        [
            "2x gtceu:thorium_single",
            "4x #forge:rods/graphite",
            '8x #forge:plates/potassium_calcium_orthosilicate'
        ],
        [
            "#forge:hop_graphite 1000",
            "#forge:selenium 1000",
            "#forge:beryllium 1000"

        ],
        1200,
        LuV,
        "gtceu:thorium_single"
    );

    addAssemblyLine(
        "gtceu:thorium_quad",
        [
            "2x gtceu:thorium_double",
            "4x #forge:rods/graphite",
            '8x #forge:plates/potassium_calcium_orthosilicate'
        ],
        [
            "#forge:hop_graphite 1000",
            "#forge:selenium 1000",
            "#forge:beryllium 1000"

        ],
        1200,
        LuV,
        "gtceu:thorium_double"
    );

    addAssemblyLine(
        "gtceu:thorium_berkelium_single",
        [
            "8x #forge:dusts/thorium_berkelium_alloy",
            "4x #forge:rods/tellurium",
            '8x #forge:plates/potassium_calcium_orthosilicate'
        ],
        [
            "#forge:hop_graphite 1000",
            "#forge:gadolinium 1000",
            "#forge:beryllium 1000"

        ],
        1200,
        ZPM,
        "#forge:dusts/thorium_berkelium_alloy",16
    );

    addAssemblyLine(
        "gtceu:thorium_berkelium_double",
        [
            "2x gtceu:thorium_berkelium_single",
            "4x #forge:rods/tellurium",
            '8x #forge:plates/potassium_calcium_orthosilicate'
        ],
        [
            "#forge:hop_graphite 1000",
            "#forge:gadolinium 1000",
            "#forge:beryllium 1000"

        ],
        1200,
        ZPM,
        "gtceu:thorium_berkelium_single"
    );

    addAssemblyLine(
        "gtceu:thorium_berkelium_quad",
        [
            "2x gtceu:thorium_berkelium_double",
            "4x #forge:rods/tellurium",
            '8x #forge:plates/potassium_calcium_orthosilicate'
        ],
        [
            "#forge:hop_graphite 1000",
            "#forge:gadolinium 1000",
            "#forge:beryllium 1000"

        ],
        1200,
        ZPM,
        "gtceu:thorium_berkelium_double"
    );
});