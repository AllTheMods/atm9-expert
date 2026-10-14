ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.recipes.gtceu.assembler('gregification:condenser_mk1')
        .itemInputs('gtceu:iv_machine_hull', '4x minecraft:obsidian', '4x #forge:exquisite_gems/diamond', 'projecte:alchemical_chest','8x #forge:plates/enderium', 'gtceu:iv_field_generator', 'gtceu:ev_field_generator')
        .inputFluids('#forge:polytetrafluoroethylene 576')
        .itemOutputs('projecte:condenser_mk1')
        .duration(1800)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:condenser_mk2')
        .itemInputs('projecte:condenser_mk1', '4x #forge:plates/dark_matter', 'gtceu:uv_field_generator')
        .inputFluids('#forge:polybenzimidazole 576')
        .itemOutputs('projecte:condenser_mk2')
        .duration(1800)
        .EUt(UV);

    allthemods.recipes.gtceu.assembler('gregification:collector_mk1')
        .itemInputs('gtceu:iv_machine_hull', '6x #forge:plates/glowstone', 'gtceu:iv_field_generator', 'ironfurnaces:netherite_furnace')
        .inputFluids('#forge:polytetrafluoroethylene 576')
        .itemOutputs('projecte:collector_mk1')
        .duration(1800)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:collector_mk2')
        .itemInputs('projecte:collector_mk1', '6x #forge:plates/refined_glowstone', 'gtceu:luv_field_generator')        
        .inputFluids('#forge:polybenzimidazole 576')
        .itemOutputs('projecte:collector_mk2')
        .duration(1800)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:collector_mk3')
        .itemInputs('projecte:collector_mk2', '6x #forge:plates/refined_glowstone', 'gtceu:zpm_field_generator')        
        .inputFluids('#forge:polybenzimidazole 576')
        .itemOutputs('projecte:collector_mk3')
        .duration(1800)
        .EUt(ZPM);

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