// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;

    const anchorDuration = 600;
    const anchorEut = UV;

    const traderUpgradeDuration = 1200;
    const traderUpgradeEut = UV;

    const portalDuration = 600;
    const portalEut = UV;

    const megaseedDuration = 400;
    const megaseedEut = UV;

    const neuronDuration = 1200;
    const neuronEut = UV;

    allthemods.recipes.gtceu.assembly_line('gregification:dimensional_anchor')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '2x #gtceu:circuits/uv',
            '2x gtceu:uv_electric_pump',
            '2x gtceu:uv_electric_motor'
        )
        .inputFluids('#forge:seaborgium 576', '#forge:livermorium 576', '#forge:infinity 576')
        .itemOutputs('gtceu:dimensional_anchor')
        .duration(anchorDuration)
        .EUt(anchorEut);

    allthemods.recipes.gtceu.alfheim_trader('gregification:dimensionally_transcendent_trader')
        .itemInputs('gtceu:uv_alfheim_trader')
        .inputFluids('#forge:dimensionally_transcendent_portal_fluid 4320')
        .itemOutputs('gtceu:uv_dimensionally_transcendent_trader')
        .duration(traderUpgradeDuration)
        .EUt(traderUpgradeEut);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:dimensionally_transcendent_portal_fluid')
        .inputFluids('#forge:alfheim_portal_fluid 1000', '#forge:seaborgium 144', '#forge:livermorium 144', '#forge:infinity 144')
        .outputFluids('gtceu:dimensionally_transcendent_portal_fluid 144')
        .duration(portalDuration)
        .EUt(portalEut);

    allthemods.recipes.gtceu.dimensionally_transcendent_trader('gregification:megaseed')
        .notConsumable('gtceu:dimensional_anchor')
        .inputFluids('#forge:dimensionally_transcendent_portal_fluid 2880')
        .itemOutputs('gtceu:megaseed')
        .duration(megaseedDuration)
        .EUt(megaseedEut);

    allthemods.recipes.gtceu.hyper_neuron_cultivator('gregification:hyper_intelligent_neuron')
        .itemInputs('gtceu:megaseed', '4x gtceu:raw_model_neuron')
        .inputFluids('#forge:artificial_cerebrospinal_fluid 64000')
        .itemOutputs('gtceu:hyper_intelligent_neuron')
        .duration(neuronDuration)
        .EUt(neuronEut);

    allthemods.recipes.gtceu.assembly_line('gregification:craft_hyper_neuron_cultivator')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '2x #gtceu:circuits/uv',
            '2x gtceu:uv_electric_pump',
            '2x gtceu:uv_electric_motor',
            '4x gtceu:superconducting_coil'
        )
        .inputFluids('#forge:infinity 288')
        .itemOutputs('gtceu:hyper_neuron_cultivator')
        .duration(600)
        .EUt(UV);

    allthemods.recipes.gtceu.assembler('gregification:hyperneural_casing')
        .itemInputs('6x #forge:plates/darmstadtium', '#gtceu:circuits/uv')
        .inputFluids('#forge:seaborgium 72')
        .itemOutputs('2x gtceu:hyperneural_casing')
        .duration(200)
        .EUt(UV);

    allthemods.recipes.gtceu.assembler('gregification:neural_pillar_core')
        .itemInputs('gtceu:hyperneural_casing', '2x #gtceu:circuits/uv', '4x #forge:plates/darmstadtium')
        .inputFluids('#forge:livermorium 72')
        .itemOutputs('gtceu:neural_pillar_core')
        .duration(200)
        .EUt(UV);
});
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
