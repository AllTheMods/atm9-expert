// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

JEIEvents.subtypes(allthemods => {
    // Bacteria strains (gene sample + 6 cultivation dust stages)
    // Keying on bacteriaSpecies keeps recipes linked across stages even when display.Name differs.
    const bacteriaItems = [
        'gtceu:bacteria_gene_sample',
        'gtceu:bacteria_seed_dust',
        'gtceu:bacteria_cultivated_dust',
        'gtceu:bacteria_vegetative_dust',
        'gtceu:bacteria_matrix_dust',
        'gtceu:bacteria_mutated_dust',
        'gtceu:bacteria_colony_dust'
    ];
    bacteriaItems.forEach(item => {
        allthemods.useNBTKey(item, 'bacteriaSpecies');
    });

    // Space mission destination cards and returned cargo pods
    allthemods.useNBTKey('gtceu:destination_card', 'destination');
    allthemods.useNBTKey('gtceu:cargo_pod', 'destination');

    // GTCEu scanner / research station / assembly line research data items
    // (GTCEu only registers programmed_circuit and turbine_rotor as JEI subtypes.)
    allthemods.useNBTKey('gtceu:data_stick', 'assembly_line_research');
    allthemods.useNBTKey('gtceu:data_orb', 'assembly_line_research');
    allthemods.useNBTKey('gtceu:data_module', 'assembly_line_research');

    // HNN self-aware neuron stem cells (blank gtceu:stem_cells stays unaffected)
    allthemods.useNBTKey('gtceu:stem_cells', 'certificate');
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
