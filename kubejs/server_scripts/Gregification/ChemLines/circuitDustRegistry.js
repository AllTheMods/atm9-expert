// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;

    const dusts = obj => Object.keys(obj).map(k => obj[k] > 1 ? `${obj[k]}x #forge:dusts/${k}` : `#forge:dusts/${k}`);

    
    const mix = (name, inputs, count, eut, duration) => {
        allthemods.recipes.gtceu.mixer(`gregification:mixing/${name}`)
            .itemInputs(dusts(inputs))
            .itemOutputs(`${count}x gtceu:${name}_dust`)
            .duration(duration)
            .EUt(eut);
    };

    
    const react = (name, inputs, gas, gasAmount, count, eut, duration, id) => {
        allthemods.recipes.gtceu.large_chemical_reactor(id || `gregification:reacting/${name}`)
            .itemInputs(dusts(inputs))
            .inputFluids(`#forge:${gas} ${gasAmount}`)
            .itemOutputs(`${count}x gtceu:${name}_dust`)
            .duration(duration)
            .EUt(eut);
    };

    
    mix('bismuth_selenide', { bismuth: 2, selenium: 3 }, 5, EV, 200);
    mix('indium_antimonide', { indium: 1, antimony: 1 }, 2, EV, 200);
    mix('bismuth_antimony_telluride', { bismuth: 1, antimony: 1, tellurium: 3 }, 5, IV, 200);
    mix('tungsten_diselenide', { tungsten: 1, selenium: 2 }, 3, IV, 200);
    mix('indium_selenide', { indium: 1, selenium: 1 }, 2, EV, 200);
    mix('cadmium_zinc_telluride', { cadmium: 1, zinc: 1, tellurium: 2 }, 4, LuV, 200);
    mix('zirconium_diboride', { zirconium: 1, boron: 2 }, 3, IV, 200);
    mix('cobalt_iron_boride', { cobalt: 1, iron: 1, boron: 1 }, 3, IV, 200);
    mix('chromium_disilicide', { chromium: 1, silicon: 2 }, 3, EV, 200);
    mix('nickel_silicide', { nickel: 1, silicon: 1 }, 2, EV, 200);
    mix('nickel_germanide', { nickel: 1, germanium: 1 }, 2, EV, 200);
    mix('erbium_disilicide', { erbium: 1, silicon: 2 }, 3, LuV, 200);
    mix('gold_germanium', { gold: 1, germanium: 1 }, 2, EV, 200);
    mix('silicon_germanium', { silicon: 4, germanium: 1 }, 5, EV, 200);
    mix('indium_phosphide', { indium: 1, phosphorus: 1 }, 2, EV, 200);
    mix('sendust', { iron: 17, silicon: 2, aluminium: 1 }, 20, IV, 300);

    
    react('magnesium_oxide', { magnesium: 1 }, 'oxygen', 1000, 2, EV, 100);
    react('vanadium_dioxide', { vanadium: 1 }, 'oxygen', 2000, 3, EV, 200);
    react('zirconium_dioxide', { zirconium: 1 }, 'oxygen', 2000, 3, EV, 200);
    react('ruthenium_dioxide', { ruthenium: 1 }, 'oxygen', 2000, 3, IV, 200);
    react('iridium_dioxide', { iridium: 1 }, 'oxygen', 2000, 3, IV, 200, 'gregification:pgm/iridium_oxidize');
    react('aluminium_nitride', { aluminium: 1 }, 'nitrogen', 1000, 2, EV, 200);
    react('titanium_nitride', { titanium: 1 }, 'nitrogen', 1000, 2, EV, 200);
    react('gallium_nitride', { gallium: 1 }, 'nitrogen', 1000, 2, IV, 200);
    react('lithium_niobate', { lithium: 1, niobium: 1 }, 'oxygen', 3000, 5, IV, 300);
    react('zirconium_titanate', { zirconium: 1, titanium: 1 }, 'oxygen', 4000, 6, IV, 300);
    react('barium_titanate', { barium: 1, titanium: 1 }, 'oxygen', 3000, 5, IV, 300);
    react('gadolinium_zirconate', { gadolinium: 2, zirconium: 2 }, 'oxygen', 7000, 11, LuV, 400);
    react('gadolinium_oxysulfide', { gadolinium: 2, sulfur: 1 }, 'oxygen', 2000, 5, LuV, 300);
    react('gadolinium_iron_garnet', { gadolinium: 3, iron: 5 }, 'oxygen', 12000, 20, LuV, 500);
    react('gadolinium_gallium_garnet', { gadolinium: 3, gallium: 5 }, 'oxygen', 12000, 20, LuV, 500);
    react('europium_yttrium_silicate', { europium: 1, yttrium: 2, silicon: 1 }, 'oxygen', 5000, 9, ZPM, 400);
    react('praseodymium_yttrium_silicate', { praseodymium: 1, yttrium: 2, silicon: 1 }, 'oxygen', 5000, 9, ZPM, 400);
    react('langasite', { lanthanum: 3, gallium: 5, silicon: 1 }, 'oxygen', 14000, 23, ZPM, 600);

    // 100 dust is more than one stack, so it comes out as two
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:circuits/permendur')
        .itemInputs('49x #forge:dusts/iron', '49x #forge:dusts/cobalt', '2x #forge:dusts/vanadium')
        .itemOutputs('64x gtceu:permendur_dust', '36x gtceu:permendur_dust')
        .duration(400)
        .EUt(IV);

    // tungsten hexafluoride, 1 W + 6 F -> 7 atoms = 7000 mB
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:circuits/tungsten_hexafluoride')
        .itemInputs('#forge:dusts/tungsten')
        .inputFluids('#forge:fluorine 6000')
        .outputFluids('gtceu:tungsten_hexafluoride 7000')
        .duration(300)
        .EUt(IV);

    // ---------- SoC dusts (register indium_gallium_arsenide and aluminium_gallium_nitride first) ----------
    mix('indium_gallium_arsenide', { indium: 1, gallium: 1, arsenic: 2 }, 4, LuV, 200);
    react('aluminium_gallium_nitride', { aluminium: 1, gallium: 1 }, 'nitrogen', 2000, 4, LuV, 200);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
