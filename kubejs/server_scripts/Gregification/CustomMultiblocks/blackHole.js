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
    const singularityMetals = []    

    const singularityGems = [
        'demon', 'steadfast', 'corrosive', 'vengeful', 'destructive', 'eternal',
        'restonia', 'palis', 'diamatine', 'void_crystal', 'emeradic', 'enori', 'black_quartz',
        'empowered_restonia', 'empowered_palis', 'empowered_diamatine', 'empowered_void_crystal', 'empowered_emeradic', 'empowered_enori',
        'mana_essence', 'garmonbozia', 'fluix'
    ];
    const singularityIngots = [
        'copper_alloy', 'conductive_alloy', 'energetic_alloy', 'vibrant_alloy', 
        'pulsating_alloy', 'soularium', 'dark_steel', 'end_steel',
        'signalum', 'lumium', 'enderium',    
        'manasteel', 'elementium', 'terrasteel', 'gaia', 'alfsteel',    
        'hellforged', 'iesnium',
        'allthemodium', 'vibranium', 'unobtainium',    
        'draconium', 'draconium_awakened',    
        'refined_obsidian', 'refined_glowstone', 'alloy_infused', 'alloy_reinforced', 'alloy_atomic',    
        'compressed_iron', 'hop_graphite', 'graphite',
        'pink_slime', 'plastic', 'deorum', 'ferrognetic',    
        'naquamodium', 'naquabranium', 'naquatainium',    
        'eternium', 'cosmic_alloy', 'antimatter_alloy', 'singularity_alloy', 'absolute_alloy',
        'alltheneutronium', 'vibtronium', 'unobtronium', 'deorum_alloy', 'demonic_alloy', 'tenebrium',
        'rhenium','radium','astatine','strontium', 'rhenium_nickel_alloy', 'tellurium', 'berkelium', 'californium',
        'blutonium', 'cyanite', 'magentite', 'ludicrite', 'ridiculite', 'inanite', 'insanite',
        'iron','copper','silver','gold','lead','tin','platinum', 'nickel', 'zinc', 'brass', 'bronze', 'invar', 'steel'        
    ];
    
             

    /*singularityGems.forEach(mat=>{
        let input = `64000x #forge:gems/${mat}`
        //blackHole(input, '#forge:concentrated_dark_matter 1000', `gtceu:${mat}_singularity`,null,8388608, 1200)
    })

    singularityIngots.forEach(mat=>{
        let input = `64000x #forge:ingots/${mat}`        
        //blackHole(input, '#forge:concentrated_dark_matter 1000', `gtceu:${mat}_singularity`,null,8388608, 1200)
    })*/
    
    addAssemblyLine(
        'gtceu:black_hole',
        [
            'gtceu:uev_machine_hull',
            '4x gtceu:zpm_electric_piston',
            '2x gtceu:zpm_electric_motor',
            '8x gtceu:long_magnetic_samarium_cobalt_rod',
            '64x gtceu:fine_atm_star_wire',
            '8x #gtceu:circuits/zpm'
        ],
        [
            '#forge:lubricant 2880',
            '#forge:soldering_alloy 2880'            
        ],
        1200,
        ZPM,
        'gtceu:zpm_compressor',
        64
    )


    //for alfheim trader
    blackHole(['#forge:singularities/core', '4000x eidolon:tattered_cloth'], null, 'gtceu:tattered_singularity', null, ZPM, 1200, 'tattered_singularity')

    blackHole(['#forge:singularities/core', '4000x #forge:gems/carminite'], null, 'gtceu:carminite_singularity', null, ZPM, 1200, 'carminite_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/steeleaf'], null, 'gtceu:steeleaf_singularity', null, ZPM, 1200, 'steeleaf_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/fiery'], null, 'gtceu:fiery_singularity', null, ZPM, 1200, 'fiery_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/knightmetal'], null, 'gtceu:knightmetal_singularity', null, ZPM, 1200, 'knightmetal_singularity')


    blackHole(['#forge:singularities/core', '4000x #forge:gems/blazing_crystal'], null, 'gtceu:blazing_crystal_singularity', null, ZPM, 1200, 'blazing_crystal_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/niotic_crystal'], null, 'gtceu:niotic_crystal_singularity', null, ZPM, 1200, 'niotic_crystal_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/spirited_crystal'], null, 'gtceu:spirited_crystal_singularity', null, ZPM, 1200, 'spirited_crystal_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/nitro_crystal'], null, 'gtceu:nitro_crystal_singularity', null, ZPM, 1200, 'nitro_crystal_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/energized_steel'], null, 'gtceu:energized_steel_singularity', null, ZPM, 1200, 'energized_steel_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/stabilized_clathrate'], null, 'gtceu:stabilized_clathrate_singularity', null, ZPM, 1200, 'stabilized_clathrate_singularity')


    blackHole(['#forge:singularities/core', '4000x evilcraft:garmonbozia'], null, 'gtceu:garmonbozia_singularity', null, ZPM, 1200, 'garmonbozia_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/mana_essence'], null, 'gtceu:mana_essence_singularity', null, ZPM, 1200, 'mana_essence_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/source'], null, 'gtceu:source_singularity', null, ZPM, 1200, 'source_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:gems/lapotron'], null, 'gtceu:lapotron_singularity', null, ZPM, 1200, 'lapotron_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/iesnium'], null, 'gtceu:iesnium_singularity', null, ZPM, 1200, 'iesnium_singularity')    
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/hellforged'], null, 'gtceu:hellforged_singularity', null, ZPM, 1200, 'hellforged_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/allthemodium'], null, 'gtceu:allthemodium_singularity', null, ZPM, 1200, 'allthemodium_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/vibranium'], null, 'gtceu:vibranium_singularity', null, ZPM, 1200, 'vibranium_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/unobtainium'], null, 'gtceu:unobtainium_singularity', null, ZPM, 1200, 'unobtainium_singularity')
    blackHole(['#forge:singularities/core', '4000x #forge:ingots/compressed_iron'], null, 'gtceu:compressed_iron_singularity', null, ZPM, 1200, 'compressed_iron_singularity')    
    
    blackHole(['allthecompressed:diamond_block_3x', '#forge:frames/alfsteel', '6x #forge:plates/strontium_aluminate', '12x #forge:plates/fluorozirconic_composite'], null , 'gtceu:bedrockium_dust', null, ZPM, 1200, 'bedrockium_compression')
    blackHole(['#forge:frames/bedrockium', '6x #forge:plates/rheni_zirconium_alloy', '12x #forge:rods/potassium_calcium_orthosilicate'], null , 'gtceu:core_singularity', null, ZPM, 1200, 'core_singularity')

    blackHole(['#forge:singularities/core', '4000x gtceu:beryllium_ingot'], null, 'gtceu:beryllium_singularity', null, ZPM, 1200, 'beryllium_singularity')
    

    blackHole(['#forge:singularities/core','8000x elementalcraft:fire_shard'],    '#forge:sanguine_concentrate 32000000', 'gtceu:elemental_fire_singularity', null, ZPM, 1200, 'fire_singularity')
    blackHole(['#forge:singularities/core','8000x elementalcraft:air_shard'],     '#forge:source 32000000', 'gtceu:elemental_air_singularity', null, ZPM, 1200, 'air_singularity')
    blackHole(['#forge:singularities/core','8000x elementalcraft:earth_shard'],   '#forge:experience 32000000', 'gtceu:elemental_earth_singularity', null, ZPM, 1200, 'earth_singularity')
    blackHole(['#forge:singularities/core','8000x elementalcraft:water_shard'],   '#forge:mana_essence 32000000', 'gtceu:elemental_water_singularity', null, ZPM, 1200, 'water_singularity')

    blackHole(['#forge:singularities/core','4000x elementalcraft:powerful_fire_shard'],  '#forge:sanguine_concentrate 32000000', 'gtceu:elemental_fire_singularity', null, ZPM, 600, 'powerful_fire_singularity')
    blackHole(['#forge:singularities/core','4000x elementalcraft:powerful_air_shard'],   '#forge:source 32000000', 'gtceu:elemental_air_singularity', null, ZPM, 600, 'powerful_air_singularity')
    blackHole(['#forge:singularities/core','4000x elementalcraft:powerful_earth_shard'], '#forge:experience 32000000', 'gtceu:elemental_earth_singularity', null, ZPM, 600, 'powerful_earth_singularity')
    blackHole(['#forge:singularities/core','4000x elementalcraft:powerful_water_shard'], '#forge:mana_essence 32000000', 'gtceu:elemental_water_singularity', null, ZPM, 600, 'powerful_water_singularity')

    blackHole(['gtceu:element_fire','gtceu:element_water','gtceu:element_earth','gtceu:element_air'],'#forge:concentrated_dark_matter 10' , null, 'gtceu:fifth_element 14400', ZPM, 1200, 'fifth_element')
})