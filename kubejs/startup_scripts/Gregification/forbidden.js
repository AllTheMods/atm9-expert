GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('hephaestus_forge')
        .category('hephaestus')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 4, 4, 4) // 4 Item In, 1 Item Out, 2 Fluid In
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	

    allthemods.create('soul_extractor')
        .category('soul_extractor')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 4, 4, 4) // 4 Item In, 1 Item Out, 2 Fluid In
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('hephaestus_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hephaestus_forge')
        .appearanceBlock(() => Block.getBlock('gtceu:hephaestus_plating_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   HHH   ', '   CCC   ', '         ', '         ', '         ')
            .aisle(' HHHIHHH ', ' CCCCCCC ', '    G    ', '    G    ', '    E    ')
            .aisle(' HIHHHIH ', ' CCCCCCC ', '  G   G  ', '  G   G  ', '  E   E  ')
            .aisle('HHHHJHHHH', 'CCCCCCCCC', '         ', '         ', '         ')
            .aisle('HIHJIJHIH', 'CCCCCCCCC', ' G  A  G ', ' G     G ', ' E     E ')
            .aisle('HHHHJHHHH', 'CCCCCCCCC', '         ', '         ', '         ')
            .aisle(' HIHHHIH ', ' CCCCCCC ', '  G   G  ', '  G   G  ', '  E   E  ')
            .aisle(' HHHIHHH ', ' CCCCCCC ', '    G    ', '    G    ', '    E    ')
            .aisle('   HHH   ', '   CKC   ', '         ', '         ', '         ')
            .where('H', Predicates.blocks('forbidden_arcanus:polished_darkstone'))
            .where('I', Predicates.blocks('forbidden_arcanus:arcane_chiseled_polished_darkstone'))
            .where('J', Predicates.blocks('forbidden_arcanus:chiseled_arcane_polished_darkstone'))
            .where('A', Predicates.blocks('forbidden_arcanus:hephaestus_forge'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('E', Predicates.blocks('gtceu:forge_rune_casing'))
            .where('C', Predicates.blocks('gtceu:hephaestus_plating_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.air())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/hephaestus_plating_casing/hephaestus_plating_casing',
            'gtceu:block/multiblock/hephaestus_forge'
        );

    allthemods.create('soul_extractor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('soul_extractor')
        .appearanceBlock(() => Block.getBlock('gtceu:soulstone_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' CCCCCCC ', ' G  G  G ', ' G  G  G ', ' G  G  G ', ' CCCCCCC ')
            .aisle('ECCCCCCCE', 'G       G', 'G       G', 'G       G', 'ECCCCCCCE')
            .aisle('CCCCCCCCC', '         ', '         ', '         ', 'CCCCCCCCC')
            .aisle('ECCCCCCCE', 'G       G', 'G       G', 'G       G', 'ECCCCCCCE')
            .aisle(' CCCKCCC ', ' G  G  G ', ' G  G  G ', ' G  G  G ', ' CCCCCCC ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('E', Predicates.blocks('gtceu:soul_conduit_casing'))
            .where('C', Predicates.blocks('gtceu:soulstone_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/soulstone_casing/soulstone_casing',
            'gtceu:block/multiblock/soul_extractor'
        );
})

//Item.of('forbidden_arcanus:hephaestus_forge', '{BlockStateTag:{tier:5}}')