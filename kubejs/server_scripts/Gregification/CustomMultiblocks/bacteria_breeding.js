// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const vatCoils = {
        rtm_alloy: 4500,
        hssg: 5400,
        naquadah: 7200,
        trinium: 9001,
        tritanium: 10800,
        infinity: 25000
    };

    const vatTiers = {
        1: { fluid: 'gtceu:sugar_water', coil: vatCoils.rtm_alloy, chance: 35, volts: IV },
        2: { fluid: 'gtceu:raw_growth_medium', coil: vatCoils.hssg, chance: 25, volts: LuV },
        3: { fluid: 'gtceu:sterilized_growth_medium', coil: vatCoils.naquadah, chance: 15, volts: ZPM },
        4: { fluid: '#forge:naquadria_awakened', coil: vatCoils.trinium, chance: 10, volts: UV }
    };

    const bacteriaStrains = [
        // --- Main strains (tier 1) ---
        {
            //done
            nbt: 'Rhizobacterium',
            name: 'Nitrogen-Fixing Rhizobacteria',
            bTier: 1,
            parent: null,
            children: [],
            origin: 'minecraft:crimson_fungus',
            catalyst: 'mekanism:hdpe_rod'
            //uses: used to enhance potassium calcium orthosilicate plates to make a new type of composite plating for spate missions however it gets implemented
        },

        {
            //done
            nbt: 'Cyanobacterium',
            name: 'Cyanobacterium Aeronos',
            bTier: 1,
            parent: null,
            children: [],
            origin: 'ad_astra:aeronos_mushroom',
            catalyst: '#forge:dusts/graphene'
            //uses: used to make mekasuit or some of its components
        },

        {
            //done
            nbt: 'Mycorrhizal',
            name: 'Mycorrhizal Symbiont Strain',
            bTier: 1,
            parent: null,
            children: ['LunarCaseous', 'ArcaneMycelial', 'CuproSymbiont', 'AreoMycorrhizalOstrum', 'ApisSymbiont'],
            origin: 'ad_astra:strophar_mushroom',
            catalyst: '#forge:dusts/phosphorus'
            //uses: no uses, but is a parent strain for other bacteria
        },

        {
            //done
            nbt: 'EColi',
            name: 'Escherichia coli',
            bTier: 1,
            parent: null,
            children: ['CaulobacterCrescentus', 'PichiaPastoris'],
            origin: 'minecraft:rotten_flesh',
            catalyst: '#forge:dusts/carbon'
            //uses: no uses, but is a parent strain for other bacteria
        },

        {
            //done
            nbt: 'Saccharomyces',
            name: 'Saccharomyces cerevisiae',
            bTier: 1,
            parent: null,
            children: ['Methanogenesis'],
            origin: 'gtceu:bio_chaff',
            catalyst: '#forge:dusts/potassium'
            //uses: Tier 1 rocket fuel component
        },

        {
            //done
            nbt: 'Clostridium',
            name: 'Clostridium Cellulose-Alpha',
            bTier: 1,
            parent: null,
            children: ['PHABioplastic'],
            origin: '#forge:crops',
            catalyst: '#forge:dusts/copper_ii_sulfate'
            //uses: agriculture/fertilizer - produces Red Fertilizer
        },

        {
            //done
            nbt: 'Desulfovibrio',
            name: 'Desulfovibrio',
            bTier: 1,
            parent: null,
            children: ['AcidithiobacillusFerrooxidans'],
            origin: 'minecraft:nether_wart',
            catalyst: '#forge:dusts/sulfur'
            //uses: to be used in a processing chain for one of the metals.
        },

        {
            //done
            nbt: 'Dehalococcoides',
            name: 'Dehalococcoides',
            bTier: 1,
            parent: null,
            children: [],
            origin: 'industrialforegoing:sewage',
            originType: 'fluid',
            catalyst: '#forge:tetrachloroethylene',
            catalystType: 'fluid'
            //uses: mixes with tetrachloroethylene for a metal refining process - possibly tie it together with Rhizobacterium
        },

        {
            //done
            nbt: 'Rhodoferax',
            name: 'Rhodoferax ferrireducens',
            bTier: 1,
            parent: null,
            children: [],
            origin: '#ars_nouveau:shady_wizard_fruits',
            catalyst: '#forge:dusts/electrotine'
            //uses: Botania mana production (real "bacterial battery" organism - produces electricity from sugar)
        },

        // --- Sub-strains (tier 2) ---
        {
            //done
            nbt: 'LunarCaseous',
            name: 'Lunar Caseous',
            bTier: 2,
            parent: 'Mycorrhizal',
            children: [],
            origin: 'ad_astra:cheese',
            catalyst: '#forge:peroxodisulfuric_acid',
            catalystType: 'fluid'
            //uses: bioplastic -> circuit boards
        },

        {
            //done
            nbt: 'ArcaneMycelial',
            name: 'Arcane Mycelial',
            bTier: 2,
            parent: 'Mycorrhizal',
            children: [],
            origin: null,
            catalyst: '#forge:dusts/soul_essence'
            //uses: magical component - possibly used to make eldrich miner
        },

        {
            //done
            nbt: 'CuproSymbiont',
            name: 'Cupro-Symbiont',
            bTier: 2,
            parent: 'Mycorrhizal',
            children: [],
            origin: null,
            catalyst: 'mysticalagradditions:insanium_essence'
            //uses: for end tier seeds (not yet added)
        },

        {
            nbt: 'AreoMycorrhizalOstrum',
            name: 'Areo-Mycorrhizal Ostrum',
            bTier: 2,
            parent: 'Mycorrhizal',
            children: [],
            origin: null,
            catalyst: '#forge:ingots/ostrum'
            //uses: for oil processing factory components (not yet added)
        },

        {
            //done
            nbt: 'ApisSymbiont',
            name: 'Apis Symbiont',
            bTier: 2,
            parent: 'Mycorrhizal',
            children: [],
            origin: null,
            catalyst: 'forestry:ambrosia'
            //uses: for bee mutations - creative frame from forestry and 4 different genomes from productive bees
        },

        {
            //done
            nbt: 'CaulobacterCrescentus',
            name: 'Caulobacter crescentus',
            bTier: 2,
            parent: 'EColi',
            children: [],
            origin: null,
            catalyst: '#forge:dusts/calcium_sulfate'
            //uses: organic adhesive (real bacterium famous for one of the strongest known natural bio-adhesives) - no use for it, but still sounds cool
        },

        {
            //done
            nbt: 'PichiaPastoris',
            name: 'Pichia pastoris',
            bTier: 2,
            parent: 'EColi',
            children: [],
            origin: null,
            catalyst: '#forge:dusts/demon'
            //uses: neural interface with models to make neurons - done
        },

        {
            //done
            nbt: 'Methanogenesis',
            name: 'Methanogenesis Dominus',
            bTier: 2,
            parent: 'Saccharomyces',
            children: ['LigninBreaker'],
            origin: null,
            catalyst: 'gtceu:gelled_toluene'
            //uses: Tier 2 rocket fuel component
        },

        {
            //done
            nbt: 'PHABioplastic',
            name: 'PHA Bioplastic Strain',
            bTier: 2,
            parent: 'Clostridium',
            children: [],
            origin: null,
            catalyst: 'gtceu:carbon_fibers'
            //uses: advanced/refined bioplastic polymer (real PHA - polyhydroxyalkanoate - bacterial bioplastic)
        },

        {
            //done
            nbt: 'AcidithiobacillusFerrooxidans',
            name: 'Acidithiobacillus ferrooxidans',
            bTier: 2,
            parent: 'Desulfovibrio',
            children: [],
            origin: null,
            catalyst: '#forge:dusts/alfsteel'
            //uses: no use still
        },

        // --- Tier 3 ---
        {
            //done
            nbt: 'DeinococcusRadiodurans',
            name: 'Deinococcus radiodurans',
            bTier: 3,
            parent: 'Methanogenesis',
            children: ['Sphingomonas'],
            origin: null,
            catalyst: '#forge:dusts/naquadria'
            //uses: Tier 3 rocket fuel component
        },

        // --- Tier 4 ---
        {
            //done
            nbt: 'Sphingomonas',
            name: 'Sphingomonas',
            bTier: 4,
            parent: 'DeinococcusRadiodurans',
            children: [],
            origin: null,
            catalyst: '#forge:dusts/atm_star'
            //precursor component for creative items.
        },
    ];

    const bacteriaItems = {};

    bacteriaStrains.forEach(function (strain) {
        let parentEntry = strain.parent ? bacteriaStrains.find(function (s) { return s.nbt === strain.parent; }) : null;
        let parent2Entry = strain.parent2 ? bacteriaStrains.find(function (s) { return s.nbt === strain.parent2; }) : null;

        let nbtString = '{bacteriaSpecies:"' + strain.nbt + '"'
            + ',speciesName:"' + strain.name + '"'
            + ',parentName:"' + (parentEntry ? parentEntry.name : '') + '"'
            + ',parent2Name:"' + (parent2Entry ? parent2Entry.name : '') + '"'
            + '}';

        bacteriaItems[strain.nbt] = Item.of('gtceu:bacteria_gene_sample', nbtString).strongNBT();
    });

    // --- Bacterial Growth Chamber: grows any bacteria, main strain or substrain ---
    bacteriaStrains.forEach(function (strain) {
        let tierData = vatTiers[strain.bTier];
        let items = [];
        let fluids = [tierData.fluid + ' 1000'];

        items.push('gtceu:petri_dish');

        if (strain.parent) {
            // substrain: consume the parent's culture instead of a raw origin
            items.push(bacteriaItems[strain.parent]);
        } else if (strain.origin) {
            if (strain.originType === 'fluid') {
                fluids.push(strain.origin + ' 1000');
            } else {
                items.push(strain.origin);
            }
        }

        if (strain.catalyst) {
            if (strain.catalystType === 'fluid') {
                fluids.push(strain.catalyst + ' 1000');
            } else {
                items.push(strain.catalyst);
            }
        }

        let recipe = allthemods.recipes.gtceu.bacterial_growth_chamber('bacteria/grow/' + strain.nbt.toLowerCase())
            .itemInputs(items)
            .inputFluids(fluids)
            .chancedOutput(bacteriaItems[strain.nbt], tierData.chance * 100, 0)
            .duration(200 * strain.bTier)
            .EUt(tierData.volts);
    });

    // --- Bacterial Vat: duplication only, for any strain ---
    bacteriaStrains.forEach(function (strain) {
        let tierData = vatTiers[strain.bTier];
        let items = ['gtceu:petri_dish'];
        let fluids = [tierData.fluid + ' 1000'];

        if (strain.catalyst) {
            if (strain.catalystType === 'fluid') {
                fluids.push(strain.catalyst + ' 1000');
            } else {
                items.push(strain.catalyst);
            }
        }

        let recipe = allthemods.recipes.gtceu.bacterial_vat('bacteria/duplicate/' + strain.nbt.toLowerCase())
            .notConsumable(bacteriaItems[strain.nbt])
            .itemInputs(items)
            .chancedInput('#forge:rods/protactinium', 1000, 0)
            .inputFluids(fluids)
            .chancedOutput(bacteriaItems[strain.nbt], tierData.chance * 100, 0)
            .duration(250 * strain.bTier)
            .EUt(tierData.volts);
    });

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
