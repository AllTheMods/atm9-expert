ServerEvents.recipes(allthemods => {

    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const LUV = LuV; // matches your getVoltage() LuV tier
    const DUR = 200;

    const bacteriaChainStrains = [
        { nbt: 'PichiaPastoris', name: 'Pichia Pastoris' },
        { nbt: 'ApisSymbiont', name: 'Apis Symbiont' },
        { nbt: 'Saccharomyces', name: 'Saccharomyces cerevisiae' },
        { nbt: 'Methanogenesis', name: 'Methanogenesis Dominus' },
        { nbt: 'DeinococcusRadiodurans', name: 'Deinococcus radiodurans' },
        { nbt: 'Sphingomonas', name: 'Sphingomonas' },
        { nbt: 'Rhizobacterium', name: 'Nitrogen-Fixing Rhizobacteria' },
        { nbt: 'Desulfovibrio', name: 'Desulfovibrio' },
        { nbt: 'Clostridium', name: 'Clostridium Cellulose-Alpha' },
        { nbt: 'CaulobacterCrescentus', name: 'Caulobacter crescentus' }
    ];

    const bacteriaStageItems = (strain) => {
        const nbtTag = `{bacteriaSpecies:"${strain.nbt}"}`;

        return {
            base: Item.of('gtceu:bacteria_gene_sample', `{bacteriaSpecies:"${strain.nbt}",speciesName:"${strain.name}",parentName:"Escherichia coli",parent2Name:""}`).strongNBT(),

            seedCulture: Item.of('gtceu:seed_culture_dust', nbtTag)
                .withName(Text.of(`${strain.name} Seed Culture`).green()).strongNBT(),

            cultivatedBacteria: Item.of('gtceu:cultivated_bacteria_dust', nbtTag)
                .withName(Text.of(`${strain.name} Cultivated Bacteria`).green()).strongNBT(),

            vegetativeCulture: Item.of('gtceu:vegetative_culture_dust', nbtTag)
                .withName(Text.of(`${strain.name} Vegetative Culture`).green()).strongNBT(),

            bacterialMatrix: Item.of('gtceu:bacterial_matrix_dust', nbtTag)
                .withName(Text.of(`${strain.name} Bacterial Matrix`).green()).strongNBT(),

            mutatedBacterium: Item.of('gtceu:mutated_bacterium_dust', nbtTag)
                .withName(Text.of(`${strain.name} Mutated Bacterium`).green()).strongNBT(),

            colony: Item.of('gtceu:bacteria_colony_dust', nbtTag)
                .withName(Text.of(`${strain.name} Colony`).green()).strongNBT(),
        };
    };

    bacteriaChainStrains.forEach(strain => {

        let pichia = bacteriaStageItems(strain);
        let strainName = strain.nbt.toLowerCase();
        // Step 1: Bacterial Vat
        allthemods.recipes.gtceu.bacterial_vat(`gregification:bacteria/${strainName}_seed_culture`)
            .itemInputs(pichia.base)
            .inputFluids('#forge:rotten_flesh 1000', 'gtceu:water_stage_1 250')
            .itemOutputs(pichia.seedCulture)
            .duration(DUR)
            .EUt(LUV);

        // Step 2: Bacterial Growth Chamber
        allthemods.recipes.gtceu.bacterial_growth_chamber(`gregification:bacteria/${strainName}_cultivated`)
            .itemInputs(pichia.seedCulture)
            .inputFluids('#forge:biomass 1000', 'gtceu:water_stage_2 250') // TODO: confirm real biomass fluid/item id
            .itemOutputs(pichia.cultivatedBacteria)
            .duration(DUR)
            .EUt(LUV);

        // Step 3: Chemical Reactor
        allthemods.recipes.gtceu.chemical_reactor(`gregification:bacteria/${strainName}_vegetative`)
            .itemInputs(pichia.cultivatedBacteria)
            .inputFluids('#forge:glycerol 1000', 'gtceu:water_stage_3 250')
            .itemOutputs(pichia.vegetativeCulture)
            .duration(DUR)
            .EUt(LUV);

        // Step 4: Mixer
        allthemods.recipes.gtceu.mixer(`gregification:bacteria/${strainName}_matrix`)
            .itemInputs(pichia.vegetativeCulture, '#forge:dusts/agar') // TODO: confirm real agar id
            .inputFluids('gtceu:water_stage_4 250')
            .itemOutputs(pichia.bacterialMatrix)
            .duration(DUR)
            .EUt(LUV);

        // Step 5: Chemical Reactor
        allthemods.recipes.gtceu.chemical_reactor(`gregification:bacteria/${strainName}_mutated`)
            .itemInputs(pichia.bacterialMatrix, '#forge:dusts/protactinium')
            .inputFluids('#forge:mutagen 100', 'gtceu:water_stage_5 250')
            .itemOutputs(pichia.mutatedBacterium)
            .duration(DUR)
            .EUt(LUV);

        // Step 6: Large Chemical Reactor
        allthemods.recipes.gtceu.large_chemical_reactor(`gregification:bacteria/${strainName}_colony`)
            .itemInputs(pichia.mutatedBacterium)
            .inputFluids('gtceu:raw_growth_medium 250')
            .itemOutputs(pichia.colony)
            .duration(DUR)
            .EUt(LUV);
    });

    //bees
    allthemods.recipes.gtceu.chemical_reactor(`gregification:bacteria/sugar_water`)
        .itemInputs('4x #forge:dusts/sugar')
        .inputFluids('#forge:water_stage_1 1000')
        .outputFluids('gtceu:sugar_water 1000')
        .duration(DUR)
        .EUt(LUV);

    let inputStrain = Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"ApisSymbiont"}').strongNBT();
    allthemods.recipes.gtceu.mixer(`gregification:bacteria/substrate`)
        .itemInputs(inputStrain, '#forge:dusts/treated_wood')
        .inputFluids('#forge:sugar_water 1000')
        .itemOutputs('#forge:dusts/bio_organic_pulp')
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.chemical_reactor(`gregification:bacteria/microbial_biomass`)
        .itemInputs('5x #forge:dusts/bio_organic_pulp')
        .inputFluids('pneumaticcraft:yeast_culture 1000')
        .outputFluids('gtceu:microbial_biomass 1000')
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.chemical_reactor(`gregification:bacteria/nucleic_acid_mixture`)
        .inputFluids('#forge:microbial_biomass 1000', '#forge:water_stage_2 1000')
        .outputFluids('gtceu:nucleic_acid_mixture 1000')
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.chemical_reactor(`gregification:bacteria/concentrated_liquid_dna`)
        .inputFluids('#forge:nucleic_acid_mixture 1000', '#forge:enzyme_solution 1000')
        .outputFluids('gtceu:concentrated_liquid_dna 1000')
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.chemical_reactor(`gregification:bacteria/enzyme_solution`)
        .itemInputs('#forge:dusts/rotten_flesh', '#forge:dusts/niter')
        .inputFluids('#forge:water_stage_3 1000')
        .outputFluids('gtceu:enzyme_solution 1000')
        .duration(DUR)
        .EUt(LUV);

    const productivity = Item.of('productivebees:gene', '{productivebees_gene_attribute:"productivity",productivebees_gene_purity:100,productivebees_gene_value:3}').strongNBT();
    const tolerance = Item.of('productivebees:gene', '{productivebees_gene_attribute:"weather_tolerance",productivebees_gene_purity:100,productivebees_gene_value:2}').strongNBT();
    const behavior = Item.of('productivebees:gene', '{productivebees_gene_attribute:"behavior",productivebees_gene_purity:100,productivebees_gene_value:2}').strongNBT();
    const endurance = Item.of('productivebees:gene', '{productivebees_gene_attribute:"endurance",productivebees_gene_purity:100,productivebees_gene_value:3}').strongNBT();


    allthemods.recipes.gtceu.gene_sequencer(`gregification:sequencer`)
        .itemInputs('#forge:tiny_dusts/platinum')
        .inputFluids('#forge:concentrated_liquid_dna 10')
        .chancedOutput('gtceu:dna', 1500, 1500)
        .chancedFluidOutput('gtceu:dna_tolerance 100', 50, 50)
        .chancedFluidOutput('gtceu:dna_productivity 100', 50, 50)
        .chancedFluidOutput('gtceu:dna_behavior 100', 50, 50)
        .chancedFluidOutput('gtceu:dna_endurance 100', 50, 50)
        .chancedFluidOutput('gtceu:dna_omega 20', 50, 50)
        .chancedFluidOutput('gtceu:dna_mutation 10', 50, 50)
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.canner(`gregification:sequencer/productivity`)
        .itemInputs('gtceu:glass_vial')
        .inputFluids('#forge:dna_productivity 100')
        .itemOutputs(productivity)
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.canner(`gregification:sequencer/tolerance`)
        .itemInputs('gtceu:glass_vial')
        .inputFluids('#forge:dna_tolerance 100')
        .itemOutputs(tolerance)
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.canner(`gregification:sequencer/behavior`)
        .itemInputs('gtceu:glass_vial')
        .inputFluids('#forge:dna_behavior 100')
        .itemOutputs(behavior)
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.canner(`gregification:sequencer/endurance`)
        .itemInputs('gtceu:glass_vial')
        .inputFluids('#forge:dna_endurance 100')
        .itemOutputs(endurance)
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.assembler(`gregification:sequencer/mutation`)
        .itemInputs('gtceu:treated_wood_pressure_plate', 'allthetweaks:atm_star')
        .inputFluids('#forge:dna_mutation 100')
        .itemOutputs(Item.of('forestry:frame_creative', '{force_mutations:1b}').strongNBT())
        .duration(DUR)
        .EUt(LUV);

    allthemods.recipes.gtceu.chemical_reactor(`gregification:chemical_reactor/bio_organic_nanocomposite`)
        .itemInputs('#forge:dusts/potassium_calcium_orthosilicate', Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"Rhizobacterium"}').strongNBT())
        .inputFluids('#forge:osmium 144')
        .itemOutputs('gtceu:bio_organic_nanocomposite_dust')
        .duration(200)
        .EUt(IV);

    const rocketTiers = [
        { nbt: 'Saccharomyces', catalyst: '#forge:dusts/coke', eu: IV },
        { nbt: 'Methanogenesis', catalyst: '#forge:dusts/naquadah', eu: LuV },
        { nbt: 'DeinococcusRadiodurans', catalyst: '#forge:dusts/enriched_naquadah', eu: ZPM },
        { nbt: 'Sphingomonas', catalyst: '#forge:dusts/naquadria', eu: UV }
    ];

    rocketTiers.forEach((rocket, index) => {
        let baseFuel;
        if (index == 0) {
            baseFuel = '#forge:rocket_fuel';
        }
        else {
            baseFuel = `#forge:rocket_fuel_stage_${index}`;
        }
        let fuelStrain = Item.of('gtceu:bacteria_colony_dust', `{bacteriaSpecies:"${rocket.nbt}"}`).strongNBT();
        allthemods.recipes.gtceu.chemical_reactor(`gregification:chemical_reactor/rocket_fuel_stage_${index + 1}`)
            .itemInputs(fuelStrain, rocket.catalyst)
            .inputFluids(`${baseFuel} 1000`)
            .outputFluids(`gtceu:rocket_fuel_stage_${index + 1} 100`)
            .duration(600)
            .EUt(rocket.eu);
    });

    
    let desulfovibrioStrain = Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"Desulfovibrio"}').strongNBT();

    allthemods.recipes.gtceu.centrifuge('bacteria/process/spent_nuclear_waste')
        .itemInputs(desulfovibrioStrain)
        .inputFluids('#forge:spent_nuclear_waste 1000')
        .chancedOutput('gtceu:caesium_dust', 2000, 0)
        .chancedOutput('gtceu:thorium_dust', 2000, 0)
        .chancedOutput('gtceu:uranium_dust', 3000, 0)
        .chancedOutput('gtceu:protactinium_dust', 2500, 0)
        .chancedOutput('gtceu:strontium_sulfide_dust', 1000, 0)
        .chancedOutput('gtceu:plutonium_241_dust', 500, 0)
        .duration(600)
        .EUt(LuV);
        
    allthemods.recipes.gtceu.large_chemical_reactor(`gregification:chemical_reactor/bio_organic_nanocomposite`)
        .itemInputs('#forge:dusts/phenylalanine', Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"CaulobacterCrescentus"}').strongNBT())
        .inputFluids('#forge:phenolic_resin 1440')
        .outputFluids('gtceu:organic_polymer 1440')
        .duration(300)
        .EUt(LuV);
    
});