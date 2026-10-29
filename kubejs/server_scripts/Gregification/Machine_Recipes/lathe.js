// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

    allthemods.recipes.gtceu.lathe('gregification:lathe/praseodymium_doped_yttrium_aluminium_garnet')
        .itemInputs('gtceu:praseodymium_doped_yttrium_aluminium_garnet_boule')
        .itemOutputs('gtceu:praseodymium_doped_yttrium_aluminium_garnet_lens', 'gtceu:praseodymium_doped_yttrium_aluminium_garnet_dust')
        .EUt(LuV).duration(600);
        
    allthemods.recipes.gtceu.lathe('gregification:lathe/neodymium_doped_yttrium_aluminium_garnet')
        .itemInputs('gtceu:neodymium_doped_yttrium_aluminium_garnet_boule')
        .itemOutputs('gtceu:neodymium_doped_yttrium_aluminium_garnet_lens', 'gtceu:neodymium_doped_yttrium_aluminium_garnet_dust')
        .EUt(ZPM).duration(600);    
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
