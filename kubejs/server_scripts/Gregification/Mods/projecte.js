ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.recipes.gtceu.assembler('gregification:condenser_mk1')
        .itemInputs('gtceu:iv_machine_hull', '4x minecraft:obsidian', '4x #forge:exquisite_gems/diamond', 'projecte:alchemical_chest','8x #forge:plates/enderium', 'gtceu:iv_field_generator')
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('projecte:condenser_mk1')
        .duration(1800)
        .EUt(HV);

    allthemods.recipes.gtceu.mega_chemical_reactor('gregification:dark_matter')
        .itemInputs('gtceu:neutrino')
        .inputFluids('#forge:naquadria_awakened 144')
        .itemOutputs('projecte:dark_matter')
        .duration(2600)
        .EUt(UV);

    allthemods.recipes.gtceu.mega_chemical_reactor('gregification:red_matter')
        .itemInputs('projecte:dark_matter')
        .inputFluids('#forge:purest_water 1000')
        .itemOutputs('projecte:red_matter')
        .duration(2600)
        .EUt(UV);
});