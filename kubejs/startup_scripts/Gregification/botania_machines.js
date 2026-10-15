

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    
    event.create ('elven_forge')
        .category('elven_forge')
        .setMaxIOSize(6, 3, 1, 0)
        .setSound(GTSoundEntries.FURNACE)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_STEAM)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, false, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT);
    
    event.create('mana_burner')
        .category('mana_burner')        
        .setMaxIOSize(2, 0, 2, 1)
        .setSound(GTSoundEntries.FURNACE)
        .setSlotOverlay(false, false, GuiTextures.BATTERY_OVERLAY)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT);
    
    event.create('large_mana_burner')
        .category('mana_burner')        
        .setMaxIOSize(4, 0, 4, 1) // Item In, Item Out, Fluid In, Fluid Out
        .setSound(GTSoundEntries.FURNACE)
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        
    
    event.create('mana_converter')
        .category('mana_converter')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 1)
        .setSound(GTSoundEntries.BOILER)                
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)

    event.create('large_mana_converter')
        .category('mana_converter')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 1, 1)
        .setSound(GTSoundEntries.BOILER)                        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    
    event.create('petal_apothecary')
        .category('petal_apothecary')
        .setEUIO('in')
        .setMaxIOSize(12, 3, 3, 3)
        .setSound(GTSoundEntries.COOLING)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    
    event.create('runic_altar')
        .category('runic_altar')
        .setEUIO('in')
        .setMaxIOSize(12, 6, 3, 3)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    
    event.create('mana_infuser')
        .category('mana_infuser')
        .setEUIO('in')
        .setMaxIOSize(9, 6, 1, 0)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)

    event.create('mana_pool')
        .category('mana_pool')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    
    event.create('alfheim_trader')
        .category('alfheim_trader')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)

})
 

GTCEuStartupEvents.registry("gtceu:machine", event => {
     event.create('elven_forge', 'multiblock')              
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('elven_forge')
        .appearanceBlock(GTBlocks.MACHINE_CASING_LuV)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'F   F', 'F   F', 'F   F', 'CCCCC')
            .aisle('CCCCC', '     ', '     ', '     ', 'CCCCC')
            .aisle('CCCCC', '  R  ', '     ', '     ', 'CCCCC')
            .aisle('CCCCC', '     ', '     ', '     ', 'CCCCC')
            .aisle('CCKCC', 'F   F', 'F   F', 'F   F', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:vibranium_frame'))
            .where('R', Predicates.blocks('irons_spellbooks:arcane_anvil'))
            .where('C', Predicates.blocks(GTBlocks.MACHINE_CASING_LuV)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))                
			)
            .where(' ', Predicates.any()) 
            .build()
        )
        
		.workableCasingModel(
            'gtceu:block/casings/voltage/luv/side',
            'gtceu:block/multiblock/assembly_line'
        )

    event.create('botanical_factory', 'multiblock')              
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('petal_apothecary', 'runic_altar', 'mana_infuser', 'mana_pool', 'alfheim_trader')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            
            .aisle('CCCCCCC', 'CGGGGGC','CGGGGGC', 'CGGGGGC', 'CCCCCCC')
            .aisle('CCCCCCC', 'GP R PG','G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'G     G','G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'GR M RG','G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'G     G','G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'GP R PG','G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCKCCC', 'CGGGGGC','CGGGGGC', 'CGGGGGC', 'CCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('M', Predicates.blocks('botania:mana_pool'))
            .where('R', Predicates.blocks('botania:runic_altar'))
            .where('P', Predicates.blocks('botania:apothecary_default'))
            .where('L', Predicates.heatingCoils())                   
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')				
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))                
			)
            .where(' ', Predicates.any()) 
            .build()
        )
        
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',            
            'gtceu:block/multiblock/distillation_tower'
        )	
    event.create('large_mana_burner', 'multiblock')              
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_burner')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))        
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, ((machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe))])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'LLL', 'CCC')
            .aisle('CCC', 'L L', 'CCC')
            .aisle('CKC', 'LLL', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))     
            .where('L', Predicates.heatingCoils())                                                                   
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                //.or(Predicates.abilities(PartAbility.OUTPUT_ENERGY))
			)
            .where(' ', Predicates.any()) 
            .build()
        )
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',            
            'gtceu:block/multiblock/distillation_tower'
        )		

    event.create('large_mana_converter', 'multiblock')              
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_converter')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeModifier((machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'LLL', 'CCC')
            .aisle('CCC', 'L L', 'CCC')
            .aisle('CKC', 'LLL', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))     
            .where('L', Predicates.heatingCoils())                                                                   
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))                
			)
            .where(' ', Predicates.any()) 
            .build()
        )
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',            
            'gtceu:block/multiblock/distillation_tower'
        )		

    event.create("mana_burner", "simple")
        .tiers(GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("mana_burner")                
                .workableTieredHullModel("gtceu:block/machines/electric_furnace")                
        );

    event.create("mana_converter", "simple")
        .tiers(GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("mana_converter")                
                .workableTieredHullModel("gtceu:block/machines/centrifuge")
        );   

    event.create("petal_apothecary", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("petal_apothecary")                
                .workableTieredHullModel("gtceu:block/machines/mixer")
        );   
    
    event.create("runic_altar", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("runic_altar")                
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );   

    /*event.create("mana_infuser", "simple")
        .tiers(GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("mana_infuser")                
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );*/
    event.create('mana_infuser', 'multiblock')        
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_infuser')         
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()                                            
            .aisle('CCCCCCC', 'CGGGGGC', 'CCCCCCC')
            .aisle('CCCCCCC', 'G     G', 'CRRRRRC')
            .aisle('CCRLRCC', 'G     G', 'CRRRRRC')
            .aisle('CCLRLCC', 'G  P  G', 'CRRRRRC')
            .aisle('CCRLRCC', 'G     G', 'CRRRRRC')
            .aisle('CCCCCCC', 'G     G', 'CRRRRRC')
            .aisle('CCCKCCC', 'CGGGGGC', 'CCCCCCC')
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('R', Predicates.blocks('botania:livingrock'))
            .where('L', Predicates.blocks('minecraft:lapis_block'))
            .where('P', Predicates.blocks('botania:terra_plate'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))                                                                        
            .where('C', Predicates.blocks('gtceu:robust_machine_casing')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.any()) 
            .build()
        )
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/assembly_line'
        )		
    
    event.create("mana_pool", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("mana_pool")
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );

    event.create("alfheim_trader", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("alfheim_trader")
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );   
});

