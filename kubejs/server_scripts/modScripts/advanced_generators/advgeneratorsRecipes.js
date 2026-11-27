// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    allthemods.shaped('8x advgenerators:upgrade_kit', [
        'PWP',
        'WCW',
        'PWP'
    ], {
        P: '#forge:plates/redstone',
        W: '#gtceu:wires/tin',
        C: '#gtceu:circuits/lv'
    }).id('gregification:advgenerators/crafting/upgrade_kit')

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/controllers/exchanger_controller')
        .itemInputs([
            'gtceu:mv_machine_hull',
            '2x gtceu:heatproof_machine_casing',
            '2x #gtceu:circuits/mv',
            '2x gtceu:kanthal_coil_block',
            '8x #forge:plates/aluminum'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:exchanger_controller')
        .duration(600)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/controllers/fuel_turbine_controller')
        .itemInputs([
            'gtceu:lv_machine_hull',
            '2x gtceu:steel_pipe_casing',
            '#gtceu:circuits/lv',
            '2x gtceu:cupronickel_coil_block'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:fuel_turbine_controller')
        .duration(600)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/controllers/steam_turbine_controller')
        .itemInputs([
            'gtceu:mv_machine_hull',
            '2x gtceu:heatproof_machine_casing',
            '2x #gtceu:circuits/mv',
            '8x #forge:plates/aluminum',
            'gtceu:aluminium_drum'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:steam_turbine_controller')
        .duration(600)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/controllers/syngas_controller')
        .itemInputs([
            'gtceu:hv_machine_hull',
            '2x gtceu:stainless_steel_gearbox',
            '2x gtceu:heatproof_machine_casing',
            '#gtceu:circuits/hv',
            '2x gtceu:kanthal_coil_block'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:syngas_controller')
        .duration(600)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/fe_output')
        .itemInputs([
            'gtceu:lv_4a_energy_converter',
            '2x #gtceu:circuits/lv',
            '6x #forge:plates/steel'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:fe_output')
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/fluid_input')
        .itemInputs([
            'gtceu:lv_input_hatch',
            '#gtceu:circuits/lv',
            'gtceu:lv_electric_pump',
            'gtceu:steel_pipe_casing'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:fluid_input')
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/fluid_output_select')
        .itemInputs([
            'gtceu:lv_output_hatch',
            '#gtceu:circuits/lv',
            'gtceu:lv_electric_pump',
            'gtceu:steel_pipe_casing'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:fluid_output_select')
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/gas_input')
        .itemInputs([
            'gtceu:lv_machine_hull',
            '#gtceu:circuits/lv',
            'gtceu:lv_electric_pump',
            'gtceu:steel_pipe_casing'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:gas_input')
        .circuit(2)
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/item_input')
        .itemInputs([
            'gtceu:lv_input_bus',
            '#gtceu:circuits/lv',
            'gtceu:lv_electric_piston',
            'gtceu:steel_pipe_casing'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:item_input')
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/item_output')
        .itemInputs([
            'gtceu:lv_output_bus',
            '#gtceu:circuits/lv',
            'gtceu:lv_electric_piston',
            'gtceu:steel_pipe_casing'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:item_output')
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/efficiency_upgrade_tier1')
        .itemInputs([
            'gtceu:lv_machine_hull',
            '4x #gtceu:circuits/lv',
            '2x gtceu:lv_sensor',
            '8x #forge:plates/steel',
            'gtceu:lv_electric_piston'
        ])
        .inputFluids('#forge:soldering_alloy 576')
        .itemOutputs('advgenerators:efficiency_upgrade_tier1')
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/efficiency_upgrade_tier2')
        .itemInputs([
            'gtceu:hv_machine_hull',
            '4x #gtceu:circuits/hv',
            '2x gtceu:hv_sensor',
            '8x #forge:plates/stainless_steel',
            'gtceu:hv_electric_piston'
        ])
        .inputFluids('#forge:soldering_alloy 576')
        .itemOutputs('advgenerators:efficiency_upgrade_tier2')
        .duration(400)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/fuel_tank')
        .itemInputs([
            'gtceu:lv_machine_hull',
            'gtceu:lv_electric_pump',
            'gtceu:steel_drum'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:fuel_tank')
        .circuit(1)
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/heat_exchanger')
        .itemInputs([
            'gtceu:mv_machine_hull',
            '2x gtceu:mv_electric_pump',
            '2x gtceu:aluminium_drum',
            '8x #gtceu:wires/double/kanthal'
        ])
        .inputFluids('#forge:soldering_alloy 288')
        .itemOutputs('advgenerators:heat_exchanger')
        .circuit(2)
        .duration(400)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/heating_chamber')
        .itemInputs([
            'gtceu:hv_machine_hull',
            '2x gtceu:hv_electric_pump',
            'gtceu:aluminium_drum',
            '8x #gtceu:wires/double/kanthal'
        ])
        .inputFluids('#forge:soldering_alloy 288')
        .itemOutputs('advgenerators:heating_chamber')
        .circuit(2)
        .duration(400)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/mixing_chamber')
        .itemInputs([
            'gtceu:hv_machine_hull',
            '2x gtceu:hv_electric_pump',
            '2x #gtceu:circuits/hv'
        ])
        .inputFluids('#forge:soldering_alloy 288')
        .itemOutputs('advgenerators:mixing_chamber')
        .circuit(4)
        .duration(400)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/modules/sensor')
        .itemInputs([
            'gtceu:lv_machine_hull',
            '#gtceu:circuits/lv',
            '4x #forge:plates/steel',
            '#gtceu:wires/double/red_alloy'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:sensor')
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/capacitors/capacitor_kit_tier2_alloy')
        .itemInputs([
            'advgenerators:upgrade_kit',
            '4x #gtceu:batteries/hv',
            '4x #forge:plates/stainless_steel',
            '8x #gtceu:wires/double/cadmium_copper'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:capacitor_kit_tier2')
        .duration(200)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/capacitors/capacitor_kit_tier3_alloy')
        .itemInputs([
            'advgenerators:upgrade_kit',
            '4x #gtceu:batteries/ev',
            '4x #forge:plates/titanium',
            '8x #gtceu:wires/double/graphite'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:capacitor_kit_tier3')
        .duration(200)
        .EUt(EV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/capacitors/capacitor_tier1')
        .itemInputs([
            'gtceu:lv_machine_hull',
            '4x #gtceu:batteries/lv',
            '4x #forge:plates/steel',
            '8x #gtceu:wires/double/red_alloy'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:power_capacitor_tier1')
        .circuit(1)
        .duration(200)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/capacitors/capacitor_tier2_alloy')
        .itemInputs([
            'advgenerators:power_capacitor_tier1',
            '4x #gtceu:batteries/hv',
            '4x #forge:plates/stainless_steel',
            '8x #gtceu:wires/double/cadmium_copper'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:power_capacitor_tier2')
        .circuit(2)
        .duration(200)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/capacitors/capacitor_tier3_alloy')
        .itemInputs([
            'advgenerators:power_capacitor_tier2',
            '4x #gtceu:batteries/ev',
            '4x #forge:plates/titanium',
            '8x #gtceu:wires/double/graphite'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:power_capacitor_tier3')
        .circuit(3)
        .duration(200)
        .EUt(EV);

    allthemods.recipes.gtceu.industrial_pressure_chamber('gregification:advgenerators/turbines/blade')
        .itemInputs([
            '2x #forge:plates/steel',
            '#forge:rods/steel'
        ])
        .inputFluids('#forge:compressed_air 10000')
        .itemOutputs('advgenerators:turbine_blade')
        .duration(200)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/kit_tier2')
        .itemInputs([
            'advgenerators:upgrade_kit',
            '4x #forge:plates/electrum'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_kit_tier2')
        .circuit(2)
        .duration(100)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/kit_tier3')
        .itemInputs([
            'advgenerators:upgrade_kit',
            '4x #forge:plates/signalum'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_kit_tier3')
        .circuit(3)
        .duration(100)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/kit_tier4_invar')
        .itemInputs([
            'advgenerators:upgrade_kit',
            '4x #forge:plates/stainless_steel'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_kit_tier4')
        .circuit(4)
        .duration(100)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/kit_tier5_alloy')
        .itemInputs([
            'advgenerators:upgrade_kit',
            '4x #forge:plates/titanium'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_kit_tier5')
        .circuit(5)
        .duration(100)
        .EUt(EV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/rotor_tier1')
        .itemInputs([
            '4x advgenerators:turbine_blade',
            '#forge:rings/steel'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_rotor_tier1')
        .circuit(1)
        .duration(200)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/rotor_tier2')
        .itemInputs([
            'advgenerators:turbine_rotor_tier1',
            '4x #forge:plates/electrum'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_rotor_tier2')
        .circuit(2)
        .duration(200)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/rotor_tier3')
        .itemInputs([
            'advgenerators:turbine_rotor_tier2',
            '4x #forge:plates/signalum'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_rotor_tier3')
        .circuit(3)
        .duration(200)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/rotor_tier4_steel')
        .itemInputs([
            'advgenerators:turbine_rotor_tier3',
            '4x #forge:plates/stainless_steel'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_rotor_tier4')
        .circuit(4)
        .duration(200)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/rotor_tier5_alloy')
        .itemInputs([
            'advgenerators:turbine_rotor_tier4',
            '4x #forge:plates/titanium'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_rotor_tier5')
        .circuit(5)
        .duration(200)
        .EUt(EV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/tier1')
        .itemInputs([
            'advgenerators:turbine_rotor_tier1',
            'gtceu:lv_machine_hull',
            'gtceu:lv_voltage_coil',
            '#gtceu:circuits/lv'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_tier1')
        .circuit(1)
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/tier2')
        .itemInputs([
            'advgenerators:turbine_rotor_tier2',
            'gtceu:lv_voltage_coil',
            '4x #forge:plates/steel'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_tier2')
        .circuit(2)
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/tier3')
        .itemInputs([
            'advgenerators:turbine_rotor_tier3',
            'gtceu:mv_voltage_coil',
            '4x #forge:plates/aluminum'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_tier3')
        .circuit(3)
        .duration(400)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/tier4')
        .itemInputs([
            'advgenerators:turbine_rotor_tier4',
            'gtceu:hv_voltage_coil',
            '4x #forge:plates/stainless_steel'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_tier4')
        .circuit(4)
        .duration(400)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:advgenerators/turbines/tier5')
        .itemInputs([
            'advgenerators:turbine_rotor_tier5',
            'gtceu:ev_voltage_coil',
            '4x #forge:plates/titanium'
        ])
        .inputFluids('#forge:soldering_alloy 144')
        .itemOutputs('advgenerators:turbine_tier5')
        .circuit(5)
        .duration(400)
        .EUt(EV);

    allthemods.custom({
        "type": "advgenerators:liquid_fuel",
        "fuel": {
            "fluid": "mekanism:ethene"
        },
        "fePerMb": 12288
    }).id('gregification:advgenerators/fuel/mekanism_ethene')

    allthemods.custom({
        "type": "advgenerators:exchanger_cooling",
        "input": {
            "fluids": {
                "fluid": "minecraft:lava"
            },
            "amount": 1
        },
        "output": {
            "item": "gtceu:ash_dust",
            "amount": 0.001
        },
        "heat": 21
    }).id('gregification:advgenerators/exchanger/lava_to_obsidian')

    allthemods.custom({
        "type": "advgenerators:exchanger_heating",
        "input": {
            "fluids": {
                "fluid": "minecraft:water"
            },
            "amount": 15
        },
        "output": {
            "fluid": "advgenerators:steam",
            "amount": 15
        },
        "heat": 3
    }).id('gregification:advgenerators/exchanger/water_to_steam')

    const advgeneratorsCarbonSource = [
        { id: 'gregification:advgenerators/carbon/carbon_dust', items: [{"tag":"forge:dusts/carbon"}], carbonValue: 720 },
        { id: 'gregification:advgenerators/carbon/charcoal_block', items: [{"tag":"forge:storage_blocks/charcoal"}], carbonValue: 5184 },
        { id: 'gregification:advgenerators/carbon/charcoal_dust', items: [{"tag":"forge:dusts/charcoal"}], carbonValue: 576 },
        { id: 'gregification:advgenerators/carbon/coal', items: [{"item":"minecraft:coal"},{"item":"minecraft:charcoal"}], carbonValue: 576 },
        { id: 'gregification:advgenerators/carbon/coal_block', items: [{"tag":"forge:storage_blocks/coal"}], carbonValue: 5184 },
        { id: 'gregification:advgenerators/carbon/coal_dust', items: [{"tag":"forge:dusts/coal"}], carbonValue: 576 },
        { id: 'gregification:advgenerators/carbon/coke', items: [{"tag":"forge:coal_coke"}], carbonValue: 1008 },
        { id: 'gregification:advgenerators/carbon/coke_block', items: [{"tag":"forge:storage_blocks/coal_coke"}], carbonValue: 9072 },
        { id: 'gregification:advgenerators/carbon/logs', items: [{"tag":"minecraft:logs"}], carbonValue: 432 },
        { id: 'gregification:advgenerators/carbon/planks', items: [{"tag":"minecraft:planks"}], carbonValue: 108 }
    ];
    advgeneratorsCarbonSource.forEach(function (entry) {
        allthemods.custom({
            type: 'advgenerators:carbon_source',
            items: entry.items,
            carbonValue: entry.carbonValue
        }).id(entry.id);
    });

    const advgeneratorsLiquidFuel = [
        { id: 'gregification:advgenerators/fuel/imeng_biodiesel', fluidTag: 'forge:bio_diesel', fePerMb: 1024 },
        { id: 'gregification:liquid_fuel/benzene', fluidTag: 'forge:benzene', fePerMb: 1500 },
        { id: 'gregification:liquid_fuel/nitrobenzene', fluidTag: 'forge:nitrobenzene', fePerMb: 5200 },
        { id: 'gregification:liquid_fuel/kerosene', fluidTag: 'forge:kerosene', fePerMb: 2560 }
    ];
    advgeneratorsLiquidFuel.forEach(function (entry) {
        allthemods.custom({
            type: 'advgenerators:liquid_fuel',
            fuel: {
                fluidTag: entry.fluidTag
            },
            fePerMb: entry.fePerMb
        }).id(entry.id);
    });
})
