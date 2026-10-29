// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    const COIL_TEMPS = {
        CUPRONICKEL: 1800,
        KANTHAL: 2700,
        NICHROME: 3600,
        RTM: 4500,
        HSS_G: 5400,
        NAQUADAH: 7200,
        TRINIUM: 9000,
        TRITANIUM: 10800,
        DRACONIUM: 11200,
        DRACONIUM_AWAKENED: 12800,
        ETRIUM: 13500,
        INFINITY: 15000
    };

    const chainA = IV;
    const chainB = LuV;
    const chainC = ZPM;
    const durationA = 400;
    const durationB = 600;
    const durationC = 800;

    const nuclearPhysicsEU = ZPM
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:neutron_source/polonium_beryllium')
        .itemInputs('32x #forge:dusts/polonium', '64x #forge:dusts/beryllium', '1x #forge:frames/adamantium')
        .inputFluids('#forge:argon 8000')
        .itemOutputs('gtceu:polonium_beryllium_neutron_source')
        .duration(4000)
        .EUt(nuclearPhysicsEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:neutron_source/americium_beryllium')
        .itemInputs('32x #forge:dusts/americium', '64x #forge:dusts/beryllium', '2x #forge:frames/adamantium')
        .inputFluids('#forge:argon 8000')
        .itemOutputs('gtceu:americium_beryllium_neutron_source')
        .duration(6000)
        .EUt(nuclearPhysicsEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:neutron_source/californium')
        .itemInputs('4x #forge:frames/adamantium')
        .inputFluids('#forge:californium 4608', '#forge:argon 8000')
        .itemOutputs('gtceu:californium_neutron_source')
        .duration(8000)
        .EUt(nuclearPhysicsEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:nuclear_waste/cyanite')
        .itemInputs('1x #forge:dusts/cyanite')
        .inputFluids('#forge:nitric_acid 250', '#forge:hydrofluoric_acid 576')
        .outputFluids('gtceu:nuclear_waste 250')
        .duration(400)
        .EUt(nuclearPhysicsEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pellet/polonium')
        .itemInputs('1x #forge:dusts/fluorite')
        .inputFluids('#forge:polonium 1000', 'minecraft:water 1000')
        .itemOutputs('mekanism:pellet_polonium')
        .outputFluids('gtceu:spent_nuclear_waste 1000')
        .duration(400)
        .EUt(nuclearPhysicsEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:pellet/plutonium')
        .itemInputs('1x #forge:dusts/fluorite')
        .inputFluids('#forge:plutonium 1000', 'minecraft:water 1000')
        .itemOutputs('mekanism:pellet_plutonium')
        .outputFluids('gtceu:spent_nuclear_waste 1000')
        .duration(400)
        .EUt(nuclearPhysicsEU);

    [{ size: 'single', n: 1 }, { size: 'double', n: 2 }, { size: 'quad', n: 4 }].forEach(cell => {
        const n = cell.n;
        allthemods.recipes.gtceu.assembler(`gregification:cell/thorium_${cell.size}`)            
            .itemInputs(`${n}x #forge:dusts/thorium_oxide`,
                `${n}x #forge:plates/potassium_calcium_orthosilicate`,
                `${2 * n}x #forge:rods/graphite`,
                `${2 * n}x #forge:plates/zirconium`,
                `${n}x #forge:dusts/boron`,
                `${n}x #forge:dusts/beryllium`)
            .circuit(n)
            .inputFluids('#forge:hop_graphite 1000')
            .itemOutputs(`gtceu:thorium_${cell.size}`)
            .duration(120)
            .EUt(IV);
    });

    [{ size: 'single', n: 1 }, { size: 'double', n: 2 }, { size: 'quad', n: 4 }].forEach(cell => {
        const n = cell.n;
        allthemods.recipes.gtceu.assembler(`gregification:cell/thorium_berkelium_${cell.size}`)            
            .itemInputs(`${n}x #forge:dusts/thorium_berkelium_alloy`,
                `${n}x #forge:plates/tungsten_carbide`,
                `${2 * n}x #forge:rods/thorium`,
                `${2 * n}x #forge:plates/zirconium`,
                `${n}x #forge:dusts/gadolinium`,
                `${n}x #forge:dusts/beryllium`)
            .circuit(n)
            .inputFluids('#forge:hop_graphite 1000')
            .itemOutputs(`gtceu:thorium_berkelium_${cell.size}`)
            .duration(120)
            .EUt(LuV);
    });


    allthemods.recipes.gtceu.large_chemical_reactor('gregification:waste_chain/a_dissolve')
        .inputFluids('#forge:nuclear_waste 1000', '#forge:nitric_acid 1000')
        .outputFluids('gtceu:dissolved_nuclear_waste 1000')
        .duration(durationA)
        .EUt(chainA);

    allthemods.recipes.gtceu.centrifuge('gregification:waste_chain/a_split')
        .inputFluids('#forge:dissolved_nuclear_waste 1000')
        .chancedOutput('gtceu:uranium_dust', 1000, 100)
        .chancedOutput('gtceu:caesium_dust', 500, 100)
        .chancedOutput('gtceu:strontium_dust', 500, 100)
        .chancedOutput('gtceu:palladium_dust', 500, 100)
        .chancedOutput('gtceu:neodymium_dust', 500, 100)
        .chancedOutput('gtceu:neptunium_dust', 200, 100)
        .outputFluids('gtceu:plutonium 150', 'gtceu:polonium 250', 'gtceu:xenon 50', 'gtceu:krypton 50', 'gtceu:spent_nuclear_waste 500')
        .duration(durationA)
        .EUt(chainA);


    allthemods.recipes.gtceu.large_chemical_reactor('gregification:waste_chain/b_dissolve')
        .inputFluids('#forge:thorium_waste_solution 1000', '#forge:hydrochloric_acid 1000')
        .outputFluids('gtceu:dissolved_thorium_waste 1000')
        .duration(durationB)
        .EUt(chainB);

    allthemods.recipes.gtceu.electrolyzer('gregification:waste_chain/b_split')
        .inputFluids('#forge:dissolved_thorium_waste 1000')
        .chancedOutput('gtceu:thorium_dust', 1000, 100)
        .chancedOutput('gtceu:uranium_dust', 500, 100)
        .chancedOutput('gtceu:protactinium_dust', 1000, 100)
        .chancedOutput('gtceu:strontium_dust', 600, 100)
        .chancedOutput('gtceu:radium_dust', 200, 100)
        .chancedOutput('gtceu:actinium_dust', 100, 100)
        .outputFluids('gtceu:radon 250', 'gtceu:spent_nuclear_waste 500')
        .duration(durationB)
        .EUt(chainB);


    allthemods.recipes.gtceu.large_chemical_reactor('gregification:waste_chain/c_dissolve')
        .inputFluids('#forge:thorium_berkelium_waste_solution 1000', '#forge:sulfuric_acid 1000')
        .outputFluids('gtceu:dissolved_berkelium_waste 1000')
        .duration(durationC)
        .EUt(chainC);

    allthemods.recipes.gtceu.centrifuge('gregification:waste_chain/c_split')
        .inputFluids('#forge:dissolved_berkelium_waste 1000')
        .chancedOutput('gtceu:thorium_dust', 1500, 100)
        .chancedOutput('gtceu:californium_dust', 300, 100)
        .chancedOutput('gtceu:berkelium_dust', 200, 100)
        .chancedOutput('gtceu:protactinium_dust', 1000, 100)
        .chancedOutput('gtceu:uranium_dust', 800, 100)
        .chancedOutput('gtceu:einsteinium_dust', 200, 100)
        .outputFluids('gtceu:xenon 200', 'gtceu:spent_nuclear_waste 500')
        .duration(durationC)
        .EUt(chainC);

    allthemods.recipes.gtceu.centrifuge('gregification:waste_chain/digested_fission')
        .inputFluids('#forge:digested_fission_products 1000')
        .chancedOutput('gtceu:caesium_dust', 200, 100)
        .chancedOutput('gtceu:strontium_sulfide_dust', 120, 100)
        .chancedOutput('gtceu:technetium_dust', 500, 100)
        .chancedOutput('gtceu:ruthenium_dust', 500, 100)
        .chancedOutput('gtceu:rhodium_dust', 300, 100)
        .chancedOutput('gtceu:tellurium_dust', 600, 100)
        .duration(durationC)
        .EUt(chainC);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:waste_chain/digested_fertile')
        .inputFluids('#forge:digested_fertile_actinides 1000')
        .chancedOutput('gtceu:thorium_dust', 250, 100)
        .chancedOutput('gtceu:uranium_dust', 250, 100)
        .chancedOutput('gtceu:protactinium_dust', 150, 100)
        .duration(durationC)
        .EUt(chainC);

    allthemods.recipes.gtceu.electrolyzer('gregification:waste_chain/digested_transuranics')
        .inputFluids('#forge:digested_transuranics 1000')
        .chancedOutput('gtceu:plutonium_241_dust', 100, 100)
        .chancedOutput('gtceu:neptunium_dust', 500, 100)
        .chancedOutput('gtceu:americium_dust', 300, 100)
        .chancedOutput('gtceu:curium_dust', 150, 100)
        .chancedOutput('gtceu:einsteinium_dust', 50, 100)
        .chancedOutput('gtceu:fermium_dust', 30, 100)
        .duration(durationC)
        .EUt(chainC);

    [['single', 1], ['double', 2], ['quad', 4]].forEach(([size, n]) => {
        allthemods.recipes.gtceu.large_chemical_reactor(`gregification:cell_reprocess/thorium_${size}`)
            .itemInputs(`gtceu:depleted_${size}_thorium`)
            .inputFluids(`#forge:nitric_acid ${n * 1000}`)
            .chancedOutput(`${2 * n}x gtceu:zirconium_dust`, 7500, 100)
            .chancedOutput(`${n}x gtceu:potassium_calcium_orthosilicate_dust`, 2500, 100)
            .chancedOutput(`${2 * n}x gtceu:graphite_dust`, 2500, 100)
            .outputFluids(`gtceu:thorium_waste_solution ${500 * n}`)
            .duration(300)
            .EUt(LuV);

        allthemods.recipes.gtceu.large_chemical_reactor(`gregification:cell_reprocess/thorium_berkelium_${size}`)
            .itemInputs(`gtceu:depleted_${size}_thorium_berkelium`)
            .inputFluids(`#forge:hydrofluoric_acid ${n * 1000}`)
            .chancedOutput(`${2 * n}x gtceu:zirconium_dust`, 7500, 100)
            .chancedOutput(`${n}x gtceu:tungsten_carbide_dust`, 2500, 100)
            .chancedOutput(`${2 * n}x gtceu:thorium_dust`, 2500, 100)
            .outputFluids(`gtceu:thorium_berkelium_waste_solution ${500 * n}`)
            .duration(300)
            .EUt(ZPM);
    });

    const pbDuration = 600;
    const pbEU = LuV;
    allthemods.recipes.gtceu.neutron_irradiator('gregification:irradiator/molybdenum_99')
        .itemInputs('4x #forge:dusts/molybdenum')
        .notConsumable('gtceu:polonium_beryllium_neutron_source')
        .itemOutputs('4x gtceu:molybdenum_99_dust')
        .duration(pbDuration)
        .EUt(pbEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:decay/molybdenum_99')
        .itemInputs('4x #forge:dusts/molybdenum_99')
        .itemOutputs('4x gtceu:technetium_dust')
        .duration(pbDuration)
        .EUt(pbEU);

    allthemods.recipes.gtceu.neutron_irradiator('gregification:irradiator/radium_227')
        .itemInputs('4x #forge:dusts/radium')
        .notConsumable('gtceu:polonium_beryllium_neutron_source')
        .itemOutputs('4x gtceu:radium_227_dust')
        .duration(pbDuration)
        .EUt(pbEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:decay/radium_227')
        .itemInputs('4x #forge:dusts/radium_227')
        .itemOutputs('4x gtceu:actinium_dust')
        .duration(pbDuration)
        .EUt(pbEU);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:flerovium/adsorption')
        .inputFluids('#forge:flerovium 144')
        .notConsumable('#forge:dusts/gold')
        .itemOutputs('gtceu:flerovium_dust')
        .duration(400)
        .EUt(UV);

    allthemods.recipes.gtceu.mixer('gregification:ion_clay/weathering')
        .itemInputs('4x #forge:dusts/clay', '1x #forge:dusts/granite_red')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('6x gtceu:ion_adsorption_clay_dust')
        .duration(400)
        .EUt(HV);

    allthemods.recipes.gtceu.industrial_leacher('gregification:ion_clay/leach')
        .itemInputs('60x #forge:dusts/ion_adsorption_clay', '15x #forge:dusts/ammonium_chloride')
        .inputFluids('#forge:sulfuric_acid 15000')
        .itemOutputs('60x gtceu:rare_earth_clay_mud_dust')
        .addData('ebf_temp', COIL_TEMPS.DRACONIUM)
        .duration(400)
        .EUt(ZPM);

    allthemods.recipes.gtceu.dissolution_tank('gregification:ion_clay/dissolve')
        .itemInputs('60x #forge:dusts/rare_earth_clay_mud', '15x #forge:dusts/saltpeter')
        .inputFluids('minecraft:water 30000')
        .itemOutputs('60x gtceu:diluted_rare_earth_clay_mud_dust', '15x gtceu:aluminium_dust')
        .addData('ebf_temp', COIL_TEMPS.DRACONIUM)
        .duration(400)
        .EUt(ZPM);

    allthemods.recipes.gtceu.sifter('gregification:ion_clay/sift')
        .itemInputs('60x #forge:dusts/diluted_rare_earth_clay_mud')
        .chancedOutput('3x gtceu:erbium_oxide_dust', 400, 500)
        .chancedOutput('3x gtceu:ytterbium_oxide_dust', 350, 500)
        .chancedOutput('1x gtceu:holmium_oxide_dust', 450, 500)
        .chancedOutput('1x gtceu:thulium_oxide_dust', 250, 500)
        .chancedOutput('15x gtceu:silicon_dioxide_dust', 500, 500)
        .duration(400)
        .EUt(ZPM);

    ['erbium', 'holmium', 'thulium'].forEach(el => {
        allthemods.recipes.gtceu.large_chemical_reactor(`gregification:${el}/fluorination`)
            .itemInputs(`1x #forge:dusts/${el}_oxide`)
            .inputFluids('#forge:hydrofluoric_acid 6000')
            .itemOutputs(`2x gtceu:${el}_fluoride_dust`)
            .outputFluids('minecraft:water 3000')
            .duration(400)
            .EUt(ZPM);
    });

    const ladder = [
        { from: 'americium', iso: 'americium_244', to: 'curium', emitter: 'americium_beryllium', eut: ZPM },
        { from: 'curium', iso: 'curium_249', to: 'berkelium', emitter: 'americium_beryllium', eut: ZPM },
        { from: 'berkelium', iso: 'berkelium_250', to: 'californium', emitter: 'californium', eut: UV },
        { from: 'californium', iso: 'californium_253', to: 'einsteinium', emitter: 'californium', eut: UV },
        { from: 'einsteinium', iso: 'einsteinium_255', to: 'fermium', emitter: 'californium', eut: UV }
    ];

    ladder.forEach(step => {
        allthemods.recipes.gtceu.neutron_irradiator(`gregification:irradiator/${step.iso}`)
            .itemInputs(`4x #forge:dusts/${step.from}`)
            .notConsumable(`gtceu:${step.emitter}_neutron_source`)
            .itemOutputs(`4x gtceu:${step.iso}_dust`)
            .duration(pbDuration)
            .EUt(step.eut);

        allthemods.recipes.gtceu.large_chemical_reactor(`gregification:decay/${step.iso}`)
            .itemInputs(`4x #forge:dusts/${step.iso}`)
            .itemOutputs(`4x gtceu:${step.to}_dust`)
            .duration(pbDuration)
            .EUt(step.eut);
    });

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:curium/fluorination')
        .itemInputs('2x #forge:dusts/curium')
        .inputFluids('#forge:hydrofluoric_acid 6000')
        .itemOutputs('2x gtceu:curium_fluoride_dust')
        .outputFluids('gtceu:hydrogen 3000')
        .duration(400)
        .EUt(UV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
