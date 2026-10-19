ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    const water = 'gtceu:water_stage_6 1000'
    const steam = 'gtceu:super_critical_steam 1000'
    const plasmaExchnage = 16
    const plasmaExchangeDuration = 60
    const plasmas = ['tin', 'iron', 'nickel', 'nitrogen', 'argon', 'americium', 'helium', 'oxygen', 'naquadria_stage_4', 'antimatter', 'naquadria_stage_3', 'naquadria_stage_2', 'naquadria_awakened', 'calcium', 'californium', 'oganesson'];

    plasmas.forEach(plasma => {
        allthemods.recipes.gtceu.super_critical_heat_exchanger(`gregification:sche/${plasma}_cooling`)
            .inputFluids(`#forge:${plasma}_plasma ${plasmaExchnage}`, water)
            .outputFluids(`gtceu:${plasma} ${plasmaExchnage}`, steam)
            .duration(plasmaExchangeDuration)
            .EUt(UV);

        allthemods.recipes.gtceu.super_critical_heat_exchanger(`gregification:sche/${plasma}_heating`)
            .inputFluids(`#forge:${plasma} ${plasmaExchnage}`, steam)
            .outputFluids(`gtceu:${plasma}_plasma ${plasmaExchnage}`, water)
            .duration(plasmaExchangeDuration)
            .EUt(UV);
    });
    
});