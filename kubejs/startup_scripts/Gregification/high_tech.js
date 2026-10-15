

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('super_critical_heat_exchanger')
        .category('super_critical_heat_exchanger')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 6, 6) // Item In, Item Out, Fluid In, Fluid Out
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
        .setMaxIOSize(3, 1, 1, 0) // Item In, Item Out, Fluid In, Fluid Out
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
        
        

})
GTCEuStartupEvents.registry('gtceu:machine', allthemods => {

    allthemods.create('super_critical_heat_exchanger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('super_critical_heat_exchanger')
        //.appearanceBlock(GTBlocks.CASING_ALUMINIUM_FROSTPROOF)
        .appearanceBlock(() => Block.getBlock('gtceu:gadolinium_casing'))        
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()            
            .aisle('K')            
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))                                    
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_frost_proof',
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
