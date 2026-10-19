ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

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
        .inputFluids('#forge:nitric_acid 250', '#forge:fluorine 576')
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
});