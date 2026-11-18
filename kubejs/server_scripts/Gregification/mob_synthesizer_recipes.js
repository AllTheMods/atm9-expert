const MOB_MODELS = [
    'allthemodium/piglich', 'ars_nouveau/wilden_mobs', 'artifacts/mimic', 'bat',
    'blaze', 'chicken', 'cod', 'cow',
    'creeper', 'doppleganger', 'drowned', 'elder_guardian',
    'ender_dragon', 'enderman', 'evoker', 'ghast',
    'glow_squid', 'guardian', 'hoglin', 'iron_golem',
    'magma_cube', 'mooshroom', 'phantom', 'pig',
    'polar_bear', 'rabbit', 'sheep', 'shulker',
    'skeleton', 'slime', 'snow_golem', 'spider',
    'thermal/basalz', 'thermal/blitz', 'thermal/blizz', 'twilightforest/alpha_yeti',
    'twilightforest/carminite_golem', 'twilightforest/death_tome', 'twilightforest/deer', 'twilightforest/fire_beetle',
    'twilightforest/giant', 'twilightforest/goblin', 'twilightforest/helmet_crab', 'twilightforest/hydra',
    'twilightforest/kobold', 'twilightforest/lich', 'twilightforest/minoshroom', 'twilightforest/minotaur',
    'twilightforest/naga', 'twilightforest/raven', 'twilightforest/redcap', 'twilightforest/skeleton_druid',
    'twilightforest/snow_queen', 'twilightforest/stable_ice_core', 'twilightforest/towerwood_borer', 'twilightforest/troll',
    'twilightforest/ur_ghast', 'twilightforest/winter_wolf', 'twilightforest/wraith', 'twilightforest/yeti',
    'vindicator', 'warden', 'wither', 'wither_skeleton',
    'wraith', 'zombie', 'zombified_piglin'
]

const PAGE_ITEMS = [null, 'minecraft:red_dye', 'minecraft:blue_dye', 'minecraft:green_dye']
const CIRCUITS_PER_PAGE = 32

const TIER_SETTINGS = {
    1: { eut: 120,   fluid: 8000,   duration: 600,  orb: 'bloodmagic:weakbloodorb',       items: [] },
    2: { eut: 480,   fluid: 16000,  duration: 1200, orb: 'bloodmagic:apprenticebloodorb', items: ['kubejs:neural_substrate'] },
    3: { eut: 1920,  fluid: 32000,  duration: 2400, orb: 'bloodmagic:magicianbloodorb',   items: ['kubejs:synaptic_lattice'] },
    4: { eut: 7680,  fluid: 64000,  duration: 4800, orb: 'bloodmagic:masterbloodorb',     items: ['kubejs:cortex_matrix'] },
    5: { eut: 30720, fluid: 128000, duration: 9600, orb: 'bloodmagic:archmagebloodorb',   items: ['kubejs:apex_matrix'] }
}


const MOB_EXTRAS = {
    'wither': ['2x kubejs:cortex_matrix', '4x gtceu:hsse_plate'],
    'ender_dragon': ['4x kubejs:cortex_matrix', '8x gtceu:osmium_plate']
}

const MOB_TIERS = {
    1: [
        'bat', 'chicken', 'cod',
        'cow', 'glow_squid', 'mooshroom',
        'pig', 'polar_bear', 'rabbit',
        'sheep', 'snow_golem', 'twilightforest/deer',
        'twilightforest/raven'
    ],
    2: [
        'ars_nouveau/wilden_mobs', 'blaze', 'creeper',
        'drowned', 'enderman', 'guardian',
        'hoglin', 'iron_golem', 'magma_cube',
        'phantom', 'skeleton', 'slime',
        'spider', 'thermal/basalz', 'thermal/blitz',
        'thermal/blizz', 'twilightforest/death_tome', 'twilightforest/fire_beetle',
        'twilightforest/goblin', 'twilightforest/helmet_crab', 'twilightforest/kobold',
        'twilightforest/redcap', 'twilightforest/skeleton_druid', 'twilightforest/towerwood_borer',
        'twilightforest/winter_wolf', 'vindicator', 'zombie',
        'zombified_piglin'
    ],
    3: [
        'artifacts/mimic', 'doppleganger', 'evoker',
        'ghast', 'shulker', 'twilightforest/carminite_golem',
        'twilightforest/giant', 'twilightforest/minotaur', 'twilightforest/stable_ice_core',
        'twilightforest/troll', 'twilightforest/wraith', 'twilightforest/yeti',
        'wither_skeleton', 'wraith'
    ],
    4: [
        'elder_guardian', 'twilightforest/alpha_yeti',
        'twilightforest/hydra', 'twilightforest/lich', 'twilightforest/minoshroom',
        'twilightforest/naga', 'twilightforest/snow_queen', 'twilightforest/ur_ghast',
        'warden'
    ],
    5: [
        'ender_dragon', 'wither', 'allthemodium/piglich'
    ]
}

