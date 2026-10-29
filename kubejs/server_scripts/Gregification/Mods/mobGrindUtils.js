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
	
    // --- MOB GRINDING UTILS ---    
    addAssembler(
        [
            'gtceu:magical_bio_composite',
            '4x gtceu:blood_coated_blade',
            '4x gtceu:iv_electric_motor',
            '2x #gtceu:circuits/iv'
        ],
        '#forge:lubricant 1000', 
        'mob_grinding_utils:saw',         
        IV,
        1200
    );

    addAssembler(
        [
            'gtceu:mv_conveyor_module',
            'gtceu:mv_machine_hull',
            '4x #forge:plates/iron'
        ],
        '#forge:lubricant 100', 
        'mob_grinding_utils:entity_conveyor',
        MV,
        200
    );
    	
	addAssembler(
        [
            'gtceu:mv_machine_casing',
            '4x #forge:plates/manasteel',                        
            'botania:rune_mana',
			'occultism:spirit_attuned_gem',
			'ars_nouveau:source_gem',
            'bloodmagic:reinforcedslate',
            '#forge:ingots/deorum'
        ],
        'gtceu:soldering_alloy 144',
        'gtceu:magical_bio_composite',
        MV, // MV Voltage
        600  // 30 Seconds
    );
    //'mob_grinding_utils:recipe_saw_upgrade_beheading'

    allthemods.shaped('mob_grinding_utils:saw_upgrade_beheading', [
        "GLG",
        "LRL",
        "GLG"
      ], {
      G: '#forge:plates/vibranium',
      L: '#forge:plates/polybenzimidazole',
      R: 'gtceu:tungsten_grinding_head'
    }).id('gregification:mob_grinding_utils/saw_upgrade_beheading')


    allthemods.shaped('mob_grinding_utils:fan_upgrade_height', [
        "PWP",
        "PRP",
        "PWP"
    ],
    {
        R: '#forge:rotors/tungsten_steel',        
        P: '#forge:plates/allthemodium',
        W: '#forge:wires/quadruple/mercury_barium_calcium_cuprate'
    }).id('gregification:mob_grinding_utils/fan_upgrade_height')

    allthemods.shaped('mob_grinding_utils:fan_upgrade_width', [
        "PPP",
        "WRW",
        "PPP"
    ],
    {
        R: '#forge:rotors/tungsten_steel',        
        P: '#forge:plates/allthemodium',
        W: '#forge:wires/quadruple/mercury_barium_calcium_cuprate'
    }).id('gregification:mob_grinding_utils/fan_upgrade_width')

    allthemods.shaped('mob_grinding_utils:fan_upgrade_speed', [
        "PWP",
        "WRW",
        "PWP"
    ],
    {
        R: '#forge:rotors/tungsten_steel',        
        P: '#forge:plates/allthemodium',
        W: '#forge:wires/quadruple/mercury_barium_calcium_cuprate'
    }).id('gregification:mob_grinding_utils/fan_upgrade_speed')




    allthemods.shaped('mob_grinding_utils:fan', [
        "PRP",
        "WHW",
        "PCP"
    ],
    {
        R: '#forge:rotors/tungsten_steel',
        C: '#forge:circuits/iv',
        H: 'gtceu:hv_machine_hull',
        P: '#forge:plates/unobtainium',
        W: '#forge:wires/hex/cadmium_copper'
    }).id('gregification:mob_grinding_utils/fan')
    
    allthemods.shaped('mob_grinding_utils:saw_upgrade_looting', [
        "GLG",
        "LRL",
        "GLG"
      ], {
      G: '#forge:plates/allthemodium',
      L: '#forge:plates/polybenzimidazole',
      R: [Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 4).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 5).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 6).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 7).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 8).strongNBT()]
    }).id('gregification:mob_grinding_utils/saw_upgrade_looting')

    allthemods.shaped('mob_grinding_utils:saw_upgrade_sharpness', [
        "GLG",
        "LRL",
        "GLG"
      ], {
      G: '#forge:plates/vibranium',
      L: '#forge:plates/polybenzimidazole',
      R: [Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 2).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 3).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 4).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 5).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 6).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 7).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 8).strongNBT()]
    }).id('gregification:mob_grinding_utils/saw_upgrade_sharpness')
  
	
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
