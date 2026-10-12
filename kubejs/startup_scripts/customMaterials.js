// priority: 500
// @ts-nocheck
const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
const GasTier = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier')
const WireProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties')
const FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty')
const PolymerProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PolymerProperty')
const GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty')
const FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
const FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder')
const GTValues = Java.loadClass('com.gregtechceu.gtceu.api.GTValues')
const MaterialStack = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack')
const ArrayList = Java.loadClass('java.util.ArrayList');

const ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');


//const singularityMetals = ['iron', 'copper', 'silver', 'gold', 'lead', 'tin', 'platinum', 'nickel', 'zinc', 'brass', 'bronze', 'invar', 'steel']

//need to utilize
const erMaterials = [
    { name: 'blutonium', color: 0x14147b, oItems: ['ingot', 'dust', 'block'] },
    { name: 'cyanite', color: 0x456e83, oItems: ['ingot', 'dust', 'block'] },
    { name: 'magentite', color: 0xed29ed, oItems: ['ingot', 'dust', 'block'] },
    { name: 'ludicrite', color: 0xaa47dd, oItems: ['ingot', 'dust', 'block'] },
    { name: 'ridiculite', color: 0xe5c1ea, oItems: ['ingot', 'dust', 'block'] },
    { name: 'inanite', color: 0xf12664, oItems: ['ingot', 'dust', 'block'] },
    { name: 'insanite', color: 0x38d58d, oItems: ['ingot', 'dust', 'block'] }
];

const naqStages = [
    { name: 'naquadria_stage_2', color: 0x5A189A, icon: 'RADIOACTIVE', polymer: true },
    { name: 'naquadria_stage_3', color: 0x00FFD5, icon: 'RADIOACTIVE', polymer: true },
    { name: 'naquadria_stage_4', color: 0xFFC107, icon: 'RADIOACTIVE', polymer: true },
    { name: 'naquadria_awakened', color: 0xFFC107, icon: 'RADIOACTIVE', polymer: true }
];

//ad astra - unified
const adMats = [
    { name: 'etrium', color: 0x5ABFB5, element: 'etrium' },
    { name: 'desh', color: 0xD97B3F, element: 'desh' },
    { name: 'ostrum', color: 0x8A6E78, element: 'ostrum' },
    { name: 'calorite', color: 0xBF2A3C, element: 'calorite' }
];

const materialsGem = [
    { name: 'demon', simple: true, color: '0x00FFFF', iconSet: 'DIAMOND' },
    { name: 'steadfast', simple: true, color: '0xB0C4DE', iconSet: 'LAPIS' },
    { name: 'corrosive', simple: true, color: '0x90EE90', iconSet: 'EMERALD' },
    { name: 'vengeful', simple: true, color: '0xFFCCCB', iconSet: 'DIAMOND' },
    { name: 'destructive', simple: true, color: '0xFFFFE0', iconSet: 'QUARTZ' },
    { name: 'eternal', simple: true, color: '0xFFFFE0', iconSet: 'SHINY', element: 'eternal' },
    { name: 'source', simple: true, color: '0xD662FF', iconSet: 'EMERALD' },
    { name: 'soul', simple: true, color: '0x3A4F6D', iconSet: 'GLASS' },

    { name: 'restonia', simple: true, element: 'restonia', color: 0xff0000, iconSet: 'RUBY' },
    { name: 'palis', simple: true, element: 'palis', color: 0x1a237e, iconSet: 'LAPIS' },
    { name: 'diamatine', simple: true, element: 'diamatine', color: 0x4fc3f7, iconSet: 'DIAMOND' },
    { name: 'void_crystal', simple: true, element: 'void_crystal', color: 0x212121, iconSet: 'LIGNITE' },
    { name: 'emeradic', simple: true, element: 'emeradic', color: 0x00e676, iconSet: 'EMERALD' },
    { name: 'enori', simple: true, element: 'enori', color: 0xf5f5f5, iconSet: 'QUARTZ' },
    { name: 'black_quartz', simple: true, element: 'black_quartz', color: 0x000000, iconSet: 'QUARTZ' },

    { name: 'empowered_restonia', simple: true, element: 'restonia', color: 0xff4d4d, iconSet: 'RUBY' },
    { name: 'empowered_palis', simple: true, element: 'palis', color: 0x534bae, iconSet: 'LAPIS' },
    { name: 'empowered_diamatine', simple: true, element: 'diamatine', color: 0x8bf6ff, iconSet: 'DIAMOND' },
    { name: 'empowered_void_crystal', simple: true, element: 'void_crystal', color: 0x484848, iconSet: 'LIGNITE' },
    { name: 'empowered_emeradic', simple: true, element: 'emeradic', color: 0x66ffa6, iconSet: 'EMERALD' },
    { name: 'empowered_enori', simple: true, element: 'enori', color: 0xf5f5f5, iconSet: 'QUARTZ' },

    { name: 'fluix', color: 0x8F5CCB, iconSet: 'SHINY', components: '1x redstone, 1x certus_quartz, 1x nether_quartz', voltage: 32, loss: 2, superconductor: false },
    { name: 'atm_star', color: 0xFFC107, iconSet: 'SHINY', voltage: 2097152, loss: 2, superconductor: false },
    { name: 'dark_matter', color: 0x3b173f, iconSet: 'NETHERSTAR', simple: true},
    { name: 'red_matter', color: 0x7a0606, iconSet: 'NETHERSTAR', simple: true}

    
];


const modifyElement = (materialO, materialN, bTemp, volts, gem, polymer, ingot) => {
    let mrp = GTMaterials.get(materialN).getFlags()
    let mmaterialClass = mrp.getClass()
    // @ts-ignore
    let flagsFieldM = mmaterialClass.getDeclaredField("flags")
    flagsFieldM.setAccessible(true)
    let activeFlagsM = flagsFieldM.get(mrp)
    activeFlagsM.remove(GTMaterialFlags.NO_SMELTING)
    activeFlagsM.remove(GTMaterialFlags.FLAMMABLE)
    let material = materialO
    if (bTemp) {
        let bVolts = getCoilVoltage(bTemp);
        let mbp = new BlastProperty
        mbp.setBlastTemperature(bTemp);
        mbp.setDurationOverride(1200);
        mbp.setEUtOverride(bVolts);
        mbp.setGasTier(getGasTier(bVolts));
        mbp.setVacuumDurationOverride(120);
        mbp.setVacuumEUtOverride(bVolts);
        material.setProperty(PropertyKey.BLAST, mbp)
    }

    // @ts-ignore
    if (volts) { material.setProperty(PropertyKey.WIRE, new WireProperties(volts, 1, 0)) }
    if (polymer == true) { material.setProperty(PropertyKey.POLYMER, new PolymerProperty()) }
    if (ingot == true) {
        if (!material.hasProperty(PropertyKey.INGOT)) {
            material.setProperty(PropertyKey.INGOT, new IngotProperty())
        }

    }

    material.setProperty(PropertyKey.FLUID, new FluidProperty(FluidStorageKeys.LIQUID, new FluidBuilder()))

    if (gem == true) {
        if (!material.hasProperty(PropertyKey.INGOT)) {
            material.setProperty(PropertyKey.GEM, new GemProperty())
        }

    }
    if (ingot == true || gem == true || polymer == true) {
        material.addFlags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            // @ts-ignore
            //CMMEMaterialFlags.GENERATE_SINGULARITY
        )
    }


};
const getCoilVoltage = (coil) => {
    switch (coil) {
        case 1800: return 128;
        case 2700: return 512;
        case 3600: return 2048;
        case 4500: return 8192;
        case 5400: return 32768;
        case 7200: return 131072;
        case 9000: return 524288;
        case 10800: return 2097152;
        default: return 8388608;
    }
};
const getVoltage = (v) => {
    if (v <= 8) return GTValues.V[GTValues.ULV];
    if (v <= 32) return GTValues.V[GTValues.LV];
    if (v <= 128) return GTValues.V[GTValues.MV];
    if (v <= 512) return GTValues.V[GTValues.HV];
    if (v <= 2048) return GTValues.V[GTValues.EV];
    if (v <= 8192) return GTValues.V[GTValues.IV];
    if (v <= 32768) return GTValues.V[GTValues.LuV];
    if (v <= 131072) return GTValues.V[GTValues.ZPM];
    if (v <= 524288) return GTValues.V[GTValues.UV];
    if (v <= 2097152) return GTValues.V[GTValues.UHV];
    if (v <= 8388608) return GTValues.V[GTValues.UEV];
    if (v <= 33554432) return GTValues.V[GTValues.UIV];
    if (v <= 134217728) return GTValues.V[GTValues.UXV];
    if (v <= 536870912) return GTValues.V[GTValues.OpV];
    return GTValues.V[GTValues.MAX];
};
const getGasTier = (voltage) => {
    if (voltage <= 512) return GasTier.LOW;       // LV - MV
    if (voltage <= 8192) return GasTier.MID;      // HV - IV
    if (voltage <= 32768) return GasTier.HIGH;    // LuV - ZPM
    if (voltage <= 131072) return GasTier.HIGHER; // UV - UHV
    return GasTier.HIGHEST;                       // UEV+
};

const polymers = [
    { name: "chaos_plastic", color: 0x222222 },
    { name: "organic_polymer", color: 0x647B82 },
    { name: 'fluorozirconic_composite', color: 0x4DD0E1, components: '1x zirconium, 6x fluorine, 2x carbon' },
    { name: 'fifth_element', components: '1x elemental_water, 1x elemental_fire, 1x elemental_air, 1x elemental_earth', color: 0xFF6600 },
    { name: 'polyimide', color: 0xB8631E, iconSet: 'DULL', noDecomp: true },
];


