

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('sunnarium_generator')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    allthemods.create('lunarium_generator')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    allthemods.create('industrial_leacher')
        .category('industrial_leacher')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)

    allthemods.create('acid_brewing_vat')
        .category('acid_brewing_vat')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)


})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('sunnarium_generator', 'generator')
        .tiers(GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('sunnarium_generator')
                .recipeModifier(MachineModifiers.SIMPLE_GENERATOR, true)
                .workableTieredHullModel('gtceu:block/generators/combustion')
        )

    allthemods.create('lunarium_generator', 'generator')
        .tiers(GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('lunarium_generator')
                .recipeModifier(MachineModifiers.SIMPLE_GENERATOR, true)
                .workableTieredHullModel('gtceu:block/generators/combustion')
        )
    allthemods.create('industrial_leacher', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('industrial_leacher')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('K')
            //.where('D', Predicates.heatingCoils())
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            //.where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            //.where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
            //.or(Predicates.autoAbilities(definition.getRecipeTypes()))
            //.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            //.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            //)
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor"
        )

    allthemods.create('acid_brewing_vat', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('acid_brewing_vat')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('K')
            //.where('D', Predicates.heatingCoils())
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            //.where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            //.where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
            //.or(Predicates.autoAbilities(definition.getRecipeTypes()))
            //.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            //.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            //)
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor"
        )

});