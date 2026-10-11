ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.shapeless('8x tconstruct:grout', ['#forge:dusts/plascrete', '3x #minecraft:sand', '3x #forge:gravel', 'minecraft:clay', '#forge:dusts/steel']).id('gregification:tinkers/grout');    
});