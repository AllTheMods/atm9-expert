// Peaceful-mode friendly "Mob Synthesizer" (MV+)
// Turns Blank Data Model + Programmed Circuit (1-32) + Blood Magic blood into a HNN data model.

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('mob_synthesis')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0) // item in (model, circuit, page item), item out, fluid in, fluid out
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
            Component.literal('§cFor peaceful-mode players: synthesizes HNN data models.'),
            Component.literal('§7Circuit (1-32) picks the mob; a dye in the bus picks the page (none = page 1).')
        )
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC')
            .aisle('CCC', 'C#C', 'CCC')
            .aisle('CKC', 'CCC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.air())
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(14)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2)))
            .build())
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor')
})
