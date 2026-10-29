// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:sourcestone_plating_casing')
        .displayName('Sourcestone Plating Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:source_conduit_casing')
        .displayName('Source Conduit Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:glyph_core_casing')
        .displayName('Glyph Core Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
});

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('imbument_chamber')
        .category('imbument_chamber')
        .setEUIO('in')
        .setMaxIOSize(12, 3, 1, 0)
        .setSound(GTSoundEntries.BOILER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT);

    allthemods.create('enchanting_apparatus')
        .category('enchanting_apparatus')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 1, 0)
        .setSound(GTSoundEntries.BOILER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT);

    allthemods.create('scribes_table')
        .category('scribes_table')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 1, 0)
        .setSound(GTSoundEntries.BOILER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create("imbument_chamber", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("imbument_chamber")
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );

    allthemods.create("enchanting_apparatus", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("enchanting_apparatus")
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );

    allthemods.create("scribes_table", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("scribes_table")
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );

    allthemods.create('arcane_atelier', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('imbument_chamber', 'enchanting_apparatus', 'scribes_table')
        .appearanceBlock(() => Block.getBlock('gtceu:sourcestone_plating_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCECCC', 'NGGGGGN', 'NGGGGGN', 'NGGGGGN', 'CCCECCC')
            .aisle('CCCCCCC', 'GI P JG', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('ECCCCCE', 'GP J PG', 'G     G', 'G     G', 'EGGGGGE')
            .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'GJ P IG', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCKCCC', 'NGGGGGN', 'NGGGGGN', 'NGGGGGN', 'CCCECCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('A', Predicates.blocks('ars_nouveau:enchanting_apparatus'))
            .where('P', Predicates.blocks('ars_nouveau:arcane_pedestal'))            
            .where('I', Predicates.blocks('ars_nouveau:imbuement_chamber'))
            .where('J', Predicates.blocks('ars_nouveau:source_jar'))
            .where('N', Predicates.blocks('gtceu:source_conduit_casing'))
            .where('E', Predicates.blocks('gtceu:glyph_core_casing'))
            .where('C', Predicates.blocks('gtceu:sourcestone_plating_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(GTX.SOURCE_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.SOURCE_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/sourcestone_plating_casing/sourcestone_plating_casing',
            'gtceu:block/multiblock/arcane_atelier'
        )
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
