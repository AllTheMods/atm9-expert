// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

    const magicGems = ['mana_essence', 'source']
    const magicWheelChanceFlawless = 1000;
    const magicWheelChanceExquisite = 2000;
    const magicDurationFlawless = 300;
    const magicDurationExquisite = 600;
    const magicEnergyFlawless = IV;
    const magicEnergyExquisite = LuV;

    const waterBase = 288;

    magicGems.forEach(gem => {
        allthemods.recipes.gtceu.gem_polisher(`${gem}_basic_to_flawless`)
            .itemInputs(`#forge:gems/${gem}`)
            .chancedInput('gtceu:polishing_wheel', magicWheelChanceFlawless, 0)
            .inputFluids(`gtceu:distilled_water ${waterBase}`)
            .itemOutputs(`gtceu:flawless_${gem}_gem`)
            .duration(magicDurationFlawless)
            .EUt(magicEnergyFlawless);

        allthemods.recipes.gtceu.gem_polisher(`${gem}_flawless_to_exquisite`)
            .itemInputs(`#forge:flawless_gems/${gem}`)
            .chancedInput('gtceu:polishing_wheel', magicWheelChanceExquisite, 0)
            .inputFluids(`gtceu:distilled_water ${waterBase * 2}`)
            .itemOutputs(`gtceu:exquisite_${gem}_gem`)
            .duration(magicDurationExquisite)
            .EUt(magicEnergyExquisite);
        
    });

    const elementalGems = ['fire', 'water', 'earth', 'air']
    const elementalDurationShard = 300;
    const elementalDurationPowerfulShard = 600;
    const elementalEnergyShard = HV;
    const elementalEnergyPowerfulShard = EV;
    const elementalWheelChance = 500;

    elementalGems.forEach(gem => {
        allthemods.recipes.gtceu.gem_polisher(`${gem}_essence_to_shard`)
            .itemInputs(`#forge:gems/${gem}_essence`)
            .chancedInput('gtceu:polishing_wheel', elementalWheelChance, 0)
            .inputFluids(`gtceu:distilled_water ${waterBase}`)
            .itemOutputs(`elementalcraft:${gem}_shard`)
            .duration(elementalDurationShard)
            .EUt(elementalEnergyShard);

        allthemods.recipes.gtceu.gem_polisher(`${gem}_shard_to_powerful`)            
            .itemInputs([`elementalcraft:${gem}_shard`, `elementalcraft:${gem}crystal`])
            .inputFluids(`gtceu:distilled_water ${waterBase * 2}`)
            .itemOutputs(`elementalcraft:powerful_${gem}_shard`)
            .duration(elementalDurationPowerfulShard)
            .EUt(elementalEnergyPowerfulShard);        
    });   
    
    allthemods.recipes.gtceu.crystal_growth_chamber('chaos_frag_polishing')
        .itemInputs('draconicevolution:small_chaos_frag')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('draconicevolution:medium_chaos_frag')
        .duration(750)
        .EUt(LuV);
    
    allthemods.recipes.gtceu.crystal_growth_chamber('gaia_growth')
        .itemInputs(['16x #forge:tiny_dusts/fireite', 'bloodmagic:demonslate', 'evilcraft:garmonbozia', 'elementalcraft:purecrystal'])
        .inputFluids(['#forge:mana 16000', '#forge:soul 16000', '#forge:blood 16000'])
        .itemOutputs('16x botania:life_essence')
        .duration(750)
        .EUt(LuV);

    //budding
    allthemods.recipes.gtceu.gem_polisher('ae2_damaged_to_chipped')
        .itemInputs('ae2:damaged_budding_quartz')
        .chancedInput('gtceu:polishing_wheel', 1000, 0)
        .inputFluids('#forge:water_stage_1 288')
        .itemOutputs('ae2:chipped_budding_quartz')
        .duration(150)
        .EUt(EV);
    
    allthemods.recipes.gtceu.gem_polisher('ae2_chipped_to_flawed')
        .itemInputs('ae2:chipped_budding_quartz')
        .chancedInput('gtceu:polishing_wheel', 1000, 0)
        .inputFluids('#forge:water_stage_2 288')
        .itemOutputs('ae2:flawed_budding_quartz')
        .duration(200)
        .EUt(EV);

    allthemods.recipes.gtceu.gem_polisher('ae2_flawed_to_flawless')
        .itemInputs('ae2:flawed_budding_quartz')
        .chancedInput('gtceu:polishing_wheel', 1000, 0)
        .inputFluids('#forge:water_stage_3 288')
        .itemOutputs('ae2:flawless_budding_quartz')
        .duration(250)
        .EUt(EV);

    const amberFlawlessWheelChance = 1000;
    const amberFlawlessWater = 144;
    const amberFlawlessDuration = 200;
    const amberFlawlessEut = EV;

    const amberExquisiteWheelChance = 2000;
    const amberExquisiteWater = 288;
    const amberExquisiteDuration = 400;
    const amberExquisiteEut = IV;

    allthemods.recipes.gtceu.gem_polisher('amber_basic_to_flawless')
        .itemInputs('#forge:gems/amber')
        .chancedInput('gtceu:polishing_wheel', amberFlawlessWheelChance, 0)
        .inputFluids(`gtceu:amber_oil ${amberFlawlessWater}`)
        .itemOutputs('gtceu:flawless_amber_gem')
        .duration(amberFlawlessDuration)
        .EUt(amberFlawlessEut);

    allthemods.recipes.gtceu.gem_polisher('amber_flawless_to_exquisite')
        .itemInputs('#forge:flawless_gems/amber')
        .chancedInput('gtceu:polishing_wheel', amberExquisiteWheelChance, 0)
        .inputFluids(`gtceu:amber_oil ${amberExquisiteWater}`)
        .itemOutputs('gtceu:exquisite_amber_gem')
        .duration(amberExquisiteDuration)
        .EUt(amberExquisiteEut);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
