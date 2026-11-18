// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


JEIEvents.subtypes(allthemods => {
    allthemods.useNBTKey('envirocore:amplification_modifier', 'tier')
    allthemods.useNBTKey('envirocore:bandwidth_modifier', 'tier')
    allthemods.useNBTKey('envirocore:electrostatic_modifier', 'tier')
    allthemods.useNBTKey('envirocore:frequency_modifier', 'tier')
    allthemods.useNBTKey('envirocore:piezo_modifier', 'tier')
    allthemods.useNBTKey('envirocore:radiant_modifier', 'tier')
    allthemods.useNBTKey('envirocore:fe_input', 'tier')
    allthemods.useNBTKey('envirocore:fe_output', 'tier')
    allthemods.useNBT('envirocore:dimensional_modifier')
    allthemods.useNBT('envirocore:interdimensional_modifier')
    allthemods.useNBTKey('envirocore:lens', 'config')
    allthemods.useNBTKey('envirocore:crystal_lens', 'config')
})

JEIEvents.hideItems(allthemods => {
    allthemods.hide([
        'envirocore:assembler',
        'envirocore:null_io',
        'envirocore:clear_structure_panel',
        'envirocore:lens_grinder',
        'envirocore:item_input',
        'envirocore:thermal_modifier',
        'envirocore:rgb_controller',
        'envirocore:flash_memory'
    ])

    const plainVariants = [
        'envirocore:amplification_modifier',
        'envirocore:bandwidth_modifier',
        'envirocore:electrostatic_modifier',
        'envirocore:frequency_modifier',
        'envirocore:piezo_modifier',
        'envirocore:radiant_modifier',
        'envirocore:dimensional_modifier',
        'envirocore:interdimensional_modifier',
        'envirocore:fe_input',
        'envirocore:fe_output',
        'envirocore:lens',
        'envirocore:crystal_lens'
    ]

    allthemods.hide({ mod: 'envirocore', custom: (stack) => {
        return stack.nbt == null && plainVariants.indexOf(String(stack.id)) >= 0
    } })
})

JEIEvents.removeCategories(allthemods => {
    allthemods.remove('envirocore:lens_grinder')
})

