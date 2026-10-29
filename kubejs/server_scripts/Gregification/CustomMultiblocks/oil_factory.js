// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const EUStage3 = ZPM;
    const TIME = { medium: 600 };





    // Severe Steam-Cracked, 10000mB Oil
    allthemods.recipes.gtceu.oil_processing_plant('oil_processing_plant/steam_severe')
        .inputFluids([
            '#forge:oil 10000',
            '#forge:hydrogen 4600',  // desulfurization,
            '#forge:steam 20000'  // cracking catalyst
        ])
        .outputFluids([
            'gtceu:sulfuric_gas 12000',
            'gtceu:hydrogen_sulfide 2300',
            'gtceu:ethylene 6380',
            'gtceu:methane 11500',
            'gtceu:propane 200',
            'gtceu:propene 3600',
            'gtceu:ethane 1000',
            'gtceu:benzene 2500',
            'gtceu:butene 825',
            'gtceu:butadiene 715',
            'gtceu:toluene 500'
        ])
        // TODO: carbon dust item output, chance-weighted ~655%
        .addData('ebf_temp', 7100)
        .duration(TIME.medium)  // TODO: set real duration
        .EUt(EUStage3)          // TODO: set real EU/t tier
        .circuit(1);


    // Light Steam-Cracked, 10000mB Oil
    allthemods.recipes.gtceu.oil_processing_plant('oil_processing_plant/steam_light')
        .inputFluids([
            '#forge:oil 10000',
            '#forge:hydrogen 4600',  // desulfurization,
            '#forge:steam 28500'  // cracking catalyst
        ])
        .outputFluids([
            'gtceu:sulfuric_gas 12000',
            'gtceu:hydrogen_sulfide 2300',
            'gtceu:ethylene 3700',
            'gtceu:methane 12700',
            'gtceu:propane 215',
            'gtceu:propene 3230',
            'gtceu:ethane 565',
            'gtceu:benzene 2680',
            'gtceu:butene 1200',
            'gtceu:butadiene 2050',
            'gtceu:toluene 670'
        ])
        // TODO: carbon dust item output, chance-weighted ~315%
        .addData('ebf_temp', 7100)
        .duration(TIME.medium)  // TODO: set real duration
        .EUt(EUStage3)          // TODO: set real EU/t tier
        .circuit(2);


    // Severe Hydro-Cracked, 10000mB Oil
    allthemods.recipes.gtceu.oil_processing_plant('oil_processing_plant/hydro_severe')
        .inputFluids([
            '#forge:oil 10000',            
            '#forge:hydrogen 127500'  // cracking catalyst
        ])
        .outputFluids([
            'gtceu:sulfuric_gas 12000',
            'gtceu:hydrogen_sulfide 2300',
            'gtceu:ethylene 750',
            'gtceu:methane 27000',
            'gtceu:propane 2350',
            'gtceu:propene 750',
            'gtceu:ethane 26350',
            'gtceu:benzene 450',
            'gtceu:butene 200',
            'gtceu:butadiene 150',
            'gtceu:toluene 90',
            'gtceu:butane 2200'
        ])
        .addData('ebf_temp', 7100)
        .duration(TIME.medium)  // TODO: set real duration
        .EUt(EUStage3)          // TODO: set real EU/t tier
        .circuit(3);


    // Light Hydro-Cracked, 10000mB Oil
    allthemods.recipes.gtceu.oil_processing_plant('oil_processing_plant/hydro_light')
        .inputFluids([
            '#forge:oil 10000',            
            '#forge:hydrogen 176000'  // cracking catalyst
        ])
        .outputFluids([
            'gtceu:sulfuric_gas 12000',
            'gtceu:hydrogen_sulfide 2300',
            'gtceu:ethylene 150',
            'gtceu:methane 20100',
            'gtceu:propane 4200',
            'gtceu:propene 450',
            'gtceu:ethane 3500',
            'gtceu:benzene 600',
            'gtceu:butene 225',
            'gtceu:butadiene 180',
            'gtceu:toluene 120',
            'gtceu:butane 11000',
            'gtceu:hydrogen 16000'
        ])
        .addData('ebf_temp', 7100)
        .duration(TIME.medium)  // TODO: set real duration
        .EUt(EUStage3)          // TODO: set real EU/t tier
        .circuit(4);


});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
