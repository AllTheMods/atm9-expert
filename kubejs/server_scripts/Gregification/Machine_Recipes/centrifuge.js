// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.recipes.gtceu.centrifuge('terraria_dust')
        .itemInputs('#forge:dusts/sanguine_terraria')
        .itemOutputs('gtceu:terrasteel_dust')
        .chancedOutput('gtceu:elementium_dust', 500, 250)
        .chancedOutput('gtceu:manasteel_dust', 1000, 250)
        .chancedOutput('gtceu:gaia_dust', 100, 250)
        .duration(600)
        .EUt(EV);

    allthemods.recipes.gtceu.centrifuge('gregification:centrifuge/insanite_dust')
        .itemInputs('#forge:dusts/insanite')        
        .chancedOutput('#forge:dusts/rare_earth', 1000, 250)
        .chancedOutput('#forge:dusts/uranium_235', 1000, 250)
        .chancedOutput('#forge:dusts/lanthanum', 250, 250)
        .chancedOutput('#forge:dusts/lutetium', 250, 250)
        .chancedOutput('#forge:dusts/yttrium', 250, 250)
        .chancedOutput('#forge:dusts/samarium', 250, 250)
        .duration(600)
        .EUt(ZPM);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
