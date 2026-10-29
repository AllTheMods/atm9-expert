// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// Adds every custom ore as a possible Eldritch Miner output at weight 1.
// Assumes ore item id pattern: gtceu:<name>_ore
// Assumes ore tag pattern:     forge:ores/<name>
// Verify both assumptions against 2-3 entries in-game before trusting the full list.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    const customOres = [
        { ore: 'hellish', weight: 500 },
        { ore: 'terraria', weight: 500 },
        { ore: 'tenebrius', weight: 1 },
        { ore: 'bedrockium', weight: 1 }
    ];


    function parseItemRef(ref) {
        if (typeof ref === 'string') {
            return ref;
        }
        if (ref && typeof ref === 'object') {
            if (ref.tag) {
                return `#${ref.tag}`;
            }
            if (ref.item) {
                let count = ref.count || 1;
                return count > 1 ? `${count}x ${ref.item}` : ref.item;
            }
        }
        return null;
    }
    function bareNameForId(itemRef) {
        return itemRef.replace(/^#/, '').replace(/^\d+x\s*/i, '');
    }

    allthemods.forEachRecipe({ type: 'evilcraft:blood_infuser' }, recipe => {
        let data = JSON.parse(recipe.json);

        let inputItem = parseItemRef(data.item);
        let outputItem = parseItemRef(data.result ? data.result.item : null);


        if (!outputItem || !inputItem) {
            //console.error(`[bio_electrical_infuser] Skipping ${recipe.id} - non-string item reference`);
            return;
        }

        let inputID = bareNameForId(inputItem).replace(/[:# ]/g, '_');
        let outputID = bareNameForId(outputItem).replace(/[:# ]/g, '_');
        let recipeId = String(`gregification:bio_electrical_infuser/${inputID}_to_${outputID}`);

        let bio_recipe = allthemods.recipes.gtceu.bio_electrical_infuser(recipeId)
            .itemInputs(inputItem)
            .itemOutputs(outputItem)
            .duration(data.duration);

        switch (outputItem) {
            case 'evilcraft:bowl_of_promises_tier0':
                bio_recipe.circuit(4);
                break;
            case 'evilcraft:bowl_of_promises_tier1':
                bio_recipe.circuit(1);
                break;
            case 'evilcraft:bowl_of_promises_tier2':
                bio_recipe.circuit(2);
                break;
            case 'evilcraft:bowl_of_promises_tier3':
                bio_recipe.circuit(3);
                break;
            default:
                break;
        }

        if (data.fluid) {
            bio_recipe.inputFluids(`#forge:blood ${data.fluid.amount}`);
        }

        switch (data.tier) {
            case 1: bio_recipe.notConsumable('evilcraft:promise_tier_1'); bio_recipe.EUt(EV); break;
            case 2: bio_recipe.notConsumable('evilcraft:promise_tier_2'); bio_recipe.EUt(IV); break;
            case 3: bio_recipe.notConsumable('evilcraft:promise_tier_3'); bio_recipe.EUt(LuV); break;
            default: bio_recipe.EUt(HV); break;
        }
    });

    allthemods.recipes.gtceu.bio_electrical_infuser('gregification:bio_electrical_infuser/weakblood_orb_to_bound_blood_drop')
        .itemInputs('#forge:blood_orb')
        .itemOutputs('evilcraft:bound_blood_drop')
        .inputFluids('#forge:blood 10000')
        .duration(1000)
        .notConsumable('evilcraft:promise_tier_2')
        .EUt(IV)

    allthemods.recipes.gtceu.bio_electrical_infuser('gregification:bio_electrical_infuser/blood_coated_blade')
        .itemInputs(
            [
                'gtceu:tungsten_carbide_buzz_saw_blade',
                '4x #forge:plates/unobtainium',
                '4x #forge:plates/vibranium',
                '4x #forge:plates/nitro_crystal',
                '#forge:exquisite_gems/soul',
                '16x gtceu:carbon_fiber_plate'
            ])
        .itemOutputs('gtceu:blood_coated_blade')
        .inputFluids('#forge:blood 64000')
        .notConsumable('evilcraft:promise_tier_3')
        .duration(1000)
        .EUt(IV)

    allthemods.recipes.gtceu.assembler('gregification:craft_otherstone_casing')
        .itemInputs(
            '4x occultism:otherstone',
            '#forge:plates/umbral_steel',
            '#forge:plates/silver'
        )
        .itemOutputs('2x gtceu:otherstone_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_spirit_flame_casing')
        .itemInputs(
            '2x gtceu:otherstone_casing',
            '#forge:gems/glass',
            '2x #forge:plates/silver'
        )
        .itemOutputs('2x gtceu:spirit_flame_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_ritual_brass_casing')
        .itemInputs(
            '2x gtceu:otherstone_casing',
            '4x #forge:plates/brass',
            '#forge:plates/gold'
        )
        .itemOutputs('2x gtceu:ritual_brass_casing')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:craft_dark_gem_casing')
        .itemInputs(
            '4x evilcraft:dark_gem',
            '#forge:plates/umbral_steel',
            '#forge:plates/silver'
        )
        .itemOutputs('2x gtceu:dark_gem_casing')
        .duration(100)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:craft_blood_vein_casing')
        .itemInputs(
            '2x gtceu:dark_gem_casing',
            '2x bloodmagic:bloodstonebrick',
            '#forge:plates/deorum'
        )
        .itemOutputs('2x gtceu:blood_vein_casing')
        .duration(100)
        .EUt(MV);
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
