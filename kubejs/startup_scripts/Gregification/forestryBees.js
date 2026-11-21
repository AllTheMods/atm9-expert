// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const combChance = 0.45
const gtBees = [
    { id: 'andesite_alloy', name: 'Andesite Alloy', genus: 'metallapis', species: 'andesitum', body: 0x8B8E86, complexity: 3, parents: ['mobees:bee_stone', 'mobees:bee_iron'], mutation: 0.15, shape: 'iron', chance: combChance },
    { id: 'bitumen', name: 'Bitumen', genus: 'mineralapis', species: 'bitumenum', body: 0x2B2420, complexity: 3, parents: ['mobees:bee_coal', 'forestry:bee_marshy'], mutation: 0.14, humidity: 'DAMP', shape: 'coal', chance: combChance },
    { id: 'gallium', name: 'Gallium', genus: 'metallapis', species: 'gallicum', body: 0xC6CCD3, complexity: 5, parents: ['mobees:bee_zinc', 'mobees:bee_aluminum'], mutation: 0.10, shape: 'iron', chance: combChance },
    { id: 'arsenic', name: 'Arsenic', genus: 'metallapis', species: 'arsenicum', body: 0xCCBECF, complexity: 5, parents: ['mobees:bee_lead', 'forestry:bee_sulfur'], mutation: 0.10, shape: 'iron', chance: combChance },
    { id: 'oxygen', name: 'Oxygen', genus: 'aerapis', species: 'oxygenum', body: 0xEDEDE1, complexity: 4, parents: ['forestry:bee_verdant', 'forestry:bee_aquatic'], mutation: 0.10, shape: 'coal', chance: combChance },
    { id: 'nitrogen', name: 'Nitrogen', genus: 'aerapis', species: 'nitrogenum', body: 0xF0C6CC, complexity: 5, parents: ['forestry:bee_oxygen', 'mobees:bee_germinated'], mutation: 0.08, shape: 'coal', chance: combChance },
    { id: 'hydrogen', name: 'Hydrogen', genus: 'aerapis', species: 'hydrogenum', body: 0xADAFE4, complexity: 5, parents: ['forestry:bee_aquatic', 'mobees:bee_energetic'], mutation: 0.08, shape: 'coal', chance: combChance },
    { id: 'fluorine', name: 'Fluorine', genus: 'aerapis', species: 'fluoricum', body: 0xCAC12C, stripes: 0xF3EE80, complexity: 5, parents: ['mobees:bee_apatite', 'forestry:bee_hydrogen'], mutation: 0.08, shape: 'coal', chance: combChance },
    { id: 'sulfur', name: 'Sulfur', genus: 'mineralapis', species: 'sulfuricum', body: 0xE4FF95, stripes: 0xC9AB4B, complexity: 4, parents: ['mobees:bee_coal', 'forestry:bee_sinister'], mutation: 0.12, temp: 'WARM', shape: 'coal', chance: combChance },
    { id: 'chromium', name: 'Chromium', genus: 'metallapis', species: 'chromicum', body: 0xD1D1D3, complexity: 5, parents: ['mobees:bee_lead', 'mobees:bee_iron'], mutation: 0.10, shape: 'iron', chance: combChance },
    { id: 'rock_salt', name: 'Rock Salt', genus: 'mineralapis', species: 'salinum', body: 0xFA9F98, stripes: 0x8A8A8A, complexity: 4, parents: ['mobees:bee_mineral', 'forestry:bee_aquatic'], mutation: 0.12, shape: 'certus', chance: combChance },
    { id: 'antimony', name: 'Antimony', genus: 'metallapis', species: 'stibium', body: 0x382B18, complexity: 4, parents: ['mobees:bee_lead', 'mobees:bee_tin'], mutation: 0.12, shape: 'iron', chance: combChance },
    { id: 'magnesium', name: 'Magnesium', genus: 'metallapis', species: 'magnesicum', body: 0xAAAAAD, complexity: 4, parents: ['mobees:bee_bony', 'mobees:bee_iron'], mutation: 0.12, shape: 'iron', chance: combChance },
    { id: 'ruby', name: 'Ruby', genus: 'gemmapis', species: 'rubinum', body: 0xC62415, stripes: 0x064F2C, outline: 0x7B000B, complexity: 6, parents: ['mobees:bee_redstone', 'mobees:bee_diamond'], mutation: 0.08, shape: 'certus', chance: combChance },
    { id: 'peridot', name: 'Peridot', genus: 'gemmapis', species: 'peridotum', body: 0x8ADB18, stripes: 0x064F2C, outline: 0x5D7B00, complexity: 6, parents: ['mobees:bee_emerald', 'mobees:bee_redstone'], mutation: 0.08, shape: 'certus', chance: combChance },
    { id: 'sapphire', name: 'Sapphire', genus: 'gemmapis', species: 'sapphirum', body: 0x5241F3, stripes: 0x064F2C, outline: 0x000B7B, complexity: 6, parents: ['mobees:bee_lapis', 'mobees:bee_diamond'], mutation: 0.08, shape: 'certus', chance: combChance },
    { id: 'dark_gem', name: 'Dark Gem', genus: 'gemmapis', species: 'tenebrum', body: 0x636363, stripes: 0x2E0B17, outline: 0x141414, complexity: 7, parents: ['mobees:bee_amethyst', 'mobees:bee_withered'], mutation: 0.06, glint: true, shape: 'certus', chance: combChance },
    { id: 'manganese', name: 'Manganese', genus: 'metallapis', species: 'manganicum', body: 0xB39BC4, complexity: 4, parents: ['mobees:bee_iron', 'mobees:bee_nickel'], mutation: 0.10, shape: 'iron', chance: combChance },
    { id: 'cadmium', name: 'Cadmium', genus: 'metallapis', species: 'cadmicum', body: 0xD8C25A, complexity: 5, parents: ['mobees:bee_zinc', 'mobees:bee_lead'], mutation: 0.10, shape: 'iron', chance: combChance },
    { id: 'energized', name: 'Energized', genus: 'mineralapis', species: 'energicum', body: 0xD9482B, stripes: 0xF4CF4A, complexity: 6, parents: ['mobees:bee_redstone', 'mobees:bee_glowstone'], mutation: 0.06, glint: true, shape: 'certus', chance: combChance }
]

