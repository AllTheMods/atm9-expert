// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
        const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
        allthemods.recipes.gtceu.unifier('gregification:lubricant_uinification')
                .inputFluids('#forge:lubricant 12')
                .outputFluids('gtceu:lubricant 12')
                .duration(1)
                .EUt(LV);

        allthemods.recipes.gtceu.unifier('gregification:biodiesel_unification')
                .inputFluids('#forge:biodiesel 12')
                .outputFluids('gtceu:bio_diesel 12')
                .duration(1)
                .EUt(LV);

        allthemods.recipes.gtceu.unifier('gregification:sulfur_unification')
                .itemInputs('10x #forge:dusts/sulfur')
                .itemOutputs('10x gtceu:sulfur_dust')
                .duration(1)
                .EUt(LV);


        allthemods.recipes.gtceu.unifier(`gregification:will_unification`)
                .inputFluids(`#forge:will 144`)
                .outputFluids(`gtceu:demon 144`)
                .duration(1)
                .EUt(LV);

        ['LV', 'MV', 'HV', 'EV', 'IV', 'LuV', 'ZPM', 'UV', 'UHV', 'UEV', 'UIV', 'UXV', 'OpV', 'MAX'].forEach((tier, index) => {
                allthemods.recipes.gtceu.unifier(`gregification:${tier.toLowerCase()}_universal_circuit_unification`)
                        .itemInputs(`#gtceu:circuits/${tier.toLowerCase()}`)
                        .itemOutputs(`1x gtceu:${tier.toLowerCase()}_universal_circuit`)
                        .circuit(index + 1)
                        .duration(1)
                        .EUt(8);
        });

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
