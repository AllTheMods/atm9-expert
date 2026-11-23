// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//search:unifier
ServerEvents.recipes(allthemods => {
        const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

        const unifyFluids = [
                { 'input': 'lubricant', output: 'gtceu:lubricant' },
                { 'input': 'biodiesel', output: 'gtceu:bio_diesel' },
                { 'input': 'will', output: 'gtceu:demon' },
                { 'input': 'honey', output: 'productivebees:honey' }
        ]
        const fluidRate = 8;
        const unifierDuration = 10;

        unifyFluids.forEach((fluid, index) => {
                allthemods.recipes.gtceu.unifier(`gregification:${fluid.input}_unification`)
                        .inputFluids(`#forge:${fluid.input} ${fluidRate}`)
                        .outputFluids(`${fluid.output} ${fluidRate}`)
                        .circuit(index + 1)
                        .duration(unifierDuration)
                        .EUt(LV);
        });

        const unifyItems = [
                { 'input': '#forge:dusts/sulfur', output: 'gtceu:sulfur' },
                
        ]
        
        unifyItems.forEach((item, index) => {
                allthemods.recipes.gtceu.unifier(`gregification:${item.input}_unification`)
                        .itemInputs(`${item.input}`)
                        .itemOutputs(`${item.output}`)
                        .circuit(index + 1)
                        .duration(unifierDuration)
                        .EUt(LV);
        });

        ['LV', 'MV', 'HV', 'EV', 'IV', 'LuV', 'ZPM', 'UV', 'UHV', 'UEV', 'UIV', 'UXV', 'OpV', 'MAX'].forEach((tier, index) => {
                allthemods.recipes.gtceu.unifier(`gregification:${tier.toLowerCase()}_universal_circuit_unification`)
                        .itemInputs(`#gtceu:circuits/${tier.toLowerCase()}`)
                        .itemOutputs(`1x gtceu:${tier.toLowerCase()}_universal_circuit`)
                        .circuit(index + 1)
                        .duration(1)
                        .EUt(8);
        });

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
