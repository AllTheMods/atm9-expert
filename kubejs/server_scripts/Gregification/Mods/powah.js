// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
	const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    //dielectric rod
    allthemods.shaped('8x powah:dielectric_rod', [
        'PBP', 
        'PBP', 
        'PBP'  
    ], {
        P: 'powah:dielectric_paste',
        B: '#forge:plates/end_steel'
    });
	
	//dielectric rod
    allthemods.shaped('8x powah:dielectric_rod_horizontal', [
        'PPP', 
        'BBB', 
        'PPP'  
    ], {
        P: 'powah:dielectric_paste',
        B: '#forge:plates/end_steel'
    });
	
    //industrial energizer
	allthemods.shaped('gtceu:industrial_energizer', [
		'WCW',
		'OHO',
		'WCW'
	], {
		H: 'gtceu:iv_machine_hull',
        O: 'gtceu:iv_voltage_coil',
        C: '#gtceu:circuits/iv',
        W: 'gtceu:enderium_quadruple_wire'
	}).id('gregification:powah/industrial_energizer')

    const tiers = ['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro'];
    const euTiers = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm'];
    const powahMats = ['iron','steel','energized_steel','blazing_crystal','niotic_crystal','spirited_crystal','nitro_crystal']
    const machinePlates = ['steel','aluminum','stainless_steel','titanium','tungsten_steel','rhodium_plated_palladium','naquadah_alloy']
    const capacitors = ['powah:capacitor_basic', 'powah:capacitor_basic_large', 'powah:capacitor_hardened', 'powah:capacitor_blazing', 'powah:capacitor_niotic', 'powah:capacitor_spirited', 'powah:capacitor_nitro'];
    const foils = ['polyethylene', 'polyethylene','polytetrafluoroethylene','polytetrafluoroethylene','polybenzimidazole','polyphenylene_sulfide', 'polyphenylene_sulfide']
    const rubbers = ['rubber', 'rubber', 'rubber', 'rubber', 'silicone_rubber', 'styrene_butadiene_rubber', 'styrene_butadiene_rubber'];
    const furnaces = ['copper', 'iron', 'silver', 'gold','diamond','emerald', 'obsidian']    
        
    tiers.forEach((tier,index) => {
        const euTier = euTiers[index];
        const capacitor = capacitors[index];
        
        //ender cell
        let previous = index == 0 ? `gtceu:${euTier}_machine_hull` : `powah:ender_cell_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:ender_cell_${tier}`, [
            'PCO',
            'KHK',
            'OTP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,
            C: 'powah:ender_core',
            K: capacitor,
            T: `#gtceu:circuits/${euTier}`,
            H: `gtceu:${euTier}_machine_hull`
        }).id(`gregification:powah/ender_cell_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:ender_cell_${tier}`, [
            'PCO',
            'KHK',
            'OTP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,
            C: 'powah:ender_core',
            K: capacitor,
            T: `#gtceu:circuits/${euTier}`,
            H: previous
        }).id(`gregification:powah/ender_cell_${tier}_2`);

        //ender gate
        previous = index == 0 ? '#forge:plates/copper' : `powah:ender_gate_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:ender_gate_${tier}`, [
            'PCO',
            'TSF',
            'OAP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,
            C: 'powah:ender_core',
            S: 'powah:dielectric_casing',
            F: `gtceu:${euTier}_field_generator`,
            T: `#gtceu:circuits/${euTier}`,            
            A: `powah:energy_cable_${tier}`
        }).id(`gregification:powah/ender_gate_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:ender_gate_${tier}`, [
            'PCO',
            'TST',
            'OAP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,
            C: 'powah:ender_core',
            S: previous,            
            T: `#gtceu:circuits/${euTier}`,
            A: `powah:energy_cable_${tier}`
        }).id(`gregification:powah/ender_gate_${tier}_2`);

        //cable
        previous = index == 0 ?  '#forge:plates/copper': `powah:energy_cable_${tiers[index-1]}`;
                
        
        //Standard tier recipe
        allthemods.shaped(`6x powah:energy_cable_${tier}`, [
            'DFD',
            'OKO',
            'DFD'
        ], {
            D: 'powah:dielectric_rod_horizontal',
            K: capacitor,            
            O: `#forge:plates/${rubbers[index]}`,
            F: `#forge:foils/${foils[index]}`
        }).id(`gregification:powah/energy_cable_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`6x powah:energy_cable_${tier}`, [
            'DFD',
            'OKO',
            'DFD'
        ], {
            D: 'powah:dielectric_rod_horizontal',
            K: capacitor,            
            O: previous,
            F: `#forge:foils/${foils[index]}`,            
        }).id(`gregification:powah/energy_cable_${tier}_2`);

        //energy cell
        previous = index == 0 ? `gtceu:${euTier}_battery_buffer_4x` : `powah:energy_cell_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:energy_cell_${tier}`, [
            'PKO',
            'THT',
            'OKP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            K: capacitor,
            T: `#gtceu:circuits/${euTier}`,
            H: `gtceu:${euTier}_machine_hull`
        }).id(`gregification:powah/energy_cell_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:energy_cell_${tier}`, [
            'PKO',
            'THT',
            'OKP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,
            K: capacitor,
            T: `#gtceu:circuits/${euTier}`,
            H: previous
        }).id(`gregification:powah/energy_cell_${tier}_2`);

        //furnator
        previous = index == 0 ? `powah:dielectric_casing` : `powah:furnator_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:furnator_${tier}`, [
            'PTO',
            'KHK',
            'OFP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,            
            H: `gtceu:${euTier}_machine_hull`,
            F: `#forge:furnaces/${furnaces[index]}`
        }).id(`gregification:powah/furnator_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:furnator_${tier}`, [
            'PTO',
            'KHK',
            'OFP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,            
            H: previous,
            F: `#forge:furnaces/${furnaces[index]}`
        }).id(`gregification:powah/furnator_${tier}_2`);

        //magmator
        previous = index == 0 ? `powah:dielectric_casing` : `powah:magmator_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:magmator_${tier}`, [
            'PFO',
            'KHK',
            'OTP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,            
            H: `gtceu:${euTier}_machine_hull`,
            F: `#forge:furnaces/${furnaces[index]}`
        }).id(`gregification:powah/magmator_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:magmator_${tier}`, [
            'PFO',
            'KHK',
            'OTP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,            
            H: previous,
            F: `#forge:furnaces/${furnaces[index]}`
        }).id(`gregification:powah/magmator_${tier}_2`);

        //thermo generator
        previous = index == 0 ? `powah:dielectric_casing` : `powah:thermo_generator_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:thermo_generator_${tier}`, [
            'PTO',
            'KHK',
            'EFE'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,            
            H: `gtceu:${euTier}_machine_hull`,
            E: 'powah:thermoelectric_plate',
            F: `#forge:furnaces/${furnaces[index]}`
        }).id(`gregification:powah/thermo_generator_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:thermo_generator_${tier}`, [
            'PTO',
            'KHK',
            'EFE'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,            
            H: previous,
            E: 'powah:thermoelectric_plate',
            F: `#forge:furnaces/${furnaces[index]}`
        }).id(`gregification:powah/thermo_generator_${tier}_2`);

        //solar panel
        previous = index == 0 ? 'powah:photoelectric_pane' : `powah:solar_panel_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:solar_panel_${tier}`, [
            'EEE',
            'KHT',
            'POP'
        ], {
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,            
            H: `gtceu:${euTier}_machine_hull`,
            E: previous,            
        }).id(`gregification:powah/solar_panel_${tier}`);   
        
        
        //reactor
        previous = index == 0 ? `powah:dielectric_casing` : `powah:reactor_${tiers[index-1]}`;
        
        //Standard tier recipe
        allthemods.shaped(`4x powah:reactor_${tier}`, [
            'RKR',
            'THT',
            'RKR',
        ], {
            R: previous,
            H: `gtceu:${euTier}_machine_hull`,
            K: capacitor,
            T: `#gtceu:circuits/${euTier}`            
        }).id(`gregification:powah/reactor_${tier}`);


        //player transmitter
        previous = index == 0 ? `powah:dielectric_casing` : `powah:player_transmitter_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:player_transmitter_${tier}`, [
            'PFO',
            'THT',
            'OKP'
        ], {
            F: `gtceu:${euTier}_field_generator`,
            H: `gtceu:${euTier}_machine_hull`,
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,                        
        }).id(`gregification:powah/player_transmitter_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:player_transmitter_${tier}`, [
            'PFO',
            'THT',
            'OKP'
        ], {
            F: `gtceu:${euTier}_field_generator`,
            H: previous,
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,
            K: capacitor,                        
            T: `#gtceu:circuits/${euTier}`,            
            
        }).id(`gregification:powah/player_transmitter_${tier}_2`);

        //energy hopper
        previous = index == 0 ? `gtceu:${euTier}_battery_buffer_4x` : `powah:energy_hopper_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:energy_hopper_${tier}`, [
            'PKO',
            'THT',
            'OBP'
        ], {
            B: `gtceu:${euTier}_battery_buffer_4x`,
            H: `gtceu:${euTier}_machine_hull`,
            K: capacitor,                                                
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            T: `#gtceu:circuits/${euTier}`,                        
        }).id(`gregification:powah/energy_hopper_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:energy_hopper_${tier}`, [
            'PKO',
            'THT',
            'OBP'
        ], {
            B: previous,
            H: `gtceu:${euTier}_machine_hull`,
            K: capacitor,                                                
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            T: `#gtceu:circuits/${euTier}`,                        
        }).id(`gregification:powah/energy_hopper_${tier}_2`);


        //energy discharger
        previous = index == 0 ? `gtceu:${euTier}_battery_buffer_4x` : `powah:energy_discharger_${tiers[index-1]}`;
        //Standard tier recipe
        allthemods.shaped(`powah:energy_discharger_${tier}`, [
            'PBO',
            'THT',
            'OKP'
        ], {
            B: `gtceu:${euTier}_battery_buffer_4x`,
            H: `gtceu:${euTier}_machine_hull`,
            K: capacitor,                                                
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            T: `#gtceu:circuits/${euTier}`,                        
        }).id(`gregification:powah/energy_discharger_${tier}`);

        //previous tier recipe        
        allthemods.shaped(`powah:energy_discharger_${tier}`, [
            'PBO',
            'THT',
            'OKP'
        ], {
            B: previous,
            H: `gtceu:${euTier}_machine_hull`,
            K: capacitor,                                                
            P: `#forge:plates/${powahMats[index]}`,
            O: `#forge:plates/${machinePlates[index]}`,            
            T: `#gtceu:circuits/${euTier}`,                        
        }).id(`gregification:powah/energy_discharger_${tier}_2`);


    });

    


});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
