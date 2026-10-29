// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:otherstone_casing')
        .displayName('Otherstone Plating Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:spirit_flame_casing')
        .displayName('Spirit Flame Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:ritual_brass_casing')
        .displayName('Ritual Brass Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
});

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('industrial_spirit_infuser')
        .category('infuser')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 4, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)

    allthemods.create('industrial_ritual_machine')
        .category('ritual')
        .setEUIO('in')
        .setMaxIOSize(16, 1, 12, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('industrial_spirit_infuser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_spirit_infuser')
        .appearanceBlock(() => Block.getBlock('gtceu:otherstone_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ECCCE', 'GGGGG', 'GGGGG', 'GGGGG', 'ECCCE')
            .aisle('CCCCC', 'G   G', 'G   G', 'G   G', 'CCCCC')
            .aisle('CCCCC', 'G S G', 'G   G', 'G   G', 'CCCCC')
            .aisle('CCCCC', 'G   G', 'G   G', 'G   G', 'CCCCC')
            .aisle('ECKCE', 'GGGGG', 'GGGGG', 'GGGGG', 'ECCCE')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('S', Predicates.blocks('occultism:spirit_fire'))
            .where('E', Predicates.blocks('gtceu:spirit_flame_casing'))
            .where('C', Predicates.blocks('gtceu:otherstone_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/otherstone_casing/otherstone_casing',
            'gtceu:block/multiblock/industrial_spirit_infuser'
        );

    allthemods.create('industrial_ritual_machine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_ritual_machine')
        .appearanceBlock(() => Block.getBlock('gtceu:otherstone_casing'))
        .recipeModifiers(GTRecipeModifiers.OC_NON_PERFECT)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCC', 'CCCCCCC', 'CCCCCCC')
            .aisle('CEEEEEC', 'GS   SG', 'CEEEEEC')
            .aisle('CEEEEEC', 'G  S  G', 'CEEEEEC')
            .aisle('CEEEEEC', 'G SBS G', 'CEEEEEC')
            .aisle('CEEEEEC', 'G  S  G', 'CEEEEEC')
            .aisle('CEEEEEC', 'GS   SG', 'CEEEEEC')
            .aisle('CCCCCCC', 'CCCKCCC', 'CCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('occultism:golden_sacrificial_bowl'))
            .where('S', Predicates.blocks('occultism:sacrificial_bowl'))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('E', Predicates.blocks('gtceu:ritual_brass_casing'))
            .where('C', Predicates.blocks('gtceu:otherstone_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/otherstone_casing/otherstone_casing',
            'gtceu:block/multiblock/industrial_ritual_machine'
        );
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
