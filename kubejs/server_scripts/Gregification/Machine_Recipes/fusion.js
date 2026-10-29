// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

    

    const stages = {
        1: 100000,
        2: 262144,
        3: 1048576
    }
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    
    /**
     * Helper to add GTCEu Fusion Reactor Recipes 
     * @param {string[]} fluidIn - Array of fluid inputs (Fluid.of('mod:id', amount))
     * @param {string[]} fluidOut - Array of fluid outputs (Fluid.of('mod:id', amount))
     * @param {number} eu - Energy per tick
     * @param {number} duration - Duration in ticks
     * @param {number} cost - The starting energy (fusionStartEU)
     */
    const addFusion = (fluidIn, fluidOut, eu, duration, cost) => {
        // Safely extract the fluid string from the KubeJS Fluid object/array
        const outputID = fluidOut.replace(/[^a-z0-9]/gi, '_');
        
        let recipe = allthemods.recipes.gtceu.fusion_reactor(`allthemods:fusion/${outputID}`)
            .inputFluids(fluidIn)
            .outputFluids(fluidOut)
            .duration(duration)
            .EUt(eu)        
            .fusionStartEU(cost);
            
        return recipe;
    };
    
    //naquadria stage 2
    addFusion(
        [            
            '#forge:naquadria 72',
            '#forge:liquid_chaos 72'
        ],
        'gtceu:naquadria_stage_2_plasma 72',
        IV,
        20,
        stages[1]
    )

    //naquadria stage 3
    addFusion(
        [            
            '#forge:naquadria_stage_2_plasma 72',
            '#forge:liquid_chaos 72'
        ],
        'gtceu:naquadria_stage_3_plasma 72',
        LuV,
        20,
        stages[2]
    )

    //naquadria stage 4
    addFusion(
        [            
            '#forge:naquadria_stage_3_plasma 72',
            '#forge:polonium 72'
        ],
        'gtceu:naquadria_stage_4_plasma 72',
        ZPM,
        20,
        stages[3]
    )

    //naquadria awakened
    addFusion(
        [            
            '#forge:naquadria_stage_4_plasma 72',
            '#forge:antimatter_plasma 72'
        ],
        'gtceu:naquadria_awakened_plasma 72',
        UV,
        20,
        stages[3]
    )

    addFusion(
        [            
            '#forge:beryllium 72',
            '#forge:plutonium 72'
        ],
        'gtceu:californium_plasma 72',
        UV,
        20,
        stages[2]
    )

    addFusion(
        [            
            '#forge:californium_plasma 72',
            '#forge:calcium_plasma 72'
        ],
        'gtceu:oganesson_plasma 72',
        UV,
        20,
        stages[3]
    )

    //bohrium
    addFusion(
        [
            '#forge:chromium_plasma 72',
            '#forge:bismuth 72'
        ],
        'gtceu:bohrium 72',
        ZPM,
        20,
        stages[2]
    )

    //copernicium
    addFusion(
        [
            '#forge:zinc_plasma 72',
            '#forge:lead 72'
        ],
        'gtceu:copernicium 72',
        UV,
        20,
        stages[2]
    )
    
    //nihonium
    addFusion(
        [
            '#forge:zinc_plasma 72',
            '#forge:bismuth 72'
        ],
        'gtceu:nihonium 72',
        UV,
        20,
        stages[2]
    )

    //flerovium
    addFusion(
        [
            '#forge:calcium_plasma 72',
            '#forge:plutonium 72'
        ],
        'gtceu:flerovium 72',
        UV,
        20,
        stages[3]
    )

    //moscovium
    addFusion(
        [
            '#forge:calcium_plasma 72',
            '#forge:americium 72'
        ],
        'gtceu:moscovium 72',
        UV,
        20,
        stages[3]
    )

    //livermorium
    addFusion(
        [
            '#forge:calcium_plasma 72',
            '#forge:curium 72'
        ],
        'gtceu:livermorium 72',
        UV,
        20,
        stages[3]
    )

    //tennessine
    addFusion(
        [
            '#forge:calcium_plasma 72',
            '#forge:berkelium 72'
        ],
        'gtceu:tennessine 72',
        UV,
        20,
        stages[3]
    )

    //rutherfordium
    addFusion(
        [
            '#forge:oxygen_plasma 72',
            '#forge:curium 72'
        ],
        'gtceu:rutherfordium 72',
        ZPM,
        20,
        stages[2]
    )

    //dubnium
    addFusion(
        [
            '#forge:nitrogen_plasma 72',
            '#forge:californium 72'
        ],
        'gtceu:dubnium 72',
        ZPM,
        20,
        stages[2]
    )

    //seaborgium
    addFusion(
        [
            '#forge:oxygen_plasma 72',
            '#forge:californium 72'
        ],
        'gtceu:seaborgium 72',
        ZPM,
        20,
        stages[2]
    )

    //hassium
    addFusion(
        [
            '#forge:iron_plasma 72',
            '#forge:lead 72'
        ],
        'gtceu:hassium 72',
        ZPM,
        20,
        stages[2]
    )

    //meitnerium
    addFusion(
        [
            '#forge:iron_plasma 72',
            '#forge:bismuth 72'
        ],
        'gtceu:meitnerium 72',
        ZPM,
        20,
        stages[2]
    )

    //roentgenium
    addFusion(
        [
            '#forge:nickel_plasma 72',
            '#forge:bismuth 72'
        ],
        'gtceu:roentgenium 72',
        UV,
        20,
        stages[2]
    )

    //mendelevium
    addFusion(
        [
            '#forge:helium_plasma 72',
            '#forge:einsteinium 72'
        ],
        'gtceu:mendelevium 72',
        ZPM,
        20,
        stages[1]
    )

    //lawrencium
    addFusion(
        [
            '#forge:oxygen_plasma 72',
            '#forge:americium 72'
        ],
        'gtceu:lawrencium 72',
        ZPM,
        20,
        stages[2]
    )

    //nobelium
    addFusion(
        [
            '#forge:oxygen_plasma 72',
            '#forge:plutonium 72'
        ],
        'gtceu:nobelium 72',
        ZPM,
        20,
        stages[1]
    )

    //francium
    addFusion(
        [
            '#forge:oxygen_plasma 72',
            '#forge:gold 72'
        ],
        'gtceu:francium 72',
        ZPM,
        20,
        stages[2]
    )
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
