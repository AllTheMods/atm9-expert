const GTX = Java.loadClass('com.gtextras.api.GTX');

   
StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:sanguine_vessel_casing')
        .displayName('Sanguine Vessel Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:blood_splash_casing')
        .displayName('Splash Basin Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:will_orb_casing')
        .displayName('Will Orb Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
});

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    
    allthemods.create('sanguine_synthesis')
        .category('sanguine_synthesis')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 2, 2)
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);

    allthemods.create('sanguine_alchemy')
        .category('sanguine_alchemy')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

    allthemods.create('sanguine_forge')
        .category('sanguine_forge')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);

    allthemods.create('sanguine_arc')
        .category('sanguine_arc')
        .setEUIO('in')
        .setMaxIOSize(2, 4, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

    allthemods.create('sanguine_array')
        .category('sanguine_array')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('sanguine_alchemy', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('sanguine_alchemy')
                .workableTieredHullModel('gtceu:block/machines/chemical_bath')
        );

    allthemods.create('sanguine_forge', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('sanguine_forge')
                .workableTieredHullModel('gtceu:block/machines/forge_hammer')
        );

    allthemods.create('sanguine_arc', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('sanguine_arc')
                .workableTieredHullModel('gtceu:block/machines/macerator')
        );

    allthemods.create('sanguine_array', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('sanguine_array')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        );

    allthemods.create('sanguine_synthesizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('sanguine_synthesis'), GTRecipeTypes.get('sanguine_alchemy'), GTRecipeTypes.get('sanguine_forge'), GTRecipeTypes.get('sanguine_array'), GTRecipeTypes.get('sanguine_arc')])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('gtceu:sanguine_vessel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('OOOOOOO', 'OCCBCCO', 'OCCBCCO', 'OCCBCCO', 'OOOOOOO')
            .aisle('OCCBCCO', 'C#####C', 'C#####C', 'C#####C', 'OCCBCCO')
            .aisle('OCCBCCO', 'B#####B', 'B#####B', 'B#####B', 'OCCBCCO')
            .aisle('OCCBCCO', 'C#####C', 'C#####C', 'C#####C', 'OCCBCCO')
            .aisle('OOOOOOO', 'OCCBCCO', 'OCCSCCO', 'OCCBCCO', 'OOOOOOO')
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:blood_splash_casing'))
            .where('O', Predicates.blocks('gtceu:will_orb_casing'))
            .where('C', Predicates.blocks('gtceu:sanguine_vessel_casing').setMinGlobalLimited(30)
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(GTX.BLOOD_INPUT).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(GTX.BLOOD_OUTPUT).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(GTX.WILL_INPUT).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(GTX.WILL_OUTPUT).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2)))
            .where('#', Predicates.air())
            .build())
        .workableCasingModel('gtceu:block/casings/blood_splash_casing/blood_splash_casing',
            'gtceu:block/multiblock/sanguine_synthesizer');
});