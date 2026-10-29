// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    allthemods.recipes.gtceu.gem_crusher('mixed_gem_crushing')
        .itemInputs('4x #forge:mixed_gem_material')
        .itemOutputs('4x gtceu:mixed_gem_dust')
        .duration(100)
        .EUt(MV);

    const duration = 400;
    const eut = EV;
    const coilTemp = 4500;

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:mixed_gem/pyrohydrolysis')
        .itemInputs('64x #forge:dusts/mixed_gem')
        .inputFluids('minecraft:water 16000')
        .itemOutputs('16x gtceu:silicon_dioxide_dust', '32x gtceu:mixed_gem_calcine_dust', '8x gtceu:fluorite_dust')
        .outputFluids('gtceu:hydrogen_sulfide 8000')
        .duration(duration)
        .EUt(eut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:mixed_gem/caustic_digestion')
        .itemInputs('32x #forge:dusts/mixed_gem_calcine', '32x #forge:dusts/sodium_hydroxide')
        .itemOutputs('16x gtceu:mixed_gem_residue_dust', '16x gtceu:sodium_aluminate_dust')
        .outputFluids('minecraft:water 8000')
        .duration(duration)
        .EUt(eut);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:mixed_gem/alumina_sinter')
        .itemInputs('16x #forge:dusts/sodium_aluminate')
        .inputFluids('#forge:carbon_dioxide 8000')
        .itemOutputs('8x gtceu:aluminium_oxide_dust', '8x gtceu:soda_ash_dust')
        .blastFurnaceTemp(coilTemp)
        .duration(duration)
        .EUt(eut);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:mixed_gem/iron_reduction')
        .itemInputs('16x #forge:dusts/mixed_gem_residue')
        .inputFluids('#forge:hydrogen 16000')
        .itemOutputs('8x gtceu:iron_dust', '8x gtceu:mixed_gem_lime_cake_dust')
        .outputFluids('minecraft:water 8000')
        .blastFurnaceTemp(coilTemp)
        .duration(duration)
        .EUt(eut);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:mixed_gem/lime_magnesia_leach')
        .itemInputs('8x #forge:dusts/mixed_gem_lime_cake')
        .inputFluids('#forge:hydrochloric_acid 32000')
        .itemOutputs('4x gtceu:calcium_chloride_dust', '4x gtceu:magnesium_chloride_dust', '4x gtceu:mixed_gem_rare_earth_dust')
        .outputFluids('minecraft:water 16000')
        .duration(duration)
        .EUt(eut);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:mixed_gem/rare_earth_roast')
        .itemInputs('4x #forge:dusts/mixed_gem_rare_earth')
        .inputFluids('#forge:oxygen 4000')
        .itemOutputs('2x gtceu:yttrium_oxide_dust', '2x gtceu:cerium_oxide_dust')
        .blastFurnaceTemp(coilTemp)
        .duration(duration)
        .EUt(eut);

    allthemods.recipes.gtceu.electrolyzer('gregification:mixed_gem/magnesium_electrolysis')
        .itemInputs('4x #forge:dusts/magnesium_chloride')
        .itemOutputs('2x gtceu:magnesium_dust')
        .outputFluids('gtceu:chlorine 4000')
        .duration(duration)
        .EUt(eut);

    allthemods.recipes.gtceu.electrolyzer('gregification:mixed_gem/calcium_electrolysis')
        .itemInputs('4x #forge:dusts/calcium_chloride')
        .itemOutputs('2x gtceu:calcium_dust')
        .outputFluids('gtceu:chlorine 4000')
        .duration(duration)
        .EUt(eut);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
