// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // --- 1. VOLTAGE MAP ---
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    const COIL_TEMPS = {
        CUPRONICKEL: 1800,
        KANTHAL: 2700,
        NICHROME: 3600,
        RTM: 4500,
        HSS_G: 5400,
        NAQUADAH: 7200,
        TRINIUM: 9000,
        TRITANIUM: 10800,
        DRACONIUM: 11200,
        DRACONIUM_AWAKENED: 12800,
        ETRIUM: 13500,
        INFINITY: 15000
    };

    allthemods.shaped('gtceu:industrial_leacher', [
        'TCT',
        'OHO',
        'PWP'
    ], {
        H: 'gtceu:iv_machine_hull',
        O: '#forge:frames/draconium',
        C: '#gtceu:circuits/iv',
        T: '#forge:plates/tungsten_carbide',
        P: 'gtceu:iv_electric_pump',
        W: 'gtceu:tungsten_steel_normal_fluid_pipe'
    }).id('gregification:controllers/industrial_leacher')


    allthemods.shaped('gtceu:dissolution_tank', [
        'ECE',
        'MHM',
        'TPT'
    ], {
        H: 'gtceu:iv_machine_hull',
        C: '#gtceu:circuits/iv',
        E: '#forge:plates/end_steel',
        M: 'gtceu:iv_electric_motor',
        T: '#forge:plates/tungsten_carbide',
        P: 'gtceu:iv_electric_pump'
    }).id('gregification:controllers/dissolution_tank')


    allthemods.shaped('gtceu:acid_brewing_vat', [
        'NCN',
        'PHP',
        'TOT'
    ], {
        H: 'gtceu:iv_machine_hull',
        C: '#gtceu:circuits/iv',
        N: '#forge:plates/enderium',
        P: 'gtceu:iv_electric_pump',
        T: '#forge:plates/tungsten_carbide',
        O: '#forge:frames/vibranium'
    }).id('gregification:controllers/acid_brewing_vat')

    const launchDuration = 2000;
    const launchEUt = UV;
    const launchArrows = 1024;
    const neuronChance = 500;
    const selfAwareData = 1254;

    allthemods.recipes.gtceu.subatomic_projectile_launcher('gregification:subatomic_projectile_launch')
        .itemInputs(launchArrows + 'x minecraft:arrow')
        .notConsumable('hostilenetworks:blank_data_model')
        .chancedOutput('gtceu:raw_model_neuron', neuronChance, 0)
        .duration(launchDuration)
        .EUt(launchEUt);

    const awareModels = ['zombie', 'skeleton', 'wither_skeleton', 'wither', 'elder_guardian', 'guardian', 'ender_dragon', 'enderman', 'shulker', 'hoglin', 'pig', 'squid', 'warden', 'blaze', 'ghast', 'drowned', 'spider', 'witch', 'iron_golem', 'doppleganger', 'wraith', '~death_tome', '-piglich'];

    awareModels.forEach(creature => {
        let modelId = creature;
        if (creature[0] == '~') { modelId = 'twilightforest/' + creature.slice(1); }
        else if (creature[0] == '-') { modelId = 'allthemodium/' + creature.slice(1); }
        let slug = modelId.replace('/', '_');

        let anyModel = Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:' + modelId + '"}}').weakNBT();
        let awareModel = Item.of('hostilenetworks:data_model', '{data_model:{data:' + selfAwareData + ',id:"hostilenetworks:' + modelId + '"}}').strongNBT();

        allthemods.shapeless(awareModel, [anyModel, 'gtceu:raw_model_neuron'])
            .modifyResult((grid, result) => {
                let model = grid.find('hostilenetworks:data_model');
                let out = model.copy();
                let tag = out.getOrCreateTag();
                let dm = tag.getCompound('data_model');
                dm.putInt('data', selfAwareData);
                tag.put('data_model', dm);
                return out;
            })
            .id('gregification:self_aware/' + slug);
    });

    allthemods.shapeless('hostilenetworks:data_model', ['hostilenetworks:data_model', 'gtceu:raw_model_neuron'])
        .modifyResult((grid, result) => {
            let model = grid.find('hostilenetworks:data_model');
            let out = model.copy();
            let tag = out.getOrCreateTag();
            let dm = tag.getCompound('data_model');
            dm.putInt('data', selfAwareData);
            tag.put('data_model', dm);
            return out;
        })
        .id('gregification:self_aware/any_model');


    allthemods.recipes.gtceu.assembly_line('gregification:craft_subatomic_projectile_launcher')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '4x #gtceu:circuits/uv',
            '4x gtceu:uv_emitter',
            '2x gtceu:uv_field_generator',
            '4x gtceu:uv_robot_arm',
            '8x gtceu:atomic_casing',
            '8x minecraft:dispenser',
            '4x minecraft:target',
            '16x #forge:plates/tritanium'
        )
        .inputFluids('#forge:soldering_alloy 2304', '#forge:polybenzimidazole 2304')
        .itemOutputs('gtceu:subatomic_projectile_launcher')
        .scannerResearch('hostilenetworks:blank_data_model')
        .duration(1800)
        .EUt(UV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
