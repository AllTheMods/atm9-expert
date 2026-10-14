//@ts-check
ServerEvents.tags('block', event => {
    event.get('mekanism:cardboard_blacklist')
        .add('#forge:mod_id/waystones');
});

ServerEvents.tags('block_entity_type', event => {
    event.get('mekanism:cardboard_blacklist')
        .add('#forge:mod_id/waystones');
});

ServerEvents.recipes(allthemods => {

    /*allthemods.forEachRecipe({ type: 'productivebees:centrifuge' }, recipe => {        
        console.error(recipe.json);
        console.error(String(recipe.id));    
    });*/

    allthemods.remove({ output: /^ironjetpacks:.*/ })
 
    
    let removeSmelting = [];
    let smeltMaterials = ['soul_infused', 'shellite', 'twinite', 'dragonsteel', 'abyssal']
    smeltMaterials.forEach(function(mat) {
        removeSmelting.push(`thermal_extra:smelting/${mat}_ingot_from_dust_smelting`);
        removeSmelting.push(`thermal_extra:smelting/${mat}_ingot_from_dust_blasting`);
        removeSmelting.push(`enderio:smelting/thermal_extra/smelting/${mat}_ingot_from_dust_smelting`);
        removeSmelting.push(`thermal_extra:machine/smelter/${mat}_ingot_from_dust`);
    });
    const smeltingRemovals = removeSmelting.map(recipeId => ({ id: recipeId }));    
    allthemods.remove(smeltingRemovals);
    
    let beeRemoves = [];
    let removeColored = [];

    let beeMaterials = [
        'arsenic', 'gallium', 'hafnium', 'chromium', 'samarium', 'lanthanum', 'lutetium',
        'iodine', 'magnesium', 'manganese', 'mercury', 'niobium', 'protactinium',
        'nitrogen', 'scandium', 'tantalum', 'tellurium', 'thallium', 'titanium',
        'redstone', 'francium', 'astatine', 'gadolinium'
    ];
   

    let gemMaterials = [
        'diamond','emerald', 'lapis', 'coal', 'crystalline', 
        'amethyst', 'apatite', 'fluorine', 'green_sapphire', 'malachite', 
        'opal', 'ruby', 'sapphire', 'cinnabar'
    ];

    let otherMaterials = [
        'fossilised'
    ];
    
    beeMaterials.forEach(function(mat) {        
        beeRemoves.push('productivebees:centrifuge/chemlib/honeycomb_' + mat);
        beeRemoves.push('productivebees:centrifuge/chemlib/honeycomb_' + mat + '_block');
    });

    gemMaterials.forEach(function(mat) {
        beeRemoves.push('productivebees:centrifuge/gem/honeycomb_' + mat);
        beeRemoves.push('productivebees:centrifuge/gem/honeycomb_' + mat + '_block');
    });

    otherMaterials.forEach(function(mat) {
        beeRemoves.push('productivebees:centrifuge/honeycomb_' + mat);
        beeRemoves.push('productivebees:centrifuge/honeycomb_' + mat + '_block');
    });

    const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    colors.forEach(function(color) {
        removeColored.push(`botanypots:botanypots/crafting/${color}_terracotta_botany_pot`);
        removeColored.push(`botanypots:botanypots/crafting/${color}_terracotta_compact_hopper_botany_pot`);
        removeColored.push(`botanypots:botanypots/crafting/${color}_terracotta_hopper_botany_pot`);
        removeColored.push(`botanypots:botanypots/crafting/${color}_concrete_botany_pot`);
        removeColored.push(`botanypots:botanypots/crafting/${color}_concrete_compact_hopper_botany_pot`);
        removeColored.push(`botanypots:botanypots/crafting/${color}_concrete_hopper_botany_pot`);
        removeColored.push(`botanypots:botanypots/crafting/${color}_glazed_terracotta_botany_pot`);
        removeColored.push(`botanypots:botanypots/crafting/${color}_glazed_terracotta_compact_hopper_botany_pot`);
        removeColored.push(`botanypots:botanypots/crafting/${color}_glazed_terracotta_hopper_botany_pot`);
    });
    removeColored.push('botanypots:botanypots/crafting/terracotta_botany_pot');
    removeColored.push('botanypots:botanypots/crafting/terracotta_compact_hopper_botany_pot');
    removeColored.push('botanypots:botanypots/crafting/terracotta_hopper_botany_pot');

    const beeRemovals = beeRemoves.map(recipeId => ({ id: recipeId }));    
    allthemods.remove(beeRemovals);

    const powahRemoves = [
        'thermal_extra:soul_infused_dust', 'thermal_extra:shellite_dust', 'thermal_extra:twinite_dust', 'thermal_extra:dragonsteel_dust', 'thermal_extra:abyssal_dust',
        'powah:crafting/energy_cell_starter', 'powah:crafting/energy_cell_basic', 'powah:crafting/energy_cell_hardened',
        'powah:crafting/energy_cell_blazing', 'powah:crafting/energy_cell_niotic', 'powah:crafting/energy_cell_spirited', 
        'powah:crafting/energy_cell_nitro', 'powah:crafting/energy_cell_basic_2',

        'powah:crafting/ender_cell_starter', 'powah:crafting/ender_cell_basic', 'powah:crafting/ender_cell_hardened',
        'powah:crafting/ender_cell_blazing', 'powah:crafting/ender_cell_niotic', 'powah:crafting/ender_cell_spirited', 
        'powah:crafting/ender_cell_nitro',

        'powah:crafting/ender_gate_starter', 'powah:crafting/ender_gate_basic', 'powah:crafting/ender_gate_hardened',
        'powah:crafting/ender_gate_blazing', 'powah:crafting/ender_gate_niotic', 'powah:crafting/ender_gate_spirited', 
        'powah:crafting/ender_gate_nitro',

        'powah:crafting/cable_starter', 'powah:crafting/cable_basic', 'powah:crafting/cable_hardened',
        'powah:crafting/cable_blazing', 'powah:crafting/cable_niotic', 'powah:crafting/cable_spirited', 
        'powah:crafting/cable_nitro', 'powah:crafting/cable_basic_2', 'powah:crafting/cable_hardened_2',
        'powah:crafting/cable_blazing_2', 'powah:crafting/cable_niotic_2', 'powah:crafting/cable_spirited_2', 
        'powah:crafting/cable_nitro_2',

        'powah:crafting/energizing_rod_starter', 'powah:crafting/energizing_rod_basic', 'powah:crafting/energizing_rod_hardened',
        'powah:crafting/energizing_rod_blazing', 'powah:crafting/energizing_rod_niotic', 'powah:crafting/energizing_rod_spirited', 
        'powah:crafting/energizing_rod_nitro',

        'powah:crafting/furnator_starter', 'powah:crafting/furnator_basic', 'powah:crafting/furnator_hardened',
        'powah:crafting/furnator_blazing', 'powah:crafting/furnator_niotic', 'powah:crafting/furnator_spirited', 
        'powah:crafting/furnator_nitro',
        
        'powah:crafting/magmator_starter', 'powah:crafting/magmator_basic', 'powah:crafting/magmator_hardened',
        'powah:crafting/magmator_blazing', 'powah:crafting/magmator_niotic', 'powah:crafting/magmator_spirited', 
        'powah:crafting/magmator_nitro',

        'powah:crafting/thermo_generator_starter', 'powah:crafting/thermo_generator_basic', 'powah:crafting/thermo_generator_hardened',
        'powah:crafting/thermo_generator_blazing', 'powah:crafting/thermo_generator_niotic', 'powah:crafting/thermo_generator_spirited', 
        'powah:crafting/thermo_generator_nitro',


        'powah:crafting/solar_panel_starter', 'powah:crafting/solar_panel_basic', 'powah:crafting/solar_panel_hardened',
        'powah:crafting/solar_panel_blazing', 'powah:crafting/solar_panel_niotic', 'powah:crafting/solar_panel_spirited', 
        'powah:crafting/solar_panel_nitro',

        'powah:crafting/reactor_starter', 'powah:crafting/reactor_basic', 'powah:crafting/reactor_hardened',
        'powah:crafting/reactor_blazing', 'powah:crafting/reactor_niotic', 'powah:crafting/reactor_spirited', 
        'powah:crafting/reactor_nitro',

        'powah:crafting/player_tranmitter_starter', 'powah:crafting/player_tranmitter_basic', 'powah:crafting/player_tranmitter_hardened',
        'powah:crafting/player_tranmitter_blazing', 'powah:crafting/player_tranmitter_niotic', 'powah:crafting/player_tranmitter_spirited', 
        'powah:crafting/player_tranmitter_nitro',

        'powah:crafting/energy_hopper_starter', 'powah:crafting/energy_hopper_basic', 'powah:crafting/energy_hopper_hardened',
        'powah:crafting/energy_hopper_blazing', 'powah:crafting/energy_hopper_niotic', 'powah:crafting/energy_hopper_spirited', 
        'powah:crafting/energy_hopper_nitro',

        'powah:crafting/energy_discharger_starter', 'powah:crafting/energy_discharger_basic', 'powah:crafting/energy_discharger_hardened',
        'powah:crafting/energy_discharger_blazing', 'powah:crafting/energy_discharger_niotic', 'powah:crafting/energy_discharger_spirited', 
        'powah:crafting/energy_discharger_nitro',

        'alltheores:smelting_dust/osmium_ingot', 'chemlib:osmium_ingot_from_blasting_osmium_dust',
        'enderio:smelting/alltheores/smelting_dust/osmium_ingot',
        'tconstruct:smeltery/melting/metal/osmium/dust',

        'projecte:dark_matter', 'projecte:red_matter', 'projecte:red_matter_alt'


    ]
    const globalRemoves3 = [      
        'pneumaticcraft:flux_compressor',
        'projecte:relay_mk1', 'mob_grinding_utils:recipe_entity_conveyor', 'mekanism:geiger_counter', 'mekanism:module_geiger_unit',
        'projecte:collector_mk1', 'projecte:collector_mk2', 'projecte:collector_mk3',
        'integrateddynamics:special/part_connector_omni_directional_copy', 'integrateddynamics:special/part_connector_omni_directional', 'integrateddynamics:crafting/part_connector_mono_directional',
        'draconicevolution:dislocator_pedestal','draconicevolution:tools/dislocator',
        'ae2:decorative/quartz_glass', 'ars_nouveau:mob_jar',
        'projecte:condenser_mk1', 'projecte:condenser_mk2', 'ars_nouveau:magebloom_fiber',
        'ars_nouveau:arcane_pedestal', 'ars_nouveau:sourcestone', 'ars_nouveau:enchanting_apparatus', 'ars_nouveau:imbuement_chamber', 'ars_nouveau:source_jar',
        'tconstruct:smeltery/seared/grout_multiple', 'tconstruct:smeltery/seared/grout', 
        'integrateddynamics:crafting/squeezer', 'integrateddynamics:crafting/mechanical_squeezer', 'integrateddynamics:crafting/energy_battery',
        'integrateddynamics:crafting/cable', 'integrateddynamics:crafting/cable_rotated',
        'integrateddynamics:crafting/variablestore', 'integrateddynamics:crafting/logic_programmer', 

        'simplemagnets:basic_demagnetization_coil', 'simplemagnets:advanced_demagnetization_coil','simplemagnets:basicmagnet','simplemagnets:advancedmagnet',
        // --- Mob Grinding Utils ---
        'mob_grinding_utils:recipe_fan', 'mob_grinding_utils:recipe_saw_upgrade_looting', 'mob_grinding_utils:recipe_saw_upgrade_sharpness',
        'mob_grinding_utils:recipe_fan_upgrade_height', 'mob_grinding_utils:recipe_fan_upgrade_width', 'mob_grinding_utils:recipe_fan_upgrade_speed',
        'mob_grinding_utils:recipe_saw_upgrade_beheading',

        // --- Misc Utilities & Villagers ---
        'enderchests:ender_pouch', 'enderchests:ender_bag', 'enderchests:ender_chest', 'minecraft:ender_chest',
        'endertanks:bucket', 'endertanks:tank', 'entangled:block', 'entangled:item',
        'easy_villagers:trader', 'easy_villagers:auto_trader', 'easy_villagers:farmer', 'easy_villagers:breeder',
        'easy_villagers:converter', 'easy_villagers:iron_farm', 'easy_villagers:incubator',
        'allthemodium:teleport_pad', 'minecraft:flint_and_steel', 'farmingforblockheads:market',
        'minecraft:cauldron', 'minecraft:brewing_stand', 'minecraft:enchanting_table', 'blue_skies:enchanting_table_compat',
        'gtceu:assembler/enchanting_table', 'gtceu:assembler/cauldron','gtceu:assembler/brewing_stand',

        'thermal:augments/upgrade_augment_1', 'thermal:augments/upgrade_augment_2', 'thermal:augments/upgrade_augment_3',
        'thermal_extra:crafting/abyssal_integral_component', 'thermal_extra:crafting/dragonsteel_integral_component',
        'thermal:rf_coil', 'thermal:redstone_servo', 
        'productivebees:centrifuge/gems/honeycomb_ruby', 'productivebees:centrifuge/gems/honeycomb_ruby_block',
        'sanguine_networks:virtual_sacrificer', 'industrialforegoingsouls:soul_laser_base', 'industrialforegoingsouls:soul_surge',
        'industrialforegoingsouls:soul_network_pipe', 'ad_astra:launch_pad', 'ad_astra:oxygen_loader', 'ad_astra:fuel_refinery',
        'justdirethings:gooblock_tier1', 'justdirethings:gooblock_tier2', 'justdirethings:gooblock_tier3', 'justdirethings:gooblock_tier4',
        'justdirethings:paradoxmachine',

        'wirelesschargers:basic_wireless_player_charger', 'wirelesschargers:advanced_wireless_player_charger',
        'wirelesschargers:basic_wireless_block_charger', 'wirelesschargers:advanced_wireless_block_charger',
        'gtceu:smelting/smelt_dust_germanium_to_ingot', 'farmingforblockheads:red_fertilizer', 'mekanism:structural_glass', 'mekanismgenerators:reactor/glass',
        'productivebees:upgrades/time',
        'powah:crafting/capacitor_basic', 'powah:crafting/capacitor_hardened', 'powah:crafting/capacitor_blazing',
        'powah:crafting/capacitor_niotic', 'powah:crafting/capacitor_spirited', 'powah:crafting/capacitor_nitro',        

        // --- Ad Astra ---        
        'ad_astra:rocket_fin', 'ad_astra:rocket_nose_cone', 'ad_astra:engine_frame',
        'ad_astra:steel_engine', 'ad_astra:desh_engine', 'ad_astra:ostrum_engine', 'ad_astra:calorite_engine',
        'ad_astra:steel_tank', 'ad_astra:desh_tank', 'ad_astra:ostrum_tank', 'ad_astra:calorite_tank',
        'chemlib:lutetium_ingot_from_smelting_lutetium_dust', 'chemlib:lutetium_ingot_from_blasting_lutetium_dust',
        'enderio:smelting/chemlib/lutetium_ingot_from_smelting_lutetium_dust',
        
        'chemlib:protactinium_ingot_from_smelting_protactinium_dust',
        'chemlib:protactinium_ingot_from_blasting_protactinium_dust',
        'enderio:smelting/chemlib/protactinium_ingot_from_smelting_protactinium_dust',
        
        'chemlib:germanium_ingot_from_smelting_germanium_dust',
        'chemlib:germanium_ingot_from_blasting_germanium_dust',
        'enderio:smelting/chemlib/germanium_ingot_from_smelting_germanium_dust',
        'enderio:smelting/gtceu/smelting/smelt_dust_germanium_to_ingot',

        'chemlib:rubidium_ingot_from_smelting_rubidium_dust',
        'chemlib:rubidium_ingot_from_blasting_rubidium_dust',
        'enderio:smelting/chemlib/rubidium_ingot_from_smelting_rubidium_dust',        

        'bloodmagic:blood_rune_blank', 'rftoolsutility:screen_controller', 'integrateddynamics:crafting/part_display_panel', 

        
        
        'industrialforegoing:fluid_extractor', 'industrialforegoing:hydroponic_simulation_processor',
        'industrialforegoing:latex_processing_unit', 'industrialforegoing:dissolution_chamber', 'industrialforegoing:plant_gatherer',
        'industrialforegoing:sewer', 'industrialforegoing:sewage_composter', 'industrialforegoing:plant_sower',
        'industrialforegoing:mob_slaughter_factory', 'industrialforegoing:animal_rancher', 'industrialforegoing:animal_feeder',
        'industrialforegoing:animal_baby_separator', 'industrialforegoing:resourceful_furnace', 'industrialforegoing:sludge_refiner',
        'industrialforegoing:water_condensator', 'industrialforegoing:block_placer', 'industrialforegoing:block_breaker',
        'industrialforegoing:fluid_collector', 'industrialforegoing:fluid_placer', 'industrialforegoing:dye_mixer',
        'industrialforegoing:spores_recreator', 'industrialforegoing:bioreactor', 'industrialforegoing:biofuel_generator',

        'industrialforegoing:plant_fertilizer', 'industrialforegoing:hydroponic_bed', 'industrialforegoing:simulated_hydroponic_bed', 'industrialforegoing:marine_fisher',
        'industrialforegoing:laser_drill', 'industrialforegoing:fermentation_station', 'industrialforegoing:mob_detector',

        'industrialforegoing:mob_crusher', 'industrialforegoing:mob_duplicator',
        'industrialforegoing:material_stonework_factory', 'industrialforegoing:potion_brewer', 'industrialforegoing:ore_laser_base', 'industrialforegoing:fluid_laser_base',
        'industrialforegoing:washing_factory', 'industrialforegoing:fluid_sieving_machine', 'industrialforegoing:stasis_chamber', 'industrialforegoing:enchantment_sorter',
        'industrialforegoing:enchantment_applicator', 'industrialforegoing:enchantment_extractor', 'industrialforegoing:enchantment_factory', 'industrialforegoing:infinity_charger',

        'industrialforegoing:wither_builder', 'industrialforegoing:black_hole_controller', 
        'fluxnetworks:flux_dust', 'mob_grinding_utils:recipe_mob_swab',
        'waystones:warp_stone', 'waystones:sharestone', 'advanced_ae:quantumcore', 'waystones:warp_dust'

    ];
    
    const globalRemoves2 = [

        // --- Mekanism ---
        'mekanism:factory/basic/smelting',      'mekanism:factory/advanced/smelting',       'mekanism:factory/elite/smelting',      'mekanism:factory/ultimate/smelting',
        'mekanism:factory/basic/enriching',     'mekanism:factory/advanced/enriching',      'mekanism:factory/elite/enriching',     'mekanism:factory/ultimate/enriching',
        'mekanism:factory/basic/crushing',      'mekanism:factory/advanced/crushing',       'mekanism:factory/elite/crushing',      'mekanism:factory/ultimate/crushing',
        'mekanism:factory/basic/compressing',   'mekanism:factory/advanced/compressing',    'mekanism:factory/elite/compressing',   'mekanism:factory/ultimate/compressing',
        'mekanism:factory/basic/combining',     'mekanism:factory/advanced/combining',      'mekanism:factory/elite/combining',     'mekanism:factory/ultimate/combining',
        'mekanism:factory/basic/purifying',     'mekanism:factory/advanced/purifying',      'mekanism:factory/elite/purifying',     'mekanism:factory/ultimate/purifying',
        'mekanism:factory/basic/injecting',     'mekanism:factory/advanced/injecting',      'mekanism:factory/elite/injecting',     'mekanism:factory/ultimate/injecting',
        'mekanism:factory/basic/infusing',      'mekanism:factory/advanced/infusing',       'mekanism:factory/elite/infusing',      'mekanism:factory/ultimate/infusing',
        'mekanism:factory/basic/sawing',        'mekanism:factory/advanced/sawing',         'mekanism:factory/elite/sawing',        'mekanism:factory/ultimate/sawing',
        
        'mekanism:electric_pump', 'mekanism:logistical_sorter', 'mekanism:teleporter', 'mekanism:teleportation_core', 'mekanism:digital_miner',
        'mekanism:energy_cube/basic', 'mekanism:energy_cube/advanced', 'mekanism:energy_cube/elite', 'mekanism:energy_cube/ultimate', 
        'mekanism:pigment_mixer', 'mekanism:rotary_condensentrator', 'mekanism:chemical_oxidizer', 'mekanism:chemical_infuser', 
        'mekanism:electrolytic_separator', 'mekanism:chemical_dissolution_chamber', 'mekanism:chemical_washer', 
        'mekanism:chemical_crystallizer', 'mekanism:pressurized_reaction_chamber', 'mekanism:isotopic_centrifuge', 'mekanism:teleporter_frame',

       

        // --- Occultism ---
        'occultism:ritual/craft_dimensional_mineshaft', 'occultism:ritual/craft_miner_foliot_unspecialized',
        'occultism:ritual/craft_miner_djinni_ores', 'occultism:ritual/craft_miner_afrit_deeps',
        'occultism:ritual/craft_miner_marid_master', 'occultism:crafting/chalk_white_impure',
        'occultism:crafting/chalk_red_impure', 'occultism:crafting/chalk_gold_impure',
        'occultism:crafting/chalk_purple_impure', 'draconicevolution:machines/crafting_core',
        'draconicevolution:machines/basic_crafting_injector', 'draconicevolution:machines/awakened_crafting_injector',
        'draconicevolution:chaotic_crafting_injector', 'draconicevolution:wyvern_crafting_injector',
        'draconicevolution:components/wyvern_core', 'draconicevolution:components/draconium_core',
        'pneumaticcraft:collector_drone',



        // --- EnderIO ---
        "enderio:energy_conduit", "enderio:fluid_conduit",
        "enderio:pressurized_fluid_conduit", "enderio:pressurized_fluid_conduit_upgrade", "enderio:ender_fluid_conduit_upgrade", "enderio:ender_fluid_conduit",
        "enderio:redstone_conduit", "enderio:item_conduit", "enderio:ae_covered_dense_cable", "enderio:ae_glass_cable",
        "enderio:ae_covered_cable", "enderio:mek_basic_pressurized_tube", "enderio:mek_advanced_pressurized_tube",
        "enderio:mek_advanced_pressurized_tube_upgrade", "enderio:mek_elite_pressurized_tube", "enderio:mek_elite_pressurized_tube_upgrade",
        "enderio:mek_advanced_thermodynamic_conductor", "enderio:conductive_conduit", "enderio:energetic_conduit",
        "enderio:endsteel_conduit", "enderio:lumium_conduit", "enderio:signalum_conduit", "enderio:vibrant_conduit", "enderio:enderium_conduit",


        "gtceu:macerator/macerate_wheat", 'megacells:transform/sky_steel_ingot', 'appflux:mega/sky_resin',
        'draconicevolution:components/draconium_ingot_from_ore', 'elementalcraft:pure_ore/draconicevolution/components/draconium_ingot_from_ore',
        'enderio:smelting/draconicevolution/components/draconium_ingot_from_ore'

    ]
    const globalRemoves = [
        // --- Thermal ---
        "thermal:machine_frame", "thermal_extra:machine/component_assembly/redstone_servo", "thermal_extra:crafting/dynamo_frost",
        "thermal:dynamo_stirling", "thermal:dynamo_compression", "thermal:dynamo_magmatic", "thermal:dynamo_numismatic",
        "thermal:dynamo_lapidary", "thermal:dynamo_disenchantment", "thermal:dynamo_gourmand", 'thermal:rf_coil', 'thermal:redstone_servo',

        // --- Functional Storage (Drawers & Fluids) ---
        'functionalstorage:framed_1', 'functionalstorage:framed_2', 'functionalstorage:framed_4',
        'functionalstorage:oak_1', 'functionalstorage:oak_2', 'functionalstorage:oak_4',
        'functionalstorage:spruce_1', 'functionalstorage:spruce_2', 'functionalstorage:spruce_4',
        'functionalstorage:birch_1', 'functionalstorage:birch_2', 'functionalstorage:birch_4',
        'functionalstorage:jungle_1', 'functionalstorage:jungle_2', 'functionalstorage:jungle_4',
        'functionalstorage:acacia_1', 'functionalstorage:acacia_2', 'functionalstorage:acacia_4',
        'functionalstorage:dark_oak_1', 'functionalstorage:dark_oak_2', 'functionalstorage:dark_oak_4',
        'functionalstorage:crimson_1', 'functionalstorage:crimson_2', 'functionalstorage:crimson_4',
        'functionalstorage:warped_1', 'functionalstorage:warped_2', 'functionalstorage:warped_4',
        'functionalstorage:mangrove_1', 'functionalstorage:mangrove_2', 'functionalstorage:mangrove_4',
        'functionalstorage:cherry_1', 'functionalstorage:cherry_2', 'functionalstorage:cherry_4',
        'functionalstorage:fluid_1', 'functionalstorage:fluid_2', 'functionalstorage:fluid_4',
        'functionalstorage:compacting_drawer', 'functionalstorage:armory_cabinet',
        'functionalstorage:framed_simple_compacting_drawer', 'functionalstorage:compacting_framed_drawer', 'functionalstorage:framed_simple_compacting_drawer',
        'functionalstorage:storage_controller', 'functionalstorage:controller_extension',
        'functionalstorage:framed_storage_controller', 'functionalstorage:framed_controller_extension',

        // --- Functional Storage Upgrades ---
        'functionalstorage:pusher_upgrade', 'functionalstorage:puller_upgrade', 'functionalstorage:collector_upgrade',
        'functionalstorage:iron_downgrade', 'functionalstorage:copper_upgrade', 'functionalstorage:gold_upgrade',
        'functionalstorage:diamond_upgrade', 'functionalstorage:netherite_upgrade',

        // --- Apotheosis Tables ---
        'apotheosis:salvaging_table', 'apotheosis:gem_cutting_table', 'apotheosis:simple_reforging_table',
        'apotheosis:reforging_table', 'apotheosis:augmenting_table',

        //quarry plus
        "quarryplus:mining_well", "quarryplus:mini_quarry", "quarryplus:solid_fuel_quarry", "quarryplus:quarry",
        "quarryplus:adv_quarry", "quarryplus:pump_plus", "quarryplus:adv_pump", "quarryplus:exp_pump",
        "quarryplus:fuel_module_normal", "quarryplus:filter_module", "quarryplus:flex_marker", "quarryplus:marker_workbench",
        "quarryplus:flex_marker_workbench", "quarryplus:placer_plus", "quarryplus:status_checker", "quarryplus:y_setter",
        "quarryplus:filler", "quarryplus:mover", "quarryplus:book_mover",

        // --- Powah & Pylon ---
        'powah:crafting/dielectric_paste', 'powah:crafting/dielectric_paste_2', 'powah:crafting/dielectric_rod',
        'powah:crafting/dielectric_casing', 'powah:crafting/dielectric_rod_h', 'powah:crafting/energizing_orb',
        'pylons:harvester_pylon', 'pylons:expulsion_pylon', 'pylons:infusion_pylon', 'pylons:interdiction_pylon',

        // --- PNC ---
        'pneumaticcraft:printed_circuit_board', 'pneumaticcraft:pressure_chamber/transistor',
        'pneumaticcraft:pressure_chamber/capacitor', 'gtceu:fluid_solidifier/solidify_plastic_to_plate',

        // --- Pipez & LaserIO ---
        'pipez:item_pipe', 'pipez:fluid_pipe', 'pipez:gas_pipe', 'pipez:energy_pipe', 'pipez:universal_pipe',
        'pipez:basic_upgrade', 'pipez:improved_upgrade', 'pipez:advanced_upgrade', 'pipez:ultimate_upgrade',
        'laserio:laser_connector', 'laserio:laser_node', 'laserio:logic_chip_raw', 'laserio:laser_connector_advanced',        

        // --- Project E ---
        'projecte:philosophers_stone', 'projecte:philosophers_stone_alt',

        // --- Ender IO Alloys ---
        'enderio:alloy_smelting/vibrant_alloy_ingot', 'enderio:alloy_smelting/copper_alloy_ingot',
        'enderio:alloy_smelting/energetic_alloy_ingot', 'enderio:alloy_smelting/redstone_alloy_ingot',
        'enderio:alloy_smelting/conductive_alloy_ingot', 'enderio:alloy_smelting/pulsating_alloy_ingot',
        'enderio:alloy_smelting/dark_steel_ingot', 'enderio:alloy_smelting/end_steel_ingot',
        'enderio:alloy_smelting/soularium_ingot', 'enderio:pulsating_crystal', 'enderio:vibrant_crystal',
        'enderio:stick',

        // --- Extreme Reactors (BigReactors) ---
        'minecraft:kjs/bigreactors_basic_reactorcasing', 'minecraft:kjs/bigreactors_reinforced_reactorcasing',
        'bigreactors:fluidizer/casing', 'bigreactors:fluidizer/solidinjector', 'bigreactors:fluidizer/fluidinjector',
        'bigreactors:fluidizer/outputport', 'bigreactors:fluidizer/powerport', 'bigreactors:fluidizer/controller',
        'bigreactors:reprocessor/casing', 'bigreactors:reprocessor/collector', 'bigreactors:reprocessor/wasteinjector',
        'bigreactors:reprocessor/fluidinjector', 'bigreactors:reprocessor/outputport', 'bigreactors:reprocessor/powerport',
        'bigreactors:reprocessor/controller', 'bigreactors:energizer/casing', 'bigreactors:energizer/powerport_fe',
        'bigreactors:energizer/powerport_fe_active', 'bigreactors:energizer/chargingport_fe', 'bigreactors:energizer/computerport',
        'bigreactors:energizer/controller', 'bigreactors:reactor/basic/casing', 'bigreactors:reactor/basic/controller_ingots_yellorium',
        'bigreactors:reactor/basic/controller_ingots_uranium', 'bigreactors:reactor/basic/solidaccessport', 'bigreactors:reactor/basic/chargingfe',
        'bigreactors:reactor/basic/activetap_fe', 'bigreactors:reactor/basic/passivetap_fe', 'bigreactors:reactor/basic/redstoneport',
        'bigreactors:reactor/basic/fuelrod_ingots_uranium', 'bigreactors:reactor/basic/fuelrod_ingots_yellorium', 'bigreactors:reactor/basic/controlrod',
        'bigreactors:reactor/reinforced/casing', 'bigreactors:reactor/reinforced/casing_upgrade', 'bigreactors:reactor/reinforced/controller_ingots_yellorium',
        'bigreactors:reactor/reinforced/controller_ingots_uranium', 'bigreactors:reactor/reinforced/solidaccessport', 'bigreactors:reactor/reinforced/fluidaccessport',
        'bigreactors:reactor/reinforced/passivetap_fe', 'bigreactors:reactor/reinforced/activetap_fe', 'bigreactors:reactor/reinforced/chargingfe',
        'bigreactors:reactor/reinforced/redstoneport', 'bigreactors:reactor/reinforced/computerport', 'bigreactors:reactor/reinforced/activefluidport_forge',
        'bigreactors:reactor/reinforced/passivefluidport_forge', 'bigreactors:reactor/reinforced/passivefluidport_mekanism', 'bigreactors:reactor/reinforced/fuelrod_ingots_uranium',
        'bigreactors:reactor/reinforced/fuelrod_ingots_yellorium', 'bigreactors:reactor/reinforced/controlrod', 'bigreactors:turbine/basic/casing',
        'bigreactors:turbine/basic/controller', 'bigreactors:turbine/basic/bearing', 'bigreactors:turbine/basic/shaft', 'bigreactors:turbine/basic/blade',
        'bigreactors:turbine/basic/activetap_fe', 'bigreactors:turbine/basic/passivetap_fe', 'bigreactors:turbine/basic/chargingfe',
        'bigreactors:turbine/basic/redstoneport', 'bigreactors:turbine/basic/activefluidport_forge', 'bigreactors:turbine/basic/passivefluidport_forge',
        'bigreactors:turbine/reinforced/casing', 'bigreactors:turbine/reinforced/casing_upgrade', 'bigreactors:turbine/reinforced/controller',
        'bigreactors:turbine/reinforced/bearing', 'bigreactors:turbine/reinforced/shaft', 'bigreactors:turbine/reinforced/blade',
        'bigreactors:turbine/reinforced/activetap_fe', 'bigreactors:turbine/reinforced/passivetap_fe', 'bigreactors:turbine/reinforced/chargingfe',
        'bigreactors:turbine/reinforced/redstoneport', 'bigreactors:turbine/reinforced/computerport', 'bigreactors:turbine/reinforced/activefluidport_forge',
        'bigreactors:turbine/reinforced/passivefluidport_forge', 'bigreactors:crafting/yellorium_component_to_storage', 'bigreactors:crafting/yellorium_ingot_to_nugget',
        'bigreactors:blasting/graphite_from_charcoal', 'bigreactors:blasting/graphite_from_coal', 'bigreactors:smelting/graphite_from_dust',
        'bigreactors:blasting/graphite_from_dust', 'bigreactors:smelting/graphite_from_coal', 'bigreactors:smelting/graphite_from_charcoal',

        // --- EvilCraft ---
        'evilcraft:crafting/blood_infuser', 'evilcraft:crafting/purifier', 'evilcraft:crafting/sanguinary_pedestal_0',
        'evilcraft:crafting/sanguinary_pedestal_1', 'evilcraft:crafting/sanguinary_environmental_accumulator',

        // --- Flux Networks ---
        'fluxnetworks:fluxcontroller', 'fluxnetworks:fluxplug', 'fluxnetworks:fluxpoint', 'fluxnetworks:basicfluxstorage',

        // --- Forbidden & Arcanus ---
        'forbidden_arcanus:deorum_ingot', 'forbidden_arcanus:mundabitur_dust',

        // --- Hostile Neural Networks ---
        'hostilenetworks:sim_chamber', 'hostilenetworks:loot_fabricator', 'hostilenetworks:prediction_matrix',
        'hostilenetworks:framework', 'hostilenetworks:deep_learner',

        // --- Industrial Foregoing ---
        'industrialforegoing:machine_frame_pity', 'industrialforegoing:supreme_black_hole_unit', 'industrialforegoing:supreme_black_hole_tank',
        'industrialforegoing:advanced_black_hole_unit', 'industrialforegoing:advanced_black_hole_tank', 'industrialforegoing:simple_black_hole_unit',
        'industrialforegoing:simple_black_hole_tank', 'industrialforegoing:pity_black_hole_unit', 'industrialforegoing:pity_black_hole_tank',
        'industrialforegoing:common_black_hole_unit', 'industrialforegoing:common_black_hole_tank',

        // --- Mob Grinding Utils & Modular Routers ---
        'mob_grinding_utils:recipe_saw', 'modularrouters:modular_router',

        // --- Blood Magic ---
        'bloodmagic:ritual_stone_blank', 'bloodmagic:altar/slate',

        // --- Tinkers Construct & Thermal ---
        'tconstruct:smeltery/casting/obsidian/chest', 'tconstruct:smeltery/melting/metal/enderium/dust', 'tconstruct:smeltery/alloys/molten_enderium',
        'tconstruct:smeltery/melting/metal/signalum/dust', 'tconstruct:smeltery/alloys/molten_signalum', 'tconstruct:smeltery/melting/metal/lumium/dust',
        'tconstruct:smeltery/alloys/molten_lumium', 'thermal:machines/smelter/smelter_alloy_enderium', 'thermal:machines/smelter/smelter_enderium_dust',
        'thermal:machines/smelter/smelter_alloy_signalum', 'thermal:machines/smelter/smelter_signalum_dust', 'thermal:machines/smelter/smelter_alloy_lumium',
        'thermal:machines/smelter/smelter_lumium_dust', 'thermal:fire_charge/signalum_ingot_4', 'thermal:fire_charge/lumium_ingot_4',
        'thermal:signalum_dust_4', 'thermal:lumium_dust_4', 'thermal:enderium_dust_2',

        // --- Mekanism ---
        'mekanism:nucleosynthesizing/ender_chest', 'mekanism:steel_casing', 'mekanism:energized_smelter', 'mekanism:enrichment_chamber',
        'mekanism:crusher', 'mekanism:osmium_compressor', 'mekanism:combiner', 'mekanism:purification_chamber', 'mekanism:chemical_injection_chamber',
        'mekanism:precision_sawmill', 'mekanism:metallurgic_infuser', 'mekanism:sps_casing', 'mekanism:sps_port', 'mekanism:energy_tablet',
        'mekanism:mekasuit_helmet', 'mekanism:mekasuit_bodyarmor', 'mekanism:mekasuit_pants', 'mekanism:mekasuit_boots', 'mekanism:tier_installer/basic',
        'mekanism:tier_installer/advanced', 'mekanism:tier_installer/elite', 'mekanism:tier_installer/ultimate', 'mekanism:upgrade/speed', 'mekanism:upgrade/muffling',
        'mekanism:upgrade/energy', 'mekanism:upgrade/filter', 'mekanism:upgrade/gas', 'mekanism:module_base',
        'mekanismgenerators:reactor/controller', 'mekanismgenerators:reactor/frame', 'mekanismgenerators:reactor/port',
        'mekanismgenerators:fission_reactor/casing', 'mekanismgenerators:fission_reactor/port', 'mekanismgenerators:fission_reactor/fuel_assembly',

        // --- GTCEu Specific ---
        'gtceu:assembler/ender_chest', 'gtceu:shaped/block_compress_nether_star', 'gtceu:shaped/block_compress_ender_pearl',
        'gtceu:shaped/block_compress_flint', 'gtceu:shaped/block_compress_certus_quartz', 'gtceu:shapeless/dust_bronze',
        'gtceu:shapeless/dust_brass', 'gtceu:smelting/smelt_raw_uraninite_ore_to_ingot', 'gtceu:blasting/smelt_raw_uraninite_ore_to_ingot',
        'gtceu:shaped/compress_uraninite_to_ore_block', 'gtceu:smelting/smelt_dust_draconium_awakened_to_ingot',

        // --- Refined Storage & Extra Storage ---
        'rebornstorage:disks/small_item_disk', 'rebornstorage:disks/small_item_storage_disk_from_storage_housing', 'rebornstorage:parts/small_item_disk_part',
        'rebornstorage:disks/medium_item_disk', 'rebornstorage:disks/medium_item_storage_disk_from_storage_housing', 'rebornstorage:parts/medium_item_disk_part',
        'rebornstorage:disks/large_item_disk', 'rebornstorage:disks/large_item_storage_disk_from_storage_housing', 'rebornstorage:parts/large_item_disk_part',
        'rebornstorage:disks/larger_item_disk', 'rebornstorage:disks/larger_item_storage_disk_from_storage_housing', 'rebornstorage:parts/larger_item_disk_part',
        'rebornstorage:disks/small_fluid_disk', 'rebornstorage:disks/small_fluid_storage_disk_from_storage_housing', 'rebornstorage:parts/small_fluid_disk_part',
        'rebornstorage:disks/medium_fluid_disk', 'rebornstorage:disks/medium_fluid_storage_disk_from_storage_housing', 'rebornstorage:parts/medium_fluid_disk_part',
        'rebornstorage:disks/large_fluid_disk', 'rebornstorage:disks/large_fluid_storage_disk_from_storage_housing', 'rebornstorage:parts/large_fluid_disk_part',
        'rebornstorage:disks/larger_fluid_disk', 'rebornstorage:disks/larger_fluid_storage_disk_from_storage_housing', 'rebornstorage:parts/larger_fluid_disk_part',
        'extrastorage:advanced_importer', 'extrastorage:advanced_exporter', 'extrastorage:storage_block/block_256k', 'extrastorage:storage_block/block_1024k',
        'extrastorage:storage_block/block_4096k', 'extrastorage:storage_block/block_16384k', 'extrastorage:storage_block/block_16384k_fluid',
        'extrastorage:storage_block/block_65536k_fluid', 'extrastorage:storage_block/block_262144k_fluid', 'extrastorage:storage_block/block_1048576k_fluid',
        'extrastorage:disk/shapeless/disk_256k', 'extrastorage:disk/shaped/disk_256k', 'extrastorage:disk/shapeless/disk_1024k', 'extrastorage:disk/shaped/disk_1024k',
        'extrastorage:disk/shapeless/disk_4096k', 'extrastorage:disk/shaped/disk_4096k', 'extrastorage:disk/shapeless/disk_16384k', 'extrastorage:disk/shaped/disk_16384k',
        'extrastorage:disk/shapeless/disk_16384k_fluid', 'extrastorage:disk/shaped/disk_16384k_fluid', 'extrastorage:disk/shapeless/disk_65536k_fluid',
        'extrastorage:disk/shaped/disk_65536k_fluid', 'extrastorage:disk/shapeless/disk_262144k_fluid', 'extrastorage:disk/shaped/disk_262144k_fluid',
        'extrastorage:disk/shapeless/disk_1048576k_fluid', 'extrastorage:disk/shaped/disk_1048576k_fluid', 'extrastorage:part/storagepart_256k',
        'extrastorage:part/storagepart_1024k', 'extrastorage:part/storagepart_4096k', 'extrastorage:part/storagepart_16384k',
        'extrastorage:part/storagepart_16384k_fluid', 'extrastorage:part/storagepart_65536k_fluid', 'extrastorage:part/storagepart_262144k_fluid',
        'extrastorage:part/storagepart_1048576k_fluid',

        // --- Applied Energistics 2 & Addons ---
        'ae2:network/blocks/controller', 'ae2:network/blocks/interfaces_interface', 'ae2:network/blocks/storage_chest',
        'ae2:network/blocks/storage_drive', 'ae2:network/blocks/io_condenser', 'ae2:network/blocks/energy_energy_acceptor',
        'ae2:network/crafting/cpu_crafting_unit', 'ae2:network/crafting/molecular_assembler', 'ae2:network/blocks/inscribers',
        'ae2:materials/basiccard', 'ae2:materials/advancedcard', 'ae2:materials/cardspeed', 'ae2:network/cells/item_storage_components_cell_1k_part',
        'ae2:network/cells/item_storage_components_cell_4k_part', 'ae2:network/cells/item_storage_components_cell_16k_part',
        'ae2:network/cells/item_storage_components_cell_64k_part', 'ae2:network/cells/item_storage_components_cell_256k_part',
        'ae2:network/cables/glass_fluix', 'ae2:network/parts/quartz_fiber_part', 'ae2:network/cables/covered_fluix', 'ae2:network/wireless_part',
        'ae2:materials/formationcore', 'ae2:materials/annihilationcore',
        'advanced_ae:quantumunit', 'advanced_ae:quantumstructure', 'advanced_ae:smalladvpatpro', 'advanced_ae:eaeadvpatpro',
        'advanced_ae:reactionchamber', 'advanced_ae:quantumcrafter', 'expatternprovider:wireless_connector',
        'expatternprovider:circuit_cutter', 'expatternprovider:assembler_matrix_frame', 'expatternprovider:assembler_matrix_wall',

        
        'xnet:controller',

        // --- Alchemistry ---
        'alchemistry:atomizer', 'alchemistry:compactor', 'alchemistry:combiner', 'alchemistry:dissolver', 'alchemistry:liquifier',
        'alchemistry:fission_chamber_controller', 'alchemistry:fusion_chamber_controller', 'alchemistry:reactor_casing',
        'alchemistry:reactor_output', 'alchemistry:reactor_input', 'alchemistry:reactor_energy', 'alchemistry:fission_core', 'alchemistry:fusion_core',

        // --- Productive Bees ---
        'productivebees:centrifuge', 'productivebees:centrifuge_cauldron', 'productivebees:powered_centrifuge/thermal', 'productivebees:powered_centrifuge/mekanism',
        'productivebees:heated_centrifuge', 'productivebees:bottler', 'productivebees:breeding_chamber', 'productivebees:incubator',
        'productivebees:catcher', 'productivebees:gene_indexer', 'productivebees:upgrade_time', 'productivebees:upgrades/base',
        'productivebees:upgrades/productivity', 'productivebees:upgrades/productivity_2', 'productivebees:upgrades/anti_teleport',
        'productivebees:upgrades/simulator', 'productivebees:upgrades/productivity_3', 'productivebees:upgrades/comb_block', 'productivebees:upgrades/productivity_4',

        // --- Draconic Evolution & Allthemodium (Smelting/Processing) ---        
        'draconicevolution:machines/crafting_core', 'draconicevolution:components/draconium_ingot_from_dust', 'draconicevolution:components/draconium_ingot_from_ore',
        'draconicevolution:components/awakened_draconium_ingot_from_dust',
        'enderio:smelting/draconicevolution/components/draconium_ingot_from_dust', 'enderio:smelting/draconicevolution/components/awakened_draconium_ingot_from_dust',
        'enderio:smelting/gtceu/smelting/smelt_dust_draconium_awakened_to_ingot',
        'enderio:smelting/allthemodium/vibranium_ingot_from_dust_smelting', 'enderio:smelting/allthemodium/allthemodium_ingot_from_dust_smelting',
        'enderio:smelting/allthemodium/unobtainium_ingot_from_dust_smelting', 'enderio:smelting/allthemodium/vibranium_ingot_from_raw_smelting',
        'enderio:smelting/allthemodium/allthemodium_ingot_from_raw_smelting', 'enderio:smelting/allthemodium/unobtainium_ingot_from_raw_smelting',
        'allthemodium:smeltery/melting/vibranium_from_dust', 'allthemodium:smeltery/melting/allthemodium_from_dust', 'allthemodium:smeltery/melting/unobtainium_from_dust',
        'allthemodium:smeltery/melting/vibranium_from_raw_ore', 'allthemodium:smeltery/melting/allthemodium_from_raw_ore', 'allthemodium:smeltery/melting/unobtainium_from_raw_ore',
        'allthemodium:smeltery/melting/vibranium_from_raw_block', 'allthemodium:smeltery/melting/allthemodium_from_raw_block', 'allthemodium:smeltery/melting/unobtainium_from_raw_block',
        'allthemodium:smeltery/casting/allthemodium_block', 'allthemodium:smeltery/casting/allthemodium_ingot', 'allthemodium:smeltery/casting/allthemodium_nugget',
        'allthemodium:smeltery/casting/vibranium_block', 'allthemodium:smeltery/casting/vibranium_ingot', 'allthemodium:smeltery/casting/vibranium_nugget',
        'allthemodium:smeltery/casting/unobtainium_block', 'allthemodium:smeltery/casting/unobtainium_ingot', 'allthemodium:smeltery/casting/unobtainium_nugget',
        'allthemodium:allthemodium_ingot_from_raw_blasting', 'allthemodium:allthemodium_ingot_from_raw_smelting', 'allthemodium:vibranium_ingot_from_raw_blasting',
        'allthemodium:vibranium_ingot_from_raw_smelting', 'allthemodium:unobtainium_ingot_from_raw_blasting', 'allthemodium:unobtainium_ingot_from_raw_smelting',
        'allthemodium:allthemodium_ingot_from_dust_blasting', 'allthemodium:allthemodium_ingot_from_dust_smelting', 'allthemodium:vibranium_ingot_from_dust_blasting',
        'allthemodium:vibranium_ingot_from_dust_smelting', 'allthemodium:unobtainium_ingot_from_dust_blasting', 'allthemodium:unobtainium_ingot_from_dust_smelting',

        // --- Ender IO Smelting Overrides ---
        'enderio:smelting/alltheores/signalum_ingot_from_dust', 'enderio:smelting/alltheores/lumium_ingot_from_dust', 'enderio:smelting/alltheores/enderium_ingot_from_dust',
        'enderio:smelting/bigreactors/smelting/graphite_from_dust', 'enderio:smelting/bigreactors/smelting/graphite_from_coal', 'enderio:smelting/bigreactors/smelting/graphite_from_charcoal',

        // --- Alltheores Smelting Overrides ---
        'alltheores:enderium_ingot_from_dust', 'alltheores:enderium_ingot_from_dust_blasting', 'alltheores:signalum_ingot_from_dust',
        'alltheores:signalum_ingot_from_dust_blasting', 'alltheores:lumium_ingot_from_dust', 'alltheores:lumium_ingot_from_dust_blasting',
        'alltheores:signalum_dust_from_alloy_blending', 'alltheores:lumium_dust_from_alloy_blending',

        // --- Deeper Darker ---
        'deeperdarker:raw_iron_from_blasting_gloomslate_iron_ore', 'deeperdarker:raw_gold_from_blasting_gloomslate_gold_ore',
        'deeperdarker:raw_copper_from_blasting_gloomslate_copper_ore', 'deeperdarker:raw_iron_from_smelting_gloomslate_iron_ore',
        'deeperdarker:raw_gold_from_smelting_gloomslate_gold_ore', 'deeperdarker:raw_copper_from_smelting_gloomslate_copper_ore',

        // --- RFTools & Waystones ---
        'rftoolsbuilder:shape_card_quarry', 'rftoolsbuilder:shape_card_quarry_silk', 'rftoolsbuilder:shape_card_quarry_fortune',
        'rftoolsbase:machine_frame', 'rftoolsbuilder:builder',
        'waystones:mossy_waystone', 'waystones:sandy_waystone', 'waystones:deepslate_waystone', 'waystones:blackstone_waystone',
        'waystones:end_stone_waystone', 'waystones:portstone', 'waystones:waystone',

        // --- Misc Mods & Conflicts ---
        'constructionwand:stone_wand', 'constructionwand:iron_wand', 'minecraft:cake', 'minecraft:beehive',
        'functionalstorage:oak_drawer_alternate_x1', 'functionalstorage:oak_drawer_alternate_x2', 'functionalstorage:oak_drawer_alternate_x4',
        'additional_lights:fire_for_standing_torch_s'
    ];

    /*globalRemoves.forEach(recipeId => {
        try {
            allthemods.remove({ id: recipeId });
        } catch (e) {
            // This will tell you exactly which ID is causing the issue in your logs
            console.error("Failed to remove recipe ID: " + recipeId);
        }
    });*/
    let removalObjects = removeColored.map(recipeId => ({ id: recipeId }));
    allthemods.remove(removalObjects);

    removalObjects = globalRemoves.map(recipeId => ({ id: recipeId }));
    allthemods.remove(removalObjects);

    removalObjects = globalRemoves2.map(recipeId => ({ id: recipeId }));
    allthemods.remove(removalObjects);

    removalObjects = globalRemoves3.map(recipeId => ({ id: recipeId }));
    allthemods.remove(removalObjects);

    removalObjects = powahRemoves.map(recipeId => ({ id: recipeId }));
    allthemods.remove(removalObjects);

    // 2. --- DYNAMIC MATERIAL REMOVALS (Optimized) ---

    // Chemlib Materials
    const materialsToGregify = ['radium', 'rhenium', 'astatine', 'strontium', 'francium', 'zirconium'];
    let chemRemoves = [];
    materialsToGregify.forEach(mat => {
        chemRemoves.push(`chemlib:${mat}_ingot_from_blasting_${mat}_dust`);
        chemRemoves.push(`chemlib:${mat}_ingot_from_smelting_${mat}_dust`);
        chemRemoves.push(`enderio:smelting/chemlib/${mat}_ingot_from_smelting_${mat}_dust`);
    });
    const chemRemovalObjects = chemRemoves.map(recipeId => ({ id: recipeId }));
    allthemods.remove(chemRemovalObjects);

    // Blast Materials (Dusts and Raw)
    const blastMaterials = [
        'soularium', 'vibrant_alloy', 'energetic_alloy', 'conductive_alloy', 'dark_steel',
        'end_steel', 'signalum', 'lumium', 'enderium', 'naquatainium', 'naquabranium', 'naquamodium'
    ];
    let blastInputs = [];
    blastMaterials.forEach(mat => {
        blastInputs.push(`allthemodium:${mat}_dust`);
        blastInputs.push(`allthemodium:raw_${mat}_dust`);
    });
    // Ensure we are passing valid ingredient objects to the remove call
    const blastInputIngredients = blastInputs.map(input => Ingredient.of(input));

    allthemods.remove({ type: 'minecraft:smelting', input: blastInputIngredients });
    allthemods.remove({ type: 'minecraft:blasting', input: blastInputIngredients });

    // Base Metals (Protecting Mystical Ag)
    const metals = ['bronze', 'brass', 'invar', 'electrum', 'constantan', 'enderium'];
    metals.forEach(metal => {
        allthemods.remove({
            output: `#forge:ingots/${metal}`,
            not: [
                { type: 'mysticalagriculture:crafting' },
                { input: `#forge:nuggets/${metal}` },
                { input: `#forge:storage_blocks/${metal}` }
            ],
            or: [
                { type: 'minecraft:crafting_shaped' },
                { type: 'minecraft:crafting_shapeless' }
            ]
        });
    });

    // 3. --- TYPE & INPUT-BASED REMOVALS ---

    // Type Removals
    allthemods.remove({ type: 'industrialforegoing:dissolution_chamber' });
    allthemods.remove({ type: 'occultism:spirit_fire' });    
    allthemods.remove({ type: 'ad_astra:nasa_workbench' });
    allthemods.remove({ type: 'ad_astra:compressing' });
    allthemods.remove({ type: 'draconicevolution:fusion_crafting' });
    allthemods.remove({ type: 'mysticalagriculture:soul_extraction' });
    allthemods.remove({ type: 'powah:energizing' });
    allthemods.remove({ type: 'elementalcraft:crystallization' });
    allthemods.remove({ type: 'mysticalagriculture:awakening' });
    allthemods.remove({ type: 'evilcraft:blood_infuser' });
    allthemods.remove({ type: 'pneumaticcraft:pressure_chamber' });
    

    // Input Removals
    allthemods.remove({ input: '#alltheores:ore_hammers' });
    allthemods.remove({
        input: 'immersiveengineering:hammer',
        not: [
            { id: 'immersiveengineering:crafting/gunpart_barrel' },
            { id: 'immersiveengineering:crafting/survey_tools' }
        ]
    });
});