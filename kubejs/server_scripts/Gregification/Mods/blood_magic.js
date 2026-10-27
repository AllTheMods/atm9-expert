const runePairs = [
    ['speed', 'speed'],
    ['sacrifice', 'sac'],
    ['selfsacrifice', 'self_sac'],
    ['dislocation', 'displacement'],
    ['altarcapacity', 'capacity'],
    ['bettercapacity', 'aug_capacity'],
    ['orbcapacity', 'orb'],
    ['acceleration', 'acceleration'],
    ['charging', 'charging']
];
const basicPairs = [
    ['speed', 'speed'],
    ['sacrifice', 'sacrifice'],
    ['selfsacrifice', 'self_sacrifice'],
    ['dislocation', 'displacement'],
    ['altarcapacity', 'capacity'],
    ['orbcapacity', 'orb'],
    ['acceleration', 'acceleration'],
    ['charging', 'charging'],
    ['bettercapacity', 'aug_capacity']
];

ServerEvents.recipes(allthemods => {

    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    allthemods.shaped('gtceu:rune_casing', [
        'NCN',
        'CTC',
        'NCN'
    ], {
        N: '#forge:plates/manasteel',
        C: 'pneumaticcraft:compressed_stone',
        T: 'bloodmagic:blankslate'
    }).id('gtceu:rune_casing');

    allthemods.shaped('bloodmagic:blankrune', [
        'NCN',
        'BTB',
        'NCN'
    ], {
        B: '#forge:plates/gold',
        C: 'elementalcraft:contained_crystal',
        N: '#forge:plates/compressed_iron',
        T: 'gtceu:rune_casing'
    }).id('gtceu:blank_rune');


    runePairs.forEach(([rName, rID]) => {

        // @ts-ignore
        allthemods.remove({ id: `bloodmagic:blood_rune_${rID}_2` });
        allthemods.shaped(`bloodmagic:${rName}rune2`, [
            'NPN',
            'CTC',
            'NBN'
        ], {
            N: 'minecraft:netherite_scrap',
            P: 'bloodmagic:hellforgedparts',
            B: 'bloodmagic:etherealslate',
            T: 'gtceu:reinforced_rune_casing',
            C: `bloodmagic:${rName}rune`
        }).id(`bloodmagic:blood_rune_${rID}_2`);
    });
    // Rune casing 
    const bloodAltar = (input, output, altarTier, syphon, consumption, drain) => {
        allthemods.custom({
            "type": "bloodmagic:altar",
            "input": { "item": input },
            "output": { "item": output },
            "upgradeLevel": altarTier,
            "altarSyphon": syphon,
            "consumptionRate": consumption,
            "drainRate": drain
        }).id(`allthemods:bloodmagic/altar/${output.replace(':', '_')}`);
    };
    const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration, program, rID) => {

        const outputID = rID ? rID : itemsOut.replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.assembler(`gregification:assembler/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
        if (program) {
            recipe.circuit(program);
        }
    };


    basicPairs.forEach(([rName, rID], index) => {

        // @ts-ignore
        allthemods.remove({ id: `bloodmagic:blood_rune_${rID}` });
        addAssembler(
            ['bloodmagic:blankrune', 'botania:rune_mana', 'occultism:spirit_attuned_gem', 'evilcraft:dark_gem', '#forge:frames/steel'],
            '#forge:blood 2500',
            `bloodmagic:${rName}rune`,
            LV,
            30,
            index + 1)

        addAssembler(
            '#forge:altar_runes',
            '#forge:blood 2500',
            `bloodmagic:${rName}rune`,
            LV,
            30,
            index + 1,
            `${rName}rune_conversion`)

    });


    bloodAltar('gtceu:blank_slate_casing', 'bloodmagic:blankslate', 0, 1000, 25, 25)
    bloodAltar('gtceu:hot_blazing_soularium_ingot', 'enderio:soularium_ingot', 1, 2000, 25, 25)
    bloodAltar('gtceu:hot_blazing_energetic_alloy_ingot', 'enderio:energetic_alloy_ingot', 1, 2000, 25, 25)

    let recipe;
    recipe = allthemods.recipes.gtceu.sanguine_alchemy('gregification:alchemical_workbench/gilded_blackstone')
        .itemInputs('minecraft:blackstone', '4x #forge:plates/gold')
        .itemOutputs('minecraft:gilded_blackstone')
        .duration(30)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:craft_sanguine_vessel_casing')
        .itemInputs(
            '#forge:frames/umbral_steel',
            '3x #forge:plates/stainless_steel',
            '3x #forge:plates/umbral_steel',
            '2x bloodmagic:reinforcedslate'
        )
        .inputFluids('#forge:blood 2000')
        .itemOutputs('2x gtceu:sanguine_vessel_casing')
        .circuit(1)
        .duration(100)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:craft_blood_splash_casing')
        .itemInputs(
            '#forge:frames/aluminium',
            '4x #forge:plates/stainless_steel',
            '4x #forge:plates/umbral_steel',
            'bloodmagic:demonslate'
        )
        .inputFluids('#forge:blood 4000')
        .itemOutputs('2x gtceu:blood_splash_casing')
        .circuit(2)
        .duration(100)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:craft_will_orb_casing')
        .itemInputs(
            '#forge:frames/hellforged',
            '4x #forge:plates/stainless_steel',
            '4x #forge:plates/umbral_steel',
            'bloodmagic:reinforcedslate'
        )
        .inputFluids('#forge:will 288')
        .itemOutputs('2x gtceu:will_orb_casing')
        .duration(100)
        .EUt(MV);

})