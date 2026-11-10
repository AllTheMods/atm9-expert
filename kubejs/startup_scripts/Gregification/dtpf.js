// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('item', allthemods => {
        allthemods.create('gtceu:megaseed')
        .displayName('Megaseed')
        .tooltip('Large, brown, teardrop-shaped fruits found inside the Mega Trees in Dimension 35-C')
 
    allthemods.create('gtceu:hyper_intelligent_neuron')
        .displayName('Hyper Intelligent Neuron')
        .tooltip('A neuron grown far past the limits of any model.')
 
    allthemods.create('gtceu:dimensional_anchor')
        .displayName('Dimensional Anchor')
        .tooltip('Anchors the DTPF to Dimension 35-C')
});

StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:hyperneural_casing')
        .displayName('Hyperneural Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    allthemods.create('gtceu:neural_pillar_core')
        .displayName('Neural Pillar Core')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
});

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('dimensionally_transcendent_trader')
        .category('dimensionally_transcendent_trader')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 2, 1)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)

    allthemods.create('hyper_neuron_cultivator')
        .category('hyper_neuron_cultivator')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 2, 0)
        .setSound(GTSoundEntries.CHEMICAL)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
});

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('dimensionally_transcendent_trader', 'simple')
        .tiers(GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('dimensionally_transcendent_trader')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        );

    allthemods.create('hyper_neuron_cultivator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hyper_neuron_cultivator')
        .appearanceBlock(() => Block.getBlock('gtceu:hyperneural_casing'))
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   CCCCC   ', '   CCCCC   ', '           ', '   CCCCC   ', '           ', '           ', '   CCCCC   ', '           ', '           ', '   CCCCC   ', '           ')
            .aisle('  CCCCCCC  ', '  C     C  ', '           ', '  C  C  C  ', '           ', '           ', '  C  C  C  ', '           ', '           ', '  C  C  C  ', '           ')
            .aisle(' CCCCCCCCC ', ' C       C ', '           ', ' C   C   C ', '           ', '           ', ' C   C   C ', '           ', '           ', ' C   C   C ', '           ')
            .aisle('CCCCCCCCCCC', 'C         C', '           ', 'C    C    C', '           ', '           ', 'C    C    C', '           ', '           ', 'C    C    C', '           ')
            .aisle('CCCCCCCCCCC', 'C         C', '           ', 'C    C    C', '           ', '           ', 'C    C    C', '           ', '           ', 'C    C    C', '           ')
            .aisle('CCCCCCCCCCC', 'C    P    C', '     P     ', 'CCCCCPCCCCC', '     P     ', '     P     ', 'CCCCCPCCCCC', '     P     ', '     P     ', 'CCCCCPCCCCC', '     C     ')
            .aisle('CCCCCCCCCCC', 'C         C', '           ', 'C    C    C', '           ', '           ', 'C    C    C', '           ', '           ', 'C    C    C', '           ')
            .aisle('CCCCCCCCCCC', 'C         C', '           ', 'C    C    C', '           ', '           ', 'C    C    C', '           ', '           ', 'C    C    C', '           ')
            .aisle(' CCCCCCCCC ', ' C       C ', '           ', ' C   C   C ', '           ', '           ', ' C   C   C ', '           ', '           ', ' C   C   C ', '           ')
            .aisle('  CCCCCCC  ', '  C     C  ', '           ', '  C  C  C  ', '           ', '           ', '  C  C  C  ', '           ', '           ', '  C  C  C  ', '           ')
            .aisle('   CCCCC   ', '   CCKCC   ', '           ', '   CCCCC   ', '           ', '           ', '   CCCCC   ', '           ', '           ', '   CCCCC   ', '           ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('gtceu:neural_pillar_core'))
            .where('C', Predicates.blocks('gtceu:hyperneural_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/hyperneural_casing/hyperneural_casing',
            'gtceu:block/multiblock/hyper_neuron_cultivator'
        )
});
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
