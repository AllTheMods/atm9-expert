// @ts-nocheck
// priority: -1000
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const addEBF = (itemsIn, fluidIn, itemsOut, fluidOut, temp, duration, eu, program, rID) => {
        const source = Array.isArray(itemsOut) ? itemsOut[0] : itemsOut;
        const outputID = String(source || "unknown").replace(/[^a-z0-9]/gi, '_');
        //const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.electric_blast_furnace(`gregification:blasting/${rID || outputID}_blasting`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .blastFurnaceTemp(temp)
            .duration(duration)
            .EUt(eu);
        if (program) { recipe.circuit(program) }        
        if (fluidIn) { recipe.inputFluids(fluidIn) }
        if (fluidOut) { recipe.outputFluids(fluidOut) }
    };

   
    addEBF('#forge:dusts/allthemodium','#forge:necrotic_acid 1000','gtceu:hot_allthemodium_ingot',null,4500,2400,IV);
    addEBF(['#forge:dusts/vibranium', '#forge:dusts/stabilized_clathrate'],'#forge:necrotic_acid 1000','gtceu:hot_vibranium_ingot',null,4500,2400,IV);
    addEBF(['#forge:dusts/unobtainium', '#forge:dusts/zirconium_lattice'],'#forge:necrotic_acid 1000','gtceu:hot_unobtainium_ingot',null,4500,2400,IV);

    // EBF

    //steel
    addEBF(
        ['#forge:ingots/iron', '2x #forge:dusts/coal'], // or charcoal
        null,
        'alltheores:steel_ingot',
        null,
        2800,
        400,
        HV
    );

    //red alloy ingot
    addEBF(
        ['2x minecraft:redstone', '#forge:silicon'],
        null,
        'gtceu:red_alloy_ingot',
        null,
        1000,
        400,
        MV
    );

    addEBF(
        ['4x #forge:dusts/cerium','64x #forge:dusts/silicon'],
        ['gtceu:germanium_tetrachloride 1000'],
        ['gtceu:germanium_boule', '6x gtceu:cerium_chloride_dust'],
        null,
        12600,
        9000,
        ZPM
    )

    addEBF(
        ['16x #forge:dusts/organic_polymer', '4x #forge:ingots/draconium_awakened', '4x #forge:dusts/enriched_naquadah'],
        null,
        'gtceu:empowered_boule',
        null,
        12600,
        9000,
        UV
    );


    addEBF(
        ['16x #forge:dusts/caesium', '8x #forge:dusts/hop_graphite', '4x #forge:dusts/rubidium'],
        null,
        'gtceu:atomic_boule',
        null,
        12600,
        9000,
        ZPM
    );

    //sky steel
    addEBF(
        ['#forge:ingots/iron', 'ae2:sky_stone_block', 'ae2:charged_certus_quartz_crystal'],
        'industrialforegoing:ether_gas 1000',
        '2x megacells:sky_steel_ingot',
        null,
        3600,
        400,
        HV
    );

    //sky insulated resin
    addEBF(
        ['appflux:redstone_crystal', 'ae2:sky_stone_block', 'appflux:harden_insulating_resin'],
        'minecraft:lava 1000',
        '2x appflux:sky_harden_insulating_resin',
        null,
        3600,
        400,
        HV
    );

    addEBF(['#forge:dusts/semi_stable_clathrate','evilcraft:vengeance_essence'],
        '#forge:water_stage_2 2000',
        'evilcraft:garmonbozia',
        null,
        5400,
        2000,
        EV,3
    );

    addEBF('#forge:dusts/semi_stable_clathrate',
        null,
        'gtceu:semi_stable_clathrate_ingot',
        null,
        5400,
        5000,
        EV,
        1
    );

    
    addEBF('#forge:dusts/semi_stable_clathrate',
        '#forge:water_stage_2 2000',
        'gtceu:semi_stable_clathrate_ingot',
        null,
        5400,
        2500,
        EV,
        2,
        'semi_stable_clathrate_2'
    );


    addEBF('#forge:dusts/stabilized_clathrate',
        null,
        'gtceu:stabilized_clathrate_ingot',
        null,
        5400,
        6000,
        EV,
        1
    );

    
    addEBF('#forge:dusts/stabilized_clathrate',
        '#forge:water_stage_2 2000',
        'gtceu:stabilized_clathrate_ingot',
        null,
        5400,
        3000,
        EV,
        2,
        'stabilized_clathrate_2'
    );

    
    

});