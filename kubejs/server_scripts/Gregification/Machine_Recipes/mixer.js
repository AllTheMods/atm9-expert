// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    // Resolves a voltage from a number, a numeric string ('2048'), or a tier name in any case ('LuV', 'luv', 'LUV')
    const resolveVoltage = (tierOrEu, id) => {
        if (typeof tierOrEu === 'number') return tierOrEu;
        if (!isNaN(tierOrEu)) return parseInt(tierOrEu);
        let key = Object.keys(global.tiers).find(k => k.toLowerCase() === String(tierOrEu).toLowerCase());
        if (key) return global.tiers[key];
        console.error(`[addMixer] unknown tier '${tierOrEu}' for ${id}, defaulting to 32`);
        return 32;
    };

    const addMixer = (itemsIn, itemOut, tierOrEu, duration, program) => {
        let rawID = typeof itemOut === 'string' ? itemOut : itemOut.getId();
        let outputID = rawID.replace(/[^a-z0-9]/gi, '_');
        let voltage = resolveVoltage(tierOrEu, rawID);

        let recipe = allthemods.recipes.gtceu.mixer(outputID)
            .itemInputs(itemsIn)
            .itemOutputs(itemOut)
            .duration(duration)
            .EUt(voltage);
        if (program) recipe.circuit(program);
    };


    addMixer(['3x #forge:dusts/neodymium', '#forge:dusts/promethium'], '4x gtceu:neodymium_promethium_dopant_dust', ZPM, 400);
    addMixer(['3x #forge:dusts/neodymium', '#forge:dusts/terbium'], '4x gtceu:neodymium_terbium_dopant_dust', ZPM, 400);
    addMixer(['3x #forge:dusts/neodymium', '#forge:dusts/dysprosium'], '4x gtceu:neodymium_dysprosium_dopant_dust', ZPM, 400);
    addMixer(['2x #forge:dusts/neodymium', '#forge:dusts/terbium', '#forge:dusts/dysprosium'], '4x gtceu:neodymium_terbium_dysprosium_dopant_dust', ZPM, 400);
    addMixer(['2x #forge:dusts/neodymium', '#forge:dusts/praseodymium', '#forge:dusts/promethium', '#forge:dusts/terbium', '#forge:dusts/dysprosium'], '6x gtceu:neodymium_rare_earth_dopant_dust', ZPM, 400);

    // ---- structural ----
    //corrosive_etrium_alloy (blast UHV)
    addMixer(
        [
            '4x #forge:dusts/etrium',
            '3x #forge:dusts/eternal',
            '2x #forge:dusts/corrosive',
            '#forge:dusts/bohrium'
        ],
        '10x gtceu:corrosive_etrium_alloy_dust',
        ZPM,
        500
    )

    //destructive_scandozirconium (blast UEV)
    addMixer(
        [
            '4x #forge:dusts/zirconium',
            '3x #forge:dusts/scandium',
            '2x #forge:dusts/destructive',
            '#forge:dusts/hassium'
        ],
        '10x gtceu:destructive_scandozirconium_dust',
        UV,
        500
    )

    //vengeful_gadomeitnerium_alloy (blast UIV)
    addMixer(
        [
            '4x #forge:dusts/gadolinium',
            '3x #forge:dusts/vengeful',
            '2x #forge:dusts/meitnerium',
            '#forge:dusts/rutherfordium'
        ],
        '10x gtceu:vengeful_gadomeitnerium_alloy_dust',
        UHV,
        500
    )

    //steadfast_rhenobedrock_alloy (blast UXV)
    addMixer(
        [
            '4x #forge:dusts/bedrockium',
            '3x #forge:dusts/rhenium',
            '2x #forge:dusts/steadfast',
            '#forge:dusts/seaborgium'
        ],
        '10x gtceu:steadfast_rhenobedrock_alloy_dust',
        UEV,
        500
    )

    //demonic_antimatter_alloy (blast OpV)
    addMixer(
        [
            '4x #forge:dusts/antimatter',
            '3x #forge:dusts/dubnium',
            '2x #forge:dusts/demon',
            '#forge:dusts/fermium'
        ],
        '10x gtceu:demonic_antimatter_alloy_dust',
        UIV,
        500
    )

    // ---- component ----
    //infused_star (blast UHV)
    addMixer(
        [
            '4x #forge:dusts/alloy_infused',
            '#forge:dusts/atm_star'
        ],
        '5x gtceu:infused_star_dust',
        ZPM,
        500
    )

    //reinforced_star (blast UEV)
    addMixer(
        [
            '3x #forge:dusts/alloy_reinforced',
            '2x #forge:dusts/atm_star'
        ],
        '5x gtceu:reinforced_star_dust',
        UV,
        500
    )

    //atomic_star (blast UIV)
    addMixer(
        [
            '2x #forge:dusts/alloy_atomic',
            '3x #forge:dusts/atm_star'
        ],
        '5x gtceu:atomic_star_dust',
        UHV,
        500
    )

    // ---- superconductor cables ----
    //flerovium_terbium_alloy (blast UIV)
    addMixer(
        [
            '3x #forge:dusts/bismuth',
            '3x #forge:dusts/dysprosium',
            '2x #forge:dusts/terbium',
            '2x #forge:dusts/flerovium'
        ],
        '10x gtceu:flerovium_terbium_alloy_dust',
        UHV,
        500
    )
    

    //copernicium_dysprosium_alloy (blast UHV)
    allthemods.recipes.gtceu.mixer('copernicium_dysprosium_alloy_dust')
        .itemInputs([
            '3x #forge:dusts/dysprosium',
            '3x #forge:dusts/cadmium',
            '2x #forge:dusts/technetium'
        ])
        .inputFluids('#forge:copernicium 288')
        .itemOutputs('10x gtceu:copernicium_dysprosium_alloy_dust')
        .duration(500)
        .EUt(ZPM)

    //nihonium_bismuth_alloy (blast UEV)
    allthemods.recipes.gtceu.mixer('nihonium_bismuth_alloy_dust')
        .itemInputs([
            '3x #forge:dusts/bismuth',
            '3x #forge:dusts/rubidium',
            '2x #forge:dusts/terbium'
        ])
        .inputFluids('#forge:nihonium 288')
        .itemOutputs('10x gtceu:nihonium_bismuth_alloy_dust')
        .duration(500)
        .EUt(UV)

    //moscovium_roentgenium_alloy (blast UXV)
    allthemods.recipes.gtceu.mixer('moscovium_roentgenium_alloy_dust')
        .itemInputs([
            '3x #forge:dusts/astatine',
            '3x #forge:dusts/roentgenium'
        ])
        .inputFluids('#forge:moscovium 288', '#forge:tennessine 288')
        .itemOutputs('10x gtceu:moscovium_roentgenium_alloy_dust')
        .duration(500)
        .EUt(UEV)

    //livermorium_astatine_alloy (blast OpV)
    allthemods.recipes.gtceu.mixer('livermorium_astatine_alloy_dust')
        .itemInputs([
            '3x #forge:dusts/bismuth',
            '3x #forge:dusts/astatine',
            '2x #forge:dusts/roentgenium'
        ])
        .inputFluids('#forge:livermorium 288')
        .itemOutputs('10x gtceu:livermorium_astatine_alloy_dust')
        .duration(500)
        .EUt(UIV)

    addMixer(['1x #forge:dusts/dysprosium', '1x #forge:dusts/neodymium_praseodymium_iron_boron'], '2x gtceu:neodymium_dysprosium_dust', LuV, 600);
    addMixer(['1x #forge:dusts/terbium', '1x #forge:dusts/neodymium_praseodymium_iron_boron'], '2x gtceu:neodymium_terbium_dust', ZPM, 600);
    addMixer(['2x #forge:dusts/andesite', '2x #forge:dusts/zinc'], 'gtceu:andesite_alloy_dust', LV, 60);
    addMixer(['2x #forge:dusts/soul_sand', '#forge:dusts/iron', '#forge:dusts/copper'], '4x thermal_extra:soul_infused_dust', HV, 600);
    addMixer(['2x #forge:dusts/shulker', '#forge:dusts/lead', '#forge:dusts/nickel'], '4x thermal_extra:shellite_dust', EV, 600);
    addMixer(['2x #forge:dusts/tin', '#forge:dusts/blaze', '#forge:dusts/obsidian'], '4x thermal_extra:twinite_dust', EV, 600);
    addMixer(['2x #forge:dusts/ancient', '#forge:dusts/cinnabar', '#forge:dusts/enderium'], '4x thermal_extra:dragonsteel_dust', LuV, 600);
    addMixer(['2x #forge:dusts/ancient', '#forge:dusts/netherite', '#forge:dusts/echo_shard'], '4x thermal_extra:abyssal_dust', ZPM, 600);

    addMixer(['2x #forge:dusts/bismuth', '3x #forge:dusts/tellurium'],'5x gtceu:bismuth_telluride_dust',ZPM,600);
    addMixer(['2x #forge:dusts/antimony', '#forge:dusts/tellurium'],'3x gtceu:antimony_telluride_dust',ZPM,600);
    addMixer(['2x #forge:dusts/bismuth_oxide', '3x #forge:dusts/germanium_dioxide'],'5x gtceu:bismuth_germanate_dust',IV,600);    
    addMixer(['#forge:dusts/bismuth_oxide','2x #forge:dusts/strontium_carbonate','#forge:dusts/quicklime','2x #forge:dusts/copper_oxide'], '6x gtceu:bismuth_strontium_calcium_copper_oxide_dust', IV, 600);

    addMixer(['#forge:dusts/arcane_crystal', 'minecraft:redstone', 'minecraft:bone_meal', 'minecraft:gunpowder', '#forge:dusts/phantom_membrane', 'minecraft:blaze_powder'], '6x forbidden_arcanus:mundabitur_dust', LV, 200)
    addMixer(['6x forbidden_arcanus:mundabitur_dust', '4x #forge:dusts/carbon', '#forge:dusts/gold', '2x #forge:dusts/arcane_crystal'], '13x gtceu:deorum_dust', LV, 200)
    addMixer(['2x #forge:dusts/sculk', '5x #forge:dusts/enderium', '2x #forge:dusts/nether_star', '3x #forge:dusts/redstone'], '12x fluxnetworks:flux_dust', HV, 400)


    addMixer(['4x #forge:dusts/titanium_carbonitride', '2x #forge:dusts/nickel', '1x #forge:dusts/molybdenum'],'7x gtceu:cermet_blend_dust',EV, 600)
    addMixer(['3x #forge:dusts/neodymium', '1x #forge:dusts/praseodymium'], 'gtceu:neodymium_praseodymium_dust', LuV, 600);

    //zirconium_lattice    
    addMixer(
        ['4x #forge:dusts/zirconium', '#forge:dusts/niobium', '#forge:dusts/iridium'],
        '6x gtceu:zirconium_lattice_dust',
        EV,
        600
    );

    //hepatizon
    addMixer(
        [
            '2x #forge:dusts/copper',
            '#forge:dusts/cobalt',
            '#forge:dusts/nether_quartz'
        ],
        '2x gtceu:hepatizon_dust',
        HV,
        50
    )    

    //manyullyn
    addMixer(
        [
            '3x #forge:dusts/cobalt',
            '#forge:dusts/debris'
        ],
        '4x gtceu:manyullyn_dust',
        HV,
        50
    )

    //amethyst bronze
    addMixer(
        [
            '1x #forge:dusts/copper',
            '1x #forge:dusts/amethyst',
        ],
        '2x gtceu:amethyst_bronze_dust',
        HV,
        50
    )

    //rhenium plated nickel
    addMixer(
        [
            '3x #forge:dusts/rhenium',
            '2x #forge:dusts/nickel',
        ],
        '5x gtceu:rhenium_nickel_alloy_dust',
        LuV,
        500
    )

    

    //vibrant alloy
    addMixer(
        [
            '#forge:dusts/energetic_alloy',
            '#forge:dusts/ender_pearl'
        ],
        '2x gtceu:vibrant_alloy_dust',
        EV,
        100
    );

    //conductive alloy
    addMixer(
        [
            '#forge:dusts/iron',
            '#forge:dusts/redstone'
        ],
        '2x gtceu:conductive_alloy_dust',
        MV,
        100
    );

    //pulsating alloy
    addMixer(
        [
            '#forge:dusts/iron',
            '#forge:dusts/ender_pearl'
        ],
        '2x gtceu:pulsating_alloy_dust',
        EV,
        100
    );

    //energetic alloy
    addMixer(
        [
            '#forge:dusts/gold',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone'
        ],
        '3x gtceu:energetic_alloy_dust',
        HV,
        100
    );

    //soularium alloy
    addMixer(
        [
            '#forge:dusts/gold',
            '#forge:dusts/soul_sand'
        ],
        '2x gtceu:soularium_dust',
        HV,
        100
    );

    //copper alloy
    addMixer(
        [
            '#forge:dusts/copper',
            '#forge:dusts/silicon'
        ],
        '2x gtceu:copper_alloy_dust',
        LV,
        100
    );

    //dark steel
    addMixer(
        [
            '#forge:dusts/steel',
            '#forge:dusts/carbon',
            '#forge:dusts/obsidian'
        ],
        '3x gtceu:dark_steel_dust',
        HV,
        100
    );

    //end steel
    addMixer(
        [
            '#forge:dusts/dark_steel',
            '#forge:dusts/endstone',
            '#forge:dusts/obsidian'
        ],
        '3x gtceu:end_steel_dust',
        EV,
        100
    );

    //signalum
    addMixer(
        [
            '#forge:dusts/silver',
            '3x #forge:dusts/copper',
            '4x #forge:dusts/redstone'
        ],
        '8x alltheores:signalum_dust',
        MV,
        100
    );

    //lumium
    addMixer(
        [
            '#forge:dusts/silver',
            '3x #forge:dusts/tin',
            '2x #forge:dusts/glowstone'
        ],
        '6x alltheores:lumium_dust',
        HV,
        100
    );

    addMixer(['#forge:dusts/diamond', '3x #forge:dusts/lead', '2x #forge:dusts/ender_pearl'], '6x alltheores:enderium_dust', EV, 100);

    //eternium
    addMixer(
        [
            '2x #forge:dusts/eternal',
            '4x #forge:dusts/sculk',
            '2x #forge:dusts/ferrognetic',
            '3x #forge:dusts/netherite',
            '5x #forge:dusts/neutronium'
        ],
        '16x gtceu:eternium_dust',
        UHV,
        500
    )


    addMixer(
        [
            'botania:rune_wrath',
            'occultism:demonic_meat',
            'forbidden_arcanus:golden_dragon_scale',
            'gtceu:quantum_star'
        ],
        '4x evilcraft:vengeance_essence',
        EV,
        250
    )
    const theumDusts = [            
        {name: 'gtceu:blazing_pyrotheum_dust', components: ['#forge:dusts/blaze','#forge:dusts/redstone', '#forge:dusts/carbon', '#forge:dusts/sulfur']},
        {name: 'gtceu:gelid_cryotheum_dust', components: ['thermal:blizz_powder','#forge:dusts/redstone', '#forge:dusts/niter', '#forge:dusts/blue_ice']},
        {name: 'gtceu:zephyrean_aerotheum_dust', components: ['thermal:blitz_powder', '#forge:dusts/redstone', '#forge:dusts/apatite', '#forge:dusts/silicon']},
        {name: 'gtceu:tectonic_petrotheum_dust', components: ['thermal:basalz_powder', '#forge:dusts/redstone', '#forge:dusts/obsidian', '#forge:dusts/clay']}
    ];

    theumDusts.forEach(dust => {
        addMixer(
            dust.components,
            `4x ${dust.name}`,
            IV,
            400
        );
    });

    allthemods.recipes.gtceu.mixer('gregification:thermal_coolant')
        .inputFluids('#forge:water_stage_4 1000')
        .itemInputs('#forge:dusts/gelid_cryotheum')
        .outputFluids('gtceu:thermal_coolant 1000')
        .duration(400)
        .EUt(IV);

    //dielectric paste
    allthemods.recipes.gtceu.mixer('gregification:dielectric_paste')
        .itemInputs(
            '4x #forge:dusts/carbon',            // Conductive base
            '4x #forge:dusts/clay',              // Ceramic base
            '2x #forge:dusts/obsidian'           // Dielectric reinforcement
        )
        .inputFluids('gtceu:rubber 144')    // EV Binder
        .itemOutputs('24x powah:dielectric_paste')
        .duration(200)
        .EUt(HV);

    //cadmium telluride
    allthemods.recipes.gtceu.mixer('gregification:cadmium_telluride_dust')
        .itemInputs(['#forge:dusts/cadmium', '#forge:dusts/tellurium'])
        .itemOutputs('2x gtceu:cadmium_telluride_dust')
        .duration(200)
        .EUt(LuV);

    //cadmium selenide
    allthemods.recipes.gtceu.mixer('gregification:cadmium_selenide_dust')
        .itemInputs(['#forge:dusts/cadmium', '#forge:dusts/selenium'])
        .itemOutputs('2x gtceu:cadmium_selenide_dust')
        .duration(200)
        .EUt(IV);

    //cadmium copper
    allthemods.recipes.gtceu.mixer('gregification:cadmium_copper_dust')
        .itemInputs(['#forge:dusts/cadmium', '9x #forge:dusts/copper'])
        .itemOutputs('10x gtceu:cadmium_copper_dust')
        .duration(200)
        .EUt(LV);

    //samarium cobalt
    allthemods.recipes.gtceu.mixer('gregification:samarium_cobalt_dust')
        .itemInputs(['#forge:dusts/samarium', '5x #forge:dusts/cobalt'])
        .itemOutputs('6x gtceu:samarium_cobalt_dust')
        .duration(200)
        .EUt(EV);

    //netherite
    allthemods.recipes.gtceu.mixer('gregification:netherite_dust')
        .itemInputs(['4x #forge:dusts/debris', '4x #forge:dusts/gold'])
        .itemOutputs('alltheores:netherite_dust')
        .duration(100)
        .EUt(HV);

    //netherite from scrap
    allthemods.recipes.gtceu.mixer('gregification:netherite_dust_from_scrap')
        .itemInputs(['4x minecraft:netherite_scrap', '4x #forge:dusts/gold'])
        .itemOutputs('alltheores:netherite_dust')
        .duration(100)
        .EUt(HV);

    //semi stable clathrate
    allthemods.recipes.gtceu.mixer('gregification:semi_stable_clathrate')
        .itemInputs(['#forge:dusts/vibrant_crystal', '#forge:dusts/pulsating_crystal'])
        .itemOutputs('gtceu:semi_stable_clathrate_dust')
        .duration(800)
        .EUt(HV);

    //stabilized clathrate
    allthemods.recipes.gtceu.mixer('gregification:stabilized_clathrate')
        .itemInputs(['#forge:dusts/semi_stable_clathrate', '#forge:dusts/gadolinium', '#forge:dusts/ender_pearl'])
        .itemOutputs('gtceu:stabilized_clathrate_dust')
        .inputFluids('#forge:tetrahydrofuran 1000')
        .duration(800)
        .EUt(MV);

    //witherite
    allthemods.recipes.gtceu.mixer('gregification:witherite')
        .itemInputs(['#forge:dusts/barium', '#forge:dusts/carbon', '3x #forge:dusts/netherite'])
        .itemOutputs('8x gtceu:witherite_dust')
        .inputFluids('#forge:oxygen 3000')
        .duration(600)
        .EUt(IV);   

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
