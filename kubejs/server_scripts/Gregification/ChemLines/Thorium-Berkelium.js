ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const eut = ZPM;
    const eut2 = IV;

 

    //calcium fluoride dust
    allthemods.recipes.gtceu.chemical_reactor('gregification:calcium_fluoride_dust')
        .itemInputs('#forge:dusts/calcium')
        .inputFluids('#forge:fluorine 2000')
        .itemOutputs('gtceu:calcium_fluoride_dust')
        .duration(200)
        .EUt(eut2);

    //step 1 - autoclave thorium with calcium fluorite 
    allthemods.recipes.gtceu.crystal_growth_chamber('gregification:thorium_doped_calcium_fluoride_gem')
        .itemInputs('#forge:dusts/thorium')
        .inputFluids('#forge:calcium_fluoride 2000')
        .outputFluids('gtceu:fluorine 2000')
        .itemOutputs('gtceu:thorium_doped_calcium_fluoride_gem', 'gtceu:calcium_dust')
        .duration(400)
        .EUt(eut);

    // Mixer recipe for Potassium Fluoride
    allthemods.recipes.gtceu.chemical_reactor('gregification:potassium_fluoride_dust')
        .itemInputs('#forge:dusts/potassium')
        .inputFluids('#forge:fluorine 1000')
        .itemOutputs('gtceu:potassium_fluoride_dust')
        .duration(200)
        .EUt(eut2);

    // Chemical Reactor recipe for Calcium Nitrate
    allthemods.recipes.gtceu.chemical_reactor('gregification:calcium_nitrate_dust')
        .itemInputs('#forge:dusts/calcium')
        .inputFluids('#forge:nitric_acid 2000')
        .itemOutputs('gtceu:calcium_nitrate_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .duration(400)
        .EUt(eut2);

    // Final Precursor Synthesis: Potassium Thorium Hexafluoride
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:potassium_thorium_hexafluoride_precursor')
        .itemInputs('#forge:gems/thorium_doped_calcium_fluoride', '4x #forge:dusts/potassium_fluoride')
        .inputFluids('#forge:nitric_acid 2000, #forge:fluorine 4000')
        .itemOutputs('gtceu:potassium_thorium_hexafluoride_dust', 'gtceu:calcium_nitrate_dust', '2x gtceu:potassium_fluoride_dust')
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .duration(300)
        .EUt(eut);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:berkelium_osmium_phosphate_precursor')
        .itemInputs('#forge:dusts/berkelium', '2x #forge:dusts/osmium')
        .inputFluids('#forge:phosphoric_acid 1000', 'gtceu:chlorine 6000', 'minecraft:water 5000')
        .itemOutputs('gtceu:berkelium_osmium_phosphate_dust')
        .outputFluids('gtceu:acidic_osmium_solution 1000', 'gtceu:hydrochloric_acid 5000', 'gtceu:hydrogen 5000') // 5000mB for byproduct HCl
        .duration(400)
        .EUt(eut);

    //very complex reaction
    allthemods.recipes.gtceu.electric_blast_furnace('gregification:thorium_berkelium_alloy_synthesis')
        .itemInputs('2x #forge:dusts/potassium_thorium_hexafluoride', '#forge:dusts/berkelium_osmium_phosphate')
        .inputFluids('#forge:hydrogen 11000')
        .itemOutputs('gtceu:thorium_berkelium_alloy_ingot', 'alltheores:osmium_ingot', '4x gtceu:potassium_fluoride_dust')
        .outputFluids('gtceu:hydrofluoric_acid 8000', 'gtceu:phosphoric_acid 1000')
        .blastFurnaceTemp(7200)
        .duration(400)
        .EUt(eut);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:dicalcium_trisilicate_synthesis')
        .itemInputs('2x #forge:dusts/wollastonite', '#forge:dusts/silicon_dioxide', '#forge:dusts/sulfur')
        .itemOutputs('gtceu:dicalcium_trisilicate_dust')
        .inputFluids('#forge:oxygen 2000')
        .outputFluids('gtceu:sulfur_dioxide 1000')
        .duration(400)
        .EUt(eut);


    allthemods.recipes.gtceu.large_chemical_reactor('gregification:potassium_calcium_orthosilicate')
        .itemInputs('#forge:dusts/dicalcium_trisilicate', '2x #forge:dusts/potassium_calcium_silicate', '2x #forge:dusts/potassium_fluoride')
        .inputFluids('#forge:sulfuric_acid 2000')
        .itemOutputs('2x gtceu:potassium_calcium_orthosilicate_dust','2x gtceu:calcium_sulfate_dust','3x gtceu:silicon_dioxide_dust')
        .outputFluids('gtceu:hydrofluoric_acid 4000')
        .duration(150)
        .EUt(eut);    
});