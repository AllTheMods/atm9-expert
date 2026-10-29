// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;

    allthemods.recipes.gtceu.autoclave('gregification:cubic_zirconia_gem')
        .itemInputs('#forge:dusts/zirconium')
        .inputFluids('#forge:oxygen 2000')        
        .itemOutputs('gtceu:cubic_zirconia_gem')
        .duration(800)
        .EUt(LuV);

    allthemods.recipes.gtceu.crystal_growth_chamber('gregification:cubic_zirconia_boule')
        .itemInputs('#forge:exquisite_gems/cubic_zirconia', '#forge:dusts/yttrium_oxide' )
        .inputFluids('#forge:zirconium 1296')
        .itemOutputs('gtceu:cubic_zirconia_boule')
        .duration(800)
        .EUt(LuV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:yttrium_oxide_dust')
        .itemInputs('2x #forge:dusts/yttrium')
        .inputFluids('#forge:oxygen 3000')
        .itemOutputs('gtceu:yttrium_oxide_dust')
        .duration(400)
        .EUt(IV);    

    allthemods.recipes.gtceu.crystal_growth_chamber('gregification:bismuth_telluride_boule')
        .itemInputs('#forge:exquisite_gems/bismuth_telluride', '#forge:dusts/antimony_telluride' )
        .inputFluids('#forge:bismuth_telluride 1296')
        .itemOutputs('gtceu:bismuth_telluride_boule')
        .duration(800)
        .EUt(ZPM);
    
        
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
