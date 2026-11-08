// Pack-specific JEI cleanup. This changes ingredient visibility, not recipes or world content.
JEIEvents.hideItems(event => {
    const ForgeCapabilitiesForJeiCleanup = Java.loadClass('net.minecraftforge.common.capabilities.ForgeCapabilities');
    const FluidStackForJeiCleanup = Java.loadClass('net.minecraftforge.fluids.FluidStack');
    const SurfaceRockItemForJeiCleanup = Java.loadClass('com.gregtechceu.gtceu.api.item.SurfaceRockBlockItem');

    // Match every mob/NBT variant as well as the base items.
    event.hide(/^enderio:.*spawner$/);
    event.hide(['enderio:empty_soul_vial', 'enderio:filled_soul_vial']);
    event.hide('forestry:can');
    event.hide({ mod: 'gtceu', custom: stack => stack.item instanceof SurfaceRockItemForJeiCleanup });

    const fluidTanks = [
        'mekanism:basic_fluid_tank',
        'mekanism:advanced_fluid_tank',
        'mekanism:elite_fluid_tank',
        'mekanism:ultimate_fluid_tank',
        'mekanism:creative_fluid_tank',
        'create:fluid_tank',
        'create:creative_fluid_tank',
        'evilcraft:dark_tank'
    ];

    event.hide({ custom: stack => {
        if (fluidTanks.indexOf(stack.id) === -1) return false;

        // Create tank items store their fluid in block-entity NBT, without an item fluid capability.
        if (stack.id.startsWith('create:')) {
            const blockEntityTag = stack.getTagElement('BlockEntityTag');
            return blockEntityTag != null && !FluidStackForJeiCleanup.loadFluidStackFromNBT(
                blockEntityTag.getCompound('TankContent')
            ).isEmpty();
        }

        // Mekanism and EvilCraft expose their contents through Forge's item fluid handler.
        const handler = stack.getCapability(ForgeCapabilitiesForJeiCleanup.FLUID_HANDLER_ITEM).orElse(null);
        if (handler == null) return false;
        for (let tank = 0; tank < handler.getTanks(); tank++) {
            if (!handler.getFluidInTank(tank).isEmpty()) return true;
        }
        return false;
    }});
});
