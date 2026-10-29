// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.recipes.gtceu.sanguine_refinery('evil_to_sanguuine')        
        .inputFluids('evilcraft:blood 144')
        .outputFluids('gtceu:sanguine_concentrate 144')
        .duration(60)
        .EUt(MV)

    allthemods.recipes.gtceu.sanguine_refinery('blood_to_sanguuine')        
        .inputFluids('bloodmagic:life_essence_fluid 144')
        .outputFluids('gtceu:sanguine_concentrate 144')
        .duration(60)
        .EUt(MV)
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
