const $SizedIngredient = Java.loadClass('com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient');
const TIME = {
    short: 600,
    medium: 800,
    long: 1000,
    very_long: 1200
};


const $ResearchManager = Java.loadClass('com.gregtechceu.gtceu.utils.ResearchManager');

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

    let t = GTRecipeTypes.get('prototype_assembler');
    if (t) {
        t.setHasResearchSlot(true);
        t.onRecipeBuild((b, p) => $ResearchManager.createDefaultResearchRecipe(b, p));
    } else {
        console.error('prototype_assembler type still null in ServerEvents.recipes!');
    }

    const gtRecipe = (recipeType, inputs, fluidIn, outputs, fluidOut, eu, duration, temp, customID, program) => {

        let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
        let generatedId = customID || `gregification:${firstOutput.toString().replace(/^\d+[x ]\s*/, '').split(':').pop().replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase()}`;

        //let generatedId = customID || `gregification:${outputs[0].replace(/^\d+x\s+/, '').replace(':', '_')}`;

        let recipe = allthemods.recipes.gtceu[recipeType](generatedId)
            .itemInputs(inputs)
            .itemOutputs(outputs)
            .duration(duration)
            .addData('ebf_temp', temp)
            .EUt(eu);

        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }
        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
        if (program) {
            recipe.circuit(program);
        }

        return recipe;
    };


    const elements = ['fire', 'water', 'air', 'earth'];
    elements.forEach(element => {
        gtRecipe('crystal_growth_chamber',
            [
                `4x #elementalcraft:shards/${element}`,
                `elementalcraft:${element}crystal`,
            ],
            '#forge:water_stage_2 250',
            `elementalcraft:crude_${element}_gem`,
            null,
            2048,
            300,
            3600,
            `gregification:crude_${element}_gem`
        );

        gtRecipe('crystal_growth_chamber',
            [
                `4x #elementalcraft:shards/${element}`,
                `elementalcraft:crude_${element}_gem`,
            ],
            '#forge:water_stage_3 250',
            `elementalcraft:fine_${element}_gem`,
            null,
            2048,
            300,
            4500,
            `gregification:fine_${element}_gem`
        );

        gtRecipe('crystal_growth_chamber',
            [
                `4x #elementalcraft:shards/${element}`,
                `elementalcraft:fine_${element}_gem`,
            ],
            '#forge:water_stage_4 250',
            `elementalcraft:pristine_${element}_gem`,
            null,
            2048,
            300,
            5400,
            `gregification:pristine_${element}_gem`
        );
    });

    allthemods.recipes.gtceu.crystal_growth_chamber('gregification:chemical_reactor/yag_dope')
        .itemInputs('3x #forge:dusts/yttrium_oxide', '5x #forge:dusts/aluminium_oxide')        
        .itemOutputs('gtceu:yttrium_aluminium_garnet_boule')
        .inputFluids('#forge:oxygen 54000','#forge:aluminium 2592', '#forge:yttrium 2592')
        .addData('ebf_temp', COIL_TEMPS.NAQUADAH)
        .EUt(LuV).duration(1200);


    allthemods.recipes.gtceu.crystal_growth_chamber('gregification:crystal_growth/nd_yag_boule')
        .itemInputs('#forge:dusts/neodymium_doped_yttrium_aluminium_garnet')
        .inputFluids('#forge:neodymium_doped_yttrium_aluminium_garnet 1296')
        .itemOutputs('gtceu:neodymium_doped_yttrium_aluminium_garnet_boule')
        .addData('ebf_temp', COIL_TEMPS.TRINIUM)
        .EUt(ZPM).duration(1200)

    allthemods.recipes.gtceu.crystal_growth_chamber('gregification:crystal_growth/pr_yag_boule')
        .itemInputs('#forge:dusts/praseodymium_doped_yttrium_aluminium_garnet')
        .inputFluids('#forge:praseodymium_doped_yttrium_aluminium_garnet 1296')
        .itemOutputs('gtceu:praseodymium_doped_yttrium_aluminium_garnet_boule')
        .addData('ebf_temp', COIL_TEMPS.NAQUADAH)
        .EUt(LuV).duration(1200);


    allthemods.recipes.gtceu.environmental_accumulator('gregification:environmental_accumulator/sunnarium')
        .notConsumable('gtceu:solar_relic')
        .itemInputs('#forge:dusts/glowstone')
        .itemOutputs('gtceu:sunnarium_dust')
        .daytime()
        .circuit(1)
        .duration(3600)
        .EUt(ZPM);

    allthemods.recipes.gtceu.environmental_accumulator('gregification:environmental_accumulator/sunnarium_tachyon')
        .notConsumable('gtceu:solar_relic')
        .itemInputs('#forge:dusts/glowstone', 'gtceu:tachyon')
        .itemOutputs('gtceu:sunnarium_dust')
        .daytime()
        .circuit(2)
        .duration(360)
        .EUt(ZPM);

    allthemods.recipes.gtceu.environmental_accumulator('gregification:environmental_accumulator/lunarium')
        .notConsumable('forbidden_arcanus:crescent_moon')
        .itemInputs('#forge:dusts/moon_stone')
        .itemOutputs('gtceu:lunarium_dust')
        .daytime(true)
        .circuit(1)
        .duration(3600)
        .EUt(ZPM);

    allthemods.recipes.gtceu.environmental_accumulator('gregification:environmental_accumulator/lunarium_tachyon')
        .notConsumable('forbidden_arcanus:crescent_moon')
        .itemInputs('#forge:dusts/moon_stone', 'gtceu:tachyon')
        .itemOutputs('gtceu:lunarium_dust')
        .daytime(true)
        .circuit(2)
        .duration(360)
        .EUt(ZPM);



    const gtRecipeResearch = (recipeType, outputs, inputs, fluids, duration, eu, researchItem, CWUt, customID, rID) => {


        let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
        let generatedId = customID || `gregification:${firstOutput.toString().replace(/^\d+[x ]\s*/, '').split(':').pop().replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase()}`;
        let recipe = allthemods.recipes.gtceu[recipeType](generatedId)
            .itemOutputs(outputs)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (fluids) {
            recipe.inputFluids(fluids);
        }

        if (researchItem) {
            if (CWUt) {
                recipe.stationResearch(b =>
                    b.researchStack(researchItem)
                        .researchId(rID)
                        .EUt(eu / 4)
                        .CWUt(CWUt)
                );
            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }
    };



    allthemods.shaped(
        'gtceu:gene_sequencer',
        [
            'CPC',
            'PHV',
            'CPC'
        ],
        {
            C: '#gtceu:circuits/iv',
            H: 'gtceu:iv_machine_hull',
            P: 'gtceu:iv_electric_pump',
            V: 'gtceu:iv_conveyor_module'
        }
    )

    allthemods.shaped(
        'gtceu:prototype_assembler',
        [
            'PCP',
            'MHM',
            'PCP'
        ],
        {
            C: '#gtceu:circuits/iv',
            H: 'gtceu:iv_machine_hull',
            P: '#forge:plates/tungsten_steel',
            M: 'gtceu:iv_electric_motor'
        }
    )

    allthemods.shaped(
        'gtceu:psycho_fraculator',
        [
            'PAP',
            'CHC',
            'PVP'
        ],
        {
            C: '#gtceu:circuits/luv',
            H: 'gtceu:luv_machine_hull',
            P: '#forge:plates/iridium',
            V: 'gtceu:luv_electric_pump',
            A: 'gtceu:advanced_computer_casing'
        }
    )

    allthemods.shaped('gtceu:neuro_interface',
        [
            'PAP',
            'CHC',
            'PAP'
        ],
        {
            C: '#gtceu:circuits/luv',
            P: '#forge:plates/iridium',
            H: 'gtceu:luv_machine_hull',
            A: 'gtceu:advanced_computer_casing'
        }
    )



    //chaos shard crystal_growth_chamber recipe

    allthemods.recipes.gtceu.magnetic_containment_chamber('gregification:concentrated_dark_matter_synthesis')
        .itemInputs('#forge:dusts/caesium', '2x gtceu:plutonic_quark')
        .inputFluids('#forge:purest_water 1000')
        .outputFluids('gtceu:concentrated_dark_matter 10')
        .duration(10000)
        .EUt(UV);


    const drone = Item.of('pneumaticcraft:collector_drone').weakNBT();

    allthemods.recipes.gtceu.drone_station('gregification:tier_1_rocket_schematic_from_drone')
        .chancedInput(drone, 2500, -500)
        .chancedOutput('gtceu:tier_1_rocket_schematic', 2500, 1000)
        .inputFluids('#forge:kerosene 4000')
        .duration(10000)
        .EUt(EV)
        .circuit(1);

    allthemods.recipes.gtceu.drone_station('gregification:tier_2_rocket_schematic_from_drone')
        .chancedInput(drone, 2500, -500)
        .chancedOutput('gtceu:tier_2_rocket_schematic', 2500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:hafnium 1440'])
        .duration(10000)
        .EUt(IV)
        .circuit(2);

    allthemods.recipes.gtceu.drone_station('gregification:tier_3_rocket_schematic_from_drone')
        .chancedInput(drone, 2500, -500)
        .chancedOutput('gtceu:tier_3_rocket_schematic', 2500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:scandium 1440'])
        .duration(10000)
        .EUt(LuV)
        .circuit(3);

    allthemods.recipes.gtceu.drone_station('gregification:tier_4_rocket_schematic_from_drone')
        .chancedInput(drone, 2500, -500)
        .chancedOutput('gtceu:tier_4_rocket_schematic', 2500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:thallium 1440'])
        .duration(10000)
        .EUt(ZPM)
        .circuit(4);

    allthemods.recipes.gtceu.hydro_electromagnetic_separator('gregificatoion:hydro_electromagnetic_separator/chaos_shards')
        .itemInputs('#forge:dusts/chaotic')
        .inputFluids('gtceu:water_stage_6 100')
        .chancedOutput('draconicevolution:small_chaos_frag', 5000, 1000)
        .duration(400)
        .EUt(ZPM);


    allthemods.recipes.gtceu.drone_station('gregification:allthemodium_upgrade')
        .chancedInput(drone, 2500, -500)
        .itemInputs('2x #forge:storage_blocks/allthemodium')
        .chancedOutput('allthemodium:allthemodium_upgrade_smithing_template', 1500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:hafnium 1440'])
        .duration(10000)
        .EUt(EV)
        .circuit(11);

    allthemods.recipes.gtceu.drone_station('gregification:vibranium_upgrade')
        .chancedInput(drone, 2500, -500)
        .itemInputs('4x #forge:storage_blocks/vibranium')
        .chancedOutput('allthemodium:vibranium_upgrade_smithing_template', 1500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:scandium 1440'])
        .duration(10000)
        .EUt(EV)
        .circuit(12);

    allthemods.recipes.gtceu.drone_station('gregification:unobtainium_upgrade')
        .chancedInput(drone, 2500, -500)
        .itemInputs('8x #forge:storage_blocks/unobtainium')
        .chancedOutput('allthemodium:unobtainium_upgrade_smithing_template', 1500, 1000)
        .inputFluids(['#forge:kerosene 4000', '#forge:thallium 1440'])
        .duration(10000)
        .EUt(EV)
        .circuit(13);


    allthemods.recipes.gtceu.drone_station('gregification:forbidden_search')
        .chancedInput(drone, 2500, -500)
        .itemInputs('forbidden_arcanus:dark_nether_star')
        .chancedOutput('forbidden_arcanus:artisan_relic', 100, 100)
        .chancedOutput('forbidden_arcanus:crescent_moon', 100, 100)
        .chancedOutput('gtceu:solar_relic', 100, 100)
        .chancedOutput('forbidden_arcanus:crimson_stone', 1000, 1000)
        .chancedOutput('forbidden_arcanus:elementarium', 2000, 1000)
        .chancedOutput('forbidden_arcanus:divine_pact', 1000, 1000)
        .chancedOutput('forbidden_arcanus:maledictus_pact', 1000, 1000)
        .inputFluids('#forge:kerosene 10000')
        .duration(8000)
        .EUt(EV)
        .circuit(5);

    allthemods.shapeless('gtceu:blueprint_blank', ['minecraft:paper', '#forge:small_dusts/lapis']).id('gregification:blank_blueprint')


    const createModelBlueprints = (machineID, creature, BPitemID, outputs, inputs, fluids, duration, EUt, CWU, customID, skipBlueprints) => {
        const scanEU = IV;
        const scanDuration = 200;
        const fraculatorEU = IV;
        const fraculatorDuration = 5000;
        //const generatedId = customID || `gregification:${output[0].replace(/^\d+x\s+/, '').replace(':', '_')}`;
        const creativeBlueprint = `gtceu:blueprint_${BPitemID}`;

        let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
        let generatedId = customID || `gregification:${firstOutput.toString().replace(/^\d+[x ]\s*/, '').split(':').pop().replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase()}`;

        let cModel
        if (skipBlueprints != 1) {

            //self aware model            
            if (creature[0] == '~') { cModel = `twilightforest/${creature.slice(1)}`; }
            else if (creature[0] == '-') { cModel = `allthemodium/${creature.slice(1)}`; }
            else { cModel = creature; }

            const model = Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:${cModel}"}}`).strongNBT();

            //model predicate for scanner
            const modelPredicate = NBTPredicates.all(
                NBTPredicates.eqString('data_model.id', `hostilenetworks:${cModel}`),
                NBTPredicates.gte('data_model.data', 1254)
            );

            if (creature[0] == '~' || creature[0] == '-') { creature = creature.slice(1); }

            let createDisplayParts = creature.split('_');
            let createDisplay = '';
            for (let i = 0; i < createDisplayParts.length; i++) {
                createDisplay += createDisplayParts[i].charAt(0).toUpperCase() + createDisplayParts[i].slice(1);
                if (i < createDisplayParts.length - 1) createDisplay += ' ';
            }
            //datastick from scanning the certificate
            const modelCertificate = Item.of('gtceu:stem_cells', `{certificate:{id:"hostilenetworks:${creature}"}}`)
                .withName(Text.of(`${createDisplay} Neurons`).red())
                .withLore([
                    Text.of(`Self-Aware ${createDisplay} Neurons`).gold(),
                    Text.of('These neurons have been certified by the').white(),
                    Text.of('Hostile Networks Corporation.').white(),
                    Text.of('It is guaranteed to be self-aware').white(),
                ]).strongNBT();

            //datastick from scanner

            const bacteria = Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"PichiaPastoris"}').strongNBT()
            allthemods.recipes.gtceu.neuro_interface(`${generatedId}_neural_interface`)
                .itemInputs(bacteria)
                .inputItemNbtPredicate(model, modelPredicate)
                .inputFluids('#forge:artificial_cerebrospinal_fluid 1000')
                .itemOutputs(modelCertificate)
                .duration(scanDuration)
                .EUt(scanEU);


            //datastick + blank blueprint for item blueprint
            allthemods.recipes.gtceu.psycho_fraculator(`${generatedId}_fraculation`)
                .itemInputs('gtceu:blueprint_blank')
                .notConsumable(modelCertificate)
                .chancedOutput(creativeBlueprint, 500, 500)
                .inputFluids('#forge:mind_control_serum 100')
                .duration(fraculatorDuration)
                .EUt(fraculatorEU);
        };

        //just creating the blueprint, skipping the rest of the process if skipBlueprints is not 0
        if (skipBlueprints != 2) {
            gtRecipeResearch(
                machineID,
                outputs,
                inputs,
                fluids,
                duration,
                EUt,
                creativeBlueprint,
                CWU,
                customID,
                BPitemID
            );
        };
    };

    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:mekasuit_helmet'],
        [
            'allthemodium:unobtainium_helmet',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '5x mekanism:hdpe_sheet',
            '5x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '5x #forge:dense_plates/gaia',
            '5x #forge:plates/kevlar'
        ],
        '#forge:europium 720',
        6000,
        ZPM,
        16, null, 0
    );

    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:mekasuit_bodyarmor'],
        [
            'allthemodium:unobtainium_chestplate',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '8x mekanism:hdpe_sheet',
            '8x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '8x #forge:dense_plates/gaia',
            '8x #forge:plates/kevlar'
        ],
        '#forge:europium 1152',
        6000,
        ZPM,
        16, null, 1
    );

    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:mekasuit_pants'],
        [
            'allthemodium:unobtainium_leggings',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '7x mekanism:hdpe_sheet',
            '7x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '7x #forge:dense_plates/gaia',
            '7x #forge:plates/kevlar'
        ],
        '#forge:europium 1008',
        6000,
        ZPM,
        16, null, 1
    );

    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:mekasuit_boots'],
        [
            'allthemodium:unobtainium_boots',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '4x mekanism:hdpe_sheet',
            '4x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:plates/scandium',
            '4x #forge:dense_plates/gaia',
            '4x #forge:plates/kevlar'
        ],
        '#forge:europium 576',
        6000,
        ZPM,
        16, null, 1
    );

    createModelBlueprints('prototype_assembler', 'warden', 'mekasuit', ['mekanism:meka_tool'],
        [
            'allthemodium:alloy_paxel',
            'mekanism:atomic_disassembler',
            '#forge:singularities/unobtainium',
            '4x mekanism:supercharged_coil',
            '16x #gtceu:circuits/zpm'
        ],
        '#forge:antimatter 576',
        6000,
        ZPM,
        16, null, 1
    );

    createModelBlueprints('prototype_assembler', 'zombie', 'mob_swab', ['mob_grinding_utils:mob_swab'],
        [
            '#forge:rods/long/fireite',
            '2x gtceu:eldritch_cloth'
        ],
        null,
        600,
        ZPM, null, 0
    );

    createModelBlueprints('prototype_assembler', 'drowned', 'creative_container', ['elementalcraft:creative_container'],
        [
            'elementalcraft:container',
            'gtceu:element_fire',
            'gtceu:element_air',
            'gtceu:element_water',
            'gtceu:element_earth',
            'allthetweaks:atm_star'
        ],
        null,
        6000,
        ZPM,
        32, null, 0
    );

    createModelBlueprints('prototype_assembler', 'enderman', 'waystone', ['waystones:waystone'],
        [
            'gtceu:dimensional_casing',
            'waystones:warp_stone',
            'gtceu:luv_emitter',
            'gtceu:luv_sensor',
            '4x #forge:plates/terrasteel',
            'bloodmagic:etherealslate'

        ],
        '#forge:argon 6000',
        600,
        LuV, null, null, 0
    );

    createModelBlueprints('prototype_assembler', 'enderman', 'waystone', ['waystones:warp_stone'],
        [
            '4x #forge:exquisite_gems/amethyst',
            '16x #gtceu:wires/hex/enderium',
            '4x #forge:plates/emerald',
            '#forge:frames/alfsteel',
            'occultism:witherite_dust'

        ],
        '#forge:ender 6000',
        600,
        LuV, null, null, 1
    );

    let elementHolder;
    elements.forEach(element => {
        elementHolder = Item.of('elementalcraft:creative_container', `{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"${element}"}}}`).strongNBT();
        gtRecipeResearch(
            'assembly_line',
            [elementHolder],
            [
                'elementalcraft:creative_container',
                `64x elementalcraft:pristine_${element}_gem`
            ],
            null,
            6000,
            ZPM,
            'elementalcraft:creative_container',
            32,
            `gregification:creative_container_${element}`, 'creative_element_container'
        );
    })

    createModelBlueprints('prototype_assembler', 'wither', 'laser_drill', ['industrialforegoing:laser_drill'],
        [
            'industrialforegoing:machine_frame_supreme',
            '2x #gtceu:circuits/luv',
            '4x #forge:gears/ferrognetic',
            '4x #forge:small_gears/vibranium',
            '6x #forge:double_plates/cadmium_selenide',
            '16x #gtceu:wires/quadruple/cadmium_copper',
            'laserio:laser_connector_advanced',
            'gtceu:betavoltaic_microcell'
        ],
        ['#forge:polybenzimidazole 1000', '#forge:bromine 1000'],
        6000,
        ZPM, 8, null, 0
    );

    createModelBlueprints('prototype_assembler', 'wither', 'laser_drill', ['industrialforegoing:ore_laser_base'],
        [
            'industrialforegoing:machine_frame_supreme',
            'gtceu:titanium_crate',
            '2x #gtceu:circuits/luv',
            '#forge:frames/draconium_awakened',
            '4x gtceu:luv_electric_motor',
            'gtceu:luv_electric_piston',
            '4x #forge:gears/ferrognetic',
            '4x #forge:small_gears/vibranium',
            '6x #forge:double_plates/cadmium_selenide'
        ],
        ['#forge:polybenzimidazole 1000', 'industrialforegoing:ether_gas 1000'],
        6000,
        LuV, 8, null, 1
    );

    createModelBlueprints('prototype_assembler', 'wither', 'laser_drill', ['industrialforegoing:fluid_laser_base'],
        [
            'industrialforegoing:machine_frame_supreme',
            'gtceu:titanium_drum',
            '2x #gtceu:circuits/luv',
            '#forge:frames/draconium_awakened',
            '4x gtceu:luv_electric_motor',
            'gtceu:luv_electric_pump',
            '4x #forge:gears/ferrognetic',
            '4x #forge:small_gears/vibranium',
            '6x #forge:double_plates/cadmium_selenide'
        ],
        ['#forge:polybenzimidazole 1000'],
        6000,
        LuV, 8, null, 1
    );

    createModelBlueprints('prototype_assembler', 'elder_guardian', 'quantum_computer', ['advanced_ae:quantum_core'],
        [
            'advanced_ae:quantum_unit',
            'advanced_ae:quantum_accelerator',
            'advanced_ae:quantum_storage_256',
            '8x ae2:singularity',
            '8x advanced_ae:shattered_singularity',
            '64x gtceu:germanium_diode',
            '#forge:frames/strontium_aluminate'
        ],
        ['advanced_ae:quantum_infusion_source 10000', '#forge:polybenzimidazole 1440'],
        6000,
        LuV, 8, null, 0
    );


    const jUnobtainium = Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:unobtainium", Throttle: 1.0 }).strongNBT()
    const jCreative = Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:creative", Throttle: 1.0 }).strongNBT()

    const jCell = Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT()
    const jThruster = Item.of('ironjetpacks:thruster', { Id: "ironjetpacks:creative" }).strongNBT()
    const jCapacitor = Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT()


    allthemods.recipes.gtceu.assembler(`gregification:creative_jetpacks/creative_cell`)
        .itemInputs('powah:battery_nitro', '6x #forge:plates/cadmium_telluride', '16x #forge:fine_wires/alloy_atomic', '4x #gtceu:circuits/zpm')
        .itemOutputs(jCell)
        .inputFluids('#forge:polybenzimidazole 1000')
        .duration(400)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler(`gregification:creative_jetpacks/creative_thruster`)
        .itemInputs('ad_astra:steel_engine', '4x mekanism:ultimate_induction_cell', '4x #gtceu:circuits/zpm', '4x #forge:rods/strontium_aluminate')
        .itemOutputs(jThruster)
        .inputFluids('#forge:polybenzimidazole 1000')
        .duration(400)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler(`gregification:creative_jetpacks/creative_capacitor`)
        .itemInputs($SizedIngredient.create(jCell, 3), '#forge:singularities/lapotron', '4x #forge:plates/fireite', 'gtceu:empty_tier_ii_battery')
        .itemOutputs(jCapacitor)
        .inputFluids('#forge:polybenzimidazole 1000')
        .duration(400)
        .EUt(LuV);

    createModelBlueprints('prototype_assembler', 'ghast', 'flight_module', jCreative,
        [
            jUnobtainium,
            $SizedIngredient.create(jThruster, 2),
            jCapacitor,
            'allthetweaks:atm_star'
        ],
        null,
        6000,
        LuV, 16, 'creative_jetpack', 0
    );

    createModelBlueprints('prototype_assembler', 'blaze', 'cake', 'create:creative_blaze_cake',
        [
            'create:blaze_cake',
            'mysticalexpansion:divinium_coal_block',
            'allthetweaks:atm_star'
        ],
        '#forge:chocolate 1024000',
        6000,
        LuV, 16, 'creative_blaze_cake', 0
    );

    createModelBlueprints('prototype_assembler', '~death_tome', 'font', 'botania:creative_pool',
        [
            'botania:fabulous_pool',
            '64x botania:rune_pride',
            '64x botania:rune_wrath',
            '64x botania:rune_envy',
            '64x botania:rune_gluttony',
            '64x botania:rune_lust',
            '64x botania:rune_sloth',
            '64x botania:rune_greed',
            'allthetweaks:atm_star'
        ],
        '#forge:mana_essence 1024000',
        6000,
        LuV, 16, null, 0
    );

    const fullTablet = Item.of('botania:mana_tablet', '{mana:500000}').strongNBT();
    const manaTablet = Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').strongNBT();
    createModelBlueprints('prototype_assembler', '~death_tome', 'font', manaTablet,
        [
            fullTablet,
            '64x botania:rune_pride',
            '64x botania:rune_wrath',
            '64x botania:rune_envy',
            '64x botania:rune_gluttony',
            '64x botania:rune_lust',
            '64x botania:rune_sloth',
            '64x botania:rune_greed',
            'allthetweaks:atm_star'
        ],
        '#forge:mana_essence 1024000',
        6000,
        LuV, 16, 'creative_mana_tablet', 1
    );


    createModelBlueprints('prototype_assembler', '~death_tome', 'font', 'appbot:creative_mana_cell',
        [
            'botania:creative_pool',
            '#forge:singularities/mana_essence',
            'ae2additions:super_cell_component_65m',
            'allthetweaks:atm_star'
        ],
        '#forge:mana_essence 1024000',
        6000,
        LuV, 16, null, 1
    );

    createModelBlueprints('prototype_assembler', '~death_tome', 'font', 'bloodmagic:activationcrystalcreative',
        [
            '#forge:singularities/hellforged',
            'bloodmagic:activationcrystalweak',
            '64x bloodmagic:etherealslate',
            '64x #forge:exquisite_gems/demon',
            '64x #forge:exquisite_gems/corrosive',
            '64x #forge:exquisite_gems/destructive',
            '64x #forge:exquisite_gems/steadfast',
            '64x #forge:exquisite_gems/vengeful',
            'allthetweaks:atm_star'
        ],
        '#forge:saturated_tau 1024000',
        6000,
        LuV, 16, null, 1
    );

    createModelBlueprints('prototype_assembler', 'iron_golem', 'crux', 'pneumaticcraft:creative_compressed_iron_block',
        [
            '2x #forge:singularities/compressed_iron',
            'allthetweaks:atm_star'
        ],
        '#forge:plastic 1024000',
        6000,
        LuV, 16, null, 0
    );
    createModelBlueprints('prototype_assembler', 'iron_golem', 'crux', 'pneumaticcraft:creative_compressor',
        [
            '4x pneumaticcraft:creative_compressed_iron_block',
            'allthetweaks:atm_star'
        ],
        '#forge:plastic 1024000',
        6000,
        LuV, 16, null, 1
    );

    const creativeSpellBook = Item.of('ars_nouveau:creative_spell_book', '{mode:0.0d,spells:"intangible,ignite,flare,strength,craft,cold_snap,rune,snare,slowfall,freeze,split,crush,smelt,summon_steed,accelerate,summon_vex,lightning,grow,dampen,touch,invisibility,extract,delay,light,duration_down,exchange,place_block,summon_wolves,shield,conjure_water,cut,harm,interact,blink,amplify,phantom_block,fell,extend_time,heal,leap,redstone_signal,pierce,harvest,fortune,break,pickup,launch,dispel,haste,ender_inventory,pull,explosion,fangs,aoe,gravity,self,aquatic,projectile,wither,gust"}')
    createModelBlueprints('prototype_assembler', '~death_tome', 'font', 'ars_nouveau:creative_source_jar',
        [
            '#forge:singularities/source',
            '64x #forge:exquisite_gems/source',
            'allthetweaks:atm_star'
        ],
        '#forge:source 1024000',
        6000,
        LuV, 16, null, 1
    );

    createModelBlueprints('prototype_assembler', '~death_tome', 'font', creativeSpellBook,
        [
            'ars_nouveau:creative_source_jar',
            '#forge:singularities/source',
            'ars_nouveau:archmage_spell_book',
            'allthetweaks:atm_star'
        ],
        '#forge:source 1024000',
        6000,
        LuV, 16, 'creative_spell_book', 1
    );

    createModelBlueprints('prototype_assembler', '~death_tome', 'font', 'arseng:creative_source_cell',
        [
            'ars_nouveau:creative_source_jar',
            '#forge:singularities/source',
            'ae2additions:super_cell_component_65m',
            'allthetweaks:atm_star'
        ],
        '#forge:source 1024000',
        6000,
        LuV, 16, null, 1
    );


    createModelBlueprints('prototype_assembler', 'witch', 'thermal', 'thermal:rf_coil_creative_augment',
        [
            '16x thermal_extra:abyssal_rf_coil_augment',
            '64x #forge:plates/unobtainium',
            'allthetweaks:atm_star'
        ],
        '#forge:lubricant 1024000',
        6000,
        LuV, 8, null, 0
    );

    createModelBlueprints('prototype_assembler', 'witch', 'thermal', 'thermal:machine_efficiency_creative_augment',
        [
            '16x thermal_extra:abyssal_machine_efficiency_augment',
            '64x #forge:plates/unobtainium',
            'allthetweaks:atm_star'
        ],
        '#forge:lubricant 1024000',
        6000,
        LuV, 8, null, 1
    );

    /*
    createModelBlueprints('prototype_assembler', 'witch', 'thermal', 'thermal:fluid_tank_creative_augment',
        [
            '16x thermal_extra:abyssal_fluid_tank_augment',
            '64x #forge:plates/unobtainium',
            'allthetweaks:atm_star'
        ],
        '#forge:lubricant 1024000',
        6000,
        LuV,8,null,1
    );*/

    createModelBlueprints('prototype_assembler', 'witch', 'thermal', 'thermal:machine_catalyst_creative_augment',
        [
            '16x thermal_extra:abyssal_machine_catalyst_augment',
            '64x #forge:plates/unobtainium',
            'allthetweaks:atm_star'
        ],
        '#forge:lubricant 1024000',
        6000,
        LuV, 8, null, 1
    );

    createModelBlueprints('prototype_assembler', 'spider', 'blood', 'evilcraft:creative_blood_drop',
        [
            '#forge:singularities/garmonbozia',
            'allthetweaks:atm_star'
        ],
        '#forge:sanguine_concentrate 1024000',
        6000,
        LuV, 8, null, 0
    );


    let cube = Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}').strongNBT();

    createModelBlueprints('prototype_assembler', '-piglich', 'energy_core', cube,
        [
            'allthetweaks:atm_star',
            Ingredient.of('mekanism:ultimate_energy_cube', 1),
            '4x #forge:singularities/lapotron',
            '64x #gtceu:circuits/uv',
            '16x #forge:plates/strontium_aluminate',
            '16x gtceu:selenium_rectifier',
            '64x gtceu:germanium_diode'
        ],
        '#forge:etrium 1024000',
        6000,
        LuV, 32, 'mekanism_cube', 0
    );

    createModelBlueprints('prototype_assembler', '-piglich', 'energy_core', 'createaddition:creative_energy',
        [
            'allthetweaks:atm_star',
            'createaddition:alternator',
            '4x #forge:singularities/lapotron',
            '64x #gtceu:circuits/uv',
            '16x #forge:plates/strontium_aluminate',
            '16x gtceu:selenium_rectifier',
            '64x gtceu:germanium_diode'
        ],
        '#forge:etrium 1024000',
        6000,
        LuV, 32, null, 1
    );

    createModelBlueprints('prototype_assembler', '-piglich', 'energy_core', 'ae2:creative_energy_cell',
        [
            'allthetweaks:atm_star',
            'ae2:energy_acceptor',
            '4x #forge:singularities/lapotron',
            '64x #gtceu:circuits/uv',
            '16x #forge:plates/strontium_aluminate',
            '16x gtceu:selenium_rectifier',
            '64x gtceu:germanium_diode'
        ],
        '#forge:etrium 1024000',
        6000,
        LuV, 32, null, 1
    );

    createModelBlueprints('prototype_assembler', '-piglich', 'energy_core', 'integrateddynamics:energy_battery_creative',
        [
            'allthetweaks:atm_star',
            'integrateddynamics:crystalized_menril_block',
            '4x #forge:singularities/lapotron',
            '64x #gtceu:circuits/uv',
            '16x #forge:plates/strontium_aluminate',
            '16x gtceu:selenium_rectifier',
            '64x gtceu:germanium_diode'
        ],
        '#forge:etrium 1024000',
        6000,
        LuV, 32, null, 1
    );

    createModelBlueprints('prototype_assembler', '-piglich', 'energy_core', 'powah:energy_cell_creative',
        [
            'allthetweaks:atm_star',
            'powah:energy_cell_nitro',
            '4x #forge:singularities/lapotron',
            '64x #gtceu:circuits/uv',
            '16x #forge:plates/strontium_aluminate',
            '16x gtceu:selenium_rectifier',
            '64x gtceu:germanium_diode'
        ],
        '#forge:etrium 1024000',
        6000,
        LuV, 32, null, 1
    );

    createModelBlueprints('prototype_assembler', 'ender_dragon', 'outworld', null,
        null,
        null,
        6000,
        LuV, 32, "chaotic_blueprint", 2 //just make a blueprint
    );


});