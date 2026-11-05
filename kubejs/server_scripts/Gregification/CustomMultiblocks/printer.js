// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const latticeDuration = 600
    const latticeEut = LuV
    const coilDuration = 600
    const coilEut = LuV
    const bedDuration = 600
    const bedEut = LuV
    const headDuration = 600
    const headEut = ZPM

    allthemods.recipes.gtceu.assembler('gregification:craft_lattice_casing')
        .itemInputs(
            'gtceu:luv_machine_casing',
            '4x #forge:plates/desh',
            '#gtceu:circuits/luv',
            '8x #forge:foils/selenium',
            '2x #forge:rods/allthemodium'
        )
        .itemOutputs('gtceu:lattice_casing')
        .duration(latticeDuration)
        .EUt(latticeEut);

    allthemods.recipes.gtceu.assembler('gregification:craft_emitter_coil_casing')
        .itemInputs(
            'gtceu:luv_machine_casing',
            '#gtceu:wires/hex/cadmium_copper',
            '#forge:plates/hafnium',
            '2x #forge:rods/vibranium'
        )
        .itemOutputs('gtceu:emitter_coil_casing')
        .duration(coilDuration)
        .EUt(coilEut);

    allthemods.recipes.gtceu.assembler('gregification:craft_print_bed_casing')
        .itemInputs(
            'gtceu:luv_machine_casing',
            '4x #forge:plates/gadolinium',
            '2x #forge:foils/actinium',
            '#gtceu:circuits/luv',
            'gtceu:selenium_rectifier'
        )
        .itemOutputs('gtceu:print_bed_casing')
        .duration(bedDuration)
        .EUt(bedEut);

    allthemods.recipes.gtceu.assembler('gregification:craft_emitter_head_casing')
        .itemInputs(
            'gtceu:zpm_machine_casing',
            'gtceu:luv_emitter',
            '2x #forge:plates/scandium',
            '2x #gtceu:circuits/zpm',
            '#forge:lenses/praseodymium_doped_yttrium_aluminium_garnet'
        )
        .itemOutputs('gtceu:emitter_head_casing')
        .duration(headDuration)
        .EUt(headEut);



    const nexiumEmitterDuration = 1200
    const nexiumEmitterEut = ZPM
    

    allthemods.recipes.gtceu.printer('gregification:printing_nexium_emitter')
        .itemInputs(
            'powah:player_transmitter_nitro',
            '16x create:mechanical_arm',
            '16x ae2:singularity',
            '4x gtceu:atomic_clock',
            '8x gtceu:germanium_diode',
            'industrialforegoing:laser_drill',
            '2x gtceu:data_module',
            'gtceu:gravi_star',
            '2x gtceu:zpm_emitter'
        )
        .inputFluids('industrialforegoing:ether_gas 1000', '#forge:enderium 36864', '#forge:meat 36864')
        .itemOutputs('allthetweaks:nexium_emitter')
        .duration(nexiumEmitterDuration)
        .EUt(nexiumEmitterEut);


})



// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.