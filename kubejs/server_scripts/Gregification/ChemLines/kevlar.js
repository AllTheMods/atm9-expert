// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    // ================= ANILINE BRANCH =================

    // Benzene + Sulfuric Acid + Nitric Acid + Water -> Nitrobenzene + Diluted Sulfuric Acid
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/nitrobenzene')
        .inputFluids('#forge:benzene 1000', '#forge:sulfuric_acid 600', '#forge:nitric_acid 1000', 'minecraft:water 2000')
        .outputFluids('gtceu:nitrobenzene 1000', 'gtceu:diluted_sulfuric_acid 600')
        .duration(120)
        .EUt(IV); // IV

    // Nitrobenzene + Hydrogen + Palladium (catalyst) -> Aniline + Water
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/aniline')
        .notConsumable('#forge:dusts/palladium')
        .inputFluids('#forge:nitrobenzene 1000', '#forge:hydrogen 6000')
        .outputFluids('gtceu:aniline 1000', 'minecraft:water 2000')
        .duration(900)
        .EUt(EV); // EV

    // Nitrobenzene + Hydrogen + Palladium (catalyst) -> Aniline + Water
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/aniline')
        .notConsumable('#forge:dusts/nickel')
        .inputFluids('#forge:nitrobenzene 1000', '#forge:hydrogen 6000')
        .outputFluids('gtceu:aniline 500', 'minecraft:water 2000')
        .duration(1000)
        .EUt(HV); // HV

    // Aniline + Acetic Anhydride + Nitration Mixture -> 4-Nitroaniline + Diluted Sulfuric Acid
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/nitroaniline')
        .inputFluids('#forge:aniline 1000', '#forge:acetic_anhydride 100', '#forge:nitration_mixture 2000')
        .outputFluids('gtceu:nitroaniline 1000', 'gtceu:diluted_sulfuric_acid 1000')
        .duration(300)
        .EUt(EV); // EV

    // 4-Nitroaniline + Hydrogen + Palladium (catalyst) -> Para-Phenylenediamine + Water
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/ppd')
        .notConsumable('#forge:dusts/palladium')
        .inputFluids('#forge:nitroaniline 1000', '#forge:hydrogen 6000')
        .itemOutputs('16x gtceu:para_phenylenediamine_dust')
        .outputFluids('minecraft:water 2000')
        .duration(400)
        .EUt(EV); // EV

    // ================= TEREPHTHALOYL CHLORIDE BRANCH =================

    // Xylene isomerization (uses base xylene -> isolates p-xylene; Zeolite catalyst)
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/p_xylene')
        .itemInputs('#forge:dusts/zeolite')
        .inputFluids('#forge:xylene 1000')
        .outputFluids('gtceu:p_xylene 400', 'gtceu:xylene 600')
        .duration(200)
        .EUt(EV);

    // p-Xylene + Cobalt Naphthenate (catalyst) + Oxygen -> Terephthalic Acid + Water
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/terephthalic_acid')
        .inputFluids('#forge:cobalt_naphthenate 100', '#forge:p_xylene 1000', '#forge:oxygen 6000')
        .outputFluids('gtceu:terephthalic_acid 1000', 'minecraft:water 2000')
        .duration(150)
        .EUt(EV); // EV

    // Terephthalic Acid + Methanol + Sulfuric Acid (catalyst) -> Dimethyl Terephthalate + Diluted Sulfuric Acid
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/dimethyl_terephthalate')
        .inputFluids('#forge:sulfuric_acid 2000', '#forge:terephthalic_acid 1000', '#forge:methanol 2000')
        .outputFluids('gtceu:dimethyl_terephthalate 1000', 'gtceu:diluted_sulfuric_acid 2000')
        .duration(250)
        .EUt(HV); // HV

    // Sulfur + Chlorine -> Sulfur Dichloride
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/sulfur_dichloride')
        .itemInputs('8x #forge:dusts/sulfur')
        .inputFluids('#forge:chlorine 4000')
        .outputFluids('gtceu:sulfur_dichloride 2000')
        .duration(200)
        .EUt(MV); // LV

    // Sulfur Trioxide + Sulfur Dichloride -> Thionyl Chloride + Sulfur Dioxide
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/thionyl_chloride')
        .inputFluids('#forge:sulfur_trioxide 1000', '#forge:sulfur_dichloride 1000')
        .outputFluids('gtceu:thionyl_chloride 1000', 'gtceu:sulfur_dioxide 125')
        .duration(150)
        .EUt(HV); // HV

    // Dimethyl Terephthalate + Thionyl Chloride + Carbon Dioxide -> Terephthaloyl Chloride + Diluted HCl + Sulfur Dioxide
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/terephthaloyl_chloride')
        .inputFluids('#forge:dimethyl_terephthalate 250', '#forge:thionyl_chloride 900', '#forge:carbon_dioxide 300')
        .itemOutputs('gtceu:terephthaloyl_chloride_dust')
        .outputFluids('gtceu:diluted_hydrochloric_acid 1100', 'gtceu:sulfur_dioxide 900')
        .duration(400)
        .EUt(HV); // HV

    // ================= NMP SOLVENT BRANCH =================

    // Ammonia -> Methylamine + Dimethylamine + Water (byproduct spread)
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/methylamine')
        .inputFluids('#forge:ammonia 1350')
        .outputFluids('gtceu:methylamine 450', 'gtceu:dimethylamine 450', 'minecraft:water 2700')
        .duration(3000)
        .EUt(EV); // EV

    // Methylamine + Gamma-Butyrolactone -> NMP + Water
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/nmp')
        .inputFluids('#forge:methylamine 1000', '#forge:gamma_butyrolactone 1000')
        .outputFluids('gtceu:n_methylpyrrolidone 1000', 'minecraft:water 1000')
        .duration(600)
        .EUt(IV); // IV

    // ================= FINAL POLYMERIZATION =================

    // Para-Phenylenediamine + Terephthaloyl Chloride + Calcium Chloride (catalyst) + NMP -> Liquid Crystal Kevlar + Diluted HCl
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/liquid_crystal_kevlar')
        .itemInputs('9x #forge:dusts/para_phenylenediamine', '9x #forge:dusts/terephthaloyl_chloride')
        .notConsumable('#forge:dusts/calcium_chloride')
        .inputFluids('#forge:n_methylpyrrolidone 1000')
        .outputFluids('gtceu:liquid_crystal_kevlar 9000', 'gtceu:diluted_hydrochloric_acid 2000')
        .duration(600)
        .EUt(ZPM); // ZPM

    // ================= POLYURETHANE RESIN BRANCH =================

    // Aniline + Formaldehyde -> Diaminodiphenylmethane (MDA)
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/mda')
        .inputFluids('#forge:aniline 2000', '#forge:formaldehyde 1000')
        .outputFluids('gtceu:diaminodiphenylmethane 1000')
        .duration(600)
        .EUt(HV); // HV

    // Carbon Monoxide + Chlorine -> Phosgene
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/phosgene')
        .inputFluids('#forge:carbon_monoxide 1000', '#forge:chlorine 1000')
        .outputFluids('gtceu:phosgene 1000')
        .duration(200)
        .EUt(HV); // HV

    // Diaminodiphenylmethane + Phosgene -> Diphenylmethane Diisocyanate (MDI)
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/mdi')
        .inputFluids('#forge:diaminodiphenylmethane 1000', '#forge:phosgene 1000')
        .itemOutputs('5x gtceu:diphenylmethane_diisocyanate_dust')
        .duration(600)
        .EUt(EV); // EV

    // Ethylene + Oxygen + Hydrogen -> Ethylene Glycol
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/ethylene_glycol')
        .inputFluids('#forge:ethylene 1000', '#forge:oxygen 2000', '#forge:hydrogen 2000')
        .outputFluids('gtceu:ethylene_glycol 1000')
        .duration(200)
        .EUt(MV); // MV

    // Formaldehyde -> Pentaerythritol
    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/pentaerythritol')
        .inputFluids('#forge:formaldehyde 4000')
        .itemOutputs('gtceu:pentaerythritol_dust')
        .duration(300)
        .EUt(MV); // MV

    // Kevlar Catalyst + Pentaerythritol + MDI + Ethylene Glycol -> Polyurethane Resin
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kevlar/polyurethane_resin')
        .itemInputs('#forge:dusts/kevlar_catalyst', '#forge:dusts/pentaerythritol', '5x #forge:dusts/diphenylmethane_diisocyanate')
        .inputFluids('#forge:ethylene_glycol 4000')
        .outputFluids('gtceu:polyurethane_resin 1000')
        .duration(200)
        .EUt(ZPM); // ZPM

    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/cobalt_naphthenate')
        .itemInputs('#forge:dusts/cobalt')
        .inputFluids('#forge:naphtha 1000', '#forge:oxygen 500')
        .outputFluids('gtceu:cobalt_naphthenate 1000')
        .duration(200)
        .EUt(HV); // HV

    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/kevlar_catalyst')
        .itemInputs('#forge:dusts/tin')
        .inputFluids('#forge:butanol 1000', '#forge:iron_iii_chloride 100')
        .itemOutputs('gtceu:kevlar_catalyst_dust')
        .duration(300)
        .EUt(EV); // EV

    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/maleic_anhydride')
        .inputFluids('#forge:benzene 1000', '#forge:oxygen 3000')
        .outputFluids('gtceu:maleic_anhydride 1000')
        .duration(200)
        .circuit(3)
        .EUt(HV); // HV

    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/gamma_butyrolactone')
        .inputFluids('#forge:maleic_anhydride 1000', '#forge:hydrogen 3000')
        .outputFluids('gtceu:gamma_butyrolactone 1000', 'minecraft:water 1000')
        .duration(300)
        .circuit(3)
        .EUt(HV); // HV


    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/butyraldehyde')
        .inputFluids('#forge:propene 1000', '#forge:carbon_monoxide 1000', '#forge:hydrogen 1000')
        .outputFluids('gtceu:butyraldehyde 1000')
        .duration(200)
        .circuit(3)
        .EUt(HV); // HV


    allthemods.recipes.gtceu.chemical_reactor('gregification:kevlar/butanol')
        .inputFluids('#forge:butyraldehyde 1000', '#forge:hydrogen 1000')
        .outputFluids('gtceu:butanol 1000')
        .duration(200)
        .EUt(HV); // HV

    allthemods.recipes.gtceu.chemical_bath('gregification:kevlar/spin_fiber')
        .itemInputs('gtceu:carbon_fiber_plate')
        .inputFluids('#forge:liquid_crystal_kevlar 1000')
        .itemOutputs('gtceu:kevlar_carbon_fiber_mesh_gem')
        .duration(400)
        .EUt(EV);


    allthemods.recipes.gtceu.chemical_bath('gregification:kevlar/composite_plate')
        .itemInputs('#forge:plates/kevlar_carbon_fiber_mesh')
        .inputFluids('#forge:polyurethane_resin 500')
        .itemOutputs('gtceu:kevlar_plate')
        .duration(400)
        .EUt(EV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:tetrahydrofuran')
        .inputFluids(['#forge:gamma_butyrolactone 1000', '#forge:hydrogen 4000'])
        .outputFluids(['gtceu:tetrahydrofuran 1000', 'minecraft:water 1000'])
        .duration(200)
        .EUt(EV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
