// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//
// Rebuilt to use a universal read-and-rebuild approach instead of type-specific
// generator branches (LayeredVeinGenerator / VeinedVeinGenerator / DikeVeinGenerator /
// CuboidVeinGenerator each had different, inconsistent APIs for in-place modification).
// Instead: read every vein's real material/block entries via getAllEntries(), then
// rebuild fresh with layeredVeinGenerator() - the same reliable pattern used for the
// custom Ad Astra veins.
//
// Entry parsing uses startsWith/endsWith/slice instead of regex, since regex
// matching was unreliable for this specific string shape in Rhino.

GTCEuServerEvents.oreVeins(allthemods => {
    const PROTECTED_VEIN_PREFIXES = [
        'minecraft:ganymede_',
        'minecraft:charon_',
        'minecraft:diater_',
        'minecraft:dune_',
        'minecraft:europa_',
        'minecraft:galia_',
        'minecraft:io_',
        'minecraft:jada_',
        'minecraft:pluto_',
        'minecraft:soera_',
        'minecraft:titan_',
        'minecraft:vonic_',
        'minecraft:moon_',
        'minecraft:mars_',
        'minecraft:venus_',
        'minecraft:mercury_',
        'minecraft:glacio_'
    ];

    let processedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    function isProtected(veinId) {
        let idString = String(veinId);
        return PROTECTED_VEIN_PREFIXES.some(prefix => idString.startsWith(prefix));
    }

    allthemods.modifyAll((veinId, vein) => {
        try {
            if (isProtected(veinId)) {
                console.info(`[mining_dim_ores] Skipped protected vein: ${veinId}`);
                skippedCount++;
                return;
            }

            let startY;
            let endY;
            switch (vein.layer()) {
                case GTWorldGenLayers.ENDSTONE:
                    startY = -63;
                    endY = 0;
                    break;
                case GTWorldGenLayers.NETHERRACK:
                    startY = 1;
                    endY = 64;
                    break;
                case GTWorldGenLayers.DEEPSLATE:
                    startY = 65;
                    endY = 128;
                    break;
                case GTWorldGenLayers.STONE:
                    startY = 129;
                    endY = 248;
                    break;
                default:
                    startY = 319;
                    endY = 320;
                    break;
            }

            let entries;
            try {
                entries = vein.veinGenerator().getAllEntries();
            } catch (err) {
                console.error(`[mining_dim_ores] Could not read entries for '${veinId}': ${err}`);
                errorCount++;
                return;
            }

            if (!entries || entries.length === 0) {
                console.error(`[mining_dim_ores] '${veinId}' has no readable entries - skipping`);
                errorCount++;
                return;
            }

            let parsedLayers = [];
            entries.forEach(entry => {
                let veinStr = String(entry.vein());
                let chance = entry.chance();

                if (veinStr.startsWith('Right[') && veinStr.endsWith(']')) {
                    let fullId = veinStr.slice('Right['.length, veinStr.length - 1);
                    let matName = fullId.split(':')[1];
                    let mat = GTMaterials.get(matName);
                    if (mat && mat.getName && mat.getName() === matName) {
                        parsedLayers.push({ type: 'mat', mat: mat, chance: chance });
                    } else {
                        console.error(`[mining_dim_ores] Could not resolve material '${matName}' in '${veinId}'`);
                    }
                    return;
                }

                if (veinStr.startsWith('Left[Block(') && veinStr.endsWith(')]')) {
                    let blockId = veinStr.slice('Left[Block('.length, veinStr.length - 2);
                    parsedLayers.push({ type: 'block', blockId: blockId, chance: chance });
                    return;
                }

                //console.error(`[mining_dim_ores] Could not parse entry for '${veinId}': ${veinStr}`);
            });

            if (parsedLayers.length === 0) {
                console.error(`[mining_dim_ores] No usable layers parsed for '${veinId}' - skipping`);
                errorCount++;
                return;
            }

            vein.heightRangeUniform(startY, endY);
            vein.dimensions('allthemodium:mining');
            vein.biomes('#allthemodium:mining_features/mining_biomes');
            vein.density(Math.min(vein.density(), 0.4));
            vein.clusterSize(Math.min(vein.clusterSize().getMaxValue(), 40));
            vein.layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => {
                parsedLayers.forEach(pl => {
                    if (pl.type === 'mat') {
                        pattern = pattern.layer(l => l.weight(pl.chance).mat(pl.mat).size(2, 4));
                    } else {
                        pattern = pattern.layer(l => l.weight(pl.chance).block(() => Block.getBlock(pl.blockId)).size(2, 4));
                    }
                });
                return pattern;
            }));

            console.info(`[mining_dim_ores] Rebuilt '${veinId}' with ${parsedLayers.length} layers, Y[${startY},${endY}]`);
            processedCount++;

        } catch (err) {
            console.error(`[mining_dim_ores] FAILED processing '${veinId}': ${err}`);
            errorCount++;
        }
    });

    console.info(`[mining_dim_ores] Done. Processed: ${processedCount}, Skipped (protected): ${skippedCount}, Errors: ${errorCount}`);
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
