ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    const stage1 = 'gtceu:water_stage_1'
    const stage2 = 'gtceu:water_stage_2'
    const stage3 = 'gtceu:water_stage_3'
    const stage4 = 'gtceu:water_stage_4'

    const stages = [
        { water: stage1, n: 1 },
        { water: stage2, n: 2 },
        { water: stage3, n: 3 },
        { water: stage4, n: 4 }
    ];

    stages.forEach(s => {
        allthemods.recipes.gtceu.mana_converter(`eu_to_source_${s.n}`)
            .inputFluids(`${s.water} 200`)
            .outputFluids(`gtceu:source ${200 * s.n}`)
            .addData('ebf_temp', 3600)
            .circuit(2)
            .duration(100)
            .EUt(MV);

        allthemods.recipes.gtceu.mana_converter(`eu_to_liquid_mana_${s.n}`)
            .inputFluids(`${s.water} 1280`)
            .outputFluids(`gtceu:mana_essence ${1280 * s.n}`)
            .addData('ebf_temp', 3600)
            .circuit(1)
            .duration(100)
            .EUt(MV);

        allthemods.recipes.gtceu.mana_burner(`lava_to_liquid_mana_${s.n}`)
            .inputFluids('minecraft:lava 1000')
            .inputFluids(`${s.water} 320`)
            .outputFluids(`gtceu:mana_essence ${320 * s.n}`)
            .circuit(1)
            .duration(400);

        allthemods.recipes.gtceu.mana_burner(`lava_to_source_${s.n}`)
            .inputFluids('minecraft:lava 1000')
            .inputFluids(`${s.water} 50`)
            .outputFluids(`gtceu:source ${50 * s.n}`)
            .circuit(2)
            .duration(400);
    });

    

    allthemods.recipes.gtceu.mana_converter('mana_to_portal_fluid')
        .inputFluids('#forge:mana_essence 1000')
        .outputFluids('gtceu:alfheim_portal_fluid 1000')
        .addData('ebf_temp', 3600)
        .duration(100)
        .EUt(MV);

    allthemods.recipes.gtceu.mana_burner('coal_to_liquid_mana')
        .itemInputs('#minecraft:coals')
        .outputFluids('gtceu:mana_essence 1200')
        .inputFluids(`${stage1} 1200}`)
        .addData('ebf_temp', 3600)
        .circuit(1)
        .duration(1600)



    allthemods.recipes.gtceu.mana_burner('coal_to_source')
        .itemInputs('#minecraft:coals')
        .inputFluids(`${stage1} 200}`)
        .outputFluids('gtceu:source 200')
        .addData('ebf_temp', 3600)
        .circuit(2)
        .duration(1600)


    allthemods.recipes.gtceu.mana_burner('cake_to_liquid_mana')
        .itemInputs('minecraft:cake')
        .inputFluids(`${stage1} 10800}`)
        .outputFluids('gtceu:mana_essence 10800')
        .circuit(1)
        .duration(14400)


    allthemods.recipes.gtceu.mana_burner('cake_to_source')
        .itemInputs('minecraft:cake')
        .inputFluids(`${stage1} 1800}`)
        .outputFluids('gtceu:source 1800')
        .circuit(2)
        .duration(14400)


    


    const petalDuration = 300;
    const runicDuration = 600;
    const infusionDuration = 1200;

    const petalVoltage = MV;
    const runicVoltage = EV;
    const infusionVoltage = IV;

    //petal apothecary
    allthemods.forEachRecipe({ type: 'botania:petal_apothecary' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);

        let inputItems = recipe.ingredients.map(ingredient => {
            if (ingredient.item) {
                return ingredient.item;
            } else if (ingredient.tag) {
                return '#' + ingredient.tag;
            }
            return null;
        }).filter(item => item != null);
        inputItems.push('#forge:seeds');

        let outputItem = recipe.output.item;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');
        allthemods.recipes.gtceu.petal_apothecary(safeID)
            .itemInputs(inputItems)
            .itemOutputs(outputItem)
            .inputFluids(`${stage1} 1000}`)
            .duration(petalDuration)
            .EUt(petalVoltage);
    });

    //runic altar
    allthemods.forEachRecipe({ type: 'botania:runic_altar' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);

        let inputItems = (recipe.ingredients || []).map(ingredient => {
            let actualIng = ingredient.ingredient || ingredient;
            if (actualIng.item) {
                return actualIng.item;
            } else if (actualIng.tag) {
                return '#' + actualIng.tag;
            }
            return null;
        }).filter(item => item != null);
        inputItems.push('botania:livingrock');

        // Properly parse output item and its count whether it uses 'output' or 'result'
        let outObj = recipe.output || recipe.result;
        let outputItem;
        if (outObj) {
            let count = outObj.count || 1;
            let itemName = outObj.item || outObj;
            outputItem = count > 1 ? `${count}x ${itemName}` : itemName;
        } else {
            outputItem = 'minecraft:air';
        }

        let outputItems = [outputItem];

        inputItems.forEach(input => {
            let cleanInput = input.startsWith('#') ? input.substring(1) : input;
            if (cleanInput.includes('rune')) {
                outputItems.push(input);
            }
        });
        let hasBee = inputItems.some(input => {
            let cleanInput = input.startsWith('#') ? input.substring(1) : input;
            return cleanInput.includes('bee');
        }) || outputItem.includes('bee');

        if (hasBee) return;

        let manaCost = recipe.mana ?? 5000;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');

        allthemods.recipes.gtceu.runic_altar(safeID)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(`gtceu:mana_essence ${manaCost}`)
            .duration(runicDuration)
            .EUt(HV);
    });

    //mana infuser
    allthemods.forEachRecipe({ type: 'botania:terra_plate' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);

        let inputItems = (recipe.ingredients || []).map(ingredient => {
            let actualIng = ingredient.ingredient || ingredient;
            if (actualIng.item) {
                return actualIng.item;
            } else if (actualIng.tag) {
                return '#' + actualIng.tag;
            }
            return null;
        }).filter(item => item != null);


        // Safely parse output item and handle stack counts properly
        let outObj = recipe.result || recipe.output;
        let outputItem;
        if (outObj) {
            let count = outObj.count || 1;
            let itemName = outObj.item || outObj;
            outputItem = count > 1 ? `${count}x ${itemName}` : itemName;
        } else {
            outputItem = 'minecraft:air';
        }

        let hasBee = inputItems.some(input => {
            let cleanInput = input.startsWith('#') ? input.substring(1) : input;
            return cleanInput.includes('bee');
        }) || outputItem.includes('bee');

        if (hasBee) return;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');
        let manaCost = recipe.mana ?? 5000;

        allthemods.recipes.gtceu.mana_infuser(safeID)
            .itemInputs(inputItems)
            .itemOutputs(outputItem)
            .inputFluids(`gtceu:mana_essence ${manaCost}`)
            .duration(infusionDuration)
            .EUt(infusionVoltage);
    });

    allthemods.recipes.gtceu.petal_apothecary('gregification:livingrock')
        .itemInputs('8x #forge:stone')
        .itemOutputs('8x botania:livingrock')
        .inputFluids('#forge:mana_essence 1000')
        .duration(infusionDuration)
        .EUt(petalVoltage);

    allthemods.recipes.gtceu.petal_apothecary('gregification:livingwood')
        .itemInputs('8x #minecraft:logs')
        .itemOutputs('8x botania:livingwood')
        .inputFluids('#forge:mana_essence 1000')
        .duration(infusionDuration)
        .EUt(petalVoltage);

    const pureBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:pure"}}').strongNBT();
    const terraBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:terrasteel"}}').strongNBT();
    const manaBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:mana"}}').strongNBT();
    const elementiumBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:elementium"}}').strongNBT();
    const alfBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:alfsteel"}}').strongNBT();
    const manaSteel = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:manasteel"}}').strongNBT();
    const ironBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:iron"}}').strongNBT();


    allthemods.recipes.gtceu.petal_apothecary('pure_bee')
        .itemInputs(['minecraft:bee_spawn_egg', '3x #botania:petals/white', 'productivebees:honey_treat', 'minecraft:bee_spawn_egg'])
        .itemOutputs(pureBee)
        .inputFluids(`${stage3} 10000}`)
        .duration(petalDuration)
        .EUt(petalVoltage);
    allthemods.recipes.gtceu.runic_altar('mana_bee')
        .itemInputs([pureBee, '4x botania:rune_mana', 'botania:livingrock'])
        .itemOutputs(manaBee)
        .inputFluids('gtceu:mana_essence 1000000')
        .duration(petalDuration)
        .EUt(runicVoltage);
    allthemods.recipes.gtceu.mana_infuser('terra_bee')
        .itemInputs([manaSteel, 'botania:mana_pearl', 'botania:mana_diamond'])
        .itemOutputs(terraBee)
        .inputFluids('gtceu:mana_essence 500000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);
    allthemods.recipes.gtceu.mana_infuser('alf_bee')
        .itemInputs([elementiumBee, 'botania:pixie_dust', 'botania:dragonstone'])
        .itemOutputs(alfBee)
        .inputFluids('gtceu:mana_essence 500000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);


    allthemods.recipes.gtceu.mana_infuser('unobtainium_allthemodium_alloy_block')
        .itemInputs(['#forge:storage_blocks/unobtainium', '#forge:storage_blocks/allthemodium', 'allthemodium:piglich_heart_block'])
        .itemOutputs('allthemodium:unobtainium_allthemodium_alloy_block')
        .inputFluids('gtceu:mana_essence 8100000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    allthemods.recipes.gtceu.mana_infuser('unobtainium_vibranium_alloy_block')
        .itemInputs(['#forge:storage_blocks/unobtainium', '#forge:storage_blocks/vibranium', 'allthemodium:piglich_heart_block'])
        .itemOutputs('allthemodium:unobtainium_vibranium_alloy_block')
        .inputFluids('gtceu:mana_essence 8100000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    allthemods.recipes.gtceu.mana_infuser('vibranium_allthemodium_alloy_block')
        .itemInputs(['#forge:storage_blocks/allthemodium', '#forge:storage_blocks/vibranium', 'allthemodium:piglich_heart_block'])
        .itemOutputs('allthemodium:vibranium_allthemodium_alloy_block')
        .inputFluids('gtceu:mana_essence 8100000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    allthemods.recipes.gtceu.mana_infuser('unobtainium_vibranium_alloy_ingot')
        .itemInputs(['#forge:ingots/unobtainium', '#forge:ingots/vibranium', 'allthemodium:piglich_heart'])
        .itemOutputs('allthemodium:unobtainium_vibranium_alloy_ingot')
        .inputFluids('gtceu:mana_essence 1000000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    allthemods.recipes.gtceu.mana_infuser('vibranium_allthemodium_alloy_ingot')
        .itemInputs(['#forge:ingots/vibranium', '#forge:ingots/allthemodium', 'allthemodium:piglich_heart'])
        .itemOutputs('allthemodium:vibranium_allthemodium_alloy_ingot')
        .inputFluids('gtceu:mana_essence 1000000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    allthemods.recipes.gtceu.mana_infuser('unobtainium_allthemodium_alloy_ingot')
        .itemInputs(['#forge:ingots/unobtainium', '#forge:ingots/allthemodium', 'allthemodium:piglich_heart'])
        .itemOutputs('allthemodium:unobtainium_allthemodium_alloy_ingot')
        .inputFluids('gtceu:mana_essence 1000000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    allthemods.recipes.gtceu.mana_infuser('mythicbotany:alfsteel_ingot')
        .itemInputs(['botania:elementium_ingot', 'botania:pixie_dust', 'botania:mana_pearl'])
        .itemOutputs('mythicbotany:alfsteel_ingot')
        .inputFluids('gtceu:mana_essence 1000000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    //alchemy table
    const TOOL_ITEM_IDS = {
        resonator: 'bloodmagic:hellforged_resonator',
        cuttingfluid: 'bloodmagic:advancedcuttingfluid',
        explosive: 'bloodmagic:hellforged_explosive_cell',
        reverter: 'bloodmagic:sanguinereverter'
    };
    const BLOOD_ORB_TIERS = {
        1: 'bloodmagic:weakbloodorb',
        2: 'bloodmagic:apprenticebloodorb',
        3: 'bloodmagic:magicianbloodorb',
        4: 'bloodmagic:masterbloodorb',
        5: 'bloodmagic:archmagebloodorb',
        6: 'gtceu:technomancy_orb'
    };
    const EUTiers = {
        1: LV,     //lv
        2: MV,    //mv
        3: HV,    //hv
        4: EV,   //ev   
        5: IV,   //iv
        6: LuV,   //luv
        7: ZPM   //zpm
    };

    allthemods.forEachRecipe({ type: 'bloodmagic:arc' }, rawRecipe => {
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');
        try {
            let recipe = JSON.parse(rawRecipe.json);

            // --- Input item ---
            let inputItem = null;
            if (recipe.input) {
                if (recipe.input.item) {
                    inputItem = recipe.input.item;
                } else if (recipe.input.tag) {
                    inputItem = '#' + recipe.input.tag;
                }
            }
            let inputItems = inputItem ? [inputItem] : [];

            // --- Input fluid ---
            let inputFluids = [];
            if (recipe.inputFluid && recipe.inputFluid.fluid) {
                let amount = recipe.inputFluid.amount || 1000;
                inputFluids.push(`${recipe.inputFluid.fluid} ${Math.round(amount)}`);
            }

            // --- Main output item(s) — handle both single-object and array shapes ---
            let outputItems = [];
            let outputObjs = Array.isArray(recipe.output) ? recipe.output : (recipe.output ? [recipe.output] : []);
            outputObjs.forEach(out => {
                if (out.item) {
                    let count = out.count || 1;
                    outputItems.push(count > 1 ? `${count}x ${out.item}` : out.item);
                }
            });

            // --- Output fluid ---
            let outputFluids = [];
            if (recipe.outputFluid && recipe.outputFluid.fluid) {
                let amount = recipe.outputFluid.amount || 1000;
                outputFluids.push(`${recipe.outputFluid.fluid} ${Math.round(amount)}`);
            }

            // --- addedoutput: split into guaranteed extras vs genuine chanced outputs ---
            let chancedEntries = [];
            if (Array.isArray(recipe.addedoutput)) {
                recipe.addedoutput.forEach(added => {
                    if (!added.type || !added.type.item) return;

                    let mainChance = added.mainchance || 0;
                    let chance = Math.round((added.chance || 0) * 10000);

                    if (mainChance >= 1.0) {
                        // Guaranteed extra output — treat as a normal output, not chanced
                        let count = added.type.count || 1;
                        outputItems.push(count > 1 ? `${count}x ${added.type.item}` : added.type.item);
                    } else if (chance > 0 && chance < 10000) {
                        chancedEntries.push({ item: added.type.item, chance: chance });
                    }
                    // else: chance is 0 and mainchance isn't 1.0 — nothing happens, skip silently
                });
            }

            if (outputItems.length === 0) {
                outputItems.push('minecraft:air');
            }

            // --- Build the recipe ---
            let builder = allthemods.recipes.gtceu.alchemical_workbench(safeID)
                .itemInputs(inputItems)
                .itemOutputs(outputItems)
                .duration(runicDuration)
                .EUt(runicVoltage);

            if (inputFluids.length > 0) builder.inputFluids(inputFluids);
            if (outputFluids.length > 0) builder.outputFluids(outputFluids);

            // --- Tool handling: hydrate dropped entirely, others become non-consumed requirements ---
            if (recipe.tool && recipe.tool.tag) {
                let match = recipe.tool.tag.match(/bloodmagic:arc\/([a-z]+)/);
                let category = match ? match[1] : null;
                if (category && category !== 'hydrate' && TOOL_ITEM_IDS[category]) {
                    try {
                        builder.notConsumable(TOOL_ITEM_IDS[category]);
                    } catch (err) {
                        console.error(`notConsumable FAILED for ${safeID}: ${err}`);
                    }
                }
            }

            // --- Genuine chanced outputs ---
            chancedEntries.forEach(entry => {
                try {
                    builder.chancedOutput(entry.item, entry.chance, 0);
                } catch (err) {
                    console.error(`chancedOutput FAILED for ${safeID}: ${err}`);
                }
            });

        } catch (err) {
            console.error(`FAILED recipe ID: ${safeID} — ${err}`);
        }
    });





    allthemods.forEachRecipe({ type: 'bloodmagic:alchemytable' }, rawRecipe => {
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');
        try {
            let recipe = JSON.parse(rawRecipe.json);

            // --- Input items — array of {item} or {tag}, some entries may be nested OR-arrays ---
            let inputItems = [];
            (recipe.input || []).forEach(ing => {
                if (Array.isArray(ing)) {
                    // OR-slot — take the first option only
                    let first = ing[0];
                    if (first.item) {
                        inputItems.push(first.item);
                    } else if (first.tag) {
                        inputItems.push('#' + first.tag);
                    }
                } else if (ing.item) {
                    inputItems.push(ing.item);
                } else if (ing.tag) {
                    inputItems.push('#' + ing.tag);
                }
            });

            // --- Output item ---
            let outputItem = 'minecraft:air';
            if (recipe.output && recipe.output.item) {
                let count = recipe.output.count || 1;
                outputItem = count > 1 ? `${count}x ${recipe.output.item}` : recipe.output.item;
            }

            // --- Liquid blood cost (syphon → fluid) ---
            let syphonAmount = Math.round(recipe.syphon || 0);

            // --- Duration ---
            let duration = Math.round(recipe.ticks || 100);

            // --- Blood orb tier as non-consumed requirement ---
            let orbItem = BLOOD_ORB_TIERS[Math.round(recipe.upgradeLevel || 1)];
            [Math.round(recipe.upgradeLevel || 1)];
            let altarVoltage = EUTiers[Math.round(recipe.upgradeLevel || 3)];

            let builder = allthemods.recipes.gtceu.alchemical_workbench(safeID)
                .itemInputs(inputItems)
                .itemOutputs(outputItem)
                .duration(duration)
                .EUt(altarVoltage);

            if (syphonAmount > 0) {
                builder.inputFluids([`gtceu:sanguine_concentrate ${syphonAmount}`]);
            }

            if (orbItem) {
                try {
                    builder.notConsumable(orbItem);
                } catch (err) {
                    console.error(`notConsumable FAILED for ${safeID}: ${err}`);
                }
            }

        } catch (err) {
            console.error(`FAILED recipe ID: ${safeID} — ${err}`);
        }
    });

    allthemods.recipes.gtceu.alchemical_workbench('gregification:thermal_spark')
        .itemInputs('botania:corporea_spark', '#forge:exquisite_gems/nitro_crystal', '4x #forge:rounds/pink_slime', '#forge:rings/draconium_awakened')
        .notConsumable('gtceu:technomancy_orb')
        .itemOutputs('gtceu:thermal_spark')
        .duration(1000)
        .EUt(LuV);

    const CATALYST_ITEM_IDS = {
        'botania:alchemy_catalyst': 'botania:alchemy_catalyst',
        'botania:conjuration_catalyst': 'botania:conjuration_catalyst'
    };


    allthemods.forEachRecipe({ type: 'botania:mana_infusion' }, rawRecipe => {
        let baseSafeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');
        try {
            let recipe = JSON.parse(rawRecipe.json);

            // --- Skip NBT-based recipes (e.g. bee spawn eggs) - handled manually below ---
            if ((recipe.input && recipe.input.type === 'forge:nbt') ||
                (recipe.output && recipe.output.type === 'forge:nbt')) {
                return;
            }

            // --- Output item (shared across every alternative input) ---
            let outObj = recipe.output;
            let outputItem = 'minecraft:air';
            if (outObj && outObj.item) {
                let count = outObj.count || 1;
                outputItem = count > 1 ? `${count}x ${outObj.item}` : outObj.item;
            }

            let manaCost = recipe.mana || 0;

            // --- Input: normalize to an array of alternatives (single-item input becomes a 1-length array) ---
            let rawInput = recipe.input;
            let inputEntries = Array.isArray(rawInput) ? rawInput : [rawInput];

            inputEntries.forEach(function (inputEntry, index) {
                let inputItem = null;
                if (inputEntry) {
                    if (inputEntry.item) {
                        inputItem = inputEntry.item;
                    } else if (inputEntry.tag) {
                        inputItem = '#' + inputEntry.tag;
                    }
                }
                if (!inputItem) return;

                // one recipe ID per alternative - suffix only added when there's more than one
                let safeID = inputEntries.length > 1 ? `${baseSafeID}_alt${index}` : baseSafeID;

                let builder = allthemods.recipes.gtceu.mana_pool(safeID)
                    .itemInputs([inputItem])
                    .itemOutputs(outputItem)
                    .inputFluids(`gtceu:mana_essence ${manaCost}`)
                    .duration(10)
                    .EUt(HV);

                // --- Catalyst (Alchemy/Conjuration) as a non-consumed second input ---
                if (recipe.catalyst && recipe.catalyst.block) {
                    let catalystItem = CATALYST_ITEM_IDS[recipe.catalyst.block];
                    if (catalystItem) {
                        try {
                            builder.notConsumable(catalystItem);
                        } catch (err) {
                            console.error(`notConsumable FAILED for ${safeID}: ${err}`);
                        }
                    }
                }
            });

        } catch (err) {
            console.error(`FAILED recipe ID: ${baseSafeID} — ${err}`);
        }
    });



    // --- Manasteel bee - manual, NBT-based, excluded from the automated loop above ---
    allthemods.recipes.gtceu.mana_pool('bacteria_mana_pool_manasteel_bee')
        .itemInputs(ironBee)
        .itemOutputs(manaSteel)
        .inputFluids('gtceu:mana_essence 10000')
        .duration(10)
        .EUt(HV);


    let alfheimRecipes =
        [
            { id: 'elementium_ingot', input: '2x #forge:ingots/manasteel', output: 'botania:elementium_ingot', cost: 100 },
            { id: 'elementium_block', input: '2x #forge:storage_blocks/manasteel', output: 'botania:elementium_block', cost: 900 },
            { id: 'dragonstone', input: '#forge:gems/mana_diamond', output: 'botania:dragonstone', cost: 100 },
            { id: 'dragonstone_block', input: '#forge:storage_blocks/mana_diamond', output: 'botania:dragonstone_block', cost: 900 },
            { id: 'pixie_dust', input: 'botania:mana_pearl', output: 'botania:pixie_dust', cost: 100 },
            { id: 'quartz_elven', input: '#forge:gems/quartz', output: 'botania:quartz_elven', cost: 100 },
            { id: 'elf_glass', input: 'botania:mana_glass', output: 'botania:elf_glass', cost: 100 },
            { id: 'livingwood_log', input: 'botania:livingwood_log', output: 'botania:dreamwood_log', cost: 100 },
            { id: 'livingwood', input: 'botania:livingwood', output: 'botania:dreamwood', cost: 100 },
            { id: 'dreamwood_leaves', input: '#minecraft:leaves', output: 'mythicbotany:dreamwood_leaves', cost: 100 },
            { id: 'elementium_bee', input: manaSteel, output: elementiumBee, cost: 10000 },
        ];

    alfheimRecipes.forEach(recipe => {
        allthemods.recipes.gtceu.alfheim_trader('gregification/' + recipe.id)
            .itemInputs(recipe.input)
            .itemOutputs(recipe.output)
            .inputFluids('#forge:alfheim_portal_fluid 1000')
            .duration(10)
            .EUt(IV);
    });

    allthemods.recipes.gtceu.alfheim_trader('gregification:crescent_moon')
        .itemInputs('#forge:singularities/tattered')
        .itemOutputs('forbidden_arcanus:crescent_moon')
        .inputFluids('#forge:alfheim_portal_fluid 1000')
        .duration(10)
        .EUt(IV);

    allthemods.recipes.gtceu.alfheim_trader('gregification:solar_relic')
        .itemInputs('#forge:singularities/wraith_heart')
        .itemOutputs('gtceu:solar_relic')
        .inputFluids('#forge:alfheim_portal_fluid 1000')
        .duration(10)
        .EUt(IV);

    allthemods.recipes.gtceu.alfheim_trader('gregification:undeath_singularity')
        .itemInputs('#forge:singularities/undeath')
        .itemOutputs('forbidden_arcanus:crimson_stone')
        .inputFluids('#forge:alfheim_portal_fluid 1000')
        .duration(10)
        .EUt(IV);


    allthemods.recipes.gtceu.mana_infuser('gregification:cresent_infusion/terrasteel')
        .notConsumable('forbidden_arcanus:crescent_moon')
        .itemInputs('#forge:gems/mana_diamond', 'botania:mana_pearl', '#forge:ingots/manasteel')
        .itemOutputs('botania:terrasteel_ingot')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    allthemods.recipes.gtceu.assembler('gregification/mana_infuser')
        .itemInputs('gtceu:iv_machine_hull', '2x gtceu:iv_electric_pump', '2x gtceu:iv_electric_piston', '2x #gtceu:circuits/iv', '8x #forge:plates/semi_stable_clathrate')
        .itemOutputs('gtceu:mana_infuser')
        .inputFluids('#forge:mana_essence 9200')
        .duration(600)
        .EUt(IV);

    allthemods.recipes.gtceu.elven_forge('gregification/elven_forge/mithril_ingot')
        .notConsumable('forbidden_arcanus:crimson_stone')
        .itemInputs('#forge:dusts/mithril', '64x irons_spellbooks:arcane_essence')
        .itemOutputs('irons_spellbooks:mithril_ingot')
        .inputFluids('allthemodium:soul_lava 1000')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.elven_forge('gregification/elven_forge/adamantium_dust')
        .notConsumable('forbidden_arcanus:crimson_stone')
        .itemInputs('#forge:dusts/adamantite', '64x #forge:dusts/tungsten_carbide', '64x #forge:dusts/netherite', '16x #forge:dusts/bedrockium', '16x #forge:dusts/mithril')
        .itemOutputs('gtceu:adamantium_dust')
        .inputFluids('allthemodium:soul_lava 1000')
        .duration(1000)
        .EUt(ZPM);

    allthemods.recipes.gtceu.electric_blast_furnace(`gregification:blasting_adamantium_dust`)
        .itemInputs('#forge:dusts/adamantium')
        .itemOutputs('gtceu:hot_adamantium_ingot')
        .inputFluids('#forge:bromine 2000')
        .blastFurnaceTemp(7200)
        .duration(1200)
        .EUt(ZPM);

    allthemods.recipes.gtceu.vacuum_freezer(`gregification:freezing_adamantium_ingot`)
        .itemInputs('#forge:hot_ingots/adamantium')
        .itemOutputs('gtceu:adamantium_ingot')
        .inputFluids('#forge:thermal_coolant 1000')
        .duration(1200)
        .EUt(ZPM);

});
