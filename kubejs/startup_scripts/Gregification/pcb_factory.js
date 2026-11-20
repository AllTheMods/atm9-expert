// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('pcb_factory')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 2, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('pcb_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('pcb_factory')
        .appearanceBlock(() => Block.getBlock('gtceu:galalith_panel_casing'))
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .tooltips(
            Component.literal('§7A full factory floor for printed circuit boards.'),
            Component.literal('§7Overclocks perfectly: each tier is four times faster for four times the power.')
        )
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SSSSSSSSS', 'FWWWWWWWF', 'FWWWWWWWF', 'FWWGGGWWF', 'FWWGGGWWF', 'FWWGGGWWF', 'FWWWWWWWF', 'FWWWWWWWF', 'FFFFFFFFF')
            .aisle('SSSSSSSSS', 'W########', 'W########', 'G########', 'G########', 'G########', 'W########', 'W########', 'FWWWW###F')
            .aisle('SSSSSSSSS', 'W#P#H#PP#', 'WPP#B#PP#', 'G#P###PP#', 'G#P###PP#', 'G#P###PP#', 'W#PPPPPP#', 'W########', 'FWWWW###F')
            .aisle('SSSSSSSSS', 'W#THHHTP#', 'WP#HBH###', 'G##H#H###', 'G#TH#H###', 'G##H#H###', 'W#PAHAP##', 'W########', 'FWWWW###F')
            .aisle('SSSSSSSSS', 'W#THHHTP#', 'WP#ABA###', 'G########', 'G#T######', 'G########', 'W#P###P##', 'W########', 'FWGGW###F')
            .aisle('SSSSSSSSS', 'W#THHHTP#', 'WP#ABA###', 'G########', 'G#T######', 'G########', 'W#P###P##', 'W########', 'FWWWW###F')
            .aisle('SSSSSSSSS', 'F#THHHTP#', 'FP#HBH###', 'F##H#H###', 'F#TH#H###', 'F##H#H###', 'F#PAHAP##', 'F########', 'FWWWFFFFF')
            .aisle('SSSSSSSSS', 'W#THHHTP#', 'WP#ABA###', 'G########', 'G#T######', 'G########', 'W#P###P##', 'W########', 'FWWWW###F')
            .aisle('SSSSSSSSS', 'W#THHHTP#', 'WP#ABA###', 'G########', 'G#T######', 'G########', 'W#P###P##', 'W########', 'FWGGW###F')
            .aisle('SSSSSSSSS', 'W#THHHTP#', 'WP#HBH###', 'G##H#H###', 'G#TH#H###', 'G##H#H###', 'W#PAHAP##', 'W########', 'FWWWW###F')
            .aisle('SSSSSSSSS', 'W#P#H#PP#', 'WPP#B#P##', 'G#P###P##', 'G#P###P##', 'G#P###P##', 'W#PPPPP##', 'W########', 'FWWWW###F')
            .aisle('SSSSSSSSS', 'W########', 'W########', 'G########', 'G########', 'G########', 'W########', 'W########', 'FWWWW###F')
            .aisle('SSSSSSSSS', 'FWWWKWWWF', 'FWWWWWWWF', 'FWWGWGWWF', 'FWWGWGWWF', 'FWWGWGWWF', 'FWWWWWWWF', 'FWWWWWWWF', 'FFFFFFFFF')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.air())
            .where('S', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
            .where('F', Predicates.frames(GTMaterials.Steel))
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where('A', Predicates.blocks('gtceu:gantry_control_casing'))
            .where('B', Predicates.blocks('immersiveengineering:conveyor_basic'))
            .where('H', Predicates.blocks('immersiveengineering:steel_scaffolding_standard'))
            .where('T', Predicates.blocks('immersiveengineering:steel_scaffolding_grate_top'))
            .where('P', Predicates.blocks('immersiveengineering:fluid_pipe'))
            .where('W', Predicates.blocks('gtceu:galalith_panel_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .build())
        .workableCasingModel(
            'gtceu:block/casings/galalith_panel_casing/galalith_panel_casing',
            'gtceu:block/multiblock/pcb_factory')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.