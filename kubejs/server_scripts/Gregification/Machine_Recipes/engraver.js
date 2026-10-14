ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    
    function nextTier(base) {
        let VA_JS = Array.from(GTValues.VA);
        let next = VA_JS[VA_JS.indexOf(base) + 1];
        return next !== undefined ? next : base;
    }

    const addLaserEngraver = (itemIn, lensIn, itemOut, duration, eu, oID) => {
        // Sanitize ID based on output
        let outputID
        if (oID) { outputID = oID }
        else { outputID = itemOut.toString().replace(/[^a-z0-9]/gi, '_'); }
        allthemods.recipes.gtceu.laser_engraver(`allthemods:laser_engraver/${outputID}`)
            .itemInputs(itemIn)
            .notConsumable(lensIn)
            .itemOutputs(itemOut)
            .duration(duration)
            .EUt(eu)
            .cleanroom(CleanroomType.CLEANROOM);
    };

    addLaserEngraver(
        'gtceu:empowered_wafer',
        '#forge:lenses/eternal',
        'gtceu:empowered_ram_wafer',
        900,
        UV
    );

    addLaserEngraver(
        'gtceu:germanium_wafer',
        '#forge:lenses/eternal',
        'gtceu:germanium_diode_wafer',
        900,
        ZPM
    );

    addLaserEngraver(
        'gtceu:atomic_wafer',
        '#forge:lenses/eternal',
        'gtceu:atomic_clock_wafer',
        900,
        ZPM
    );

    //current boule - wafer mapping
    const TIER4 = ['gtceu:silicon_wafer', 'gtceu:phosphorus_wafer', 'gtceu:naquadah_wafer', 'gtceu:neutronium_wafer'];
    const TIER3 = ['gtceu:phosphorus_wafer', 'gtceu:naquadah_wafer', 'gtceu:neutronium_wafer'];
    const TIER2 = ['gtceu:naquadah_wafer', 'gtceu:neutronium_wafer'];
    const TIER1 = ['gtceu:neutronium_wafer'];
    
    const zirconiumWafer = 'gtceu:cubic_zirconia_wafer';
    const zirconiumMultiplier = 6;
    const bismuthTellurideWafer = 'gtceu:bismuth_telluride_wafer';
    const bismuthTellurideMultiplier = 12;
    const baseDuration = 1200;

    const waferMapping = [
        { lens: 'light_blue', wafer: 'cpu',                  baseEU: EV, wafers: TIER4 },
        { lens: 'green',      wafer: 'ram',                  baseEU: HV, wafers: TIER4 },
        { lens: 'red',        wafer: 'ilc',                  baseEU: HV, wafers: TIER4 },
        { lens: 'cyan',       wafer: 'simple_soc',           baseEU: EV, wafers: TIER4 },
        { lens: 'yellow',     wafer: 'soc',                  baseEU: EV, wafers: TIER3 },
        { lens: 'purple',     wafer: 'advanced_soc',         baseEU: IV, wafers: TIER2 },
        { lens: 'black',      wafer: 'highly_advanced_soc',  baseEU: IV, wafers: TIER1 },
        { lens: 'gray',       wafer: 'nand_memory',          baseEU: EV, wafers: TIER3 },
        { lens: 'pink',       wafer: 'nor_memory',           baseEU: IV, wafers: TIER3 },
        { lens: 'blue',       wafer: 'ulpic',                baseEU: MV, wafers: TIER4 },
        { lens: 'orange',     wafer: 'lpic',                 baseEU: HV, wafers: TIER4 },
        { lens: 'brown',      wafer: 'mpic',                 baseEU: EV, wafers: TIER3 },
    ];

    
    waferMapping.forEach(mapping => {
        allthemods.recipes.gtceu.laser_engraver(`allthemods:laser_engraver/zirconium/${mapping.wafer}`)
            .itemInputs(zirconiumWafer)
            .notConsumable(`#forge:lenses/${mapping.lens}`)
            .itemOutputs(`${zirconiumMultiplier}x gtceu:${mapping.wafer}_wafer`)
            .duration(baseDuration)
            .EUt(nextTier(mapping.baseEU))
            .cleanroom(CleanroomType.CLEANROOM);

        allthemods.recipes.gtceu.laser_engraver(`allthemods:laser_engraver/bismuth_telluride/${mapping.wafer}`)
            .itemInputs(bismuthTellurideWafer)
            .notConsumable(`#forge:lenses/${mapping.lens}`)
            .itemOutputs(`${bismuthTellurideMultiplier}x gtceu:${mapping.wafer}_wafer`)
            .duration(baseDuration)
            .EUt(nextTier(mapping.baseEU))
            .cleanroom(CleanroomType.CLEANROOM);
    });
    


    /*
    const socs = [
        { T: 9, Name: 'uhv', Lens: 'gtceu:corrosive_lens' },
        { T: 10, Name: 'uev', Lens: 'gtceu:destructive_lens' },
        { T: 11, Name: 'uiv', Lens: 'gtceu:vengeful_lens' },
        { T: 12, Name: 'uxv', Lens: 'gtceu:steadfast_lens' },
        { T: 13, Name: 'opv', Lens: 'gtceu:demon_lens' },
        { T: 14, Name: 'max', Lens: 'gtceu:chaos_plastic_lens' }
    ]

    socs.forEach(soc => {
        let eTier = soc.T <= 13 ? soc.T : 13
        addLaserEngraver(
            'gtceu:empowered_wafer',
            soc.Lens,
            `gtceu:${soc.Name}_soc`,
            900,
            tierValues[eTier],
            `${soc.Name}_soc`);
    })*/
});