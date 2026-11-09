// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//@ts-check
ServerEvents.recipes(allthemods => {

    const sophisticatedWoods = [
        'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak',
        'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'
    ];

    //Item.of('sophisticatedstorage:chest', '{woodType:"gtceu:rubber"}')
    sophisticatedWoods.forEach(wood => {
        allthemods.shapeless(
            Item.of('sophisticatedstorage:chest', '{woodType:"' + wood + '"}'),
            ['minecraft:chest', '#forge:plates/redstone', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'minecraft:' + wood + '_planks']
        ).id('gregification:sophisticated_chest_' + wood);

        allthemods.shapeless(
            Item.of('sophisticatedstorage:barrel', '{woodType:"' + wood + '"}'),
            ['minecraft:barrel', '#forge:plates/redstone', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'minecraft:' + wood + '_planks']
        ).id('gregification:sophisticated_barrel_' + wood);
    });
    allthemods.shapeless(
        Item.of('sophisticatedstorage:chest', '{woodType:"gtceu:rubber"}'),
        ['minecraft:chest', '#forge:plates/redstone', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'gtceu:rubber_planks']
    ).id('gregification:sophisticated_chest_rubber');

    allthemods.shapeless(
        Item.of('sophisticatedstorage:barrel', '{woodType:"gtceu:rubber"}'),
        ['minecraft:barrel', '#forge:plates/redstone', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'gtceu:rubber_planks']
    ).id('gregification:sophisticated_barrel_rubber');

    const replaceShaped = (recipeID, itemID, schema, ingredients) => {
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);
    }

    //'simplemagnets:basic_demagnetization_coil', 'simplemagnets:advanced_demagnetization_coil','simplemagnets:basicmagnet','simplemagnets:advancedmagnet',
    allthemods.shapeless('simplemagnets:basic_demagnetization_coil', ['simplemagnets:basicmagnet', 'gtceu:lv_machine_hull']).id('gregification:basic_demagnetization_coil');

    allthemods.shapeless('simplemagnets:advanced_demagnetization_coil', ['simplemagnets:advancedmagnet', 'gtceu:ev_machine_hull']).id('gregification:advanced_demagnetization_coil');

    allthemods.shaped('simplemagnets:basicmagnet', [
        'T L',
        'ERE',
        'ECE'
    ], {
        R: "#forge:rods/magnetic_steel",
        E: "#forge:plates/aluminum",
        T: "#forge:dusts/redstone",
        L: "#forge:gems/lapis",
        C: "#gtceu:circuits/lv"
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
    replaceShaped("allthemodium:teleport_pad", null,
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

    allthemods.shaped('bloodmagic:sacrificialdagger',
        [
            ' I ',
            'DID',
            ' G '
        ],
        {
            I: "#forge:plates/iron",
            D: "evilcraft:dark_gem",
            G: "#forge:plates/gold"
        }
    ).id('gregification:sacrificial_dagger')

    allthemods.shaped('cookingforblockheads:sink',
        [
            'PPP',
            'PEP',
            'TTT'
        ],
        {
            T: "#minecraft:terracotta",
            P: "#forge:plates/steel",
            E: "evilcraft:bucket_eternal_water"
        }
    ).id('gregification:cookingforblockheads_sink')

    allthemods.shaped('evilcraft:eternal_water',
        [
            'PPP',
            'PEP',
            'TTT'
        ],
        {
            T: "#minecraft:terracotta",
            P: "#forge:plates/aluminum",
            E: "evilcraft:bucket_eternal_water"
        }
    ).id('gregification:evilcraft_eternal_water')


    allthemods.recipes.gtceu.assembler('gregification:backpack_assembly')
        .itemInputs(
            'ironjetpacks:strap',
            '#forge:chests/wooden',
            '4x #forge:leather',
            '4x #forge:string'
        )
        .inputFluids('#forge:glue 576')
        .itemOutputs('sophisticatedbackpacks:backpack')
        .duration(600)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:silent_blueprint')
        .itemInputs(
            '4x #forge:paper',
            '#forge:small_dusts/redstone'
        )
        .inputFluids('#forge:ink 144')
        .itemOutputs('silentgear:blueprint_paper')
        .duration(600)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:silent_blueprint_wood')
        .itemInputs(
            '4x #forge:paper',
            '#forge:small_dusts/wood'
        )
        .inputFluids('#forge:glue 144')
        .itemOutputs('silentgear:template_board')
        .duration(600)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:greg_blueprint')
        .itemInputs(
            '4x #forge:paper',
            '#forge:small_dusts/lapis',

        )
        .inputFluids('#forge:ink 144')
        .itemOutputs('gtceu:blueprint_blank')
        .duration(600)
        .EUt(LV);


    /*
    //backpacks
    const backpackDuration = 600;
    const backPacks = [
        { tier: null, prevTier: null, eu: LV, fluid:'#forge:glue' },
        { tier: 'copper', prevTier: null, eu: LV, fluid:'#forge:glue' },
        { tier: 'iron', prevTier: 'copper', eu: LV, fluid:'#forge:glue' },
        { tier: 'gold', prevTier: 'iron', eu: MV, fluid:'#forge:glue' },
        { tier: 'diamond', prevTier: 'gold', eu: MV, fluid:'#forge:glue' }        
    ]
    backPacks.forEach(backpack => {
        if (backpack.tier == null) {
             allthemods.recipes.gtceu.assembler('gregification:backpack_assembly')
            .itemInputs(
                'ironjetpacks:strap',
                '#forge:chests/wooden',
                '4x #forge:leather',
                '4x #forge:string'
            )
            .inputFluids(`${backpack.fluid} 576`)
            .itemOutputs('sophisticatedbackpacks:backpack')
            .duration(backpackDuration)
            .EUt(backpack.eu);
        }
        else
        {
            let pMat = backpack.prevTier == null ? 'sophisticatedbackpacks:backpack' : `sophisticatedbackpacks:${backpack.prevTier}_backpack`;
            let pRod = backpack.prevTier == null ? '#forge:rods/wood' : `#forge:rods/${backpack.prevTier}`;
            allthemods.recipes.gtceu.assembler(`gregification:backpack_assembly_${backpack.tier}`)
            .itemInputs(
                'ironjetpacks:strap',
                pMat,
                `6x #forge:plates/${backpack.tier}`,
                `2x ${pRod}`
            )
            .inputFluids(`${backpack.fluid} 576`)
            .itemOutputs(`sophisticatedbackpacks:${backpack.tier}_backpack`)
            .duration(backpackDuration)
            .EUt(backpack.eu);
        }
    });*/


    const ironFurnaces = [
        { material: 'copper', prefix: 'lv', eu: LV, fluid: '#forge:polyethylene', coil: 'gtceu:cupronickel_coil_block' },
        { material: 'iron', prefix: 'lv', eu: LV, fluid: '#forge:polyethylene', coil: 'gtceu:cupronickel_coil_block' },
        { material: 'silver', prefix: 'mv', eu: MV, fluid: '#forge:polyethylene', coil: 'gtceu:kanthal_coil_block' },
        { material: 'gold', prefix: 'mv', eu: MV, fluid: '#forge:polyethylene', coil: 'gtceu:kanthal_coil_block' },
        { material: 'diamond', prefix: 'hv', eu: HV, fluid: '#forge:polytetrafluoroethylene', coil: 'gtceu:nichrome_coil_block' },
        { material: 'emerald', prefix: 'hv', eu: HV, fluid: '#forge:polytetrafluoroethylene', coil: 'gtceu:nichrome_coil_block' },
        { material: 'crystal', prefix: 'ev', eu: EV, fluid: '#forge:polytetrafluoroethylene', coil: 'gtceu:rtm_alloy_coil_block' },
        { material: 'obsidian', prefix: 'ev', eu: EV, fluid: '#forge:polytetrafluoroethylene', coil: 'gtceu:rtm_alloy_coil_block' },
        { material: 'netherite', prefix: 'iv', eu: IV, fluid: '#forge:polybenzimidazole', coil: 'gtceu:hssg_coil_block' },
        { material: 'allthemodium', prefix: 'iv', eu: IV, fluid: '#forge:polybenzimidazole', coil: 'gtceu:hssg_coil_block' },
        { material: 'vibranium', prefix: 'luv', eu: LuV, fluid: '#forge:polybenzimidazole', coil: 'gtceu:naquadah_coil_block' },
        { material: 'unobtainium', prefix: 'zpm', eu: ZPM, fluid: '#forge:polybenzimidazole', coil: 'gtceu:trinium_coil_block' }
    ];

    ironFurnaces.forEach((furnace, index) => {
        let tier = index > 0 ? `ironfurnaces:${ironFurnaces[index - 1].material}_furnace` : 'minecraft:furnace';
        let plate = furnace.material == 'crystal' ? '#forge:plates/nether_star' : `#forge:plates/${furnace.material}`;
        allthemods.recipes.gtceu.assembler(`gregification:${furnace.material}_furnace`)
            .itemInputs(`gtceu:${furnace.prefix}_machine_hull`, tier, `2x #gtceu:circuits/${furnace.prefix}`, `6x ${plate}`, furnace.coil)
            .inputFluids(`${furnace.fluid} 576`)
            .itemOutputs(`ironfurnaces:${furnace.material}_furnace`)
            .duration(600)
            .EUt(furnace.eu);

        allthemods.recipes.gtceu.assembler(`gregification:${furnace.material}_upgrade`)
            .itemInputs(`gtceu:${furnace.prefix}_machine_hull`, `2x #gtceu:circuits/${furnace.prefix}`, `6x ${plate}`, furnace.coil)
            .inputFluids(`${furnace.fluid} 576`)
            .itemOutputs(`ironfurnaces:upgrade_${furnace.material}`)
            .duration(600)
            .EUt(furnace.eu);
    });

    allthemods.recipes.gtceu.assembler('gregification:augment_generator')
        .itemInputs('2x gtceu:lpic_chip', 'gtceu:hv_voltage_coil', '2x #gtceu:cables/gold', '4x #gtceu:circuits/hv')
        .inputFluids('#forge:sodium_potassium 1000')
        .itemOutputs('ironfurnaces:augment_generator')
        .duration(400)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:augment_factory')
        .itemInputs('8x #gtceu:circuits/iv', '8x #forge:plates/tungsten_carbide', '16x #gtceu:wires/quadruple/platinum')
        .inputFluids('#forge:tungsten_steel 576')
        .itemOutputs('ironfurnaces:augment_factory')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:augment_speed')
        .itemInputs('8x #gtceu:circuits/hv', '8x #forge:plates/energetic_alloy', '16x #gtceu:wires/quadruple/cadmium_copper')
        .inputFluids('#forge:glycerol 576')
        .itemOutputs('ironfurnaces:augment_speed')
        .duration(400)
        .EUt(EV);

    allthemods.recipes.gtceu.assembler('gregification:augment_fuel')
        .itemInputs('2x #gtceu:circuits/lv', '2x #forge:plates/steel', '4x #gtceu:wires/single/cupronickel')
        .itemOutputs('ironfurnaces:augment_fuel')
        .duration(400)
        .EUt(LV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
