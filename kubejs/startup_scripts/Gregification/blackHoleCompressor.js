// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('black_hole')
        .category('black_hole')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(32, 4, 4, 4) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)	
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {    
    allthemods.create('black_hole', 'multiblock')        
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('black_hole')         
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    CCCCC    ', '    GGCGG    ', '    GGCGG    ', '   CCCCCCC   ', '   GGGCGGG   ', '      C      ', '             ', '             ', '             ') //6
            .aisle('   CCLLLCC   ', '   GG   GG   ', '   GG   GG   ', '  CCCCCCCCC  ', '  GG     GG  ', '    GGCGG    ', '      C      ', '             ', '             ') //5
            .aisle('  CCCCCCCCC  ', '  GG     GG  ', '  GG     GG  ', ' CCCCCCCCCCC ', ' GG       GG ', '   GG   GG   ', '     GCG     ', '      C      ', '             ') //4
            .aisle(' CC       CC ', ' GG       GG ', ' GG  CCC  GG ', 'CCCCCCCCCCCCC', 'GG   CCC   GG', '  GG     GG  ', '    GG GG    ', '      C      ', '      C      ') //3
            .aisle('CCC       CCC', 'GG   CCC   GG', 'GG  C   C  GG', 'CCCCC   CCCCC', 'GG  C   C  GG', ' GG  CCC  GG ', '   GG   GG   ', '     G G     ', '     CCC     ') //2
            .aisle('CLC  CCC  CLC', 'GG  C   C  GG', 'GG C     C GG', 'CCCC     CCCC', 'G  C     C  G', ' G  C   C  G ', '  GG CCC GG  ', '    GLLLG    ', '    CACAC    ') //1
            .aisle('CLC  CCC  CLC', 'C   C   C   C', 'C  C     C  C', 'CCCC     CCCC', 'C  C     C  C', 'CC  C   C  CC', ' CC  CCC  CC ', '  CC LCL CC  ', '   CCCCCCC   ') //MIDDLE
            .aisle('CLC  CCC  CLC', 'GG  C   C  GG', 'GG C     C GG', 'CCCC     CCCC', 'G  C     C  G', ' G  C   C  G ', '  GG CCC GG  ', '    GLLLG    ', '    CACAC    ') //1
            .aisle('CCC       CCC', 'GG   CCC   GG', 'GG  C   C  GG', 'CCCCC   CCCCC', 'GG  C   C  GG', ' GG  CCC  GG ', '   GG   GG   ', '     G G     ', '     CCC     ') //2
			.aisle(' CC       CC ', ' GG       GG ', ' GG  CCC  GG ', 'CCCCCCCCCCCCC', 'GG   CCC   GG', '  GG     GG  ', '    GG GG    ', '      C      ', '      C      ') //3
			.aisle('  CCCCCCCCC  ', '  GG     GG  ', '  GG     GG  ', ' CCCCCCCCCCC ', ' GG       GG ', '   GG   GG   ', '     GCG     ', '      C      ', '             ') //4
			.aisle('   CCLLLCC   ', '   GG   GG   ', '   GG   GG   ', '  CCCCCCCCC  ', '  GG     GG  ', '    GGCGG    ', '      C      ', '             ', '             ') //5
			.aisle('    CCCCC    ', '    GGCGG    ', '    GGCGG    ', '   CCCKCCC   ', '   GGGCGGG   ', '      C      ', '             ', '             ', '             ') //6
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))                        
            //.where('O', Predicates.heatingCoils())
            .where('A', Predicates.blocks('draconicevolution:awakened_draconium_block'))				
            .where('L', Predicates.blocks('gtceu:superconducting_coil'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))            
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
