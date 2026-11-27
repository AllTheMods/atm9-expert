// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA;

    const blockMaceratorDuration = 120;
    const blockMaceratorEut = LV;

    const pulpResinDuration = 200;
    const pulpResinEut = LV;

    const pulpRubberDuration = 200;
    const pulpRubberEut = LV;

    const basedSheetDuration = 100;
    const basedSheetEut = LV;

    const insulatorSheetDuration = 200;
    const insulatorSheetEut = MV;

    const coils = [
        { id: 'cupronickel',         wire: 'cupronickel',         foil: 'bronze',             extra: null,                  micaFoils: 4,  fluid: 'tin_alloy',      fluidAmount: 144, duration: 200, eut: LV  },
        { id: 'kanthal',             wire: 'kanthal',             foil: 'aluminium',          extra: null,                  micaFoils: 4,  fluid: 'copper',         fluidAmount: 144, duration: 300, eut: MV  },
        { id: 'nichrome',            wire: 'nichrome',            foil: 'stainless_steel',    extra: null,                  micaFoils: 4,  fluid: 'aluminium',      fluidAmount: 144, duration: 400, eut: HV  },
        { id: 'rtm_alloy',           wire: 'rtm_alloy',           foil: 'vanadium_steel',     extra: null,                  micaFoils: 4,  fluid: 'nichrome',       fluidAmount: 144, duration: 500, eut: EV  },
        { id: 'hssg',                wire: 'hssg',                foil: 'tungsten_carbide',   extra: null,                  micaFoils: 4,  fluid: 'tungsten',       fluidAmount: 144, duration: 600, eut: IV  },
        { id: 'naquadah',            wire: 'naquadah',            foil: 'osmium',             extra: null,                  micaFoils: 4,  fluid: 'tungsten_steel', fluidAmount: 144, duration: 700, eut: LuV },
        { id: 'trinium',             wire: 'trinium',             foil: 'enriched_naquadah',  extra: null,                  micaFoils: 4,  fluid: 'naquadah',       fluidAmount: 144, duration: 800, eut: ZPM },
        { id: 'tritanium',           wire: 'tritanium',           foil: 'naquadria',          extra: null,                  micaFoils: 4,  fluid: 'trinium',        fluidAmount: 144, duration: 900, eut: UV  },
        { id: 'draconium',           wire: 'draconium',           foil: 'gaia',               extra: 'holmium',             micaFoils: 16, fluid: 'nobelium',       fluidAmount: 288, duration: 600, eut: UHV },
        { id: 'draconium_awakened',  wire: 'draconium_awakened',  foil: 'insanite',           extra: 'thulium',             micaFoils: 32, fluid: 'lawrencium',     fluidAmount: 288, duration: 600, eut: UEV },
        { id: 'etrium',              wire: 'etrium',              foil: 'organic_polymer',    extra: 'ytterbium',           micaFoils: 48, fluid: 'mendelevium',    fluidAmount: 288, duration: 600, eut: UIV },
        { id: 'infinity',            wire: 'infinity',            foil: 'chaos_plastic',      extra: 'erbium',              micaFoils: 64, fluid: 'roentgenium',    fluidAmount: 288, duration: 600, eut: UXV }
    ];

    allthemods.remove({ type: 'gtceu:assembler', output: /^gtceu:(cupronickel|kanthal|nichrome|rtm_alloy|hssg|naquadah|trinium|tritanium|draconium|draconium_awakened|etrium|infinity)_coil_block$/ });

    allthemods.recipes.gtceu.macerator('gregification:mica_block_to_dust')
        .itemInputs('envirocore:mica')
        .itemOutputs('2x gtceu:mica_dust')
        .duration(blockMaceratorDuration)
        .EUt(blockMaceratorEut);

    allthemods.recipes.gtceu.mixer('gregification:mica_pulp_from_resin')
        .itemInputs('4x #forge:dusts/mica', 'gtceu:sticky_resin')
        .itemOutputs('4x gtceu:mica_pulp_dust')
        .duration(pulpResinDuration)
        .EUt(pulpResinEut);

    allthemods.recipes.gtceu.mixer('gregification:mica_pulp_from_raw_rubber')
        .itemInputs('4x #forge:dusts/mica', '#forge:dusts/raw_rubber')
        .itemOutputs('4x gtceu:mica_pulp_dust')
        .duration(pulpRubberDuration)
        .EUt(pulpRubberEut);

    allthemods.recipes.gtceu.forming_press('gregification:mica_base_plate')
        .itemInputs('2x #forge:dusts/mica_pulp', '#forge:dusts/asbestos')
        .itemOutputs('gtceu:mica_base_plate')
        .duration(basedSheetDuration)
        .EUt(basedSheetEut);

    allthemods.recipes.gtceu.alloy_smelter('gregification:mica_insulator_sheet')
        .itemInputs('#forge:plates/mica_base', '#forge:dusts/silicon_dioxide')
        .itemOutputs('gtceu:mica_insulator_plate')
        .duration(insulatorSheetDuration)
        .EUt(insulatorSheetEut);

    coils.forEach(coil => {
        let inputs = [
            '8x #gtceu:wires/double/' + coil.wire,
            '8x #forge:foils/' + coil.foil
        ];
        if (coil.extra) {
            inputs.push('8x #forge:plates/' + coil.extra);
        }
        inputs.push(coil.micaFoils + 'x #forge:foils/mica_insulator');

        allthemods.recipes.gtceu.assembler('gregification:coil/' + coil.id)
            .itemInputs(inputs)
            .inputFluids('#forge:' + coil.fluid + ' ' + coil.fluidAmount)
            .itemOutputs('gtceu:' + coil.id + '_coil_block')
            .duration(coil.duration)
            .EUt(coil.eut);
    });
});
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.