ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
    const sunnariumEU = LuV;
    const sunnariumTemp = 5400;
    const mithrilEU = IV;
    const adamantiumEU = ZPM;



    allthemods.recipes.gtceu.electric_blast_furnace('gregification:sunnarium/ingot')
        .itemInputs('#forge:dusts/sunnarium')
        .inputFluids('#forge:gold 1296')
        .itemOutputs('gtceu:sunnarium_ingot')
        .blastFurnaceTemp(sunnariumTemp)
        .duration(1200).EUt(sunnariumEU)


    allthemods.recipes.gtceu.electric_blast_furnace('gregification:lunarium/ingot')
        .itemInputs('#forge:dusts/lunarium')
        .inputFluids('#forge:platinum 1296')
        .itemOutputs('gtceu:lunarium_ingot')
        .blastFurnaceTemp(sunnariumTemp)
        .duration(1200).EUt(sunnariumEU)

});