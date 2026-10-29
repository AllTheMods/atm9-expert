// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('atmospheric_collector')
        .category('atmospheric_collector')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(1, 0, 0, 1) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {    
    allthemods.create('atmospheric_collector', 'multiblock')        
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('atmospheric_collector')         
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()        
            .aisle('SSSSSSSSS', 'SLLLLLLLS', 'SSSSSSSSS', 'SLLLLLLLS', 'SSSSSSSSS', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ')
            .aisle('SCCCCCCCS', 'L       L', 'S       S', 'L       L', 'SCCCCCCCS', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '   CCC   ', '    C    ', '         ', '         ')    
            .aisle('SCCCCCCCS', 'L       L', 'S       S', 'L       L', 'SCSSSSSCS', '         ', '         ', '         ', '  SSSSS  ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '    C    ', '  CCLCC  ', '  C   C  ', '         ', '         ')
            .aisle('SCCCCCCCS', 'L       L', 'S       S', 'L       L', 'SCSCSCSCS', '   CLC   ', '   CLC   ', '   CLC   ', '  SSSSS  ', '         ', '         ', '         ', '   CCC   ', '         ', '         ', '         ', '         ', '         ', '   CCC   ', ' CCLLLCC ', '         ', '         ', '         ')
            .aisle('SCCCCCCCS', 'L       L', 'S       S', 'L       L', 'SCSSSSSCS', '   L L   ', '   L L   ', '   L L   ', '  SSSSS  ', '    C    ', '    C    ', '    C    ', '   CCC   ', '    C    ', '    C    ', '    C    ', '    C    ', '    C    ', '  CCCCC  ', ' CLLCLLC ', ' C  C  C ', '    C    ', '    C    ')
            .aisle('SCCCCCCCS', 'L       L', 'S       S', 'L       L', 'SCSCSCSCS', '   CLC   ', '   CLC   ', '   CLC   ', '  SSSSS  ', '         ', '         ', '         ', '   CCC   ', '         ', '         ', '         ', '         ', '         ', '   CCC   ', ' CCLLLCC ', '         ', '         ', '         ')
            .aisle('SCCCCCCCS', 'L       L', 'S       S', 'L       L', 'SCSSSSSCS', '         ', '         ', '         ', '  SSSSS  ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '    C    ', '  CCLCC  ', '  C   C  ', '         ', '         ')
            .aisle('SCCCCCCCS', 'L       L', 'S       S', 'L       L', 'SCCCCCCCS', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '   CCC   ', '    C    ', '         ', '         ')    
            .aisle('SSSSSSSSS', 'SLLLLLLLS', 'SSSSKSSSS', 'SLLLLLLLS', 'SSSSSSSSS', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))                                                
            .where('L', Predicates.blocks('gtceu:rtm_alloy_coil_block'))
            .where('S', Predicates.blocks('gtceu:solid_machine_casing'))            
            .where('C', Predicates.blocks('gtceu:inert_machine_casing')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.any()) 
            .build()
        )
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_inert_ptfe',            
            'gtceu:block/multiblock/fusion_reactor'
        )		
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