const TIER_OF = {}
Object.keys(MOB_TIERS).forEach(t => MOB_TIERS[t].forEach(m => TIER_OF[m] = Number(t)))

const BASIC_DATA = 6

function dataModel(mob) {
    return Item.of('hostilenetworks:data_model',
        `{data_model:{data:${BASIC_DATA},id:"hostilenetworks:${mob}"}}`)
}

ServerEvents.recipes(event => {
    // Controller
    event.shaped('gtceu:mob_synthesizer', [
        'PCP',
        'HBH',
        'PCP'
    ], {
        P: 'gtceu:titanium_plate',
        C: '#gtceu:circuits/mv',
        H: 'gtceu:mv_machine_hull',
        B: 'bloodmagic:blankslate'
    }).id('kubejs:mob_synthesizer_controller')

    // Complex chaining with custom items

    event.recipes.gtceu.chemical_reactor('kubejs:neural_substrate')
        .itemInputs('2x #gtceu:circuits/mv', '8x gtceu:fine_gold_wire')
        .inputFluids('gtceu:biomass 4000', 'gtceu:sterilized_growth_medium 1000', 'bloodmagic:life_essence_fluid 8000')
        .itemOutputs('kubejs:neural_substrate')
        .duration(300).EUt(480)

    event.recipes.gtceu.assembler('kubejs:synaptic_lattice')
        .itemInputs('2x kubejs:neural_substrate', '4x gtceu:titanium_plate', '4x gtceu:fine_platinum_wire', '2x #gtceu:circuits/ev')
        .inputFluids('gtceu:soldering_alloy 576', 'bloodmagic:life_essence_fluid 16000')
        .itemOutputs('kubejs:synaptic_lattice')
        .duration(600).EUt(1920)

    event.recipes.gtceu.assembly_line('kubejs:cortex_matrix')
        .itemInputs('2x kubejs:synaptic_lattice', '4x gtceu:tungsten_steel_plate', '2x #gtceu:circuits/iv')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:polybenzimidazole 576', 'bloodmagic:life_essence_fluid 32000')
        .itemOutputs('kubejs:cortex_matrix')
        .duration(1200).EUt(7680)

    event.recipes.gtceu.assembly_line('kubejs:apex_matrix')
        .itemInputs('2x kubejs:cortex_matrix', '4x gtceu:hsse_plate', '4x gtceu:osmium_plate', '2x #gtceu:circuits/luv')
        .inputFluids('gtceu:soldering_alloy 2304', 'gtceu:polybenzimidazole 1152', 'bloodmagic:life_essence_fluid 64000')
        .itemOutputs('kubejs:apex_matrix')
        .duration(2400).EUt(30720)

    // ---- Data model recipes ----
    MOB_MODELS.forEach((mob, i) => {
        const page = Math.floor(i / CIRCUITS_PER_PAGE)
        const circuit = (i % CIRCUITS_PER_PAGE) + 1
        if (page >= PAGE_ITEMS.length) {
            console.error(`Mob Synthesizer: no page item for ${mob}, add one to PAGE_ITEMS`)
            return
        }
        const tier = TIER_OF[mob] || 2
        if (!TIER_OF[mob]) console.warn(`Mob Synthesizer: ${mob} has no tier, using 2`)
        const cfg = TIER_SETTINGS[tier]

        const r = event.recipes.gtceu.mob_synthesis(`kubejs:mob_model_p${page + 1}_c${circuit}_${mob.replace('/', '_')}`)
            .itemInputs('hostilenetworks:blank_data_model')
            .circuit(circuit)
            .inputFluids(`bloodmagic:life_essence_fluid ${cfg.fluid}`)
            .itemOutputs(dataModel(mob))
            .duration(cfg.duration)
            .EUt(cfg.eut)
            .notConsumable(cfg.orb)

        cfg.items.concat(MOB_EXTRAS[mob] || []).forEach(it => r.itemInputs(it))
        if (PAGE_ITEMS[page]) r.notConsumable(PAGE_ITEMS[page])
    })
})
