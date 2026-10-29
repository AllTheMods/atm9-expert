// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.recipes.gtceu.assembler('gregification:id/squeezer')
        .itemInputs('gtceu:hv_machine_hull', '2x gtceu:hv_electric_pump', '2x gtceu:hv_electric_piston', '4x #forge:rods/signalum', '6x #forge:foils/polyimide')
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('integrateddynamics:squeezer')
        .duration(800)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:id/mechanical_squeezer')
        .itemInputs('integrateddynamics:squeezer', '4x #forge:plates/lumium', '2x integrateddynamics:energy_battery', '2x #gtceu:circuits/hv')
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('integrateddynamics:mechanical_squeezer')
        .duration(800)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:id/energy_battery')
        .itemInputs('4x integrateddynamics:crystalized_menril_block', 'gtceu:hv_machine_hull','2x #gtceu:circuits/hv', '8x #forge:plates/dark_steel')
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('integrateddynamics:energy_battery')
        .duration(800)
        .EUt(HV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
