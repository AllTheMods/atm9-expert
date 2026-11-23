// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.recipes.gtceu.fluid_solidifier('if_plastic_plate_solidification')
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('industrialforegoing:plastic')
        .duration(20)
        .EUt(LV)
        .circuit(3);

    allthemods.recipes.gtceu.fluid_solidifier('pnc_plastic_plate_solidification')
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('pneumaticcraft:plastic')
        .duration(20)
        .EUt(LV)
        .circuit(2);

    allthemods.recipes.gtceu.fluid_solidifier('gt_plastic_plate_solidification')
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('gtceu:plastic_plate')
        .duration(20)
        .EUt(LV)
        .circuit(1);

    allthemods.recipes.gtceu.fluid_solidifier('gt_plastic_plate_solidification')
        .notConsumable('gtceu:block_casting_mold')
        .inputFluids('#forge:honey 1000')
        .itemOutputs('minecraft:honey_block')
        .duration(60)
        .EUt(LV)
        .circuit(7);

    allthemods.recipes.gtceu.fluid_solidifier('gregification_hardened_blood')
        .notConsumable('gtceu:block_casting_mold')
        .inputFluids('#forge:blood 1000')
        .itemOutputs('evilcraft:hardened_blood')
        .duration(200)
        .EUt(HV)
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
