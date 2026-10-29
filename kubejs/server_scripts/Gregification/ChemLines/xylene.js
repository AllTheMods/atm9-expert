// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const EUSimple = EV; //ev
    const umEUComplex = LuV; //luv

    // --- xylene chain ---
    // Step 1: Large Chemical Reactor
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:alumina_catalyst')
        .itemInputs('#forge:plates/aluminum')
        .inputFluids('#forge:platinum 1000', '#forge:rhenium 1000', '#forge:chlorine 250')
        .outputFluids('gtceu:platinum_rhenium_catalyst 1000')
        .duration(150)
        .EUt(EUSimple);
    
    // Step 2: Large Chemical Reactor
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:unrefined_xylene')
        .itemInputs('4x #forge:foils/platinum_rhenium_catalyst')        
        .inputFluids('#forge:naphtha 1000')
        .outputFluids('gtceu:unrefined_xylene 1000', 'gtceu:hydrogen 500')
        .duration(600)
        .EUt(umEUComplex);

    // Step 3: Mixer
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rhenate_fuel_blend')
        .inputFluids('#forge:unrefined_xylene 500', '#forge:cetane_boosted_diesel 500')
        .outputFluids('gtceu:rhenate_blend_fuel 1000')
        .duration(300)
        .EUt(EUSimple);

    // Step 4: Distillation
    allthemods.recipes.gtceu.distillation_tower('gregification:distill_rhenate_fuel')
        .inputFluids('#forge:rhenate_blend_fuel 1000')
        .outputFluids(
            'gtceu:xylene 500',
            'gtceu:diesel 300',
            'gtceu:toluene 100',
            'gtceu:gasoline 100'
        )
        .duration(400)
        .EUt(umEUComplex);

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
