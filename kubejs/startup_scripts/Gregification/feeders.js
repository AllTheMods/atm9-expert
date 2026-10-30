// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('sanguine_feeder')
        .category('sanguine_feeder')
        .setEUIO('none')
        .setMaxIOSize(1, 0, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);

    allthemods.create('mana_feeder')
        .category('mana_feeder')
        .setEUIO('none')
        .setMaxIOSize(1, 0, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);

    allthemods.create('will_feeder')
        .category('will_feeder')
        .setEUIO('none')
        .setMaxIOSize(1, 0, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);

    allthemods.create('source_feeder')
        .category('source_feeder')
        .setEUIO('none')
        .setMaxIOSize(1, 0, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);

})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('sanguine_feeder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('sanguine_feeder')])
        .appearanceBlock(() => Block.getBlock('gtceu:sanguine_vessel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CBC', 'CCC')
            .aisle('CBC', 'B#B', 'CBC')
            .aisle('CKC', 'CBC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:blood_splash_casing'))
            .where('C', Predicates.blocks('gtceu:sanguine_vessel_casing')
                .or(Predicates.abilities(GTX.BLOOD_INPUT).setExactLimit(1))
                .or(Predicates.abilities(GTX.BLOOD_OUTPUT).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/sanguine_vessel_casing/sanguine_vessel_casing',
            'gtceu:block/multiblock/sanguine_synthesizer'
        );
    allthemods.create('mana_feeder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('mana_feeder')])
        .appearanceBlock(() => Block.getBlock('gtceu:overgrown_plating_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CBC', 'CCC')
            .aisle('CBC', 'B#B', 'CBC')
            .aisle('CKC', 'CBC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:overgrown_conduit_casing'))
            .where('C', Predicates.blocks('gtceu:overgrown_plating_casing')
                .or(Predicates.abilities(GTX.MANA_INPUT).setExactLimit(1))
                .or(Predicates.abilities(GTX.MANA_OUTPUT).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/overgrown_plating_casing/overgrown_plating_casing',
            'gtceu:block/multiblock/botanical_factory'
        );

    allthemods.create('will_feeder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('will_feeder')])
        .appearanceBlock(() => Block.getBlock('gtceu:will_orb_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CBC', 'CCC')
            .aisle('CBC', 'B#B', 'CBC')
            .aisle('CKC', 'CBC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:sanguine_vessel_casing'))
            .where('C', Predicates.blocks('gtceu:will_orb_casing')
                .or(Predicates.abilities(GTX.WILL_INPUT).setExactLimit(1))
                .or(Predicates.abilities(GTX.WILL_OUTPUT).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/will_orb_casing/will_orb_casing',
            'gtceu:block/multiblock/sanguine_synthesizer'
        );

    allthemods.create('source_feeder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('source_feeder')])
        .appearanceBlock(() => Block.getBlock('gtceu:sourcestone_plating_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CBC', 'CCC')
            .aisle('CBC', 'B#B', 'CBC')
            .aisle('CKC', 'CBC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:source_conduit_casing'))
            .where('C', Predicates.blocks('gtceu:sourcestone_plating_casing')
                .or(Predicates.abilities(GTX.SOURCE_INPUT).setExactLimit(1))
                .or(Predicates.abilities(GTX.SOURCE_OUTPUT).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/sourcestone_plating_casing/sourcestone_plating_casing',
            'gtceu:block/multiblock/arcane_atelier'
        );
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
