ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.recipes.gtceu.fluid_solidifier('if_plastic_plate_solidification')
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('industrialforegoing:plastic')
        .duration(20) // Takes 1 second
        .EUt(LV) // LV tier energy
        .circuit(3);

    allthemods.recipes.gtceu.fluid_solidifier('pnc_plastic_plate_solidification')
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('pneumaticcraft:plastic')
        .duration(20) // Takes 1 second
        .EUt(LV) // LV tier energy
        .circuit(2);

    allthemods.recipes.gtceu.fluid_solidifier('gt_plastic_plate_solidification')
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids('#forge:plastic 144')
        .itemOutputs('gtceu:plastic_plate')
        .duration(20) // Takes 1 second
        .EUt(LV) // LV tier energy
        .circuit(1);

    allthemods.recipes.gtceu.fluid_solidifier('gregification_hardened_blood')
        .notConsumable('gtceu:block_casting_mold')
        .inputFluids('#forge:blood 1000')
        .itemOutputs('evilcraft:hardened_blood')
        .duration(200)
        .EUt(HV)
});