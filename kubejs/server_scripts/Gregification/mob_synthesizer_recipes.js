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

// Page 1 needs no extra item. Pages 2+ need the item below in the input bus (not consumed).
const PAGE_ITEMS = [null, 'minecraft:red_dye', 'minecraft:blue_dye', 'minecraft:green_dye']
const CIRCUITS_PER_PAGE = 32

const BASIC_DATA = 6

function dataModel(mob) {
    return Item.of('hostilenetworks:data_model',
        `{data_model:{data:${BASIC_DATA},id:"hostilenetworks:${mob}"}}`)
}

ServerEvents.recipes(allthemods => {
    // Controller
    allthemods.shaped('gtceu:mob_synthesizer', [
        'PCP',
        'HBH',
        'PCP'
    ], {
        P: 'gtceu:steel_plate',
        C: '#gtceu:circuits/mv',
        H: 'gtceu:mv_machine_hull',
        B: 'bloodmagic:blankslate'
    }).id('kubejs:mob_synthesizer_controller')

    // EUt 120 > LV max, so it needs an MV energy hatch.
    MOB_MODELS.forEach((mob, i) => {
        const page = Math.floor(i / CIRCUITS_PER_PAGE)
        const circuit = (i % CIRCUITS_PER_PAGE) + 1
        if (page >= PAGE_ITEMS.length) {
            console.error(`Mob Synthesizer: no page item for ${mob}, add one to PAGE_ITEMS`)
            return
        }

        const r = allthemods.recipes.gtceu.mob_synthesis(`kubejs:mob_model_p${page + 1}_c${circuit}_${mob.replace('/', '_')}`)
            .itemInputs('hostilenetworks:blank_data_model')
            .circuit(circuit)
            .inputFluids('bloodmagic:life_essence_fluid 5000')
            .itemOutputs(dataModel(mob))
            .duration(400)
            .EUt(120)
        if (PAGE_ITEMS[page]) r.notConsumable(PAGE_ITEMS[page])
    })
})
