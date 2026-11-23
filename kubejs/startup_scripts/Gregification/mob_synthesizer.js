GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('mob_synthesis')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.BOXED_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('mob_synthesizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mob_synthesis')        
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .tooltips(
            Component.translatable('block.gtceu.mob_synthesizer.tooltip.1'),
            Component.translatable('block.gtceu.mob_synthesizer.tooltip.2')
        )
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('PCCCP', 'PCCCP', 'PTTTP', 'PCCCP', 'PCCCP')
            .aisle('CDDDC', 'C###C', 'T###T', 'C###C', 'CDDDC')
            .aisle('CDDDC', 'C###C', 'T#T#T', 'C###C', 'CDDDC')
            .aisle('CDDDC', 'C###C', 'T###T', 'C###C', 'CDDDC')
            .aisle('PCCCP', 'PCCCP', 'PTKTP', 'PCCCP', 'PCCCP')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.air())
            .where('P', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
            .where('D', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('T', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .build())
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/research_station')
})


StartupEvents.registry('item', allthemods => {
    allthemods.create('gtceu:neural_substrate').displayName('Neural Substrate')
    allthemods.create('gtceu:synaptic_lattice').displayName('Synaptic Lattice')
    allthemods.create('gtceu:cortex_matrix').displayName('Cortex Matrix')
    allthemods.create('gtceu:apex_matrix').displayName('Apex Matrix')
})
