ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

    const reconstructedItems = [
        { input: "minecraft:redstone", output: "gtceu:restonia_dust", energy: EV },
        { input: "minecraft:iron_ingot", output: "gtceu:enori_dust", energy: EV },
        { input: "minecraft:coal", output: "gtceu:void_crystal_dust", energy: EV },
        { input: "minecraft:lapis_lazuli", output: "gtceu:palis_dust", energy: EV },
        { input: "minecraft:diamond", output: "gtceu:diamatine_dust", energy: EV },
        { input: "minecraft:emerald", output: "gtceu:emeradic_dust", energy: EV },
        { input: "minecraft:coal_block", output: "gtceu:void_crystal_block", energy: EV },
        { input: "#forge:storage_blocks/redstone", output: "gtceu:restonia_block", energy: EV },
        { input: "#forge:storage_blocks/lapis", output: "gtceu:palis_block", energy: EV },
        { input: "#forge:storage_blocks/diamond", output: "gtceu:diamatine_block", energy: EV },
        { input: "#forge:storage_blocks/emerald", output: "gtceu:emeradic_block", energy: EV },
        { input: "#forge:storage_blocks/iron", output: "gtceu:enori_block", energy: EV },
        { input: "minecraft:sand", output: "minecraft:soul_sand", energy: MV },
        { input: "minecraft:quartz", output: "minecraft:prismarine_shard", energy: HV },
        { input: "minecraft:rotten_flesh", output: "minecraft:leather", energy: HV },
        { input: "gtceu:topaz_gem", output: "minecraft:prismarine_crystals", energy: HV },
        { input: "gtceu:plant_ball", output: "minecraft:kelp", energy: MV },
        { input: "minecraft:obsidian", output: "minecraft:crying_obsidian", energy: LuV },
        { input: "#forge:dyes/black", output: "minecraft:ink_sac", energy: MV },
        { input: "minecraft:ink_sac", output: "minecraft:glow_ink_sac", energy: MV },
        { input: "thermal:rubberwood_sapling", output: "gtceu:rubber_sapling", energy: MV },
        { input: "gtceu:rubber_sapling", output: "thermal:rubberwood_sapling", energy: MV },
        { input: "minecraft:red_mushroom", output: "minecraft:brown_mushroom", energy: MV },
        { input: "minecraft:brown_mushroom", output: "minecraft:red_mushroom", energy: MV },
        { input: "#forge:seeds", output: "gtceu:crystallized_seed", energy: EV },
        { input: "elementalcraft:pristine_fire_gem", output: "gtceu:exquisite_fire_essence_gem", energy: HV },
        { input: "elementalcraft:pristine_water_gem", output: "gtceu:exquisite_water_essence_gem", energy: HV },
        { input: "elementalcraft:pristine_air_gem", output: "gtceu:exquisite_air_essence_gem", energy: HV },
        { input: "elementalcraft:pristine_earth_gem", output: "gtceu:exquisite_earth_essence_gem", energy: HV }
    ]

    const reconstruction = (input, output, fluidIn, voltage, duration) => {
        let recipe = allthemods.recipes.gtceu.reconstructor(`reconstruct_${output}`)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration || 20)
            .EUt(voltage)

        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }
    }

    reconstructedItems.forEach(mat => {
        reconstruction(mat.input, mat.output, mat.fluid, mat.energy, mat.duration)
    })

    const flowerCycle = [
        "dandelion",
        "poppy",
        "blue_orchid",
        "allium",
        "azure_bluet",
        "red_tulip",
        "orange_tulip",
        "white_tulip",
        "pink_tulip",
        "oxeye_daisy",
        "cornflower",
        "lily_of_the_valley",        
        "spore_blossom",
        "wither_rose",
        "dead_bush"
    ]
    reconstructCycle(flowerCycle);
    /**
     * Creates a "cycle" of Atomic Reconstructor recipes that allow players to transmute
     * any one item in the cycle into any other, through repeated applications of Atomic Reconstruction.
     * Best applied to plants or fungi, where getting one enables you to get many more easily.
     *
     * @param {Ingredient[]} cycle The array of ingredients for the AR to cycle through
     */
    function reconstructCycle(cycle) {
        cycle.forEach((flower, index) => {
            let curItem = cycle[index];
            let nextItem = cycle[(index + 1) % cycle.length];
            reconstruction(`minecraft:${curItem}`, `minecraft:${nextItem}`, null, 128,20)            
        })
    }
});