// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', allthemods => {
    allthemods.add('forge:digits', 'gtceu:digit_1')
    allthemods.add('forge:digits', 'gtceu:digit_2')
    allthemods.add('forge:digits', 'gtceu:digit_3')
    allthemods.add('forge:digits', 'gtceu:digit_4')
    allthemods.add('forge:digits', 'gtceu:digit_5')
    allthemods.add('forge:digits', 'gtceu:digit_6')
    allthemods.add('forge:digits', 'gtceu:digit_7')
    allthemods.add('forge:digits', 'gtceu:digit_8')
    allthemods.add('forge:digits', 'gtceu:digit_9')
})

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const digitalGeneratorDuration = 600
    const digitalGeneratorEut = UXV

    const aluDuration = 600
    const aluEut = UXV

    const numericCompressorDuration = 600
    const numericCompressorEut = UXV

    const deepThoughtDuration = 12000
    const deepThoughtEut = OpV
    const deepThoughtCwut = 128

    allthemods.recipes.gtceu.assembler('gregification:craft_digital_generator')
        .itemInputs(
            'gtceu:uxv_machine_hull',
            '4x #gtceu:circuits/uxv',
            '8x gtceu:segment_casing',
            '4x gtceu:advanced_computer_casing',
            '4x gtceu:computer_heat_vent',
            '8x #forge:plates/neutronium',
            '8x #forge:plates/moscovium_roentgenium_alloy'
        )
        .inputFluids('#forge:tennessine 2304')
        .itemOutputs('gtceu:digital_generator')
        .duration(digitalGeneratorDuration)
        .EUt(digitalGeneratorEut);

    allthemods.recipes.gtceu.assembler('gregification:craft_alu')
        .itemInputs(
            'gtceu:uxv_machine_hull',
            '8x #gtceu:circuits/uxv',
            '8x gtceu:advanced_computer_casing',
            '8x gtceu:computer_casing',
            '4x gtceu:computer_heat_vent',
            '8x #forge:plates/neutronium',
            '8x #forge:plates/moscovium_roentgenium_alloy',
            '8x #forge:plates/livermorium_astatine_alloy'
        )
        .inputFluids('#forge:tennessine 2304')
        .itemOutputs('gtceu:alu')
        .duration(aluDuration)
        .EUt(aluEut);

    allthemods.recipes.gtceu.assembler('gregification:craft_numeric_compressor')
        .itemInputs(
            'gtceu:uxv_machine_hull',
            '4x #gtceu:circuits/uxv',
            '16x gtceu:computer_casing',
            '4x gtceu:advanced_computer_casing',
            '4x gtceu:computer_heat_vent',
            '16x #forge:plates/neutronium',
            '16x #forge:plates/moscovium_roentgenium_alloy',
            '16x #forge:plates/mendelevium'
        )
        .inputFluids('#forge:tennessine 2304')
        .itemOutputs('gtceu:numeric_compressor')
        .duration(numericCompressorDuration)
        .EUt(numericCompressorEut);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_deep_thought')
        .itemInputs(
            'gtceu:opv_machine_hull',
            '4x #gtceu:circuits/opv',
            '64x gtceu:true_nan',
            '64x gtceu:true_infinity',
            '64x gtceu:antimatter_processor_mainframe',
            '16x gtceu:panel_casing',
            '6x gtceu:display_casing',
            '16x gtceu:advanced_computer_casing',
            '16x #forge:plates/mendelevium',
            '16x #forge:plates/lawrencium'
        )
        .inputFluids('#forge:soldering_alloy 9216', '#forge:tennessine 9216')
        .itemOutputs('gtceu:deep_thought')
        .stationResearch(b => b.researchStack('gtceu:alu').EUt(deepThoughtEut / 4).CWUt(deepThoughtCwut))
        .duration(deepThoughtDuration)
        .EUt(deepThoughtEut);

    const segmentCasingDuration = 100;
    const segmentCasingEut = UXV;

    const panelCasingDuration = 100;
    const panelCasingEut = UXV;

    const displayCasingDuration = 100;
    const displayCasingEut = UXV;

    allthemods.recipes.gtceu.assembler('gregification:craft_segment_casing')
        .itemInputs(
            '6x #forge:plates/neutronium',
            '4x gtceu:fusion_glass',
            '64x #forge:foils/cadmium_selenide',
            '16x #forge:plates/strontium_aluminate',
            '2x #gtceu:circuits/uxv',
            '2x gtceu:advanced_computer_casing',
            '16x #forge:screws/etrium',
            '8x #forge:plates/einsteinium'
        )
        .inputFluids('#forge:tennessine 576')
        .itemOutputs('2x gtceu:segment_casing')
        .duration(segmentCasingDuration)
        .EUt(segmentCasingEut);

    allthemods.recipes.gtceu.assembler('gregification:craft_panel_casing')
        .itemInputs(
            '6x #forge:plates/neutronium',
            '4x #gtceu:circuits/uxv',
            '2x gtceu:computer_heat_vent',
            '2x gtceu:computer_casing',
            '4x #forge:frames/strontium_aluminate',
            '64x #forge:screws/etrium',
            '8x #forge:plates/einsteinium'
        )
        .inputFluids('#forge:tennessine 576')
        .itemOutputs('2x gtceu:panel_casing')
        .duration(panelCasingDuration)
        .EUt(panelCasingEut);

    allthemods.recipes.gtceu.assembler('gregification:craft_display_casing')
        .itemInputs(
            '4x #forge:plates/neutronium',
            '6x gtceu:fusion_glass',
            '2x #gtceu:circuits/uxv',
            '2x gtceu:advanced_computer_casing',
            '16x #forge:foils/cadmium_selenide',
            '16x #forge:plates/einsteinium'
        )
        .inputFluids('#forge:tennessine 576')
        .itemOutputs('2x gtceu:display_casing')
        .duration(displayCasingDuration)
        .EUt(displayCasingEut);

    const digitCount = 16
    const digitDuration = 20
    const digitEut = UHV

    const zeroDuration = 100
    const zeroEut = UEV    

    const nanDuration = 100
    const nanEut = UEV    

    const trueNanDuration = 600
    const trueNanEut = UXV

    const fragmentDuration = 200
    const fragmentEut = UIV
    const fragmentChance = 500
    const fragmentChanceBoost = 100

    const fragmentCopyDuration = 200
    const fragmentCopyEut = UIV
    const fragmentCopyChance = 1500
    const fragmentCopyChanceBoost = 100

    const sequenceDuration = 400
    const sequenceEut = UIV
    const sequenceChance = 800
    const sequenceChanceBoost = 100

    const sequenceCopyDuration = 400
    const sequenceCopyEut = UIV
    const sequenceCopyChance = 1200
    const sequenceCopyChanceBoost = 100

    const trueInfinityDuration = 1200
    const trueInfinityEut = UXV
    const trueInfinityChance = 100
    const trueInfinityChanceBoost = 50

    const fortyTwoDuration = 300000
    const fortyTwoEut = OpV
    const fortyTwoTachyons = 42

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_1')
        .circuit(1)
        .itemOutputs(digitCount + 'x gtceu:digit_1')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_2')
        .circuit(2)
        .itemOutputs(digitCount + 'x gtceu:digit_2')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_3')
        .circuit(3)
        .itemOutputs(digitCount + 'x gtceu:digit_3')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_4')
        .circuit(4)
        .itemOutputs(digitCount + 'x gtceu:digit_4')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_5')
        .circuit(5)
        .itemOutputs(digitCount + 'x gtceu:digit_5')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_6')
        .circuit(6)
        .itemOutputs(digitCount + 'x gtceu:digit_6')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_7')
        .circuit(7)
        .itemOutputs(digitCount + 'x gtceu:digit_7')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_8')
        .circuit(8)
        .itemOutputs(digitCount + 'x gtceu:digit_8')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.digit_generator('gregification:digit_generator/digit_9')
        .circuit(9)
        .itemOutputs(digitCount + 'x gtceu:digit_9')
        .duration(digitDuration)
        .EUt(digitEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_1')
        .itemInputs('2x gtceu:digit_1')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_2')
        .itemInputs('2x gtceu:digit_2')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_3')
        .itemInputs('2x gtceu:digit_3')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_4')
        .itemInputs('2x gtceu:digit_4')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_5')
        .itemInputs('2x gtceu:digit_5')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_6')
        .itemInputs('2x gtceu:digit_6')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_7')
        .itemInputs('2x gtceu:digit_7')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_8')
        .itemInputs('2x gtceu:digit_8')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/zero_from_digit_9')
        .itemInputs('2x gtceu:digit_9')
        .circuit(2)
        .itemOutputs('gtceu:zero')
        .duration(zeroDuration)
        .EUt(zeroEut);

    allthemods.recipes.gtceu.alu('gregification:alu/nan_from_division_by_zero')
        .itemInputs('#forge:digits', 'gtceu:zero')
        .circuit(4)
        .itemOutputs('gtceu:nan')
        .duration(nanDuration)
        .EUt(nanEut);

    allthemods.recipes.gtceu.numeric_compressor('gregification:numeric_compressor/true_nan')
        .itemInputs('4096x gtceu:nan')
        .itemOutputs('gtceu:true_nan')
        .duration(trueNanDuration)
        .EUt(trueNanEut);

    allthemods.recipes.gtceu.alu('gregification:alu/infinity_fragment')
        .itemInputs('#forge:digits', '#forge:digits')
        .circuit(1)
        .chancedOutput('gtceu:infinity_fragment', fragmentChance, fragmentChanceBoost)
        .duration(fragmentDuration)
        .EUt(fragmentEut);

    allthemods.recipes.gtceu.alu('gregification:alu/infinity_fragment_copy')
        .notConsumable('gtceu:infinity_fragment')
        .itemInputs('#forge:digits')
        .circuit(3)
        .chancedOutput('gtceu:infinity_fragment', fragmentCopyChance, fragmentCopyChanceBoost)
        .duration(fragmentCopyDuration)
        .EUt(fragmentCopyEut);

    allthemods.recipes.gtceu.alu('gregification:alu/infinity_sequence')
        .notConsumable('gtceu:infinity_fragment')
        .itemInputs('gtceu:infinity_fragment')
        .circuit(1)
        .chancedOutput('gtceu:infinity_sequence', sequenceChance, sequenceChanceBoost)
        .duration(sequenceDuration)
        .EUt(sequenceEut);

    allthemods.recipes.gtceu.alu('gregification:alu/infinity_sequence_copy')
        .notConsumable('gtceu:infinity_sequence')
        .itemInputs('gtceu:infinity_fragment')
        .circuit(3)
        .chancedOutput('gtceu:infinity_sequence', sequenceCopyChance, sequenceCopyChanceBoost)        
        .duration(sequenceCopyDuration)
        .EUt(sequenceCopyEut);

    allthemods.recipes.gtceu.alu('gregification:alu/true_infinity')
        .notConsumable('gtceu:infinity_sequence')
        .itemInputs('gtceu:infinity_sequence')
        .circuit(5)
        .chancedOutput('gtceu:true_infinity', trueInfinityChance, trueInfinityChanceBoost)        
        .duration(trueInfinityDuration)
        .EUt(trueInfinityEut);

    allthemods.recipes.gtceu.deep_thought('gregification:deep_thought/forty_two')
        .itemInputs(fortyTwoTachyons + 'x gtceu:tachyon', fortyTwoTachyons + 'x gtceu:tachyon', fortyTwoTachyons + 'x gtceu:tachyon', fortyTwoTachyons + 'x gtceu:tachyon')
        .itemOutputs('gtceu:forty_two')
        .duration(fortyTwoDuration)
        .EUt(fortyTwoEut);
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
