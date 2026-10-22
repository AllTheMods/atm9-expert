ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const addCutter = (itemsIn, itemsOut, eu, duration, offset, customFluid, cleanRoom) => {
        // 1. Clean the ID: remove quantity, namespace, and illegal chars
        const cleanName = String(itemsOut)
            .replace(/^\d+[x ]\s*/, '')
            .split(':').pop()
            .replace(/[^a-z0-9]/gi, '_');

        let configs

        if (customFluid) {
            let fluidArray = Array.isArray(customFluid) ? customFluid : [customFluid];            
            configs = fluidArray.map((fluidStr, i) => {
                let name = fluidStr.split(' ')[0].split(':')[1];
                return {
                    id: name,
                    fluid: fluidStr,
                    dur: duration - (offset * i) // Automatically applies your offset logic!
                };
            });
        }
        else {
            configs = [
                { id: "water", fluid: "minecraft:water 1000", dur: duration },
                { id: "distilled", fluid: "gtceu:distilled_water 750", dur: duration - (offset) },
                { id: "lubricant", fluid: "gtceu:lubricant 250", dur: duration - (offset * 2) }
            ];
        }
        // 3. Register each recipe with a strictly unique ID
        configs.forEach(cfg => {
            let cRecipe = allthemods.recipes.gtceu.cutter(`allthemods:cutter/${cleanName}_${cfg.id}`)
                .itemInputs(itemsIn)
                .itemOutputs(itemsOut)
                .inputFluids(cfg.fluid)
                .duration(Math.max(1, cfg.dur))
                .EUt(eu);
            switch (cleanRoom) {
                case CleanroomType.STERILE_CLEANROOM:
                    cRecipe.cleanroom(CleanroomType.STERILE_CLEANROOM)
                    break;
                case CleanroomType.CLEANROOM:
                    cRecipe.cleanroom(CleanroomType.CLEANROOM)
                    break;
            }
        });
    };

    addCutter('gtceu:cubic_zirconia_boule', '64x gtceu:cubic_zirconia_wafer', IV, 3200, 800, null, CleanroomType.CLEANROOM)
    addCutter('gtceu:bismuth_telluride_boule', '96x gtceu:bismuth_telluride_wafer', IV, 4800, 1200, null, CleanroomType.CLEANROOM)

    addCutter('gtceu:empowered_boule', '128x gtceu:empowered_wafer', ZPM, 6000, 1500, null, CleanroomType.STERILE_CLEANROOM)
    addCutter('gtceu:germanium_boule', '4x gtceu:germanium_wafer', IV, 6000, 1500, null, CleanroomType.CLEANROOM)
    addCutter('gtceu:atomic_boule', '4x gtceu:atomic_wafer', LuV, 6000, 1500, null, CleanroomType.CLEANROOM)
    addCutter('gtceu:empowered_ram_wafer', '6x gtceu:empowered_ram_chip', ZPM, 900, 150, null, CleanroomType.STERILE_CLEANROOM)

    //blank slate
    addCutter('gtceu:slate_casing', '9x gtceu:blank_slate_casing', LV, 500, 250)
    
    const tiers = ['UHV', 'UEV', 'UIV', 'UXV', 'OPV', 'MAX']
    tiers.forEach((tier,index) => {
        addCutter(`gtceu:${tier.toLowerCase()}_pic_wafer`, `2x gtceu:${tier.toLowerCase()}_pic_chip`, GTValues.VA[8+index],2400,250,null,CleanroomType.CLEANROOM)
    });
    

});