// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
	const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
	// Prediction Matrix (Batch Crafting)
	// Output: 64x
	allthemods.shaped('64x hostilenetworks:prediction_matrix', [
		'WPW', 
		'GCG', 
		'WPW'  
	], {
		P: '#forge:plates/soularium',
		C: '#gtceu:circuits/lv',
		W: '#forge:fine_wires/gold',
		G: 'gtceu:tempered_glass'
	});
	
	// Tier: MV (Required to start tracking mobs)	
	allthemods.shaped('hostilenetworks:blank_data_model', [
		'PWP', 
		'WCW', 
		'PDP'  
	], {
		P: '#forge:plates/conductive_alloy',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:data_stick',
		W: '#forge:fine_wires/gold'
	});
	
	
	allthemods.shaped('hostilenetworks:deep_learner', [
		'PWP', 
		'WCW', 
		'PSP'  
	], {
		C: '#gtceu:circuits/hv',
		P: '#forge:plates/dark_steel',
		W: '#forge:foils/cadmium_selenide',
		S: 'gtceu:hv_sensor'
	});
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
