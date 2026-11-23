// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const customBlueprints = [
    { id: 'mekasuit', grants: ['mekasuit_helmet', 'mekasuit_bodyarmor', 'mekasuit_pants', 'mekasuit_boots', 'meka_tool'] },
    { id: 'waystone', grants: ['waystone', 'warp_stone'] },
    { id: 'laser_drill', grants: ['laser_drill', 'ore_laser_base', 'fluid_laser_base'] },
    { id: 'font', grants: ['creative_mana_pool', 'creative_mana_tablet', 'creative_me_mana_cell', 'creative_activation_crystal', 'creative_source_jar', 'creative_spell_book', 'creative_me_source_cell'] },
    { id: 'crux', grants: ['creative_compressed_iron_block', 'creative_compressor'] },
    { id: 'creative_container', grants: ['creative_elemental_containers'] },
    { id: 'mob_swab', grants: ['mob_swab'] },
    { id: 'quantum_computer', grants: ['quantum_computer'] },
    { id: 'cake', grants: ['creative_blaze_cake'] },
    { id: 'flight_module', grants: ['creative_jetpack'] },
    { id: 'energy_core', grants: ['creative_energy_cell', 'creative_energy_cube', 'creative_generator', 'creative_energy_battery', 'energy_cell_creative'] },
    { id: 'thermal', grants: ['creative_rf_coil', 'creative_flux_efficiency', 'creative_tank_construction', 'creative_reclamation_chamber'] }, //death_tome
    { id: 'blood', grants: ['creative_blood_drop'] },
    { id: 'outworld', grants: ['chaotic_items'] } //ender dragon
];

const quarks = ['up', 'down', 'top', 'bottom', 'strange', 'charm'];

const bacteriaDusts = [
    'gtceu:bacteria_seed_dust',
    'gtceu:bacteria_cultivated_dust',
    'gtceu:bacteria_vegetative_dust',
    'gtceu:bacteria_matrix_dust',
    'gtceu:bacteria_mutated_dust',
    'gtceu:bacteria_colony_dust'
];

const KNOWN_BACTERIA_STRAINS = {
    rhizobacterium: true,
    cyanobacterium: true,
    mycorrhizal: true,
    ecoli: true,
    saccharomyces: true,
    clostridium: true,
    desulfovibrio: true,
    dehalococcoides: true,
    rhodoferax: true,
    lunarcaseous: true,
    arcanemycelial: true,
    cuprosymbiont: true,
    areomycorrhizalostrum: true,
    apissymbiont: true,
    caulobactercrescentus: true,
    pichiapastoris: true,
    methanogenesis: true,
    phabioplastic: true,
    acidithiobacillusferrooxidans: true,
    deinococcusradiodurans: true,
    sphingomonas: true
};

const bacteriaInfo = {
    Rhizobacterium: { usesCount: 1, breeds: [] },
    Cyanobacterium: { usesCount: 1, breeds: [] },
    Mycorrhizal: { usesCount: 1, breeds: ['lunarcaseous', 'arcanemycelial', 'cuprosymbiont', 'areomycorrhizalostrum', 'apissymbiont'] },
    EColi: { usesCount: 1, breeds: ['caulobactercrescentus', 'pichiapastoris'] },
    Saccharomyces: { usesCount: 1, breeds: ['methanogenesis'] },
    Clostridium: { usesCount: 1, breeds: ['phabioplastic'] },
    Desulfovibrio: { usesCount: 1, breeds: ['acidithiobacillusferrooxidans'] },
    Dehalococcoides: { usesCount: 1, breeds: [] },
    Rhodoferax: { usesCount: 1, breeds: [] },
    LunarCaseous: { usesCount: 1, breeds: [] },
    ArcaneMycelial: { usesCount: 1, breeds: [] },
    CuproSymbiont: { usesCount: 1, breeds: [] },
    AreoMycorrhizalOstrum: { usesCount: 1, breeds: [] },
    ApisSymbiont: { usesCount: 1, breeds: [] },
    CaulobacterCrescentus: { usesCount: 1, breeds: [] },
    PichiaPastoris: { usesCount: 2, breeds: [] },
    Methanogenesis: { usesCount: 1, breeds: ['deinococcusradiodurans'] },
    PHABioplastic: { usesCount: 1, breeds: [] },
    AcidithiobacillusFerrooxidans: { usesCount: 1, breeds: [] },
    DeinococcusRadiodurans: { usesCount: 1, breeds: ['sphingomonas'] },
    Sphingomonas: { usesCount: 1, breeds: [] }
};

function bacteriaStrainComponent(species) {
    let key = species.toLowerCase();
    if (KNOWN_BACTERIA_STRAINS[key]) {
        return Text.translate('atm9e.bacteria.strain.' + key);
    }
    return Text.of(species.replace(/([A-Z])/g, ' $1').trim());
}

