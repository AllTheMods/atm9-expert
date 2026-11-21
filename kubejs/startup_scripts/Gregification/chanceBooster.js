// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.postInit(allthemods => {
    var chanceBoost = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.boost.ChanceBoostFunction').OVERCLOCK;
    var registry = Java.loadClass('com.gregtechceu.gtceu.api.registry.GTRegistries').RECIPE_TYPES;
    registry.values().forEach(function (type) {
        type.setChanceFunction(chanceBoost);
    });
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
