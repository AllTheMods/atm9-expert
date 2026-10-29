// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


const PLANETS = {
    moon: 'ad_astra:moon',
    mars: 'ad_astra:mars',
    mercury: 'ad_astra:mercury',
    venus: 'ad_astra:venus',
    glacio: 'ad_astra:glacio', // adjust namespace if your Glacio addon differs
};

GTCEuServerEvents.oreVeins(event => {

    event.add("moon_platinum_vein", vein => {
        vein.weight(25)
        vein.density(0.2)
        vein.clusterSize(60)
        vein.layer("moon")
        vein.dimensions(["ad_astra:moon"])
        vein.heightRangeUniform(-50, 0)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Platinum, 2, -50, 0)
            .withBlock(GTMaterials.Palladium, 1, -50, -15)
            .withBlock(GTMaterials.Cooperite, 1, -40, -20)
        )
    })

    event.add("mars_draconium_vein", vein => {
        vein.weight(25)
        vein.density(0.2)
        vein.clusterSize(60)
        vein.layer("mars")
        vein.dimensions(["ad_astra:mars"])
        vein.heightRangeUniform(-50, 0)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('draconium'), 2, -50, 0)            
        )
    })

    event.add("glacio_trinium_vein", vein => {
        vein.weight(25)
        vein.density(0.2)
        vein.clusterSize(60)
        vein.layer("glacio")
        vein.dimensions(["ad_astra:glacio"])
        vein.heightRangeUniform(-50, 0)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('trinium'), 2, -50, 0)
        )
    })
    
    event.add("mining_dolomite_fluorite_vein", vein => {
        vein.weight(25)
        vein.density(0.4)
        vein.clusterSize(100)
        vein.layer(GTWorldGenLayers.STONE)
        vein.dimensions(["allthemodium:mining"])
        vein.biomes("#allthemodium:mining_features/mining_biomes")
        vein.heightRangeUniform(129, 248)
        vein.dikeVeinGenerator(generator => generator            
            .withBlock(GTMaterials.get('dolomite'), 2, 129, 248)
            .withBlock(GTMaterials.get('fluorite'), 1, 129, 213)
        )
    })

    event.add("mining_trona_vein", vein => {
        vein.weight(25)
        vein.density(0.4)
        vein.clusterSize(100)
        vein.layer(GTWorldGenLayers.STONE)
        vein.dimensions(["allthemodium:mining"])
        vein.biomes("#allthemodium:mining_features/mining_biomes")
        vein.heightRangeUniform(129, 248)
        vein.dikeVeinGenerator(generator => generator            
            .withBlock(GTMaterials.get('trona'), 2, 129, 248)            
        )
    })
   
    const moonOreGroups = [
        ['clausthalite', 'naumannite'],                          // selenides (Pb-Se, Ag-Se)
        ['hafnian_zircon', 'hafnon', 'baddeleyite', 'zircon'],    // Zr/Hf minerals — classic real-world association
        ['ullmannite', 'jamesonite'],                             // antimony sulfosalts
        ['gallite', 'cryolite'],
        ['columbite_tantalite', 'microlite', 'wodginite'],        // Nb/Ta minerals
        ['bismuthinite', 'bismite', 'bismutite'],                 // bismuth minerals
        ['thorianite', 'thorite'],                                // thorium minerals        
        ['hellish', 'terraria', 'coagulite'],                                   // flavor/lore ores
        ['radio_thoric_phosphate']
    ];

    const marsOreGroups = [
        ['roquesite', 'indite', 'sakuraiite'],           // indium minerals
        ['thortveitite', 'kolbeckite', 'bazzite'],       // scandium minerals
        ['fergusonite', 'samarskite', 'lanthanite'],                   // Nb + rare-earth minerals
        ['cerite', 'gadolinite', 'yttrialite', 'xenotime'], // Y/Ce/REE silicates & phosphates        
        ['drenched_iron', 'swift_alloy', 'fireite'],
        ['rhenite', 'tarkianite'],                        // rhenium minerals
    ];

    const mercuryOreGroups = [
        ['crookesite', 'hutchinsonite', 'lorandite', 'caliche'],    // thallium minerals
        ['strontianite', 'celestite'],                   // strontium minerals
        ['osmiridium', 'nether_star']
        ];

    const venusOreGroups = [
        ['calaverite', 'kurilite', 'telluride'],         // telluride minerals (Au-Te, Ag-Te-Se, Ag-Te)
        ['laurite']                                       // ruthenium/osmium sulfide
    ];

    const glacioOreGroups = [
        ['germanite', 'renierite', 'argyrodite'],        // germanium minerals        
        ['rubicline', 'rhodizite'],                
        ['tenebrius', 'etrium', 'chaotic']                // flavor/lore ores
    ];

    function addOreGroups(groups, planetPrefix, planetDim, layerName) {
        groups.forEach((group, i) => {
            const veinId = group.join('_');
            event.add(`${planetPrefix}_${veinId}`, vein => {
                vein.weight(35).density(0.5).clusterSize(35)
                    .layer(layerName)
                    .dimensions([planetDim])
                    .heightRangeUniform(10 + i * 5, 60 + i * 5)
                    .layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => {
                        group.forEach(ore => {
                            pattern = pattern.layer(l => l.weight(1).mat(GTMaterials.get(ore)).size(2, 4));
                        });
                        return pattern;
                    }));
            });
        });
    }

    addOreGroups(moonOreGroups, 'moon', PLANETS.moon, 'moon');
    addOreGroups(marsOreGroups, 'mars', PLANETS.mars, 'mars');
    addOreGroups(mercuryOreGroups, 'mercury', PLANETS.mercury, 'mercury');
    addOreGroups(venusOreGroups, 'venus', PLANETS.venus, 'venus');
    addOreGroups(glacioOreGroups, 'glacio', PLANETS.glacio, 'glacio');

    function cloneVeinToPlanet(sourceVeinId, newVeinId, planetDim, layerName, heightMin, heightMax) {
        let entries = null;

        try {
            event.modify(`gtceu:${sourceVeinId}`, vein => {
                entries = vein.veinGenerator().getAllEntries();
            });
        } catch (err) {
            console.error(`[ad_astra_ore_veins] Failed reading entries for '${sourceVeinId}': ${err}`);
            return;
        }

        if (!entries || entries.length === 0) {
            console.error(`[ad_astra_ore_veins] No entries for '${sourceVeinId}', skipped '${newVeinId}'`);
            return;
        }

        let parsedLayers = [];
        entries.forEach(entry => {
            let veinStr = String(entry.vein());
            let match = veinStr.match(/^Right\[([a-z_]+:[a-z_0-9]+)\]$/);
            if (!match) {
                //console.error(`[ad_astra_ore_veins] Skipping non-material entry in '${sourceVeinId}': ${veinStr}`);
                return;
            }
            let matName = match[1].split(':')[1];
            let mat = GTMaterials.get(matName);
            if (!mat || !mat.getName || mat.getName() !== matName) {
                console.error(`[ad_astra_ore_veins] Could not resolve material '${matName}' from '${sourceVeinId}'`);
                return;
            }
            parsedLayers.push({ mat: mat, chance: entry.chance() });
        });

        if (parsedLayers.length === 0) {
            console.error(`[ad_astra_ore_veins] No resolvable materials for '${sourceVeinId}', skipped '${newVeinId}'`);
            return;
        }

        event.add(newVeinId, vein => {
            vein.weight(35).density(0.5).clusterSize(35)
                .layer(layerName)
                .dimensions([planetDim])
                .heightRangeUniform(heightMin, heightMax)
                .layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => {
                    parsedLayers.forEach(pl => {
                        pattern = pattern.layer(l => l.weight(pl.chance).mat(pl.mat).size(2, 4));
                    });
                    return pattern;
                }));
        });

        console.info(`[ad_astra_ore_veins] Cloned '${sourceVeinId}' -> '${newVeinId}' with ${parsedLayers.length} materials`);
    }

    function cloneList(veinList, planetPrefix, planetDim, layerName) {
        veinList.forEach((veinId, i) => {
            let newId = `${planetPrefix}_${veinId}`;
            cloneVeinToPlanet(veinId, newId, planetDim, layerName, 10 + i * 5, 60 + i * 5);
        });
    }

    // ---- Overworld -> Moon (11) ----
    cloneList([
        'apatite_vein', 'cassiterite_vein', 'coal_vein', 'copper_tin_vein', 'galena_vein',
        'garnet_tin_vein', 'iron_vein', 'lubricant_vein', 'magnetite_vein_ow', 'mineral_sand_vein', 'nickel_vein'
    ], 'moon', 'ad_astra:moon', 'moon');

    // ---- Overworld -> Mars (10) ----
    cloneList([
        'salts_vein', 'oilsands_vein', 'copper_vein', 'diamond_vein', 'lapis_vein',
        'manganese_vein_ow', 'mica_vein', 'olivine_vein', 'redstone_vein_ow', 'sapphire_vein'
    ], 'mars', 'ad_astra:mars', 'mars');

    // ---- Nether -> Mercury (6) ----
    cloneList([
        'banded_iron_vein', 'beryllium_vein', 'certus_quartz', 'manganese_vein', 'molybdenum_vein', 'monazite_vein'
    ], 'mercury', 'ad_astra:mercury', 'mercury');

    // ---- Nether -> Venus (6) ----
    cloneList([
        'nether_quartz_vein', 'redstone_vein', 'saltpeter_vein', 'sulfur_vein', 'tetrahedrite_vein', 'topaz_vein'
    ], 'venus', 'ad_astra:venus', 'venus');

    // ---- End -> Glacio (6) ----
    cloneList([
        'bauxite_vein_end', 'magnetite_vein_end', 'naquadah_vein', 'pitchblende_vein_end', 'scheelite_vein', 'sheldonite_vein'
    ], 'glacio', 'ad_astra:glacio', 'glacio');

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
