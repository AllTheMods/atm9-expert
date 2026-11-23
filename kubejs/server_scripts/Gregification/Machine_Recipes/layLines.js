// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

    const laylineDuration = 1200;
    const laylineEut = IV;

    const laylineOres = [
        { bacteria: Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"AcidithiobacillusFerrooxidans"}').weakNBT(), ore: 'alltheores:raw_uranium', amount: 128, consumeChance: 10, circuit: 1 },        
        { bacteria: Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"AcidithiobacillusFerrooxidans"}').weakNBT(), ore: 'gtceu:raw_thorium', amount: 128, consumeChance: 20, circuit: 2 },
        { bacteria: Item.of('gtceu:bacteria_colony_dust', '{bacteriaSpecies:"AcidithiobacillusFerrooxidans"}').weakNBT(), ore: 'gtceu:raw_radio_thoric_phosphate', amount: 128, consumeChance: 30, circuit: 3 },
    ];

    const addLaylineOre = (row) => {
        const oreName = row.ore.split(':').pop();
        allthemods.recipes.gtceu.twilight_layline(`gregification:twilight_layline/${oreName}`)
            .chancedInput(row.bacteria, row.consumeChance * 100, 0)
            .itemOutputs(`${row.amount}x ${row.ore}`)
            .duration(laylineDuration)
            .EUt(laylineEut)
            .circuit(row.circuit)
            .dimension('twilightforest:twilight_forest');
    };

    laylineOres.forEach(addLaylineOre);

    allthemods.recipes.gtceu.bender('gregification:carminite_plate')
        .itemInputs('#forge:gems/carminite')
        .circuit(1)
        .itemOutputs('gtceu:carminite_plate')
        .duration(100)
        .EUt(MV);

    allthemods.recipes.gtceu.bender('gregification:dense_carminite_plate')
        .itemInputs('#forge:gems/carminite')
        .circuit(9)
        .itemOutputs('gtceu:dense_carminite_plate')
        .duration(100)
        .EUt(MV);
});