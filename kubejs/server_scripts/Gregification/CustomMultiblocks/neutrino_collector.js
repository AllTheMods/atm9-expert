ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
    allthemods.recipes.gtceu.neutrino_collector('gregification:neutrino_collection')
        .inputFluids('#forge:super_coolant 512000')
        .itemOutputs('64x gtceu:neutrino', '64x gtceu:neutrino', '64x gtceu:neutrino', '64x gtceu:neutrino')
        .chancedOutput('64x gtceu:neutrino', 2500, 0)
        .chancedOutput('64x gtceu:neutrino', 2500, 0)
        .chancedOutput('64x gtceu:neutrino', 2000, 0)
        .chancedOutput('64x gtceu:neutrino', 1500, 0)
        .chancedOutput('64x gtceu:neutrino', 1500, 0)
        .chancedOutput('64x gtceu:neutrino', 1500, 0)
        .chancedOutput('64x gtceu:neutrino', 1000, 0)
        .chancedOutput('64x gtceu:neutrino', 1000, 0)
        .chancedOutput('64x gtceu:neutrino', 1000, 0)
        .chancedOutput('64x gtceu:neutrino', 500, 0)
        .chancedOutput('64x gtceu:neutrino', 500, 0)
        .chancedOutput('64x gtceu:neutrino', 500, 0)        
        .duration(12000)
        .EUt(UV);
});