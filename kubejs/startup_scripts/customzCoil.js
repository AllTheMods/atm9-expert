// priority: 10
StartupEvents.registry('block', allthemods => {
    

    allthemods.create(`draconium_coil_block`, "gtceu:coil")
        .textureAll('kubejs:block/coils/draconium_coil_block')
        .temperature(11200)
        .level(20)
        .energyDiscount(6)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('draconium'))
        .hardness(5)
        .soundType("metal");

    allthemods.create(`draconium_awakened_coil_block`, "gtceu:coil")
        .textureAll('kubejs:block/coils/draconium_awakened_coil_block')
        .temperature(12800)
        .level(24)
        .energyDiscount(8)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('draconium_awakened'))
        .hardness(5)
        .soundType("metal");

    allthemods.create(`etrium_coil_block`, "gtceu:coil")
        .textureAll('kubejs:block/coils/etrium_coil_block')
        .temperature(13500)
        .level(28)
        .energyDiscount(10)
        .tier(11)
        .coilMaterial(() => GTMaterials.get('etrium'))
        .hardness(5)
        .soundType("metal");

    allthemods.create(`infinity_coil_block`, "gtceu:coil")
        .textureAll('kubejs:block/coils/infinity_coil_block')
        .temperature(15000)
        .level(32)
        .energyDiscount(12)
        .tier(12)
        .coilMaterial(() => GTMaterials.get('infinity'))
        .hardness(5)
        .soundType("metal");

});