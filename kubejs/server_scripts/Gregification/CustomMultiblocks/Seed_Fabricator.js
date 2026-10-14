ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    // MACHINE CONTROLLER
    allthemods.recipes.gtceu.assembler(`gregification:seed_fabricator`)
        .itemInputs([
            'mysticalagriculture:infusion_altar',
            'gtceu:iv_machine_hull',
            '4x #forge:plates/hafnium',
            '2x #gtceu:circuits/iv',
            '4x gtceu:iv_electric_pump',
            '4x #forge:rods/swift_alloy',
            '16x #gtceu:wires/hex/cadmium_copper'
        ])
        .itemOutputs('gtceu:seed_fabricator')        
        .inputFluids('#forge:polybenzimidazole 1440', '#forge:selenium 1000')
        .duration(600)
        .EUt(IV)
        .circuit(1);

    allthemods.recipes.gtceu.assembler(`gregification:awakening_altar`)
        .itemInputs([
            'mysticalagriculture:awakening_altar',
            'gtceu:iv_machine_hull',
            '4x #forge:plates/hafnium',
            '2x #gtceu:circuits/iv',
            '4x gtceu:iv_electric_pump',
            '4x #forge:rods/swift_alloy',
            '16x #gtceu:wires/hex/cadmium_copper'            
        ])
        .itemOutputs('gtceu:awakening_altar')        
        .inputFluids('#forge:polybenzimidazole 1440', '#forge:selenium 1000')
        .duration(600)
        .EUt(IV)
        .circuit(2);

    // DATA MAPS & FUNCTION
    const TIER = {
        1: { eu: HV, dur: 100, item: 'mysticalagriculture:inferium_essence' },
        2: { eu: EV, dur: 150, item: 'mysticalagriculture:prudentium_essence' },
        3: { eu: IV, dur: 200, item: 'mysticalagriculture:tertium_essence' },
        4: { eu: LuV, dur: 300, item: 'mysticalagriculture:imperium_essence' },
        5: { eu: ZPM, dur: 400, item: 'mysticalagriculture:supremium_essence' },
        6: { eu: UV, dur: 600, item: 'mysticalagradditions:insanium_essence' },
        7: { eu: UHV, dur: 800, item: 'mysticalexpansion:extremium_essence' },
        8: { eu: UEV, dur: 1000, item: 'mysticalexpansion:etherium_essence' },
        9: { eu: UIV, dur: 1200, item: 'mysticalexpansion:divinium_essence' }      
    };

    const BASE = {
        r: 'mysticalagriculture:prosperity_seed_base',
        s: 'mysticalagriculture:soulium_seed_base'
    };

    allthemods.remove({ type: 'mysticalagriculture:infusion', output: /mysticalagriculture:.*_seeds/ });
    allthemods.remove({ id: /allthemods:mysticalagriculture\/.*_seeds\/infusion/ });
    allthemods.remove({ id: /^mysticalagriculture:.*_seeds_infusion$/ });

    const gregifySeed = (name, bKey, tKey, catalyst) => {
        let t = TIER[tKey];
        let b = BASE[bKey];
        let seedItem = `mysticalagriculture:${name}_seeds`;
        let recipeId = `gregification:seed_fabricator/fabricating_${name}`;

        let ingredient;
        let usedCompressed = false;
        let itemsToCheck = [];

        // --- STEP 1: Normalize Input into a List of IDs ---
        if (typeof catalyst === 'string') {
            if (catalyst.startsWith('#')) {
                // It's a TAG. Get all item IDs inside this tag.
                // Note: This relies on tags being populated. In ServerEvents.recipes, this is usually safe.
                itemsToCheck = Ingredient.of(catalyst).getItemIds();
            } else {
                // It's a single ITEM ID.
                itemsToCheck = [catalyst];
            }
        }

        // --- STEP 2: Scan for a Compressed Variant ---
        // We loop through every item found in Step 1. 
        // If the tag had 5 types of stone, we check all 5 until we find a compressed version.
        for (let itemId of itemsToCheck) {
            let path = itemId.toString().split(':')[1]; // Get name (e.g. 'sand' from 'minecraft:sand')
            let compressedId = `allthecompressed:${path}_1x`; // Construct theoretical ID

            if (Item.exists(compressedId)) {
                ingredient = Item.of(compressedId, 4);
                usedCompressed = true;
                break; // Stop looking, we found one!
            }
        }

        // --- STEP 3: Fallback (Standard 4x Logic) ---
        if (!usedCompressed) {
            if (typeof catalyst === 'string') {
                // Handle Tag string vs Item String
                ingredient = catalyst.startsWith('#') ? Ingredient.of(catalyst).withCount(4) : Item.of(catalyst, 4);
            } else {
                // Handle Item Object
                ingredient = catalyst.withCount(4);
            }
        }
        //let water = Fluid.of(`gtceu:water_stage_1`, tKey * 1000);
        let water = Fluid.of(`gtceu:water_stage_${tKey}`, 1000);
        let fluids = [Fluid.of('gtceu:saturated_tau', 1000), Fluid.of('gtceu:saturated_life_fertilizer', 1000), water]

        // --- STEP 4: Register Recipe ---
        allthemods.recipes.gtceu.seed_fabricator(recipeId)
            .itemInputs(b, `4x ${t.item}`, ingredient)
            //.inputFluids(Fluid.of('gtceu:saturated_tau', 2000))
            .inputFluids(fluids)
            .itemOutputs(seedItem)
            .duration(t.dur)
            .EUt(t.eu);

        //allthemods.remove({ output: seedItem, type: 'mysticalagriculture:infusion' });
        //allthemods.remove({ id: `allthemods:mysticalagriculture/${name}_seeds/infusion` });
    };

    // RECIPE DEFINITIONS

    // Tier 1
    gregifySeed('dirt', 'r', 1, 'minecraft:dirt');
    gregifySeed('stone', 'r', 1, 'minecraft:stone');
    gregifySeed('deepslate', 'r', 1, 'minecraft:deepslate');
    gregifySeed('wood', 'r', 1, '#minecraft:logs');
    gregifySeed('ice', 'r', 1, 'minecraft:ice');
    gregifySeed('air', 'r', 1, 'mysticalagriculture:air_agglomeratio');
    gregifySeed('earth', 'r', 1, 'mysticalagriculture:earth_agglomeratio');
    gregifySeed('fire', 'r', 1, 'mysticalagriculture:fire_agglomeratio');
    gregifySeed('nature', 'r', 1, 'mysticalagriculture:nature_agglomeratio');
    gregifySeed('water', 'r', 1, 'mysticalagriculture:water_agglomeratio');

    // Tier 2
    gregifySeed('iron', 'r', 2, '#forge:storage_blocks/iron');
    gregifySeed('copper', 'r', 2, '#forge:storage_blocks/copper');
    gregifySeed('tin', 'r', 2, '#forge:storage_blocks/tin');
    gregifySeed('sulfur', 'r', 2, '#forge:storage_blocks/sulfur');
    gregifySeed('coal', 'r', 2, '#forge:storage_blocks/coal');
    gregifySeed('nether_quartz', 'r', 2, '#forge:storage_blocks/quartz');
    gregifySeed('honey', 'r', 2, 'minecraft:honey_bottle');
    gregifySeed('coral', 'r', 2, 'mysticalagriculture:coral_agglomeratio');
    gregifySeed('dye', 'r', 2, 'mysticalagriculture:dye_agglomeratio');
    gregifySeed('nether', 'r', 2, 'allthecompressed:netherrack_1x');
    gregifySeed('amethyst', 'r', 2, '#forge:storage_blocks/amethyst');
    gregifySeed('rubber', 'r', 2, '#forge:rubber');
    gregifySeed('silicon', 'r', 2, '#forge:storage_blocks/silicon');
    gregifySeed('aluminum', 'r', 2, '#forge:storage_blocks/aluminum');
    gregifySeed('limestone', 'r', 2, 'create:limestone');

    // Tier 3
    gregifySeed('gold', 'r', 3, '#forge:storage_blocks/gold');
    gregifySeed('silver', 'r', 3, '#forge:storage_blocks/silver');
    gregifySeed('lead', 'r', 3, '#forge:storage_blocks/lead');
    gregifySeed('zinc', 'r', 3, '#forge:storage_blocks/zinc');
    gregifySeed('bronze', 'r', 3, '#forge:storage_blocks/bronze');
    gregifySeed('brass', 'r', 3, '#forge:storage_blocks/brass');
    gregifySeed('steel', 'r', 3, '#forge:storage_blocks/steel');
    gregifySeed('redstone', 'r', 3, '#forge:storage_blocks/redstone');
    gregifySeed('glowstone', 'r', 3, '#forge:storage_blocks/glowstone'); // Fixed Tag
    gregifySeed('obsidian', 'r', 3, 'allthecompressed:obsidian_1x');
    gregifySeed('prismarine', 'r', 3, 'minecraft:prismarine_shard');
    gregifySeed('conductive_alloy', 'r', 3, '#forge:storage_blocks/conductive_alloy');
    gregifySeed('copper_alloy', 'r', 3, '#forge:storage_blocks/copper_alloy');
    gregifySeed('redstone_alloy', 'r', 3, '#forge:storage_blocks/redstone_alloy');
    gregifySeed('graphite', 'r', 3, 'bigreactors:graphite_block');
    gregifySeed('saltpeter', 'r', 3, '#forge:storage_blocks/raw_saltpeter');
    gregifySeed('grains_of_infinity', 'r', 3, 'enderio:grains_of_infinity');
    gregifySeed('mystical_flower', 'r', 3, 'mysticalagriculture:mystical_flower_agglomeratio');
    gregifySeed('peridot', 'r', 3, '#forge:storage_blocks/peridot');
    gregifySeed('sapphire', 'r', 3, '#forge:storage_blocks/sapphire');
    gregifySeed('steeleaf', 'r', 3, '#forge:storage_blocks/steeleaf');
    gregifySeed('ironwood', 'r', 3, '#forge:storage_blocks/ironwood');
    gregifySeed('amethyst_bronze', 'r', 3, '#forge:storage_blocks/amethyst_bronze');
    gregifySeed('slimesteel', 'r', 3, '#forge:storage_blocks/slimesteel');
    gregifySeed('pig_iron', 'r', 3, '#forge:storage_blocks/pig_iron');
    gregifySeed('menril', 'r', 3, 'integrateddynamics:menril_berries');
    gregifySeed('sky_stone', 'r', 3, 'ae2:sky_stone_block');
    gregifySeed('apatite', 'r', 3, '#forge:storage_blocks/apatite');
    gregifySeed('crimson_iron', 'r', 3, '#forge:storage_blocks/crimson_iron');
    gregifySeed('manasteel', 'r', 3, '#forge:storage_blocks/manasteel');
    gregifySeed('azure_silver', 'r', 3, '#forge:storage_blocks/azure_silver');


    // Tier 4
    gregifySeed('diamond', 'r', 4, '#forge:storage_blocks/diamond');
    gregifySeed('emerald', 'r', 4, '#forge:storage_blocks/emerald');
    gregifySeed('lapis_lazuli', 'r', 4, '#forge:storage_blocks/lapis'); // Fixed Tag
    gregifySeed('end', 'r', 4, 'minecraft:end_stone');
    gregifySeed('experience', 'r', 4, 'minecraft:experience_bottle');
    gregifySeed('fluix', 'r', 4, 'ae2:fluix_block');
    gregifySeed('certus_quartz', 'r', 4, '#forge:storage_blocks/certus_quartz');
    gregifySeed('pulsating_alloy', 'r', 4, '#forge:storage_blocks/pulsating_alloy');
    gregifySeed('rose_gold', 'r', 4, '#forge:storage_blocks/rose_gold');
    gregifySeed('compressed_iron', 'r', 4, '#forge:storage_blocks/compressed_iron');
    gregifySeed('hop_graphite', 'r', 4, 'immersiveengineering:ingot_hop_graphite');
    gregifySeed('ruby', 'r', 4, '#forge:storage_blocks/ruby');
    gregifySeed('blazing_crystal', 'r', 4, 'powah:blazing_crystal_block');
    gregifySeed('energized_steel', 'r', 4, 'powah:energized_steel_block');
    gregifySeed('soularium', 'r', 4, '#forge:storage_blocks/soularium');
    gregifySeed('dark_steel', 'r', 4, '#forge:storage_blocks/dark_steel');
    gregifySeed('energetic_alloy', 'r', 4, '#forge:storage_blocks/energetic_alloy');
    gregifySeed('refined_glowstone', 'r', 4, 'mekanism:block_refined_glowstone');
    gregifySeed('refined_obsidian', 'r', 4, 'mekanism:block_refined_obsidian');
    gregifySeed('constantan', 'r', 4, '#forge:storage_blocks/constantan');
    gregifySeed('fiery_ingot', 'r', 4, '#forge:storage_blocks/fiery');
    gregifySeed('cobalt', 'r', 4, '#forge:storage_blocks/cobalt');
    gregifySeed('hepatizon', 'r', 4, '#forge:storage_blocks/hepatizon');
    gregifySeed('queens_slime', 'r', 4, '#forge:storage_blocks/queens_slime');
    gregifySeed('nickel', 'r', 4, '#forge:storage_blocks/nickel');
    gregifySeed('invar', 'r', 4, '#forge:storage_blocks/invar');
    gregifySeed('knightmetal', 'r', 4, '#forge:storage_blocks/knightmetal');
    gregifySeed('soulium', 'r', 4, 'mysticalagriculture:soulium_dust');
    gregifySeed('electrum', 'r', 4, '#forge:storage_blocks/electrum');
    gregifySeed('flux_infused_ingot', 'r', 4, 'redstone_arsenal:flux_metal_block');
    gregifySeed('signalum', 'r', 4, '#forge:storage_blocks/signalum');
    gregifySeed('elementium', 'r', 4, '#forge:storage_blocks/elementium');

    // Tier 5
    gregifySeed('netherite', 'r', 5, '#forge:storage_blocks/netherite');
    gregifySeed('uranium', 'r', 5, '#forge:storage_blocks/uranium');
    gregifySeed('osmium', 'r', 5, '#forge:storage_blocks/osmium');
    gregifySeed('fluorite', 'r', 5, '#forge:storage_blocks/fluorite');
    gregifySeed('niotic_crystal', 'r', 5, 'powah:niotic_crystal_block');
    gregifySeed('spirited_crystal', 'r', 5, 'powah:spirited_crystal_block');
    gregifySeed('vibrant_alloy', 'r', 5, '#forge:storage_blocks/vibrant_alloy');
    gregifySeed('end_steel', 'r', 5, '#forge:storage_blocks/end_steel');
    gregifySeed('cyanite', 'r', 5, 'bigreactors:cyanite_block');
    gregifySeed('enderium', 'r', 5, '#forge:storage_blocks/enderium');
    gregifySeed('draconium', 'r', 5, '#forge:storage_blocks/draconium');
    gregifySeed('lumium', 'r', 5, '#forge:storage_blocks/lumium');
    gregifySeed('flux_infused_gem', 'r', 5, 'redstone_arsenal:flux_gem_block');
    gregifySeed('platinum', 'r', 5, '#forge:storage_blocks/platinum');
    gregifySeed('terrasteel', 'r', 5, '#forge:storage_blocks/terrasteel');
    gregifySeed('uraninite', 'r', 5, '#forge:storage_blocks/uraninite');
    gregifySeed('manyullyn', 'r', 5, '#forge:storage_blocks/manyullyn');

    // Tier 6
    gregifySeed('allthemodium', 'r', 6, '#forge:storage_blocks/allthemodium');
    gregifySeed('vibranium', 'r', 6, '#forge:storage_blocks/vibranium');
    gregifySeed('unobtainium', 'r', 6, '#forge:storage_blocks/unobtainium');
    gregifySeed('nether_star', 'r', 6, '#forge:storage_blocks/nether_star');
    gregifySeed('dragon_egg', 'r', 6, 'minecraft:dragon_egg');
    gregifySeed('nitro_crystal', 'r', 6, 'powah:nitro_crystal_block');
    gregifySeed('iridium', 'r', 6, '#forge:storage_blocks/iridium');
    gregifySeed('awakened_draconium', 'r', 6, '#forge:storage_blocks/draconium_awakened');
        
    // Tier 7
    gregifySeed('bedrockium', 'r', 7, '#forge:storage_blocks/bedrockium');

    // Tier 8
    gregifySeed('neutronium', 'r', 8, '#forge:storage_blocks/neutronium');

    // Tier 9
    gregifySeed('infinity', 'r', 9, '#forge:storage_blocks/infinity');

    // --- Mob Seeds ---    
    gregifySeed('chicken', 's', 2, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:chicken"}').weakNBT());
    gregifySeed('cow', 's', 2, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:cow"}').weakNBT());
    gregifySeed('pig', 's', 2, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:pig"}').weakNBT());
    gregifySeed('sheep', 's', 2, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:sheep"}').weakNBT());
    gregifySeed('squid', 's', 2, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:squid"}').weakNBT());
    gregifySeed('fish', 's', 2, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:fish"}').weakNBT());
    gregifySeed('turtle', 's', 2, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:turtle"}').weakNBT());
    gregifySeed('zombie', 's', 3, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:zombie"}').weakNBT());
    gregifySeed('skeleton', 's', 3, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:skeleton"}').weakNBT());
    gregifySeed('spider', 's', 3, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:spider"}').weakNBT());
    gregifySeed('creeper', 's', 3, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:creeper"}').weakNBT());
    gregifySeed('slime', 's', 3, Item.of('mysticalagriculture:soul_jar', '{Souls:12.0d,Type:"mysticalagriculture:slime"}').weakNBT());
    gregifySeed('rabbit', 's', 3, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:rabbit"}').weakNBT());
    gregifySeed('enderman', 's', 4, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:enderman"}').weakNBT());
    gregifySeed('blaze', 's', 4, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:blaze"}').weakNBT());
    gregifySeed('ghast', 's', 4, Item.of('mysticalagriculture:soul_jar', '{Souls:4.0d,Type:"mysticalagriculture:ghast"}').weakNBT());
    gregifySeed('wither_skeleton', 's', 4, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:wither_skeleton"}').weakNBT());
    gregifySeed('blizz', 's', 4, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:blizz"}').weakNBT());
    gregifySeed('blitz', 's', 4, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:blitz"}').weakNBT());
    gregifySeed('basalz', 's', 4, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:basalz"}').weakNBT());

    allthemods.shaped('gtceu:small_bedrockium_dust',[
        'AAA',
        'AAA',
        'AAA'
    ],{
            A: 'mysticalagriculture:bedrockium_essence'
        }
    ).id('gregification:seeds/bedrockium_dust');
    
    allthemods.shaped('gtceu:small_neutronium_dust',[
        'AAA',
        'AAA',
        'AAA'
    ],{
            A: 'mysticalagriculture:neutronium_essence'
        }
    ).id('gregification:seeds/neutronium_dust');

    allthemods.shaped('gtceu:small_infinity_dust',[
        'AAA',
        'AAA',
        'AAA'
    ],{
            A: 'mysticalagriculture:infinity_essence'
        }
    ).id('gregification:seeds/infinity_dust');

});