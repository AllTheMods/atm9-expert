// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.



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


})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('industrial_dissolution_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_dissolution_chamber')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()

            .aisle('CCCCCCCCC', 'CGGGGGGGC', 'CGCCCCCCC', 'CGC      ', 'CGC      ', 'CGC      ', 'CCC      ')
            .aisle('CCCCCCCCC', 'G       G', 'G CCCCCCC', 'G C      ', 'G C      ', 'G C      ', 'CCC      ')
            .aisle('CKCCCCCCC', 'CGGGGGGGC', 'CGCCCCCCC', 'CGC      ', 'CGC      ', 'CGC      ', 'CCC      ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/large_chemical_reactor')

    allthemods.create('latex_synthesizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('latex_synthesizer')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CGGGC', 'CCCCC')
            .aisle('CCCCC', 'G   G', 'CCCCC')
            .aisle('CCCCC', 'G   G', 'CCCCC')
            .aisle('CCCCC', 'G   G', 'CCCCC')
            .aisle('CCKCC', 'CGGGC', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/large_chemical_reactor')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
