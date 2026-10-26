ServerEvents.recipes(event => {
    const GTX = Java.loadClass('com.gtextras.api.GTX');

    event.recipes.gtceu.extras_gen('gtextras:gen_mana')
        .input(GTX.MANA, 100)
        .perTick(true)
        .duration(200)
        .EUt(-32);

    event.recipes.gtceu.extras_gen('gtextras:gen_source')
        .input(GTX.SOURCE, 5)
        .perTick(true)
        .duration(200)
        .EUt(-32);

    event.recipes.gtceu.extras_gen('gtextras:gen_blood')
        .input(GTX.BLOOD, 50)
        .perTick(true)
        .duration(200)
        .EUt(-32);

    event.recipes.gtceu.extras_gen('gtextras:gen_rotation')
        .addCondition(GTX.minRpm(64))
        .duration(200)
        .EUt(-32);
});
