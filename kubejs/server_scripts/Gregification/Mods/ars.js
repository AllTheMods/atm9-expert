ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

    const fire = 'ars_nouveau:fire_essence';
    const air = 'ars_nouveau:air_essence';
    const manipulation = 'ars_nouveau:manipulation_essence';
    const anima = 'ars_elemental:anima_essence';
    const abjuration = 'ars_nouveau:abjuration_essence';
    const earth = 'ars_nouveau:earth_essence';
    const conjuration = 'ars_nouveau:conjuration_essence';
    const water = 'ars_nouveau:water_essence';



    //should be a total of 30 recipes
    const recipes = [
        { input: ['#minecraft:arrows', '#forge:gems/source', air, 'ars_nouveau:wilden_horn'], output: 'ars_nouveau:split_arrow', source: 100 },
        { input: ['#minecraft:arrows', '#forge:gems/source', air, 'ars_nouveau:wilden_spike'], output: 'ars_nouveau:pierce_arrow', source: 100 },
        { input: ['#minecraft:arrows', '#forge:gems/source', air, '#forge:gems/diamond'], output: 'ars_nouveau:amplify_arrow', source: 100 },


        { input: ['7x #forge:dyes', '#forge:gems/quartz'], output: 'ars_elemental:rainbow_prism_lens', source: 2000 },
        { input: [earth, fire, water, air, abjuration, conjuration, manipulation, anima, 'ars_nouveau:wilden_tribute'], output: '5x ars_elemental:mark_of_mastery', source: 10000 },

        { input: [manipulation, 'ars_nouveau:glyph_decelerate', '#forge:gems/quartz'], output: 'ars_elemental:deceleration_prism_lens', source: 2000 },
        { input: [manipulation, 'ars_nouveau:glyph_accelerate', '#forge:gems/quartz'], output: 'ars_elemental:acceleration_prism_lens', source: 2000 },        
        { input: [manipulation, 'ars_nouveau:glyph_pierce', '#forge:gems/quartz'], output: 'ars_elemental:piercing_prism_lens', source: 2000 },

        { input: [manipulation, 'ars_elemental:glyph_arc_projectile', '#forge:gems/quartz'], output: 'ars_elemental:arc_prism_lens', source: 2000 },
        { input: [manipulation, 'ars_elemental:glyph_homing_projectile', '#forge:gems/quartz'], output: 'ars_elemental:homing_prism_lens', source: 2000 },


        { input: [`3x ${water}`, '3x #forge:ingots/gold', '#forge:gems/amethyst'], output: 'ars_elemental:lesser_water_focus', source: 5000 },
        { input: [`3x ${fire}`, '3x #forge:ingots/gold', '#forge:gems/amethyst'], output: 'ars_elemental:lesser_fire_focus', source: 5000 },
        { input: [`3x ${air}`, '3x #forge:ingots/gold', '#forge:gems/amethyst'], output: 'ars_elemental:lesser_air_focus', source: 5000 },
        { input: [`3x ${earth}`, '3x #forge:ingots/gold', '#forge:gems/amethyst'], output: 'ars_elemental:lesser_earth_focus', source: 5000 },


        { input: [`3x ${water}`, 'ars_elemental:water_focus', 'ars_nouveau:spell_turret'], output: 'ars_elemental:water_turret', source: 5000 },
        { input: [`3x ${fire}`, 'ars_elemental:fire_focus', 'ars_nouveau:spell_turret'], output: 'ars_elemental:fire_turret', source: 5000 },
        { input: [`3x ${air}`, 'ars_elemental:air_focus', 'ars_nouveau:spell_turret'], output: 'ars_elemental:manipulation_turret', source: 5000 },
        { input: [`3x ${earth}`, 'ars_elemental:earth_focus', 'ars_nouveau:spell_turret'], output: 'ars_elemental:earth_turret', source: 5000 },

        { input: [`3x ${manipulation}`, 'ars_nouveau:shapers_focus', 'ars_nouveau:spell_turret'], output: 'ars_elemental:air_turret', source: 5000 },
        
        
        

        { input: ['#forge:gems/lapis'], output: 'ars_nouveau:source_gem', source: 500 },
        { input: ['#forge:storage_blocks/lapis'], output: 'ars_nouveau:source_gem_block', source: 2000 },
        
        { input: ['#forge:gems/amethyst'], output: 'ars_nouveau:source_gem', source: 500, c: 2 },
        { input: ['#forge:storage_blocks/amethyst'], output: 'ars_nouveau:source_gem_block', source: 2000, c: 2 }
    ]
    recipes.forEach(mat => {
        allthemods.recipes.gtceu.imbument_chamber(`gregification:craft_${mat.output.split(":")[1]}${mat.c}`)
            .itemInputs(mat.input)
            .inputFluids(`#forge:source ${mat.source}`,)
            .itemOutputs(mat.output)
            .EUt(EV)            
            .duration(300)
    });

    //ars essences
    const essences = ['abjuration', 'conjuration', 'manipulation', 'air', 'water', 'earth', 'fire']
    essences.forEach((essence, index) => {
        allthemods.recipes.gtceu.imbument_chamber(`gregification:craft_essence_${essence}`)
            .inputFluids('#forge:source 2500',)
            .itemOutputs(`ars_nouveau:${essence}_essence`)
            .EUt(EV)
            .circuit(index + 1)
            .duration(300)
    });
    allthemods.recipes.gtceu.imbument_chamber(`gregification:craft_anima`)
        .inputFluids('#forge:source 3500',)
        .itemOutputs('ars_elemental:anima_essence')
        .EUt(EV)
        .circuit(10)
        .duration(300);
    
    allthemods.recipes.gtceu.assembler('gregification:ars/sourcestone')
        .itemInputs('#forge:dusts/source', '#forge:frames/aluminium', '2x bloodmagic:reinforcedslate', '2x #forge:dusts/plascrete')
        .inputFluids('#forge:steel 288 ')
        .itemOutputs('4x ars_nouveau:sourcestone')
        .duration(500)
        .EUt(MV);

    allthemods.recipes.gtceu.assembler('gregification:ars/arcane_pedestal')
        .itemInputs('gtceu:mv_machine_hull','2x ars_nouveau:sourcestone', '#forge:exquisite_gems/source', '4x #forge:plates/gold')
        .itemOutputs('ars_nouveau:arcane_pedestal')
        .duration(500)
        .EUt(MV);    

    allthemods.recipes.gtceu.assembler('gregification:ars/enchanting_apparatus')
        .itemInputs('gtceu:mv_machine_hull','2x ars_nouveau:sourcestone', '#forge:exquisite_gems/diamond', '4x #forge:plates/gold')
        .itemOutputs('ars_nouveau:enchanting_apparatus')
        .duration(500)
        .EUt(MV);    

    allthemods.recipes.gtceu.assembler('gregification:ars/imbuement_chamber')
        .itemInputs('gtceu:mv_machine_hull', '4x #forge:plates/gold', '#evilcraft:gems/dark_power', '6x #forge:planks/archwood')
        .itemOutputs('ars_nouveau:imbuement_chamber')
        .duration(500)
        .EUt(MV);    
});
