ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

    const thoriumCells = [
        { id: 'thorium_single_cell',    input: 'gtceu:thorium_single',            outputCount: 1, gas: 'gtceu:radon', duration: 1050,  eu: ZPM },
        { id: 'thorium_double_cell',    input: 'gtceu:thorium_double',            outputCount: 2, gas: 'gtceu:radon', duration: 2915,  eu: ZPM },
        { id: 'thorium_quad_cell',      input: 'gtceu:thorium_quad',              outputCount: 4, gas: 'gtceu:radon', duration: 8290,  eu: ZPM },
        { id: 'berkelium_single_cell',  input: 'gtceu:thorium_berkelium_single',  outputCount: 2, gas: 'gtceu:xenon', duration: 1440,  eu: UV },
        { id: 'berkelium_double_cell',  input: 'gtceu:thorium_berkelium_double',  outputCount: 4, gas: 'gtceu:xenon', duration: 4010,  eu: UV },
        { id: 'berkelium_quad_cell',    input: 'gtceu:thorium_berkelium_quad',    outputCount: 8, gas: 'gtceu:xenon', duration: 11410, eu: UV }
    ];

    thoriumCells.forEach(cell => {
        let gasAmount = cell.outputCount * 4000;
        let wasteAmount = cell.outputCount * 1000;

        let m = cell.input.replace(/^.*:/, '').match(/^(thorium(?:_berkelium)?)_(single|double|quad)$/);
        let depleted = `gtceu:depleted_${m[2]}_${m[1]}`;
        let wasteFluid = cell.id.startsWith('berkelium')
        ? 'gtceu:thorium_berkelium_waste_solution'
        : 'gtceu:thorium_waste_solution';
        allthemods.recipes.gtceu.thorium_reactor(`allthemods:thorium_reactor/${cell.id}`)
            .itemInputs(cell.input)
            .itemOutputs(`${cell.outputCount}x gtceu:protactinium_dust`, depleted)
            .inputFluids('gtceu:distilled_water 16000')
            .outputFluids([`${cell.gas} ${gasAmount}`, `${wasteFluid} ${wasteAmount}`])
            .duration(cell.duration)
            .EUt(-cell.eu);
    });

    allthemods.recipes.gtceu.assembly_line('gregification:craft_thorium_reactor')
        .itemInputs(
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x gtceu:luv_electric_pump',
            '2x gtceu:luv_electric_motor',
            '2x #forge:plates/rhodium_plated_palladium',
            '4x #forge:plates/graphite',
            '4x #forge:rods/hafnium',
            '2x #forge:frames/hop_graphite'
        )
        .itemOutputs('gtceu:thorium_reactor')
        .inputFluids('#forge:soldering_alloy 1000')
        .scannerResearch('gtceu:thorium_single')
        .duration(600)
        .EUt(LuV);

    /*
    allthemods.recipes.gtceu.macerator('gregification:macerate_depleted_thorium_fuel')
        .itemInputs('gtceu:depleted_single')
        .itemOutputs('6x gtceu:depleted_thorium_fuel_dust')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.macerator('gregification:macerate_depleted_thorium_double')
        .itemInputs('gtceu:depleted_double')
        .itemOutputs('12x gtceu:depleted_thorium_fuel_dust')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.macerator('gregification:macerate_depleted_thorium_quad')
        .itemInputs('gtceu:depleted_quad')
        .itemOutputs('24x gtceu:depleted_thorium_fuel_dust')
        .duration(400)
        .EUt(IV);
    */
});

