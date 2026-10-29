// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const coils = ['draconium', 'wyvern', 'draconic', 'chaotic']

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    coils.forEach(coil => {
        event.create(`draconic_infuser_${coil}`)
            .category(`draconic_infuser_${coil}`)
            .setEUIO('in')
            .setMaxIOSize(12, 6, 6, 6)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.CHEMICAL);
    });
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    coils.forEach((coil, index) => {
        let rTypes = coils.slice(0, index + 1).map(c => `draconic_infuser_${c}`);
        let casing = `gtceu:${coil}_casing`
        event.create(`draconic_infuser_${coil}`, 'multiblock')
            .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeTypes(rTypes)
            .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
            .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCCCCCC', 'GGOOOGG', 'GGOOOGG', 'GGOOOGG', 'CCCCCCC')
                .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CCCCCCC')
                .aisle('CCCCCCC', 'O     O', 'O     O', 'O     O', 'CCCCCCC')
                .aisle('CCCCCCC', 'O     O', 'O  A  O', 'O     O', 'CCCCCCC')
                .aisle('CCCCCCC', 'O     O', 'O     O', 'O     O', 'CCCCCCC')
                .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CCCCCCC')
                .aisle('CCCKCCC', 'GGOOOGG', 'GGOOOGG', 'GGOOOGG', 'CCCCCCC')
                .where('O', Predicates.blocks(casing))
                .where('A', Predicates.blocks('draconicevolution:crafting_core'))
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('G', Predicates.blocks('botania:bifrost_perm'))
                .where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where(' ', Predicates.any())
                .build()
            )
            .workableCasingModel(
                "gtceu:block/casings/solid/machine_casing_inert_ptfe",
                "gtceu:block/multiblock/large_chemical_reactor"
            );
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