//needs proper unification
const otherElements = [
    //need to make sure each 1 of these is useful by checking usage on its dust[    
    { name: 'radium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 9000, cIngot: true },
    { name: 'gadolinium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cIngot: true },
    { name: 'rhenium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 9000, cIngot: true },
    { name: 'astatine', namespace: 'chemlib', oItems: ['dust'], cBlast: 9000, cIngot: true },
    { name: 'graphite', cBlast: 3600, cVolt: 2048, cIngot: true },
    { name: 'strontium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 4500, cIngot: true },
    { name: 'tellurium', namespace: 'chemlib', oItems: ['dust'], cBlast: 9000, cIngot: true },
    { name: 'californium', cBlast: 18900, cIngot: true },
    { name: 'berkelium', cBlast: 18900, cIngot: true },
    { name: 'polonium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'] },
    { name: 'selenium', namespace: 'chemlib', oItems: ['dust'], cPolymer: true },
    { name: 'francium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 9000, cIngot: true },
    { name: 'germanium', namespace: 'chemlib', oItems: ['dust'], cIngot: true },
    { name: 'zirconium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cIngot: true },
    { name: 'scandium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 7200, cIngot: true },
    { name: 'hafnium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 5400, cIngot: true },
    { name: 'rubidium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 7200, cIngot: true },
    { name: 'thallium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 9000, cIngot: true },
    { name: 'protactinium', namespace: 'chemlib', oItems: ['ingot', 'block', 'nugget', 'dust', 'plate'], cBlast: 9000, cIngot: true }

];


const twilight = ['fiery', 'steeleaf', 'knightmetal'];

const unification = [
    //twilight
    { name: 'fiery', oItems: ['ingot', 'block'], namespace: 'twilightforest' },
    { name: 'steeleaf', oItems: ['ingot', 'block'], namespace: 'twilightforest' },
    { name: 'knightmetal', oItems: ['ingot', 'block'], namespace: 'twilightforest' },
    //thermal
    { name: 'signalum', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'alltheores' },
    { name: 'lumium', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'alltheores' },
    { name: 'enderium', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'alltheores' },

    { name: 'drenched_iron', oItems: ['ingot', 'block', 'nugget'], namespace: 'elementalcraft' },
    { name: 'swift_alloy', oItems: ['ingot', 'block', 'nugget'], namespace: 'elementalcraft' },
    { name: 'fireite', oItems: ['ingot', 'block', 'nugget'], namespace: 'elementalcraft' },

    //{ name: 'allthemodium', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'allthemodium' },
    //{ name: 'vibranium', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'allthemodium' },
    //{ name: 'unobtainium', oItems: ['rod', 'gear', 'plate', 'nugget', block], namespace: 'allthemodium' },

    //enderio
    { name: 'copper_alloy', oItems: ['ingot', 'block', 'nugget'], namespace: 'enderio' },
    { name: 'conductive_alloy', oItems: ['ingot', 'block', 'nugget'], namespace: 'enderio' },
    { name: 'energetic_alloy', oItems: ['ingot', 'block', 'nugget'], namespace: 'enderio' },
    { name: 'vibrant_alloy', oItems: ['ingot', 'block', 'nugget'], namespace: 'enderio' },
    { name: 'pulsating_alloy', oItems: ['ingot', 'block', 'nugget'], namespace: 'enderio' },
    { name: 'soularium', oItems: ['ingot', 'block', 'nugget'], namespace: 'enderio' },
    { name: 'dark_steel', oItems: ['ingot', 'block', 'nugget'], namespace: 'enderio' },
    { name: 'end_steel', oItems: ['ingot', 'block', 'nugget'], namespace: 'enderio' },

    //botania
    { name: 'manasteel', oItems: ['nugget', 'ingot', 'block'], namespace: 'botania' },
    { name: 'elementium', oItems: ['ingot'], namespace: 'botania' },
    { name: 'terrasteel', oItems: ['nugget', 'ingot', 'block'], namespace: 'botania' },
    { name: 'gaia', oItems: ['ingot'], namespace: 'botania' },
    { name: 'alfsteel', oItems: ['nugget', 'ingot', 'block'], namespace: 'mythicbotany' },
    { name: 'iesnium', oItems: ['dust', 'nugget', 'ingot', 'block'], namespace: 'occultism' },

    { name: 'hepatizon', oItems: ['nugget', 'ingot', 'block'], namespace: 'tconstruct' },
    { name: 'manyullyn', oItems: ['nugget', 'ingot', 'block'], namespace: 'tconstruct' },
    { name: 'amethyst_bronze', oItems: ['nugget', 'ingot', 'block'], namespace: 'tconstruct' },

    { name: 'crimson_iron', oItems: ['ingot', 'block', 'nugget', 'dust'], namespace: 'silentgear' },
    { name: 'azure_silver', oItems: ['ingot', 'block', 'nugget', 'dust'], namespace: 'silentgear' },

    { name: 'ferricore', oItems: ['ingot', 'block'], namespace: 'justdirethings' },
    { name: 'blazegold', oItems: ['ingot', 'block'], namespace: 'justdirethings' },
    { name: 'eclipsealloy', oItems: ['ingot', 'block'], namespace: 'justdirethings' },
];

const mekanism = [
    { name: 'refined_obsidian', oItems: ['nugget', 'ingot', 'block'], namespace: 'mekanism' },
    { name: 'refined_glowstone', oItems: ['nugget', 'ingot', 'block'], namespace: 'mekanism' }
];


const gasses = [
    { name: 'hydrogen_selenide', components: '2x hydrogen, 1x selenium', color: 0xDCDCDC, iconSet: 'METALLIC', formula: 'H2Se' },
    { name: 'ozone', components: '3x oxygen', color: 0x3366FF, formula: 'O3', iconSet: 'FLUID' },
    { name: 'carbon_tetroxide', components: '1x carbon, 4x oxygen', color: 0x36454F, iconSet: 'METALLIC', noDecomp: true },
    { name: 'compressed_air', color: 0x80C8F0, temp: 2500, iconSet: 'FLUID' },
    { name: 'terrazine', color: 0x4B0082, iconSet: 'RADIOACTIVE' }
];
const chalks = [
    { name: 'white_chalk', color: 0xF2EEE4, iconSet: 'FLUID' },
    { name: 'yellow_chalk', color: 0xFFD700, iconSet: 'FLUID' },
    { name: 'purple_chalk', color: 0x9D00FF, iconSet: 'FLUID' },
    { name: 'red_chalk', color: 0xFF0000, iconSet: 'FLUID' },
    { name: 'orange_chalk', color: 0xFFA500, iconSet: 'FLUID' },
    { name: 'magenta_chalk', color: 0xFF00FF, iconSet: 'FLUID' },
    { name: 'light_blue_chalk', color: 0xADD8E6, iconSet: 'FLUID' },
    { name: 'lime_chalk', color: 0x00FF00, iconSet: 'FLUID' },
    { name: 'pink_chalk', color: 0xFFC0CB, iconSet: 'FLUID' },
    { name: 'gray_chalk', color: 0x808080, iconSet: 'FLUID' },
    { name: 'light_gray_chalk', color: 0xD3D3D3, iconSet: 'FLUID' },
    { name: 'cyan_chalk', color: 0x00FFFF, iconSet: 'FLUID' },
    { name: 'blue_chalk', color: 0x0000FF, iconSet: 'FLUID' },
    { name: 'brown_chalk', color: 0x8B4513, iconSet: 'FLUID' },
    { name: 'green_chalk', color: 0x008000, iconSet: 'FLUID' },
    { name: 'black_chalk', color: 0x000000, iconSet: 'FLUID' }
];

const fluids = [    
    { name: 'sugar_water', components: '4x sugar, 1x distilled_water', color: 0xE8D9A0, iconSet: 'FLUID' },

    { name: 'cognizant_sanguine_ichor', color: 0x6A0DAD, temp: 300, iconSet: 'FLUID' },
    { name: 'stellar_sanguine_plasma', color: 0xE0FFFF, temp: 300, iconSet: 'FLUID' },
    { name: 'resonant_sanguine_void', color: 0x191970, temp: 300, iconSet: 'FLUID' },
    { name: 'insanium_infused_singularity', color: 0x5e00a8, temp: 300, iconSet: 'DULL' },
    { name: 'aetheric_sanguine_singularity', color: 0xFFD700, temp: 300, iconSet: 'DULL' },
    { name: 'refined_sanguine_plasma', color: 0xFF4500, temp: 5000, iconSet: 'FLUID' },
    { name: 'liquid_draconic_essence', color: 0xFF8C00, temp: 3000, iconSet: 'FLUID' },
    { name: 'gt_cracked_lpg', color: 0xE1E1AF, temp: 600, iconSet: 'FLUID' },
    { name: 'gt_cracked_kerosene', color: 0xFFB300, temp: 800, iconSet: 'FLUID' },
    { name: 'liquid_vengeance', color: 0xB197C2, temp: 200, iconSet: 'FLUID' },
    { name: 'saturated_life_fertilizer', color: 0x4CAF50, temp: 200, iconSet: 'FLUID' },
    { name: 'liquid_fertilizer', color: 0x241105, temp: 200, iconSet: 'FLUID' },

    { name: 'picoline', color: 0x9E9B54, components: '6x carbon, 7x hydrogen, 1x nitrogen', formula: 'C6H7N', iconSet: 'FLUID' },
    { name: 'cyanopyridine', color: 0x4A6B82, components: '6x carbon, 4x hydrogen, 2x nitrogen', formula: 'C6H4N2', iconSet: 'FLUID' },
    { name: 'acetaldehyde', color: 0xC2B280, components: '1x ethylene, 1x oxygen', formula: 'C2H4O', iconSet: 'FLUID' },



    { name: 'primordial_sanguine_plasma', color: 0x2E2E2E, iconSet: 'FLUID' },
    { name: 'primordial_cosmic_soup', color: 0xBF00FF, iconSet: 'FLUID' },
    { name: 'unrefined_white_blood', color: 0xF5F5FF, iconSet: 'FLUID' },
    { name: 'ethereal_white_blood', color: 0xF2EEFF, iconSet: 'FLUID' },
    { name: 'unrefined_red_blood', color: 0x8B0000, iconSet: 'FLUID' },
    { name: 'liquid_pain_and_suffering', color: 0x4B0082, iconSet: 'FLUID' },
    { name: 'energized_glowing_catalyst', color: 0xFFFACD, iconSet: 'FLUID' },
    { name: 'destabilized_red_catalyst', color: 0xFF0000, iconSet: 'FLUID' },
    { name: 'essence_of_creation', color: 0x7FFFD4, iconSet: 'FLUID' },
    { name: 'essence_of_destruction', color: 0x2F4F4F, iconSet: 'FLUID' },
    { name: 'stable_life_essence', color: 0xFF69B4, iconSet: 'FLUID' },
    { name: 'saturated_tau', color: 0xFF8C00, iconSet: 'FLUID' },
    { name: 'liquid_dragon_breath', color: 0xe577e3, iconSet: 'FLUID' },
    { name: 'liquid_chaos', color: 0x111111, iconSet: 'FLUID' },
    { name: 'radioactive_acetate_slurry', color: 0x99FF33, iconSet: 'RADIOACTIVE' },
    { name: 'mixed_radioactive_concentrate', color: 0xCCFF66, iconSet: 'FLUID' },
    { name: 'diluted_acetic_acid', components: '1x acetic_acid, 1x water', formula: '(C2H4O2)(H2O)', color: 0xDDDDDD, iconSet: 'FLUID', noDecomp: true },
    { name: 'radium_acetate', color: 0xFFCC00, components: '2x acetic_acid, 1x radium', formula: 'Ra(C2H3O2)2', iconSet: 'FLUID', noDecomp: true },
    { name: 'astatine_acetate', color: 0x800080, components: '2x acetic_acid, 1x astatine', formula: 'At(C2H3O2)2', iconSet: 'FLUID', noDecomp: true },
    { name: 'francium_acetate', color: 0xFFF2DC, components: '2x acetic_acid, 1x francium', formula: 'Fr(C2H3O2)2', iconSet: 'FLUID', noDecomp: true },
    { name: 'radioactive_bioresidue', color: 0x4B3621, components: '1x thorium, 1x phosphorus, 6x oxygen', iconSet: 'RADIOACTIVE', noDecomp: true },
    { name: 'germanium_tetrachloride', color: 0x73877B, components: '1x germanium, 4x chlorine', noDecomp: true, iconSet: 'FLUID' },
    { name: 'tellurous_acid', components: '2x hydrogen, 1x tellurium, 3x oxygen', color: 0x9FB6CD, formula: 'H2TeO3', noDecomp: true, iconSet: 'FLUID' },
    { name: 'sodium_tellurite_solution', components: '2x sodium, 1x tellurium, 3x oxygen, 1x water', color: 0xEEF2F5, formula: '(Na2TeO3)(H2O)', iconSet: 'FLUID' },

    { name: 'peroxodisulfuric_acid', components: '2x sulfur, 6x oxygen, 2x hydrogen_peroxide', color: 0xCCDDFF, formula: 'H2S2O8', iconSet: 'FLUID' },

    { name: 'sodium_germanate_solution', components: '2x sodium, 1x germanium, 3x oxygen, 1x water', color: 0xE8DCC8, formula: '(Na2GeO3)(H2O)', iconSet: 'FLUID' },
    { name: 'perrhenic_acid', components: '1x hydrogen, 1x rhenium, 4x oxygen', formula: 'HReO4', color: 0xDCD0FF, iconSet: 'FLUID', noDecomp: true },
    { name: 'unrefined_xylene', color: 0xDEC77E, iconSet: 'FLUID' },
    { name: 'rhenate_blend_fuel', color: 0xCC6633, iconSet: 'FLUID' },
    { name: 'xylene', color: 0xEBD078, iconSet: 'FLUID' },
    { name: 'sanguine_concentrate', color: 0x8A0303, iconSet: 'FLUID' },
    { name: 'conduit_binder', color: 0x9D9A8D, iconSet: 'FLUID' },
    { name: 'hexafluorozirconic_acid', components: '2x hydrogen, 1x zirconium, 6x fluorine', color: 0xCCFFFF, iconSet: 'FLUID', noDecomp: true },
    { name: 'refined_seed_oil', color: 0xE6E600, iconSet: 'FLUID', burnTime: 5 },
    { name: 'crystallized_oil', color: 0xFFFFF0, iconSet: 'FLUID', burnTime: 20 },
    { name: 'empowered_oil', color: 0xFFA500, iconSet: 'FLUID', burnTime: 40 },

    { name: 'poison_agent', color: 0x4A154B, iconSet: 'FLUID' },
    { name: 'paralytic_agent', color: 0x2D0C35, iconSet: 'FLUID', noDecomp: true },
    { name: 'mind_control_serum', components: '1x terrazine, 1x mind_numbing_agent', color: 0x00FFFF, iconSet: 'FLUID' },
    { name: 'concentrated_dark_matter', components: '1x caesium, 1x water', color: 0x1A0033, iconSet: 'FLUID', noDecomp: true },

    { name: 'activated_carbon_slurry', components: '1x activated_carbon, 1x zinc, 1x hydrochloric_acid', color: 0x1A1A1A, iconSet: 'DULL' },
    { name: 'water_stage_1', components: '1x water', color: 0x33A1DE, iconSet: 'FLUID' },
    { name: 'water_stage_2', components: '1x water', color: 0x3366FF, iconSet: 'FLUID' },
    { name: 'water_stage_3', components: '1x water', color: 0x4682B4, iconSet: 'FLUID' },
    { name: 'water_stage_4', components: '1x water', color: 0x5F9EA0, iconSet: 'FLUID' },
    { name: 'water_stage_5', components: '1x water', color: 0xAFEEEE, iconSet: 'FLUID' },
    { name: 'water_stage_6', components: '1x water', color: 0x87CEEB, iconSet: 'FLUID' },
    { name: 'polyaluminium_chloride', components: '2x aluminium_hydroxide, 3x hydrochloric_acid', color: 0xCCCCCC, iconSet: 'DULL', formula: 'Al2(OH)3Cl3', noDecomp: true },
    { name: 'spent_flocculant_slurry', components: '1x polyaluminium_chloride', color: 0x555555, iconSet: 'DULL', noDecomp: true },
    { name: 'super_coolant', color: 0x82C4E5, iconSet: 'FLUID' },
    { name: 'purest_water', components: '1x water', color: 0x00BFFF, iconSet: 'FLUID' },
    { name: 'inert_gas_mixture', color: 0x8899A6, iconSet: 'FLUID' },
    { name: 'ionized_oxygen', color: 0x3399FF, iconSet: 'FLUID' },
    { name: 'niobium_pentachloride', components: '1x niobium, 5x chlorine', color: 0xFFF0C1, formula: 'NbCl5', iconSet: 'FLUID' },
    { name: 'mixed_rare_earth_sulfate', components: '1x yttrium, 1x cerium, 1x uranium, 1x titanium, 1x iron, 5x sulfur, 20x oxygen', color: 0x8B7355, iconSet: 'FLUID', noDecomp: true },
    { name: 'light_rare_earth_sulfate', components: '1x yttrium, 1x cerium, 1x uranium, 1x titanium, 3x sodium, 5x sulfur, 20x oxygen', color: 0xA89680, iconSet: 'FLUID', noDecomp: true },
    { name: 'heavy_rare_earth_sulfate', components: '1x yttrium, 1x cerium, 1x uranium, 7x sodium, 5x sulfur, 20x oxygen', color: 0x9C8A6E, iconSet: 'FLUID', noDecomp: true },
    { name: 'final_rare_earth_sulfate', components: '1x yttrium, 1x cerium, 13x sodium, 5x sulfur, 23x oxygen, 6x hydrogen', color: 0x8C7B6A, iconSet: 'FLUID', noDecomp: true },
    { name: 'rare_earth_leach_residue', components: '1x lanthanum, 1x magnesium, 3x oxygen, 3x hydrogen', color: 0xB8A8C8, iconSet: 'FLUID', noDecomp: true },
    { name: 'alfheim_portal_fluid', color: 0x66FF33, iconSet: 'FLUID', noDecomp: true },
    { name: 'tetrachloroethylene', components: '4x chlorine, 2x carbon', formula: 'C2Cl4', color: 0xF0F4F8, iconSet: 'FLUID' },

    { name: 'rocket_fuel_stage_1', color: 0x8A9A5B, iconSet: 'FLUID' },
    { name: 'rocket_fuel_stage_2', color: 0xE8F4F8, iconSet: 'FLUID' },
    { name: 'rocket_fuel_stage_3', color: 0xC4D7D1, iconSet: 'FLUID' },
    { name: 'rocket_fuel_stage_4', color: 0xFFF176, iconSet: 'FLUID' },

    { name: 'ethylene_oxide', components: '1x ethylene, 1x oxygen', formula: 'C2H4O', color: 0xEAF2F8, iconSet: 'FLUID' },
    { name: 'phenylacetaldehyde', components: '1x phenyl, 1x acetaldehyde', formula: 'C8H8O', color: 0xFFF5D6, iconSet: 'FLUID' },
    { name: 'phenylalanine_nitrile', components: '9x carbon, 10x hydrogen, 2x nitrogen', formula: 'C9H10N2', color: 0xD4A373, iconSet: 'FLUID', noDecomp: true },
    { name: 'phenolic_resin', components: '7x carbon, 6x hydrogen, 2x oxygen', formula: 'C7H6O2', color: 0x5C2E16, iconSet: 'FLUID', noDecomp: true },
    { name: 'eucalyptus_oil', color: 0xD4E8A8, iconSet: 'FLUID', noDecomp: true },
    { name: 'cineole', components: '10x carbon, 18x hydrogen, 1x oxygen', formula: 'C10H18O', color: 0xEAF6E4, iconSet: 'FLUID' },
    { name: 'pinene', components: '10x carbon, 16x hydrogen', formula: 'C10H16', color: 0xF2F0D8, iconSet: 'FLUID' },


    { name: 'exo_pinane_dimer', components: '20x carbon, 36x hydrogen', formula: 'C20H36', color: 0xF7EFC8, iconSet: 'FLUID', noDecomp: true },
    { name: 'terpene_jet_fuel', color: 0xE8C547, iconSet: 'FLUID', noDecomp: true },
    { name: 'boron_slurry_fuel', color: 0x5E5A3A, iconSet: 'FLUID', noDecomp: true },
    { name: 'pinene_dimer', components: '20x carbon, 32x hydrogen', formula: 'C20H32', color: 0xD9C27A, iconSet: 'FLUID', noDecomp: true },
    { name: 'hydrogenated_pinene_dimer', components: '20x carbon, 36x hydrogen', formula: 'C20H36', color: 0xF0E6B8, iconSet: 'FLUID', noDecomp: true },
    { name: 'isobornyl_acetate', components: '12x carbon, 20x hydrogen, 2x oxygen', formula: 'C12H20O2', color: 0xEDE8D0, iconSet: 'FLUID', noDecomp: true },
    { name: 'necrotic_acid', components:'4x witherite, 1x nether_star, 4x aqua_regia', color: 0x6B7A3A, iconSet: 'FLUID' },
    
    
    { name: 'chloroprene', components: '1x butadiene, 1x chlorine', color: 0xE0E8C8, iconSet: 'FLUID', noDecomp: true },
    { name: 'adiponitrile', components: '1x adipic_acid, 2x ammonia', color: 0xD9D3E0, iconSet: 'FLUID', noDecomp: true },    
    { name: 'oxydianiline', components: '2x aniline, 1x oxygen', color: 0xD9C7A8, iconSet: 'FLUID', noDecomp: true },
    { name: 'cyclohexanone', components: '1x cyclohexane, 1x oxygen', color: 0xE0D8C0, iconSet: 'FLUID', noDecomp: true },
    { name: 'thermal_coolant', components: '1x water_stage_4, 1x gelid_cryotheum', color: 0x8EE3F0, iconSet: 'FLUID' },
];

const kevlarFluids = [
    // --- Aniline branch ---
    { name: 'aniline', components: '1x nitrobenzene, 3x hydrogen', color: 0xC9A876, iconSet: 'FLUID', formula: 'C6H5NH2' },
    //{ name: 'acetic_anhydride', color: 0xD8C8A0, iconSet: 'FLUID', formula: '(CH3CO)2O' },
    { name: 'nitroaniline', components: '1x aniline, 1x nitration_mixture', color: 0xE0B840, iconSet: 'FLUID', formula: 'C6H6N2O2' },
    //{ name: 'nitration_mixture', components: '1x sulfuric_acid, 1x nitric_acid', color: 0xF0E060, iconSet: 'FLUID', noDecomp: true },
    { name: 'para_phenylenediamine', dust: true, components: '1x nitroaniline, 3x hydrogen', color: 0xB89060, iconSet: 'FLUID', formula: 'C6H8N2' },

    // --- Terephthaloyl Chloride branch ---
    { name: 'p_xylene', color: 0xEBD078, iconSet: 'FLUID', formula: 'C8H10' }, // isolated from your existing xylene via isomerization step
    { name: 'cobalt_naphthenate', color: 0x6E5A30, iconSet: 'FLUID', noDecomp: true }, // catalyst
    { name: 'terephthalic_acid', components: '1x p_xylene, 3x oxygen', color: 0xF0F0E8, iconSet: 'FLUID', formula: 'C8H6O4' },
    { name: 'dimethyl_terephthalate', components: '1x terephthalic_acid, 2x methanol', color: 0xE8E0C8, iconSet: 'FLUID', formula: 'C10H10O4' },
    { name: 'sulfur_dichloride', components: '1x sulfur, 2x chlorine', color: 0xC8A840, iconSet: 'FLUID', formula: 'SCl2' },
    { name: 'thionyl_chloride', components: '1x sulfur_trioxide, 1x sulfur_dichloride', color: 0xE8D8A0, iconSet: 'FLUID', formula: 'SOCl2', noDecomp: true },
    { name: 'terephthaloyl_chloride', dust: true, components: '1x dimethyl_terephthalate, 1x thionyl_chloride', color: 0xD8D0C0, iconSet: 'FLUID', formula: 'C8H4Cl2O2', noDecomp: true },

    // --- NMP solvent branch ---
    { name: 'methylamine', components: '1x ammonia', color: 0xE0E0D0, iconSet: 'FLUID', formula: 'CH5N' },
    { name: 'gamma_butyrolactone', color: 0xEEE8D0, iconSet: 'FLUID', formula: 'C4H6O2' },
    { name: 'n_methylpyrrolidone', components: '1x methylamine, 1x gamma_butyrolactone', color: 0xF5EED8, iconSet: 'FLUID', formula: 'C5H9NO' },
    { name: 'tetrahydrofuran', components: '1x gamma_butyrolactone, 1x water', formula: 'C4H8O', iconSet: 'FLUID', color: 0xE8F4F8, noDecomp: true },

    // --- Final polymer ---
    { name: 'liquid_crystal_kevlar', components: '1x para_phenylenediamine, 1x terephthaloyl_chloride', color: 0xC8A030, iconSet: 'FLUID', noDecomp: true },

    // --- Polyurethane Resin branch ---
    { name: 'diaminodiphenylmethane', components: '1x aniline, 1x formaldehyde', color: 0xC8B090, iconSet: 'FLUID', noDecomp: true }, // MDA
    { name: 'phosgene', components: '1x carbon_monoxide, 1x chlorine', color: 0xC0C8C0, iconSet: 'FLUID', formula: 'COCl2', noDecomp: true },
    { name: 'diphenylmethane_diisocyanate', dust: true, components: '1x diaminodiphenylmethane, 1x phosgene', color: 0xD0C8B8, iconSet: 'FLUID', noDecomp: true }, // MDI    
    { name: 'ethylene_glycol', components: '1x ethylene, 2x oxygen, 2x hydrogen', color: 0xEEE0C0, iconSet: 'FLUID', formula: 'C2H6O2' },
    { name: 'pentaerythritol', dust: true, components: '4x formaldehyde', color: 0xF8F8F0, iconSet: 'DULL', formula: 'C5H12O4' },
    { name: 'kevlar_catalyst', dust: true, color: 0x707888, iconSet: 'DULL', noDecomp: true }, // abstracted catalyst, flavor material
    { name: 'polyurethane_resin', components: '1x diphenylmethane_diisocyanate, 1x ethylene_glycol', color: 0xB09850, iconSet: 'FLUID', noDecomp: true },
    { name: 'maleic_anhydride', components: '1x benzene, 3x oxygen', color: 0xE8D040, iconSet: 'FLUID', formula: 'C4H2O3', noDecomp: true },
    { name: 'butanol', color: 0xEBDCA0, iconSet: 'FLUID', formula: 'C4H9OH' },
];


const dusts = [   
    { name: 'magebloom', dust: true, color: 0xc14bfc, iconSet: 'DULL' },
    { name: 'zirconium_lattice', components: '4x zirconium, 1x niobium, 1x iridium', color: 0x9FAFB5, iconSet: 'METALLIC' },
    { name: 'plascrete', color: 0xCED4D5, iconSet: 'DULL' },
    { name: 'lanthanum_fluoride', components: '1x lanthanum, 3x fluorine', color: 0xE8E8E8, formula: 'LaF3', iconSet: 'DULL', noDecomp: true },
    { name: 'lanthanum_hydroxide', components: '1x lanthanum, 3x oxygen, 3x hydrogen', color: 0xE8E0F0, formula: 'La(OH)3', iconSet: 'DULL', noDecomp: true },
    { name: 'uranium_trioxide', components: '1x uranium, 3x oxygen', color: 0xB8860B, formula: 'UO3', iconSet: 'RADIOACTIVE', noDecomp: true },
    { name: 'titanium_hydroxide', components: '1x titanium, 4x oxygen, 4x hydrogen', color: 0xF0F0F0, formula: 'Ti(OH)4', iconSet: 'DULL', noDecomp: true },
    { name: 'titanium_dioxide', components: '1x titanium, 2x oxygen', color: 0xCCD6DA, iconSet: 'DULL' },
    { name: 'titanium_carbonitride', components: '1x titanium_dioxide, 3x carbon, 1x nitrogen', color: 0x8A7F5C, iconSet: 'METALLIC' },
    { name: 'cermet_blend', components: '4x titanium_carbonitride, 2x nickel, 1x molybdenum', color: 0x9C9690, iconSet: 'METALLIC' },    
    { name: 'phantom_membrane', color: 0xC1B79F, iconSet: 'DULL' },
    { name: 'cerium_chloride', components: '1x cerium, 2x chlorine', color: 0xE0DED0, iconSet: 'METALLIC' },
    { name: 'carbonate', components: '1x carbon, 3x oxygen', color: 0xF4F4F4, iconSet: 'DULL' },

    { name: 'strontium_sulfide', components: '1x strontium, 1x sulfur', color: 0xD1D7DC, iconSet: 'METALLIC', noDecomp: true },
    { name: 'strontium_chloride', components: '1x strontium, 2x chlorine', color: 0xD1D7DC, iconSet: 'METALLIC' },
    { name: 'strontium_carbonate', components: '1x strontium, 1x carbon, 3x oxygen', color: 0xE2E5DC, iconSet: 'DULL', noDecomp: true },
    { name: 'sodium_tellurite', components: '2x sodium, 1x tellurium, 3x oxygen', color: 0xF0F8FF, formula: 'Na2TeO3', noDecomp: true, iconSet: 'DULL' },
    { name: 'tellurium_dioxide', components: '1x tellurium, 2x oxygen', color: 0xDEDFE1, formula: 'TeO2', noDecomp: true, iconSet: 'DULL' },
    { name: 'sodium_sulfate', components: '2x sodium, 1x sulfur, 4x oxygen', color: 0xF5F5F5, formula: 'Na2SO4', iconSet: 'DULL' },
    { name: 'germanium_dioxide', components: '1x germanium, 2x oxygen', color: 0xEEF2F7, iconSet: 'DULL', noDecomp: true },
    { name: 'germanium_sulfate', components: '1x germanium, 2x sulfur,  8x oxygen', color: 0xE8ECEF, iconSet: 'DULL', noDecomp: true },
    { name: 'sodium_perrhenate', components: '1x sodium, 1x rhenium, 4x oxygen', color: 0xE6E6FA, iconSet: 'DULL', noDecomp: true },
    { name: 'rhenium_heptasulfide', components: '2x rhenium, 7x sulfur', color: 0x2E2B2A, iconSet: 'DULL', noDecomp: true },
    { name: 'wollastonite', components: '1x calcium, 1x silicon, 3x oxygen', color: 0xF0F8FF, iconSet: 'DULL' },
    { name: 'calcium_zirconate', components: '1x calcium, 1x zirconium, 3x oxygen', color: 0xE6E6FA, iconSet: 'DULL', noDecomp: true },
    { name: 'potassium_fluoride', components: '1x potassium, 1x fluorine', color: 0xFFAAAA, iconSet: 'DULL' },
    { name: 'calcium_fluoride', components: '1x calcium, 2x fluorine', color: 0xFFFAFA, iconSet: 'DULL', fluid: true },
    { name: 'potassium_hexafluorozirconate', components: '2x potassium, 1x zirconium, 6x fluorine', color: 0x99CCFF, iconSet: 'METALLIC', noDecomp: true },
    { name: 'potassium_calcium_silicate', components: '1x potassium, 1x calcium, 1x silicon, 1x fluorine, 3x oxygen', color: 0xD3D3D3, iconSet: 'DULL', noDecomp: true },
    { name: 'calcium_sulfide', components: '1x calcium, 1x sulfur', color: 0xFFFFE0, iconSet: 'DULL' },
    { name: 'potassium_thorium_hexafluoride', components: '2x potassium, 1x thorium, 6x fluorine', color: 0xE6E6FA, iconSet: 'DULL', formula: 'K2ThF6' },
    { name: 'calcium_nitrate', components: '1x calcium, 2x nitrogen, 6x oxygen', color: 0xD3D3D3, iconSet: 'DULL', formula: 'Ca(NO3)2' },
    { name: 'berkelium_osmium_phosphate', components: '1x berkelium, 1x osmium, 1x phosphorus, 4x oxygen', color: 0x4B0082, iconSet: 'METALLIC', formula: 'BkOsPO4' },
    { name: 'dicalcium_trisilicate', components: '2x calcium, 3x silicon, 8x oxygen', color: 0xE0E0E0, iconSet: 'DULL', formula: 'Ca2Si3O8' },
    { name: 'calcium_sulfate', components: '1x calcium, 1x sulfur, 4x oxygen', color: 0xF5F5DC, iconSet: 'DULL', formula: 'CaSO4', noDecomp: true },
    { name: 'silver_sulfate', components: '2x silver, 1x sulfur, 4x oxygen', color: 0xDCDCDC, iconSet: 'METALLIC', formula: 'Ag2SO4' },
    { name: 'sanguine_terraria', components: '2x terrasteel, 1x elementium, 1x manasteel, 1x gaia', byproducts: ['elementium', 'manasteel'], iconSet: 'METALLIC', color: 0xFF8888, noDecomp: true },

    { name: 'soul_essence', color: 0x1A75FF, iconSet: 'SHINY' },
    { name: 'mind_numbing_agent', color: 0x00FFCC, iconSet: 'DULL' },
    { name: 'aluminium_hydroxide', color: 0xEEEEEE, iconSet: 'DULL', components: '1x aluminium, 3x oxygen, 3x hydrogen', formula: 'Al(OH)3' },
    { name: 'picolinic_acid', color: 0x7E57C2, components: '6x carbon, 5x hydrogen, 1x nitrogen, 2x oxygen', formula: 'C6H5NO2', iconSet: 'DULL' },

    { name: 'copper_ii_sulfate', components: '1x copper, 1x sulfur, 4x oxygen', color: 0x0F52BA, formula: 'CuSO4', iconSet: 'METALLIC', fluid: true },
    { name: 'indium_iii_oxide', components: '2x indium, 3x oxygen', color: 0xFFF3B0, formula: 'In2O3', iconSet: 'DULL', noDecomp: true, fluid: true },
    { name: 'indium_hydroxide', components: '1x indium, 3x oxygen, 3x hydrogen', color: 0xF4F2E2, formula: 'In(OH)3', iconSet: 'DULL', noDecomp: true },
    { name: 'zinc_stannate', components: '2x zinc, 1x tin, 4x oxygen', color: 0xF0F0F0, formula: 'Zn2SnO4', iconSet: 'DULL', noDecomp: true },
    { name: 'hafnium_silicide', components: '1x hafnium, 1x silicon', color: 0xB0B0B0, formula: 'HfSi', iconSet: 'METALLIC', noDecomp: true },
    { name: 'rubidium_aluminium_sulfate', components: '1x rubidium, 1x aluminium, 2x sulfur, 8x oxygen', color: 0xEAF0F6, formula: 'RbAl(SO4)2', iconSet: 'DULL', noDecomp: true },
    { name: 'rubidium_carbonate', components: '2x rubidium, 1x carbon, 3x oxygen', color: 0xF5F5F5, formula: 'Rb2CO3', iconSet: 'DULL', noDecomp: true, fluid: true },
    { name: 'arsenic_acid', components: '1x arsenic, 3x hydrogen, 4x oxygen', color: 0xF8F8F8, formula: 'AsH3O4', iconSet: 'DULL', noDecomp: true, fluid: true },
    { name: 'thallium_iodide', components: '1x thallium, 1x iodine', color: 0xFFF200, formula: 'TlI', iconSet: 'METALLIC', noDecomp: true },
    { name: 'sodium_iodide', components: '1x sodium, 1x iodine', color: 0xF8F0D4, formula: 'NaI', iconSet: 'DULL' },
    { name: 'thallium_oxide', components: '2x thallium, 1x oxygen', color: 0x3B2F2F, formula: 'Tl2O', iconSet: 'DULL', noDecomp: true },
    { name: 'thallium_sulfide', components: '2x thallium, 1x sulfur', formula: 'Tl2S', color: 0x2C2C2C, iconSet: 'METALLIC', noDecomp: true },
    { name: 'thallium_sulfate', components: '2x thallium, 1x sulfur, 4x oxygen', formula: 'Tl2SO4', color: 0xEAF2E6, iconSet: 'DULL', noDecomp: true },
    { name: 'thallium_carbonate', components: '2x thallium, 1x carbon, 3x oxygen', formula: 'Tl2CO3', color: 0xF2EFE4, iconSet: 'DULL', noDecomp: true },
    { name: 'lead_chloride', components: '1x lead, 2x chlorine', color: 0xEBEBE6, formula: 'PbCl2', iconSet: 'DULL' },
    { name: 'scandium_oxide', components: '2x scandium, 3x oxygen', color: 0xEEF0F4, formula: 'Sc2O3', iconSet: 'DULL' },
    { name: 'beryllium_oxide', components: '1x beryllium, 1x oxygen', color: 0xEEF4EE, formula: 'BeO', iconSet: 'DULL', noDecomp: true },
    { name: 'potassium_selenide', components: '2x potassium, 1x selenium', color: 0xE8E8E8, formula: 'K2Se', iconSet: 'DULL' },
    { name: 'stromeyerite', components: '1x silver, 1x copper, 1x sulfur', color: 0x4A4A4A, formula: 'AgCuS', iconSet: 'METALLIC', noDecomp: true },
    { name: 'thallium_monoselenide', components: '1x thallium, 1x selenium', color: 0x5C5C5C, formula: 'TlSe', iconSet: 'METALLIC', noDecomp: true },
    { name: 'caesium_hydroxide', components: '1x caesium, 1x oxygen, 1x hydrogen', color: 0xF0EEFA, formula: 'CsOH', iconSet: 'DULL' },
    { name: 'caesium_potassium_carbonate', components: '1x caesium, 1x potassium, 1x carbon, 3x oxygen', color: 0xF5F5F5, formula: 'CsKCO3', iconSet: 'DULL', noDecomp: true },
    { name: 'iron_hydroxide', components: '1x iron, 3x oxygen, 3x hydrogen', color: 0xB5651D, formula: 'Fe(OH)3', iconSet: 'DULL' },
    { name: 'niobium_pentoxide', components: '2x niobium, 5x oxygen', color: 0xFAFAFA, formula: 'Nb2O5', iconSet: 'DULL', noDecomp: true },
    { name: 'tantalum_dioxide', components: '2x tantalum, 2x oxygen', color: 0xC0C0C0, formula: 'Ta2O2', iconSet: 'METALLIC', noDecomp: true },
    { name: 'manganese_heptoxide', components: '2x manganese, 7x oxygen', color: 0x2F4F2F, formula: 'Mn2O7', iconSet: 'DULL', noDecomp: true },
    { name: 'yttrium_oxide', components: '2x yttrium, 3x oxygen', color: 0xF6F2E8, formula: 'Y2O3', iconSet: 'DULL', noDecomp: true },
    { name: 'lead_oxide', components: '1x lead, 1x oxygen', color: 0xE8DED1, formula: 'PbO', iconSet: 'DULL' },
    { name: 'tantalum_pentachloride', components: '1x tantalum, 5x chlorine', color: 0xF5DEB3, formula: 'TaCl5', iconSet: 'DULL', fluid: true, noDecomp: true },
    { name: 'niobium_tantalum_residue', components: '2x niobium, 2x tantalum, 4x oxygen', color: 0x2B2B2B, formula: 'Nb2Ta2O4', iconSet: 'METALLIC', noDecomp: true },
    { name: 'cerium_oxide', components: '1x cerium, 2x oxygen', color: 0xF5DEB3, formula: 'CeO2', iconSet: 'DULL' },
    { name: 'thorium_oxide', components: '1x thorium, 2x oxygen', color: 0xe8e8e8, formula: 'ThO2', iconSet: 'DULL' },
    { name: 'phenyl', components: '6x carbon, 5x hydrogen', formula: 'C6H5', color: 0x3A3A3A, iconSet: 'DULL' },
    { name: 'phenylalanine', components: '9x carbon, 11x hydrogen, 1x nitrogen, 2x oxygen', formula: 'C9H11NO2', color: 0xF8F9FA, iconSet: 'DULL', noDecomp: true },
    { name: 'cineole_phosphate', components: '10x carbon, 21x hydrogen, 5x oxygen, 1x phosphorus', formula: '(C10H18O)(H3PO4)', color: 0xF8F6EE, iconSet: 'DULL', noDecomp: true },
    { name: 'camphene', components: '10x carbon, 16x hydrogen', formula: 'C10H16', color: 0xF5F5EE, iconSet: 'DULL', noDecomp: true },
    { name: 'aluminium_chloride', components: '1x aluminium, 3x chlorine', formula: 'AlCl3', color: 0xF5F5F0, iconSet: 'DULL' },
    { name: 'isoborneol', components: '10x carbon, 18x hydrogen, 1x oxygen', formula: 'C10H18O', color: 0xF8F8F2, iconSet: 'DULL', noDecomp: true },
    { name: 'camphor', components: '10x carbon, 16x hydrogen, 1x oxygen', formula: 'C10H16O', color: 0xE8F0EA, iconSet: 'GLASS', noDecomp: true },
    { name: 'pgm_bio_ash', color: 0x8A8676, iconSet: 'DULL', noDecomp: true },
    { name: 'rare_earth_bio_ash', color: 0x857C8A, iconSet: 'DULL', noDecomp: true },
    { name: 'radium_bio_ash', color: 0x7D8A6E, iconSet: 'DULL', noDecomp: true },
    { name: 'indium_bio_ash', color: 0x6E6C86, iconSet: 'DULL', noDecomp: true },
    { name: 'amygdalin', components: '20x carbon, 27x hydrogen, 1x nitrogen, 11x oxygen', formula: 'C20H27NO11', color: 0xEFE4CC, iconSet: 'DULL', noDecomp: true },
    { name: 'iodine_bio_ash', color: 0x6F5F7E, iconSet: 'DULL', noDecomp: true },
    { name: 'strontium_bio_ash', color: 0x8E6F6A, iconSet: 'DULL', noDecomp: true },
    { name: 'rhenium_bio_ash', color: 0x7E8288, iconSet: 'DULL', noDecomp: true },
    { name: 'tantalum_bio_ash', color: 0x6E7682, iconSet: 'DULL', noDecomp: true },
    { name: 'caesium_bio_ash', color: 0x8E8C9E, iconSet: 'DULL', noDecomp: true },
    { name: 'antimony_bio_ash', color: 0x5A5856, iconSet: 'DULL', noDecomp: true },
    { name: 'selenium_bio_ash', color: 0x8A5F52, iconSet: 'DULL', noDecomp: true },
    { name: 'tellurium_bio_ash', color: 0x7F7A62, iconSet: 'DULL', noDecomp: true },
    { name: 'lutetium_bio_ash', color: 0x7D7F8C, iconSet: 'DULL', noDecomp: true },
    { name: 'hafnium_bio_ash', color: 0x86787A, iconSet: 'DULL', noDecomp: true },
    { name: 'samarium_bio_ash', color: 0x8C7C5E, iconSet: 'DULL', noDecomp: true },
    { name: 'scandium_bio_ash', color: 0x7C8590, iconSet: 'DULL', noDecomp: true },
    { name: 'boron_bio_ash', color: 0x8B8475, iconSet: 'DULL', noDecomp: true },
    { name: 'uranium_bio_ash', color: 0x7E8A55, iconSet: 'DULL', noDecomp: true },
    { name: 'manganese_bio_ash', color: 0x6E5E66, iconSet: 'DULL', noDecomp: true },
    { name: 'magnesium_bio_ash', color: 0x7F8A78, iconSet: 'DULL', noDecomp: true },
    { name: 'lithium_bio_ash', color: 0x8E7276, iconSet: 'DULL', noDecomp: true },
    { name: 'nickel_bio_ash', color: 0x6F8070, iconSet: 'DULL', noDecomp: true },
    { name: 'zinc_bio_ash', color: 0x7C8086, iconSet: 'DULL', noDecomp: true },
    { name: 'tin_bio_ash', color: 0x828079, iconSet: 'DULL', noDecomp: true },
    { name: 'cobalt_bio_ash', color: 0x5E6A82, iconSet: 'DULL', noDecomp: true },
    { name: 'copper_bio_ash', color: 0x8A6E5A, iconSet: 'DULL', noDecomp: true },
    { name: 'lead_bio_ash', color: 0x67667A, iconSet: 'DULL', noDecomp: true },
    { name: 'chromium_bio_ash', color: 0x7A5C5C, iconSet: 'DULL', noDecomp: true },
    { name: 'silver_bio_ash', color: 0x8C8E92, iconSet: 'DULL', noDecomp: true },
    { name: 'iron_bio_ash', color: 0x7A5E50, iconSet: 'DULL', noDecomp: true },
    { name: 'titanium_bio_ash', color: 0x7E7A86, iconSet: 'DULL', noDecomp: true },
    { name: 'witherite', components: '1x barium, 1x carbon, 3x oxygen, 3x netherite', color: 0xD8D4B8, iconSet: 'ROUGH' },
    { name: 'bismuth_oxide', components: '2x bismuth, 3x oxygen', color: 0xE8D27A, iconSet: 'DULL' },
    { name: 'germanium_oxide', components: '1x germanium, 2x oxygen', color: 0xE3E6E6, iconSet: 'DULL' },    
    { name: 'bismuth_germanate', components: '2x bismuth_oxide, 3x germanium_oxide', color: 0xD9D9A8, iconSet: 'SHINY' },
        
    { name: 'copper_oxide', components: '1x copper, 1x oxygen', color: 0x3B2F2F, iconSet: 'DULL' },    
    
    { name: 'pyromellitic_dianhydride', components: '10x carbon, 2x hydrogen, 6x oxygen', color: 0xE8DFC0, iconSet: 'DULL' },    
    
    
    { name: 'adipic_acid', color: 0xDED1A0, iconSet: 'DULL', noDecomp: true },
    { name: 'hexamethylenediamine', color: 0xDDE8D0, iconSet: 'DULL', noDecomp: true },
    { name: 'neoprene', color: 0xA67C52, iconSet: 'DULL', noDecomp: true },
    { name: 'nylon', components: '1x adipic_acid, 1x hexamethylenediamine', color: 0xE8DFC8, iconSet: 'DULL', noDecomp: true }
    
    

];

const modalloys = [
    // --- Magic Gating Materials ---
    { name: 'hellforged', ore: true, element: 'hellforged', color: 0xC1D5EC, iconSet: 'METALLIC', voltage: 512, loss: 2 },
    { name: 'iesnium', ore: true, element: 'iesnium', color: 0x9FD1FF, iconSet: 'METALLIC', voltage: 512, loss: 1 },
    
    { name: 'allthemodium', noSmelting: true, ore: true, element: 'allthemodium', color: 0xFAD64A, iconSet: 'METALLIC', voltage: 8192, loss: 1, cBlast: { temp: 5400, duration: 1200, volts: 8192 } },
    { name: 'vibranium', noSmelting: true, ore: true, element: 'vibranium', color: 0x6DFF6D, iconSet: 'METALLIC', voltage: 32768, loss: 1, cBlast: { temp: 5400, duration: 1200, volts: 32768 } },
    { name: 'unobtainium', noSmelting: true, ore: true, element: 'unobtainium', color: 0xA336FF, iconSet: 'METALLIC', voltage: 131072, loss: 1, cBlast: { temp: 5400, duration: 1200, volts: 131072 } },
    { name: 'bismuth_strontium_calcium_copper_oxide', voltage: 32768, superconductor: true, noSmelting: true, color: 0x3A3A42, iconSet: 'METALLIC', cBlast: { temp: 5400, duration: 1200, volts: 8192 } },

    // --- EnderIO Alloys ---
    { name: 'copper_alloy', components: '1x copper, 1x silicon', color: 0x935B3B, iconSet: 'METALLIC', voltage: 32, loss: 2, cBlast: { temp: 1700, duration: 400, volts: 128 } },
    { name: 'conductive_alloy', components: '1x iron, 1x redstone', color: 0xF7B066, iconSet: 'METALLIC', voltage: 128, loss: 1, cBlast: { temp: 1700, duration: 400, volts: 128 } },
    { name: 'energetic_alloy', components: '1x gold, 1x redstone, 1x glowstone', color: 0xFFB933, iconSet: 'METALLIC', voltage: 512, loss: 2, cBlast: { temp: 1700, duration: 400, volts: 128 } },
    { name: 'vibrant_alloy', components: '1x energetic_alloy, 1x ender_pearl', color: 0xB6F132, iconSet: 'METALLIC', voltage: 2048, loss: 1, cBlast: { temp: 2700, duration: 400, volts: 512 } },
    { name: 'pulsating_alloy', components: '1x iron, 1x ender_pearl', color: 0x66FF82, iconSet: 'METALLIC', voltage: 2048, loss: 2, cBlast: { temp: 1700, duration: 400, volts: 512 } },
    { name: 'soularium', components: '1x gold, 1x soul_sand', color: 0x56402C, iconSet: 'METALLIC', voltage: 128, loss: 0, cBlast: { temp: 2700, duration: 400, volts: 512 } },
    { name: 'dark_steel', components: '1x steel, 1x carbon, 1x obsidian', color: 0x3D3D3D, iconSet: 'METALLIC', voltage: 512, loss: 2, cBlast: { temp: 2700, duration: 400, volts: 512 } },
    { name: 'end_steel', components: '1x dark_steel, 1x endstone, 1x obsidian', color: 0xE6F1A8, iconSet: 'METALLIC', voltage: 2048, loss: 0, cBlast: { temp: 3600, duration: 400, volts: 2048 } },

    //{ name: 'bedrockium', color: 0x101010, iconSet: 'METALLIC', cBlast: { temp: 7200, duration: 1200, volts: 524288 } },
    // --- Botania Metals ---
    { name: 'manasteel', element: 'manasteel', color: 0x47CCFF, cDust: true, iconSet: 'METALLIC', voltage: 128, loss: 1 },
    { name: 'elementium', element: 'elementium', color: 0xF687FF, cDust: true, iconSet: 'METALLIC', voltage: 512, loss: 2 },
    { name: 'terrasteel', element: 'terrasteel', color: 0x34FF23, cDust: true, iconSet: 'METALLIC', voltage: 2048, loss: 2 },
    { name: 'gaia', element: 'gaia', color: 0xF7A8D8, cDust: true, iconSet: 'METALLIC', voltage: 131072, loss: 2 },
    { name: 'alfsteel', element: 'alfsteel', color: 0xFD9D32, cDust: true, iconSet: 'METALLIC', voltage: 32768, superconductor: true },

    { name: 'tenebrium', element: 'tenebrium', color: 0x101010, iconSet: 'METALLIC', voltage: 8388608, superconductor: true },

    // --- Industrial Foregoing & Tech Frames ---
    { name: 'pink_slime', element: 'pink_slime', components: '2x iron, 2x gold', color: 0xE66EA9, iconSet: 'SHINY', voltage: 512, loss: 2 },
    { name: 'plastic', color: 0xA9A9A9, iconSet: 'DULL', voltage: 0, loss: 0 },
    { name: 'deorum', element: 'deorum', components: '4x carbon, 1x gold', color: 0xFFD700, iconSet: 'METALLIC', voltage: 128, loss: 1 },
    { name: 'ferrognetic', components: '1x garmonbozia, 1x dark_steel, 1x pink_slime, 1x alfsteel, 1x hellforged, 1x iesnium', pipe: true, color: 0xD1D1D1, iconSet: 'METALLIC', voltage: 131072, loss: 1, cBlast: { temp: 5400, duration: 1200, volts: 8192 } },

    // --- Mekanism Processing ---
    { name: 'refined_obsidian', components: '1x obsidian, 1x diamond', color: 0x5C3854, iconSet: 'SHINY', voltage: 2048, loss: 2 },
    { name: 'refined_glowstone', components: '1x glowstone, 1x osmium', color: 0xFFE30B, iconSet: 'SHINY', voltage: 2048, loss: 1 },
    { name: 'alloy_infused', pipe: true, components: '1x iron', color: 0xE61940, iconSet: 'METALLIC', voltage: 32768, loss: 2 },
    { name: 'alloy_reinforced', pipe: true, components: '1x alloy_infused', color: 0x00F5FF, iconSet: 'METALLIC', voltage: 131072, loss: 2 },
    { name: 'alloy_atomic', pipe: true, components: '1x alloy_reinforced', color: 0xBF40FF, iconSet: 'METALLIC', voltage: 524288, loss: 2 },

    // --- Advanced Hybrid Materials (Naquadah/ATM) ---
    { name: 'naquamodium', color: 0xF8FF40, iconSet: 'METALLIC', voltage: 32768, superconductor: true, cDust: true, components: '5x naquadah, 3x allthemodium', cBlast: { temp: 2700, duration: 1200, volts: 512 } },
    { name: 'naquabranium', color: 0x00FF00, iconSet: 'METALLIC', voltage: 131072, superconductor: true, cDust: true, components: '5x naquadah, 3x vibranium', cBlast: { temp: 3600, duration: 1200, volts: 2048 } },
    { name: 'naquatainium', color: 0x9D40FF, iconSet: 'METALLIC', voltage: 524288, superconductor: true, cDust: true, components: '5x naquadria, 3x unobtainium', cBlast: { temp: 4500, duration: 1200, volts: 8192 } },

    { name: 'rhenium_nickel_alloy', color: 0xEAEAEA, iconSet: 'METALLIC', components: '3x rhenium, 2x nickel', voltage: 524288, loss: 2, superconductor: false, cBlast: { temp: 5400, duration: 1200, volts: 524288 }, rotor: { speed: 800, power: 500, efficiency: 10.0, durability: 163840 } },
    { name: 'rheni_zirconium_alloy', color: 0x7B1FA2, iconSet: 'METALLIC', components: '1x rhenium_nickel_alloy, 1x zirconium', cBlast: { temp: 5400, duration: 1200, volts: 524288 }, rotor: { speed: 1000, power: 750, efficiency: 15.0, durability: 327680 } },
    { name: 'thorium_berkelium_alloy', color: 0x7B1FA2, iconSet: 'METALLIC', components: '2x thorium, 1x berkelium', voltage: 131072, superconductor: true, cBlast: { temp: 7200, duration: 1200, volts: 131072 }, rotor: { speed: 1000, power: 750, efficiency: 15.0, durability: 327680 } },
    { name: 'potassium_calcium_orthosilicate', color: 0xDAA520, iconSet: 'METALLIC', components: '2x potassium, 1x calcium, 1x silicon, 4x oxygen', cBlast: { temp: 7200, duration: 1200, volts: 131072 }, rotor: { speed: 1200, power: 850, efficiency: 17.0, durability: 400000 } },

    // --- Extreme Tech Overhaul (UEV - MAX) ---
    { name: 'alltheneutronium', pipe: true, color: 0xfcfc3d, iconSet: 'METALLIC', components: '2x naquamodium, 2x neutronium, 1x alloy_infused, 3x corrosive', voltage: 8388608, loss: 0, superconductor: false, cBlast: { temp: 10800, duration: 1200, volts: 32768 }, rotor: { speed: 1200, power: 300, efficiency: 13.0, durability: 655360 } },
    { name: 'vibtronium', pipe: true, color: 0x72fcb7, iconSet: 'METALLIC', components: '2x naquabranium, 2x alltheneutronium, 1x alloy_reinforced, 3x destructive', voltage: 33554432, loss: 0, superconductor: false, cBlast: { temp: 12600, duration: 1200, volts: 131072 }, rotor: { speed: 1400, power: 400, efficiency: 14.0, durability: 2621440 } },
    { name: 'unobtronium', pipe: true, color: 0xe782f2, iconSet: 'METALLIC', components: '2x naquatainium, 2x vibtronium, 1x alloy_atomic, 3x vengeful', voltage: 134217728, loss: 0, superconductor: false, cBlast: { temp: 15300, duration: 1200, volts: 524288 }, rotor: { speed: 1600, power: 500, efficiency: 16.0, durability: 10485760 } },
    { name: 'deorum_alloy', pipe: true, color: 0xCCDD22, iconSet: 'METALLIC', components: '3x naquadria, 2x deorum, 2x trinium, 3x steadfast', voltage: 536870912, loss: 0, superconductor: false, cBlast: { temp: 18900, duration: 1200, volts: 524288 }, rotor: { speed: 1800, power: 600, efficiency: 18.0, durability: 41943040 } },
    { name: 'demonic_alloy', components: '3x demon, 3x tenebrium, 3x caesium, 3x tritanium, 3x gaia', pipe: true, color: 0x22DDCC, iconSet: 'METALLIC', voltage: 2147483647, loss: 0, superconductor: false, cBlast: { temp: 21600, duration: 1200, volts: 524288 }, rotor: { speed: 2000, power: 800, efficiency: 20.0, durability: 167772160 } },


    // --- Thermal Alloys ---
    { name: 'signalum', pipe: true, color: 0xFF5500, iconSet: 'METALLIC', voltage: 128, loss: 1, components: '1x silver, 3x copper, 4x redstone', cBlast: { temp: 1700, duration: 400, volts: 512 } },
    { name: 'lumium', pipe: true, color: 0xFFFFAA, iconSet: 'METALLIC', voltage: 512, loss: 1, components: '1x silver, 3x tin, 2x glowstone', cBlast: { temp: 1700, duration: 600, volts: 2048 } },
    { name: 'enderium', pipe: true, color: 0x0B6156, iconSet: 'METALLIC', voltage: 2048, loss: 1, components: '1x diamond, 3x lead, 2x ender_pearl', cBlast: { temp: 2700, duration: 800, volts: 8192 } },

    // --- Draconic Evolution ---
    { name: 'draconium', noSmelting: true, ore: true, element: 'draconium', color: 0x502C6C, iconSet: 'SHINY', voltage: 8192, loss: 1, cBlast: { temp: 4500, duration: 1200, volts: 8192 } },
    { name: 'draconium_awakened', noSmelting: true, element: 'draconium_awakened', color: 0xFF6600, iconSet: 'BRIGHT', voltage: 2097152, superconductor: true },

    // --- Tech Automation Basics ---
    { name: 'compressed_iron', components: '1x iron', color: 0x474747, cDust: true, iconSet: 'METALLIC', voltage: 128, loss: 1 },
    { name: 'hop_graphite', components: '8x carbon', color: 0x1C1C1C, iconSet: 'DULL', voltage: 8192, loss: 1 },

    // --- Cosmic & Singularity End-Game Alloys ---
    { name: 'eternium', pipe: true, magnetic: true, color: 0x2d7d69, iconSet: 'METALLIC', components: '2x eternal, 4x sculk, 2x ferrognetic, 3x netherite, 5x neutronium', voltage: 8388608, loss: 16, cBlast: { temp: 10800, duration: 1200, volts: 2097152 } },
    { name: 'cosmic_alloy', pipe: true, color: 0xe4ac29, iconSet: 'METALLIC', components: '3x cosmic_matter, 4x alfsteel, 3x americium, 2x naquadria, 2x nether_star', voltage: 33554432, loss: 16, cBlast: { temp: 12600, duration: 1500, volts: 8388608 } },
    { name: 'antimatter_alloy', pipe: true, color: 0x8a3947, iconSet: 'METALLIC', components: '3x antimatter, 3x duranium, 2x darmstadtium, 4x iridium, 5x etrium', voltage: 134217728, loss: 16, cBlast: { temp: 15300, duration: 2000, volts: 33554432 } },
    { name: 'singularity_alloy', pipe: true, color: 0xab24a2, iconSet: 'METALLIC', components: '8x bedrockium, 5x stabilized_clathrate, 4x thorium_berkelium_alloy, 1x tachyon, 7x californium', voltage: 536870912, loss: 16, cBlast: { temp: 18900, duration: 2500, volts: 134217728 } },
    { name: 'absolute_alloy', pipe: true, color: 0xE6F2FF, iconSet: 'METALLIC', components: '3x strontium, 2x unobtronium, 4x tellurium, 4x radium, 8x tenebrium', voltage: 2147483647, loss: 16, cBlast: { temp: 21600, duration: 3000, volts: 536870912 } },

];

const newOres = [
    { name: 'caliche', components: '1x sodium, 1x iodine, 3x oxygen', byproducts: ['caliche', 'iodine', 'sodium'], iconSet: 'DULL', color: 0xE0D8B8, formula: 'NaIO3' },
    { name: 'calaverite', components: '2x tellurium, 1x gold', byproducts: ['calaverite', 'gold'], iconSet: 'METALLIC', color: 0xDAC084, noDecomp: true },
    { name: 'celestite', components: '1x strontium, 1x sulfur, 4x oxygen', byproducts: ['celestite', 'sulfur'], iconSet: 'METALLIC', color: 0xADD8E6, noDecomp: true },
    //{ name: 'celestine', components: '1x strontium, 1x sulfur, 4x oxygen', byproducts: ['celestine', 'strontium'], iconSet: 'METALLIC', color: 0xADD8E6, noDecomp: true },

    { name: 'radio_thoric_phosphate', components: '1x thorium, 1x uranium, 1x radium, 1x francium, 1x astatine, 4x phosphorus, 16x oxygen', byproducts: ['thorium', 'uranium', 'plutonium'], color: 0x7FFF00, iconSet: 'RADIOACTIVE', formula: '(ThURaFrAt)(PO4)4', noDecomp: true },
    { name: 'argyrodite', components: '1x germanium, 6x sulfur, 8x silver', byproducts: ['argyrodite', 'sulfur', 'silver'], iconSet: 'METALLIC', color: 0x8C7B70, noDecomp: true },
    { name: 'kurilite', components: '8x silver, 3x tellurium, 1x selenium', byproducts: ['kurilite', 'silver'], iconSet: 'METALLIC', color: 0x4A5D23, noDecomp: true },
    { name: 'telluride', components: '1x tellurium, 1x silver', byproducts: ['telluride', 'silver'], iconSet: 'METALLIC', color: 0xC0C0D0, noDecomp: true },
    { name: 'zircon', components: '1x zirconium, 1x silicon, 4x oxygen', byproducts: ['zircon', 'silicon'], color: 0xFFB3B3, iconSet: 'METALLIC', noDecomp: true },
    { name: 'baddeleyite', components: '1x zirconium, 2x oxygen', color: 0x9999FF, iconSet: 'DULL', noDecomp: true },
    { name: 'rhenite', components: '1x rhenium, 2x sulfur', byproducts: ['rhenite', 'sulfur'], iconSet: 'METALLIC', color: 0x8A8A8A, noDecomp: true },
    //{ name: 'rheniite', components: '1x rhenium, 2x sulfur', byproducts: ['rheniite', 'rhenium'], iconSet: 'METALLIC', color: 0x505050, noDecomp: true },
    { name: 'hellish', components: '1x hellforged, 1x iesnium', byproducts: ['hellforged', 'iesnium', 'coagulite'], iconSet: 'METALLIC', color: 0x880808 },
    { name: 'tenebrius', components: '3x tenebrium, 1x hellforged, 1x iesnium', byproducts: ['hellforged', 'iesnium'], iconSet: 'METALLIC', color: 0x101010, noDecomp: true },
    { name: 'terraria', components: '2x terrasteel, 1x elementium, 1x manasteel, 1x gaia', byproducts: ['elementium', 'manasteel', 'coagulite'], iconSet: 'METALLIC', color: 0xF7A8D8, noDecomp: true },

    // Selenium - done
    { name: 'clausthalite', components: '1x lead, 1x selenium', byproducts: ['clausthalite', 'lead'], iconSet: 'METALLIC', color: 0xC8C8D2 },
    { name: 'crookesite', components: '2x copper, 1x thallium, 1x silver, 1x selenium', byproducts: ['crookesite', 'thallium', 'selenium'], iconSet: 'METALLIC', color: 0x8A7048, noDecomp: true },
    { name: 'naumannite', components: '2x silver, 1x selenium', byproducts: ['naumannite', 'selenium'], iconSet: 'METALLIC', color: 0x4A4A52 },

    // Indium - done
    { name: 'roquesite', components: '1x copper, 1x indium, 2x sulfur', byproducts: ['roquesite', 'indium'], iconSet: 'METALLIC', color: 0x8C8C96, noDecomp: true },
    { name: 'indite', components: '1x iron, 2x indium, 4x sulfur', byproducts: ['indite', 'indium'], iconSet: 'METALLIC', color: 0x5C5C64, noDecomp: true },
    { name: 'sakuraiite', components: '1x copper, 1x zinc, 1x indium, 1x tin, 4x sulfur', byproducts: ['sakuraiite', 'indium'], iconSet: 'METALLIC', color: 0x707888, noDecomp: true },

    // Hafnium - done
    { name: 'hafnian_zircon', components: '1x zirconium, 1x hafnium, 1x silicon, 4x oxygen', byproducts: ['hafnian_zircon', 'hafnium', 'zirconium'], iconSet: 'METALLIC', color: 0xB8C8D0, noDecomp: true },
    { name: 'hafnon', components: '1x hafnium, 1x silicon, 4x oxygen', byproducts: ['hafnon', 'hafnium'], iconSet: 'METALLIC', color: 0xC0CCD8, noDecomp: true },

    // Rubidium - done
    { name: 'rubicline', components: '1x rubidium, 1x potassium, 1x aluminium, 3x silicon, 8x oxygen', byproducts: ['rubicline', 'rubidium'], iconSet: 'DULL', color: 0xF0C8DC, noDecomp: true },

    // Thallium - done
    { name: 'lorandite', components: '1x thallium, 1x arsenic, 2x sulfur', byproducts: ['lorandite', 'thallium'], iconSet: 'METALLIC', color: 0xB22222, noDecomp: true },
    { name: 'hutchinsonite', components: '1x thallium, 1x lead, 5x arsenic, 9x sulfur', byproducts: ['hutchinsonite', 'thallium', 'lead'], iconSet: 'METALLIC', color: 0x782828, noDecomp: true },

    // Scandium - done
    { name: 'thortveitite', components: '2x scandium, 2x silicon, 7x oxygen', byproducts: ['thortveitite', 'scandium'], iconSet: 'METALLIC', color: 0x4A5C3C, noDecomp: true },
    { name: 'kolbeckite', components: '1x scandium, 1x phosphorus, 4x oxygen', byproducts: ['kolbeckite', 'scandium'], iconSet: 'DULL', color: 0x5C7050, noDecomp: true },
    { name: 'bazzite', components: '3x beryllium, 2x scandium, 6x silicon, 18x oxygen', byproducts: ['bazzite', 'scandium', 'beryllium'], iconSet: 'METALLIC', color: 0x6EC8C0, noDecomp: true },

    // Gallium - done
    { name: 'gallite', components: '1x copper, 1x gallium, 2x sulfur', byproducts: ['gallite', 'gallium'], iconSet: 'METALLIC', color: 0xDCC8E6, noDecomp: true },


    // Tantalum & Niobium - done
    { name: 'columbite_tantalite', components: '1x iron, 1x manganese, 2x niobium, 2x tantalum, 6x oxygen', byproducts: ['columbite_tantalite', 'niobium', 'tantalum'], iconSet: 'METALLIC', color: 0x3C3C46, noDecomp: true },
    { name: 'microlite', components: '2x calcium, 2x tantalum, 7x oxygen', byproducts: ['microlite', 'tantalum'], iconSet: 'METALLIC', color: 0x8C7850, noDecomp: true },
    { name: 'wodginite', components: '1x manganese, 1x iron, 1x tin, 1x tantalum, 1x titanium, 1x niobium, 8x oxygen', byproducts: ['wodginite', 'tantalum', 'niobium'], iconSet: 'METALLIC', color: 0x463C34, noDecomp: true },
    { name: 'fergusonite', components: '1x yttrium, 1x niobium, 4x oxygen', byproducts: ['fergusonite', 'yttrium', 'niobium'], iconSet: 'METALLIC', color: 0x3C3428, noDecomp: true },

    // Rhenium - done    
    { name: 'tarkianite', components: '1x copper, 4x rhenium, 4x molybdenum, 8x sulfur', byproducts: ['tarkianite', 'rhenium', 'molybdenum'], iconSet: 'METALLIC', color: 0x686868, noDecomp: true },

    // Strontium - done
    { name: 'strontianite', components: '1x strontium, 1x carbon, 3x oxygen', byproducts: ['strontianite', 'strontium'], iconSet: 'DULL', color: 0xF0F0DC, noDecomp: true },

    // Samarium - done
    { name: 'samarskite', components: '1x yttrium, 1x cerium, 1x uranium, 1x iron, 2x niobium, 2x tantalum, 1x titanium, 8x oxygen', byproducts: ['samarskite', 'samarium', 'yttrium'], iconSet: 'METALLIC', color: 0x2C2418, noDecomp: true },
    { name: 'cerite', components: '3x cerium, 1x lanthanum, 1x calcium, 1x iron, 1x magnesium, 3x silicon, 12x oxygen, 1x fluorine', byproducts: ['cerite', 'samarium', 'lanthanum'], iconSet: 'DULL', color: 0x8C7858, noDecomp: true },

    // Yttrium - done
    { name: 'xenotime', components: '1x yttrium, 1x phosphorus, 4x oxygen', byproducts: ['xenotime', 'yttrium', 'lutetium'], iconSet: 'METALLIC', color: 0xC8A050, noDecomp: true },
    { name: 'gadolinite', components: '2x yttrium, 1x cerium, 1x iron, 2x beryllium, 2x silicon, 10x oxygen', byproducts: ['gadolinite', 'yttrium'], iconSet: 'DULL', color: 0x3C3428, noDecomp: true },

    // Ruthenium & Osmium - done
    { name: 'laurite', components: '1x ruthenium, 2x sulfur', byproducts: ['laurite', 'ruthenium', 'osmium'], iconSet: 'METALLIC', color: 0x505860, noDecomp: true },
    //{ name: 'osmiridium', components: '1x osmium, 1x iridium', byproducts: ['osmiridium', 'osmium', 'ruthenium'], iconSet: 'METALLIC', color: 0x788088, noDecomp: true },

    // Germanium - done
    { name: 'germanite', components: '13x copper, 2x iron, 2x germanium, 16x sulfur', byproducts: ['germanite', 'germanium', 'gallium'], iconSet: 'METALLIC', color: 0x6E5A4A, noDecomp: true },
    { name: 'renierite', components: '11x copper, 4x zinc, 2x iron, 2x germanium, 2x arsenic, 16x sulfur', byproducts: ['renierite', 'germanium'], iconSet: 'METALLIC', color: 0x5A4A3C, noDecomp: true },

    // Bismuth
    { name: 'bismuthinite', components: '2x bismuth, 3x sulfur', byproducts: ['bismuthinite', 'bismuth'], iconSet: 'METALLIC', color: 0xC8B8C0 },
    { name: 'bismite', components: '2x bismuth, 3x oxygen', byproducts: ['bismite', 'bismuth'], iconSet: 'DULL', color: 0xD8C8A8 },
    { name: 'bismutite', components: '2x bismuth, 1x carbon, 5x oxygen', byproducts: ['bismutite', 'bismuth'], iconSet: 'DULL', color: 0xB8A898 },

    // Thorium  - thorianite is added by immersive geology
    { name: 'thorianite', components: '1x thorium, 2x oxygen', byproducts: ['thorianite', 'thorium'], iconSet: 'METALLIC', color: 0x1C1C1C },
    { name: 'thorite', components: '1x thorium, 1x silicon, 4x oxygen', byproducts: ['thorite', 'thorium'], iconSet: 'DULL', color: 0x3C3428 },

    // Caesium - done
    { name: 'rhodizite', components: '1x caesium, 1x potassium, 4x aluminium, 4x beryllium, 11x boron, 28x oxygen', byproducts: ['rhodizite', 'caesium'], iconSet: 'METALLIC', color: 0xF0F0E0, noDecomp: true },

    // Lanthanum - done
    { name: 'lanthanite', components: '2x lanthanum, 3x carbon, 9x oxygen', byproducts: ['lanthanite', 'lanthanum'], iconSet: 'DULL', color: 0xD8D8C0, noDecomp: true },

    // Yttrium - done
    { name: 'yttrialite', components: '2x yttrium, 1x thorium, 2x silicon, 7x oxygen', byproducts: ['yttrialite', 'lutetium', 'yttrium'], iconSet: 'DULL', color: 0x8C8058, noDecomp: true },

    // Fluorine    - cryolite is added by immersive geology
    { name: 'cryolite', components: '3x sodium, 1x aluminium, 6x fluorine', byproducts: ['cryolite', 'fluorine'], iconSet: 'DULL', color: 0xE8E8E8 },

    // Antimony
    { name: 'ullmannite', components: '1x nickel, 1x antimony, 1x sulfur', byproducts: ['ullmannite', 'antimony'], iconSet: 'METALLIC', color: 0x9A9A9A },
    { name: 'jamesonite', components: '4x lead, 2x iron, 6x antimony, 14x sulfur', byproducts: ['jamesonite', 'antimony', 'lead'], iconSet: 'METALLIC', color: 0x605868 },

    //chaos shard
    { name: 'chaotic', iconSet: 'SHINY', color: 0x090909 },


    // --- Silent Gear / Just Dire Things ores ---    
];

const customMatsToRegister = [
    { name: 'blazing_pyrotheum', color: 0xF0AA3E, iconSet: 'GLASS', dust: true, gem: true, fluid: true },
    { name: 'gelid_cryotheum', color: 0x28C4EF, iconSet: 'QUARTZ', dust: true, gem: true, fluid: true },
    { name: 'zephyrean_aerotheum', color: 0xACA485, iconSet: 'GEM_HORIZONTAL', dust: true, gem: true, fluid: true },
    { name: 'tectonic_petrotheum', color: 0x352821, iconSet: 'GEM_VERTICAL', dust: true, gem: true, fluid: true },
    { name: 'bedrockium', color: 0x101010, iconSet: 'METALLIC', ingot: true, ore: true, dust: true, flags: [GTMaterialFlags.NO_SMELTING, CMMEMaterialFlags.GENERATE_SINGULARITY, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FOIL] },
    { name: 'debris', color: 0x6E5A52, iconSet: 'METALLIC', ore: true },
    { name: 'crimson_iron', color: 0xee4f7f, iconSet: 'METALLIC', ore: true },
    { name: 'ferricore', color: 0xb1e5db, iconSet: 'METALLIC', ingot: true, ore: true },
    { name: 'blazegold', color: 0xe68e52, iconSet: 'SHINY', ingot: true, ore: true },
    { name: 'eclipsealloy', color: 0x586e75, iconSet: 'SHINY', ingot: true, ore: true },
    { name: 'coagulite', color: 0x5C0A0A, iconSet: 'METALLIC', gem: true, ore: true, noDecomp: true },
    { name: 'azure_silver', color: 0xDE81E6, iconSet: 'METALLIC', ore: true },
    { name: 'mithril', color: 0x99D9D9, iconSet: 'METALLIC', dust: true, ingot: true, ore: true },

    { name: 'soul_sand', color: 0x5A4232, iconSet: 'DULL', dust: true },
    { name: 'tachyon', color: 0x394d55, iconSet: 'SHINY', gem: true, dust: true },
    { name: 'pulsating_crystal', color: 0x79ffff, iconSet: 'SHINY', gem: true, dust: true },
    { name: 'vibrant_crystal', color: 0xa4ffaf, iconSet: 'SHINY', gem: true, dust: true },
    { name: 'aureal', color: 0xA1C2F7, iconSet: 'SHINY', fluid: true, gem: true },
    { name: 'fire_essence', color: 0xD74C4C, iconSet: 'FLUID', fluid: true, gem: true },
    { name: 'water_essence', color: 0x4C7DD7, iconSet: 'FLUID', fluid: true, gem: true },
    { name: 'air_essence', color: 0xD7D34C, iconSet: 'FLUID', fluid: true, gem: true },
    { name: 'earth_essence', color: 0x45b23f, iconSet: 'FLUID', fluid: true, gem: true },
    { name: 'spent_nuclear_waste', color: 0x53D74C, iconSet: 'RADIOACTIVE', fluid: true },

    { name: 'semi_stable_clathrate', color: 0x8FFFD7, iconSet: 'METALLIC', dust: true, ingot: true, flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, CMMEMaterialFlags.GENERATE_SINGULARITY, GTMaterialFlags.DISABLE_DECOMPOSITION] },
    { name: 'stabilized_clathrate', color: 0xB1AAA6, iconSet: 'METALLIC', dust: true, ingot: true, flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, CMMEMaterialFlags.GENERATE_SINGULARITY, GTMaterialFlags.DISABLE_DECOMPOSITION] },
    { name: 'energized_steel', color: 0xceb08a, iconSet: 'SHINY', fluid: true, ingot: true, flags: [GTMaterialFlags.GENERATE_PLATE, CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'blazing_crystal', color: 0xf06223, iconSet: 'SHINY', fluid: true, gem: true, flags: [GTMaterialFlags.GENERATE_PLATE, CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'niotic_crystal', color: 0x00e3fc, iconSet: 'SHINY', fluid: true, gem: true, flags: [GTMaterialFlags.GENERATE_PLATE, CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'spirited_crystal', color: 0x00fc00, iconSet: 'SHINY', fluid: true, gem: true, flags: [GTMaterialFlags.GENERATE_PLATE, CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'nitro_crystal', color: 0x970000, iconSet: 'SHINY', fluid: true, gem: true, flags: [GTMaterialFlags.GENERATE_PLATE, CMMEMaterialFlags.GENERATE_SINGULARITY] },

    { name: 'knightmetal', color: 0xe4f9cb, iconSet: 'METALLIC', ingot: true, flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'steeleaf', color: 0x518539, iconSet: 'METALLIC', ingot: true, flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'fiery', color: 0x5b2b19, iconSet: 'METALLIC', ingot: true, flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'carminite', color: 0xD74C4C, iconSet: 'RUBY', gem: true, flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },

    { name: 'bio_organic_nanocomposite', color: 0x3D5C42, iconSet: 'DULL', ingot: true, dust: true, fluid: true, flags: [GTMaterialFlags.GENERATE_PLATE] },

    { name: 'hepatizon', color: 0x715A7C, iconSet: 'METALLIC', dust: true, ingot: true, fluid: true, components: ['2x copper', '1x cobalt', '1x nether_quartz'], flags: [GTMaterialFlags.DISABLE_DECOMPOSITION] },
    { name: 'amethyst_bronze', color: 0xEBC4DB, iconSet: 'METALLIC', dust: true, ingot: true, fluid: true, components: ['1x copper', '1x amethyst'] },
    { name: 'manyullyn', color: 0xC097F0, iconSet: 'METALLIC', dust: true, ingot: true, fluid: true, components: ['1x debris', '3x cobalt'] },

    { name: 'core', color: 0x989CAB, iconSet: 'METALLIC', flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'elemental_fire', color: 0xD55642, iconSet: 'SHINY', flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'elemental_water', color: 0xB7B5ED, iconSet: 'SHINY', flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'elemental_air', color: 0xE3E3BF, iconSet: 'SHINY', flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'elemental_earth', color: 0x289C2B, iconSet: 'SHINY', flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },

    { name: 'drenched_iron', color: 0x5490CF, iconSet: 'METALLIC', ingot: true, dust: true, fluid: true, ore: true, element: 'iron', flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FOIL] },
    { name: 'swift_alloy', color: 0xEBB760, iconSet: 'METALLIC', ingot: true, dust: true, fluid: true, ore: true, flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FOIL] },
    { name: 'fireite', color: 0x5C0A0A, iconSet: 'METALLIC', ingot: true, dust: true, fluid: true, ore: true, flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FOIL] },

    { name: 'chaos_shard', color: 0x090909, iconSet: 'RADIOACTIVE', gem: true },
    { name: 'unrefined_tenebrius', color: 0x101010, iconSet: 'RADIOACTIVE', dust: true, fluid: true, element: 'tenebrium' },
    { name: 'purified_tenebrius', color: 0x101010, iconSet: 'RADIOACTIVE', dust: true, fluid: true, element: 'tenebrium' },
    { name: 'refined_tenebrius', color: 0x101010, iconSet: 'RADIOACTIVE', dust: true, fluid: true, gem: true, element: 'tenebrium' },

    { name: 'garmonbozia', color: '0xFFFBD0', iconSet: 'SHINY', gem: true, dust: true, fluid: true, element: 'garmonbozia', flags: [CMMEMaterialFlags.GENERATE_SINGULARITY] },
    { name: 'thorn_rose', color: '0xAB3236', iconSet: 'WOOD', dust: true },
    { name: 'platinum_rhenium_catalyst', color: '0x8B8C8E', iconSet: 'DULL', dust: true, fluid: true, polymer: true, ingot: true, components: ['1x platinum', '1x aluminium', '1x rhenium'], flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.DISABLE_DECOMPOSITION] },

    { name: 'blue_ice', color: '0x739BD0', iconSet: 'GLASS', dust: true, fluid: true },
    { name: 'packed_ice', color: '0xA5C2F5', iconSet: 'GLASS', dust: true, fluid: true },
    { name: 'rotten_flesh', color: '0x934537', iconSet: 'FLUID', fluid: true, ingot: true },
    { name: 'recycled_organic_matter', color: '0x6E6259', iconSet: 'FLUID', fluid: true },

    { name: 'niter', color: 0xF7F5F0, iconSet: 'DIAMOND', dust: true, gem: true, formula: 'KNO3', components: ['1x potassium', '1x nitrogen', '3x oxygen'] },
    { name: 'cadmium_copper', color: 0xC97A4A, iconSet: 'METALLIC', ingot: true, dust: true, fluid: true, formula: 'Cu9Cd', components: ['9x copper', '1x cadmium'], cable: { voltage: 128, amperage: 2, loss: 1, insurmountable: false }, flags: [GTMaterialFlags.GENERATE_FINE_WIRE] },
    { name: 'cadmium_telluride', color: 0x2B2B2B, iconSet: 'METALLIC', ingot: true, dust: true, fluid: true, formula: 'CdTe', components: ['1x cadmium', '1x tellurium'], flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL] },
    { name: 'cadmium_selenide', color: 0xD94D1A, iconSet: 'METALLIC', ingot: true, dust: true, fluid: true, formula: 'CdSe', components: ['1x cadmium', '1x selenium'], flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL] },
    { name: 'strontium_aluminate', color: 0xF0EDE0, iconSet: 'DULL', ingot: true, dust: true, fluid: true, formula: 'SrAl2O4', components: ['1x strontium', '2x aluminium', '4x oxygen'], flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD] },
    { name: 'strontium_ferrite', color: 0x3C3C3C, iconSet: 'DULL', ingot: true, dust: true, fluid: true, formula: 'SrFe12O19', components: ['1x strontium', '12x iron', '19x oxygen'], flags: [GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_RING] },

    { name: 'bio_organic_pulp', color: 0x7A6248, iconSet: 'DULL', dust: true },
    { name: 'microbial_biomass', color: 0x556B2F, iconSet: 'FLUID', fluid: true },
    { name: 'nucleic_acid_mixture', color: 0x4682B4, iconSet: 'FLUID', fluid: true },
    { name: 'enzyme_solution', color: 0x9370DB, iconSet: 'FLUID', fluid: true },
    { name: 'concentrated_liquid_dna', color: 0xFF69B4, iconSet: 'SHINY', fluid: true },
    { name: 'dna_productivity', color: 0x00d200, iconSet: 'SHINY', fluid: true },
    { name: 'dna_tolerance', color: 0x0000d6, iconSet: 'SHINY', fluid: true },
    { name: 'dna_behavior', color: 0xd8d800, iconSet: 'SHINY', fluid: true },
    { name: 'dna_endurance', color: 0x00ccd3, iconSet: 'SHINY', fluid: true },
    { name: 'dna_omega', color: 0xa45a26, iconSet: 'SHINY', fluid: true },
    { name: 'dna_mutation', color: 0x66008a, iconSet: 'SHINY', fluid: true },

    { name: 'samarium_cobalt', color: 0x8C7B4A, iconSet: 'METALLIC', dust: true, ingot: true, fluid: true, formula: 'SmCo5', components: ['1x samarium', '5x cobalt'], flags: [GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION] },
    { name: 'magnetic_samarium_cobalt', color: 0x8C7B4A, iconSet: 'MAGNETIC', dust: true, ingot: true, fluid: true, flags: [GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC, GTMaterialFlags.DISABLE_DECOMPOSITION] },
    { name: 'antimatter', color: 0x7d4d88, iconSet: 'RADIOACTIVE', dust: true, fluid: true, element: 'antimatter' },
    { name: 'cosmic_matter', color: 0x3b004f, iconSet: 'METALLIC', dust: true, ingot: true, fluid: true, element: 'cosmic' },
    { name: 'thorium_doped_calcium_fluoride', color: 0xFF8C00, iconSet: 'CERTUS', dust: true, gem: true, fluid: true, formula: 'Th:CaF2', flags: [GTMaterialFlags.DISABLE_DECOMPOSITION] },
    { name: 'mana_essence', color: 0x0099FF, iconSet: 'RADIOACTIVE', gem: true, fluid: true }
];

GTCEuStartupEvents.registry('gtceu:material', event => {


    let materialBuilder = event.create("infinity")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element('infinity')
        .color(0xffffff)
        .iconSet("infinity")
        .blastTemp(10800, getGasTier(33554432), 33554432, 600)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FOIL);

    customMatsToRegister.forEach(mat => {
        let icon = GTMaterialIconSet[mat.iconSet];
        
        let builder = event.create(mat.name)
            .color(mat.color)
            .iconSet(icon);
        if (mat.dust) builder.dust();
        
        if (mat.ingot) builder.ingot();
        if (mat.gem) builder.gem();
        if (mat.fluid) builder.fluid();
        if (mat.ore) builder.ore(2, 1);
        if (mat.polymer) builder.polymer();
        if (mat.element) builder.element(mat.element);
        if (mat.formula) builder.formula(mat.formula);

        if (mat.components) {
            mat.components.forEach(comp => builder.components(comp));
        }

        if (mat.cable) {
            builder.cableProperties(mat.cable.voltage, mat.cable.amperage, mat.cable.loss, mat.cable.insurable || false);
        }

        if (mat.blast) {
            builder.blastTemp(mat.blast.temp, getGasTier(mat.blast.gasTier), mat.blast.eut, mat.blast.duration);
        }

        if (mat.flags && mat.flags.length > 0) {
            mat.flags.forEach(flag => builder.flags(flag));
        }
        if (mat.noSmelting) {
            builder.flags(GTMaterialFlags.NO_SMELTING);
        } 
    });

    kevlarFluids.forEach(mat => {
        const materialBuilder = event.create(mat.name)        
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || GTMaterialIconSet.FLUID]);
        if (mat.components) {
            materialBuilder.components(mat.components.split(', '));
        }
        if (mat.formula) { materialBuilder.formula(mat.formula); }        
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
        if (mat.dust) { materialBuilder.dust(); }
    });

    gasses.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            //@ts-ignore                                                   
            //this works to register as a gas
            .fluid()
            .gas()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || GTMaterialIconSet.FLUID])
        if (mat.components) {
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }
        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
    });

    chalks.forEach(chalk => {
        let materialBuilder = event.create(chalk.name)
            // @ts-ignore               
            .fluid()
            .gem()
            .color(chalk.color)
            .iconSet(GTMaterialIconSet[chalk.iconSet || 'FLUID'])
            .flags(
                GTMaterialFlags.DISABLE_DECOMPOSITION,
                GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES)
    });

    //custom flags
    const glycerol = GTMaterials.get('glycerol');
    glycerol.setProperty(PropertyKey.GEM, new GemProperty());
    glycerol.addFlags(GTMaterialFlags.CRYSTALLIZABLE);

    let cadmium = GTMaterials.get('cadmium')
    cadmium.addFlags(GTMaterialFlags.GENERATE_ROD);
    if (!cadmium.hasProperty(PropertyKey.INGOT)) {
        cadmium.setProperty(PropertyKey.INGOT, new IngotProperty())
    }

    //extreme reactors
    erMaterials.forEach(mat => {
        event.create(mat.name)
            // @ts-ignore
            .ingot()
            .dust()
            .color(mat.color)
            .iconSet(GTMaterialIconSet.RADIOACTIVE)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                // @ts-ignore
                //CMMEMaterialFlags.GENERATE_SINGULARITY
                //need to add singularity recipes
            );
    });

    //gems
    materialsGem.forEach(mat => {
        let materialBuilder = event.create(mat.name)

            .dust()
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet])

        if (mat.element) { materialBuilder.element(mat.element) }
        if (mat.voltage && mat.voltage > 0) { materialBuilder.cableProperties(getVoltage(mat.voltage), 1, mat.loss || 0, mat.superconductor || false) }
        if (mat.components) {
            let parts = mat.components.split(', ')
            materialBuilder.components(parts)
        }
        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION) }
        if (mat.simple) {
            materialBuilder.gem()
            materialBuilder.flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_LENS,
                // @ts-ignore
                //CMMEMaterialFlags.GENERATE_SINGULARITY
            );
        }
        else {
            materialBuilder.ingot()
            materialBuilder.flags(
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_RING,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.GENERATE_ROUND,
                GTMaterialFlags.GENERATE_FINE_WIRE,
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_DENSE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_LONG_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_FRAME,
                // @ts-ignore
                //CMMEMaterialFlags.GENERATE_SINGULARITY
            );
        }
    });


    //actually additions
    adMats.forEach(mat => {
        let materialbuilder = event.create(mat.name)
            // @ts-ignore
            .dust()
            .ingot()
            //.ore(2, 1)
            .element(mat.element)
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet.SHINY)
            .flags(
                // @ts-ignore
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_RING,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.GENERATE_ROUND,
                GTMaterialFlags.GENERATE_FINE_WIRE,
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_DENSE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_LONG_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_FRAME,
                // @ts-ignore
                //CMMEMaterialFlags.GENERATE_SINGULARITY
            )
    });

    //existing elements
    otherElements.forEach(mat => {
        let material = GTMaterials.get(mat.name);
        modifyElement(material, mat.name, mat.cBlast, mat.cVolt, mat.oGem, mat.cPolymer, mat.cIngot)
    });

    //stuff from other mods
    modalloys.forEach(mat => {

        let materialBuilder = event.create(mat.name)


            // @ts-ignore
            .ingot()
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet])            
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_DENSE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_LONG_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_FRAME,
                GTMaterialFlags.GENERATE_RING,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.GENERATE_ROTOR,
                GTMaterialFlags.GENERATE_ROUND,
                GTMaterialFlags.GENERATE_FINE_WIRE,
                GTMaterialFlags.GENERATE_BOLT_SCREW,

                // @ts-ignore
                //CMMEMaterialFlags.GENERATE_SINGULARITY
            );
            
        if (mat.noSmelting) {
            materialBuilder.flags(GTMaterialFlags.NO_SMELTING);
        }    
        if (mat.formula)
            materialBuilder.formula(mat.formula);
        if (mat.magnetic) {
            //materialBuilder.flags(GTMaterialFlags.IS_MAGNETIC)
            let magneticBuilder = event.create(`magnetic_${mat.name}`)
                // @ts-ignore                
                .ingot()
                .dust()
                .color(mat.color)
                .element(mat.element)
                .iconSet(GTMaterialIconSet['MAGNETIC'])
                .flags(
                    GTMaterialFlags.GENERATE_ROD,
                    GTMaterialFlags.GENERATE_LONG_ROD,
                    GTMaterialFlags.IS_MAGNETIC
                );
        }

        if (mat.ore) { materialBuilder.ore(2, 1) }
        if (mat.pipe) { materialBuilder.fluidPipeProperties(16384, 10800, true) }
        if (mat.element) { materialBuilder.element(mat.element) }
        if (mat.cDust) { materialBuilder.dust() }
        if (mat.cBlast) {
            materialBuilder.blastTemp(mat.cBlast.temp, getGasTier(mat.voltage), mat.cBlast.volts, mat.cBlast.duration);
        }
        if (mat.voltage > 0) { materialBuilder.cableProperties(getVoltage(mat.voltage), 1, mat.loss || 0, mat.superconductor || false); }
        if (mat.oItem) {
            let gtMaterial = GTMaterials.get(mat.name);
            TagPrefix.ingot.setIgnored(gtMaterial, Ingredient.of(mat.oItem));
            //materialBuilder.setIgnored(GTMaterialRegistry.getMaterial(mat.oItem), TagPrefix.ingot) 
        }
        if (mat.components) {
            // Splitting the string into the individual '1x material' arguments
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }

        if (mat.rotor) {
            materialBuilder.rotorStats(mat.rotor.speed, mat.rotor.power, mat.rotor.efficiency, mat.rotor.durability);
        }

    });

    //naquadria plasma
    naqStages.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            // @ts-ignore                                             
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.icon])
        if (mat.polymer == true) {
            materialBuilder.polymer()
            materialBuilder.ingot()
            materialBuilder.flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_FOIL,
            )
        }
    });


    //custom ores
    newOres.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            .dust()
            .ore(2, 1)
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || 'METALLIC'])

        if (mat.fluid) {
            materialBuilder.fluid()
        }

        if (mat.components) {
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }

        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
    });

    //custom dusts
    dusts.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            .dust()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || 'METALLIC']);
        if (mat.fluid) {
            materialBuilder.fluid()
        }
        if (mat.components) {
            materialBuilder.components(mat.components.split(', '))
        }
        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
    });

    //custom fluids
    fluids.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            // @ts-ignore               
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || GTMaterialIconSet.FLUID])
        if (mat.components) {
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }
        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
    });

    //custom polymers
    polymers.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            // @ts-ignore            
            .polymer()
            .ingot()
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet.SHINY)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_RING
            )
        if (mat.components) {
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }
        //if (mat.formula) { materialBuilder.formula(mat.formula) }
    });



});



