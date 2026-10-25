//@ts-check
ServerEvents.recipes(allthemods => {
   
    const replaceShaped = (recipeID, itemID, schema, ingredients) => {        
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);
    }
  
    //'simplemagnets:basic_demagnetization_coil', 'simplemagnets:advanced_demagnetization_coil','simplemagnets:basicmagnet','simplemagnets:advancedmagnet',
    allthemods.shapeless('simplemagnets:basic_demagnetization_coil', ['simplemagnets:basicmagnet', 'gtceu:iv_machine_hull']).id('gregification:basic_demagnetization_coil');

    allthemods.shapeless('simplemagnets:advanced_demagnetization_coil', ['simplemagnets:advancedmagnet', 'gtceu:luv_machine_hull']).id('gregification:advanced_demagnetization_coil');

    allthemods.shaped('simplemagnets:basicmagnet', [
        'T L',
        'ERE',
        'ECE'
    ], {
        R: "#forge:rods/magnetic_samarium_cobalt",
        E: "#forge:plates/enderium",
        T: "#forge:dusts/redstone",
        L: "#forge:gems/lapis",
        C: "#gtceu:circuits/ev"
    }).id('gregification:basicmagnet');

    allthemods.shaped('simplemagnets:advancedmagnet', [
        'T L',
        'ERE',
        'ECE'
    ], {
        R: "gtceu:samarium_cobalt_magnetic_rotor",
        E: "#forge:plates/enderium",
        T: "#forge:dusts/redstone",
        L: "#forge:gems/lapis",
        C: "#gtceu:circuits/ev"
    }).id('gregification:advancedmagnet');

    allthemods.shaped('gtceu:element_fire', [
		' E ',
		'EBE',
		' E '
	], {	
		E: 'gtceu:elemental_fire_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_fire');

    allthemods.shaped('gtceu:element_water', [
		' E ',
		'EBE',
		' E '
	], {		
		E: 'gtceu:elemental_water_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_water');

    allthemods.shaped('gtceu:element_air', [
		' E ',
		'EBE',
		' E '
	], {		
		E: 'gtceu:elemental_air_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_air');

    allthemods.shaped('gtceu:element_earth', [
		' E ',
		'EBE',
		' E '
	], {		
		E: 'gtceu:elemental_earth_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_earth');

    allthemods.shaped('projecte:philosophers_stone',
        [
            'PEP',
            'EME',
            'PEP'
        ],
        {
            P: "#forge:plates/neutronium",
            E: "#forge:plates/europium",
            M: "mekanism:alloy_atomic"
        }
    ).id("projectge:gregificatrion/philosophers_stone")

    allthemods.shaped('itemcollectors:basic_collector',
        [
            'PEP',
            'PCP',
            'OOO'
        ],
        {
            O: "minecraft:obsidian",
            C: "gtceu:lv_item_collector",
            E: "minecraft:ender_eye",
            P: "#forge:plates/steel"
        }

    ).id("gregification:basic_collector")

    allthemods.shaped('itemcollectors:advanced_collector',
        [
            'PEP',
            'PCP',
            'OOO'
        ],
        {
            O: "minecraft:obsidian",
            C: "gtceu:hv_item_collector",
            E: "gtceu:quantum_eye",
            P: "#forge:plates/end_steel"
        }
        
    ).id("gregification:advanced_collector")


    // --- ENDER CHEST ---
    replaceShaped("enderchests:ender_pouch", null,
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:plates/manasteel",
            L: "#forge:leather",
            E: "minecraft:ender_eye"
        }
    );

    replaceShaped("enderchests:ender_bag", null,
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:plates/terrasteel",
            L: "#forge:leather",
            E: "enderchests:ender_chest"
        }
    );
    
    // --- ENDER TANK ---
    replaceShaped("endertanks:bucket", "endertanks:ender_bucket",
        [
            'PLP',
            'LBL',
            'PLP'
        ],
        {
            P: "#forge:plates/manasteel",
            L: "minecraft:blaze_powder",
            B: "endertanks:ender_tank"
        }
    );
    
    //--- ENTANGLED ---
    replaceShaped("entangled:block", null,
        ['PLP',
         'LBL',
         'POP'
        ],
        {
            B: "gtceu:magical_bio_composite",
            P: "#forge:plates/unobtainium",
            O: "#forge:rotors/enderium",
            L: "minecraft:ender_pearl"

        }
    );
    replaceShaped("entangled:item", null,
        [' PL',
         'POP',
         'OP '
        ],
        {            
            P: "#forge:plates/enderium",
            O: "#forge:rods/long/unobtainium",
            L: "enderio:vibrant_crystal"

        }
    );
    //---EASY VILLAGERS---

    replaceShaped("easy_villagers:trader", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/diamond"
        }
    );
    replaceShaped("easy_villagers:auto_trader", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/netherite"
        }
    );
    replaceShaped("easy_villagers:farmer", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "evilcraft:bucket_eternal_water"
        }
    );

    replaceShaped("easy_villagers:breeder", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/pink_slime"
        }
    );
    replaceShaped("easy_villagers:converter", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/deorum"
        }
    );
    
    replaceShaped("easy_villagers:iron_farm", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/hellforged"
        }
    );
    replaceShaped("easy_villagers:incubator", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/iesnium"
        }
    );
    //---teleport pad---
    replaceShaped("allthemodium:teleport_pad",null,
        [
            'GEG',
            'GCG',
            'GEG'
        ],
        {
            E: 'minecraft:ender_pearl',
            C: 'create:precision_mechanism',
            G: '#forge:ingots/gold'

        }
    );

    replaceShaped('minecraft:flint_and_steel',null,
        [
            'G  ',
            ' S ',
            '   '
        ],
        {
            G: 'minecraft:flint',
            S: '#forge:plates/steel'
        }
    );

    replaceShaped('minecraft:cauldron',null,
        [
            'I I',
            'I I',
            'III'
        ],
        {            
            I: '#forge:plates/steel'
        }
    );

    replaceShaped('minecraft:enchanting_table',null,
        [
            ' R ',
            'ORO',
            'SSS'
        ],
        {      
            R: 'minecraft:blaze_rod',
            S: '#forge:plates/steel',
            O: '#forge:plates/obsidian'
        }
    );
    

    replaceShaped('minecraft:brewing_stand',null,
        [
            ' M ',
            'DOD',
            'OOO'
        ],
        {      
            M: 'botania:rune_mana',      
            D: '#forge:exquisite_gems/diamond',
            O: '#forge:plates/obsidian'
        }
    );
    
});