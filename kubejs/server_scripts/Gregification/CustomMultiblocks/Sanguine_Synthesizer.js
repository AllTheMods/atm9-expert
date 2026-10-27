const GTX = Java.loadClass('com.gtextras.api.GTX');

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    const BLOOD_ORB_TIERS = {
        1: 'bloodmagic:weakbloodorb',
        2: 'bloodmagic:apprenticebloodorb',
        3: 'bloodmagic:magicianbloodorb',
        4: 'bloodmagic:masterbloodorb',
        5: 'bloodmagic:archmagebloodorb',
        6: 'gtceu:technomancy_orb'
    };
    const EUTiers = {
        1: LV,
        2: MV,
        3: HV,
        4: EV,
        5: IV,
        6: LuV,
        7: ZPM
    };
    const arcDuration = 600;
    const arcVoltage = EV;

    const forgeDuration = 100;
    const forgeVoltage = HV;

    const arrayDuration = 200;
    const arrayVoltage = HV;

    allthemods.recipes.gtceu.sanguine_alchemy('gregification:thermal_spark')
        .itemInputs('botania:corporea_spark', '#forge:exquisite_gems/nitro_crystal', '4x #forge:rounds/pink_slime', '#forge:rings/draconium_awakened')
        .notConsumable('gtceu:technomancy_orb')
        .itemOutputs('gtceu:thermal_spark')
        .duration(1000)
        .EUt(LuV);

    allthemods.forEachRecipe({ type: 'bloodmagic:arc' }, rawRecipe => {
        let safeID = String(rawRecipe.getId()).replace(/[^a-z0-9]/gi, '_');
        try {
            let recipe = JSON.parse(rawRecipe.json);

            let inputItem = null;
            if (recipe.input) {
                if (recipe.input.item) {
                    inputItem = recipe.input.item;
                } else if (recipe.input.tag) {
                    inputItem = '#' + recipe.input.tag;
                }
            }
            if (inputItem && recipe.inputsize > 1) {
                inputItem = recipe.inputsize + 'x ' + inputItem;
            }

            let outputItems = [];
            let outputObjs = Array.isArray(recipe.output) ? recipe.output : (recipe.output ? [recipe.output] : []);
            outputObjs.forEach(out => {
                if (out.item) {
                    let count = out.count || 1;
                    outputItems.push(count > 1 ? `${count}x ${out.item}` : out.item);
                }
            });

            let chancedEntries = [];
            if (Array.isArray(recipe.addedoutput)) {
                recipe.addedoutput.forEach(added => {
                    if (!added.type || !added.type.item) return;
                    let mainChance = added.mainchance || 0;
                    let chance = Math.round((added.chance || 0) * 10000);
                    if (mainChance >= 1.0) {
                        let count = added.type.count || 1;
                        outputItems.push(count > 1 ? `${count}x ${added.type.item}` : added.type.item);
                    } else if (chance > 0 && chance < 10000) {
                        chancedEntries.push({ item: added.type.item, chance: chance });
                    }
                });
            }
            if (outputItems.length === 0) {
                outputItems.push('minecraft:air');
            }

            let builder = allthemods.recipes.gtceu.sanguine_arc('gregification:sanguine_arc/' + safeID)
                .itemOutputs(outputItems)
                .duration(arcDuration)
                .EUt(arcVoltage);

            if (inputItem) builder.itemInputs([inputItem]);
            if (recipe.inputFluid && recipe.inputFluid.fluid) {
                builder.inputFluids(`${recipe.inputFluid.fluid} ${Math.round(recipe.inputFluid.amount || 1000)}`);
            }
            if (recipe.outputFluid && recipe.outputFluid.fluid) {
                builder.outputFluids(`${recipe.outputFluid.fluid} ${Math.round(recipe.outputFluid.amount || 1000)}`);
            }

            chancedEntries.forEach(entry => {
                builder.chancedOutput(entry.item, entry.chance, 0);
            });

            if (recipe.tool && recipe.tool.tag) {
                builder.notConsumable('#' + recipe.tool.tag);
                builder.addCondition(GTX.damageItem('#' + recipe.tool.tag, 1));
                builder.addCondition(GTX.damageItemLabel('#' + recipe.tool.tag));
            }
        } catch (err) {
            console.error(`FAILED recipe ID: ${safeID} — ${err}`);
        }
    });

    allthemods.forEachRecipe({ type: 'bloodmagic:alchemytable' }, rawRecipe => {
        let safeID = String(rawRecipe.getId()).replace(/[^a-z0-9]/gi, '_');
        try {
            let recipe = JSON.parse(rawRecipe.json);

            let inputItems = [];
            let tools = [];
            (recipe.input || []).forEach(ing => {
                let first = Array.isArray(ing) ? ing[0] : ing;
                let key = null;
                if (first.item) {
                    key = first.item;
                } else if (first.tag) {
                    key = '#' + first.tag;
                }
                if (!key) return;
                let isTool = key.indexOf('#bloodmagic:arc/') === 0;
                if (!isTool && key.charAt(0) !== '#') {
                    try {
                        isTool = Item.of(key).maxDamage > 0;
                    } catch (e) {
                        isTool = false;
                    }
                }
                if (isTool) {
                    if (tools.indexOf(key) < 0) tools.push(key);
                } else {
                    inputItems.push(key);
                }
            });

            let outputItem = 'minecraft:air';
            if (recipe.output && recipe.output.item) {
                let count = recipe.output.count || 1;
                outputItem = count > 1 ? `${count}x ${recipe.output.item}` : recipe.output.item;
            }

            let syphonAmount = Math.round(recipe.syphon || 0);
            let duration = Math.round(recipe.ticks || 100);
            let orbItem = BLOOD_ORB_TIERS[Math.round(recipe.upgradeLevel || 1)];
            let altarVoltage = EUTiers[Math.round(recipe.upgradeLevel || 3)];

            let builder = allthemods.recipes.gtceu.sanguine_alchemy('gregification:sanguine_alchemy/' + safeID)
                .itemInputs(inputItems)
                .itemOutputs(outputItem)
                .duration(duration)
                .EUt(altarVoltage);

            if (syphonAmount > 0) builder.inputFluids('#forge:blood ' + syphonAmount);
            if (orbItem) builder.notConsumable(orbItem);
            tools.forEach(key => {
                builder.notConsumable(key);
                builder.addCondition(GTX.damageItem(key, 1));
                builder.addCondition(GTX.damageItemLabel(key));
            });
        } catch (err) {
            console.error(`FAILED recipe ID: ${safeID} — ${err}`);
        }
    });

    allthemods.forEachRecipe({ type: 'bloodmagic:soulforge' }, rawRecipe => {
        let safeID = String(rawRecipe.getId()).replace(/[^a-z0-9]/gi, '_');
        try {
            let recipe = JSON.parse(rawRecipe.json);

            let inputItems = [];
            ['input0', 'input1', 'input2', 'input3'].forEach(slot => {
                let ing = recipe[slot];
                if (!ing) return;
                if (ing.item) {
                    inputItems.push(ing.item);
                } else if (ing.tag) {
                    inputItems.push('#' + ing.tag);
                }
            });

            let outputStack = 'minecraft:air';
            if (recipe.output && recipe.output.item) {
                let count = recipe.output.count || 1;
                if (recipe.output.nbt) {
                    outputStack = Item.of(recipe.output.item, count, recipe.output.nbt);
                } else {
                    outputStack = count > 1 ? `${count}x ${recipe.output.item}` : recipe.output.item;
                }
            }

            let totalWill = Math.round((recipe.drain || 0) * forgeDuration);

            let builder = allthemods.recipes.gtceu.sanguine_forge('gregification:sanguine_forge/' + safeID)
                .itemInputs(inputItems)
                .itemOutputs(outputStack)
                .duration(forgeDuration)
                .EUt(forgeVoltage);

            if (totalWill > 0) builder.inputFluids('#forge:will ' + totalWill);
        } catch (err) {
            console.error(`FAILED recipe ID: ${safeID} — ${err}`);
        }
    });



    allthemods.forEachRecipe({ type: 'bloodmagic:array' }, rawRecipe => {
        let safeID = String(rawRecipe.getId()).replace(/[^a-z0-9]/gi, '_');
        try {
            let recipe = JSON.parse(rawRecipe.json);

            if (!recipe.output || !recipe.output.item || recipe.output.item === 'minecraft:bedrock') return;

            let pick = ing => {
                if (!ing) return null;
                if (ing.item) return ing.item;
                if (ing.tag) return '#' + ing.tag;
                return null;
            };

            let base = pick(recipe.baseinput);
            let added = pick(recipe.addedinput);
            if (!base || !added) return;

            let count = recipe.output.count || 1;
            let outputStack;
            if (recipe.output.nbt) {
                outputStack = Item.of(recipe.output.item, count, recipe.output.nbt);
            } else {
                outputStack = count > 1 ? `${count}x ${recipe.output.item}` : recipe.output.item;
            }

            allthemods.recipes.gtceu.sanguine_array('gregification:sanguine_array/' + safeID)
                .itemInputs([base, added])
                .itemOutputs(outputStack)
                .duration(arrayDuration)
                .EUt(arrayVoltage);
        } catch (err) {
            console.error(`FAILED recipe ID: ${safeID} — ${err}`);
        }
    });

});