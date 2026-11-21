// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('peat_generator')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMBUSTION)

    allthemods.create('bit_processor')
        .category('bit_processor')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 0, 3)
        .setSound(GTSoundEntries.MACERATOR)
        .setSlotOverlay(false, false, GuiTextures.CRUSHED_ORE_OVERLAY)
        .setSlotOverlay(true, false, GuiTextures.DUST_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {

    allthemods.create('bit_processor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('bit_processor')
                .workableTieredHullModel('gtceu:block/machines/macerator')
        )
        
    allthemods.create('peat_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('peat_generator')
        .noRecipeModifier()
        .generator(true)
        .recoveryStacks(() => [Item.of('forestry:ash')])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFF', 'CCC', 'CCC', 'CCC', 'CCC')
            .aisle('FFF', 'CPC', 'CPC', 'CPC', 'CMC')
            .aisle('FFF', 'CKC', 'CCC', 'CCC', 'CCC')
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('M', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/generator/large_steel_boiler'
        )
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.