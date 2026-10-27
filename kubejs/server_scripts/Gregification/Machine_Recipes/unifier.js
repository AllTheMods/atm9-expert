ServerEvents.recipes(allthemods => {
        const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
        allthemods.recipes.gtceu.unifier('gregification:lubricant_uinification')
                .inputFluids('#forge:lubricant 12')
                .outputFluids('gtceu:lubricant 12')
                .duration(1)
                .EUt(LV);

        allthemods.recipes.gtceu.unifier('gregification:biodiesel_unification')
                .inputFluids('#forge:biodiesel 12')
                .outputFluids('gtceu:bio_diesel 12')
                .duration(1)
                .EUt(LV);

        allthemods.recipes.gtceu.unifier('gregification:sulfur_unification')
                .itemInputs('10x #forge:dusts/sulfur')
                .itemOutputs('10x gtceu:sulfur_dust')
                .duration(1)
                .EUt(LV);

        
        allthemods.recipes.gtceu.unifier(`gregification:will_unification`)
                .inputFluids(`#forge:will 144`)
                .outputFluids(`gtceu:demon 144`)
                .duration(1)
                .EUt(LV);
	
});