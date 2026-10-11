ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA


    const addLaserEngraver = (itemIn, lensIn, itemOut, duration, eu, oID) => {
        // Sanitize ID based on output
        let outputID
        if (oID) { outputID = oID }
        else { outputID = itemOut.toString().replace(/[^a-z0-9]/gi, '_'); }
        allthemods.recipes.gtceu.laser_engraver(`allthemods:laser_engraver/${outputID}`)
            .itemInputs([itemIn, lensIn]) // The lens is a required item input
            .itemOutputs(itemOut)
            .duration(duration)
            .EUt(eu)
            .cleanroom(CleanroomType.STERILE_CLEANROOM);
    };

    addLaserEngraver(
        'gtceu:empowered_wafer',
        '#forge:lenses/destructive',
        'gtceu:empowered_ram_wafer',
        900,
        UV
    );

    addLaserEngraver(
        'gtceu:germanium_wafer',
        '#forge:lenses/destructive',
        'gtceu:germanium_diode_wafer',
        900,
        ZPM
    );

    addLaserEngraver(
        'gtceu:atomic_wafer',
        '#forge:lenses/destructive',
        'gtceu:atomic_clock_wafer',
        900,
        ZPM
    );

    const socs = [
        { T: 9, Name: 'uhv', Lens: 'gtceu:corrosive_lens' },
        { T: 10, Name: 'uev', Lens: 'gtceu:destructive_lens' },
        { T: 11, Name: 'uiv', Lens: 'gtceu:vengeful_lens' },
        { T: 12, Name: 'uxv', Lens: 'gtceu:steadfast_lens' },
        { T: 13, Name: 'opv', Lens: 'gtceu:demon_lens' },
        { T: 14, Name: 'max', Lens: 'gtceu:chaos_plastic_lens' }
    ]

    /*socs.forEach(soc => {
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