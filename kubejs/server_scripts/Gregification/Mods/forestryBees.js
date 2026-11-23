// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const bitDuration = 400

    const bitRecipes = [
        { id: 'iron', bit: 'mobees:iron_bit', item: 'gtceu:iron_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'copper', bit: 'mobees:copper_bit', item: 'gtceu:copper_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'coal', bit: 'mobees:coal_bit', item: 'gtceu:coal_dust', eut: LV, chances: [2500, 1000, 500, 100] },
        { id: 'tin', bit: 'mobees:tin_bit', item: 'gtceu:tin_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'zinc', bit: 'mobees:zinc_bit', item: 'gtceu:zinc_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'lead', bit: 'mobees:lead_bit', item: 'gtceu:lead_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'nickel', bit: 'mobees:nickel_bit', item: 'gtceu:nickel_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'silver', bit: 'mobees:silver_bit', item: 'gtceu:silver_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'gold', bit: 'mobees:gold_bit', item: 'gtceu:gold_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'apatite', bit: 'mobees:apatite_bit', item: 'gtceu:apatite_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'aluminium', bit: 'mobees:aluminum_bit', item: 'gtceu:aluminium_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'cobalt', bit: 'mobees:cobalt_bit', item: 'gtceu:cobalt_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'certus', bit: 'mobees:certus_bit', item: 'ae2:certus_quartz_crystal', eut: LV, chances: [1500, 500, 100] },
        { id: 'osmium', bit: 'mobees:osmium_bit', item: 'gtceu:osmium_dust', eut: LuV, chances: [500, 500, 100] },
        { id: 'yellorium', bit: 'mobees:yellorium_bit', item: 'gtceu:uranium_dust', eut: HV, chances: [1500, 500, 100] },
        { id: 'diamond', bit: 'mobees:diamond_shard', item: 'minecraft:diamond', eut: LV, chances: [1000, 500, 100] },
        { id: 'emerald', bit: 'mobees:emerald_shard', item: 'minecraft:emerald', eut: LV, chances: [1000, 500, 100] },
        { id: 'netherite_scrap', bit: 'mobees:netherite_bit', item: 'gtceu:debris_dust', eut: LV, chances: [500, 100] },

        { id: 'andesite_alloy', bit: 'forestry:andesite_alloy_bit', comb: 'metal', item: 'gtceu:andesite_alloy_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'bitumen', bit: 'forestry:bitumen_bit', comb: 'metal', item: 'thermal:bitumen', eut: LV, chances: [2500, 1000, 500, 100] },
        { id: 'oxygen', bit: 'forestry:oxygen_bit', comb: 'gas', fluid: 'gtceu:oxygen 1000', eut: LV, chances: [2000, 500] },
        { id: 'ruby', bit: 'forestry:ruby_bit', comb: 'metal', item: 'gtceu:ruby_dust', eut: LV, chances: [1000, 500, 100] },
        { id: 'sapphire', bit: 'forestry:sapphire_bit', comb: 'metal', item: 'gtceu:sapphire_dust', eut: LV, chances: [1000, 500, 100] },
        { id: 'peridot', bit: 'forestry:peridot_bit', comb: 'metal', item: 'alltheores:peridot_dust', eut: LV, chances: [1000, 500, 100] },
        { id: 'dark_gem', bit: 'forestry:dark_gem_bit', comb: 'metal', item: 'evilcraft:dark_gem', eut: LV, chances: [1000, 500, 100] },
        { id: 'fluix', bit: 'forestry:fluix_bit', comb: 'metal', item: 'ae2:fluix_dust', eut: LV, chances: [1500, 500, 100] },

        //{ id: 'gregbee', bit: 'forestry:gregbee_bit', comb: 'metal', item: 'gtceu:steel_dust', eut: LV, chances: [1500, 500, 100] },
        { id: 'sulfur', bit: 'forestry:sulfur_bit', comb: 'metal', item: 'gtceu:sulfur_dust', eut: LV, chances: [2500, 1000, 500, 100], guaranteed: false },
        { id: 'rock_salt', bit: 'forestry:rock_salt_bit', comb: 'metal', item: 'gtceu:rock_salt_dust', eut: LV, chances: [1500, 500, 100], guaranteed: false },
        { id: 'antimony', bit: 'forestry:antimony_bit', comb: 'metal', item: 'gtceu:antimony_dust', eut: LV, chances: [1000, 500, 100], guaranteed: false },
        { id: 'gallium', bit: 'forestry:gallium_bit', comb: 'metal', item: 'gtceu:gallium_dust', eut: LV, chances: [500, 500, 100], guaranteed: false },
        { id: 'arsenic', bit: 'forestry:arsenic_bit', comb: 'metal', item: 'gtceu:arsenic_dust', eut: LV, chances: [500, 500, 100], guaranteed: false },
        { id: 'mana', bit: 'forestry:mana_bit', comb: 'gas', fluid: 'gtceu:mana_essence 1000', eut: MV, chances: [2000, 500], guaranteed: false },
        { id: 'source', bit: 'forestry:source_bit', comb: 'gas', fluid: 'gtceu:source 1000', eut: MV, chances: [2000, 500], guaranteed: false },
        { id: 'blood', bit: 'forestry:blood_bit', comb: 'gas', fluid: 'bloodmagic:life_essence_fluid 1000', eut: LV, chances: [2000, 500], guaranteed: false },

        { id: 'hydrogen', bit: 'forestry:hydrogen_bit', comb: 'gas', fluid: 'gtceu:hydrogen 1000', eut: MV, chances: [2000, 500], guaranteed: false },
        { id: 'magnesium', bit: 'forestry:magnesium_bit', comb: 'metal', item: 'gtceu:magnesium_dust', eut: LV, chances: [1500, 500, 100], guaranteed: false },
        { id: 'manganese', bit: 'forestry:manganese_bit', comb: 'metal', item: 'gtceu:manganese_dust', eut: MV, chances: [1500, 500, 100], guaranteed: false },
        { id: 'energized', bit: 'forestry:energized_bit', comb: 'metal', item: 'minecraft:redstone', eut: HV, chances: [4500, 2500, 1500], extra: { item: 'minecraft:glowstone_dust', chances: [9000, 1500] }, guaranteed: false },
        { id: 'soul', bit: 'forestry:soul_bit', comb: 'gas', fluid: 'gtceu:soul 2', eut: HV, chances: [1500, 500], guaranteed: false },
        { id: 'aureal', bit: 'forestry:aureal_bit', comb: 'metal', item: 'forbidden_arcanus:aureal_bottle', eut: HV, chances: [1000, 500, 100], guaranteed: false },

        { id: 'nitrogen', bit: 'forestry:nitrogen_bit', comb: 'gas', fluid: 'gtceu:nitrogen 1000', eut: HV, chances: [1000, 500], guaranteed: false },
        { id: 'chromium', bit: 'forestry:chromium_bit', comb: 'metal', item: 'gtceu:chromium_dust', eut: MV, chances: [1500, 500, 100], guaranteed: false },
        { id: 'fluorine', bit: 'forestry:fluorine_bit', comb: 'gas', fluid: 'gtceu:fluorine 1000', eut: LV, chances: [1000, 500], guaranteed: false },
        { id: 'cadmium', bit: 'forestry:cadmium_bit', comb: 'metal', item: 'gtceu:cadmium_dust', eut: MV, chances: [1500, 500, 100], guaranteed: false },
        { id: 'quartzite', bit: 'forestry:quartzite_bit', comb: 'metal', item: 'gtceu:quartzite_dust', eut: LV, chances: [1500, 500, 100] },
    ]

    const bonus = 500
    bitRecipes.forEach(r => {
        if (r.comb === 'metal') {
            allthemods.custom({
                type: 'forestry:centrifuge',
                time: 20,
                input: { item: 'forestry:bee_comb_' + r.id },
                products: [
                    { item: 'forestry:beeswax', chance: 0.8 },
                    { item: 'forestry:honey_drop', chance: 0.5 },
                    { item: r.bit, chance: 1.0 },
                    { item: r.bit, chance: 0.3, count: 2 },
                    { item: r.bit, chance: 0.1, count: 3 }
                ]
            }).id('gregification:forestry/centrifuge/bee_comb_' + r.id + '_to_bits')
        }
        if (r.comb === 'gas') {
            allthemods.custom({
                type: 'forestry:centrifuge',
                time: 20,
                input: { item: 'forestry:bee_comb_' + r.id },
                products: [
                    { item: 'forestry:beeswax', chance: 0.8 },
                    { item: r.bit, chance: 0.2, count: 3 },
                    { item: r.bit, chance: 0.5, count: 2 },
                    { item: r.bit, chance: 1.0 }
                ]
            }).id('gregification:forestry/centrifuge/bee_comb_' + r.id + '_to_bits')
        }
        let recipe = allthemods.recipes.gtceu.bit_processor('gregification:bit_processor/' + r.id)
            .itemInputs(r.bit)
            .duration(bitDuration)
            .EUt(r.eut)
        if (r.item && r.guaranteed !== false) {
            recipe.itemOutputs(r.item)
        }
        if (r.fluid && r.guaranteed !== false) {
            recipe.outputFluids(r.fluid)
        }
        if (r.extra) {
            r.extra.chances.forEach(chance => {
                recipe.chancedOutput(r.extra.item, chance, 0 + bonus)
            })
        }
        r.chances.forEach(chance => {
            if (r.item) {
                recipe.chancedOutput(r.item, chance, 0 + bonus)
            }
            if (r.fluid) {
                recipe.chancedFluidOutput(r.fluid, chance, 0 + bonus)
            }
        })
    })

    //forestry:bee_comb_gregbee
    //forestry:bee_comb_voltaic - done
    //forestry:bee_comb_intelligent - done
    //forestry:bee_comb_hyper_intelligent - done
    //forestry:bee_comb_sentient - done
    const voltaicComb = [
        { eu: LV, tier: 'lv', duration: 200, circuit: 1, output: [{ item: 'motor', chance: 2000 }, { item: 'pump', chance: 1000 }, { item: 'piston', chance: 1000 }] },
        { eu: MV, tier: 'mv', duration: 200, circuit: 2, output: [{ item: 'motor', chance: 2000 }, { item: 'pump', chance: 1000 }, { item: 'piston', chance: 1000 }] },
        { eu: HV, tier: 'hv', duration: 200, circuit: 3, output: [{ item: 'motor', chance: 2000 }, { item: 'pump', chance: 1000 }, { item: 'piston', chance: 1000 }] },
    ];
    voltaicComb.forEach((r) => {
        var recipe = allthemods.recipes.gtceu.centrifuge('gregification:centrifuge/' + r.tier + '_voltaic_comb')
            .itemInputs('forestry:bee_comb_voltaic')
            .circuit(r.circuit)
            .duration(r.duration)
            .EUt(r.eu)
            .chancedItemOutputLogic(ChanceLogic.XOR)
        r.output.forEach(o => {
            recipe.chancedOutput('gtceu:' + r.tier + '_electric_' + o.item, o.chance, 0)
        })
    })

    const intelligentComb = [
        { eu: LV, tier: 'lv', duration: 200, circuit: 1, chance: 1500, bonus: 1000 },
        { eu: MV, tier: 'mv', duration: 200, circuit: 2, chance: 1000, bonus: 1000 },
        { eu: HV, tier: 'hv', duration: 200, circuit: 3, chance: 500, bonus: 1000 }
    ];
    intelligentComb.forEach((r) => {
        allthemods.recipes.gtceu.centrifuge('gregification:centrifuge/' + r.tier + '_universal_circuit')
            .itemInputs('forestry:bee_comb_intelligent')
            .chancedOutput(`gtceu:${r.tier}_universal_circuit`, r.chance, r.bonus)
            .circuit(r.circuit)
            .duration(r.duration)
            .EUt(r.eu);
    });

    const hyperIntelligentComb = [
        { eu: EV, tier: 'ev', duration: 200, circuit: 1, chance: 400, bonus: 1000 },
        { eu: IV, tier: 'iv', duration: 200, circuit: 2, chance: 300, bonus: 1000 },
        { eu: LuV, tier: 'luv', duration: 200, circuit: 3, chance: 200, bonus: 1000 }
    ];
    hyperIntelligentComb.forEach((r) => {
        allthemods.recipes.gtceu.centrifuge('gregification:centrifuge/' + r.tier + '_universal_circuit')
            .itemInputs('forestry:bee_comb_hyper_intelligent')
            .chancedOutput(`gtceu:${r.tier}_universal_circuit`, r.chance, r.bonus)
            .circuit(r.circuit)
            .duration(r.duration)
            .EUt(r.eu);
    });

    allthemods.recipes.gtceu.centrifuge('gregification:centrifuge/zpm_universal_circuit')
        .itemInputs('forestry:bee_comb_sentient')
        .chancedOutput('gtceu:zpm_universal_circuit', 1000, 1000)
        .circuit(1)
        .duration(200)
        .EUt(ZPM)

})

