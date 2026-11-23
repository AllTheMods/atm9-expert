// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('item', allthemods => {

    /*End Game Items
    42
    stabilized tesseract
    cosmic copendium
    cosmic research
    curse breaker
    greg star


    */


    allthemods.create('gtceu:bose_einstein_condensate')
        .displayName('Bose-Einstein Condensate')
        .tooltip(Text.translate('item.gtceu.bose_einstein_condensate.tooltip'))
        
    allthemods.create('gtceu:tesseract')
        .displayName('Tesseract')
        .tooltip(Text.translate('item.gtceu.tesseract.tooltip'))

    allthemods.create('gtceu:raw_model_neuron').displayName('Raw Model Neuron')

    allthemods.create('gtceu:cosmic_knowledge_fragment')
        .displayName('Cosmic Knowledge Fragment')
        .tooltip(Text.translate('item.gtceu.cosmic_knowledge_fragment.tooltip'));

    allthemods.create('gtceu:cosmic_knowledge_compendium')
        .displayName('Cosmic Knowledge Compendium')
        .tooltip(Text.translate('item.gtceu.cosmic_knowledge_compendium.tooltip'));

    allthemods.create('gtceu:forty_two')
        .displayName('42')
        .tooltip(Text.translate('item.gtceu.forty_two.tooltip'));

    allthemods.create('gtceu:technomancy_orb')
        .displayName('Technomancy Orb')
        .tooltip(Text.translate('item.gtceu.technomancy_orb.tooltip'))
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:beryllium_sphere')
        .displayName('Beryllium Sphere')
        .tooltip(Text.translate('item.gtceu.beryllium_sphere.tooltip'))
        //.rarity('ie_masterwork')
        
    
    allthemods.create('gtceu:agarwood')
        .displayName('Agarwood')
        .tooltip(Text.translate('item.gtceu.agarwood.tooltip'))
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:camphor_incense')
        .displayName('Camphor Incense')
        .tooltip(Text.translate('item.gtceu.camphor_incense.tooltip'))
        //.rarity('ie_masterwork')
        
    allthemods.create('gtceu:solar_relic')
        .displayName('Solar Relic')
        .tooltip(Text.translate('item.gtceu.solar_relic.tooltip'))
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:perovskite_photovoltaic_cell')
        .displayName('Perovskite Photovoltaic Cell')
        .tooltip(Text.translate('item.gtceu.perovskite_photovoltaic_cell.tooltip'))
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:sunnarium_core')
        .displayName('Sunnarium Core')
        .tooltip(Text.translate('item.gtceu.sunnarium_core.tooltip'))
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:lunarium_core')
        .displayName('Lunarium Core')
        .tooltip(Text.translate('item.gtceu.lunarium_core.tooltip'))
        .rarity('ie_masterwork')

    allthemods.create('gtceu:atomic_core')        
        .displayName('Atomic Core')
        .tooltip(Text.translate('item.gtceu.atomic_core.tooltip'))
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:stabilized_tesseract')
        .displayName('Stabilized Tesseract')

    allthemods.create('gtceu:curse_breaker')
        .displayName('Curse Breaker')
        .tooltip(Text.translate('item.gtceu.curse_breaker.tooltip'))

    allthemods.create('gtceu:blood_coated_blade')        
        .displayName('Blood Coated Blade')
        .tooltip(Text.translate('item.gtceu.blood_coated_blade.tooltip'))
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:thermal_spark')        
        .displayName('Thermal Spark')
        .tooltip(Text.translate('item.gtceu.thermal_spark.tooltip'))
        //.rarity('ie_masterwork')

    allthemods.create('quantum_sentient_circuit')
        .texture('layer0', 'pneumaticcraft:item/printed_circuit_board')
        .texture('layer1', 'advanced_ae:item/quantum_storage_component')
        .color(1, 0x00FFFF)
        //.rarity('EPIC')
        .displayName('Quantum Sentient Circuit')
        .tooltip(Text.translate('item.kubejs.quantum_sentient_circuit.tooltip'))
        .glow(true);

    allthemods.create('entropy_manifold')
        .displayName('The Entropy Manifold')
        .glow(true)
        //.rarity('EPIC')
        .tooltip(Text.translate('item.kubejs.entropy_manifold.tooltip'))
        .parentModel('minecraft:item/generated')
        .texture('layer0', 'ironjetpacks:item/capacitor') // Updated ID here
        .color(0, 0xD455FF)
        .texture('layer1', 'evilcraft:item/corrupted_tear')

    /*event.create('mana_essence')
        .texture('minecraft:item/heart_of_the_sea')
        .color(0, 0x0099FF)
        .displayName('Mana Essence')        
        .glow(true)        
        .tooltip('§7A concentrated orb of pure magical energy.');
    */
    allthemods.create('gtceu:blank_slate_casing')
        .displayName('Blank Slate Casing')        
        .tooltip(Text.translate('item.gtceu.blank_slate_casing.tooltip'));

    allthemods.create('gtceu:crystallized_seed')
        .texture('minecraft:item/pumpkin_seeds')
        .color(0, 0xFFFFFF) // White
        .displayName('Crystallized Seed')
        .glow(true)

    allthemods.create('gtceu:empowered_seed')
        .texture('minecraft:item/pumpkin_seeds')
        .color(0, 0xFFA500) // Orange
        .displayName('Empowered Seed')
        .glow(true)

    const quarks = [
        { name: 'up', description: '§cFundamental positive charge constituent.', rarity: 'extra_red' },
        { name: 'down', description: '§9Fundamental negative charge constituent.', rarity: 'extra_blue' },
        { name: 'top', description: '§bMassive, extremely short-lived particle.', rarity: 'extra_dark_aqua' },
        { name: 'bottom', description: '§5Heavy, dense constituent.', rarity: 'COMMON' },
        { name: 'strange', description: '§dExotic particle with high stability decay.', rarity: 'extra_dark_purple' },
        { name: 'charm', description: '§eLuminous second-generation quark.', rarity: 'UNCOMMON' }
    ];

    allthemods.create('gtceu:polonium_beryllium_neutron_source')
        .displayName('Polonium Beryllium Neutron Emitter')
        //.rarity('ie_masterwork')
        .tooltip(Text.translate('item.gtceu.polonium_beryllium_neutron_source.tooltip'));
            
    allthemods.create('gtceu:americium_beryllium_neutron_source')
        .displayName('Americium Beryllium Neutron Emitter')
        //.rarity('ie_masterwork')
        .tooltip(Text.translate('item.gtceu.americium_beryllium_neutron_source.tooltip'));

    allthemods.create('gtceu:californium_neutron_source')
        .displayName('Californium Neutron Emitter')
        //.rarity('ie_masterwork')
        .tooltip(Text.translate('item.gtceu.californium_neutron_source.tooltip'));

    allthemods.create('gtceu:preon')
        .displayName('Preon')
        //.rarity('ie_masterwork')
        .tooltip(Text.translate('item.gtceu.preon.tooltip'));
        
    allthemods.create('gtceu:betavoltaic_microcell')
        .displayName('Betavoltaic Microcell')
        //.rarity('ie_masterwork');

    allthemods.create('gtceu:dna')
        .displayName('DNA Strand')
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:eldritch_cloth')
        .displayName('Eldritch Cloth')
        //.rarity('ie_masterwork')
        .glow(true);
    
    allthemods.create('gtceu:eldritch_spirit')
        .displayName('Eldritch Spirit')
        .tooltip(Text.translate('item.gtceu.eldritch_spirit.tooltip'))

    allthemods.create('gtceu:tachyon')
        .displayName('Tachyon')
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:neutrino')
        .displayName('Neutrino')
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:plutonic_quark')
        .displayName('Plutonic Quark')
        //.rarity('ie_masterwork')

    allthemods.create('gtceu:bacteria_gene_sample')
        .displayName('Gene Sample (Bacteria)')
        //.texture('gendustry:item/gene_sample'); // reuse visual only - confirm real path

    quarks.forEach(quark => {
        allthemods.create(`gtceu:${quark.name}_quark`)
            .displayName(`${quark.name.charAt(0).toUpperCase() + quark.name.slice(1)} Quark`)
            //.rarity(quark.rarity)
        //.glow(true)
    })

    const elements = [
        { name: 'fire', description: '§cThe essence of flame and heat.', rarity: 'extra_red' },
        { name: 'water', description: '§9The essence of fluidity and life.', rarity: 'extra_blue' },
        { name: 'earth', description: '§aThe essence of stability and growth.', rarity: 'extra_green' },
        { name: 'air', description: '§fThe essence of freedom and movement.', rarity: 'COMMON' },
        { name: 'blank', description: '§7The essence of nothingness.', rarity: 'ie_masterwork' }
    ]
    elements.forEach(element => {
        allthemods.create(`gtceu:element_${element.name}`)
            .displayName(`${element.name.charAt(0).toUpperCase() + element.name.slice(1)} Element`)
            //.rarity(element.rarity)
            .tooltip(Text.translate(`item.gtceu.element_${element.name}.tooltip`))
        //.glow(true)
    });

    allthemods.create('gtceu:tier_1_rocket_schematic')
        .displayName('Tier 1 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0x3FA9A0)
        //.rarity('COMMON')
        .tooltip(Text.translate('item.gtceu.tier_1_rocket_schematic.tooltip'))



    allthemods.create('gtceu:tier_2_rocket_schematic')
        .displayName('Tier 2 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0xC1502E)
        //.rarity('UNCOMMON')
        .tooltip(Text.translate('item.gtceu.tier_2_rocket_schematic.tooltip'))

    allthemods.create('gtceu:tier_3_rocket_schematic')
        .displayName('Tier 3 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0x8B2E2E)
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.tier_3_rocket_schematic.tooltip'))

    allthemods.create('gtceu:tier_4_rocket_schematic')
        .displayName('Tier 4 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0xA8E6C8)
        //.rarity('SUPREME')
        .tooltip(Text.translate('item.gtceu.tier_4_rocket_schematic.tooltip'))

    allthemods.create('gtceu:thorium_single')
        .displayName('Single Thorium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.thorium_single.tooltip'))

    allthemods.create('gtceu:thorium_double')
        .displayName('Double Thorium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.thorium_double.tooltip'))

    allthemods.create('gtceu:thorium_quad')
        .displayName('Quad Thorium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.thorium_quad.tooltip'))    

    allthemods.create('gtceu:thorium_berkelium_single')
        .displayName('Single Thorium Berkelium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.thorium_berkelium_single.tooltip'))

    allthemods.create('gtceu:thorium_berkelium_double')
        .displayName('Double Thorium Berkelium Fuel Cell')
        .rarity('RARE')
        .tooltip(Text.translate('item.gtceu.thorium_berkelium_double.tooltip'))

    allthemods.create('gtceu:thorium_berkelium_quad')
        .displayName('Quad Thorium Berkelium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.thorium_berkelium_quad.tooltip'))

    allthemods.create('gtceu:samarium_cobalt_magnetic_rotor')
        .displayName('Samarium Cobalt Magnetic Rotor')
        .tooltip(Text.translate('item.gtceu.samarium_cobalt_magnetic_rotor.tooltip'))

    allthemods.create('gtceu:depleted_single_thorium')
        .displayName('Single Depleted Thorium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.depleted_single_thorium.tooltip'))

    allthemods.create('gtceu:depleted_double_thorium')
        .displayName('Double Depleted Thorium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.depleted_double_thorium.tooltip'))

    allthemods.create('gtceu:depleted_quad_thorium')
        .displayName('Quad Depleted Thorium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.depleted_quad_thorium.tooltip'))

     allthemods.create('gtceu:depleted_single_thorium_berkelium')
        .displayName('Single Depleted Thorium Berkelium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.depleted_single_thorium_berkelium.tooltip'))

    allthemods.create('gtceu:depleted_double_thorium_berkelium')
        .displayName('Double Depleted Thorium Berkelium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.depleted_double_thorium_berkelium.tooltip'))

    allthemods.create('gtceu:depleted_quad_thorium_berkelium')
        .displayName('Quad Depleted Thorium Berkelium Fuel Cell')
        //.rarity('RARE')
        .tooltip(Text.translate('item.gtceu.depleted_quad_thorium_berkelium.tooltip'))

})


ItemEvents.modification(allthemods => {
    
    allthemods.modify('occultism:soul_gem', item => {
        item.maxStackSize = 4;        
    });

    allthemods.modify('forestry:bee_drone_ge', item => {
        item.burnTime = 800
    })
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
