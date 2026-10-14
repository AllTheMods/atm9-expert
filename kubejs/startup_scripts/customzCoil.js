// priority: 10
StartupEvents.registry('block', event => {
    event.create(`infinity_coil_block`, "gtceu:coil")
        .textureAll('kubejs:block/coils/infinity_coil_block')
        .temperature(15000)
        .level(32)
        .energyDiscount(8)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('infinity'))
        .hardness(5)
        .soundType("metal");

});