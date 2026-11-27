// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

(function () {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    const droneDuration = 10000;
    const droneFuelAmount = 4000;
    const droneEut = EV;

    const droneDestinations = [
        ['overworld', 'minecraft:overworld', [
            ['gtceu:tier_1_rocket_schematic', 5],
            ['gtceu:tier_2_rocket_schematic', 5],
            ['allthemodium:allthemodium_upgrade_smithing_template', 2],
            ['productivetrees:blue_yonder_sapling', 6],
            ['productivetrees:brown_amber_sapling', 6],
            [{ drone: 'forestry:bee_pirate' }, 8],
            [{ drone: 'forestry:bee_steadfast' }, 8],
            ['minecraft:heart_of_the_sea', 4],
            ['minecraft:nautilus_shell', 10],
            ['minecraft:sniffer_egg', 4],
            ['64x croptopia:mountain_salt', 30],
            ['16x croptopia:tuna_sandwich', 25],
            ['forbidden_arcanus:elementarium', 20],
            ['forestry:amber_sapling', 6],
            ['forestry:amber_drone', 8]
        ]],
        ['nether', 'minecraft:the_nether', [
            ['gtceu:tier_3_rocket_schematic', 3],
            ['allthemodium:vibranium_upgrade_smithing_template', 2],
            ['forbidden_arcanus:artisan_relic', 1],
            ['productivetrees:black_ember_sapling', 6],
            ['productivetrees:firecracker_sapling', 6],
            [{ egg: 'productivebees:amber' }, 8],
            [{ egg: 'productivebees:sussy' }, 8],
            ['minecraft:netherite_scrap', 12],
            ['minecraft:ancient_debris', 6],
            ['minecraft:wither_skeleton_skull', 5],
            ['minecraft:crying_obsidian', 20],
            ['minecraft:netherite_upgrade_smithing_template', 2],
            ['forbidden_arcanus:crimson_stone', 10],
            ['forbidden_arcanus:maledictus_pact', 20]
        ]],
        ['end', 'minecraft:the_end', [
            ['gtceu:tier_4_rocket_schematic', 3],
            ['allthemodium:unobtainium_upgrade_smithing_template', 2],
            ['forbidden_arcanus:crescent_moon', 1],
            ['gtceu:solar_relic', 1],
            ['productivetrees:soul_tree_sapling', 6],
            ['productivetrees:flickering_sun_sapling', 6],
            [{ drone: 'forestry:bee_shulking' }, 8],
            [{ drone: 'forestry:bee_steadfast' }, 8],
            [{ drone: 'forestry:bee_monastic' }, 8],
            ['minecraft:dragon_breath', 15],
            ['minecraft:elytra', 2],
            ['minecraft:dragon_head', 4],
            ['forbidden_arcanus:divine_pact', 10]
        ]]
    ];

    function droneEntry(content, chance, maxChance, boost) {
        return { content: content, chance: chance, maxChance: maxChance, tierChanceBoost: boost };
    }

    function droneSized(ingredient, count) {
        return { type: 'gtceu:sized', count: count, ingredient: ingredient };
    }

    function droneOutput(entry) {
        var item = entry[0];
        var count = 1;
        var ingredient;
        if (typeof item === 'string') {
            var parsed = /^(\d+)x (.+)$/.exec(item);
            if (parsed) {
                count = Number(parsed[1]);
                item = parsed[2];
            }
            ingredient = { item: item };
        } else if (item.drone) {
            ingredient = { type: 'gtextras:forestry_individual', species: item.drone, stage: 'drone' };
        } else {
            ingredient = { type: 'forge:nbt', item: 'productivebees:spawn_egg_configurable_bee', count: 1, nbt: '{EntityTag:{type:"' + item.egg + '"}}' };
        }
        return droneEntry(droneSized(ingredient, count), entry[1] * 100, 10000, 500);
    }

    ServerEvents.highPriorityData(event => {
        droneDestinations.forEach((destination, index) => {
            var outputs = [];
            destination[2].forEach(entry => {
                outputs.push(droneOutput(entry));
            });
            event.addJson('gregification:recipes/drone_destination_' + destination[0], {
                type: 'gtceu:drone_station',
                duration: droneDuration,
                recipeConditions: [{ dimension: destination[1], type: 'dimension' }],
                inputs: {
                    item: [
                        droneEntry(droneSized({ item: 'pneumaticcraft:collector_drone' }, 1), 10000, 10000, 0),
                        droneEntry(droneSized({ item: 'gtceu:titanium_crate' }, 1), 10000, 10000, 0),
                        droneEntry(droneSized({ item: 'gtceu:' + destination[0] + '_destination_card' }, 1), 0, 10000, 0),
                        droneEntry(droneSized({ type: 'gtceu:circuit', configuration: index + 1 }, 1), 0, 10000, 0)
                    ],
                    fluid: [
                        droneEntry({ amount: droneFuelAmount, value: [{ tag: 'forge:kerosene' }] }, 10000, 10000, 0)
                    ]
                },
                tickInputs: { eu: [droneEntry(droneEut, 10000, 10000, 0)] },
                outputs: { item: outputs }
            });
        });
    });

    const IIndividualHandlerItem = Java.loadClass('forestry.api.genetics.capability.IIndividualHandlerItem');

    ServerEvents.customCommand('probe', event => {
        var seen = 0;
        event.server.recipeManager.getRecipes().forEach(r => {
            try {
                var id = String(r.id);
                if (id.indexOf('drone') === -1 && id.indexOf('kjs/') === -1) return;
                var outs = r.outputs;
                if (!outs) return;
                outs.forEach((cap, contents) => {
                    contents.forEach(c => {
                        var text = String(c.content.toJson());
                    if (text.indexOf('forestry_individual') === -1 && text.indexOf('bee_drone_ge') === -1) return;
                        var species = 'none';
                        try {
                            species = String(IIndividualHandlerItem.getIndividual(c.content.getFirst()).getSpecies().id());
                        } catch (e) {
                            species = 'ERROR ' + e;
                        }
                        seen++;
                        console.log('DRONE-LOADED ' + id + ' species=' + species);
                    });
                });
            } catch (e) {
            }
        });
        console.log('PROBE-DONE drones=' + seen);
    });

})();