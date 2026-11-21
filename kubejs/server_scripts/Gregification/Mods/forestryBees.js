// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const metalBeeIds = ['andesite_alloy', 'gallium', 'arsenic', 'chromium', 'antimony', 'magnesium', 'rock_salt', 'ruby', 'peridot', 'sapphire', 'dark_gem']
    const gasBeeIds = ['bitumen', 'oxygen', 'nitrogen', 'hydrogen', 'fluorine', 'sulfur']

    metalBeeIds.forEach(b => {
        let bit = 'forestry:' + b + '_bit'
        allthemods.custom({
            type: 'forestry:centrifuge',
            time: 20,
            input: { item: 'forestry:bee_comb_' + b },
            products: [
                { item: 'forestry:beeswax', chance: 0.8 },
                { item: 'forestry:honey_drop', chance: 0.5 },
                { item: bit, chance: 1.0 },
                { item: bit, chance: 0.3, count: 2 },
                { item: bit, chance: 0.1, count: 3 }
            ]
        }).id('gregification:forestry/centrifuge/bee_comb_' + b + '_to_bits')
    })

    gasBeeIds.forEach(b => {
        let bit = 'forestry:' + b + '_bit'
        allthemods.custom({
            type: 'forestry:centrifuge',
            time: 20,
            input: { item: 'forestry:bee_comb_' + b },
            products: [
                { item: 'forestry:beeswax', chance: 0.8 },
                { item: bit, chance: 0.2, count: 3 },
                { item: bit, chance: 0.5, count: 2 },
                { item: bit, chance: 1.0 }
            ]
        }).id('gregification:forestry/centrifuge/bee_comb_' + b + '_to_bits')
    })

    const bitDuration = 400
    
    const bitRecipes = [
        { id: 'iron', bit: 'mobees:iron_bit', item: 'gtceu:iron_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'copper', bit: 'mobees:copper_bit', item: 'gtceu:copper_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'coal', bit: 'mobees:coal_bit', item: 'gtceu:coal_dust', eut: LV, chances: [2500, 1000, 500, 100] },
        { id: 'andesite_alloy', bit: 'forestry:andesite_alloy_bit', item: 'gtceu:andesite_alloy_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'bitumen', bit: 'forestry:bitumen_bit', item: 'thermal:bitumen', eut: LV, chances: [2500, 1000, 500, 100] },

        { id: 'tin', bit: 'mobees:tin_bit', item: 'gtceu:tin_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'zinc', bit: 'mobees:zinc_bit', item: 'gtceu:zinc_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'lead', bit: 'mobees:lead_bit', item: 'gtceu:lead_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'sulfur', bit: 'forestry:sulfur_bit', item: 'gtceu:sulfur_dust', eut: LV, chances: [2500, 1000, 500, 100] },
        { id: 'hydrogen', bit: 'forestry:hydrogen_bit', fluid: 'gtceu:hydrogen 1000', eut: MV, chances: [2000, 500] },

        { id: 'nickel', bit: 'mobees:nickel_bit', item: 'gtceu:nickel_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'silver', bit: 'mobees:silver_bit', item: 'gtceu:silver_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'gold', bit: 'mobees:gold_bit', item: 'gtceu:gold_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'apatite', bit: 'mobees:apatite_bit', item: 'gtceu:apatite_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'oxygen', bit: 'forestry:oxygen_bit', fluid: 'gtceu:oxygen 1000', eut: LV, chances: [2000, 500] },
        { id: 'rock_salt', bit: 'forestry:rock_salt_bit', item: 'gtceu:rock_salt_dust', eut: LV, chances: [1500, 500, 100] },

        { id: 'aluminium', bit: 'mobees:aluminum_bit', item: 'gtceu:aluminium_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'cobalt', bit: 'mobees:cobalt_bit', item: 'gtceu:cobalt_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'certus', bit: 'mobees:certus_bit', item: 'ae2:certus_quartz_crystal', eut: LV, chances: [1500, 500, 100] },
        { id: 'magnesium', bit: 'forestry:magnesium_bit', item: 'gtceu:magnesium_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'antimony', bit: 'forestry:antimony_bit', item: 'gtceu:antimony_dust', eut: LV, chances: [1000, 500, 100] },
        { id: 'nitrogen', bit: 'forestry:nitrogen_bit', fluid: 'gtceu:nitrogen 1000', eut: HV, chances: [1000, 500] },

        { id: 'osmium', bit: 'mobees:osmium_bit', item: 'gtceu:osmium_dust', eut: LuV, chances: [500, 500, 100] },
        { id: 'chromium', bit: 'forestry:chromium_bit', item: 'gtceu:chromium_dust', eut: MV, chances: [1500, 500, 100] },
        { id: 'gallium', bit: 'forestry:gallium_bit', item: 'gtceu:gallium_dust', eut: LV, chances: [500, 500, 100] },
        { id: 'arsenic', bit: 'forestry:arsenic_bit', item: 'gtceu:arsenic_dust', eut: LV, chances: [500, 500, 100] },
        { id: 'fluorine', bit: 'forestry:fluorine_bit', fluid: 'gtceu:fluorine 1000', eut: LV, chances: [1000, 500] },

        { id: 'yellorium', bit: 'mobees:yellorium_bit', item: 'gtceu:uranium_dust', eut: HV, chances: [1500, 500, 100] },
        { id: 'diamond', bit: 'mobees:diamond_shard', item: 'minecraft:diamond', eut: LV, chances: [1000, 500, 100] },
        { id: 'emerald', bit: 'mobees:emerald_shard', item: 'minecraft:emerald', eut: LV, chances: [1000, 500, 100] },

        { id: 'ruby', bit: 'forestry:ruby_bit', item: 'gtceu:ruby_dust', eut: LV, chances: [1000, 500, 100] },
        { id: 'sapphire', bit: 'forestry:sapphire_bit', item: 'gtceu:sapphire_dust', eut: LV, chances: [1000, 500, 100] },
        { id: 'peridot', bit: 'forestry:peridot_bit', item: 'alltheores:peridot_dust', eut: LV, chances: [1000, 500, 100] },
        { id: 'netherite_scrap', bit: 'mobees:netherite_bit', item: 'gtceu:debris_dust', eut: LV, chances: [500, 100] },

        { id: 'dark_gem', bit: 'forestry:dark_gem_bit', item: 'evilcraft:dark_gem', eut: LV, chances: [1000, 500, 100] }
    ]

    bitRecipes.forEach(r => {
        let recipe = allthemods.recipes.gtceu.bit_processor('gregification:bit_processor/' + r.id)
            .itemInputs(r.bit)
            .duration(bitDuration)
            .EUt(r.eut)
        if (r.item) {
            recipe.itemOutputs(r.item)
        }
        if (r.fluid) {
            recipe.outputFluids(r.fluid)
        }
        r.chances.forEach(chance => {
            if (r.item) {
                recipe.chancedOutput(r.item, chance, 0)
            }
            if (r.fluid) {
                recipe.chancedFluidOutput(r.fluid, chance, 0)
            }
        })
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.