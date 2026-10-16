ServerEvents.recipes(allthemods => {
    // --- 1. VOLTAGE MAP ---
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
   
    const addDissolution = (itemsIn, itemOut, fluidIn, fluidOut, eu, duration, customID) => {
        let outputID = '';

        if (customID) {
            outputID = customID;
        }
        else if (itemOut) {
            let raw = typeof itemOut === 'string' ? itemOut : itemOut.getId();
            outputID = raw.replace(/^\d+x\s*/, '').replace(/[^a-z0-9]/gi, '_');
        } else if (fluidOut) {
            let raw = fluidOut.replace(/^\d+x\s*/, '').split(' ')[0];
            outputID = raw.replace(/[^a-z0-9]/gi, '_');
        } else {
            outputID = 'dissolution_' + Math.floor(Math.random() * 1000);
        }

        let voltage = eu || LV;

        let recipe = allthemods.recipes.gtceu.industrial_dissolution_chamber(`gregification:dissolution/${outputID}`)
            .duration(duration)
            .EUt(voltage);

        if (itemsIn) recipe.itemInputs(itemsIn);
        if (fluidIn) recipe.inputFluids(fluidIn);
        if (itemOut) recipe.itemOutputs(itemOut);
        if (fluidOut) recipe.outputFluids(fluidOut);
        //allthemods.remove({ id: `industrialforegoing:dissolution_chamber/${itemOut.split(':')[1]}` });		
    };

    const colors = [
        'white',      // 0
        'orange',     // 1
        'magenta',    // 2
        'light_blue', // 3
        'yellow',     // 4
        'lime',       // 5
        'pink',       // 6
        'gray',       // 7
        'light_gray', // 8
        'cyan',       // 9
        'purple',     // 10
        'blue',       // 11
        'brown',      // 12
        'green',      // 13
        'red',        // 14
        'black'       // 15
    ];
    colors.forEach((color, index) => {
        addDissolution(
            [
                '4x gtceu:tempered_glass',
                `#forge:dyes/${color}`
            ],
            `industrialforegoing:laser_lens${index}`,
            [
                'industrialforegoing:latex 1000',
                'gtceu:sulfuric_acid 1000',
                'gtceu:distilled_water 1000'
            ],
            null,
            EV,
            2000
        );
    });

    // Speed Tier 1 (MV)    
    addDissolution(
        [
            '4x #forge:dusts/redstone',
            '4x pneumaticcraft:glycerol',
            '2x #forge:plates/conductive_alloy',
            '2x #forge:gears/gold',
            '#gtceu:circuits/mv'
        ],
        //'industrialforegoing:speed_addon_1',
        Item.of('industrialforegoing:speed_addon_1', '{TitaniumAugment:{Speed:2.0f}}'),
        [
            'industrialforegoing:latex 1000',
            'gtceu:lubricant 1000'
        ],
        null,
        MV,
        2000,
        'speed_addon_1'
    );

    // Speed Tier 2 (HV)    
    addDissolution(
        [
            'industrialforegoing:speed_addon_1',
            '4x #forge:dusts/redstone',
            '4x pneumaticcraft:glycerol',
            '2x #forge:plates/energetic_alloy',
            '2x #forge:gears/diamond',
            '#gtceu:circuits/hv'
        ],
        //'industrialforegoing:speed_addon_2',
        Item.of('industrialforegoing:speed_addon_2', '{TitaniumAugment:{Speed:3.0f}}'),
        [
            '#forge:pink_slime 1000',
            'gtceu:lubricant 1000'
        ],
        null,
        HV,
        4000,
        'speed_addon_2'
    );

    // Speed Tier 3 (EV)    
    addDissolution(
        [
            'industrialforegoing:speed_addon_2',
            '4x #forge:dusts/redstone',
            '4x pneumaticcraft:glycerol',
            '2x #forge:plates/vibrant_alloy',
            '2x #forge:gears/netherite',
            '#gtceu:circuits/ev'
        ],
        //'mifa:speed_addon_3',
        Item.of('mifa:speed_addon_3', '{TitaniumAugment:{Speed:4.0f}}'),
        [
            'industrialforegoing:ether_gas 1000',
            'gtceu:lubricant 1000'
        ],
        null,
        EV,
        6000,
        'speed_addon_3'
    );

    // Speed Tier 4 (IV)
    addDissolution(
        [
            'mifa:speed_addon_3',
            '4x #forge:dusts/redstone',
            '4x pneumaticcraft:glycerol',
            '2x minecraft:echo_shard',
            '2x #forge:plates/draconium',
            '2x #forge:gears/hop_graphite',
            '#gtceu:circuits/iv'
        ],
        //'mifa:speed_addon_4',
        Item.of('mifa:speed_addon_4', '{TitaniumAugment:{Speed:5.0f}}'),
        [
            'gtceu:saturated_tau 1000',
            'gtceu:lubricant 1000'
        ],
        null,
        IV,
        8000,
        'speed_addon_4'
    );

    // Efficiency Tier 1 (MV)    
    addDissolution(
        [
            '4x #forge:dusts/redstone',
            '2x pneumaticcraft:printed_circuit_board',
            '2x #forge:plates/conductive_alloy',
            '2x #forge:gears/gold',
            '#gtceu:circuits/mv'
        ],
        Item.of('industrialforegoing:efficiency_addon_1', '{TitaniumAugment:{Efficiency:0.9f}}'),
        [
            'industrialforegoing:latex 1000',
            'gtceu:nitrogen 1000'
        ],
        null,
        MV,
        2000,
        'efficiency_addon_1'
    );

    // Efficiency Tier 2 (HV)    
    addDissolution(
        [
            'industrialforegoing:efficiency_addon_1',
            '4x #forge:dusts/redstone',
            '2x pneumaticcraft:printed_circuit_board',
            '2x #forge:plates/energetic_alloy',
            '2x #forge:gears/diamond',
            '#gtceu:circuits/hv'
        ],
        //'industrialforegoing:efficiency_addon_2',
        Item.of('industrialforegoing:efficiency_addon_2', '{TitaniumAugment:{Efficiency:0.8f}}'),
        [
            '#forge:pink_slime 1000',
            'gtceu:nitrogen 1000'
        ],
        null,
        HV,
        4000,
        'efficiency_addon_2'
    );

    // Efficiency Tier 3 (EV) - MIFA    
    addDissolution(
        [
            'industrialforegoing:efficiency_addon_2',
            '4x #forge:dusts/redstone',
            '2x pneumaticcraft:printed_circuit_board',
            '2x #forge:plates/vibrant_alloy',
            '2x #forge:gears/netherite',
            '#gtceu:circuits/ev'
        ],
        //'mifa:efficiency_addon_3',
        Item.of('mifa:efficiency_addon_3', '{TitaniumAugment:{Efficiency:0.7f}}'),
        [
            'industrialforegoing:ether_gas 1000',
            'gtceu:nitrogen 1000'
        ],
        null,
        EV,
        6000,
        'efficiency_addon_3'
    );

    // Efficiency Tier 4 (IV) - MIFA
    addDissolution(
        [
            'mifa:efficiency_addon_3',
            '4x #forge:dusts/redstone',
            '2x pneumaticcraft:printed_circuit_board',
            '2x minecraft:echo_shard',
            '2x #forge:plates/draconium',
            '2x #forge:gears/hop_graphite',
            '#gtceu:circuits/iv'
        ],
        //'mifa:efficiency_addon_4',
        Item.of('mifa:efficiency_addon_4', '{TitaniumAugment:{Efficiency:0.6f}}'),
        [
            'gtceu:saturated_tau 1000',
            'gtceu:nitrogen 1000'
        ],
        null,
        IV,
        8000,
        'efficiency_addon_4'
    );

    // Processing Tier 1 (MV)    
    addDissolution(
        [
            '4x #forge:dusts/redstone',
            '2x #forge:small_gears/compressed_iron',
            '2x #forge:plates/conductive_alloy',
            '2x #forge:gears/gold',
            '#gtceu:circuits/mv'
        ],
        //'industrialforegoing:processing_addon_1',
        Item.of('industrialforegoing:processing_addon_1', '{TitaniumAugment:{Processing:2.0f}}'),
        [
            'industrialforegoing:latex 1000',
            'gtceu:sulfuric_acid 1000'
        ],
        null,
        MV,
        2000,
        'processing_addon_1'
    );

    // Processing Tier 2 (HV)    
    addDissolution(
        [
            'industrialforegoing:processing_addon_1',
            '4x #forge:dusts/redstone',
            '2x #forge:small_gears/signalum',
            '2x #forge:plates/energetic_alloy',
            '2x #forge:gears/diamond',
            '#gtceu:circuits/hv'
        ],
        //'industrialforegoing:processing_addon_2',
        Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}'),
        [
            '#forge:pink_slime 1000',
            'gtceu:sulfuric_acid 1000'
        ],
        null,
        HV,
        4000,
        'processing_addon_2'
    );

    // Processing Tier 3 (EV) - MIFA    
    addDissolution(
        [
            'industrialforegoing:processing_addon_2',
            '4x #forge:dusts/redstone',
            '2x #forge:small_gears/lumium',
            '2x #forge:plates/vibrant_alloy',
            '2x #forge:gears/netherite',
            '#gtceu:circuits/ev'
        ],
        //'mifa:processing_addon_3',
        Item.of('mifa:processing_addon_3', '{TitaniumAugment:{Processing:4.0f}}'),
        [
            'industrialforegoing:ether_gas 1000',
            'gtceu:sulfuric_acid 1000'
        ],
        null,
        EV,
        6000,
        'processing_addon_3'
    );

    // Processing Tier 4 (IV) - MIFA
    addDissolution(
        [
            'mifa:processing_addon_3',
            '4x #forge:dusts/redstone',
            '2x #forge:small_gears/enderium',       // Replaces Furnace
            '2x minecraft:echo_shard',
            '2x #forge:plates/draconium',
            '2x #forge:gears/hop_graphite',
            '#gtceu:circuits/iv'
        ],
        //'mifa:processing_addon_4',
        Item.of('mifa:processing_addon_4', '{TitaniumAugment:{Processing:5.0f}}'),
        [
            'gtceu:saturated_tau 1000',
            'gtceu:sulfuric_acid 1000'
        ],
        null,
        IV,
        8000,
        'processing_addon_4'
    );

    //range upgrades
    const rangeMaterials = [
        'copper',				// Range +1  (MV)
        'iron',					// Range +2  (MV)
        'gold',					// Range +3  (MV)
        'dark_steel',			// Range +4  (HV)
        'energetic_alloy',		// Range +5  (HV)
        'vibrant_alloy',		// Range +6  (HV)
        'end_steel',			// Range +7  (EV)
        'signalum',				// Range +8  (EV)
        'lumium',				// Range +9  (EV)
        'enderium',				// Range +10 (IV)
        'draconium',			// Range +11 (IV)
        'draconium_awakened'	// Range +12 (IV)
    ];
    rangeMaterials.forEach((material, index) => {

        let tierNum = index;
        let outputID = `industrialforegoing:range_addon${tierNum}`;

        // 4. Determine Fluids & Voltage Tier
        let mainFluid = '';
        let voltage = 0;
        let tier = '';
        let duration = 0;

        if (index < 3) {        // Tiers 1-3
            mainFluid = 'industrialforegoing:latex 1000';
            voltage = MV;
            tier = 'MV';
            duration = 2000;
        } else if (index < 6) { // Tiers 4-6
            mainFluid = '#forge:pink_slime 1000';
            voltage = HV;
            tier = 'HV';
            duration = 4000;
        } else if (index < 9) { // Tiers 7-9
            mainFluid = 'industrialforegoing:ether_gas 1000';
            voltage = EV;
            tier = 'EV';
            duration = 6000;
        } else {                // Tiers 10-12
            mainFluid = 'gtceu:saturated_tau 1000';
            voltage = IV;
            tier = 'IV';
            duration = 8000;
        }

        let vLower = tier.toLowerCase();
        let customRecipeID = `range_addon_${index}`;

        // --- THE MAGIC LINE ---
        // Uses the loop index to create: {TitaniumAugment:{Range:0.0f}}, {Range:1.0f}, etc.
        let dynamicNBT = `{TitaniumAugment:{Range:${index}.0f}}`;

        addDissolution(
            [
                `4x #forge:plates/${material}`,
                `1x gtceu:${vLower}_field_generator`,
                `2x #gtceu:circuits/${vLower}`,
                '2x #forge:dusts/redstone'
            ],
            Item.of(outputID, dynamicNBT),
            [
                mainFluid,
                'gtceu:distilled_water 1000',
                'gtceu:polyethylene 1000'
            ],
            null,
            voltage,
            duration,
            customRecipeID
        );
    });

    //pink slime
    addDissolution(
        'minecraft:glass_pane',
        'industrialforegoing:pink_slime',
        'industrialforegoing:pink_slime 300',
        null,
        HV,
        200
    );

    //experience
    addDissolution(
        'minecraft:glass_bottle',
        'minecraft:experience_bottle',
        '#forge:experience 250',
        null,
        MV,
        100
    );

    //mycelial reactor
    addDissolution(
        [
            'industrialforegoing:machine_frame_supreme',
            '4x #forge:plates/netherite',
            '4x #forge:gears/vibrant_alloy',
            '4x #forge:plastic',
            '2x gtceu:iv_field_generator',
            '#gtceu:circuits/iv'
        ],
        'industrialforegoing:mycelial_reactor',
        [
            'industrialforegoing:ether_gas 1000',
            'gtceu:polyethylene 2000' // High Plastic Cost
        ],
        null,
        IV,
        1200
    );

    // Infinity Drill    
    addDissolution(
        [
            'gtceu:tungsten_carbide_drill_head',
            '4x #forge:plates/draconium',
            '2x #forge:gears/diamond',
            '2x #forge:plastic',
            '2x #gtceu:circuits/iv'
        ],
        //'industrialforegoing:infinity_drill',
        Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'),
        'industrialforegoing:ether_gas 1000',
        null,
        IV,
        6000,
        'infinity_drill'
    );

    // Infinity Saw    
    addDissolution(
        [
            'gtceu:tungsten_carbide_buzz_saw_blade',
            '4x #forge:plates/draconium',
            '2x #forge:gears/diamond',
            '2x #forge:plastic',
            '2x #gtceu:circuits/iv'
        ],
        //'industrialforegoing:infinity_saw',
        Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'),
        'industrialforegoing:ether_gas 1000',
        null,
        IV,
        6000,
        'infinity_saw_blade'
    );

    // Infinity Hammer    
    addDissolution(
        [
            '4x #forge:plates/tungsten_carbide',
            '4x #forge:plates/draconium',
            '2x #forge:gears/diamond',
            '2x #forge:plastic',
            '2x #gtceu:circuits/iv'
        ],
        //'industrialforegoing:infinity_hammer',
        Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'),
        'industrialforegoing:ether_gas 1000',
        null,
        IV,
        6000,
        'infinity_hammer'
    );

    // Infinity Trident    
    addDissolution(
        [
            'minecraft:trident',
            '4x #forge:plates/draconium',
            '2x #forge:gears/diamond',
            '2x #forge:plastic',
            '2x #gtceu:circuits/iv'
        ],
        //'industrialforegoing:infinity_trident',
        Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"POOR",Special:0b}'),
        'industrialforegoing:ether_gas 1000',
        null,
        IV,
        6000,
        'infinity_trident'
    );

    // Infinity Backpack    
    addDissolution(
        [
            'industrialforegoing:supreme_black_hole_unit',
            '4x #forge:plates/draconium',
            '2x #forge:gears/diamond',
            '2x #forge:plastic',
            '2x #gtceu:circuits/iv'
        ],
        //'industrialforegoing:infinity_backpack',
        Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:0L,Selected:"POOR",Special:0b}'),
        'industrialforegoing:ether_gas 1000',
        null,
        IV,
        6000,
        'infinity_backpack'
    );

    // Infinity Launcher    
    addDissolution(
        [
            '4x #forge:gears/tungsten_carbide',
            '4x #forge:plates/draconium',
            '2x #forge:gears/diamond',
            '2x #forge:plastic',
            '2x #gtceu:circuits/iv'
        ],
        //'industrialforegoing:infinity_launcher',
        Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"POOR",Special:0b}'),
        'industrialforegoing:ether_gas 1000',
        null,
        IV,
        6000,
        'infinity_launcher'
    );

    // Infinity Nuke (The Big One)    
    addDissolution(
        [
            '64x minecraft:tnt',               // Explosion Logic
            '4x #forge:frames/draconium',
            '2x #forge:rods/hop_graphite',
            '2x #gtceu:circuits/iv'
        ],
        //'industrialforegoing:infinity_nuke',
        Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'),
        [
            'industrialforegoing:ether_gas 2000',
            'gtceu:nitrobenzene 1000'            // Explosive Fluid
        ],
        null,
        IV,
        8000,
        'infinity_nuke'
    );

    //mechanical dirt
    addDissolution(
        [
            '4x minecraft:dirt',
            '4x minecraft:rotten_flesh',
            '10x #forge:fertilizer',
            '10x thermal:phytogro'
        ],
        'industrialforegoing:mechanical_dirt',
        ['industrialforegoing:sludge 1000',
            'industrialforegoing:meat 1000'],
        null,
        HV,
        200
    );

    //pink slime ingot
    addDissolution(
        [
            '2x #forge:ingots/iron',
            '2x #forge:ingots/gold',
            '1x #forge:slimeballs'
        ],
        'industrialforegoing:pink_slime_ingot',
        '#forge:pink_slime 1000',
        null,
        HV,
        100
    );

    //simple machine frame
    addDissolution(
        [
            '#forge:frames/plastic',
            '2x #forge:plates/energetic_alloy',
            '2x #forge:gears/diamond',
            '2x #forge:rods/signalum',
            '#gtceu:circuits/hv'

        ],
        'industrialforegoing:machine_frame_simple',
        '#forge:pink_slime 1000',
        null,
        HV,
        600
    );

    //advanced machine frame
    addDissolution(
        [
            '#forge:frames/plastic',
            '2x #forge:plates/vibrant_alloy',
            '2x #forge:gears/netherite',
            '2x #forge:rods/lumium',
            '#gtceu:circuits/ev'
        ],
        'industrialforegoing:machine_frame_advanced',
        'industrialforegoing:ether_gas 1000',      // Fluid: Pink Slime
        null,
        EV,
        800
    );

    //supreme machine frame
    addDissolution(
        [
            '#forge:frames/plastic',
            '2x minecraft:echo_shard',             // MATCH: Speed T4 Special
            '2x #forge:plates/draconium',          // MATCH: Speed T4 Material
            '2x #forge:gears/hop_graphite',        // MATCH: Speed T4 Gear
            '2x #forge:rods/enderium',
            '#gtceu:circuits/iv'
        ],
        'industrialforegoing:machine_frame_supreme',
        'gtceu:saturated_tau 1000',       // Fluid: Ether Gas
        null,
        IV,
        1000
    );
});