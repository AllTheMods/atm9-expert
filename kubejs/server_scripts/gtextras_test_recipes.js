ServerEvents.recipes(event => {
    const GTX = Java.loadClass('com.gtextras.api.GTX');
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;

    event.recipes.gtceu.extras_test('gtextras:test_mana_in')
        .itemInputs('minecraft:iron_ingot')
        .input(GTX.MANA, 50)
        .perTick(true)
        .itemOutputs('minecraft:gold_ingot')
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_mana_out')
        .itemInputs('minecraft:lapis_lazuli')
        .output(GTX.MANA, 100)
        .perTick(true)
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_source_in')
        .itemInputs('minecraft:amethyst_shard')
        .input(GTX.SOURCE, 5)
        .perTick(true)
        .itemOutputs('minecraft:diamond')
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_source_out')
        .itemInputs('minecraft:redstone')
        .output(GTX.SOURCE, 5)
        .perTick(true)
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_blood_in')
        .itemInputs('minecraft:rotten_flesh')
        .input(GTX.BLOOD, 50)
        .perTick(true)
        .itemOutputs('minecraft:quartz')
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_blood_out')
        .itemInputs('minecraft:bone')
        .output(GTX.BLOOD, 100)
        .perTick(true)
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_stress')
        .itemInputs('minecraft:iron_nugget')
        .itemOutputs('minecraft:iron_nugget')
        .duration(600)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_rpm')
        .itemInputs('minecraft:copper_ingot')
        .addCondition(GTX.minRpm(64))
        .itemOutputs('minecraft:emerald')
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_all')
        .itemInputs('minecraft:coal')
        .input(GTX.MANA, 100)
        .perTick(true)
        .input(GTX.SOURCE, 5)
        .perTick(true)
        .input(GTX.BLOOD, 20)
        .perTick(true)
        .addCondition(GTX.minRpm(32))
        .itemOutputs('minecraft:netherite_scrap')
        .output(GTX.MANA, 1000)
        .duration(200)
        .EUt(MV);

    event.recipes.gtceu.extras_test('gtextras:test_motor')
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('minecraft:cobblestone')
        .duration(400)
        .EUt(MV);

    event.recipes.gtceu.extras_test('gtextras:test_will_in')
        .itemInputs('minecraft:iron_ingot')
        .input(GTX.WILL_CORROSIVE, 5)
        .perTick(true)
        .itemOutputs('minecraft:gold_ingot')
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_will_out')
        .itemInputs('minecraft:gold_ingot')
        .output(GTX.WILL_RAW, 10)
        .perTick(true)
        .output(GTX.WILL_VENGEFUL, 4)
        .perTick(true)
        .duration(100)
        .EUt(LV);

    event.recipes.gtceu.extras_test('gtextras:test_everything')
        .itemInputs('minecraft:diamond')
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

    event.recipes.gtceu.extras_test('gtextras:test_will_transfer')
        .circuit(10)
        .input(GTX.WILL_RAW, 576)
        .output(GTX.WILL_RAW, 576)
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
});
