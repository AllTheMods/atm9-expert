
ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];


    const pot = 'minecraft:flower_pot';
    const plate = '#forge:dusts/cermet_blend';
    const hopper = 'minecraft:hopper';
    const variants = ['terracotta', 'concrete', 'glazed_terracotta'];

    colors.forEach(function (color) {
        variants.forEach(function (variant, index) {
            allthemods.recipes.gtceu.electric_blast_furnace(`gregification:botanypots/${color}_${variant}_botany_pot`)
                .itemInputs(`5x ${plate}`, pot, `minecraft:${color}_${variant}`)
                .itemOutputs(`botanypots:${color}_${variant}_botany_pot`)
                .inputFluids(`#forge:argon 1000`)
                .duration(600)
                .EUt(EV)
                .blastFurnaceTemp(3600);

            allthemods.shapeless(`botanypots:${color}_${variant}_hopper_botany_pot`, [
                hopper, `botanypots:${color}_${variant}_botany_pot`
            ]).id(`botanypots:gregification/${color}_${variant}_hopper_botany_pot`);
        });
    });

    allthemods.recipes.gtceu.electric_blast_furnace(`gregification:botanypots/terracota_botany_pot`)
        .itemInputs(`5x ${plate}`, `${pot}`)
        .itemOutputs('botanypots:terracotta_botany_pot')
        .inputFluids(`#forge:argon 1000`)
        .duration(600)
        .EUt(EV)
        .circuit(5)
        .blastFurnaceTemp(3600);

    allthemods.shapeless('botanypots:terracotta_hopper_botany_pot', [
        hopper, 'botanypots:terracotta_botany_pot'
    ]).id('botanypots:gregification/terracotta_hopper_botany_pot');

});