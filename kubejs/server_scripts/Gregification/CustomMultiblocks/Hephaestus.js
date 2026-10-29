// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const hephaestus = (inputs, fluids, outputs, duration, eu, nonConsumables, customID, program) => {

        let id

        if (customID) {
            id = customID
        }
        else {
            let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
            let outputName = firstOutput.toString().replace(/^\d+[x ]\s*/, '').split(':').pop().replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase();
            id = `gregification:hephaestus_forge/${outputName}`;
        }

        let recipe = allthemods.recipes.gtceu.hephaestus_forge(id)
            .itemInputs(inputs)
            .itemOutputs(outputs)
            .duration(duration)
            .EUt(eu);

        if (fluids && fluids.length > 0) {
            recipe.inputFluids(fluids);
        }
        /*
        if (nonConsumables && nonConsumables.length > 0) {            
                recipe.notConsumable(nonConsumables);            
        }*/
        if (nonConsumables) {
            // If it's an Array, loop through it.
            if (Array.isArray(nonConsumables) && nonConsumables.length > 0) {
                nonConsumables.forEach(item => {
                    recipe.notConsumable(item);
                });
            }
            // If it's a single item (not an array), add it directly.
            else if (!Array.isArray(nonConsumables)) {
                recipe.notConsumable(nonConsumables);
            }
        }
        if (program) {
            recipe.circuit(program);
        }
    };

    const saplings = ["forbidden_arcanus:growing_edelwood", "ars_nouveau:blue_archwood_sapling", "ars_nouveau:red_archwood_sapling", "ars_nouveau:purple_archwood_sapling", "ars_nouveau:green_archwood_sapling", "ars_elemental:yellow_archwood_sapling"]


    //saplings
    saplings.forEach((sapling, index) => {

        hephaestus(
            [
                "64x #forge:sapling",
            ],
            [
                "gtceu:aureal 1000",
                "#forge:soul 10",
                '#forge:blood 1000',
                "gtceu:distilled_water 10000"
            ],
            //"forbidden_arcanus:growing_edelwood",
            sapling,
            120,
            IV, [], null, index
        )
    });

    //sea prism
    hephaestus(
        [
            "minecraft:heart_of_the_sea",
            "2x #forge:dusts/prismarine",
            "2x minecraft:scute",
            "2x #forge:gems/lapis"
        ],
        [
            "gtceu:aureal 1000",
            "#forge:soul 8",
            '#forge:blood 2000'
        ],
        "forbidden_arcanus:sea_prism",
        1200,
        IV,
        "forbidden_arcanus:elementarium"
    )

    //smelter prism
    hephaestus(
        [
            "#forge:storage_blocks/arcane_crystal",
            "2x #forge:gems/coal",
            "2x #forge:dusts/blaze"
        ],
        [
            "gtceu:aureal 200",
            "#forge:soul 4",
            '#forge:blood 1250'
        ],
        "forbidden_arcanus:smelter_prism",
        1200,
        IV,
        "forbidden_arcanus:elementarium"
    )

    //terrastom prism
    hephaestus(
        [
            "#forge:storage_blocks/diamond",
            "2x #forge:gems/flint",
            "2x minecraft:dripstone_block",
            "2x minecraft:pointed_dripstone"
        ],
        [
            "gtceu:aureal 300",
            "#forge:soul 9",
            '#forge:blood 1500'
        ],
        "forbidden_arcanus:terrastomp_prism",
        1200,
        IV,
        "forbidden_arcanus:elementarium"
    )

    //whirlwind prism
    hephaestus(
        [
            "#forge:wool",
            "forbidden_arcanus:bat_wing",
            "2x #forge:feathers",
            "3x minecraft:phantom_membrane"
        ],
        [
            "gtceu:aureal 1000",
            "#forge:soul 3",
            '#forge:blood 2250'
        ],
        "forbidden_arcanus:whirlwind_prism",
        1200,
        IV,
        "forbidden_arcanus:elementarium"
    )

    //eternal stella
    hephaestus(
        [
            "4x #forge:double_plates/allthemodium",
            "3x forbidden_arcanus:xpetrified_orb",
            "1x forbidden_arcanus:stellarite_piece"
        ],
        [
            "gtceu:aureal 1000",
            "#forge:soul 500",
            '#forge:blood 1000'
        ],
        "forbidden_arcanus:eternal_stella",
        1200,
        LuV,
        null
    )

    //ferrognetic mixture
    hephaestus(
        [
            "evilcraft:garmonbozia",
            "#forge:wax",
            "#forge:ingots/dark_steel",
            "#forge:ingots/pink_slime",
            "#forge:ingots/hellforged",
            "#forge:ingots/iesnium",
            "#forge:ingots/elementium",
        ],
        [
            "gtceu:aureal 100",
            "#forge:soul 20",
            '#forge:blood 2000'
        ],
        "forbidden_arcanus:ferrognetic_mixture",
        400,
        IV,
        null
    )

    //stellarite bee
    hephaestus(
        [
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:diamond"}}').strongNBT(),
            "4x forbidden_arcanus:xpetrified_orb",
            "2x forbidden_arcanus:eternal_stella"
        ],
        [
            "gtceu:aureal 82",
            "#forge:soul 1",
            '#forge:blood 1000'
        ],
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:stellarite"}}').strongNBT(),
        1200,
        LuV,
        null,
        "stellarite_bee"
    )

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
