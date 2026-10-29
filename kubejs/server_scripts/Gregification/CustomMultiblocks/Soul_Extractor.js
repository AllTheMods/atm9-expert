// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const EUStage1 = MV; //hv
    const EUStage2 = EV; //ev
    const EUStage3 = IV; //iv
    const EUStage4 = LuV; //luv
    const EUStage5 = ZPM; //zpm
    const EUStage6 = UV; //uv
    const EUStage7 = UHV; //uhv
    const EUStage8 = UEV; //uev

    const soulExtractor = (inputs, fluidIn, outputs, fluidOut, duration, eu, cID, program) => {

        let id;
        if (cID){
            id = cID;
        }
        else{
            let firstFluidEntry = Array.isArray(fluidOut) ? fluidOut[0] : fluidOut;

            let fluidName = firstFluidEntry
            .split(' ')[0]               // Takes 'kubejs:liquid_soul', ignores '2000'
            .split(':').pop()            // Takes 'liquid_soul', ignores 'kubejs'
            .replace(/[^a-z0-9_]/gi, '') // Final safety clean
            .toLowerCase();
            id = `gregification:soul_extraction/${fluidName}`;

        }
                

        let recipe = allthemods.recipes.gtceu.soul_extractor(id)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);
        if (program) {
            recipe.circuit(program);
        }

        if (outputs && outputs.length > 0) {
            recipe.itemOutputs(outputs)
        }
        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }
        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
        return recipe;
    };

    //Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:cow"}')
    //{type: '', item: '', total: , amount: },
    const souls = [        
        {type: 'fish', item: 'minecraft:cod', total: 6.0, amount: 12},
        {type: 'spider', item: 'minecraft:string', total: 10.0, amount: 40},
        {type: 'basalz', item: 'thermal:basalz_rod', total: 6.0, amount: 12},
        {type: 'cow', item: 'minecraft:beef', total: 8.0, amount: 16},
        {type: 'creeper', item: 'minecraft:creeper_head', total: 10.0, amount: 4},
        {type: 'cow', item: 'minecraft:leather', total: 8.0, amount: 32},
        {type: 'blaze', item: 'minecraft:blaze_rod', total: 10.0, amount: 20},
        {type: 'blitz', item: 'thermal:blitz_rod', total: 6.0, amount: 12},
        {type: 'blizz', item: 'thermal:blizz_rod', total: 6.0, amount: 12},
        {type: 'turtle', item: 'minecraft:scute', total: 6.0, amount: 12},
        {type: 'zombie', item: 'minecraft:zombie_head', total: 10.0, amount: 4},
        {type: 'enderman', item: 'minecraft:ender_pearl', total: 8.0, amount: 16},
        {type: 'wither_skeleton', item: 'minecraft:coal', total: 8.0, amount: 80},
        {type: 'pig', item: 'minecraft:porkchop', total: 8.0, amount: 16},
        {type: 'skeleton', item: 'minecraft:arrow', total: 10.0, amount: 100},
        {type: 'chicken', item: 'minecraft:egg', total: 8.0, amount: 16},
        {type: 'creeper', item: 'minecraft:gunpowder', total: 10.0, amount: 20},
        {type: 'skeleton', item: 'minecraft:skeleton_skull', total: 10.0, amount: 4},
        {type: 'rabbit', item: 'minecraft:rabbit_hide', total: 6.0, amount: 24},
        {type: 'sheep', item: 'minecraft:mutton', total: 8.0, amount: 16},
        {type: 'chicken', item: 'minecraft:feather', total: 8.0, amount: 32},
        {type: 'fish', item: 'minecraft:pufferfish', total: 6.0, amount: 6},
        {type: 'skeleton', item: 'minecraft:bone', total: 10.0, amount: 20},
        {type: 'squid', item: 'minecraft:ink_sac', total: 6.0, amount: 24},
        {type: 'chicken', item: 'minecraft:chicken', total: 8.0, amount: 16},
        {type: 'fish', item: 'minecraft:salmon', total: 6.0, amount: 12},
        {type: 'squid', item: 'minecraft:glow_ink_sac', total: 6.0, amount: 24},
        {type: 'rabbit', item: 'minecraft:rabbit', total: 6.0, amount: 12},
        {type: 'rabbit', item: 'minecraft:rabbit_foot', total: 6.0, amount: 24},
        {type: 'slime', item: 'minecraft:slime_ball', total: 12.0, amount: 24},
        {type: 'wither_skeleton', item: 'minecraft:wither_skeleton_skull', total: 8.0, amount: 4},
        {type: 'fish', item: 'minecraft:tropical_fish', total: 6.0, amount: 12},
        {type: 'spider', item: 'minecraft:spider_eye', total: 10.0, amount: 10},
        {type: 'zombie', item: 'minecraft:rotten_flesh', total: 10.0, amount: 20},
        {type: 'ghast', item: 'minecraft:ghast_tear', total: 4.0, amount: 8},
        {type: 'sheep', item: '#forge:wool', total: 8.0, amount: 40},     
    ];
    souls.forEach(soul => {
        let output = Item.of('mysticalagriculture:soul_jar', `{Souls:${soul.total}d,Type:"mysticalagriculture:${soul.type}"}`).strongNBT();
        soulExtractor([`${soul.amount}x ${soul.item}`], null, [output], null, 600, EUStage1, `${soul.type}_${soul.item.split(':').pop()}`, 1);
    });

    soulExtractor(['forbidden_arcanus:soul_extractor', '128x minecraft:soul_sand'], 'gtceu:water_stage_3 2000', '128x forbidden_arcanus:soulless_sand', 'gtceu:soul 2000', 800, EUStage3);
    soulExtractor(['128x minecraft:ghast_tear', '128x #forge:dusts/redstone', '128x #forge:dusts/glowstone'], 'gtceu:water_stage_3 16000', null, 'gtceu:aureal 5000', 800, EUStage4, 'gregification:aureal_from_base_materials');
    
    

    allthemods.recipes.gtceu.hydro_electromagnetic_separator('dragon_heart')
        .itemInputs('draconicevolution:dragon_heart')
        .inputFluids('gtceu:water_stage_3 1000')        
        .outputFluids('gtceu:liquid_draconic_essence 1000')
        .duration(1000)
        .EUt(EUStage3);

    allthemods.recipes.gtceu.hydro_electromagnetic_separator('fertilizer')
        .itemInputs('industrialforegoing:fertilizer')
        .inputFluids('gtceu:water_stage_1 1000')        
        .outputFluids('gtceu:liquid_fertilizer 1000')
        .duration(100)
        .EUt(EUStage1);

    allthemods.recipes.gtceu.hydro_electromagnetic_separator('saturated_tau')
        .itemInputs('bloodmagic:strong_tau')
        .inputFluids('gtceu:water_stage_2 1000')        
        .outputFluids('gtceu:saturated_tau 1000')
        .duration(100)
        .EUt(EUStage1);

    allthemods.recipes.gtceu.hydro_electromagnetic_separator('dragon_breath')
        .itemInputs('minecraft:dragon_breath')
        .inputFluids('gtceu:water_stage_2 1000')        
        .outputFluids('gtceu:liquid_dragon_breath 1000')
        .duration(100)
        .EUt(EUStage2);   

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
