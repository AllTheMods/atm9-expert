// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.forEachRecipe({ type: 'gtceu:pyrolyse_oven' }, rawRecipe => {

        let recipe = JSON.parse(rawRecipe.json)
        recipe.category = "gtceu:gregstar";
        recipe.type = "gtceu:superheated_pyrolyzing_oven";
        let unmodifiedRecipe = JSON.parse(JSON.stringify(recipe))
        allthemods.custom(unmodifiedRecipe)

        let durationMult = 20;
        let voltageMult = 50;
        let amountMult = 1000;


        let oldDuration = recipe.duration;
        let newDuration = oldDuration * durationMult;
        recipe.duration = newDuration;


        if (recipe.inputs.item) {
            recipe.inputs.item.forEach((itemInput) => {
                if (itemInput.content.type == 'gtceu:sized') {
                    let oldCount = parseInt(itemInput.content.count);
                    let newCount = oldCount * amountMult;
                    itemInput.content.count = newCount;
                } else if (itemInput.content.type == 'gtceu:circuit') {

                    let oldCircuit = parseInt(itemInput.content.configuration);
                    let newCircuit = (oldCircuit + 1) % 33;
                    itemInput.content.configuration = newCircuit;
                } else {
                    console.log("Unhandled input item type: " + itemInput.content.type);
                }
            });
        }


        if (recipe.inputs.fluid) {
            recipe.inputs.fluid.forEach((fluidInput) => {

                let oldAmount = parseInt(fluidInput.content.amount);
                let newAmount = oldAmount * amountMult;
                fluidInput.content.amount = newAmount;
            });
        }

        if (recipe.outputs.item) {
            recipe.outputs.item.forEach((itemOutput) => {
                if (itemOutput.content.type == 'gtceu:sized') {
                    let oldCount = parseInt(itemOutput.content.count);
                    let newCount = oldCount * amountMult;
                    itemOutput.content.count = newCount;
                }
                else if (itemOutput.chance !== undefined) {                    
                    let itemName = itemOutput.content.item;                    
                    itemOutput.content = {
                        type: 'gtceu:sized',
                        count: 1 * amountMult,
                        ingredient: {
                            item: itemName
                        }
                    };                    
                }
                else {
                    console.error("Recipe ID: " + rawRecipe.getId());
                    console.error("Raw JSON: " + rawRecipe.json);
                    console.log("Unhandled output item type: " + itemOutput.content.type);
                }
            });
        }


        if (recipe.outputs.fluid) {
            recipe.outputs.fluid.forEach((fluidOutput) => {

                let oldAmount = parseInt(fluidOutput.content.amount);
                let newAmount = oldAmount * amountMult;
                fluidOutput.content.amount = newAmount;
            });
        }


        if (recipe.tickInputs.eu) {
            recipe.tickInputs.eu.forEach((euInput) => {
                let oldVoltage = euInput.content;
                let newVoltage = oldVoltage * voltageMult;
                euInput.content = newVoltage;
            });
        }

        allthemods.custom(recipe);

    });

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
