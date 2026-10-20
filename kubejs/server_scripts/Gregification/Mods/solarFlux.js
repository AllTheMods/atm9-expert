ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const cellDuration = 600;
    const mirrorDuration = 200;
    const upgradeDuration = 400;
    const panelDuration = 1000;

    const COIL_TEMPS = {
        CUPRONICKEL: 1800,
        KANTHAL: 2700,
        NICHROME: 3600,
        RTM: 4500,
        HSS_G: 5400,
        NAQUADAH: 7200,
        TRINIUM: 9000,
        TRITANIUM: 10800,
        DRACONIUM: 11200,
        DRACONIUM_AWAKENED: 12800,
        ETRIUM: 13500,
        INFINITY: 15000
    };


    const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration, program) => {
        const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.assembler(`gregification:assembler/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
        if (program) {
            recipe.circuit(program);
        }
    };

    
    //mirror
    addAssembler(
        [
            '2x gtceu:tempered_glass',
            '2x #forge:plates/silver',
            '#forge:frames/steel'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:mirror',
        MV,
        mirrorDuration        
    );

    //emerald
    addAssembler(
        [
            '2x gtceu:laminated_glass',
            '2x #forge:plates/sterling_silver',
            '#forge:frames/dark_steel',
            'solarflux:mirror'
        ],
        '#forge:polytetrafluoroethylene 288',
        '2x solarflux:emerald_glass',
        IV,
        mirrorDuration
    );

    //ender
    addAssembler(
        [
            '2x gtceu:laminated_glass',
            '2x #forge:plates/selenium',
            '#forge:frames/end_steel',
            'solarflux:emerald_glass'
        ],
        '#forge:polybenzimidazole 288',
        '2x solarflux:ender_glass',
        LuV,
        mirrorDuration
    );

    //blazing
    addAssembler(
        [
            '2x gtceu:laminated_glass',
            '2x #forge:plates/scandium',
            '#forge:frames/naquadah_alloy',
            'solarflux:ender_glass',
            'gtceu:quantum_eye'
        ],
        '#forge:polybenzimidazole 288',
        '2x solarflux:blazing_coating',
        ZPM,
        mirrorDuration
    );

    // Cell 1 (Tier 1)
    addAssembler(
        [
            '3x solarflux:mirror',
            '2x #gtceu:wires/copper',
            'gtceu:mv_machine_hull',            
            '2x #forge:plates/lapis'
        ],
        '#forge:polyethylene 288',
        '1x solarflux:photovoltaic_cell_1',
        MV,
        cellDuration,
        1
    );

    // Cell 2 (Tier 1)
    addAssembler(
        [
            '2x solarflux:mirror',
            '1x solarflux:photovoltaic_cell_1',
            '2x #gtceu:wires/copper',
            'gtceu:mv_machine_hull',
            '2x #forge:plates/lapis'
        ],
        '#forge:polyethylene 288',
        '1x solarflux:photovoltaic_cell_2',
        HV,
        cellDuration,
        2
    );

    // Cell 3 (Tier 2)
    addAssembler(
        [
            '2x solarflux:mirror',
            '1x solarflux:photovoltaic_cell_2',
            '2x #gtceu:wires/electrum',
            'gtceu:hv_machine_hull',
            '2x #forge:plates/glowstone'
        ],
        '#forge:polyvinyl_chloride 288',
        '1x solarflux:photovoltaic_cell_3',
        EV,
        cellDuration,
        3
    );

    // Cell 4 (Tier 2)
    addAssembler(
        [
            '2x solarflux:emerald_glass',
            '1x solarflux:photovoltaic_cell_3',
            '2x #gtceu:wires/electrum',
            'gtceu:hv_machine_hull',
            '2x #forge:plates/glowstone'
        ],
        '#forge:polytetrafluoroethylene 288',
        '1x solarflux:photovoltaic_cell_4',
        IV,
        cellDuration,
        4
    );

    // Cell 5 (Tier 3)
    addAssembler(
        [
            '2x solarflux:ender_glass',
            '1x solarflux:photovoltaic_cell_4',
            '2x #gtceu:wires/end_steel',
            'gtceu:ev_machine_hull',
            '2x #forge:plates/diamond',            
        ],
        '#forge:polybenzimidazole 288',
        '1x solarflux:photovoltaic_cell_5',
        LuV,
        cellDuration,
        5
    );

    // Cell 6 (Tier 3)
    addAssembler(
        [
            '2x solarflux:blazing_coating',
            '1x solarflux:photovoltaic_cell_5',
            '2x #gtceu:wires/end_steel',
            'gtceu:ev_machine_hull',
            '2x #forge:plates/diamond',            
        ],
        '#forge:polybenzimidazole 288',
        '1x solarflux:photovoltaic_cell_6',
        ZPM,
        cellDuration,
        6
    );

    // Tier 1
    addAssembler(
        [
            'solarflux:photovoltaic_cell_1',
            'gtceu:mv_machine_hull',
            '2x #gtceu:circuits/mv',
            '2x solarflux:mirror',
            '2x #forge:plates/aluminum'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_1',
        MV,
        panelDuration
    );
    
    // Tier 2
    addAssembler(
        [
            'solarflux:photovoltaic_cell_1',
            '4x solarflux:sp_1',
            'gtceu:mv_machine_hull',
            '2x #gtceu:circuits/mv',
            '2x solarflux:mirror',
            '2x #forge:plates/signalum'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_2',
        HV,
        panelDuration
    );

    // Tier 3
    addAssembler(
        [
            'solarflux:photovoltaic_cell_2',
            '4x solarflux:sp_2',
            'gtceu:hv_machine_hull',
            '2x #gtceu:circuits/hv',
            '2x solarflux:mirror',
            '2x #forge:plates/signalum'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_3',
        HV,
        panelDuration
    );

    // Tier 4
    addAssembler(
        [
            'solarflux:photovoltaic_cell_2',
            '4x solarflux:sp_3',
            'gtceu:hv_machine_hull',
            '2x #gtceu:circuits/hv',
            '2x solarflux:mirror',
            '2x #forge:plates/lumium'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_4',
        EV,
        panelDuration
    );

    // Tier 5
    addAssembler(
        [
            'solarflux:photovoltaic_cell_3',
            '4x solarflux:sp_4',
            'gtceu:ev_machine_hull',
            '2x #gtceu:circuits/ev',
            '2x solarflux:mirror',
            '2x #forge:plates/enderium'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_5',
        EV,
        panelDuration
    );

    // Tier 6
    addAssembler(
        [
            'solarflux:photovoltaic_cell_3',
            '4x solarflux:sp_5',
            'gtceu:ev_machine_hull',
            '2x #gtceu:circuits/ev',
            '2x solarflux:mirror',
            '2x #forge:plates/draconium'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_6',
        IV,
        panelDuration
    );

    // Tier 7
    addAssembler(
        [
            'solarflux:photovoltaic_cell_4',
            '4x solarflux:sp_6',
            'gtceu:iv_machine_hull',
            '2x #gtceu:circuits/iv',
            '2x solarflux:emerald_glass',
            '2x #forge:ingots/fiery'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_7',
        IV,
        panelDuration
    );

    // Tier 8
    addAssembler(
        [
            'solarflux:photovoltaic_cell_4',
            '4x solarflux:sp_7',
            'gtceu:iv_machine_hull',
            '2x #gtceu:circuits/iv',
            '2x solarflux:emerald_glass',
            '2x #forge:ingots/knightmetal'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_8',
        LuV,
        panelDuration
    );

    // Wyvern
    addAssembler(
        [
            'solarflux:photovoltaic_cell_5',
            '4x solarflux:sp_8',
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x solarflux:ender_glass',
            'draconicevolution:wyvern_core',
            '2x draconicevolution:wyvern_energy_core',
            '2x gtceu:selenium_rectifier',
            '8x #forge:foils/cadmium_telluride'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_de.wyvern',
        LuV,
        panelDuration
    );

    /*
    // cadmium
    addAssembler(
        [
            'solarflux:photovoltaic_cell_5',
            '4x solarflux:sp_8',
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x solarflux:ender_glass',
            '4x #gtceu:wires/hex/cadmium_copper',            
            '2x gtceu:selenium_rectifier'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_custom_cadmium_pannel',
        LuV,
        panelDuration
    );*/


    // Draconic
    addAssembler(
        [
            'solarflux:photovoltaic_cell_5',
            '4x solarflux:sp_de.wyvern',
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x solarflux:ender_glass',
            'draconicevolution:awakened_core',
            '2x draconicevolution:draconic_energy_core',
            '2x gtceu:selenium_rectifier',
            '8x #forge:foils/cadmium_telluride'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_de.draconic',
        ZPM,
        panelDuration
    );

    // Chaotic
    addAssembler(
        [
            'solarflux:photovoltaic_cell_6',
            '4x solarflux:sp_de.draconic',
            'gtceu:zpm_machine_hull',
            '2x #gtceu:circuits/zpm',
            '2x solarflux:blazing_coating',
            'draconicevolution:chaotic_core',
            '2x draconicevolution:chaotic_energy_core',            
            '8x #forge:foils/cadmium_telluride',
            '8x gtceu:germanium_diode'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_de.chaotic',
        ZPM,
        panelDuration
    );

    // Blank
    addAssembler(
        [
            '#gtceu:circuits/mv',
            '2x #gtceu:wires/quadruple/fluix',
            '4x #forge:rings/soularium'
        ],
        '#forge:polyethylene 288',
        '2x solarflux:blank_upgrade',
        MV,
        upgradeDuration
    );

    // Efficiency
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/iv',
            '2x #forge:plates/hafnium',
            '4x #forge:dusts/redstone'
        ],
        '#forge:polytetrafluoroethylene 288',
        'solarflux:efficiency_upgrade',        
        IV,
        upgradeDuration
    );

    // Transfer
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/hv',
            '2x #forge:plates/electrum',
            '4x #forge:dusts/redstone'
        ],
        '#forge:polyethylene 288',
        'solarflux:transfer_rate_upgrade',
        HV,
        upgradeDuration
    );

    // Capacity
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/ev',
            '2x #forge:plates/diamond',
            '4x #forge:dusts/redstone'
        ],
        '#forge:polyethylene 288',
        'solarflux:capacity_upgrade',
        EV,
        upgradeDuration
    );

    // Machine Traversal
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_field_generator',
            '4x #forge:dusts/ender'
        ],
        '#forge:polyethylene 288',
        'solarflux:traversal_upgrade',
        EV,
        upgradeDuration,
        1
    );

    // Dispersive
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_field_generator',
            '4x #forge:dusts/ender'
        ],
        '#forge:polyethylene 288',
        'solarflux:dispersive_upgrade',
        EV,
        upgradeDuration,
        2
    );

    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_field_generator',
            '4x #forge:dusts/ender'
        ],
        '#forge:polyethylene 288',
        'solarflux:block_charging_upgrade',
        EV,
        upgradeDuration,
        3
    );

    // Furnace
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_field_generator',
            '4x #forge:plates/elementium'
        ],
        '#forge:polyethylene 288',
        'solarflux:furnace_upgrade',
        HV,
        upgradeDuration
    );

    // AE2
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/hv',
            'ae2:energy_acceptor',
            '4x #forge:plates/elementium'
        ],
        '#forge:polyethylene 288',
        'solarflux:ae2/energy_upgrade',
        HV,
        upgradeDuration
    );

    // Twilight
    addAssembler(
        [
            'solarflux:efficiency_upgrade',
            '#gtceu:circuits/iv',
            '2x #forge:gems/carminite',
            '2x #forge:ingots/ironwood'
        ],
        '#forge:polytetrafluoroethylene 288',
        'solarflux:twilightforest/twilight_upgrade',
        IV,
        upgradeDuration,        
    );

    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:indium/precipitate_hydroxide')
        .itemInputs('4x #forge:dusts/indium', '12x #forge:dusts/sodium_hydroxide')
        .inputFluids('#forge:sulfuric_acid 6000')
        .itemOutputs('4x gtceu:indium_hydroxide_dust', '6x gtceu:sodium_sulfate_dust')
        .outputFluids('gtceu:hydrogen 12000')
        .duration(400)
        .EUt(IV);
        
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:perovskite/caesium_hydroxide')
        .itemInputs('2x #forge:dusts/caesium')
        .inputFluids('minecraft:water 2000')
        .itemOutputs('2x gtceu:caesium_hydroxide_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:perovskite/lead_chloride')
        .itemInputs('2x gtceu:lead_sulfate_cake_dust')
        .inputFluids('#forge:hydrochloric_acid 4000')
        .itemOutputs('2x gtceu:lead_chloride_dust')
        .outputFluids('gtceu:sulfuric_acid 2000')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:perovskite/caesium_bromide')
        .itemInputs('2x #forge:dusts/caesium_hydroxide')
        .inputFluids('#forge:hydrobromic_acid 2000')
        .itemOutputs('2x gtceu:caesium_bromide_dust')
        .outputFluids('minecraft:water 2000')
        .duration(400)
        .EUt(IV);
            
    allthemods.recipes.gtceu.dissolution_tank('gregification:perovskite/ink')
        .itemInputs('2x #forge:dusts/lead_chloride', '6x #forge:dusts/caesium_bromide')
        .inputFluids('#forge:ethanol 2000')
        .itemOutputs('4x gtceu:caesium_chloride_dust')
        .outputFluids('gtceu:perovskite_ink 2000')
        .addData('ebf_temp', COIL_TEMPS.HSS_G)
        .duration(400)
        .EUt(IV);
        
    allthemods.recipes.gtceu.distillation_tower('gregification:perovskite/crystallize')
        .inputFluids('#forge:perovskite_ink 2000')
        .itemOutputs('2x gtceu:caesium_lead_bromide_dust')
        .outputFluids('gtceu:ethanol 2000')
        .duration(400)
        .EUt(IV);
    
    allthemods.recipes.gtceu.assembler('gregification:perovskite/photovoltaic_cell')
        .itemInputs('solarflux:photovoltaic_cell_4',
            '2x gtceu:tempered_glass',
            '2x #forge:dusts/indium_tin_oxide',
            '2x #forge:dusts/caesium_lead_bromide',
            '4x #forge:foils/silver')
        .inputFluids('#forge:polytetrafluoroethylene 288')
        .itemOutputs('gtceu:perovskite_photovoltaic_cell')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(600)
        .EUt(LuV);
    
    allthemods.recipes.gtceu.mixer('gregification:perovskite/ito_blend')
        .itemInputs('9x #forge:dusts/indium_iii_oxide', '1x #forge:dusts/cassiterite')
        .itemOutputs('10x gtceu:indium_tin_oxide_dust')
        .duration(200)
        .EUt(EV);
});