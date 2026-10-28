ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;

    allthemods.recipes.gtceu.assembler('gregification:craft_water_filtration_plant')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '2x gtceu:hv_electric_motor',
            '2x #forge:plates/stainless_steel',
            '4x gtceu:filter_casing'
        )
        .inputFluids('#forge:soldering_alloy 1000')
        .itemOutputs('gtceu:water_filtration_plant')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:craft_hydro_electromagnetic_separator')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '2x gtceu:hv_electric_motor',
            '2x #forge:plates/stainless_steel',
            '2x gtceu:tempered_glass',
            '2x #forge:rods/magnetic_steel'
        )
        .inputFluids('#forge:soldering_alloy 1000')
        .itemOutputs('gtceu:hydro_electromagnetic_separator')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:craft_fractional_gas_separator')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '2x gtceu:hv_electric_motor',
            '2x #forge:plates/stainless_steel',
            '4x #forge:rotors/stainless_steel',
            '4x gtceu:tempered_glass'
        )
        .inputFluids('#forge:soldering_alloy 1000')
        .itemOutputs('gtceu:fractional_gas_separator')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:craft_botanical_factory')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '2x gtceu:hv_electric_motor',
            '2x #forge:plates/stainless_steel',
            '2x botania:bifrost_perm',
            '4x botania:rune_mana'
        )
        .inputFluids('#forge:mana 16000')
        .itemOutputs('gtceu:botanical_factory')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:craft_large_mana_burner')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '2x gtceu:hv_electric_motor',
            '2x #forge:plates/stainless_steel',
            '4x #gtceu:wires/quadruple/kanthal',
            '4x botania:rune_mana'
        )
        .inputFluids('#forge:mana 16000')
        .itemOutputs('gtceu:large_mana_burner')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:craft_large_mana_converter')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '2x gtceu:hv_electric_motor',
            '2x #forge:plates/stainless_steel',
            '4x #forge:gears/terrasteel',
            '2x botania:bifrost_perm'
        )
        .inputFluids('#forge:mana 16000')
        .itemOutputs('gtceu:large_mana_converter')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:craft_orechid_grove')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '2x gtceu:hv_electric_motor',
            '2x #forge:plates/stainless_steel',
            '4x botania:orechid',
            '4x botania:elf_glass'
        )
        .inputFluids('#forge:mana 16000')
        .itemOutputs('gtceu:orechid_grove')
        .duration(300)
        .EUt(HV);

    allthemods.recipes.gtceu.assembler('gregification:craft_ozonation_plant')
        .itemInputs(
            'gtceu:ev_machine_hull',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_electric_pump',
            '2x gtceu:ev_electric_motor',
            '2x #forge:plates/titanium',
            '4x gtceu:titanium_normal_fluid_pipe'
        )
        .inputFluids('#forge:polytetrafluoroethylene 1000')
        .itemOutputs('gtceu:ozonation_plant')
        .duration(300)
        .EUt(EV);

    allthemods.recipes.gtceu.assembler('gregification:craft_flocculation_plant')
        .itemInputs(
            'gtceu:iv_machine_hull',
            '#gtceu:circuits/iv',
            '2x gtceu:iv_electric_pump',
            '2x gtceu:iv_electric_motor',
            '2x #forge:plates/tungsten_steel',
            '4x gtceu:tungsten_steel_normal_fluid_pipe'
        )
        .inputFluids('#forge:polyaluminium_chloride 8000')
        .itemOutputs('gtceu:flocculation_plant')
        .duration(300)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:craft_drone_station')
        .itemInputs(
            'gtceu:iv_machine_hull',
            '#gtceu:circuits/iv',
            '2x gtceu:iv_conveyor_module',
            '2x gtceu:iv_electric_motor',
            '2x #forge:plates/tungsten_steel',
            'gtceu:tungsten_steel_crate',
            '4x #forge:gears/enderium'
        )
        .inputFluids('#forge:lubricant 4000')
        .itemOutputs('gtceu:drone_station')
        .duration(300)
        .EUt(IV);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_microbial_filtration_array')
        .itemInputs(
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x gtceu:luv_electric_pump',
            '2x gtceu:luv_electric_motor',
            '2x #forge:plates/rhodium_plated_palladium',
            '4x #forge:gears/rhodium_plated_palladium',
            '4x gtceu:cleanroom_glass'
        )
        .inputFluids('#forge:selenium 2000', '#forge:ionized_oxygen 2000')
        .itemOutputs('gtceu:microbial_filtration_array')
        .duration(600)
        .EUt(LuV);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_laser_purification')
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '2x #gtceu:circuits/zpm',
            '2x gtceu:zpm_electric_pump',
            '2x gtceu:zpm_electric_motor',
            '2x #forge:plates/naquadah_alloy',
            '4x gtceu:fusion_glass',
            '4x gtceu:superconducting_coil'
        )
        .inputFluids('#forge:soldering_alloy 2000', '#forge:hafnium 2000')
        .itemOutputs('gtceu:laser_purification')
        .duration(600)
        .EUt(ZPM);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_oil_processing_plant')
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '2x #gtceu:circuits/zpm',
            '2x gtceu:zpm_electric_pump',
            '2x gtceu:zpm_electric_motor',
            '2x #forge:plates/naquadah_alloy',
            '16x #forge:foils/rubidium',
            '4x gtceu:laminated_glass'
        )
        .inputFluids('#forge:polybenzimidazole 2000', '#forge:selenium 2000')
        .itemOutputs('gtceu:oil_processing_plant')
        .duration(600)
        .EUt(ZPM);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_cryogenic_unit')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '2x #gtceu:circuits/uv',
            '2x gtceu:uv_electric_pump',
            '2x gtceu:uv_electric_motor',
            '2x #forge:plates/darmstadtium',
            '2x #forge:rotors/strontium',
            '4x ad_astra:ice_shard',
            '4x #forge:gears/gadolinium'
        )
        .inputFluids('#forge:blue_ice 16000', '#forge:tellurium 2000')
        .itemOutputs('gtceu:cryogenic_unit')
        .duration(600)
        .EUt(UV);
        
    allthemods.recipes.gtceu.assembly_line('gregification:craft_baryonic_separator')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '2x #gtceu:circuits/uv',
            '2x gtceu:uv_conveyor_module',
            '2x gtceu:uv_electric_motor',
            '2x #forge:plates/darmstadtium',
            '4x gtceu:superconducting_coil',
            '4x #forge:plates/rubidium'
        )
        .inputFluids('#forge:naquadria 2000', '#forge:rubidium 2000')
        .itemOutputs('gtceu:baryonic_separator')
        .duration(600)
        .EUt(UV);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_baryonic_stabilizer')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '2x #gtceu:circuits/uv',
            '2x gtceu:uv_electric_pump',
            '2x gtceu:uv_electric_motor',
            '2x #forge:plates/darmstadtium',
            '4x gtceu:fusion_coil',
            '4x #forge:gears/rubidium'
        )
        .inputFluids('#forge:naquadria 2000', '#forge:rubidium 2000')
        .itemOutputs('gtceu:baryonic_stabilizer')
        .duration(600)
        .EUt(UV);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_magnetic_containment_chamber')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '2x #gtceu:circuits/uv',
            '2x gtceu:uv_electric_pump',
            '2x gtceu:uv_electric_motor',
            '2x #forge:plates/darmstadtium',
            '4x #forge:gears/francium',
            '4x #forge:plates/germanium'
        )
        .inputFluids('#forge:selenium 2000', '#forge:radium 2000')
        .itemOutputs('gtceu:magnetic_containment_chamber')
        .duration(600)
        .EUt(UV);
    
});