StartupEvents.registry('block', event => {

    const casings = [
        // Logistics & Networking
        { id: 'flux_casing', name: 'Flux Casing', tex: 'fluxnetworks:block/flux_block' },
        { id: 'network_casing', name: 'Network Casing', tex: 'ae2:block/controller_column' },
        { id: 'router_casing', name: 'Router Casing', tex: 'modularrouters:block/modular_router_side' },

        // Power & Processing        
        { id: 'dimensional_casing', name: 'Dimensional Casing', tex: 'gtceu:block/casings/solid/machine_casing_stable_titanium' },
        { id: 'xenomorphic_data_frame', name: 'Xenomorphic Data-Frame', tex: 'fluxnetworks:block/flux_block' },
        { id: 'industrial_pylon_casing', name: 'Industrial Pylon Casing', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },

        // Magic & Biological
        { id: 'slate_casing', name: 'Slate Casing', tex: 'bloodmagic:block/largebloodstonebrick' },
        { id: 'rune_casing', name: 'Rune Casing', tex: 'bloodmagic:block/blankrune' },
        { id: 'reinforced_rune_casing', name: 'Reinforced Rune Casing', tex: 'bloodmagic:block/masterritualstone' },
        { id: 'ritual_casing', name: 'Ritual Casing', tex: 'bloodmagic:block/ritualstone' },
        { id: 'hexagonal_bio_composite', name: 'Hexagonal Bio-Composite', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },
        { id: 'magical_bio_composite', name: 'Magical Bio-Composite', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },

        { id: 'alchemical_casing', name: 'Alchemical Casing', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },
        { id: 'fission_casing', name: 'Fission Casing', tex: 'gtceu:block/casings/solid/machine_casing_inert_ptfe' }
    ];
    const coils = [
        //'draconium', 'wyvern', 'draconic', 'chaotic'
        { name: 'draconium', displayName: 'Draconium Casing' },
        { name: 'wyvern', displayName: 'Wyvern Casing' },
        { name: 'draconic', displayName: 'Draconic Casing' },
        { name: 'chaotic', displayName: 'Chaotic Casing' },

    ]

    let block = event.create(`gtceu:gadolinium_casing`)
        // @ts-ignore
        .displayName('Gadolinium Casing')
        .textureAll(`gtceu:block/casings/gadolinium_casing/gadolinium_casing`)
        .hardness(5.0)
        .resistance(10.0)
        .soundType('metal')
        .tagBlock('gtceu:casings');

    coils.forEach(coil => {
        let block = event.create(`gtceu:${coil.name}_casing`)
            // @ts-ignore
            .displayName(coil.displayName)
            .textureAll(`gtceu:block/casings/${coil.name}_casing/${coil.name}_casing`)
            .hardness(5.0)
            .resistance(10.0)
            .soundType('metal')
            .tagBlock('gtceu:casings');
    });

    casings.forEach(casing => {
        let block = event.create(`gtceu:${casing.id}`)
            // @ts-ignore
            .displayName(casing.name)
            // @ts-ignore
            .hardness(5.0)
            .resistance(10.0)
            .soundType('metal')
            .textureAll(casing.tex) // These paths are now verified
            .tagBlock('gtceu:casings');

        if (casing.color) {
            // Index 0 is the base layer for tinting
            block.color(0, casing.color);
            // Mandatory for tints to show up on some hardware/drivers
            block.renderType('cutout');
        }

        if (casing.light) {
            block.lightLevel(casing.light); // 1.0 is max brightness
        }
    });



});


