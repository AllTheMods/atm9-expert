// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

//@ts-check
ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    
    const replaceShaped = (recipeID, itemID, schema, ingredients) => {
        allthemods.remove({ id: recipeID });
        // @ts-ignore
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);

    };
    
    //basic capacitor
    replaceShaped("enderio:basic_capacitor",null,
        ['PCP',
         'RGR',
         'PCP'],
        {P: '#forge:plates/conductive_alloy',
         C: '#gtceu:circuits/iv',
         G: 'enderio:grains_of_infinity',
         R: 'gtceu:ram_chip'
        }
    );

    //double layer capacitor
    replaceShaped("enderio:double_layer_capacitor",null,
        ['PCP',
         'RGR',
         'PCP'],
        {P: '#forge:plates/energetic_alloy',
         C: 'enderio:basic_capacitor',
         G: 'enderio:grains_of_infinity',
         R: 'gtceu:ram_chip'
        }
    );

    //octadic capacitor
    replaceShaped("enderio:octadic_capacitor",null,
        ['PCP',
         'RGR',
         'PCP'],
        {P: '#forge:plates/vibrant_alloy',
         C: 'enderio:octadic_capacitor',
         G: 'enderio:grains_of_infinity',
         R: 'gtceu:ram_chip'
        }
    );

    //void chasis
    replaceShaped("enderio:void_chassis",null,
        ['RPS',
         'PGP',
         'SPR'],
        {P: '#forge:plates/tungsten_steel',
         S: 'gtceu:iv_electric_piston',
         G: '#forge:frames/hellforged',
         R: '#forge:gears/draconium'
        }
    );

    //ensouled chasis
    replaceShaped("enderio:ensouled_chassis",null,
        ['RPS',
         'PGP',
         'SPR'],
        {P: '#forge:plates/tungsten_steel',
         S: 'gtceu:iv_electric_piston',
         G: '#forge:frames/soularium',
         R: '#forge:gears/terrasteel'
        }
    );

    
    allthemods.recipes.gtceu.autoclave('gregification:autoclave/pulsating_crystal')
        .itemInputs("gtceu:exquisite_diamond_gem")
        .inputFluids("#forge:enderium 1296")
        .itemOutputs('enderio:pulsating_crystal')
        .duration(600)
        .EUt(EV);
        
    allthemods.recipes.gtceu.autoclave('gregification:autoclave/vibrant_crystal')
        .itemInputs("gtceu:exquisite_emerald_gem")
        .inputFluids("#forge:lumium 1296")
        .itemOutputs('enderio:vibrant_crystal')
        .duration(600)
        .EUt(EV);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
