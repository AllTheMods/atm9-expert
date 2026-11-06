// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

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

    allthemods.create(`gtceu:draconium_coil_block`, "gtceu:coil")
        //.textureAll('kubejs:block/coils/draconium_coil_block')
        .temperature(11200)
        .level(20)
        .energyDiscount(6)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('draconium'))
        .hardness(5)
        .soundType("metal");

    allthemods.create(`gtceu:draconium_awakened_coil_block`, "gtceu:coil")
        //.textureAll('kubejs:block/coils/draconium_awakened_coil_block')
        .temperature(12800)
        .level(24)
        .energyDiscount(8)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('draconium_awakened'))
        .hardness(5)
        .soundType("metal");

    allthemods.create(`gtceu:etrium_coil_block`, "gtceu:coil")
        //.textureAll('kubejs:block/coils/etrium_coil_block')
        .temperature(13500)
        .level(28)
        .energyDiscount(10)
        .tier(11)
        .coilMaterial(() => GTMaterials.get('etrium'))
        .hardness(5)
        .soundType("metal");

    allthemods.create(`gtceu:infinity_coil_block`, "gtceu:coil")
        //.textureAll('kubejs:block/coils/infinity_coil_block')
        .temperature(15000)
        .level(32)
        .energyDiscount(12)
        .tier(12)
        .coilMaterial(() => GTMaterials.get('infinity'))
        .hardness(5)
        .soundType("metal");

    allthemods.create(`gtceu:slate_casing`)
        // @ts-ignore
        .displayName('Slate Casing')
        //.textureAll('gtceu:block/casings/slate_casing/slate_casing')
        .hardness(1.0)
        .resistance(1.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    allthemods.create(`gtceu:gadolinium_casing`)
        // @ts-ignore
        .displayName('Gadolinium Casing')
        //.textureAll(`gtceu:block/casings/gadolinium_casing/gadolinium_casing`)
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    allthemods.create(`gtceu:heat_exchange_casing`)
        // @ts-ignore
        .displayName('Heat Exchange Casing')
        //.textureAll(`gtceu:block/casings/heat_exchange_casing/heat_exchange_casing`)
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    allthemods.create(`gtceu:adamantium_casing`)
        // @ts-ignore
        .displayName('Adamantium Casing')
        //.textureAll(`gtceu:block/casings/adamantium_casing/adamantium_casing`)
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    allthemods.create(`gtceu:zirconium_casing`)
        // @ts-ignore
        .displayName('Zirconium Casing')
        //.textureAll(`gtceu:block/casings/zirconium_casing/zirconium_casing`)
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    allthemods.create('gtceu:magical_soil')
        //.textureAll('gtceu:block/casings/magical_soil/magical_soil_side')
        //.texture('up', 'gtceu:block/casings/magical_soil/magical_soil_top')
        //.texture('down', 'gtceu:block/casings/magical_soil/magical_soil_side')
        .displayName('§bMagical Soil')
        .grassSoundType()
        .mapColor('grass')
        .hardness(0.6);

    coils.forEach(coil => {
        let block = allthemods.create(`gtceu:${coil.name}_casing`)
            // @ts-ignore
            .displayName(coil.displayName)
            //.textureAll(`gtceu:block/casings/${coil.name}_casing/${coil.name}_casing`)
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
            //.textureAll(casing.tex)
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
    allthemods.create("bacteria_colony").parent(GTMaterialIconSet.DULL)
    allthemods.create("bacteria_matrix").parent(GTMaterialIconSet.DULL)
    allthemods.create("bacteria_cultivated").parent(GTMaterialIconSet.DULL)
    allthemods.create("bacteria_mutated").parent(GTMaterialIconSet.DULL)
    allthemods.create("bacteria_seed").parent(GTMaterialIconSet.DULL)
    allthemods.create("bacteria_vegetative").parent(GTMaterialIconSet.DULL)
    allthemods.create("kevlar").parent(GTMaterialIconSet.DULL)
    allthemods.create("bedrockium").parent(GTMaterialIconSet.DULL)

})


const TagUtil = Java.loadClass('com.gregtechceu.gtceu.api.data.tag.TagUtil');
const ItemRegistry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries').ITEM;

function makeMaterialTag(base) {
    return (tp, mat) => TagUtil.createModTag(ItemRegistry, base + '/' + mat.getName());
}

function makeFixedTag(path) {
    return (tp, mat) => TagUtil.createModTag(ItemRegistry, path);
}

function addGtAliases(prefix, paths) {
    paths.forEach(path => {
        if (path.endsWith('/%s')) {
            prefix.customTagPath(path, makeMaterialTag(path.substring(0, path.length - 3)));
        } else {
            prefix.customTagPath(path, makeFixedTag(path));
        }
    });
}

function pipePaths(kind, size) {
    const paths = [];
    if (kind == 'fluid') {
        paths.push('pipes/fluid/' + size + '/%s', 'pipes/fluid/' + size, 'pipes/fluid');
    } else {
        paths.push('pipes/' + kind + '/' + size + '/%s', 'pipes/' + kind + '/' + size, 'pipes/' + kind);
    }
    paths.push('pipes', 'pipes/' + kind + '/%s', 'pipes/%s', 'pipes/' + size + '/%s', 'pipes/' + size);
    return paths;
}

function sizedPaths(root, size) {
    return [root + '/' + size + '/%s', root + '/' + size, root, root + '/%s'];
}

addGtAliases(TagPrefix.pipeTinyFluid, pipePaths('fluid', 'tiny'));
addGtAliases(TagPrefix.pipeSmallFluid, pipePaths('fluid', 'small'));
addGtAliases(TagPrefix.pipeNormalFluid, pipePaths('fluid', 'medium'));
addGtAliases(TagPrefix.pipeLargeFluid, pipePaths('fluid', 'large'));
addGtAliases(TagPrefix.pipeHugeFluid, pipePaths('fluid', 'huge'));

addGtAliases(TagPrefix.pipeSmallItem, pipePaths('item', 'small'));
addGtAliases(TagPrefix.pipeNormalItem, pipePaths('item', 'medium'));
addGtAliases(TagPrefix.pipeLargeItem, pipePaths('item', 'large'));
addGtAliases(TagPrefix.pipeHugeItem, pipePaths('item', 'huge'));

addGtAliases(TagPrefix.pipeSmallRestrictive, pipePaths('restrictive', 'small'));
addGtAliases(TagPrefix.pipeNormalRestrictive, pipePaths('restrictive', 'medium'));
addGtAliases(TagPrefix.pipeLargeRestrictive, pipePaths('restrictive', 'large'));
addGtAliases(TagPrefix.pipeHugeRestrictive, pipePaths('restrictive', 'huge'));

addGtAliases(TagPrefix.wireGtSingle, sizedPaths('wires', 'single'));
addGtAliases(TagPrefix.wireGtDouble, sizedPaths('wires', 'double'));
addGtAliases(TagPrefix.wireGtQuadruple, sizedPaths('wires', 'quadruple'));
addGtAliases(TagPrefix.wireGtOctal, sizedPaths('wires', 'octal'));
addGtAliases(TagPrefix.wireGtHex, sizedPaths('wires', 'hex'));

addGtAliases(TagPrefix.cableGtSingle, sizedPaths('cables', 'single'));
addGtAliases(TagPrefix.cableGtDouble, sizedPaths('cables', 'double'));
addGtAliases(TagPrefix.cableGtQuadruple, sizedPaths('cables', 'quadruple'));
addGtAliases(TagPrefix.cableGtOctal, sizedPaths('cables', 'octal'));
addGtAliases(TagPrefix.cableGtHex, sizedPaths('cables', 'hex'));

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.