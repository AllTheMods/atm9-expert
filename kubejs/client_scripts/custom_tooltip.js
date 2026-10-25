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

    var findDest = function (id) {
        var list = global.SPACE_DESTINATIONS || [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === id) return list[i];
        }
        return null;
    };
    var title = function (id) {
        return id.split('_').map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' ');
    };
    var dataName = { T: 'Thermal', P: 'Propulsion', N: 'Navigation' };

    event.addAdvanced('gtceu:destination_card', function (item, advanced, text) {
        var nbt = item.nbt;
        if (nbt == null || !nbt.contains('destination')) {
            text.add(Text.of('Blank destination').darkGray());
            return;
        }
        var dest = findDest(nbt.getString('destination'));
        var name = nbt.contains('name') ? nbt.getString('name') : (dest ? dest.name : title(nbt.getString('destination')));
        text.add(Text.of('Destination: ').gray().append(Text.of(name).aqua()));
        var tier = nbt.contains('tier') ? nbt.getInt('tier') : (dest ? dest.mk : 0);
        var dist = nbt.contains('distance') ? nbt.getDouble('distance') : (dest ? dest.d : 0);
        if (tier > 0) text.add(Text.of('Requires a Mk' + tier + ' ship').darkGray());
        if (dist > 0) text.add(Text.of('Distance: ' + dist).darkGray());
    });

    event.addAdvanced('gtceu:cargo_pod', function (item, advanced, text) {
        var nbt = item.nbt;
        if (nbt == null || !nbt.contains('destination')) {
            text.add(Text.of('Empty pod').darkGray());
            return;
        }
        var dest = findDest(nbt.getString('destination'));
        var name = nbt.contains('name') ? nbt.getString('name') : (dest ? dest.name : title(nbt.getString('destination')));
        text.add(Text.of('Returned from: ').gray().append(Text.of(name).aqua()));
        if (!dest) return;
        text.add(Text.of('Contains:').gray());
        dest.haul.forEach(function (h) {
            var line = h[2] === 'fluid' ? h[1] + ' B ' + title(h[0]) : h[1] + 'x ' + title(h[0]);
            text.add(Text.of(' - ' + line).white());
        });
        if (dest.mk === 6) {
            text.add(Text.of(' - Cosmic Research Fragment').lightPurple());
        } else if (dataName[dest.data]) {
            text.add(Text.of(' - ' + dataName[dest.data] + ' Research Fragment (chance)').lightPurple());
        }
    });
});