// priority: 10
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')
const $FluidStackJS = Java.loadClass('dev.latvian.mods.kubejs.fluid.FluidStackJS')

ServerEvents.recipes(allthemods => {

    let jsonFolder = global.readJsonFolderFromMod("data", "productivebees", "productivebees")
    let data = Object.keys(jsonFolder)
    let goodBeeGenes = '{bee_weather_tolerance: 2, bee_productivity: 3, bee_behavior: 2, '

    // the 96 element bees (ChemLib replacements) get their apiary recipes from apiary_recipes_elements.js
    const ELEMENT_BEES = ['actinium', 'americium', 'antimony', 'argon', 'arsenic', 'astatine', 'barium', 'berkelium', 'beryllium', 'bohrium', 'boron', 'bromine', 'cadmium', 'calcium', 'californium', 'cerium', 'cesium', 'chlorine', 'chromium', 'copernicium', 'curium', 'darmstadtium', 'dubnium', 'dysprosium', 'einsteinium', 'erbium', 'europium', 'fermium', 'flerovium', 'fluorine', 'francium', 'gadolinium', 'gallium', 'germanium', 'hafnium', 'hassium', 'helium', 'holmium', 'hydrogen', 'indium', 'iodine', 'krypton', 'lanthanum', 'lawrencium', 'lithium', 'livermorium', 'lutetium', 'magnesium', 'manganese', 'meitnerium', 'mendelevium', 'mercury', 'moscovium', 'neon', 'neptunium', 'nihonium', 'niobium', 'nitrogen', 'nobelium', 'oganesson', 'oxygen', 'phosphorus', 'plutonium', 'polonium', 'potassium', 'praseodymium', 'promethium', 'protactinium', 'radium', 'radon', 'rhenium', 'rhodium', 'roentgenium', 'rubidium', 'ruthenium', 'rutherfordium', 'samarium', 'scandium', 'seaborgium', 'selenium', 'silicium', 'sodium', 'strontium', 'tantalum', 'technetium', 'tellurium', 'tennessine', 'terbium', 'thallium', 'thorium', 'thulium', 'vanadium', 'xenon', 'ytterbium', 'yttrium', 'zirconium']

    function makeName(inputString) {
        let underscore = inputString.split('_')
        let returnString = ''
        if (inputString == 'bee') { returnString = 'Bee' }
        else if (inputString == 'creeper_bee') { returnString = 'CreeBee' }
        else if (inputString == 'chocolate') { returnString = 'Choco Bee' }
        else if (inputString == 'pepto_bismol') { returnString = 'Pepto Beesmol' }
        else if (inputString == 'zombie') { returnString = 'ZomBee' }
        else if (inputString == 'basalz') { returnString = 'BazBee' }
        else if (inputString == 'ruby') { returnString = 'RuBee' }
        else if (inputString == 'cheese') { returnString = 'CheezyB' }
        else if (inputString == 'sky_ingot') { returnString = 'Bee of the Sky' }
        else if (inputString == 'grave') { returnString = 'Grave\'s Bee' }
        else if (inputString == 'spacial') { returnString = 'Spatial Bee' }
        else if (inputString == 'neutronium') { returnString = 'Not a Neutronium Bee' }
        else if (inputString == 'soul_shard') { returnString = 'Soul Bee' }
        else if (inputString == 'prosperity') { returnString = 'ProsperiBee' }
        else if (inputString == 'blitz') { returnString = 'BitzBee' }
        else if (inputString == 'gregstar') { returnString = 'GregStar Bee' }
        else if (inputString == 'red_shroom') { returnString = 'Red Shroombee' }
        else if (inputString == 'aluminum') { returnString = 'Aluminium Bee' }
        else if (inputString == 'blizz') { returnString = 'BizBee' }
        else if (inputString == 'infinity') { returnString = 'Bee of Infinity' }
        else if (inputString == 'arcane_crystal') { returnString = 'Arcanus Bee' }
        else if (inputString == 'netherite') { returnString = 'Ancient Bee' }
        else if (underscore.length == 1) { returnString = inputString.charAt(0).toUpperCase() + inputString.slice(1) + ' Bee' }
        else { returnString = underscore[0].charAt(0).toUpperCase() + underscore[0].slice(1) + ' ' + underscore[1].charAt(0).toUpperCase() + underscore[1].slice(1) + ' Bee' }
        return returnString
    }

    // chemlib is gone: the bee data this script reads still names chemlib flowers, so remap to GT
    let lastFlower = '?'
    function plain(v) { return String(v).replace(/^"|"$/g, '') }
    function gtFlower(beeType, id, isFluid) {
        let str = plain(id)
        lastFlower = str
        if (str.startsWith('chemlib:')) return isFluid ? 'gtceu:' + beeType : 'gtceu:' + beeType + '_block'
        return str
    }

    // no GT block for this material: use its GT fluid if it has one, else its dust tag
    // (the flower is only a non-consumed machine input). Returns the flower, or null if neither exists.
    function flowerFallback(beeType, recipeBuilder) {
        let fluid = Fluid.of('gtceu:' + beeType, 1000)
        if (!fluid.isEmpty()) {
            recipeBuilder.notConsumableFluid(fluid)
            return fluid
        }
        let tag = '#forge:dusts/' + beeType
        if (!Ingredient.of(tag).getItemIds().isEmpty()) {
            recipeBuilder.notConsumable(Ingredient.of(tag))
            return Ingredient.of(tag)
        }
        return null
    }

    function addOutputs(recipeBuilder, output, count) {
        let i = count
        while (i > 127) {
            recipeBuilder.itemOutputs(output.withCount(127))
            i = i - 127
        }
        recipeBuilder.itemOutputs(output.withCount(i))
    }

    function addChancedOutputs(recipeBuilder, output, chance, count) {
        let i = count
        while (i > 127) {
            recipeBuilder.chancedOutput(output.withCount(127), chance, 0)
            i = i - 127
        }
        recipeBuilder.chancedOutput(output.withCount(i), chance, 0)
    }

    function makeCircuitRecipes(id, input, flower, outputs) {
        let weakInput = IngredientHelper.weakNBT(Item.of(input))
        let upgradeProd4 = Item.of('productivebees:upgrade_productivity_4')
        let cachedOutputs = outputs.map(output => {
            let cachedItem = Item.of(output.item)
            return {
                item: cachedItem,
                hasNBT: cachedItem.hasNBT(),
                chance: output.chance
            }
        })

        let isFluidFlower = flower instanceof $FluidStackJS || (flower instanceof Array && flower[0] instanceof $FluidStackJS)

        // Modified logic: Only generate specific circuit tiers
        //const circuitTiers = [1, 5, 10, 20, 30];
        
        const circuitTiers = [5];

        circuitTiers.forEach(i => {
            let recipeBuilder = allthemods.recipes.gtceu.apiary_ii(id + '/circuit_' + i.toString())
                .circuit(i)
                .EUt(EV)
                .duration(5250 / 8)
                .notConsumable(weakInput.withCount(i))
                .notConsumable(upgradeProd4.withCount((Math.floor((i - 1) / 5) + 1) * 4))

            cachedOutputs.forEach((output) => {
                let qty = 40 * i
                if (output.chance == 10000) {
                    if (qty > 127 && output.hasNBT) {
                        addOutputs(recipeBuilder, output.item, qty)
                    } else {
                        recipeBuilder.itemOutputs(output.item.withCount(qty))
                    }
                } else {
                    if (qty > 127 && output.hasNBT) {
                        addChancedOutputs(recipeBuilder, output.item, output.chance, qty)
                    } else {
                        recipeBuilder.chancedOutput(output.item.withCount(qty), output.chance, 0)
                    }
                }
            })

            if (isFluidFlower) {
                recipeBuilder.notConsumableFluid(flower)
            } else {
                recipeBuilder.notConsumable(flower)
            }
        })
    }

    //////////////// machine controllers ////////////////
    allthemods.shaped('gtceu:apiary_i', ['BAB', 'ACA', 'WSW'],
        {
            A: '#gtceu:circuits/mv',
            W: 'gtceu:gold_single_cable',
            S: 'gtceu:clean_machine_casing',
            C: 'productivebees:upgrade_simulator',
            B: 'productivebees:upgrade_comb_block'
        }).id('gtceu:shaped/apiary_i')

    allthemods.shaped('gtceu:apiary_ii', ['CAC', 'ACA', 'WSW'],
        {
            A: '#gtceu:circuits/ev',
            W: 'gtceu:black_steel_single_cable',
            S: 'gtceu:stable_machine_casing',
            C: 'productivebees:upgrade_productivity_4',
        }).id('gtceu:shaped/apiary_ii')

    allthemods.shaped('gtceu:comb_processor', ['BAB', 'ACA', 'WSW'],
        {
            A: '#gtceu:circuits/mv',
            W: 'gtceu:gold_single_cable',
            S: 'gtceu:clean_machine_casing',
            C: 'productivebees:heated_centrifuge',
            B: 'gtceu:stainless_steel_rotor'
        }).id('gtceu:shaped/comb_processor')

    //////////////// apiary_i recipes ////////////////
    allthemods.forEachRecipe({ type: 'productivebees:advanced_beehive' }, rawRecipe => {
      let dbgBee = '?'
      lastFlower = '?'
      try {
        let recipe = JSON.parse(rawRecipe.json)
        let duration = 5250 / 2 
        let beeType = recipe.ingredient.split(':')[1] 
        dbgBee = beeType

        if (beeType != "rancher_bee" && beeType != "ether_gas" && beeType != "hematophagous" && !ELEMENT_BEES.includes(beeType)) {
            let input
            let input_ii
            if (beeType == 'creeper_bee') { 
                input = Item.of('productivebees:bee_cage', 1, '{name: "CreeBee", entity: "productivebees:creeper_bee"}')
                input_ii = Item.of('productivebees:bee_cage', 1, goodBeeGenes + 'name: "CreeBee", entity: "productivebees:creeper_bee"}')
            } else if (beeType == "bee") { 
                input = Item.of('productivebees:bee_cage', '{name: "Bee", entity: "minecraft:bee"}')
                input_ii = input.copy()
            } else {
                input = Item.of('productivebees:bee_cage', 1, '{type:"' + recipe.ingredient + '", entity: "productivebees:configurable_bee"}')
                input_ii = Item.of('productivebees:bee_cage', 1, goodBeeGenes + 'type:"' + recipe.ingredient + '", entity: "productivebees:configurable_bee"}')
            }
            let results = recipe.results 
            let flower

            let index = data.findIndex((key) => key.includes("/" + beeType + ".json"))
            let beeData = index != -1 ? jsonFolder[data[index]] : null

            let recipeBuilder = allthemods.recipes.gtceu.apiary_i('kubejs:gtceu/apiary_i/' + beeType)
                .EUt(MV)
                .duration(duration)
                .chancedInput(IngredientHelper.weakNBT(input), 100, 50)

            let outputs = []
            results.forEach((result) => {
                let outputItem = null
                let chance = 10000

                if (result.hasOwnProperty('item')) {
                    if (result.item.hasOwnProperty('item')) {
                        if (result.item.item == "productivebees:configurable_honeycomb") {
                            outputItem = Item.of("productivebees:configurable_comb", '{EntityTag:{type:"' + recipe.ingredient + '"}}')
                        } else if (result.item.item == 'productivebees:honeycomb_powdery') {
                            outputItem = Item.of("productivebees:comb_powdery")
                        } else if (result.item.item == 'minecraft:honeycomb') {
                            outputItem = Item.of("minecraft:honeycomb_block")
                        } else if (!result.item.hasOwnProperty('nbt')) {
                            outputItem = Item.of(result.item.item)
                        }
                    } else if (result.item.hasOwnProperty('tag')) {
                        if (result.item.tag == "tombstone:essence_of_undeath") {
                            outputItem = Item.of(result.item.tag)
                        } else if (result.item.tag != "forge:pollen") {
                            outputItem = Item.empty
                        }
                    }
                }

                if (outputItem != null && !outputItem.isEmpty()) {
                    if (result.hasOwnProperty('chance')) {
                        chance = result.chance * 100
                        if (outputItem.hasNBT()) {
                            recipeBuilder.chancedOutput(IngredientHelper.strongNBT(outputItem), chance, 0)
                        } else {
                            recipeBuilder.chancedOutput(outputItem, chance, 0)
                        }
                    } else {
                        if (outputItem.hasNBT()) {
                            recipeBuilder.itemOutputs(IngredientHelper.strongNBT(outputItem))
                        } else {
                            recipeBuilder.itemOutputs(outputItem)
                        }
                    }
                    outputs.push({ item: outputItem.copy(), chance: chance })
                }
            })

            let flowerThing
            let flowerArray = []
            if (beeData != null) { 
                if (beeType == "hyper_experience") {                    
                    flower = "minecraft:experience_bottle"
                }                
                else if (beeData.hasOwnProperty('flowerFluid')) {
                    flower = gtFlower(beeType, beeData.flowerFluid, true)
                    if (beeType == "oily") { 
                        flower = "thermal:crude_oil"
                        flowerArray = [Fluid.of(flower, 1000), Fluid.of("pneumaticcraft:oil", 1000)]
                    } else if (beeType == "salty") {
                        flower = "mekanism:brine" 
                    }
                    if (flowerArray.length > 0) {
                        recipeBuilder.notConsumableFluid(flowerArray)
                        flowerThing = flowerArray
                    } else {
                        recipeBuilder.notConsumableFluid(Fluid.of(flower, 1000))
                        flowerThing = Fluid.of(flower, 1000)
                    }
                } else if (beeData.hasOwnProperty('flowerBlock')) {
                    flower = gtFlower(beeType, beeData.flowerBlock, false)
                    if (beeType == "chocolate") { 
                        flower = "minecraft:cocoa_beans"
                    } else if (beeType == "molybdenum") {
                        flower = "gtceu:molybdenum_block"
                    } else if (beeType == "palladium") {
                        flower = "gtceu:palladium_block"
                    } else if (beeType == "neodymium") {
                        flower = "gtceu:neodymium_block"
                    }
                    if (Item.of(flower).isEmpty()) {
                        flowerThing = flowerFallback(beeType, recipeBuilder) || undefined
                        if (flowerThing == undefined) {
                            console.error('[apiary] unknown flower block for ' + beeType + ': ' + flower + ' (no gtceu:' + beeType + ' fluid or #forge:dusts/' + beeType + ' either)')
                        }
                    } else {
                        recipeBuilder.notConsumable(Item.of(flower))
                        flowerThing = Item.of(flower)
                    }
                } else if (beeData.hasOwnProperty('flowerTag')) {
                    if (beeType=="lepidolite") {
                        flower = "gtceu:raw_lepidolite_block"                        
                        recipeBuilder.notConsumable(Item.of(flower))
                        flowerThing = Item.of(flower)                        
                    } else {                    
                        flower = beeData.flowerTag
                        lastFlower = plain(flower)
                        recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                        flowerThing = Ingredient.of(Tags.item(flower))
                    }                    
                } else if (beeData.hasOwnProperty('flowerItem')) {
                    flower = gtFlower(beeType, beeData.flowerItem, false)
                    if (Item.of(flower).isEmpty()) {
                        flowerThing = flowerFallback(beeType, recipeBuilder) || undefined
                        if (flowerThing == undefined) {
                            console.error('[apiary] unknown flower item for ' + beeType + ': ' + flower + ' (no gtceu:' + beeType + ' fluid or #forge:dusts/' + beeType + ' either)')
                        }
                    } else {
                        recipeBuilder.notConsumable(Item.of(flower))
                        flowerThing = Item.of(flower)
                    }
                } else {
                    if (beeType == "pepto_bismol" || beeType == "zombie" || beeType == "plastic" || beeType == "sticky_resin" || beeType == "menril" || beeType == "energized_glowstone") {
                        flower = 'kubejs:bee/' + beeType + '/flowers'
                        recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                        flowerThing = Ingredient.of(Tags.item(flower))
                    }
                }
            } else {
                if (beeType == "creeper_bee") {
                    flower = "productivebees:flowers/powdery"
                    recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                    flowerThing = Ingredient.of(Tags.item(flower))
                } else if (beeType == "bee") {
                    flower = "minecraft:flowers"
                    recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                    flowerThing = Ingredient.of(Tags.item(flower))
                }
            } 

            if(flowerThing != undefined) {
                makeCircuitRecipes('kubejs:gtceu/apiary_ii/' + beeType, input_ii, flowerThing, outputs)
            }
        } 
      } catch (e) {
        console.error('[apiary] FAILED bee=' + dbgBee + ' flower=' + lastFlower + ' -> ' + e)
      }
    }) 

    let lumberBlocks = Ingredient.of('#productivebees:flowers/lumber').getItemIds()
    let quarryBlocks = Ingredient.of('#productivebees:flowers/quarry').getItemIds()
    let lumberbee = Item.of('productivebees:bee_cage', 1, goodBeeGenes + 'entity: "productivebees:lumber_bee"}')
    let quarrybee = Item.of('productivebees:bee_cage', 1, goodBeeGenes + 'entity: "productivebees:quarry_bee"}')

    lumberBlocks.forEach(lumberBlock => {
        makeCircuitRecipes('kubejs:gtceu/apiary_ii/lumberbee/' + lumberBlock.split(':')[0] + '/' + lumberBlock.split(':')[1], lumberbee, lumberBlock, [{item: Item.of(lumberBlock), chance: 10000}])
    })

    quarryBlocks.forEach(quarryBlock => {
        makeCircuitRecipes('kubejs:gtceu/apiary_ii/quarrybee/' + quarryBlock.split(':')[0] + '/' + quarryBlock.split(':')[1], quarrybee, quarryBlock, [{item: Item.of(quarryBlock), chance: 10000}])
    })

    allthemods.forEachRecipe({ type: 'productivebees:centrifuge' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json)
        let duration = 300 / 9 
        let inputObj = recipe.ingredient 
        let input
        let inputBlock
        let inputMAXBlock
        let id = 'kubejs:gtceu/comb_processor' + rawRecipe.getId().replace('productivebees:centrifuge', '')
        let outputs = recipe.outputs 

        if (inputObj.hasOwnProperty('nbt')) { 
            if (typeof (inputObj.nbt) == 'string') {
                input = Item.of(inputObj.item, 1, inputObj.nbt).strongNBT()
                inputBlock = Item.of(inputObj.item.replace('honey', ''), 1, inputObj.nbt).strongNBT()
                inputMAXBlock = Item.of(inputObj.item.replace('honey', ''), 1, inputObj.nbt).strongNBT().withCount(40960)
            } else {
                input = Item.of(inputObj.item, 1, '{EntityTag:{type:"' + inputObj.nbt.EntityTag.type + '"}}').strongNBT()
                inputBlock = Item.of(inputObj.item.replace('honey', ''), 1, '{EntityTag:{type:"' + inputObj.nbt.EntityTag.type + '"}}').strongNBT()
                inputMAXBlock = Item.of(inputObj.item.replace('honey', ''), 1, '{EntityTag:{type:"' + inputObj.nbt.EntityTag.type + '"}}').strongNBT().withCount(40960)
            }
        } else {
            input = Item.of(inputObj.item)
            if (inputObj.item == 'minecraft:honeycomb') {
                inputBlock = Item.of('minecraft:honeycomb_block')
                inputMAXBlock = Item.of('minecraft:honeycomb_block', 40960)
            } else {
                inputBlock = Item.of(inputObj.item.replace('honey', ''))
                inputMAXBlock = Item.of(inputObj.item.replace('honey', ''), 40960)
            }
        }

        let combRecipeBuilder = allthemods.recipes.gtceu.comb_processor(id)
            .duration(duration)
            .EUt(MV)
            .itemInputs(input)

        let combBlockRecipeBuilder = allthemods.recipes.gtceu.comb_processor(id + '_block')
            .duration(duration)
            .EUt(MV)
            .itemInputs(inputBlock)
            .circuit(1)

        let combBlockMAXRecipeBuilder = allthemods.recipes.gtceu.comb_processor(id + '_block_max')
            .duration(20 * 16)
            .EUt(UEV)
            .itemInputs(inputMAXBlock)
            .circuit(2)

        outputs.forEach((output) => {
            let chance = 10000
            let count = 1

            if (output.hasOwnProperty('chance')) {
                chance = output.chance * 100 
                chance = Math.min(Math.max(chance * 1.25, chance + 125), 10000)
            }
            if (output.hasOwnProperty('max')) {
                count = output.max 
            }

            if (output.hasOwnProperty('fluid')) {
                let amount = output.amount
                let fluidId = ''
                
                if (output.fluid.hasOwnProperty('fluid')) {
                    fluidId = output.fluid.fluid
                } else {
                    if (output.fluid.tag == 'forge:honey') { fluidId = 'productivebees:honey' }
                    else if (output.fluid.tag == 'forge:life') { fluidId = 'bloodmagic:life_essence_fluid' }
                    else if (output.fluid.tag == 'forge:glowstone') { fluidId = 'gtceu:glowstone' }
                    else if (output.fluid.tag == 'forge:experience') { fluidId = 'mob_grinding_utils:fluid_xp' }
                    else if (output.fluid.tag == 'forge:crude_oil') { fluidId = 'thermal:crude_oil' }
                    else if (output.fluid.tag == 'forge:chocolate') { fluidId = 'create:chocolate' }
                    else if (output.fluid.tag == 'forge:ender') { fluidId = 'thermal:ender' }
                    else if (output.fluid.tag == 'forge:pink_slime') { fluidId = 'industrialforegoing:pink_slime' }
                    else if (output.fluid.tag == 'forge:redstone') { fluidId = 'gtceu:redstone' }
                }

                if(fluidId != '') {
                    let fBase = Fluid.of(fluidId, amount)
                    let fBlock = Fluid.of(fluidId, amount * 4)
                    let fMax = Fluid.of(fluidId, amount * 4 * 40960)

                    if (chance != 10000) {
                        combRecipeBuilder.chancedFluidOutput(fBase, chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(fBlock, chance, 0)
                        combBlockMAXRecipeBuilder.chancedFluidOutput(fMax, chance, 0)
                    } else {
                        combRecipeBuilder.outputFluids(fBase)
                        combBlockRecipeBuilder.outputFluids(fBlock)
                        combBlockMAXRecipeBuilder.outputFluids(fMax)
                    }
                }
            } else if (output.hasOwnProperty('item')) {
                if (output.item.hasOwnProperty('tag')) {
                    let tagIng = IngredientHelper.tag(output.item.tag)
                    
                    if (chance != 10000) {
                        let cTag = tagIng.withCount(count)
                        let maxAmt = Math.floor(count * 4 * 40960 * chance / 10000)
                        combRecipeBuilder.chancedOutput(cTag, chance, 0)
                        combBlockRecipeBuilder.chancedOutput(cTag, chance, 0)
                        combBlockRecipeBuilder.chancedOutput(cTag, chance, 0)
                        combBlockRecipeBuilder.chancedOutput(cTag, chance, 0)
                        combBlockRecipeBuilder.chancedOutput(cTag, chance, 0)
                        combBlockMAXRecipeBuilder.itemOutputs(tagIng.withCount(maxAmt))
                    } else {
                        combRecipeBuilder.itemOutputs(tagIng.withCount(count))
                        if (output.item.tag != 'forge:wax') {
                            combBlockRecipeBuilder.itemOutputs(tagIng.withCount(count * 4))
                            combBlockMAXRecipeBuilder.itemOutputs(tagIng.withCount(count * 4 * 40960))
                        }
                    }
                } else if (output.item.hasOwnProperty('item')) {
                    let iItem = Item.of(output.item.item)
                    
                    if (chance != 10000) {
                        let cItem = iItem.withCount(count)
                        let maxAmt = Math.floor(count * 4 * 40960 * chance / 10000)
                        combRecipeBuilder.chancedOutput(cItem, chance, 0)
                        combBlockRecipeBuilder.chancedOutput(cItem, chance, 0)
                        combBlockRecipeBuilder.chancedOutput(cItem, chance, 0)
                        combBlockRecipeBuilder.chancedOutput(cItem, chance, 0)
                        combBlockRecipeBuilder.chancedOutput(cItem, chance, 0)
                        combBlockMAXRecipeBuilder.itemOutputs(iItem.withCount(maxAmt))
                    } else {
                        combRecipeBuilder.itemOutputs(iItem.withCount(count))
                        combBlockRecipeBuilder.itemOutputs(iItem.withCount(count * 4))
                        combBlockMAXRecipeBuilder.itemOutputs(iItem.withCount(count * 4 * 40960))
                    }
                } 
            } 
        }) 
    }) 
})