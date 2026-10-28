StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:hephaestus_plating_casing')
        .displayName('Hephaestus Plating Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:forge_rune_casing')
        .displayName('Forge Rune Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:soulstone_casing')
        .displayName('Soulstone Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:soul_conduit_casing')
        .displayName('Soul Conduit Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
});

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('industrial_dissolution_chamber')
        .category('dissolution')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 1, 4, 1) // 4 Item In, 1 Item Out, 2 Fluid In
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

    allthemods.create('latex_synthesizer')
        .category('synthesizer')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 1, 1, 1) // 4 Item In, 1 Item Out, 2 Fluid In
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)

    allthemods.create('printer')
        .category('printer')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 1, 1, 1) // 4 Item In, 1 Item Out, 2 Fluid In
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
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