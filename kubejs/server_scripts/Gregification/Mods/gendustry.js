// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//search:forestry
ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    allthemods.shaped('gendustry:mutatron', [
        'RHP',
        'WSR',
        'RUP'
    ], {
        R: 'gendustry:receptacle',
        H: 'gendustry:genetics_processor',
        P: '#forge:plates/titanium_gold',
        W: 'gendustry:power_module',
        S: 'forestry:hardened_machine',
        U: 'gtceu:iv_electric_pump'
    }).id('gregification:craft_mutatron');

    allthemods.shaped('gendustry:advanced_mutatron', [
        'GSG',
        'HMH',
        'PWP'
    ], {
        G: '#forge:gears/titanium_gold',
        S: '#forge:plates/sunnarium',
        H: 'gendustry:genetics_processor',
        M: 'gendustry:mutatron',
        P: '#forge:plates/titanium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_advanced_mutatron');

    allthemods.shaped('gendustry:industrial_apiary', [
        'LRL',
        'LSL',
        'GIG'
    ], {
        L: '#forge:glass',
        R: 'gendustry:receptacle',
        S: 'forestry:hardened_machine',
        G: '#forge:gears/titanium_gold',
        I: 'gtceu:iv_electric_piston'
    }).id('gregification:craft_industrial_apiary');

    allthemods.shaped('gendustry:imprinter', [
        'GHG',
        'RSR',
        'PWP'
    ], {
        G: '#forge:gears/titanium_gold',
        H: 'gendustry:genetics_processor',
        R: 'gendustry:receptacle',
        S: 'forestry:hardened_machine',
        P: '#forge:plates/titanium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_imprinter');

    allthemods.shaped('gendustry:replicator', [
        'GHG',
        'WSW',
        'PHP'
    ], {
        G: '#forge:gears/titanium_gold',
        H: 'gendustry:genetics_processor',
        W: 'gendustry:power_module',
        S: 'forestry:hardened_machine',
        P: '#forge:plates/titanium_gold'
    }).id('gregification:craft_replicator');

    allthemods.shaped('gendustry:sampler', [
        'GHG',
        'RSD',
        'PWP'
    ], {
        G: '#forge:gears/titanium_gold',
        H: 'gendustry:genetics_processor',
        R: 'gendustry:receptacle',
        S: 'forestry:hardened_machine',
        D: '#forge:gems/diamond',
        P: '#forge:plates/titanium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_sampler');

    allthemods.shaped('gendustry:protein_liquefier', [
        'GVG',
        'ISI',
        'PWP'
    ], {
        G: '#forge:gears/titanium_gold',
        V: 'gtceu:iv_conveyor_module',
        I: 'gtceu:iv_electric_piston',
        S: 'forestry:hardened_machine',
        P: '#forge:plates/titanium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_protein_liquefier');

    allthemods.shaped('gendustry:mutagen_producer', [
        'PVP',
        'WSW',
        'GUG'
    ], {
        P: '#forge:plates/titanium_gold',
        V: 'gtceu:iv_conveyor_module',
        W: 'gendustry:power_module',
        S: 'forestry:hardened_machine',
        G: '#forge:gears/titanium_gold',
        U: 'gtceu:iv_electric_pump'
    }).id('gregification:craft_mutagen_producer');

    allthemods.shaped('gendustry:genetic_transposer', [
        'GPG',
        'HSH',
        'PWP'
    ], {
        G: '#forge:gears/titanium_gold',
        P: '#forge:plates/titanium_gold',
        H: 'gendustry:genetics_processor',
        S: 'forestry:hardened_machine',
        W: 'gendustry:power_module'
    }).id('gregification:craft_genetic_transposer');

    allthemods.shaped('gendustry:dna_extractor', [
        'GVG',
        'HSH',
        'PWP'
    ], {
        G: '#forge:gears/titanium_gold',
        V: 'gtceu:iv_conveyor_module',
        H: 'gendustry:genetics_processor',
        S: 'forestry:hardened_machine',
        P: '#forge:plates/titanium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_dna_extractor');

});
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
