//@ts-check
ServerEvents.recipes(allthemods => {

    const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration, program) => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
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

    const replaceShaped = (recipeID, itemID, schema, ingredients) => {        
        // @ts-ignore
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);

    }

    replaceShaped("pipez:item_pipe","16x pipez:item_pipe",
    [
        'PPP',
        'L L',
        'PPP'
    ],
    {
        P: "#forge:plates/pulsating_alloy",
        L: "gtceu:lv_electric_piston"
    }
    )

    replaceShaped("pipez:fluid_pipe","16x pipez:fluid_pipe",
    [
        'PPP',
        'L L',
        'PPP'
    ],
    {
        P: "#forge:plates/brass",
        L: "gtceu:lv_electric_pump"
    }
    )

    replaceShaped("pipez:gas_pipe","16x pipez:gas_pipe",
    [
        'PPP',
        'L L',
        'PPP'
    ],
    {
        P: "#forge:plates/compressed_iron",
        L: "mekanism:alloy_infused"
    }
    )
    
    replaceShaped("pipez:energy_pipe","16x pipez:energy_pipe",
    [
        'PPP',
        'L L',
        'PPP'
    ],
    {
        P: "#forge:plates/energetic_alloy",
        L: "gtceu:lv_voltage_coil"
    }
    )
        
    addAssembler(
        [
            "4x pipez:item_pipe",
            "4x pipez:fluid_pipe",
            "4x pipez:energy_pipe",
            "4x #forge:plates/vibrant_alloy"
        ],
        "#forge:lubricant 100",
        "16x pipez:universal_pipe",
        MV,
        100
    )
    
    replaceShaped("pipez:basic_upgrade", null,
    [
        'IPI',
        'PBP',
        'IPI'

    ],
    {
        P: "#forge:plates/conductive_alloy",
        B: "pneumaticcraft:printed_circuit_board",
        I: "#forge:plates/plastic"

    }
    )

    replaceShaped("pipez:improved_upgrade", null,
    [
        'IPI',
        'PBP',
        'IPI'

    ],
    {
        P: "#forge:plates/signalum",
        B: "pneumaticcraft:printed_circuit_board",
        I: "#forge:plates/plastic"

    }
    )

    replaceShaped("pipez:advanced_upgrade", null,
    [
        'IPI',
        'PBP',
        'IPI'

    ],
    {
        P: "#forge:plates/lumium",
        B: "pneumaticcraft:printed_circuit_board",
        I: "#forge:plates/plastic"

    }
    )
    
    replaceShaped("pipez:ultimate_upgrade", null,
    [
        'IPI',
        'PBP',
        'IPI'

    ],
    {
        P: "#forge:plates/enderium",
        B: "pneumaticcraft:printed_circuit_board",
        I: "#forge:plates/plastic"

    }
    )

    //---LASER IO---
    replaceShaped("laserio:laser_connector", null,
        [
            'PFP',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/lumium",
            C: "laserio:logic_chip",
            F: "gtceu:hv_field_generator",
            A: "gtceu:hv_machine_hull",
            G: "gtceu:laminated_glass"            
        }
    )

    replaceShaped("laserio:laser_connector_advanced", null,
        [
            'PDP',
            'WLW',
            'PWP'

        ],
        {
            L: "laserio:laser_connector",
            P: "#forge:plates/enderium",
            W: "#forge:foils/cadmium_selenide",
            D: "#forge:lenses/praseodymium_doped_yttrium_aluminium_garnet"
            
        }
    )

    replaceShaped("laserio:laser_node", null,
        [
            'PGP',
            'GAG',
            'PGP'

        ],
        {
            P: "#forge:plates/plastic",                        
            A: "laserio:laser_connector",
            G: "gtceu:tempered_glass"
        }
    )
    replaceShaped("laserio:logic_chip_raw", "4x laserio:logic_chip_raw",
        [
            'PBP',
            'GAG',
            'PBP'

        ],
        {
            P: "#forge:plates/vibrant_alloy",                        
            A: "#gtceu:circuits/mv",
            G: "#forge:dusts/redstone",
            B: "#forge:plates/plastic"
        }
    )

});