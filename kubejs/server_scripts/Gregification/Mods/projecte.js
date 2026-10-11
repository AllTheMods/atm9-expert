ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.recipes.gtceu.assembler('gregification:condenser_mk1')
        .itemInputs('gtceu:hv_machine_hull', '4x minecraft:obsidian', '4x #forge:exquisite_gems/diamond', 'projecte:alchemical_chest','8x #forge:plates/lumium')
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('projecte:condenser_mk1')
        .duration(1800)
        .EUt(HV);
    
});