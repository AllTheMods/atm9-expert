// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.recipes.gtceu.distillery('refine_seed_oil')
        .inputFluids('#forge:seed_oil 100')
        .outputFluids('gtceu:refined_seed_oil 100')
        .circuit(7)
        .duration(600)
        .EUt(EV);
        
    allthemods.recipes.gtceu.cracker('steam_crack_kerosene')
        .inputFluids(
            [
                '#forge:kerosene 1000',
                '#forge:steam 1000'
            ])
        .outputFluids('gtceu:gt_cracked_kerosene 1000')
        .duration(120)
        .EUt(HV);

    allthemods.recipes.gtceu.cracker('steam_crack_lpg')
        .inputFluids(
            [
                '#forge:lpg 1000',
                '#forge:steam 1000'
            ])
        .outputFluids('gtceu:gt_cracked_lpg 1000')
        .duration(120)
        .EUt(HV);


    allthemods.recipes.gtceu.distillation_tower('cracker_lpg')
        .inputFluids('gtceu:gt_cracked_lpg 1000')
        .outputFluids([
            'gtceu:ethylene 500',
            'gtceu:propene 400',
            'gtceu:butene 200',
            'gtceu:benzene 150',
            'gtceu:hydrogen 150'
        ])
        .duration(160)
        .EUt(HV);

    allthemods.recipes.gtceu.distillation_tower('cracker_kerosene')
        .inputFluids('gtceu:gt_cracked_kerosene 1000')
        .outputFluids([
            'gtceu:ethylene 450',
            'gtceu:propene 350',
            'gtceu:hydrogen 200'
        ])
        .duration(160)
        .EUt(HV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
