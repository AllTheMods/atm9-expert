ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
    const components = ['nugget', 'dust', 'ingot', 'rod'];
    const components2 = ['tiny:dust', 'small:dust', 'long:rod'];    

    const baseMaterials = [
        { name: 'eternium', eu: UV },
        { name: 'samarium_cobalt', eu: IV },
        { name: 'neodymium_dysprosium', eu: LuV },
        { name: 'neodymium_terbium', eu: ZPM }
    ]

    baseMaterials.forEach(baseMaterial => {
        components.forEach(type => {
            allthemods.recipes.gtceu.polarizer(`gregification:polarize/${baseMaterial.name}_${type}`)
                .itemInputs(`gtceu:${baseMaterial.name}_${type}`)
                .itemOutputs(`gtceu:magnetic_${baseMaterial.name}_${type}`)
                .duration(150)
                .EUt(baseMaterial.eu);
        });
        components2.forEach(type => {            
            let m = type.split(':')
            allthemods.recipes.gtceu.polarizer(`gregification:polarize/${baseMaterial.name}_${type.replace(':', '_')}`)
                .itemInputs(`gtceu:${m[0]}_${baseMaterial.name}_${m[1]}`)
                .itemOutputs(`gtceu:${m[0]}_magnetic_${baseMaterial.name}_${m[1]}`)
                .duration(150)
                .EUt(baseMaterial.eu);
        });
    });
});