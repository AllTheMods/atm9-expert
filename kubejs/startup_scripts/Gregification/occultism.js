// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('item', event => {
    const chalks = [
        { name: 'orange', hex: 0xF9801D },
        { name: 'magenta', hex: 0xC74EBD },
        { name: 'light_blue', hex: 0x3AB3DA },
        { name: 'lime', hex: 0x80C71F },
        { name: 'pink', hex: 0xF38BAA },
        { name: 'gray', hex: 0x474F52 },
        { name: 'light_gray', hex: 0x9D9D9D },
        { name: 'cyan', hex: 0x169C9C },
        { name: 'blue', hex: 0x3C44AA },
        { name: 'brown', hex: 0x835432 },
        { name: 'green', hex: 0x5E7C16 },
        { name: 'black', hex: 0x1D1D21 }        
    ];
    
    
    event.create('occultism:mining_dim_core')
        //.texture('layer0', 'occultism:item/mining_dim_core')
        .displayName('Mining Dimension Core');

    event.create('occultism:miner_ancient_eldritch')
        //.texture('layer0', 'occultism:item/magic_lamp')
        .displayName('Eldritch Miner')
        //.rarity('EPIC')
        .glow(true)
        .maxDamage(2500) // Gives it physical durability so hurtAndBreak() doesn't error out
        .unstackable();   // Ensures automation filters treat it like a single tool        


    event.create('occultism:chalk_void')
            .displayName('Void Chalk');

    event.create('occultism:chalk_rainbow')
            .displayName('Rainbow Chalk');


    const toTitleCase = (str) => str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    chalks.forEach(chalk => {
        // Pure chalk
        event.create(`occultism:chalk_${chalk.name}`)
            //.texture('layer0', 'occultism:item/chalk_base')
            .color(0, chalk.hex)
            .displayName(`${toTitleCase(chalk.name)} Chalk`);

        // Impure chalk
        event.create(`occultism:chalk_${chalk.name}_impure`)
            //.texture('layer0', 'occultism:item/chalk_base')
            //.texture('layer1', 'occultism:item/chalk_base_impure')
            .color(0, chalk.hex)
            .displayName(`Impure ${toTitleCase(chalk.name)} Chalk`);
    });

    const mats = [
        {id: 'cruelty_essence', name: 'Cruelty Essence'},
        {id: 'cursed_honey', name: 'Cursed Honey'},
        {id: 'demonic_meat', name: 'Demonic Meat'},
        {id: 'dragonyst_dust', name: 'Dragonyst Dust'},
        {id: 'gray_paste', name: 'Gray Paste'},
        {id: 'marid_essence', name: 'Marid Essence'},
        {id: 'nature_paste', name: 'Nature Paste'},
        {id: 'research_fragment_dust', name: 'Research Fragment Dust'},
        {id: 'witherite_dust', name: 'Witherite Dust'}

    ]
    mats.forEach(mat => {
        // Pure chalk
        event.create(`occultism:${mat.id}`)
            .displayName(mat.name);
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
