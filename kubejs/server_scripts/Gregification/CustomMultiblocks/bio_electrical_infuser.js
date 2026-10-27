ServerEvents.recipes(allthemods => {
	// bio-infuser
	const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
	

    allthemods.shaped('gtceu:bio_electrical_infuser', [
        'RSR',
        'CMC',
        'PBP'
    ], {
        C: '#forge:plates/lumium',
        M: 'gtceu:magical_bio_composite',
        S: 'gtceu:ev_sensor',
        R: 'gtceu:ev_robot_arm',
        P: 'gtceu:ev_electric_pump',
        B: 'evilcraft:garmonbozia'
    }).id('allthemods:shaped/bio_electrical_infuser_controller');
	
	
	const addBioInfuser = (itemsIn, fluidsIn, itemOut, fluidOut, eut, duration, cID) => {
		
		let idName;
		if (cID) {idName=cID; }
		else{idName = itemOut.replace(/[^a-z0-9]/gi, '_'); }

		let recipe = allthemods.recipes.gtceu.bio_electrical_infuser(`gregification:bio_infusion/${idName}`)
			.itemInputs(itemsIn)
			.itemOutputs(itemOut)
			.duration(duration)
			.EUt(eut);
		
		if (fluidsIn) { recipe.inputFluids(fluidsIn) }
        if (fluidOut) { recipe.outputFluids(fluidOut) }
	};
	
	//hexagonal casing
	addBioInfuser ( 
		['gtceu:magical_bio_composite', '4x #forge:plates/titanium', '2x gtceu:ev_electric_motor', '2x gtceu:ev_electric_pump', '2x #forge:plates/terrasteel', '2x #forge:plates/vibrant_alloy', '8x #forge:screws/soularium', '4x #forge:small_gears/hellforged'],
		['gtceu:glue 1000', '#forge:blood 1000', '#forge:creosote 1000', '#forge:lubricant 1000', 'gtceu:saturated_tau 1000'],
		'gtceu:hexagonal_bio_composite', null, IV, 1200);	
		
		allthemods.remove({ 
			output: /productivebees:.*_beehive/ 
		});
		allthemods.remove({ 
			output: /productivetrees:.*_beehive/ 
		});
		
		allthemods.remove({ 
			output: /productivebees:expansion.*/ 
		});
		
		allthemods.remove({ 
			output: /productivetrees:expansion.*/ 
		});
		
	allthemods.shaped('productivebees:advanced_oak_beehive', [
        'SGS',
        'PCP',
        'SWS'
    ], {
        C: 'gtceu:hexagonal_bio_composite',
        S: '#forge:screws/soularium',
        G: 'gtceu:ev_sensor',        
        P: '#forge:plates/titanium',        
		W: '#forge:plates/vibrant_alloy'
    }).id('allthemods:shaped/advanced_greg_hive');

    // Expansion Box
    allthemods.shaped('productivebees:expansion_box_oak', [
        'SGS',
        'PCP',
        'SWS'
    ], {
        C: 'gtceu:hexagonal_bio_composite',
        S: '#forge:screws/soularium',
        G: 'gtceu:ev_field_generator',
        P: '#forge:plates/titanium',        
		W: '#forge:plates/vibrant_alloy'
    }).id('allthemods:shaped/advanced_greg_expansion');
	

    
	//regular centrifuge
	allthemods.shaped('productivebees:centrifuge', [
        'SGS',
        'PMP',
        'SCS'
    ], {
        M: 'gtceu:hv_centrifuge',
        C: '#forge:plates/energetic_alloy',
        G: 'gtceu:hv_sensor',
        P: 'gtceu:hv_electric_pump',
        S: '#forge:screws/soularium'
    }).id('allthemods:shaped/basic_bee_centrifuge_hv');
	
	//powered centrifuge
    addBioInfuser(
        [            
			'gtceu:ev_centrifuge',
            'gtceu:hexagonal_bio_composite', 
            '2x #forge:plates/hellforged',
            '2x gtceu:ev_electric_pump',
            '8x #forge:screws/end_steel',
            'gtceu:ev_electric_motor'
        ],
        [
			'#forge:blood 2000',            
            '#forge:lubricant 2000',
			'gtceu:soldering_alloy 288',
			'pneumaticcraft:etching_acid 2000'
        ],
        'productivebees:powered_centrifuge', 
        null, 
        EV,
        1200
    );
	
	//heated centrifuge
	addBioInfuser(
        [
            'gtceu:iv_centrifuge',
            '2x gtceu:hexagonal_bio_composite',
            '2x #forge:plates/hellforged',       
            '2x gtceu:iv_electric_pump',         
            '8x #forge:screws/draconium',
            'gtceu:iv_electric_motor'
        ],
        [
            '#forge:blood 4000',
            'gtceu:polytetrafluoroethylene 1000',
            'gtceu:soldering_alloy 576',
            '#forge:lubricant 4000',
			'pneumaticcraft:etching_acid 4000'
        ],
        'productivebees:heated_centrifuge', 
        null, 
        IV,
        2400        
    );
	
	//bottler


    // 2. Add Gregified EV Infusion
    addBioInfuser(
        [
            'gtceu:hexagonal_bio_composite',
            '2x gtceu:hv_electric_pump',
            '4x #forge:plates/hellforged',
            '8x #forge:screws/soularium',
            'gtceu:ev_conveyor_module'
        ],
        [
            '#forge:blood 2000',
            'gtceu:soldering_alloy 288',
            '#forge:lubricant 1000'
        ],
        'productivebees:bottler', 
        null, 
        EV,
        800        
    );
	
	//breeding chamber
	

    addBioInfuser(
        [
            'gtceu:hexagonal_bio_composite',
            '2x gtceu:iv_electric_pump',
            '4x #forge:plates/hellforged',
			'4x #forge:plates/gaia',
            '8x #forge:screws/gaia',
            'gtceu:ev_sensor',
            'evilcraft:garmonbozia'
        ],
        [
            '#forge:blood 2000',
			'#forge:lubricant 4000',            
            'gtceu:soldering_alloy 288'
        ],
        'productivebees:breeding_chamber', 
        null, 
        IV, 2400
    );
	
	//incubator
	
	addBioInfuser(
        [
            '2x gtceu:hexagonal_bio_composite', 
            'gtceu:ev_field_generator',
            '4x #forge:plates/gaia',
            '8x #forge:screws/gaia',
            '2x gtceu:iv_electric_pump',
            'evilcraft:garmonbozia'
        ],
        [
            '#forge:blood 4000',
			'#forge:lubricant 4000',
            'gtceu:soldering_alloy 288'
        ],
        'productivebees:incubator', 
        null, 
        IV,
        2400        
    );
	
	//catcher	
    
    
    allthemods.shaped('productivebees:catcher', [
        'RSR',
        'PMP',
        'PWP'
    ], {
		M: 'gtceu:hexagonal_bio_composite',
        S: 'gtceu:hv_sensor',
        R: 'gtceu:stainless_steel_rod',
        P: '#forge:plates/stainless_steel',
		W: '#forge:screws/stainless_steel',
    }).id('allthemods:shaped/catcher_hv');
	
	//indexer
	

    // 2. IV Bio-Electrical Infusion for the Gene Indexer
    addBioInfuser(
        [
            'gtceu:hexagonal_bio_composite',
            '2x gtceu:ev_sensor',
            '4x #forge:plates/gaia',
            '8x #forge:screws/gaia',
            'gtceu:data_stick',
            'evilcraft:garmonbozia'
        ],
        [
            '#forge:blood 8000',
            '#forge:lubricant 8000',
            'gtceu:soldering_alloy 576',
            'gtceu:polytetrafluoroethylene 1000'
        ],
        'productivebees:gene_indexer', 
        null, 
        IV,
        2400,
    );
	
	//speed upgrade
	
	allthemods.shaped('productivebees:upgrade_time', [
		'IGI',
		'PSP',
		'IGI'
	], {
		G: 'pneumaticcraft:glycerol',
		S: 'bloodmagic:infusedslate',
		I: '#forge:plates/iesnium',
		P: '#forge:screws/manasteel'
	}).id('allthemods:shaped/bee_speed_upgrade');
	
	//upgrade base

	allthemods.shaped('productivebees:upgrade_base', [
		'TMT',
		'PSP',
		'RMR'
	], {
		S: 'bloodmagic:reinforcedslate',
		P: '#forge:plates/dark_steel',
		M: 'gtceu:hv_electric_motor',
		R: '#forge:plates/manasteel',
		T: '#forge:screws/hellforged'
	}).id('allthemods:shaped/bee_upgrade_base_hv');
	
	//alpha

	allthemods.shaped('productivebees:upgrade_productivity', [
    'MSM',
    'DUD',
    'MSM'
	], {
		U: 'productivebees:upgrade_base',
		D: 'productivebees:draconic_chunk',
		M: '#forge:plates/manasteel',
		S: '#forge:screws/soularium'
	}).id('allthemods:shaped/bee_productivity_alpha');
	
	//beta

	allthemods.shaped('productivebees:upgrade_productivity_2', [
		'ASA',
		'NUN',
		'ASA'
	], {
		U: 'productivebees:upgrade_base',
		A: 'productivebees:upgrade_productivity',
		N: '#forge:plates/nether_star',
		S: '#forge:screws/dark_steel'
	}).id('allthemods:shaped/bee_productivity_beta');
	
	//anti teleportation

	allthemods.shaped('productivebees:upgrade_anti_teleport', [
		'MPM',
		'PUP',
		'MPM'
	], {
		U: 'productivebees:upgrade_base',
		M: '#forge:plates/manasteel',
		P: 'minecraft:ender_pearl'
	}).id('allthemods:shaped/bee_upgrade_anti_teleport');
	

	allthemods.shaped('productivebees:upgrade_simulator', [
		'PFP',
		'SUS',
		'PSP'
	], {
		U: 'productivebees:upgrade_anti_teleport',
		P: '#forge:plates/pulsating_alloy',
		F: 'gtceu:ev_field_generator',
		S: '#forge:screws/terrasteel'
	}).id('allthemods:shaped/bee_simulator_upgrade_ev');
	
	//gamma

	allthemods.shaped('productivebees:upgrade_productivity_3', [
		'BSB',
		'EUE',
		'BSB'
	], {
		U: 'productivebees:upgrade_simulator',     // Simulator in middle
		B: 'productivebees:upgrade_productivity_2', // Beta on corners
		E: '#forge:plates/echo_shard',              // Echo Shard plates on sides
		S: '#forge:screws/terrasteel'               // Terrasteel screws top/bottom
	}).id('allthemods:shaped/bee_productivity_gamma');
	
	//block upgrade

	allthemods.shaped('productivebees:upgrade_comb_block', [
		'CSC',
		'IUI',
		'CSC'
	], {
		U: 'productivebees:upgrade_base',
		C: 'productivebees:draconic_chunk',
		I: '#forge:plates/iesnium',
		S: '#forge:screws/hellforged'
	}).id('allthemods:shaped/bee_block_upgrade_hv');
	
	//omega

	addBioInfuser(
		[
			'4x productivebees:upgrade_productivity_3',
			'minecraft:heart_of_the_sea',			
			'productivebees:upgrade_comb_block',			
			'evilcraft:garmonbozia',
			'bloodmagic:demonslate',
			'4x #forge:plates/kevlar',
			'8x #forge:screws/terrasteel',
			'gtceu:tachyon'
		],
		[
			'#forge:blood 16000',
			'#forge:lubricant 16000',
			'#forge:honey 16000',
			'#forge:dna_omega 1'
		],
		'productivebees:upgrade_productivity_4', 
		null, 
		LuV, // LuV Tier Power
		4800   // Extended duration for the ultimate upgrade
	);
	
	//reinforced rune casing
	addBioInfuser(
		[
			'4x #forge:plates/hellforged', 
			'4x #forge:plates/terrasteel', 
			'gtceu:hv_machine_casing', 
			'occultism:spirit_attuned_gem',
			'botania:rune_mana',
			'evilcraft:garmonbozia'			
		], 
		[
			'#forge:blood 2000',
			'gtceu:saturated_tau 1000', 
			'#forge:lubricant 1000'
		],
		'gtceu:reinforced_rune_casing', 
		null, 
		EV,
		1000
	);
});