const GTX = Java.loadClass('com.gtextras.api.GTX');

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('extras_test')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('extras_test_multiblock', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('extras_test')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CCCCC', 'CCCCC')
            .aisle('CCCCC', 'C###C', 'CCCCC')
            .aisle('CCSCC', 'CCCCC', 'CCCCC')
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(18)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(GTX.MANA_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.MANA_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.SOURCE_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.SOURCE_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.BLOOD_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.BLOOD_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.WILL_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.WILL_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.ROTATION_READER).setMaxGlobalLimited(1))
                .or(Predicates.blocks('gtextras:rotation_coupler').setMaxGlobalLimited(1))
                .or(Predicates.blocks('gtextras:rotation_motor').setMaxGlobalLimited(1)))
            .where('#', Predicates.air())
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor');
});
