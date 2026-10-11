ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.recipes.gtceu.forming_press('gregification:ae2/quartz_glass')
        .itemInputs('gtceu:tempered_glass', '#forge:dusts/certus_quartz', '#forge:dusts/cadmium')
        .itemOutputs('ae2:quartz_glass')        
        .duration(150)
        .EUt(MV)
});