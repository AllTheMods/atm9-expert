// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const TIER = {
        wyvern: IV,
        draconic: LuV,
        chaotic: ZPM
    };

    const TIME = {
        short: 600,
        medium: 800,
        long: 1000,
        very_long: 1200
    };


    const coils = { draconium: 'draconium', wyvern: 'wyvern', draconic: 'draconic', chaotic: 'chaotic' };
    const draconicInfuser = (inputs, fluidIn, outputs, fluidOut, eu, duration, tier, customID) => {

        // 1. AUTO-ID LOGIC
        let id;

        // 1. ID LOGIC (Optimized Safety)
        if (customID) {
            id = customID;
        } else {
            // Only try to read the item name if we DON'T have a custom ID
            let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
            let outputName = firstOutput.toString()
                .replace(/^\d+[x ]\s*/, '')
                .split(':').pop()
                .replace(/[^a-zA-Z0-9_]/g, '_')
                .toLowerCase();
            id = `gregification:draconic_infuser/${outputName}`;
        }


        let tierOrder = Object.keys(coils);
        let index = tierOrder.indexOf(tier);
        let sameOrHigherTiers = tierOrder.slice(index);

        
        sameOrHigherTiers.forEach(t => {
            let recipe = allthemods.recipes.gtceu[`draconic_infuser_${t}`](id)            
                .itemInputs(inputs)
                .itemOutputs(outputs)
                .duration(duration)
                .EUt(eu);

            if (tier == coils.chaotic){
                recipe.notConsumable('gtceu:blueprint_outworld');
            }

            if (fluidIn && fluidIn.length > 0) {
                recipe.inputFluids(fluidIn);
            }

            // 4. FLUID OUTPUTS (Added this!)
            if (fluidOut && fluidOut.length > 0) {
                recipe.outputFluids(fluidOut);
            }
        });
    };

    const addAssemblyLine = (output, inputs, fluids, duration, eu, researchItem, CWUt) => {

        let itemName = output.replace(/^\d+x\s+/, '').replace(':', '_');
        let generatedId = `gregification:assembly_line/${itemName}`;

        let recipe = allthemods.recipes.gtceu.assembly_line(generatedId)
            .itemOutputs(output)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (fluids && fluids.length > 0) {
            recipe.inputFluids(fluids);
        }

        if (researchItem) {
            if (CWUt) {
                recipe.stationResearch(b =>
                    b.researchStack(researchItem)
                        .EUt(eu / 4)
                        .CWUt(CWUt)
                );
            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }
    };

    const ad_ters = { 1: 'desh', 2: 'ostrum', 3: 'calorite', 4: 'etrium' };

    //draconic evolution - crafting core
    addAssemblyLine("draconicevolution:crafting_core",
        [
            '#forge:frames/draconium',
            "draconicevolution:dragon_heart",
            '4x #forge:double_plates/ferrognetic',
            '4x #forge:rods/gaia',
            '12x #gtceu:circuits/luv'
        ],
        [
        ],
        TIME.very_long,
        LuV,
        "draconicevolution:dragon_heart"
    );


    //draconium controller
    addAssemblyLine(
        'gtceu:draconic_infuser_draconium',
        [
            `4x #forge:gears/${ad_ters[1]}`,
            '4x #gtceu:circuits/luv',
            '#forge:frames/draconium',
            '4x #forge:small_gears/hop_graphite'
        ],
        [
            '#forge:alfsteel 576',
            '#forge:selenium 576'
        ],
        TIME.medium,
        LuV,
        'draconicevolution:crafting_core');

    //wyvern controller
    addAssemblyLine(
        'gtceu:draconic_infuser_wyvern',
        [
            `4x #forge:gears/${ad_ters[2]}`,
            'gtceu:draconic_infuser_draconium',
            '4x #gtceu:circuits/luv',
            '#forge:frames/draconium',
            '4x #forge:small_gears/hop_graphite',
            '6x #forge:plates/alloy_infused',
            '2x draconicevolution:draconium_core'
        ],
        [
            '#forge:alfsteel 576',
            '#forge:selenium 576',
            '#forge:liquid_dragon_breath 2000'
        ],
        TIME.medium,
        LuV,
        'gtceu:draconic_infuser_draconium');

    //draconic controller
    addAssemblyLine(
        'gtceu:draconic_infuser_draconic',
        [
            `4x #forge:gears/${ad_ters[3]}`,
            'gtceu:draconic_infuser_wyvern',
            '4x #gtceu:circuits/luv',
            '#forge:frames/draconium_awakened',
            '4x #forge:small_gears/hop_graphite',
            '6x #forge:plates/alloy_reinforced',
            '2x draconicevolution:wyvern_core'
        ],
        [
            '#forge:alfsteel 576',
            '#forge:selenium 576',
            '#forge:liquid_dragon_breath 2000'
        ],
        TIME.medium,
        LuV,
        'gtceu:draconic_infuser_wyvern');

    //chaotic controller
    addAssemblyLine(
        'gtceu:draconic_infuser_chaotic',
        [
            `4x #forge:gears/${ad_ters[4]}`,
            'gtceu:draconic_infuser_draconic',
            '4x #gtceu:circuits/luv',
            '#forge:frames/draconium_awakened',
            '4x #forge:small_gears/hop_graphite',
            '6x #forge:plates/alloy_atomic',
            '2x draconicevolution:awakened_core'
        ],
        [
            '#forge:alfsteel 576',
            '#forge:selenium 576',
            '#forge:liquid_dragon_breath 2000'
        ],
        TIME.medium,
        ZPM,
        'gtceu:draconic_infuser_draconic');


    //draconium casing
    addAssemblyLine(
        'gtceu:draconium_casing',
        [
            `#forge:frames/${ad_ters[1]}`,
            '#forge:storage_blocks/osmiridium',
            'draconicevolution:draconium_core',
            '6x #forge:plates/draconium'
        ],
        [
            '#forge:iesnium 576',
            '#forge:selenium 576',
            '#forge:liquid_dragon_breath 2000'
        ],
        TIME.medium,
        LuV,
        '#forge:frames/desh'
    );
    //error is here

    //wyvern casing
    addAssemblyLine(
        'gtceu:wyvern_casing',
        [
            `#forge:frames/${ad_ters[2]}`,
            'gtceu:draconium_casing',
            '2x draconicevolution:draconium_core',
            'draconicevolution:wyvern_core',
            '6x #forge:plates/draconium'
        ],
        [
            '#forge:iesnium 576',
            '#forge:selenium 576',
            '#forge:liquid_dragon_breath 2000'
        ],
        TIME.medium,
        LuV,
        'gtceu:draconium_casing'
    );

    //draconic casing
    addAssemblyLine(
        'gtceu:draconic_casing',
        [
            'gtceu:wyvern_casing',
            `#forge:frames/${ad_ters[3]}`,
            '2x draconicevolution:wyvern_core',
            '6x #forge:plates/draconium_awakened'
        ],
        [
            '#forge:iesnium 576',
            '#forge:selenium 576',
            '#forge:liquid_dragon_breath 2000'
        ],
        TIME.medium,
        LuV,
        'gtceu:wyvern_casing'
    );

    addAssemblyLine(
        'gtceu:chaotic_casing',
        [
            'gtceu:draconic_casing',
            `#forge:frames/${ad_ters[4]}`,
            '2x minecraft:dragon_egg',
            '6x #forge:plates/draconium_awakened',
            '4x draconicevolution:large_chaos_frag'
        ],
        [
            '#forge:iesnium 576',
            '#forge:selenium 576',
            '#forge:liquid_dragon_breath 2000'
        ],
        TIME.medium,
        LuV,
        'gtceu:draconic_casing'
    )

    //wyvern gear
    const wyvernGear = [
        { out: 'draconicevolution:wyvern_sword', in: 'minecraft:diamond_sword' },
        { out: 'draconicevolution:wyvern_pickaxe', in: 'minecraft:diamond_pickaxe' },
        { out: 'draconicevolution:wyvern_shovel', in: 'minecraft:diamond_shovel' },
        { out: 'draconicevolution:wyvern_axe', in: 'minecraft:diamond_axe' },
        { out: 'draconicevolution:wyvern_hoe', in: 'minecraft:diamond_hoe' },
        { out: 'draconicevolution:wyvern_bow', in: 'minecraft:bow' },
        { out: 'draconicevolution:wyvern_chestpiece', in: 'minecraft:diamond_chestplate' }
    ];
    wyvernGear.forEach(gear => {
        draconicInfuser(
            [
                gear.in,
                '2x #forge:ingots/draconium',
                'draconicevolution:draconium_core',
                'draconicevolution:wyvern_energy_core',
                '2x draconicevolution:basic_relay_crystal'
            ],
            [],
            [gear.out],
            [],
            TIER.wyvern,
            TIME.medium,
            coils.wyvern
        );
    });

    //draconic gear
    const draconicGear = [
        { out: 'draconicevolution:draconic_sword', in: 'draconicevolution:wyvern_sword' },
        { out: 'draconicevolution:draconic_pickaxe', in: 'draconicevolution:wyvern_pickaxe' },
        { out: 'draconicevolution:draconic_shovel', in: 'draconicevolution:wyvern_shovel' },
        { out: 'draconicevolution:draconic_axe', in: 'draconicevolution:wyvern_axe' },
        { out: 'draconicevolution:draconic_hoe', in: 'draconicevolution:wyvern_hoe' },
        { out: 'draconicevolution:draconic_bow', in: 'draconicevolution:wyvern_bow' },
        { out: 'draconicevolution:draconic_chestpiece', in: 'draconicevolution:wyvern_chestpiece' }
    ];
    draconicGear.forEach(gear => {
        draconicInfuser(
            [
                gear.in,
                '4x #forge:ingots/netherite',
                '2x #forge:ingots/draconium_awakened',
                'draconicevolution:wyvern_core',
                'draconicevolution:draconic_energy_core'
            ],
            [],
            [gear.out],
            [],
            TIER.draconic,
            TIME.long,
            coils.draconic
        );
    });

    //chaotic gear
    const chaoticGear = [
        { out: 'draconicevolution:chaotic_sword', in: 'draconicevolution:draconic_sword' },
        { out: 'draconicevolution:chaotic_pickaxe', in: 'draconicevolution:draconic_pickaxe' },
        { out: 'draconicevolution:chaotic_shovel', in: 'draconicevolution:draconic_shovel' },
        { out: 'draconicevolution:chaotic_axe', in: 'draconicevolution:draconic_axe' },
        { out: 'draconicevolution:chaotic_hoe', in: 'draconicevolution:draconic_hoe' },
        { out: 'draconicevolution:chaotic_bow', in: 'draconicevolution:draconic_bow' },
        //{ out: 'draconicevolution:chaotic_chestpiece', in: 'draconicevolution:draconic_chestpiece' }
    ];
    chaoticGear.forEach(gear => {
        draconicInfuser(
            [
                gear.in,
                '6x #forge:ingots/draconium_awakened',
                'draconicevolution:chaotic_core',
                'draconicevolution:chaotic_energy_core',
                '8x #forge:plates/rubidium',
                '8x #forge:small_gears/etrium',
                '16x #forge:rods/long/strontium',
                '64x #forge:foils/thallium'
            ],
            ['#forge:gadolinium 64000'],
            [gear.out],
            [],
            TIER.chaotic,
            TIME.very_long,
            coils.chaotic
        );
    });


    draconicInfuser(
        [
            'draconicevolution:draconic_chestpiece',
            '6x #forge:ingots/draconium_awakened',
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_energy_core',
            '8x #forge:plates/rubidium',
            '8x #forge:small_gears/etrium',
            '16x #forge:rods/long/strontium',
            '64x #forge:foils/thallium',
            '12x #forge:plates/kevlar'
        ],
        ['#forge:gadolinium 64000'],
        ['draconicevolution:chaotic_chestpiece'],
        [],
        TIER.chaotic,
        TIME.very_long,
        coils.chaotic
    );


    //draconic staff
    draconicInfuser(
        [
            'draconicevolution:awakened_core',
            'draconicevolution:wyvern_sword',
            'draconicevolution:wyvern_pickaxe',
            'draconicevolution:wyvern_shovel',
            '6x #forge:ingots/draconium_awakened',
            'draconicevolution:chaotic_energy_core'
        ],
        [],
        ['draconicevolution:draconic_staff'],
        [],
        TIER.draconic,
        TIME.very_long,
        coils.draconic
    );

    //chaotic staff
    draconicInfuser(
        [
            'draconicevolution:draconic_staff',
            '4x draconicevolution:medium_chaos_frag',
            '3x draconicevolution:chaotic_energy_core',
            '2x draconicevolution:awakened_core',
            'draconicevolution:chaotic_core'
        ],
        [],
        ['draconicevolution:chaotic_staff'],
        [],
        TIER.chaotic,
        TIME.very_long,
        coils.chaotic,
        'chaotic_staff_from_draconic'
    );

    //chaotic staff
    draconicInfuser(
        [
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_energy_core',
            '6x draconicevolution:medium_chaos_frag',
            'draconicevolution:chaotic_sword',
            'draconicevolution:chaotic_shovel',
            'draconicevolution:chaotic_pickaxe'
        ],
        [],
        ['draconicevolution:chaotic_staff'],
        [],
        TIER.chaotic,
        TIME.very_long,
        coils.chaotic,
        'chaotic_staff_from_tools'
    );

    //wyvern capacitor
    draconicInfuser(
        [
            'draconicevolution:wyvern_core',
            '4x #forge:ingots/draconium',
            '4x draconicevolution:wyvern_energy_core'
        ],
        [],
        ['draconicevolution:wyvern_capacitor'],
        [],
        TIER.wyvern,
        TIME.medium,
        coils.wyvern
    );

    //draconic capacitor
    draconicInfuser(
        [
            'draconicevolution:wyvern_capacitor',
            '4x #forge:ingots/draconium_awakened',
            '3x draconicevolution:draconic_energy_core',
            'draconicevolution:awakened_core'
        ],
        [],
        ['draconicevolution:draconic_capacitor'],
        [],
        TIER.draconic,
        TIME.long,
        coils.draconic
    );

    //chaotic capacitor
    draconicInfuser(
        [
            'draconicevolution:draconic_capacitor',
            '4x #forge:ingots/draconium_awakened',
            '3x draconicevolution:chaotic_energy_core',
            'draconicevolution:chaotic_core'
        ],
        [],
        ['draconicevolution:chaotic_capacitor'],
        [],
        TIER.chaotic,
        TIME.very_long,
        coils.chaotic
    );

    //draconic relay
    draconicInfuser(
        [
            '4x #forge:gems/diamond',
            '4x draconicevolution:wyvern_relay_crystal',
            '4x draconicevolution:wyvern_energy_core',
            'draconicevolution:wyvern_core'

        ],
        [],
        ['4x draconicevolution:draconic_relay_crystal'],
        [],
        TIER.draconic,
        TIME.long,
        coils.draconic
    );

    //reactor core
    draconicInfuser(
        [
            'draconicevolution:chaos_shard',
            '2x draconicevolution:large_chaos_frag',
            '3x #forge:ingots/draconium',
            '4x #forge:ingots/draconium_awakened'
        ],
        [],
        ['draconicevolution:reactor_core'],
        [],
        TIER.chaotic,
        TIME.very_long,
        coils.chaotic
    );



    //reactor injector
    draconicInfuser(
        [
            'draconicevolution:wyvern_core',
            '4x #forge:ingots/draconium',
            '2x #forge:ingots/iron',
            '4x draconicevolution:reactor_prt_in_rotor'
        ],
        [],
        ['draconicevolution:reactor_injector'],
        [],
        TIER.chaotic,
        TIME.very_long,
        coils.chaotic
    );

    //reactor stabilizer
    draconicInfuser(
        [
            'draconicevolution:reactor_prt_stab_frame',
            '3x #forge:ingots/draconium_awakened',
            'draconicevolution:chaotic_core',
            'draconicevolution:large_chaos_frag',
            'draconicevolution:wyvern_energy_core',
            'draconicevolution:reactor_prt_focus_ring',
            'draconicevolution:reactor_prt_rotor_full'

        ],
        [],
        ['draconicevolution:reactor_stabilizer'],
        [],
        TIER.chaotic,
        TIME.very_long,
        coils.chaotic
    );

    //awakened draconiium block
    draconicInfuser(
        [
            '4x #forge:storage_blocks/draconium',
            '6x draconicevolution:draconium_core',
            'draconicevolution:dragon_heart'

        ],
        [],
        ['4x #forge:storage_blocks/draconium_awakened'],
        [],
        TIER.wyvern,
        TIME.medium,
        coils.wyvern
    );

    //advanced dislocator
    draconicInfuser(
        [
            'draconicevolution:dislocator',
            '4x #forge:ingots/draconium',
            '3x #forge:gems/ender_pearl',
            'draconicevolution:wyvern_core'

        ],
        [],
        ['draconicevolution:advanced_dislocator'],
        [],
        TIER.wyvern,
        TIME.medium,
        coils.wyvern
    );

    //draconium chest
    draconicInfuser(
        [
            '#forge:chests/wooden',
            '5x #forge:furnaces',
            '2x #forge:workbenches',
            '#forge:storage_blocks/draconium',
            '2x draconicevolution:draconium_core'

        ],
        [],
        ['draconicevolution:draconium_chest'],
        [],
        TIER.draconic,
        TIME.long,
        coils.draconium
    );

    //chaos bee
    draconicInfuser(
        [
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:awakened"}}').strongNBT(),
            '2x draconicevolution:chaotic_core',
            'draconicevolution:awakened_core',
            '2x #forge:storage_blocks/honeycombs',
            'minecraft:honey_block',
            '#forge:ingots/draconium_awakened',
            'draconicevolution:medium_chaos_frag'
        ],
        [],
        [Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:chaos"}}').strongNBT()],
        [],
        TIER.chaotic,
        TIME.very_long,
        coils.chaotic,
        "chaos_bee"
    );

    //awakened bee
    draconicInfuser(
        [
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconium"}}').strongNBT(),
            '2x draconicevolution:awakened_core',
            '2x #forge:storage_blocks/honeycombs',
            'minecraft:honey_block',
            '2x #forge:ingots/draconium_awakened',
            'draconicevolution:dragon_heart'
        ],
        [],
        [Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:awakened"}}').strongNBT()],
        [],
        TIER.draconic,
        TIME.long,
        coils.draconic,
        "awakened_bee"
    );

    //draconium bee
    draconicInfuser(
        [
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconic"}}').strongNBT(),
            '2x draconicevolution:draconium_core',
            '2x #forge:storage_blocks/honeycombs',
            '2x #forge:storage_blocks/draconium',
            '2x #forge:dusts/draconium',
        ],
        [],
        [Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconium"}}').strongNBT()],
        [],
        TIER.wyvern,
        TIME.medium,
        coils.wyvern,
        "draconium_bee"
    );

    //draconium core
    addAssemblyLine(
        'draconicevolution:draconium_core',
        [
            '#forge:gems/diamond',
            '4x #forge:ingots/draconium',
            '4x #forge:plates/tellurium'
        ],
        [],
        TIME.medium,
        TIER.wyvern,
        '#forge:ingots/draconium'
    );

    //wyvern core
    draconicInfuser(
        [
            '#forge:nether_stars',
            '4x #forge:ingots/draconium',
            '4x draconicevolution:draconium_core'
        ],
        [],
        ['draconicevolution:wyvern_core'],
        [],
        TIER.wyvern,
        TIME.medium,
        coils.draconium
    );


    //awakened core
    draconicInfuser(
        [
            '#forge:storage_blocks/nether_star',
            '4x #forge:ingots/draconium_awakened',
            '4x draconicevolution:wyvern_core'
        ],
        [],
        ['draconicevolution:awakened_core'],
        [],
        TIER.wyvern,
        TIME.medium,
        coils.wyvern
    );

    //chaotic core
    draconicInfuser(
        ['4x #forge:ingots/draconium_awakened', '4x draconicevolution:awakened_core', '5x draconicevolution:large_chaos_frag'],
        [],
        ['draconicevolution:chaotic_core'],
        [],
        TIER.draconic,
        TIME.medium,
        coils.draconic
    );


});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
