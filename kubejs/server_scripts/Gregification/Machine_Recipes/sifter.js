ServerEvents.recipes(allthemods => {              
        const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
        allthemods.recipes.gtceu.sifter('wheat_to_seed')
                .itemInputs('#forge:crops/wheat')
                .itemOutputs('minecraft:wheat_seeds')
                .duration(80)
                .EUt(LV)                
                .chancedOutput('minecraft:wheat_seeds', 500, 500)
                .chancedOutput('2x minecraft:wheat_seeds', 500, 250)
                .chancedOutput('4x minecraft:wheat_seeds', 100, 100);        
});