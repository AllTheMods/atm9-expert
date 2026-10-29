// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//@ts-check
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.shaped('draconicevolution:dislocator_pedestal', [
        'WTW',
        'WSW',
        'SSS'
    ], {
        W: '#forge:ingots/draconium_awakened',
        S: 'ars_nouveau:sourcestone',
        T: 'bloodmagic:etherealslate'
    }).id('gregification:dislocator_pedestal');

    allthemods.shaped('draconicevolution:dislocator', [
        'EDE',
        'DWD',
        'EDE'
    ], {
        W: 'waystones:warp_dust',
        D: '#forge:plates/draconium_awakened',
        E: '#forge:plates/ender_pearl'
    }).id('gregification:dislocator');

    allthemods.shaped('integrateddynamics:part_connector_omni_directional', [
        'CEC',
        'DWD',
        'CEC'
    ], {
        W: 'waystones:warp_dust',
        D: '#forge:plates/draconium_awakened',
        E: '#forge:plates/ender_pearl',
        C: 'integrateddynamics:cable'
    }).id('gregification:part_connector_omni_directional');

    allthemods.shaped('integrateddynamics:part_connector_mono_directional', [
        'CDC',
        'EWE',
        'CDC'
    ], {
        W: 'waystones:warp_dust',
        D: '#forge:plates/draconium_awakened',
        E: '#forge:plates/ender_pearl',
        C: 'integrateddynamics:cable'
    }).id('gregification:part_connector_mono_directional');

    allthemods.shaped('projecte:relay_mk1', [
        'OGO',
        'OAO',
        'OOO'
    ], {
        O: 'minecraft:obsidian',
        G: 'gtceu:laminated_glass',
        A: 'mekanism:pellet_antimatter'
    }).id('gregification:relay_mk1');
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