// ---------- Unification data ----------
const ignoredItems = {
    block: {
        compressed_iron: 'pneumaticcraft:compressed_iron_block',
        draconium_awakened: 'draconicevolution:awakened_draconium_block',
        draconium: 'draconicevolution:draconium_block',
        blue_ice: 'minecraft:blue_ice',
        packed_ice: 'minecraft:packed_ice',
        niter: 'thermal:niter_block',
        energetic_alloy: 'powah:energetic_alloy_block',
        blazing_crystal: 'powah:blazing_crystal_block',
        niotic_crystal: 'powah:niotic_crystal_block',
        spirited_crystal: 'powah:spirited_crystal_block',
        nitro_crystal: 'powah:nitro_crystal_block',
        dark_matter: 'projecte:dark_matter_block',
        red_matter: 'projecte:red_matter_block',
    },
    dust: {
        refined_obsidian: 'mekanism:dust_refined_obsidian',
        hop_graphite: 'immersiveengineering:dust_hop_graphite',
        draconium_awakened: 'draconicevolution:awakened_draconium_dust',
        draconium: 'draconicevolution:draconium_dust',
        fluix: 'ae2:fluix_dust',
        hellforged: 'bloodmagic:sand_hellforged',
        antimatter: 'mekanism:pellet_antimatter',
        garmonbozia: 'evilcraft:garmonbozia',
        niter: 'thermal:niter_dust',
        ferrognetic: 'forbidden_arcanus:ferrognetic_mixture',
        soul_sand: 'thermal_extra:soul_sand_dust',
    },
    gear: {
        compressed_iron: 'pneumaticcraft:compressed_iron_gear',
    },
    gem: {
        fluix: 'ae2:fluix_crystal',
        atm_star: 'allthetweaks:atm_star',
        eternal: 'forbidden_arcanus:eternal_stella',
        source: 'ars_nouveau:source_gem',
        soul: 'occultism:soul_gem',
        glycerol: 'pneumaticcraft:glycerol',
        demon: 'bloodmagic:defaultcrystal',
        steadfast: 'bloodmagic:steadfastcrystal',
        corrosive: 'bloodmagic:corrosivecrystal',
        vengeful: 'bloodmagic:vengefulcrystal',
        destructive: 'bloodmagic:destructivecrystal',
        niter: 'thermal:niter',
        chaos_shard: 'draconicevolution:chaos_shard',
        coagulite: 'evilcraft:condensed_blood',
        carminite: 'twilightforest:carminite',
        fire_essence: 'mysticalagriculture:fire_essence',
        water_essence: 'mysticalagriculture:water_essence',
        air_essence: 'mysticalagriculture:air_essence',
        earth_essence: 'mysticalagriculture:earth_essence',
        pulsating_crystal: 'enderio:pulsating_crystal',
        vibrant_crystal: 'enderio:vibrant_crystal',
        tachyon: 'gtceu:tachyon',
        blazing_crystal: 'powah:crystal_blazing',
        niotic_crystal: 'powah:crystal_niotic',
        spirited_crystal: 'powah:crystal_spirited',
        nitro_crystal: 'powah:crystal_nitro',
        dark_matter: 'projecte:dark_matter',
        red_matter: 'projecte:red_matter'
    },
    ingot: {
        alloy_atomic: 'mekanism:alloy_atomic',
        alloy_reinforced: 'mekanism:alloy_reinforced',
        alloy_infused: 'mekanism:alloy_infused',
        compressed_iron: 'pneumaticcraft:ingot_iron_compressed',
        hop_graphite: 'immersiveengineering:ingot_hop_graphite',
        pink_slime: 'industrialforegoing:pink_slime_ingot',
        //deorum: 'forbidden_arcanus:deorum_ingot',
        draconium_awakened: 'draconicevolution:awakened_draconium_ingot',
        draconium: 'draconicevolution:draconium_ingot',
        hellforged: 'bloodmagic:ingot_hellforged',
        plastic: 'industrialforegoing:plastic',
        rotten_flesh: 'minecraft:rotten_flesh',
        mithril: 'irons_spellbooks:mithril_ingot',
        energized_steel: 'powah:steel_energized',
    },
    nugget: {
        draconium_awakened: 'draconicevolution:awakened_draconium_nugget',
        draconium: 'draconicevolution:draconium_nugget',
    },
    rod: {
        etrium: 'ad_astra:etrium_rod',
    },
    rawOre: {
        iesnium: 'occultism:raw_iesnium',
        hellforged: 'bloodmagic:rawdemonite',
        azure_silver: 'silentgear:raw_azure_silver',
        mithril: 'irons_spellbooks:raw_mithril',
        uranium: 'alltheores:raw_uranium',
        zinc: 'alltheores:raw_zinc',
        osmium: 'alltheores:raw_osmium',
        iridium: 'alltheores:raw_iridium',
        desh: 'ad_astra:raw_desh',
        ostrum: 'ad_astra:raw_ostrum',
        calorite: 'ad_astra:raw_calorite',
        debris: 'minecraft:ancient_debris',
        crimson_iron: 'silentgear:raw_crimson_iron',
        ferricore: 'justdirethings:raw_ferricore',
        blazegold: 'justdirethings:raw_blazegold',
        eclipsealloy: 'justdirethings:raw_eclipsealloy',
    },
};

