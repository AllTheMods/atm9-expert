// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

	//blood infuser
	allthemods.shaped('evilcraft:blood_infuser', [
        'GDG',
        'EME',
        'GPG'
    ], {        
        M: 'gtceu:magical_bio_composite',
		D: 'evilcraft:dark_gem',
		E: '#forge:plates/deorum',
        P: 'gtceu:mv_electric_pump',
        G: '#forge:plates/silver'
    }).id('gregification:shaped/blood_infuser');
    	
	//purifier
	allthemods.shaped('evilcraft:purifier', [
        'GDG',
        'EME',
        'GPG'
    ], {        
        M: 'gtceu:magical_bio_composite',
        D: 'minecraft:cauldron',                 
        E: '#forge:plates/deorum',               
        P: 'gtceu:mv_electric_pump',             
        G: '#forge:plates/silver'
    }).id('gregification:shaped/purifier');      
	
	//pedestal
	allthemods.shaped('evilcraft:sanguinary_pedestal_0', [
        'SSS',
        'GMG',
        'RPR'
    ], {        
        M: 'gtceu:magical_bio_composite',
		S: '#forge:plates/steel',
        P: 'gtceu:mv_electric_pump', 
        R: 'gtceu:mv_fluid_regulator',
        G: 'evilcraft:dark_power_gem'
    }).id('gregification:shaped/sanguinary_pedestal');
    
	//powered pedestal
	allthemods.shaped('evilcraft:sanguinary_pedestal_1', [
        'TFT',
        'RMR',
        'PGP'
    ], {        
        M: 'gtceu:magical_bio_composite',        
        P: 'gtceu:mv_electric_pump',
		R: 'gtceu:mv_robot_arm',
		F: 'gtceu:mv_field_generator',
		T: '#forge:plates/silver',
        G: 'evilcraft:sanguinary_pedestal_0'
    }).id('gregification:shaped/powered_sanguinary_pedestal');    
    
	//environmental accumilator
	allthemods.shaped('evilcraft:sanguinary_environmental_accumulator', [
        'SFE',
        'NMN',
        'PTP'
    ], {        
        M: 'gtceu:magical_bio_composite',
        F: 'gtceu:mv_field_generator',
        S: 'gtceu:mv_sensor',
		E: 'gtceu:mv_emitter',
		N: '#forge:plates/signalum',
        P: 'gtceu:mv_electric_pump',
		T: 'evilcraft:environmental_accumulation_core'
    }).id('gregification:shaped/sanguinary_environmental_accumulator');
    
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