JEIEvents.addItems(allthemods => {
    const modifiers = [
        { item: 'envirocore:amplification_modifier', nbt: [
            '{tier:1,attributes:{"envirocore:energy_cost_multiplier":1.0,"envirocore:amplification":0.2}}',
            '{tier:2,attributes:{"envirocore:energy_cost_multiplier":1.1,"envirocore:amplification":0.4}}',
            '{tier:3,attributes:{"envirocore:energy_cost_multiplier":1.2,"envirocore:amplification":0.6}}',
            '{tier:4,attributes:{"envirocore:energy_cost_multiplier":1.3,"envirocore:amplification":0.8}}',
            '{tier:5,attributes:{"envirocore:energy_cost_multiplier":1.4,"envirocore:amplification":1.0}}',
            '{tier:6,attributes:{"envirocore:energy_cost_multiplier":1.5,"envirocore:amplification":1.2}}',
            '{tier:7,attributes:{"envirocore:energy_cost_multiplier":1.6,"envirocore:amplification":1.4}}',
            '{tier:8,attributes:{"envirocore:energy_cost_multiplier":1.7,"envirocore:amplification":1.6}}'
        ] },
        { item: 'envirocore:frequency_modifier', nbt: [
            '{tier:1,attributes:{"envirocore:energy_cost_multiplier":1.0,"envirocore:frequency":0.2}}',
            '{tier:2,attributes:{"envirocore:energy_cost_multiplier":1.1,"envirocore:frequency":0.4}}',
            '{tier:3,attributes:{"envirocore:energy_cost_multiplier":1.2,"envirocore:frequency":0.6}}',
            '{tier:4,attributes:{"envirocore:energy_cost_multiplier":1.3,"envirocore:frequency":0.8}}',
            '{tier:5,attributes:{"envirocore:energy_cost_multiplier":1.4,"envirocore:frequency":1.0}}',
            '{tier:6,attributes:{"envirocore:energy_cost_multiplier":1.5,"envirocore:frequency":1.1}}',
            '{tier:7,attributes:{"envirocore:energy_cost_multiplier":1.6,"envirocore:frequency":1.2}}',
            '{tier:8,attributes:{"envirocore:energy_cost_multiplier":1.7,"envirocore:frequency":1.3}}'
        ] },
        { item: 'envirocore:piezo_modifier', nbt: [
            '{tier:1,attributes:{"envirocore:piezo":0.2}}',
            '{tier:2,attributes:{"envirocore:piezo":0.4}}',
            '{tier:3,attributes:{"envirocore:piezo":0.6}}',
            '{tier:4,attributes:{"envirocore:piezo":0.8}}',
            '{tier:5,attributes:{"envirocore:piezo":1.0}}',
            '{tier:6,attributes:{"envirocore:piezo":1.2}}',
            '{tier:7,attributes:{"envirocore:piezo":1.4}}',
            '{tier:8,attributes:{"envirocore:piezo":1.6}}'
        ] },
        { item: 'envirocore:radiant_modifier', nbt: [
            '{tier:1,attributes:{"envirocore:radiant":0.2}}',
            '{tier:2,attributes:{"envirocore:radiant":0.4}}',
            '{tier:3,attributes:{"envirocore:radiant":0.6}}',
            '{tier:4,attributes:{"envirocore:radiant":0.8}}',
            '{tier:5,attributes:{"envirocore:radiant":1.0}}',
            '{tier:6,attributes:{"envirocore:radiant":1.2}}',
            '{tier:7,attributes:{"envirocore:radiant":1.4}}',
            '{tier:8,attributes:{"envirocore:radiant":1.6}}'
        ] },
        { item: 'envirocore:bandwidth_modifier', nbt: [
            '{tier:5,attributes:{"envirocore:energy_cost_multiplier":1.0,"envirocore:bandwidth":1}}',
            '{tier:6,attributes:{"envirocore:energy_cost_multiplier":1.2,"envirocore:bandwidth":2}}',
            '{tier:7,attributes:{"envirocore:energy_cost_multiplier":1.4,"envirocore:bandwidth":3}}',
            '{tier:8,attributes:{"envirocore:energy_cost_multiplier":1.6,"envirocore:bandwidth":4}}'
        ] },
        { item: 'envirocore:electrostatic_modifier', nbt: [
            '{tier:5,attributes:{"envirocore:electrostatic":0.4}}',
            '{tier:6,attributes:{"envirocore:electrostatic":0.6}}',
            '{tier:7,attributes:{"envirocore:electrostatic":0.8}}',
            '{tier:8,attributes:{"envirocore:electrostatic":1.0}}'
        ] }
    ]

    modifiers.forEach(m => {
        m.nbt.forEach(n => allthemods.add(Item.of(m.item, n)))
    })

    const feHatches = [
        '{tier:1,energy:{capacity:1024}}',
        '{tier:2,energy:{capacity:8192}}',
        '{tier:3,energy:{capacity:65536}}',
        '{tier:4,energy:{capacity:524288}}',
        '{tier:5,energy:{capacity:4194304}}',
        '{tier:6,energy:{capacity:33554432}}',
        '{tier:7,energy:{capacity:268435456}}',
        '{tier:8,energy:{capacity:2147483647}}'
    ]

    feHatches.forEach(n => {
        allthemods.add(Item.of('envirocore:fe_input', n))
        allthemods.add(Item.of('envirocore:fe_output', n))
    })

    allthemods.add(Item.of('envirocore:dimensional_modifier', '{attributes:{"envirocore:energy_cost_multiplier":5.0,"envirocore:dimensional":true}}'))
    allthemods.add(Item.of('envirocore:interdimensional_modifier', '{attributes:{"envirocore:energy_cost_multiplier":10.0,"envirocore:interdimensional":true}}'))

    const coloredLenses = [
        { dye: 'white', color: -1 },
        { dye: 'orange', color: -25856 },
        { dye: 'magenta', color: -1690906 },
        { dye: 'light_blue', color: -15098881 },
        { dye: 'yellow', color: -256 },
        { dye: 'lime', color: -16711936 },
        { dye: 'pink', color: -38476 },
        { dye: 'gray', color: -9868951 },
        { dye: 'light_gray', color: -5658199 },
        { dye: 'cyan', color: -16725796 },
        { dye: 'purple', color: -8453889 },
        { dye: 'blue', color: -16766746 },
        { dye: 'brown', color: -7650029 },
        { dye: 'green', color: -16744704 },
        { dye: 'red', color: -3342336 },
        { dye: 'black', color: -16777216 }
    ]

    coloredLenses.forEach(l => {
        allthemods.add(Item.of('envirocore:lens', `{config:{focus:"envirotech:${l.dye}",color:${l.color}}}`))
    })

    const crystalLenses = [
        { crystal: 'litherite', color: -16152752 },
        { crystal: 'erodium', color: -8558945 },
        { crystal: 'kyronite', color: -10805166 },
        { crystal: 'pladium', color: -14008192 },
        { crystal: 'ionite', color: -12400641 },
        { crystal: 'aethium', color: -15395563 },
        { crystal: 'nanorite', color: -8964458 },
        { crystal: 'xerothium', color: -8392961 }
    ]

    crystalLenses.forEach(l => {
        allthemods.add(Item.of('envirocore:crystal_lens', `{config:{focus:"envirotech:${l.crystal}",color:${l.color}}}`))
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
