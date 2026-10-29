// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('oil_processing_plant')
        .category('oil_processing_plant')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(1, 3, 3, 15) // 12 Item In, 6 Item Out, 6 Fluid In, 6 Fluids Out
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	    
})

GTCEuStartupEvents.registry('gtceu:machine', event => {  
    event.create('oil_processing_plant', 'multiblock')        
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('oil_processing_plant')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()                                    
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'CGGGGGGGGGGCGGGGGGGGGCGGC', 'CGGGGGGGGGGCGGGGGGGGGCGGC', 'CGGGGGGGGGGCGGGGGGGGGCGGC', 'CGGGGGGGGGGCGGGGGGGGGCGGC', 'CGGGGGGGGGGCGGGGGGGGGCGGC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CGGGGGGGGGGCGGGGGGGGGGGGC', 'CGGGGGGGGGGCGGGGGGGGGGGGC', 'CGGGGGGGGGGCGGGGGGGGGGGGC', 'CGGGGGGGGGGCGGGGGGGGGGGGC', 'CGGGGGGGGGGCGGGGGGGGGGGGC', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'G          G         G  G', 'G          G         G  G', 'G          G         G  G', 'G          G         G  G', 'G          G         G  G', 'G          CCCCCCCCCCC  G', 'G          C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'G TTT TTT  G         G  G', 'G TTT TTT  G D D D D G  G', 'G TTT TTT  G D D D D G  G', 'G TTT TTT  G D D D D G  G', 'G TTT TTT  G         G  G', 'G TTT TTT  CCCCCCCCCCC  G', 'G TTT TTT  C            G', 'G TTT TTT  C            G', 'G TTT TTT  C            G', 'G          C            G', 'G          C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'G TTT TTT  G         G  G', 'UPS T T T  G D D D D G  G', 'G T T T SPPPPPPPPPPPPPPPG', 'G T T T T  G D D D D G  G', 'G T T T T  G         G  G', 'G T T T T  CCCCCCCCCCC  G', 'G T T T T  C            G', 'G T T T T  C            G', 'G TST TST  C            G', 'G  P   P   C            G', 'G  PPPPP   C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC') 
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'G TTT TTT  G         G  G', 'G TTT TTT  G D D D D G  G', 'G TTT TTT  G D D D D G PG', 'G TTT TTT  G D D D D G  G', 'G TTT TTT  G         G  G', 'G TTT TTT  CCCCCCCCCCC  G', 'G TTT TTT  C            G', 'G TTT TTT  C            G', 'G TTT TTT  C            G', 'G          C            G', 'G    P     C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'G          G         G  G', 'G          G         G  G', 'G          G         G PG', 'G          G         G  G', 'G          G         G  G', 'G          CCCCCCCCCCC  G', 'G          C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'G    P     C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'G          CGGGGGGGGGC  G', 'G          CGGGGGGGGGC  G', 'G          CGGGGGGGGGC PG', 'G          CGGGGGGGGGC  G', 'G          CGGGGGGGGGC  G', 'G          CCCCCCCCCCC  G', 'G          C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'G    P     C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'G          C            G', 'G          C            G', 'G          C           PG', 'G          C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'G    P     C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRTTTTTTTR TTTTTTTTTTTRPG', 'GRRRRRRRRR TTTTTTTTTTTR G', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRRRRRRRRR C            G', 'G          C            G', 'G          C            G', 'G    P     C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'GRTTTTTTTR T          R G', 'UPS     SP T         SPPO', 'U TTTTTTTP T         SPPI', 'G        P T         T  G', 'GRTTTTTTTP T         T  G', 'G T     SP T         T  G', 'G TTTTTTT  TTTTTTTTTTTR G', 'GR   P   R C            G', 'G    P     C            G', 'G    P     C            G', 'G    P     C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRTTTTTTTR TSTSTSTSTSTR G', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRRRRRRRRR TSTSTSTSTSTR G', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRTTTTTTTR TSTSTSTSTSTR G', 'GRTTTTTTTR TTTTTTTTTTTR G', 'GRRRRRRRRR C            G', 'G          C            G', 'G          C            G', 'G          C            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'GGGGGGGGGGGC            G', 'GGGGGGGGGGGCP P P P P   G', 'GGGGGGGGGGGC            G', 'GGGGGGGGGGGCP P P P P   G', 'GGGGGGGGGGGC            G', 'GGGGGGGGGGGCP P P P P   G', 'GGGGGGGGGGGC            G', 'GGGGGGGGGGGC            G', 'GGGGGGGGGGGC            G', 'GGGGGGGGGGGC            G', 'GGGGGGGGGGGC            G', 'CCCCCCCCCCCCCCCCCCCCCCCCC')
            .aisle('CCCCCCCCCCCCCCCCCCCCCCCCC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CGGGGGGGGGGCFCFCFCFCFCKCC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CGGGGGGGGGGCFCFCFCFCFCCCC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CGGGGGGGGGGCFCFCFCFCFCCCC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CGGGGGGGGGGCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCCCCCCCCCCCC')            
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))            
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('U', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            .where('F', Predicates.abilities(PartAbility.EXPORT_FLUIDS))                        
            .where('R', Predicates.blocks('gtceu:tungsten_steel_frame'))            
            .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
            .where('T', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get()))
            .where('S', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))            
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')                
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(2))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('D', Predicates.heatingCoils())                       
            
            .where(' ', Predicates.any())             
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/large_chemical_reactor')
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
