ServerEvents.recipes(allthemods => {
    // --- 1. VOLTAGE MAP ---
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const COIL_TEMPS = {
        CUPRONICKEL: 1800,
        KANTHAL: 2700,
        NICHROME: 3600,
        RTM: 4500,
        HSS_G: 5400,
        NAQUADAH: 7200,
        TRINIUM: 9000,
        TRITANIUM: 10800,
        DRACONIUM: 11200,
        DRACONIUM_AWAKENED: 12800,
        ETRIUM: 13500,
        INFINITY: 15000
    };
        
    allthemods.shaped('gtceu:industrial_leacher', [
        'TCT',
        'OHO',
        'PWP'
    ], {
        H: 'gtceu:iv_machine_hull',
        O: '#forge:frames/draconium',
        C: '#gtceu:circuits/iv',
        T: '#forge:plates/tungsten_carbide',
        P: 'gtceu:iv_electric_pump',
        W: 'gtceu:tungsten_steel_normal_fluid_pipe'
    }).id('gregification:controllers/industrial_leacher')

    
    allthemods.shaped('gtceu:dissolution_tank', [
        'ECE',
        'MHM',
        'TPT'
    ], {
        H: 'gtceu:iv_machine_hull',
        C: '#gtceu:circuits/iv',
        E: '#forge:plates/end_steel',
        M: 'gtceu:iv_electric_motor',
        T: '#forge:plates/tungsten_carbide',
        P: 'gtceu:iv_electric_pump'
    }).id('gregification:controllers/dissolution_tank')

    
    allthemods.shaped('gtceu:acid_brewing_vat', [
        'NCN',
        'PHP',
        'TOT'
    ], {
        H: 'gtceu:iv_machine_hull',
        C: '#gtceu:circuits/iv',
        N: '#forge:plates/enderium',
        P: 'gtceu:iv_electric_pump',
        T: '#forge:plates/tungsten_carbide',
        O: '#forge:frames/vibranium'
    }).id('gregification:controllers/acid_brewing_vat')
});