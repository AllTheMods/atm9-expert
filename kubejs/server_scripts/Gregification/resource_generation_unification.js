// Unified ore database: one row per ore, drives BOTH the Industrial Foregoing laser drill and the Occultism miners.
// Default laser/miner recipes are disabled with the no-op override zips, so only rows here exist in-game.
//
// Row fields:
//   n      ore name (GT/forge name)           t     tier (1 overworld, 2 nether, 3 end, 4 moon ... 8 glacio)
//   dim    laser dimension zone               lens  lens family number (laser_lens<N>), shared inside a dimension
//   y      sweet-spot depth (Y) range         miner foliot | djinni | afrit | marid | eldritch
//   mw     miner weight (default 100)         lw    laser sweet-spot weight (default 3)
//   ore / raw / item   optional explicit item ids, tried before the automatic lookup
//
// Laser: every ore gets a sweet-spot band (high weight) plus a full-range background (weight 1), so the pool
// is never empty and lenses (+catalystModifier weight each) decide what you get.

ServerEvents.recipes(allthemods => {
    const BG_MIN = 0, BG_MAX = 120, WORLD_MIN = -64, WORLD_MAX = 320, MIN_BAND = 12;
    const scaleY = y => Math.round((y - WORLD_MIN) * (BG_MAX - BG_MIN) / (WORLD_MAX - WORLD_MIN)) + BG_MIN;
    const laserBand = e => {
        let lo = scaleY(e.y[0]), hi = scaleY(e.y[1]);
        if (hi - lo < MIN_BAND) {
            lo = Math.max(BG_MIN, Math.min(lo, BG_MAX - MIN_BAND));
            hi = lo + MIN_BAND;
        }
        return [lo, hi];
    };
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
    const NAMESPACES = ['minecraft', 'alltheores', 'allthemodium', 'gtceu'];
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
    { n: 'goethite', t: 1, dim: 'overworld', lens: 0, y: [73, 128], miner: 'foliot' },
    { n: 'hematite', t: 1, dim: 'overworld', lens: 0, y: [18, 73], miner: 'foliot' },
    { n: 'iron', t: 1, dim: 'overworld', lens: 0, y: [-64, -9], miner: 'foliot' },
    { n: 'limonite', t: 1, dim: 'overworld', lens: 0, y: [46, 101], miner: 'foliot' },
    { n: 'magnetite', t: 1, dim: 'overworld', lens: 0, y: [-37, 18], miner: 'foliot' },
    { n: 'vanadium_magnetite', t: 1, dim: 'overworld', lens: 0, y: [-9, 46], miner: 'foliot' },
    { n: 'cassiterite', t: 1, dim: 'overworld', lens: 1, y: [0, 43], miner: 'foliot' },
    { n: 'cassiterite_sand', t: 1, dim: 'overworld', lens: 1, y: [21, 64], miner: 'foliot' },
    { n: 'chalcopyrite', t: 1, dim: 'overworld', lens: 1, y: [-43, 0], miner: 'foliot' },
    { n: 'copper', t: 1, dim: 'overworld', lens: 1, y: [-64, -21], miner: 'foliot' },
    { n: 'galena', t: 1, dim: 'overworld', lens: 1, y: [85, 128], miner: 'foliot' },
    { n: 'lead', t: 1, dim: 'overworld', lens: 1, y: [64, 107], miner: 'foliot' },
    { n: 'malachite', t: 1, dim: 'overworld', lens: 1, y: [-21, 22], miner: 'foliot' },
    { n: 'tin', t: 1, dim: 'overworld', lens: 1, y: [42, 85], miner: 'foliot' },
    { n: 'gold', t: 1, dim: 'overworld', lens: 2, y: [-64, 64], miner: 'foliot' },
    { n: 'silver', t: 1, dim: 'overworld', lens: 2, y: [0, 128], miner: 'foliot' },
    { n: 'cobaltite', t: 1, dim: 'overworld', lens: 3, y: [51, 128], miner: 'foliot' },
    { n: 'garnierite', t: 1, dim: 'overworld', lens: 3, y: [13, 90], miner: 'foliot' },
    { n: 'nickel', t: 1, dim: 'overworld', lens: 3, y: [-64, 13], miner: 'foliot' },
    { n: 'pentlandite', t: 1, dim: 'overworld', lens: 3, y: [-26, 51], miner: 'foliot' },
    { n: 'amethyst', t: 1, dim: 'overworld', lens: 4, y: [64, 128], miner: 'foliot' },
    { n: 'green_sapphire', t: 1, dim: 'overworld', lens: 4, y: [0, 64], miner: 'foliot' },
    { n: 'opal', t: 1, dim: 'overworld', lens: 4, y: [32, 96], miner: 'foliot' },
    { n: 'ruby', t: 1, dim: 'overworld', lens: 4, y: [-64, 0], miner: 'foliot' },
    { n: 'sapphire', t: 1, dim: 'overworld', lens: 4, y: [-32, 32], miner: 'foliot' },
    { n: 'almandine', t: 1, dim: 'overworld', lens: 5, y: [-64, -16], miner: 'foliot' },
    { n: 'garnet_red', t: 1, dim: 'overworld', lens: 5, y: [32, 80], miner: 'foliot' },
    { n: 'garnet_sand', t: 1, dim: 'overworld', lens: 5, y: [80, 128], miner: 'foliot' },
    { n: 'garnet_yellow', t: 1, dim: 'overworld', lens: 5, y: [56, 104], miner: 'foliot' },
    { n: 'grossular', t: 1, dim: 'overworld', lens: 5, y: [-40, 8], miner: 'foliot' },
    { n: 'pyrope', t: 1, dim: 'overworld', lens: 5, y: [-16, 32], miner: 'foliot' },
    { n: 'spessartine', t: 1, dim: 'overworld', lens: 5, y: [8, 56], miner: 'foliot' },
    { n: 'basaltic_mineral_sand', t: 1, dim: 'overworld', lens: 6, y: [-64, -9], miner: 'foliot' },
    { n: 'bentonite', t: 1, dim: 'overworld', lens: 6, y: [73, 128], miner: 'foliot' },
    { n: 'diatomite', t: 1, dim: 'overworld', lens: 6, y: [18, 73], miner: 'foliot' },
    { n: 'fullers_earth', t: 1, dim: 'overworld', lens: 6, y: [46, 101], miner: 'foliot' },
    { n: 'glauconite_sand', t: 1, dim: 'overworld', lens: 6, y: [-9, 46], miner: 'foliot' },
    { n: 'granitic_mineral_sand', t: 1, dim: 'overworld', lens: 6, y: [-37, 18], miner: 'foliot' },
    { n: 'asbestos', t: 1, dim: 'overworld', lens: 7, y: [32, 70], miner: 'foliot' },
    { n: 'kyanite', t: 1, dim: 'overworld', lens: 7, y: [-6, 32], miner: 'foliot' },
    { n: 'lepidolite', t: 1, dim: 'overworld', lens: 7, y: [52, 90], miner: 'foliot' },
    { n: 'mica', t: 1, dim: 'overworld', lens: 7, y: [-64, -26], miner: 'foliot' },
    { n: 'pollucite', t: 1, dim: 'overworld', lens: 7, y: [90, 128], miner: 'foliot' },
    { n: 'soapstone', t: 1, dim: 'overworld', lens: 7, y: [-26, 12], miner: 'foliot' },
    { n: 'spodumene', t: 1, dim: 'overworld', lens: 7, y: [71, 109], miner: 'foliot' },
    { n: 'talc', t: 1, dim: 'overworld', lens: 7, y: [-45, -7], miner: 'foliot' },
    { n: 'zeolite', t: 1, dim: 'overworld', lens: 7, y: [13, 51], miner: 'foliot' },
    { n: 'apatite', t: 1, dim: 'overworld', lens: 8, y: [42, 85], miner: 'foliot' },
    { n: 'calcite', t: 1, dim: 'overworld', lens: 8, y: [0, 43], miner: 'foliot' },
    { n: 'gypsum', t: 1, dim: 'overworld', lens: 8, y: [-21, 22], miner: 'foliot' },
    { n: 'lazurite', t: 1, dim: 'overworld', lens: 8, y: [64, 107], miner: 'foliot' },
    { n: 'rock_salt', t: 1, dim: 'overworld', lens: 8, y: [-43, 0], miner: 'foliot' },
    { n: 'salt', t: 1, dim: 'overworld', lens: 8, y: [-64, -21], miner: 'foliot' },
    { n: 'sodalite', t: 1, dim: 'overworld', lens: 8, y: [85, 128], miner: 'foliot' },
    { n: 'tricalcium_phosphate', t: 1, dim: 'overworld', lens: 8, y: [21, 64], miner: 'foliot' },
    { n: 'coal', t: 1, dim: 'overworld', lens: 9, y: [-64, 32], miner: 'foliot' },
    { n: 'graphite', t: 1, dim: 'overworld', lens: 9, y: [-16, 80], miner: 'foliot' },
    { n: 'oilsands', t: 1, dim: 'overworld', lens: 9, y: [32, 128], miner: 'foliot' },
    { n: 'bauxite', t: 1, dim: 'overworld', lens: 10, y: [-64, -32], miner: 'foliot' },
    { n: 'cinnabar', t: 1, dim: 'overworld', lens: 10, y: [16, 48], miner: 'foliot' },
    { n: 'magnesite', t: 1, dim: 'overworld', lens: 10, y: [32, 64], miner: 'foliot' },
    { n: 'niter', t: 1, dim: 'overworld', lens: 10, y: [96, 128], miner: 'foliot' },
    { n: 'olivine', t: 1, dim: 'overworld', lens: 10, y: [64, 96], miner: 'foliot' },
    { n: 'pyrite', t: 1, dim: 'overworld', lens: 10, y: [48, 80], miner: 'foliot' },
    { n: 'pyrochlore', t: 1, dim: 'overworld', lens: 10, y: [-32, 0], miner: 'foliot' },
    { n: 'pyrolusite', t: 1, dim: 'overworld', lens: 10, y: [-16, 16], miner: 'foliot' },
    { n: 'realgar', t: 1, dim: 'overworld', lens: 10, y: [0, 32], miner: 'foliot' },
    { n: 'sulfur', t: 1, dim: 'overworld', lens: 10, y: [80, 112], miner: 'foliot' },
    { n: 'tantalite', t: 1, dim: 'overworld', lens: 10, y: [-48, -16], miner: 'foliot' },
    { n: 'ferricore', t: 1, dim: 'overworld', lens: 11, y: [-64, 32], miner: 'foliot' },
    { n: 'inferium', t: 1, dim: 'overworld', lens: 11, y: [-16, 80], miner: 'foliot', ore: 'mysticalagriculture:inferium_ore' },
    { n: 'prosperity', t: 1, dim: 'overworld', lens: 11, y: [32, 128], miner: 'foliot', ore: 'mysticalagriculture:prosperity_ore' },
    { n: 'uranium', t: 1, dim: 'overworld', lens: 12, y: [0, 128], miner: 'foliot' },
    { n: 'zinc', t: 1, dim: 'overworld', lens: 12, y: [-64, 64], miner: 'foliot' },
    { n: 'dolomite', t: 1, dim: 'overworld', lens: 13, y: [-64, 32], miner: 'foliot' },
    { n: 'fluorite', t: 1, dim: 'overworld', lens: 13, y: [-16, 80], miner: 'foliot' },
    { n: 'trona', t: 1, dim: 'overworld', lens: 13, y: [32, 128], miner: 'foliot' },
    // ---- nether ----
    { n: 'bornite', t: 2, dim: 'nether', lens: 0, y: [83, 120], miner: 'foliot' },
    { n: 'chalcocite', t: 2, dim: 'nether', lens: 0, y: [65, 102], miner: 'foliot' },
    { n: 'sphalerite', t: 2, dim: 'nether', lens: 0, y: [10, 47], miner: 'foliot' },
    { n: 'stibnite', t: 2, dim: 'nether', lens: 0, y: [28, 65], miner: 'foliot' },
    { n: 'tetrahedrite', t: 2, dim: 'nether', lens: 0, y: [46, 83], miner: 'foliot' },
    { n: 'molybdenite', t: 2, dim: 'nether', lens: 1, y: [10, 54], miner: 'foliot' },
    { n: 'molybdenum', t: 2, dim: 'nether', lens: 1, y: [32, 76], miner: 'foliot' },
    { n: 'powellite', t: 2, dim: 'nether', lens: 1, y: [54, 98], miner: 'foliot' },
    { n: 'wulfenite', t: 2, dim: 'nether', lens: 1, y: [76, 120], miner: 'foliot' },
    { n: 'alunite', t: 2, dim: 'nether', lens: 2, y: [65, 102], miner: 'foliot' },
    { n: 'barite', t: 2, dim: 'nether', lens: 2, y: [83, 120], miner: 'foliot' },
    { n: 'beryllium', t: 2, dim: 'nether', lens: 2, y: [46, 83], miner: 'foliot' },
    { n: 'neodymium', t: 2, dim: 'nether', lens: 2, y: [10, 47], miner: 'foliot' },
    { n: 'thorium', t: 2, dim: 'nether', lens: 2, y: [28, 65], miner: 'foliot' },
    { n: 'certus_quartz', t: 2, dim: 'nether', lens: 3, y: [38, 93], miner: 'foliot' },
    { n: 'nether_quartz', t: 2, dim: 'nether', lens: 3, y: [10, 65], miner: 'foliot' },
    { n: 'quartzite', t: 2, dim: 'nether', lens: 3, y: [65, 120], miner: 'foliot' },
    { n: 'blue_topaz', t: 2, dim: 'nether', lens: 4, y: [47, 120], miner: 'foliot' },
    { n: 'topaz', t: 2, dim: 'nether', lens: 4, y: [10, 83], miner: 'foliot' },
    { n: 'electrotine', t: 2, dim: 'nether', lens: 5, y: [65, 120], miner: 'foliot' },
    { n: 'lapis', t: 2, dim: 'nether', lens: 5, y: [38, 93], miner: 'foliot' },
    { n: 'redstone', t: 2, dim: 'nether', lens: 5, y: [10, 65], miner: 'foliot' },
    { n: 'blazegold', t: 2, dim: 'nether', lens: 6, y: [10, 83], miner: 'foliot' },
    { n: 'soulium', t: 2, dim: 'nether', lens: 6, y: [47, 120], miner: 'foliot', ore: 'mysticalagriculture:soulium_ore' },
    // ---- end ----
    { n: 'aluminium', t: 3, dim: 'end', lens: 0, y: [0, 32], miner: 'foliot' },
    { n: 'chromite', t: 3, dim: 'end', lens: 0, y: [48, 80], miner: 'foliot' },
    { n: 'ilmenite', t: 3, dim: 'end', lens: 0, y: [32, 64], miner: 'foliot' },
    { n: 'lithium', t: 3, dim: 'end', lens: 0, y: [16, 48], miner: 'foliot' },
    { n: 'cooperite', t: 3, dim: 'end', lens: 1, y: [40, 80], miner: 'foliot' },
    { n: 'palladium', t: 3, dim: 'end', lens: 1, y: [20, 60], miner: 'foliot' },
    { n: 'platinum', t: 3, dim: 'end', lens: 1, y: [0, 40], miner: 'foliot' },
    { n: 'pitchblende', t: 3, dim: 'end', lens: 2, y: [0, 40], miner: 'foliot' },
    { n: 'plutonium_239', t: 3, dim: 'end', lens: 2, y: [40, 80], miner: 'foliot' },
    { n: 'uraninite', t: 3, dim: 'end', lens: 2, y: [20, 60], miner: 'foliot' },
    { n: 'scheelite', t: 3, dim: 'end', lens: 3, y: [0, 53], miner: 'foliot' },
    { n: 'tungstate', t: 3, dim: 'end', lens: 3, y: [27, 80], miner: 'foliot' },
    { n: 'diamond', t: 3, dim: 'end', lens: 4, y: [0, 53], miner: 'foliot' },
    { n: 'emerald', t: 3, dim: 'end', lens: 4, y: [27, 80], miner: 'foliot' },
    { n: 'bastnasite', t: 3, dim: 'end', lens: 5, y: [0, 120], miner: 'foliot' },
    { n: 'monazite', t: 3, dim: 'end', lens: 5, y: [0, 120], miner: 'foliot' },
    { n: 'naquadah', t: 3, dim: 'end', lens: 6, y: [0, 80], miner: 'foliot' },
    { n: 'azure_silver', t: 3, dim: 'end', lens: 7, y: [30, 60], miner: 'foliot' },
    { n: 'crimson_iron', t: 3, dim: 'end', lens: 7, y: [0, 32], miner: 'foliot' },
    { n: 'draconium', t: 3, dim: 'end', lens: 7, y: [48, 80], miner: 'foliot' },
    { n: 'eclipse_alloy', t: 3, dim: 'end', lens: 7, y: [16, 48], miner: 'foliot' },
    { n: 'echo_shard', t: 3, dim: 'end', lens: 8, y: [0, 80], miner: 'foliot', mw: 20, lw: 1, item: 'minecraft:echo_shard' },
    // ---- moon ----
    { n: 'clausthalite', t: 4, dim: 'moon', lens: 0, y: [6, 50], miner: 'djinni' },
    { n: 'naumannite', t: 4, dim: 'moon', lens: 0, y: [57, 99], miner: 'djinni' },
    { n: 'baddeleyite', t: 4, dim: 'moon', lens: 1, y: [88, 130], miner: 'djinni' },
    { n: 'hafnian_zircon', t: 4, dim: 'moon', lens: 1, y: [173, 221], miner: 'djinni' },
    { n: 'hafnon', t: 4, dim: 'moon', lens: 1, y: [22, 64], miner: 'djinni' },
    { n: 'zircon', t: 4, dim: 'moon', lens: 1, y: [4, 47], miner: 'djinni' },
    { n: 'jamesonite', t: 4, dim: 'moon', lens: 2, y: [60, 108], miner: 'djinni' },
    { n: 'ullmannite', t: 4, dim: 'moon', lens: 2, y: [145, 189], miner: 'djinni' },
    { n: 'cryolite', t: 4, dim: 'moon', lens: 3, y: [111, 155], miner: 'djinni' },
    { n: 'gallite', t: 4, dim: 'moon', lens: 3, y: [30, 72], miner: 'djinni' },
    { n: 'columbite_tantalite', t: 4, dim: 'moon', lens: 4, y: [78, 122], miner: 'djinni' },
    { n: 'microlite', t: 4, dim: 'moon', lens: 4, y: [15, 58], miner: 'djinni' },
    { n: 'wodginite', t: 4, dim: 'moon', lens: 4, y: [190, 233], miner: 'djinni' },
    { n: 'bismite', t: 4, dim: 'moon', lens: 5, y: [95, 137], miner: 'djinni' },
    { n: 'bismuthinite', t: 4, dim: 'moon', lens: 5, y: [40, 83], miner: 'djinni' },
    { n: 'bismutite', t: 4, dim: 'moon', lens: 5, y: [165, 209], miner: 'djinni' },
    { n: 'thorianite', t: 4, dim: 'moon', lens: 6, y: [50, 92], miner: 'djinni' },
    { n: 'thorite', t: 4, dim: 'moon', lens: 6, y: [5, 47], miner: 'djinni' },
    { n: 'coagulite', t: 4, dim: 'moon', lens: 7, y: [68, 112], miner: 'djinni' },
    { n: 'hellish', t: 4, dim: 'moon', lens: 7, y: [120, 164], miner: 'djinni', mw: 500 },
    { n: 'terraria', t: 4, dim: 'moon', lens: 7, y: [200, 243], miner: 'djinni', mw: 500 },
    { n: 'radio_thoric_phosphate', t: 4, dim: 'moon', lens: 8, y: [190, 232], miner: 'djinni' },
    { n: 'ancient_debris', t: 4, dim: 'moon', lens: 9, y: [130, 260], miner: 'djinni', ore: 'minecraft:ancient_debris', item: 'minecraft:ancient_debris' },
    { n: 'desh', t: 4, dim: 'moon', lens: 9, y: [0, 130], miner: 'djinni', ore: 'ad_astra:moon_desh_ore', raw: 'ad_astra:raw_desh' },
    { n: 'moon_cheese', t: 4, dim: 'moon', lens: 9, y: [65, 195], miner: 'djinni', ore: 'ad_astra:moon_cheese_ore', item: 'ad_astra:cheese' },
    { n: 'mithril', t: 4, dim: 'moon', lens: 10, y: [0, 260], miner: 'djinni', ore: 'irons_spellbooks:mithril_ore', raw: 'irons_spellbooks:raw_mithril' },
    { n: 'allthemodium', t: 4, dim: 'moon', lens: 11, y: [0, 130], miner: 'eldritch' },
    { n: 'unobtainium', t: 4, dim: 'moon', lens: 11, y: [130, 260], miner: 'eldritch' },
    { n: 'vibranium', t: 4, dim: 'moon', lens: 11, y: [65, 195], miner: 'eldritch' },
    // ---- mars ----
    { n: 'indite', t: 5, dim: 'mars', lens: 0, y: [150, 193], miner: 'afrit' },
    { n: 'roquesite', t: 5, dim: 'mars', lens: 0, y: [25, 68], miner: 'afrit' },
    { n: 'sakuraiite', t: 5, dim: 'mars', lens: 0, y: [80, 122], miner: 'afrit' },
    { n: 'bazzite', t: 5, dim: 'mars', lens: 1, y: [45, 89], miner: 'afrit' },
    { n: 'kolbeckite', t: 5, dim: 'mars', lens: 1, y: [175, 217], miner: 'afrit' },
    { n: 'thortveitite', t: 5, dim: 'mars', lens: 1, y: [10, 54], miner: 'afrit' },
    { n: 'fergusonite', t: 5, dim: 'mars', lens: 2, y: [105, 147], miner: 'afrit' },
    { n: 'lanthanite', t: 5, dim: 'mars', lens: 2, y: [60, 103], miner: 'afrit' },
    { n: 'samarskite', t: 5, dim: 'mars', lens: 2, y: [220, 262], miner: 'afrit' },
    { n: 'cerite', t: 5, dim: 'mars', lens: 3, y: [130, 174], miner: 'afrit' },
    { n: 'gadolinite', t: 5, dim: 'mars', lens: 3, y: [15, 59], miner: 'afrit' },
    { n: 'xenotime', t: 5, dim: 'mars', lens: 3, y: [75, 118], miner: 'afrit' },
    { n: 'yttrialite', t: 5, dim: 'mars', lens: 3, y: [190, 233], miner: 'afrit' },
    { n: 'drenched_iron', t: 5, dim: 'mars', lens: 4, y: [0, 130], miner: 'afrit' },
    { n: 'fireite', t: 5, dim: 'mars', lens: 4, y: [130, 260], miner: 'afrit' },
    { n: 'swift_alloy', t: 5, dim: 'mars', lens: 4, y: [65, 195], miner: 'afrit' },
    { n: 'rhenite', t: 5, dim: 'mars', lens: 5, y: [25, 69], miner: 'afrit' },
    { n: 'tarkianite', t: 5, dim: 'mars', lens: 5, y: [160, 202], miner: 'afrit' },
    { n: 'ostrum', t: 5, dim: 'mars', lens: 6, y: [0, 260], miner: 'afrit', ore: 'ad_astra:mars_ostrum_ore', raw: 'ad_astra:raw_ostrum' },
    { n: 'adamantite', t: 5, dim: 'mars', lens: 7, y: [0, 260], miner: 'afrit' },
    // ---- mercury ----
    { n: 'caliche', t: 6, dim: 'mercury', lens: 0, y: [5, 49], miner: 'marid' },
    { n: 'crookesite', t: 6, dim: 'mercury', lens: 0, y: [20, 64], miner: 'marid' },
    { n: 'hutchinsonite', t: 6, dim: 'mercury', lens: 0, y: [155, 199], miner: 'marid' },
    { n: 'lorandite', t: 6, dim: 'mercury', lens: 0, y: [90, 132], miner: 'marid' },
    { n: 'celestite', t: 6, dim: 'mercury', lens: 1, y: [45, 87], miner: 'marid' },
    { n: 'strontianite', t: 6, dim: 'mercury', lens: 1, y: [115, 157], miner: 'marid' },
    { n: 'nether_star', t: 6, dim: 'mercury', lens: 2, y: [65, 109], miner: 'marid' },
    { n: 'osmiridium', t: 6, dim: 'mercury', lens: 2, y: [180, 222], miner: 'marid' },
    { n: 'iridium', t: 6, dim: 'mercury', lens: 3, y: [87, 260], miner: 'marid' },
    { n: 'osmium', t: 6, dim: 'mercury', lens: 3, y: [0, 173], miner: 'marid' },
    // ---- venus ----
    { n: 'calaverite', t: 7, dim: 'venus', lens: 0, y: [35, 78], miner: 'marid' },
    { n: 'kurilite', t: 7, dim: 'venus', lens: 0, y: [170, 213], miner: 'marid' },
    { n: 'telluride', t: 7, dim: 'venus', lens: 0, y: [95, 137], miner: 'marid' },
    { n: 'laurite', t: 7, dim: 'venus', lens: 1, y: [10, 53], miner: 'marid' },
    { n: 'calorite', t: 7, dim: 'venus', lens: 2, y: [0, 260], miner: 'marid', ore: 'ad_astra:venus_calorite_ore', raw: 'ad_astra:raw_calorite' },
    // ---- glacio ----
    { n: 'argyrodite', t: 8, dim: 'glacio', lens: 0, y: [200, 242], miner: 'eldritch' },
    { n: 'germanite', t: 8, dim: 'glacio', lens: 0, y: [140, 184], miner: 'eldritch' },
    { n: 'renierite', t: 8, dim: 'glacio', lens: 0, y: [55, 98], miner: 'eldritch' },
    { n: 'rhodizite', t: 8, dim: 'glacio', lens: 1, y: [10, 54], miner: 'eldritch' },
    { n: 'rubicline', t: 8, dim: 'glacio', lens: 1, y: [80, 122], miner: 'eldritch' },
    { n: 'chaotic', t: 8, dim: 'glacio', lens: 2, y: [45, 89], miner: 'eldritch' },
    { n: 'etrium', t: 8, dim: 'glacio', lens: 2, y: [130, 173], miner: 'eldritch' },
    { n: 'ice_shard', t: 8, dim: 'glacio', lens: 3, y: [0, 260], miner: 'eldritch', ore: 'ad_astra:glacio_ice_shard_ore', item: 'ad_astra:ice_shard' },
    { n: 'trinium', t: 8, dim: 'glacio', lens: 4, y: [0, 260], miner: 'eldritch' },
    { n: 'bedrockium', t: 8, dim: 'glacio', lens: 5, y: [0, 173], miner: 'eldritch', mw: 1 },
    { n: 'tenebrius', t: 8, dim: 'glacio', lens: 5, y: [87, 260], miner: 'eldritch', mw: 1 },
    ];

    ORES.forEach(e => {
        // ---- laser drill ----
        const zone = ZONES[e.dim];
        const lens = 'industrialforegoing:laser_lens' + e.lens;
        const band = laserBand(e);
        const out = laserItem(e);
        if (!out) {
            console.warn('[ore_map] no laser output item found for ' + e.n);
        } else {
            allthemods.recipes.industrialforegoing.laser_drill_ore(out, lens, [
                { whitelist: zone.whitelist, blacklist: zone.blacklist, depth_min: band[0], depth_max: band[1], weight: e.lw || SWEET_WEIGHT },
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