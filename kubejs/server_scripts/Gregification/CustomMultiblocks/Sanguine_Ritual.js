
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const beeNomad = 'productivebees:spawn_egg_nomad_bee'
	const beeHematophagous = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:hematophagous"}}').strongNBT();
    const beeRegenerative = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:regenerative"}}').strongNBT();	

  
    let sanguineR = allthemods.recipes.gtceu.assembler('gregification:sanguine_ritual_controller')
        .itemInputs(['bloodmagic:altar', '4x bloodmagic:infusedslate', '2x #gtceu:circuits/hv', 'gtceu:hv_machine_hull',])
        .itemOutputs('gtceu:sanguine_ritual')
        .duration(600)
        .EUt(512);
    
    const tiers = {
        1: MV,    //mv
        2: HV,    //hv
        3: EV,   //ev   
        4: IV,   //iv
        5: LuV,   //luv
        6: ZPM   //zpm
    };
    const sanguineRitual = (inputs, fluidIn, output, fluidOut, eu, ID, program) => {

        let generatedId
        if (ID) {
            generatedId=ID            
        }
        else {        
            let outputStr = output.toString();
            let itemName = outputStr.replace(/^\d+x\s+/, '').replace(':', '_').replace(/[^a-z0-9_]/gi, '');
            generatedId = `gregification:${itemName}`;
            
        }
        let duration = Math.max(1, Math.floor(fluidIn / (tiers[eu] * 0.01)));        
        let recipe = allthemods.recipes.gtceu.sanguine_ritual(generatedId)
            .itemInputs(inputs)
            .itemOutputs(output)
            .duration(duration)
            .EUt(tiers[eu]);

        
        recipe.inputFluids(`#forge:blood ${fluidIn}`);

        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
        if (program) {
            recipe.circuit(program);
        }
    };
    // Array of Blood Magic Altar recipes for the Sanguine Ritual multiblock
    // Format: [Tier, LP Cost, Input, Output]
    const sanguineRitualRecipes = [
        // Tier 1
        { tier: 1, lp: 2000, input: 'minecraft:diamond', output: 'bloodmagic:weakbloodorb' },
        { tier: 1, lp: 1000, input: 'gtceu:blank_slate_casing', output: 'bloodmagic:blankslate' },
        { tier: 1, lp: 1000, input: 'minecraft:bucket', output: 'bloodmagic:life_essence_bucket' },
        { tier: 1, lp: 500, input: '#forge:string', output: 'bloodmagic:soulsnare' },

        // Tier 2
        { tier: 2, lp: 5000, input: '#forge:storage_blocks/redstone', output: 'bloodmagic:apprenticebloodorb' },
        { tier: 2, lp: 5000, input: beeNomad, output: beeHematophagous, ID: 'beehematophagous'},
        { tier: 2, lp: 4000, input: 'minecraft:glass_bottle', output: 'bloodmagic:alchemy_flask' },
        { tier: 2, lp: 3000, input: 'minecraft:iron_sword', output: 'bloodmagic:daggerofsacrifice' },
        { tier: 2, lp: 2000, input: 'bloodmagic:blankslate', output: 'bloodmagic:reinforcedslate' },
        { tier: 2, lp: 2000, input: '#forge:altar_runes', output: 'bmaddon:blood_altar_tier_card_2' },

        // Tier 3
        { tier: 3, lp: 1000, input: '#forge:storage_blocks/lapis', output: 'bloodmagic:waterscribetool' },
        { tier: 3, lp: 10000, input: 'bloodmagic:lavacrystal', output: 'bloodmagic:activationcrystalweak' },
        { tier: 3, lp: 1000, input: 'minecraft:magma_cream', output: 'bloodmagic:firescribetool' },
        { tier: 3, lp: 1000, input: 'minecraft:obsidian', output: 'bloodmagic:earthscribetool' },
        { tier: 3, lp: 1000, input: 'minecraft:ghast_tear', output: 'bloodmagic:airscribetool' },
        { tier: 3, lp: 5000, input: 'bloodmagic:reinforcedslate', output: 'bloodmagic:infusedslate' },
        { tier: 3, lp: 25000, input: '#forge:storage_blocks/gold', output: 'bloodmagic:magicianbloodorb' },
        { tier: 3, lp: 5000, input: 'ae2:capacity_card', output: 'bmaddon:blood_altar_parallel_card' },
        { tier: 3, lp: 5000, input: 'bmaddon:blood_altar_tier_card_2', output: 'bmaddon:blood_altar_tier_card_3' },

        // Tier 4
        { tier: 4, lp: 10000, input: 'bloodmagic:teleposerfocus', output: 'bloodmagic:enhancedteleposerfocus' }, 
        { tier: 4, lp: 2000, input: 'minecraft:ender_pearl', output: 'bloodmagic:enhancedteleposerfocus', ID: 'teleposerfocus' },
        { tier: 4, lp: 10000, input: 'bloodmagic:rawdemoniteblock', output: 'bloodmagic:bleedingedge' },
        { tier: 4, lp: 15000, input: 'bloodmagic:infusedslate', output: 'bloodmagic:demonslate' },
        { tier: 4, lp: 2000, input: '#forge:storage_blocks/coal', output: 'bloodmagic:duskscribetool' },
        { tier: 4, lp: 40000, input: 'bloodmagic:weakbloodshard', output: 'bloodmagic:masterbloodorb' },
        { tier: 4, lp: 10000, input: beeHematophagous, output: beeRegenerative, ID: 'beeregenerative'},
        { tier: 4, lp: 10000, input: 'bmaddon:blood_altar_tier_card_3', output: 'bmaddon:blood_altar_tier_card_4' },
        { tier: 4, lp: 10000, input: 'ae2:speed_card', output: 'bmaddon:blood_magic_speed_card' },

        // Tier 5
        { tier: 5, lp: 1000, input: '#forge:dusts/terraria', output: 'gtceu:sanguine_terraria_dust' },
        { tier: 5, lp: 80000, input: '#forge:storage_blocks/hellforged', output: 'bloodmagic:archmagebloodorb' },
        { tier: 5, lp: 30000, input: 'bloodmagic:demonslate', output: 'bloodmagic:etherealslate' },
        { tier: 5, lp: 20000, input: 'bmaddon:blood_altar_tier_card_4', output: 'bmaddon:blood_altar_tier_card_5', ID: 'blood_altar_tier_card_5' },//done
        { tier: 5, lp: 20000, input: 'ae2:molecular_assembler', output: 'bmaddon:blood_altar_assembler', ID: 'blood_altar_assembler' },//done

        // Tier 6
        { tier: 6, lp: 120000, input: '#forge:exquisite_gems/nitro_crystal', output: 'gtceu:technomancy_orb', ID: 'technomancy_orb' },//done
    ];
    sanguineRitualRecipes.forEach(ritual => {
        sanguineRitual(ritual.input, ritual.lp, ritual.output, null, ritual.tier, ritual.ID)
    })
})