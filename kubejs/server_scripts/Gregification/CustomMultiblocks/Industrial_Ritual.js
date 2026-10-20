ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    
    const chalks = {
        white: 'gtceu:white_chalk',
        orange: 'gtceu:orange_chalk',
        magenta: 'gtceu:magenta_chalk',
        light_blue: 'gtceu:light_blue_chalk',
        yellow: 'gtceu:yellow_chalk',
        lime: 'gtceu:lime_chalk',
        pink: 'gtceu:pink_chalk',
        gray: 'gtceu:gray_chalk',
        light_gray: 'gtceu:light_gray_chalk',
        cyan: 'gtceu:cyan_chalk',
        purple: 'gtceu:purple_chalk',
        blue: 'gtceu:blue_chalk',
        brown: 'gtceu:brown_chalk',
        green: 'gtceu:green_chalk',
        red: 'gtceu:red_chalk',
        black: 'gtceu:black_chalk'
    };

    const regalia = {
        candle: '#minecraft:candles',
        crystal: 'occultism:spirit_attuned_crystal',
        skull: 'minecraft:skeleton_skull',
        wither: 'minecraft:wither_skeleton_skull',
        incense: 'gtceu:camphor_incense'
    };

    const rituals = [
        {
            tier: 7,
            name: 'osorins_unbound_calling',
            fluids: [
                { fluid: chalks.pink, amount: 400 },
                { fluid: chalks.light_blue, amount: 400 },
                { fluid: chalks.green, amount: 800 }
            ],
            items: [
                { item: regalia.incense, amount: 8 },
            ]
        },

        {
            tier: 7,
            name: 'ronazas_contract',
            fluids: [
                { fluid: chalks.pink, amount: 400 },
                { fluid: chalks.light_blue, amount: 400 },
                { fluid: chalks.green, amount: 800 },
                { fluid: chalks.magenta, amount: 600 },
                { fluid: chalks.cyan, amount: 800 },
                { fluid: chalks.brown, amount: 900 }
            ],
            items: [
                { item: 'minecraft:beacon', amount: 1 },
                { item: 'minecraft:enchanting_table', amount: 1 },
                { item: 'minecraft:amethyst_cluster', amount: 1 },
                { item: 'minecraft:iron_bars', amount: 1 },
                { item: 'minecraft:lightning_rod', amount: 1 },
                { item: 'minecraft:end_rod', amount: 1 },                
            ]
        },

        {
            tier: 6,
            name: 'xeovrenth_abjure',
            fluids: [
                { fluid: chalks.yellow, amount: 1000 },
                { fluid: chalks.white, amount: 200 },
                { fluid: chalks.lime, amount: 300 },
                { fluid: chalks.blue, amount: 500 },
                { fluid: chalks.red, amount: 200 },
                { fluid: chalks.black, amount: 200 }
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 8 },
                { item: regalia.skull, amount: 8 },
                { item: regalia.wither, amount: 4 },
                { item: regalia.incense, amount: 8 }
            ]
        },

        {
            tier: 4,
            name: 'posucs_convocation',
            fluids: [
                { fluid: chalks.yellow, amount: 600 },
                { fluid: chalks.white, amount: 100 },
                { fluid: chalks.lime, amount: 300 },
                { fluid: chalks.red, amount: 200 },
                { fluid: chalks.orange, amount: 200 },
                { fluid: chalks.gray, amount: 200 }

            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 4 },
                { item: regalia.skull, amount: 8 }
            ]
        },

        {
            tier: 3,
            name: 'odus_open_convocation',
            fluids: [
                { fluid: chalks.yellow, amount: 600 },
                { fluid: chalks.white, amount: 100 },
                { fluid: chalks.lime, amount: 300 },
                { fluid: chalks.orange, amount: 200 },
                { fluid: chalks.gray, amount: 200 }

            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 4 },
                { item: regalia.skull, amount: 8 }
            ]
        },

        {
            tier: 2,
            name: 'ihagan_enthralment',
            fluids: [
                { fluid: chalks.yellow, amount: 300 },
                { fluid: chalks.white, amount: 100 },
                { fluid: chalks.lime, amount: 300 },
                { fluid: chalks.light_gray, amount: 200 }

            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.skull, amount: 8 }
            ]
        },

        {
            tier: 1,
            name: 'hederyns_lure',
            fluids: [
                { fluid: chalks.yellow, amount: 100 },
                { fluid: chalks.white, amount: 300 }

            ],
            items: [
                { item: regalia.candle, amount: 4 },
            ]
        },

        {
            tier: 6,
            name: 'uphyxes_inverted_tower',
            fluids: [
                { fluid: chalks.white, amount: 200 },
                { fluid: chalks.lime, amount: 500 },
                { fluid: chalks.blue, amount: 1100 },
                { fluid: chalks.red, amount: 300 },
                { fluid: chalks.orange, amount: 400 },
                { fluid: chalks.purple, amount: 2200 },
                { fluid: chalks.black, amount: 200 }
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 8 },
                { item: regalia.skull, amount: 8 },
                { item: regalia.wither, amount: 4 },
                { item: regalia.incense, amount: 8 }
            ]
        },

        {
            tier: 4,
            name: 'seviras_permanent_confinment',
            fluids: [
                { fluid: chalks.white, amount: 200 },
                { fluid: chalks.lime, amount: 500 },
                { fluid: chalks.red, amount: 300 },
                { fluid: chalks.orange, amount: 400 },
                { fluid: chalks.purple, amount: 1500 },
                { fluid: chalks.gray, amount: 200 }
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 8 },
                { item: regalia.skull, amount: 8 }
            ]
        },

        {
            tier: 2,
            name: 'strigeors_higher_binding',
            fluids: [
                { fluid: chalks.white, amount: 200 },
                { fluid: chalks.lime, amount: 500 },
                { fluid: chalks.purple, amount: 800 },
                { fluid: chalks.light_gray, amount: 200 }
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.skull, amount: 8 }
            ]
        },

        {
            tier: 1,
            name: 'eziveus_spectral_complustion',
            fluids: [
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.purple, amount: 300 }
            ],
            items: [
                { item: regalia.candle, amount: 4 }
            ]
        },

        {
            tier: 1,
            name: 'aviars_circle',
            fluids: [
                { fluid: chalks.white, amount: 600 }
            ],
            items: [
                { item: regalia.candle, amount: 4 }
            ]
        },

        {
            tier: 5,
            name: 'fatmas_incentivized_attraction',
            fluids: [
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.lime, amount: 900 },
                { fluid: chalks.blue, amount: 1500 },
                { fluid: chalks.red, amount: 400 },
                { fluid: chalks.orange, amount: 1000 },
                { fluid: chalks.black, amount: 200 }
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 8 },
                { item: regalia.skull, amount: 8 },
                { item: regalia.wither, amount: 4 },
                { item: regalia.incense, amount: 8 }
            ]
        },

        {
            tier: 4,
            name: 'tibiras_attraction',
            fluids: [
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.lime, amount: 900 },
                { fluid: chalks.red, amount: 400 },
                { fluid: chalks.orange, amount: 1000 },
                { fluid: chalks.black, amount: 200 }
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 4 },
                { item: regalia.skull, amount: 8 },
                { item: regalia.wither, amount: 4 },
            ]
        },

        {
            tier: 2,
            name: 'kandras_open_conjure',
            fluids: [
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.lime, amount: 900 },
                { fluid: chalks.orange, amount: 1000 },
                { fluid: chalks.gray, amount: 200 }
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.skull, amount: 8 }
            ]
        },

        {
            tier: 1,
            name: 'ophyx_calling',
            fluids: [
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.lime, amount: 900 },
                { fluid: chalks.light_gray, amount: 200 }
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.skull, amount: 4 }
            ]
        },
    ];

    const PENTACLE_TO_RITUAL_NAME = {
        'craft_foliot': 'eziveus_spectral_complustion',
        'craft_djinni': 'strigeors_higher_binding',
        'craft_afrit': 'seviras_permanent_confinment',
        'craft_marid': 'uphyxes_inverted_tower',
        'possess_foliot': 'hederyns_lure',
        'possess_djinni': 'ihagan_enthralment',
        'possess_afrit': 'posucs_convocation',
        'summon_foliot': 'aviars_circle',
        'summon_djinni': 'ophyx_calling',
        'summon_afrit': 'posucs_convocation',
        'summon_marid': 'fatmas_incentivized_attraction',
        'summon_wild_afrit': 'kandras_open_conjure',
        'summon_wild_greater_spirit': 'osorins_unbound_calling',
    };

    allthemods.shaped('gtceu:industrial_ritual_machine', ['GCS', 'PMP', 'SCG'], {
        S: 'gtceu:deorum_plate',
        G: '#forge:gears/terrasteel',
        C: '#gtceu:circuits/hv',
        P: 'gtceu:hv_electric_pump',
        M: 'gtceu:hv_machine_hull'
    }).id('gregification:gtceu/shaped/industrial_ritual_machine');

    /*
    const addRitual = (customInputs, output, ritualName, duration, customId) => {
        const ritual = rituals.find(r => r.name === ritualName);

        if (!ritual) {
            console.error(`Error: Ritual '${ritualName}' not found in rituals array!`);
            return;
        }

        const baseEu = 128;
        const baseDuration = (duration) ? duration * 20 : 100;

        const eu = baseEu * Math.pow(4, ritual.tier - 1);
        const finalDuration = baseDuration * ritual.tier;


        const cleanID = customId
            ? customId
            : ritual.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '/' + output.replace(/[^a-z0-9]/gi, '_').toLowerCase();

        let recipe = allthemods.recipes.gtceu.industrial_ritual_machine(`gregification:ritual/${cleanID}`)
            .itemOutputs(output)
            .duration(finalDuration)
            .EUt(eu);

        let combinedItems = [].concat(customInputs);

        if (ritual.items && ritual.items.length > 0) {
            let ritualItemsList = ritual.items.map(i => `${i.amount}x ${i.item}`);
            combinedItems = combinedItems.concat(ritualItemsList);
        }

        if (combinedItems.length > 0) {
            recipe.itemInputs(combinedItems);
        }

        if (ritual.fluids && ritual.fluids.length > 0) {
            let ritualFluids = ritual.fluids.map(f => Fluid.of(f.fluid, (f.amount / 100 * 12)));
            recipe.inputFluids(ritualFluids);
        }
        
    };*/
    
    const addRitual = (customInputs, output, ritualName, duration, customId) => {
        const ritual = rituals.find(r => r.name === ritualName);

        if (!ritual) {
            console.error(`Error: Ritual '${ritualName}' not found in rituals array!`);
            return;
        }

        
        const baseDuration = (duration) ? duration * 20 : 100;

        
        const eu = GTValues.VA[ritual.tier + 1];
        const finalDuration = baseDuration * ritual.tier;

        const baseID = customId
            ? customId
            : ritual.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '/' + output.replace(/[^a-z0-9]/gi, '_').toLowerCase();

        // --- Program 1: normal recipe, uses the ritual's own liquid chalk costs ---
        {
            let recipe = allthemods.recipes.gtceu.industrial_ritual_machine(`gregification:ritual/${baseID}`)
                .circuit(1)
                .itemOutputs(output)
                .itemInputs(customInputs)
                .duration(finalDuration)
                .EUt(eu);

            if (ritual.items && ritual.items.length > 0) {
                ritual.items.forEach(i => {
                    recipe.notConsumable(Item.of(i.item, i.amount));
                });
            }

            if (ritual.fluids && ritual.fluids.length > 0) {
                ritual.fluids.forEach(f => {
                    let fluidAmount = (f.amount / 100) * 4;
                    recipe.inputFluids(Fluid.of(f.fluid, fluidAmount));
                });
            }
        }

        // --- Program 2: no liquid chalk cost at all - Rainbow Chalk substitutes for it,
        //     supplied as a non-consumed (reusable) first input instead ---
        {
            let recipe2 = allthemods.recipes.gtceu.industrial_ritual_machine(`gregification:ritual/${baseID}_rainbow`)
                .circuit(2)
                .itemOutputs(output)
                .itemInputs(customInputs)
                .duration(finalDuration)
                .EUt(eu);
            if (ritual.items && ritual.items.length > 0) {
                ritual.items.forEach(i => {
                    recipe2.notConsumable(Item.of(i.item, i.amount));
                });
            }
            /*
            let combinedItems2 = [].concat(customInputs);

            if (ritual.items && ritual.items.length > 0) {
                let ritualItemsList = ritual.items.map(i => `${i.amount}x ${i.item}`);
                combinedItems2 = combinedItems2.concat(ritualItemsList);
            }

            if (combinedItems2.length > 0) {
                recipe2.itemInputs(combinedItems2);
            }*/

            recipe2.notConsumable('occultism:chalk_rainbow');
        }
    };

    let tartaric = Item.of('bloodmagic:soulgemgreater', '{souls:4096.0d}').strongNBT();
    //addRitual(['mekanism:digital_miner', '4x #gtceu:circuits/iv'], 'occultism:miner_marid_master','uphyxes_inverted_tower');	
    addRitual(['#occultism:miner/marid',     'occultism:iesnium_pickaxe', 'occultism:mining_dim_core', 'allthemodium:piglich_heart', 'allthemodium:unobtainium_pickaxe' ], 'occultism:miner_ancient_eldritch', 'ronazas_contract');	
    //addRitual(['#occultism:miner/afrit',     'occultism:iesnium_pickaxe', 'minecraft:dragon_breath', 'occultism:marid_essence', 'minecraft:totem_of_undying', 'minecraft:netherite_pickaxe', 'minecraft:nether_star', 'occultism:spirit_attuned_crystal'], 'occultism:miner_marid_master', 'uphyxes_inverted_tower');	
    //addRitual(['#occultism:miner/djinni',    'occultism:iesnium_pickaxe', '#forge:gems/echo_shard', 'minecraft:crying_obsidian', 'occultism:afrit_essence', 'occultism:spirit_attuned_crystal'], 'occultism:miner_afrit_deeps', 'seviras_permanent_confinment');	
    //addRitual(['#occultism:miner/foliot',    'occultism:iesnium_pickaxe', 'occultism:spirit_attuned_crystal', '#forge:storage_blocks/lapis', '#forge:raw_materials/gold'], 'occultism:miner_djinni_ores', 'strigeors_higher_binding');	
    //addRitual(['occultism:magic_lamp_empty', 'occultism:iesnium_pickaxe', '#forge:gravel', '#forge:raw_materials/iron'], 'occultism:miner_foliot_unspecialized', 'eziveus_spectral_complustion');	

    //addRitual(['4x minecraft:soul_sand', '#forge:gems/diamond', '#forge:ingots/gold', '#forge:ingots/silver', '#forge:ingots/copper'], 'occultism:soul_gem', 'strigeors_higher_binding');
    //addRitual(['#forge:frames/iesnium', '16x #gtceu:circuits/hv', '12x occultism:spirit_attuned_crystal', tartaric, '4x #forge:gears/terrasteel'], 'occultism:dimensional_mineshaft', 'strigeors_higher_binding');

    //addRitual(['minecraft:netherrack','minecraft:gunpowder','minecraft:flint_and_steel', '#forge:ingots/iesnium'], 'occultism:afrit_essence', 'kandras_open_conjure');

    //addRitual([], '', '');

    addRitual(['#forge:dusts/netherite', 'minecraft:wither_skeleton_skull', '#forge:dusts/blackstone', 'minecraft:wither_rose'], 'occultism:witherite_dust', 'seviras_permanent_confinment');
    addRitual(['4x minecraft:rabbit_foot', '4x minecraft:scute', '2x #forge:wool', '2x minecraft:pointed_dripstone'], 'occultism:cruelty_essence', 'xeovrenth_abjure');

    addRitual(['minecraft:honeycomb', 'minecraft:honeycomb_block', 'minecraft:honey_bottle', 'minecraft:honey_block'], 'occultism:cursed_honey', 'ihagan_enthralment');
    addRitual(['#forge:dusts/emerald', '2x minecraft:experience_bottle'], 'occultism:research_fragment_dust', 'eziveus_spectral_complustion');
    addRitual(['minecraft:conduit', 'minecraft:ghast_tear', 'minecraft:prismarine_shard', 'minecraft:prismarine_crystals'], 'occultism:marid_essence', 'tibiras_attraction');
    addRitual(['4x minecraft:end_crystal', '3x minecraft:dragon_breath', '#forge:dusts/amethyst', '#forge:dusts/endstone'], 'occultism:dragonyst_dust', 'uphyxes_inverted_tower');
    addRitual(['minecraft:gilded_blackstone', 'minecraft:warped_fungus', 'minecraft:crimson_fungus', 'minecraft:quartz'], 'occultism:demonic_meat', 'odus_open_convocation');
    addRitual(['3x #minecraft:leaves', '3x #forge:saplings', '3x #forge:seeds'], 'occultism:nature_paste', 'eziveus_spectral_complustion');

    const chalkEU = MV;
    const chalkDuration = 100;
    const base = 'occultism:chalk_white_impure';
    const impureChalks = [
        { color: 'white', ingredients: ['3x occultism:otherworld_ashes', '3x occultism:burnt_otherstone'] },
        { color: 'orange', ingredients: [base, 'occultism:cursed_honey', 'minecraft:glow_berries', 'minecraft:blaze_powder'] },
        { color: 'magenta', ingredients: [base, 'occultism:dragonyst_dust', '#forge:dusts/amethyst', 'minecraft:chorus_fruit'] },
        { color: 'light_blue', ingredients: [base, '#forge:dusts/ice', '#forge:dusts/blue_ice'] },
        { color: 'gold', ingredients: [base, '#forge:dusts/glowstone', '2x #forge:dusts/gold'] },
        { color: 'lime', ingredients: [base, 'occultism:research_fragment_dust', '#forge:dusts/emerald', '#forge:slimeballs'] },
        { color: 'pink', ingredients: [base, '3x occultism:demonic_meat'] },
        { color: 'gray', ingredients: [base, 'occultism:gray_paste'] },
        { color: 'light_gray', ingredients: [base, '#forge:dusts/silver', '#forge:dusts/iron', '#forge:dusts/calcite'] },
        { color: 'cyan', ingredients: [base, '#forge:dusts/iesnium', '#forge:dusts/echo_shard', 'minecraft:glow_ink_sac'] },
        { color: 'purple', ingredients: [base, '#forge:dusts/end_stone', '2x #forge:dusts/obsidian'] },
        { color: 'blue', ingredients: [base, 'occultism:marid_essence', '#forge:dusts/lapis', 'minecraft:tube_coral'] },
        { color: 'brown', ingredients: [base, 'occultism:cruelty_essence', 'minecraft:cocoa_beans', 'minecraft:brown_mushroom'] },
        { color: 'green', ingredients: [base, 'occultism:nature_paste'] },
        { color: 'red', ingredients: [base, 'occultism:afrit_essence', 'minecraft:torchflower', '#forge:dusts/redstone'] },
        { color: 'black', ingredients: [base, '3x occultism:witherite_dust'] }
    ];

    impureChalks.forEach(chalk => {
        allthemods.recipes.gtceu.assembler(`gregification:chalk_${chalk.color}_impure`)
            .EUt(chalkEU)
            .duration(chalkDuration)
            .itemInputs(chalk.ingredients)
            .itemOutputs(`occultism:chalk_${chalk.color}_impure`)
    });


    //primogel goo
    addRitual(['gtceu:hv_machine_hull', 'allthecompressed:dirt_3x', 'bloodmagic:blankslate', '#forge:frames/manasteel', 'pneumaticcraft:etching_acid_bucket'], 'justdirethings:gooblock_tier1', 'ophyx_calling');
    addRitual(['gtceu:ev_machine_hull', 'justdirethings:gooblock_tier1', 'bloodmagic:reinforcedslate', '#forge:frames/elementium', '4x minecraft:nether_wart', '4x minecraft:blaze_powder'], 'justdirethings:gooblock_tier2', 'kandras_open_conjure');
    addRitual(['gtceu:iv_machine_hull', 'justdirethings:gooblock_tier2', 'bloodmagic:infusedslate', '#forge:frames/terrasteel', '4x minecraft:dragon_breath', 'gtceu:quantum_eye'], 'justdirethings:gooblock_tier3', 'tibiras_attraction');
    addRitual(['gtceu:luv_machine_hull', 'justdirethings:gooblock_tier3', 'bloodmagic:demonslate', '#forge:frames/alfsteel', '4x minecraft:echo_shard', '4x minecraft:sculk', '2x minecraft:sculk_shrieker'], 'justdirethings:gooblock_tier4', 'fatmas_incentivized_attraction');
    addRitual(['16x bloodmagic:etherealslate', '4x #forge:gears/alfsteel', '8x #forge:plates/selenium', '#forge:frames/draconium_awakened', '#forge:rods/long/iesnium', '#forge:gems/soul'], 'bmaddon:blood_generator', 'ronazas_contract')
    addRitual(['forbidden_arcanus:aureal_bottle', '4x #forge:dusts/hellforged', '#bloodmagic:crystals/demon','8x forbidden_arcanus:spawner_scrap', 'occultism:spirit_attuned_gem'],'gtceu:exquisite_aureal_gem', 'kandras_open_conjure')
    //ritual casing
    addRitual(['#forge:frames/drenched_iron', 'botania:rune_fire', 'botania:rune_water', 'botania:rune_earth', 'botania:rune_air', '4x #forge:plates/deorum'], 'gtceu:ritual_casing', 'strigeors_higher_binding')
    


    let i = 0;

    allthemods.forEachRecipe({ type: 'occultism:ritual' }, rawRecipe => {
        try {
            let recipe = JSON.parse(rawRecipe.json);
 
            let result = recipe.result || {};
            let outputItem = result.item || '';
 
            // no real item output - nothing to craft, skip (covers all summon-family rituals)
            if (!outputItem || outputItem.indexOf('jei_dummy') !== -1) {
                return;
            }
 
            let pentacle = (recipe.pentacle_id || '').replace('occultism:', '');
            let ritualName = PENTACLE_TO_RITUAL_NAME[pentacle];
 
            if (!ritualName) {
                console.error(`[ritual_auto_import] No rituals[] entry mapped for pentacle '${pentacle}' (output: ${outputItem})`);
                return;
            }
 
            let rawIngredients = (recipe.ingredients || []).map(function(ing) {
                if (ing.item) return ing.item;
                if (ing.tag) return '#' + ing.tag;
                return null;
            }).filter(function(i) { return i !== null; });
 
            // collapse duplicate identical ingredient entries into "Nx item" shorthand
            // instead of filling multiple separate input slots with the same item
            let countMap = {};
            rawIngredients.forEach(function(ing) {
                countMap[ing] = (countMap[ing] || 0) + 1;
            });
            let customInputs = Object.keys(countMap).map(function(ing) {
                let count = countMap[ing];
                return count > 1 ? (count + 'x ' + ing) : ing;
            });
 
            let count = result.count || 1;
            let outputStr = count > 1 ? `${count}x ${outputItem}` : outputItem;
 
            let cleanOutput = outputStr.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            let customId = 'ritual_' + i + '_' + cleanOutput;
            i++;
 
            addRitual(customInputs, outputStr, ritualName, recipe.duration, customId);
 
        } catch (err) {
            console.error(`[ritual_auto_import] FAILED: ${err}`);
        }
    });

    //console.error (`[ritual_auto_import] Finished processing ${i} occultism:ritual recipes.`);
    

    addRitual(
        ['#forge:dusts/iron', '#forge:dusts/gold', '#forge:dusts/copper', '#forge:dusts/silver'],
        Item.of('occultism:spawn_egg/djinni', '{EntityTag:{spiritJob:{factoryId:"occultism:crush_tier2",conversionTimer:0},spiritMaxAge:-1,spiritAge:0}}').strongNBT(),
        'ophyx_calling',
        90,
        'ritual_summon_crush_tier2'
    );

    addRitual(
        ['#forge:gems/diamond', '#forge:dusts/iesnium', '#forge:dusts/iesnium', '#forge:gems/emerald'],
        Item.of('occultism:spawn_egg/afrit', '{EntityTag:{spiritJob:{factoryId:"occultism:crush_tier3",conversionTimer:0},spiritMaxAge:-1,spiritAge:0}}').strongNBT(),
        'posucs_convocation',
        120,
        'ritual_summon_crush_tier3'
    );

    addRitual(
        ['#forge:storage_blocks/diamond', 'minecraft:ghast_tear', '#forge:storage_blocks/iesnium', '#forge:storage_blocks/emerald'],
        Item.of('occultism:spawn_egg/marid', '{EntityTag:{spiritJob:{factoryId:"occultism:crush_tier4",conversionTimer:0},spiritMaxAge:-1,spiritAge:0}}').strongNBT(),
        'fatmas_incentivized_attraction',
        150,
        'ritual_summon_crush_tier4'
    );

    /*addRitual(
        ['occultism:otherworld_sapling', 'minecraft:oak_sapling', 'minecraft:birch_sapling', 'minecraft:spruce_sapling', '#forge:tools/metal/axes'],
        Item.of('occultism:spawn_egg/foliot', '{EntityTag:{spiritJob:{factoryId:"occultism:lumberjack",conversionTimer:0},spiritMaxAge:-1,spiritAge:0}}').strongNBT(),
        'aviars_circle',
        60,
        'ritual_summon_lumberjack'
    );*/

    addRitual(
        ['minecraft:torch', '#minecraft:saplings', 'minecraft:wheat', '#forge:dyes/yellow'],
        Item.of('occultism:spawn_egg/djinni', '{EntityTag:{spiritJob:{factoryId:"occultism:day_time",conversionTimer:0},spiritMaxAge:5,spiritAge:0}}').strongNBT(),
        'ophyx_calling',
        60,
        'ritual_summon_day_time'
    );

    addRitual(
        ['#minecraft:beds', 'minecraft:rotten_flesh', '#forge:bones', '#forge:dyes/black'],
        Item.of('occultism:spawn_egg/djinni', '{EntityTag:{spiritJob:{factoryId:"occultism:night_time",conversionTimer:0},spiritMaxAge:5,spiritAge:0}}').strongNBT(),
        'ophyx_calling',
        60,
        'ritual_summon_night_time'
    );

    addRitual(
        ['4x minecraft:honeycomb_block'],
        'minecraft:bee_nest',
        'osorins_unbound_calling',
        180
    );

    addRitual(
        ['6x #forge:dusts/amethyst'],
        'minecraft:budding_amethyst',
        'osorins_unbound_calling',
        180
    );    
    addRitual(
        ['allthetweaks:atm_star', 'bloodmagic:etherealslate', '#forge:frames/terrasteel', 'occultism:chalk_void'],
        'occultism:chalk_rainbow',
        'ronazas_contract',
        180
    );

    addRitual(
        ['#forge:dusts/gunpowder', '#forge:dyes/gray', 'minecraft:phantom_membrane', '#forge:ingots/clay'],
        'occultism:gray_paste',
        'strigeors_higher_binding',
        120
    );    

    addRitual(
        ['#forge:dusts/nylon', '#forge:dusts/magebloom', '#forge:string'],
        'ars_nouveau:magebloom_fiber',
        'strigeors_higher_binding',
        120
    );    

    addRitual(
        ['#forge:farmland/insanium', '4x #forge:storage_blocks/insanium_essence', 'botania:rune_winter', 'botania:rune_spring', 'botania:rune_summer', 'botania:rune_autumn', '#forge:gems/soul'],
        'gtceu:magical_soil',
        'osorins_unbound_calling',
        250
    );    
});