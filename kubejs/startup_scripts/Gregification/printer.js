// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:lattice_casing')
        .displayName('Lattice Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:emitter_coil_casing')
        .displayName('Emitter Coil Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:print_bed_casing')
        .displayName('Print Bed Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:emitter_head_casing')
        .displayName('Emitter Head Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
});
GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('printer')
        .category('printer')
        .setEUIO('in')
        .setMaxIOSize(12, 1, 3, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('printer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('printer')
        .appearanceBlock(() => Block.getBlock('gtceu:lattice_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCC', '         ', '         ', '         ', '         ', '         ', '         ')
            .aisle('CCCCCCCCC', ' E     E ', ' E     E ', ' E     E ', ' E     E ', ' E     E ', ' EEEEEEE ')
            .aisle('CCCCCCCCC', '  BBBBB  ', '  #####  ', '  #####  ', '  #####  ', '  #####  ', ' E     E ')
            .aisle('CCCCCCCCC', '  BBBBB  ', '  #####  ', '  ##H##  ', '  ##C##  ', '  ##C##  ', ' ECCCCCE ')
            .aisle('CCCCCCCCC', '  BBBBB  ', '  #####  ', '  #####  ', '  #####  ', '  #####  ', ' E     E ')
            .aisle('CCCCCCCCC', ' E     E ', ' E     E ', ' E     E ', ' E     E ', ' E     E ', ' EEEEEEE ')
            .aisle('CCCCCCCCC', ' CCCKCCC ', '         ', '         ', '         ', '         ', '         ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('E', Predicates.blocks('gtceu:emitter_coil_casing'))
            .where('B', Predicates.blocks('gtceu:print_bed_casing'))
            .where('H', Predicates.blocks('gtceu:emitter_head_casing'))
            .where('C', Predicates.blocks('gtceu:lattice_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/lattice_casing/lattice_casing',
            'gtceu:block/multiblock/printer'
        );
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
