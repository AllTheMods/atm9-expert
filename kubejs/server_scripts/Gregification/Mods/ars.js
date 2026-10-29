// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    const imbuementDuration = 300;
    const imbuementVoltage = EV;

    const apparatusDuration = 300;
    const apparatusVoltage = EV;

    const scribeDuration = 200;
    const scribeVoltage = EV;
    const scribeSourcePerExp = 100;

    const essenceSource = 2500;
    const essenceDuration = 300;
    const essenceVoltage = EV;

    const animaSource = 3500;
    const animaDuration = 300;
    const animaVoltage = EV;

    const mobJarSource = 16000;
    const mobJarDuration = 5000;
    const mobJarVoltage = IV;

    const imbuementSkip = [
        'ars_nouveau:abjuration_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:manipulation_essence',
        'ars_nouveau:air_essence', 'ars_nouveau:water_essence', 'ars_nouveau:earth_essence', 'ars_nouveau:fire_essence',
        'ars_elemental:anima_essence', 'minecraft:gold_ingot', 'occultism:silver_ingot'
    ];

    allthemods.forEachRecipe({ type: 'ars_nouveau:imbuement' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);
        if (imbuementSkip.indexOf(recipe.output) >= 0) return;

        let keys = [];
        let counts = {};
        let addInput = ingredient => {
            let key = null;
            if (ingredient.item) {
                key = ingredient.item;
            } else if (ingredient.tag) {
                key = '#' + ingredient.tag;
            }
            if (key == null) return;
            if (counts[key] == null) {
                counts[key] = 0;
                keys.push(key);
            }
            counts[key] += 1;
        };

        addInput(recipe.input);
        (recipe.pedestalItems || []).forEach(pedestal => {
            addInput(pedestal.item || pedestal);
        });

        let inputItems = keys.map(key => counts[key] > 1 ? counts[key] + 'x ' + key : key);

        let count = recipe.count || 1;
        let outputItem = count > 1 ? count + 'x ' + recipe.output : recipe.output;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');

        allthemods.recipes.gtceu.imbument_chamber(safeID)
            .itemInputs(inputItems)
            .inputFluids(`#forge:source ${recipe.source}`)
            .itemOutputs(outputItem)
            .duration(imbuementDuration)
            .EUt(imbuementVoltage);
    });

    allthemods.forEachRecipe({ type: 'ars_nouveau:enchanting_apparatus' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);
        if (recipe.keepNbtOfReagent) return;

        let keys = [];
        let counts = {};
        let addInput = ingredient => {
            let key = null;
            if (ingredient.item) {
                key = ingredient.item;
            } else if (ingredient.tag) {
                key = '#' + ingredient.tag;
            }
            if (key == null) return;
            if (counts[key] == null) {
                counts[key] = 0;
                keys.push(key);
            }
            counts[key] += 1;
        };

        addInput(recipe.reagent[0]);
        (recipe.pedestalItems || []).forEach(pedestal => {
            addInput(pedestal.item && typeof pedestal.item == 'object' ? pedestal.item : pedestal);
        });

        let inputItems = keys.map(key => counts[key] > 1 ? counts[key] + 'x ' + key : key);

        let count = recipe.output.count || 1;
        let outputItem = count > 1 ? count + 'x ' + recipe.output.item : recipe.output.item;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');

        let gtRecipe = allthemods.recipes.gtceu.enchanting_apparatus(safeID)
            .itemInputs(inputItems)
            .itemOutputs(outputItem)
            .duration(apparatusDuration)
            .EUt(apparatusVoltage);
        if (recipe.sourceCost > 0) {
            gtRecipe.inputFluids(`#forge:source ${recipe.sourceCost}`);
        }
    });

    allthemods.forEachRecipe({ type: 'ars_nouveau:glyph' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);

        let keys = [];
        let counts = {};
        recipe.inputItems.forEach(input => {
            let ingredient = input.item && typeof input.item == 'object' ? input.item : input;
            let key = null;
            if (ingredient.item) {
                key = ingredient.item;
            } else if (ingredient.tag) {
                key = '#' + ingredient.tag;
            }
            if (key == null) return;
            if (counts[key] == null) {
                counts[key] = 0;
                keys.push(key);
            }
            counts[key] += 1;
        });

        let inputItems = keys.map(key => counts[key] > 1 ? counts[key] + 'x ' + key : key);

        let count = recipe.count || 1;
        let outputItem = count > 1 ? count + 'x ' + recipe.output : recipe.output;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');

        let gtRecipe = allthemods.recipes.gtceu.scribes_table(safeID)
            .itemInputs(inputItems)
            .itemOutputs(outputItem)
            .duration(scribeDuration)
            .EUt(scribeVoltage);
        if (recipe.exp > 0) {
            gtRecipe.inputFluids(`#forge:source ${recipe.exp * scribeSourcePerExp}`);
        }
    });

    allthemods.recipes.gtceu.imbument_chamber('gregification:craft_essence_abjuration')
        .inputFluids('#forge:source ' + essenceSource)
        .itemOutputs('ars_nouveau:abjuration_essence')
        .circuit(1)
        .duration(essenceDuration)
        .EUt(essenceVoltage);

    allthemods.recipes.gtceu.imbument_chamber('gregification:craft_essence_conjuration')
        .inputFluids('#forge:source ' + essenceSource)
        .itemOutputs('ars_nouveau:conjuration_essence')
        .circuit(2)
        .duration(essenceDuration)
        .EUt(essenceVoltage);

    allthemods.recipes.gtceu.imbument_chamber('gregification:craft_essence_manipulation')
        .inputFluids('#forge:source ' + essenceSource)
        .itemOutputs('ars_nouveau:manipulation_essence')
        .circuit(3)
        .duration(essenceDuration)
        .EUt(essenceVoltage);

    allthemods.recipes.gtceu.imbument_chamber('gregification:craft_essence_air')
        .inputFluids('#forge:source ' + essenceSource)
        .itemOutputs('ars_nouveau:air_essence')
        .circuit(4)
        .duration(essenceDuration)
        .EUt(essenceVoltage);

    allthemods.recipes.gtceu.imbument_chamber('gregification:craft_essence_water')
        .inputFluids('#forge:source ' + essenceSource)
        .itemOutputs('ars_nouveau:water_essence')
        .circuit(5)
        .duration(essenceDuration)
        .EUt(essenceVoltage);

    allthemods.recipes.gtceu.imbument_chamber('gregification:craft_essence_earth')
        .inputFluids('#forge:source ' + essenceSource)
        .itemOutputs('ars_nouveau:earth_essence')
        .circuit(6)
        .duration(essenceDuration)
        .EUt(essenceVoltage);

    allthemods.recipes.gtceu.imbument_chamber('gregification:craft_essence_fire')
        .inputFluids('#forge:source ' + essenceSource)
        .itemOutputs('ars_nouveau:fire_essence')
        .circuit(7)
        .duration(essenceDuration)
        .EUt(essenceVoltage);

    allthemods.recipes.gtceu.imbument_chamber('gregification:craft_anima')
        .inputFluids('#forge:source ' + animaSource)
        .itemOutputs('ars_elemental:anima_essence')
        .circuit(10)
        .duration(animaDuration)
        .EUt(animaVoltage);

    allthemods.recipes.gtceu.imbument_chamber('gregification:mob_jar')
        .itemInputs('#forge:exquisite_gems/vengeful', '#forge:exquisite_gems/destructive', '5x gtceu:laminated_glass', '3x ars_nouveau:sourcestone')
        .inputFluids('#forge:source ' + mobJarSource)
        .itemOutputs('ars_nouveau:mob_jar')
        .duration(mobJarDuration)
        .EUt(mobJarVoltage);

    allthemods.shaped('ars_nouveau:source_jar', [
        'STS',
        'G G',
        'STS'
    ], {
        S: 'ars_nouveau:sourcestone',
        T: 'ars_nouveau:archwood_slab',
        G: 'gtceu:tempered_glass'
    }).id('gregification:ars/source_jar');

    allthemods.recipes.gtceu.assembler('gregification:ars/sourcestone')
        .itemInputs('#forge:dusts/source', '#forge:frames/aluminium', '2x bloodmagic:reinforcedslate', '2x #forge:dusts/plascrete')
        .inputFluids('#forge:steel 288')
        .itemOutputs('4x ars_nouveau:sourcestone')
        .duration(500)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:ars/arcane_pedestal')
        .itemInputs('gtceu:mv_machine_hull', '2x ars_nouveau:sourcestone', '#forge:exquisite_gems/source', '4x #forge:plates/gold')
        .itemOutputs('ars_nouveau:arcane_pedestal')
        .duration(500)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:ars/enchanting_apparatus')
        .itemInputs('gtceu:mv_machine_hull', '2x ars_nouveau:sourcestone', '#forge:exquisite_gems/diamond', '4x #forge:plates/gold')
        .itemOutputs('ars_nouveau:enchanting_apparatus')
        .duration(500)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:ars/imbuement_chamber')
        .itemInputs('gtceu:mv_machine_hull', '4x #forge:plates/gold', '#evilcraft:gems/dark_power', '6x #forge:planks/archwood')
        .itemOutputs('ars_nouveau:imbuement_chamber')
        .duration(500)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:craft_sourcestone_plating_casing')
        .itemInputs(
            '4x ars_nouveau:sourcestone',
            '#forge:plates/stainless_steel',
            '#forge:plates/gold'
        )
        .itemOutputs('2x gtceu:sourcestone_plating_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_source_conduit_casing')
        .itemInputs(
            '2x gtceu:sourcestone_plating_casing',
            '4x ars_nouveau:source_gem',
            '2x #forge:plates/gold'
        )
        .itemOutputs('2x gtceu:source_conduit_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_glyph_core_casing')
        .itemInputs(
            '2x gtceu:sourcestone_plating_casing',
            '2x ars_nouveau:manipulation_essence',
            '2x ars_nouveau:conjuration_essence',
            '#forge:plates/gold'
        )
        .itemOutputs('2x gtceu:glyph_core_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_hephaestus_plating_casing')
        .itemInputs(
            '4x forbidden_arcanus:polished_darkstone',
            '#forge:plates/stainless_steel',
            '#forge:plates/copper'
        )
        .itemOutputs('2x gtceu:hephaestus_plating_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_forge_rune_casing')
        .itemInputs(
            '2x gtceu:hephaestus_plating_casing',
            '2x forbidden_arcanus:arcane_crystal',
            '2x #forge:plates/gold'
        )
        .itemOutputs('2x gtceu:forge_rune_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_soulstone_casing')
        .itemInputs(
            '4x minecraft:soul_sand',
            '#forge:plates/stainless_steel',
            '#forge:plates/silver'
        )
        .itemOutputs('2x gtceu:soulstone_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_soul_conduit_casing')
        .itemInputs(
            '2x gtceu:soulstone_casing',
            '2x forbidden_arcanus:arcane_crystal',
            '2x #forge:plates/silver'
        )
        .itemOutputs('2x gtceu:soul_conduit_casing')
        .duration(100)
        .EUt(LV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
