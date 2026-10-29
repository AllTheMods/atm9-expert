// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    //'ad_astra:tier_1_rocket',
    //'ad_astra:tier_2_rocket',
    //'ad_astra:tier_3_rocket',
    //'ad_astra:tier_4_rocket',
    //'ad_astra:rocket_fin', 'ad_astra:rocket_nose_cone',
    //'ad_astra:steel_engine','ad_astra:desh_engine', 'ad_astra:ostrum_engine','ad_astra:calorite_engine', 
    //'ad_astra:steel_tank','ad_astra:desh_tank', 'ad_astra:ostrum_tank','ad_astra:calorite_tank', 
    
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const ivTier = IV;
    const luvTier = LuV;
    const zpmTier = ZPM;
    const uvTier = UV;
    const partDuration = 200;
    const rocketDuration = 2000;

    allthemods.recipes.gtceu.assembler('fuel_refinery')
        .itemInputs(['gtceu:iv_machine_hull', '2x gtceu:iv_electric_pump', '2x #gtceu:circuits/iv', '4x #forge:plates/hop_graphite'])
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('ad_astra:fuel_refinery')
        .duration(rocketDuration)
        .EUt(ivTier);

    allthemods.recipes.gtceu.assembler('oxygen_loader')
        .itemInputs(['gtceu:iv_machine_hull', '2x gtceu:iv_electric_pump', '2x #gtceu:circuits/iv', '#forge:rotors/tungsten_steel'])
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('ad_astra:oxygen_loader')
        .duration(rocketDuration)
        .EUt(ivTier);

    allthemods.recipes.gtceu.assembler('launch_pad')
        .itemInputs(['gtceu:iv_machine_hull', '#forge:plates/tungsten_steel', '4x #gtceu:circuits/iv', '4x #forge:rods/hop_graphite'])
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('ad_astra:launch_pad')
        .duration(rocketDuration)
        .EUt(ivTier);

    allthemods.recipes.gtceu.assembler('rocket_nose_cone')
        .itemInputs(['4x #forge:double_plates/titanium', 'gtceu:iv_sensor', 'gtceu:iv_emitter', '16x #forge:plates/tungsten_steel', '12x #forge:rings/enderium', '64x #forge:screws/aluminium'])
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('ad_astra:rocket_nose_cone')
        .duration(partDuration)
        .EUt(ivTier);
    
    allthemods.recipes.gtceu.assembler('rocket_fin')
        .itemInputs(['8x #forge:double_plates/titanium', '8x #forge:double_plates/tungsten_steel', '16x #forge:rods/enderium', '64x #forge:screws/aluminium'])
        .inputFluids('#forge:soldering_alloy 2000')
        .itemOutputs('ad_astra:rocket_fin')
        .duration(partDuration)
        .EUt(ivTier);

    allthemods.recipes.gtceu.assembler('engine_frame')
        .itemInputs(['8x #forge:gears/titanium', '16x #forge:plates/tungsten_steel', '16x #forge:screws/enderium'])
        .inputFluids('#forge:lubricant 2000')
        .itemOutputs('ad_astra:engine_frame')
        .duration(partDuration)
        .EUt(ivTier);

    //steel
    allthemods.recipes.gtceu.assembler('steel_engine')
        .itemInputs(['ad_astra:engine_frame','8x #forge:gears/tungsten_steel', '16x #forge:plates/enderium', '4x #forge:rods/end_steel'])
        .inputFluids('#forge:polytetrafluoroethylene 2000')
        .itemOutputs('ad_astra:steel_engine')
        .duration(partDuration)
        .EUt(ivTier)
    
    allthemods.recipes.gtceu.assembler('steel_tank')
        .itemInputs(['2x gtceu:stainless_steel_drum', '8x #forge:plates/tungsten_steel', '4x #forge:rods/end_steel'])
        .inputFluids('#forge:polytetrafluoroethylene 1000')
        .itemOutputs('ad_astra:steel_tank')
        .duration(partDuration)
        .EUt(ivTier);

    //desh
    allthemods.recipes.gtceu.assembler('desh_engine')
        .itemInputs(['ad_astra:engine_frame','8x #forge:gears/rhodium_plated_palladium', '16x #forge:plates/hafnium', '4x #forge:rods/desh'])
        .inputFluids('#forge:polytetrafluoroethylene 2000')
        .itemOutputs('ad_astra:desh_engine')
        .duration(partDuration)
        .EUt(luvTier);

    allthemods.recipes.gtceu.assembler('desh_tank')
        .itemInputs(['2x gtceu:tungsten_steel_drum', '8x #forge:plates/desh', '4x #forge:rods/hafnium'])
        .inputFluids('#forge:polytetrafluoroethylene 1000')
        .itemOutputs('ad_astra:desh_tank')
        .duration(partDuration)
        .EUt(luvTier);

    //ostrum
    allthemods.recipes.gtceu.assembler('ostrum_engine')
        .itemInputs(['ad_astra:engine_frame','8x #forge:gears/naquadah_alloy', '16x #forge:plates/scandium', '4x #forge:rods/ostrum'])
        .inputFluids('#forge:polybenzimidazole 2000')
        .itemOutputs('ad_astra:ostrum_engine')
        .duration(partDuration)
        .EUt(zpmTier);

    allthemods.recipes.gtceu.assembler('ostrum_tank')
        .itemInputs(['2x gtceu:tungsten_steel_drum', '8x #forge:plates/ostrum', '4x #forge:rods/scandium'])
        .inputFluids('#forge:polybenzimidazole 1000')
        .itemOutputs('ad_astra:ostrum_tank')
        .duration(partDuration)
        .EUt(zpmTier);

    //calorite
    allthemods.recipes.gtceu.assembler('calorite_engine')
        .itemInputs(['ad_astra:engine_frame','8x #forge:gears/darmstadtium', '16x #forge:plates/thallium', '4x #forge:rods/calorite'])
        .inputFluids('#forge:polybenzimidazole 2000')
        .itemOutputs('ad_astra:calorite_engine')
        .duration(partDuration)
        .EUt(uvTier);

    allthemods.recipes.gtceu.assembler('calorite_tank')
        .itemInputs(['2x gtceu:tungsten_steel_drum', '8x #forge:plates/calorite', '4x #forge:rods/thallium'])
        .inputFluids('#forge:polybenzimidazole 1000')
        .itemOutputs('ad_astra:calorite_tank')
        .duration(partDuration)
        .EUt(uvTier);

        
    allthemods.recipes.gtceu.assembly_line ('tier_1_rocket')
        .itemInputs(['ad_astra:rocket_nose_cone', '4x ad_astra:rocket_fin', '4x ad_astra:steel_tank', '4x ad_astra:steel_engine', '16x #forge:plates/tungsten_steel', '16x #forge:plates/end_steel', '16x #forge:plates/bio_organic_nanocomposite', '16x #gtceu:circuits/iv'])
        .inputFluids('#forge:polytetrafluoroethylene 5000')
        .inputFluids('#forge:lubricant 5000')
        .itemOutputs('ad_astra:tier_1_rocket')
        .scannerResearch('gtceu:tier_1_rocket_schematic')
        .duration(rocketDuration)
        .EUt(ivTier);
    
    allthemods.recipes.gtceu.assembly_line ('tier_2_rocket')
        .itemInputs(['ad_astra:rocket_nose_cone', '4x ad_astra:rocket_fin', '4x ad_astra:desh_tank', '4x ad_astra:desh_engine', '16x #forge:plates/rhodium_plated_palladium', '16x #forge:plates/desh', '32x #forge:plates/bio_organic_nanocomposite', '16x #gtceu:circuits/luv'])
        .inputFluids('#forge:polytetrafluoroethylene 5000')
        .inputFluids('#forge:lubricant 5000')
        .itemOutputs('ad_astra:tier_2_rocket')
        .scannerResearch('gtceu:tier_2_rocket_schematic')
        .duration(rocketDuration)
        .EUt(luvTier);

    allthemods.recipes.gtceu.assembly_line ('tier_3_rocket')
        .itemInputs(['ad_astra:rocket_nose_cone', '4x ad_astra:rocket_fin', '4x ad_astra:ostrum_tank', '4x ad_astra:ostrum_engine', '16x #forge:plates/naquadah_alloy', '16x #forge:plates/ostrum', '48x #forge:plates/bio_organic_nanocomposite', '16x #gtceu:circuits/zpm'])
        .inputFluids('#forge:polybenzimidazole 5000')
        .inputFluids('#forge:lubricant 5000')
        .itemOutputs('ad_astra:tier_3_rocket')
        .scannerResearch('gtceu:tier_3_rocket_schematic')
        .duration(rocketDuration)
        .EUt(zpmTier);

    allthemods.recipes.gtceu.assembly_line ('tier_4_rocket')
        .itemInputs(['ad_astra:rocket_nose_cone', '4x ad_astra:rocket_fin', '4x ad_astra:calorite_tank', '4x ad_astra:calorite_engine', '16x #forge:plates/darmstadtium', '16x #forge:plates/calorite', '64x #forge:plates/bio_organic_nanocomposite', '16x #gtceu:circuits/uv'])
        .inputFluids('#forge:polybenzimidazole 5000')
        .inputFluids('#forge:lubricant 5000')
        .itemOutputs('ad_astra:tier_4_rocket')
        .scannerResearch('gtceu:tier_4_rocket_schematic')
        .duration(rocketDuration)
        .EUt(uvTier);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
