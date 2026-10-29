// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//@ts-check
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    
    /*
    allthemods.shaped('', [
        '',
        '',
        ''
    ], {
        :         
    }).id('gregification:');
    */
    const circuit = '#gtceu:circuits/iv'
    const plate = '#forge:plates/tungsten_steel'
    const field = 'gtceu:iv_field_generator'
    const battery = '#gtceu:batteries/iv'
    const emitter = 'gtceu:iv_emitter'
    const sensor = 'gtceu:iv_sensor'

    allthemods.shaped('spatialtoolscmp:portable_spatial_storage', [
        'PCP',
        'EBS',
        'PPP'
    ], {
        P: plate,        
        B: battery,
        C: circuit,
        E: emitter,
        S: sensor
    }).id('gregification:spatial_storage');

    allthemods.shaped('spatialtoolscmp:portable_spatial_cloner', [
        'PCP',
        'EBS',
        'PFP'
    ], {
        P: plate,
        F: field,
        B: battery,
        C: circuit,
        E: emitter,
        S: sensor
    }).id('gregification:spatial_cloner');

    allthemods.shaped('spatialtoolscmp:portable_spatial_replacer', [
        'PPP',
        'SBE',
        'PCP'
    ], {
        P: plate,        
        B: battery,
        C: circuit,
        E: emitter,
        S: sensor
    }).id('gregification:spatial_replacer');

    allthemods.shaped('spatialtoolscmp:portable_spatial_piper', [
        'SFE',
        'PBP',
        'PCP'
    ], {
        P: plate,        
        B: battery,
        C: circuit,
        E: emitter,
        S: sensor,
        F: field
    }).id('gregification:spatial_piper');

    allthemods.shaped('spatialtoolscmp:portable_spatial_piper', [
        'PTP',
        'PHP',
        'PCP'
    ], {
        P: plate,
        H: 'gtceu:iv_machine_hull',
        T: 'gtceu:iv_electric_piston',
        C: circuit
        
    }).id('gregification:spatial_piper');


    
    allthemods.shaped('buildinggadgets2:gadget_building', [
        'PFP',
        'PBP',
        'PCP'
    ], {
        P: plate,
        F: field,
        B: battery,
        C: circuit
    }).id('gregification:gadget_building');

    allthemods.shaped('buildinggadgets2:gadget_exchanging', [
        'PFP',
        'EBE',
        'PCP'
    ], {
        P: plate,
        F: field,
        B: battery,
        C: circuit,
        E: '#forge:gems/ender_pearl'
    }).id('gregification:gadget_exchanging');

    allthemods.shaped('buildinggadgets2:gadget_copy_paste', [
        'PCP',
        'FBE',
        'PCP'
    ], {
        P: plate,
        F: field,
        B: battery,
        C: circuit,
        E: '#forge:gems/ender_pearl'
    }).id('gregification:gadget_copy_paste');

    allthemods.shaped('buildinggadgets2:gadget_cut_paste', [
        'PCP',
        'EBF',
        'PCP'
    ], {
        P: plate,
        F: field,
        B: battery,
        C: circuit,
        E: '#forge:gems/ender_pearl'
    }).id('gregification:gadget_cut_paste');

    allthemods.shaped('buildinggadgets2:gadget_destruction', [
        'PFP',
        'CBC',
        'PFP'
    ], {
        P: plate,
        F: field,
        B: battery,
        C: circuit,        
    }).id('gregification:gadget_destruction');

    allthemods.shaped('mininggadgets:mininggadget_simple', [
        'LFP',
        'CBP',
        'CBP'
    ], {
        P: '#forge:plates/stainless_steel',
        F: 'gtceu:hv_field_generator',
        B: '#gtceu:batteries/hv',
        C: '#gtceu:circuits/hv',        
        L: '#forge:lenses/diamond'
    }).id('gregification:mininggadget_simple');

    allthemods.shaped('mininggadgets:mininggadget_fancy', [
        'LFP',
        'CBP',
        'CBP'
    ], {
        P: '#forge:plates/titanium',
        F: 'gtceu:ev_field_generator',
        B: '#gtceu:batteries/ev',
        C: '#gtceu:circuits/ev',        
        L: '#forge:lenses/diamond'
    }).id('gregification:mininggadget_fancy');

    allthemods.shaped('mininggadgets:mininggadget', [
        'LFP',
        'CBP',
        'CBP'
    ], {
        P: plate,
        F: field,
        B: battery,
        C: circuit,        
        L: '#forge:lenses/nether_star'
    }).id('gregification:mininggadget');
 
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
