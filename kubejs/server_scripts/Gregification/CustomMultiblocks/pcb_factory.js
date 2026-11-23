// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;

    const lunarCaseousColony = Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"LunarCaseous"}').weakNBT();

    const galalithDuration = 200;
    const galalithEut = LuV;

    allthemods.recipes.gtceu.assembler('gregification:craft_galalith_panel_casing')
        .itemInputs(
            '4x #forge:plates/rhodium_plated_palladium',
            '2x #forge:plates/lunarium',
            '8x ad_astra:cheese',
            lunarCaseousColony
        )
        .inputFluids('#forge:formaldehyde 1000')
        .itemOutputs('4x gtceu:galalith_panel_casing')
        .circuit(1)
        .duration(galalithDuration)
        .EUt(galalithEut);

    const gantryDuration = 200;
    const gantryEut = LuV;

    allthemods.recipes.gtceu.assembler('gregification:craft_gantry_control_casing')
        .itemInputs(
            '4x #forge:plates/rhodium_plated_palladium',
            '2x #forge:plates/lunarium',
            '2x #gtceu:circuits/luv',
            'gtceu:luv_robot_arm',
            'gtceu:luv_sensor'
        )
        .inputFluids('#forge:soldering_alloy 288')
        .itemOutputs('2x gtceu:gantry_control_casing')
        .circuit(2)
        .duration(gantryDuration)
        .EUt(gantryEut);

    const controllerDuration = 400;
    const controllerEut = LuV;

    allthemods.recipes.gtceu.assembler('gregification:craft_pcb_factory')
        .itemInputs(
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x gtceu:luv_robot_arm',
            '2x gtceu:luv_conveyor_module',
            '4x gtceu:galalith_panel_casing',
            '2x gtceu:gantry_control_casing',
            '4x #forge:plates/lunarium'
        )
        .inputFluids('#forge:soldering_alloy 1000')
        .itemOutputs('gtceu:pcb_factory')
        .duration(controllerDuration)
        .EUt(controllerEut);

    const phenolicDuration = 200;
    const phenolicEut = LV;

    allthemods.recipes.gtceu.pcb_factory('gregification:pcb_factory/phenolic_printed_circuit_board')
        .itemInputs(
            '8x #forge:dusts/wood',
            '32x #forge:foils/silver'
        )
        .inputFluids('#forge:glue 400', '#forge:sodium_persulfate 1600')
        .itemOutputs('8x gtceu:phenolic_printed_circuit_board')
        .duration(phenolicDuration)
        .EUt(phenolicEut);

    const plasticDuration = 300;
    const plasticEut = MV;

    allthemods.recipes.gtceu.pcb_factory('gregification:pcb_factory/plastic_printed_circuit_board')
        .itemInputs(
            '4x #forge:plates/polyvinyl_chloride',
            '64x #forge:foils/copper'
        )
        .inputFluids('#forge:sulfuric_acid 1000', '#forge:sodium_persulfate 4000')
        .itemOutputs('8x gtceu:plastic_printed_circuit_board')
        .duration(plasticDuration)
        .EUt(plasticEut);

    const epoxyDuration = 400;
    const epoxyEut = HV;

    allthemods.recipes.gtceu.pcb_factory('gregification:pcb_factory/epoxy_printed_circuit_board')
        .itemInputs(
            '8x #forge:plates/epoxy',
            '64x #forge:foils/gold',
            '64x #forge:foils/electrum'
        )
        .inputFluids('#forge:sulfuric_acid 4000', '#forge:sodium_persulfate 8000')
        .itemOutputs('8x gtceu:epoxy_printed_circuit_board')
        .duration(epoxyDuration)
        .EUt(epoxyEut);

    const fiberDuration = 500;
    const fiberEut = EV;

    allthemods.recipes.gtceu.pcb_factory('gregification:pcb_factory/fiber_reinforced_printed_circuit_board')
        .itemInputs(
            '4x #forge:plates/reinforced_epoxy_resin',
            '64x #forge:foils/annealed_copper',
            '16x #forge:foils/annealed_copper'
        )
        .inputFluids('#forge:sulfuric_acid 500', '#forge:sodium_persulfate 8000')
        .itemOutputs('4x gtceu:fiber_reinforced_printed_circuit_board')
        .duration(fiberDuration)
        .EUt(fiberEut);

    const multilayerDuration = 600;
    const multilayerEut = IV;

    allthemods.recipes.gtceu.pcb_factory('gregification:pcb_factory/multilayer_fiber_reinforced_printed_circuit_board')
        .itemInputs(
            '8x #forge:plates/reinforced_epoxy_resin',
            '64x #forge:foils/annealed_copper',
            '32x #forge:foils/palladium',
            '32x #forge:foils/platinum'
        )
        .inputFluids('#forge:sulfuric_acid 3000', '#forge:sodium_persulfate 16000')
        .itemOutputs('4x gtceu:multilayer_fiber_reinforced_printed_circuit_board')
        .duration(multilayerDuration)
        .EUt(multilayerEut);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.