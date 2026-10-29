// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// @ts-nocheck
ServerEvents.genericLootTables(allthemods => {
    const brokenTables = [
        // AE2 / Extended Integrations
        'megacells:blocks/mega_emc_interface',
        'expatternprovider:blocks/ex_emc_interface',

        // Advanced Generators EU Outputs
        'advgenerators:blocks/eu_output_lv',
        'advgenerators:blocks/eu_output_mv',
        'advgenerators:blocks/eu_output_hv',
        'advgenerators:blocks/eu_output_ev',
        'advgenerators:blocks/eu_output_iv',        

        // Chest Loot Tables
        'irons_spellbooks:chests/citadel/citadel_tomes',
        'irons_spellbooks:chests/catacombs/crypt_loot',
        'planetsplus:chests/village/tower/titan/smithing_chest',

        // Immersive Geology TFC (if not stripped from jar)
        'immersivegeology:blocks/tfc_rich_ore_block_vanadinite_gabbro',
        'immersivegeology:blocks/tfc_normal_ore_block_wolframite_diorite',
        'immersivegeology:blocks/tfc_poor_ore_block_ilmenite_basalt',
        'immersivegeology:blocks/tfc_normal_ore_block_thorianite_dolomite',
        'immersivegeology:blocks/tfc_poor_ore_block_bauxite_chert',
        'immersivegeology:blocks/tfc_poor_ore_block_wolframite_rhyolite',
        'immersivegeology:blocks/tfc_normal_ore_block_apatite_diorite',
        'immersivegeology:blocks/tfc_poor_ore_block_monazite_dolomite',
        'immersivegeology:blocks/tfc_rich_ore_block_vanadinite_granite',
        'immersivegeology:blocks/tfc_rich_ore_block_galena_slate',
        'immersivegeology:blocks/tfc_normal_ore_block_monazite_dacite',
        'immersivegeology:blocks/tfc_poor_ore_block_monazite_claystone',
        'immersivegeology:blocks/tfc_normal_ore_block_thorite_dacite',
        'immersivegeology:blocks/tfc_poor_ore_block_pyrolusite_claystone',
        'immersivegeology:blocks/tfc_normal_ore_block_ilmenite_dacite',
        'immersivegeology:blocks/tfc_rich_ore_block_apatite_diorite',
        'immersivegeology:blocks/tfc_normal_ore_block_thorianite_shale',
        'immersivegeology:blocks/tfc_rich_ore_block_wolframite_rhyolite',
        'immersivegeology:blocks/tfc_poor_ore_block_monazite_basalt',
        'immersivegeology:blocks/tfc_poor_ore_block_pyrite_quartzite',
        'immersivegeology:blocks/tfc_normal_ore_block_cobaltite_gabbro',
        'immersivegeology:blocks/tfc_rich_ore_block_cuprite_limestone',
        'immersivegeology:blocks/tfc_normal_ore_block_thorianite_gabbro',
        'immersivegeology:blocks/tfc_poor_ore_block_pyrolusite_chert'
    ];

    brokenTables.forEach(id => {
        allthemods.addJson(id, {
            type: id.includes(':chests/') ? "minecraft:chest" : "minecraft:block",
            pools: []
        });
    });
});

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'tconstruct:tools/parts/fake_storage_block_casting' });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
