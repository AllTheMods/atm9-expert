ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const EUMoon = IV;
    const EUMars = LuV;
    const EUMercuryVenus = ZPM;
    const EUGlacio = UV;
    const tempMoon = 4500;
    const tempMars = 5400;
    const tempMercuryVenus = 7200;
    const tempGlacio = 9001;
    const Duration = 600;

    //iv recipe for peroxodisulfuric acid
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:peroxodisulfuric_acid_sulfur_dioxide')
        .inputFluids(['#forge:sulfur_dioxide 8000', '#forge:oxygen 8000', '#forge:hydrogen_peroxide 4000'])
        .outputFluids('gtceu:peroxodisulfuric_acid 4000')
        .duration(Duration)
        .EUt(EUMoon);

    //indium
    //roquesite
    allthemods.recipes.gtceu.chemical_reactor('gregification:roquesite_bath')
        .itemInputs('2x #forge:dusts/roquesite')
        .inputFluids('#forge:peroxodisulfuric_acid 3000', '#forge:oxygen 6000')
        .itemOutputs(['2x gtceu:copper_ii_sulfate_dust', 'gtceu:indium_iii_oxide_dust'])
        .outputFluids(['minecraft:water 3000', 'gtceu:sulfur_dioxide 8000'])
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.chemical_reactor('gregification:roquesite_reactor')
        .itemInputs('#forge:dusts/indium_iii_oxide')
        .inputFluids('#forge:water 3000')
        .itemOutputs('2x gtceu:indium_hydroxide_dust')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:roquesite_blast_smelter')
        .itemInputs('2x #forge:dusts/indium_hydroxide')
        .itemOutputs('2x gtceu:indium_ingot')
        .blastFurnaceTemp(tempMars)
        .duration(Duration)
        .EUt(EUMars);

    //indite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:indite_chemical_reactor')
        .itemInputs(['2x #forge:dusts/indite', '#forge:dusts/sulfur'])
        .inputFluids(['#forge:hydrochloric_acid 6000', '#forge:water 12000'])
        .itemOutputs('4x gtceu:indium_hydroxide_dust')
        .outputFluids(['gtceu:iron_iii_chloride 2000', 'gtceu:hydrogen_sulfide 9000'])
        .duration(Duration)
        .EUt(EUMars);

    //sakuraiite
    allthemods.recipes.gtceu.electric_blast_furnace('gregification:zinc_stannate_blast_smelter')
        .itemInputs('2x #forge:dusts/zinc_stannate')
        .itemOutputs(['4x gtceu:zinc_ingot', '2x gtceu:tin_ingot'])
        .blastFurnaceTemp(tempMoon)
        .duration(Duration / 2)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sakuraiite_chemical_reactor')
        .itemInputs(['2x #forge:dusts/sakuraiite', '2x #forge:dusts/zinc'])
        .inputFluids(['#forge:water 22000'])
        .itemOutputs(['2x gtceu:indium_hydroxide_dust', '2x gtceu:copper_ii_sulfate_dust', '2x gtceu:zinc_stannate_dust'])
        .outputFluids(['gtceu:hydrogen_sulfide 6000', 'gtceu:hydrogen 26000'])
        .duration(Duration)
        .EUt(EUMars);

    // Hafnium
    //hafnian zircon
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:hafnian_zircon_reactor')
        .itemInputs('#forge:dusts/hafnian_zircon')
        .inputFluids(['gtceu:hydrofluoric_acid 6000', 'gtceu:carbon_monoxide 2000'])
        .itemOutputs(['gtceu:fluorozirconic_composite_dust', 'gtceu:hafnium_silicide_dust'])
        .outputFluids('gtceu:hydrogen_peroxide 3000')        
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.centrifuge('gregification:hafnon_chemical_reactor')
        .itemInputs('#forge:dusts/hafnon')
        .itemOutputs('gtceu:hafnium_silicide_dust')
        .outputFluids('gtceu:oxygen 4000')
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:hafnium_silicide_blast_smelter')
        .itemInputs('#forge:dusts/hafnium_silicide')
        .itemOutputs(['gtceu:hot_silicon_ingot', 'gtceu:hafnium_ingot'])
        .blastFurnaceTemp(tempMoon)
        .duration(Duration)
        .EUt(EUMoon);


    //rubidium
    //rubicline
    allthemods.recipes.gtceu.chemical_bath('gregification:rubicline_bath')
        .itemInputs('2x #forge:dusts/rubicline')
        .inputFluids('#forge:sulfuric_acid 4000')
        .itemOutputs(['2x gtceu:rubidium_aluminium_sulfate_dust', '6x gtceu:silicon_dioxide_dust', '2x gtceu:potassium_dust'])
        .outputFluids('minecraft:water 4000')
        .duration(Duration)
        .EUt(EUGlacio);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rubidium_aluminium_sulfate_reactor')
        .itemInputs(['2x #forge:dusts/rubidium_aluminium_sulfate', '#forge:dusts/soda_ash'])
        .itemOutputs(['gtceu:sodium_sulfate_dust', 'gtceu:aluminium_sulfite_dust'])
        .outputFluids(['gtceu:rubidium_carbonate 1000', 'gtceu:oxygen 3000'])
        .duration(Duration)
        .EUt(EUGlacio);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:rubidium_carbonate_blasting')
        .itemInputs(['#forge:dusts/calcium'])
        .inputFluids('#forge:rubidium_carbonate 1000', '#forge:water 1000')
        .itemOutputs(['2x gtceu:rubidium_dust', 'gtceu:calcium_hydroxide_dust'])
        .outputFluids('gtceu:carbon_dioxide 1000')
        .blastFurnaceTemp(tempGlacio)
        .duration(Duration)
        .EUt(EUGlacio);

    //Thallium        
    //lorandite - check
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:lorandite_chemical_reactor')
        .itemInputs(['2x #forge:dusts/lorandite', '2x #forge:dusts/potassium_iodide'])
        .inputFluids(['#forge:nitric_acid 8000', '#forge:oxygen 11000'])
        .itemOutputs(['2x gtceu:thallium_iodide_dust', '2x thermal:niter_dust'])
        .outputFluids(['gtceu:arsenic_acid 2000', 'gtceu:sulfur_trioxide 3000', 'gtceu:nitrogen_dioxide 6000', 'gtceu:hydrogen_sulfide 1000'])
        .duration(EUGlacio)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:thallium_iodide_chemical_reactor')
        .itemInputs(['2x #forge:dusts/thallium_iodide', '#forge:dusts/soda_ash'])
        .itemOutputs(['gtceu:thallium_oxide_dust', '2x gtceu:sodium_iodide_dust'])
        .outputFluids('gtceu:carbon_dioxide 1000')
        .duration(EUGlacio)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:thallium_oxide_blasting')
        .itemInputs(['#forge:dusts/thallium_oxide', '#forge:dusts/carbon'])
        .itemOutputs('2x gtceu:thallium_dust')
        .outputFluids('gtceu:carbon_monoxide 1000')
        .duration(Duration)
        .EUt(EUMercuryVenus);
    

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:arsenic_acid_chemical_reactor')
        .itemInputs('4x #forge:dusts/carbon')
        .inputFluids('#forge:arsenic_acid 2000')
        .itemOutputs('gtceu:arsenic_trioxide_dust')
        .outputFluids(['gtceu:formaldehyde 3000', 'gtceu:carbon_dioxide 1000'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.chemical_reactor('gregification:arsenic_trioxide_chemical_reactor')
        .itemInputs('#forge:dusts/arsenic_trioxide')
        .inputFluids(['#forge:sulfur_dioxide 1000', '#forge:water 1000'])
        .itemOutputs('2x gtceu:arsenic_dust')
        .outputFluids(['gtceu:sulfuric_acid 1000', 'gtceu:oxygen 2000'])
        .duration(Duration)
        .EUt(HV);

    allthemods.recipes.gtceu.chemical_reactor('gregification:thallium_sulfate_chemical_reactor')
        .itemInputs('#forge:dusts/thallium_oxide')
        .inputFluids('#forge:sulfuric_acid 1000')
        .itemOutputs('gtceu:thallium_sulfate_dust')
        .outputFluids('minecraft:water 1000')
        .duration(Duration)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.chemical_reactor('gregification:thallium_carbonate_chemical_reactor')
        .itemInputs(['2x #forge:dusts/thallium', '#forge:dusts/soda_ash'])
        .itemOutputs(['gtceu:thallium_carbonate_dust', '2x gtceu:sodium_dust'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.chemical_reactor('gregification:thallium_sulfide_chemical_reactor')
        .itemInputs(['#forge:dusts/thallium_carbonate', '#forge:dusts/sodium_sulfide'])
        .itemOutputs(['gtceu:thallium_sulfide_dust', 'gtceu:soda_ash_dust'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.chemical_reactor('gregification:thallium_sulfide_to_thallium_sulfate')
        .itemInputs('#forge:dusts/thallium_sulfide')
        .inputFluids('#forge:hydrogen_peroxide 4000')
        .itemOutputs('gtceu:thallium_sulfate_dust')
        .outputFluids('minecraft:water 4000')
        .duration(Duration)
        .EUt(EUMercuryVenus);

    //hutchinsonite    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:hutchinsonite_chemical_reactor') 
        .itemInputs(['2x #forge:dusts/hutchinsonite', '2x #forge:dusts/sodium_iodide'])
        .inputFluids(['#forge:water 34000', '#forge:oxygen 10000'])
        .itemOutputs(['2x gtceu:thallium_iodide_dust', '2x gtceu:lead_oxide_dust', '2x gtceu:sodium_hydroxide_dust'])
        .outputFluids(['gtceu:arsenic_acid 10000', 'gtceu:hydrogen_sulfide 18000'])        
        .duration(Duration)
        .EUt(EUMercuryVenus);

    
    // Scandium
    //thortveitite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:thortveitite_chemical_reactor')
        .itemInputs(['#forge:dusts/thortveitite', '#forge:dusts/calcium_fluoride'])
        .inputFluids('#forge:water 1000')
        .itemOutputs(['gtceu:wollastonite_dust', 'gtceu:silicon_dioxide_dust', 'gtceu:scandium_oxide_dust'])
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .duration(Duration)
        .EUt(EUMars);
    
    //kolbeckite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kolbeckite_chemical_reactor')    
        .itemInputs('2x #forge:dusts/kolbeckite')
        .inputFluids('#forge:water 3000')
        .itemOutputs('gtceu:scandium_oxide_dust')
        .outputFluids('gtceu:phosphoric_acid 2000')
        .duration(Duration)
        .EUt(EUMars);

    //bazzite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:bazzite_chemical_reactor')
        .itemInputs('#forge:dusts/bazzite')
        .itemOutputs(['gtceu:scandium_oxide_dust', '6x gtceu:silicon_dioxide_dust', '3x gtceu:beryllium_oxide_dust'])
        .duration(Duration)
        .EUt(EUMars);

    //galium    
    //gallite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:gallite_chemical_reactor')
        .itemInputs('#forge:dusts/gallite')
        .inputFluids('#forge:oxygen 7000')
        .itemOutputs(['gtceu:copper_ii_sulfate_dust', 'gtceu:gallium_dust'])
        .outputFluids('gtceu:sulfur_trioxide 1000')
        .duration(Duration)
        .EUt(EUMoon);
    
    //selenium
    //{ name: 'clausthalite', components: '1x lead, 1x selenium', byproducts: ['clausthalite', 'lead'], iconSet: 'METALLIC', color: 0xC8C8D2, noDecomp: true },
    //{ name: 'crookesite', components: '2x copper, 1x thallium, 1x silver, 1x selenium', byproducts: ['crookesite', 'thallium', 'selenium'], iconSet: 'METALLIC', color: 0x8A7048, noDecomp: true },
    //{ name: 'naumannite', components: '2x silver, 1x selenium', byproducts: ['naumannite', 'selenium'], iconSet: 'METALLIC', color: 0x4A4A52, noDecomp: true },
    
    //clausthalite
    //simple decompose
    //naumannite simple decompose

    //crookesite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:clausthalite_chemical_reactor')
        .itemInputs('2x #forge:dusts/crookesite')
        .inputFluids('#forge:sulfur_dioxide 4000')
        .itemOutputs(['2x gtceu:stromeyerite_dust', '2x gtceu:copper_ii_sulfate_dust', '2x gtceu:thallium_monoselenide_dust'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:thallium_monoselenide_chemical_reactor')
        .itemInputs(['2x #forge:dusts/thallium_monoselenide'])
        .inputFluids('#forge:hydrochloric_acid 2000', '#forge:water 1000')
        .itemOutputs('gtceu:thallium_oxide_dust')
        .outputFluids(['gtceu:chlorine 2000', 'gtceu:hydrogen_selenide 2000'])
        .duration(Duration)
        .EUt(EUMercuryVenus);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rhodizite_chemical_reactor')
        .itemInputs('#forge:dusts/rhodizite')
        .inputFluids(['#forge:carbon_monoxide 11000', '#forge:hydrochloric_acid 2000'])
        .itemOutputs(['gtceu:caesium_potassium_carbonate_dust', '4x gtceu:beryllium_oxide_dust', '11x gtceu:boron_dust'])
        .outputFluids(['gtceu:polyaluminium_chloride 2000', 'gtceu:carbon_dioxide 10000', 'gtceu:oxygen 12000'])
        .duration(Duration)
        .EUt(EUGlacio);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:caesium_potassium_carbonate_decomposition')
        .itemInputs(['2x #forge:dusts/caesium_potassium_carbonate', '#forge:dusts/silicon_dioxide', '#forge:dusts/calcium_carbonate'])
        .inputFluids('#forge:oxygen 5000')
        .itemOutputs(['2x gtceu:caesium_dust', 'gtceu:potassium_calcium_orthosilicate_dust'])
        .outputFluids('gtceu:carbon_tetroxide 3000')
        .duration(150)
        .EUt(LuV);
        
    allthemods.recipes.gtceu.chemical_reactor('gregification:calcium_carbonate_synthesis')
        .itemInputs('#forge:dusts/calcium_hydroxide')
        .inputFluids('#forge:carbon_monoxide 1000')
        .itemOutputs('gtceu:calcium_carbonate_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .duration(Duration)
        .EUt(EUMoon);

    //strontium
    //strontianite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:strontianite_chemical_reactor')
        .itemInputs('2x #forge:dusts/strontianite')
        .inputFluids('#forge:sulfuric_acid 4000')
        .itemOutputs('2x gtceu:strontium_sulfide_dust')
        .outputFluids(['gtceu:carbon_tetroxide 2000', 'gtceu:hydrogen_peroxide 4000', 'gtceu:sulfur_trioxide 2000'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    // Tantalum & Niobium
    //{ name: 'columbite_tantalite', components: '1x iron, 1x manganese, 2x niobium, 2x tantalum, 6x oxygen', byproducts: ['columbite_tantalite', 'niobium', 'tantalum'], iconSet: 'METALLIC', color: 0x3C3C46, noDecomp: true },
    //{ name: 'microlite', components: '2x calcium, 2x tantalum, 7x oxygen', byproducts: ['microlite', 'tantalum'], iconSet: 'METALLIC', color: 0x8C7850, noDecomp: true },
    //{ name: 'wodginite', components: '1x manganese, 1x iron, 1x tin, 1x tantalum, 1x titanium, 1x niobium, 8x oxygen', byproducts: ['wodginite', 'tantalum', 'niobium'], iconSet: 'METALLIC', color: 0x463C34, noDecomp: true },
    //{ name: 'fergusonite', components: '1x yttrium, 1x niobium, 4x oxygen', byproducts: ['fergusonite', 'yttrium', 'niobium'], iconSet: 'METALLIC', color: 0x3C3428, noDecomp: true },

    //columbite_tantalite
    allthemods.recipes.gtceu.chemical_bath('gregification:columbite_tantalite_bath')
        .itemInputs('#forge:dusts/columbite_tantalite')
        .inputFluids('#forge:phosphoric_acid 1000')
        .itemOutputs(['gtceu:manganese_phosphide_dust', 'gtceu:iron_hydroxide_dust', 'gtceu:niobium_pentoxide_dust', 'gtceu:tantalum_dioxide_dust'])
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:niobium_tantalum_chloride_synthesis')
        .itemInputs(['#forge:dusts/niobium_pentoxide', '#forge:dusts/tantalum_dioxide', '9x #forge:dusts/carbon'])
        .inputFluids(['#forge:hydrochloric_acid 20000', '#forge:water 2000'])
        .itemOutputs('2x gtceu:tantalum_pentachloride_dust')
        .outputFluids(['gtceu:niobium_pentachloride 2000', 'gtceu:glycerol 3000'])
        .duration(Duration)
        .EUt(EUMoon);
    
    //microlite
    allthemods.recipes.gtceu.chemical_reactor('gregification:microlite_sulfuric_acid_reaction')
        .itemInputs(['#forge:dusts/microlite', '3x #forge:dusts/carbon'])
        .inputFluids('#forge:sulfuric_acid 2000')
        .itemOutputs(['2x gtceu:calcium_sulfate_dust', 'gtceu:tantalum_dioxide_dust'])
        .outputFluids(['gtceu:formic_acid 2000', 'gtceu:carbon_monoxide 1000'])
        .duration(Duration)
        .EUt(EUMoon);
    
    allthemods.recipes.gtceu.chemical_reactor('gregification:tantalum_sodium_sulfate_reaction')
        .itemInputs(['#forge:dusts/tantalum_dioxide', '2x #forge:dusts/sodium_sulfate'])
        .inputFluids('#forge:hydrogen 4000')
        .itemOutputs(['2x gtceu:tantalum_dust', '2x gtceu:sodium_bisulfate_dust', '2x gtceu:sodium_hydroxide_dust'])
        .duration(Duration)
        .EUt(EUMoon);

    //wodginite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:wodginite_chemical_reactor')
        .itemInputs('2x #forge:dusts/wodginite')
        .itemOutputs(['gtceu:tantalum_dioxide_dust', '2x gtceu:niobium_titanium_dust', 'gtceu:manganese_heptoxide_dust'])
        .outputFluids(['gtceu:tin_alloy 2000', 'gtceu:oxygen 7000'])
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:manganese_phosphide_synthesis')
        .itemInputs(['#forge:dusts/manganese_heptoxide', '#forge:dusts/phosphorus_pentoxide', '4x #forge:dusts/sulfur'])
        .itemOutputs('2x gtceu:manganese_phosphide_dust')
        .outputFluids('gtceu:sulfur_trioxide 4000')
        .duration(Duration)
        .EUt(EUMoon);

    //fergusonite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:fergusonite_chemical_reactor')
        .itemInputs(['2x #forge:dusts/fergusonite', '#forge:dusts/carbon', '2x #forge:dusts/potassium_hydroxide'])
        .inputFluids('#forge:oxygen 2000')
        .itemOutputs(['gtceu:niobium_pentoxide_dust', 'gtceu:yttrium_oxide_dust', 'gtceu:potassium_carbonate_dust'])
        .outputFluids('minecraft:water 1000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:niobium_pentoxide_processing')
        .itemInputs(['#forge:dusts/niobium_pentoxide', '5x #forge:dusts/carbon'])
        .itemOutputs('2x gtceu:niobium_dust')
        .outputFluids('gtceu:carbon_monoxide 5000')
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:yttrium_oxide_processing')
        .itemInputs(['#forge:dusts/yttrium_oxide', '3x #forge:dusts/calcium'])
        .inputFluids('#forge:water 3000')
        .itemOutputs(['2x gtceu:yttrium_dust', '3x gtceu:calcium_hydroxide_dust'])
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:niobium_yttrium_calcium_processing')
        .itemInputs(['#forge:dusts/niobium_pentoxide', '#forge:dusts/yttrium_oxide', '8x #forge:dusts/calcium'])
        .inputFluids('#forge:water 8000')
        .itemOutputs(['2x gtceu:niobium_dust', '2x gtceu:yttrium_dust', '8x gtceu:calcium_hydroxide_dust'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    //samarskite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:samarskite_chemical_reactor')
        .itemInputs('#forge:dusts/samarskite')
        .inputFluids(['#forge:sulfuric_acid 5000', '#forge:oxygen 6000'])
        .itemOutputs(['gtceu:niobium_tantalum_residue_dust'])
        .outputFluids('gtceu:hydrogen_peroxide 5000', 'gtceu:mixed_rare_earth_sulfate 1000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:niobium_tantalum_residue_processing')
        .itemInputs(['#forge:dusts/niobium_tantalum_residue', '4x #forge:dusts/carbon'])
        .inputFluids('#forge:chlorine 20000')
        .itemOutputs('2x gtceu:tantalum_pentachloride_dust')
        .outputFluids(['gtceu:niobium_pentachloride 2000', 'gtceu:carbon_monoxide 4000'])
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:tantalum_pentachloride_processing')
        .itemInputs('2x #forge:dusts/tantalum_pentachloride')
        .inputFluids('#forge:hydrogen 10000')
        .itemOutputs('2x gtceu:tantalum_dust')
        .outputFluids('gtceu:hydrochloric_acid 10000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:light_rare_earth_sulfate_processing')
        .itemInputs('#forge:dusts/sodium_hydroxide')
        .inputFluids('#forge:mixed_rare_earth_sulfate 4000')
        .itemOutputs('gtceu:titanium_hydroxide_dust')
        .outputFluids('gtceu:heavy_rare_earth_sulfate 1000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:titanium_hydroxide_processing')
        .itemInputs(['#forge:dusts/titanium_hydroxide', '4x #forge:dusts/carbon'])
        .inputFluids('#forge:chlorine 8000')        
        .outputFluids(['gtceu:carbon_monoxide 4000', 'gtceu:hydrochloric_acid 4000', 'gtceu:titanium_tetrachloride 1000'])
        .blastFurnaceTemp(tempMars)
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:heavy_rare_earth_sulfate_processing')
        .itemInputs('6x #forge:dusts/sodium_hydroxide')
        .inputFluids('#forge:heavy_rare_earth_sulfate 1000')  
        .itemOutputs('gtceu:uranium_trioxide_dust')
        .outputFluids('gtceu:final_rare_earth_sulfate 1000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:final_rare_earth_sulfate_processing')       
        .inputFluids(['#forge:final_rare_earth_sulfate 2000', '#forge:oxygen 8000', '#forge:water 15000', '#forge:hydrochloric_acid 4000'])
        .itemOutputs(['gtceu:yttrium_oxide_dust', '2x gtceu:cerium_chloride_dust', '26x gtceu:sodium_hydroxide_dust'])
        .outputFluids('gtceu:sulfuric_acid 10000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:uranium_hexafluoride_processing')
        .itemInputs(['2x #forge:dusts/uranium_trioxide', '6x #forge:dusts/potassium', '3x #forge:dusts/sulfur'])
        .inputFluids('#forge:hydrofluoric_acid 12000')
        .itemOutputs('6x gtceu:potassium_hydroxide_dust')
        .outputFluids(['gtceu:uranium_hexafluoride 2000', 'gtceu:hydrogen_sulfide 3000'])
        .duration(Duration)
        .EUt(EUMercuryVenus);
    

    //cerite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rare_earth_leach_residue_processing')
        .itemInputs(['#forge:dusts/cerite', '#forge:dusts/fluorine'])
        .inputFluids('#forge:hydrochloric_acid 6000')
        .itemOutputs(['3x gtceu:cerium_chloride_dust', '3x gtceu:silicon_dioxide_dust', 'gtceu:iron_hydroxide_dust'])
        .outputFluids(['gtceu:calcium_fluoride 1000', 'gtceu:rare_earth_leach_residue 1000'])
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rare_earth_leach_residue_acid_treatment')
        .inputFluids(['#forge:rare_earth_leach_residue 1000', '#forge:hydrochloric_acid 2000'])
        .itemOutputs(['gtceu:magnesium_chloride_dust', 'gtceu:lanthanum_hydroxide_dust'])
        .outputFluids('gtceu:hydrogen 2000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.chemical_bath('gregification:lanthanum_hydroxide_fluorination')
        .itemInputs('#forge:dusts/lanthanum_hydroxide')
        .inputFluids('#forge:hydrofluoric_acid 3000')
        .itemOutputs('gtceu:lanthanum_fluoride_dust')
        .outputFluids('minecraft:water 3000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.electric_blast_furnace('gregification:lanthanum_fluoride_reduction')
        .itemInputs(['2x #forge:dusts/lanthanum_fluoride', '3x #forge:dusts/calcium'])
        .itemOutputs(['2x gtceu:lanthanum_dust', '3x gtceu:calcium_fluoride_dust'])
        .blastFurnaceTemp(tempMars)
        .duration(Duration)
        .EUt(EUMars);

    //xenotime
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:xenotime_processing')
        .itemInputs(['2x #forge:dusts/xenotime', '#forge:dusts/potassium_calcium_silicate', '#forge:dusts/potassium_hydroxide'])
        .inputFluids('minecraft:water 3000')
        .itemOutputs(['gtceu:potassium_calcium_orthosilicate_dust', 'gtceu:yttrium_oxide_dust'])
        .outputFluids(['gtceu:phosphoric_acid 2000', 'gtceu:hydrofluoric_acid 1000'])
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.chemical_bath('gregification:gadolinite_processing')
        .itemInputs('#forge:dusts/gadolinite')
        .inputFluids('#forge:oxygen 1000')
        .itemOutputs(['gtceu:yttrium_oxide_dust', 'gtceu:cerium_oxide_dust', 'gtceu:iron_dust', '2x gtceu:beryllium_oxide_dust', '2x gtceu:silicon_dioxide_dust'])
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.chemical_bath('gregification:laurite_processing')
        .itemInputs('#forge:dusts/laurite')
        .inputFluids('#forge:oxygen 8000')
        .itemOutputs('gtceu:ruthenium_tetroxide_dust')
        .outputFluids('gtceu:sulfur_dioxide 2000')
        .duration(Duration)
        .EUt(EUMercuryVenus);
    
    allthemods.recipes.gtceu.chemical_bath('gregification:germanite_processing')
        .itemInputs('#forge:dusts/germanite')
        .inputFluids('#forge:sulfur_dioxide 8000')
        .itemOutputs(['2x gtceu:germanium_sulfate_dust', '2x gtceu:chalcopyrite_dust', '11x gtceu:copper_dust', '16x gtceu:sulfur_dust'])
        .duration(Duration)
        .EUt(EUGlacio);

    allthemods.recipes.gtceu.chemical_bath('gregification:renierite_processing')
        .itemInputs('#forge:dusts/renierite')
        .inputFluids('#forge:oxygen 16000')
        .itemOutputs(['4x gtceu:zinc_dust', '2x gtceu:chalcopyrite_dust', '9x gtceu:copper_dust', '2x gtceu:germanium_sulfate_dust', '2x gtceu:arsenic_dust', '8x gtceu:sulfur_dust'])
        .duration(Duration)
        .EUt(EUGlacio);

    allthemods.recipes.gtceu.chemical_bath('gregification:lanthanite_processing')
        .itemInputs('#forge:dusts/lanthanite')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('2x gtceu:lanthanum_hydroxide_dust')
        .outputFluids('gtceu:carbon_dioxide 3000')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.chemical_bath('gregification:yttrialite_processing')
        .itemInputs('#forge:dusts/yttrialite')
        .inputFluids('#forge:sulfuric_acid 8000')
        .itemOutputs(['gtceu:yttrium_oxide_dust', 'gtceu:thorium_dust', '2x gtceu:silicon_dioxide_dust'])
        .outputFluids('gtceu:diluted_sulfuric_acid 8000')
        .duration(Duration)
        .EUt(EUMars);
});
