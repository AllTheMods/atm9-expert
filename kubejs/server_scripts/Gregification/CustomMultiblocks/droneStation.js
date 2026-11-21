// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    const pirateDrone = Item.of('forestry:bee_drone_ge', '{ForgeCaps:{Parent:{analyzed:0b,genome:{"forestry:activity":{active:"forestry:activity_diurnal",inactive:"forestry:activity_diurnal"},"forestry:bee_effect":{active:"forestry:bee_effect_none",inactive:"forestry:bee_effect_none"},"forestry:bee_species":{active:"forestry:bee_pirate",inactive:"forestry:bee_pirate"},"forestry:cave_dwelling":{active:"forestry:trued",inactive:"forestry:trued"},"forestry:fertility":{active:"forestry:1id",inactive:"forestry:1id"},"forestry:flower_type":{active:"forestry:flower_type_wheat",inactive:"forestry:flower_type_wheat"},"forestry:humidity_tolerance":{active:"forestry:tolerance_both_1d",inactive:"forestry:tolerance_both_1d"},"forestry:lifespan":{active:"forestry:50i",inactive:"forestry:50i"},"forestry:pollination":{active:"forestry:30i",inactive:"forestry:30i"},"forestry:speed":{active:"forestry:0.6fd",inactive:"forestry:0.6fd"},"forestry:temperature_tolerance":{active:"forestry:tolerance_both_1d",inactive:"forestry:tolerance_both_1d"},"forestry:territory":{active:"forestry:9_6_9",inactive:"forestry:9_6_9"},"forestry:tolerates_rain":{active:"forestry:falsed",inactive:"forestry:falsed"}},health:50,max_heath:50,pristine:1b}}}');
    const steadfastDrone = Item.of('forestry:bee_drone_ge', '{ForgeCaps:{Parent:{analyzed:0b,genome:{"forestry:activity":{active:"forestry:activity_diurnal",inactive:"forestry:activity_diurnal"},"forestry:bee_effect":{active:"forestry:bee_effect_none",inactive:"forestry:bee_effect_none"},"forestry:bee_species":{active:"forestry:bee_steadfast",inactive:"forestry:bee_steadfast"},"forestry:cave_dwelling":{active:"forestry:trued",inactive:"forestry:trued"},"forestry:fertility":{active:"forestry:1id",inactive:"forestry:1id"},"forestry:flower_type":{active:"forestry:flower_type_wheat",inactive:"forestry:flower_type_wheat"},"forestry:humidity_tolerance":{active:"forestry:tolerance_both_1d",inactive:"forestry:tolerance_both_1d"},"forestry:lifespan":{active:"forestry:50i",inactive:"forestry:50i"},"forestry:pollination":{active:"forestry:30i",inactive:"forestry:30i"},"forestry:speed":{active:"forestry:0.6fd",inactive:"forestry:0.6fd"},"forestry:temperature_tolerance":{active:"forestry:tolerance_both_1d",inactive:"forestry:tolerance_both_1d"},"forestry:territory":{active:"forestry:9_6_9",inactive:"forestry:9_6_9"},"forestry:tolerates_rain":{active:"forestry:falsed",inactive:"forestry:falsed"}},health:50,max_heath:50,pristine:1b}}}');
    const monasticDrone = Item.of('forestry:bee_drone_ge', '{ForgeCaps:{Parent:{analyzed:0b,genome:{"forestry:activity":{active:"forestry:activity_diurnal",inactive:"forestry:activity_diurnal"},"forestry:bee_effect":{active:"forestry:bee_effect_none",inactive:"forestry:bee_effect_none"},"forestry:bee_species":{active:"forestry:bee_monastic",inactive:"forestry:bee_monastic"},"forestry:cave_dwelling":{active:"forestry:trued",inactive:"forestry:trued"},"forestry:fertility":{active:"forestry:1id",inactive:"forestry:1id"},"forestry:flower_type":{active:"forestry:flower_type_wheat",inactive:"forestry:flower_type_wheat"},"forestry:humidity_tolerance":{active:"forestry:tolerance_both_1d",inactive:"forestry:tolerance_both_1d"},"forestry:lifespan":{active:"forestry:50i",inactive:"forestry:50i"},"forestry:pollination":{active:"forestry:30i",inactive:"forestry:30i"},"forestry:speed":{active:"forestry:0.6fd",inactive:"forestry:0.6fd"},"forestry:temperature_tolerance":{active:"forestry:tolerance_both_1d",inactive:"forestry:tolerance_both_1d"},"forestry:territory":{active:"forestry:9_6_9",inactive:"forestry:9_6_9"},"forestry:tolerates_rain":{active:"forestry:falsed",inactive:"forestry:falsed"}},health:50,max_heath:50,pristine:1b}}}');
    const shulkingDrone = Item.of('forestry:bee_drone_ge', '{ForgeCaps:{Parent:{analyzed:0b,genome:{"forestry:activity":{active:"forestry:activity_diurnal",inactive:"forestry:activity_diurnal"},"forestry:bee_effect":{active:"forestry:bee_effect_none",inactive:"forestry:bee_effect_none"},"forestry:bee_species":{active:"forestry:bee_shulking",inactive:"forestry:bee_shulking"},"forestry:cave_dwelling":{active:"forestry:trued",inactive:"forestry:trued"},"forestry:fertility":{active:"forestry:1id",inactive:"forestry:1id"},"forestry:flower_type":{active:"forestry:flower_type_wheat",inactive:"forestry:flower_type_wheat"},"forestry:humidity_tolerance":{active:"forestry:tolerance_both_1d",inactive:"forestry:tolerance_both_1d"},"forestry:lifespan":{active:"forestry:50i",inactive:"forestry:50i"},"forestry:pollination":{active:"forestry:30i",inactive:"forestry:30i"},"forestry:speed":{active:"forestry:0.6fd",inactive:"forestry:0.6fd"},"forestry:temperature_tolerance":{active:"forestry:tolerance_both_1d",inactive:"forestry:tolerance_both_1d"},"forestry:territory":{active:"forestry:9_6_9",inactive:"forestry:9_6_9"},"forestry:tolerates_rain":{active:"forestry:falsed",inactive:"forestry:falsed"}},health:50,max_heath:50,pristine:1b}}}');
    const amberBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:amber"}}');
    const sussyBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:sussy"}}');

    const destinations = [
        ['overworld', [
            ['gtceu:tier_1_rocket_schematic', 5],
            ['gtceu:tier_2_rocket_schematic', 5],
            ['allthemodium:allthemodium_upgrade_smithing_template', 2],
            ['productivetrees:blue_yonder_sapling', 6],
            ['productivetrees:brown_amber_sapling', 6],
            [pirateDrone, 8],
            [steadfastDrone, 8],
            ['minecraft:heart_of_the_sea', 4],
            ['minecraft:nautilus_shell', 10],
            ['minecraft:sniffer_egg', 4],
            ['64x croptopia:mountain_salt', 30],
            ['16x croptopia:tuna_sandwich', 25],
            ['forbidden_arcanus:elementarium', 20]
        ], 'minecraft:overworld'],
        ['nether', [
            ['gtceu:tier_3_rocket_schematic', 3],
            ['allthemodium:vibranium_upgrade_smithing_template', 2],
            ['forbidden_arcanus:artisan_relic', 1],
            ['productivetrees:black_ember_sapling', 6],
            ['productivetrees:firecracker_sapling', 6],
            [amberBee, 8],
            [sussyBee, 8],
            ['minecraft:netherite_scrap', 12],
            ['minecraft:ancient_debris', 6],
            ['minecraft:wither_skeleton_skull', 5],
            ['minecraft:crying_obsidian', 20],
            ['minecraft:netherite_upgrade_smithing_template', 2],
            ['forbidden_arcanus:crimson_stone', 10],
            ['forbidden_arcanus:maledictus_pact', 20]
        ], 'minecraft:the_nether'],
        ['end', [
            ['gtceu:tier_4_rocket_schematic', 3],
            ['allthemodium:unobtainium_upgrade_smithing_template', 2],
            ['forbidden_arcanus:crescent_moon', 1],
            ['gtceu:solar_relic', 1],
            ['productivetrees:soul_tree_sapling', 6],
            ['productivetrees:flickering_sun_sapling', 6],
            [shulkingDrone, 8],
            [steadfastDrone, 8],
            [monasticDrone, 8],
            ['minecraft:dragon_breath', 15],
            ['minecraft:elytra', 2],
            ['minecraft:dragon_head', 4],
            ['forbidden_arcanus:divine_pact', 10]
        ], 'minecraft:the_end']
    ];

    const droneDuration = 10000;
    const droneFuel = '#forge:kerosene 4000';
    const droneEut = EV;
    const drone = Item.of('pneumaticcraft:collector_drone').weakNBT();

    destinations.forEach((destination, index) => {
        const recipe = allthemods.recipes.gtceu.drone_station('gregification:drone_destination_' + destination[0])
            .itemInputs(drone, 'gtceu:titanium_crate')            
            .notConsumable('gtceu:' + destination[0] + '_destination_card')
            .inputFluids(droneFuel)
            .duration(droneDuration)
            .EUt(droneEut)
            .circuit(index + 1)
            .dimension(destination[2]);

        destination[1].forEach(entry => {
            recipe.chancedOutput(entry[0], entry[1] * 100, 500);
        });
    });
    /*
    allthemods.recipes.gtceu.drone_station('gregification:forbidden_search')
        .chancedInput(drone, 2500, -500)
        .itemInputs('forbidden_arcanus:dark_nether_star')
        .chancedOutput('forbidden_arcanus:artisan_relic', 100, 100)
        .chancedOutput('forbidden_arcanus:crescent_moon', 100, 100)
        .chancedOutput('gtceu:solar_relic', 100, 100)
        .chancedOutput('forbidden_arcanus:crimson_stone', 1000, 1000)
        .chancedOutput('forbidden_arcanus:elementarium', 2000, 1000)
        .chancedOutput('forbidden_arcanus:divine_pact', 1000, 1000)
        .chancedOutput('forbidden_arcanus:maledictus_pact', 2000, 1000)
        .inputFluids('#forge:kerosene 10000')
        .duration(8000)
        .EUt(EV)
        .circuit(5);

    allthemods.recipes.gtceu.drone_station('gregification:tier_1_rocket_schematic_from_drone')
        .chancedInput(drone, 2500, -500)
        .chancedOutput('gtceu:tier_1_rocket_schematic', 2500, 1000)
        .inputFluids('#forge:kerosene 4000')
        .duration(10000)
        .EUt(EV)
        .circuit(1);

    allthemods.recipes.gtceu.drone_station('gregification:tier_2_rocket_schematic_from_drone')
        .chancedInput(drone, 2500, -500)
        .chancedOutput('gtceu:tier_2_rocket_schematic', 2500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:hafnium 1440'])
        .duration(10000)
        .EUt(IV)
        .circuit(2);

    allthemods.recipes.gtceu.drone_station('gregification:tier_3_rocket_schematic_from_drone')
        .chancedInput(drone, 2500, -500)
        .chancedOutput('gtceu:tier_3_rocket_schematic', 2500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:scandium 1440'])
        .duration(10000)
        .EUt(LuV)
        .circuit(3);

    allthemods.recipes.gtceu.drone_station('gregification:tier_4_rocket_schematic_from_drone')
        .chancedInput(drone, 2500, -500)
        .chancedOutput('gtceu:tier_4_rocket_schematic', 2500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:thallium 1440'])
        .duration(10000)
        .EUt(ZPM)
        .circuit(4);

    allthemods.recipes.gtceu.drone_station('gregification:allthemodium_upgrade')
        .chancedInput(drone, 2500, -500)
        .itemInputs('2x #forge:storage_blocks/allthemodium')
        .chancedOutput('allthemodium:allthemodium_upgrade_smithing_template', 1500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:hafnium 1440'])
        .duration(10000)
        .EUt(EV)
        .circuit(11);

    allthemods.recipes.gtceu.drone_station('gregification:vibranium_upgrade')
        .chancedInput(drone, 2500, -500)
        .itemInputs('4x #forge:storage_blocks/vibranium')
        .chancedOutput('allthemodium:vibranium_upgrade_smithing_template', 1500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:scandium 1440'])
        .duration(10000)
        .EUt(EV)
        .circuit(12);

    allthemods.recipes.gtceu.drone_station('gregification:unobtainium_upgrade')
        .chancedInput(drone, 2500, -500)
        .itemInputs('8x #forge:storage_blocks/unobtainium')
        .chancedOutput('allthemodium:unobtainium_upgrade_smithing_template', 1500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:thallium 1440'])
        .duration(10000)
        .EUt(EV)
        .circuit(13);*/
});