function beeShade(c, f) {
    let r = Math.round(((c >> 16) & 255) * f)
    let g = Math.round(((c >> 8) & 255) * f)
    let b = Math.round((c & 255) * f)
    return (r << 16) | (g << 8) | b
}

StartupEvents.registry('item', allthemods => {
    gtBees.forEach(b => {
        allthemods.create('forestry:bee_comb_' + b.id)
            .parentModel('forestry:item/bee_combs')
            .texture('layer0', 'forestry:item/bee_combs.0')
            .texture('layer1', 'forestry:item/bee_combs.1')
            .color(0, b.body)
            .color(1, b.stripes || beeShade(b.body, 0.6))
        allthemods.create('forestry:' + b.id + '_bit')
            .texture('mobees:item/material/' + b.shape + '_bit')
            .color(0, b.body)
    })
})

ForestryEvents.genetics(allthemods => {
    allthemods.defineTaxon('apidae', 'metallapis')
    allthemods.defineTaxon('apidae', 'aerapis')
    allthemods.defineTaxon('apidae', 'gemmapis')
    allthemods.defineTaxon('apidae', 'mineralapis')
})

ForestryEvents.apiculture(allthemods => {
    const TextColor = Java.loadClass('net.minecraft.network.chat.TextColor')
    const TemperatureType = Java.loadClass('forestry.api.core.TemperatureType')
    const HumidityType = Java.loadClass('forestry.api.core.HumidityType')
    const BeeChromosomes = Java.loadClass('forestry.api.genetics.alleles.BeeChromosomes')
    const ForestryAlleles = Java.loadClass('forestry.api.genetics.alleles.ForestryAlleles')

    function rgb(c) {
        return TextColor.fromRgb(c)
    }

    gtBees.forEach(b => {
        let bee = allthemods.registerSpecies('forestry:bee_' + b.id, b.genus, b.species, false, rgb(b.body))
        bee.setBody(rgb(b.body))
        bee.setStripes(rgb(b.stripes || beeShade(b.body, 0.6)))
        bee.setOutline(rgb(b.outline || beeShade(b.body, 0.3)))
        bee.setTemperature(TemperatureType[b.temp || 'NORMAL'])
        bee.setHumidity(HumidityType[b.humidity || 'NORMAL'])
        bee.setComplexity(b.complexity)
        if (b.glint) bee.setGlint(true)
        bee.addProduct(Item.of('forestry:bee_comb_' + b.id), b.chance)
        bee.setGenome(g => {
            g.set(BeeChromosomes.SPEED, ForestryAlleles.SPEED_SLOW)
            g.set(BeeChromosomes.LIFESPAN, ForestryAlleles.LIFESPAN_NORMAL)
            g.set(BeeChromosomes.FERTILITY, ForestryAlleles.FERTILITY_2)
            g.set(BeeChromosomes.TEMPERATURE_TOLERANCE, ForestryAlleles.TOLERANCE_NONE)
            g.set(BeeChromosomes.HUMIDITY_TOLERANCE, ForestryAlleles.TOLERANCE_NONE)
            g.set(BeeChromosomes.EFFECT, ForestryAlleles.EFFECT_NONE)
            g.set(BeeChromosomes.FLOWER_TYPE, ForestryAlleles.FLOWER_TYPE_VANILLA)
            g.setRemainingDefault()
        })
        bee.addMutations(m => {
            m.add(b.parents[0], b.parents[1], b.mutation)
        })
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.