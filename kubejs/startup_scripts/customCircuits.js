// Priority: 0
global.circuitMasterTiers = ['zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']

global.circuitStages = [
    { id: 'processor', name: 'Processor', idSuffix: '', back: 3 },
    { id: 'assembly', name: 'Processor Assembly', idSuffix: '_assembly', back: 2 },
    { id: 'computer', name: 'Supercomputer', idSuffix: '_computer', back: 1 },
    { id: 'mainframe', name: 'Mainframe', idSuffix: '_mainframe', back: 0 }
]


global.circuitFamilies = [
    { id: 'photonic', name: 'Photonic', tier: 'uev' },
    { id: 'bioengineered', name: 'Bioengineered', tier: 'uiv' },
    { id: 'chaotic', name: 'Chaotic', tier: 'uxv' },
    { id: 'naquadric', name: 'Naquadric', tier: 'opv' },
    { id: 'antimatter', name: 'Antimatter', tier: 'max' }
]

global.circuitSocs = [
    { id: 'wetware', name: 'Wetware', tier: 'zpm', madeIn: 'uhv' },
    { id: 'bioware', name: 'Bioware', tier: 'uv', madeIn: 'uev' },
    { id: 'optical', name: 'Optical', tier: 'uhv', madeIn: 'uiv' },
    { id: 'photonic', name: 'Photonic', tier: 'uev', madeIn: 'uxv' },
    { id: 'bioengineered', name: 'Bioengineered', tier: 'uiv', madeIn: 'opv' },
    { id: 'chaotic', name: 'Chaotic', tier: 'uxv', madeIn: 'max' },
    { id: 'naquadric', name: 'Naquadric', tier: 'opv', madeIn: 'max', exotic: true },
    { id: 'antimatter', name: 'Antimatter', tier: 'max', madeIn: 'max', exotic: true }
]

global.circuitItemName = (family, stage) => `${family.id}_processor${stage.idSuffix}`


global.circuitTagTier = (family, stage) => {
    const idx = global.circuitMasterTiers.indexOf(family.tier) - stage.back
    return global.circuitMasterTiers[Math.max(0, idx)]
}

StartupEvents.registry('item', allthemods => {


    const tierCodes = {
        luv: '5LuV', zpm: '7ZPM', uv: 'eUV',
        uhv: '4UHV', uev: '9UEV', uiv: 'bUIV',
        uxv: 'dUXV', opv: 'fOpV', max: 'fMAX'
    }
    const tierLabel = id => `§${tierCodes[id]}§7`


    global.circuitFamilies.forEach(family => {
        global.circuitStages.forEach(stage => {
            const name = global.circuitItemName(family, stage)
            allthemods.create(`gtceu:${name}`)
                .displayName(`${family.name} ${stage.name}`)
                .tooltip(`${tierLabel(global.circuitTagTier(family, stage))}-Tier Circuit`)
                .tooltip(`Assembled in ${tierLabel(family.tier)} machines`)
        })
    })

    // SoCs: named after the circuit family of their tier, textures are
    // kubejs/assets/gtceu/textures/item/<id>_soc.png (auto-resolved, no .texture() call)
    global.circuitSocs.forEach(soc => {
        const item = allthemods.create(`gtceu:${soc.id}_soc`)
            .displayName(`${soc.name} SoC`)
            .tooltip(`${tierLabel(soc.tier)}-Tier SoC`)
            .tooltip(`Assembled in ${tierLabel(soc.madeIn)} machines`)
        if (soc.exotic) item.tooltip('§5Requires exotic materials')

        allthemods.create(`gtceu:${soc.id}_soc_wafer`)            
            .displayName(`${soc.name} SoC Wafer`)            
            .tooltip(`${tierLabel(soc.tier)}-Tier SoC Wafer`)
            .tooltip(`Assembled in ${tierLabel(soc.madeIn)} machines`)            
    })

    // Voltage coils keep their old placeholder names and colours
    const coilTiers = [
        //{ id: 'uhv', name: 'Neutronium', color: 0xC7C7C7 },
        { id: 'uev', name: 'Photonic', color: 0x4ECAB1 },
        { id: 'uiv', name: 'Bioengineered', color: 0xFFC94D },
        { id: 'uxv', name: 'Chaotic', color: 0xCF566A },
        { id: 'opv', name: 'Naquadric', color: 0xE853DC },
        { id: 'max', name: 'Antimatter', color: 0xFFFFFF }
    ]
    
    coilTiers.forEach(tier => {
        allthemods.create(`gtceu:pics/coils/${tier.id}_voltage_coil`)            
            .displayName(`${tier.name} Voltage Coil`)
            .tooltip(`${tierLabel(tier.id)}-Tier Voltage Coil`)

        allthemods.create(`gtceu:pics/chips/${tier.id}_pic_chip`)
            .displayName(`${tier.name} Chip`)
            .tooltip(`${tierLabel(tier.id)}-Tier Power IC`)

        allthemods.create(`gtceu:pics/wafers/${tier.id}_pic_wafer`)
            .displayName(`${tier.name} Wafer`)
            .tooltip(`${tierLabel(tier.id)}-Tier Power IC Wafer`)
    })

    allthemods.create(`gtceu:pics/coils/uhv_voltage_coil`)            
            .displayName(`Neutronium Voltage Coil`)
            .tooltip(`${tierLabel('uhv')}-Tier Voltage Coil`)
    
    


    //individual boules and wafers for various materials

    allthemods.create('gtceu:yttrium_aluminium_garnet_boule')
        .displayName('Yttrium Aluminium Garnet Raw Circuit')
        .tooltip('Yttrium Aluminium Garnet Boule')
        .rarity('ie_masterwork')
        .texture('gtceu:item/neutronium_boule')
        .color(0, 0xE8E8F0)

    allthemods.create('gtceu:neodymium_doped_yttrium_aluminium_garnet_boule')
        .displayName('Neodymium Doped Yttrium Aluminium Garnet Raw Circuit')
        .tooltip('Neodymium Doped Yttrium Aluminium Garnet Boule')
        .rarity('ie_masterwork')
        .texture('gtceu:item/neutronium_boule')
        .color(0, 0xC9A8E0)

    allthemods.create('gtceu:praseodymium_doped_yttrium_aluminium_garnet_boule')
        .displayName('Praseodymium Doped Yttrium Aluminium Garnet Raw Circuit')
        .tooltip('Praseodymium Doped Yttrium Aluminium Garnet Boule')
        .rarity('ie_masterwork')
        .texture('gtceu:item/neutronium_boule')
        .color(0, 0xC8D46A)

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

    allthemods.create('gtceu:selenium_rectifier')
        .texture('gtceu:item/selenium_rectifier')
        .displayName('Selenium Rectifier')

    allthemods.create('gtceu:polishing_wheel')
        .texture('gtceu:item/polishing_wheel')
        .displayName('Polishing Wheel')

    allthemods.create(`gtceu:eternium_grinding_head`)
        .texture('gtceu:item/eternium_grinding_head')
})