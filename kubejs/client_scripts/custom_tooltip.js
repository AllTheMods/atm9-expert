const customBlueprints = [
    { id: 'mekasuit', grants: ['MekaSuit Helmet', 'MekaSuit Bodyarmor', 'MekaSuit Pants', 'MekaSuit Boots', 'Meka Tool'] },
    { id: 'waystone', grants: ['Waystone', 'Warp Stone'] },
    { id: 'laser_drill', grants: ['Laser Drill', 'Ore Laser Base', 'Fluid Laser Base'] },
    { id: 'font', grants: ['Creative Mana Pool', 'Creative Mana Tablet', 'Creative ME Mana Cell', 'Creative Activation Crystal', 'Creative Source Jar', 'Creative Spell Book', 'Creative ME Source Cell'] },
    { id: 'crux', grants: ['Creative Compressed Iron Block', 'Creative Compressor'] },
    { id: 'creative_container', grants: ['Creative Elemental Containers'] },
    { id: 'mob_swab', grants: ['Mob Swab'] },
    { id: 'quantum_computer', grants: ['Quantum Computer'] },
    { id: 'cake', grants: ['Creative Blaze Cake'] },
    { id: 'flight_module', grants: ['Creative Jetpack'] },
    { id: 'energy_core', grants: ['Creative Energy Cell', 'Creative Energy Cube', 'Creative Generator', 'Creative Energy Battery', 'Energy Cell (Creative)'] },
    { id: 'thermal', grants: ['Creative RF Coil', 'Creative Flux Efficiency', 'Creative Tank Construction', 'Creative Reclamation Chamber'] }, //death_tome
    { id: 'blood', grants: ['Creative Blood Drop'] },
    { id: 'outworld', grants: ['Chaotic Items'] } //ender dragon
];

const quarks = [
    { name: 'up', desc: '§cFundamental positive charge constituent.', desc2: '§7Standard constituent of light hadrons.' },
    { name: 'down', desc: '§9Fundamental negative charge constituent.', desc2: '§7Forms stable baryonic matter pairs.' },
    { name: 'top', desc: '§bMassive, extremely short-lived particle.', desc2: '§7Requires immense energy to isolate.' },
    { name: 'bottom', desc: '§8Heavy, dense constituent.', desc2: '§7Exhibits profound gravitational interactions.' },
    { name: 'strange', desc: '§dExotic particle with high stability decay.', desc2: '§7Anomalous quantum state detected.' },
    { name: 'charm', desc: '§eLuminous second-generation quark.', desc2: '§7Highly energetic photonic emissions.' }
]

const bacteriaDusts = [
    'gtceu:bacteria_seed_dust',
    'gtceu:bacteria_cultivated_dust',
    'gtceu:bacteria_vegetative_dust',
    'gtceu:bacteria_matrix_dust',
    'gtceu:bacteria_mutated_dust',
    'gtceu:bacteria_colony_dust'
];
ItemEvents.tooltip(event => {


    customBlueprints.forEach(bp => {
        let lines = [Text.of('Grants the following research:').lightPurple()];
        bp.grants.forEach(g => lines.push(Text.of(` - ${g}`).white()));
        event.add(`gtceu:blueprint_${bp.id}`, lines);
    });



    quarks.forEach(quark => {
        event.add(`gtceu:${quark.name}_quark`, [
            '§8Subatomic Fundamental Particle',
            '§8[Tier: Baryonic Stabilization]',
            quark.desc,
            quark.desc2
        ])
    })

    event.addAdvanced(bacteriaDusts, (item, advanced, text) => {
        let nbt = item.nbt;
        if (nbt && nbt.bacteriaSpecies) {            
            let readableName = nbt.bacteriaSpecies.replace(/([A-Z])/g, ' $1').trim();
            text.add(Text.of('Bacterial Culture Data').aqua());
            text.add(Text.of(`Strain: ${readableName}`).white());
        }
    });

    event.addAdvanced('gtceu:bacteria_gene_sample', (item, advanced, text) => {
        let nbt = item.nbt;
        if (nbt != null && nbt.contains('bacteriaSpecies')) {
            let species = nbt.getString('bacteriaSpecies');
            let readableName = species.replace(/([A-Z])/g, ' $1').trim();
            text.add(Text.of('Bacterial Culture Data').aqua());
            text.add(Text.of(`Strain: ${readableName}`).white());

        }
    });
});
