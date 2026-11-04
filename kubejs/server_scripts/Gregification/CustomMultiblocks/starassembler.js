// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const pipeCasingDuration = 200
    const pipeCasingEut = IV

    const frameCasingDuration = 200
    const frameCasingEut = IV

    const internalCasingDuration = 400
    const internalCasingEut = IV

    //672
    allthemods.recipes.gtceu.assembler('gregification:assembler/star_pipe_casing')
        .itemInputs([
            'allthecompressed:nether_star_block_2x',
            '8x #forge:plates/crimson_iron',
            '4x #forge:plates/draconium',
            '4x #forge:rods/germanium',
            '8x #forge:screws/elementium',            
        ])
        .inputFluids('#forge:polyethylene 288')
        .itemOutputs('2x gtceu:star_pipe_casing')
        .duration(pipeCasingDuration)
        .EUt(pipeCasingEut)

    //84
    allthemods.recipes.gtceu.assembler('gregification:assembler/star_frame_casing')
        .itemInputs([            
            'allthecompressed:nether_star_block_2x',
            '#forge:frames/vibranium',
            '4x #forge:plates/hellforged',
            '4x #forge:rods/tellurium',
            '12x #forge:screws/tungsten_steel'
        ])
        .itemOutputs('2x gtceu:star_frame_casing')
        .duration(frameCasingDuration)
        .EUt(frameCasingEut)

    //138
    allthemods.recipes.gtceu.assembler('gregification:assembler/star_internal_casing')
        .itemInputs([
            'allthecompressed:nether_star_block_3x',
            '#forge:frames/end_steel',
            '#forge:plates/dark_steel',
            '#forge:rods/allthemodium',
            '#gtceu:circuits/iv'
        ])
        .inputFluids('#forge:polytetrafluoroethylene 288')
        .itemOutputs('2x gtceu:star_internal_casing')
        .duration(internalCasingDuration)
        .EUt(internalCasingEut)
    
    const starAssemblerControllerDuration = 600
    const starAssemblerControllerEut = ZPM

    allthemods.recipes.gtceu.assembler('gregification:craft_star_assembler')
        .itemInputs([
            'gtceu:zpm_machine_hull',
            '16x #gtceu:circuits/zpm',
            '8x gtceu:zpm_field_generator',
            '8x gtceu:zpm_robot_arm',
            '8x gtceu:star_pipe_casing',
            '4x gtceu:star_internal_casing'
        ])
        .inputFluids('#forge:draconium_awakened 2880')
        .itemOutputs('gtceu:star_assembler')
        .duration(starAssemblerControllerDuration)
        .EUt(starAssemblerControllerEut)
      
    const atmStarDuration = 12000
    const atmStarEut = ZPM

    allthemods.recipes.gtceu.star_assembler('gregification:star_assembler/atm_star')
        .itemInputs([
            'allthetweaks:oblivion_shard',
            'allthetweaks:dragon_soul',
            'allthetweaks:nexium_emitter',
            'allthetweaks:philosophers_fuel',
            'allthetweaks:improbable_probability_device',
            'allthetweaks:dimensional_seed',
            'allthetweaks:pulsating_black_hole',
            'allthetweaks:withers_compass',
            'allthetweaks:patrick_star',
            'mysticalagradditions:creative_essence',
            '8x #forge:storage_blocks/atm_trio'
        ])
        .itemOutputs('allthetweaks:atm_star')
        .duration(atmStarDuration)
        .EUt(atmStarEut)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
