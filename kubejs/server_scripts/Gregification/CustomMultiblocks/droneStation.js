// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    const IForestryApi = Java.loadClass('forestry.api.IForestryApi');
    const ForestrySpeciesTypes = Java.loadClass('forestry.api.genetics.ForestrySpeciesTypes');
    const BeeLifeStage = Java.loadClass('forestry.api.apiculture.genetics.BeeLifeStage');
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

    function createForestryDrone(speciesId) {
        const beeType = IForestryApi.INSTANCE.getGeneticManager().getSpeciesType(ForestrySpeciesTypes.BEE);
        const species = beeType.getSpecies(new ResourceLocation(speciesId));
        return species.createStack(BeeLifeStage.DRONE);
    }

    const pirateDrone = createForestryDrone('forestry:bee_pirate');
    const steadfastDrone = createForestryDrone('forestry:bee_steadfast');
    const monasticDrone = createForestryDrone('forestry:bee_monastic');
    const shulkingDrone = createForestryDrone('forestry:bee_shulking');
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
            ['forbidden_arcanus:elementarium', 20],
            ['forestry:amber_sapling', 6],
            ['forestry:amber_drone', 8],
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

        const json = recipe.json.toString();
        const at = json.indexOf('bee_drone_ge');
        console.log('DRONE-PROBE json ' + destination[0] + ' ' + (at === -1 ? 'no drone in recipe' : json.substring(Math.max(0, at - 150), at + 600)));
    });
  
});