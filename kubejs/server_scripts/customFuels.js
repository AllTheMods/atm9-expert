// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(event => {

    /**
     * Registers a fluid as a fuel for the GTCEu Combustion Generator (and Large Turbines).
     * @param {string} fluid - Fluid ID
     * @param {number} euPerMb - Energy per millibucket
     * @param {number} tierVoltage - The 'virtual' voltage tier for calculation (affects burn duration)
     */
    let registerFuelGas = (fluid, euPerMb, tierVoltage) => {
        event.recipes.gtceu.gas_turbine(`burn_${fluid.split(':')[1]}`)
            .inputFluids(`${fluid} 1`)
            .duration(euPerMb / tierVoltage) // Duration = Total Energy / Voltage
            .EUt(-tierVoltage) // Generate power
    }


    /**
     * Registers a fluid as a fuel for the GTCEu Combustion Generator (and Large Turbines).
     * @param {string} fluid - Fluid ID
     * @param {number} euPerMb - Energy per millibucket
     * @param {number} tierVoltage - The 'virtual' voltage tier for calculation (affects burn duration)
     */
    let registerFuelCombustion = (fluid, euPerMb, tierVoltage) => {
        event.recipes.gtceu.combustion_generator(`burn_${fluid.split(':')[1]}`)
            .inputFluids(`${fluid} 1`)
            .duration(euPerMb / tierVoltage) // Duration = Total Energy / Voltage
            .EUt(-tierVoltage) // Generate power
    }

    const fuels = [
        { fluid: 'gtceu:refined_seed_oil',  eu: 30515,  volt: 2048 }, // unchanged
        { fluid: 'gtceu:crystallized_oil',  eu: 51405,  volt: 2048 }, // unchanged
        { fluid: 'gtceu:terpene_jet_fuel',  eu: 65536,  volt: 8192 }, // IV: above crystallized
        { fluid: 'gtceu:empowered_oil',     eu: 81920,  volt: 2048 }, // LuV-made: ~1.3x over burning the crystallized oil
        { fluid: 'gtceu:boron_slurry_fuel', eu: 98304,  volt: 8192 }, // LuV: ~1.5x over burning its inputs
        { fluid: 'gtceu:xylene',            eu: 259686, volt: 8192 }  // unchanged
    ];

    const BATCH = 10;

    fuels.forEach(f => {
        let ticks = Math.round(f.eu * BATCH / f.volt);
        let actual = ticks * f.volt / BATCH;
        event.recipes.gtceu.combustion_generator(`burn_${f.fluid.split(':')[1]}`)
            .inputFluids(`${f.fluid} ${BATCH}`)
            .duration(ticks)
            .EUt(-f.volt);
        console.info(`[fuels] ${f.fluid}: ${actual} EU/mB`);
    });
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