const oreSetups = {
    draconium: {
        ore: 'draconicevolution:overworld_draconium_ore',
        oreDeepslate: 'draconicevolution:deepslate_draconium_ore',
        oreNetherrack: 'draconicevolution:nether_draconium_ore',
        oreEndstone: 'draconicevolution:end_draconium_ore'
    },
    allthemodium: { ore: 'allthemodium:allthemodium_ore', oreDeepslate: 'allthemodium:allthemodium_slate_ore' },
    vibranium: { oreNetherrack: 'allthemodium:vibranium_ore' },
    unobtainium: { oreEndstone: 'allthemodium:unobtainium_ore' },
    iesnium: { oreNetherrack: 'occultism:iesnium_ore' },
    hellforged: { ore: 'bloodmagic:dungeon_ore' },
    crimson_iron: { oreNetherrack: 'silentgear:crimson_iron_ore' },
    azure_silver: { oreEndstone: 'silentgear:azure_silver_ore' },
    mithril: { ore: 'irons_spellbooks:mithril_ore', oreDeepslate: 'irons_spellbooks:deepslate_mithril_ore' },
    desh: { oreDeepslate: 'ad_astra:deepslate_desh_ore' },
    ostrum: { oreDeepslate: 'ad_astra:deepslate_ostrum_ore' },
    calorite: { oreDeepslate: 'ad_astra:deepslate_calorite_ore' },
    ferricore: { ore: 'justdirethings:raw_ferricore_ore' },
    blazegold: { ore: 'justdirethings:raw_blazegold_ore' },
    eclipsealloy: { ore: 'justdirethings:raw_eclipsealloy_ore' },
    zinc: { ore: 'alltheores:zinc_ore', oreDeepslate: 'alltheores:deepslate_zinc_ore', oreNetherrack: 'alltheores:nether_zinc_ore' },
    uranium: { ore: 'alltheores:uranium_ore', oreDeepslate: 'alltheores:deepslate_uranium_ore', oreNetherrack: 'alltheores:nether_uranium_ore' },
    iridium: { ore: 'alltheores:iridium_ore', oreDeepslate: 'alltheores:deepslate_iridium_ore', oreNetherrack: 'alltheores:nether_iridium_ore' },
    osmium: null,
    debris: null,
};
const allOrePrefixes = [
    
    'ore', 'oreDeepslate', 'oreNetherrack', 'oreEndstone',
    'oreSand', 'oreRedSand', 'oreGravel', 'oreTuff', 'oreBasalt', 'oreBlackstone',    
    'oreGranite', 'oreDiorite', 'oreAndesite', 'oreRedGranite', 'oreMarble',

];

