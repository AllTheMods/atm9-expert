// Logic checks with mocked KubeJS/Forge objects; run Minecraft to verify native API integration.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

class GTToolItem {}
class SurfaceRockBlockItem {}
const fluidCapability = {};
const classes = {
    'com.gregtechceu.gtceu.api.item.tool.GTToolItem': GTToolItem,
    'com.gregtechceu.gtceu.api.item.SurfaceRockBlockItem': SurfaceRockBlockItem,
    'net.minecraftforge.common.capabilities.ForgeCapabilities': { FLUID_HANDLER_ITEM: fluidCapability },
    'net.minecraftforge.fluids.FluidStack': {
        loadFluidStackFromNBT(tag) {
            return { isEmpty: () => !tag.FluidName || tag.FluidName === 'minecraft:empty' || !(tag.Amount > 0) };
        }
    }
};
const rules = [];
for (const file of ['jei_hide.js', 'jei_hide_extra.js']) {
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../kubejs/client_scripts', file), 'utf8'), {
        Java: { loadClass(name) { assert.ok(classes[name], name); return classes[name]; } },
        JEIEvents: { hideItems(callback) { callback({ hide(rule) { rules.push(rule); } }); } },
        Color: { DYE: [] }, global: {}
    }, { filename: file });
}

function stack(id, options = {}) {
    return {
        id, nbt: options.nbt ?? null, item: options.item ?? {},
        getTagElement(key) {
            assert.equal(key, 'BlockEntityTag');
            return options.blockEntityTag ?? null;
        },
        getCapability(capability) {
            assert.equal(capability, fluidCapability);
            return { orElse: () => options.fluids == null ? null : {
                getTanks: () => options.fluids.length,
                getFluidInTank: index => ({ isEmpty: () => options.fluids[index] <= 0 })
            } };
        }
    };
}

function matches(rule, ingredient) {
    if (typeof rule === 'string') return rule === ingredient.id;
    if (Array.isArray(rule)) return rule.some(entry => matches(entry, ingredient));
    if (typeof rule.test === 'function') return rule.test(ingredient.id);
    return (!rule.mod || rule.mod === ingredient.id.split(':')[0]) && rule.custom(ingredient);
}

let checks = 0;
function check(ingredient, hidden) {
    assert.equal(rules.some(rule => matches(rule, ingredient)), hidden, ingredient.id);
    checks++;
}

for (const id of ['enderio:powered_spawner', 'enderio:broken_spawner',
    'enderio:empty_soul_vial', 'enderio:filled_soul_vial', 'forestry:can']) {
    check(stack(id), true);
    check(stack(id, { nbt: { arbitraryVariant: true } }), true);
}
check(stack('minecraft:spawner'), false);
check(stack('enderio:soul_binder'), false);
check(stack('forestry:capsule'), false);
check(stack('gtceu:iron_surface_rock', { item: new SurfaceRockBlockItem() }), true);
check(stack('gtceu:iron_dust'), false);
check(stack('gtceu:lv_steel_drill', { item: new GTToolItem(), nbt: { charge: 0 } }), true);
check(stack('gtceu:sulfuric_acid_bucket'), true);

for (const id of ['basic', 'advanced', 'elite', 'ultimate', 'creative'].map(tier => `mekanism:${tier}_fluid_tank`)
    .concat('evilcraft:dark_tank')) {
    check(stack(id), false);
    check(stack(id, { nbt: { capacity: 64000 }, fluids: [0] }), false);
    check(stack(id, { nbt: {}, fluids: [1000] }), true);
    check(stack(id, { nbt: {}, fluids: [0, 1] }), true);
}
for (const id of ['create:fluid_tank', 'create:creative_fluid_tank']) {
    check(stack(id), false);
    for (const [content, hidden] of [[{}, false], [{ FluidName: 'minecraft:water', Amount: 0 }, false],
        [{ FluidName: 'minecraft:empty', Amount: 1000 }, false],
        [{ FluidName: 'minecraft:water', Amount: 1000 }, true]]) {
        check(stack(id, { nbt: {}, blockEntityTag: { getCompound(key) {
            assert.equal(key, 'TankContent'); return content;
        } } }), hidden);
    }
}
check(stack('create:copper_backtank', { nbt: { Air: 1000 } }), false);
check(stack('mekanism:basic_chemical_tank', { nbt: { chemical: true } }), true);
check(stack('evilcraft:some_other_item', { nbt: {} }), true);
check(stack('ad_astra:etrionic_blast_furnace'), true);
console.log(`${checks} JEI cleanup logic checks passed. Native Minecraft integration remains untested.`);
