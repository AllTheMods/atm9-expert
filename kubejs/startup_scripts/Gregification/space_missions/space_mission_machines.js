// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    for (var t = 1; t <= 6; t++) {
        allthemods.create('destination_encoder_t' + t)
            .category('destination_encoder')
            .setEUIO('in')
            .setMaxIOSize(6, 1, 0, 0)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.COMPRESSOR)
    }

    allthemods.create('launch_platform')
        .category('launch_platform')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)

    allthemods.create('payload_opener')
        .category('payload_opener')
        .setEUIO('in')
        .setMaxIOSize(2, 14, 0, 8)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)

    allthemods.create('scrap_reclaimer')
        .category('scrap_reclaimer')
        .setEUIO('in')
        .setMaxIOSize(1, 8, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)

    allthemods.create('research_compiler')
        .category('research_compiler')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    var chanceBoost = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.boost.ChanceBoostFunction').OVERCLOCK;
    ['payload_opener', 'scrap_reclaimer'].forEach(function (name) {
        GTRecipeTypes.get(name).setChanceFunction(chanceBoost);
    });

    allthemods.create('destination_encoder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('destination_encoder_t1', 'destination_encoder_t2', 'destination_encoder_t3', 'destination_encoder_t4', 'destination_encoder_t5', 'destination_encoder_t6')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'SCCCS', 'FGGGF', 'FGGGF', 'FCCCF', '     ', '     ', '     ', '     ')
            .aisle('CCCCC', 'C   C', 'G   G', 'G   G', 'CSSSC', ' F F ', ' F F ', ' FFF ', '     ')
            .aisle('CCCCC', 'CRRRC', 'G S G', 'G S G', 'CSSSC', '  S  ', '  S  ', ' FRF ', '  F  ')
            .aisle('CCCCC', 'C   C', 'G   G', 'G   G', 'CSSSC', ' F F ', ' F F ', ' FFF ', '     ')
            .aisle('CCCCC', 'SCKCS', 'FGGGF', 'FGGGF', 'FCCCF', '     ', '     ', '     ', '     ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
            .where('R', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('F', Predicates.frames(GTMaterials.StainlessSteel))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(8)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/assembly_line'
        )

    allthemods.create('research_compiler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('research_compiler')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCC', 'FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC', '       ', '       ', '       ', '       ', 'SSSSSSS', '       ')
            .aisle('CCCCCCC', 'C     C', 'C     C', 'C     C', 'CCCCCCC', '       ', '       ', '       ', ' SSSSS ', 'S     S', '       ')
            .aisle('CCCCCCC', 'C     C', 'C     C', 'C     C', 'CCCCCCC', '       ', '       ', '  SSS  ', ' S   S ', 'S     S', '       ')
            .aisle('CCCCCCC', 'C     C', 'C     C', 'C     C', 'CCCRCCC', '   F   ', '   F   ', '  SFS  ', ' S F S ', 'S  F  S', '   F   ')
            .aisle('CCCCCCC', 'C     C', 'C     C', 'C     C', 'CCCCCCC', '       ', '       ', '  SSS  ', ' S   S ', 'S     S', '       ')
            .aisle('CCCCCCC', 'C     C', 'C     C', 'C     C', 'CCCCCCC', '       ', '       ', '       ', ' SSSSS ', 'S     S', '       ')
            .aisle('CCCCCCC', 'FCCKCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC', '       ', '       ', '       ', '       ', 'SSSSSSS', '       ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
            .where('R', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('F', Predicates.frames(GTMaterials.StainlessSteel))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(40)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/assembly_line'
        )

    allthemods.create('launch_platform', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('launch_platform')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCC', 'CCCCCCC', 'F FFF F', 'F FFF F', 'F FFF F', 'F FFF F', 'F FFF F', 'FFFFFFF', 'F FFF F', 'F FFF F', 'F FFF F', 'F FFF F', 'F FFF F', 'FFFFFFF', 'F FFF F', '  FFF  ', '  FFF  ', '  FFF  ', '  FFF  ', '  FFF  ')
            .aisle('CDDDDDC', 'C     C', '  F F  ', '  F F  ', '  FFF  ', '  F F  ', '  F F  ', 'F FFF F', '  F F  ', '  F F  ', '  FFF  ', '  F F  ', '  F F  ', 'F FFF F', '  F F  ', '  F F  ', '  FFF  ', '  F F  ', '  F F  ', '  FFF  ')
            .aisle('CDRRRDC', 'C     C', '       ', '       ', '       ', '       ', '       ', 'F  F  F', '       ', '       ', '       ', '       ', '       ', 'F  F  F', '       ', '       ', '   F   ', '       ', '       ', '       ')
            .aisle('CDRRRDC', 'C     C', '       ', '       ', '       ', '       ', '       ', 'F     F', '       ', '       ', '       ', '       ', '       ', 'F     F', '       ', '       ', '       ', '       ', '       ', '       ')
            .aisle('CDRRRDC', 'C     C', '       ', '       ', '       ', '       ', '       ', 'F     F', '       ', '       ', '       ', '       ', '       ', 'F     F', '       ', '       ', '       ', '       ', '       ', '       ')
            .aisle('CDDDDDC', 'C     C', '       ', '       ', '       ', '       ', '       ', 'F     F', '       ', '       ', '       ', '       ', '       ', 'F     F', '       ', '       ', '       ', '       ', '       ', '       ')
            .aisle('CCCCCCC', 'CCCKCCC', 'F     F', 'F     F', 'F     F', 'F     F', 'F     F', 'FFFFFFF', 'F     F', 'F     F', 'F     F', 'F     F', 'F     F', 'FFFFFFF', 'F     F', '       ', '       ', '       ', '       ', '       ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('R', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('F', Predicates.frames(GTMaterials.StainlessSteel))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(30)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/fusion_reactor'
        )

    allthemods.create('payload_opener', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('payload_opener', 'scrap_reclaimer')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCC', 'CCCCCCCCC', 'FGGGGGGGF', 'FGGGGGGGF', 'FGGGGGGGF', 'FFFFFFFFF', '    F    ')
            .aisle('CCCCCCCCC', 'C       C', 'G       G', 'G       G', 'G       G', 'F       F', '    F    ')
            .aisle('CCCCCCCCC', 'C  RRR  C', 'G       G', 'G       G', 'G       G', 'F       F', ' FFFFFFF ')
            .aisle('CCCCCCCCC', 'C  RRR  C', 'F   R   F', 'F   F   F', 'F   F   F', 'F   F   F', 'FFFFFFFFF')
            .aisle('CCCCCCCCC', 'C  RRR  C', 'G       G', 'G       G', 'G       G', 'F       F', ' FFFFFFF ')
            .aisle('CCCCCCCCC', 'C       C', 'G       G', 'G       G', 'G       G', 'F       F', '    F    ')
            .aisle('CCCCCCCCC', 'CCCCKCCCC', 'FGGGGGGGF', 'FGGGGGGGF', 'FGGGGGGGF', 'FFFFFFFFF', '    F    ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('R', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('F', Predicates.frames(GTMaterials.StainlessSteel))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(60)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/large_chemical_reactor'
        )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
