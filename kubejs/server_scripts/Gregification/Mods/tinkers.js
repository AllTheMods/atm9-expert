// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    allthemods.shapeless('8x tconstruct:grout', ['#forge:dusts/plascrete', '3x #minecraft:sand', '3x #forge:gravel', 'minecraft:clay', '#forge:dusts/steel']).id('gregification:tinkers/grout');    

    allthemods.shaped('tconstruct:foundry_controller', [
        'PUP',
        'PHP',
        'PUP'
    ], {
        P: '#forge:plates/dark_steel',
        H: 'gtceu:mv_machine_hull',
        U: 'gtceu:mv_electric_pump'
    }).id('gregification:tinkers/foundry_controller');
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