const debug = false;
const setupOres = (matName, variants) => {    

    let mat = GTMaterials.get(matName);
    if (!mat) return;    
    allOrePrefixes.forEach(prefixStr => {
        let prefixObj;
    
        try {            
            prefixObj = TagPrefix[prefixStr];
        } catch (e) {            
            if (debug){console.warn(`[GTORE] ${matName} Prefix object not found for prefix ${prefixStr}`);}
            return; 
        }

        if (!prefixObj){
            if (debug){console.warn(`[GTORE] ${matName} Prefix object not found for prefix ${prefixStr}`);}
            return;
        } 
        
        if (variants && variants[prefixStr]) {
            prefixObj.setIgnored(mat, variants[prefixStr]);
            if (debug){console.warn(`[GTORE] Setting ignored for material ${matName} with prefix ${prefixStr} and variant ${variants[prefixStr]}`);}
        } else {
            prefixObj.setIgnored(mat);
            if (debug){console.warn(`[GTORE] Setting ignored for material ${matName} with prefix ${prefixStr} and no specific variant`);}
        }
    });
};


// For arrays shaped like { name, oItems: [...] }, with a function building each item ID
const ignoreFromList = (list, buildId) => {
    list.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (!gtMat || !mat.oItems) return;
        mat.oItems.forEach(type => {
            if (TagPrefix[type]) TagPrefix[type].setIgnored(gtMat, buildId(mat, type));
        });
    });
};

