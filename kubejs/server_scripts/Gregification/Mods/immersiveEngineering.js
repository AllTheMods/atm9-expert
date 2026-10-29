// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


//@ts-check
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    // --- BULK REMOVAL OPTIMIZATION ---
    // This single RegEx pass catches every explicit shape replacement, 
    // all wires, all coils, and the insulated coils.
    const ieRemoves = [
        'rs_engineering',
        'light_engineering',
        'heavy_engineering',
        'component_iron',
        'component_steel',
        'sheetmetal_iron',
        'sheetmetal_steel',
        'wire_.*',      // Matches wire_copper, wire_electrum, etc.
        'wirecoil_.*'   // Matches wirecoil_copper, wirecoil_copper_ins, etc.
    ];
    allthemods.remove({ id: new RegExp('^immersiveengineering:crafting/(' + ieRemoves.join('|') + ')$') });


    // --- HELPER FUNCTIONS ---
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

    const replaceShaped = (recipeID, itemID, schema, ingredients) => {
        // Removal is now handled by the bulk optimizer above
        // @ts-ignore
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);
    }

    // --- SHAPED RECIPE REPLACEMENTS ---
    replaceShaped("immersiveengineering:crafting/rs_engineering", "immersiveengineering:rs_engineering",
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:frames/compressed_iron",
            L: "#forge:plates/redstone",
            E: "pneumaticcraft:compressed_stone"
        }
    )

    replaceShaped("immersiveengineering:crafting/light_engineering", "immersiveengineering:light_engineering",
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:frames/compressed_iron",
            L: "immersiveengineering:component_iron",
            E: "pneumaticcraft:compressed_stone"
        }
    )

    replaceShaped("immersiveengineering:crafting/heavy_engineering", "immersiveengineering:heavy_engineering",
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:frames/steel",
            L: "immersiveengineering:component_steel",
            E: "pneumaticcraft:compressed_stone"
        }
    )

    replaceShaped("immersiveengineering:crafting/component_iron", "immersiveengineering:component_iron",
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:plates/iron",
            L: "#forge:rods/long/compressed_iron",
            E: "pneumaticcraft:printed_circuit_board"
        }
    )

    replaceShaped("immersiveengineering:crafting/component_steel", "immersiveengineering:component_steel",
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:plates/dark_steel",
            L: "#forge:rods/long/compressed_iron",
            E: "pneumaticcraft:printed_circuit_board"
        }
    )

    replaceShaped("immersiveengineering:crafting/sheetmetal_iron", "immersiveengineering:sheetmetal_iron",
        [
            'P P',
            ' E ',
            'P P'
        ],
        {
            P: "#forge:plates/iron",            
            E: "#forge:frames/compressed_iron"
        }
    )

    replaceShaped("immersiveengineering:crafting/sheetmetal_steel", "immersiveengineering:sheetmetal_steel",
        [
            'P P',
            ' E ',
            'P P'
        ],
        {
            P: "#forge:plates/dark_steel",            
            E: "#forge:frames/dark_steel"
        }
    )

    // --- WIRES & COILS ---
    const wires = ['copper', 'electrum', 'aluminum', 'steel', 'lead']    
    wires.forEach ((metal) => 
    {
        allthemods.recipes.gtceu.wiremill(`immersiveengineering:gregification/wire_${metal}`)
            .itemInputs(`#forge:plates/${metal}`)
            .itemOutputs(`immersiveengineering:wire_${metal}`)
            .circuit(1)
            .duration(200)
            .EUt(MV);
    });
    
    const coils = [
        {material: 'copper'}, 
        {material: 'electrum'}, 
        {material: 'steel'},
        {material: 'redstone'}
    ]
    coils.forEach ((metal) => 
    {
        allthemods.recipes.gtceu.wiremill(`immersiveengineering:gregification/wirecoil_${metal.material}`)
            .itemInputs(`#forge:plates/${metal.material}`)
            .itemOutputs(`immersiveengineering:wirecoil_${metal.material}`)
            .circuit(2)
            .duration(200)
            .EUt(MV);
    });

    // --- INSULATED COILS ---
    addAssembler("4x immersiveengineering:wirecoil_copper", "gtceu:rubber 288", "4x immersiveengineering:wirecoil_copper_ins", MV, 40)
    addAssembler("4x immersiveengineering:wirecoil_electrum", "gtceu:rubber 288", "4x immersiveengineering:wirecoil_electrum_ins", MV, 40)

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
