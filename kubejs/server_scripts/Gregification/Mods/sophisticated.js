// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA    
    const sophisticatedWoods = [
        'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak',
        'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'
    ];
    const limitedSlots = [1, 2, 3, 4];

    const hoppers = slots => {
        const list = [];
        for (let i = 0; i < slots; i++) {
            list.push('minecraft:hopper');
        }
        return list;
    };

    
    sophisticatedWoods.forEach(wood => {
        allthemods.shapeless(
            Item.of('sophisticatedstorage:chest', '{woodType:"' + wood + '"}'),
            ['minecraft:chest', '#forge:plates/redstone', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'minecraft:' + wood + '_planks']
        ).id('gregification:sophisticated_chest_' + wood);

        allthemods.shapeless(
            Item.of('sophisticatedstorage:barrel', '{woodType:"' + wood + '"}'),
            ['minecraft:barrel', '#forge:plates/redstone', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'minecraft:' + wood + '_planks']
        ).id('gregification:sophisticated_barrel_' + wood);

        limitedSlots.forEach(slots => {
            allthemods.shapeless(
                Item.of('sophisticatedstorage:limited_barrel_' + slots, '{woodType:"' + wood + '"}'),
                ['minecraft:barrel', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'minecraft:' + wood + '_planks'].concat(hoppers(slots))
            ).id('gregification:sophisticated_limited_barrel_' + slots + '_' + wood);
        });
    });
    allthemods.shapeless(
        Item.of('sophisticatedstorage:chest', '{woodType:"gtceu:rubber"}'),
        ['minecraft:chest', '#forge:plates/redstone', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'gtceu:rubber_planks']
    ).id('gregification:sophisticated_chest_rubber');

    allthemods.shapeless(
        Item.of('sophisticatedstorage:barrel', '{woodType:"gtceu:rubber"}'),
        ['minecraft:barrel', '#forge:plates/redstone', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'gtceu:rubber_planks']
    ).id('gregification:sophisticated_barrel_rubber');

    limitedSlots.forEach(slots => {
        allthemods.shapeless(
            Item.of('sophisticatedstorage:limited_barrel_' + slots, '{woodType:"gtceu:rubber"}'),
            ['minecraft:barrel', '#forge:plates/redstone', '#forge:plates/steel', '#forge:plates/steel', 'gtceu:rubber_planks'].concat(hoppers(slots))
        ).id('gregification:sophisticated_limited_barrel_' + slots + '_rubber');
    });

    allthemods.shaped(
    'sophisticatedstorage:basic_tier_upgrade',
    [
        ' R ',
        'SPS',
        ' R '
    ],
    {
        R: '#forge:plates/redstone',
        S: '#forge:plates/steel',
        P: '#minecraft:planks'
    }
).id('gregification:sophisticated_basic_tier_upgrade')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.