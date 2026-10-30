// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:overgrown_plating_casing')
        .displayName('Overgrown Plating Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:reactor_core_casing')
        .displayName('Reactor Core Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:overgrown_conduit_casing')
        .displayName('Overgrown Conduit Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
});

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {

    allthemods.create('pure_daisy')
        .category('pure_daisy')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSound(GTSoundEntries.COOLING)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)

    allthemods.create('botanical_brewery')
        .category('botanical_brewery')
        .setMaxIOSize(7, 1, 1, 0)
        .setSound(GTSoundEntries.CHEMICAL)
        .setSlotOverlay(false, false, GuiTextures.BREWER_OVERLAY)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
    
    allthemods.create('orechid_grove')
        .category('orechid_grove')
        .setMaxIOSize(9, 15, 0, 0)
        .setSound(GTSoundEntries.COOLING)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT);

    allthemods.create ('elven_forge')
        .category('elven_forge')
        .setMaxIOSize(6, 3, 1, 0)
        .setSound(GTSoundEntries.FURNACE)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, false, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT);
    
    allthemods.create('mana_burner')
        .category('mana_burner')        
        .setMaxIOSize(2, 0, 2, 1)
        .setSound(GTSoundEntries.FURNACE)
        .setSlotOverlay(false, false, GuiTextures.BATTERY_OVERLAY)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT);
    
    allthemods.create('large_mana_burner')
        .category('mana_burner')        
        .setMaxIOSize(4, 0, 4, 1) // Item In, Item Out, Fluid In, Fluid Out
        .setSound(GTSoundEntries.FURNACE)
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        
    
    allthemods.create('mana_converter')
        .category('mana_converter')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 1)
        .setSound(GTSoundEntries.BOILER)                
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)

    allthemods.create('large_mana_converter')
        .category('mana_converter')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 1, 1)
        .setSound(GTSoundEntries.BOILER)                        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    
    allthemods.create('petal_apothecary')
        .category('petal_apothecary')
        .setEUIO('in')
        .setMaxIOSize(12, 3, 3, 3)
        .setSound(GTSoundEntries.COOLING)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    
    allthemods.create('runic_altar')
        .category('runic_altar')
        .setEUIO('in')
        .setMaxIOSize(12, 6, 3, 3)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    
    allthemods.create('mana_infuser')
        .category('mana_infuser')
        .setEUIO('in')
        .setMaxIOSize(9, 6, 1, 0)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)

    allthemods.create('mana_pool')
        .category('mana_pool')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    
    allthemods.create('alfheim_trader')
        .category('alfheim_trader')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)        
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)

})
 

