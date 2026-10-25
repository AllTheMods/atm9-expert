// startup_scripts/gt_custom_machines.js


GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('industrial_ritual_machine')
        .category('ritual')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(16, 1, 12, 0) // 4 Item In, 1 Item Out, 2 Fluid In
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('industrial_ritual_machine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_ritual_machine') 
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers(GTRecipeModifiers.OC_NON_PERFECT)
        .pattern(definition => FactoryBlockPattern.start()            
			.aisle('CCCCCCC', 'CCCCCCC', 'CCCCCCC')
            .aisle('CCCCCCC', 'GS   SG', 'CCCCCCC')
            .aisle('CCCCCCC', 'G  S  G', 'CCCCCCC')
            .aisle('CCCCCCC', 'G SBS G', 'CCCCCCC')
            .aisle('CCCCCCC', 'G  S  G', 'CCCCCCC')
            .aisle('CCCCCCC', 'GS   SG', 'CCCCCCC')
            .aisle('CCCCCCC', 'CCCKCCC', 'CCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('occultism:golden_sacrificial_bowl'))
            .where('S', Predicates.blocks('occultism:sacrificial_bowl'))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
		//.workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/large_chemical_reactor')			
		.workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/large_chemical_reactor')
})