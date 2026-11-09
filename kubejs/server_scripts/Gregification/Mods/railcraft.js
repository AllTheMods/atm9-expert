// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({id: 'railcraft:blast_furnace_bricks'})

    allthemods.shaped(
        '3x railcraft:blast_furnace_bricks',
        [
            'aba',
            'cdc',
            'aba'
        ],
        {
            a: 'minecraft:nether_brick',
            b: 'minecraft:magma_block',
            c: 'minecraft:nether_bricks',
            d: 'gtceu:concrete_bucket'
        }
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.