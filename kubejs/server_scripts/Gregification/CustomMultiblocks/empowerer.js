
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const empowerer = (inputs, fluidIn, outputs, fluidOut, eu, duration, customID, program) => {
        let id;
        if (customID) {
            id = `gregification:bacterial_vat/${customID}`;
        } else {
            let itemName = outputs.replace(/^\d+x\s+/, '').replace(':', '_');
            id = `gregification:empowerer/${itemName}`;            
        }
        let recipe = allthemods.recipes.gtceu.empowerer(id)
            .itemInputs(inputs)
            .itemOutputs(outputs)
            .duration(duration)
            .EUt(eu);
        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }
        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
        if (program) {
            recipe.circuit(program);
        }
    };



    //AA - empowered gems
    empowerer(
        [
            '#forge:storage_blocks/restonia',
            '4x #forge:storage_blocks/redstone',
            '4x #forge:storage_blocks/enderium',
            '4x #forge:storage_blocks/elementium'
        ],
        'gtceu:empowered_oil 4000',
        'gtceu:empowered_restonia_block',        
        null,
        LuV,
        300, null
    );

    empowerer(
        [
            '#forge:storage_blocks/palis',
            '4x #forge:storage_blocks/lapis',
            '4x #forge:storage_blocks/enderium',
            '4x #forge:storage_blocks/elementium'
        ],
        'gtceu:empowered_oil 4000',
        'gtceu:empowered_palis_block',
        null,
        LuV,
        300, null
    );

    empowerer(
        [
            '#forge:storage_blocks/enori',
            '4x #forge:storage_blocks/iron',
            '4x #forge:storage_blocks/enderium',
            '4x #forge:storage_blocks/elementium'
        ],
        'gtceu:empowered_oil 4000',
        'gtceu:empowered_enori_block',
        null,
        LuV,
        300, null
    );

    empowerer(
        [
            '#forge:storage_blocks/void_crystal',
            '4x #forge:storage_blocks/coal',
            '4x #forge:storage_blocks/enderium',
            '4x #forge:storage_blocks/elementium'
        ],
        'gtceu:empowered_oil 4000',
        'gtceu:empowered_void_crystal_block',
        null,
        LuV,
        300, null
    );

    empowerer(
        [
            '#forge:storage_blocks/diamatine',
            '4x #forge:storage_blocks/diamond',
            '4x #forge:storage_blocks/enderium',
            '4x #forge:storage_blocks/elementium'
        ],
        'gtceu:empowered_oil 4000',
        'gtceu:empowered_diamatine_block',
        null,
        LuV,
        300, null
    );

    empowerer(
        [
            '#forge:storage_blocks/emeradic',
            '4x #forge:storage_blocks/emerald',
            '4x #forge:storage_blocks/enderium',
            '4x #forge:storage_blocks/elementium'
        ],
        'gtceu:empowered_oil 4000',
        'gtceu:empowered_emeradic_block',
        null,
        LuV,
        300, null
    );

        empowerer(
        [
            '4x #forge:seeds',
            'gtceu:crystallized_seed'
        ],
        null,
        'gtceu:empowered_seed',
        null,
        LuV,
        300, null
    );
});