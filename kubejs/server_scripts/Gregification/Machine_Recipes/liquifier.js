// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.recipes.gtceu.liquifier('gregification:drone_to_mana')
        .itemInputs('#forestry:bees')
        .inputFluids('gtceu:distilled_water 144')
        .outputFluids('gtceu:mana_essence 144')
        .duration(600)
        .EUt(MV)
    
    allthemods.recipes.gtceu.liquifier('gregification:liquid_binder')
        .itemInputs('enderio:conduit_binder')        
        .outputFluids('gtceu:conduit_binder 144')
        .duration(50)
        .EUt(MV)

    allthemods.recipes.gtceu.liquifier('gregification:shard_liquification')
        .itemInputs('draconicevolution:large_chaos_frag')
        .inputFluids('gtceu:primordial_cosmic_soup 1000')
        .outputFluids('gtceu:liquid_chaos 1000')
        .duration(1200)
        .EUt(IV)

    allthemods.recipes.gtceu.liquifier('gregification:blacker_lotus_liquification')
        .itemInputs('botania:blacker_lotus')        
        .outputFluids('gtceu:mana_essence 100000')
        .duration(1200)
        .EUt(IV)

    allthemods.recipes.gtceu.liquifier('gregification:source_gem_block_to_source')
        .itemInputs('#forge:storage_blocks/source')
        .inputFluids('gtceu:distilled_water 2000')
        .outputFluids('gtceu:source 4500')
        .duration(100)
        .EUt(EV)
    
    allthemods.recipes.gtceu.liquifier('gregification:source_gem_to_source')
        .itemInputs('#forge:gems/source')
        .inputFluids('gtceu:distilled_water 500')
        .outputFluids('gtceu:source 500')
        .duration(100)
        .EUt(EV)

    
    allthemods.recipes.gtceu.liquifier('gregification:poison_extraction')
        .itemInputs('evilcraft:poison_sac')
        .inputFluids('#forge:water_stage_4 500')
        .outputFluids('evilcraft:poison 250')
        .duration(100)
        .EUt(EV)
    
    allthemods.recipes.gtceu.liquifier('gregification:blood_liquification')
        .itemInputs('evilcraft:condensed_blood')
        .inputFluids('#forge:water_stage_1 500')
        .outputFluids('gtceu:sanguine_concentrate 500')
        .duration(100)
        .EUt(MV)

    allthemods.recipes.gtceu.liquifier('gregification:wraith_heart_liquification')
        .itemInputs('32x eidolon:wraith_heart')
        .outputFluids('gtceu:soul 1')
        .duration(100)
        .EUt(MV)

    allthemods.recipes.gtceu.liquifier('gregification:flower_to_nectar')
        .itemInputs('#minecraft:flowers')
        .circuit(4)
        .outputFluids('gtceu:nectar 250')
        .duration(100)
        .EUt(MV)
        
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