ServerEvents.highPriorityData(event => {
    const sentientEut = GTValues.VA[GTValues.UV]
    const sentientDuration = 1200
    event.addJson('gregification:recipes/sentient_bee', {
        type: 'gtceu:chemical_reactor',
        duration: sentientDuration,
        inputs: {
            item: [
                { content: { type: 'gtceu:sized', count: 1, ingredient: { type: 'gtextras:forestry_individual', species: 'forestry:bee_hyper_intelligent', stage: 'drone' } }, chance: 10000, maxChance: 10000, tierChanceBoost: 0 },
                { content: { type: 'gtceu:sized', count: 1, ingredient: { item: 'gtceu:hyper_intelligent_neuron' } }, chance: 10000, maxChance: 10000, tierChanceBoost: 0 }
            ],
            fluid: [
                { content: { amount: 10000, value: [{ tag: 'forge:concentrated_liquid_dna' }] }, chance: 10000, maxChance: 10000, tierChanceBoost: 0 },
                { content: { amount: 10000, value: [{ tag: 'forge:artificial_cerebrospinal_fluid' }] }, chance: 10000, maxChance: 10000, tierChanceBoost: 0 }
            ]
        },
        tickInputs: { eu: [{ content: sentientEut, chance: 10000, maxChance: 10000, tierChanceBoost: 0 }] },
        outputs: {
            item: [
                { content: { type: 'gtceu:sized', count: 1, ingredient: { type: 'gtextras:forestry_individual', species: 'forestry:bee_sentient', stage: 'queen' } }, chance: 10000, maxChance: 10000, tierChanceBoost: 0 }
            ]
        }
    })
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.