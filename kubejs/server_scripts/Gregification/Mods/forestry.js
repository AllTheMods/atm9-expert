// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//search:forestry
ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    function ing(s) {
        return s.charAt(0) === '#' ? { tag: s.substring(1) } : { item: s }
    }

    function fluid(s) {
        let p = s.split(' ')
        return { FluidName: p[0], Amount: Number(p[1]) }
    }

    function stack(s) {
        let chance = 1.0
        let count = 1
        let id = s
        if (id.indexOf('@') > -1) {
            chance = Number(id.split('@')[1])
            id = id.split('@')[0]
        }
        let m = id.match(/^(\d+)x (.+)$/)
        if (m) {
            count = Number(m[1])
            id = m[2]
        }
        return { id: id, count: count, chance: chance }
    }

    function slug(s) {
        return s.replace(/^\d+x /, '').split(' ')[0].split('@')[0].replace('#', '').split(':').pop().replace(/[^a-z0-9_\/.-]/g, '_')
    }

    function addRecipe(machine, input, schema, inputFluid, output, outputFluid, duration) {
        let outName = outputFluid ? slug(outputFluid) : slug(output[0])
        let inName = input && input.length > 0 ? slug(input[0]) : (inputFluid ? slug(inputFluid) : 'none')
        let id = machine + '/' + (machine === 'carpenter' || machine === 'fabricator' ? outName + '_' + stack(output[0]).count : inName + (input && input.length > 0 && inputFluid ? '_' + slug(inputFluid) : '') + '_to_' + outName)
        let json
        if (machine === 'squeezer') {
            let rem = output && output.length > 0 ? stack(output[0]) : null
            json = {
                type: 'forestry:squeezer',
                time: duration,
                resources: input.map(ing),
                output: fluid(outputFluid),
                remnant: rem ? { Count: rem.count, id: rem.id } : { Count: 0, id: 'minecraft:air' },
                chance: rem ? rem.chance : 0.0
            }
        } else if (machine === 'centrifuge') {
            json = {
                type: 'forestry:centrifuge',
                time: duration,
                input: ing(input[0]),
                products: output.map(o => {
                    let s = stack(o)
                    return { item: s.id, chance: s.chance }
                })
            }
        } else if (machine === 'still') {
            json = {
                type: 'forestry:still',
                time: duration,
                input: fluid(inputFluid),
                output: fluid(outputFluid)
            }
        } else if (machine === 'moistener') {
            let s = stack(output[0])
            json = {
                type: 'forestry:moistener',
                time: duration,
                resource: ing(input[0]),
                product: { Count: s.count, id: s.id }
            }
        } else if (machine === 'smelter') {
            let o = stack(output[0])
            json = {
                type: 'forestry:smelter',
                processingTime: duration,
                temperature: 0,
                inputs: input.map(i => {
                    let s = stack(i)
                    return { count: s.count, ingredient: ing(s.id) }
                }),
                output: { count: o.count, ingredient: ing(o.id) }
            }
        } else if (machine === 'carpenter' || machine === 'fabricator') {
            let o = stack(output[0])
            let key = {}
            if (schema.key) {
                Object.keys(schema.key).forEach(k => {
                    key[k] = ing(schema.key[k])
                })
            }
            let grid = {
                type: 'minecraft:crafting_shaped',
                category: 'misc',
                key: key,
                pattern: schema.pattern,
                result: { count: o.count, item: o.id },
                show_notification: true
            }
            if (!schema.pattern) {
                grid = {
                    type: 'minecraft:crafting_shapeless',
                    category: 'misc',
                    ingredients: schema.ingredients.map(ing),
                    result: { count: o.count, item: o.id },
                    show_notification: true
                }
            }
            if (machine === 'carpenter') {
                json = {
                    type: 'forestry:carpenter',
                    time: duration,
                    box: input && input.length > 0 ? ing(input[0]) : [],
                    liquid: inputFluid ? fluid(inputFluid) : { Amount: 0, FluidName: 'minecraft:empty' },
                    recipe: grid
                }
            } else {
                json = {
                    type: 'forestry:fabricator',
                    plan: input && input.length > 0 ? ing(input[0]) : [],
                    molten: fluid(inputFluid),
                    recipe: grid
                }
            }
        } else if (machine === 'fabricator_smelting') {
            json = {
                type: 'forestry:fabricator_smelting',
                melting: duration,
                product: fluid(outputFluid),
                resource: input.length > 1 ? input.map(ing) : ing(input[0])
            }
        } else if (machine === 'fermenter') {
            json = {
                type: 'forestry:fermenter',
                fermentationValue: duration,
                modifier: schema.modifier,
                fluidResource: fluid(inputFluid),
                output: outputFluid.split(' ')[0],
                resource: ing(input[0])
            }
        } else if (machine === 'protein' || machine === 'mutagen') {
            json = {
                type: 'gendustry:' + machine,
                amount: Number(outputFluid.split(' ')[1]),
                ingredient: ing(input[0])
            }
        } else {
            console.error('[forestry_gendustry] unknown machine ' + machine)
            return
        }
        allthemods.custom(json).id('gregification:' + id)
    }

    allthemods.shaped('forestry:sturdy_machine', [
        'PBP',
        'BHB',
        'PBP'
    ], {
        H: 'gtceu:lv_machine_casing',
        P: '#forge:plates/steel',
        B: '#forge:plates/bronze'

    }).id('gregification:craft_sturdy_machine');

    allthemods.shaped('gtceu:peat_generator', [
        'PMP',
        'PHP',
        'CEC'
    ], {
        E: 'forestry:engine_peat',
        M: 'gtceu:lv_electric_motor',
        H: 'forestry:sturdy_machine',
        P: '#forge:plates/steel',
        C: '#gtceu:circuits/lv'

    }).id('gregification:craft_peat_generator');

    allthemods.shaped('forestry:carpenter', [
        'PCP',
        'GHG',
        'PMP'
    ], {
        M: 'gtceu:lv_electric_motor',
        H: 'forestry:sturdy_machine',
        G: '#forge:glass',
        P: '#forge:plates/bronze',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_carpenter');

    allthemods.shaped('forestry:fermenter', [
        'PCP',
        'GHG',
        'PMP'
    ], {
        M: 'gtceu:lv_electric_pump',
        H: 'forestry:sturdy_machine',
        G: '#forge:glass',
        P: '#forge:gears/bronze',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_fermenter_bronze');

    allthemods.shaped('forestry:still', [
        'PCP',
        'GHG',
        'PMP'
    ], {
        M: 'gtceu:lv_electric_pump',
        H: 'forestry:sturdy_machine',
        G: '#forge:glass',
        P: '#forge:gears/steel',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_still');

    allthemods.shaped('forestry:centrifuge', [
        'PGP',
        'PHP',
        'PCP'
    ], {
        H: 'forestry:sturdy_machine',
        G: '#forge:glass',
        P: '#forge:gears/bronze',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_centrifuge');

    allthemods.shaped('forestry:fabricator', [
        'PCP',
        'GHG',
        'PCP'
    ], {
        P: '#forge:plates/gold',
        G: '#forge:glass',
        H: 'forestry:sturdy_machine',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_fabricator');

    addRecipe('fabricator', null, {
        pattern: ['STS', 'JCJ', 'STS'],
        key: { S: '#forge:silicon', T: '#forge:plates/tin', J: 'forestry:phosphorescent_jelly', C: 'pneumaticcraft:solar_cell' }
    }, 'gtceu:cadmium_copper 144', ['6x forestry:solar_cell'], null, 200);

    addRecipe('squeezer', ['#forge:fruits'], null, null, ['forestry:mulch@0.2'], 'forestry:juice 250', 20);
    addRecipe('fermenter', ['#minecraft:saplings'], { modifier: 1.5 }, 'forestry:juice 1', null, 'gtceu:biomass', 250);
    addRecipe('fermenter', ['#forge:crops'], { modifier: 1.5 }, 'forestry:juice 1', null, 'gtceu:biomass', 250);
    addRecipe('still', null, null, 'gtceu:biomass 1000', null, 'gtceu:ethanol 600', 70);



    const fabricatorSmeltMaterials = ['soldering_alloy', 'cadmium_copper', 'plutonium_241'];
    const fabricatorSmeltForms = [
        { tag: 'ingots', amount: 144, time: 200 },
        { tag: 'nuggets', amount: 16, time: 25 },
        { tag: 'dusts', amount: 144, time: 200 },
        { tag: 'storage_blocks', amount: 1296, time: 1800 }
    ];

    fabricatorSmeltMaterials.forEach(m => {
        fabricatorSmeltForms.forEach(f => {
            addRecipe('fabricator_smelting', ['#forge:' + f.tag + '/' + m], null, null, null, 'gtceu:' + m + ' ' + f.amount, f.time)
        })
    });




    const electronTubes = [
        { tube: 'forestry:electron_tube_copper', component: '#forge:plates/copper' },
        { tube: 'forestry:electron_tube_tin', component: '#forge:plates/tin' },
        { tube: 'forestry:electron_tube_bronze', component: '#forge:plates/bronze' },
        { tube: 'forestry:electron_tube_iron', component: '#forge:plates/iron' },
        { tube: 'forestry:electron_tube_gold', component: '#forge:plates/gold' },
        { tube: 'forestry:electron_tube_diamond', component: '#forge:plates/diamond' },
        { tube: 'forestry:electron_tube_emerald', component: '#forge:plates/emerald' },
        { tube: 'forestry:electron_tube_apatite', component: '#forge:dusts/apatite' },
        { tube: 'forestry:electron_tube_lapis', component: '#forge:plates/lapis' },
        { tube: 'forestry:electron_tube_amber', component: '#forge:gems/amber' },
        { tube: 'forestry:electron_tube_silicon', component: '#forge:silicon' },
        { tube: 'forestry:electron_tube_obsidian', component: 'minecraft:obsidian' },
        { tube: 'forestry:electron_tube_blaze', component: '#forge:dusts/blaze' },
        { tube: 'forestry:electron_tube_ender', component: 'minecraft:end_stone' }
    ];

    electronTubes.forEach(e => {
        addRecipe('fabricator', null, {
            pattern: ['PRP', 'PRP', 'PCP'],
            key: { 'C': '#gtceu:circuits/lv', 'P': e.component, 'R': '#forge:plates/redstone' }
        }, 'gtceu:soldering_alloy 288', [e.tube], null, 200)
    });


    addRecipe('carpenter', null, {
        pattern: ['#X#', 'XYX', '#X#'],
        key: { '#': 'minecraft:dirt', X: 'gtceu:bio_chaff', Y: 'forestry:mulch' }
    }, 'minecraft:water 1000', ['16x forestry:bog_earth'], null, 5);

    addRecipe('carpenter', null, {
        pattern: ['#X#', 'XYX', '#X#'],
        key: { '#': '#forge:dusts/ash', X: 'forestry:peat', Y: 'forestry:propolis_normal' }
    }, 'minecraft:water 1000', ['4x forestry:bituminous_peat'], null, 5);

    addRecipe('carpenter', null, {
        pattern: ['#X#', 'XYX', '#X#'],
        key: { '#': '#forge:bitumen', X: 'forestry:peat', Y: 'forestry:propolis_normal' }
    }, 'minecraft:water 1000', ['12x forestry:bituminous_peat'], null, 5);

    addRecipe('fabricator', null, {
        pattern: ['PEP', 'SHS', 'PEP'],
        key: { P: '#forge:plates/bronze', E: '#forge:plates/emerald', S: '#forge:slimeballs', H: 'gtceu:lv_machine_casing' }
    }, 'gtceu:soldering_alloy 144', ['forestry:flexible_casing'], null, 200);


    addRecipe('fabricator', null, {
        pattern: ['RVR', 'TCE', 'APA'],
        key: { T: '#gtceu:transistors', E: '#gtceu:capacitors', R: '#gtceu:resistors', V: 'gtceu:vacuum_tube', C: '#gtceu:cables/single/red_alloy', P: 'gtceu:resin_printed_circuit_board', A: '#forge:plates/copper' }
    }, 'gtceu:soldering_alloy 144', ['forestry:circuit_board_basic'], null, 200);

    addRecipe('fabricator', null, {
        pattern: ['RVR', 'TCE', 'APA'],
        key: { T: '#gtceu:transistors', E: '#gtceu:capacitors', R: '#gtceu:resistors', V: 'gtceu:vacuum_tube', C: '#gtceu:cables/single/red_alloy', P: 'gtceu:resin_printed_circuit_board', A: '#forge:plates/bronze' }
    }, 'gtceu:soldering_alloy 144', ['forestry:circuit_board_enhanced'], null, 200);

    addRecipe('fabricator', null, {
        pattern: ['RVR', 'TCE', 'APA'],
        key: { T: '#gtceu:transistors', E: '#gtceu:capacitors', R: '#gtceu:resistors', V: 'gtceu:vacuum_tube', C: '#gtceu:cables/single/red_alloy', P: 'gtceu:resin_printed_circuit_board', A: '#forge:plates/steel' }
    }, 'gtceu:soldering_alloy 144', ['forestry:circuit_board_refined'], null, 200);

    addRecipe('fabricator', null, {
        pattern: ['RVR', 'TCE', 'APA'],
        key: { T: '#gtceu:transistors', E: '#gtceu:capacitors', R: '#gtceu:resistors', V: 'gtceu:vacuum_tube', C: '#gtceu:cables/single/red_alloy', P: 'gtceu:resin_printed_circuit_board', A: '#forge:plates/electrum' }
    }, 'gtceu:soldering_alloy 144', ['forestry:circuit_board_intricate'], null, 200);

    addRecipe('carpenter', null, {
        pattern: ['WEW', 'RHR', 'WEW'],
        key: { W: '#forge:treated_wood', H: 'gtceu:ev_machine_casing', R: '#forge:rods/long/titanium', E: '#forge:plates/polyethylene' }
    }, 'gtceu:seed_oil 2000', ['forestry:impregnated_casing'], null, 50);

    addRecipe('carpenter', null, {
        pattern: ['#  ', ' #R', ' RB'],
        key: { '#': '#forge:ingots/iron', B: '#forge:ingots/bronze', R: '#forge:plates/rubber' }
    }, 'gtceu:soldering_alloy 144', ['forestry:soldering_iron'], null, 40);


    allthemods.recipes.gtceu.assembler('gregification:alveary/mutator')
        .itemInputs('forestry:alveary_plain', '4x forestry:electron_tube_emerald', '4x #forge:plates/osmiridium', 'mobees:mutation_catalyst')
        .itemOutputs('mobees:alveary_mutator')
        .inputFluids('#forge:honey 1000')
        .duration(800)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:alveary/heater')
        .itemInputs('forestry:alveary_plain', '2x forestry:electron_tube_blaze', '4x #forge:plates/osmiridium', '6x #forge:plates/refractory_composite')
        .itemOutputs('forestry:alveary_heater')
        .inputFluids('#forge:honey 1000')
        .duration(800)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:alveary/fan')
        .itemInputs('forestry:alveary_plain', '2x forestry:electron_tube_silicon', '4x #forge:plates/osmiridium', '2x mob_grinding_utils:fan')
        .itemOutputs('forestry:alveary_fan')
        .inputFluids('#forge:honey 1000')
        .duration(800)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:alveary/hygro')
        .itemInputs('forestry:alveary_plain', '2x forestry:electron_tube_ender', '4x #forge:plates/osmiridium', '2x gtceu:iv_fluid_regulator')
        .itemOutputs('forestry:alveary_hygro')
        .inputFluids('#forge:honey 1000')
        .duration(800)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:alveary/stabiliser')
        .itemInputs('forestry:alveary_plain', '2x forestry:electron_tube_diamond', '4x #forge:plates/osmiridium', '2x gtceu:iv_field_generator')
        .itemOutputs('forestry:alveary_stabiliser')
        .inputFluids('#forge:honey 1000')
        .duration(800)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:alveary/sieve')
        .itemInputs('forestry:alveary_plain', '2x forestry:electron_tube_gold', '4x #forge:plates/osmiridium', '4x forestry:woven_silk')
        .itemOutputs('forestry:alveary_sieve')
        .inputFluids('#forge:honey 1000')
        .duration(800)
        .EUt(IV);

    allthemods.recipes.gtceu.assembler('gregification:alveary/swarmer')
        .itemInputs('forestry:alveary_plain', '4x forestry:electron_tube_amber', '4x #forge:plates/osmiridium', 'gtceu:iv_emitter', 'gtceu:iv_sensor')
        .itemOutputs('forestry:alveary_swarmer')
        .inputFluids('#forge:honey 1000')
        .duration(800)
        .EUt(IV);


    //peat generator recipes
    const energyMultiplier = 12;
    const peatDuration = 60;
    const peatEut = LV * energyMultiplier;
    const bituminousDuration = 120;
    const bituminousEut = LV * energyMultiplier * 2;

    allthemods.recipes.gtceu.peat_generator('gregification:peat_generator/peat')
        .itemInputs('forestry:peat')
        .duration(peatDuration)
        .EUt(-peatEut);

    allthemods.recipes.gtceu.peat_generator('gregification:peat_generator/bituminous_peat')
        .itemInputs('forestry:bituminous_peat')
        .duration(bituminousDuration)
        .EUt(-bituminousEut);

    allthemods.recipes.gtceu.mixer('gregification:bacteria/contaminated_bacteria_fluid')
        .itemInputs('8x gtceu:bio_chaff', '4x #forge:dusts/meat')
        .inputFluids('#forge:slime_waste_water 3190', '#forge:biomass 4000')
        .outputFluids('gtceu:contaminated_bacteria_fluid 4000')
        .duration(400)
        .EUt(IV);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:bacteria/gendustry_mutagen')
        .itemInputs('mobees:mutation_catalyst', '#forge:dusts/promethium', 'mobees:mutagen')
        .inputFluids('#forge:slime_waste_water 638', '#forge:contaminated_bacteria_fluid 1000')
        .outputFluids('gendustry:mutagen 1000')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(600)
        .EUt(IV);

    addRecipe('fabricator', null, {
        pattern: ['FPF', 'PCP', 'FPF'],
        key: { P: 'forestry:pulsating_mesh', C: '#forge:dusts/protactinium', F: '#forge:dusts/uranium' }
    }, 'gtceu:plutonium_241 1296', ['mobees:mutation_catalyst'], null, 200);

    const succinicDuration = 400;
    const succinicEut = IV;

    allthemods.recipes.gtceu.pyrolyse_oven('gregification:succinic_acid/amber_distillation')
        .itemInputs('#forge:dusts/amber')
        .circuit(1)
        .outputFluids('gtceu:amber_oil 1000')
        .duration(succinicDuration)
        .EUt(succinicEut);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:succinic_acid/amber_oil_nitric_oxidation')
        .inputFluids('#forge:amber_oil 1000', '#forge:nitric_acid 10000')
        .itemOutputs('gtceu:succinic_anhydride_dust')
        .outputFluids('gtceu:carbon_dioxide 6000', 'minecraft:water 11000', 'gtceu:nitrous_oxide 5000')
        .duration(succinicDuration)
        .EUt(succinicEut);

    allthemods.recipes.gtceu.chemical_reactor('gregification:succinic_acid/anhydride_hydrolysis')
        .itemInputs('#forge:dusts/succinic_anhydride')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:succinic_acid 1000')
        .duration(succinicDuration)
        .EUt(succinicEut)

    const farmMaterials = [
        { block: 'minecraft:stone_bricks', suffix: 'stone_brick' },
        { block: 'minecraft:mossy_stone_bricks', suffix: 'mossy_stone_brick' },
        { block: 'minecraft:cracked_stone_bricks', suffix: 'cracked_stone_brick' },
        { block: 'minecraft:bricks', suffix: 'brick' },
        { block: 'minecraft:cut_sandstone', suffix: 'cut_sandstone' },
        { block: 'minecraft:chiseled_sandstone', suffix: 'sandstone_chiseled' },
        { block: 'minecraft:nether_bricks', suffix: 'brick_nether' },
        { block: 'minecraft:chiseled_stone_bricks', suffix: 'brick_chiseled' },
        { block: 'minecraft:quartz_block', suffix: 'quartz' },
        { block: 'minecraft:chiseled_quartz_block', suffix: 'quartz_chiseled' },
        { block: 'minecraft:quartz_pillar', suffix: 'quartz_lines' }
    ];

    const farmBlocks = [
        { type: 'plain', pattern: ['I#I', 'SCS'], key: { I: '#forge:plates/copper', S: '#minecraft:wooden_slabs', C: 'forestry:electron_tube_tin' } },
        { type: 'gearbox', pattern: ['PPP', '#G#'], key: { G: 'forestry:circuit_board_basic', P: '#forge:plates/tin' } },
        { type: 'hatch', pattern: ['G#G', '#D#'], key: { G: '#forge:gears/tin', D: 'gtceu:lv_electric_motor' } },
        { type: 'valve', pattern: ['PPP', '#T#'], key: { T: 'gtceu:lv_electric_pump', P: '#forge:plates/tin' } },
        { type: 'control', pattern: ['P#P', 'RTR'], key: { T: 'forestry:electron_tube_gold', R: '#forge:dusts/redstone', P: '#forge:plates/gold' } }
    ];

    farmMaterials.forEach(material => {
        farmBlocks.forEach(farm => {
            let output = 'forestry:farm_' + farm.type + '_' + material.suffix
            let key = { '#': material.block }
            Object.keys(farm.key).forEach(k => {
                key[k] = farm.key[k]
            })
            addRecipe('fabricator', null, {
                pattern: farm.pattern,
                key: key
            }, 'gtceu:soldering_alloy 144', [output], null, 200);
        })
    })

    allthemods.shaped('forestry:rainmaker', [
        'PCP',
        'GHG',
        'PUP'
    ], {
        H: 'forestry:sturdy_machine',
        U: 'gtceu:lv_electric_pump',
        G: '#forge:glass',
        P: '#forge:plates/bronze',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_rainmaker');

    allthemods.shaped('forestry:moistener', [
        'XCX',
        'GHG',
        'PUP'
    ], {
        H: 'forestry:sturdy_machine',
        U: 'gtceu:lv_electric_pump',
        X: '#forge:gears/bronze',
        G: '#forge:glass',
        P: '#forge:plates/bronze',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_moistener');

    allthemods.shaped('forestry:bottler', [
        'XCX',
        'GHG',
        'XUX'
    ], {
        H: 'forestry:sturdy_machine',
        U: 'gtceu:lv_electric_pump',
        X: 'forestry:can',
        G: '#forge:glass',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_bottler');

    allthemods.shaped('forestry:burn_barrel', [
        'B B',
        'IHI',
        'III'
    ], {
        H: 'forestry:sturdy_machine',
        B: 'minecraft:iron_bars',
        I: '#forge:plates/iron'        
    }).id('gregification:craft_burn_barrel');

    allthemods.shaped('forestry:mailbox', [
        ' T ',
        'THT',
        'TXT'
    ], {
        H: 'forestry:sturdy_machine',
        T: '#forge:plates/tin',
        X: '#forge:chests/wooden',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_mailbox');

    allthemods.shaped('forestry:trade_station', [
        'CTC',
        'THT',
        'XWX'
    ], {
        H: 'forestry:sturdy_machine',
        T: 'forestry:electron_tube_bronze',
        W: 'forestry:circuit_board_basic',
        X: '#forge:chests/wooden',
        C: '#gtceu:circuits/lv'
    }).id('gregification:craft_trade_station');

    allthemods.shaped('forestry:apiary', [
        'GGG',
        'PHP',
        'PPP'
    ], {
        H: 'forestry:impregnated_casing',
        G: '#forge:glass',
        P: '#forge:treated_wood'
    }).id('gregification:craft_apiary');

    allthemods.shaped('forestry:bee_house', [
        'GGG',
        'PHP',
        'PPP'
    ], {
        H: '#forge:chests/wooden',
        G: '#forge:glass',
        P: '#forge:treated_wood'
    }).id('gregification:craft_bee_house');

    addRecipe('fabricator', null, {
        pattern: ['XRX', 'XMX', 'XCX'],
        key: { X: '#forge:plates/tin', M: 'gtceu:computer_monitor_cover', R: '#forge:plates/redstone', C: '#gtceu:circuits/lv' }
    }, 'gtceu:soldering_alloy 144', ['forestry:portable_alyzer'], null, 200);

    addRecipe('fabricator', null, {
        pattern: ['RAR', 'AHA', 'RAR'],
        key: { H: 'gtceu:iv_machine_casing', R: '#forge:plates/refractory_composite', A: '#forge:plates/arcane_wax_blend' }
    }, 'gtceu:soldering_alloy 576', ['forestry:hardened_machine'], null, 200);

})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.