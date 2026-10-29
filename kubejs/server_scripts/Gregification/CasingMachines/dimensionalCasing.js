// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const quarryCards = [
    { recipe: "shape_card_quarry_dirt", shape: "shape_card_quarry" },
    { recipe: "shape_card_quarry_clear", shape: "shape_card_quarry_clear" },
    { recipe: "shape_card_quarry_clear_fortune", shape: "shape_card_quarry_clear_fortune" },
    { recipe: "shape_card_quarry_clear_silk", shape: "shape_card_quarry_clear_silk" },
    { recipe: "shape_card_quarry_fortune_dirt", shape: "shape_card_quarry_fortune" },
    { recipe: "shape_card_quarry_silk_dirt", shape: "shape_card_quarry_silk" },
]

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration, program) => {
        const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.assembler(`allthemods:assembler/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
        if (program) {
            recipe.circuit(program);
        }
    };    

    // 1. DIMENSIONAL CASING (EV Tier)    
    addAssembler(
        [
            'gtceu:ev_machine_hull',
            'gtceu:hv_field_generator',
            '4x gtceu:end_steel_plate',
            '4x #forge:rods/end_steel',
            '2x #gtceu:circuits/ev',
            '2x bloodmagic:demonslate',
            'occultism:otherworld_essence'
        ],
        'gtceu:reinforced_epoxy_resin 288',
        'gtceu:dimensional_casing',
        EV,
        400
    )
    
    // 2. RFTOOLS BASE (Machine Frame)    
    addAssembler(
        [
            'gtceu:dimensional_casing',
            '2x gtceu:double_stainless_steel_plate',
            '2x #forge:plates/elementium',
            '4x #forge:plates/compressed_iron',
            '2x pneumaticcraft:printed_circuit_board'
        ],
        'gtceu:soldering_alloy 144',
        'rftoolsbase:machine_frame',
        EV,
        200
    );

    // 3. RFTOOLS BUILDER (EV Tier)    
    addAssembler(
        [
            '4x gtceu:iv_robot_arm',
            '4x gtceu:iv_conveyor_module',
            '4x #gtceu:circuits/iv',
            '4x gtceu:end_steel_gear',
            '4x #forge:plates/alfsteel',
            '4x #forge:rods/hop_graphite'

        ],
        'gtceu:lubricant 1000',
        'rftoolsbuilder:builder',
        EV,
        600
    );

    // 4. SHAPE CARD: QUARRY (IV TIER - GATED)
    quarryCards.forEach((card, index) => {
        allthemods.remove({ id: `rftoolsbuilder:${card.recipe}` })
        addAssembler(
            [
                '8x mekanism:alloy_atomic',
                '2x gtceu:iv_field_generator',
                '4x #forge:plates/draconium_awakened',
                '2x #gtceu:circuits/iv',
                '2x pneumaticcraft:printed_circuit_board',
                '2x bloodmagic:etherealslate'
            ],
            'gtceu:polybenzimidazole 576',
            `rftoolsbuilder:${card.shape}`,
            IV,
            1200,
            index + 1
        );
    });
        
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
