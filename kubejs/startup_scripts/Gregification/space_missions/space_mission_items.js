// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('item', event => {
    const title = id => id.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const make = (id, name) => {
        event.create('gtceu:' + id).displayName(name || title(id));
    };
    const types = ['thermal', 'propulsion', 'navigation'];
    const partKinds = ['hull', 'engine', 'avionics'];

    for (var t = 1; t <= 6; t++) {
        partKinds.forEach(k => make('ship_' + k + '_mk' + t));
        make('ship_mk' + t, 'Mk' + t + ' Ship');
        make('encoder_plate_mk' + t, 'Mk' + t + ' Encoder Plate');
    }
    for (var t = 3; t <= 6; t++) {
        make('ship_guidance_mk' + t);
        make('guidance_computer_mk' + t);
    }
    for (var t = 2; t <= 6; t++) {
        make('onboard_computer_mk' + t);
    }
    for (var t = 1; t <= 5; t++) {
        types.forEach(ty => {
            make(ty + '_research_fragment_mk' + t);
            make(ty + '_research_mk' + t);
        });
    }
    make('cosmic_research_fragment');
    make('cosmic_research');
    make('cosmic_knowledge');
    make('blank_destination_card');
    make('destination_card');
    make('cargo_pod');
    make('kuiper_rock');
    make('kuiper_rock_dust');
    make('circuit_scrap');
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
