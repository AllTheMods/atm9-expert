ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA

    allthemods.recipes.gtceu.sunnarium_generator('gregification:generator/day')
        .notConsumable('gtceu:sunnarium_core')
        .daytime()
        .duration(20)
        .EUt(-LuV)

    allthemods.recipes.gtceu.lunarium_generator('gregification:generator/night')
        .notConsumable('gtceu:lunarium_core')
        .daytime(true)
        .duration(20)
        .EUt(-LuV)

    allthemods.shaped('gtceu:sunnarium_core',
        [
            'SDS',
            'DCD',
            'SDS'
        ],
        {
            D: '#forge:dense_plates/sunnarium',
            C: '#forge:frames/allthemodium',
            S: 'minecraft:nether_star'
        }
    ).id('gregification:solar_generator/sunnarium_core');

    allthemods.shaped('gtceu:lunarium_core',
        [
            'SDS',
            'DCD',
            'SDS'
        ],
        {
            D: '#forge:dense_plates/lunarium',
            C: '#forge:frames/vibranium',
            S: 'minecraft:nether_star'
        }
    ).id('gregification:solar_generator/lunarium_core');


    const tiers = ['luv', 'zpm', 'uv']

    tiers.forEach(tier => {
        allthemods.shaped(`gtceu:${tier}_sunnarium_generator`,
            [
                'DGD',
                'MHM',
                'DCD'
            ],
            {
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`,
                M: '#forge:plates/mithril',
                D: '#forge:double_plates/sunnarium',
                G: 'gtceu:perovskite_photovoltaic_cell'
            }
        ).id(`gregification:solar_generator/${tier}_sunnarium_generator`);

        allthemods.shaped(`gtceu:${tier}_lunarium_generator`,
            [
                'DGD',
                'MHM',
                'DCD'
            ],
            {
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`,
                M: '#forge:plates/mithril',
                D: '#forge:double_plates/lunarium',
                G: 'gtceu:perovskite_photovoltaic_cell'
            }
        ).id(`gregification:solar_generator/${tier}_lunarium_generator`);
    });


})
