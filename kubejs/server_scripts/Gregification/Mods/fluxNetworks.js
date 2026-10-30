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
	
	//flux casing
	addAssembler(
    [
        'gtceu:zpm_machine_casing',
		'#forge:frames/enderium',
        '4x #forge:plates/draconium',
		'4x #forge:plates/gadolinium',
		'4x #forge:rods/hop_graphite',
		'4x #forge:screws/end_steel',
        'gtceu:zpm_field_generator',
		'bloodmagic:etherealslate'
    ],
    'gtceu:polytetrafluoroethylene 576',
    'gtceu:flux_casing',
    LuV,
    800
	);

	// 2. Flux Controller (The Network Brain)	
	addAssembler(
		[
			'gtceu:flux_casing',
			'gtceu:computer_monitor_cover',
			'4x fluxnetworks:flux_core',
			'2x #gtceu:circuits/zpm',			
			'4x #forge:plates/draconium',
			'4x #forge:plates/gadolinium',
			'#forge:frames/hop_graphite'
			
		],
		'gtceu:soldering_alloy 288',
		'fluxnetworks:flux_controller',
		ZPM,
		600
	);

	// 3. Flux Plug (Input: Generator -> Network)		
	addAssembler(
		[
			'gtceu:flux_casing',
			'2x fluxnetworks:flux_core',
			'gtceu:zpm_sensor',
			'2x #forge:plates/enderium',
			'4x #forge:rods/gadolinium',
			'4x #forge:screws/draconium'
			
		],
		'gtceu:polytetrafluoroethylene 144',
		'fluxnetworks:flux_plug',
		ZPM,
		300
	);

	// 4. Flux Point (Output: Network -> Machine)		
	addAssembler(
		[
			'gtceu:flux_casing',
			'2x fluxnetworks:flux_core',
			'gtceu:zpm_emitter',
			'2x #forge:plates/enderium',
			'4x #forge:rods/gadolinium',
			'4x #forge:screws/draconium'
		],
		'gtceu:polytetrafluoroethylene 144',
		'fluxnetworks:flux_point',
		ZPM,
		300
	);
		
	//flux storage
	addAssembler(
		[
			'gtceu:flux_casing',
			'4x fluxnetworks:flux_core',
			'2x #gtceu:batteries/zpm',
			'4x botania:bifrost_perm'
		],
		'gtceu:polytetrafluoroethylene 144',
		'fluxnetworks:basic_flux_storage',
		ZPM,
		200
	);
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
