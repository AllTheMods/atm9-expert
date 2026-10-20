ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:stromeyerite/oxidative_leach')
        .itemInputs('4x #forge:dusts/stromeyerite')
        .inputFluids('#forge:sulfuric_acid 2000', '#forge:oxygen 18000')
        .itemOutputs('2x gtceu:silver_sulfate_dust', '4x gtceu:copper_ii_sulfate_dust')
        .chancedOutput('gtceu:palladium_dust', 1000, 500)
        .outputFluids('minecraft:water 2000')
        .duration(400)
        .EUt(EV);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:stromeyerite/cementation')
        .itemInputs('2x #forge:dusts/silver_sulfate', '2x #forge:dusts/copper')
        .itemOutputs('4x gtceu:silver_dust', '2x gtceu:copper_ii_sulfate_dust')
        .chancedOutput('gtceu:gold_dust', 1500, 500)
        .duration(200)
        .EUt(EV);

    allthemods.recipes.gtceu.electrolyzer('gregification:electrowinning/copper')
        .circuit(2)
        .itemInputs('2x #forge:dusts/copper_ii_sulfate')
        .inputFluids('minecraft:water 2000')
        .itemOutputs('2x gtceu:copper_dust')
        .chancedOutput('gtceu:tellurium_dust', 150, 500)
        .chancedOutput('gtceu:selenium_dust', 250, 500)
        .outputFluids('gtceu:sulfuric_acid 2000', 'gtceu:oxygen 2000')
        .duration(400)
        .EUt(LuV);

    allthemods.recipes.gtceu.electrolyzer('gregification:electrowinning/zinc')
        .circuit(1)
        .itemInputs('2x #forge:dusts/zinc_sulfate')
        .inputFluids('minecraft:water 2000')
        .itemOutputs('2x gtceu:zinc_dust')
        .outputFluids('gtceu:sulfuric_acid 2000', 'gtceu:oxygen 2000')
        .duration(400)
        .EUt(EV);
});