// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
	const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
	const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration, rID, program) => {				
        let outputID
        if (rID){outputID = rID}
        else{outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');}
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
	
 

    allthemods.shaped('4x ae2:blank_pattern', [
        'GFG',
        'FCF',
        'AAA'
    ], {
        G: 'ae2:quartz_glass',
        F: '#forge:fine_wires/fluix',
        C: '#gtceu:circuits/mv',
        A: '#forge:plates/aluminum'
    }).id('gregification:ae2/blank_pattern')

	
	// Network casing 
	addAssembler(
        [
            'gtceu:mv_machine_casing',
            '2x #gtceu:circuits/mv',
            '2x #forge:plates/energetic_alloy',
            'gtceu:lv_emitter',
            'gtceu:lv_sensor',
            '2x gtceu:soularium_quadruple_wire'
        ],
        'gtceu:soldering_alloy 144',
        'gtceu:network_casing',
        MV, // MV Voltage
        600  // 30 Seconds
    );
		
	//ae2 controller
	addAssembler(
		[
			'gtceu:network_casing',
			'2x gtceu:fluix_hex_wire',
			'4x ae2:engineering_processor',
            '4x #gtceu:circuits/mv'
		],
		'gtceu:soldering_alloy 244',
		'ae2:controller',
		MV, 600
	);
	
	//ae2 interface	
	allthemods.shaped('ae2:interface', [
		'PGP',
		'ANF',
		'PGP'
	], {
		P: '#forge:plates/aluminum',
		A: 'ae2:annihilation_core',
		F: 'ae2:formation_core',
		G: '2x gtceu:fluix_quadruple_wire',
		N: 'gtceu:network_casing'
	}).id('gregification:ae2/network/blocks/interfaces_interface')
	
	//ae2 storage chest    
    allthemods.shaped('ae2:chest', [
        'GTG',
        'CNC',
        'PPP'
    ], {
        G: '#forge:glass',
        T: 'ae2:terminal',
        C: 'ae2:fluix_glass_cable',
        N: 'gtceu:network_casing',
        P: '#forge:plates/aluminum'
    }).id('gregification:ae2/network/blocks/storage_chest')
	
	//ae2 drive    
    allthemods.shaped('ae2:drive', [
        'PLP',
        'CNC',
        'PLP'
    ], {
        P: '#forge:plates/aluminum',
        L: '#gtceu:circuits/mv',
        C: 'ae2:fluix_glass_cable',
        N: 'gtceu:network_casing'
    }).id('gregification:ae2/network/blocks/storage_drive')
	
	//ae2 condenser	
    allthemods.shaped('ae2:condenser', [
        'PGP',
        'LNL',
        'PPP'
    ], {
        P: '#forge:plates/aluminum',
        G: '#forge:glass',
        N: 'gtceu:network_casing',
		L: '#gtceu:circuits/mv'
    }).id('gregification:ae2/network/blocks/io_condenser')
	
	//ae2 Energy Acceptor    
    allthemods.shaped('ae2:energy_acceptor', [
        'PLP',
        'CNC',
        'PLP'
    ], {
        P: 'gtceu:double_energetic_alloy_plate',
        L: '#gtceu:circuits/mv',
        C: 'ae2:fluix_glass_cable',
        N: 'gtceu:network_casing'
    }).id('gregification:ae2/network/blocks/energy_energy_acceptor')
	
	//ae2 crafting unit    
    allthemods.shaped('ae2:crafting_unit', [
        'PLP',
        'CNC',
        'PLP'
    ], {
        P: '#forge:plates/aluminum',
        L: 'ae2:calculation_processor',
        C: 'ae2:fluix_glass_cable',
        N: 'gtceu:network_casing'
    }).id('gregification:ae2/network/crafting/cpu_crafting_unit')
	
	//ae2 quantum unit    
    allthemods.shaped('advanced_ae:quantum_unit', [
        'PCP',
        'QNQ',
        'LCL'
    ], {
        P: '#forge:plates/vibrant_alloy',
		Q: 'advanced_ae:quantum_processor', 
        L: '#gtceu:circuits/ev',
        C: 'ae2:singularity', // Keeping the thematic singularity from the original
        N: 'ae2:crafting_unit' // Upgrading a base unit to Quantum
    }).id('gregification:advanced_ae/quantumunit')
	
	//ae2 Quantum Computer Structure    
    allthemods.shaped('advanced_ae:quantum_structure', [
        'PCP',
        'LNL',
        'PCP'
    ], {
        P: '#forge:plates/vibrant_alloy',
        L: '#gtceu:circuits/ev',
        C: 'ae2:quartz_vibrant_glass',
        N: 'gtceu:network_casing'
    }).id('gregification:advanced_ae/quantumstructure')
	
	//ae2 ME Pattern Provider (Base)    
    allthemods.shaped('ae2:pattern_provider', [
        'SHS',
        'LNL',
        'SRS'
    ], {
        S: '#forge:plates/aluminum',
        H: 'gtceu:hv_emitter',
        R: 'gtceu:hv_sensor',
        L: '#gtceu:circuits/hv',
        N: 'gtceu:network_casing'
    }).id('gregification:ae2/network/blocks/pattern_providers_interface')

    //ae2 Advanced Pattern Provider    
    allthemods.shaped('advanced_ae:small_adv_pattern_provider', [
        'SHS',
        'LNL',
        'SRS'
    ], {
        S: '#forge:plates/signalum',
        H: 'gtceu:hv_emitter',
        R: 'gtceu:hv_sensor',
        L: '#forge:plates/hellforged',
        N: 'ae2:pattern_provider' // Upgrades base to Advanced
    }).id('gregification:advanced_ae/smalladvpatpro')
    
	//ae2 another pattern provider    
    allthemods.shaped('advanced_ae:adv_pattern_provider', [
        'SHS',
        'LNL',
        'SRS'
    ], {
        S: '#forge:plates/signalum',
        H: 'gtceu:hv_emitter',
        R: 'gtceu:hv_sensor',
        L: '#forge:plates/hellforged',
        N: 'advanced_ae:small_adv_pattern_provider'
    }).id('gregification:advanced_ae/eaeadvpatpro')
	
	
	//ae2 reaction chamber    
    allthemods.shaped('advanced_ae:reaction_chamber', [
        'PHP',
        'LNL',
        'SRS'
    ], {
        P: '#forge:plates/vibrant_alloy',
        H: 'gtceu:ev_emitter',
        R: 'gtceu:ev_sensor',
        L: '#gtceu:circuits/ev',
        N: 'gtceu:network_casing',
        S: '#forge:plates/lumium'
    }).id('gregification:advanced_ae/reaction_chamber')
	
	//ae2 quantum crafter    
    allthemods.shaped('advanced_ae:quantum_crafter', [
        'PCP',
        'LNL',
        'PCP'
    ], {
        P: '#forge:plates/vibrant_alloy',
        L: '#gtceu:circuits/ev',
        C: 'advanced_ae:quantum_unit',
        N: 'gtceu:network_casing'
    }).id('gregification:advanced_ae/quantumcrafter')
	
	//ae2 wireless connector    
    allthemods.shaped('expatternprovider:wireless_connect', [
        'EPE',
        'LNL',
        'SRS'
    ], {
        E: 'gtceu:ev_emitter',
        R: 'gtceu:betavoltaic_microcell',
        P: '#forge:plates/vibrant_alloy',
        L: '#gtceu:circuits/ev',
        N: 'gtceu:network_casing',
        S: '#forge:plates/lumium'
    }).id('gregification:expatternprovider/wireless_connector')
	
	//ae2 Molecular Assembler    
    allthemods.shaped('ae2:molecular_assembler', [
        'PQP',
        'ANF',
        'PQP'
    ], {
        P: '#forge:plates/aluminum',
        Q: 'ae2:quartz_glass',
        A: 'ae2:annihilation_core',
        F: 'ae2:formation_core',
        N: 'gtceu:network_casing'
    }).id('gregification:ae2/network/crafting/molecular_assembler')
	
	//ae2 Inscriber    
    allthemods.shaped('ae2:inscriber', [
        'PEP',
        'CNC',
        'PRP'
    ], {
        P: '#forge:plates/aluminum',
        E: 'gtceu:mv_emitter',
        R: 'gtceu:mv_sensor',
        C: 'minecraft:sticky_piston',
        N: 'gtceu:network_casing'
    }).id('gregification:ae2/network/blocks/inscribers')
	
	//ae2 Circuit Slicer    
    allthemods.shaped('expatternprovider:circuit_cutter', [
        'PCP',
        'LNL',
        'GRG'
    ], {
        P: '#forge:plates/vibrant_alloy',
        C: 'gtceu:hv_emitter',
        L: '#gtceu:circuits/hv',
        N: 'gtceu:network_casing',
        G: '#forge:plates/signalum',
        R: 'gtceu:hv_sensor'
    }).id('gregification:expatternprovider/circuit_cutter')
	
	// XNet Controller    
    allthemods.shaped('xnet:controller', [
        'PHP',
        'LNL',
        'SRS'
    ], {
        P: '#forge:plates/aluminum',
        H: 'gtceu:mv_emitter',
        R: 'gtceu:mv_sensor',
        L: '#gtceu:circuits/mv',
        N: 'gtceu:network_casing',
        S: 'minecraft:redstone'
    }).id('gregification:xnet/controller')
		
	//ae2 matrix frame	
    addAssembler(
		[
			'gtceu:network_casing',
			'4x #forge:plates/stainless_steel',			
			'2x #forge:plates/energetic_alloy',
			'2x ae2:engineering_processor'
			
		],
		'gtceu:soldering_alloy 144',
		'expatternprovider:assembler_matrix_frame',
		MV,
		600
	);
	
	//ae2 matrix wall	
    addAssembler(
        [   
			'gtceu:network_casing',
            '4x #forge:plates/stainless_steel',
			'2x #forge:plates/energetic_alloy',
            '2x ae2:calculation_processor'            
        ],
        'gtceu:soldering_alloy 144',
        'expatternprovider:assembler_matrix_wall',
        MV,
        600
    );
	
	//ae2 basic card	
    allthemods.shaped('ae2:basic_card', [
        'GPW',
        'GLP',
        'GPW'
    ], {
        G: '#forge:plates/gold',        
        L: '#gtceu:circuits/mv',
		P: 'ae2:calculation_processor',
		W: 'gtceu:compressed_iron_single_wire'		
    }).id('gregification:ae2/materials/basiccard');
	
	//ae2 advanced card	
    allthemods.shaped('ae2:advanced_card', [
        'DPW',
        'DLR',
        'DPW'
    ], {
        D: '#forge:plates/diamond',
		P: '#forge:plates/aluminum',
        L: '#gtceu:circuits/mv',
        R: 'ae2:logic_processor',
		W: 'gtceu:compressed_iron_single_wire'
    }).id('gregification:ae2/materials/advancedcard');
	
	//ae2 acceleration card	
    allthemods.shaped('ae2:speed_card', [
        'HPW',
        'GLP',
        'HPW'
    ], {
        H: '#forge:plates/diamond',
        P: '#forge:plates/energetic_alloy',
        G: 'pneumaticcraft:glycerol', 
        L: '#gtceu:circuits/mv',        
		W: 'gtceu:lumium_single_wire'
    }).id('gregification:ae2/materials/cardspeed');
	
	//integrated dynamics variable store
	addAssembler(
		[
			'gtceu:network_casing', 
			'4x #forge:plates/titanium',
			'2x gtceu:basic_data_access_hatch',
			'4x integrateddynamics:crystalized_menril_chunk'
		],
		'gtceu:polyethylene 144',
		'integrateddynamics:variablestore',
		MV,
		400
	);
	
	//integrated dynamics logic programmer
	addAssembler(
		[
			'gtceu:network_casing',
			'gtceu:computer_monitor_cover',
			'2x gtceu:data_stick',
			'4x #forge:plates/aluminum'
		],
		'gtceu:soldering_alloy 144',
		'integrateddynamics:logic_programmer',
		MV,
		600
	);

    addAssembler(
		[
			'3x #gtceu:wires/double/cadmium_copper',
            '2x #forge:foils/polyethylene'
		],
		'integrateddynamics:menril_resin 1000',
		'6x integrateddynamics:cable',
		MV,
		600
	);

    addAssembler(
		[
			'gtceu:network_casing',
            '2x #gtceu:circuits/mv',
            '8x #forge:plates/soularium',
            'botania:rune_mana',
            'occultism:research_fragment_dust'
		],
        '#forge:ethylene 576',
		'sophisticatedstorage:controller',		
		MV,
		600
	);
    

    //gtceu - ae2 quartize conversion
    allthemods.recipes.gtceu.autoclave('quartzite_to_certus_conversion')
        .itemInputs('#forge:gems/quartzite')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('ae2:certus_quartz_crystal')
        .duration(60)
        .EUt(LV);

    //1k cell    
    
    
    //frluix wire
    addAssembler(
        [
            '16x #forge:fine_wires/fluix'
        ],
        '#forge:rubber 144',
        'ae2:fluix_glass_cable',
        MV,
        100,
        'fluix_from_rubber',
        1
    )

    addAssembler(
        [
            '16x #forge:fine_wires/fluix'
        ],
        '#forge:silicone_rubber 288',
        '2x ae2:fluix_glass_cable',
        MV,
        100,
        'fluix_from_silicone',
        1
    )

    //frluix wire
    addAssembler(
        [
            '16x #forge:fine_wires/fluix',
            '2x #forge:foils/polyvinyl_chloride'
        ],
        '#forge:styrene_butadiene_rubber 288',
        '4x ae2:fluix_glass_cable',
        MV,
        100,
        'fluix_from_rubber_styrene',
        1
    )
    
    


    //quartz fiber    
    addAssembler(
        [
            `3x #forge:dusts/certus_quartz`
        ],
        'gtceu:rubber 144',
        '3x ae2:quartz_fiber',
        MV,
        100,
        'fiber_from_rubber'
    )
    
    //quartz fiber
    addAssembler(
        [
            `3x #forge:dusts/certus_quartz`
        ],
        'gtceu:silicone_rubber 72',
        '3x ae2:quartz_fiber',
        MV,
        100,
        'fiber_from_silicone'
    )

    //quartz fiber
    addAssembler(
        [
            `3x #forge:dusts/certus_quartz`
        ],
        'gtceu:styrene_butadiene_rubber 36',
        '3x ae2:quartz_fiber',
        MV,
        100,
        'fiber_from_styrene'
    )


    //covered cable    
    addAssembler(
        [
            '8x ae2:fluix_glass_cable',
            '#minecraft:wool'
        ],
        null,
        '8x ae2:fluix_covered_cable',
        MV,
        100   
    )

    //sensor    
    addAssembler(
        [            
            '#gtceu:circuits/iv',
            'gtceu:iv_sensor',
            'gtceu:iv_emitter',
            '4x gtceu:fine_fluix_wire',
            '2x #forge:foils/cadmium_selenide'
        ],
        'gtceu:soldering_alloy 72',
        '2x ae2:wireless_receiver',
        MV,
        200
    )

    //formation    
    addAssembler(
        [
            'ae2:logic_processor',            
            'gtceu:lv_emitter',
            '4x gtceu:fine_fluix_wire'
        ],
        'gtceu:soldering_alloy 72',
        '2x ae2:formation_core',
        MV,
        200
    )

    //annihlation    
    addAssembler(
        [
            'ae2:logic_processor',            
            'gtceu:lv_sensor',
            '4x gtceu:fine_fluix_wire'
        ],
        'gtceu:soldering_alloy 72',        
        '2x ae2:annihilation_core',
        MV,
        200
    )

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