function addBacteriaTooltip(text, species) {
    let key = species.toLowerCase();
    text.add(Text.translate('tooltip.atm9e.bacteria.culture_data').aqua());
    text.add(Text.translate('tooltip.atm9e.bacteria.strain', bacteriaStrainComponent(species)).white());
    let info = bacteriaInfo[species];
    if (!info) return;
    text.add(Text.translate('tooltip.atm9e.bacteria.uses').gold());
    if (info.usesCount === 0) {
        text.add(Text.translate('tooltip.atm9e.bacteria.none_yet').gray());
    } else {
        for (let i = 1; i <= info.usesCount; i++) {
            text.add(Text.translate('tooltip.atm9e.bacteria.list_entry', Text.translate('atm9e.bacteria.use.' + key + '.' + i)).gray());
        }
    }
    if (info.breeds.length > 0) {
        text.add(Text.translate('tooltip.atm9e.bacteria.breeds_into').gold());
        info.breeds.forEach(b => {
            text.add(Text.translate('tooltip.atm9e.bacteria.list_entry', Text.translate('atm9e.bacteria.strain.' + b)).gray());
        });
    }
}

ItemEvents.tooltip(event => {

    customBlueprints.forEach(bp => {
        let lines = [Text.translate('tooltip.atm9e.blueprint.grants').lightPurple()];
        bp.grants.forEach(g => {
            lines.push(Text.translate('tooltip.atm9e.blueprint.grant_entry', Text.translate('tooltip.atm9e.blueprint.grant.' + g)).white());
        });
        event.add(`gtceu:blueprint_${bp.id}`, lines);
    });

    quarks.forEach(quark => {
        event.add(`gtceu:${quark}_quark`, [
            Text.translate('tooltip.atm9e.quark.header'),
            Text.translate('tooltip.atm9e.quark.tier'),
            Text.translate(`tooltip.atm9e.quark.${quark}.desc1`),
            Text.translate(`tooltip.atm9e.quark.${quark}.desc2`)
        ]);
    });

    event.addAdvanced(bacteriaDusts, (item, advanced, text) => {
        let nbt = item.nbt;
        if (nbt != null && nbt.contains('bacteriaSpecies')) {
            addBacteriaTooltip(text, String(nbt.getString('bacteriaSpecies')));
        }
    });

    event.addAdvanced('gtceu:bacteria_gene_sample', (item, advanced, text) => {
        let nbt = item.nbt;
        if (nbt != null && nbt.contains('bacteriaSpecies')) {
            addBacteriaTooltip(text, String(nbt.getString('bacteriaSpecies')));
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
    var dataName = { T: 'T', P: 'P', N: 'N' };
    var resolveDestName = function (destId, dest, nbt) {
        if (dest) return Text.translate('atm9e.space.destination.' + destId);
        if (nbt.contains('name')) return Text.of(nbt.getString('name'));
        return Text.of(title(destId));
    };

    event.addAdvanced('gtceu:destination_card', function (item, advanced, text) {
        var nbt = item.nbt;
        if (nbt == null || !nbt.contains('destination')) {
            text.add(Text.translate('tooltip.atm9e.space.blank_destination').darkGray());
            return;
        }
        var destId = String(nbt.getString('destination'));
        var dest = findDest(destId);
        var nameText = resolveDestName(destId, dest, nbt);
        text.add(Text.translate('tooltip.atm9e.space.destination', nameText.aqua()).gray());
        var tier = nbt.contains('tier') ? nbt.getInt('tier') : (dest ? dest.mk : 0);
        var dist = nbt.contains('distance') ? nbt.getDouble('distance') : (dest ? dest.d : 0);
        if (tier > 0) text.add(Text.translate('tooltip.atm9e.space.requires_ship', String(tier)).darkGray());
        if (dist > 0) text.add(Text.translate('tooltip.atm9e.space.distance', String(dist)).darkGray());
    });

    event.addAdvanced('gtceu:cargo_pod', function (item, advanced, text) {
        var nbt = item.nbt;
        if (nbt == null || !nbt.contains('destination')) {
            text.add(Text.translate('tooltip.atm9e.space.empty_pod').darkGray());
            return;
        }
        var destId = String(nbt.getString('destination'));
        var dest = findDest(destId);
        var nameText = resolveDestName(destId, dest, nbt);
        text.add(Text.translate('tooltip.atm9e.space.returned_from', nameText.aqua()).gray());
        if (!dest) return;
        text.add(Text.translate('tooltip.atm9e.space.contains').gray());
        dest.haul.forEach(function (h) {
            var haulComp = Text.translate('atm9e.space.haul.' + h[0].replace(':', '_'));
            var lineComp = h[2] === 'fluid'
                ? Text.translate('tooltip.atm9e.space.haul_fluid', String(h[1]), haulComp)
                : Text.translate('tooltip.atm9e.space.haul_item', String(h[1]), haulComp);
            text.add(lineComp.white());
        });
        if (dest.mk === 6) {
            text.add(Text.translate('tooltip.atm9e.space.cosmic_research_fragment').lightPurple());
        } else if (dataName[dest.data]) {
            text.add(Text.translate('tooltip.atm9e.space.research_fragment_chance', Text.translate('tooltip.atm9e.space.data.' + dest.data)).lightPurple());
        }
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
