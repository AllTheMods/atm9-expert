// priority: 500
// @ts-nocheck

StartupEvents.registry('block', allthemods => {

    const casings = [
        // Logistics & Networking
        { id: 'flux_casing', name: 'Flux Casing', tex: 'fluxnetworks:block/flux_block' },
        { id: 'network_casing', name: 'Network Casing', tex: 'ae2:block/controller_column' },
        { id: 'router_casing', name: 'Router Casing', tex: 'modularrouters:block/modular_router_side' },

        // Power & Processing        
        { id: 'dimensional_casing', name: 'Dimensional Casing', tex: 'gtceu:block/casings/solid/machine_casing_stable_titanium' },
        { id: 'xenomorphic_data_frame', name: 'Xenomorphic Data-Frame', tex: 'fluxnetworks:block/flux_block' },
        { id: 'industrial_pylon_casing', name: 'Industrial Pylon Casing', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },

        // Magic & Biological
        { id: 'slate_casing', name: 'Slate Casing', tex: 'bloodmagic:block/largebloodstonebrick' },
        { id: 'rune_casing', name: 'Rune Casing', tex: 'bloodmagic:block/blankrune' },
        { id: 'reinforced_rune_casing', name: 'Reinforced Rune Casing', tex: 'bloodmagic:block/masterritualstone' },
        { id: 'ritual_casing', name: 'Ritual Casing', tex: 'bloodmagic:block/ritualstone' },
        { id: 'hexagonal_bio_composite', name: 'Hexagonal Bio-Composite', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },
        { id: 'magical_bio_composite', name: 'Magical Bio-Composite', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },

        { id: 'alchemical_casing', name: 'Alchemical Casing', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },
        { id: 'fission_casing', name: 'Fission Casing', tex: 'gtceu:block/casings/solid/machine_casing_inert_ptfe' }
    ];
    const coils = [
        //'draconium', 'wyvern', 'draconic', 'chaotic'
        { name: 'draconium', displayName: 'Draconium Casing' },
        { name: 'wyvern', displayName: 'Wyvern Casing' },
        { name: 'draconic', displayName: 'Draconic Casing' },
        { name: 'chaotic', displayName: 'Chaotic Casing' },

    ]

    allthemods.create(`gtceu:gadolinium_casing`)
        // @ts-ignore
        .displayName('Gadolinium Casing')
        .textureAll(`gtceu:block/casings/gadolinium_casing/gadolinium_casing`)
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    allthemods.create(`gtceu:heat_exchange_casing`)
        // @ts-ignore
        .displayName('Heat Exchange Casing')
        .textureAll(`gtceu:block/casings/heat_exchange_casing/heat_exchange_casing`)
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    allthemods.create('gtceu:magical_soil')
        .textureAll('gtceu:block/casings/magical_soil/magical_soil_side')
        .texture('up', 'gtceu:block/casings/magical_soil/magical_soil_top')
        .texture('down', 'gtceu:block/casings/magical_soil/magical_soil_side')
        .displayName('§bMagical Soil')
        .grassSoundType()
        .mapColor('grass')
        .hardness(0.6);

    coils.forEach(coil => {
        let block = allthemods.create(`gtceu:${coil.name}_casing`)
            // @ts-ignore
            .displayName(coil.displayName)
            .textureAll(`gtceu:block/casings/${coil.name}_casing/${coil.name}_casing`)
            .hardness(5.0)
            .resistance(10.0)
            .soundType('metal')
            .tagBlock('gtceu:casings');
    });

    casings.forEach(casing => {
        let block = allthemods.create(`gtceu:${casing.id}`)
            // @ts-ignore
            .displayName(casing.name)
            // @ts-ignore
            .hardness(5.0)
            .resistance(10.0)
            .soundType('metal')
            .textureAll(casing.tex) // These paths are now verified
            .tagBlock('gtceu:casings');

        if (casing.color) {
            // Index 0 is the base layer for tinting
            block.color(0, casing.color);
            // Mandatory for tints to show up on some hardware/drivers
            block.renderType('cutout');
        }

        if (casing.light) {
            block.lightLevel(casing.light); // 1.0 is max brightness
        }
    });



});

GTCEuStartupEvents.registry('gtceu:world_gen_layer', allthemods => {
    const adAstraPlanets = ['moon', 'mars', 'venus', 'mercury'];

    adAstraPlanets.forEach(planet => {
        allthemods.create(planet)
            .targets(
                `ad_astra:${planet}_stone`,
                `ad_astra:${planet}_sand`,

            )
            .dimensions(`ad_astra:${planet}`);
    });

    allthemods.create('glacio')
        .targets(
            `ad_astra:glacio_stone`,
            `ad_astra:glacio_ice`,
        )
        .dimensions(`ad_astra:glacio`);    
});

const dimensions = [
    { name: 'bloodmagic:dungeon', displayName: 'Blood Dungeon', icon: 'ad_astra:moon_globe', tier: 4 },
    { name: 'allthemodium:mining', displayName: 'Mining Dimension', icon: 'allthetweaks:atm_star', tier: 0 },
    { name: 'deeperdarker:otherside', displayName: 'Deeper Darker', icon: 'minecraft:bedrock', tier: 0 },
    { name: 'ad_astra:moon', displayName: 'Moon', icon: 'ad_astra:moon_globe', tier: 1 },
    { name: 'ad_astra:mars', displayName: 'Mars', icon: 'ad_astra:mars_globe', tier: 1 },
    { name: 'ad_astra:mercury', displayName: 'Mercury', icon: 'ad_astra:mercury_globe', tier: 2 },
    { name: 'ad_astra:venus', displayName: 'Venus', icon: 'ad_astra:venus_globe', tier: 2 },
    { name: 'ad_astra:glacio', displayName: 'Glacio', icon: 'ad_astra:glacio_globe', tier: 3 },
    { name: 'planetsplus:ganymede', displayName: 'Ganymede', icon: 'supplementaries:globe_sepia', tier: 5 },
    { name: 'charon', displayName: 'Charon', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'diater', displayName: 'Diater', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'dune', displayName: 'Dune', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'europa', displayName: 'Europa', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'galia', displayName: 'Galia', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'io', displayName: 'Io', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'jada', displayName: 'Jada', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'pluto', displayName: 'Pluto', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'soera', displayName: 'Soera', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'titan', displayName: 'Titan', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'vonic', displayName: 'Vonic', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'vulcan', displayName: 'Vulcan', icon: 'supplementaries:globe_sepia', tier: 4 }
];

GTCEuStartupEvents.registry("gtceu:dimension_marker", allthemods => {
    dimensions.forEach(dim => {
        allthemods.create(dim.name)
            .iconSupplier(() => Item.of(dim.icon).getItem())
            .tier(dim.tier)
            .overrideName(dim.displayName);
    });
});



GTCEuStartupEvents.registry("gtceu:material_icon_set", allthemods => {

    allthemods.create("infinity").parent(GTMaterialIconSet.DULL)

})