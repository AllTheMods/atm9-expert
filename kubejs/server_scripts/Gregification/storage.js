// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//@ts-check
ServerEvents.recipes(allthemods => {

    const replaceShaped = (recipeID, itemID, schema, ingredients) => {
        // Removal is now handled by the master script
        // @ts-ignore
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);
    }
    
    const materials = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'cherry', 'framed']

    materials.forEach((wood) => {
        const mat = (() => {
        switch(wood) {
            case 'framed':            
                return '#forge:plates/aluminium';
            default:
                return `minecraft:${wood}_planks`;
        }
        })();
        replaceShaped(`functionalstorage:${wood}_1`, null,
            [
                'PLP',
                'LCL',
                'PLP'
            ],
            {
                P: '#forge:plates/steel',
                C: 'gtceu:bronze_crate',
                L: mat
            }
        )

        replaceShaped(`functionalstorage:${wood}_2`, null,
            [
                'PDP',
                'PPP',
                'PDP'
            ],
            {
                P: '#forge:plates/steel',                                
                D: `functionalstorage:${wood}_1`
            }
        )

        replaceShaped(`functionalstorage:${wood}_4`, null,
            [
                'DPD',
                'PPP',
                'DPD'
            ],
            {
                P: '#forge:plates/steel',                                
                D: `functionalstorage:${wood}_1`
            }
        )
    });

    replaceShaped('functionalstorage:pusher_upgrade', null,
        [
            'PSP',
            '   ',
            'PHP'
        ],
        {
            P: '#forge:plates/steel',            
            H: 'minecraft:hopper',
            S: 'gtceu:mv_electric_piston'
        }
    );

    replaceShaped('functionalstorage:puller_upgrade', null,
        [
            'PHP',
            '   ',
            'PSP'
        ],
        {
            P: '#forge:plates/steel',            
            H: 'minecraft:hopper',
            S: 'gtceu:mv_electric_piston'
        }
    );

    replaceShaped('functionalstorage:collector_upgrade', null,
        [
            'PSP',
            '   ',
            'PHP'
        ],
        {
            P: '#forge:plates/steel',            
            H: 'minecraft:hopper',
            S: 'gtceu:mv_field_generator'
        }
    );

    replaceShaped('functionalstorage:compacting_drawer', null,
        [
            'TPT',
            'SMS',
            'PTP'
        ],
        {
            P: 'gtceu:steel_crate',            
            S: 'gtceu:mv_electric_piston',
            M: 'gtceu:mv_electric_motor',
            T: '#forge:ingots/steel'
        }
    );

    replaceShaped('functionalstorage:simple_compacting_drawer', null,
        [
            'TPT',
            'SMS',
            'PTP'
        ],
        {
            P: 'gtceu:steel_crate',            
            S: 'gtceu:mv_electric_piston',
            M: 'gtceu:mv_electric_motor',
            T: '#forge:ingots/steel'
        }
    );
    
    allthemods.shapeless('functionalstorage:compacting_framed_drawer', ['functionalstorage:compacting_drawer', '#forge:frames/aluminium']).id('gregification:framed_compacting_drawer');
    allthemods.shapeless('functionalstorage:framed_simple_compacting_drawer', ['functionalstorage:simple_compacting_drawer', '#forge:frames/aluminium']).id('gregification:framed_simple_compacting_drawer');
    

    replaceShaped('functionalstorage:iron_downgrade', null,
        [
            'PLP',
            'L L',
            'PLP'
        ],
        {
            P: '#forge:double_plates/iron',                        
            L: '#minecraft:planks'
        }
    );

    replaceShaped('functionalstorage:copper_upgrade', null,
        [
            'PCP',
            'CLC',
            'PCP'
        ],
        {
            P: '#forge:double_plates/copper',            
            C: 'gtceu:bronze_crate',
            L: '#minecraft:planks'
        }
    );

    replaceShaped('functionalstorage:gold_upgrade', null,
        [
            'PCP',
            'CUC',
            'PCP'
        ],
        {
            P: '#forge:double_plates/gold',
            C: 'gtceu:steel_crate',
            U: 'functionalstorage:copper_upgrade'
        }
    );

    replaceShaped('functionalstorage:diamond_upgrade', null,
        [
            'PCP',
            'CUC',
            'PCP'
        ],
        {
            P: '#forge:plates/diamond',
            C: 'gtceu:aluminium_crate',
            U: 'functionalstorage:gold_upgrade'
        }
    );

    replaceShaped('functionalstorage:netherite_upgrade', null,
        [
            'PCP',
            'CUC',
            'PCP'
        ],
        {
            P: '#forge:plates/netherite',
            C: 'gtceu:stainless_steel_crate',
            U: 'functionalstorage:diamond_upgrade'
        }
    );

     replaceShaped('functionalstorage:fluid_1', null,
        [
            'PPP',
            'PDP',
            'PPP'
        ],
        {
            P: '#forge:plates/steel',
            D: 'gtceu:bronze_drum',                        
        }
    );

    replaceShaped('functionalstorage:fluid_2', null,
        [
            'PDP',
            'P P',
            'PDP'
        ],
        {
            P: '#forge:plates/steel',
            D: 'functionalstorage:fluid_1'
        }
    );

    replaceShaped('functionalstorage:fluid_4', null,
        [
            'DPD',
            'P P',
            'DPD'
        ],
        {
            P: '#forge:plates/steel',
            D: 'functionalstorage:fluid_1'
        }
    );

    replaceShaped('functionalstorage:armory_cabinet', null,
        [
            'DPD',
            'PCP',
            'DPD'
        ],
        {
            P: '#forge:plates/steel',
            D: 'gtceu:stainless_steel_crate',                        
            C: '#forge:plates/netherite'
        }
    );

    replaceShaped('functionalstorage:storage_controller', null,
        [
            'PMP',
            'CFC',
            'PMP'
        ],
        {
            P: '#forge:plates/steel',            
            F: 'gtceu:mv_field_generator',
            M: '#gtceu:circuits/mv',
            C: 'pneumaticcraft:compressed_stone'
            
        }
    );
    
    allthemods.shapeless('functionalstorage:framed_storage_controller', ['functionalstorage:storage_controller', '#forge:frames/aluminium']).id('gregification:framed_storage_controller');

    replaceShaped('functionalstorage:controller_extension', null,
        [
            'PFP',
            'CMC',
            'PMP'
        ],
        {
            P: '#forge:plates/steel',            
            F: 'gtceu:mv_field_generator',
            M: '#gtceu:circuits/mv',
            C: 'pneumaticcraft:compressed_stone'
            
        }
    );

    
    allthemods.shapeless('functionalstorage:framed_controller_extension', ['functionalstorage:controller_extension', '#forge:frames/aluminium']).id('gregification:framed_controller_extension');

    replaceShaped('apotheosis:salvaging_table', null,
        [
            'APA',
            'MSC',
            'ADA'
        ],
        {
            S: 'gtceu:tungsten_carbide_buzz_saw_blade',
            P: 'gtceu:iv_electric_piston',
            A: '#forge:plates/tungsten_carbide',
            M: 'gtceu:iv_electric_motor',
            D: 'naturesaura:depth_ingot',
            C: '#gtceu:circuits/iv'
        }
    );

    replaceShaped('apotheosis:gem_cutting_table', null,
        [
            'ASA',
            'CMC',
            'ADA'
        ],
        {
            S: 'gtceu:tungsten_carbide_buzz_saw_blade',
            C: '#gtceu:circuits/iv',
            A: '#forge:plates/tungsten_carbide',
            M: 'gtceu:iv_electric_motor',
            D: 'naturesaura:depth_ingot'                        
        }
    );

    replaceShaped('apotheosis:simple_reforging_table', null,
        [
            'ACA',
            'PMP',
            'ADA'
        ],
        {
            P: 'gtceu:iv_electric_piston',            
            C: '#gtceu:circuits/iv',
            A: '#forge:plates/tungsten_carbide',
            M: 'gtceu:iv_electric_motor',
            D: 'minecraft:enchanting_table'
        }
    );

    replaceShaped('apotheosis:reforging_table', null,
        [
            'ACA',
            'PCP',
            'ADA'
        ],
        {
            P: 'apotheosis:mythic_material',            
            C: '#gtceu:circuits/iv',
            A: '#forge:plates/tungsten_carbide',            
            D: 'apotheosis:simple_reforging_table'
        }
    );

    replaceShaped('apotheosis:augmenting_table', null,
        [
            'ACA',
            'DFD',
            'ACA'
        ],
        {            
            C: '#gtceu:circuits/iv',
            A: '#forge:plates/tungsten_carbide',            
            D: 'apotheosis:mythic_material',
            F: 'gtceu:iv_field_generator'
        }
    );

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
