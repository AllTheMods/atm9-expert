ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
    const sunnariumEU = LuV;
    const sunnariumTemp = 5400;
    const mithrilEU = IV;
    const adamantiumEU = ZPM;

    allthemods.recipes.gtceu.chemical_reactor('gregification:sunnarium/dust')
        .itemInputs('8x #forge:dusts/glowstone')
        .notConsumable('gtceu:solar_relic')
        .itemOutputs('gtceu:sunnarium_dust')
        .duration(400).EUt(sunnariumEU)

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:sunnarium/ingot')
        .itemInputs('#forge:dusts/sunnarium')
        .inputFluids('#forge: 1000')
        .itemOutputs('gtceu:sunnarium_ingot')
        .blastFurnaceTemp(sunnariumTemp)
        .duration(1200).EUt(sunnariumEU)

    
    allthemods.recipes.gtceu.chemical_reactor('gregification:lunarium/dust')
        .itemInputs('8x #forge:dusts/moon_stone')
        .notConsumable('forbidden_arcanus:crescent_moon')
        .itemOutputs('gtceu:lunarium_dust')
        .duration(400).EUt(sunnariumEU)

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:lunarium/ingot')
        .itemInputs('#forge:dusts/lunarium')
        .inputFluids('#forge: 1000')
        .itemOutputs('gtceu:lunarium_ingot')
        .blastFurnaceTemp(sunnariumTemp)
        .duration(1200).EUt(sunnariumEU)

});