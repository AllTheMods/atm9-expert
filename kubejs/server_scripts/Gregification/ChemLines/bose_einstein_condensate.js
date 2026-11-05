// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

    const vaporEut = UEV
    const vaporDuration = 120
    const vaporTemp = 15000

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:bec/sodium_vapor')
        .itemInputs('#forge:dusts/sodium')
        .outputFluids('gtceu:sodium_vapor 1000')
        .blastFurnaceTemp(vaporTemp)
        .duration(vaporDuration)
        .EUt(vaporEut)

    const coolEut = UEV
    const coolDuration = 400

    allthemods.recipes.gtceu.laser_purification('gregification:bec/laser_cooled_sodium')
        .notConsumable('6x gtceu:uev_emitter')
        .notConsumable('gtceu:samarium_cobalt_magnetic_rotor')
        .inputFluids('#forge:sodium_vapor 8000')
        .inputFluids('#forge:liquid_helium 10000')
        .outputFluids('gtceu:laser_cooled_sodium 4000')
        .duration(coolDuration)
        .EUt(coolEut)

    const freezeEut = UEV
    const freezeDuration = 800

    allthemods.recipes.gtceu.cryogenic_unit('gregification:bec/ultracold_sodium')
        .inputFluids('#forge:laser_cooled_sodium 8000')
        .inputFluids('#forge:super_coolant 8000')
        .outputFluids('gtceu:ultracold_sodium 100')
        .outputFluids('gtceu:sodium_vapor 9000')
        .duration(freezeDuration)
        .EUt(freezeEut)

    const condenseEut = UV
    const condenseDuration = 8000

    allthemods.recipes.gtceu.super_critical_heat_exchanger('gregification:bec/bose_einstein_condensate')
        .inputFluids('#forge:ultracold_sodium 1000')
        .inputFluids('#forge:purest_water 1000')
        .itemOutputs('gtceu:bose_einstein_condensate')
        .duration(condenseDuration)
        .EUt(condenseEut)

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.