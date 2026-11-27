// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    allthemods.shaped('mekanism:chargepad', [
        'P P',
        'PEP',
        'WWW'
    ], {
        P: '#forge:plates/polyethylene',
        E: 'mekanism:energy_tablet',
        W: '#gtceu:wires/cadmium_copper'
    }).id('gregification:mekanism/chargepad')

    allthemods.shaped('mekanism:formulaic_assemblicator', [
        'SPS',
        'CHC',
        'S#S'
    ], {
        S: '#forge:plates/steel',
        P: 'minecraft:crafting_table',
        C: '#gtceu:circuits/lv',
        H: 'gtceu:lv_machine_hull',
        '#': '#forge:chests/wooden'
    }).id('gregification:mekanism/formulaic_assemblicator')

    allthemods.shaped('mekanism:industrial_alarm', [
        'III',
        'C#C',
        'IWI'
    ], {
        I: '#forge:plates/iron',
        C: '#gtceu:circuits/lv',
        '#': 'minecraft:redstone_lamp',
        W: '#gtceu:wires/red_alloy'
    }).id('gregification:mekanism/industrial_alarm')

    allthemods.shaped('mekanism:modification_station', [
        'PCP',
        'GXG',
        'PCP'
    ], {
        P: 'mekanism:hdpe_rod',
        C: '#gtceu:circuits/uv',
        G: 'gtceu:fusion_glass',
        X: 'mekanism:steel_casing'
    }).id('gregification:mekanism/modification_station')

    allthemods.shaped('mekanism:nutritional_liquifier', [
        'R#R',
        'RHR',
        'RCR'
    ], {
        R: '#forge:plates/compressed_iron',
        '#': 'minecraft:bowl',
        H: 'gtceu:lv_machine_hull',
        C: '#gtceu:circuits/lv'
    }).id('gregification:mekanism/nutritional_liquifier')

    allthemods.shaped('mekanism:oredictionificator', [
        'SGS',
        'CHC',
        'SPS'
    ], {
        S: '#forge:plates/steel',
        G: '#forge:glass/silica',
        C: '#gtceu:circuits/lv',
        H: 'gtceu:lv_machine_hull',
        P: 'mekanism:dictionary'
    }).id('gregification:mekanism/oredictionificator')

    allthemods.shaped('mekanism:quantum_entangloporter', [
        'ICI',
        'ATA',
        'ICI'
    ], {
        I: '#forge:ingots/refined_obsidian',
        C: '#gtceu:circuits/uv',
        A: '#forge:plates/alloy_atomic',
        T: 'mekanism:teleportation_core'
    }).id('gregification:mekanism/quantum_entangloporter')

    allthemods.shaped('mekanism:robit', [
        'CSC',
        'EME',
        'IPI'
    ], {
        C: '#gtceu:circuits/iv',
        S: 'gtceu:iv_sensor',
        E: 'mekanism:energy_tablet',
        M: 'gtceu:iv_electric_motor',
        I: '#forge:plates/titanium_carbide',
        P: '#mekanism:personal_storage'
    }).id('gregification:mekanism/robit')

    allthemods.shaped('mekanism:security_desk', [
        'SFS',
        'GXG',
        'SCS'
    ], {
        S: '#forge:plates/tungsten_steel',
        F: 'gtceu:iv_field_generator',
        G: 'gtceu:laminated_glass',
        X: 'gtceu:iv_machine_hull',
        C: '#gtceu:circuits/iv'
    }).id('gregification:mekanism/security_desk')

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/antiprotonic_nucleosynthesizer')
        .itemInputs([
            'mekanism:steel_casing',
            '4x #forge:plates/alloy_atomic',
            '4x #forge:rods/hafnium',
            '4x #forge:double_plates/graphite',
            '#gtceu:circuits/zpm'
        ])
        .inputFluids(['#forge:polybenzimidazole 1440', '#forge:lubricant 1440', '#forge:soldering_alloy 1440'])
        .itemOutputs('mekanism:antiprotonic_nucleosynthesizer')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/chemical_crystallizer')
        .itemInputs([
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_pump',
            '4x #forge:gears/refined_obsidian',
            '4x #forge:plates/hafnium',
            '4x gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:chemical_crystallizer')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/chemical_dissolution_chamber')
        .itemInputs([
            'mekanism:steel_casing',
            '4x #forge:gears/refined_obsidian',
            '2x gtceu:luv_electric_pump',
            'gtceu:luv_electric_motor',
            '6x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:chemical_dissolution_chamber')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/chemical_infuser')
        .itemInputs([
            'mekanism:steel_casing',
            'gtceu:luv_conveyor_module',
            'gtceu:luv_electric_motor',
            '6x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv',
            '4x #forge:plates/alloy_infused'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:chemical_infuser')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/chemical_oxidizer')
        .itemInputs([
            'mekanism:steel_casing',
            'gtceu:luv_electric_motor',
            'gtceu:luv_conveyor_module',
            '4x #forge:rods/alloy_infused',
            '4x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:chemical_oxidizer')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/chemical_washer')
        .itemInputs([
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_pump',
            '#forge:frames/refined_obsidian',
            'gtceu:luv_electric_motor',
            '2x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:chemical_washer')
        .duration(1000)
        .EUt(LuV);

    allthemods.shaped('mekanism:electrolytic_separator', [
        'PUP',
        'CHC',
        'PRP'
    ], {
        P: '#forge:plates/stainless_steel',
        U: 'gtceu:hv_electric_pump',
        C: '#gtceu:circuits/hv',
        H: 'gtceu:hv_machine_hull',
        R: 'mekanism:electrolytic_core'
    }).id('gregification:mekanism/electrolytic_separator')

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/isotopic_centrifuge')
        .itemInputs([
            'mekanism:steel_casing',
            'gtceu:luv_electric_pump',
            '6x #forge:plates/hafnium',
            '6x #forge:double_plates/graphite',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv'
        ])
        .inputFluids(['#forge:polytetrafluoroethylene 144', '#forge:lubricant 1440', '#forge:soldering_alloy 1440'])
        .itemOutputs('mekanism:isotopic_centrifuge')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/pressurized_reaction_chamber')
        .itemInputs([
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_piston',
            '2x gtceu:luv_electric_pump',
            '4x #forge:plates/hafnium',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:pressurized_reaction_chamber')
        .duration(1000)
        .EUt(LuV);

    allthemods.shaped('mekanism:rotary_condensentrator', [
        'GCG',
        'TH#',
        'PCP'
    ], {
        G: 'gtceu:laminated_glass',
        C: '#gtceu:circuits/hv',
        T: 'mekanism:basic_chemical_tank',
        H: 'gtceu:hv_machine_hull',
        '#': 'mekanism:basic_fluid_tank',
        P: '#forge:plates/stainless_steel'
    }).id('gregification:mekanism/rotary_condensentrator')

    allthemods.shaped('mekanism:solar_neutron_activator', [
        'A#A',
        'CXC',
        'III'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/zpm',
        X: 'mekanism:steel_casing',
        I: '#forge:plates/naquadah_alloy'
    }).id('gregification:mekanism/solar_neutron_activator')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/chemical_injection_chamber')
        .itemInputs([
            'mekanism:steel_casing',
            '2x gtceu:luv_conveyor_module',
            'gtceu:luv_electric_pump',
            '2x #gtceu:circuits/luv',
            '4x #forge:plates/hafnium',
            '2x gtceu:laminated_glass'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:chemical_injection_chamber')
        .duration(1000)
        .EUt(LuV);

    allthemods.shaped('mekanism:combiner', [
        'PIP',
        'CHC',
        'POP'
    ], {
        P: '#forge:plates/osmiridium',
        I: 'gtceu:iv_electric_piston',
        C: '#gtceu:circuits/iv',
        H: 'gtceu:iv_machine_hull',
        O: 'gtceu:iv_conveyor_module'
    }).id('gregification:mekanism/combiner')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/crusher')
        .itemInputs([
            'mekanism:steel_casing',
            'gtceu:tungsten_grinding_head',
            'gtceu:luv_electric_motor',
            'gtceu:luv_electric_piston',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:crusher')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/energized_smelter')
        .itemInputs([
            'mekanism:steel_casing',
            '4x #gtceu:wires/quadruple/hssg',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:energized_smelter')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/enrichment_chamber')
        .itemInputs([
            'mekanism:steel_casing',
            '4x #forge:rods/rhodium_plated_palladium',
            '4x #forge:plates/hafnium',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:enrichment_chamber')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/metallurgic_infuser')
        .itemInputs([
            'mekanism:steel_casing',
            '#forge:frames/rhodium_plated_palladium',
            'gtceu:luv_electric_pump',
            'gtceu:luv_electric_motor',
            '2x gtceu:luv_conveyor_module',
            '2x #gtceu:circuits/luv',
            '4x #forge:plates/hafnium',
            '2x gtceu:laminated_glass'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:metallurgic_infuser')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/osmium_compressor')
        .itemInputs([
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_piston',
            '4x #forge:rods/hafnium',
            '4x #forge:plates/rhodium_plated_palladium',
            '2x gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:osmium_compressor')
        .duration(1000)
        .EUt(LuV);

    allthemods.shaped('mekanism:precision_sawmill', [
        'PBP',
        'THV',
        'PCP'
    ], {
        P: '#forge:plates/stainless_steel',
        B: 'gtceu:red_steel_buzz_saw_blade',
        T: 'gtceu:hv_electric_piston',
        H: 'gtceu:hv_machine_hull',
        V: 'gtceu:hv_conveyor_module',
        C: '#gtceu:circuits/hv'
    }).id('gregification:mekanism/precision_sawmill')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/purification_chamber')
        .itemInputs([
            'mekanism:enrichment_chamber',
            '4x #forge:plates/osmiridium',
            '4x #forge:plates/hafnium',
            '2x #gtceu:circuits/luv'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:purification_chamber')
        .duration(1000)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/laser')
        .itemInputs([
            'mekanism:steel_casing',
            '#forge:frames/strontium_aluminate',
            '4x #forge:plates/alloy_infused',
            '4x #gtceu:wires/double/bismuth_strontium_calcium_copper_oxide',
            '#forge:lenses/neodymium_doped_yttrium_aluminium_garnet',
            '2x #gtceu:circuits/luv'
        ])
        .inputFluids(['#forge:polyimide 288', '#forge:zirconium 576', '#forge:promethium 576'])
        .itemOutputs('mekanism:laser')
        .duration(800)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/laser_amplifier')
        .itemInputs([
            'mekanism:steel_casing',
            '#forge:frames/strontium_aluminate',
            '#forge:lenses/praseodymium_doped_yttrium_aluminium_garnet',
            '4x #gtceu:wires/double/bismuth_strontium_calcium_copper_oxide',
            '3x #forge:plates/alloy_reinforced',
            '8x #forge:plates/neodymium_dysprosium'
        ])
        .inputFluids(['#forge:polyimide 288', '#forge:zirconium 576', '#forge:gadolinium 576'])
        .itemOutputs('mekanism:laser_amplifier')
        .duration(800)
        .EUt(LuV);

    allthemods.shaped('mekanism:painting_machine', [
        'PBP',
        'PHP',
        'PCP'
    ], {
        P: '#forge:plates/stainless_steel',
        B: 'botania:lens_paint',
        H: 'gtceu:hv_machine_hull',
        C: '#gtceu:circuits/hv'
    }).id('gregification:mekanism/painting_machine')

    allthemods.shaped('mekanism:pigment_extractor', [
        'PCP',
        'GHG',
        'PBP'
    ], {
        P: '#forge:plates/stainless_steel',
        C: '#gtceu:circuits/hv',
        G: 'gtceu:tempered_glass',
        H: 'gtceu:hv_machine_hull',
        B: 'botania:lens_paint'
    }).id('gregification:mekanism/pigment_extractor')

    allthemods.shaped('mekanism:pigment_mixer', [
        'PCP',
        'BHB',
        'PCP'
    ], {
        P: '#forge:plates/stainless_steel',
        C: '#gtceu:circuits/hv',
        B: 'botania:lens_paint',
        H: 'gtceu:hv_machine_hull'
    }).id('gregification:mekanism/pigment_mixer')

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/portable_teleporter')
        .itemInputs([
            '2x #gtceu:circuits/luv',
            '2x mekanism:energy_tablet',
            'mekanism:teleportation_core',
            '4x #gtceu:wires/bismuth_strontium_calcium_copper_oxide',
            'gtceu:luv_field_generator'
        ])
        .inputFluids(['#forge:selenium 576', '#forge:bismuth_gold 576'])
        .itemOutputs('mekanism:portable_teleporter')
        .duration(600)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/teleportation_core')
        .itemInputs([
            '4x gtceu:luv_field_generator',
            '64x #forge:rings/hafnium',
            '4x #gtceu:circuits/luv',
            '16x #forge:plates/alloy_infused',
            'waystones:warp_stone',
            'gtceu:luv_sensor',
            'gtceu:luv_emitter',
            '16x #forge:plates/strontium_ferrite'
        ])
        .inputFluids(['#forge:selenium 576', '#forge:bismuth_gold 576'])
        .itemOutputs('mekanism:teleportation_core')
        .duration(600)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/teleporter')
        .itemInputs([
            'mekanism:steel_casing',
            'mekanism:teleportation_core',
            'gtceu:luv_emitter',
            'gtceu:luv_sensor',
            '4x #forge:plates/hafnium',
            '4x #gtceu:circuits/luv',
            '4x #forge:plates/alloy_infused'
        ])
        .inputFluids(['#forge:selenium 576', '#forge:bismuth_gold 576'])
        .itemOutputs('mekanism:teleporter')
        .duration(600)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/teleporter_frame')
        .itemInputs([
            'mekanism:steel_casing',
            '8x #forge:rods/rhodium_plated_palladium'
        ])
        .inputFluids('#forge:zirconium 576')
        .itemOutputs('9x mekanism:teleporter_frame')
        .duration(600)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/digital_miner')
        .itemInputs([
            'mekanism:steel_casing',
            '2x gtceu:luv_robot_arm',
            '2x gtceu:luv_sensor',
            'gtceu:luv_field_generator',
            '16x #forge:plates/hafnium',
            '4x #gtceu:circuits/luv',
            '8x #forge:plates/alloy_infused',
            '#occultism:miners/eldritch'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:digital_miner')
        .duration(1000)
        .EUt(LuV);

    allthemods.shaped('mekanism:seismic_reader', [
        'S#S',
        'SES',
        'SSS'
    ], {
        S: '#forge:plates/steel',
        '#': '#gtceu:circuits/lv',
        E: '#gtceu:batteries/lv'
    }).id('gregification:mekanism/seismic_reader')

    allthemods.shaped('mekanism:seismic_vibrator', [
        'I#I',
        'CHC',
        'III'
    ], {
        I: '#forge:plates/aluminum',
        '#': 'gtceu:mv_sensor',
        C: '#gtceu:circuits/mv',
        H: 'gtceu:mv_machine_hull'
    }).id('gregification:mekanism/seismic_vibrator')

    allthemods.shaped('mekanism:fuelwood_heater', [
        'SCS',
        '#H#',
        'SSS'
    ], {
        S: '#forge:plates/stainless_steel',
        C: '#gtceu:circuits/hv',
        '#': 'gtceu:kanthal_coil_block',
        H: 'gtceu:hv_machine_hull'
    }).id('gregification:mekanism/fuelwood_heater')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/resistive_heater')
        .itemInputs([
            'gtceu:iv_machine_hull',
            '4x gtceu:nichrome_coil_block',
            '4x #forge:plates/graphite',
            '2x gtceu:iv_electric_motor',
            '2x #gtceu:circuits/iv',
            '#forge:dense_plates/gadolinium'
        ])
        .inputFluids('#forge:soldering_alloy 1440')
        .itemOutputs('mekanism:resistive_heater')
        .duration(600)
        .EUt(IV);

    allthemods.shaped('mekanism:electric_pump', [
        'PMP',
        'PHP',
        'CUC'
    ], {
        P: '#forge:plates/stainless_steel',
        M: 'mekanism:basic_mechanical_pipe',
        H: 'gtceu:hv_machine_hull',
        C: '#gtceu:circuits/hv',
        U: 'gtceu:hv_electric_pump'
    }).id('gregification:mekanism/electric_pump')

    allthemods.shapeless('mekanism:basic_injecting_factory', [
        'mekanism:chemical_injection_chamber',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/injecting')

    allthemods.shapeless('mekanism:advanced_injecting_factory', [
        'mekanism:basic_injecting_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/injecting')

    allthemods.shapeless('mekanism:elite_injecting_factory', [
        'mekanism:advanced_injecting_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/injecting')

    allthemods.shapeless('mekanism:ultimate_injecting_factory', [
        'mekanism:elite_injecting_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/injecting')

    allthemods.shapeless('mekanism:basic_crushing_factory', [
        'mekanism:crusher',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/crushing')

    allthemods.shapeless('mekanism:advanced_crushing_factory', [
        'mekanism:basic_crushing_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/crushing')

    allthemods.shapeless('mekanism:elite_crushing_factory', [
        'mekanism:advanced_crushing_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/crushing')

    allthemods.shapeless('mekanism:ultimate_crushing_factory', [
        'mekanism:elite_crushing_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/crushing')

    allthemods.shapeless('mekanism:basic_smelting_factory', [
        'mekanism:energized_smelter',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/smelting')

    allthemods.shapeless('mekanism:advanced_smelting_factory', [
        'mekanism:basic_smelting_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/smelting')

    allthemods.shapeless('mekanism:elite_smelting_factory', [
        'mekanism:advanced_smelting_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/smelting')

    allthemods.shapeless('mekanism:ultimate_smelting_factory', [
        'mekanism:elite_smelting_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/smelting')

    allthemods.shapeless('mekanism:basic_enriching_factory', [
        'mekanism:enrichment_chamber',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/enriching')

    allthemods.shapeless('mekanism:advanced_enriching_factory', [
        'mekanism:basic_enriching_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/enriching')

    allthemods.shapeless('mekanism:elite_enriching_factory', [
        'mekanism:advanced_enriching_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/enriching')

    allthemods.shapeless('mekanism:ultimate_enriching_factory', [
        'mekanism:elite_enriching_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/enriching')

    allthemods.shapeless('mekanism:basic_compressing_factory', [
        'mekanism:osmium_compressor',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/compressing')

    allthemods.shapeless('mekanism:advanced_compressing_factory', [
        'mekanism:basic_compressing_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/compressing')

    allthemods.shapeless('mekanism:elite_compressing_factory', [
        'mekanism:advanced_compressing_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/compressing')

    allthemods.shapeless('mekanism:ultimate_compressing_factory', [
        'mekanism:elite_compressing_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/compressing')

    allthemods.shapeless('mekanism:basic_infusing_factory', [
        'mekanism:metallurgic_infuser',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/infusing')

    allthemods.shapeless('mekanism:advanced_infusing_factory', [
        'mekanism:basic_infusing_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/infusing')

    allthemods.shapeless('mekanism:elite_infusing_factory', [
        'mekanism:advanced_infusing_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/infusing')

    allthemods.shapeless('mekanism:ultimate_infusing_factory', [
        'mekanism:elite_infusing_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/infusing')

    allthemods.shapeless('mekanism:basic_sawing_factory', [
        'mekanism:precision_sawmill',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/sawing')

    allthemods.shapeless('mekanism:advanced_sawing_factory', [
        'mekanism:basic_sawing_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/sawing')

    allthemods.shapeless('mekanism:elite_sawing_factory', [
        'mekanism:advanced_sawing_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/sawing')

    allthemods.shapeless('mekanism:ultimate_sawing_factory', [
        'mekanism:elite_sawing_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/sawing')

    allthemods.shapeless('mekanism:basic_purifying_factory', [
        'mekanism:purification_chamber',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/purifying')

    allthemods.shapeless('mekanism:advanced_purifying_factory', [
        'mekanism:basic_purifying_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/purifying')

    allthemods.shapeless('mekanism:elite_purifying_factory', [
        'mekanism:advanced_purifying_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/purifying')

    allthemods.shapeless('mekanism:ultimate_purifying_factory', [
        'mekanism:elite_purifying_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/purifying')

    allthemods.shapeless('mekanism:basic_combining_factory', [
        'mekanism:combiner',
        'mekanism:basic_tier_installer'
    ]).id('gregification:mekanism/factory/basic/combining')

    allthemods.shapeless('mekanism:advanced_combining_factory', [
        'mekanism:basic_combining_factory',
        'mekanism:advanced_tier_installer'
    ]).id('gregification:mekanism/factory/advanced/combining')

    allthemods.shapeless('mekanism:elite_combining_factory', [
        'mekanism:advanced_combining_factory',
        'mekanism:elite_tier_installer'
    ]).id('gregification:mekanism/factory/elite/combining')

    allthemods.shapeless('mekanism:ultimate_combining_factory', [
        'mekanism:elite_combining_factory',
        'mekanism:ultimate_tier_installer'
    ]).id('gregification:mekanism/factory/ultimate/combining')

    allthemods.shaped('2x mekanism:diversion_transporter', [
        'RCR',
        'SGS',
        'RCR'
    ], {
        R: '#forge:plates/redstone',
        C: '#gtceu:circuits/lv',
        S: 'mekanism:basic_logistical_transporter',
        G: '#forge:glass/silica'
    }).id('gregification:mekanism/transmitter/diversion_transporter')

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/logistical_sorter')
        .itemInputs([
            '4x mekanism:basic_logistical_transporter',
            'gtceu:lv_sensor',
            'gtceu:lv_electric_motor',
            'gtceu:lv_conveyor_module',
            '4x #forge:plates/steel'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('mekanism:logistical_sorter')
        .duration(1000)
        .EUt(LV);

    allthemods.shaped('mekanism:qio_exporter', [
        'HVH',
        'C#C',
        'WPW'
    ], {
        H: '#forge:plates/hafnium',
        V: 'gtceu:luv_conveyor_module',
        C: '#gtceu:circuits/luv',
        '#': 'gtceu:luv_emitter',
        W: '#gtceu:wires/single/bismuth_strontium_calcium_copper_oxide',
        P: 'gtceu:luv_electric_piston'
    }).id('gregification:mekanism/qio_exporter')

    allthemods.shaped('mekanism:qio_importer', [
        'HVH',
        'C#C',
        'WRW'
    ], {
        H: '#forge:plates/hafnium',
        V: 'gtceu:luv_conveyor_module',
        C: '#gtceu:circuits/luv',
        '#': 'gtceu:luv_sensor',
        W: '#gtceu:wires/single/bismuth_strontium_calcium_copper_oxide',
        R: 'gtceu:luv_robot_arm'
    }).id('gregification:mekanism/qio_importer')

    allthemods.shaped('2x mekanism:restrictive_transporter', [
        'S#S'
    ], {
        S: 'mekanism:basic_logistical_transporter',
        '#': 'minecraft:iron_bars'
    }).id('gregification:mekanism/transmitter/restrictive_transporter')

    allthemods.shaped('16x mekanism:basic_universal_cable', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/rubber',
        G: '#forge:glass/silica',
        L: 'gtceu:ulpic_chip',
        R: 'gtceu:lv_voltage_coil'
    }).id('gregification:mekanism/transmitter/universal_cable/basic')

    allthemods.shaped('16x mekanism:advanced_universal_cable', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polyethylene',
        G: 'gtceu:tempered_glass',
        L: 'gtceu:lpic_chip',
        R: 'gtceu:hv_voltage_coil'
    }).id('gregification:mekanism/transmitter/universal_cable/advanced')

    allthemods.shaped('16x mekanism:elite_universal_cable', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polytetrafluoroethylene',
        G: 'gtceu:laminated_glass',
        L: 'gtceu:hpic_chip',
        R: 'gtceu:iv_voltage_coil'
    }).id('gregification:mekanism/transmitter/universal_cable/elite')

    allthemods.shaped('16x mekanism:ultimate_universal_cable', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polybenzimidazole',
        G: 'gtceu:fusion_glass',
        L: 'gtceu:uhpic_chip',
        R: 'gtceu:zpm_voltage_coil'
    }).id('gregification:mekanism/transmitter/universal_cable/ultimate')

    allthemods.shaped('16x mekanism:basic_thermodynamic_conductor', [
        'PGP',
        'RMR',
        'PGP'
    ], {
        P: '#forge:plates/rubber',
        G: '#forge:glass/silica',
        R: '#gtceu:wires/double/kanthal',
        M: '#forge:foils/mica_insulator'
    }).id('gregification:mekanism/transmitter/thermodynamic_conductor/basic')

    allthemods.shaped('16x mekanism:advanced_thermodynamic_conductor', [
        'PGP',
        'RMR',
        'PGP'
    ], {
        P: '#forge:plates/polyethylene',
        G: 'gtceu:tempered_glass',
        R: '#gtceu:wires/double/nichrome',
        M: '#forge:foils/mica_insulator'
    }).id('gregification:mekanism/transmitter/thermodynamic_conductor/advanced')

    allthemods.shaped('16x mekanism:elite_thermodynamic_conductor', [
        'PGP',
        'RMR',
        'PGP'
    ], {
        P: '#forge:plates/polytetrafluoroethylene',
        G: 'gtceu:laminated_glass',
        R: '#gtceu:wires/double/rtm_alloy',
        M: '#forge:foils/mica_insulator'
    }).id('gregification:mekanism/transmitter/thermodynamic_conductor/elite')

    allthemods.shaped('16x mekanism:ultimate_thermodynamic_conductor', [
        'PGP',
        'RMR',
        'PGP'
    ], {
        P: '#forge:plates/polybenzimidazole',
        G: 'gtceu:fusion_glass',
        R: '#gtceu:wires/double/hssg',
        M: '#forge:foils/mica_insulator'
    }).id('gregification:mekanism/transmitter/thermodynamic_conductor/ultimate')

    allthemods.shaped('16x mekanism:basic_mechanical_pipe', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        P: '#forge:plates/rubber',
        G: '#forge:glass/silica',
        L: 'gtceu:lv_electric_pump',
        M: '#forge:foils/mica_insulator',
        R: '#create:valve_handles'
    }).id('gregification:mekanism/transmitter/mechanical_pipe/basic')

    allthemods.shaped('16x mekanism:advanced_mechanical_pipe', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        P: '#forge:plates/polyethylene',
        G: 'gtceu:tempered_glass',
        L: 'gtceu:hv_electric_pump',
        M: '#forge:foils/mica_insulator',
        R: '#create:valve_handles'
    }).id('gregification:mekanism/transmitter/mechanical_pipe/advanced')

    allthemods.shaped('16x mekanism:elite_mechanical_pipe', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        P: '#forge:plates/polytetrafluoroethylene',
        G: 'gtceu:laminated_glass',
        L: 'gtceu:iv_electric_pump',
        M: '#forge:foils/mica_insulator',
        R: '#create:valve_handles'
    }).id('gregification:mekanism/transmitter/mechanical_pipe/elite')

    allthemods.shaped('16x mekanism:ultimate_mechanical_pipe', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        P: '#forge:plates/polybenzimidazole',
        G: 'gtceu:fusion_glass',
        L: 'gtceu:zpm_electric_pump',
        M: '#forge:foils/mica_insulator',
        R: '#create:valve_handles'
    }).id('gregification:mekanism/transmitter/mechanical_pipe/ultimate')

    allthemods.shaped('16x mekanism:basic_pressurized_tube', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/rubber',
        G: '#forge:glass/silica',
        L: 'gtceu:lv_electric_pump',
        R: 'pneumaticcraft:safety_tube_module'
    }).id('gregification:mekanism/transmitter/pressurized_tube/basic')

    allthemods.shaped('16x mekanism:advanced_pressurized_tube', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polyethylene',
        G: 'gtceu:tempered_glass',
        L: 'gtceu:hv_electric_pump',
        R: 'pneumaticcraft:safety_tube_module'
    }).id('gregification:mekanism/transmitter/pressurized_tube/advanced')

    allthemods.shaped('16x mekanism:elite_pressurized_tube', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polytetrafluoroethylene',
        G: 'gtceu:laminated_glass',
        L: 'gtceu:iv_electric_pump',
        R: 'pneumaticcraft:safety_tube_module'
    }).id('gregification:mekanism/transmitter/pressurized_tube/elite')

    allthemods.shaped('16x mekanism:ultimate_pressurized_tube', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polybenzimidazole',
        G: 'gtceu:fusion_glass',
        L: 'gtceu:zpm_electric_pump',
        R: 'pneumaticcraft:safety_tube_module'
    }).id('gregification:mekanism/transmitter/pressurized_tube/ultimate')

    allthemods.shaped('16x mekanism:basic_logistical_transporter', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/rubber',
        G: '#forge:glass/silica',
        L: 'gtceu:lv_electric_piston',
        R: 'gtceu:lv_conveyor_module'
    }).id('gregification:mekanism/transmitter/logistical_transporter/basic')

    allthemods.shaped('16x mekanism:advanced_logistical_transporter', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polyethylene',
        G: 'gtceu:tempered_glass',
        L: 'gtceu:hv_electric_piston',
        R: 'gtceu:hv_conveyor_module'
    }).id('gregification:mekanism/transmitter/logistical_transporter/advanced')

    allthemods.shaped('16x mekanism:elite_logistical_transporter', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polytetrafluoroethylene',
        G: 'gtceu:laminated_glass',
        L: 'gtceu:iv_electric_piston',
        R: 'gtceu:iv_conveyor_module'
    }).id('gregification:mekanism/transmitter/logistical_transporter/elite')

    allthemods.shaped('16x mekanism:ultimate_logistical_transporter', [
        'PGP',
        'LMR',
        'PGP'
    ], {
        M: '#forge:foils/mica_insulator',
        P: '#forge:plates/polybenzimidazole',
        G: 'gtceu:fusion_glass',
        L: 'gtceu:zpm_electric_piston',
        R: 'gtceu:zpm_conveyor_module'
    }).id('gregification:mekanism/transmitter/logistical_transporter/ultimate')

    allthemods.shaped('4x mekanism:dynamic_tank', [
        'CSC',
        'S S',
        'CSC'
    ], {
        C: '#forge:plates/compressed_iron',
        S: '#forge:plates/iron'
    }).id('gregification:mekanism/dynamic_tank')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/personal_barrel')
        .itemInputs([
            '#forge:plates/osmiridium',
            'gtceu:tungsten_steel_crate',
            '#gtceu:circuits/iv'
        ])
        .itemOutputs('mekanism:personal_barrel')
        .circuit(1)
        .duration(200)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/personal_chest')
        .itemInputs([
            '#forge:plates/osmiridium',
            'gtceu:tungsten_steel_crate',
            '#gtceu:circuits/iv'
        ])
        .itemOutputs('mekanism:personal_chest')
        .circuit(2)
        .duration(200)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/energy_cube/basic')
        .itemInputs([
            'mekanism:steel_casing',
            '2x #forge:plates/osmiridium',
            'mekanism:energy_tablet',
            'gtceu:hpic_chip'
        ])
        .inputFluids('#forge:sodium_potassium 1000')
        .itemOutputs('mekanism:basic_energy_cube')
        .duration(200)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/energy_cube/advanced')
        .itemInputs([
            'mekanism:basic_energy_cube',
            '2x #forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ])
        .inputFluids('#forge:sodium_potassium 1000')
        .itemOutputs('mekanism:advanced_energy_cube')
        .duration(200)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/energy_cube/elite')
        .itemInputs([
            'mekanism:advanced_energy_cube',
            '2x #forge:plates/alloy_reinforced',
            'mekanism:energy_tablet'
        ])
        .inputFluids('#forge:sodium_potassium 1000')
        .itemOutputs('mekanism:elite_energy_cube')
        .duration(200)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/energy_cube/ultimate')
        .itemInputs([
            'mekanism:elite_energy_cube',
            '2x #forge:plates/alloy_atomic',
            'mekanism:energy_tablet'
        ])
        .inputFluids('#forge:sodium_potassium 1000')
        .itemOutputs('mekanism:ultimate_energy_cube')
        .duration(1000)
        .EUt(LuV);

    allthemods.shaped('mekanism:basic_chemical_tank', [
        'ARA',
        'G G',
        'AAA'
    ], {
        A: '#forge:plates/steel',
        R: 'pneumaticcraft:pressure_gauge',
        G: 'gtceu:tempered_glass'
    }).id('gregification:mekanism/chemical_tank/basic')

    allthemods.shaped('mekanism:advanced_chemical_tank', [
        'PRP',
        'G G',
        'PAP'
    ], {
        P: '#forge:plates/rhodium_plated_palladium',
        R: 'pneumaticcraft:pressure_gauge',
        G: 'gtceu:tempered_glass',
        A: '#forge:plates/alloy_infused'
    }).id('gregification:mekanism/chemical_tank/advanced')

    allthemods.shaped('mekanism:elite_chemical_tank', [
        'PRP',
        'G G',
        'PAP'
    ], {
        P: '#forge:plates/naquadah_alloy',
        R: 'pneumaticcraft:pressure_gauge',
        G: 'gtceu:tempered_glass',
        A: '#forge:plates/alloy_reinforced'
    }).id('gregification:mekanism/chemical_tank/elite')

    allthemods.shaped('mekanism:ultimate_chemical_tank', [
        'PRP',
        'G G',
        'PAP'
    ], {
        P: '#forge:plates/darmstadtium',
        R: 'pneumaticcraft:pressure_gauge',
        G: 'gtceu:tempered_glass',
        A: '#forge:plates/alloy_atomic'
    }).id('gregification:mekanism/chemical_tank/ultimate')

    allthemods.shaped('mekanism:basic_fluid_tank', [
        'PVP',
        'G G',
        'PPP'
    ], {
        P: '#forge:plates/iron',
        V: '#create:valve_handles',
        G: '#forge:glass/silica'
    }).id('gregification:mekanism/fluid_tank/basic')

    allthemods.shaped('mekanism:advanced_fluid_tank', [
        'PVP',
        'G G',
        'PPP'
    ], {
        P: '#forge:plates/steel',
        V: '#create:valve_handles',
        G: 'gtceu:tempered_glass'
    }).id('gregification:mekanism/fluid_tank/advanced')

    allthemods.shaped('mekanism:elite_fluid_tank', [
        'PVP',
        'G G',
        'PPP'
    ], {
        P: '#forge:plates/titanium',
        V: '#create:valve_handles',
        G: 'gtceu:laminated_glass'
    }).id('gregification:mekanism/fluid_tank/elite')

    allthemods.shaped('mekanism:ultimate_fluid_tank', [
        'PVP',
        'G G',
        'PPP'
    ], {
        P: '#forge:plates/osmiridium',
        V: '#create:valve_handles',
        G: 'gtceu:fusion_glass'
    }).id('gregification:mekanism/fluid_tank/ultimate')

    allthemods.shaped('mekanism:basic_bin', [
        'PCP',
        'G G',
        'PPP'
    ], {
        P: '#forge:plates/iron',
        C: 'gtceu:wood_crate',
        G: '#forge:glass/silica'
    }).id('gregification:mekanism/bin/basic')

    allthemods.shaped('mekanism:advanced_bin', [
        'PCP',
        'G G',
        'PPP'
    ], {
        P: '#forge:plates/steel',
        C: 'gtceu:steel_crate',
        G: 'gtceu:tempered_glass'
    }).id('gregification:mekanism/bin/advanced')

    allthemods.shaped('mekanism:elite_bin', [
        'PCP',
        'G G',
        'PPP'
    ], {
        P: '#forge:plates/titanium_carbide',
        C: 'gtceu:titanium_crate',
        G: 'gtceu:laminated_glass'
    }).id('gregification:mekanism/bin/elite')

    allthemods.shaped('mekanism:ultimate_bin', [
        'PCP',
        'G G',
        'PPP'
    ], {
        P: 'mekanism:elite_bin',
        C: 'gtceu:tungsten_steel_crate',
        G: 'gtceu:fusion_glass'
    }).id('gregification:mekanism/bin/ultimate')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/tier_installer/basic')
        .itemInputs([
            '#gtceu:circuits/iv',
            'mekanism:energy_tablet',
            '#gtceu:wires/uranium_triplatinum',
            '4x #forge:plates/osmiridium',
            '4x #forge:plates/hafnium'
        ])
        .inputFluids('#forge:argon 1000')
        .itemOutputs('mekanism:basic_tier_installer')
        .duration(600)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/tier_installer/advanced')
        .itemInputs([
            '#gtceu:circuits/luv',
            'mekanism:energy_tablet',
            '#gtceu:wires/samarium_iron_arsenic_oxide',
            '4x #forge:plates/alloy_infused',
            '4x #forge:plates/scandium'
        ])
        .inputFluids('#forge:neon 1000')
        .itemOutputs('mekanism:advanced_tier_installer')
        .duration(600)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/tier_installer/elite')
        .itemInputs([
            '#gtceu:circuits/zpm',
            'mekanism:energy_tablet',
            '#gtceu:wires/indium_tin_barium_titanium_cuprate',
            '4x #forge:plates/alloy_reinforced',
            '4x #forge:plates/thallium'
        ])
        .inputFluids('#forge:xenon 1000')
        .itemOutputs('mekanism:elite_tier_installer')
        .duration(600)
        .EUt(ZPM);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/tier_installer/ultimate')
        .itemInputs([
            '#gtceu:circuits/uv',
            'mekanism:energy_tablet',
            '#gtceu:wires/uranium_rhodium_dinaquadide',
            '4x #forge:plates/alloy_atomic',
            '4x #forge:plates/rubidium'
        ])
        .inputFluids('#forge:radon 1000')
        .itemOutputs('mekanism:ultimate_tier_installer')
        .duration(600)
        .EUt(UV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/upgrade/energy')
        .itemInputs([
            '2x #forge:plates/electrum',
            '#gtceu:circuits/iv',
            '#forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ])
        .inputFluids('#forge:polybenzimidazole 144')
        .itemOutputs('mekanism:upgrade_energy')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/upgrade/filter')
        .itemInputs([
            '2x #forge:plates/silver',
            '#gtceu:circuits/iv',
            '#forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ])
        .inputFluids('#forge:polybenzimidazole 144')
        .itemOutputs('mekanism:upgrade_filter')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/upgrade/gas')
        .itemInputs([
            '2x #forge:plates/titanium',
            '#gtceu:circuits/iv',
            '#forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ])
        .inputFluids('#forge:polybenzimidazole 144')
        .itemOutputs('mekanism:upgrade_gas')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/upgrade/muffling')
        .itemInputs([
            '2x #forge:plates/steel',
            '#gtceu:circuits/iv',
            '#forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ])
        .inputFluids('#forge:polybenzimidazole 144')
        .itemOutputs('mekanism:upgrade_muffling')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/upgrade/speed')
        .itemInputs([
            '2x #forge:plates/tungsten',
            '#gtceu:circuits/iv',
            '#forge:plates/alloy_infused',
            'mekanism:energy_tablet'
        ])
        .inputFluids('#forge:polybenzimidazole 144')
        .itemOutputs('mekanism:upgrade_speed')
        .duration(400)
        .EUt(IV);

    allthemods.shapeless('mekanism:crafting_formula', [
        'gtceu:blueprint_blank',
        '#gtceu:circuits/lv'
    ]).id('gregification:mekanism/crafting_formula')

    allthemods.recipes.gtceu.mixer('gregification:mekanism/dye_base')
        .itemInputs([
            '#forge:sawdust',
            '#forge:dusts/clay'
        ])
        .inputFluids('minecraft:water 250')
        .itemOutputs('mekanism:dye_base')
        .duration(200)
        .EUt(LV);

    allthemods.shaped('mekanism:electrolytic_core', [
        'AOA',
        'IA#',
        'AOA'
    ], {
        A: '#gtceu:circuits/hv',
        O: '#forge:plates/stainless_steel',
        I: '#forge:plates/compressed_iron',
        '#': '#forge:plates/gold'
    }).id('gregification:mekanism/electrolytic_core')

    allthemods.recipes.gtceu.canner('gregification:mekanism/energy_tablet')
        .itemInputs([
            '2x #forge:dusts/delta_plutonium_alloy',
            'gtceu:hv_battery_hull'
        ])
        .itemOutputs('mekanism:energy_tablet')
        .duration(200)
        .EUt(HV);

    allthemods.recipes.gtceu.lathe('gregification:mekanism/hdpe_rod')
        .itemInputs([
            'mekanism:hdpe_pellet'
        ])
        .itemOutputs('mekanism:hdpe_rod')
        .duration(200)
        .EUt(HV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/steel_casing')
        .itemInputs([
            'thermal:machine_frame',
            '4x #forge:plates/osmiridium',
            '4x #forge:frames/hafnium',
            '8x #forge:gears/plastic',
            '2x #forge:rods/hop_graphite'
        ])
        .inputFluids(['#forge:soldering_alloy 288', '#forge:lubricant 288'])
        .itemOutputs('mekanism:steel_casing')
        .scannerResearch('thermal:machine_frame')
        .duration(400)
        .EUt(LuV);

    allthemods.shaped('mekanism:supercharged_coil', [
        'ccc',
        'C#C',
        'AAA'
    ], {
        c: '#forge:plates/zirconium',
        C: '#gtceu:circuits/zpm',
        '#': 'mekanism:laser',
        A: '#forge:pellets/polonium'
    }).id('gregification:mekanism/supercharged_coil')

    allthemods.shaped('4x mekanism:boiler_casing', [
        'CSC',
        'S S',
        'CSC'
    ], {
        C: '#forge:plates/compressed_iron',
        S: '#forge:plates/steel'
    }).id('gregification:mekanism/boiler_casing')

    allthemods.shapeless('mekanism:boiler_valve', [
        'mekanism:boiler_casing',
        '#create:valve_handles'
    ]).id('gregification:mekanism/boiler_valve')

    allthemods.shapeless('mekanism:dynamic_valve', [
        'mekanism:dynamic_tank',
        '#create:valve_handles'
    ]).id('gregification:mekanism/dynamic_valve')

    allthemods.shaped('mekanism:pressure_disperser', [
        'S#S',
        '#A#',
        'S#S'
    ], {
        S: '#forge:plates/steel',
        '#': 'gtceu:zpm_machine_casing',
        A: '#forge:plates/alloy_reinforced'
    }).id('gregification:mekanism/pressure_disperser')

    allthemods.recipes.gtceu.forming_press('gregification:mekanism/structural_glass')
        .itemInputs([
            '2x gtceu:laminated_glass',
            '4x #forge:dusts/thallium_carbonate'
        ])
        .itemOutputs('mekanism:structural_glass')
        .duration(200)
        .EUt(IV);

    allthemods.shaped('mekanism:superheating_element', [
        'AIA',
        'IHI',
        'AIA'
    ], {
        A: '#forge:plates/compressed_iron',
        I: '#gtceu:wires/nichrome',
        H: 'gtceu:lv_machine_hull'
    }).id('gregification:mekanism/superheating_element')

    allthemods.recipes.gtceu.assembly_line('gregification:mekanism/sps_casing')
        .itemInputs([
            '4x mekanism:hdpe_sheet',
            '#forge:frames/strontium_aluminate',
            '4x #forge:plates/scandium',
            '2x #forge:plates/alloy_atomic',
            '#gtceu:circuits/uv'
        ])
        .inputFluids(['#forge:polyimide 1440', '#forge:lubricant 1440', '#forge:soldering_alloy 1440'])
        .itemOutputs('mekanism:sps_casing')
        .stationResearch(b => b.researchStack('mekanismgenerators:fusion_reactor_controller').EUt(UV / 4).CWUt(16))
        .duration(400)
        .EUt(UV);

    allthemods.shapeless('mekanism:sps_port', [
        'mekanism:sps_casing',
        'gtceu:uv_dual_input_hatch',
        '#gtceu:circuits/uv',
        '#forge:plates/alloy_atomic',
        '#forge:plates/alloy_atomic'
    ]).id('gregification:mekanism/sps_port')

    allthemods.shaped('mekanism:basic_induction_cell', [
        'PCP',
        'SES',
        'PCP'
    ], {
        P: '#forge:plates/polyethylene',
        C: '#gtceu:circuits/hv',
        S: '#forge:plates/stainless_steel',
        E: 'mekanism:energy_tablet'
    }).id('gregification:mekanism/induction/cell/basic')

    allthemods.shaped('mekanism:basic_induction_provider', [
        'PCP',
        'SES',
        'PCP'
    ], {
        P: '#forge:plates/polyethylene',
        C: '#gtceu:circuits/hv',
        S: '#forge:plates/stainless_steel',
        E: 'gtceu:nichrome_coil_block'
    }).id('gregification:mekanism/induction/provider/basic')

    allthemods.shaped('mekanism:advanced_induction_cell', [
        'PCP',
        'SES',
        'PCP'
    ], {
        P: '#forge:plates/polytetrafluoroethylene',
        C: '#gtceu:circuits/ev',
        S: '#forge:plates/titanium',
        E: 'mekanism:basic_induction_cell'
    }).id('gregification:mekanism/induction/cell/advanced')

    allthemods.shaped('mekanism:advanced_induction_provider', [
        'PCP',
        'SES',
        'PCP'
    ], {
        P: '#forge:plates/polytetrafluoroethylene',
        C: '#gtceu:circuits/ev',
        S: '#forge:plates/titanium',
        E: 'mekanism:basic_induction_provider'
    }).id('gregification:mekanism/induction/provider/advanced')

    allthemods.shaped('mekanism:elite_induction_cell', [
        'PCP',
        'SES',
        'PCP'
    ], {
        P: '#forge:plates/polybenzimidazole',
        C: '#gtceu:circuits/iv',
        S: '#forge:plates/tungsten_steel',
        E: 'mekanism:advanced_induction_cell'
    }).id('gregification:mekanism/induction/cell/elite')

    allthemods.shaped('mekanism:elite_induction_provider', [
        'PCP',
        'SES',
        'PCP'
    ], {
        P: '#forge:plates/polybenzimidazole',
        C: '#gtceu:circuits/iv',
        S: '#forge:plates/tungsten_steel',
        E: 'mekanism:advanced_induction_provider'
    }).id('gregification:mekanism/induction/provider/elite')

    allthemods.shaped('mekanism:ultimate_induction_cell', [
        'PCP',
        'SES',
        'PCP'
    ], {
        P: '#forge:plates/polyimide',
        C: '#gtceu:circuits/luv',
        S: '#forge:plates/rhodium_plated_palladium',
        E: 'mekanism:elite_induction_cell'
    }).id('gregification:mekanism/induction/cell/ultimate')

    allthemods.shaped('mekanism:ultimate_induction_provider', [
        'PCP',
        'SES',
        'PCP'
    ], {
        P: '#forge:plates/polyimide',
        C: '#gtceu:circuits/luv',
        S: '#forge:plates/rhodium_plated_palladium',
        E: 'mekanism:elite_induction_provider'
    }).id('gregification:mekanism/induction/provider/ultimate')

    allthemods.shaped('mekanism:induction_casing', [
        'PSP',
        'SHS',
        'PSP'
    ], {
        P: '#forge:plates/polyethylene',
        S: '#forge:plates/stainless_steel',
        H: 'gtceu:hv_machine_casing'
    }).id('gregification:mekanism/induction/casing')

    allthemods.shapeless('mekanism:induction_port', [
        'mekanism:induction_casing',
        'gtceu:hv_energy_input_hatch',
        '#gtceu:circuits/hv',
        '#forge:plates/stainless_steel',
        '#forge:plates/stainless_steel'
    ]).id('gregification:mekanism/induction/port')

    allthemods.shaped('4x mekanism:thermal_evaporation_block', [
        'CSC',
        'SWS',
        'CSC'
    ], {
        C: '#forge:plates/copper',
        S: '#forge:plates/steel',
        W: '#gtceu:wires/quadruple/kanthal'
    }).id('gregification:mekanism/thermal_evaporation/block')

    allthemods.shaped('mekanism:thermal_evaporation_controller', [
        'PCP',
        'WHW',
        'PCP'
    ], {
        P: '#forge:plates/copper',
        C: '#gtceu:circuits/mv',
        W: '#gtceu:wires/quadruple/kanthal',
        H: 'gtceu:mv_machine_hull'
    }).id('gregification:mekanism/thermal_evaporation/controller')

    allthemods.shapeless('mekanism:thermal_evaporation_valve', [
        'mekanism:thermal_evaporation_block',
        '#create:valve_handles'
    ]).id('gregification:mekanism/thermal_evaporation/valve')

    allthemods.shaped('mekanismgenerators:electromagnetic_coil', [
        'SES',
        'RHR',
        'SES'
    ], {
        S: '#forge:plates/osmiridium',
        E: 'mekanism:energy_tablet',
        R: '#forge:plates/alloy_reinforced',
        H: 'gtceu:zpm_machine_hull'
    }).id('gregification:mekanismgenerators/electromagnetic_coil')

    allthemods.shaped('mekanismgenerators:rotational_complex', [
        'AAA',
        'CHC',
        'ARA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        C: '#gtceu:circuits/zpm',
        H: 'gtceu:zpm_machine_hull',
        R: '#forge:rotors/naquadah_alloy'
    }).id('gregification:mekanismgenerators/rotational_complex')

    allthemods.shaped('mekanismgenerators:saturating_condenser', [
        'SPS',
        'PFP',
        'SPS'
    ], {
        S: '#forge:plates/osmiridium',
        P: '#forge:plates/polyimide',
        F: 'gtceu:fluid_filter'
    }).id('gregification:mekanismgenerators/saturating_condenser')

    allthemods.shaped('mekanismgenerators:turbine_blade', [
        'R',
        'B',
        'R'
    ], {
        R: '#forge:rods/naquadah_alloy',
        B: '#forge:rotors/naquadah_alloy'
    }).id('gregification:mekanismgenerators/turbine/blade')

    allthemods.shaped('mekanismgenerators:turbine_casing', [
        'PGP',
        'GHG',
        'PGP'
    ], {
        P: '#forge:plates/polyimide',
        G: '#forge:double_plates/graphite',
        H: '#forge:frames/naquadah_alloy'
    }).id('gregification:mekanismgenerators/turbine/casing')

    allthemods.shaped('mekanismgenerators:turbine_rotor', [
        'R',
        'R',
        'R'
    ], {
        R: '#forge:rods/naquadah_alloy'
    }).id('gregification:mekanismgenerators/turbine/rotor')

    allthemods.shapeless('mekanismgenerators:turbine_valve', [
        'mekanismgenerators:turbine_casing',
        'gtceu:zpm_input_hatch',
        '#gtceu:circuits/zpm'
    ]).id('gregification:mekanismgenerators/turbine/valve')

    allthemods.shaped('mekanismgenerators:turbine_vent', [
        'PFP',
        'FCF',
        'PFP'
    ], {
        P: '#forge:plates/polyimide',
        F: 'gtceu:fluid_filter',
        C: 'mekanismgenerators:turbine_casing'
    }).id('gregification:mekanismgenerators/turbine/vent')

    allthemods.recipes.gtceu.assembly_line('gregification:mekanismgenerators/reactor/controller')
        .itemInputs([
            'gtceu:luv_fusion_reactor',
            '4x gtceu:uv_field_generator',
            '2x gtceu:uv_electric_pump',
            '8x #gtceu:circuits/uv',
            '4x gtceu:fusion_glass',
            '16x #forge:plates/scandium',
            '8x #forge:plates/alloy_atomic',
            '8x #gtceu:wires/enriched_naquadah_trinium_europium_duranide'
        ])
        .inputFluids(['#forge:polyimide 1440', '#forge:lubricant 1440', '#forge:soldering_alloy 1440'])
        .itemOutputs('mekanismgenerators:fusion_reactor_controller')
        .stationResearch(b => b.researchStack('gtceu:luv_fusion_reactor').EUt(UV / 4).CWUt(20))
        .duration(1000)
        .EUt(UV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanismgenerators/reactor/frame')
        .itemInputs([
            '#forge:frames/strontium_aluminate',
            '16x #forge:plates/strontium_ferrite',
            '8x #gtceu:wires/enriched_naquadah_trinium_europium_duranide',
            '8x #forge:plates/alloy_atomic',
            '#forge:frames/darmstadtium'
        ])
        .inputFluids(['#forge:polyimide 1440', '#forge:lubricant 1440', '#forge:soldering_alloy 1440'])
        .itemOutputs('mekanismgenerators:fusion_reactor_frame')
        .stationResearch(b => b.researchStack('#forge:frames/strontium_aluminate').EUt(UV / 4).CWUt(20))
        .duration(400)
        .EUt(UV);

    allthemods.shapeless('mekanismgenerators:fusion_reactor_logic_adapter', [
        'mekanismgenerators:fusion_reactor_frame',
        '#gtceu:circuits/uv',
        '#forge:plates/alloy_atomic',
        '#forge:plates/alloy_atomic'
    ]).id('gregification:mekanismgenerators/reactor/logic_adapter')

    allthemods.shapeless('mekanismgenerators:fusion_reactor_port', [
        'mekanismgenerators:fusion_reactor_frame',
        '#gtceu:circuits/uv',
        'gtceu:uv_input_hatch',
        '#forge:plates/alloy_atomic',
        '#forge:plates/alloy_atomic'
    ]).id('gregification:mekanismgenerators/reactor/port')

    allthemods.recipes.gtceu.assembly_line('gregification:mekanismgenerators/laser_focus_matrix')
        .itemInputs([
            'mekanism:steel_casing',
            '#forge:frames/strontium_aluminate',
            '#forge:lenses/praseodymium_doped_yttrium_aluminium_garnet',
            '8x #forge:plates/alloy_atomic',
            '8x #forge:plates/neodymium_dysprosium',
            '2x #gtceu:circuits/uv'
        ])
        .itemOutputs('2x mekanismgenerators:laser_focus_matrix')
        .stationResearch(b => b.researchStack('mekanism:laser_amplifier').EUt(UV / 4).CWUt(20))
        .duration(800)
        .EUt(UV);

    allthemods.recipes.gtceu.forming_press('gregification:mekanismgenerators/reactor/glass')
        .itemInputs([
            'mekanism:structural_glass',
            '2x #forge:dusts/thallium_carbonate'
        ])
        .itemOutputs('mekanismgenerators:reactor_glass')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanismgenerators/fission_reactor/control_rod_assembly')
        .itemInputs([
            'mekanismgenerators:fission_reactor_casing',
            '2x #gtceu:circuits/luv',
            '4x #forge:plates/alloy_infused',
            '4x #forge:plates/lead',
            '4x #forge:rods/graphite'
        ])
        .inputFluids(['#forge:polyimide 1440', '#forge:lubricant 1440', '#forge:soldering_alloy 1440'])
        .itemOutputs('mekanismgenerators:control_rod_assembly')
        .stationResearch(b => b.researchStack('mekanismgenerators:fission_fuel_assembly').EUt(LuV / 4).CWUt(13))
        .duration(400)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanismgenerators/fission_reactor/fuel_assembly')
        .itemInputs([
            'mekanismgenerators:fission_reactor_casing',
            'mekanism:ultimate_chemical_tank',
            '4x #forge:plates/alloy_infused',
            '4x #forge:plates/lead',
            '4x #forge:rods/graphite'
        ])
        .inputFluids(['#forge:polyimide 1440', '#forge:lubricant 1440', '#forge:soldering_alloy 1440'])
        .itemOutputs('mekanismgenerators:fission_fuel_assembly')
        .stationResearch(b => b.researchStack('mekanismgenerators:fission_reactor_casing').EUt(LuV / 4).CWUt(16))
        .duration(400)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembly_line('gregification:mekanismgenerators/fission_reactor/casing')
        .itemInputs([
            'mekanism:steel_casing',
            '4x #forge:double_plates/hop_graphite',
            '4x #forge:rods/long/graphite',
            '16x #forge:double_plates/lead'
        ])
        .inputFluids(['#forge:polyimide 1440', '#forge:lubricant 1440', '#forge:soldering_alloy 1440'])
        .itemOutputs('mekanismgenerators:fission_reactor_casing')
        .scannerResearch('#forge:ingots/plutonium')
        .duration(400)
        .EUt(LuV);

    allthemods.shapeless('mekanismgenerators:fission_reactor_logic_adapter', [
        'mekanismgenerators:fission_reactor_casing',
        '#gtceu:circuits/luv',
        '#forge:plates/alloy_infused',
        '#forge:plates/alloy_infused'
    ]).id('gregification:mekanismgenerators/fission_reactor/logic_adapter')

    allthemods.shapeless('mekanismgenerators:fission_reactor_port', [
        'mekanismgenerators:fission_reactor_casing',
        'gtceu:luv_dual_input_hatch',
        '#gtceu:circuits/luv',
        '#forge:plates/alloy_infused',
        '#forge:plates/alloy_infused'
    ]).id('gregification:mekanismgenerators/fission_reactor/port')

    allthemods.shaped('mekanismgenerators:advanced_solar_generator', [
        'PPP',
        'AHA',
        'AAA'
    ], {
        P: 'mekanismgenerators:solar_generator',
        A: '#forge:plates/aluminum',
        H: 'gtceu:mv_machine_hull'
    }).id('gregification:mekanismgenerators/generator/advanced_solar')

    allthemods.shaped('mekanismgenerators:bio_generator', [
        'AAA',
        'CHC',
        'AWA'
    ], {
        A: '#forge:plates/aluminum',
        C: '#gtceu:circuits/mv',
        H: 'gtceu:mv_machine_hull',
        W: '#gtceu:wires/cadmium_copper'
    }).id('gregification:mekanismgenerators/generator/bio')

    allthemods.shaped('mekanismgenerators:gas_burning_generator', [
        'PRP',
        'CHC',
        'PTP'
    ], {
        P: '#forge:plates/tungsten_steel',
        R: '#forge:rotors/tungsten_steel',
        C: '#gtceu:circuits/iv',
        H: 'gtceu:iv_machine_hull',
        T: 'mekanismgenerators:bio_generator'
    }).id('gregification:mekanismgenerators/generator/gas_burning')

    allthemods.shaped('mekanismgenerators:heat_generator', [
        'PPP',
        'WHW',
        'CWC'
    ], {
        P: '#forge:plates/cupronickel',
        W: '#gtceu:wires/cadmium_copper',
        H: 'gtceu:mv_machine_hull',
        C: '#gtceu:circuits/mv'
    }).id('gregification:mekanismgenerators/generator/heat')

    allthemods.shaped('mekanismgenerators:solar_generator', [
        'SSS',
        'IHI',
        'ITI'
    ], {
        S: 'mekanismgenerators:solar_panel',
        I: '#forge:plates/wrought_iron',
        H: 'gtceu:lv_machine_hull',
        T: '#gtceu:cables/tin'
    }).id('gregification:mekanismgenerators/generator/solar')

    allthemods.shaped('3x mekanismgenerators:solar_panel', [
        'GGG',
        'SAS',
        'WWW'
    ], {
        G: '#forge:glass_panes',
        S: '#forge:plates/steel',
        A: 'pneumaticcraft:solar_cell',
        W: '#gtceu:cables/tin'
    }).id('gregification:mekanismgenerators/solar_panel')

    allthemods.shaped('mekanismgenerators:wind_generator', [
        ' A ',
        'SHS',
        'SCS'
    ], {
        A: 'pneumaticcraft:turbine_rotor',
        S: '#forge:plates/steel',
        H: 'gtceu:lv_machine_hull',
        C: '#gtceu:circuits/lv'
    }).id('gregification:mekanismgenerators/generator/wind')

    allthemods.shaped('mekanism:portable_qio_dashboard', [
        'ZWZ',
        'CDC',
        'ZTZ'
    ], {
        Z: '#forge:plates/zirconium',
        W: '#gtceu:wires/double/bismuth_strontium_calcium_copper_oxide',
        C: '#gtceu:circuits/zpm',
        D: 'mekanism:qio_dashboard',
        T: 'mekanism:teleportation_core'
    }).id('gregification:mekanism/portable_qio_dashboard')

    allthemods.shaped('mekanism:qio_dashboard', [
        'ZGZ',
        'W#W',
        'HCH'
    ], {
        Z: '#forge:plates/zirconium',
        G: 'gtceu:laminated_glass',
        W: '#gtceu:wires/single/bismuth_strontium_calcium_copper_oxide',
        '#': 'mekanism:teleportation_core',
        H: '#forge:plates/hafnium',
        C: '#gtceu:circuits/luv'
    }).id('gregification:mekanism/qio_dashboard')

    allthemods.shaped('mekanism:qio_redstone_adapter', [
        'ZDZ',
        'C#C',
        'HSH'
    ], {
        Z: '#forge:plates/zirconium',
        D: '#forge:dusts/redstone',
        C: '#gtceu:circuits/luv',
        '#': 'gtceu:luv_emitter',
        H: '#forge:plates/hafnium',
        S: 'gtceu:luv_sensor'
    }).id('gregification:mekanism/qio_redstone_adapter')

    allthemods.shaped('mekanism:qio_drive_array', [
        'HGH',
        'S#S',
        'WCW'
    ], {
        H: '#forge:plates/hafnium',
        G: 'gtceu:laminated_glass',
        S: '#mekanism:personal_storage',
        '#': 'mekanism:teleportation_core',
        W: '#gtceu:wires/single/bismuth_strontium_calcium_copper_oxide',
        C: '#gtceu:circuits/luv'
    }).id('gregification:mekanism/qio_drive_array')

    allthemods.shaped('mekanism:qio_drive_base', [
        'HCH',
        'W#W',
        'ZLZ'
    ], {
        H: '#forge:plates/tungsten_steel',
        C: '#gtceu:circuits/iv',
        W: '#gtceu:wires/single/bismuth_strontium_calcium_copper_oxide',
        '#': '#forge:pellets/polonium',
        Z: '#forge:plates/zirconium',
        L: '#forge:plates/lead'
    }).id('gregification:mekanism/qio_drive_base')

    allthemods.shaped('mekanism:qio_drive_hyper_dense', [
        'WBW',
        'BDB',
        'WBW'
    ], {
        W: '#gtceu:wires/double/bismuth_strontium_calcium_copper_oxide',
        B: 'mekanism:qio_drive_base',
        D: '#forge:plates/stabilized_clathrate'
    }).id('gregification:mekanism/qio_drive_hyper_dense')

    allthemods.shaped('mekanism:qio_drive_supermassive', [
        'FTF',
        'TAT',
        'FTF'
    ], {
        F: 'gtceu:zpm_field_generator',
        T: 'mekanism:qio_drive_time_dilating',
        A: '#forge:pellets/antimatter'
    }).id('gregification:mekanism/qio_drive_supermassive')

    allthemods.shaped('mekanism:qio_drive_time_dilating', [
        'CHC',
        'HEH',
        'CHC'
    ], {
        C: '#gtceu:circuits/zpm',
        H: 'mekanism:qio_drive_hyper_dense',
        E: '#forge:plates/stabilized_clathrate'
    }).id('gregification:mekanism/qio_drive_time_dilating')

    allthemods.shaped('mekanism:module_attack_amplification_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'minecraft:iron_sword',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_attack_amplification_unit')

    allthemods.shaped('mekanism:module_blasting_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_atomic',
        '#': 'minecraft:tnt',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_blasting_unit')

    allthemods.shaped('mekanism:module_charge_distribution_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanism:basic_induction_provider',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_charge_distribution_unit')

    allthemods.shaped('mekanism:module_color_modulation_unit', [
        'A#A',
        'MPO',
        'ACA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'mekanism:laser',
        M: 'mekanism:pigment_mixer',
        O: 'mekanism:painting_machine',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_color_modulation_unit')

    allthemods.shaped('mekanism:module_dosimeter_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'mekanism:dosimeter',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_dosimeter_unit')

    allthemods.shaped('mekanism:module_electrolytic_breathing_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'mekanism:electrolytic_core',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_electrolytic_breathing_unit')

    allthemods.shaped('mekanism:module_elytra_unit', [
        'A#A',
        'CPC',
        'ANA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanism:hdpe_elytra',
        N: '#forge:pellets/antimatter',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_elytra_unit')

    allthemods.shaped('mekanism:module_energy_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'mekanism:basic_induction_cell',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_energy_unit')

    allthemods.shaped('mekanism:module_excavation_escalation_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'minecraft:iron_pickaxe',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_excavation_escalation_unit')

    allthemods.shaped('mekanism:module_farming_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'minecraft:iron_hoe',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_farming_unit')

    allthemods.shaped('mekanism:module_fortune_unit', [
        'A#A',
        'DPD',
        'ACA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': '#forge:storage_blocks/refined_glowstone',
        D: '#forge:storage_blocks/diamond',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_fortune_unit')

    allthemods.shaped('mekanism:module_frost_walker_unit', [
        'A#A',
        'CPC',
        'A#A'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanism:hydrogen_bucket',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_frost_walker_unit')

    allthemods.shaped('mekanism:module_geiger_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'mekanism:geiger_counter',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base',
        H: 'mekanism:hdpe_sheet'
    }).id('gregification:mekanism/module_geiger_unit')

    allthemods.shaped('mekanismgenerators:module_geothermal_generator_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanismgenerators:heat_generator',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanismgenerators/module_geothermal_generator_unit')

    allthemods.shaped('mekanism:module_gravitational_modulating_unit', [
        'A#A',
        'EPE',
        'ACA'
    ], {
        A: '#forge:plates/alloy_atomic',
        '#': '#forge:nether_stars',
        E: 'mekanism:ultimate_induction_provider',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_gravitational_modulating_unit')

    allthemods.shaped('mekanism:module_gyroscopic_stabilization_unit', [
        'A#A',
        'CPC',
        'A#A'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'minecraft:obsidian',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_gyroscopic_stabilization_unit')

    allthemods.shaped('mekanism:module_hydraulic_propulsion_unit', [
        'A#A',
        'EPE',
        'ACA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanism:free_runners',
        E: 'mekanism:energy_tablet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_hydraulic_propulsion_unit')

    allthemods.shaped('mekanism:module_hydrostatic_repulsor_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'minecraft:lightning_rod',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_hydrostatic_repulsor_unit')

    allthemods.shaped('mekanism:module_inhalation_purification_unit', [
        'A#A',
        'CPC',
        'AoA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanism:hazmat_mask',
        o: 'mekanism:scuba_mask',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_inhalation_purification_unit')

    allthemods.shaped('mekanism:module_jetpack_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanism:jetpack',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_jetpack_unit')

    allthemods.shaped('mekanism:module_laser_dissipation_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'mekanism:laser_amplifier',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_laser_dissipation_unit')

    allthemods.shaped('mekanism:module_locomotive_boosting_unit', [
        'A#A',
        'EPE',
        'ACA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'minecraft:diamond_leggings',
        E: 'mekanism:energy_tablet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_locomotive_boosting_unit')

    allthemods.shaped('mekanism:module_magnetic_attraction_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'minecraft:iron_bars',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_magnetic_attraction_unit')

    allthemods.shaped('mekanism:module_motorized_servo_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'minecraft:blue_ice',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_motorized_servo_unit')

    allthemods.shaped('mekanism:module_nutritional_injection_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanism:canteen',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_nutritional_injection_unit')

    allthemods.shaped('mekanism:module_radiation_shielding_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': '#forge:storage_blocks/lead',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_radiation_shielding_unit')

    allthemods.shaped('mekanism:module_shearing_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_infused',
        '#': 'minecraft:shears',
        H: 'mekanism:hdpe_sheet',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_shearing_unit')

    allthemods.shaped('mekanism:module_silk_touch_unit', [
        'A#A',
        'DPD',
        'ACA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': '#forge:storage_blocks/refined_glowstone',
        D: 'minecraft:diamond_pickaxe',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_silk_touch_unit')

    allthemods.shaped('mekanismgenerators:module_solar_recharging_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'mekanismgenerators:advanced_solar_generator',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanismgenerators/module_solar_recharging_unit')

    allthemods.shaped('mekanism:module_teleportation_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_atomic',
        '#': 'mekanism:teleportation_core',
        H: '#forge:pellets/antimatter',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_teleportation_unit')

    allthemods.shaped('mekanism:module_vein_mining_unit', [
        'A#A',
        'xPs',
        'ACA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'minecraft:diamond_pickaxe',
        x: 'minecraft:diamond_axe',
        s: 'minecraft:diamond_shovel',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_vein_mining_unit')

    allthemods.shaped('mekanism:module_vision_enhancement_unit', [
        'A#A',
        'CPC',
        'AHA'
    ], {
        A: '#forge:plates/alloy_reinforced',
        '#': 'minecraft:emerald',
        H: '#forge:pellets/polonium',
        C: '#gtceu:circuits/luv',
        P: 'mekanism:module_base'
    }).id('gregification:mekanism/module_vision_enhancement_unit')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/module_base')
        .itemInputs([
            'mekanism:hdpe_sheet',
            '#gtceu:circuits/luv',
            '4x #forge:ingots/ferrognetic',
            '4x mekanism:alloy_atomic'
        ])
        .itemOutputs('mekanism:module_base')
        .duration(600)
        .EUt(LuV);

    allthemods.shaped('mekanism:atomic_disassembler', [
        'ITI',
        'IAI',
        ' P '
    ], {
        I: 'mekanism:alloy_atomic',
        T: 'mekanism:energy_tablet',
        A: '#gtceu:circuits/zpm',
        P: 'gtceu:atomic_core'
    }).id('gregification:mekanism/atomic_disassembler')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/canteen')
        .itemInputs([
            'minecraft:bowl',
            '4x #forge:plates/tin'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('mekanism:canteen')
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/configuration_card')
        .itemInputs([
            '#gtceu:circuits/mv',
            '2x #forge:plates/aluminum',
            'gtceu:mv_emitter'
        ])
        .inputFluids('#forge:polyethylene 144')
        .itemOutputs('mekanism:configuration_card')
        .circuit(2)
        .duration(100)
        .EUt(MV);

    allthemods.shaped('mekanism:configurator', [
        ' D ',
        ' S ',
        'RCR'
    ], {
        D: '#forge:plates/diamond',
        S: '#forge:rods/steel',
        R: '#forge:plates/rubber',
        C: '#gtceu:circuits/lv'
    }).id('gregification:mekanism/configurator')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/dictionary')
        .itemInputs([
            'minecraft:book',
            '#gtceu:circuits/mv',
            '6x #forge:foils/polyethylene'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('mekanism:dictionary')
        .circuit(4)
        .duration(200)
        .EUt(MV);

    allthemods.shaped('mekanism:dosimeter', [
        'III',
        'INI',
        'ICI'
    ], {
        I: '#forge:plates/lead',
        N: 'gtceu:mv_sensor',
        C: '#gtceu:circuits/mv'
    }).id('gregification:mekanism/dosimeter')

    allthemods.shaped('mekanism:gauge_dropper', [
        'G',
        'G',
        'R'
    ], {
        G: '#forge:glass_panes',
        R: '#forge:plates/rubber'
    }).id('gregification:mekanism/gauge_dropper')

    allthemods.recipes.gtceu.assembler('gregification:mekanism/geiger_counter')
        .itemInputs([
            '5x #forge:dusts/bismuth_germanate',
            '#gtceu:circuits/iv',
            '4x #forge:plates/lead'
        ])
        .inputFluids('#forge:soldering_alloy 288')
        .itemOutputs('mekanism:geiger_counter')
        .circuit(3)
        .duration(600)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:mekanism/network_reader')
        .itemInputs([
            '#forge:plates/alloy_infused',
            'mekanism:energy_tablet',
            'gtceu:iv_sensor'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('mekanism:network_reader')
        .circuit(5)
        .duration(200)
        .EUt(IV);

    allthemods.shaped('mekanism:flamethrower', [
        'III',
        'ITS',
        '#C#'
    ], {
        I: '#forge:plates/tin',
        T: 'mekanism:basic_chemical_tank',
        S: 'minecraft:flint_and_steel',
        '#': '#forge:plates/bronze',
        C: '#gtceu:circuits/mv'
    }).id('gregification:mekanism/flamethrower')

    allthemods.shaped('mekanism:free_runners', [
        'CFC',
        'A A',
        'E E'
    ], {
        C: '#gtceu:circuits/iv',
        F: '#forge:frames/tungsten_carbide',
        A: '#forge:plates/alloy_infused',
        E: 'mekanism:energy_tablet'
    }).id('gregification:mekanism/free_runners')

    allthemods.shaped('mekanism:free_runners_armored', [
        'PRP',
        'PEP',
        'P P'
    ], {
        P: '#forge:plates/osmiridium',
        R: 'mekanism:free_runners',
        E: 'mekanism:energy_tablet'
    }).id('gregification:mekanism/free_runners_armored')

    allthemods.shaped('mekanism:hazmat_boots', [
        'ILI',
        'I I'
    ], {
        I: '#forge:plates/lead',
        L: 'minecraft:leather_boots'
    }).id('gregification:mekanism/hazmat_boots')

    allthemods.shaped('mekanism:hazmat_gown', [
        'ILI',
        'III',
        'III'
    ], {
        I: '#forge:plates/lead',
        L: 'minecraft:leather_chestplate'
    }).id('gregification:mekanism/hazmat_gown')

    allthemods.shaped('mekanism:hazmat_mask', [
        'III',
        'ILI'
    ], {
        I: '#forge:plates/lead',
        L: 'minecraft:leather_helmet'
    }).id('gregification:mekanism/hazmat_mask')

    allthemods.shaped('mekanism:hazmat_pants', [
        'III',
        'ILI',
        'I I'
    ], {
        I: '#forge:plates/lead',
        L: 'minecraft:leather_leggings'
    }).id('gregification:mekanism/hazmat_pants')

    allthemods.shaped('mekanism:hdpe_elytra', [
        'AHA',
        'HPH',
        'H H'
    ], {
        A: '#forge:plates/alloy_infused',
        H: 'mekanism:hdpe_sheet',
        P: 'minecraft:elytra'
    }).id('gregification:mekanism/hdpe_elytra')

    allthemods.shaped('mekanism:jetpack', [
        'SCS',
        'I I',
        'T T'
    ], {
        S: '#forge:plates/tungsten_carbide',
        C: '#gtceu:circuits/iv',
        I: '#forge:plates/alloy_infused',
        T: 'mekanism:basic_chemical_tank'
    }).id('gregification:mekanism/jetpack')

    allthemods.shaped('mekanism:jetpack_armored', [
        '#P#',
        '#S#'
    ], {
        '#': '#forge:plates/osmiridium',
        P: 'mekanism:jetpack',
        S: '#forge:plates/alloy_infused'
    }).id('gregification:mekanism/jetpack_armored')

    allthemods.shaped('mekanism:scuba_mask', [
        ' S ',
        'GCG',
        'S S'
    ], {
        S: '#forge:foils/polyethylene',
        G: '#forge:glass/silica',
        C: '#gtceu:circuits/mv'
    }).id('gregification:mekanism/scuba_mask')

    allthemods.shaped('mekanism:scuba_tank', [
        ' C ',
        'ATA',
        'SSS'
    ], {
        C: '#gtceu:circuits/mv',
        A: '#forge:plates/aluminum',
        T: 'mekanism:basic_chemical_tank',
        S: '#forge:plates/steel'
    }).id('gregification:mekanism/scuba_tank')

    allthemods.shaped('mekanism:block_refined_glowstone', [
        '###',
        '###',
        '###'
    ], {
        '#': '#forge:ingots/refined_glowstone'
    }).id('gregification:mekanism/storage_blocks/refined_glowstone')

    allthemods.shaped('mekanism:block_refined_obsidian', [
        '###',
        '###',
        '###'
    ], {
        '#': '#forge:ingots/refined_obsidian'
    }).id('gregification:mekanism/storage_blocks/refined_obsidian')

    allthemods.shaped('mekanism:fluidic_plenisher', [
        'PUP',
        'PHP',
        'CMC'
    ], {
        P: '#forge:plates/stainless_steel',
        U: 'gtceu:hv_electric_pump',
        H: 'gtceu:hv_machine_hull',
        C: '#gtceu:circuits/hv',
        M: 'mekanism:basic_mechanical_pipe'
    }).id('gregification:crafting_shaped/fluidic_plenisher')

    const mekIngredient = function (value) {
        return value.charAt(0) === '#' ? { tag: value.slice(1) } : { item: value };
    };

    const mekanismInfusionConversion = [
        { input: '#mekanism:enriched/redstone', outputInfuseType: 'mekanism:redstone' },
        { input: '#mekanism:enriched/diamond', outputInfuseType: 'mekanism:diamond' },
        { input: '#mekanism:enriched/obsidian', outputInfuseType: 'mekanism:refined_obsidian' }
    ];
    mekanismInfusionConversion.forEach(function (entry) {
        allthemods.custom({
            type: 'mekanism:infusion_conversion',
            input: {
                ingredient: mekIngredient(entry.input)
            },
            output: {
                amount: 320,
                infuse_type: entry.outputInfuseType
            }
        }).id('gregification:mekanism/infusion_conversion/' + entry.outputInfuseType.split(':')[1]);
    });

    const mekanismEnriching = [
        { input: '#forge:dusts/infused_redstone', outputItem: 'mekanism:enriched_redstone' },
        { input: '#forge:dusts/infused_diamond', outputItem: 'mekanism:enriched_diamond' },
        { input: '#forge:dusts/infused_obsidian', outputItem: 'mekanism:enriched_refined_obsidian' }
    ];
    mekanismEnriching.forEach(function (entry) {
        allthemods.custom({
            type: 'mekanism:enriching',
            input: {
                ingredient: mekIngredient(entry.input)
            },
            output: {
                item: entry.outputItem
            }
        }).id('gregification:mekanism/enriching/' + entry.outputItem.split(':')[1]);
    });

    const mekanismMetallurgicInfusing = [
        { chemicalInputAmount: 10, chemicalInputTag: 'mekanism:redstone', itemInput: '#forge:dusts/delta_plutonium_alloy', outputItem: 'mekanism:alloy_infused' },
        { chemicalInputAmount: 20, chemicalInputTag: 'mekanism:diamond', itemInput: '#forge:dusts/rheni_hafnium_alloy', outputItem: 'mekanism:alloy_reinforced' },
        { chemicalInputAmount: 40, chemicalInputTag: 'mekanism:refined_obsidian', itemInput: '#forge:dusts/praseodymium_nitinol_alloy', outputItem: 'mekanism:alloy_atomic' }
    ];
    mekanismMetallurgicInfusing.forEach(function (entry) {
        allthemods.custom({
            type: 'mekanism:metallurgic_infusing',
            chemicalInput: {
                amount: entry.chemicalInputAmount,
                tag: entry.chemicalInputTag
            },
            itemInput: {
                ingredient: mekIngredient(entry.itemInput)
            },
            output: {
                item: entry.outputItem
            }
        }).id('gregification:mekanism/metallurgic_infusing/' + entry.outputItem.split(':')[1]);
    });


    const mekanismRotary = [
        { fluid: 'gtceu:saturated_tau', gas: 'kubejs:saturated_tau_gas' },
        { fluid: 'gtceu:compressed_air', gas: 'kubejs:compressed_air_gas' },
        { fluid: 'gtceu:polonium', gas: 'mekanism:polonium' },
        { fluid: 'gtceu:plutonium', gas: 'mekanism:plutonium' },
        { fluid: 'gtceu:nuclear_waste', gas: 'mekanism:nuclear_waste' },
        { fluid: 'gtceu:hydrofluoric_acid', gas: 'mekanism:hydrofluoric_acid' },
        { fluid: 'gtceu:spent_nuclear_waste', gas: 'mekanism:spent_nuclear_waste' }
    ];
    mekanismRotary.forEach(function (entry) {
        const name = entry.gas.split(':')[1];
        allthemods.custom({
            type: 'mekanism:rotary',
            fluidInput: {
                amount: 10,
                fluid: entry.fluid
            },
            gasOutput: {
                amount: 10,
                gas: entry.gas
            }
        }).id('gregification:rotary/decondensing/' + name);
        allthemods.custom({
            type: 'mekanism:rotary',
            gasInput: {
                amount: 10,
                gas: entry.gas
            },
            fluidOutput: {
                amount: 10,
                fluid: entry.fluid
            }
        }).id('gregification:rotary/condensing/' + name);
    });



    const mekanismCrushing = [
        { input: 'alltheores:peridot', outputItem: 'alltheores:peridot_dust' },
        { input: 'minecraft:echo_shard', outputItem: 'gtceu:echo_shard_dust' },
        { input: 'minecraft:nether_star', outputItem: 'gtceu:nether_star_dust' },
        { input: 'ae2:silicon', outputItem: 'gtceu:silicon_dust' },
        { input: 'minecraft:soul_sand', outputItem: 'thermal_extra:soul_sand_dust' },
        { input: 'minecraft:phantom_membrane', outputItem: 'gtceu:phantom_membrane_dust' },
        { input: 'thermal:apatite', outputItem: 'thermal:apatite_dust' },
        { input: 'thermal:cinnabar', outputItem: 'thermal:cinnabar_dust' },
        { input: 'thermal:niter', outputItem: 'thermal:niter_dust' }
    ];
    mekanismCrushing.forEach(function (entry) {
        allthemods.custom({
            type: 'mekanism:crushing',
            input: {
                ingredient: mekIngredient(entry.input)
            },
            output: {
                item: entry.outputItem,
                count: 1
            }
        }).id('gregification:mekanism/crushing/' + entry.outputItem.replace(':', '_'));
    });
})
