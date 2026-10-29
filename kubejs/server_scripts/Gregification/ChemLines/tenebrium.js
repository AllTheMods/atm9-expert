// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    let TenebriumEU = UV;
    
    allthemods.recipes.gtceu.sifter('gregification:tenebrius_sifting')
        .itemInputs('forge:dusts/tenebrius')
        .itemOutputs('gtceu:unrefined_tenebrius_dust')
        .chancedOutput('bloodmagic:sand_hellforged', 1500, 1500)
        .chancedOutput('occultism:iesnium_dust', 1500, 1500)
        .duration(400).EUt(TenebriumEU);
    
    allthemods.recipes.gtceu.crystal_growth_chamber('gregification:tenebrius_gem')
        .itemInputs('#forge:dusts/unrefined_tenebrius')
        .inputFluids('#forge:liquid_chaos 2000')        
        .itemOutputs('gtceu:refined_tenebrius_gem')
        .duration(800)
        .EUt(TenebriumEU);

        
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:tenebrius_gem_processing')
        .itemInputs('#forge:dusts/refined_tenebrius', '#forge:dusts/calcium_nitrate', '#forge:dusts/calcium_sulfide')
        .inputFluids('#forge:peroxodisulfuric_acid 1000', '#forge:fluoroantimonic_acid 1000', '#forge:hydrogen_peroxide 1000')
        .itemOutputs('gtceu:purified_tenebrius_dust', 'gtceu:antimony_trifluoride_dust', '2x gtceu:calcium_fluoride_dust')
        .outputFluids('gtceu:sulfuric_acid 3000', 'gtceu:dinitrogen_tetroxide 1000')
        .duration(800)
        .EUt(TenebriumEU);
    
    allthemods.recipes.gtceu.centrifuge('gregification:tenebrius_dust_processing')
        .itemInputs('#forge:dusts/purified_tenebrius')
        .chancedOutput('gtceu:small_tenebrium_dust', 5000, 1500)
        .duration(800)
        .EUt(TenebriumEU);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
