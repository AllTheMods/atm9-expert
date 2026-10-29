// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.highPriorityData(allthemods => {
    let addMeteorWithCore = (id, explosionRadius, input, coreBlock, innerRadius, outerRadius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": coreBlock
                    },
                    "minWeight": 0,
                    "radius": innerRadius
                  },
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": outerRadius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        allthemods.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }

    let addMeteor = (id, explosionRadius, input, radius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": radius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        allthemods.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }

    const tiers = {
        1: 750000,
        2: 1500000,
        3: 2500000,
        4: 5000000,
        5: 7500000,
        6: 10000000
    };

    


    const explosionRadius = {
        tiny: 6,
        small: 8,
        medium: 12,
        large: 16,
        veryLarge: 24
    };

    const meteors = [
        {
            name: 'iesnium_hellforged',
            activator: 'bloodmagic:demonslate',
            syphon: tiers[2],
            filler: 'minecraft:stone',
            explosionRadius: explosionRadius.small,
            radius: 4,
            weightMap: [
                { "block": "gtceu:hellish_ore", "weight": 650 }
            ]
        },
        {
            name: 'tenebrius',
            activator: 'gtceu:bedrockium_block',
            syphon: tiers[6],
            filler: 'minecraft:end_stone',
            explosionRadius: explosionRadius.veryLarge,
            radius: 8,
            weightMap: [
                { "block": "gtceu:endstone_tenebrius_ore", "weight": 500 },                
                { "block": "gtceu:hellish_ore", "weight": 250 }
            ]
        },
        {
            name: 'endgtores',
            activator: 'gtceu:naquadah_block',
            syphon: tiers[3],
            filler: 'minecraft:end_stone',
            explosionRadius: explosionRadius.tiny,
            radius: 3,
            weightMap: [
                { "block": "gtceu:endstone_naquadah_ore", "weight": 200 },
                { "block": "gtceu:endstone_plutonium_ore", "weight": 200 },
                { "block": "gtceu:endstone_tungstate_ore", "weight": 400 }
            ]
        },
        {
            name: 'nethergtores',
            activator: 'gtceu:block_titanium',
            syphon: tiers[2],
            filler: 'minecraft:netherrack',
            explosionRadius: explosionRadius.small,
            radius: 4,
            weightMap: [
                { "block": "gtceu:netherrack_sphalerite_ore", "weight": 200 },
                { "block": "gtceu:netherrack_sulfur_ore", "weight": 300 },
                { "block": "gtceu:netherrack_tetrahedrite_ore", "weight": 300 }
            ]
        },
        {
            name: 'overworldgtores',
            activator: 'gtceu:arsenic_dust',
            syphon: tiers[1],
            filler: 'minecraft:cobblestone',
            explosionRadius: explosionRadius.small,
            radius: 4,
            weightMap: [
                { "block": "gtceu:tantalite_ore", "weight": 200 },
                { "block": "gtceu:vanadium_magnetite_ore", "weight": 200 },
                { "block": "gtceu:cobaltite_ore", "weight": 400 }
            ]
        },
        {
            name: 'allthemodium',
            activator: 'allthetweaks:atm_star',
            syphon: tiers[3],
            filler: 'allthemodium:ancient_stone',
            explosionRadius: explosionRadius.medium,
            radius: 3,
            weightMap: [
                { "block": "allthemodium:unobtainium_ore", "weight": 100 },
                { "block": "allthemodium:vibranium_ore", "weight": 200 },
                { "block": "allthemodium:allthemodium_ore", "weight": 400 }
            ]
        },
        {
            name: 'palladium',
            activator: 'gtceu:palladium_block',
            syphon: tiers[3],
            filler: 'minecraft:end_stone',
            explosionRadius: explosionRadius.tiny,
            radius: 3,
            weightMap: [
                { "block": "gtceu:endstone_chromite_ore", "weight": 300 },
                { "block": "gtceu:endstone_bauxite_ore", "weight": 300 },
                { "block": "gtceu:endstone_palladium_ore", "weight": 200 }
            ]
        },
        {
            name: 'endgtores_big',
            activator: 'gtceu:uranium_rhodium_dinaquadide_block',
            syphon: tiers[4],
            filler: 'minecraft:end_stone',
            explosionRadius: explosionRadius.medium,
            radius: 6,
            weightMap: [
                { "block": "gtceu:endstone_naquadah_ore", "weight": 200 },
                { "block": "gtceu:endstone_plutonium_ore", "weight": 200 },
                { "block": "gtceu:endstone_tungstate_ore", "weight": 400 }
            ]
        },
        {
            name: 'nethergtores_big',
            activator: 'gtceu:indium_tin_barium_titanium_cuprate_block',
            syphon: tiers[3],
            filler: 'minecraft:netherrack',
            explosionRadius: explosionRadius.large,
            radius: 8,
            weightMap: [
                { "block": "gtceu:netherrack_sphalerite_ore", "weight": 200 },
                { "block": "gtceu:netherrack_sulfur_ore", "weight": 300 },
                { "block": "gtceu:netherrack_tetrahedrite_ore", "weight": 300 }
            ]
        },
        {
            name: 'overworldgtores_big',
            activator: 'gtceu:samarium_iron_arsenic_oxide_block',
            syphon: tiers[2],
            filler: 'minecraft:cobblestone',
            explosionRadius: explosionRadius.large,
            radius: 8,
            weightMap: [
                { "block": "gtceu:tantalite_ore", "weight": 200 },
                { "block": "gtceu:vanadium_magnetite_ore", "weight": 200 },
                { "block": "gtceu:cobaltite_ore", "weight": 400 }
            ]
        },        
        {
            name: 'palladium_big',
            activator: 'gtceu:rhodium_plated_palladium_block',
            syphon: tiers[4],
            filler: 'minecraft:end_stone',
            explosionRadius: explosionRadius.medium,
            radius: 6,
            weightMap: [
                { "block": "gtceu:endstone_chromite_ore", "weight": 300 },
                { "block": "gtceu:endstone_bauxite_ore", "weight": 300 },
                { "block": "gtceu:endstone_palladium_ore", "weight": 200 }
            ]
        },
        {
            name: 'intricate_parts',
            activator: 'bloodmagic:hellforgedparts',
            syphon: tiers[4],
            coreBlock: 'bloodmagic:dungeon_ore',
            innerRadius: 1,
            outerRadius: 3,
            filler: 'bloodmagic:dungeon_stone',
            explosionRadius: explosionRadius.medium,
            weightMap: [
                { "block": "bloodmagic:dungeon_ore", "weight": 400 },
                { "block": "bloodmagic:speedrune2", "weight": 30 }
            ]
        },
        {
            name: 'diamond_block',
            activator: 'allthecompressed:diamond_block_1x',
            syphon: tiers[2],
            coreBlock: 'minecraft:diamond_block',
            innerRadius: 2,
            outerRadius: 8,
            filler: 'minecraft:stone',
            explosionRadius: explosionRadius.large,
            weightMap: [
                { "block": "minecraft:diamond_ore", "weight": 200 },
                { "block": "minecraft:emerald_ore", "weight": 200 },
                { "block": "minecraft:coal_ore", "weight": 400 }
            ]
        },
        {
            name: 'netherstar',
            activator: 'allthecompressed:nether_star_block_1x',
            syphon: tiers[5],
            coreBlock: 'allthetweaks:nether_star_block',
            innerRadius: 2,
            outerRadius: 5,
            filler: 'minecraft:soul_sand',
            explosionRadius: explosionRadius.veryLarge,
            weightMap: [
                { "block": "minecraft:wither_skeleton_skull", "weight": 100 },
                { "block": "allthetweaks:nether_star_block", "weight": 50 }
            ]
        },
        {
            name: 'intricate_parts_big',
            activator: 'allthetweaks:withers_compass',
            syphon: tiers[6],
            coreBlock: 'bloodmagic:dungeon_ore',
            innerRadius: 4,
            outerRadius: 6,
            filler: 'bloodmagic:dungeon_stone',
            explosionRadius: explosionRadius.veryLarge,
            weightMap: [
                { "block": "bloodmagic:dungeon_ore", "weight": 400 },
                { "block": "bloodmagic:speedrune2", "weight": 30 }
            ]
        },
        {
            name: 'terraria',
            activator: 'gtceu:gaia_block',
            syphon: tiers[4],
            coreBlock: 'gtceu:terrasteel_block',
            innerRadius: 1,
            outerRadius: 5,
            filler: 'botania:livingrock',
            explosionRadius: explosionRadius.large,
            weightMap: [
                { "block": "gtceu:endstone_terraria_ore", "weight": 400 },
                { "block": "gtceu:elementium_block", "weight": 50},
                { "block": "gtceu:manasteel_block", "weight": 100},
            ]
        }        
    ];

    meteors.forEach(meteor => {
        if (meteor.coreBlock) {
            addMeteorWithCore(
                meteor.name,
                meteor.explosionRadius,
                { "item": meteor.activator },
                meteor.coreBlock,
                meteor.innerRadius,
                meteor.outerRadius,
                meteor.filler,
                meteor.weightMap,
                meteor.syphon
            );
        } else {
            addMeteor(
                meteor.name,
                meteor.explosionRadius,
                { "item": meteor.activator },
                meteor.radius,
                meteor.filler,
                meteor.weightMap,
                meteor.syphon
            );
        }
    });
    

    
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
