// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

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
            '8x #forge:screws/hafnium',
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
	
	const upgradeDuration = 800
    const upgradeEut = IV
	const upgradeFluid = '#forge:succinic_acid 1000'

	allthemods.recipes.gtceu.assembler('gregification:assembler/bee_speed_upgrade')
        .itemInputs('4x #forge:plates/energized_steel', '2x pneumaticcraft:glycerol', '2x #forge:screws/ferrognetic', 'bloodmagic:accelerationrune')
        .itemOutputs('productivebees:upgrade_time')
        .inputFluids(upgradeFluid)
        .duration(upgradeDuration)
        .EUt(upgradeEut)

    allthemods.recipes.gtceu.assembler('gregification:assembler/bee_upgrade_base')
        .itemInputs('2x #forge:screws/hellforged', 'gtceu:iv_field_generator', '2x #forge:plates/dark_steel', 'bloodmagic:reinforcedslate', '2x #forge:plates/manasteel')
        .itemOutputs('productivebees:upgrade_base')
		.inputFluids(upgradeFluid)
        .duration(upgradeDuration)
        .EUt(upgradeEut);
		

    allthemods.recipes.gtceu.assembler('gregification:assembler/bee_upgrade_anti_teleport')
        .itemInputs('productivebees:upgrade_base', '4x #forge:plates/umbral_steel', '4x #forge:plates/enderium', 'botania:rune_envy')
        .itemOutputs('productivebees:upgrade_anti_teleport')
		.inputFluids(upgradeFluid)
        .duration(upgradeDuration)
        .EUt(upgradeEut);

    allthemods.recipes.gtceu.assembler('gregification:assembler/bee_upgrade_simulator')
        .itemInputs('productivebees:upgrade_anti_teleport', 'gtceu:iv_field_generator', '4x #forge:plates/pulsating_alloy', '3x #forge:screws/terrasteel')
        .itemOutputs('productivebees:upgrade_simulator')
        .inputFluids(upgradeFluid)
        .duration(upgradeDuration)
        .EUt(upgradeEut);

    allthemods.recipes.gtceu.assembler('gregification:assembler/bee_upgrade_comb_block')
        .itemInputs('productivebees:upgrade_base', '2x productivebees:draconic_chunk', '2x #forge:foils/selenium', '2x #forge:screws/alfsteel', '2x #forge:dusts/promethium')
        .itemOutputs('productivebees:upgrade_comb_block')
        .inputFluids(upgradeFluid)
        .duration(upgradeDuration)
        .EUt(upgradeEut);

    allthemods.recipes.gtceu.assembler('gregification:assembler/bee_productivity_alpha')
        .itemInputs('productivebees:upgrade_base', 'productivebees:upgrade_time', '8x productivebees:draconic_chunk', '4x #forge:plates/arcane_wax_blend', '4x #forge:screws/soularium')
        .itemOutputs('productivebees:upgrade_productivity')
        .inputFluids(upgradeFluid)
        .duration(upgradeDuration)
        .EUt(upgradeEut);

    allthemods.recipes.gtceu.assembler('gregification:assembler/bee_productivity_beta')
        .itemInputs('productivebees:upgrade_productivity', '4x #forge:plates/nether_star', '4x #forge:screws/end_steel', '4x #forge:plates/scandium' )
        .itemOutputs('productivebees:upgrade_productivity_2')
        .inputFluids(upgradeFluid)
        .duration(upgradeDuration)
        .EUt(upgradeEut);

    allthemods.recipes.gtceu.assembler('gregification:assembler/bee_productivity_gamma')
        .itemInputs('productivebees:upgrade_productivity_2', '4x #forge:plates/echo_shard', '4x #forge:screws/alfsteel', '4x #forge:plates/thulium')
        .itemOutputs('productivebees:upgrade_productivity_3')
        .inputFluids(upgradeFluid)
        .duration(upgradeDuration)
        .EUt(upgradeEut);
		
	addBioInfuser(
		[
			'productivebees:upgrade_productivity_3',
			'4x #forge:dusts/lutetium',
			'4x #forge:plates/radium',
			'16x #forge:foils/strontium_aluminate',
			'productivebees:upgrade_comb_block',
			'4x #forge:plates/kevlar',
			'gtceu:tachyon'
		],
		[
			'#forge:saturated_tau 16000',
			'#forge:succinic_acid 2000',
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

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
