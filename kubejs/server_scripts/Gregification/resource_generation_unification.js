// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// Unified ore database: one row per ore, drives BOTH the Industrial Foregoing laser drill and the Occultism miners.
// Default laser/miner recipes are disabled with the no-op override zips, so only rows here exist in-game.
//
// Row fields:
//   n      ore name (GT/forge name)           t     tier (1 overworld, 2 nether, 3 end, 4 moon ... 8 glacio)
//   dim    laser dimension zone               lens  lens family number (laser_lens<N>), shared inside a dimension
//   y      laser sweet-spot depth, 0-120      miner foliot | djinni | afrit | marid | eldritch
//   mw     miner weight (default 100)         lw    laser sweet-spot weight (default 3)
//   ore / raw / item   optional explicit item ids, tried before the automatic lookup
//
// Laser: every ore gets a sweet-spot band (high weight) plus a full-range background (weight 1), so the pool
// is never empty and lenses (+catalystModifier weight each) decide what you get.

ServerEvents.recipes(allthemods => {
    const BG_MIN = 0, BG_MAX = 120;
    const SWEET_WEIGHT = 3, BG_WEIGHT = 1, MINER_WEIGHT = 100;

    const END = ['minecraft:the_end', 'minecraft:the_void', 'minecraft:small_end_islands', 'minecraft:end_barrens', 'minecraft:end_highlands', 'minecraft:end_midlands'];
    const NETHER = ['minecraft:nether_wastes', 'minecraft:soul_sand_valley', 'minecraft:crimson_forest', 'minecraft:warped_forest', 'minecraft:basalt_deltas'];
    const MOON = ['ad_astra:lunar_wastelands'];
    const MARS = ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands'];
    const MERCURY = ['ad_astra:mercury_deltas'];
    const VENUS = ['ad_astra:venus_wastelands', 'ad_astra:infernal_venus_barrens'];
    const GLACIO = ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens'];
    const ATM = ['allthemodium:mining', 'allthemodium:the_other', 'allthemodium:the_beyond', 'allthemodium:basalt_deltas', 'allthemodium:crimson_forest', 'allthemodium:desert', 'allthemodium:desert_hills', 'allthemodium:soul_sand_valley', 'allthemodium:warped_forest'];

    const biomes = values => ({ type: 'minecraft:worldgen/biome', values: values });
    const ZONES = {
        overworld: { whitelist: {}, blacklist: biomes(END.concat(NETHER, MOON, MARS, MERCURY, VENUS, GLACIO, ATM)) },
        nether: { whitelist: biomes(NETHER), blacklist: {} },
        end: { whitelist: biomes(END), blacklist: {} },
        moon: { whitelist: biomes(MOON), blacklist: {} },
        mars: { whitelist: biomes(MARS), blacklist: {} },
        mercury: { whitelist: biomes(MERCURY), blacklist: {} },
        venus: { whitelist: biomes(VENUS), blacklist: {} },
        glacio: { whitelist: biomes(GLACIO), blacklist: {} }
    };

    const MINERS = {
        foliot: { block: 'occultism:miner_foliot_unspecialized', idPrefix: 'occultism:foliot_miner_' },
        djinni: { block: 'occultism:miner_djinni_ores', idPrefix: 'occultism:djinni_miner_' },
        afrit: { block: 'occultism:miner_afrit_deeps', idPrefix: 'occultism:afrit_miner_' },
        marid: { block: 'occultism:miner_marid_master', idPrefix: 'occultism:master_miner_' },
        eldritch: { block: 'occultism:miner_ancient_eldritch', idPrefix: 'occultism:eldritch_miner_' }
    };

    // Namespaces tried (in priority order) when an ore has no explicit id: vanilla, All The Ores, All The Modium, GT.
    const NAMESPACES = ['minecraft', 'alltheores', 'allthemodium', 'gtceu', 'justdirethings', 'thermal'];
    const ALT = { aluminium: ['aluminum'], nether_quartz: ['quartz'], plutonium_239: ['plutonium'] };

    const names = n => [n].concat(ALT[n] || []);
    const firstExisting = list => {
        for (let i = 0; i < list.length; i++) {
            if (Item.exists(list[i])) return list[i];
        }
        return null;
    };
    const oreItem = e => {
        const list = [];
        if (e.ore) list.push(e.ore);
        if (e.item) list.push(e.item);
        NAMESPACES.forEach(ns => names(e.n).forEach(n => { list.push(ns + ':' + n + '_ore'); }));
        return firstExisting(list);
    };
    const laserItem = e => {
        const list = [];
        if (e.raw) list.push(e.raw);
        if (e.item) list.push(e.item);
        NAMESPACES.forEach(ns => names(e.n).forEach(n => { list.push(ns + ':raw_' + n); }));
        if (e.ore) list.push(e.ore);
        NAMESPACES.forEach(ns => names(e.n).forEach(n => { list.push(ns + ':' + n + '_ore'); }));
        return firstExisting(list);
    };

    const ORES = [
    // ---- overworld ----
    { n: 'goethite', t: 1, dim: 'overworld', lens: 0, y: [43, 60], miner: 'foliot' },
    { n: 'hematite', t: 1, dim: 'overworld', lens: 0, y: [26, 43], miner: 'foliot' },
    { n: 'iron', t: 1, dim: 'overworld', lens: 0, y: [0, 17], miner: 'foliot' },
    { n: 'yellow_limonite', t: 1, dim: 'overworld', lens: 0, y: [34, 52], miner: 'foliot' },
    { n: 'magnetite', t: 1, dim: 'overworld', lens: 0, y: [8, 26], miner: 'foliot' },
    { n: 'vanadium_magnetite', t: 1, dim: 'overworld', lens: 0, y: [17, 34], miner: 'foliot' },
    { n: 'cassiterite', t: 1, dim: 'overworld', lens: 1, y: [20, 33], miner: 'foliot' },
    { n: 'cassiterite_sand', t: 1, dim: 'overworld', lens: 1, y: [27, 40], miner: 'foliot' },
    { n: 'chalcopyrite', t: 1, dim: 'overworld', lens: 1, y: [7, 20], miner: 'foliot' },
    { n: 'copper', t: 1, dim: 'overworld', lens: 1, y: [0, 13], miner: 'foliot' },
    { n: 'galena', t: 1, dim: 'overworld', lens: 1, y: [47, 60], miner: 'foliot' },
    { n: 'lead', t: 1, dim: 'overworld', lens: 1, y: [40, 53], miner: 'foliot' },
    { n: 'malachite', t: 1, dim: 'overworld', lens: 1, y: [13, 27], miner: 'foliot' },
    { n: 'tin', t: 1, dim: 'overworld', lens: 1, y: [33, 47], miner: 'foliot' },
    { n: 'gold', t: 1, dim: 'overworld', lens: 2, y: [0, 40], miner: 'foliot' },
    { n: 'silver', t: 1, dim: 'overworld', lens: 2, y: [20, 60], miner: 'foliot' },
    { n: 'cobaltite', t: 1, dim: 'overworld', lens: 3, y: [36, 60], miner: 'foliot' },
    { n: 'garnierite', t: 1, dim: 'overworld', lens: 3, y: [24, 48], miner: 'foliot' },
    { n: 'nickel', t: 1, dim: 'overworld', lens: 3, y: [0, 24], miner: 'foliot' },
    { n: 'pentlandite', t: 1, dim: 'overworld', lens: 3, y: [12, 36], miner: 'foliot' },
    { n: 'amethyst', t: 1, dim: 'overworld', lens: 4, y: [40, 60], miner: 'foliot' },
    { n: 'green_sapphire', t: 1, dim: 'overworld', lens: 4, y: [20, 40], miner: 'foliot' },
    { n: 'opal', t: 1, dim: 'overworld', lens: 4, y: [30, 50], miner: 'foliot' },
    { n: 'ruby', t: 1, dim: 'overworld', lens: 4, y: [0, 20], miner: 'foliot' },
    { n: 'sapphire', t: 1, dim: 'overworld', lens: 4, y: [10, 30], miner: 'foliot' },
    { n: 'almandine', t: 1, dim: 'overworld', lens: 5, y: [0, 15], miner: 'foliot' },
    { n: 'red_garnet', t: 1, dim: 'overworld', lens: 5, y: [30, 45], miner: 'foliot' },
    { n: 'garnet_sand', t: 1, dim: 'overworld', lens: 5, y: [45, 60], miner: 'foliot' },
    { n: 'yellow_garnet', t: 1, dim: 'overworld', lens: 5, y: [38, 53], miner: 'foliot' },
    { n: 'grossular', t: 1, dim: 'overworld', lens: 5, y: [8, 23], miner: 'foliot' },
    { n: 'pyrope', t: 1, dim: 'overworld', lens: 5, y: [15, 30], miner: 'foliot' },
    { n: 'spessartine', t: 1, dim: 'overworld', lens: 5, y: [23, 38], miner: 'foliot' },
    { n: 'basaltic_mineral_sand', t: 1, dim: 'overworld', lens: 6, y: [0, 17], miner: 'foliot' },
    { n: 'bentonite', t: 1, dim: 'overworld', lens: 6, y: [43, 60], miner: 'foliot' },
    { n: 'diatomite', t: 1, dim: 'overworld', lens: 6, y: [26, 43], miner: 'foliot' },
    { n: 'fullers_earth', t: 1, dim: 'overworld', lens: 6, y: [34, 52], miner: 'foliot' },
    { n: 'glauconite_sand', t: 1, dim: 'overworld', lens: 6, y: [17, 34], miner: 'foliot' },
    { n: 'granitic_mineral_sand', t: 1, dim: 'overworld', lens: 6, y: [8, 26], miner: 'foliot' },
    { n: 'asbestos', t: 1, dim: 'overworld', lens: 7, y: [30, 42], miner: 'foliot' },
    { n: 'kyanite', t: 1, dim: 'overworld', lens: 7, y: [18, 30], miner: 'foliot' },
    { n: 'lepidolite', t: 1, dim: 'overworld', lens: 7, y: [36, 48], miner: 'foliot' },
    { n: 'mica', t: 1, dim: 'overworld', lens: 7, y: [0, 12], miner: 'foliot' },
    { n: 'pollucite', t: 1, dim: 'overworld', lens: 7, y: [48, 60], miner: 'foliot' },
    { n: 'soapstone', t: 1, dim: 'overworld', lens: 7, y: [12, 24], miner: 'foliot' },
    { n: 'spodumene', t: 1, dim: 'overworld', lens: 7, y: [42, 54], miner: 'foliot' },
    { n: 'talc', t: 1, dim: 'overworld', lens: 7, y: [6, 18], miner: 'foliot' },
    { n: 'zeolite', t: 1, dim: 'overworld', lens: 7, y: [24, 36], miner: 'foliot' },
    { n: 'apatite', t: 1, dim: 'overworld', lens: 8, y: [33, 47], miner: 'foliot' },
    { n: 'calcite', t: 1, dim: 'overworld', lens: 8, y: [20, 33], miner: 'foliot' },
    { n: 'gypsum', t: 1, dim: 'overworld', lens: 8, y: [13, 27], miner: 'foliot' },
    { n: 'lazurite', t: 1, dim: 'overworld', lens: 8, y: [40, 53], miner: 'foliot' },
    { n: 'rock_salt', t: 1, dim: 'overworld', lens: 8, y: [7, 20], miner: 'foliot' },
    { n: 'salt', t: 1, dim: 'overworld', lens: 8, y: [0, 13], miner: 'foliot' },
    { n: 'sodalite', t: 1, dim: 'overworld', lens: 8, y: [47, 60], miner: 'foliot' },
    { n: 'tricalcium_phosphate', t: 1, dim: 'overworld', lens: 8, y: [27, 40], miner: 'foliot' },
    { n: 'coal', t: 1, dim: 'overworld', lens: 9, y: [0, 30], miner: 'foliot' },
    { n: 'graphite', t: 1, dim: 'overworld', lens: 9, y: [15, 45], miner: 'foliot' },
    { n: 'oilsands', t: 1, dim: 'overworld', lens: 9, y: [30, 60], miner: 'foliot' },
    { n: 'bauxite', t: 1, dim: 'overworld', lens: 10, y: [0, 12], miner: 'foliot' },
    { n: 'cinnabar', t: 1, dim: 'overworld', lens: 10, y: [25, 37], miner: 'foliot' },
    { n: 'magnesite', t: 1, dim: 'overworld', lens: 10, y: [30, 42], miner: 'foliot' },
    { n: 'niter', t: 1, dim: 'overworld', lens: 10, y: [50, 62], miner: 'foliot', ore: 'thermal:niter_ore', raw: 'thermal:niter' },
    { n: 'olivine', t: 1, dim: 'overworld', lens: 10, y: [40, 52], miner: 'foliot' },
    { n: 'pyrite', t: 1, dim: 'overworld', lens: 10, y: [35, 47], miner: 'foliot' },
    { n: 'pyrochlore', t: 1, dim: 'overworld', lens: 10, y: [10, 22], miner: 'foliot' },
    { n: 'pyrolusite', t: 1, dim: 'overworld', lens: 10, y: [15, 27], miner: 'foliot' },
    { n: 'realgar', t: 1, dim: 'overworld', lens: 10, y: [20, 32], miner: 'foliot' },
    { n: 'sulfur', t: 1, dim: 'overworld', lens: 10, y: [45, 57], miner: 'foliot' },
    { n: 'tantalite', t: 1, dim: 'overworld', lens: 10, y: [5, 17], miner: 'foliot' },
    { n: 'ferricore', t: 1, dim: 'overworld', lens: 11, y: [0, 30], miner: 'foliot', ore: 'justdirethings:raw_ferricore_ore', raw: 'justdirethings:raw_ferricore' },
    { n: 'celestigem', t: 1, dim: 'overworld', lens: 11, y: [30, 50], miner: 'foliot', mw: 50, lw: 2, ore: 'justdirethings:raw_celestigem_ore', raw: 'justdirethings:celestigem' },    
    { n: 'inferium', t: 1, dim: 'overworld', lens: 11, y: [15, 45], miner: 'foliot', ore: 'mysticalagriculture:inferium_ore' },
    { n: 'prosperity', t: 1, dim: 'overworld', lens: 11, y: [30, 60], miner: 'foliot', ore: 'mysticalagriculture:prosperity_ore' },
    { n: 'uranium', t: 1, dim: 'overworld', lens: 12, y: [20, 60], miner: 'foliot' },
    { n: 'zinc', t: 1, dim: 'overworld', lens: 12, y: [0, 40], miner: 'foliot' },
    { n: 'dolomite', t: 1, dim: 'overworld', lens: 13, y: [0, 30], miner: 'foliot' },
    { n: 'fluorite', t: 1, dim: 'overworld', lens: 13, y: [15, 45], miner: 'foliot' },
    { n: 'trona', t: 1, dim: 'overworld', lens: 13, y: [30, 60], miner: 'foliot' },
    // ---- nether ----
    { n: 'bornite', t: 2, dim: 'nether', lens: 0, y: [46, 58], miner: 'foliot' },
    { n: 'chalcocite', t: 2, dim: 'nether', lens: 0, y: [40, 52], miner: 'foliot' },
    { n: 'sphalerite', t: 2, dim: 'nether', lens: 0, y: [23, 35], miner: 'foliot' },
    { n: 'stibnite', t: 2, dim: 'nether', lens: 0, y: [29, 41], miner: 'foliot' },
    { n: 'tetrahedrite', t: 2, dim: 'nether', lens: 0, y: [34, 46], miner: 'foliot' },
    { n: 'molybdenite', t: 2, dim: 'nether', lens: 1, y: [23, 37], miner: 'foliot' },
    { n: 'molybdenum', t: 2, dim: 'nether', lens: 1, y: [30, 44], miner: 'foliot' },
    { n: 'powellite', t: 2, dim: 'nether', lens: 1, y: [37, 51], miner: 'foliot' },
    { n: 'wulfenite', t: 2, dim: 'nether', lens: 1, y: [44, 58], miner: 'foliot' },
    { n: 'alunite', t: 2, dim: 'nether', lens: 2, y: [40, 52], miner: 'foliot' },
    { n: 'barite', t: 2, dim: 'nether', lens: 2, y: [46, 58], miner: 'foliot' },
    { n: 'beryllium', t: 2, dim: 'nether', lens: 2, y: [34, 46], miner: 'foliot' },
    { n: 'neodymium', t: 2, dim: 'nether', lens: 2, y: [23, 35], miner: 'foliot' },
    { n: 'thorium', t: 2, dim: 'nether', lens: 2, y: [29, 41], miner: 'foliot' },
    { n: 'certus_quartz', t: 2, dim: 'nether', lens: 3, y: [32, 49], miner: 'foliot' },
    { n: 'nether_quartz', t: 2, dim: 'nether', lens: 3, y: [23, 40], miner: 'foliot' },
    { n: 'quartzite', t: 2, dim: 'nether', lens: 3, y: [40, 58], miner: 'foliot' },
    { n: 'blue_topaz', t: 2, dim: 'nether', lens: 4, y: [35, 58], miner: 'foliot' },
    { n: 'topaz', t: 2, dim: 'nether', lens: 4, y: [23, 46], miner: 'foliot' },
    { n: 'electrotine', t: 2, dim: 'nether', lens: 5, y: [40, 58], miner: 'foliot' },
    { n: 'lapis', t: 2, dim: 'nether', lens: 5, y: [32, 49], miner: 'foliot' },
    { n: 'redstone', t: 2, dim: 'nether', lens: 5, y: [23, 40], miner: 'foliot' },
    { n: 'blazegold', t: 2, dim: 'nether', lens: 6, y: [23, 46], miner: 'foliot', ore: 'justdirethings:raw_blazegold_ore', raw: 'justdirethings:raw_blazegold' },
    { n: 'soulium', t: 2, dim: 'nether', lens: 6, y: [35, 58], miner: 'foliot', ore: 'mysticalagriculture:soulium_ore' },
    // ---- end ----
    { n: 'aluminium', t: 3, dim: 'end', lens: 0, y: [20, 32], miner: 'foliot' },
    { n: 'chromite', t: 3, dim: 'end', lens: 0, y: [35, 47], miner: 'foliot' },
    { n: 'ilmenite', t: 3, dim: 'end', lens: 0, y: [30, 42], miner: 'foliot' },
    { n: 'lithium', t: 3, dim: 'end', lens: 0, y: [25, 37], miner: 'foliot' },
    { n: 'cooperite', t: 3, dim: 'end', lens: 1, y: [33, 45], miner: 'foliot' },
    { n: 'palladium', t: 3, dim: 'end', lens: 1, y: [26, 39], miner: 'foliot' },
    { n: 'platinum', t: 3, dim: 'end', lens: 1, y: [20, 33], miner: 'foliot' },
    { n: 'pitchblende', t: 3, dim: 'end', lens: 2, y: [20, 33], miner: 'foliot' },
    { n: 'plutonium_239', t: 3, dim: 'end', lens: 2, y: [33, 45], miner: 'foliot' },
    { n: 'uraninite', t: 3, dim: 'end', lens: 2, y: [26, 39], miner: 'foliot' },
    { n: 'scheelite', t: 3, dim: 'end', lens: 3, y: [20, 37], miner: 'foliot' },
    { n: 'tungstate', t: 3, dim: 'end', lens: 3, y: [28, 45], miner: 'foliot' },
    { n: 'diamond', t: 3, dim: 'end', lens: 4, y: [20, 37], miner: 'foliot' },
    { n: 'emerald', t: 3, dim: 'end', lens: 4, y: [28, 45], miner: 'foliot' },
    { n: 'bastnasite', t: 3, dim: 'end', lens: 5, y: [20, 58], miner: 'foliot' },
    { n: 'monazite', t: 3, dim: 'end', lens: 5, y: [20, 58], miner: 'foliot' },
    { n: 'naquadah', t: 3, dim: 'end', lens: 6, y: [20, 45], miner: 'foliot' },
    { n: 'azure_silver', t: 3, dim: 'end', lens: 7, y: [29, 41], miner: 'foliot' },
    { n: 'crimson_iron', t: 3, dim: 'end', lens: 7, y: [20, 32], miner: 'foliot' },
    { n: 'draconium', t: 3, dim: 'end', lens: 7, y: [35, 47], miner: 'foliot', ore: 'draconicevolution:end_draconium_ore' },
    { n: 'eclipsealloy', t: 3, dim: 'end', lens: 7, y: [25, 37], miner: 'foliot', ore: 'justdirethings:raw_eclipsealloy_ore', raw: 'justdirethings:raw_eclipsealloy' },
    { n: 'echo_shard', t: 3, dim: 'end', lens: 8, y: [20, 45], miner: 'foliot', mw: 20, lw: 1, item: 'minecraft:echo_shard' },
    // ---- moon ----
    { n: 'clausthalite', t: 4, dim: 'moon', lens: 0, y: [22, 36], miner: 'djinni' },
    { n: 'naumannite', t: 4, dim: 'moon', lens: 0, y: [38, 51], miner: 'djinni' },
    { n: 'baddeleyite', t: 4, dim: 'moon', lens: 1, y: [48, 61], miner: 'djinni' },
    { n: 'hafnian_zircon', t: 4, dim: 'moon', lens: 1, y: [74, 89], miner: 'djinni' },
    { n: 'hafnon', t: 4, dim: 'moon', lens: 1, y: [27, 40], miner: 'djinni' },
    { n: 'zircon', t: 4, dim: 'moon', lens: 1, y: [21, 35], miner: 'djinni' },
    { n: 'jamesonite', t: 4, dim: 'moon', lens: 2, y: [39, 54], miner: 'djinni' },
    { n: 'ullmannite', t: 4, dim: 'moon', lens: 2, y: [65, 79], miner: 'djinni' },
    { n: 'cryolite', t: 4, dim: 'moon', lens: 3, y: [55, 68], miner: 'djinni' },
    { n: 'gallite', t: 4, dim: 'moon', lens: 3, y: [29, 43], miner: 'djinni' },
    { n: 'columbite_tantalite', t: 4, dim: 'moon', lens: 4, y: [44, 58], miner: 'djinni' },
    { n: 'microlite', t: 4, dim: 'moon', lens: 4, y: [25, 38], miner: 'djinni' },
    { n: 'wodginite', t: 4, dim: 'moon', lens: 4, y: [79, 93], miner: 'djinni' },
    { n: 'bismite', t: 4, dim: 'moon', lens: 5, y: [50, 63], miner: 'djinni' },
    { n: 'bismuthinite', t: 4, dim: 'moon', lens: 5, y: [33, 46], miner: 'djinni' },
    { n: 'bismutite', t: 4, dim: 'moon', lens: 5, y: [72, 85], miner: 'djinni' },
    { n: 'thorianite', t: 4, dim: 'moon', lens: 6, y: [36, 49], miner: 'djinni' },
    { n: 'thorite', t: 4, dim: 'moon', lens: 6, y: [22, 35], miner: 'djinni' },
    { n: 'coagulite', t: 4, dim: 'moon', lens: 7, y: [41, 55], miner: 'djinni' },
    { n: 'hellish', t: 4, dim: 'moon', lens: 7, y: [58, 71], miner: 'djinni', mw: 500 },
    { n: 'terraria', t: 4, dim: 'moon', lens: 7, y: [83, 96], miner: 'djinni', mw: 500 },
    { n: 'radio_thoric_phosphate', t: 4, dim: 'moon', lens: 8, y: [79, 93], miner: 'djinni' },
    { n: 'ancient_debris', t: 4, dim: 'moon', lens: 9, y: [61, 101], miner: 'djinni', ore: 'minecraft:ancient_debris', item: 'minecraft:ancient_debris' },
    { n: 'desh', t: 4, dim: 'moon', lens: 9, y: [20, 61], miner: 'djinni', ore: 'ad_astra:moon_desh_ore', raw: 'ad_astra:raw_desh' },
    { n: 'moon_cheese', t: 4, dim: 'moon', lens: 9, y: [40, 81], miner: 'djinni', ore: 'ad_astra:moon_cheese_ore', item: 'ad_astra:cheese' },
    { n: 'mithril', t: 4, dim: 'moon', lens: 10, y: [20, 101], miner: 'djinni', ore: 'irons_spellbooks:mithril_ore', raw: 'irons_spellbooks:raw_mithril' },
    { n: 'allthemodium', t: 4, dim: 'moon', lens: 11, y: [20, 61], miner: 'eldritch' },
    { n: 'unobtainium', t: 4, dim: 'moon', lens: 11, y: [61, 101], miner: 'eldritch' },
    { n: 'vibranium', t: 4, dim: 'moon', lens: 11, y: [40, 81], miner: 'eldritch' },
    // ---- mars ----
    { n: 'indite', t: 5, dim: 'mars', lens: 0, y: [67, 80], miner: 'afrit' },
    { n: 'roquesite', t: 5, dim: 'mars', lens: 0, y: [28, 41], miner: 'afrit' },
    { n: 'sakuraiite', t: 5, dim: 'mars', lens: 0, y: [45, 58], miner: 'afrit' },
    { n: 'bazzite', t: 5, dim: 'mars', lens: 1, y: [34, 48], miner: 'afrit' },
    { n: 'kolbeckite', t: 5, dim: 'mars', lens: 1, y: [75, 88], miner: 'afrit' },
    { n: 'thortveitite', t: 5, dim: 'mars', lens: 1, y: [23, 37], miner: 'afrit' },
    { n: 'fergusonite', t: 5, dim: 'mars', lens: 2, y: [53, 66], miner: 'afrit' },
    { n: 'lanthanite', t: 5, dim: 'mars', lens: 2, y: [39, 52], miner: 'afrit' },
    { n: 'samarskite', t: 5, dim: 'mars', lens: 2, y: [89, 102], miner: 'afrit' },
    { n: 'cerite', t: 5, dim: 'mars', lens: 3, y: [61, 74], miner: 'afrit' },
    { n: 'gadolinite', t: 5, dim: 'mars', lens: 3, y: [25, 38], miner: 'afrit' },
    { n: 'xenotime', t: 5, dim: 'mars', lens: 3, y: [43, 57], miner: 'afrit' },
    { n: 'yttrialite', t: 5, dim: 'mars', lens: 3, y: [79, 93], miner: 'afrit' },
    { n: 'drenched_iron', t: 5, dim: 'mars', lens: 4, y: [20, 61], miner: 'afrit' },
    { n: 'fireite', t: 5, dim: 'mars', lens: 4, y: [61, 101], miner: 'afrit' },
    { n: 'swift_alloy', t: 5, dim: 'mars', lens: 4, y: [40, 81], miner: 'afrit' },
    { n: 'rhenite', t: 5, dim: 'mars', lens: 5, y: [28, 42], miner: 'afrit' },
    { n: 'tarkianite', t: 5, dim: 'mars', lens: 5, y: [70, 83], miner: 'afrit' },
    { n: 'ostrum', t: 5, dim: 'mars', lens: 6, y: [20, 101], miner: 'afrit', ore: 'ad_astra:mars_ostrum_ore', raw: 'ad_astra:raw_ostrum' },
    { n: 'adamantite', t: 5, dim: 'mars', lens: 7, y: [20, 101], miner: 'afrit' },
    // ---- mercury ----
    { n: 'caliche', t: 6, dim: 'mercury', lens: 0, y: [22, 35], miner: 'marid' },
    { n: 'crookesite', t: 6, dim: 'mercury', lens: 0, y: [26, 40], miner: 'marid' },
    { n: 'hutchinsonite', t: 6, dim: 'mercury', lens: 0, y: [68, 82], miner: 'marid' },
    { n: 'lorandite', t: 6, dim: 'mercury', lens: 0, y: [48, 61], miner: 'marid' },
    { n: 'celestite', t: 6, dim: 'mercury', lens: 1, y: [34, 47], miner: 'marid' },
    { n: 'strontianite', t: 6, dim: 'mercury', lens: 1, y: [56, 69], miner: 'marid' },
    { n: 'nether_star', t: 6, dim: 'mercury', lens: 2, y: [40, 54], miner: 'marid' },
    { n: 'osmiridium', t: 6, dim: 'mercury', lens: 2, y: [76, 89], miner: 'marid' },
    { n: 'iridium', t: 6, dim: 'mercury', lens: 3, y: [47, 101], miner: 'marid' },
    { n: 'osmium', t: 6, dim: 'mercury', lens: 3, y: [20, 74], miner: 'marid' },
    // ---- venus ----
    { n: 'calaverite', t: 7, dim: 'venus', lens: 0, y: [31, 44], miner: 'marid' },
    { n: 'kurilite', t: 7, dim: 'venus', lens: 0, y: [73, 87], miner: 'marid' },
    { n: 'telluride', t: 7, dim: 'venus', lens: 0, y: [50, 63], miner: 'marid' },
    { n: 'laurite', t: 7, dim: 'venus', lens: 1, y: [23, 37], miner: 'marid' },
    { n: 'calorite', t: 7, dim: 'venus', lens: 2, y: [20, 101], miner: 'marid', ore: 'ad_astra:venus_calorite_ore', raw: 'ad_astra:raw_calorite' },
    // ---- glacio ----
    { n: 'argyrodite', t: 8, dim: 'glacio', lens: 0, y: [83, 96], miner: 'eldritch' },
    { n: 'germanite', t: 8, dim: 'glacio', lens: 0, y: [64, 78], miner: 'eldritch' },
    { n: 'renierite', t: 8, dim: 'glacio', lens: 0, y: [37, 51], miner: 'eldritch' },
    { n: 'rhodizite', t: 8, dim: 'glacio', lens: 1, y: [23, 37], miner: 'eldritch' },
    { n: 'rubicline', t: 8, dim: 'glacio', lens: 1, y: [45, 58], miner: 'eldritch' },
    { n: 'chaotic', t: 8, dim: 'glacio', lens: 2, y: [34, 48], miner: 'eldritch' },
    { n: 'etrium', t: 8, dim: 'glacio', lens: 2, y: [61, 74], miner: 'eldritch' },
    { n: 'ice_shard', t: 8, dim: 'glacio', lens: 3, y: [20, 101], miner: 'eldritch', ore: 'ad_astra:glacio_ice_shard_ore', item: 'ad_astra:ice_shard' },
    { n: 'trinium', t: 8, dim: 'glacio', lens: 4, y: [20, 101], miner: 'eldritch' },
    { n: 'bedrockium', t: 8, dim: 'glacio', lens: 5, y: [20, 74], miner: 'eldritch', mw: 1 },
    { n: 'tenebrius', t: 8, dim: 'glacio', lens: 5, y: [47, 101], miner: 'eldritch', mw: 1 },
    ];

    ORES.forEach(e => {
        // ---- laser drill ----
        const zone = ZONES[e.dim];
        const lens = 'industrialforegoing:laser_lens' + e.lens;
        const out = laserItem(e);
        if (!out) {
            console.warn('[ore_map] no laser output item found for ' + e.n);
        } else {
            allthemods.recipes.industrialforegoing.laser_drill_ore(out, lens, [
                { whitelist: zone.whitelist, blacklist: zone.blacklist, depth_min: e.y[0], depth_max: e.y[1], weight: e.lw || SWEET_WEIGHT },
                { whitelist: zone.whitelist, blacklist: zone.blacklist, depth_min: BG_MIN, depth_max: BG_MAX, weight: BG_WEIGHT }
            ]);
        }

        // ---- occultism miner ----
        const miner = MINERS[e.miner];
        const result = oreItem(e);
        if (!result) {
            console.warn('[ore_map] no miner result item found for ' + e.n);
        } else {
            allthemods.custom({
                type: 'occultism:miner',
                ingredient: { item: miner.block },
                result: { item: result },
                weight: e.mw || MINER_WEIGHT
            }).id(miner.idPrefix + e.n);
        }
    });

    const MINER_ITEMS = [
        { n: 'void_chalk', item: 'occultism:chalk_void', miner: 'foliot', mw: 20 },
        { n: 'atomic_core', item: 'gtceu:atomic_core', miner: 'foliot', mw: 20 },
        { n: 'element_blank', item: 'gtceu:element_blank', miner: 'foliot', mw: 20 },
        { n: 'mining_dim_core', item: 'occultism:mining_dim_core', miner: 'marid', mw: 5 }
    ];

    MINER_ITEMS.forEach(e => {
        const miner = MINERS[e.miner];
        allthemods.custom({
            type: 'occultism:miner',
            ingredient: { item: miner.block },
            result: { item: e.item },
            weight: e.mw
        }).id(miner.idPrefix + e.n);
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
