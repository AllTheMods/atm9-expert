

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.




function dataModel(mob) {
    return Item.of('hostilenetworks:data_model',
        `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`)
}

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const TIERS = {
        1: {
            eut: MV, fluid: 8000, duration: 600, orb: 'bloodmagic:apprenticebloodorb', items: ['hostilenetworks:blank_data_model'],
            mobs: {
                'bat': [], 'chicken': [], 'cod': [],
                'cow': [], 'glow_squid': [], 'mooshroom': [],
                'pig': [], 'polar_bear': [], 'rabbit': [],
                'sheep': [], 'snow_golem': [], 'twilightforest/deer': [],
                'twilightforest/raven': []
            }
        },
        2: {
            eut: HV, fluid: 16000, duration: 1200, orb: 'bloodmagic:magicianbloodorb', items: ['gtceu:neural_substrate'],
            mobs: {
                'ars_nouveau/wilden_mobs': [], 'blaze': [], 'creeper': [],
                'drowned': [], 'enderman': [], 'guardian': [],
                'hoglin': [], 'iron_golem': [], 'magma_cube': [],
                'phantom': [], 'skeleton': [], 'slime': [],
                'spider': [], 'thermal/basalz': [], 'thermal/blitz': [],
                'thermal/blizz': [], 'twilightforest/death_tome': [], 'twilightforest/fire_beetle': [],
                'twilightforest/goblin': [], 'twilightforest/helmet_crab': [], 'twilightforest/kobold': [],
                'twilightforest/redcap': [], 'twilightforest/skeleton_druid': [], 'twilightforest/towerwood_borer': [],
                'twilightforest/winter_wolf': [], 'vindicator': [], 'zombie': [],
                'zombified_piglin': []
            }
        },
        3: {
            eut: EV, fluid: 32000, duration: 2400, orb: 'bloodmagic:masterbloodorb', items: ['gtceu:synaptic_lattice'],
            mobs: {
                'artifacts/mimic': [], 'doppleganger': [], 'evoker': [],
                'ghast': [], 'shulker': [], 'twilightforest/carminite_golem': [],
                'twilightforest/giant': [], 'twilightforest/minotaur': [], 'twilightforest/stable_ice_core': [],
                'twilightforest/troll': [], 'twilightforest/wraith': [], 'twilightforest/yeti': [],
                'wither_skeleton': [], 'wraith': []
            }
        },
        4: {
            eut: IV, fluid: 64000, duration: 4800, orb: 'bloodmagic:archmagebloodorb', items: ['gtceu:cortex_matrix'],
            mobs: {
                'twilightforest/alpha_yeti': [],
                'twilightforest/hydra': [], 'twilightforest/lich': [], 'twilightforest/minoshroom': [],
                'twilightforest/naga': [], 'twilightforest/snow_queen': [], 'twilightforest/ur_ghast': [],                
            }
        },
        5: {
            eut: LuV, fluid: 128000, duration: 9600, orb: 'gtceu:technomancy_orb', items: ['gtceu:apex_matrix'],
            mobs: {
                'ender_dragon': ['8x #forge:plates/ostrum', 'minecraft:dragon_head'],
                'wither': ['8x #forge:plates/desh', '#forge:storage_blocks/nether_star'],
                'allthemodium/piglich': ['8x #forge:plates/mithril'],
                'elder_guardian': ['8x #forge:plates/spirited_crystal'],
                'warden': ['8x #forge:plates/niotic_crystal']
            }
        }
    }


    allthemods.shaped('gtceu:mob_synthesizer', [
        'PCP',
        'BHB',
        'PCP'
    ], {
        P: '#forge:double_plates/umbral_steel',
        C: '#gtceu:circuits/mv',
        H: 'gtceu:mv_machine_hull',
        B: 'gtceu:slate_casing'
    }).id('gregification:mob_synthesizer_controller')

    const modelSubstrates = [
        { id: 'gtceu:neural_substrate', plate: 'signalum', wire: 'mercury_barium_calcium_cuprate', tier: 'hv', eu: HV },
        { id: 'gtceu:synaptic_lattice', plate: 'lumium', wire: 'uranium_triplatinum', tier: 'ev', eu: EV },
        { id: 'gtceu:cortex_matrix', plate: 'enderium', wire: 'samarium_iron_arsenic_oxide', tier: 'iv', eu: IV },
        { id: 'gtceu:apex_matrix', plate: 'osmium', wire: 'indium_tin_barium_titanium_cuprate', tier: 'luv', eu: LuV }
    ]

    modelSubstrates.forEach((substrate, index) => {
        allthemods.recipes.gtceu.chemical_reactor(substrate.id)
            .itemInputs(`2x #gtceu:circuits/${substrate.tier}`, `4x #forge:plates/${substrate.plate}`, `8x #gtceu:wires/${substrate.wire}`)
            .inputFluids(`#forge:biomass ${index+1}000`, `#forge:saturated_tau ${(index+1) * 2}000`, `#forge:blood ${(index+1) * 4}000`)
            .itemOutputs(substrate.id)
            .duration(300).EUt(substrate.eu)
    })


    Object.keys(TIERS).forEach((tierKey) => {
        let tier = TIERS[tierKey];
        Object.keys(tier.mobs).forEach((mob, index) => {
            let mobID = mob.replace('/', '_');
            const r = allthemods.recipes.gtceu.mob_synthesis(`gregification:model_${mobID}`)
                .itemInputs(tier.items.concat(tier.mobs[mob]))
                .notConsumable(tier.orb)
                .inputFluids(`#forge:blood ${tier.fluid}`)
                .itemOutputs(dataModel(mob))
                .duration(tier.duration)
                .EUt(tier.eut)
                .circuit(index+1)

        });
    });
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
