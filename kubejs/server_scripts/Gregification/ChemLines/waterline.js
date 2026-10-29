// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const EUStage1 = HV; //hv
    const EUStage2 = EV; //ev
    const EUStage3 = IV; //iv
    const EUStage4 = LuV; //luv
    const EUStage5 = ZPM; //zpm
    const EUStage6 = UV; //uv
    const EUStage7 = UHV; //uhv
    const EUStage8 = UEV; //uev
    const duration = 400;

    //zinc carbon acid for the slurry
    const filter = Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:activated_carbon_slurry"}}').strongNBT();    
    allthemods.recipes.gtceu.water_filtration_plant('gregification:water_stage_1')
        .chancedInput(filter, 1000, 0)
        .inputFluids('#forge:distilled_water 1000')
        .outputFluids('gtceu:water_stage_1 900')
        .duration(duration)
        .EUt(EUStage1);            
    
    allthemods.recipes.gtceu.canner('gregification:carbon_slurry_filter')
        .itemInputs('gtceu:fluid_cell')
        .inputFluids('#forge:activated_carbon_slurry 1000')
        .itemOutputs(filter)        
        .duration(duration)
        .EUt(EUStage1);

    allthemods.recipes.gtceu.chemical_reactor('gregification:carbon_slurry')
        .itemInputs(['#forge:dusts/zinc', '#forge:dusts/activated_carbon'])
        .inputFluids('#forge:hydrochloric_acid 1000')
        .outputFluids('gtceu:activated_carbon_slurry 1000')
        .duration(duration)
        .EUt(EUStage1);

    allthemods.recipes.gtceu.ozonation_plant('gregification:water_stage_2')        
        .inputFluids('#forge:water_stage_1 900', '#forge:ozone 1000')
        .outputFluids('gtceu:water_stage_2 800')
        .duration(duration*.9)
        .EUt(EUStage2);
    
    allthemods.recipes.gtceu.flocculation_plant('gregification:water_stage_3')
        .inputFluids('#forge:water_stage_2 800', '#forge:polyaluminium_chloride 1000')
        .outputFluids('gtceu:water_stage_3 700', 'gtceu:spent_flocculant_slurry 1000')
        .duration(duration*.8)
        .EUt(EUStage3);

    allthemods.recipes.gtceu.chemical_reactor('gregification:polyaluminium_chloride')
        .itemInputs('2x #forge:dusts/aluminium_hydroxide')
        .inputFluids('#forge:hydrochloric_acid 3000')
        .outputFluids(['gtceu:polyaluminium_chloride 1000', 'minecraft:water 3000'])
        .duration(duration*.8)
        .EUt(EUStage3);

    allthemods.recipes.gtceu.chemical_reactor('gregification:polyaluminium_chloride_slurry_processing')        
        .inputFluids(['#forge:spent_flocculant_slurry 1000', '#forge:water 3000'])
        .outputFluids('gtceu:polyaluminium_chloride 1000')
        .duration(duration*.8)
        .EUt(EUStage3);

    allthemods.recipes.gtceu.chemical_reactor('gregification:aluminium_hydroxide')        
        .itemInputs(['3x #forge:dusts/sodium_hydroxide', '#forge:dusts/aluminum'])        
        .itemOutputs(['3x gtceu:sodium_dust', 'gtceu:aluminium_hydroxide_dust'])
        .duration((duration*.8)/2)
        .EUt(EUStage3);

    //this is where we get some bacteria!
    allthemods.recipes.gtceu.microbial_filtration_array('gregification:water_stage_4')
        .chancedInput('#forge:dusts/sodium_hydroxide', 2500, 0)
        .inputFluids('#forge:water_stage_3 700')
        .chancedFluidInput('#forge:hydrochloric_acid 1000', 2500,0)
        .outputFluids('gtceu:water_stage_4 600')
        .duration(duration*.7)
        .EUt(EUStage4);
    
    
    allthemods.recipes.gtceu.laser_purification('gregification:water_stage_5')
        .chancedInput('#forge:lenses/demon', 1000, 0)
        .chancedInput('#forge:lenses/soul', 1000, 0)
        .chancedInput('#forge:lenses/eternal', 1000, 0)
        .chancedInput('#forge:lenses/nether_star', 1000, 0)
        .chancedInput('#forge:lenses/source', 1000, 0)        
        .inputFluids('#forge:water_stage_4 600')
        .outputFluids('gtceu:water_stage_5 500')
        .duration(duration*.6)
        .EUt(EUStage5);
    
    allthemods.recipes.gtceu.cryogenic_unit('gregification:water_stage_6')
        .chancedFluidInput('#forge:super_coolant 100', 2500,0)
        .chancedFluidInput('#forge:helium_plasma 100', 2500,0)
        .inputFluids('#forge:water_stage_5 500')
        .outputFluids('gtceu:water_stage_6 400')
        .duration(duration*.5)
        .EUt(EUStage6);
    
    allthemods.recipes.gtceu.baryonic_stabilizer('gregification:water_stage_7')
        .chancedInput('gtceu:up_quark', 500, 0)
        .chancedInput('gtceu:down_quark', 500, 0)
        .chancedInput('gtceu:top_quark', 500, 0)
        .chancedInput('gtceu:bottom_quark', 500, 0)
        .chancedInput('gtceu:strange_quark', 500, 0)
        .chancedInput('gtceu:charm_quark', 500, 0)
        .inputFluids('#forge:water_stage_6 400')
        .outputFluids('gtceu:purest_water 300')
        .duration(duration*.4)
        .EUt(EUStage7);
        
    allthemods.recipes.gtceu.baryonic_separator('gregification:quark_separation')
        .inputFluids(['#forge:deuterium 1000', '#forge:hydrogen 1000'])
        .chancedOutput('gtceu:up_quark', 5000, 0)
        .chancedOutput('gtceu:down_quark', 5000, 0)
        .chancedOutput('gtceu:top_quark', 5000, 0)
        .chancedOutput('gtceu:bottom_quark', 5000, 0)
        .chancedOutput('gtceu:strange_quark', 5000, 0)
        .chancedOutput('gtceu:charm_quark', 5000, 0)
        .duration(duration)
        .EUt(EUStage7);

    allthemods.recipes.gtceu.baryonic_separator('gregification:preon_separation')
        .itemInputs(['#forge:small_dusts/protactinium', '#forge:small_dusts/francium'])
        .chancedOutput('gtceu:preon', 1500, 0)
        .duration(duration)
        .EUt(EUStage5);

    allthemods.recipes.gtceu.baryonic_separator('gregification:tachyon_separation')
        .itemInputs(['#forge:small_dusts/neutronium', '#forge:small_dusts/tenebrium'])
        .chancedOutput('gtceu:tachyon', 1500, 0)
        .duration(duration)
        .EUt(EUStage5);

    allthemods.recipes.gtceu.baryonic_separator('gregification:neutrino_separation')
        .itemInputs(['#forge:small_dusts/infinity', '#forge:small_dusts/tenebrium'])
        .chancedOutput('gtceu:neutrino', 1500, 0)
        .duration(duration)
        .EUt(EUStage5);
    
    allthemods.recipes.gtceu.baryonic_separator('gregification:plutonic_quark_separation')
        .itemInputs(['#forge:small_dusts/tenebrium', '#forge:small_dusts/bedrockium'])
        .chancedOutput('gtceu:plutonic_quark', 2500, 0)
        .duration(duration)
        .EUt(EUStage5);

    allthemods.recipes.gtceu.hydro_electromagnetic_separator('gregificatoion:hydro_electromagnetic_separator/liquid_air_separation')
        .itemInputs()
        .inputFluids('gtceu:liquid_air 13000')
        .itemOutputs()
        .outputFluids('gtceu:ionized_oxygen 3000', 'gtceu:inert_gas_mixture 10000')
        .duration(duration)
        .circuit(1)
        .EUt(EUStage1);

    allthemods.recipes.gtceu.chemical_reactor('gregificatoion:chemical_reactor/ozone')
        .itemInputs()
        .inputFluids('#forge:ionized_oxygen 3000')
        .itemOutputs()
        .outputFluids('gtceu:ozone 1000')
        .duration(duration)
        .EUt(EUStage1);

    // Step 2: Fractional Gas Separator (Inert Gas Mixture -> Component Gases)
    allthemods.recipes.gtceu.fractional_gas_separator('gregificatoion:fractional_gas_separator/inert_gas_fractionation')
        .itemInputs()
        .inputFluids('gtceu:inert_gas_mixture 10000')
        .itemOutputs()
        .outputFluids('gtceu:nitrogen 9000', 'gtceu:carbon_dioxide 500', 'gtceu:helium 250', 'gtceu:argon 125')
        .duration(duration)
        .EUt(EUStage1);

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
