// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('block', allthemods => {
    allthemods.create('gtceu:dark_gem_casing')
        .displayName('Dark Gem Plating Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
    allthemods.create('gtceu:blood_vein_casing')
        .displayName('Blood Vein Casing')
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');
});

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('bio_electrical_infuser')
        .category('infuser')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 3, 6, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('bio_electrical_infuser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bio_electrical_infuser') 
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()            
            .aisle('RRRRR', 'R   R', 'R   R', 'R   R', 'RRRRR')
			.aisle('RCCCR', ' CBC ', ' CBC ', ' CBC ', 'RCCCR')
			.aisle('RCCCR', ' B B ', ' BIB ', ' B B ', 'RCCCR')
			.aisle('RCCCR', ' CBC ', ' CKC ', ' CBC ', 'RCCCR')
            .aisle('RRRRR', 'R   R', 'R   R', 'R   R', 'RRRRR')
			.where('B', Predicates.blocks('botania:bifrost_perm'))
            .where('R', Predicates.blocks('bloodmagic:bloodstonebrick'))
            .where('I', Predicates.blocks('evilcraft:blood_infuser'))            
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))            
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.any()) 
            .build()
        )
		.workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/large_chemical_reactor')			
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
