// priority: -1000
GTCEuStartupEvents.craftingComponents(event => {
    //items are added in circuits.js
    const GTCraftingComponents = Java.loadClass('com.gregtechceu.gtceu.data.recipe.GTCraftingComponents')

    const TIERS = ['UEV', 'UIV', 'UXV', 'OpV', 'MAX']

    // structural: plate, rotor
    const structural = {
        UEV: 'corrosive_etrium_alloy',
        UIV: 'destructive_scandozirconium',
        UXV: 'vengeful_gadomeitnerium_alloy',
        OpV: 'steadfast_rhenobedrock_alloy',
        MAX: 'demonic_antimatter_alloy'
    }

    // component: frame, pipes, distillation rod
    const component = {
        UEV: 'infused_star',
        UIV: 'reinforced_star',
        UXV: 'atomic_star',
        OpV: 'dark_matter',
        MAX: 'red_matter'
    }

    // conductive: wire, cable, springs, coils (plain wires, never the superconductors)
    const conductive = {
        UHV: 'gaia',
        UEV: 'etrium',
        UIV: 'tenebrium',
        UXV: 'infinity',
        OpV: 'dark_matter',
        MAX: 'red_matter'
    }

    // heating: coil metals (electric furnace / fluid heater wire), follows the coil ladder
    const heating = {
        UHV: 'trinium',
        UEV: 'tritanium',
        UIV: 'draconium',
        UXV: 'draconium_awakened',
        OpV: 'etrium',
        MAX: 'infinity'
    }

    const polymers = {
        UEV: 'polyimide',
        UIV: 'organic_polymer',
        UXV: 'chaos_plastic',
        OpV: 'naquadria_awakened',
        MAX: 'fifth_element'
    }

    const ALL = ['UHV'].concat(TIERS)

    // builds { UEV: "form:material", ... } for every tier present in the class table
    const entries = (form, table) => {
        let out = {}
        Object.keys(table).forEach(t => { out[t] = form + ":" + table[t] })
        return out
    }

    // builds { UEV: Item.of("gtceu:<prefix><material><suffix>"), ... } for every tier present in the class table
    const items = (prefix, table, suffix) => {
        let out = {}
        Object.keys(table).forEach(t => { out[t] = Item.of("gtceu:" + prefix + table[t] + suffix) })
        return out
    }

    const nextTier = (t) => ALL[ALL.indexOf(t) + 1]

    // ===== CONDUCTIVE =====
    let wireComponents = [
        ["wireGtSingle", GTCraftingComponents.WIRE_ELECTRIC],
        ["wireGtQuadruple", GTCraftingComponents.WIRE_QUAD],
        ["wireGtOctal", GTCraftingComponents.WIRE_OCT],
        ["wireGtHex", GTCraftingComponents.WIRE_HEX]
    ]
    wireComponents.forEach(pair => {
        event.setMaterialEntries(pair[1], entries(pair[0], conductive))
    })

    let cableComponents = [
        ["cableGtSingle", GTCraftingComponents.CABLE],
        ["cableGtDouble", GTCraftingComponents.CABLE_DOUBLE],
        ["cableGtQuadruple", GTCraftingComponents.CABLE_QUAD],
        ["cableGtOctal", GTCraftingComponents.CABLE_OCT],
        ["cableGtHex", GTCraftingComponents.CABLE_HEX]
    ]
    cableComponents.forEach(pair => {
        event.setMaterialEntries(pair[1], entries(pair[0], conductive))
    })

    // transformer secondary: NEXT tier's cable (MAX has no next tier)
    let transformerComponents = [
        ["cableGtSingle", GTCraftingComponents.CABLE_TIER_UP],
        ["cableGtDouble", GTCraftingComponents.CABLE_TIER_UP_DOUBLE],
        ["cableGtQuadruple", GTCraftingComponents.CABLE_TIER_UP_QUAD],
        ["cableGtOctal", GTCraftingComponents.CABLE_TIER_UP_OCT],
        ["cableGtHex", GTCraftingComponents.CABLE_TIER_UP_HEX]
    ]
    transformerComponents.forEach(pair => {
        let out = {}
        ALL.slice(0, -1).forEach(t => { out[t] = pair[0] + ":" + conductive[nextTier(t)] })
        event.setMaterialEntries(pair[1], out)
    })

    //double wire for electric furnace
    event.setMaterialEntries(GTCraftingComponents.COIL_HEATING, entries("wireGtDouble", heating))

    //quad wire for fluid heater
    event.setMaterialEntries(GTCraftingComponents.COIL_HEATING_DOUBLE, entries("wireGtQuadruple", heating))

    event.setMaterialEntries(GTCraftingComponents.COIL_ELECTRIC, entries("wireGtQuadruple", conductive))

    // springs use the cable material
    event.setItems(GTCraftingComponents.SPRING, items("", conductive, "_spring"))

    // GT: the big transformer spring is the NEXT tier's cable metal (MAX stays on its own)
    let bigSpring = {}
    ALL.forEach(t => {
        let m = nextTier(t) ? conductive[nextTier(t)] : conductive[t]
        bigSpring[t] = Item.of("gtceu:" + m + "_spring")
    })
    event.setItems(GTCraftingComponents.SPRING_TRANSFORMER, bigSpring)

    // GT: the small transformer spring is the SAME tier's cable metal
    event.setItems(GTCraftingComponents.SMALL_SPRING_TRANSFORMER, items("small_", conductive, "_spring"))

    // ===== STRUCTURAL =====
    event.setMaterialEntries(GTCraftingComponents.PLATE, entries("plate", structural))
    event.setMaterialEntries(GTCraftingComponents.ROTOR, entries("rotor", structural))

    // hull sheet: one polymer per tier (hull recipes themselves still need KubeJS replacements for UEV+)
    event.setItems(GTCraftingComponents.HULL_PLATE, items("", polymers, "_foil"))

    // ===== COMPONENT =====
    event.setMaterialEntries(GTCraftingComponents.FRAME, entries("frame", component))
    event.setMaterialEntries(GTCraftingComponents.PIPE_NORMAL, entries("pipeNormalFluid", component))
    event.setMaterialEntries(GTCraftingComponents.PIPE_LARGE, entries("pipeLargeFluid", component))
    event.setMaterialEntries(GTCraftingComponents.PIPE_NONUPLE, entries("pipeNonupleFluid", component))
    event.setMaterialEntries(GTCraftingComponents.PIPE_REACTOR, entries("pipeNormalFluid", component))
    event.setMaterialEntries(GTCraftingComponents.ROD_DISTILLATION, entries("spring", component))

    // ===== OTHER =====
    // electromagnetic rod = plain (non-magnetized) rod, like GT
    event.setMaterialEntries(GTCraftingComponents.ROD_ELECTROMAGNETIC, {
        UHV: "rod:samarium",
        UEV: "rod:eternium",
        UIV: "rod:neodymium_dysprosium",
        UXV: "rod:neodymium_dysprosium",
        OpV: "rod:neodymium_terbium",
        MAX: "rod:neodymium_terbium"
    })

    // magnetic rod = the magnetized version (UHV stays GT's samarium magnetic block)
    event.setItems(GTCraftingComponents.ROD_MAGNETIC, {
        UEV: Item.of("gtceu:magnetic_eternium_rod"),
        UIV: Item.of("gtceu:magnetic_neodymium_dysprosium_rod"),
        UXV: Item.of("gtceu:magnetic_neodymium_dysprosium_rod"),
        OpV: Item.of("gtceu:magnetic_neodymium_terbium_rod"),
        MAX: Item.of("gtceu:magnetic_neodymium_terbium_rod")
    })

    // radioactive rod: berkelium all the way up
    event.setMaterialEntries(GTCraftingComponents.ROD_RADIOACTIVE, entries("rod", {
        UEV: "berkelium", UIV: "berkelium", UXV: "berkelium", OpV: "berkelium", MAX: "berkelium"
    }))

    // sensor / emitter gem: one exquisite Blood Magic will gem per tier
    event.setItems(GTCraftingComponents.SENSOR_EMITTER_GEM, {
        UHV: Item.of("allthetweaks:atm_star"),
        UEV: Item.of("gtceu:exquisite_corrosive_gem"),
        UIV: Item.of("gtceu:exquisite_destructive_gem"),
        UXV: Item.of("gtceu:exquisite_vengeful_gem"),
        OpV: Item.of("gtceu:exquisite_steadfast_gem"),
        MAX: Item.of("gtceu:exquisite_demon_gem")
    })

    event.setItems(GTCraftingComponents.GLASS, {
        UEV: Item.of("gtceu:fusion_glass"),
        UIV: Item.of("gtceu:fusion_glass"),
        UXV: Item.of("gtceu:fusion_glass"),
        OpV: Item.of("gtceu:fusion_glass"),
        MAX: Item.of("gtceu:fusion_glass"),
    })

    event.setItems(GTCraftingComponents.GRINDER, {
        UEV: Item.of("gtceu:eternium_grinding_head"),
        UIV: Item.of("gtceu:eternium_grinding_head"),
        UXV: Item.of("gtceu:eternium_grinding_head"),
        OpV: Item.of("gtceu:eternium_grinding_head"),
        MAX: Item.of("gtceu:eternium_grinding_head")
    })

    event.setItems(GTCraftingComponents.SAWBLADE, {
        UEV: Item.of("gtceu:neutronium_buzz_saw_blade"),
        UIV: Item.of("gtceu:neutronium_buzz_saw_blade"),
        UXV: Item.of("gtceu:neutronium_buzz_saw_blade"),
        OpV: Item.of("gtceu:neutronium_buzz_saw_blade"),
        MAX: Item.of("gtceu:neutronium_buzz_saw_blade")
    })

    //hpic chip - for now using uhpic - new power component chips needed later
    event.setItems(GTCraftingComponents.POWER_COMPONENT, {
        UEV: Item.of("gtceu:pics/chip/uev_pic_chip"),
        UIV: Item.of("gtceu:pics/chip/uiv_pic_chip"),
        UXV: Item.of("gtceu:pics/chip/uxv_pic_chip"),
        OpV: Item.of("gtceu:pics/chip/opv_pic_chip"),
        MAX: Item.of("gtceu:pics/chip/max_pic_chip")
    })

    //voltage coils (new textures needed)
    event.setItems(GTCraftingComponents.VOLTAGE_COIL, {
        UHV: Item.of("gtceu:pics/coils/uhv_voltage_coil"),
        UEV: Item.of("gtceu:pics/coils/uev_voltage_coil"),
        UIV: Item.of("gtceu:pics/coils/uiv_voltage_coil"),
        UXV: Item.of("gtceu:pics/coils/uxv_voltage_coil"),
        OpV: Item.of("gtceu:pics/coils/opv_voltage_coil"),
        MAX: Item.of("gtceu:pics/coils/max_voltage_coil")
    })

    event.setItems(GTCraftingComponents.DRUM, {
        UEV: Item.of("industrialforegoing:pity_black_hole_tank"),
        UIV: Item.of("industrialforegoing:simple_black_hole_tank"),
        UXV: Item.of("industrialforegoing:advanced_black_hole_tank"),
        OpV: Item.of("industrialforegoing:supreme_black_hole_tank"),
        MAX: Item.of("industrialforegoing:supreme_black_hole_tank")
    })

    event.setItems(GTCraftingComponents.CRATE, {
        UEV: Item.of("industrialforegoing:pity_black_hole_unit"),
        UIV: Item.of("industrialforegoing:simple_black_hole_unit"),
        UXV: Item.of("industrialforegoing:advanced_black_hole_unit"),
        OpV: Item.of("industrialforegoing:supreme_black_hole_unit"),
        MAX: Item.of("industrialforegoing:supreme_black_hole_unit")
    })
})