const registerNewOres = () => {
    newOres.forEach(mat => {
        let material = GTMaterials.get(mat.name);

        if (material && mat.byproducts) {

            // 1. Create the Java ArrayList using the properly loaded KubeJS 6 class
            let javaList = new ArrayList();
            mat.byproducts.forEach(bp => {
                let gtMat = GTMaterials.get(bp);
                if (gtMat) {
                    javaList.add(gtMat);
                }
            });

            if (material.hasProperty(PropertyKey.ORE)) {
                material.removeProperty(PropertyKey.ORE);
            }

            let ore_prop = new OreProperty();

            // 2. Force Rhino to use the Collection method specifically to avoid ambiguity            
            ore_prop['setOreByProducts(java.util.Collection)'](javaList);

            material.setProperty(PropertyKey.ORE, ore_prop);
        }
    });
};

//adding ore processing for existing ores
const addOreProcessing = (rawOre, biproducts) => {
    let material = GTMaterials.get(rawOre);
    if (!material) return;

    let ore_prop = material.hasProperty(PropertyKey.ORE)
        ? material.getProperty(PropertyKey.ORE)
        : new OreProperty();

    if (biproducts && biproducts.length > 0) {
        let javaList = new ArrayList();
        biproducts.forEach(bp => {
            let gtMat = GTMaterials.get(bp);
            if (gtMat) javaList.add(gtMat);
        });
        ore_prop['setOreByProducts(java.util.Collection)'](javaList);
    }

    if (!material.hasProperty(PropertyKey.ORE)) {
        material.setProperty(PropertyKey.ORE, ore_prop);
    }
};

