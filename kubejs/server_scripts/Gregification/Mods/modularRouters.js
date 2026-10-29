// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
	const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
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
	
	//router casing
	addAssembler(
    [        
        '4x #forge:plates/pulsating_alloy',
		'4x #forge:plates/enderium',
		'gtceu:ev_emitter',
        'gtceu:ev_sensor',
		'8x #forge:screws/terrasteel',
		'8x #forge:screws/iesnium',
		'2x #forge:rods/hellforged'
    ],
    'gtceu:polytetrafluoroethylene 144',     
    'gtceu:router_casing',
    EV,                                    
    600
	);
	
	//modular router	
	addAssembler(
		[
			'gtceu:router_casing',
			'gtceu:ev_machine_casing',           
			'4x #forge:plates/titanium',         
			'2x gtceu:ev_electric_motor',
			'gtceu:ev_field_generator',
			'gtceu:betavoltaic_microcell'
		],
		'gtceu:polytetrafluoroethylene 144',     
		'modularrouters:modular_router',
		EV,                                    
		600
	);
	
	
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
