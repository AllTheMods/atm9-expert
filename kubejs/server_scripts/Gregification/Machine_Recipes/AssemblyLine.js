// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA


    const mekLong = 400;
    
    const addAssemblyLine = (output, inputs, fluids, duration, eu, researchItem, CWUt) => {

        let itemName = output.replace(/^\d+x\s+/, '').replace(':', '_');
        let generatedId = `gregification:assembly_line/${itemName}`;

        let recipe = allthemods.recipes.gtceu.assembly_line(generatedId)
            .itemOutputs(output)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (fluids && fluids.length > 0) {
            recipe.inputFluids(fluids);
        }

        if (researchItem) {
            if (CWUt) {
                recipe.stationResearch(b =>
                    b.researchStack(researchItem)
                        .EUt(eu / 4)
                        .CWUt(CWUt)
                );
            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }
    };


    allthemods.recipes.gtceu.assembly_line('gregification:craft_neutron_irradiator')
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '2x #gtceu:circuits/zpm',
            '2x gtceu:zpm_emitter',
            '2x gtceu:zpm_field_generator',
            '4x gtceu:zpm_electric_pump',
            '4x gtceu:adamantium_casing',
            '4x gtceu:gadolinium_casing',
            '2x gtceu:zirconium_casing',
            '4x bigreactors:reinforced_reactorcontrolrod',
            'gtceu:polonium_beryllium_neutron_source'
        )
        .inputFluids('#forge:soldering_alloy 2000', '#forge:polybenzimidazole 1152')
        .itemOutputs('gtceu:neutron_irradiator')
        .scannerResearch('gtceu:polonium_beryllium_neutron_source')
        .duration(1200)
        .EUt(ZPM);

    
        allthemods.recipes.gtceu.assembly_line('gregification:craft_neutrino_collector')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '4x #gtceu:circuits/uv',
            '8x gtceu:uv_sensor',
            '2x gtceu:uv_field_generator',
            '4x gtceu:uv_electric_pump',
            '8x gtceu:gadolinium_casing',
            '4x gtceu:adamantium_casing',
            '16x #forge:plates/germanium'
        )
        .inputFluids('#forge:soldering_alloy 2304', '#forge:polybenzimidazole 2304')
        .itemOutputs('gtceu:neutrino_collector')
        .scannerResearch('gtceu:neutrino')
        .duration(1800)
        .EUt(UV);
    
    //farming for blockheads - market
    addAssemblyLine("farmingforblockheads:market",
        [
            '#forge:frames/allthemodium',
            "allthemodium:allthemodium_hoe",
            '2x #forge:double_plates/ferrognetic',
            '4x #forge:gears/terrasteel',
            '8x #forge:plates/emerald'
        ],
        [
            'gtceu:aetheric_sanguine_singularity 32000',
            'gtceu:super_coolant 64000',
        ],
        mekLong,
        LuV,
        "allthemodium:allthemodium_hoe"
    );

    //draconic evolution - bacterial vat
    addAssemblyLine('gtceu:bacterial_vat',
        [
            'gtceu:luv_machine_hull',
            '8x #forge:frames/ferrognetic',
            '4x #gtceu:circuits/luv',
            '4x #forge:rods/protactinium',
            '32x gtceu:plascrete'
            
        ],
        [
            '#forge:selenium 1000',
            '#forge:lubricant 1000'

        ],
        mekLong,
        LuV,
        '#forge:rods/protactinium'
    );

    
    addAssemblyLine(
        'gtceu:elven_forge',
        [
            'gtceu:luv_machine_hull',
            '8x #forge:plates/vibranium',
            '8x #forge:rods/long/desh',
            '#forge:frames/ferrognetic',
            '2x #gtceu:circuits/luv',            
            '32x gtceu:plascrete'
        ],
        [
            '#forge:terrasteel 576',
            '#forge:selenium 576',
            '#forge:gaia 576'
        ],
        mekLong,
        LuV,
        '#forge:ingots/gaia'
    );
    

    addAssemblyLine('gtceu:gadolinium_casing',
        [
            'gtceu:luv_machine_hull',
            'gtceu:samarium_cobalt_magnetic_rotor',
            '12x #forge:plates/gadolinium',
            '12x #forge:plates/strontium_ferrite'
        ],
        [
            'gtceu:polybenzimidazole 1440',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
        'gtceu:samarium_cobalt_magnetic_rotor'
    );
    //environmental_accumulator
    addAssemblyLine(
        'gtceu:environmental_accumulator',
        [
            'gtceu:zpm_machine_hull',
            '#forge:frames/mithril',
            'evilcraft:environmental_accumulation_core',
            '16x #forge:plates/ostrum',
            '4x #gtceu:circuits/zpm',
            '8x #forge:rods/long/hafnium'
        ],
        [
            'gtceu:polybenzimidazole 1440',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        LuV,
        'evilcraft:environmental_accumulation_core'
    );

    //3d printer
    addAssemblyLine(
        'gtceu:printer',
        [
            'gtceu:zpm_machine_hull',
            '4x #forge:plates/empowered_restonia',
            '4x #forge:plates/empowered_diamatine',
            '4x #forge:plates/empowered_palis',
            '4x #forge:plates/empowered_emeradic',
            '2x #gtceu:circuits/zpm',
            '4x gtceu:zpm_electric_motor',
            '2x gtceu:zpm_electric_pump',
            '6x gtceu:yttrium_barium_cuprate_single_cable'
        ],
        [
            '#forge:lubricant 1440',
            'gtceu:soldering_alloy 1440'
        ],
        2400,
        ZPM,
        'gtceu:zpm_reconstructor'
    );

    //alchemical casing
    addAssemblyLine(
        'gtceu:alchemical_casing',
        [
            'gtceu:hexagonal_bio_composite',
            '8x #forge:plates/unobtainium',
            '4x #gtceu:circuits/uv',
            '8x naturesaura:depth_ingot'
        ],
        [
            '#forge:mana 1296',
            'gtceu:primordial_cosmic_soup 1000'

        ],
        1200,
        UV,
        'gtceu:hexagonal_bio_composite'
    );

   

    //chunk destroyer
    addAssemblyLine(
        "quarryplus:adv_quarry",
        [
            "3x quarryplus:quarry",
            "2x quarryplus:pump_plus",
            "4x minecraft:dragon_head",
            "allthecompressed:nether_star_block_3x",
            "32x #forge:plates/alloy_atomic",
            "64x #forge:plates/draconium_awakened",
            "16x thermal:redstone_servo",
            "12x #gtceu:circuits/luv"

        ],
        [
            "gtceu:europium 1152",
            "gtceu:saturated_tau 2000",
            "gtceu:primordial_cosmic_soup 2000"

        ],
        1200,
        ZPM,
        "quarryplus:quarry", 128
    );

    //enchantment mover
    addAssemblyLine(
        "quarryplus:book_mover",
        [
            "4x quarryplus:mover",            
            "4x minecraft:dragon_head",
            "allthecompressed:nether_star_block_3x",
            "16x #forge:plates/alloy_atomic",
            "32x #forge:plates/draconium_awakened",
            "8x thermal:redstone_servo",
            "12x #gtceu:circuits/luv"
        ],
        [
            "gtceu:europium 1152",
            "gtceu:saturated_tau 2000",
            "gtceu:primordial_cosmic_soup 2000"

        ],
        1200,
        LuV,
        "quarryplus:mover", 128
    );



    allthemods.recipes.gtceu.assembly_line('gregification:craft_super_critical_heat_exchanger')
        .itemInputs(
            'gtceu:uv_machine_hull',
            '2x #gtceu:circuits/uv',
            '4x gtceu:uv_electric_pump',
            '2x gtceu:uv_fluid_regulator',
            '8x gtceu:heat_exchange_casing',
            '4x gtceu:gadolinium_casing',
            '4x #forge:frames/draconium_awakened'
        )
        .inputFluids('#forge:soldering_alloy 2000', '#forge:super_coolant 1000')
        .itemOutputs('gtceu:super_critical_heat_exchanger')
        .duration(1200)
        .EUt(UV);

    addAssemblyLine('gtceu:heat_exchange_casing',
        [
            'gtceu:zpm_machine_hull',
            '8x #forge:plates/gadolinium',
            '8x #forge:plates/rhodium_plated_palladium',
            '4x #forge:rods/long/hafnium',
            '2x #gtceu:circuits/zpm'
        ],
        [
            '#forge:thermal_coolant 1440',
            '#forge:soldering_alloy 1440'
        ],
        mekLong,
        ZPM
    );

    //beryllium sphere
    addAssemblyLine('gtceu:beryllium_sphere',
        [
            'gtceu:beryllium_singularity',
            '8x #forge:plates/potassium_calcium_orthosilicate',
            '4x #forge:plates/rhenium_nickel_alloy',
            '4x #forge:plates/neptunium',
            '8x #forge:foils/actinium',
            '4x #forge:rods/technetium'
        ],
        [
            '#forge:sodium_potassium 1000'
        ],
        1200,
        ZPM,
        'gtceu:beryllium_singularity'
    );

    addAssemblyLine(
        'gtceu:atmospheric_collector',
        [
            '8x #forge:plates/rhodium_plated_palladium',
            '4x gtceu:niobium_titanium_huge_fluid_pipe',
            '8x gtceu:luv_electric_motor',
            '2x gtceu:luv_electric_pump',
            'gtceu:luv_machine_hull',
            '4x #gtceu:circuits/luv'
        ],
        [
            'gtceu:soldering_alloy 1152',
            'gtceu:polybenzimidazole 1152'
        ],
        1200,
        LuV,
        'gtceu:vacuum_freezer'
    )
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.