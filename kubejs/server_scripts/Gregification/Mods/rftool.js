// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove(
        [
            {id: 'rftoolsstorage:modular_storage'},
            {id: 'rftoolsstorage:storage_scanner'},
            {id: 'rftoolsstorage:storage_module0'},
            {id: 'rftoolsstorage:storage_module1'},
            {id: 'rftoolsstorage:storage_module2'},
            {id: 'rftoolsstorage:storage_module3'}
        ]
    )

    allthemods.shaped(
        'rftoolsstorage:modular_storage',
        [
            'aba',
            'cdc',
            'aea'
        ],
        {
            a: '#forge:double_plates/steel',
            b: 'gtceu:computer_monitor_cover',
            c: 'gtceu:lv_field_generator',
            d: 'gtceu:lv_machine_hull',
            e: '#gtceu:circuits/lv'
        }
    )

    allthemods.recipes.gtceu.assembler('storage_scanner_greg')
        .itemInputs(
            'gtceu:lv_sensor',
            'gtceu:lv_machine_hull',
            '2x create:electron_tube',
            '2x gtceu:electrum_octal_wire'
        )
        .inputFluids('#forge:tin 576')
        .EUt(30)
        .duration(200)
        .itemOutputs('rftoolsstorage:storage_scanner');


    allthemods.shaped(
        'rftoolsstorage:storage_module0',
        [
            'aba',
            'cdc',
            'aea'
        ],
        {
            a: '#forge:plates/bronze',
            b: 'gtceu:lv_field_generator',
            c: 'gtceu:lv_robot_arm',
            d: 'gtceu:resin_printed_circuit_board',
            e: 'gtceu:wood_crate'
        }
    )

    allthemods.shaped(
        'rftoolsstorage:storage_module1',
        [
            'aba',
            'cdc',
            'aea'
        ],
        {
            a: '#forge:double_plates/bronze',
            b: 'gtceu:lv_field_generator',
            c: 'gtceu:lv_robot_arm',
            d: 'rftoolsstorage:storage_module0',
            e: 'gtceu:bronze_crate'
        }
    )

    allthemods.shaped(
        'rftoolsstorage:storage_module2',
        [
            'aba',
            'cdc',
            'aea'
        ],
        {
            a: '#forge:plates/steel',
            b: 'gtceu:lv_field_generator',
            c: 'gtceu:lv_robot_arm',
            d: 'rftoolsstorage:storage_module1',
            e: 'gtceu:steel_crate'
        }
    )

    allthemods.shaped(
        'rftoolsstorage:storage_module3',
        [
            'aba',
            'cdc',
            'aea'
        ],
        {
            a: '#forge:double_plates/steel',
            b: 'gtceu:lv_field_generator',
            c: 'gtceu:lv_robot_arm',
            d: 'rftoolsstorage:storage_module2',
            e: 'gtceu:aluminium_crate'
        }
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.