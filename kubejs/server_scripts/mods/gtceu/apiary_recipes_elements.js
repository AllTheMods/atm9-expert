// priority: 10
// Apiary I / II recipes for the 96 element bees (ChemLib replacements).
// Each bee's flower is listed here, so these bees no longer depend on the Productive Bees jar's ChemLib data.
// apiary_recipes.js skips these bees (ELEMENT_BEES). Recipes match the old ones: same tiers, durations and comb counts.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    // 'tag:<item tag>' = non-consumed item tag, 'fluid:<fluid id>' = non-consumed fluid
    const ELEMENT_FLOWERS = {
        actinium: 'tag:forge:storage_blocks/actinium',
        americium: 'tag:forge:storage_blocks/americium',
        antimony: 'tag:forge:storage_blocks/antimony',
        argon: 'fluid:gtceu:argon',
        arsenic: 'tag:forge:dusts/arsenic',
        astatine: 'tag:forge:storage_blocks/astatine',
        barium: 'tag:forge:dusts/barium',
        berkelium: 'tag:forge:storage_blocks/berkelium',
        beryllium: 'tag:forge:storage_blocks/beryllium',
        bohrium: 'tag:forge:storage_blocks/bohrium',
        boron: 'tag:forge:dusts/boron',
        bromine: 'fluid:gtceu:bromine',
        cadmium: 'tag:forge:storage_blocks/cadmium',
        calcium: 'tag:forge:dusts/calcium',
        californium: 'tag:forge:storage_blocks/californium',
        cerium: 'tag:forge:dusts/cerium',
        cesium: 'tag:forge:dusts/caesium',
        chlorine: 'fluid:gtceu:chlorine',
        chromium: 'tag:forge:storage_blocks/chromium',
        copernicium: 'fluid:gtceu:copernicium',
        curium: 'tag:forge:storage_blocks/curium',
        darmstadtium: 'tag:forge:storage_blocks/darmstadtium',
        dubnium: 'tag:forge:storage_blocks/dubnium',
        dysprosium: 'tag:forge:storage_blocks/dysprosium',
        einsteinium: 'tag:forge:storage_blocks/einsteinium',
        erbium: 'tag:forge:storage_blocks/erbium',
        europium: 'tag:forge:storage_blocks/europium',
        fermium: 'fluid:gtceu:fermium',
        flerovium: 'tag:forge:storage_blocks/flerovium',
        fluorine: 'fluid:gtceu:fluorine',
        francium: 'tag:forge:storage_blocks/francium',
        gadolinium: 'tag:forge:storage_blocks/gadolinium',
        gallium: 'tag:forge:storage_blocks/gallium',
        germanium: 'tag:forge:storage_blocks/germanium',
        hafnium: 'tag:forge:storage_blocks/hafnium',
        hassium: 'tag:forge:storage_blocks/hassium',
        helium: 'fluid:gtceu:helium',
        holmium: 'tag:forge:storage_blocks/holmium',
        hydrogen: 'fluid:gtceu:hydrogen',
        indium: 'tag:forge:storage_blocks/indium',
        iodine: 'tag:forge:dusts/iodine',
        krypton: 'fluid:gtceu:krypton',
        lanthanum: 'tag:forge:dusts/lanthanum',
        lawrencium: 'tag:forge:storage_blocks/lawrencium',
        lithium: 'tag:forge:dusts/lithium',
        livermorium: 'fluid:gtceu:livermorium',
        lutetium: 'tag:forge:dusts/lutetium',
        magnesium: 'tag:forge:dusts/magnesium',
        manganese: 'tag:forge:storage_blocks/manganese',
        meitnerium: 'tag:forge:storage_blocks/meitnerium',
        mendelevium: 'tag:forge:storage_blocks/mendelevium',
        mercury: 'fluid:gtceu:mercury',
        moscovium: 'fluid:gtceu:moscovium',
        neon: 'fluid:gtceu:neon',
        neptunium: 'tag:forge:storage_blocks/neptunium',
        nihonium: 'fluid:gtceu:nihonium',
        niobium: 'tag:forge:storage_blocks/niobium',
        nitrogen: 'fluid:gtceu:nitrogen',
        nobelium: 'tag:forge:storage_blocks/nobelium',
        oganesson: 'fluid:gtceu:oganesson',
        oxygen: 'fluid:gtceu:oxygen',
        phosphorus: 'tag:forge:dusts/phosphorus',
        plutonium: 'tag:forge:storage_blocks/plutonium',
        polonium: 'fluid:gtceu:polonium',
        potassium: 'tag:forge:dusts/potassium',
        praseodymium: 'tag:forge:storage_blocks/praseodymium',
        promethium: 'tag:forge:dusts/promethium',
        protactinium: 'tag:forge:storage_blocks/protactinium',
        radium: 'tag:forge:storage_blocks/radium',
        radon: 'fluid:gtceu:radon',
        rhenium: 'tag:forge:storage_blocks/rhenium',
        rhodium: 'tag:forge:storage_blocks/rhodium',
        roentgenium: 'tag:forge:storage_blocks/roentgenium',
        rubidium: 'tag:forge:storage_blocks/rubidium',
        ruthenium: 'tag:forge:storage_blocks/ruthenium',
        rutherfordium: 'tag:forge:storage_blocks/rutherfordium',
        samarium: 'tag:forge:storage_blocks/samarium',
        scandium: 'tag:forge:storage_blocks/scandium',
        seaborgium: 'tag:forge:storage_blocks/seaborgium',
        selenium: 'fluid:gtceu:selenium',
        silicium: 'tag:forge:storage_blocks/silicon',
        sodium: 'tag:forge:dusts/sodium',
        strontium: 'tag:forge:storage_blocks/strontium',
        tantalum: 'tag:forge:storage_blocks/tantalum',
        technetium: 'tag:forge:storage_blocks/technetium',
        tellurium: 'tag:forge:storage_blocks/tellurium',
        tennessine: 'fluid:gtceu:tennessine',
        terbium: 'tag:forge:storage_blocks/terbium',
        thallium: 'tag:forge:storage_blocks/thallium',
        thorium: 'tag:forge:storage_blocks/thorium',
        thulium: 'tag:forge:storage_blocks/thulium',
        vanadium: 'tag:forge:storage_blocks/vanadium',
        xenon: 'fluid:gtceu:xenon',
        ytterbium: 'tag:forge:storage_blocks/ytterbium',
        yttrium: 'tag:forge:storage_blocks/yttrium',
        zirconium: 'tag:forge:storage_blocks/zirconium'
    }

    let goodBeeGenes = '{bee_weather_tolerance: 2, bee_productivity: 3, bee_behavior: 2, '

    function addOutputs(recipeBuilder, output, count) {
        let i = count
        while (i > 127) {
            recipeBuilder.itemOutputs(output.withCount(127))
            i = i - 127
        }
        recipeBuilder.itemOutputs(output.withCount(i))
    }

    Object.keys(ELEMENT_FLOWERS).forEach(bee => {
        let flowerDef = ELEMENT_FLOWERS[bee]
        let isFluid = flowerDef.startsWith('fluid:')
        let flowerId = flowerDef.substring(flowerDef.indexOf(':') + 1)
        let flower
        if (isFluid) {
            flower = Fluid.of(flowerId, 1000)
            if (flower.isEmpty()) {
                console.error('[apiary_elements] missing fluid for ' + bee + ': ' + flowerId)
                return
            }
        } else {
            flower = Ingredient.of('#' + flowerId)
            if (flower.getItemIds().isEmpty()) {
                console.error('[apiary_elements] empty flower tag for ' + bee + ': ' + flowerId)
                return
            }
        }

        let comb = Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:' + bee + '"}}')
        let input = Item.of('productivebees:bee_cage', 1, '{type:"productivebees:' + bee + '", entity: "productivebees:configurable_bee"}')
        let inputII = Item.of('productivebees:bee_cage', 1, goodBeeGenes + 'type:"productivebees:' + bee + '", entity: "productivebees:configurable_bee"}')

        // Apiary I
        let apiaryI = allthemods.recipes.gtceu.apiary_i('kubejs:gtceu/apiary_i/' + bee)
            .EUt(MV)
            .duration(5250 / 2)
            .chancedInput(IngredientHelper.weakNBT(input), 100, 50)
            .itemOutputs(IngredientHelper.strongNBT(comb))
        if (isFluid) {
            apiaryI.notConsumableFluid(flower)
        } else {
            apiaryI.notConsumable(flower)
        }

        // Apiary II (circuit 5)
        let circuit = 5
        let apiaryII = allthemods.recipes.gtceu.apiary_ii('kubejs:gtceu/apiary_ii/' + bee + '/circuit_' + circuit)
            .circuit(circuit)
            .EUt(EV)
            .duration(5250 / 8)
            .notConsumable(IngredientHelper.weakNBT(inputII).withCount(circuit))
            .notConsumable(Item.of('productivebees:upgrade_productivity_4').withCount((Math.floor((circuit - 1) / 5) + 1) * 4))
        addOutputs(apiaryII, comb, 40 * circuit)
        if (isFluid) {
            apiaryII.notConsumableFluid(flower)
        } else {
            apiaryII.notConsumable(flower)
        }
    })
})
