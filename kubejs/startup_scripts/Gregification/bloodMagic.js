// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

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
    allthemods.create('sanguine_ritual')
        .category('sanguine_ritual')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(16, 16, 1, 1) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)

    allthemods.create('sanguine_synthesis')
        .category('sanguine_synthesis')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 2, 2)
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);

    allthemods.create('sanguine_alchemy')
        .category('sanguine_alchemy')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

    allthemods.create('sanguine_forge')
        .category('sanguine_forge')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);

    allthemods.create('sanguine_arc')
        .category('sanguine_arc')
        .setEUIO('in')
        .setMaxIOSize(2, 4, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

    allthemods.create('sanguine_array')
        .category('sanguine_array')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 1)
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
        .workableCasingModel('gtceu:block/casings/sanguine_vessel_casing/sanguine_vessel_casing', 'gtceu:block/multiblock/sanguine_synthesizer');

    
    allthemods.create('sanguine_ritual', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('sanguine_ritual')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCCCC', 'CGGGGGGGGGC', 'CUUUUUUUUUC', 'C         C', 'C         C', 'C         C', 'C         C', 'C         C')
            .aisle('CRRRRCRRRRC', 'G         G', 'UHHH   HHHU', '  UUUUUUU  ', '           ', '           ', '           ', '           ')
            .aisle('CRRRRCRRRRC', 'G         G', 'UHRH   HRHU', ' URH   HRU ', '  RUUUUUR  ', '  R     R  ', '  R     R  ', '           ')
            .aisle('CRRCCCCCRRC', 'G  H   H  G', 'UHHH   HHHU', ' UHH   HHU ', '  UHHHHHU  ', '    UUU    ', '           ', '           ')
            .aisle('CRRCCCCCRRC', 'G   CGC   G', 'U   CGC   U', ' U  CGC  U ', '  UHCCCHU  ', '   UGGGU   ', '           ', '           ')
            .aisle('CCCCCCCCCCC', 'G   GFG   G', 'U   GFG   U', ' U  GFG  U ', '  UHCFCHU  ', '   UGFGU   ', '     B     ', '           ')
            .aisle('CRRCCCCCRRC', 'G   CGC   G', 'U   CGC   U', ' U  CGC  U ', '  UHCCCHU  ', '   UGGGU   ', '           ', '           ')
            .aisle('CRRCCCCCRRC', 'G  H   H  G', 'UHHH   HHHU', ' UHH   HHU ', '  UHHHHHU  ', '    UUU    ', '           ', '           ')
            .aisle('CRRRRCRRRRC', 'G         G', 'UHRH   HRHU', ' URH   HRU ', '  RUUUUUR  ', '  R     R  ', '  R     R  ', '           ')
            .aisle('CRRRRCRRRRC', 'G         G', 'UHHH   HHHU', '  UUUUUUU  ', '           ', '           ', '           ', '           ')
            .aisle('CCCCCKCCCCC', 'CGGGGGGGGGC', 'CUUUUUUUUUC', 'C         C', 'C         C', 'C         C', 'C         C', 'C         C')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('bloodmagic:altar'))
            .where('R', Predicates.blocks('bloodmagic:bloodstonebrick'))
            .where('U', Predicates.blocks('bloodmagic:blankrune')
                .or(Predicates.blocks('bloodmagic:speedrune'))
                .or(Predicates.blocks('bloodmagic:sacrificerune'))
                .or(Predicates.blocks('bloodmagic:selfsacrificerune'))
                .or(Predicates.blocks('bloodmagic:dislocationrune'))
                .or(Predicates.blocks('bloodmagic:altarcapacityrune'))
                .or(Predicates.blocks('bloodmagic:bettercapacityrune'))
                .or(Predicates.blocks('bloodmagic:orbcapacityrune'))
                .or(Predicates.blocks('bloodmagic:accelerationrune'))
                .or(Predicates.blocks('bloodmagic:chargingrune'))
            )
            .where('F', Predicates.blocks('gtceu:hv_hermetic_casing'))
            .where('H', Predicates.blocks('gtceu:hsla_steel_frame'))
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/distillation_tower')
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
