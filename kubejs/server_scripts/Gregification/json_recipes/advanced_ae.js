// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(event => {
    event.custom({
        type: 'advanced_ae:reaction',
        energy: 150000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:water'
            }
        },
        input_items: [
            {
                amount: 64,
                ingredient: { tag: 'forge:dusts/nether_quartz' }
            }
        ],
        output: {
            '#': 64,
            '#c': 'ae2:i',
            id: 'minecraft:quartz'
        }
    }).id('gregification:reaction_chamber/nether_quartz_from_dust');

    event.custom({
        type: 'advanced_ae:reaction',
        energy: 150000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:water'
            }
        },
        input_items: [
            {
                amount: 64,
                ingredient: { tag: 'forge:dusts/quartzite' }
            }
        ],
        output: {
            '#': 64,
            '#c': 'ae2:i',
            id: 'gtceu:quartzite_gem'
        }
    }).id('gregification:reaction_chamber/quartzite_from_dust');
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
