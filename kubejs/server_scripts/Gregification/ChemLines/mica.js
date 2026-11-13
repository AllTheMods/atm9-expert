ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;

    const blockMaceratorDuration = 120;
    const blockMaceratorEut = LV;

    const pulpResinDuration = 200;
    const pulpResinEut = LV;

    const pulpRubberDuration = 200;
    const pulpRubberEut = LV;

    const basedSheetDuration = 100;
    const basedSheetEut = LV;

    const insulatorSheetDuration = 200;
    const insulatorSheetEut = MV;

    const cupronickelCoilDuration = 200;
    const cupronickelCoilEut = LV;

    const kanthalCoilDuration = 300;
    const kanthalCoilEut = MV;

    const nichromeCoilDuration = 400;
    const nichromeCoilEut = HV;

    const rtmCoilDuration = 500;
    const rtmCoilEut = EV;

    const hssgCoilDuration = 600;
    const hssgCoilEut = IV;

    const naquadahCoilDuration = 700;
    const naquadahCoilEut = LuV;

    const triniumCoilDuration = 800;
    const triniumCoilEut = ZPM;

    const tritaniumCoilDuration = 900;
    const tritaniumCoilEut = UV;

    allthemods.remove({ type: 'gtceu:assembler', output: /^gtceu:(cupronickel|kanthal|nichrome|rtm_alloy|hssg|naquadah|trinium|tritanium)_coil_block$/ });

    allthemods.recipes.gtceu.macerator('gregification:mica_block_to_dust')
        .itemInputs('envirocore:mica')
        .itemOutputs('2x gtceu:mica_dust')
        .duration(blockMaceratorDuration)
        .EUt(blockMaceratorEut);

    allthemods.recipes.gtceu.mixer('gregification:mica_pulp_from_resin')
        .itemInputs('4x #forge:dusts/mica', 'gtceu:sticky_resin')
        .itemOutputs('4x gtceu:mica_pulp_dust')
        .duration(pulpResinDuration)
        .EUt(pulpResinEut);

    allthemods.recipes.gtceu.mixer('gregification:mica_pulp_from_raw_rubber')
        .itemInputs('4x #forge:dusts/mica', '#forge:dusts/raw_rubber')
        .itemOutputs('4x gtceu:mica_pulp_dust')
        .duration(pulpRubberDuration)
        .EUt(pulpRubberEut);

    allthemods.recipes.gtceu.forming_press('gregification:mica_base_plate')
        .itemInputs('2x #forge:dusts/mica_pulp', '#forge:dusts/asbestos')
        .itemOutputs('gtceu:mica_base_plate')
        .duration(basedSheetDuration)
        .EUt(basedSheetEut);

    allthemods.recipes.gtceu.alloy_smelter('gregification:mica_insulator_sheet')
        .itemInputs('#forge:plates/mica_base', '#forge:dusts/silicon_dioxide')
        .itemOutputs('gtceu:mica_insulator_plate')
        .duration(insulatorSheetDuration)
        .EUt(insulatorSheetEut);

    allthemods.recipes.gtceu.assembler('gregification:coil_cupronickel')
        .itemInputs('8x #gtceu:wires/double/cupronickel', '8x #forge:foils/bronze', '4x #forge:foils/mica_insulator')
        .inputFluids('#forge:tin_alloy 144')
        .itemOutputs('gtceu:cupronickel_coil_block')
        .duration(cupronickelCoilDuration)
        .EUt(cupronickelCoilEut);

    allthemods.recipes.gtceu.assembler('gregification:coil_kanthal')
        .itemInputs('8x #gtceu:wires/double/kanthal', '8x #forge:foils/aluminium', '4x #forge:foils/mica_insulator')
        .inputFluids('#forge:copper 144')
        .itemOutputs('gtceu:kanthal_coil_block')
        .duration(kanthalCoilDuration)
        .EUt(kanthalCoilEut);

    allthemods.recipes.gtceu.assembler('gregification:coil_nichrome')
        .itemInputs('8x #gtceu:wires/double/nichrome', '8x #forge:foils/stainless_steel', '4x #forge:foils/mica_insulator')
        .inputFluids('#forge:aluminium 144')
        .itemOutputs('gtceu:nichrome_coil_block')
        .duration(nichromeCoilDuration)
        .EUt(nichromeCoilEut);

    allthemods.recipes.gtceu.assembler('gregification:coil_rtm_alloy')
        .itemInputs('8x #gtceu:wires/double/rtm_alloy', '8x #forge:foils/vanadium_steel', '4x #forge:foils/mica_insulator')
        .inputFluids('#forge:nichrome 144')
        .itemOutputs('gtceu:rtm_alloy_coil_block')
        .duration(rtmCoilDuration)
        .EUt(rtmCoilEut);

    allthemods.recipes.gtceu.assembler('gregification:coil_hssg')
        .itemInputs('8x #gtceu:wires/double/hssg', '8x #forge:foils/tungsten_carbide', '4x #forge:foils/mica_insulator')
        .inputFluids('#forge:tungsten 144')
        .itemOutputs('gtceu:hssg_coil_block')
        .duration(hssgCoilDuration)
        .EUt(hssgCoilEut);

    allthemods.recipes.gtceu.assembler('gregification:coil_naquadah')
        .itemInputs('8x #gtceu:wires/double/naquadah', '8x #forge:foils/osmium', '4x #forge:foils/mica_insulator')
        .inputFluids('#forge:tungsten_steel 144')
        .itemOutputs('gtceu:naquadah_coil_block')
        .duration(naquadahCoilDuration)
        .EUt(naquadahCoilEut);

    allthemods.recipes.gtceu.assembler('gregification:coil_trinium')
        .itemInputs('8x #gtceu:wires/double/trinium', '8x #forge:foils/enriched_naquadah', '4x #forge:foils/mica_insulator')
        .inputFluids('#forge:naquadah 144')
        .itemOutputs('gtceu:trinium_coil_block')
        .duration(triniumCoilDuration)
        .EUt(triniumCoilEut);

    allthemods.recipes.gtceu.assembler('gregification:coil_tritanium')
        .itemInputs('8x #gtceu:wires/double/tritanium', '8x #forge:foils/naquadria', '4x #forge:foils/mica_insulator')
        .inputFluids('#forge:trinium 144')
        .itemOutputs('gtceu:tritanium_coil_block')
        .duration(tritaniumCoilDuration)
        .EUt(tritaniumCoilEut);

    allthemods.recipes.gtceu.assembler('gregification:coil/draconium')
        .itemInputs('8x #gtceu:wires/double/draconium', '8x #forge:foils/gaia', '8x #forge:plates/holmium', '16x #forge:foils/mica_insulator')
        .inputFluids('#forge:nobelium 288')
        .itemOutputs('gtceu:draconium_coil_block')
        .duration(600)
        .EUt(UHV);

    allthemods.recipes.gtceu.assembler('gregification:coil/draconium_awakened')
        .itemInputs('8x #gtceu:wires/double/draconium_awakened', '8x #forge:foils/insanite', '8x #forge:plates/thulium', '32x #forge:foils/mica_insulator')
        .inputFluids('#forge:lawrencium 288')
        .itemOutputs('gtceu:draconium_awakened_coil_block')
        .duration(600)
        .EUt(UEV);

    allthemods.recipes.gtceu.assembler('gregification:coil/etrium')
        .itemInputs('8x #gtceu:wires/double/etrium', '8x #forge:foils/organic_polymer', '8x #forge:plates/ytterbium', '48x #forge:foils/mica_insulator')
        .inputFluids('#forge:mendelevium 288')
        .itemOutputs('gtceu:etrium_coil_block')
        .duration(600)
        .EUt(UIV);

    allthemods.recipes.gtceu.assembler('gregification:coil/infinity')
        .itemInputs('8x #gtceu:wires/double/infinity', '8x #forge:foils/chaos_plastic', '8x #forge:plates/erbium', '64x #forge:foils/mica_insulator')
        .inputFluids('#forge:roentgenium 288')
        .itemOutputs('gtceu:infinity_coil_block')
        .duration(600)
        .EUt(UXV);
});