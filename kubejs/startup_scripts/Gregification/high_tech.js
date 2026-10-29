// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('neutron_irradiator')
        .category('neutron_irradiator')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 1)
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE);

    allthemods.create('super_critical_heat_exchanger')
        .category('super_critical_heat_exchanger')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 2, 2) // Item In, Item Out, Fluid In, Fluid Out
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    allthemods.create('drone_station')
        .category('drone_station')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(6, 9, 3, 3) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    allthemods.create('environmental_accumulator')
        .category('environmental_accumulator')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(6, 1, 1, 0) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    allthemods.create('magnetic_containment_chamber')
        .category('magnetic_containment_chamber')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(6, 6, 6, 6) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    allthemods.create('thorium_reactor')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(3, 3, 3, 3) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE);

    allthemods.create('psycho_fraculator')
        .category('psycho_fraculator')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE);

    allthemods.create('neuro_interface')
        .category('neuro_interface')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE);

    allthemods.create('gene_sequencer')
        .category('gene_sequencer')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE);

    allthemods.create('prototype_assembler')
        .category('prototype_assembler')
        .setEUIO('in')
        .setMaxIOSize(9, 6, 3, 0)
        .setHasResearchSlot(true)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    allthemods.create('neutrino_collector')
        .category('neutrino_collector')
        .setEUIO('in')
        .setMaxIOSize(0, 16, 1, 0)
        .setHasResearchSlot(true)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)



})
GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('neutrino_collector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('neutrino_collector')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(() => Block.getBlock('gtceu:gadolinium_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   AAAAA   ', '   GGGGG   ', '   GGGGG   ', '   GGGGG   ', '   GGGGG   ', '   AAAAA   ', '   GGGGG   ', '   GGGGG   ', '   GGGGG   ', '   GGGGG   ', '   AAAAA   ')
            .aisle('  AAGGGAA  ', '  GGTTTGG  ', '  GGTTTGG  ', '  GGTTTGG  ', '  GGTTTGG  ', '  AATTTAA  ', '  GGTTTGG  ', '  GGTTTGG  ', '  GGTTTGG  ', '  GGTTTGG  ', '  AAGGGAA  ')
            .aisle(' AGGGGGGGA ', ' GTTTTTTTG ', ' GTTZZZTTG ', ' GTTZZZTTG ', ' GTTZZZTTG ', ' ATTZZZTTA ', ' GTTZZZTTG ', ' GTTZZZTTG ', ' GTTZZZTTG ', ' GTTTTTTTG ', ' AGGGGGGGA ')
            .aisle('AAGGGGGGGAA', 'GGTTTTTTTGG', 'GGTZZZZZTGG', 'GGTZZRZZTGG', 'GGTZZRZZTGG', 'AATZZRZZTAA', 'GGTZZRZZTGG', 'GGTZZRZZTGG', 'GGTZZZZZTGG', 'GGTTTTTTTGG', 'AAGGGGGGGAA')
            .aisle('AGGGGGGGGGA', 'GTTTTHTTTTG', 'GTZZZHZZZTG', 'GTZZRHRZZTG', 'GTZZRHRZZTG', 'ATZZRHRZZTA', 'GTZZRHRZZTG', 'GTZZRRRZZTG', 'GTZZZZZZZTG', 'GTTTTTTTTTG', 'AGGGGGGGGGA')
            .aisle('AGGGGGGGGGA', 'GTTTHTHTTTG', 'GTZZHZHZZTG', 'GTZRHRHRZTG', 'GTZRH HRZTG', 'ATZRH HRZTA', 'GTZRH HRZTG', 'GTZRRRRRZTG', 'GTZZZZZZZTG', 'GTTTTTTTTTG', 'AGGGGGGGGGA')
            .aisle('AGGGGGGGGGA', 'GTTTTHTTTTG', 'GTZZZHZZZTG', 'GTZZRHRZZTG', 'GTZZRHRZZTG', 'ATZZRHRZZTA', 'GTZZRHRZZTG', 'GTZZRRRZZTG', 'GTZZZZZZZTG', 'GTTTTTTTTTG', 'AGGGGGGGGGA')
            .aisle('AAGGGGGGGAA', 'GGTTTTTTTGG', 'GGTZZZZZTGG', 'GGTZZRZZTGG', 'GGTZZRZZTGG', 'AATZZRZZTAA', 'GGTZZRZZTGG', 'GGTZZRZZTGG', 'GGTZZZZZTGG', 'GGTTTTTTTGG', 'AAGGGGGGGAA')
            .aisle(' AGGGGGGGA ', ' GTTTTTTTG ', ' GTTZZZTTG ', ' GTTZZZTTG ', ' GTTZZZTTG ', ' ATTZZZTTA ', ' GTTZZZTTG ', ' GTTZZZTTG ', ' GTTZZZTTG ', ' GTTTTTTTG ', ' AGGGGGGGA ')
            .aisle('  AAGGGAA  ', '  GGTTTGG  ', '  GGTTTGG  ', '  GGTTTGG  ', '  GGTTTGG  ', '  AATTTAA  ', '  GGTTTGG  ', '  GGTTTGG  ', '  GGTTTGG  ', '  GGTTTGG  ', '  AAGGGAA  ')
            .aisle('   AAAAA   ', '   GGGGG   ', '   GGGGG   ', '   GGGGG   ', '   GGGGG   ', '   AAKAA   ', '   GGGGG   ', '   GGGGG   ', '   GGGGG   ', '   GGGGG   ', '   AAAAA   ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:gadolinium_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('T', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('Z', Predicates.blocks('gtceu:zirconium_casing'))
            .where('R', Predicates.blocks('gtceu:inert_ptfe_casing'))
            .where('H', Predicates.blocks('bigreactors:reinforced_reactorcontrolrod'))
            .where('A', Predicates.blocks('gtceu:adamantium_casing'))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gadolinium_casing/gadolinium_casing',
            'gtceu:block/multiblock/fusion_reactor'
        );

    allthemods.create('neutron_irradiator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('neutron_irradiator')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(() => Block.getBlock('gtceu:gadolinium_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAAAAAAAA', 'AGGGGGGGA', 'AGGGGGGGA', 'AGGGGGGGA', 'AGGGGGGGA', 'AGGGGGGGA', 'AGGGGGGGA', 'AGGGGGGGA', 'AAAAAAAAA')
            .aisle('AGGGGGGGA', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'AGGGGGGGA')
            .aisle('AGGGGGGGA', 'GTTTTTTTG', 'GTZZZZZTG', 'GTZZZZZTG', 'GTZZZZZTG', 'GTZZZZZTG', 'GTZZZZZTG', 'GTTTTTTTG', 'AGGGGGGGA')
            .aisle('AGGGGGGGA', 'GTTTTTTTG', 'GTZZZZZTG', 'GTZRRRZTG', 'GTZRRRZTG', 'GTZRRRZTG', 'GTZZZZZTG', 'GTTTTTTTG', 'AGGGGGGGA')
            .aisle('AGGGGGGGA', 'GTTTTTTTG', 'GTZZZZZTG', 'GTZRHRZTG', 'GTZH HZTG', 'GTZRHRZTG', 'GTZZZZZTG', 'GTTTTTTTG', 'AGGGGGGGA')
            .aisle('AGGGGGGGA', 'GTTTTTTTG', 'GTZZZZZTG', 'GTZRRRZTG', 'GTZRRRZTG', 'GTZRRRZTG', 'GTZZZZZTG', 'GTTTTTTTG', 'AGGGGGGGA')
            .aisle('AGGGGGGGA', 'GTTTTTTTG', 'GTZZZZZTG', 'GTZZZZZTG', 'GTZZZZZTG', 'GTZZZZZTG', 'GTZZZZZTG', 'GTTTTTTTG', 'AGGGGGGGA')
            .aisle('AGGGGGGGA', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'GTTTTTTTG', 'AGGGGGGGA')
            .aisle('AAAAAAAAA', 'AGGGGGGGA', 'AGGGGGGGA', 'AGGGGGGGA', 'AGGGKGGGA', 'AGGGGGGGA', 'AGGGGGGGA', 'AGGGGGGGA', 'AAAAAAAAA')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:gadolinium_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('T', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('Z', Predicates.blocks('gtceu:zirconium_casing'))
            .where('R', Predicates.blocks('gtceu:inert_ptfe_casing'))
            .where('H', Predicates.blocks('bigreactors:reinforced_reactorcontrolrod'))
            .where('A', Predicates.blocks('gtceu:adamantium_casing'))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gadolinium_casing/gadolinium_casing',
            'gtceu:block/multiblock/fusion_reactor'
        );

    allthemods.create('super_critical_heat_exchanger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('super_critical_heat_exchanger')
        .appearanceBlock(GTBlocks.MACHINE_CASING_UV)
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()

            .aisle('CCCCCCCCC', 'F       F', 'F  GGG  F', 'F       F', 'F  GGG  F', 'F       F', 'F  GGG  F', 'F       F', 'CCCCCCCCC')
            .aisle('CCCCCCCCC', '         ', '  GG GG  ', '         ', '  GG GG  ', '         ', '  GG GG  ', '         ', 'CCCCCCCCC')
            .aisle('CCCCCCCCC', ' H     H ', ' HG   GH ', ' H     H ', ' HG   GH ', ' H     H ', ' HG   GH ', ' H     H ', 'CCCCCCCCC')
            .aisle('CCCCCCCCC', 'HHH   HHH', 'H H   H H', 'H H   H H', 'H H   H H', 'H H   H H', 'H H   H H', 'HHH   HHH', 'CCCCCCCCC')
            .aisle('CCCCCCCCC', ' H     H ', ' HG   GH ', ' H     H ', ' HG   GH ', ' H     H ', ' HG   GH ', ' H     H ', 'CCCCCCCCC')
            .aisle('CCCCCCCCC', '         ', '  GG GG  ', '         ', '  GG GG  ', '         ', '  GG GG  ', '         ', 'CCCCCCCCC')
            .aisle('CCCCKCCCC', 'F       F', 'F  GGG  F', 'F       F', 'F  GGG  F', 'F       F', 'F  GGG  F', 'F       F', 'CCCCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:gadolinium_casing'))
            .where('H', Predicates.blocks('gtceu:heat_exchange_casing'))
            .where('F', Predicates.blocks('gtceu:draconium_awakened_frame'))
            .where('C', Predicates.blocks('gtceu:uv_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/voltage/uv/side',
            'gtceu:block/multiblock/vacuum_freezer'
        )

    allthemods.create('environmental_accumulator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('environmental_accumulator')
        .appearanceBlock(() => Block.getBlock('gtceu:gadolinium_casing'))
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', '     ', '     ', 'CCCCC', '     ', 'CCCCC', '     ', 'CCCCC', '     ', '     ', 'CCCCC')
            .aisle('CCCCC', ' FFF ', ' FFF ', 'CFFFC', ' FFF ', 'CFFFC', ' FFF ', 'CFFFC', ' FFF ', ' FFF ', 'CCCCC')
            .aisle('CCCCC', ' FFF ', ' FFF ', 'CFFFC', ' FFF ', 'CFFFC', ' FFF ', 'CFFFC', ' FFF ', ' FFF ', 'CCCCC')
            .aisle('CCCCC', ' FFF ', ' FFF ', 'CFFFC', ' FFF ', 'CFFFC', ' FFF ', 'CFFFC', ' FFF ', ' FFF ', 'CCCCC')
            .aisle('CCCCC', '     ', '     ', 'CCCCC', '     ', 'CCKCC', '     ', 'CCCCC', '     ', '     ', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:frostproof_machine_casing'))
            .where('C', Predicates.blocks('gtceu:gadolinium_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_frost_proof',
            'gtceu:block/multiblock/vacuum_freezer'
        )

    allthemods.create('drone_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('drone_station')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle('FCCCCCF', 'FCCKCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .where('F', Predicates.blocks('gtceu:gaia_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/large_chemical_reactor'
        )


    allthemods.create('magnetic_containment_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('magnetic_containment_chamber')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('               ', '      CCC      ', '               ')
            .aisle('      SSS      ', '    CC   CC    ', '      SSS      ')
            .aisle('    CC   CC    ', '   C  CCC  C   ', '    CC   CC    ')
            .aisle('   C       C   ', '  C CC   CC C  ', '   C       C   ')
            .aisle('  C         C  ', ' C C       C C ', '  C         C  ')
            .aisle('  C         C  ', ' C C       C C ', '  C         C  ')
            .aisle(' S           S ', 'C C         C C', ' S           S ')
            .aisle(' S           S ', 'C C         C C', ' S           S ')
            .aisle(' S           S ', 'C C         C C', ' S           S ')
            .aisle('  C         C  ', ' C C       C C ', '  C         C  ')
            .aisle('  C         C  ', ' C C       C C ', '  C         C  ')
            .aisle('   C       C   ', '  C CC   CC C  ', '   C       C   ')
            .aisle('    CC   CC    ', '   C  CCC  C   ', '    CC   CC    ')
            .aisle('      SSS      ', '    CC   CC    ', '      SSS      ')
            .aisle('               ', '      CKC      ', '               ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('gtceu:superconducting_coil'))
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/fusion_reactor'
        )

    allthemods.create('thorium_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('thorium_reactor')
        .noRecipeModifier()
        .generator(true)
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SSSSS', 'SCCCS', 'SCCCS', 'SCCCS', 'SSSSS')
            .aisle('SCCCS', 'C   C', 'C O C', 'C   C', 'SCCCS')
            .aisle('SCCCS', 'C O C', 'COOOC', 'C O C', 'SCCCS')
            .aisle('SCCCS', 'C   C', 'C O C', 'C   C', 'SCCCS')
            .aisle('SSSSS', 'SCCCS', 'SCKCS', 'SCCCS', 'SSSSS')
            .where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('S', Predicates.blocks('gtceu:scandium_frame'))
            .where('O', Predicates.blocks('gtceu:superconducting_coil'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_inert_ptfe',
            'gtceu:block/multiblock/fusion_reactor'
        )


    allthemods.create('prototype_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('prototype_assembler')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()

            .aisle('FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .aisle('CCCCCCC', 'C     C', 'C     C', 'C     C', 'CFFFFFC')
            .aisle('CCCCCCC', 'C CCC C', 'C CCC C', 'C CCC C', 'CFCCCFC')
            .aisle('CCCCCCC', 'C C C C', 'C C C C', 'C C C C', 'CFC CFC')
            .aisle('CCCCCCC', 'C CCC C', 'C CCC C', 'C CCC C', 'CFCCCFC')
            .aisle('CCCCCCC', 'C     C', 'C     C', 'C     C', 'CFFFFFC')
            .aisle('FCCCCCF', 'FCCKCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .where('D', Predicates.blocks('gtceu:tungsten_steel_crate'))
            .where('F', Predicates.blocks('gtceu:gaia_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.DATA_ACCESS, PartAbility.OPTICAL_DATA_RECEPTION).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/research_station'
        );

    allthemods.create('psycho_fraculator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('psycho_fraculator')
        .appearanceBlock(GTBlocks.COMPUTER_CASING)
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFFFCFFFF', 'F   C   F', 'F   C   F', 'F   C   F', 'CCCCCCCCC', 'F   C   F', 'F   C   F', 'F   C   F', 'FFFFCFFFF')
            .aisle('F   C   F', '         ', '         ', '         ', 'C   C   C', '         ', '         ', '         ', 'F   C   F')
            .aisle('F CCCCC F', '  CGGGC  ', '  CGGGC  ', '  CGGGC  ', 'C CCCCC C', '  CGGGC  ', '  CGGGC  ', '  CGGGC  ', 'F CCCCC F')
            .aisle('F CCCCC F', '  G   G  ', '  G   G  ', '  G   G  ', 'C C   C C', '  G   G  ', '  G   G  ', '  G   G  ', 'F CCCCC F')
            .aisle('CCCCCCCCC', 'C G C G C', 'C G C G C', 'C G C G C', 'CCC C CCC', 'C G C G C', 'C G C G C', 'C G C G C', 'CCCCCCCCC')
            .aisle('F CCCCC F', '  G   G  ', '  G   G  ', '  G   G  ', 'C C   C C', '  G   G  ', '  G   G  ', '  G   G  ', 'F CCCCC F')
            .aisle('F CCCCC F', '  CGGGC  ', '  CGGGC  ', '  CGGGC  ', 'C CCCCC C', '  CGGGC  ', '  CGGGC  ', '  CGGGC  ', 'F CCCCC F')
            .aisle('F   C   F', '         ', '         ', '         ', 'C   C   C', '         ', '         ', '         ', 'F   C   F')
            .aisle('FFFFCFFFF', 'F   C   F', 'F   C   F', 'F   C   F', 'CCCCKCCCC', 'F   C   F', 'F   C   F', 'F   C   F', 'FFFFCFFFF')
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('F', Predicates.blocks('gtceu:gaia_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.COMPUTER_CASING.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/hpca/computer_casing/side',
            'gtceu:block/multiblock/research_station'
        )

    allthemods.create('neuro_interface', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('neuro_interface')
        .appearanceBlock(GTBlocks.COMPUTER_CASING)
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('  C  ', '  C  ', '  C  ', '  C  ', '  C  ')
            .aisle(' CCC ', ' G G ', ' GHG ', ' G G ', ' CCC ')
            .aisle('CCCCC', 'C   C', 'CHHHC', 'C   C', 'CCCCC')
            .aisle(' CCC ', ' G G ', ' GHG ', ' G G ', ' CCC ')
            .aisle('  C  ', '  K  ', '  C  ', '  C  ', '  C  ')
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks(GTBlocks.COMPUTER_HEAT_VENT.get()))
            .where('C', Predicates.blocks(GTBlocks.COMPUTER_CASING.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/hpca/computer_casing/top',
            'gtceu:block/multiblock/research_station'
        )

    allthemods.create('gene_sequencer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gene_sequencer')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F       F', 'FPPPCPPPF', 'F       F', 'F       F', 'FFFFFFFFF')
            .aisle('         ', 'PP  C  PP', '         ', '         ', 'F       F')
            .aisle('         ', 'P   C   P', '         ', '         ', 'F       F')
            .aisle('    C    ', 'P  CCC  P', '    C    ', '         ', 'F       F')
            .aisle('   CCC   ', 'CCCC CCCC', '   CCC   ', '         ', 'F       F')
            .aisle('    C    ', 'P  CCC  P', '    C    ', '         ', 'F       F')
            .aisle('         ', 'P   C   P', '         ', '         ', 'F       F')
            .aisle('         ', 'PP  C  PP', '         ', '         ', 'F       F')
            .aisle('F       F', 'FPPPKPPPF', 'F       F', 'F       F', 'FFFFFFFFF')
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/research_station'
        )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
