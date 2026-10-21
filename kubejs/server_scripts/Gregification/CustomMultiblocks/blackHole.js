ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA   
    const blackHole = (inputs, fluidIn, outputs, fluidOut, eu, duration, customID, program) => {

    let id;

    if (customID) {
        id = `gregification:black_hole/${customID}`;
    } else {
        let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
        let outputName = firstOutput.toString()
            .replace(/^\d+[x ]\s*/, '')
            .split(':').pop()
            .replace(/[^a-zA-Z0-9_]/g, '_')
            .toLowerCase();
        id = `gregification:black_hole/${outputName}`;
    }

    let recipe = allthemods.recipes.gtceu.black_hole(id)
        .itemInputs(inputs)
        .duration(duration)
        .EUt(eu);

    if (outputs && outputs.length > 0) {
        recipe.itemOutputs(outputs);
    }
    if (fluidIn && fluidIn.length > 0) {
        recipe.inputFluids(fluidIn);
    }
    if (fluidOut && fluidOut.length > 0) {
        recipe.outputFluids(fluidOut);
    }
    if (program) {
        recipe.circuit(program);
    }
};

    const addAssemblyLine = (output, inputs, fluids, duration, eu, researchItem, CWUt) => {

        let itemName = output.replace(/^\d+x\s+/, '').split(':').pop();
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
                    b.researchStack(researchItem)  // Uses the 'researchItem' argument             
                        .EUt(eu)                  // 1/4th EU is standard for research
                        .CWUt(CWUt)                     // Computation Units (Standard default)
                );

            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }
    };
    
    addAssemblyLine(
        'gtceu:black_hole',
        [
            'gtceu:luv_machine_hull',
            '4x gtceu:luv_electric_piston',
            '2x gtceu:luv_electric_motor',
            '8x gtceu:long_magnetic_samarium_cobalt_rod',
            '64x #forge:fine_wires/allthemodium',
            '8x #gtceu:circuits/luv'
        ],
        [
            '#forge:lubricant 2880',
            '#forge:soldering_alloy 2880'            
        ],
        1200,
        LuV,
        'gtceu:luv_compressor',
        64
    )

    const compressionDuration = 1200;

    const bulkSingularities = ['sunnarium','lunarium', 'bedrockium'];
    bulkSingularities.forEach(singularity => {
        blackHole(['#forge:singularities/core', `4000x #forge:ingots/${singularity}`], null, `gtceu:${singularity}_singularity`, null, ZPM, compressionDuration, `${singularity}_singularity`);
    });

    

    //for alfheim trader    
    blackHole(['#forge:singularities/core', 'tombstone:essence_of_undeath', '1000x #forge:bones', '1000x #forge:ingots/rotten_flesh', 'minecraft:dragon_egg'], null, 'gtceu:undeath_singularity', null, LuV, compressionDuration, 'undeath_singularity')
    blackHole(['#forge:singularities/core', '4000x eidolon:tattered_cloth'], null, 'gtceu:tattered_singularity', null, LuV, compressionDuration, 'tattered_singularity')
    blackHole(['#forge:singularities/core', '4000x eidolon:wraith_heart'], null, 'gtceu:wraith_heart_singularity', null, LuV, compressionDuration, 'wraith_heart_singularity')

    blackHole(['#forge:singularities/core', '4000x #forge:gems/carminite'], null, 'gtceu:carminite_singularity', null, ZPM, compressionDuration, 'carminite_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/steeleaf'], null, 'gtceu:steeleaf_singularity', null, ZPM, compressionDuration, 'steeleaf_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/fiery'], null, 'gtceu:fiery_singularity', null, ZPM, compressionDuration, 'fiery_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/knightmetal'], null, 'gtceu:knightmetal_singularity', null, ZPM, compressionDuration, 'knightmetal_singularity')
    blackHole(['#forge:singularities/core', '4000x forbidden_arcanus:spawner_scrap'], null, 'gtceu:spawner_scrap_singularity', null, ZPM, compressionDuration, 'spawner_scrap_singularity')


    blackHole(['#forge:singularities/core', '4000x #forge:gems/blazing_crystal'], null, 'gtceu:blazing_crystal_singularity', null, ZPM, compressionDuration, 'blazing_crystal_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/niotic_crystal'], null, 'gtceu:niotic_crystal_singularity', null, ZPM, compressionDuration, 'niotic_crystal_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/spirited_crystal'], null, 'gtceu:spirited_crystal_singularity', null, ZPM, compressionDuration, 'spirited_crystal_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/nitro_crystal'], null, 'gtceu:nitro_crystal_singularity', null, ZPM, compressionDuration, 'nitro_crystal_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/energized_steel'], null, 'gtceu:energized_steel_singularity', null, ZPM, compressionDuration, 'energized_steel_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/stabilized_clathrate'], null, 'gtceu:stabilized_clathrate_singularity', null, ZPM, compressionDuration, 'stabilized_clathrate_singularity')


    blackHole(['#forge:singularities/core', '4000x evilcraft:garmonbozia'], null, 'gtceu:garmonbozia_singularity', null, ZPM, compressionDuration, 'garmonbozia_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/mana_essence'], null, 'gtceu:mana_essence_singularity', null, ZPM, compressionDuration, 'mana_essence_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/source'], null, 'gtceu:source_singularity', null, ZPM, compressionDuration, 'source_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/lapotron'], null, 'gtceu:lapotron_singularity', null, ZPM, compressionDuration, 'lapotron_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/iesnium'], null, 'gtceu:iesnium_singularity', null, ZPM, compressionDuration, 'iesnium_singularity')    
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/hellforged'], null, 'gtceu:hellforged_singularity', null, ZPM, compressionDuration, 'hellforged_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/allthemodium'], null, 'gtceu:allthemodium_singularity', null, ZPM, compressionDuration, 'allthemodium_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/vibranium'], null, 'gtceu:vibranium_singularity', null, ZPM, compressionDuration, 'vibranium_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/unobtainium'], null, 'gtceu:unobtainium_singularity', null, ZPM, compressionDuration, 'unobtainium_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/compressed_iron'], null, 'gtceu:compressed_iron_singularity', null, ZPM, compressionDuration, 'compressed_iron_singularity')    
    
    blackHole(['allthecompressed:diamond_block_3x', '#forge:frames/alfsteel', '6x #forge:plates/strontium_aluminate', '12x #forge:plates/fluorozirconic_composite'], null , '16x gtceu:bedrockium_dust', null, ZPM, compressionDuration, 'bedrockium_compression')
    blackHole(['#forge:frames/bedrockium', '6x #forge:plates/rheni_zirconium_alloy', '12x #forge:rods/potassium_calcium_orthosilicate'], null , 'gtceu:core_singularity', null, ZPM, compressionDuration, 'core_singularity')

    blackHole(['#forge:singularities/core', '4000x gtceu:beryllium_ingot'], null, 'gtceu:beryllium_singularity', null, ZPM, compressionDuration, 'beryllium_singularity')
    

    blackHole(['#forge:singularities/core','8000x elementalcraft:fire_shard'],    '#forge:sanguine_concentrate 32000000', 'gtceu:elemental_fire_singularity', null, ZPM, compressionDuration, 'fire_singularity')
    blackHole(['#forge:singularities/core','8000x elementalcraft:air_shard'],     '#forge:source 32000000', 'gtceu:elemental_air_singularity', null, ZPM, compressionDuration, 'air_singularity')
    blackHole(['#forge:singularities/core','8000x elementalcraft:earth_shard'],   '#forge:experience 32000000', 'gtceu:elemental_earth_singularity', null, ZPM, compressionDuration, 'earth_singularity')
    blackHole(['#forge:singularities/core','8000x elementalcraft:water_shard'],   '#forge:mana_essence 32000000', 'gtceu:elemental_water_singularity', null, ZPM, compressionDuration, 'water_singularity')

    blackHole(['#forge:singularities/core','4000x elementalcraft:powerful_fire_shard'],  '#forge:sanguine_concentrate 32000000', 'gtceu:elemental_fire_singularity', null, ZPM, compressionDuration, 'powerful_fire_singularity')
    blackHole(['#forge:singularities/core','4000x elementalcraft:powerful_air_shard'],   '#forge:source 32000000', 'gtceu:elemental_air_singularity', null, ZPM, compressionDuration, 'powerful_air_singularity')
    blackHole(['#forge:singularities/core','4000x elementalcraft:powerful_earth_shard'], '#forge:experience 32000000', 'gtceu:elemental_earth_singularity', null, ZPM, compressionDuration, 'powerful_earth_singularity')
    blackHole(['#forge:singularities/core','4000x elementalcraft:powerful_water_shard'], '#forge:mana_essence 32000000', 'gtceu:elemental_water_singularity', null, ZPM, compressionDuration, 'powerful_water_singularity')

    blackHole(['gtceu:element_fire','gtceu:element_water','gtceu:element_earth','gtceu:element_air'],'#forge:concentrated_dark_matter 10' , null, 'gtceu:fifth_element 14400', ZPM, compressionDuration, 'fifth_element')
})