ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;
    const EUSimple = EV;
    const EUComplex = LuV; //UV Tier

allthemods.recipes.gtceu.mixer('gregification:soul_essence_synthesis')
        .itemInputs('#forge:dusts/soul', '#forge:dusts/source', '#forge:dusts/mana_essence', '#forge:dusts/sculk')
        .itemOutputs('4x gtceu:soul_essence_dust')
        .duration(400)
        .EUt(EUSimple);

allthemods.recipes.gtceu.mixer('gregification:mind_numbing_agent_synthesis')
        .itemInputs('4x gtceu:stem_cells', '4x gtceu:soul_essence_dust')
        .itemOutputs('4x gtceu:mind_numbing_agent_dust')
        .duration(400)
        .EUt(EUSimple);

allthemods.recipes.gtceu.large_chemical_reactor('gregification:poison_agent_synthesis')
        .itemInputs('#forge:dusts/astatine')
        .inputFluids('evilcraft:poison 1000')
        .outputFluids('gtceu:poison_agent 1000')
        .duration(1600)
        .EUt(EUComplex);


allthemods.recipes.gtceu.large_chemical_reactor('gregification:paralytic_agent_synthesis')
        .itemInputs('gtceu:thorn_rose_dust')
        .inputFluids('gtceu:poison_agent 1000')
        .outputFluids('gtceu:paralytic_agent 1000')
        .duration(1600)
        .EUt(EUComplex);

allthemods.recipes.gtceu.large_chemical_reactor('gregification:mind_control_serum_synthesis')
        .itemInputs('#forge:dusts/mind_numbing_agent')
        .inputFluids('gtceu:terrazine 1000', 'gtceu:paralytic_agent 1000')
        .outputFluids('gtceu:mind_control_serum 1000')
        .duration(1600)
        .EUt(EUComplex);
                
});