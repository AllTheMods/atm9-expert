// priority: -100
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    
    const db = global.oreDatabase;
    if (!db) {
        console.warn('[void_miner_ores] global.oreDatabase missing');
        return;
    }

    const BASE_WEIGHT = 200;
    const FOCUS_MULTIPLIER = 8;
    const MAX_TIER = 8;
    const MINER_WEIGHT = 100;

    const DIMENSIONS = {
        overworld: ['minecraft:overworld'],
        nether: ['minecraft:the_nether'],
        end: ['minecraft:the_end'],
        moon: ['ad_astra:moon'],
        mars: ['ad_astra:mars'],
        mercury: ['ad_astra:mercury'],
        venus: ['ad_astra:venus'],
        glacio: ['ad_astra:glacio']
    };

    const DYES = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

    const GEMS = ['amethyst', 'green_sapphire', 'opal', 'ruby', 'sapphire', 'blue_topaz', 'topaz', 'diamond', 'emerald', 'almandine', 'red_garnet', 'yellow_garnet', 'grossular', 'pyrope', 'spessartine', 'olivine', 'lazurite', 'sodalite', 'apatite', 'certus_quartz', 'nether_quartz', 'quartzite', 'lapis', 'celestigem', 'rhodizite', 'rubicline', 'lepidolite'];
    const MINERALS = ['salt', 'rock_salt', 'trona', 'niter', 'sulfur', 'coal', 'graphite', 'oilsands', 'gypsum', 'calcite', 'dolomite', 'fluorite', 'talc', 'soapstone', 'zeolite', 'asbestos', 'bentonite', 'diatomite', 'fullers_earth', 'mica', 'kyanite', 'basaltic_mineral_sand', 'granitic_mineral_sand', 'glauconite_sand', 'garnet_sand', 'cassiterite_sand', 'tricalcium_phosphate', 'electrotine', 'redstone', 'barite', 'alunite', 'pollucite', 'spodumene', 'cryolite', 'bauxite', 'magnesite', 'moon_cheese', 'ice_shard'];
    const MAGICAL = ['inferium', 'prosperity', 'soulium', 'mithril', 'echo_shard', 'nether_star', 'hellish', 'terraria', 'coagulite', 'chaotic', 'tenebrius', 'bedrockium'];

    const program = n => {
        if (GEMS.indexOf(n) >= 0) return 'envirotech:gemstone_ore';
        if (MAGICAL.indexOf(n) >= 0) return 'envirotech:magical_ore';
        if (MINERALS.indexOf(n) >= 0) return 'envirotech:mineral_ore';
        return 'envirotech:metallic_ore';
    };

    db.ores.forEach(e => {
        const item = db.oreItem(e);
        if (!item) {
            console.warn('[void_miner_ores] no item found for ' + e.n);
            return;
        }
        const tiers = [];
        for (let i = e.t; i <= MAX_TIER; i++) tiers.push(i);
        const weight = Math.max(1, Math.round(BASE_WEIGHT * (e.mw || MINER_WEIGHT) / MINER_WEIGHT));
        allthemods.custom({
            type: 'envirotech:void_miner_drops',
            programs: ['envirotech:ore', program(e.n)],
            item: { 'raw:item': item, count: 1 },
            config: [
                { weight: weight, dimensions: DIMENSIONS[e.dim], tiers: tiers },
                { focus: 'envirotech:' + DYES[e.lens], weight: weight * FOCUS_MULTIPLIER, dimensions: DIMENSIONS[e.dim], tiers: tiers }
            ]
        }).id('gregification:envirotech/void_miner/' + e.n);
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
