// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const tempTiers = [1800, 2700, 3600, 4500, 5400, 7200, 9001, 10800];
    const energyTiers = [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ];
    
    allthemods.recipes.gtceu.air_compressor('gregification:mv_compressed_air')
        .inputFluids('gtceu:air 1000')
        .outputFluids('gtceu:compressed_air 1000')
        .circuit(5)
        .duration(20)
        .EUt(LV);

    const addPC = (itemsIn, itemOut, fluidIn, fluidOut, tier, program, customID) => {    

        let outputID = '';

        if (customID) {
            outputID = customID;
        }
        else if (itemOut) {
            let raw = typeof itemOut === 'string' ? itemOut : itemOut.getId();
            outputID = raw.replace(/^\d+x\s*/, '').replace(/[^a-z0-9]/gi, '_');
        } else if (fluidOut) {
            let raw = fluidOut.replace(/^\d+x\s*/, '').split(' ')[0];
            outputID = raw.replace(/[^a-z0-9]/gi, '_');
        } else {
            outputID = 'dissolution_' + Math.floor(Math.random() * 1000);
        }
        

        let recipe = allthemods.recipes.gtceu.industrial_pressure_chamber(`gregification:dissolution/${outputID}`)
            .duration((tier+1)*400)
            .EUt(energyTiers[tier+1])
            .inputFluids(`#forge:compressed_air ${tier+1}0000`)
            .addData('ebf_temp', tempTiers[tier]);

        // Safety check for inputs
        if (program) recipe.circuit(program);
        if (itemsIn) recipe.itemInputs(itemsIn);
        if (fluidIn) recipe.inputFluids(fluidIn);
        if (itemOut) recipe.itemOutputs(itemOut);
        if (fluidOut) recipe.outputFluids(fluidOut);

    };

    //compressed iron block
    addPC(
        '4x #forge:storage_blocks/iron',
        '4x pneumaticcraft:compressed_iron_block',
        null,
        null,
        1,        
        1
    );

    //compressed iron ingot
    addPC(
        '32x #forge:ingots/iron',
        '32x pneumaticcraft:ingot_iron_compressed',
        null,
        null,        
        0,        
        1
    );

    //wrought iron block
    addPC(
        '4x #forge:storage_blocks/iron',
        '4x gtceu:wrought_iron_block',
        null,
        null,        
        2,        
        2
    );

    //wrought iron ingot
    addPC(
        '32x #forge:ingots/iron',
        '32x gtceu:wrought_iron_ingot',
        null,
        null,        
        1,        
        2
    );
   
    //compressed bee
    addPC(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:iron"}}').strongNBT(),
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:compressed_iron"}}').strongNBT(),
        null,
        null,        
        4,
        null,
        'compressed_bee'
    );

    //slime ball
    addPC(
        '4x #forge:dyes/green',
        '4x minecraft:slime_ball',
        '#forge:milk 100',
        null,
        1
    );

    //ice
    addPC(
        '64x minecraft:snow_block',
        '16x minecraft:ice',
        null,
        null,
        1
    );

    //packed ice
    addPC(
        '64x minecraft:ice',
        '16x minecraft:packed_ice',
        null,
        null,
        1
    );

    //blue ice
    addPC(
        '16x minecraft:packed_ice',
        '4x minecraft:blue_ice',
        null,
        null,
        2
    );


    //flour
    addPC(
        '8x #forge:grain/wheat',
        '24x pneumaticcraft:wheat_flour',
        null,
        null,
        0
    );

    //sourdough - using forge flour dust
    addPC(
        '24x #forge:dusts/flour',
        '24x pneumaticcraft:sourdough',
        'pneumaticcraft:yeast_culture 4000',
        null,
        1
    );

    //compressed stone
    addPC(
        '32x #forge:stone',
        '32x pneumaticcraft:compressed_stone',
        null,
        null,
        1
    );

    //transistor
    addPC(
        ['8x #forge:plates/plastic', '8x #forge:fine_wires/tin', '2x #forge:dusts/redstone', '2x #forge:foils/aluminium'],
        '8x pneumaticcraft:transistor',
        null,
        null,
        2
    );

    //capacitor
    addPC(
        ['8x #forge:plates/plastic', '8x #forge:fine_wires/gold', '2x #forge:dusts/redstone', '2x #forge:plates/silicon'],
        '8x pneumaticcraft:capacitor',
        null,
        null,
        2
    );

    //pulsating black hole
    addPC(
        ['mythicbotany:mjoellnir',
            'apotheosis:sigil_of_withdrawal',
            'evilcraft:lightning_bomb',
            'forbidden_arcanus:dark_rune_block',
            'thermal_extra:abyssal_rf_coil_xfer_augment',
            'occultism:stable_wormhole',
            'irons_spellbooks:fire_upgrade_orb',            
            'ae2:quantum_ring',
            Item.of('pneumaticcraft:micromissiles', '{Damage:0}').strongNBT()],
        'allthetweaks:pulsating_black_hole',
        null,
        null,
        5,
        null,
        'pulsating_black_hole'
    );

    //etching acid
    addPC(
        '#forge:dusts/gunpowder',
        null,
        ['gtceu:iron_iii_chloride 1000', '#forge:plastic 2000', 'gtceu:hydrochloric_acid 2000'],
        'pneumaticcraft:etching_acid 1000',
        1
    );

    //empty pcb
    addPC(
        ['8x #forge:plates/plastic', '32x #forge:fine_wires/platinum', '32x #forge:fine_wires/copper'],
        '8x pneumaticcraft:empty_pcb',
        null,
        null,
        1
    );


    //turbine blade
    addPC(
        ['#forge:ingots/gold', '2x #forge:dusts/redstone'],
        'pneumaticcraft:turbine_blade',
        null,
        null,
        2
    );

    //diamond
    addPC(
        '8x #forge:storage_blocks/coal',
        'minecraft:diamond',
        null,
        null,
        2
    );

    //solar wafer
    addPC(
        ['pneumaticcraft:upgrade_matrix', 'minecraft:amethyst_shard'],
        'pneumaticcraft:solar_wafer',
        null,
        null,
        2,
    );
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
