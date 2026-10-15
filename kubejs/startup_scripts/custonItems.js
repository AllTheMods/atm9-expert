StartupEvents.registry('item', event => {

    event.create('gtceu:technomancy_orb')
        .displayName('Technomancy Orb')
        .tooltip('Orb of Technomantic Ascendancy')
        .rarity('ie_masterwork')
        
    
    event.create('gtceu:agarwood')
        .displayName('Agarwood')
        .tooltip('Aromatic wood used in incense and rituals.')
        .rarity('ie_masterwork')

    event.create('gtceu:camphor_incense')
        .displayName('Camphor Incense')
        .tooltip('Incense made from camphor.')
        .rarity('ie_masterwork')
        
    event.create('gtceu:solar_relic')
        .displayName('Solar Relic')
        .tooltip('A relic imbued with the power of the sun.')
        .rarity('ie_masterwork')

    event.create('gtceu:sunnarium_core')
        .displayName('Sunnarium Core')
        .tooltip('A core imbued with the power of the sun.')
        .rarity('ie_masterwork')

    event.create('gtceu:lunarium_core')
        .displayName('Lunarium Core')
        .tooltip('A core imbued with the power of the moon.')
        .rarity('ie_masterwork')

    event.create('gtceu:atomic_core')        
        .displayName('Atomic Core')
        .tooltip('Atomic Core')
        .rarity('ie_masterwork')

    event.create('gtceu:blood_coated_blade')        
        .displayName('Blood Coated Blade')
        .tooltip('A blade coated with the essence of blood.')
        .rarity('ie_masterwork')

    event.create('gtceu:thermal_spark')        
        .displayName('Thermal Spark')
        .tooltip('Thermal Spark')
        .rarity('ie_masterwork')

    event.create('quantum_sentient_circuit')
        .texture('layer0', 'pneumaticcraft:item/printed_circuit_board')
        .texture('layer1', 'advanced_ae:item/quantum_storage_component')
        .color(1, 0x00FFFF)
        .rarity('EPIC')
        .displayName('Quantum Sentient Circuit')
        .tooltip('The pinnacle of GregTech and Magical integration.')
        .glow(true);

    event.create('entropy_manifold')
        .displayName('The Entropy Manifold')
        .glow(true)
        .rarity('EPIC')
        .tooltip('§7A volatile union of infinite energy and abyssal sorrow.')
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
    event.create('gtceu:blank_slate_casing')
        .displayName('Blank Slate Casing')
        .texture('bloodmagic:item/blankslate')
        .color(0, 0xff4d4d)
        .tooltip('§7Blood soaked slate ready for imbuing.');

    event.create('gtceu:crystallized_seed')
        .texture('minecraft:item/pumpkin_seeds')
        .color(0, 0xFFFFFF) // White
        .displayName('Crystallized Seed')
        .glow(true)

    event.create('gtceu:empowered_seed')
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


    event.create('gtceu:preon')
        .displayName('Preon')
        .rarity('ie_masterwork')

    event.create('gtceu:dna')
        .displayName('DNA Strand')
        .rarity('ie_masterwork')

    event.create('gtceu:eldritch_cloth')
        .displayName('Eldritch Cloth')
        .rarity('ie_masterwork')
        .glow(true);

    event.create('gtceu:tachyon')
        .displayName('Tachyon')
        .rarity('ie_masterwork')

    event.create('gtceu:neutrino')
        .displayName('Neutrino')
        .rarity('ie_masterwork')

    event.create('gtceu:plutonic_quark')
        .displayName('Plutonic Quark')
        .rarity('ie_masterwork')

    event.create('gtceu:bacteria_gene_sample')
        .displayName('Gene Sample (Bacteria)')
        .texture('gendustry:item/gene_sample'); // reuse visual only - confirm real path

    quarks.forEach(quark => {
        event.create(`gtceu:${quark.name}_quark`)
            .displayName(`${quark.name.charAt(0).toUpperCase() + quark.name.slice(1)} Quark`)
            .rarity(quark.rarity)
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
        event.create(`gtceu:element_${element.name}`)
            .displayName(`${element.name.charAt(0).toUpperCase() + element.name.slice(1)} Element`)
            .rarity(element.rarity)
            .tooltip(element.description)
        //.glow(true)
    });

    event.create('gtceu:tier_1_rocket_schematic')
        .displayName('Tier 1 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0x3FA9A0)
        .rarity('COMMON')
        .tooltip('§7A schematic for a Tier 1 Rocket, capable of reaching the Moon.')



    event.create('gtceu:tier_2_rocket_schematic')
        .displayName('Tier 2 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0xC1502E)
        .rarity('UNCOMMON')
        .tooltip('§7A schematic for a Tier 2 Rocket, capable of reaching Mars.')

    event.create('gtceu:tier_3_rocket_schematic')
        .displayName('Tier 3 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0x8B2E2E)
        .rarity('RARE')
        .tooltip('§7A schematic for a Tier 3 Rocket, capable of reaching Venus and Mercury.')

    event.create('gtceu:tier_4_rocket_schematic')
        .displayName('Tier 4 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0xA8E6C8)
        .rarity('SUPREME')
        .tooltip('§7A schematic for a Tier 4 Rocket, capable of reaching Glacio.')

    event.create('gtceu:thorium_single')
        .displayName('Single Thorium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Single thorium fuel cell.')

    event.create('gtceu:thorium_double')
        .displayName('Double Thorium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Double thorium fuel cell.')

    event.create('gtceu:thorium_quad')
        .displayName('Quad Thorium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Quad thorium fuel cell.')    

    event.create('gtceu:thorium_berkelium_single')
        .displayName('Single Thorium Berkelium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Single thorium berkelium fuel cell.')

    event.create('gtceu:thorium_berkelium_double')
        .displayName('Double Thorium Berkelium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Double thorium berkelium fuel cell.')

    event.create('gtceu:thorium_berkelium_quad')
        .displayName('Quad Thorium Berkelium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Quad thorium berkelium fuel cell.')

    event.create('gtceu:samarium_cobalt_magnetic_rotor')
        .displayName('Samarium Cobalt Magnetic Rotor')
        .tooltip('§7A Samarium Cobalt Magnetic Rotor.')

    event.create('gtceu:depleted_single')
        .displayName('Single Depleted Thorium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Single depleted fuel cell.')

    event.create('gtceu:depleted_double')
        .displayName('Double Depleted Thorium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Double depleted fuel cell.')

    event.create('gtceu:depleted_quad')
        .displayName('Quad Depleted Thorium Fuel Cell')
        .rarity('RARE')
        .tooltip('§7A Quad depleted fuel cell.')

})


ItemEvents.modification(allthemods => {
    
    allthemods.modify('occultism:soul_gem', item => {
        item.maxStackSize = 4;        
    });

    allthemods.modify('forestry:bee_drone_ge', item => {
        item.burnTime = 800
    })
});