GTCEuStartupEvents.registry("gtceu:machine", allthemods => {

     allthemods.create('pure_daisy', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('pure_daisy')
                .workableTieredHullModel('gtceu:block/machines/extractor')
        )

     allthemods.create('elven_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('elven_forge')
        .appearanceBlock(() => Block.getBlock('gtceu:overgrown_plating_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCECC', 'NGGGN', 'NGGGN', 'NGGGN', 'CCECC')
            .aisle('CCCCC', 'G   G', 'G   G', 'G   G', 'CCCCC')
            .aisle('ECCCE', 'G R G', 'G   G', 'G   G', 'ECCCE')
            .aisle('CCCCC', 'G   G', 'G   G', 'G   G', 'CCCCC')
            .aisle('CCKCC', 'NGGGN', 'NGGGN', 'NGGGN', 'CCECC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('botania:elf_glass'))
            .where('R', Predicates.blocks('irons_spellbooks:arcane_anvil'))
            .where('N', Predicates.blocks('gtceu:overgrown_conduit_casing'))
            .where('E', Predicates.blocks('gtceu:reactor_core_casing'))
            .where('C', Predicates.blocks('gtceu:overgrown_plating_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(GTX.MANA_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.MANA_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/overgrown_plating_casing/overgrown_plating_casing',
            'gtceu:block/multiblock/elven_forge'
        )

    allthemods.create('botanical_factory', 'multiblock')              
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('petal_apothecary', 'runic_altar', 'mana_infuser', 'mana_pool', 'alfheim_trader', 'botanical_brewery', 'pure_daisy')
        .appearanceBlock(() => Block.getBlock('gtceu:overgrown_plating_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCECCC', 'NGGGGGN', 'NGGGGGN', 'NGGGGGN', 'CCCECCC')
            .aisle('CCCCCCC', 'GP R PG', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('ECCCCCE', 'GR M RG', 'G     G', 'G     G', 'EGGGGGE')
            .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'GP R PG', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCKCCC', 'NGGGGGN', 'NGGGGGN', 'NGGGGGN', 'CCCECCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('M', Predicates.blocks('botania:mana_pool'))
            .where('R', Predicates.blocks('botania:runic_altar'))
            .where('P', Predicates.blocks('botania:apothecary_default'))
            .where('N', Predicates.blocks('gtceu:overgrown_conduit_casing'))
            .where('E', Predicates.blocks('gtceu:reactor_core_casing'))
            .where('C', Predicates.blocks('gtceu:overgrown_plating_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(GTX.MANA_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.MANA_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/overgrown_plating_casing/overgrown_plating_casing',
            'gtceu:block/multiblock/botanical_factory'
        )
    allthemods.create('large_mana_burner', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_burner')
        .appearanceBlock(() => Block.getBlock('gtceu:overgrown_plating_casing'))
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, ((machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe))])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'LLL', 'CCC')
            .aisle('CEC', 'L L', 'CEC')
            .aisle('CKC', 'LLL', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('L', Predicates.heatingCoils())
            .where('E', Predicates.blocks('gtceu:reactor_core_casing'))
            .where('C', Predicates.blocks('gtceu:overgrown_plating_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(GTX.MANA_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.MANA_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/overgrown_plating_casing/overgrown_plating_casing',
            'gtceu:block/multiblock/large_mana_burner'
        )

    allthemods.create('large_mana_converter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_converter')
        .appearanceBlock(() => Block.getBlock('gtceu:overgrown_plating_casing'))
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeModifier((machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'LLL', 'CCC')
            .aisle('CNC', 'L L', 'CNC')
            .aisle('CKC', 'LLL', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('L', Predicates.heatingCoils())
            .where('N', Predicates.blocks('gtceu:overgrown_conduit_casing'))
            .where('C', Predicates.blocks('gtceu:overgrown_plating_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(GTX.MANA_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.MANA_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/overgrown_plating_casing/overgrown_plating_casing',
            'gtceu:block/multiblock/large_mana_converter'
        )

    allthemods.create("mana_burner", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("mana_burner")                
                .workableTieredHullModel("gtceu:block/machines/electric_furnace")                
        );

    allthemods.create("mana_converter", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("mana_converter")                
                .workableTieredHullModel("gtceu:block/machines/centrifuge")
        );   

    allthemods.create("petal_apothecary", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("petal_apothecary")                
                .workableTieredHullModel("gtceu:block/machines/mixer")
        );   
    
    allthemods.create("runic_altar", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("runic_altar")                
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );   

    allthemods.create('mana_infuser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_infuser')
        .appearanceBlock(() => Block.getBlock('gtceu:overgrown_plating_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCECCC', 'NGGGGGN', 'CCCECCC')
            .aisle('CCCCCCC', 'G     G', 'CRRRRRC')
            .aisle('ECRLRCE', 'G     G', 'CRRRRRC')
            .aisle('CCLRLCC', 'G  P  G', 'CRRRRRC')
            .aisle('ECRLRCE', 'G     G', 'CRRRRRC')
            .aisle('CCCCCCC', 'G     G', 'CRRRRRC')
            .aisle('CCCKCCC', 'NGGGGGN', 'CCCECCC')
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('R', Predicates.blocks('botania:livingrock'))
            .where('L', Predicates.blocks('minecraft:lapis_block'))
            .where('P', Predicates.blocks('botania:terra_plate'))
            .where('N', Predicates.blocks('gtceu:overgrown_conduit_casing'))
            .where('E', Predicates.blocks('gtceu:reactor_core_casing'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:overgrown_plating_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(GTX.MANA_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(GTX.MANA_OUTPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/overgrown_plating_casing/overgrown_plating_casing',
            'gtceu:block/multiblock/mana_infuser'
        )

    allthemods.create("mana_pool", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("mana_pool")
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );

    allthemods.create("alfheim_trader", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("alfheim_trader")
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );   

    allthemods.create("botanical_brewery", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("botanical_brewery")
                .workableTieredHullModel("gtceu:block/machines/brewery")
        );

    allthemods.create('orechid_grove', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('orechid_grove')
        .appearanceBlock(() => Block.getBlock('gtceu:overgrown_plating_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('NCCCCCN', 'NLLLLLN', 'NLLLLLN', 'NLLLLLN', 'NLLLLLN', 'CCCECCC')
            .aisle('CCCCCCC', 'LDDDDDL', 'LOOOOOL', 'LAAAAAL', 'LGGGGGL', 'CCCCCCC')
            .aisle('CCCCCCC', 'LDDDDDL', 'LOOOOOL', 'LAAAAAL', 'LGGGGGL', 'CCCCCCC')
            .aisle('CCCCCCC', 'LDDDDDL', 'LOOOOOL', 'LAAAAAL', 'LGGGGGL', 'CCCECCC')
            .aisle('CCCCCCC', 'LDDDDDL', 'LOOOOOL', 'LAAAAAL', 'LGGGGGL', 'CCCCCCC')
            .aisle('CCCCCCC', 'LDDDDDL', 'LOOOOOL', 'LAAAAAL', 'LGGGGGL', 'CCCCCCC')
            .aisle('NCCKCCN', 'NLLLLLN', 'NLLLLLN', 'NLLLLLN', 'NLLLLLN', 'CCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('minecraft:dirt')
                .or(Predicates.blocks('minecraft:grass_block'))
                .or(Predicates.blocks('minecraft:coarse_dirt'))
                .or(Predicates.blocks('minecraft:podzol'))
                .or(Predicates.blocks('minecraft:rooted_dirt')))
            .where('O', Predicates.blocks('botania:orechid'))
            .where('A', Predicates.air())
            .where('G', Predicates.blocks('minecraft:glowstone'))
            .where('N', Predicates.blocks('gtceu:overgrown_conduit_casing'))
            .where('L', Predicates.blocks('botania:elf_glass'))
            .where('E', Predicates.blocks('gtceu:reactor_core_casing'))
            .where('C', Predicates.blocks('gtceu:overgrown_plating_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(GTX.MANA_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/overgrown_plating_casing/overgrown_plating_casing',
            'gtceu:block/multiblock/botanical_factory'
        );
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
