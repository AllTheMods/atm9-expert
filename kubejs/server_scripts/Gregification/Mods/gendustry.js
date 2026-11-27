// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//search:forestry

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    allthemods.shaped('gendustry:mutatron', ['RHP', 'WSR', 'RUP'], {
        R: 'gendustry:receptacle',
        H: 'gendustry:genetics_processor',
        P: '#forge:plates/titanium_palladium_gold',
        W: 'gendustry:power_module',
        S: 'forestry:hardened_machine',
        U: 'gtceu:iv_electric_pump'
    }).id('gregification:craft_mutatron');

    allthemods.shaped('gendustry:advanced_mutatron', ['GQG', 'HMH', 'PWP'], {
        G: '#forge:gears/titanium_palladium_gold',
        Q: '#forge:plates/sunnarium',
        H: 'gendustry:genetics_processor',
        M: 'gendustry:mutatron',
        P: '#forge:plates/titanium_palladium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_advanced_mutatron');

    allthemods.shaped('gendustry:industrial_apiary', ['LRL', 'LSL', 'GIG'], {
        L: '#forge:glass',
        R: 'gendustry:receptacle',
        S: 'forestry:hardened_machine',
        G: '#forge:gears/titanium_palladium_gold',
        I: 'gtceu:iv_electric_piston'
    }).id('gregification:craft_industrial_apiary');

    allthemods.shaped('gendustry:imprinter', ['GHG', 'RSR', 'PWP'], {
        G: '#forge:gears/titanium_palladium_gold',
        H: 'gendustry:genetics_processor',
        R: 'gendustry:receptacle',
        S: 'forestry:hardened_machine',
        P: '#forge:plates/titanium_palladium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_imprinter');

    allthemods.shaped('gendustry:replicator', ['GHG', 'WSW', 'PHP'], {
        G: '#forge:gears/titanium_palladium_gold',
        H: 'gendustry:genetics_processor',
        W: 'gendustry:power_module',
        S: 'forestry:hardened_machine',
        P: '#forge:plates/titanium_palladium_gold'
    }).id('gregification:craft_replicator');

    allthemods.shaped('gendustry:sampler', ['GHG', 'RSD', 'PWP'], {
        G: '#forge:gears/titanium_palladium_gold',
        H: 'gendustry:genetics_processor',
        R: 'gendustry:receptacle',
        S: 'forestry:hardened_machine',
        D: '#forge:rods/vitallium',
        P: '#forge:plates/titanium_palladium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_sampler');

    allthemods.shaped('gendustry:protein_liquefier', ['GVG', 'ISI', 'PWP'], {
        G: '#forge:gears/titanium_palladium_gold',
        V: 'gtceu:iv_conveyor_module',
        I: 'gtceu:iv_electric_piston',
        S: 'forestry:hardened_machine',
        P: '#forge:plates/titanium_palladium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_protein_liquefier');

    allthemods.shaped('gendustry:mutagen_producer', ['PVP', 'WSW', 'GUG'], {
        P: '#forge:plates/titanium_palladium_gold',
        V: 'gtceu:iv_conveyor_module',
        W: 'gendustry:power_module',
        S: 'forestry:hardened_machine',
        G: '#forge:gears/titanium_palladium_gold',
        U: 'gtceu:iv_electric_pump'
    }).id('gregification:craft_mutagen_producer');

    allthemods.shaped('gendustry:genetic_transposer', ['GPG', 'HSH', 'PWP'], {
        G: '#forge:gears/titanium_palladium_gold',
        P: '#forge:plates/titanium_palladium_gold',
        H: 'gendustry:genetics_processor',
        S: 'forestry:hardened_machine',
        W: 'gendustry:power_module'
    }).id('gregification:craft_genetic_transposer');

    allthemods.shaped('gendustry:dna_extractor', ['GVG', 'HSH', 'PWP'], {
        G: '#forge:gears/titanium_palladium_gold',
        V: 'gtceu:iv_conveyor_module',
        H: 'gendustry:genetics_processor',
        S: 'forestry:hardened_machine',
        P: '#forge:plates/titanium_palladium_gold',
        W: 'gendustry:power_module'
    }).id('gregification:craft_dna_extractor');

    const powerModuleDuration = 200;
    const powerModuleEut = EV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/power_module')
        .itemInputs(['2x #forge:small_gears/beryllium_copper', '2x gtceu:ev_electric_piston', '4x #gtceu:wires/single/aluminium', '#gtceu:circuits/ev'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:power_module')
        .duration(powerModuleDuration)
        .EUt(powerModuleEut);

    const receptacleDuration = 200;
    const receptacleEut = EV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/receptacle')
        .itemInputs(['3x #forge:plates/titanium_palladium_gold', '2x #forge:glass_panes', '2x #forge:fine_wires/gold', '#gtceu:circuits/ev'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:receptacle')
        .duration(receptacleDuration)
        .EUt(receptacleEut);

    const geneticsProcessorDuration = 200;
    const geneticsProcessorEut = EV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/genetics_processor')
        .itemInputs(['gtceu:ev_sensor', 'gtceu:ev_emitter', 'minecraft:ender_pearl', '#gtceu:circuits/ev'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:genetics_processor')
        .duration(geneticsProcessorDuration)
        .EUt(geneticsProcessorEut);

    const labwareDuration = 200;
    const labwareEut = EV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/labware')
        .itemInputs(['16x #forge:dusts/glass', '8x #forge:dusts/boron'])
        .inputFluids('#forge:polyethylene 1152')
        .itemOutputs('16x gendustry:labware')
        .duration(labwareDuration)
        .EUt(labwareEut);

    const blankGeneSampleDuration = 100;
    const blankGeneSampleEut = EV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/blank_gene_sample')
        .itemInputs(['gtceu:glass_vial', '#forge:dusts/silicon', '#forge:foils/polyethylene'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:blank_gene_sample')
        .duration(blankGeneSampleDuration)
        .EUt(blankGeneSampleEut);

    const pollenKitDuration = 100;
    const pollenKitEut = EV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/pollen_kit')
        .itemInputs(['gendustry:labware', '#forge:foils/polyethylene', '#forge:fine_wires/steel'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:pollen_kit')
        .duration(pollenKitDuration)
        .EUt(pollenKitEut);

    const environmentalProcessorDuration = 300;
    const environmentalProcessorEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/environmental_processor')
        .itemInputs(['#gtceu:circuits/iv', '2x gtceu:iv_sensor', '2x #forge:plates/titanium_palladium_gold', '2x #forge:small_gears/beryllium_copper', '#forge:plates/gadolinium'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:environmental_processor')
        .duration(environmentalProcessorDuration)
        .EUt(environmentalProcessorEut);

    const climateControlModuleDuration = 300;
    const climateControlModuleEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/climate_control_module')
        .itemInputs(['gendustry:environmental_processor', 'gtceu:iv_sensor', '#gtceu:circuits/iv', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:climate_control_module')
        .duration(climateControlModuleDuration)
        .EUt(climateControlModuleEut);

    const upgradeFrameDuration = 300;
    const upgradeFrameEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/upgrade_frame')
        .itemInputs(['#forge:frames/vitallium', '4x #forge:plates/titanium_palladium_gold', '8x #forge:foils/polyethylene'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('2x gendustry:upgrade_frame')
        .duration(upgradeFrameDuration)
        .EUt(upgradeFrameEut);

    const blankGeneticTemplateDuration = 400;
    const blankGeneticTemplateEut = EV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/blank_genetic_template')
        .itemInputs(['gtceu:synaptic_lattice', 'gendustry:blank_gene_sample', '2x #forge:plates/vitallium', '4x #forge:foils/polyethylene'])
        .inputFluids('#forge:bismuth_gold 576')
        .itemOutputs('16x gendustry:blank_genetic_template')
        .duration(blankGeneticTemplateDuration)
        .EUt(blankGeneticTemplateEut);

    const eliteUpgradeFrameDuration = 600;
    const eliteUpgradeFrameEut = LuV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/elite_upgrade_frame')
        .itemInputs(['gendustry:upgrade_frame', '2x gendustry:power_module', '4x #forge:plates/titanium_palladium_gold', '#gtceu:circuits/luv', '2x #forge:small_gears/beryllium_copper', '8x #forge:foils/polytetrafluoroethylene'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('2x gendustry:elite_upgrade_frame')
        .duration(eliteUpgradeFrameDuration)
        .EUt(eliteUpgradeFrameEut);

    const coolerUpgradeDuration = 400;
    const coolerUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/cooler_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:climate_control_module', '3x #forge:dusts/blue_ice', '2x #forge:dusts/gelid_cryotheum', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('gendustry:cooler_upgrade')
        .duration(coolerUpgradeDuration)
        .EUt(coolerUpgradeEut);

    const heaterUpgradeDuration = 400;
    const heaterUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/heater_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:climate_control_module', '3x #forge:dusts/refractory_composite', '2x #forge:dusts/blazing_pyrotheum', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('gendustry:heater_upgrade')
        .duration(heaterUpgradeDuration)
        .EUt(heaterUpgradeEut);

    const humidifierUpgradeDuration = 400;
    const humidifierUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/humidifier_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:climate_control_module', '3x #forge:dusts/dry_ice', '2x #forge:dusts/zephyrean_aerotheum', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('gendustry:humidifier_upgrade')
        .duration(humidifierUpgradeDuration)
        .EUt(humidifierUpgradeEut);

    const dryerUpgradeDuration = 400;
    const dryerUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/dryer_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:climate_control_module', '3x #forge:dusts/phosphorus_pentoxide', '2x #forge:dusts/tectonic_petrotheum', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('gendustry:dryer_upgrade')
        .duration(dryerUpgradeDuration)
        .EUt(dryerUpgradeEut);

    const netherUpgradeDuration = 300;
    const netherUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/nether_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:environmental_processor', 'minecraft:crimson_nylium', 'minecraft:warped_nylium', 'minecraft:soul_sand', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('gendustry:nether_upgrade')
        .duration(netherUpgradeDuration)
        .EUt(netherUpgradeEut);

    const lightingUpgradeDuration = 300;
    const lightingUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/lighting_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:environmental_processor', '2x #forge:dusts/glowstone', '3x #forge:dusts/redstone', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('gendustry:lighting_upgrade')
        .duration(lightingUpgradeDuration)
        .EUt(lightingUpgradeEut);

    const weatherproofUpgradeDuration = 300;
    const weatherproofUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/weatherproof_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:environmental_processor', '2x forestry:beeswax', '3x #forge:dusts/redstone', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('gendustry:weatherproof_upgrade')
        .duration(weatherproofUpgradeDuration)
        .EUt(weatherproofUpgradeEut);

    const skyUpgradeDuration = 300;
    const skyUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/sky_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:environmental_processor', '2x #forge:plates/lumium', '#forge:dusts/strontium_aluminate', 'gtceu:iv_emitter', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 288')
        .itemOutputs('gendustry:sky_upgrade')
        .duration(skyUpgradeDuration)
        .EUt(skyUpgradeEut);

    const productivityUpgradeDuration = 300;
    const productivityUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/productivity_upgrade')
        .itemInputs(['gendustry:upgrade_frame', '2x forestry:royal_jelly', '3x #forge:dusts/redstone', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:productivity_upgrade')
        .duration(productivityUpgradeDuration)
        .EUt(productivityUpgradeEut);

    const automationUpgradeDuration = 300;
    const automationUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/automation_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gtceu:iv_conveyor_module', 'gtceu:iv_robot_arm', '#gtceu:circuits/iv', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:automation_upgrade')
        .duration(automationUpgradeDuration)
        .EUt(automationUpgradeEut);

    const immutableUpgradeDuration = 300;
    const immutableUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/immutable_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:genetics_processor', '2x #forge:plates/vitallium', '#gtceu:circuits/iv', '#forge:foils/polytetrafluoroethylene', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:immutable_upgrade')
        .duration(immutableUpgradeDuration)
        .EUt(immutableUpgradeEut);

    const stabilizerUpgradeDuration = 300;
    const stabilizerUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/stabilizer_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gendustry:genetics_processor', 'gtceu:iv_sensor', '#forge:plates/vitallium', '#forge:foils/polytetrafluoroethylene', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:stabilizer_upgrade')
        .duration(stabilizerUpgradeDuration)
        .EUt(stabilizerUpgradeEut);

    const lifespanUpgradeDuration = 300;
    const lifespanUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/lifespan_upgrade')
        .itemInputs(['gendustry:upgrade_frame', '2x minecraft:wither_rose', '2x #forge:plates/vitallium', 'gtceu:iv_sensor', '2x #forge:foils/polyethylene', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:lifespan_upgrade')
        .duration(lifespanUpgradeDuration)
        .EUt(lifespanUpgradeEut);

    const pollinationUpgradeDuration = 300;
    const pollinationUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/pollination_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gtceu:iv_electric_pump', '2x #forge:fine_wires/gold', '#forge:foils/polyethylene', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:pollination_upgrade')
        .duration(pollinationUpgradeDuration)
        .EUt(pollinationUpgradeEut);

    const territoryUpgradeDuration = 300;
    const territoryUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/territory_upgrade')
        .itemInputs(['gendustry:upgrade_frame', 'gtceu:iv_field_generator', '2x #forge:plates/titanium_palladium_gold', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:territory_upgrade')
        .duration(territoryUpgradeDuration)
        .EUt(territoryUpgradeEut);

    const sieveUpgradeDuration = 300;
    const sieveUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/sieve_upgrade')
        .itemInputs(['gendustry:upgrade_frame', '3x forestry:silk_wisp', '3x #forge:foils/polytetrafluoroethylene', '2x #forge:plates/titanium_palladium_gold', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:sieve_upgrade')
        .duration(sieveUpgradeDuration)
        .EUt(sieveUpgradeEut);

    const scrubberUpgradeDuration = 300;
    const scrubberUpgradeEut = IV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/scrubber_upgrade')
        .itemInputs(['gendustry:upgrade_frame', '2x forestry:silk_wisp', 'gtceu:iv_electric_pump', '4x #forge:dusts/carbon', '2x #forge:foils/polytetrafluoroethylene', '2x #forge:small_gears/beryllium_copper'])
        .inputFluids('#forge:bismuth_gold 144')
        .itemOutputs('gendustry:scrubber_upgrade')
        .duration(scrubberUpgradeDuration)
        .EUt(scrubberUpgradeEut);

    const activitySimulatorEliteDuration = 800;
    const activitySimulatorEliteEut = LuV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/activity_simulator_elite_upgrade')
        .itemInputs(['gendustry:elite_upgrade_frame', '8x #forge:plates/vitallium', '2x #gtceu:circuits/luv', 'gendustry:sky_upgrade', 'gendustry:weatherproof_upgrade', 'gendustry:lighting_upgrade', 'gendustry:environmental_processor', 'gtceu:luv_field_generator', 'ars_nouveau:manipulation_essence'])
        .inputFluids('#forge:bismuth_gold 1152')
        .itemOutputs('gendustry:activity_simulator_elite_upgrade')
        .duration(activitySimulatorEliteDuration)
        .EUt(activitySimulatorEliteEut);

    const fertilityEliteDuration = 800;
    const fertilityEliteEut = LuV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/fertility_elite_upgrade')
        .itemInputs(['gendustry:elite_upgrade_frame', '8x #forge:plates/vitallium', '2x #gtceu:circuits/luv', 'gendustry:pollination_upgrade', '2x gendustry:genetics_processor', 'gendustry:bucket_protein', 'gendustry:bucket_liquid_dna', 'gtceu:luv_electric_pump', 'botania:life_essence'])
        .inputFluids('#forge:bismuth_gold 1152')
        .itemOutputs('gendustry:fertility_elite_upgrade')
        .duration(fertilityEliteDuration)
        .EUt(fertilityEliteEut);

    const mutationEliteDuration = 800;
    const mutationEliteEut = LuV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/mutation_elite_upgrade')
        .itemInputs(['gendustry:elite_upgrade_frame', '8x #forge:plates/vitallium', '2x #gtceu:circuits/luv', '2x gendustry:genetics_processor', 'gendustry:bucket_mutagen', 'gendustry:bucket_liquid_dna', 'gtceu:luv_emitter', '4x mobees:mutation_catalyst', 'bloodmagic:corrosivecrystal'])
        .inputFluids('#forge:bismuth_gold 1152')
        .itemOutputs('gendustry:mutation_elite_upgrade')
        .duration(mutationEliteDuration)
        .EUt(mutationEliteEut);

    const productivityEliteDuration = 800;
    const productivityEliteEut = LuV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/productivity_elite_upgrade')
        .itemInputs(['gendustry:elite_upgrade_frame', '8x #forge:plates/vitallium', '2x #gtceu:circuits/luv', 'gendustry:productivity_upgrade', 'gendustry:power_module', 'gtceu:luv_electric_motor', 'botania:terrasteel_ingot', '16x forestry:royal_jelly', '16x forestry:pollen_cluster_normal'])
        .inputFluids('#forge:bismuth_gold 1152')
        .itemOutputs('gendustry:productivity_elite_upgrade')
        .duration(productivityEliteDuration)
        .EUt(productivityEliteEut);

    const territoryEliteDuration = 800;
    const territoryEliteEut = LuV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/territory_elite_upgrade')
        .itemInputs(['gendustry:elite_upgrade_frame', '8x #forge:plates/vitallium', '2x #gtceu:circuits/luv', 'gendustry:territory_upgrade', 'gendustry:receptacle', 'gendustry:environmental_processor', 'gtceu:luv_field_generator', '4x #forge:plates/titanium_palladium_gold', 'ars_nouveau:abjuration_essence'])
        .inputFluids('#forge:bismuth_gold 1152')
        .itemOutputs('gendustry:territory_elite_upgrade')
        .duration(territoryEliteDuration)
        .EUt(territoryEliteEut);

    const youthEliteDuration = 800;
    const youthEliteEut = LuV;
    allthemods.recipes.gtceu.assembler('gregification:gendustry/youth_elite_upgrade')
        .itemInputs(['gendustry:elite_upgrade_frame', '8x #forge:plates/vitallium', '2x #gtceu:circuits/luv', 'gendustry:lifespan_upgrade', 'gendustry:genetics_processor', 'gendustry:power_module', 'gtceu:luv_sensor', 'botania:life_essence', 'ars_nouveau:water_essence'])
        .inputFluids('#forge:bismuth_gold 1152')
        .itemOutputs('gendustry:youth_elite_upgrade')
        .duration(youthEliteDuration)
        .EUt(youthEliteEut);
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