//atm trio tools
function overwriteToolStats(materialName, speed, damage, durability, harvestLevel) {
    let mat = GTMaterials.get(materialName);

    if (mat != null) {
        if (mat.hasProperty(PropertyKey.TOOL)) {
            mat.removeProperty(PropertyKey.TOOL);
        }
        let newProps = ToolProperty.Builder.of(speed, damage, durability, harvestLevel,
            [
                GTToolType.PICKAXE,
                GTToolType.AXE,
                GTToolType.SHOVEL,
                GTToolType.HOE,
                GTToolType.SWORD,
                GTToolType.KNIFE,
                GTToolType.HARD_HAMMER,
                GTToolType.CROWBAR,
                GTToolType.SPADE,
                GTToolType.BUTCHERY_KNIFE,
                GTToolType.FILE,
                GTToolType.MORTAR,
                GTToolType.MINING_HAMMER,
                GTToolType.SAW
            ]
        )
            .unbreakable()
            .build();
        mat.setProperty(PropertyKey.TOOL, newProps);
    }
}

// ---------- The shared unification pass ----------
const applyUnification = () => {
    adMats.forEach(mat => {
        let m = GTMaterials.get(mat.name);
        TagPrefix.ingot.setIgnored(m, `ad_astra:${mat.name}_ingot`);
        TagPrefix.nugget.setIgnored(m, `ad_astra:${mat.name}_nugget`);
        TagPrefix.plate.setIgnored(m, `ad_astra:${mat.name}_plate`);
        TagPrefix.block.setIgnored(m, `ad_astra:${mat.name}_block`);
    });

    ignoreFromList(erMaterials, (mat, type) => `bigreactors:${mat.name}_${type}`);
    ignoreFromList(mekanism, (mat, type) => `${mat.namespace}:${type}_${mat.name}`);
    ignoreFromList(otherElements, (mat, type) => `${mat.namespace}:${mat.name}_${type}`);
    ignoreFromList(unification, (mat, type) => `${mat.namespace}:${mat.name}_${type}`);

    chalks.forEach(chalk => {
        let rawColor = chalk.name.replace('_chalk', '');
        let color = (rawColor === 'yellow') ? 'gold' : rawColor;
        TagPrefix.gem.setIgnored(GTMaterials.get(chalk.name), `occultism:chalk_${color}`);
    });

    Object.keys(ignoredItems).forEach(prefixName => {
        let prefix = TagPrefix[prefixName];
        let entries = ignoredItems[prefixName];
        Object.keys(entries).forEach(matName => {
            let mat = GTMaterials.get(matName);
            if (mat) prefix.setIgnored(mat, entries[matName]);
        });
    });
    Object.keys(oreSetups).forEach(matName => setupOres(matName, oreSetups[matName]));
};


GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    const adAstraPlanets = ['moon', 'mars', 'venus', 'mercury'];

    adAstraPlanets.forEach(planet => {
        event.create(planet)
            .targets(
                `ad_astra:${planet}_stone`,
                `ad_astra:${planet}_sand`,

            )
            .dimensions(`ad_astra:${planet}`);
    });

    event.create('glacio')
        .targets(
            `ad_astra:glacio_stone`,
            `ad_astra:glacio_ice`,
        )
        .dimensions(`ad_astra:glacio`);    
});

StartupEvents.postInit(event => {
    applyUnification();
});


GTCEuStartupEvents.materialModification(event => {
    
    applyUnification();
    registerNewOres();
    

    

    addOreProcessing('osmiridium', ['ruthenium']);
    addOreProcessing('monazite', ['rare_earth', 'gadolinium', 'neodymium']);
    addOreProcessing('bastnasite', ['rare_earth', 'gadolinium', 'neodymium']);
    addOreProcessing('iridium', ['osmium_tetroxide', 'rhodium_sulfate']);
    addOreProcessing('uranium', ['thorium', 'plutonium']);
    addOreProcessing('zinc', ['cadmium', 'lead', 'silver']);
    addOreProcessing('osmium', ['nickel', 'iron'])
    addOreProcessing('desh', ['ilmenite', 'aluminium', 'iron']);
    addOreProcessing('ostrum', ['hematite', 'sulfur', 'magnesium']);
    addOreProcessing('calorite', ['sulfur', 'lead', 'basalt']);
    addOreProcessing('etrium', ['blue_ice', 'lapis', 'etrium']);
    addOreProcessing('debris', ['gold', 'sulfur', 'nether_quartz']);
    addOreProcessing('nether_star', ['nether_quartz', 'glowstone', 'sulfur']);

    addOreProcessing('crimson_iron', ['iron', 'redstone', 'nether_quartz']);
    addOreProcessing('azure_silver', ['silver', 'lapis', 'ender_pearl']);
    addOreProcessing('allthemodium', ['gold', 'diamond', 'allthemodium']);
    addOreProcessing('vibranium', ['allthemodium', 'emerald', 'vibranium']);
    addOreProcessing('unobtainium', ['vibranium', 'amethyst', 'unobtainium']);
    addOreProcessing('draconium', ['ender_pearl', 'obsidian', 'draconium']);
    addOreProcessing('iesnium', ['silver', 'obsidian', 'iesnium']);
    addOreProcessing('hellforged', ['coagulite', 'gold', 'hellforged']);
    addOreProcessing('ferricore', ['iron', 'nickel', 'ferricore']);
    addOreProcessing('blazegold', ['gold', 'blaze', 'ferricore']);
    addOreProcessing('eclipsealloy', ['blazegold', 'ender_pearl', 'obsidian']);


    overwriteToolStats('allthemodium', 16.0, 6.0, 0, 5);
    overwriteToolStats('vibranium', 20.0, 8.0, 0, 6);
    overwriteToolStats('unobtainium', 24.0, 10.0, 0, 7);

    const singularityMaterials = [
        'beryllium',
        'allthemodium',
        'vibranium',
        'unobtainium',
        'lapotron',
        'hellforged',
        'iesnium',
        'compressed_iron',
        'source',
        'mana_essence'
    ];

    //singularity materials
    singularityMaterials.forEach(material => {
        GTMaterials.get(material).addFlags(CMMEMaterialFlags.GENERATE_SINGULARITY);
    });
    GTMaterials.get('rhodium_plated_palladium').addFlags(GTMaterialFlags.GENERATE_GEAR);
    GTMaterials.get('darmstadtium').addFlags(GTMaterialFlags.GENERATE_GEAR);


    GTMaterials.get('polyimide').setComponents(
        GTMaterials.get('pyromellitic_dianhydride').multiply(1),
        GTMaterials.get('oxydianiline').multiply(1)
    );

    GTMaterials.get('adipic_acid').setComponents(
        GTMaterials.get('cyclohexanone').multiply(1),
        GTMaterials.get('nitric_acid').multiply(2)
    );

    GTMaterials.get('hexamethylenediamine').setComponents(
        GTMaterials.get('adiponitrile').multiply(1),
        GTMaterials.get('hydrogen').multiply(4)
    );

    GTMaterials.get('neoprene').setComponents(
        GTMaterials.get('chloroprene').multiply(4)
    );
    
    GTMaterials.get('bismuth_strontium_calcium_copper_oxide').setComponents(
        GTMaterials.get('bismuth_oxide').multiply(1),
        GTMaterials.get('strontium_carbonate').multiply(2),
        GTMaterials.get('quicklime').multiply(1),
        GTMaterials.get('copper_oxide').multiply(2)
    )

});


const dimensions = [
    { name: 'bloodmagic:dungeon', displayName: 'Blood Dungeon', icon: 'ad_astra:moon_globe', tier: 4 },
    { name: 'allthemodium:mining', displayName: 'Mining Dimension', icon: 'allthetweaks:atm_star', tier: 0 },
    { name: 'deeperdarker:otherside', displayName: 'Deeper Darker', icon: 'minecraft:bedrock', tier: 0 },
    { name: 'ad_astra:moon', displayName: 'Moon', icon: 'ad_astra:moon_globe', tier: 1 },
    { name: 'ad_astra:mars', displayName: 'Mars', icon: 'ad_astra:mars_globe', tier: 1 },
    { name: 'ad_astra:mercury', displayName: 'Mercury', icon: 'ad_astra:mercury_globe', tier: 2 },
    { name: 'ad_astra:venus', displayName: 'Venus', icon: 'ad_astra:venus_globe', tier: 2 },
    { name: 'ad_astra:glacio', displayName: 'Glacio', icon: 'ad_astra:glacio_globe', tier: 3 },
    { name: 'planetsplus:ganymede', displayName: 'Ganymede', icon: 'supplementaries:globe_sepia', tier: 5 },
    { name: 'charon', displayName: 'Charon', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'diater', displayName: 'Diater', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'dune', displayName: 'Dune', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'europa', displayName: 'Europa', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'galia', displayName: 'Galia', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'io', displayName: 'Io', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'jada', displayName: 'Jada', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'pluto', displayName: 'Pluto', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'soera', displayName: 'Soera', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'titan', displayName: 'Titan', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'vonic', displayName: 'Vonic', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'vulcan', displayName: 'Vulcan', icon: 'supplementaries:globe_sepia', tier: 4 }
];

GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {
    dimensions.forEach(dim => {
        event.create(dim.name)
            .iconSupplier(() => Item.of(dim.icon).getItem())
            .tier(dim.tier)
            .overrideName(dim.displayName);
    });
});



GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {

    event.create("infinity").parent(GTMaterialIconSet.SHINY)

})