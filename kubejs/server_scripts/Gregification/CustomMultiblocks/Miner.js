// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {   
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    
    const minerDuration = 600;

    allthemods.recipes.gtceu.void_miner('gregification:deeper_darker/bedrockium')
        .itemOutputs('gtceu:bedrockium_ore')
        .inputFluids('#forge:drilling_fluid 1000')
        .circuit(23)
        .duration(minerDuration).EUt(UV).dimension('deeperdarker:otherside'); 

    allthemods.recipes.gtceu.void_miner('gregification:deeper_darker/adamantite')
        .itemOutputs('gtceu:adamantite_ore')
        .inputFluids('#forge:drilling_fluid 1000')
        .circuit(24)
        .duration(minerDuration).EUt(ZPM).dimension('deeperdarker:otherside'); 
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
