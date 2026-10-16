ServerEvents.recipes(allthemods => {   
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    
    const minerDuration = 600;



    allthemods.recipes.gtceu.void_miner('gregification:deeper_darker/bedrockium')
        .itemOutputs('gtceu:bedrockium_ore')
        .inputFluids('#forge:drilling_fluid 1000')
        .circuit(13)
        .duration(minerDuration).EUt(UV).dimension('deeperdarker:otherside'); 
})