GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mob_synthesis')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(8, 1, 1, 0) // items: model, circuit, dye, orb, chain items | out | fluid in | fluid out
        .setSlotOverlay(false, false, GuiTextures.BOXED_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mob_synthesizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mob_synthesis')
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .tooltips(
            Component.literal('§cFor peaceful-mode players: synthesizes HNN data models.'),
            Component.literal('§7Circuit (1-32) + dye page picks the mob.'),
            Component.literal('§7A Blood Orb in the bus (not consumed) gates the tier.'),
            Component.literal('§7Harder mobs need higher voltage and chain items.')
        )
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('PCCCP', 'PCCCP', 'PTTTP', 'PCCCP', 'PCCCP')
            .aisle('CDDDC', 'C###C', 'T###T', 'C###C', 'CDDDC')
            .aisle('CDDDC', 'C###C', 'T#T#T', 'C###C', 'CDDDC')
            .aisle('CDDDC', 'C###C', 'T###T', 'C###C', 'CDDDC')
            .aisle('PCCCP', 'PCCCP', 'PTKTP', 'PCCCP', 'PCCCP')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.air())
            .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get()))
            .where('D', Predicates.blocks(GTBlocks.CASING_TITANIUM_GEARBOX.get()))
            .where('T', Predicates.blocks(Block.getBlock('mob_grinding_utils:tinted_glass')))
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get()).setMinGlobalLimited(36)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2)))
            .build())
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_stable_titanium',
            'gtceu:block/multiblock/implosion_compressor')
})

// Complex items (Needs custom textures)
StartupEvents.registry('item', event => {
    event.create('neural_substrate').displayName('Neural Substrate').texture('minecraft:item/slime_ball')
    event.create('synaptic_lattice').displayName('Synaptic Lattice').texture('minecraft:item/amethyst_shard')
    event.create('cortex_matrix').displayName('Cortex Matrix').texture('minecraft:item/heart_of_the_sea')
    event.create('apex_matrix').displayName('Apex Matrix').texture('minecraft:item/nether_star')
})
