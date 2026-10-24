//@ts-check

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const addChemical = (itemsIn, fluidsIn, itemsOut, fluidsOut, eu, duration, rID, program) => {

        let recipe = allthemods.recipes.gtceu.chemical_reactor(`gregification:chemical_reactor/${rID}`)

        if (itemsOut) { recipe.itemOutputs(itemsOut) }
        if (fluidsOut) { recipe.outputFluids(fluidsOut) }
        if (itemsIn) { recipe.itemInputs(itemsIn) }
        if (fluidsIn) { recipe.inputFluids(fluidsIn) }
        recipe.duration(duration)
        recipe.EUt(eu);
        if (program) {
            recipe.circuit(program)
        }

    };

    //copper oxide
    addChemical(
        '#forge:dusts/copper',
        '#forge:oxygen 1000',
        '5x gtceu:copper_oxide_dust',
        null,
        HV,
        600,
        'copper_oxide'
    );

    //bismuth oxide
    addChemical(
        '2x #forge:dusts/bismuth',
        '#forge:oxygen 3000',
        '5x gtceu:bismuth_oxide_dust',
        null,
        HV,
        600,
        'bismuth_oxide'
    );

    //nylon
    addChemical(
        ['#forge:dusts/adipic_acid', '#forge:dusts/hexamethylenediamine'],
        null,
        '2x gtceu:nylon_dust',
        null,
        HV,
        600,
        'nylon'
    );

    //neoprene
    addChemical(
        null,
        '#forge:chloroprene 4000',
        'gtceu:neoprene_dust',
        null,
        HV,
        600,
        'neoprene'
    );

    //pyromellitic dianhydride
    addChemical(
        '10x #forge:dusts/carbon',
        ['#forge:hydrogen 2000', '#forge:oxygen 6000'],
        '18x gtceu:pyromellitic_dianhydride_dust',
        null,
        HV,
        600,
        'pyromellitic_dianhydride'
    );

    //polyimide
    addChemical(
        '#forge:dusts/pyromellitic_dianhydride',
        '#forge:oxydianiline 1000',
        '2x gtceu:polyimide_dust',
        null,
        HV,
        600,
        'polyimide'
    );

    //chloroprene
    addChemical(
        null,
        ['#forge:butadiene 1000', '#forge:chlorine 1000'],
        null,
        'gtceu:chloroprene 2000',
        HV,
        600,
        'chloroprene'
    );

    //adiponitrile
    addChemical(
        '#forge:dusts/adipic_acid',
        '#forge:ammonia 2000',
        null,
        'gtceu:adiponitrile 3000',
        HV,
        600,
        'adiponitrile'
    );

    //oxydianiline
    addChemical(
        null,
        ['#forge:aniline 2000', '#forge:oxygen 1000'],
        null,
        'gtceu:oxydianiline 3000',
        HV,
        600,
        'oxydianiline'
    );

    //germanium oxide
    addChemical(
        '#forge:dusts/germanium',
        '#forge:oxygen 2000',
        '3x gtceu:germanium_dioxide_dust',
        null,
        IV,
        600,
        'germanium_dioxide'
    );

    //titanium dioxide
    addChemical(
        '#forge:dusts/titanium',
        '#forge:oxygen 2000',
        'gtceu:titanium_dioxide_dust',
        null,
        HV,
        600,
        'titanium_dioxide'
    );

    //cyclohexanone
    addChemical(
        null,
        ['#forge:cyclohexane 1000', '#forge:oxygen 1000'],
        null,
        'gtceu:cyclohexanone 2000',
        HV,
        600,
        'cyclohexanone'
    );

    //adipic acid
    addChemical(
        null,
        ['#forge:cyclohexanone  1000', '#forge:nitric_acid 2000'],
        '3x gtceu:adipic_acid_dust',
        null,
        HV,
        600,
        'adipic_acid'
    );

    //hexamethylenediamine
    addChemical(
        null,
        ['#forge:adiponitrile 1000', '#forge:hydrogen 4000'],
        '5x gtceu:hexamethylenediamine_dust',
        null,
        HV,
        600,
        'hexamethylenediamine'
    );

    //titanium carbonitride
    addChemical(
        ['#forge:dusts/titanium_dioxide', '3x #forge:dusts/carbon'],
        '#forge:nitrogen 1000',
        'gtceu:titanium_carbonitride_dust',
        null,
        HV,
        600,
        'titanium_carbonitride'
    );

    addChemical(
        'gtceu:atm_star_dust',
        [
            'gtceu:fluoroantimonic_acid 1000',
            'gtceu:diethylenetriamine_pentaacetonitrile 1000',
            'gtceu:liquid_chaos 1000'
        ],
        null,
        'gtceu:chaos_plastic 1000',
        IV,
        6000,
        'chaos_plastic'
    );

    addChemical(
        [
            '2x #forge:dusts/carbon',
            '#forge:dusts/germanium'
        ],
        [
            'gtceu:chlorine 4000'
        ],
        null,
        [
            'gtceu:carbon_monoxide 2000',
            'gtceu:germanium_tetrachloride 1000'
        ],
        IV,
        200,
        'germanium_tetrachloride'
    );

    addChemical(
        [
            '3x gtceu:cerium_chloride_dust',
            '2x #forge:dusts/sodium'
        ],
        null,
        [
            'gtceu:cerium_dust',
            '4x gtceu:salt_dust'
        ],
        null,
        IV,
        200,
        'cerium_reprocessing'
    );

    addChemical('#forge:seeds', '#forge:seed_oil 1000', null, 'gtceu:refined_seed_oil 1000', EV, 600, 'seed_oil')
    addChemical('gtceu:crystallized_seed', 'gtceu:refined_seed_oil 1000', null, 'gtceu:crystallized_oil 1000', EV, 600, 'refined_seed_oil')
    addChemical('gtceu:empowered_seed', 'gtceu:crystallized_oil 1000', null, 'gtceu:empowered_oil 1000', EV, 600, 'empowered_seed_oil')


    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/pr_yag_dope')
        .itemInputs('#forge:dusts/yttrium_aluminium_garnet', '#forge:dusts/praseodymium_oxide')
        .itemOutputs('gtceu:praseodymium_doped_yttrium_aluminium_garnet_dust', 'gtceu:yttrium_oxide_dust')
        .EUt(LuV).duration(300);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/nd_yag_dope')
        .itemInputs('#forge:dusts/yttrium_aluminium_garnet', '#forge:dusts/neodymium_oxide')
        .itemOutputs('gtceu:neodymium_doped_yttrium_aluminium_garnet_dust', 'gtceu:yttrium_oxide_dust')
        .EUt(ZPM).duration(300);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/aluminium_oxide_synthesis')
        .itemInputs('2x #forge:dusts/aluminium')
        .inputFluids('#forge:oxygen 3000')
        .itemOutputs('5x gtceu:aluminium_oxide_dust')
        .EUt(IV).duration(200);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/neodymium_oxide_synthesis')
        .itemInputs('2x #forge:dusts/neodymium')
        .inputFluids('#forge:oxygen 3000')
        .itemOutputs('5x gtceu:neodymium_oxide_dust')
        .EUt(IV).duration(200);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/praseodymium_oxide_synthesis')
        .itemInputs('2x #forge:dusts/praseodymium')
        .inputFluids('#forge:oxygen 3000')
        .itemOutputs('5x gtceu:praseodymium_oxide_dust')
        .EUt(IV).duration(200);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/ancient_dust')
        .itemInputs('#forge:dusts/ancient')
        .inputFluids('#forge:necrotic_acid 500')
        .itemOutputs('thermal_extra:ancient_dust')
        .duration(100)
        .EUt(HV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/saturated_life_fertilizer')
        .itemInputs('#forge:dusts/picolinic_acid')
        .inputFluids('#forge:liquid_fertilizer 500', '#forge:sanguine_concentrate 500', '#forge:copper_ii_sulfate 432')
        .outputFluids('gtceu:saturated_life_fertilizer 1000')
        .duration(100)
        .EUt(HV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/recycled_organic_matter')
        .inputFluids('#forge:rotten_flesh 1000', '#forge:meat 1000', '#forge:water_stage_2 1000')
        .outputFluids('gtceu:recycled_organic_matter 1000')
        .duration(600)
        .EUt(EV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/necrotic_acid')
        .itemInputs('4x #forge:dusts/witherite', '#forge:dusts/nether_star', '#forge:dusts/necrotic')
        .inputFluids('#forge:aqua_regia 4000')
        .outputFluids('gtceu:necrotic_acid 1000')
        .duration(500)
        .EUt(IV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/super_coolant')
        .itemInputs('ad_astra:ice_shard', '#forge:dusts/blue_ice')
        .inputFluids('#forge:blue_ice 1000')
        .outputFluids('gtceu:super_coolant 1000')
        .duration(500)
        .EUt(HV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/copper_ii_sulfate')
        .itemInputs('#forge:dusts/copper', '#forge:dusts/sulfur')
        .inputFluids('#forge:oxygen 4000')
        .itemOutputs('gtceu:copper_ii_sulfate_dust')
        .duration(500)
        .EUt(HV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/thorium_oxide')
        .itemInputs('#forge:dusts/thorium')
        .inputFluids('#forge:oxygen 2000')
        .itemOutputs('gtceu:thorium_oxide_dust')
        .duration(500)
        .EUt(LuV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/strontium_aluminate')
        .itemInputs(['#forge:dusts/strontium_carbonate', '2x #forge:dusts/aluminium_hydroxide'])
        .itemOutputs('gtceu:strontium_aluminate_dust')
        .outputFluids(['gtceu:carbon_dioxide 1000', 'minecraft:water 3000'])
        .duration(200)
        .EUt(LuV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/strontium_ferrite')
        .itemInputs(['4x #forge:dusts/carbon', '3x #forge:dusts/nickel_zinc_ferrite', '#forge:dusts/strontium_carbonate'])
        .itemOutputs(['gtceu:strontium_ferrite_dust', '3x gtceu:zincite_dust', '3x gtceu:nickel_dust'])
        .outputFluids('gtceu:carbon_monoxide 5000')
        .duration(200)
        .EUt(LuV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:chemical_reactor/artificial_cerebrospinal_fluid')
        .itemInputs('2x #forge:dusts/sodium', '#forge:dusts/potassium', '#forge:dusts/calcium', '#forge:dusts/magnesium')
        .inputFluids('#forge:distilled_water 6000', '#forge:glycerol 2000')
        .outputFluids('gtceu:artificial_cerebrospinal_fluid 1000')
        .duration(200)
        .EUt(LuV); // LuV

    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/tetrachloroethylene')
        .itemInputs('2x #forge:dusts/carbon')
        .inputFluids('#forge:chlorine 4000')
        .outputFluids('gtceu:tetrachloroethylene 1000')
        .duration(250)
        .circuit(1)
        .EUt(HV);

    const picLadder = [
        { id: 'uhv', prev: 'gtceu:uhpic_wafer', dopant: 'neodymium_praseodymium', polymer: 'polybenzimidazole', eut: UV },
        { id: 'uev', prev: 'gtceu:uhv_pic_wafer', dopant: 'neodymium_promethium_dopant', polymer: 'polyimide', eut: UHV },
        { id: 'uiv', prev: 'gtceu:uev_pic_wafer', dopant: 'neodymium_terbium_dopant', polymer: 'organic_polymer', eut: UEV },
        { id: 'uxv', prev: 'gtceu:uiv_pic_wafer', dopant: 'neodymium_dysprosium_dopant', polymer: 'chaos_plastic', eut: UIV },
        { id: 'opv', prev: 'gtceu:uxv_pic_wafer', dopant: 'neodymium_terbium_dysprosium_dopant', polymer: 'naquadria_awakened', eut: UXV },
        { id: 'max', prev: 'gtceu:opv_pic_wafer', dopant: 'neodymium_rare_earth_dopant', polymer: 'fifth_element', eut: OpV }
    ];
    picLadder.forEach((p, i) => {
        allthemods.recipes.gtceu.large_chemical_reactor(`gregification:chemical_reactor/${p.id}_pic_wafer`)
            .itemInputs(p.prev, `8x #forge:dusts/${p.dopant}`)
            .inputFluids(`#forge:${p.polymer} ${576 * Math.pow(2, i)}`)
            .itemOutputs(`gtceu:${p.id}_pic_wafer`)
            .cleanroom(CleanroomType.CLEANROOM)
            .duration(1200)
            .EUt(p.eut);
    });



    allthemods.recipes.gtceu.chemical_reactor('gregification:chemical_reactor/infinity_dust')
        .itemInputs('8x #forge:dusts/stabilized_clathrate', '#forge:dusts/adamantium')
        .inputFluids('#forge:necrotic_acid 4000')
        .itemOutputs('gtceu:infinity_dust')
        .duration(1200)
        .EUt(UV);
});