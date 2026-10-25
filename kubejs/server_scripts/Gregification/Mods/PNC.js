//@ts-check
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.shaped('pneumaticcraft:printed_circuit_board', [
        ' C ',
        'TPT',
        ' C '
    ], {
        C: '#gtceu:transistors',
        T: '#gtceu:capacitors',
        P: 'pneumaticcraft:unassembled_pcb',
    })
    allthemods.shaped('pneumaticcraft:printed_circuit_board', [
        ' T ',
        'CPC',
        ' T '
    ], {
        C: '#gtceu:transistors',
        T: '#gtceu:capacitors',
        P: 'pneumaticcraft:unassembled_pcb',
    })    

    allthemods.shaped('gtceu:pneumatic_assembler', [
        'TPT',
        'CHC',
        'TPT'
    ], {
        H: 'gtceu:lv_machine_hull',
        C: '#gtceu:circuits/lv',
        T: '#forge:plates/steel',
        P: 'gtceu:lv_electric_piston'
    }).id('gregification:pnc/pneumatic_assembler')

    allthemods.shaped('gtceu:industrial_pressure_chamber', [
        'PCP',
        'CHC',
        'PTP'
    ], {
        H: 'gtceu:lv_machine_hull',
        C: '#gtceu:circuits/lv',
        T: '#gtceu:wires/octal/cadmium_copper',
        P: 'gtceu:lv_electric_piston'
    }).id('gregification:pnc/pressure_chamber')

    allthemods.recipes.gtceu.assembler('gregification:flux_compressor')
        .itemInputs('gtceu:ev_machine_hull', 'pneumaticcraft:printed_circuit_board', '#gtceu:circuits/ev', '2x #forge:gears/compressed_iron', '2x #forge:gears/plastic', 'ironfurnaces:silver_furnace', 'pneumaticcraft:turbine_rotor', 'pneumaticcraft:advanced_pressure_tube')
        .itemOutputs('pneumaticcraft:flux_compressor')
        .duration(2400)
        .EUt(HV);

    

});