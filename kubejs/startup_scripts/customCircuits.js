// Priority: 0

StartupEvents.registry('item', allthemods => {
    function getTierCode(id) {
        const codes = {
            'zpm': '7ZPM', 'uv': 'eUV', 'uhv': '4UHV', 
            'uev': '9UEV', 'uiv': 'bUIV', 'uxv': 'dUXV', 
            'opv': 'fOpV', 'max': 'fMAX'
        };
        return codes[id] || '7';
    }
    // Full list for math (ZPM is index 0)
    const masterTiers = ['zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max'];
    
    allthemods.create('gtceu:selenium_rectifier')
        .texture('gtceu:item/selenium_rectifier')
        .displayName('Selenium Rectifier')

    allthemods.create('gtceu:polishing_wheel')
        .texture('gtceu:item/polishing_wheel')
        .displayName('Polishing Wheel')

    allthemods.create(`gtceu:eternium_grinding_head`)
            .texture('gtceu:item/eternium_grinding_head')

    const tiers = [
        { id: 'uhv', name: 'Neutronium', color: 0xC7C7C7, baseIdx: 2 },    
        { id: 'uev', name: 'Eternal', color: 0x4ECAB1, baseIdx: 3 },    
        { id: 'uiv', name: 'Cosmic', color: 0xFFC94D, baseIdx: 4 },     
        { id: 'uxv', name: 'Antimatter', color: 0xCF566A, baseIdx: 5 }, 
        { id: 'opv', name: 'Singularity', color: 0xE853DC, baseIdx: 6 }, 
        { id: 'max', name: 'Absolute', color: 0xFFFFFF, baseIdx: 7 }     
    ];

    const types = [
        { id: 'processor', suffix: 'Processor', file: 'wetware_processor', sub: 3 }, // Tier - 3
        { id: 'assembly', suffix: 'Assembly', file: 'wetware_processor_assembly', sub: 2 }, // Tier - 2
        { id: 'computer', suffix: 'Supercomputer', file: 'wetware_processor_computer', sub: 1 }, // Tier - 1
        { id: 'mainframe', suffix: 'Mainframe', file: 'wetware_processor_mainframe', sub: 0 } // Tier - 0
    ];

    const grade = ['First','Second','Third','Fourth']

    tiers.forEach(tier => {
        
        let mainframeIndex = Math.max(0, tier.baseIdx); 
        let mainframeTierId = masterTiers[mainframeIndex];
        
        types.forEach(type => {
            // Logic: UEV (3) - Processor (3) = ZPM (0)
            if (tier.id != 'uhv'){
                let effectiveIndex = Math.max(0, tier.baseIdx - type.sub);
                let effectiveTierId = masterTiers[effectiveIndex];

                allthemods.create(`gtceu:${tier.id}_${type.id}`)
                    .displayName(`${tier.name} ${type.suffix}`)                    
                    .tooltip(`${grade[type.sub]} §${getTierCode(effectiveTierId)}§7-Tier Circuit`)
                    .texture(`gtceu:item/${type.file}`)
                    .color(0, tier.color)                
            }
        })
        
        // Components (Boules/Wafers/SoCs) usually match the Mainframe tier
        allthemods.create(`gtceu:${tier.id}_soc`)
            .texture('gtceu:item/crystal_soc')
            .color(0, tier.color)
            .displayName(`${tier.name} SoC Chip`)
            .tooltip(`§${getTierCode(mainframeTierId)}§7-Tier SoC Chip`)        

        allthemods.create(`gtceu:${tier.id}_voltage_coil`)
            .texture('gtceu:item/ulv_voltage_coil')
            .color(0, tier.color)
            .displayName(`${tier.name} Voltage Coil`)
            .tooltip(`§${getTierCode(mainframeTierId)}§7-Tier Voltage Coil`)
    })

    
    allthemods.create('gtceu:cubic_zirconia_boule')
        .displayName('Zirconia Raw Circuit')
        .tooltip('Cubic Zirconia Boule')
        .rarity('ie_masterwork')
        .texture('gtceu:item/neutronium_boule')
        .color(0, 0xD8ECF2)

    allthemods.create(`gtceu:cubic_zirconia_wafer`)
        .texture('gtceu:item/neutronium_wafer')
        .color(0, 0xD8ECF2)
        .displayName(`Cubic Zirconia Wafer`)
        .tooltip(`Cubic Zirconia Raw Circuit`);

    allthemods.create('gtceu:bismuth_telluride_boule')
        .displayName('Bismuth Telluride Raw Circuit')
        .tooltip('Bismuth Telluride Boule')
        .rarity('ie_masterwork')
        .texture('gtceu:item/neutronium_boule')
        .color(0, 0x4B4F5C)

    allthemods.create(`gtceu:bismuth_telluride_wafer`)
        .texture('gtceu:item/neutronium_wafer')
        .color(0, 0x4B4F5C)
        .displayName(`Bismuth Telluride Wafer`)
        .tooltip(`Bismuth Telluride Raw Circuit`);

    allthemods.create(`gtceu:empowered_boule`)
        .texture('gtceu:item/neutronium_boule')
        .color(0, 0xC7C7C7)
        .displayName(`Empowered Boule`)
        .tooltip(`Empowered Raw Circuit`);

    allthemods.create(`gtceu:empowered_wafer`)
        .texture('gtceu:item/neutronium_wafer')
        .color(0, 0xC7C7C7)
        .displayName(`Empowered Wafer`)
        .tooltip(`Empowered Raw Circuit`);
    
    allthemods.create(`gtceu:empowered_ram_wafer`)
        .texture('gtceu:item/ram_wafer')
        .color(0, 0xC7C7C7)
        .displayName(`Empowered Ram Wafer`)
        .tooltip(`Empowered Raw Memory`);
    
    allthemods.create(`gtceu:empowered_ram_chip`)
        .texture('gtceu:item/ram_chip')
        .color(0, 0xC7C7C7)
        .displayName(`Empowered Ram Chip`)
        .tooltip(`Empowered Random Access Memory`);

    allthemods.create('gtceu:germanium_boule')
        .displayName('Germanium Boule')
        // Using the existing GT silicon boule texture as a base
        .texture('gtceu:item/neutronium_boule')
        .color(0, 0x333333) // Tints the boule to Germanium's dark grey/black
        .tooltip('Germanium doped boule');

    allthemods.create('gtceu:germanium_wafer')
        .displayName('Germanium Wafer')
        .texture('gtceu:item/neutronium_wafer')
        .color(0, 0x333333) // Tints the wafer to the same dark tone
        .tooltip('Germanium doped wafer');

    allthemods.create('gtceu:germanium_diode_wafer')
        .displayName('Germanium Diode Wafer')
        .texture('gtceu:item/ilc_chip')
        .color(0, 0x333333) // Tints the wafer to the same dark tone
        .tooltip('Germanium doped wafer');    

    allthemods.create('gtceu:germanium_diode')
        .texture('kubejs:item/germanium_diode') 
        .displayName('Germanium Diode')
        .tooltip('Advanced semiconductor component')

    allthemods.create('gtceu:atomic_boule')
        .displayName('Atomic Boule')
        // Using the existing GT silicon boule texture as a base
        .texture('gtceu:item/neutronium_boule')
        .color(0, 0xFFD700) // Tints the boule to Germanium's dark grey/black
        .tooltip('Atomic Clock Boule');

    allthemods.create('gtceu:atomic_wafer')
        .displayName('Atomic Wafer')
        .texture('gtceu:item/neutronium_wafer')
        .color(0, 0xFFD700) // Tints the wafer to the same dark tone
        .tooltip('Atomic Clock Wafer');

    allthemods.create('gtceu:atomic_clock_wafer')
        .displayName('Atomic Clock IC Wafer')
        .texture('gtceu:item/ilc_chip')
        .color(0, 0xFFD700) // Tints the wafer to the same dark tone
        .tooltip('Atomic Clock IC Wafer');    

    allthemods.create('gtceu:atomic_clock')
        .displayName('Atomic Clock')
        .texture('gtceu:item/cpu_chip')
        .color(0, 0xFFD700) // Tints the wafer to the same dark tone
        .tooltip('Atomic Clock IC');
})