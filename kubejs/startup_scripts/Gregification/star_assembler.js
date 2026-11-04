// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:star_frame_casing')
        .displayName('Star Frame Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings')

    allthemods.create('gtceu:star_internal_casing')
        .displayName('Star Internal Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings')

    allthemods.create('gtceu:star_pipe_casing')
        .displayName('Star Pipe Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings')
})

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('star_assembler')
        .category('star_assembler')
        .setEUIO('in')
        .setMaxIOSize(16, 1, 6, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('star_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(GTRecipeTypes.get('star_assembler'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('gtceu:star_internal_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("FFFFFFFFFFFFFFFF", "FIIIIIIIIIIIIIIF", "FIIIIIIIIIIIIIIF", "FIIIIIIIOIIIIIIF", "FIIIIIIIIIIIIIIF", "FIIIIIIIIIIIIIIF", "FFFFFFFFFFFFFFFF")
            .aisle("                ", " PPPPP    PPPPP ", " PPPPP    PPPPP ", " PP PP    PP PP ", " PPPPP    PPPPP ", " PPPPP    PPPPP ", "                ")
            .aisle("                ", " PPPPP    PPPPP ", " PPPPP    PPPPP ", " PP PP    PP PP ", " PPPPP    PPPPP ", " PPPPP    PPPPP ", "                ")
            .aisle("                ", "         PPPPP  ", " PPPPP   PPPPP  ", " PPPPP   PP PP  ", " PP PP   PPPPP  ", " PPPPP   PPPPP  ", " PPPPP          ")
            .aisle("                ", "         PPPPP  ", " PPPPP   PPPPP  ", " PPPPP   PP PP  ", " PP PP   PPPPP  ", " PPPPP   PPPPP  ", " PPPPP          ")
            .aisle("                ", "        PPPPP   ", "  PPPPP PPPPP   ", "  PPPPP PP PP   ", "  PP PP PPPPP   ", "  PPPPP PPPPP   ", "  PPPPP         ")
            .aisle("                ", "        PPPPP   ", "  PPPPP PPPPP   ", "  PPPPP PP PP   ", "  PP PP PPPPP   ", "  PPPPP PPPPP   ", "  PPPPP         ")
            .aisle("                ", "         PPPPP  ", " PPPPP   PPPPP  ", " PPPPP   PP PP  ", " PP PP   PPPPP  ", " PPPPP   PPPPP  ", " PPPPP          ")
            .aisle("                ", "         PPPPP  ", " PPPPP   PPPPP  ", " PPPPP   PP PP  ", " PP PP   PPPPP  ", " PPPPP   PPPPP  ", " PPPPP          ")
            .aisle("                ", "                ", "PPPPP    PPPPP  ", "PPPPP    PPPPP  ", "PP PP    PP PP  ", "PPPPP    PPPPP  ", "PPPPP    PPPPP  ")
            .aisle("                ", "                ", "PPPPP    PPPPP  ", "PPPPP    PPPPP  ", "PP PP    PP PP  ", "PPPPP    PPPPP  ", "PPPPP    PPPPP  ")
            .aisle("                ", "PPPPP           ", "PPPPP     PPPPP ", "PP PP     PPPPP ", "PPPPP     PP PP ", "PPPPP     PPPPP ", "          PPPPP ")
            .aisle("                ", "PPPPP           ", "PPPPP     PPPPP ", "PP PP     PPPPP ", "PPPPP     PP PP ", "PPPPP     PPPPP ", "          PPPPP ")
            .aisle("                ", " PPPPP    PPPPP ", " PPPPP    PPPPP ", " PP PP    PP PP ", " PPPPP    PPPPP ", " PPPPP    PPPPP ", "                ")
            .aisle("                ", " PPPPP    PPPPP ", " PPPPP    PPPPP ", " PP PP    PP PP ", " PPPPP    PPPPP ", " PPPPP    PPPPP ", "                ")
            .aisle("FFFFFFFFFFFFFFFF", "FIIIIIIIIIIIIIIF", "FIIIIIIIIIIIIIIF", "FIIIIIIKIIIIIIIF", "FIIIIIIIIIIIIIIF", "FIIIIIIIIIIIIIIF", "FFFFFFFFFFFFFFFF")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:star_frame_casing'))
            .where('P', Predicates.blocks('gtceu:star_pipe_casing'))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
            .where('I', Predicates.blocks('gtceu:star_internal_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/star_pipe_casing/star_pipe_casing',
            'gtceu:block/multiblock/star_assembler'
        )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
