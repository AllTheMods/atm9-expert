// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// @ts-nocheck
LootJS.modifiers(allthemods => {
    let targets = {} // Cache so we don't check each time someone is asking for loot tables. no touchy. this gets cleared when loot tables are reloaded, e.g. via /reload
    allthemods.addLootTableModifier(/.*/).modifyLoot(Ingredient.all, stack => {
        let id = stack.id
        if (!(id in targets)) {
            let replacement = AlmostUnified.getReplacementForItem(stack)
            targets[id] = replacement.isEmpty() || replacement.id == id ? null : replacement
        }
        let target = targets[id]
        if (target == null) return stack
        return Item.of(target, stack.count, stack.tag)
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
