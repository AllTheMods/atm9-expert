// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const toolScrew = '#gtceu:tools/crafting_screwdrivers'
    const toolHammer = '#gtceu:tools/crafting_hammers'
    const toolWrench = '#gtceu:tools/crafting_wrenches'
    const toolSaw = '#gtceu:tools/crafting_saws'

    const addAssembler = (ID, itemsIn, itemsOut, eu, duration, program) => {
        let recipe = allthemods.recipes.gtceu.assembler(`gregification:assembler/${ID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (program) {
            recipe.circuit(program);
        }
    }

    const sophisticatedWoods = [
        'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak',
        'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'
    ]

    for (let wood of sophisticatedWoods) {
        //normal
            allthemods.shapeless(Item.of('sophisticatedstorage:chest', `{woodType:"${wood}"}`), ['sophisticatedstorage:chest', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:barrel', `{woodType:"${wood}"}`), ['sophisticatedstorage:barrel', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_barrel_1', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_barrel_1', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_barrel_2', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_barrel_2', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_barrel_3', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_barrel_3', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_barrel_4', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_barrel_4', `minecraft:${wood}_planks`])

        //copper
            allthemods.shapeless(Item.of('sophisticatedstorage:copper_chest', `{woodType:"${wood}"}`), ['sophisticatedstorage:copper_chest', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:copper_barrel', `{woodType:"${wood}"}`), ['sophisticatedstorage:copper_barrel', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_copper_barrel_1', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_copper_barrel_1', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_copper_barrel_2', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_copper_barrel_2', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_copper_barrel_3', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_copper_barrel_3', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_copper_barrel_4', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_copper_barrel_4', `minecraft:${wood}_planks`])

        //iron
            allthemods.shapeless(Item.of('sophisticatedstorage:iron_chest', `{woodType:"${wood}"}`), ['sophisticatedstorage:iron_chest', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:iron_barrel', `{woodType:"${wood}"}`), ['sophisticatedstorage:iron_barrel', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_iron_barrel_1', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_iron_barrel_1', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_iron_barrel_2', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_iron_barrel_2', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_iron_barrel_3', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_iron_barrel_3', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_iron_barrel_4', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_iron_barrel_4', `minecraft:${wood}_planks`])

        //gold
            allthemods.shapeless(Item.of('sophisticatedstorage:gold_chest', `{woodType:"${wood}"}`), ['sophisticatedstorage:gold_chest', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:gold_barrel', `{woodType:"${wood}"}`), ['sophisticatedstorage:gold_barrel', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_gold_barrel_1', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_gold_barrel_1', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_gold_barrel_2', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_gold_barrel_2', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_gold_barrel_3', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_gold_barrel_3', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_gold_barrel_4', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_gold_barrel_4', `minecraft:${wood}_planks`])

        //diamond
            allthemods.shapeless(Item.of('sophisticatedstorage:diamond_chest', `{woodType:"${wood}"}`), ['sophisticatedstorage:diamond_chest', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:diamond_barrel', `{woodType:"${wood}"}`), ['sophisticatedstorage:diamond_barrel', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_diamond_barrel_1', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_diamond_barrel_1', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_diamond_barrel_2', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_diamond_barrel_2', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_diamond_barrel_3', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_diamond_barrel_3', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_diamond_barrel_4', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_diamond_barrel_4', `minecraft:${wood}_planks`])

        //netherite
            allthemods.shapeless(Item.of('sophisticatedstorage:netherite_chest', `{woodType:"${wood}"}`), ['sophisticatedstorage:netherite_chest', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:netherite_barrel', `{woodType:"${wood}"}`), ['sophisticatedstorage:netherite_barrel', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_netherite_barrel_1', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_netherite_barrel_1', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_netherite_barrel_2', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_netherite_barrel_2', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_netherite_barrel_3', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_netherite_barrel_3', `minecraft:${wood}_planks`])
            allthemods.shapeless(Item.of('sophisticatedstorage:limited_netherite_barrel_4', `{woodType:"${wood}"}`), ['sophisticatedstorage:limited_netherite_barrel_4', `minecraft:${wood}_planks`])
    }

    allthemods.stonecutting(Item.of('sophisticatedstorage:chest', `{woodType:"spruce"}`).strongNBT(), 'sophisticatedstorage:chest')

    //recipes
        allthemods.shaped('sophisticatedstorage:upgrade_base',
            [
                'abc',
                'bdb',
                'ebe'
            ],
            {
                a: toolScrew,
                b: 'gtceu:double_iron_plate',
                c: toolHammer,
                d: 'gtceu:wood_plate',
                e: 'gtceu:iron_screw'
            }
        ).id('gregification:sophstorage/upgrade_base')

        addAssembler('upgrade_base_iron', ['gtceu:wood_plate', '4x gtceu:double_iron_plate'], 'sophisticatedstorage:upgrade_base', 30, 100)
        addAssembler('upgrade_base_steel', ['gtceu:wood_plate', '4x gtceu:double_steel_plate'], '2x sophisticatedstorage:upgrade_base', 30, 100)

        allthemods.shaped(Item.of('sophisticatedstorage:chest', '{woodType:"oak"}'),
            [
                'aba',
                'cdc',
                'aea'
            ],
            {
                a: 'gtceu:double_red_alloy_plate',
                b: toolWrench,
                c: 'gtceu:double_steel_plate',
                d: '#forge:chests',
                e: toolHammer
            }
        ).id('gregification:sophstorage/basic_chest_oak')

        allthemods.shaped(Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}'),
            [
                'aba',
                'cdc',
                'aea'
            ],
            {
                a: 'gtceu:double_red_alloy_plate',
                b: toolWrench,
                c: 'gtceu:double_steel_plate',
                d: '#forge:barrels',
                e: toolHammer
            }
        ).id('gregification:sophstorage/basic_barrel_oak')

        addAssembler('basic_chest_oak', ['4x gtceu:double_red_alloy_plate', '2x gtceu:double_steel_plate', '#forge:chests'], Item.of('sophisticatedstorage:chest', '{woodType:"oak"}'), 30, 200)
        addAssembler('basic_barrel_oak', ['4x gtceu:double_red_alloy_plate', '2x gtceu:double_steel_plate', '#forge:barrels'], Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}'), 30, 200)

        allthemods.shaped(
            Item.of('sophisticatedstorage:limited_barrel_1', '{woodType:"oak"}'),
            [
                ' a ',
                'bcd',
                ' a '
            ],
            {
                a: 'gtceu:double_steel_plate',
                b: toolWrench,
                c: Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}').strongNBT(),
                d: toolSaw
            }
        ).id('gregification:sophstorage/basic_limited_one_oak')

        allthemods.shaped(
            Item.of('sophisticatedstorage:limited_barrel_2', '{woodType:"oak"}'),
            [
                ' b ',
                'aca',
                ' d '
            ],
            {
                a: 'gtceu:double_steel_plate',
                b: toolWrench,
                c: Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}').strongNBT(),
                d: toolSaw
            }
        ).id('gregification:sophstorage/basic_limited_two_oak')

        allthemods.shaped(
            Item.of('sophisticatedstorage:limited_barrel_3', '{woodType:"oak"}'),
            [
                ' a ',
                'dcb',
                ' a '
            ],
            {
                a: 'gtceu:double_steel_plate',
                b: toolWrench,
                c: Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}').strongNBT(),
                d: toolSaw
            }
        ).id('gregification:sophstorage/basic_limited_three_oak')

        allthemods.shaped(
            Item.of('sophisticatedstorage:limited_barrel_4', '{woodType:"oak"}'),
            [
                ' d ',
                'aca',
                ' b '
            ],
            {
                a: 'gtceu:double_steel_plate',
                b: toolWrench,
                c: Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}').strongNBT(),
                d: toolSaw
            }
        ).id('gregification:sophstorage/basic_limited_four_oak')

        addAssembler('limited_one_oak', ['2x gtceu:double_steel_plate', Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}').strongNBT()], Item.of('sophisticatedstorage:limited_barrel_1', '{woodType:"oak"}'), 30, 200, 1)
        addAssembler('limited_two_oak', ['2x gtceu:double_steel_plate', Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}').strongNBT()], Item.of('sophisticatedstorage:limited_barrel_2', '{woodType:"oak"}'), 30, 200, 2)
        addAssembler('limited_three_oak', ['2x gtceu:double_steel_plate', Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}').strongNBT()], Item.of('sophisticatedstorage:limited_barrel_3', '{woodType:"oak"}'), 30, 200, 3)
        addAssembler('limited_four_oak', ['2x gtceu:double_steel_plate', Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}').strongNBT()], Item.of('sophisticatedstorage:limited_barrel_4', '{woodType:"oak"}'), 30, 200, 4)

        let sophUpCB = [
            {
                inC: 'chest',
                inB: 'barrel',
                outC: 'copper_chest',
                outB: 'copper_barrel',
                plate: 'forge:double_plates/copper',
                screw: 'forge:screws/copper'
            },
            {
                inC: 'copper_chest',
                inB: 'copper_barrel',
                outC: 'iron_chest',
                outB: 'iron_barrel',
                plate: 'forge:double_plates/iron',
                screw: 'forge:screws/iron'
            },
            {
                inC: 'iron_chest',
                inB: 'iron_barrel',
                outC: 'gold_chest',
                outB: 'gold_barrel',
                plate: 'forge:double_plates/gold',
                screw: 'forge:screws/gold'
            },
            {
                inC: 'gold_chest',
                inB: 'gold_barrel',
                outC: 'diamond_chest',
                outB: 'diamond_barrel',
                plate: 'forge:plates/diamond',
                screw: 'forge:screws/diamond'
            },
            {
                inC: 'diamond_chest',
                inB: 'diamond_barrel',
                outC: 'netherite_chest',
                outB: 'netherite_barrel',
                plate: 'forge:dense_plates/netherite',
                screw: 'forge:screws/dark_steel'
            }
        ]

        for (let item of sophUpCB) {
            allthemods.custom({
                type: "sophisticatedstorage:storage_tier_upgrade",
                key: {
                    S: {
                        tag: item.screw,
                    },
                    P: {
                        tag: item.plate,
                    },
                    C: {
                        item: `sophisticatedstorage:${item.inC}`,
                    },
                },
                pattern: ["SPS", "PCP", "SPS"],
                result: {
                    item: `sophisticatedstorage:${item.outC}`,
                }
            })

            allthemods.custom({
                type: "sophisticatedstorage:storage_tier_upgrade",
                key: {
                    S: {
                        tag: item.screw,
                    },
                    P: {
                        tag: item.plate,
                    },
                    C: {
                        item: `sophisticatedstorage:${item.inB}`,
                    },
                },
                pattern: ["SPS", "PCP", "SPS"],
                result: {
                    item: `sophisticatedstorage:${item.outB}`,
                }
            })
        }

        let sophLimUP = [
            {
                type: 'copper',
                old: 'barrel',
                plate: 'forge:double_plates/copper',
                screw: 'forge:screws/copper'
            },
            {
                type: 'iron',
                old: 'copper_barrel',
                plate: 'forge:double_plates/iron',
                screw: 'forge:screws/iron'
            },
            {
                type: 'gold',
                old: 'iron_barrel',
                plate: 'forge:double_plates/gold',
                screw: 'forge:screws/gold'
            },
            {
                type: 'diamond',
                old: 'gold_barrel',
                plate: 'forge:plates/diamond',
                screw: 'forge:screws/diamond'
            },
            {
                type: 'netherite',
                old: 'diamond_barrel',
                plate: 'forge:dense_plates/netherite',
                screw: 'forge:screws/dark_steel'
            }
        ]

        for (let item of sophLimUP) {
            allthemods.custom({
                type: "sophisticatedstorage:storage_tier_upgrade",
                key: {
                    S: {
                        tag: item.screw,
                    },
                    P: {
                        tag: item.plate,
                    },
                    C: {
                        item: `sophisticatedstorage:limited_${item.old}_1`,
                    },
                },
                pattern: ["SPS", "PCP", "SPS"],
                result: {
                    item: `sophisticatedstorage:limited_${item.type}_barrel_1`,
                }
            })

            allthemods.custom({
                type: "sophisticatedstorage:storage_tier_upgrade",
                key: {
                    S: {
                        tag: item.screw,
                    },
                    P: {
                        tag: item.plate,
                    },
                    C: {
                        item: `sophisticatedstorage:limited_${item.old}_2`,
                    },
                },
                pattern: ["SPS", "PCP", "SPS"],
                result: {
                    item: `sophisticatedstorage:limited_${item.type}_barrel_2`,
                }
            })

            allthemods.custom({
                type: "sophisticatedstorage:storage_tier_upgrade",
                key: {
                    S: {
                        tag: item.screw,
                    },
                    P: {
                        tag: item.plate,
                    },
                    C: {
                        item: `sophisticatedstorage:limited_${item.old}_3`,
                    },
                },
                pattern: ["SPS", "PCP", "SPS"],
                result: {
                    item: `sophisticatedstorage:limited_${item.type}_barrel_3`,
                }
            })

            allthemods.custom({
                type: "sophisticatedstorage:storage_tier_upgrade",
                key: {
                    S: {
                        tag: item.screw,
                    },
                    P: {
                        tag: item.plate,
                    },
                    C: {
                        item: `sophisticatedstorage:limited_${item.old}_4`,
                    },
                },
                pattern: ["SPS", "PCP", "SPS"],
                result: {
                    item: `sophisticatedstorage:limited_${item.type}_barrel_4`,
                }
            })
        }

    //Upgrades
        allthemods.shaped(
            'sophisticatedstorage:pickup_upgrade',
            [
                'aba',
                'cdc',
                'aba'
            ],
            {
                a: '#forge:small_gears/steel',
                b: '#forge:gears/steel',
                c: 'gtceu:lv_robot_arm',
                d: 'sophisticatedstorage:upgrade_base'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:advanced_pickup_upgrade',
            [
                'aba',
                'cdc',
                'aea'
            ],
            {
                a: '#forge:small_gears/steel',
                b: '#gtceu:circuits/lv',
                c: 'gtceu:lv_sensor',
                d: 'sophisticatedstorage:pickup_upgrade',
                e: 'gtceu:item_tag_filter'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:magnet_upgrade',
            [
                'aba',
                'cdc',
                'aea'
            ],
            {
                a: '#forge:double_plates/magnetic_steel',
                b: 'simplemagnets:basicmagnet',
                c: '#forge:rods/magnetic_steel',
                d: 'sophisticatedstorage:pickup_upgrade',
                e: 'minecraft:ender_pearl'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:advanced_magnet_upgrade',
            [
                'aba',
                'cdc',
                'aea'
            ],
            {
                a: '#forge:double_plates/magnetic_steel',
                b: 'gtceu:lv_item_magnet',
                c: 'gtceu:lv_sensor',
                d: 'sophisticatedstorage:magnet_upgrade',
                e: 'gtceu:item_tag_filter'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:hopper_upgrade',
            [
                'aba',
                'bcb',
                'ada'
            ],
            {
                a: '#forge:small_gears/iron',
                b: '#forge:double_plates/iron',
                c: 'sophisticatedstorage:upgrade_base',
                d: 'minecraft:hopper'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:advanced_hopper_upgrade',
            [
                'aba',
                'bcb',
                'ada'
            ],
            {
                a: '#forge:small_gears/steel',
                b: '#forge:gears/steel',
                c: 'sophisticatedstorage:hopper_upgrade',
                d: 'gtceu:item_tag_filter'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:void_upgrade',
            [
                ' a ',
                'bcb',
                ' d '
            ],
            {
                a: 'minecraft:ender_pearl',
                b: 'minecraft:obsidian',
                c: 'sophisticatedstorage:upgrade_base',
                d: 'trashcans:item_trash_can'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:advanced_void_upgrade',
            [
                'aba',
                'aca',
                'ada'
            ],
            {
                a: '#forge:plates/obsidian',
                b: 'minecraft:ender_pearl',
                c: 'sophisticatedstorage:void_upgrade',
                d: 'gtceu:item_tag_filter'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:filter_upgrade',
            [
                'aba',
                'cdc',
                'aba'
            ],
            {
                a: '#forge:double_plates/steel',
                b: '#forge:small_gears/steel',
                c: 'gtceu:item_filter',
                d: 'sophisticatedstorage:upgrade_base'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:advanced_filter_upgrade',
            [
                'aba',
                'cde',
                'aba'
            ],
            {
                a: '#forge:double_plates/steel',
                b: '#forge:gears/steel',
                c: 'gtceu:item_tag_filter',
                d: 'sophisticatedstorage:filter_upgrade',
                e: 'gtceu:item_smart_filter'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:compacting_upgrade',
            [
                'aba',
                'cdc',
                'aba'
            ],
            {
                a: '#forge:small_gears/steel',
                b: '#forge:double_plates/steel',
                c: 'gtceu:lv_electric_piston',
                d: 'sophisticatedstorage:upgrade_base'
            }
        )

        allthemods.shaped(
            'sophisticatedstorage:advanced_compacting_upgrade',
            [
                'aba',
                'cdc',
                'aea'
            ],
            {
                a: '#forge:double_plates/steel',
                b: 'gtceu:lv_electric_piston',
                c: '#forge:double_plates/steel',
                d: 'sophisticatedstorage:compacting_upgrade',
                e: 'gtceu:item_tag_filter'
            }
        )

        //Stack
            allthemods.shaped(
                'sophisticatedstorage:stack_upgrade_tier_1',
                [
                    'abc',
                    'bdb',
                    'cbe'
                ],
                {
                    a: toolWrench,
                    b: '#forge:double_plates/wrought_iron',
                    c: '#forge:gears/wrought_iron',
                    d: 'sophisticatedstorage:upgrade_base',
                    e: toolHammer
                }
            )

            addAssembler('stack_tier_1', ['sophisticatedstorage:upgrade_base', '4x #forge:double_plates/wrought_iron', '2x #forge:gears/wrought_iron'], 'sophisticatedstorage:stack_upgrade_tier_1', 30, 200)
            addAssembler('stack_tier_1_plus', ['sophisticatedstorage:stack_upgrade_tier_1', '4x #forge:double_plates/steel', '2x #forge:gears/steel'], 'sophisticatedstorage:stack_upgrade_tier_1_plus', 30, 200)
            addAssembler('stack_tier_2', ['sophisticatedstorage:stack_upgrade_tier_1_plus', '4x #forge:double_plates/aluminium', '2x #forge:gears/aluminium', '2x gtceu:lv_field_generator'], 'sophisticatedstorage:stack_upgrade_tier_2', 120, 200)
            addAssembler('stack_tier_3', ['sophisticatedstorage:stack_upgrade_tier_2', '4x #forge:double_plates/stainless_steel', '2x #forge:gears/stainless_steel', '2x gtceu:mv_field_generator'], 'sophisticatedstorage:stack_upgrade_tier_3', 480, 200)
            addAssembler('stack_tier_4', ['sophisticatedstorage:stack_upgrade_tier_3', '4x #forge:double_plates/titanium', '2x #forge:gears/titanium', '2x gtceu:hv_field_generator'], 'sophisticatedstorage:stack_upgrade_tier_4', 1920, 200)
            addAssembler('stack_tier_5', ['sophisticatedstorage:stack_upgrade_tier_4', '4x #forge:double_plates/tungsten_steel', '2x #forge:gears/tungsten_steel', '2x gtceu:ev_field_generator'], 'sophisticatedstorage:stack_upgrade_tier_5', 7680, 200)

        //Tier Upgrade
            allthemods.shaped(
                'sophisticatedstorage:basic_tier_upgrade',
                [
                'aba',
                'cdc',
                'aea'
                ],
                {
                    a: 'gtceu:double_red_alloy_plate',
                    b: toolWrench,
                    c: 'gtceu:double_steel_plate',
                    d: 'sophisticatedstorage:upgrade_base',
                    e: toolHammer
                }
            )

            addAssembler('basic_tier_upgrade', ['sophisticatedstorage:upgrade_base', '4x gtceu:double_red_alloy_plate', '2x gtceu:double_steel_plate'], 'sophisticatedstorage:basic_tier_upgrade', 30, 200)

            allthemods.shaped(
                'sophisticatedstorage:copper_to_iron_tier_upgrade',
                [
                    'aba',
                    'bcb',
                    'aba'
                ],
                {
                    a: '#forge:screws/iron',
                    b: '#forge:double_plates/iron',
                    c: 'sophisticatedstorage:upgrade_base'
                }
            )

            allthemods.shaped(
                'sophisticatedstorage:iron_to_gold_tier_upgrade',
                [
                    'aba',
                    'bcb',
                    'aba'
                ],
                {
                    a: '#forge:screws/gold',
                    b: '#forge:double_plates/gold',
                    c: 'sophisticatedstorage:upgrade_base'
                }
            )

            allthemods.shaped(
                'sophisticatedstorage:gold_to_diamond_tier_upgrade',
                [
                    'aba',
                    'bcb',
                    'aba'
                ],
                {
                    a: '#forge:screws/diamond',
                    b: '#forge:plates/diamond',
                    c: 'sophisticatedstorage:upgrade_base'
                }
            )

            allthemods.shaped(
                'sophisticatedstorage:diamond_to_netherite_tier_upgrade',
                [
                    'aba',
                    'bcb',
                    'aba'
                ],
                {
                    a: '#forge:screws/dark_steel',
                    b: '#forge:dense_plates/netherite',
                    c: 'sophisticatedstorage:upgrade_base'
                }
            )

            let sophTierUP = [
                {
                    in: 'basic_',
                    out: 'basic_to_copper_',
                    plate: '#forge:double_plates/copper',
                    screw: '#forge:screws/copper'
                },
                {
                    in: 'basic_to_copper_',
                    out: 'basic_to_iron_',
                    plate: '#forge:double_plates/iron',
                    screw: '#forge:screws/iron'
                },
                {
                    in: 'basic_to_iron_',
                    out: 'basic_to_gold_',
                    plate: '#forge:double_plates/gold',
                    screw: '#forge:screws/gold'
                },
                {
                    in: 'basic_to_gold_',
                    out: 'basic_to_diamond_',
                    plate: '#forge:plates/diamond',
                    screw: '#forge:screws/diamond'
                },
                {
                    in: 'basic_to_diamond_',
                    out: 'basic_to_netherite_',
                    plate: '#forge:dense_plates/netherite',
                    screw: '#forge:screws/dark_steel'
                },
                {
                    in: 'copper_to_iron_',
                    out: 'copper_to_gold_',
                    plate: '#forge:double_plates/gold',
                    screw: '#forge:screws/gold'
                },
                {
                    in: 'copper_to_gold_',
                    out: 'copper_to_diamond_',
                    plate: '#forge:plates/diamond',
                    screw: '#forge:screws/diamond'
                },
                {
                    in: 'copper_to_diamond_',
                    out: 'copper_to_netherite_',
                    plate: '#forge:dense_plates/netherite',
                    screw: '#forge:screws/dark_steel'
                },
                {
                    in: 'iron_to_gold_',
                    out: 'iron_to_diamond_',
                    plate: '#forge:plates/diamond',
                    screw: '#forge:screws/diamond'
                },
                {
                    in: 'iron_to_diamond_',
                    out: 'iron_to_netherite_',
                    plate: '#forge:dense_plates/netherite',
                    screw: '#forge:screws/dark_steel'
                },
                {
                    in: 'gold_to_diamond_',
                    out: 'gold_to_netherite_',
                    plate: '#forge:dense_plates/netherite',
                    screw: '#forge:screws/dark_steel'
                }
            ]

            for (let tier of sophTierUP) {
                allthemods.shaped(
                    `sophisticatedstorage:${tier.out}tier_upgrade`,
                    [
                        'aba',
                        'bcb',
                        'aba'
                    ],
                    {
                        a: tier.screw,
                        b: tier.plate,
                        c: `sophisticatedstorage:${tier.in}tier_upgrade`
                    }
                )
            }

    //Yeet
        const sophstorageyeet = [
            'sophisticatedstorage:pickup_upgrade', 
            'sophisticatedstorage:advanced_pickup_upgrade', 
            'sophisticatedstorage:filter_upgrade', 
            'sophisticatedstorage:advanced_filter_upgrade', 
            'sophisticatedstorage:magnet_upgrade', 
            'sophisticatedstorage:advanced_magnet_upgrade', 
            'sophisticatedstorage:feeding_upgrade', 
            'sophisticatedstorage:advanced_feeding_upgrade', 
            'sophisticatedstorage:compacting_upgrade', 
            'sophisticatedstorage:advanced_compacting_upgrade', 
            'sophisticatedstorage:void_upgrade', 
            'sophisticatedstorage:advanced_void_upgrade', 
            'sophisticatedstorage:smelting_upgrade', 
            'sophisticatedstorage:auto_smelting_upgrade', 
            'sophisticatedstorage:smoking_upgrade', 
            'sophisticatedstorage:auto_smoking_upgrade', 
            'sophisticatedstorage:blasting_upgrade', 
            'sophisticatedstorage:auto_blasting_upgrade', 
            'sophisticatedstorage:crafting_upgrade', 
            'sophisticatedstorage:stonecutter_upgrade', 
            'sophisticatedstorage:stack_upgrade_tier_1', 
            'sophisticatedstorage:stack_upgrade_tier_1_plus', 
            'sophisticatedstorage:stack_upgrade_tier_2', 
            'sophisticatedstorage:stack_upgrade_tier_3', 
            'sophisticatedstorage:stack_upgrade_tier_4', 
            'sophisticatedstorage:stack_upgrade_tier_5', 
            'sophisticatedstorage:stack_upgrade_tier_1_to_tier_1_plus_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_1_to_tier_2_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_1_to_tier_3_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_1_to_tier_4_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_1_to_tier_5_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_2_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_3_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_4_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_5_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_2_to_tier_3_conversion',
            'sophisticatedstorage:stack_upgrade_tier_2_to_tier_4_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_2_to_tier_5_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_3_to_tier_4_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_3_to_tier_5_conversion', 
            'sophisticatedstorage:stack_upgrade_tier_4_to_tier_5_conversion', 
            'sophisticatedstorage:stack_downgrade_tier_1', 
            'sophisticatedstorage:stack_downgrade_tier_2', 
            'sophisticatedstorage:stack_downgrade_tier_3', 
            'sophisticatedstorage:jukebox_upgrade', 
            'sophisticatedstorage:advanced_jukebox_upgrade', 
            'sophisticatedstorage:pump_upgrade', 
            'sophisticatedstorage:advanced_pump_upgrade', 
            'sophisticatedstorage:xp_pump_upgrade', 
            'sophisticatedstorage:compression_upgrade', 
            'sophisticatedstorage:hopper_upgrade', 
            'sophisticatedstorage:advanced_hopper_upgrade', 
            'sophisticatedstorage:alchemy_upgrade', 
            'sophisticatedstorage:advanced_alchemy_upgrade', 
            'sophisticatedstorage:basic_to_copper_tier_upgrade', 
            'sophisticatedstorage:basic_to_iron_tier_upgrade', 
            'sophisticatedstorage:basic_to_gold_tier_upgrade', 
            'sophisticatedstorage:basic_to_diamond_tier_upgrade', 
            'sophisticatedstorage:basic_to_netherite_tier_upgrade', 
            'sophisticatedstorage:copper_to_iron_tier_upgrade', 
            'sophisticatedstorage:copper_to_gold_tier_upgrade', 
            'sophisticatedstorage:copper_to_diamond_tier_upgrade', 
            'sophisticatedstorage:copper_to_netherite_tier_upgrade', 
            'sophisticatedstorage:iron_to_gold_tier_upgrade', 
            'sophisticatedstorage:iron_to_diamond_tier_upgrade', 
            'sophisticatedstorage:iron_to_netherite_tier_upgrade', 
            'sophisticatedstorage:gold_to_diamond_tier_upgrade', 
            'sophisticatedstorage:gold_to_netherite_tier_upgrade', 
            'sophisticatedstorage:diamond_to_netherite_tier_upgrade',
            'sophisticatedstorage:upgrade_base'
        ]

        for (let yeet of sophstorageyeet) {
            allthemods.remove(
                [
                    { type: 'minecraft:crafting_shaped', output: yeet },
                    { id: 'sophisticatedstorage:advanced_pickup_upgrade' }, 
                    { id: 'sophisticatedstorage:advanced_filter_upgrade' }, 
                    { id: 'sophisticatedstorage:advanced_hopper_upgrade' }, 
                    { id: 'sophisticatedstorage:magnet_upgrade' },
                    { id: 'sophisticatedstorage:advanced_magnet_upgrade' }, 
                    { id: 'sophisticatedstorage:advanced_magnet_upgrade_from_basic' }, 
                    { id: 'sophisticatedstorage:advanced_feeding_upgrade' }, 
                    { id: 'sophisticatedstorage:advanced_compacting_upgrade' }, 
                    { id: 'sophisticatedstorage:advanced_void_upgrade' }, 
                    { id: 'sophisticatedstorage:auto_smelting_upgrade' }, 
                    { id: 'sophisticatedstorage:auto_smoking_upgrade' }, 
                    { id: 'sophisticatedstorage:advanced_jukebox_upgrade' },
                    { type: 'minecraft:crafting_shapeless', input: 'minecraft:netherite_ingot', mod: 'sophisticatedstorage'}
                ]
            )
        }
        
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
