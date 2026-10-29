// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const $SizedIngredient = Java.loadClass('com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient');
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const tiers = [
        { level: 1, tier: 'wood', volts: LV, prefix: 'lv', fluid: '#forge:soldering_alloy', coil: 'ironjetpacks:basic_coil', wire: 'red_alloy' },
        { level: 1, tier: 'stone', volts: LV, prefix: 'lv', fluid: '#forge:soldering_alloy', coil: 'ironjetpacks:basic_coil', wire: 'red_alloy' },
        { level: 1, tier: 'copper', volts: LV, prefix: 'lv', fluid: '#forge:soldering_alloy', coil: 'ironjetpacks:basic_coil', wire: 'red_alloy' },
        { level: 1, tier: 'bronze', volts: MV, prefix: 'mv', fluid: '#forge:polyethylene', coil: 'ironjetpacks:basic_coil', wire: 'cadmium_copper' },
        { level: 1, tier: 'iron', volts: MV, prefix: 'mv', fluid: '#forge:polyethylene', coil: 'ironjetpacks:basic_coil', wire: 'cadmium_copper' },
        { level: 1, tier: 'silver', volts: MV, prefix: 'mv', fluid: '#forge:polyethylene', coil: 'ironjetpacks:basic_coil', wire: 'cadmium_copper' },
        { level: 2, tier: 'invar', volts: HV, prefix: 'hv', fluid: '#forge:polyethylene', coil: 'ironjetpacks:advanced_coil', wire: 'dark_steel' },
        { level: 2, tier: 'gold', volts: HV, prefix: 'hv', fluid: '#forge:polyethylene', coil: 'ironjetpacks:advanced_coil', wire: 'dark_steel' },
        { level: 2, tier: 'electrum', volts: HV, prefix: 'hv', fluid: '#forge:polyethylene', coil: 'ironjetpacks:advanced_coil', wire: 'dark_steel' },
        { level: 3, tier: 'steel', volts: EV, prefix: 'ev', fluid: '#forge:tetrachloroethylene', coil: 'ironjetpacks:elite_coil', wire: 'end_steel' },
        { level: 3, tier: 'platinum', volts: EV, prefix: 'ev', fluid: '#forge:tetrachloroethylene', coil: 'ironjetpacks:elite_coil', wire: 'end_steel' },
        { level: 3, tier: 'diamond', volts: IV, prefix: 'iv', fluid: '#forge:polytetrafluoroethylene', coil: 'ironjetpacks:elite_coil', wire: 'vibrant_alloy' },
        { level: 3, tier: 'emerald', volts: IV, prefix: 'iv', fluid: '#forge:polytetrafluoroethylene', coil: 'ironjetpacks:elite_coil', wire: 'vibrant_alloy' },
        { level: 4, tier: 'allthemodium', volts: LuV, prefix: 'luv', fluid: '#forge:polybenzimidazole', coil: 'ironjetpacks:ultimate_coil', wire: 'alloy_infused' },
        { level: 4, tier: 'vibranium', volts: LuV, prefix: 'luv', fluid: '#forge:polybenzimidazole', coil: 'ironjetpacks:ultimate_coil', wire: 'alloy_infused' },
        { level: 4, tier: 'unobtainium', volts: LuV, prefix: 'luv', fluid: '#forge:polybenzimidazole', coil: 'ironjetpacks:ultimate_coil', wire: 'alloy_infused' }
    ];

    tiers.forEach((tier, index) => {
        const cellIngredient = Item.of('ironjetpacks:cell', { Id: `ironjetpacks:${tier.tier}` }).strongNBT();
        const thrusterIngredient = Item.of('ironjetpacks:thruster', { Id: `ironjetpacks:${tier.tier}` }).strongNBT();
        const capacitorIngredient = Item.of('ironjetpacks:capacitor', { Id: `ironjetpacks:${tier.tier}` }).strongNBT();
        
        let prevTier = index > 0 ? Item.of('ironjetpacks:jetpack', { Id: `ironjetpacks:${tiers[index - 1].tier}`, Throttle:1.0 }).strongNBT() : 'ironjetpacks:strap';

        allthemods.recipes.gtceu.assembler(`gregification:creative_jetpacks/${tier.tier}_capacitor`)
            .itemInputs(

                $SizedIngredient.create(cellIngredient, 3),
                `6x #forge:plates/${tier.tier}`,
                `#gtceu:batteries/${tier.prefix}`,
                `4x gtceu:${tier.wire}_quadruple_wire`
            )                         
            .itemOutputs(Item.of('ironjetpacks:capacitor', { Id: `ironjetpacks:${tier.tier}` }).strongNBT())
            .inputFluids(`${tier.fluid} 1000`)
            .duration(400)
            .EUt(tier.volts);

        allthemods.recipes.gtceu.assembler(`gregification:creative_jetpacks/${tier.tier}_thruster`)
            .itemInputs(
                `3x ${tier.coil}`,
                cellIngredient,
                `4x #forge:plates/${tier.tier}`,
                //`2x #gtceu:circuits/${tier.prefix}`
            )
            .itemOutputs(Item.of('ironjetpacks:thruster', { Id: `ironjetpacks:${tier.tier}` }).strongNBT())
            .inputFluids(`${tier.fluid} 1000`)
            .duration(400)
            .EUt(tier.volts);

        allthemods.recipes.gtceu.assembler(`gregification:creative_jetpacks/${tier.tier}_cell`)
            .itemInputs(
                `6x #forge:rods/${tier.tier}`,
                `#gtceu:circuits/${tier.prefix}`,
                `8x gtceu:fine_${tier.wire}_wire`,
                tier.coil
            )
            .itemOutputs(Item.of('ironjetpacks:cell', { Id: `ironjetpacks:${tier.tier}` }).strongNBT())
            .inputFluids('#forge:sodium_potassium 2000')
            .duration(100)
            .EUt(tier.volts);

        allthemods.recipes.gtceu.assembler(`gregification:creative_jetpacks/${tier.tier}_jetpack`)
            .itemInputs(
                prevTier,
                $SizedIngredient.create(thrusterIngredient, 2),
                capacitorIngredient,
                `4x #forge:plates/${tier.tier}`,
                `2x #gtceu:circuits/${tier.prefix}`
            )
            .itemOutputs(Item.of('ironjetpacks:jetpack', { Id: `ironjetpacks:${tier.tier}`, Throttle:1.0 }).strongNBT())
            .inputFluids(`${tier.fluid} 1000`)
            .duration(400)
            .EUt(tier.volts);
    });

    allthemods.recipes.gtceu.assembler(`gregification:basic_coil`)
        .itemInputs(
            '#forge:rods/long/compressed_iron',
            '#gtceu:circuits/lv',
            '8x #forge:fine_wires/red_alloy',
            '4x #forge:dusts/redstone'
        )
        .itemOutputs('ironjetpacks:basic_coil')        
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler(`gregification:strap`)
        .itemInputs(
            '8x #forge:leather',
            '2x #forge:plates/compressed_iron'
        )
        .itemOutputs('ironjetpacks:strap')
        .duration(400)
        .EUt(LV);

    allthemods.recipes.gtceu.assembler(`gregification:advanced_coil`)
        .itemInputs(
            '#forge:rods/long/stainless_steel',
            '#gtceu:circuits/hv',
            '8x #forge:fine_wires/cadmium_copper',
            '4x #forge:dusts/redstone'
        )
        .itemOutputs('ironjetpacks:advanced_coil')
        .duration(400)
        .EUt(MV);
    
    allthemods.recipes.gtceu.assembler(`gregification:elite_coil`)
        .itemInputs(
            '#forge:rods/long/titanium',
            '#gtceu:circuits/ev',
            '8x #forge:fine_wires/end_steel',
            '4x #forge:dusts/redstone'
        )
        .itemOutputs('ironjetpacks:elite_coil')
        .duration(400)
        .EUt(HV);
    
    allthemods.recipes.gtceu.assembler(`gregification:ultimate_coil`)
        .itemInputs(
            '#forge:rods/long/samarium_cobalt',
            '#gtceu:circuits/luv',
            '8x #forge:fine_wires/vibrant_alloy',
            '4x #forge:dusts/redstone'
        )
        .itemOutputs('ironjetpacks:ultimate_coil')
        .duration(400)
        .EUt(EV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
