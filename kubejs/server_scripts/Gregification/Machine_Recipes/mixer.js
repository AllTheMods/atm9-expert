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

    addMixer(['2x gtceu:bismuth_oxide_dust', '3x gtceu:germanium_oxide_dust'],'5x gtceu:bismuth_germanate_dust',IV,600);    
    addMixer(['#forge:dusts/bismuth_oxide','2x #forge:dusts/strontium_carbonate','#forge:dusts/quicklime','2x #forge:dusts/copper_oxide'], '6x gtceu:bismuth_strontium_calcium_copper_oxide_dust', LuV, 600);

    addMixer(['#forge:dusts/arcane_crystal', 'minecraft:redstone', 'minecraft:bone_meal', 'minecraft:gunpowder', '#forge:dusts/phantom_membrane', 'minecraft:blaze_powder'], '6x forbidden_arcanus:mundabitur_dust', LV, 200)
    addMixer(['6x forbidden_arcanus:mundabitur_dust', '4x #forge:dusts/carbon', '#forge:dusts/gold', '2x #forge:dusts/arcane_crystal'], '13x gtceu:deorum_dust', LV, 200)
    addMixer(['2x #forge:dusts/sculk', '5x #forge:dusts/enderium', '2x #forge:dusts/nether_star', '3x #forge:dusts/redstone'], '12x fluxnetworks:flux_dust', HV, 400)


    addMixer(
        ['4x #forge:dusts/titanium_carbonitride', '2x #forge:dusts/nickel', '1x #forge:dusts/molybdenum'],'7x gtceu:cermet_blend_dust',EV, 600)

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

    //doerum alloy dust
    addMixer(
        [
            '3x #forge:dusts/naquadria',
            '2x #forge:dusts/deorum',
            '2x #forge:dusts/trinium',
            '3x #forge:dusts/steadfast'
        ],
        '10x gtceu:deorum_alloy_dust',
        UXV,
        500
    )


    //alltheneutronium
    addMixer(
        [
            '2x #forge:dusts/naquamodium',
            '2x #forge:dusts/neutronium',
            '#forge:dusts/alloy_infused',
            '3x #forge:dusts/corrosive'
        ],
        '8x gtceu:alltheneutronium_dust',
        UHV,
        500
    )

    //vibtronium
    addMixer(
        [
            '2x #forge:dusts/naquabranium',
            '2x #forge:dusts/alltheneutronium',
            '#forge:dusts/alloy_reinforced',
            '3x #forge:dusts/destructive'
        ],
        '8x gtceu:vibtronium_dust',
        UEV,
        500
    )

    //unobtronium
    addMixer(
        [
            '2x #forge:dusts/naquatainium',
            '2x #forge:dusts/vibtronium',
            '#forge:dusts/alloy_atomic',
            '3x #forge:dusts/vengeful'
        ],
        '8x gtceu:unobtronium_dust',
        UIV,
        500
    )

    //naquamodium
    addMixer(
        [
            '5x #forge:dusts/naquadah',
            '3x #forge:dusts/allthemodium'
        ],
        '8x gtceu:naquamodium_dust',
        LuV,
        250
    );

    //naquabranium
    addMixer(
        [
            '5x #forge:dusts/naquadah',
            '3x #forge:dusts/vibranium'
        ],
        '8x gtceu:naquabranium_dust',
        LuV,
        250
    );

    //naquatainium
    addMixer(
        [
            '5x #forge:dusts/naquadria',
            '3x #forge:dusts/unobtainium'
        ],
        '8x gtceu:naquatainium_dust',
        LuV,
        250
    );

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
        HV,
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
        EV,
        100
    );

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
        .EUt(ZPM);

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
        .itemOutputs('gtceu:witherite_dust')
        .inputFluids('#forge:oxygen 3000')
        .duration(600)
        .EUt(IV);

    


    //demonic alloy
    addMixer(
        [
            //here - add a component
            //'#forge:singularities/vibrant_alloy',
            '3x #forge:dusts/demon',
            '3x #forge:dusts/tenebrium',
            '3x #forge:dusts/caesium',
            '3x #forge:dusts/tritanium',
            '3x #forge:dusts/gaia'
        ],
        '15x gtceu:demonic_alloy_dust',
        OpV,
        500
    )

    //singularity    
    addMixer(
        [
            '8x #forge:dusts/bedrockium',
            '5x #forge:dusts/stabilized_clathrate',
            '4x #forge:dusts/thorium_berkelium_alloy',
            '#forge:dusts/tachyon',
            '7x #forge:dusts/californium'
            
        ],
        '25x gtceu:singularity_alloy_dust',
        UXV,
        500
    )

    //anti matter alloy dust
    addMixer(
        [
            '3x #forge:dusts/antimatter',
            '3x #forge:dusts/duranium',
            '2x #forge:dusts/darmstadtium',
            '4x #forge:dusts/iridium',
            '5x #forge:dusts/etrium'
        ],
        '17x gtceu:antimatter_alloy_dust',
        UIV,
        500
    )

    //absolute
    addMixer(
        [
            '3x #forge:dusts/strontium',
            '2x #forge:dusts/unobtronium',
            '4x #forge:dusts/tellurium',
            '4x #forge:dusts/radium',
            '8x #forge:dusts/tenebrium'
        ],
        '21x gtceu:absolute_alloy_dust',
        OpV,
        500
    )

    //cosmic alloy
    addMixer(
        [
            '3x #forge:dusts/cosmic_matter',
            '4x #forge:dusts/alfsteel',
            '3x #forge:dusts/americium',
            '2x #forge:dusts/naquadria',
            '2x #forge:dusts/nether_star'
        ],
        '14x gtceu:cosmic_alloy_dust',
        UEV,
        500
    )

    

});