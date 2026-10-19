ServerEvents.recipes(allthemods => {
	
	const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
	//atm star componenets
	allthemods.shapeless(
        'kubejs:quantum_sentient_circuit', 
        [
            'pneumaticcraft:printed_circuit_board',
            'pneumaticcraft:etching_acid_bucket',
            'advanced_ae:quantum_accelerator',
            'thermal_extra:abyssal_upgrade_augment',
            'draconicevolution:item_chaotic_energy_link',
            'advanced_ae:shattered_singularity',
            'advanced_ae:quantum_alloy_plate',
            'advanced_ae:quantum_storage_component',
            'mekanism:qio_drive_supermassive'
        ]
    ).id('allthemods:kubejs/quantum_sentient_circuit_shapeless');
		
	allthemods.shaped('kubejs:entropy_manifold', [
		'ABC',
		'DEF',
		'GHI'
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		A: Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT(),
		B: 'mythicbotany:alfsteel_block',
		C: 'bloodmagic:archmagebloodorb',
		D: 'mysticalagriculture:awakened_supremium_block',
		E: 'pneumaticcraft:module_expansion_card',
		F: 'draconicevolution:advanced_magnet',
		G: 'mekanismgenerators:fusion_fuel_bucket',
		H: 'powah:charged_snowball',
		I: 'evilcraft:corrupted_tear'
	}).id('allthemods:shaped/entropy_manifold');
	

	
	const rotary = (gas, fluid, amount) => {
        // Gas -> Liquid
        allthemods.custom({
            "type": "mekanism:rotary",
            "fluidInput": { "amount": amount, "fluid": fluid },
            "gasOutput": { "amount": amount, "gas": gas }
        }).id(`gregification:rotary/decondensing/${gas.split(':')[1]}`);

        // Liquid -> Gas
        allthemods.custom({
            "type": "mekanism:rotary",
            "gasInput": { "amount": amount, "gas": gas },
            "fluidOutput": { "amount": amount, "fluid": fluid }
        }).id(`gregification:rotary/condensing/${gas.split(':')[1]}`);
    };
	
	const oxidize = (item, gas, amount) => {        
        allthemods.custom({
            "type": "mekanism:oxidizing",
            "input": { "ingredient": { "item": item } },
			"output": { "gas": gas, "amount": amount }
        }).id(`gregification:oxidizing/${item.split(':')[1]}_to_${gas.split(':')[1]}`);
    };
	
	const brew = (id, fluidIn, fluidInA, itemIn, fluidOut, fluidOutA, energy) => {
		let finalEnergy = energy || 150000;
		
		// Check for tag in the item input
		let isTag = itemIn.startsWith('#');
		let cleanItem = isTag ? itemIn.substring(1) : itemIn;
		let itemIngredient = isTag ? { "tag": cleanItem } : { "item": cleanItem };

		allthemods.custom({
			"type": "thermal:brewer",
			"ingredients": [
				{ "fluid": fluidIn, "amount": fluidInA },
				itemIngredient
			],
			"result": [
				{ "fluid": fluidOut, "amount": fluidOutA }
			],
			"energy": finalEnergy
		}).id(`gregification:thermal/brewer/${id}`);

		allthemods.recipes.gtceu.chemical_reactor(`gregification:chemical_reactor/${id}`)        
			.itemInputs(`${itemIn}`)
			.inputFluids(`${fluidIn} ${fluidInA}`)
			.outputFluids(`${fluidOut} ${fluidOutA}`)
			.duration(150)
			.EUt(IV);
	};
	
	const fluidmix = (id, fluidIn1, fluidA1, fluidIn2, fluidA2, fluidOut, fAmount, energy) => {
		let finalEnergy = energy || 150000;
		allthemods.custom({
			"type": "thermal_extra:fluid_mixer",
			"ingredients": [
				{ "fluid": fluidIn1, "amount": fluidA1 },
				{ "fluid": fluidIn2, "amount": fluidA2 }
			],
			"result": [
				{ "fluid": fluidOut, "amount": fAmount }
			],
			"energy": finalEnergy
		}).id(`gregification:thermal/mixer/${id}`);

		allthemods.recipes.gtceu.chemical_reactor(`gregification:chemical_reactor/${id}`)        
        .inputFluids(
            [
                `${fluidIn1} ${fluidA1}`,
				`${fluidIn2} ${fluidA2}`
            ])
        .outputFluids(`${fluidOut} ${fAmount}`)
        .duration(150)
        .EUt(IV);
	};
	
	const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration) => {		
		
		const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');		
		let recipe = allthemods.recipes.gtceu.assembler(`allthemods:assembler/${outputID}`)
			.itemInputs(itemsIn)
			.itemOutputs(itemsOut)
			.duration(duration)
			.EUt(eu);		
		if (fluidIn) { 
			recipe.inputFluids(fluidIn); 
		}
	};
	
	const crucibleMelt = (input, fluidOut, fAmount, energy, tier, addToExtractor) => {
		// Generate ID based on the output fluid name
		let idName = "melting_" + fluidOut.split(':')[1];

		// 1. Thermal Crucible
		allthemods.custom({
			"type": "thermal:crucible",
			"ingredient": input.startsWith('#') ? { "tag": input.substring(1) } : { "item": input },
			"result": [Fluid.of(fluidOut, fAmount).toJson()],
			"energy": energy || 150000
		}).id(`allthemods:thermal/crucible/${idName}`);
		
		
		// 2. GTCEu Extractor
		if (addToExtractor) {
			const tiers = { 'ulv': ULV, 'lv': LV, 'mv': MV, 'hv': HV, 'ev': EV, 'iv': IV, 'luv': LuV };
			let voltage = tiers[tier.toLowerCase()] || 32;

			allthemods.recipes.gtceu.extractor(`allthemods:extractor/${idName}`)
				.itemInputs(input)
				.outputFluids(`${fluidOut} ${fAmount}`)				
				.duration(Math.max(20, Math.floor(energy / voltage)))
				.EUt(voltage);
		}
	};
		
	const universalCrush = (id, input, itemOut, itemOutA, energy, secondaryOut, secondaryChance, addToGT, gtEut, gtDuration) => {
		let isTag = input.startsWith('#');
		let cleanInput = isTag ? input.substring(1) : input;
		let count = itemOutA || 1;

		// --- 1. Mekanism Recipe ---
		let mekIngredient = isTag ? { "tag": cleanInput } : { "item": cleanInput };
		allthemods.custom({
			"type": "mekanism:crushing",
			"input": { "ingredient": mekIngredient },
			"output": { "item": itemOut, "count": count }
		}).id(`gregification:crush/${id}`);

		// --- 2. Thermal Pulverizer Recipe ---
		let thermalIngredient = isTag ? { "tag": cleanInput } : { "item": cleanInput };
		let thermalResults = [{ "item": itemOut, "count": count }];
		if (secondaryOut) {
			thermalResults.push({
				"item": secondaryOut,
				"chance": secondaryChance || 0.1
			});
		}
		allthemods.custom({
			"type": "thermal:pulverizer",
			"ingredient": thermalIngredient,
			"result": thermalResults,
			"energy": energy || 10000
		}).id(`gregification:pulverize/${id}`);

		// --- 3. GregTech Macerator Recipe ---
		if (addToGT) {
			let recipe = allthemods.recipes.gtceu.macerator(`gregification:macerate/${id}`)
				.itemInputs(input)
				.itemOutputs(Item.of(itemOut, count)) // Use Item.of for the primary output
				.duration(gtDuration || 400)
				.EUt(gtEut || 8);

			if (secondaryOut && secondaryOut !== null) {
				// chance is 0-10000 (1000 = 10%)
				let gtChance = Math.floor((secondaryChance || 0.1) * 10000);				
				recipe.chancedOutput(Item.of(secondaryOut), gtChance, 0); 
			}
		}
	};

	
	// Nitratic Igniter Wrapper
	const igniter = (id, itemIn, outMain, countMain, outBonus, countBonus, chance, energy) => {
		let result = [{ "item": outMain, "count": countMain }];
		
		// Add optional bonus output if provided
		if (outBonus) {
			result.push({ "item": outBonus, "count": countBonus || 1, "chance": chance || 0.15 });
		}

		allthemods.custom({
			"type": "thermal_extra:nitratic_igniter",
			"ingredients": [{ "item": itemIn, "count": 1 }],
			"result": result,
			"energy": energy || 15000
		}).id(`gregification:igniter/${id}`);
	};

	// Endothermic Dehydrator Wrapper
	const dehydrator = (id, fluidIn, amount, outMain, countMain, outBonus, countBonus, chance, energy) => {
		let result = [{ "item": outMain, "count": countMain }];
		
		if (outBonus) {
			result.push({ "item": outBonus, "count": countBonus || 1, "chance": chance || 0.50 });
		}

		allthemods.custom({
			"type": "thermal_extra:endothermic_dehydrator",
			"ingredients": [{ "fluid": fluidIn, "amount": amount }],
			"result": result,
			"energy": energy || 100000
		}).id(`gregification:dehydrator/${id}`);
	};

	const enrich = (input, output, id) => {
		let inputJson = input.startsWith('#') ? { "tag": input.substring(1) } : { "item": input };
		allthemods.custom({
			"type": "mekanism:enriching",
			"input": { "ingredient": inputJson },
			"output": Item.of(output).toJson()
		}).id(`gregification:enriching/${id}`);
    };
	
	
	
   	//peridot
	
    allthemods.recipes.gtceu.electrolyzer('peridot_breakdown')
        .itemInputs('8x alltheores:peridot_dust')
        .itemOutputs('2x gtceu:magnesium_dust', 'gtceu:silicon_dust', 'gtceu:olivine_dust')
        .outputFluids(Fluid.of('gtceu:oxygen', 4000))
        .duration(400).EUt(LV);
    	
	//plastic unification
    allthemods.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": { "item": 'industrialforegoing:plastic', "count": 4 },
        "fluid_output": { "fluid": 'pneumaticcraft:plastic', "amount": 1000 },
        "temperature": { "min_temp": 373 },
        "pressure": 3.0,
        "speed": 5.0,
        "exoflame": false
    }).id('gregification:thermo/plastic');
	
	rotary('kubejs:saturated_tau_gas', 'gtceu:saturated_tau', 1);
	rotary('kubejs:compressed_air_gas', 'gtceu:compressed_air', 1);
	rotary('mekanism:polonium', 'gtceu:polonium', 1)
	rotary('mekanism:plutonium', 'gtceu:plutonium', 1)
	rotary('mekanism:nuclear_waste', 'gtceu:nuclear_waste', 10)
	rotary('mekanism:hydrofluoric_acid', 'gtceu:hydrofluoric_acid', 10)
	//enrich('kubejs:dirty_dust_demonite', 'bloodmagic:sand_hellforged', 'dirty_demonite_to_sand');
	
	//igniter('iesnium',					'occultism:raw_iesnium', 				'kubejs:iesnium_chunk',			2,	'kubejs:iesnium_chunk', 		1, 0.15, 	15000 );
	//igniter('demonite', 				'bloodmagic:rawdemonite', 				'kubejs:demonite_chunk',		2,	'kubejs:demonite_chunk', 		1, 0.15, 	20000);
	//igniter('allthemodium', 			'allthemodium:raw_allthemodium', 		'kubejs:allthemodium_chunk', 	2,	'kubejs:allthemodium_chunk',	1, 0.20, 	50000);
	//igniter('vibranium',				'allthemodium:raw_vibranium', 			'kubejs:vibranium_chunk', 		2,	'kubejs:vibranium_chunk', 		1, 0.25, 	100000);
	//igniter('unobtainium',				'allthemodium:raw_unobtainium', 		'kubejs:unobtainium_chunk', 	2,	'kubejs:unobtainium_chunk', 	1, 0.30, 	250000);
	
	//dehydrator('iesnium',				'gtceu:molten_iesnium',					90,		'occultism:iesnium_dust',			2,	'occultism:iesnium_dust',		1, 0.50,	100000 );
	//dehydrator('demonite', 				'gtceu:molten_demonite', 				90, 	'bloodmagic:sand_hellforged', 		2, 	'bloodmagic:sand_hellforged', 	1, 0.50, 	150000);
	//dehydrator('allthemodium', 			'allthemodium:molten_allthemodium', 	90, 	'allthemodium:allthemodium_dust', 	2, 	'allthemodium:allthemodium_dust', 1, 0.50, 	500000);
	//dehydrator('vibranium', 			'allthemodium:molten_vibranium', 		90, 	'allthemodium:vibranium_dust', 		2, 	'allthemodium:vibranium_dust', 	1, 0.50, 	1000000);
	//dehydrator('unobtainium', 			'allthemodium:molten_unobtainium', 		90, 	'allthemodium:unobtainium_dust', 	2, 	'allthemodium:unobtainium_dust', 	1, 0.60, 	2500000);
	
	brew('awakening', 					'gtceu:primordial_sanguine_plasma', 	1000, 'mysticalagriculture:cognizant_dust', 	'gtceu:cognizant_sanguine_ichor',		1000 );
    brew('stellar', 					'gtceu:cognizant_sanguine_ichor',		1000, 'gtceu:nether_star_dust', 				'gtceu:stellar_sanguine_plasma', 		1000 );
    brew('resonance', 					'gtceu:stellar_sanguine_plasma', 		1000, 'gtceu:echo_shard_dust', 					'gtceu:resonant_sanguine_void', 		1000 );
    brew('supremium', 					'gtceu:resonant_sanguine_void', 		1000, 'mysticalagradditions:insanium_essence', 	'gtceu:insanium_infused_singularity', 	1000 );
    brew('stabilization',				'gtceu:insanium_infused_singularity', 	1000, 'pneumaticcraft:glycerol', 				'gtceu:aetheric_sanguine_singularity', 1000 );
	brew('ethereal_white_blood',		'gtceu:unrefined_white_blood', 			1000, 'bloodmagic:etherealslate', 					'gtceu:ethereal_white_blood', 			1000 );
	brew('liquid_pain_and_suffering',	'gtceu:unrefined_red_blood', 			1000, 'evilcraft:garmonbozia',					'gtceu:liquid_pain_and_suffering',		1000 );
	
	
	//						 Item/Tag                       	Fluid Output                        Amount  Energy      Tier    GT?
    crucibleMelt('#forge:plastic',              	'pneumaticcraft:plastic',           1000,   20000,      'mv',   true);
    crucibleMelt('evilcraft:vengeance_essence',		'gtceu:liquid_vengeance',          1000,   25000,      'mv',   true);
    crucibleMelt('bloodmagic:strong_tau',    		'gtceu:saturated_tau',             100,    20000,      'mv',   true);	
	//crucibleMelt('ars_nouveau:source_gem',         	'gtceu:liquid_source',      		250,  	20000,      'hv',   true);
	//crucibleMelt('minecraft:rotten_flesh',         	'gtceu:liquid_rotten_flesh',  		50,  	20000,      'hv',   true);
	

	crucibleMelt('minecraft:dragon_breath',         'gtceu:liquid_dragon_breath',      100,    20000,      'mv',   true);
    crucibleMelt('draconicevolution:dragon_heart',	'gtceu:liquid_draconic_essence', 	100,    10000,      'hv',   true);
    //crucibleMelt('kubejs:demonite_chunk',      		'gtceu:molten_demonite',           90,     150000,     'hv',   true);
    //crucibleMelt('kubejs:iesnium_chunk',     		'gtceu:molten_iesnium',            90,     150000,     'hv',   true);

    // End Game Ores - Gated behind IV Tier
    //crucibleMelt('kubejs:allthemodium_chunk', 		'allthemodium:molten_allthemodium', 90,     150000,     'iv',   true);
    //crucibleMelt('kubejs:vibranium_chunk',      	'allthemodium:molten_vibranium',    90,     150000,     'iv',   true);
    //crucibleMelt('kubejs:unobtainium_chunk',    	'allthemodium:molten_unobtainium',  90,     150000,     'iv',   true);
	

	fluidmix('primordial_plasma', 			'gtceu:liquid_draconic_essence',		1000, '#forge:blue_ice', 					1000, 'gtceu:primordial_sanguine_plasma', 1000 );	
	fluidmix('primordial_cosmic_soup', 		'gtceu:aetheric_sanguine_singularity',	1000, 'industrialforegoing:ether_gas', 		1000, 'gtceu:primordial_cosmic_soup', 1000, 250000 );	
	fluidmix('unrefined_white_blood', 		'#forge:white_chalk', 					1000, 'gtceu:sanguine_concentrate', 		1000, 'gtceu:unrefined_white_blood', 1000 );
	fluidmix('unrefined_red_blood', 		'#forge:purple_chalk', 					1000, 'gtceu:sanguine_concentrate',			1000, 'gtceu:unrefined_red_blood', 1000 );	
	fluidmix('energized_glowing_catalyst', 	'#forge:yellow_chalk', 					1000, 'thermal:glowstone', 					1000, 'gtceu:energized_glowing_catalyst', 1000 );	
	fluidmix('destabilized_red_catalyst', 	'#forge:red_chalk',						1000, 'thermal:redstone', 					1000, 'gtceu:destabilized_red_catalyst', 1000 );
	fluidmix('essence_of_creation', 		'gtceu:ethereal_white_blood', 			1000, 'gtceu:energized_glowing_catalyst', 	1000, 'gtceu:essence_of_creation', 1000 );
	fluidmix('essence_of_destruction', 		'gtceu:liquid_pain_and_suffering', 		1000, 'gtceu:destabilized_red_catalyst', 	1000, 'gtceu:essence_of_destruction', 1000 );
	fluidmix('stable_life_essence', 		'gtceu:essence_of_creation', 			1000, 'gtceu:essence_of_destruction', 		1000, 'gtceu:stable_life_essence', 1000 );
	
	// assembler recipes



	
		// 7. Custom Petrochem with steam tag

	
	allthemods.remove({ id: 'thermal_extra:machine/pulverizer/soul_sand_dust' })	
	// Syntax: 		id, 				input, 						itemOut, 						itemOutA, energy, secondaryOut, secondaryChance, addToGT, gtEut, gtDuration
	universalCrush('peridot_dust', 			'alltheores:peridot', 			'alltheores:peridot_dust', 		1, 5000,	'alltheores:peridot_dust', 	0.1, 	true, 	32, 400 );
	universalCrush('echo_shard_dust', 		'minecraft:echo_shard', 		'gtceu:echo_shard_dust', 		1, 5000,	null, 						0, 		false, 	32, 400 );	
	universalCrush('nether_star_dust', 		'minecraft:nether_star', 		'gtceu:nether_star_dust', 		1, 5000,	null, 						0, 		false, 	32, 400 );
	universalCrush('silicon_dust', 			'ae2:silicon',					'gtceu:silicon_dust',			1, 5000,	null, 						0, 		true,	32, 400 );
	universalCrush('soulsand_dust', 		'minecraft:soul_sand',			'thermal_extra:soul_sand_dust',	1, 5000,	null, 						0, 		true,	32, 400 );
	universalCrush('phantom_membrane_dust', 'minecraft:phantom_membrane',	'gtceu:phantom_membrane_dust',	1, 5000,	null, 						0, 		true,	32, 400 );

	

	
    //ghast tears from ender tears
    allthemods.custom({
        "type": "thermal:bottler",
        "ingredients": [ { "item": "evilcraft:ender_tear", "count": 10 }, {"fluid": "gtceu:liquid_vengeance", "amount": 1000 } ],
        "result": [ { "item": "minecraft:ghast_tear", "count": 10 }],
        "energy": 250000
    }).id('gregification:bottler/ghast_tear');
	
	//non gt recipe for liquid fertilizer
	allthemods.custom({
		"type": "thermal:centrifuge",
		"ingredient": { "item": "industrialforegoing:fertilizer" },
		"result": [
			{ "fluid": "gtceu:liquid_fertilizer", "amount": 250 }			
		],
		"energy": 20000
	}).id('gregification:centrifuge/fertilizer_refining');
	
	allthemods.smelting('minecraft:netherite_scrap', '#forge:dusts/debris')
        .id('gregification:debris_dust_smelting')
        .xp(1.0)
        .cookingTime(200)
    
    allthemods.blasting('minecraft:netherite_scrap', '#forge:dusts/debris')
        .id('gregification:debris_dust_blasting')
        .xp(1.0)
        .cookingTime(100)
});


