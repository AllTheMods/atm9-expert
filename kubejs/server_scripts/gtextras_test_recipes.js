ServerEvents.recipes(event => {
    const GTX = Java.loadClass('com.gtextras.api.GTX');
    const VA = GTValues.VA;
    const LV = VA[1];
    const MV = VA[2];
    const HV = VA[3];
    const EV = VA[4];

    const items = [
        'minecraft:stick', 'minecraft:string', 'minecraft:feather', 'minecraft:clay_ball', 'minecraft:sugar',
        'minecraft:paper', 'minecraft:snowball', 'minecraft:slime_ball', 'minecraft:gunpowder',
        'minecraft:bone_meal', 'minecraft:leather', 'minecraft:brick', 'minecraft:nether_brick',
        'minecraft:glowstone_dust', 'minecraft:blaze_powder', 'minecraft:ender_pearl', 'minecraft:quartz',
        'minecraft:prismarine_shard', 'minecraft:rabbit_hide', 'minecraft:egg', 'minecraft:wheat_seeds',
        'minecraft:charcoal', 'minecraft:honeycomb', 'minecraft:amethyst_shard', 'minecraft:copper_ingot',
        'minecraft:iron_nugget', 'minecraft:gold_nugget', 'minecraft:cobblestone', 'minecraft:sand',
        'minecraft:gravel', 'minecraft:flint', 'minecraft:coal', 'minecraft:redstone', 'minecraft:lapis_lazuli'
    ];
    let cursor = 0;
    const next = () => {
        let item = items[cursor];
        cursor++;
        return item;
    };

    const resources = [
        { name: 'mana', cap: GTX.MANA, upfront: 1000, tick: 40 },
        { name: 'source', cap: GTX.SOURCE, upfront: 100, tick: 5 },
        { name: 'blood', cap: GTX.BLOOD, upfront: 500, tick: 20 }
    ];

    resources.forEach(res => {
        event.recipes.gtceu.extras_test('gtextras:test_' + res.name + '_in')
            .itemInputs(next())
            .input(res.cap, res.upfront)
            .duration(40)
            .EUt(LV);

        event.recipes.gtceu.extras_test('gtextras:test_' + res.name + '_out')
            .itemInputs(next())
            .output(res.cap, res.upfront)
            .duration(40)
            .EUt(LV);

        event.recipes.gtceu.extras_test('gtextras:test_' + res.name + '_in_tick')
            .itemInputs(next())
            .input(res.cap, res.tick)
            .perTick(true)
            .duration(100)
            .EUt(LV);

        event.recipes.gtceu.extras_test('gtextras:test_' + res.name + '_out_tick')
            .itemInputs(next())
            .output(res.cap, res.tick)
            .perTick(true)
            .duration(100)
            .EUt(LV);

        event.recipes.gtceu.extras_test('gtextras:test_' + res.name + '_loop')
            .itemInputs(next())
            .input(res.cap, res.upfront)
            .output(res.cap, res.upfront)
            .duration(40)
            .EUt(LV);
    });

    const willNames = ['raw', 'corrosive', 'destructive', 'vengeful', 'steadfast'];
    const willCaps = [GTX.WILL_RAW, GTX.WILL_CORROSIVE, GTX.WILL_DESTRUCTIVE, GTX.WILL_VENGEFUL, GTX.WILL_STEADFAST];

    for (let i = 0; i < 5; i++) {
        let base = 11 + i * 4;

        event.recipes.gtceu.extras_test('gtextras:test_will_' + willNames[i] + '_in')
            .circuit(base)
            .input(willCaps[i], 144)
            .duration(40)
            .EUt(LV);

        event.recipes.gtceu.extras_test('gtextras:test_will_' + willNames[i] + '_out')
            .circuit(base + 1)
            .output(willCaps[i], 144)
            .duration(40)
            .EUt(LV);

        event.recipes.gtceu.extras_test('gtextras:test_will_' + willNames[i] + '_in_tick')
            .circuit(base + 2)
            .input(willCaps[i], 4)
            .perTick(true)
            .duration(100)
            .EUt(LV);

        event.recipes.gtceu.extras_test('gtextras:test_will_' + willNames[i] + '_out_tick')
            .circuit(base + 3)
            .output(willCaps[i], 4)
            .perTick(true)
            .duration(100)
            .EUt(LV);
    }

    event.recipes.gtceu.extras_test('gtextras:test_will_all_in')
        .circuit(31)
        .input(GTX.WILL_RAW, 144)
        .input(GTX.WILL_CORROSIVE, 144)
        .input(GTX.WILL_DESTRUCTIVE, 144)
        .input(GTX.WILL_VENGEFUL, 144)
        .input(GTX.WILL_STEADFAST, 144)
        .duration(40)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_will_all_out')
        .circuit(32)
        .output(GTX.WILL_RAW, 144)
        .output(GTX.WILL_CORROSIVE, 144)
        .output(GTX.WILL_DESTRUCTIVE, 144)
        .output(GTX.WILL_VENGEFUL, 144)
        .output(GTX.WILL_STEADFAST, 144)
        .duration(40)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_will_transfer')
        .circuit(10)
        .input(GTX.WILL_RAW, 576)
        .output(GTX.WILL_RAW, 576)
        .duration(40)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_will_transfer_free')
        .input(GTX.WILL_RAW, 576)
        .output(GTX.WILL_RAW, 576)
        .duration(40)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_mana_to_source')
        .notConsumable('minecraft:gold_ingot')
        .input(GTX.MANA, 1000)
        .output(GTX.SOURCE, 1000)
        .duration(40)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_will_transfer_small')
        .circuit(5)
        .input(GTX.WILL_RAW, 5)
        .output(GTX.WILL_RAW, 5)
        .duration(40)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_will_convert_corrosive')
        .circuit(1)
        .input(GTX.WILL_RAW, 144)
        .output(GTX.WILL_CORROSIVE, 144)
        .duration(40)
        .EUt(MV);

    event.recipes.gtceu.extras_test('gtextras:test_will_convert_destructive')
        .circuit(2)
        .input(GTX.WILL_RAW, 144)
        .output(GTX.WILL_DESTRUCTIVE, 144)
        .duration(40)
        .EUt(MV);

    event.recipes.gtceu.extras_test('gtextras:test_will_convert_vengeful')
        .circuit(3)
        .input(GTX.WILL_RAW, 144)
        .output(GTX.WILL_VENGEFUL, 144)
        .duration(40)
        .EUt(MV);

    event.recipes.gtceu.extras_test('gtextras:test_will_convert_steadfast')
        .circuit(4)
        .input(GTX.WILL_RAW, 144)
        .output(GTX.WILL_STEADFAST, 144)
        .duration(40)
        .EUt(MV);

    [16, 64, 128, 256].forEach(rpm => {
        event.recipes.gtceu.extras_test('gtextras:test_rpm_' + rpm)
            .itemInputs(next())
            .addCondition(GTX.minRpm(rpm))
            .duration(100)
            .EUt(LV);
    });

    [['lv', LV], ['mv', MV], ['hv', HV], ['ev', EV]].forEach(tier => {
        event.recipes.gtceu.extras_test('gtextras:test_stress_' + tier[0])
            .itemInputs(next())
            .duration(600)
            .EUt(tier[1]);
    });

    event.recipes.gtceu.extras_test('gtextras:test_parallel')
        .itemInputs(next())
        .itemOutputs('minecraft:dirt')
        .input(GTX.MANA, 10)
        .perTick(true)
        .input(GTX.WILL_RAW, 2)
        .perTick(true)
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_all_in_tick')
        .itemInputs(next())
        .input(GTX.MANA, 20)
        .perTick(true)
        .input(GTX.SOURCE, 3)
        .perTick(true)
        .input(GTX.BLOOD, 10)
        .perTick(true)
        .input(GTX.WILL_RAW, 2)
        .perTick(true)
        .input(GTX.WILL_CORROSIVE, 2)
        .perTick(true)
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_all_out_tick')
        .itemInputs(next())
        .output(GTX.MANA, 20)
        .perTick(true)
        .output(GTX.SOURCE, 3)
        .perTick(true)
        .output(GTX.BLOOD, 10)
        .perTick(true)
        .output(GTX.WILL_RAW, 2)
        .perTick(true)
        .output(GTX.WILL_STEADFAST, 2)
        .perTick(true)
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_everything')
        .itemInputs(next())
        .itemOutputs('minecraft:emerald')
        .addCondition(GTX.minRpm(48))
        .input(GTX.MANA, 2000)
        .input(GTX.MANA, 40)
        .perTick(true)
        .output(GTX.MANA, 500)
        .input(GTX.SOURCE, 8)
        .perTick(true)
        .input(GTX.BLOOD, 30)
        .perTick(true)
        .input(GTX.WILL_RAW, 6)
        .perTick(true)
        .input(GTX.WILL_CORROSIVE, 300)
        .output(GTX.WILL_VENGEFUL, 5)
        .perTick(true)
        .output(GTX.WILL_STEADFAST, 120)
        .output(GTX.BLOOD, 25)
        .perTick(true)
        .duration(200)
        .EUt(MV);
});
