// @ts-nocheck
// priority: -1000
ServerEvents.recipes(allthemods => {
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


    function nextTier(base) {
        let VA_JS = Array.from(GTValues.VA);
        let next = VA_JS[VA_JS.indexOf(base) + 1];
        return next !== undefined ? next : base;
    }

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

    addEBF('#forge:dusts/bismuth_strontium_calcium_copper_oxide', '#forge:terephthalic_acid 1000', 'gtceu:hot_bismuth_strontium_calcium_copper_oxide_ingot', null, COIL_TEMPS.RTM, 2400, IV);
    addEBF(['#forge:dusts/neodymium_praseodymium', '14x #forge:dusts/iron', '1x #forge:dusts/boron'], 'industrialforegoing:ether_gas 1000', 'gtceu:hot_neodymium_praseodymium_iron_boron_ingot', null, COIL_TEMPS.NAQUADAH, 2400, LuV);
    addEBF('1x #forge:dusts/manganese', '#forge:bohrium 144', 'gtceu:hot_bohrium_ingot', null, COIL_TEMPS.DRACONIUM_AWAKENED, 2400, UV);
    addEBF('1x #forge:dusts/flerovium', '#forge:hydrogen 1000', 'gtceu:flerovium_ingot', null, COIL_TEMPS.DRACONIUM, 2400, UV);
    addEBF('1x #forge:dusts/zirconium', '#forge:rutherfordium 144', 'gtceu:hot_rutherfordium_ingot', null, COIL_TEMPS.DRACONIUM_AWAKENED, 2400, UV);
    addEBF('1x #forge:dusts/niobium', '#forge:dubnium 144', 'gtceu:hot_dubnium_ingot', null, COIL_TEMPS.DRACONIUM_AWAKENED, 2400, UV);
    addEBF('1x #forge:dusts/tungsten', '#forge:seaborgium 144', 'gtceu:hot_seaborgium_ingot', null, COIL_TEMPS.DRACONIUM_AWAKENED, 2400, UV);

    const freezing = [
        
        { name: 'allthemodium',                         mod: 'allthemodium',        duration: 500, eut: IV,  coolant: '#forge:thermal_coolant 1000' },
        { name: 'vibranium',                            mod: 'allthemodium',        duration: 500, eut: IV,  coolant: '#forge:thermal_coolant 1000' },
        { name: 'unobtainium',                          mod: 'allthemodium',        duration: 500, eut: IV,  coolant: '#forge:thermal_coolant 1000' },
        { name: 'draconium',                            mod: 'draconicevolution',   duration: 500, eut: IV,  coolant: '#forge:thermal_coolant 1000' },
        { name: 'bismuth_strontium_calcium_copper_oxide',                           duration: 500, eut: IV,  coolant: '#forge:thermal_coolant 1000' },
        { name: 'neodymium_praseodymium_iron_boron',                                duration: 500, eut: LuV, coolant: '#forge:thermal_coolant 1000' },
        { name: 'seaborgium', duration: 500, eut: ZPM, coolant: '#forge:super_coolant 1000' },
        { name: 'bohrium', duration: 500, eut: ZPM, coolant: '#forge:super_coolant 1000' },
        { name: 'rutherfordium', duration: 500, eut: ZPM, coolant: '#forge:super_coolant 1000' },
        { name: 'dubnium', duration: 500, eut: ZPM, coolant: '#forge:super_coolant 1000' },
        
        
    ];

    freezing.forEach(({ name, mod = 'gtceu', duration, eut, coolant }) => {
        const r = allthemods.recipes.gtceu.vacuum_freezer(`gregification:freezing/${name}_ingot`)
            .itemInputs(`#forge:hot_ingots/${name}`)
            .itemOutputs(`${mod}:${name}_ingot`)
            .duration(duration)
            .EUt(eut);
        if (coolant) r.inputFluids(coolant);
    });

    /*
    allthemods.recipes.gtceu.vacuum_freezer(`gregification:freezing/neodymium_praseodymium_iron_boron_ingot`)
        .itemInputs('gtceu:hot_neodymium_praseodymium_iron_boron_ingot')
        .itemOutputs('gtceu:neodymium_praseodymium_iron_boron_ingot')
        .inputFluids('#forge:thermal_coolant 1000')
        .duration(600)
        .EUt(LuV);



    const stage4cooling = ['gtceu:hot_allthemodium_ingot', 'gtceu:hot_vibranium_ingot', 'gtceu:hot_unobtainium_ingot']
    stage4cooling.forEach(item => {
        allthemods.recipes.gtceu.vacuum_freezer(`gregification:freezing/${item.replace(/[^a-z0-9]/gi, '_')}`)
            .itemInputs(item)
            .itemOutputs(item.replace('hot_', '').replace('gtceu:', 'allthemodium:'))
            .inputFluids('#forge:thermal_coolant 1000')
            .duration(500)
            .EUt(IV);

    allthemods.recipes.gtceu.vacuum_freezer(`gregification:freezing/hot_bismuth_strontium_calcium_copper_oxide_ingot`)
        .itemInputs('#forge:hot_ingots/bismuth_strontium_calcium_copper_oxide')
        .itemOutputs('gtceu:bismuth_strontium_calcium_copper_oxide_ingot')
        .inputFluids('#forge:thermal_coolant 1000')
        .duration(500)
        .EUt(IV);

    allthemods.recipes.gtceu.vacuum_freezer(`gregification:freezing/draconium`)
        .itemInputs('#forge:hot_ingots/draconium')
        .itemOutputs('draconicevolution:draconium_ingot')
        .inputFluids('#forge:thermal_coolant 1000')
        .duration(500)
        .EUt(IV);
    });*/

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:smelting/allthemodium_ingot')
        .notConsumable('forbidden_arcanus:artisan_relic')
        .itemInputs('#forge:dusts/allthemodium')
        .itemOutputs('gtceu:hot_allthemodium_ingot')
        .inputFluids('#forge:necrotic_acid 1000')
        .duration(2400)
        .blastFurnaceTemp(4500)
        .EUt(IV);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:smelting/vibranium_ingot')
        .notConsumable('forbidden_arcanus:artisan_relic')
        .itemInputs('#forge:dusts/vibranium', '#forge:dusts/stabilized_clathrate')
        .itemOutputs('gtceu:hot_vibranium_ingot')
        .inputFluids('#forge:necrotic_acid 1000')
        .duration(2400)
        .blastFurnaceTemp(5400)
        .EUt(LuV);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:smelting/unobtainium_ingot')
        .notConsumable('forbidden_arcanus:artisan_relic')
        .itemInputs('#forge:dusts/unobtainium', '#forge:dusts/zirconium_lattice')
        .itemOutputs('gtceu:hot_unobtainium_ingot')
        .inputFluids('#forge:necrotic_acid 1000')
        .duration(2400)
        .blastFurnaceTemp(7200)
        .EUt(ZPM);

    const thermalExtra = [
        { name: 'soul_infused', temp: 2700, EUt: HV, duration: 800 },
        { name: 'shellite', temp: 3600, EUt: EV, duration: 1200 },
        { name: 'twinite', temp: 4500, EUt: IV, duration: 1600 },
        { name: 'dragonsteel', temp: 5400, EUt: LuV, duration: 2000 },
        { name: 'abyssal', temp: 7200, EUt: ZPM, duration: 2400 }];


    thermalExtra.forEach((material, index) => {
        addEBF(
            [`#forge:dusts/${material.name}`],
            'industrialforegoing:ether_gas 1000',
            `gtceu:hot_${material.name}_ingot`,
            null,
            material.temp,
            material.duration,
            material.EUt
        );
        allthemods.recipes.gtceu.vacuum_freezer(`gregification:freezing/${material.name}_ingot`)
            .itemInputs(`#forge:hot_ingots/${material.name}`)
            .itemOutputs(`thermal_extra:${material.name}_ingot`)
            .inputFluids('#forge:thermal_coolant 1000')
            .duration(1200)
            .EUt(HV);
    });



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
        ['4x #forge:dusts/cerium', '64x #forge:dusts/silicon'],
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

    addEBF(['#forge:dusts/semi_stable_clathrate', 'evilcraft:vengeance_essence'],
        '#forge:water_stage_2 2000',
        'evilcraft:garmonbozia',
        null,
        5400,
        2000,
        EV, 3
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