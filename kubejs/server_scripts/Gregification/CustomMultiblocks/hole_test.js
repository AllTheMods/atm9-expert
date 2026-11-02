

ServerEvents.recipes(allthemods => {
    const GTX = Java.loadClass('com.gtextras.api.GTX');
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const feedEBCDuration = 100;

    const releaseEBCDuration = feedEBCDuration / 2;
    const ebcEU = UV;
    

    //test recipes
    allthemods.recipes.gtceu.black_hole('gregification:test/black_hole_feed_er')
        .itemInputs('gtceu:bose_einstein_condensate')
        .output(GTX.BRIDGE, 'einstein_rosen item gtceu:bose_einstein_condensate 1')
        .circuit(1)
        .duration(feedEBCDuration);
        

    allthemods.recipes.gtceu.black_hole('gregification:test/black_hole_tr')
        .itemInputs('1024x gtceu:bose_einstein_condensate')
        .output(GTX.BRIDGE, 'einstein_rosen item gtceu:bose_einstein_condensate 1024')
        .circuit(2)
        .duration(feedEBCDuration);

    allthemods.recipes.gtceu.white_hole('gregification:test/white_hole_release_er')
        .input(GTX.BRIDGE, 'einstein_rosen item gtceu:bose_einstein_condensate 1')
        .itemOutputs('gtceu:bose_einstein_condensate')
        .output(GTX.BRIDGE, 'einstein_rosen data resonance 200')
        .circuit(1)
        .duration(releaseEBCDuration)
        .EUt(ebcEU);

    allthemods.recipes.gtceu.white_hole('gregification:test/white_hole_release_tr')
        .input(GTX.BRIDGE, 'einstein_rosen item gtceu:bose_einstein_condensate 1024')
        .itemOutputs('gtceu:tesseract')        
        .circuit(2)
        .duration(releaseEBCDuration)
        .EUt(ebcEU);

    const blackHoleCasingDuration = 200
    const blackHoleCasingEut = UXV

    const accretionDiskCasingDuration = 200
    const accretionDiskCasingEut = UXV

    const whiteHoleCasingDuration = 200
    const whiteHoleCasingEut = UXV

    const whiteHoleJetUpDuration = 200
    const whiteHoleJetUpEut = UXV

    const whiteHoleJetDownDuration = 200
    const whiteHoleJetDownEut = UXV

    allthemods.recipes.gtceu.assembler('gregification:casings/black_hole_casing')
        .itemInputs(
            'gtceu:uxv_machine_hull',
            '6x #forge:plates/neutronium',
            '4x #forge:plates/roentgenium',
            '1x #forge:frames/neutronium',
            '2x #gtceu:circuits/uxv'
        )
        .inputFluids('#forge:dark_matter 576')
        .itemOutputs('2x gtceu:black_hole_casing')
        .circuit(1)
        .duration(blackHoleCasingDuration)
        .EUt(blackHoleCasingEut);

    allthemods.recipes.gtceu.assembler('gregification:casings/accretion_disk_casing')
        .itemInputs(
            'gtceu:uxv_machine_hull',
            '2x gtceu:black_hole_casing',
            '4x #forge:plates/nobelium',
            '2x #forge:rods/long/neutronium',
            '8x #forge:plates/nobelium'
        )
        .inputFluids('#forge:red_matter 288')
        .itemOutputs('2x gtceu:accretion_disk_casing')
        .circuit(1)
        .duration(accretionDiskCasingDuration)
        .EUt(accretionDiskCasingEut);

    allthemods.recipes.gtceu.assembler('gregification:casings/white_hole_casing')
        .itemInputs(
            'gtceu:uxv_machine_hull',
            '6x #forge:plates/mendelevium',
            '4x #forge:plates/lawrencium',
            '1x #forge:frames/mendelevium',
            '2x #gtceu:circuits/uxv'
        )
        .inputFluids('#forge:red_matter 576')
        .itemOutputs('2x gtceu:white_hole_casing')
        .circuit(1)
        .duration(whiteHoleCasingDuration)
        .EUt(whiteHoleCasingEut);

    allthemods.recipes.gtceu.assembler('gregification:casings/white_hole_jet_up')
        .itemInputs(
            'gtceu:uxv_machine_hull',
            '2x gtceu:white_hole_casing',
            '4x #forge:rods/long/lawrencium',
            '2x #forge:plates/nobelium',
            '8x #forge:plates/scandium'
        )
        .inputFluids('#forge:red_matter 288')
        .itemOutputs('2x gtceu:white_hole_jet_up')
        .circuit(2)
        .duration(whiteHoleJetUpDuration)
        .EUt(whiteHoleJetUpEut);

    allthemods.recipes.gtceu.assembler('gregification:casings/white_hole_jet_down')
        .itemInputs(
            'gtceu:uxv_machine_hull',
            '2x gtceu:white_hole_casing',
            '4x #forge:rods/long/lawrencium',
            '2x #forge:plates/nobelium',
            '8x #forge:plates/scandium'
        )
        .inputFluids('#forge:red_matter 288')
        .itemOutputs('2x gtceu:white_hole_jet_down')
        .circuit(3)
        .duration(whiteHoleJetDownDuration)
        .EUt(whiteHoleJetDownEut);

    const blackHoleDuration = 12000
    const blackHoleEut = OpV
    const blackHoleCwut = 128

    const whiteHoleDuration = 12000
    const whiteHoleEut = OpV
    const whiteHoleCwut = 128

    allthemods.recipes.gtceu.assembly_line('gregification:craft_black_hole')
        .itemInputs(
            'gtceu:opv_machine_hull',
            '4x #gtceu:circuits/opv',
            '64x gtceu:true_nan',
            '16x gtceu:black_hole_casing',
            '8x gtceu:accretion_disk_casing',
            '16x #forge:plates/neutronium',
            '16x #forge:plates/roentgenium'
        )
        .inputFluids('#forge:dark_matter 9216', '#forge:tennessine 9216')
        .itemOutputs('gtceu:black_hole')
        .stationResearch(b => b.researchStack('gtceu:deep_thought').EUt(blackHoleEut / 4).CWUt(blackHoleCwut))
        .duration(blackHoleDuration)
        .EUt(blackHoleEut);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_white_hole')
        .itemInputs(
            'gtceu:opv_machine_hull',
            '4x #gtceu:circuits/opv',
            '16x gtceu:true_infinity',
            '16x gtceu:white_hole_casing',
            '4x gtceu:white_hole_jet_up',
            '4x gtceu:white_hole_jet_down',
            '16x #forge:plates/mendelevium',
            '16x #forge:plates/lawrencium'
        )
        .inputFluids('#forge:red_matter 9216', '#forge:tennessine 9216')
        .itemOutputs('gtceu:white_hole')
        .stationResearch(b => b.researchStack('gtceu:black_hole').EUt(whiteHoleEut / 4).CWUt(whiteHoleCwut))
        .duration(whiteHoleDuration)
        .EUt(whiteHoleEut);

    allthemods.shapeless('gregification:release_white_hole_flip1')
        .itemInputs('gtceu:white_hole_jet_up')
        .itemOutputs('gtceu:white_hole_jet_down');
    
    allthemods.shapeless('gregification:release_white_hole_flip2')
        .itemInputs('gtceu:white_hole_jet_down')
        .itemOutputs('gtceu:white_hole_jet_up');
})