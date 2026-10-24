ServerEvents.recipes(event => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    //need to check these make sure they work
        // ---- Rare earths ----
        /*
    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_bastnasite',
        'gtceu:neodymium_doped_yttrium_aluminium_garnet_lens',
        [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['minecraft:the_end', 'minecraft:the_void', 'minecraft:small_end_islands', 'minecraft:end_barrens', 'minecraft:end_highlands', 'minecraft:end_midlands']
                },
                depth_min: 0,
                depth_max: 120,
                weight: 6
            },
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_monazite',
        'gtceu:praseodymium_doped_yttrium_aluminium_garnet_lens',
        [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['minecraft:the_end', 'minecraft:the_void', 'minecraft:small_end_islands', 'minecraft:end_barrens', 'minecraft:end_highlands', 'minecraft:end_midlands']
                },
                depth_min: 0,
                depth_max: 120,
                weight: 6
            },
        ]
    )
    // ---- Moon ----
    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_clausthalite',
        'industrialforegoing:laser_lens3',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 6,
                depth_max: 50,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_naumannite',
        'industrialforegoing:laser_lens7',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 57,
                depth_max: 99,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_hafnian_zircon',
        'industrialforegoing:laser_lens6',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 173,
                depth_max: 221,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_hafnon',
        'industrialforegoing:laser_lens7',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 22,
                depth_max: 64,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_baddeleyite',
        'industrialforegoing:laser_lens11',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 88,
                depth_max: 130,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_zircon',
        'industrialforegoing:laser_lens14',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 4,
                depth_max: 47,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_ullmannite',
        'industrialforegoing:laser_lens7',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 145,
                depth_max: 189,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_jamesonite',
        'industrialforegoing:laser_lens0',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 60,
                depth_max: 108,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_gallite',
        'industrialforegoing:laser_lens10',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 30,
                depth_max: 72,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_cryolite',
        'industrialforegoing:laser_lens8',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 111,
                depth_max: 155,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_columbite_tantalite',
        'industrialforegoing:laser_lens15',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 78,
                depth_max: 122,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_microlite',
        'industrialforegoing:laser_lens8',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 15,
                depth_max: 58,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_wodginite',
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 190,
                depth_max: 233,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_bismuthinite',
        'industrialforegoing:laser_lens6',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 40,
                depth_max: 83,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_bismite',
        'industrialforegoing:laser_lens1',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 95,
                depth_max: 137,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_bismutite',
        'industrialforegoing:laser_lens4',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 165,
                depth_max: 209,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_thorianite',
        'industrialforegoing:laser_lens15',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 50,
                depth_max: 92,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_thorite',
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 5,
                depth_max: 47,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_hellish',
        'industrialforegoing:laser_lens14',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 120,
                depth_max: 164,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_terraria',
        'industrialforegoing:laser_lens6',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 200,
                depth_max: 243,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_coagulite',
        'industrialforegoing:laser_lens14',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:lunar_wastelands']
                },
                blacklist: {},
                depth_min: 68,
                depth_max: 112,
                weight: 4
            }
        ]
    )


    // ---- Mars ----
    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_roquesite',
        'industrialforegoing:laser_lens7',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 25,
                depth_max: 68,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_indite',
        'industrialforegoing:laser_lens0',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 150,
                depth_max: 193,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_sakuraiite',
        'industrialforegoing:laser_lens3',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 80,
                depth_max: 122,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_thortveitite',
        'industrialforegoing:laser_lens5',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 10,
                depth_max: 54,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_kolbeckite',
        'industrialforegoing:laser_lens13',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 175,
                depth_max: 217,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_bazzite',
        'industrialforegoing:laser_lens3',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 45,
                depth_max: 89,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_fergusonite',
        'industrialforegoing:laser_lens15',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 105,
                depth_max: 147,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_samarskite',
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 220,
                depth_max: 262,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_lanthanite',
        'industrialforegoing:laser_lens8',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 60,
                depth_max: 103,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_cerite',
        'industrialforegoing:laser_lens1',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 130,
                depth_max: 174,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_gadolinite',
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 15,
                depth_max: 59,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_yttrialite',
        'industrialforegoing:laser_lens4',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 190,
                depth_max: 233,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_xenotime',
        'industrialforegoing:laser_lens4',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps', 'ad_astra:martian_wastelands']
                },
                blacklist: {},
                depth_min: 75,
                depth_max: 118,
                weight: 4
            }
        ]
    )


    // ---- Mercury ----
    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_crookesite',
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:mercury_deltas']
                },
                blacklist: {},
                depth_min: 20,
                depth_max: 64,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_hutchinsonite',
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:mercury_deltas']
                },
                blacklist: {},
                depth_min: 155,
                depth_max: 199,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_lorandite',
        'industrialforegoing:laser_lens14',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:mercury_deltas']
                },
                blacklist: {},
                depth_min: 90,
                depth_max: 132,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_caliche',
        'industrialforegoing:laser_lens0',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:mercury_deltas']
                },
                blacklist: {},
                depth_min: 5,
                depth_max: 49,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_strontianite',
        'industrialforegoing:laser_lens0',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:mercury_deltas']
                },
                blacklist: {},
                depth_min: 115,
                depth_max: 157,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_celestite',
        'industrialforegoing:laser_lens3',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:mercury_deltas']
                },
                blacklist: {},
                depth_min: 45,
                depth_max: 87,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_osmiridium',
        'industrialforegoing:laser_lens9',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:mercury_deltas']
                },
                blacklist: {},
                depth_min: 180,
                depth_max: 222,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_nether_star',
        'industrialforegoing:laser_lens9',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:mercury_deltas']
                },
                blacklist: {},
                depth_min: 65,
                depth_max: 109,
                weight: 4
            }
        ]
    )


    // ---- Venus ----
    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_calaverite',
        'industrialforegoing:laser_lens4',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:venus_wastelands', 'ad_astra:infernal_venus_barrens']
                },
                blacklist: {},
                depth_min: 35,
                depth_max: 78,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_kurilite',
        'industrialforegoing:laser_lens13',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:venus_wastelands', 'ad_astra:infernal_venus_barrens']
                },
                blacklist: {},
                depth_min: 170,
                depth_max: 213,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_telluride',
        'industrialforegoing:laser_lens0',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:venus_wastelands', 'ad_astra:infernal_venus_barrens']
                },
                blacklist: {},
                depth_min: 95,
                depth_max: 137,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_laurite',
        'industrialforegoing:laser_lens7',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:venus_wastelands', 'ad_astra:infernal_venus_barrens']
                },
                blacklist: {},
                depth_min: 10,
                depth_max: 53,
                weight: 4
            }
        ]
    )


    // ---- Glacio ----
    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_germanite',
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 140,
                depth_max: 184,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_renierite',
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 55,
                depth_max: 98,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_argyrodite',
        'industrialforegoing:laser_lens15',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 200,
                depth_max: 242,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_rhenite',
        'industrialforegoing:laser_lens0',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 25,
                depth_max: 69,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_tarkianite',
        'industrialforegoing:laser_lens7',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 160,
                depth_max: 202,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_rubicline',
        'industrialforegoing:laser_lens6',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 80,
                depth_max: 122,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_rhodizite',
        'industrialforegoing:laser_lens8',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 10,
                depth_max: 54,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_radio_thoric_phosphate',
        'industrialforegoing:laser_lens5',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 190,
                depth_max: 232,
                weight: 4
            }
        ]
    )

    /*event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_tenebrius',
        'industrialforegoing:laser_lens15',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 65,
                depth_max: 108,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_etrium',
        'industrialforegoing:laser_lens9',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 130,
                depth_max: 173,
                weight: 4
            }
        ]
    )

    event.recipes.industrialforegoing.laser_drill_ore(
        'gtceu:raw_chaotic',
        'industrialforegoing:laser_lens15',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: ['ad_astra:glacio_ice_peaks', 'ad_astra:glacio_snowy_barrens']
                },
                blacklist: {},
                depth_min: 45,
                depth_max: 89,
                weight: 4
            }
        ]
    )
*/
});
