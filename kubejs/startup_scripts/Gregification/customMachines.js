GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // 1. Liquifier Recipe Type
    event.create('liquifier')
        .category('liquifier')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 1)
        .setSound(GTSoundEntries.CHEMICAL)
        .setSlotOverlay(false, false, GuiTextures.MOLECULAR_OVERLAY_1)
        .setSlotOverlay(true, false, GuiTextures.VIAL_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)

    event.create('reconstructor')
        .category('reconstructor')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, false, GuiTextures.MOLECULAR_OVERLAY_2)
        .setSlotOverlay(true, false, GuiTextures.CRYSTAL_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)

    event.create('gem_polisher')
        .category('gem_polisher')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 2, 0)
        .setSound(GTSoundEntries.DRILL_TOOL)
        .setSlotOverlay(false, false, GuiTextures.CUTTER_OVERLAY)
        .setSlotOverlay(true, false, GuiTextures.CRYSTAL_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_LATHE, FillDirection.LEFT_TO_RIGHT)

    event.create('sanguine_refinery')
        .category('sanguine_refinery')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 1, 1)
        .setSound(GTSoundEntries.BOILER)
        .setSlotOverlay(false, true, GuiTextures.BEAKER_OVERLAY_1)
        .setSlotOverlay(true, true, GuiTextures.BEAKER_OVERLAY_2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)

    event.create('unifier')
        .category('unifier')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSound(GTSoundEntries.BOILER)
        .setSlotOverlay(false, true, GuiTextures.BEAKER_OVERLAY_3)
        .setSlotOverlay(true, true, GuiTextures.BEAKER_OVERLAY_4)
        .setSlotOverlay(false, false, GuiTextures.MOLECULAR_OVERLAY_3)
        .setSlotOverlay(true, false, GuiTextures.MOLECULAR_OVERLAY_4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)

    event.create('gem_crusher')
        .category('gem_crusher')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSound(GTSoundEntries.MACERATOR)
        .setSlotOverlay(false, false, GuiTextures.CRUSHED_ORE_OVERLAY)
        .setSlotOverlay(true, false, GuiTextures.DUST_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
})

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("gem_crusher", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("gem_crusher")
                .workableTieredHullModel("gtceu:block/machines/macerator")
        );

    event.create("liquifier", "simple")
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("liquifier")
                .workableTieredHullModel("gtceu:block/machines/extractor")
        );

    event.create("sanguine_refinery", "simple")
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("sanguine_refinery")
                .workableTieredHullModel("gtceu:block/machines/extractor")
        );

    event.create("reconstructor", "simple")
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("reconstructor")
                .workableTieredHullModel("gtceu:block/machines/scanner")
        );

    event.create("gem_polisher", "simple")
        .tiers(GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("gem_polisher")
                .workableTieredHullModel("gtceu:block/machines/lathe")
        );

    event.create("unifier", "simple")
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("unifier")
                .workableTieredHullModel("gtceu:block/machines/distillery")
        );
});