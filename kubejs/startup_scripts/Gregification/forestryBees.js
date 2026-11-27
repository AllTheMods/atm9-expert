// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const combChance = { 1: 0.45, 2: 0.35, 3: 0.25, 4: 0.15, 5: 0.10, 6: 0.05 }
const gtBees = [
    { id: 'andesite_alloy', name: 'Andesite Alloy', genus: 'metallapis', species: 'andesitum', body: 0x8B8E86, tier: 1, parents: [['mobees:bee_stone', 'mobees:bee_iron'], ['mobees:bee_rocky', 'mobees:bee_rusty'], ['mobees:bee_stone', 'mobees:bee_copper']], mutation: 0.15, shape: 'iron' },
    { id: 'bitumen', name: 'Bitumen', genus: 'mineralapis', species: 'bitumenum', body: 0x2B2420, tier: 1, parents: [['mobees:bee_coal', 'forestry:bee_marshy'], ['mobees:bee_coal', 'forestry:bee_miry'], ['mobees:bee_rusty', 'forestry:bee_boggy']], mutation: 0.14, humidity: 'DAMP', shape: 'coal' },
    { id: 'oxygen', name: 'Oxygen', genus: 'aerapis', species: 'oxygenum', body: 0xEDEDE1, tier: 1, parents: [['forestry:bee_verdant', 'forestry:bee_aquatic'], ['forestry:bee_lush', 'forestry:bee_aquatic'], ['forestry:bee_verdant', 'mobees:bee_lively'], ['forestry:bee_photosynthetic', 'forestry:bee_aquatic']], mutation: 0.10, shape: 'coal' },
    { id: 'fluix', name: 'Fluix', genus: 'mineralapis', species: 'fluixum', body: 0xA89BD8, stripes: 0x5E4FA8, tier: 1, parents: [['mobees:bee_certus', 'mobees:bee_redstone'], ['mobees:bee_certus', 'mobees:bee_crystalline'], ['mobees:bee_certus', 'mobees:bee_lapis']], mutation: 0.12, shape: 'certus' },
    { id: 'sapphire', name: 'Sapphire', genus: 'gemmapis', species: 'sapphirum', body: 0x5241F3, stripes: 0x064F2C, outline: 0x000B7B, tier: 1, parents: [['mobees:bee_lapis', 'mobees:bee_diamond'], ['mobees:bee_crystalline', 'mobees:bee_lapis'], ['mobees:bee_aluminum', 'mobees:bee_lapis'], ['mobees:bee_aluminum', 'mobees:bee_diamond']], mutation: 0.08, shape: 'certus' },
    { id: 'ruby', name: 'Ruby', genus: 'gemmapis', species: 'rubinum', body: 0xC62415, stripes: 0x064F2C, outline: 0x7B000B, tier: 1, parents: [['mobees:bee_redstone', 'mobees:bee_diamond'], ['mobees:bee_crystalline', 'mobees:bee_redstone'], ['mobees:bee_budding', 'mobees:bee_redstone']], mutation: 0.08, shape: 'certus' },
    { id: 'peridot', name: 'Peridot', genus: 'gemmapis', species: 'peridotum', body: 0x8ADB18, stripes: 0x064F2C, outline: 0x5D7B00, tier: 1, parents: [['mobees:bee_emerald', 'mobees:bee_redstone'], ['mobees:bee_crystalline', 'mobees:bee_emerald'], ['mobees:bee_emerald', 'mobees:bee_apatite'], ['mobees:bee_emerald', 'mobees:bee_budding']], mutation: 0.08, shape: 'certus' },
    { id: 'dark_gem', name: 'Dark Gem', genus: 'gemmapis', species: 'tenebrum', body: 0x636363, stripes: 0x2E0B17, outline: 0x141414, tier: 1, parents: [['mobees:bee_amethyst', 'mobees:bee_withered'], ['mobees:bee_withered', 'mobees:bee_crystalline'], ['mobees:bee_amethyst', 'forestry:bee_fiendish'], ['mobees:bee_witchy', 'mobees:bee_amethyst'], ['mobees:bee_cursed', 'mobees:bee_amethyst']], mutation: 0.06, glint: true, shape: 'certus' },
    { id: 'gregbee', name: 'Gregbee', genus: 'technapis', species: 'gregorium', body: 0xD46A1F, stripes: 0x3A3A3A, tier: 2, parents: [['forestry:bee_phantasmal', 'mobees:bee_iron'], ['forestry:bee_phantasmal', 'mobees:bee_redstone'], ['forestry:bee_phantasmal', 'forestry:bee_industrious'], ['forestry:bee_phantasmal', 'forestry:bee_diligent'], ['forestry:bee_phantasmal', 'mobees:bee_rusty']], mutation: 0.06, shape: 'iron', noBit: true },
    { id: 'sulfur', name: 'Sulfur', genus: 'mineralapis', species: 'sulfuricum', body: 0xE4FF95, stripes: 0xC9AB4B, tier: 2, parents: [['mobees:bee_coal', 'forestry:bee_sinister'], ['forestry:bee_bitumen', 'forestry:bee_sinister'], ['forestry:bee_bitumen', 'forestry:bee_fiendish'], ['mobees:bee_desolate', 'forestry:bee_bitumen'], ['forestry:bee_nitrogen', 'mobees:bee_coal']], mutation: 0.12, temp: 'WARM', shape: 'coal' },
    { id: 'rock_salt', name: 'Rock Salt', genus: 'mineralapis', species: 'salinum', body: 0xFA9F98, stripes: 0x8A8A8A, tier: 2, parents: [['mobees:bee_mineral', 'forestry:bee_aquatic'], ['forestry:bee_bitumen', 'mobees:bee_shelled'], ['forestry:bee_andesite_alloy', 'mobees:bee_nautilus'], ['mobees:bee_mineral', 'mobees:bee_drowned'], ['forestry:bee_oxygen', 'mobees:bee_mineral'], ['forestry:bee_nitrogen', 'mobees:bee_mineral']], mutation: 0.12, shape: 'certus' },
    { id: 'antimony', name: 'Antimony', genus: 'metallapis', species: 'stibium', body: 0x382B18, tier: 2, parents: [['mobees:bee_lead', 'mobees:bee_tin'], ['forestry:bee_sulfur', 'mobees:bee_tin'], ['forestry:bee_rock_salt', 'mobees:bee_lead'], ['forestry:bee_andesite_alloy', 'mobees:bee_lead'], ['forestry:bee_bitumen', 'mobees:bee_tin']], mutation: 0.12, shape: 'iron' },
    { id: 'gallium', name: 'Gallium', genus: 'metallapis', species: 'gallicum', body: 0xC6CCD3, tier: 2, parents: [['mobees:bee_zinc', 'mobees:bee_aluminum'], ['forestry:bee_andesite_alloy', 'mobees:bee_aluminum'], ['mobees:bee_zinc', 'forestry:bee_oxygen'], ['mobees:bee_aluminum', 'forestry:bee_sapphire'], ['mobees:bee_zinc', 'forestry:bee_sapphire']], mutation: 0.10, shape: 'iron' },
    { id: 'arsenic', name: 'Arsenic', genus: 'metallapis', species: 'arsenicum', body: 0xCCBECF, tier: 2, parents: [['mobees:bee_lead', 'forestry:bee_sulfur'], ['forestry:bee_sulfur', 'forestry:bee_rock_salt'], ['forestry:bee_bitumen', 'mobees:bee_lead'], ['forestry:bee_sulfur', 'mobees:bee_zinc'], ['forestry:bee_sulfur', 'forestry:bee_oxygen'], ['forestry:bee_cadmium', 'forestry:bee_sinister']], mutation: 0.10, shape: 'iron' },
    { id: 'mana', name: 'Mana', genus: 'arcanapis', species: 'manicum', body: 0x3FC8E8, stripes: 0xB8F1FF, tier: 2, parents: [['mobees:bee_spirited', 'forestry:bee_verdant'], ['mobees:bee_ephemeral', 'forestry:bee_lush'], ['mobees:bee_mysterious', 'forestry:bee_verdant'], ['mobees:bee_arcane', 'forestry:bee_oxygen']], mutation: 0.10, shape: 'certus' },
    { id: 'source', name: 'Source', genus: 'arcanapis', species: 'fontanum', body: 0x9A5CE0, stripes: 0xE0C8FF, tier: 2, parents: [['mobees:bee_arcane', 'forestry:bee_ended'], ['mobees:bee_witchy', 'forestry:bee_ended'], ['mobees:bee_mysterious', 'forestry:bee_spectral'], ['forestry:bee_soul', 'forestry:bee_ended']], mutation: 0.10, shape: 'certus' },
    { id: 'blood', name: 'Blood', genus: 'arcanapis', species: 'sanguinum', body: 0x9E1B1B, stripes: 0xD94A4A, tier: 2, parents: [['mobees:bee_witchy', 'forestry:bee_sinister'], ['mobees:bee_cursed', 'forestry:bee_sinister'], ['mobees:bee_cursed', 'forestry:bee_fiendish'], ['mobees:bee_witchy', 'forestry:bee_vindictive']], mutation: 0.10, shape: 'coal' },
    { id: 'soul', name: 'Soul', genus: 'arcanapis', species: 'animum', body: 0x9FD8CF, stripes: 0x4C8C84, tier: 3, parents: [['forestry:bee_blood', 'mobees:bee_soulful'], ['forestry:bee_blood', 'mobees:bee_forlorn'], ['mobees:bee_cursed', 'forestry:bee_spectral'], ['forestry:bee_blood', 'forestry:bee_ended']], mutation: 0.08, glint: true, shape: 'certus' },
    { id: 'aureal', name: 'Aureal', genus: 'arcanapis', species: 'aurealum', body: 0xF2C94C, stripes: 0xFFF0A8, tier: 3, parents: [['forestry:bee_mana', 'forestry:bee_source'], ['forestry:bee_soul', 'mobees:bee_divine'], ['forestry:bee_soul', 'forestry:bee_mana'], ['forestry:bee_source', 'mobees:bee_sage']], mutation: 0.06, glint: true, shape: 'certus' },
    { id: 'magnesium', name: 'Magnesium', genus: 'metallapis', species: 'magnesicum', body: 0xAAAAAD, tier: 3, parents: [['mobees:bee_bony', 'mobees:bee_iron'], ['forestry:bee_andesite_alloy', 'mobees:bee_bony'], ['mobees:bee_mineral', 'mobees:bee_resilient'], ['forestry:bee_rock_salt', 'mobees:bee_iron'], ['forestry:bee_rock_salt', 'mobees:bee_tolerant']], mutation: 0.12, shape: 'iron' },
    { id: 'manganese', name: 'Manganese', genus: 'metallapis', species: 'manganicum', body: 0xB39BC4, tier: 3, parents: [['mobees:bee_iron', 'mobees:bee_nickel'], ['forestry:bee_andesite_alloy', 'mobees:bee_nickel'], ['forestry:bee_antimony', 'mobees:bee_iron'], ['forestry:bee_gallium', 'mobees:bee_nickel'], ['forestry:bee_rock_salt', 'mobees:bee_nickel']], mutation: 0.10, shape: 'iron' },
    { id: 'hydrogen', name: 'Hydrogen', genus: 'aerapis', species: 'hydrogenum', body: 0xADAFE4, tier: 3, parents: [['forestry:bee_aquatic', 'mobees:bee_energetic'], ['forestry:bee_oxygen', 'mobees:bee_energetic'], ['forestry:bee_oxygen', 'mobees:bee_lively'], ['forestry:bee_oxygen', 'mobees:bee_excited'], ['forestry:bee_oxygen', 'forestry:bee_glacial'], ['forestry:bee_gallium', 'forestry:bee_aquatic']], mutation: 0.08, shape: 'coal' },
    { id: 'energized', name: 'Energized', genus: 'mineralapis', species: 'energicum', body: 0xD9482B, stripes: 0xF4CF4A, tier: 3, parents: [['mobees:bee_redstone', 'mobees:bee_glowstone'], ['mobees:bee_energetic', 'mobees:bee_glowstone'], ['forestry:bee_oxygen', 'mobees:bee_redstone'], ['forestry:bee_gallium', 'mobees:bee_glowstone'], ['forestry:bee_arsenic', 'mobees:bee_energetic'], ['forestry:bee_sulfur', 'mobees:bee_redstone'], ['forestry:bee_sapphire', 'mobees:bee_glowstone']], mutation: 0.06, glint: true, shape: 'certus' },
    { id: 'voltaic', name: 'Voltaic', genus: 'technapis', species: 'voltaicum', body: 0x3FA9F5, stripes: 0xF4E04D, tier: 3, parents: [['forestry:bee_gregbee', 'mobees:bee_energetic'], ['forestry:bee_gregbee', 'mobees:bee_glowstone'], ['forestry:bee_gregbee', 'mobees:bee_redstone'], ['forestry:bee_energized', 'forestry:bee_gregbee'], ['forestry:bee_gregbee', 'mobees:bee_lively']], mutation: 0.08, glint: true, shape: 'certus', noBit: true },
    { id: 'intelligent', name: 'Intelligent', genus: 'cerebrapis', species: 'intelligens', body: 0xE86AA6, stripes: 0xF7C6DC, tier: 4, parents: [['forestry:bee_voltaic', 'mobees:bee_sage'], ['forestry:bee_voltaic', 'mobees:bee_erudite']], mutation: 0.08, shape: 'certus', noBit: true },
    { id: 'nitrogen', name: 'Nitrogen', genus: 'aerapis', species: 'nitrogenum', body: 0xF0C6CC, tier: 4, parents: [['forestry:bee_oxygen', 'mobees:bee_germinated'], ['forestry:bee_oxygen', 'mobees:bee_spore'], ['forestry:bee_hydrogen', 'mobees:bee_germinated'], ['forestry:bee_hydrogen', 'mobees:bee_fungal'], ['forestry:bee_gallium', 'mobees:bee_spore']], mutation: 0.08, shape: 'coal' },
    { id: 'fluorine', name: 'Fluorine', genus: 'aerapis', species: 'fluoricum', body: 0xCAC12C, stripes: 0xF3EE80, tier: 4, parents: [['mobees:bee_apatite', 'forestry:bee_hydrogen'], ['forestry:bee_rock_salt', 'forestry:bee_hydrogen'], ['forestry:bee_sulfur', 'forestry:bee_hydrogen'], ['forestry:bee_manganese', 'mobees:bee_apatite'], ['forestry:bee_magnesium', 'mobees:bee_apatite'], ['forestry:bee_nitrogen', 'mobees:bee_apatite']], mutation: 0.08, shape: 'coal' },
    { id: 'chromium', name: 'Chromium', genus: 'metallapis', species: 'chromicum', body: 0xD1D1D3, tier: 4, parents: [['mobees:bee_lead', 'mobees:bee_iron'], ['forestry:bee_manganese', 'mobees:bee_cobalt'], ['forestry:bee_magnesium', 'mobees:bee_osmium'], ['forestry:bee_manganese', 'mobees:bee_osmium'], ['forestry:bee_magnesium', 'mobees:bee_cobalt'], ['forestry:bee_ruby', 'mobees:bee_iron']], mutation: 0.10, shape: 'iron' },
    { id: 'cadmium', name: 'Cadmium', genus: 'metallapis', species: 'cadmicum', body: 0xD8C25A, tier: 4, parents: [['mobees:bee_zinc', 'mobees:bee_lead'], ['forestry:bee_antimony', 'mobees:bee_zinc'], ['forestry:bee_manganese', 'mobees:bee_zinc'], ['forestry:bee_gallium', 'mobees:bee_lead'], ['forestry:bee_magnesium', 'mobees:bee_zinc'], ['forestry:bee_rock_salt', 'mobees:bee_zinc']], mutation: 0.10, shape: 'iron' },
    { id: 'hyper_intelligent', name: 'Hyper Intelligent', genus: 'cerebrapis', species: 'hyperintelligens', body: 0xB04FD6, stripes: 0xFFE066, tier: 5, parents: [['forestry:bee_intelligent', 'mobees:bee_sage'], ['forestry:bee_intelligent', 'forestry:bee_voltaic'], ['forestry:bee_intelligent', 'forestry:bee_nitrogen'], ['forestry:bee_intelligent', 'forestry:bee_chromium'], ['forestry:bee_intelligent', 'forestry:bee_phantasmal']], mutation: 0.05, glint: true, shape: 'certus', noBit: true },
    { id: 'sentient', name: 'Sentient', genus: 'cerebrapis', species: 'sentiens', body: 0x2EE6C8, stripes: 0x0B3D91, outline: 0x06254F, tier: 6, parents: [], mutation: 0, glint: true, shape: 'certus', noBit: true },
    { id: 'quartzite', name: 'Quartzite', genus: 'mineralapis', species: 'quartzitum', body: 0xE3D3C8, stripes: 0xA89488, tier: 1, parents: [['mobees:bee_certus', 'mobees:bee_stone'], ['mobees:bee_crystalline', 'mobees:bee_rocky'], ['mobees:bee_certus', 'mobees:bee_mineral'], ['mobees:bee_stone', 'mobees:bee_crystalline'], ['forestry:bee_fluix', 'mobees:bee_stone'], ['mobees:bee_aluminum', 'mobees:bee_certus']], mutation: 0.12, shape: 'certus' },
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
        if (!b.noBit) {
            allthemods.create('forestry:' + b.id + '_bit')
                .texture('mobees:item/material/' + b.shape + '_bit')
                .color(0, b.body)
        }
    })
})

ForestryEvents.genetics(allthemods => {
    allthemods.defineTaxon('apidae', 'metallapis')
    allthemods.defineTaxon('apidae', 'aerapis')
    allthemods.defineTaxon('apidae', 'gemmapis')
    allthemods.defineTaxon('apidae', 'mineralapis')
    allthemods.defineTaxon('apidae', 'technapis')
    allthemods.defineTaxon('apidae', 'cerebrapis')
    allthemods.defineTaxon('apidae', 'arcanapis')
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
        bee.setComplexity(b.tier + 2)
        if (b.glint) bee.setGlint(true)
        bee.addProduct(Item.of('forestry:bee_comb_' + b.id), b.chance !== undefined ? b.chance : combChance[b.tier])
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
        if (b.parents.length > 0) {
            bee.addMutations(m => {
                b.parents.forEach(p => {
                    m.add(p[0], p[1], p[2] || b.mutation)
                })
            })
        }
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.