

ServerEvents.recipes(allthemods => {
    const GTX = Java.loadClass('com.gtextras.api.GTX');
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const feedEBCDuration = 100;

    const releaseEBCDuration = feedEBCDuration / 2;
    const ebcEU = UV;




    const holeLoop = [
        {
            in: 'gtceu:bose_einstein_condensate',
            resonance: 200,
            packet1: {Out: 1, circuit: 1},
            packet2: {Out: 1024, circuit: 2},
            final: 'gtceu:tesseract'
        },
        {
            in: 'gtceu:tesseract',
            resonance: 200,
            packet1: {Out: 1, circuit: 1},
            packet2: {Out: 1024, circuit: 2},
            final: 'gtceu:stabilized_tesseract',
            additional: ['#forge:frames/infinity', '4x #forge:plates/adamantium', '4x #forge:plates/sunnarium', '4x #forge:plates/neutronium', '4x #forge:plates/lunarium']
        }
    ]
    holeLoop.forEach(loop => {
        let b1 = allthemods.recipes.gtceu.black_hole(`gregification:test/black_hole_feed_${loop.in.replace(':', '_')}_1`)
            .itemInputs(`${loop.packet1.Out}x ${loop.in}`)
            .output(GTX.BRIDGE, `einstein_rosen item ${loop.in} ${loop.packet1.Out}`)
            .circuit(loop.packet1.circuit)
            .duration(feedEBCDuration);

        let b2 = allthemods.recipes.gtceu.black_hole(`gregification:test/black_hole_feed_${loop.in.replace(':', '_')}_2`)
            .itemInputs(`${loop.packet2.Out}x ${loop.in}`)
            .output(GTX.BRIDGE, `einstein_rosen item ${loop.in} ${loop.packet2.Out}`)
            .circuit(loop.packet2.circuit)
            .duration(feedEBCDuration);
        
        let w1 = allthemods.recipes.gtceu.white_hole(`gregification:test/white_hole_release_${loop.in.replace(':', '_')}_1`)
            .input(GTX.BRIDGE, `einstein_rosen item ${loop.in} ${loop.packet1.Out}`)
            .itemOutputs(loop.in)
            .output(GTX.BRIDGE, `einstein_rosen data resonance ${loop.resonance}`)
            .circuit(loop.packet1.circuit)
            .duration(releaseEBCDuration)
            .EUt(ebcEU);

        let w2 = allthemods.recipes.gtceu.white_hole(`gregification:test/white_hole_release_${loop.in.replace(':', '_')}_2`)
            .input(GTX.BRIDGE, `einstein_rosen item ${loop.in} ${loop.packet2.Out}`)            
            .itemOutputs(loop.final)
            .output(GTX.BRIDGE, `einstein_rosen data resonance ${loop.resonance}`)
            .circuit(loop.packet2.circuit)
            .duration(releaseEBCDuration)
            .EUt(ebcEU);
            if (loop.additional) {
                w2.itemInputs(loop.additional)                
            }
    });


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
            '8x #forge:plates/meitnerium'
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


    allthemods.shapeless('gtceu:white_hole_jet_down', ['gtceu:white_hole_jet_up']).id('gregification:release_white_hole_flip1')
    allthemods.shapeless('gtceu:white_hole_jet_up', ['gtceu:white_hole_jet_down']).id('gregification:release_white_hole_flip2')
})