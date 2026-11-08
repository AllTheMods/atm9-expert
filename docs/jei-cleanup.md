# Additional JEI ingredient cleanup

This client-only change hides selected ingredients without removing recipes, registry entries, inventory items or world blocks.

| Ingredients | Visibility |
| --- | --- |
| Ender IO powered and broken spawners | Hide all mob/NBT variants and base items |
| Ender IO empty and filled Soul Vials | Hide all variants |
| Forestry cans | Hide empty and filled variants |
| GregTech surface rocks | Hide all SurfaceRockBlockItem instances in the GT namespace |
| Mekanism basic/advanced/elite/ultimate/creative fluid tanks | Hide only filled variants |
| Create regular and creative fluid tanks | Hide only filled variants |
| EvilCraft Dark Tanks | Hide only filled variants |

The tank requested as Blood Magic was clarified to mean EvilCraft's Dark Tank. No Blood Magic items are changed. Forestry capsules, Create air backtanks and vanilla spawners are outside the new rules. Existing chemical-tank hiding remains unchanged.

## Implementation

`kubejs/client_scripts/jei_hide_extra.js` adds a separate JEIEvents.hideItems handler. Ender IO spawners are matched by namespace and ID suffix; Soul Vials and cans use exact IDs. Surface rocks are matched by the installed GT item class, covering generated materials without guessing registry names.

Mekanism and EvilCraft fluid contents are checked through ForgeCapabilities.FLUID_HANDLER_ITEM. Every tank slot is examined, and any nonempty fluid stack causes hiding. Missing capabilities and empty contents are retained.

Create FluidTankItem has no own item fluid capability. Its BlockEntityTag.TankContent is deserialized with FluidStack.loadFluidStackFromNBT and tested with isEmpty(). Reading existing tags does not mutate the ingredient. Absent tags, technical-only NBT and zero fluid amounts remain visible.

The original `jei_hide.js` broad NBT filter exempts the five Mekanism fluid tank IDs and EvilCraft Dark Tank so that the new content-aware rule can decide their visibility. Other existing hide rules are retained. This change is independent of JEI++ grouping and introduces no grouping configuration.

## Validation

Run:

```sh
node --check kubejs/client_scripts/jei_hide.js
node --check kubejs/client_scripts/jei_hide_extra.js
node tools/validate_jei_cleanup.cjs
```

JavaScript syntax and 55 mocked KubeJS/Forge logic checks passed. Checks include empty/filled contents, technical NBT, multiple fluid slots, missing capabilities, Create's serialized contents, nearby unrelated items and preservation of the base branch's existing GT hide behavior.

Native API behavior and rendering still require an in-game check. Restart the client and check client.log/latest.log for errors. Confirm that the selected items disappear, empty tanks remain visible, filled tanks are hidden, and unrelated recipes and ingredients behave as before. Mocked objects do not verify Rhino's interaction with actual Java objects.
