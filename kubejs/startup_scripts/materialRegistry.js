// priority: 500
// @ts-nocheck
const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
const GasTier = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier')
const WireProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties')
const FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const FluidState = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidState')
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

const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA

MaterialDef.COIL_TEMPS = {
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

function MaterialDef(name) {
    this.name = name;
    this.traits = {};
    this.unifyMap = null;
    this.byproductList = null;
}

MaterialDef.ALL_ORE_PREFIXES = ['ore', 'oreDeepslate', 'oreNetherrack', 'oreEndstone', 'oreSand', 'oreRedSand', 'oreGravel', 'oreTuff', 'oreBasalt', 'oreBlackstone', 'oreGranite', 'oreDiorite', 'oreAndesite', 'oreRedGranite', 'oreMarble'];

// ---- internal helpers ----
MaterialDef.prototype.getVoltage = function (v) {
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

MaterialDef.prototype.getGasTier = function (voltage) {
    if (voltage <= 512) return GasTier.LOW;
    if (voltage <= 8192) return GasTier.MID;
    if (voltage <= 32768) return GasTier.HIGH;
    if (voltage <= 131072) return GasTier.HIGHER;
    return GasTier.HIGHEST;
};

MaterialDef.prototype.getCoilVoltage = function (coil) {
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

// ---- shape ----
MaterialDef.prototype.dust = function () { this.traits.dust = true; return this; };
MaterialDef.prototype.ingot = function () { this.traits.ingot = true; return this; };
MaterialDef.prototype.gem = function () { this.traits.gem = true; return this; };
MaterialDef.prototype.fluid = function () { this.traits.fluid = true; return this; };
MaterialDef.prototype.gas = function () { this.traits.gas = true; return this; };
MaterialDef.prototype.plasma = function () { this.traits.plasma = true; return this; };
MaterialDef.prototype.ore = function (oreMultiplier, byproductMultiplier) {
    
    this.traits.ore = { oreMultiplier: oreMultiplier || 2, byproductMultiplier: byproductMultiplier || 1 };
    return this;
};
MaterialDef.prototype.element = function (e) { this.traits.element = e; return this; };

// ---- appearance / chemistry ----
MaterialDef.prototype.color = function (c) { this.traits.color = c; return this; };
MaterialDef.prototype.iconSet = function (s) { this.traits.iconSet = s; return this; };
MaterialDef.prototype.formula = function (f) { this.traits.formula = f; return this; };
MaterialDef.prototype.components = function (c) { this.traits.components = c; return this; };

// ---- raw flags + shortcuts ----
MaterialDef.prototype.flags = function () {
    let f = Array.prototype.slice.call(arguments);
    if (f.length === 1 && Array.isArray(f[0])) {
        f = f[0];
    }
    this.traits.flags = (this.traits.flags || []).concat(f);
    return this;
};
MaterialDef.prototype.noDecomp = function () { return this.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); };
MaterialDef.prototype.electroDecomp = function () { return this.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING); };   // optional: force the electrolyzer
MaterialDef.prototype.centrifugeDecomp = function () { return this.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING); }; // optional: force the centrifuge
MaterialDef.prototype.noSmelting = function () { return this.flags(GTMaterialFlags.NO_SMELTING); };
MaterialDef.prototype.noBlocks = function () { return this.flags(GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES); };
MaterialDef.prototype.singularity = function () { return this.flags(CMMEMaterialFlags.GENERATE_SINGULARITY); };
MaterialDef.prototype.ignoreAllOrePrefixes = function () { this.traits.ignoreAllOrePrefixes = true; return this; };

// ---- presets ----
MaterialDef.prototype.lens = function () {
    this.dust().fluid().gem();
    return this.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS);
};
MaterialDef.prototype.polymer = function () {
    this.traits.polymer = true;   // the raw GTCEU polymer shape
    this.ingot().fluid();
    return this.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL);
};

MaterialDef.prototype.materialsBasic = function () {
    return this.flags(
        GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FOIL
    );
};

MaterialDef.prototype.materialsAll = function () {
    return this.flags(
        GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROUND,
        GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.GENERATE_ROTOR
    );
};

// ---- electrical / thermal / mechanical (all take one options object) ----
MaterialDef.prototype.cable = function (opts) {
    opts = opts || {};
    this.traits.cable = { voltage: this.getVoltage(opts.voltage), loss: opts.loss || 0, superconductor: opts.superconductor || false };
    this.flags(GTMaterialFlags.GENERATE_FINE_WIRE);
    return this;
};
MaterialDef.prototype.blast = function (opts) {
    opts = opts || {};
    this.traits.blast = { temp: opts.temp, eut: opts.eut, duration: opts.duration };
    return this;
};
MaterialDef.prototype.rotor = function (opts) {
    opts = opts || {};
    this.traits.rotor = { speed: opts.speed, power: opts.power, efficiency: opts.efficiency, durability: opts.durability };
    return this;
};
MaterialDef.prototype.pipe = function (opts) {
    opts = opts || {};
    this.traits.pipe = {
        maxFluidTemperature: opts.maxFluidTemperature || 16384,
        throughput: opts.throughput || 10800,
        gasProof: typeof opts.gasProof === 'undefined' ? true : opts.gasProof
    };
    return this;
};

// ---- structural (spawns a second material) ----
MaterialDef.prototype.magnetic = function () { this.traits.magnetic = true; return this; };
MaterialDef.prototype.modify = function () { this.traits.isModification = true; return this; };

// ---- resolved in later phases ----
MaterialDef.prototype.byproducts = function (list) { this.byproductList = list; return this; };
MaterialDef.prototype.unify = function (map) { this.unifyMap = map; return this; };

MaterialDef.prototype.removeFlags = function () {
    let f = Array.prototype.slice.call(arguments);
    if (f.length === 1 && Array.isArray(f[0])) f = f[0];
    this.traits.removeFlags = (this.traits.removeFlags || []).concat(f);
    return this;
};
MaterialDef.prototype.wireMod = function (v) { this.traits.wireMod = v; return this; };
MaterialDef.prototype.blastCoil = function (t) { this.traits.blastCoil = t; return this; };
MaterialDef.prototype.polymerMod = function () { this.traits.polymer = true; return this; }; // sets POLYMER property only, no side effects (unlike .polymer())


// ================= phase 1: GTCEuStartupEvents.registry('gtceu:material', ...) =================
MaterialDef.prototype.register = function (event) {
    if (this.traits.isModification) return;
    let b = event.create(this.name);
    if (this.traits.color !== undefined) b.color(this.traits.color);
    if (this.traits.iconSet) b.iconSet(GTMaterialIconSet[this.traits.iconSet] || this.traits.iconSet);

    if (this.traits.dust) b.dust();
    if (this.traits.ingot) b.ingot();
    if (this.traits.gem) b.gem();
    if (this.traits.fluid) b.fluid();
    if (this.traits.gas) b.gas();
    if (this.traits.plasma) b.plasma();    
    if (this.traits.ore) b.ore(this.traits.ore.oreMultiplier, this.traits.ore.byproductMultiplier);
    if (this.traits.polymer) b.polymer();
    if (this.traits.element) b.element(this.traits.element);
    if (this.traits.formula) b.formula(this.traits.formula);

    if (this.traits.cable) {
        b.cableProperties(this.traits.cable.voltage, 1, this.traits.cable.loss, this.traits.cable.superconductor);
    }
    if (this.traits.blast) {
        b.blastTemp(this.traits.blast.temp, this.getGasTier(this.traits.blast.eut), this.traits.blast.eut, this.traits.blast.duration);
    }
    if (this.traits.rotor) {
        b.rotorStats(this.traits.rotor.speed, this.traits.rotor.power, this.traits.rotor.efficiency, this.traits.rotor.durability);
    }
    if (this.traits.pipe) {
        b.fluidPipeProperties(this.traits.pipe.maxFluidTemperature, this.traits.pipe.throughput, this.traits.pipe.gasProof);
    }
    if (this.traits.flags) this.traits.flags.forEach(f => b.flags(f));

    if (this.traits.magnetic) {
        let magneticBuilder = event.create(`magnetic_${this.name}`)
            .ingot()
            .dust()
            .color(this.traits.color)
            .iconSet(GTMaterialIconSet['MAGNETIC'])
            .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE);
        if (this.traits.element) magneticBuilder.element(this.traits.element);
    }
};

// ================= phase 2: StartupEvents.postInit =================
MaterialDef.prototype.applyUnification = function () {
    let mat = GTMaterials.get(this.name);
    if (!mat) return;

    if (this.traits.ignoreAllOrePrefixes) {
        MaterialDef.ALL_ORE_PREFIXES.forEach(prefixStr => {
            let prefixObj;
            try { prefixObj = TagPrefix[prefixStr]; } catch (e) { return; }
            if (prefixObj) prefixObj.setIgnored(mat);
        });
    }

    if (!this.unifyMap) return;
    Object.keys(this.unifyMap).forEach(prefixName => {
        if (!TagPrefix[prefixName]) return;
        let val = this.unifyMap[prefixName];
        if (val === true) {
            TagPrefix[prefixName].setIgnored(mat);
        } else {
            TagPrefix[prefixName].setIgnored(mat, val);
        }
    });
};

// ================= phase 3: GTCEuStartupEvents.materialModification =================
MaterialDef.prototype.applyModification = function () {
    let mat = GTMaterials.get(this.name);
    if (!mat) return;

    if (this.traits.isModification) {
        if (this.traits.dust && !mat.hasProperty(PropertyKey.DUST)) mat.setProperty(PropertyKey.DUST, new DustProperty());
        if (this.traits.ingot && !mat.hasProperty(PropertyKey.INGOT)) mat.setProperty(PropertyKey.INGOT, new IngotProperty());
        if (this.traits.gem && !mat.hasProperty(PropertyKey.GEM)) mat.setProperty(PropertyKey.GEM, new GemProperty());
        if (this.traits.fluid && !mat.hasProperty(PropertyKey.FLUID)) mat.setProperty(PropertyKey.FLUID, new FluidProperty(FluidStorageKeys.LIQUID, new FluidBuilder()));        
        let fluidProp = mat.getProperty(PropertyKey.FLUID);
        if (fluidProp) {
            if (this.traits.plasma) fluidProp.enqueueRegistration(FluidStorageKeys.PLASMA, new FluidBuilder().state(FluidState.PLASMA));
            if (this.traits.gas) fluidProp.enqueueRegistration(FluidStorageKeys.GAS, new FluidBuilder().state(FluidState.GAS));
        }
        
        if (this.traits.polymer) mat.setProperty(PropertyKey.POLYMER, new PolymerProperty());
        if (this.traits.flags) this.traits.flags.forEach(f => mat.addFlags(f));

        if (this.traits.removeFlags) {
            let mrp = mat.getFlags();
            let flagsField = mrp.getClass().getDeclaredField("flags");
            flagsField.setAccessible(true);
            let activeFlags = flagsField.get(mrp);
            this.traits.removeFlags.forEach(f => activeFlags.remove(f));
        }

        if (this.traits.wireMod) mat.setProperty(PropertyKey.WIRE, new WireProperties(this.traits.wireMod, 1, 0));

        if (this.traits.blastCoil) {
            let bVolts = this.getCoilVoltage(this.traits.blastCoil);
            let mbp = new BlastProperty();
            mbp.setBlastTemperature(this.traits.blastCoil);
            mbp.setDurationOverride(1200);
            mbp.setEUtOverride(bVolts);
            mbp.setGasTier(this.getGasTier(bVolts));
            mbp.setVacuumDurationOverride(120);
            mbp.setVacuumEUtOverride(bVolts);
            mat.setProperty(PropertyKey.BLAST, mbp);
        }

        if (this.traits.toolStats) {
            if (mat.hasProperty(PropertyKey.TOOL)) mat.removeProperty(PropertyKey.TOOL);
            let newProps = ToolProperty.Builder.of(this.traits.toolStats.speed, this.traits.toolStats.damage, this.traits.toolStats.durability, this.traits.toolStats.harvestLevel,
                [GTToolType.PICKAXE, GTToolType.AXE, GTToolType.SHOVEL, GTToolType.HOE, GTToolType.SWORD, GTToolType.KNIFE, GTToolType.HARD_HAMMER, GTToolType.CROWBAR, GTToolType.SPADE, GTToolType.BUTCHERY_KNIFE, GTToolType.FILE, GTToolType.MORTAR, GTToolType.MINING_HAMMER, GTToolType.SAW]
            ).unbreakable().build();
            mat.setProperty(PropertyKey.TOOL, newProps);
        }
    }

    if (this.traits.components) {
        let parts = this.traits.components.split(', ').map(function (p) {
            p = p.trim();
            let pieces = p.split('x ');
            return GTMaterials.get(pieces[1]).multiply(parseInt(pieces[0]));
        });
        mat.setComponents.apply(mat, parts);
    }

    if (this.byproductList && this.byproductList.length > 0) {
        let javaList = new ArrayList();
        this.byproductList.forEach(bp => {
            let gtMat = GTMaterials.get(bp);
            if (gtMat) javaList.add(gtMat);
        });

        if (this.traits.isModification) {
            let oreProp = mat.hasProperty(PropertyKey.ORE) ? mat.getProperty(PropertyKey.ORE) : new OreProperty();
            oreProp['setOreByProducts(java.util.Collection)'](javaList);
            if (!mat.hasProperty(PropertyKey.ORE)) mat.setProperty(PropertyKey.ORE, oreProp);
        } else {
            if (mat.hasProperty(PropertyKey.ORE)) mat.removeProperty(PropertyKey.ORE);
            let oreProp = new OreProperty();
            oreProp['setOreByProducts(java.util.Collection)'](javaList);
            mat.setProperty(PropertyKey.ORE, oreProp);
        }
    }
};



// ---- decomposition (phase 4, runs after every property modification) ----
// GT only picks a decomposition type when a material is created, before our components exist, so we do it here.
// Rule: a material with components decomposes unless it has .noDecomp(). Centrifuge if every component has an ingot, electrolyzer otherwise (GT's own rule).
MaterialDef.prototype.applyDecomposition = function () {
    if (!this.traits.components || this.traits.isModification) return;
    let mat = GTMaterials.get(this.name);
    if (!mat) return;
    if (mat.hasFlag(GTMaterialFlags.DISABLE_DECOMPOSITION)) return;
    if (mat.hasFlag(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING) || mat.hasFlag(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)) return;
    let list = mat.getMaterialComponents();
    let allIngots = true;
    for (let i = 0; i < list.size(); i++) {
        if (!list.get(i).material().hasProperty(PropertyKey.INGOT)) allIngots = false;
    }
    mat.addFlags(allIngots ? GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING : GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING);
};

const materials = [
    new MaterialDef('antimony_telluride').dust().color(0xB8A8C8).components('2x antimony, 3x tellurium'),

    new MaterialDef('blutonium')
        .color(0x14147b).iconSet('RADIOACTIVE').ingot().dust().materialsBasic()
        .unify({ ingot: 'bigreactors:blutonium_ingot', dust: 'bigreactors:blutonium_dust', block: 'bigreactors:blutonium_block' }),

    new MaterialDef('cyanite')
        .color(0x456e83).iconSet('RADIOACTIVE').ingot().dust().materialsBasic()
        .unify({ ingot: 'bigreactors:cyanite_ingot', dust: 'bigreactors:cyanite_dust', block: 'bigreactors:cyanite_block' }),

    new MaterialDef('magentite')
        .color(0xed29ed).iconSet('RADIOACTIVE').ingot().dust().materialsBasic()
        .unify({ ingot: 'bigreactors:magentite_ingot', dust: 'bigreactors:magentite_dust', block: 'bigreactors:magentite_block' }),

    new MaterialDef('ludicrite')
        .color(0xaa47dd).iconSet('RADIOACTIVE').ingot().dust().materialsBasic()
        .unify({ ingot: 'bigreactors:ludicrite_ingot', dust: 'bigreactors:ludicrite_dust', block: 'bigreactors:ludicrite_block' }),

    new MaterialDef('ridiculite')
        .color(0xe5c1ea).iconSet('RADIOACTIVE').ingot().dust().materialsBasic()
        .unify({ ingot: 'bigreactors:ridiculite_ingot', dust: 'bigreactors:ridiculite_dust', block: 'bigreactors:ridiculite_block' }),

    new MaterialDef('inanite')
        .color(0xf12664).iconSet('RADIOACTIVE').ingot().dust().materialsBasic()
        .unify({ ingot: 'bigreactors:inanite_ingot', dust: 'bigreactors:inanite_dust', block: 'bigreactors:inanite_block' }),

    new MaterialDef('insanite')
        .color(0x38d58d).iconSet('RADIOACTIVE').ingot().dust().materialsBasic()
        .unify({ ingot: 'bigreactors:insanite_ingot', dust: 'bigreactors:insanite_dust', block: 'bigreactors:insanite_block' }),

    new MaterialDef('etrium')
        .cable({ voltage: 8388608, superconductor: true })
        .dust().ingot().fluid().element('etrium').color(0x5ABFB5).iconSet('SHINY').materialsAll()
        .unify({ ingot: 'ad_astra:etrium_ingot', nugget: 'ad_astra:etrium_nugget', plate: 'ad_astra:etrium_plate', block: 'ad_astra:etrium_block', rod: 'ad_astra:etrium_rod' })
        .byproducts(['blue_ice', 'lapis', 'etrium']),

    new MaterialDef('desh')
        .dust().ingot().fluid().element('desh').color(0xD97B3F).iconSet('SHINY').materialsAll()
        .unify({ ingot: 'ad_astra:desh_ingot', nugget: 'ad_astra:desh_nugget', plate: 'ad_astra:desh_plate', block: 'ad_astra:desh_block', rawOre: 'ad_astra:raw_desh', oreDeepslate: 'ad_astra:deepslate_desh_ore' })
        .byproducts(['ilmenite', 'aluminium', 'iron']),

    new MaterialDef('ostrum')
        .dust().ingot().fluid().element('ostrum').color(0x8A6E78).iconSet('SHINY').materialsAll()
        .unify({ ingot: 'ad_astra:ostrum_ingot', nugget: 'ad_astra:ostrum_nugget', plate: 'ad_astra:ostrum_plate', block: 'ad_astra:ostrum_block', rawOre: 'ad_astra:raw_ostrum', oreDeepslate: 'ad_astra:deepslate_ostrum_ore' })
        .byproducts(['hematite', 'sulfur', 'magnesium']),

    new MaterialDef('calorite')
        .dust().ingot().fluid().element('calorite').color(0xBF2A3C).iconSet('SHINY').materialsAll()
        .unify({ ingot: 'ad_astra:calorite_ingot', nugget: 'ad_astra:calorite_nugget', plate: 'ad_astra:calorite_plate', block: 'ad_astra:calorite_block', rawOre: 'ad_astra:raw_calorite', oreDeepslate: 'ad_astra:deepslate_calorite_ore' })
        .byproducts(['sulfur', 'lead', 'basalt']),

    new MaterialDef('naquadria_stage_2').color(0x5A189A).iconSet('RADIOACTIVE').polymer().plasma(),

    new MaterialDef('naquadria_stage_3').color(0x00FFD5).iconSet('RADIOACTIVE').polymer().plasma(),

    new MaterialDef('naquadria_stage_4').color(0xFFC107).iconSet('RADIOACTIVE').polymer().plasma(),

    new MaterialDef('naquadria_awakened').color(0xFFC107).iconSet('RADIOACTIVE').polymer().plasma(),

    new MaterialDef('demon').color(0x00FFFF).iconSet('DIAMOND').gem()
        .unify({ gem: 'bloodmagic:defaultcrystal' }),

    new MaterialDef('steadfast').color(0xB0C4DE).iconSet('LAPIS').gem()
        .unify({ gem: 'bloodmagic:steadfastcrystal' }),

    new MaterialDef('corrosive').color(0x90EE90).iconSet('EMERALD').gem()
        .unify({ gem: 'bloodmagic:corrosivecrystal' }),

    new MaterialDef('vengeful').color(0xFFCCCB).iconSet('DIAMOND').gem()
        .unify({ gem: 'bloodmagic:vengefulcrystal' }),

    new MaterialDef('destructive').color(0xFFFFE0).iconSet('QUARTZ').gem()
        .unify({ gem: 'bloodmagic:destructivecrystal' }),

    new MaterialDef('eternal').color(0xFFFFE0).iconSet('SHINY').element('eternal').lens()
        .unify({ gem: 'forbidden_arcanus:eternal_stella' }),

    new MaterialDef('source').color(0xD662FF).iconSet('EMERALD').lens().singularity()
        .unify({ gem: 'ars_nouveau:source_gem' }),

    new MaterialDef('soul').color(0x3A4F6D).iconSet('GLASS').lens()
        .unify({ gem: 'occultism:soul_gem' }),

    new MaterialDef('fluix').noDecomp()
        .dust().fluid().ingot().color(0x8F5CCB).iconSet('SHINY')
        .cable({ voltage: 32, loss: 2, superconductor: false })
        .components('1x redstone, 1x certus_quartz, 1x nether_quartz')
        .unify({ dust: 'ae2:fluix_dust', gem: 'ae2:fluix_crystal' }),

    new MaterialDef('atm_star')
        .dust().fluid().ingot().color(0xFFC107).iconSet('SHINY').materialsAll()
        .cable({ voltage: 2097152, loss: 0, superconductor: true })
        .unify({ gem: 'allthetweaks:atm_star' }),

    new MaterialDef('dark_matter')
        .color(0x3b173f).iconSet('NETHERSTAR').lens()        
        .unify({ gemFlawless: true, gemExquisite: true, block: 'projecte:dark_matter_block', gem: 'projecte:dark_matter' }),

    new MaterialDef('red_matter')
        .color(0x7a0606).iconSet('NETHERSTAR').lens()
        .unify({ gemFlawless: true, gemExquisite: true, block: 'projecte:red_matter_block', gem: 'projecte:red_matter' }),

    new MaterialDef('dark_gem')
        .color(0x262626).iconSet('NETHERSTAR').gem()
        .unify({ gemFlawless: true, gemExquisite: true, gem: 'evilcraft:dark_gem', dust: 'evilcraft:dark_gem_crushed', block: 'evilcraft:dark_block' }),

    new MaterialDef('dark_power_gem')
        .color(0x2f0a0b).iconSet('NETHERSTAR').gem()
        .unify({ gemFlawless: true, gemExquisite: true, gem: 'evilcraft:dark_power_gem', block: 'evilcraft:dark_power_gem_block' }),

    new MaterialDef('umbral_steel').components('1x steel, 1x dark_gem').color(0x3A2457).iconSet('METALLIC').ingot().fluid().flags(GTMaterialFlags.GENERATE_PLATE).noSmelting()
        .blast({ temp: COIL_TEMPS.NICHROME, eut: MV, duration: 400 }),

    new MaterialDef('chaos_plastic').color(0x222222).iconSet('SHINY').polymer(),

    new MaterialDef('organic_polymer').color(0x647B82).iconSet('SHINY').polymer(),

    new MaterialDef('fluorozirconic_composite').noDecomp().color(0x4DD0E1).iconSet('SHINY').polymer().components('1x zirconium, 6x fluorine, 2x carbon').formula('ZrF6C2'),

    new MaterialDef('fifth_element').noDecomp().color(0xFF6600).iconSet('SHINY').polymer().components('1x elemental_water, 1x elemental_fire, 1x elemental_air, 1x elemental_earth'),

    new MaterialDef('polyimide').color(0xB8631E).iconSet('DULL').polymer().noDecomp().components('1x pyromellitic_dianhydride, 1x oxydianiline').formula('C22H16N2O7'),

    new MaterialDef('hydrogen_selenide').fluid().gas().color(0xDCDCDC).iconSet('METALLIC').components('2x hydrogen, 1x selenium').formula('H2Se'),

    new MaterialDef('ozone').noDecomp().fluid().gas().color(0x3366FF).iconSet('FLUID').components('3x oxygen').formula('O3'),

    new MaterialDef('carbon_tetroxide').fluid().gas().color(0x36454F).iconSet('METALLIC').noDecomp().components('1x carbon, 4x oxygen').formula('CO4'),

    new MaterialDef('compressed_air').fluid().gas().color(0x80C8F0).iconSet('FLUID'),

    new MaterialDef('terrazine').fluid().gas().color(0x4B0082).iconSet('RADIOACTIVE'),

    new MaterialDef('white_chalk').fluid().gem().color(0xF2EEE4).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_white' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('yellow_chalk').fluid().gem().color(0xFFD700).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_gold' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('purple_chalk').fluid().gem().color(0x9D00FF).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_purple' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('red_chalk').fluid().gem().color(0xFF0000).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_red' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('orange_chalk').fluid().gem().color(0xFFA500).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_orange' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('magenta_chalk').fluid().gem().color(0xFF00FF).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_magenta' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('light_blue_chalk').fluid().gem().color(0xADD8E6).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_light_blue' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('lime_chalk').fluid().gem().color(0x00FF00).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_lime' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('pink_chalk').fluid().gem().color(0xFFC0CB).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_pink' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('gray_chalk').fluid().gem().color(0x808080).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_gray' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('light_gray_chalk').fluid().gem().color(0xD3D3D3).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_light_gray' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('cyan_chalk').fluid().gem().color(0x00FFFF).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_cyan' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('blue_chalk').fluid().gem().color(0x0000FF).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_blue' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('brown_chalk').fluid().gem().color(0x8B4513).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_brown' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('green_chalk').fluid().gem().color(0x008000).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_green' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('black_chalk').fluid().gem().color(0x000000).iconSet('FLUID').noDecomp().noBlocks().unify({ gem: 'occultism:chalk_black' })
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true }),

    new MaterialDef('sugar_water').noDecomp().fluid().color(0xE8D9A0).iconSet('FLUID').formula('C48H90O45').components('4x sugar, 1x distilled_water'),

    new MaterialDef('cognizant_sanguine_ichor').fluid().color(0x6A0DAD).iconSet('FLUID'),

    new MaterialDef('stellar_sanguine_plasma').fluid().color(0xE0FFFF).iconSet('FLUID'),

    new MaterialDef('resonant_sanguine_void').fluid().color(0x191970).iconSet('FLUID'),

    new MaterialDef('insanium_infused_singularity').fluid().color(0x5e00a8).iconSet('DULL'),

    new MaterialDef('aetheric_sanguine_singularity').fluid().color(0xFFD700).iconSet('DULL'),

    new MaterialDef('refined_sanguine_plasma').fluid().color(0xFF4500).iconSet('FLUID'),

    new MaterialDef('liquid_draconic_essence').fluid().color(0xFF8C00).iconSet('FLUID'),

    new MaterialDef('gt_cracked_lpg').fluid().color(0xE1E1AF).iconSet('FLUID'),

    new MaterialDef('gt_cracked_kerosene').fluid().color(0xFFB300).iconSet('FLUID'),

    new MaterialDef('liquid_vengeance').fluid().color(0xB197C2).iconSet('FLUID'),

    new MaterialDef('saturated_life_fertilizer').fluid().color(0x4CAF50).iconSet('FLUID'),

    new MaterialDef('liquid_fertilizer').fluid().color(0x241105).iconSet('FLUID'),

    new MaterialDef('picoline').fluid().color(0x9E9B54).iconSet('FLUID').formula('C6H7N').components('6x carbon, 7x hydrogen, 1x nitrogen'),

    new MaterialDef('cyanopyridine').noDecomp().fluid().color(0x4A6B82).iconSet('FLUID').formula('C6H4N2').components('6x carbon, 4x hydrogen, 2x nitrogen'),

    new MaterialDef('acetaldehyde').noDecomp().fluid().color(0xC2B280).iconSet('FLUID').formula('C2H4O').components('1x ethylene, 1x oxygen'),

    new MaterialDef('primordial_sanguine_plasma').fluid().color(0x2E2E2E).iconSet('FLUID'),

    new MaterialDef('primordial_cosmic_soup').fluid().color(0xBF00FF).iconSet('FLUID'),

    new MaterialDef('unrefined_white_blood').fluid().color(0xF5F5FF).iconSet('FLUID'),

    new MaterialDef('ethereal_white_blood').fluid().color(0xF2EEFF).iconSet('FLUID'),

    new MaterialDef('unrefined_red_blood').fluid().color(0x8B0000).iconSet('FLUID'),

    new MaterialDef('liquid_pain_and_suffering').fluid().color(0x4B0082).iconSet('FLUID'),

    new MaterialDef('energized_glowing_catalyst').fluid().color(0xFFFACD).iconSet('FLUID'),

    new MaterialDef('destabilized_red_catalyst').fluid().color(0xFF0000).iconSet('FLUID'),

    new MaterialDef('essence_of_creation').fluid().color(0x7FFFD4).iconSet('FLUID'),

    new MaterialDef('essence_of_destruction').fluid().color(0x2F4F4F).iconSet('FLUID'),

    new MaterialDef('stable_life_essence').fluid().color(0xFF69B4).iconSet('FLUID'),

    new MaterialDef('saturated_tau').fluid().color(0xFF8C00).iconSet('FLUID'),

    new MaterialDef('liquid_dragon_breath').fluid().color(0xe577e3).iconSet('FLUID'),

    new MaterialDef('liquid_chaos').fluid().color(0x111111).iconSet('FLUID'),

    new MaterialDef('radioactive_acetate_slurry').fluid().color(0x99FF33).iconSet('RADIOACTIVE'),

    new MaterialDef('mixed_radioactive_concentrate').fluid().color(0xCCFF66).iconSet('FLUID'),

    new MaterialDef('diluted_acetic_acid').fluid().color(0xDDDDDD).iconSet('FLUID').noDecomp().formula('(C2H4O2)(H2O)').components('1x acetic_acid, 1x water'),

    new MaterialDef('radium_acetate').fluid().color(0xFFCC00).iconSet('FLUID').noDecomp().formula('Ra(C2H3O2)2').components('2x acetic_acid, 1x radium'),

    new MaterialDef('astatine_acetate').fluid().color(0x800080).iconSet('FLUID').noDecomp().formula('At(C2H3O2)2').components('2x acetic_acid, 1x astatine'),

    new MaterialDef('francium_acetate').fluid().color(0xFFF2DC).iconSet('FLUID').noDecomp().formula('Fr(C2H3O2)2').components('2x acetic_acid, 1x francium'),

    new MaterialDef('thorium_phosphate_solution').fluid().color(0x4B3621).iconSet('RADIOACTIVE').noDecomp().formula('ThPO6').components('1x thorium, 1x phosphorus, 6x oxygen'),

    new MaterialDef('germanium_tetrachloride').fluid().color(0x73877B).iconSet('FLUID').noDecomp().formula('GeCl4').components('1x germanium, 4x chlorine'),

    new MaterialDef('tellurous_acid').fluid().color(0x9FB6CD).iconSet('FLUID').noDecomp().formula('H2TeO3').components('2x hydrogen, 1x tellurium, 3x oxygen'),

    new MaterialDef('sodium_tellurite_solution').noDecomp().fluid().color(0xEEF2F5).iconSet('FLUID').formula('(Na2TeO3)(H2O)').components('2x sodium, 1x tellurium, 3x oxygen, 1x water'),

    new MaterialDef('peroxodisulfuric_acid').fluid().color(0xCCDDFF).iconSet('FLUID').formula('H2S2O8').components('2x sulfur, 6x oxygen, 2x hydrogen_peroxide'),

    new MaterialDef('sodium_germanate_solution').noDecomp().fluid().color(0xE8DCC8).iconSet('FLUID').formula('(Na2GeO3)(H2O)').components('2x sodium, 1x germanium, 3x oxygen, 1x water'),

    new MaterialDef('perrhenic_acid').fluid().color(0xDCD0FF).iconSet('FLUID').noDecomp().formula('HReO4').components('1x hydrogen, 1x rhenium, 4x oxygen'),

    new MaterialDef('unrefined_xylene').fluid().color(0xDEC77E).iconSet('FLUID'),

    new MaterialDef('rhenate_blend_fuel').fluid().color(0xCC6633).iconSet('FLUID'),

    new MaterialDef('xylene').fluid().color(0xEBD078).iconSet('FLUID'),

    new MaterialDef('sanguine_concentrate').fluid().color(0x8A0303).iconSet('FLUID'),

    new MaterialDef('conduit_binder').fluid().color(0x9D9A8D).iconSet('FLUID'),

    new MaterialDef('hexafluorozirconic_acid').fluid().color(0xCCFFFF).iconSet('FLUID').noDecomp().formula('H2ZrF6').components('2x hydrogen, 1x zirconium, 6x fluorine'),

    new MaterialDef('refined_seed_oil').fluid().color(0xE6E600).iconSet('FLUID'),

    new MaterialDef('crystallized_oil').fluid().color(0xFFFFF0).iconSet('FLUID'),

    new MaterialDef('empowered_oil').fluid().color(0xFFA500).iconSet('FLUID'),

    new MaterialDef('poison_agent').fluid().color(0x4A154B).iconSet('FLUID'),

    new MaterialDef('paralytic_agent').fluid().color(0x2D0C35).iconSet('FLUID').noDecomp(),

    new MaterialDef('mind_control_serum').noDecomp().fluid().color(0x00FFFF).iconSet('FLUID').components('1x terrazine, 1x mind_numbing_agent'),

    new MaterialDef('concentrated_dark_matter').fluid().color(0x1A0033).iconSet('FLUID').noDecomp().formula('CsH2O').components('1x caesium, 1x water'),

    new MaterialDef('activated_carbon_slurry').noDecomp().fluid().color(0x1A1A1A).iconSet('DULL').formula('CZnHCl').components('1x activated_carbon, 1x zinc, 1x hydrochloric_acid'),

    new MaterialDef('water_stage_1').noDecomp().fluid().color(0x33A1DE).iconSet('FLUID').formula('H2O').components('1x water'),

    new MaterialDef('water_stage_2').noDecomp().fluid().color(0x3366FF).iconSet('FLUID').formula('H2O').components('1x water'),

    new MaterialDef('water_stage_3').noDecomp().fluid().color(0x4682B4).iconSet('FLUID').formula('H2O').components('1x water'),

    new MaterialDef('water_stage_4').noDecomp().fluid().color(0x5F9EA0).iconSet('FLUID').formula('H2O').components('1x water'),

    new MaterialDef('water_stage_5').noDecomp().fluid().color(0xAFEEEE).iconSet('FLUID').formula('H2O').components('1x water'),

    new MaterialDef('water_stage_6').noDecomp().fluid().color(0x87CEEB).iconSet('FLUID').formula('H2O').components('1x water'),

    new MaterialDef('polyaluminium_chloride').fluid().color(0xCCCCCC).iconSet('DULL').noDecomp().formula('Al2(OH)3Cl3').components('2x aluminium_hydroxide, 3x hydrochloric_acid'),

    new MaterialDef('spent_flocculant_slurry').fluid().color(0x555555).iconSet('DULL').noDecomp().formula('Al2(OH)3Cl3').components('1x polyaluminium_chloride'),

    new MaterialDef('super_coolant').fluid().color(0x82C4E5).iconSet('FLUID'),

    new MaterialDef('purest_water').noDecomp().fluid().color(0x00BFFF).iconSet('FLUID').formula('H2O').components('1x water'),

    new MaterialDef('inert_gas_mixture').fluid().color(0x8899A6).iconSet('FLUID'),

    new MaterialDef('ionized_oxygen').fluid().color(0x3399FF).iconSet('FLUID'),

    new MaterialDef('niobium_pentachloride').fluid().color(0xFFF0C1).iconSet('FLUID').formula('NbCl5').components('1x niobium, 5x chlorine'),

    new MaterialDef('mixed_rare_earth_sulfate').fluid().color(0x8B7355).iconSet('FLUID').noDecomp().formula('YCeUTiFeS5O20').components('1x yttrium, 1x cerium, 1x uranium, 1x titanium, 1x iron, 5x sulfur, 20x oxygen'),

    new MaterialDef('light_rare_earth_sulfate').fluid().color(0xA89680).iconSet('FLUID').noDecomp().formula('YCeUTiNa3S5O20').components('1x yttrium, 1x cerium, 1x uranium, 1x titanium, 3x sodium, 5x sulfur, 20x oxygen'),

    new MaterialDef('heavy_rare_earth_sulfate').fluid().color(0x9C8A6E).iconSet('FLUID').noDecomp().formula('YCeUNa7S5O20').components('1x yttrium, 1x cerium, 1x uranium, 7x sodium, 5x sulfur, 20x oxygen'),

    new MaterialDef('final_rare_earth_sulfate').fluid().color(0x8C7B6A).iconSet('FLUID').noDecomp().formula('YCeNa13S5O23H6').components('1x yttrium, 1x cerium, 13x sodium, 5x sulfur, 23x oxygen, 6x hydrogen'),

    new MaterialDef('rare_earth_leach_residue').fluid().color(0xB8A8C8).iconSet('FLUID').noDecomp().formula('LaMgO3H3').components('1x lanthanum, 1x magnesium, 3x oxygen, 3x hydrogen'),

    new MaterialDef('alfheim_portal_fluid').fluid().color(0x66FF33).iconSet('FLUID').noDecomp(),

    new MaterialDef('tetrachloroethylene').fluid().color(0xF0F4F8).iconSet('FLUID').formula('C2Cl4').components('4x chlorine, 2x carbon'),

    new MaterialDef('rocket_fuel_stage_1').fluid().color(0x8A9A5B).iconSet('FLUID'),

    new MaterialDef('rocket_fuel_stage_2').fluid().color(0xE8F4F8).iconSet('FLUID'),

    new MaterialDef('rocket_fuel_stage_3').fluid().color(0xC4D7D1).iconSet('FLUID'),

    new MaterialDef('rocket_fuel_stage_4').fluid().color(0xFFF176).iconSet('FLUID'),

    new MaterialDef('ethylene_oxide').noDecomp().fluid().color(0xEAF2F8).iconSet('FLUID').formula('C2H4O').components('1x ethylene, 1x oxygen'),

    new MaterialDef('phenylacetaldehyde').noDecomp().fluid().color(0xFFF5D6).iconSet('FLUID').formula('C8H8O').components('1x phenyl, 1x acetaldehyde'),

    new MaterialDef('phenylalanine_nitrile').fluid().color(0xD4A373).iconSet('FLUID').noDecomp().formula('C9H10N2').components('9x carbon, 10x hydrogen, 2x nitrogen'),

    new MaterialDef('phenolic_resin').fluid().color(0x5C2E16).iconSet('FLUID').noDecomp().formula('C7H6O2').components('7x carbon, 6x hydrogen, 2x oxygen'),

    new MaterialDef('eucalyptus_oil').fluid().color(0xD4E8A8).iconSet('FLUID').noDecomp(),

    new MaterialDef('cineole').noDecomp().fluid().color(0xEAF6E4).iconSet('FLUID').formula('C10H18O').components('10x carbon, 18x hydrogen, 1x oxygen'),

    new MaterialDef('pinene').noDecomp().fluid().color(0xF2F0D8).iconSet('FLUID').formula('C10H16').components('10x carbon, 16x hydrogen'),

    new MaterialDef('exo_pinane_dimer').fluid().color(0xF7EFC8).iconSet('FLUID').noDecomp().formula('C20H36').components('20x carbon, 36x hydrogen'),

    new MaterialDef('terpene_jet_fuel').fluid().color(0xE8C547).iconSet('FLUID').noDecomp(),

    new MaterialDef('boron_slurry_fuel').fluid().color(0x5E5A3A).iconSet('FLUID').noDecomp(),

    new MaterialDef('pinene_dimer').fluid().color(0xD9C27A).iconSet('FLUID').noDecomp().formula('C20H32').components('20x carbon, 32x hydrogen'),

    new MaterialDef('hydrogenated_pinene_dimer').fluid().color(0xF0E6B8).iconSet('FLUID').noDecomp().formula('C20H36').components('20x carbon, 36x hydrogen'),

    new MaterialDef('isobornyl_acetate').fluid().color(0xEDE8D0).iconSet('FLUID').noDecomp().formula('C12H20O2').components('12x carbon, 20x hydrogen, 2x oxygen'),

    new MaterialDef('necrotic_acid').fluid().color(0x6B7A3A).iconSet('FLUID').components('4x witherite, 1x nether_star, 4x aqua_regia, 1x necrotic'),

    new MaterialDef('chloroprene').fluid().color(0xE0E8C8).iconSet('FLUID').noDecomp().formula('C4H6Cl').components('1x butadiene, 1x chlorine'),

    new MaterialDef('adiponitrile').fluid().color(0xD9D3E0).iconSet('FLUID').noDecomp().formula('C6H20N4O7').components('1x adipic_acid, 2x ammonia'),

    new MaterialDef('oxydianiline').fluid().color(0xD9C7A8).iconSet('FLUID').noDecomp().formula('C12H14N2O').components('2x aniline, 1x oxygen'),

    new MaterialDef('cyclohexanone').fluid().color(0xE0D8C0).iconSet('FLUID').noDecomp().formula('C6H12O').components('1x cyclohexane, 1x oxygen'),

    new MaterialDef('thermal_coolant').noDecomp().fluid().color(0x8EE3F0).iconSet('FLUID').components('1x water_stage_4, 1x gelid_cryotheum'),

    new MaterialDef('aniline').noDecomp().fluid().color(0xC9A876).iconSet('FLUID').formula('C6H5NH2').components('1x nitrobenzene, 3x hydrogen'),

    new MaterialDef('nitroaniline').noDecomp().fluid().color(0xE0B840).iconSet('FLUID').formula('C6H6N2O2').components('1x aniline, 1x nitration_mixture'),

    new MaterialDef('para_phenylenediamine').noDecomp().dust().fluid().color(0xB89060).iconSet('FLUID').formula('C6H8N2').components('1x nitroaniline, 3x hydrogen'),

    new MaterialDef('p_xylene').fluid().color(0xEBD078).iconSet('FLUID').formula('C8H10'),

    new MaterialDef('cobalt_naphthenate').fluid().color(0x6E5A30).iconSet('FLUID').noDecomp(),

    new MaterialDef('terephthalic_acid').noDecomp().fluid().color(0xF0F0E8).iconSet('FLUID').formula('C8H6O4').components('1x p_xylene, 3x oxygen'),

    new MaterialDef('dimethyl_terephthalate').noDecomp().fluid().color(0xE8E0C8).iconSet('FLUID').formula('C10H10O4').components('1x terephthalic_acid, 2x methanol'),

    new MaterialDef('sulfur_dichloride').fluid().color(0xC8A840).iconSet('FLUID').formula('SCl2').components('1x sulfur, 2x chlorine'),

    new MaterialDef('thionyl_chloride').fluid().color(0xE8D8A0).iconSet('FLUID').noDecomp().formula('SOCl2').components('1x sulfur_trioxide, 1x sulfur_dichloride'),

    new MaterialDef('terephthaloyl_chloride').dust().fluid().color(0xD8D0C0).iconSet('FLUID').noDecomp().formula('C8H4Cl2O2').components('1x dimethyl_terephthalate, 1x thionyl_chloride'),

    new MaterialDef('methylamine').noDecomp().fluid().color(0xE0E0D0).iconSet('FLUID').formula('CH5N').components('1x ammonia'),

    new MaterialDef('gamma_butyrolactone').fluid().color(0xEEE8D0).iconSet('FLUID').formula('C4H6O2'),

    new MaterialDef('n_methylpyrrolidone').noDecomp().fluid().color(0xF5EED8).iconSet('FLUID').formula('C5H9NO').components('1x methylamine, 1x gamma_butyrolactone'),

    new MaterialDef('tetrahydrofuran').fluid().color(0xE8F4F8).iconSet('FLUID').noDecomp().formula('C4H8O').components('1x gamma_butyrolactone, 1x water'),

    new MaterialDef('liquid_crystal_kevlar').fluid().color(0xC8A030).iconSet('FLUID').noDecomp().formula('C14H12Cl2N2O2').components('1x para_phenylenediamine, 1x terephthaloyl_chloride'),

    new MaterialDef('diaminodiphenylmethane').fluid().color(0xC8B090).iconSet('FLUID').noDecomp().formula('C7H9NO').components('1x aniline, 1x formaldehyde'),

    new MaterialDef('phosgene').fluid().color(0xC0C8C0).iconSet('FLUID').noDecomp().formula('COCl2').components('1x carbon_monoxide, 1x chlorine'),

    new MaterialDef('diphenylmethane_diisocyanate').dust().fluid().color(0xD0C8B8).iconSet('FLUID').noDecomp().formula('C8H9NO2Cl2').components('1x diaminodiphenylmethane, 1x phosgene'),

    new MaterialDef('ethylene_glycol').noDecomp().fluid().color(0xEEE0C0).iconSet('FLUID').formula('C2H6O2').components('1x ethylene, 2x oxygen, 2x hydrogen'),

    new MaterialDef('pentaerythritol').noDecomp().dust().fluid().color(0xF8F8F0).iconSet('DULL').formula('C5H12O4').components('4x formaldehyde'),

    new MaterialDef('kevlar_catalyst').dust().fluid().color(0x707888).iconSet('DULL').noDecomp(),

    new MaterialDef('polyurethane_resin').fluid().color(0xB09850).iconSet('FLUID').noDecomp().formula('C10H15NO4Cl2').components('1x diphenylmethane_diisocyanate, 1x ethylene_glycol'),

    new MaterialDef('maleic_anhydride').fluid().color(0xE8D040).iconSet('FLUID').noDecomp().formula('C4H2O3').components('1x benzene, 3x oxygen'),

    new MaterialDef('butanol').fluid().color(0xEBDCA0).iconSet('FLUID').formula('C4H9OH'),

    new MaterialDef('restonia').element('restonia').color(0xff0000).iconSet('RUBY').lens(),

    new MaterialDef('palis').element('palis').color(0x1a237e).iconSet('LAPIS').lens(),

    new MaterialDef('diamatine').element('diamatine').color(0x4fc3f7).iconSet('DIAMOND').lens(),

    new MaterialDef('void_crystal').element('void_crystal').color(0x212121).iconSet('LIGNITE').lens(),

    new MaterialDef('emeradic').element('emeradic').color(0x00e676).iconSet('EMERALD').lens(),

    new MaterialDef('enori').element('enori').color(0xf5f5f5).iconSet('QUARTZ').lens(),

    new MaterialDef('black_quartz').element('black_quartz').color(0x000000).iconSet('QUARTZ').lens(),

    new MaterialDef('empowered_restonia').element('restonia').color(0xff4d4d).iconSet('RUBY').gem(),

    new MaterialDef('empowered_palis').element('palis').color(0x534bae).iconSet('LAPIS').gem(),

    new MaterialDef('empowered_diamatine').element('diamatine').color(0x8bf6ff).iconSet('DIAMOND').gem(),

    new MaterialDef('empowered_void_crystal').element('void_crystal').color(0x484848).iconSet('LIGNITE').gem(),

    new MaterialDef('empowered_emeradic').element('emeradic').color(0x66ffa6).iconSet('EMERALD').gem(),

    new MaterialDef('empowered_enori').element('enori').color(0xf5f5f5).iconSet('QUARTZ').gem(),

    new MaterialDef('magebloom').dust().color(0xc14bfc).iconSet('DULL'),

    new MaterialDef('zirconium_lattice').noDecomp().dust().color(0x9FAFB5).iconSet('METALLIC').formula('Zr4NbIr').components('4x zirconium, 1x niobium, 1x iridium'),

    new MaterialDef('plascrete').dust().color(0xCED4D5).iconSet('DULL'),

    new MaterialDef('lanthanum_fluoride').dust().color(0xE8E8E8).iconSet('DULL').noDecomp().formula('LaF3').components('1x lanthanum, 3x fluorine'),

    new MaterialDef('lanthanum_hydroxide').dust().color(0xE8E0F0).iconSet('DULL').noDecomp().formula('La(OH)3').components('1x lanthanum, 3x oxygen, 3x hydrogen'),

    new MaterialDef('uranium_trioxide').dust().color(0xB8860B).iconSet('RADIOACTIVE').noDecomp().formula('UO3').components('1x uranium, 3x oxygen'),

    new MaterialDef('titanium_hydroxide').dust().color(0xF0F0F0).iconSet('DULL').noDecomp().formula('Ti(OH)4').components('1x titanium, 4x oxygen, 4x hydrogen'),

    new MaterialDef('titanium_dioxide').dust().color(0xCCD6DA).iconSet('DULL').formula('TiO2').components('1x titanium, 2x oxygen'),

    new MaterialDef('titanium_carbonitride').dust().color(0x8A7F5C).iconSet('METALLIC').formula('TiO2C3N').components('1x titanium_dioxide, 3x carbon, 1x nitrogen'),

    new MaterialDef('cermet_blend').noDecomp().dust().color(0x9C9690).iconSet('METALLIC').formula('Ti4O8C12N4Ni2Mo').components('4x titanium_carbonitride, 2x nickel, 1x molybdenum'),

    new MaterialDef('phantom_membrane').dust().color(0xC1B79F).iconSet('DULL'),

    new MaterialDef('cerium_chloride').dust().color(0xE0DED0).iconSet('METALLIC').formula('CeCl2').components('1x cerium, 2x chlorine'),

    new MaterialDef('carbonate').noDecomp().dust().color(0xF4F4F4).iconSet('DULL').formula('CO3').components('1x carbon, 3x oxygen'),

    new MaterialDef('strontium_sulfide').dust().color(0xD1D7DC).iconSet('METALLIC').noDecomp().formula('SrS').components('1x strontium, 1x sulfur'),

    new MaterialDef('strontium_chloride').dust().color(0xD1D7DC).iconSet('METALLIC').formula('SrCl2').components('1x strontium, 2x chlorine'),

    new MaterialDef('strontium_carbonate').dust().color(0xE2E5DC).iconSet('DULL').noDecomp().formula('SrCO3').components('1x strontium, 1x carbon, 3x oxygen'),

    new MaterialDef('sodium_tellurite').dust().color(0xF0F8FF).iconSet('DULL').noDecomp().formula('Na2TeO3').components('2x sodium, 1x tellurium, 3x oxygen'),

    new MaterialDef('tellurium_dioxide').dust().color(0xDEDFE1).iconSet('DULL').noDecomp().formula('TeO2').components('1x tellurium, 2x oxygen'),

    new MaterialDef('sodium_sulfate').dust().color(0xF5F5F5).iconSet('DULL').formula('Na2SO4').components('2x sodium, 1x sulfur, 4x oxygen'),

    new MaterialDef('germanium_dioxide').dust().color(0xEEF2F7).iconSet('DULL').noDecomp().formula('GeO2').components('1x germanium, 2x oxygen'),

    new MaterialDef('germanium_sulfate').dust().color(0xE8ECEF).iconSet('DULL').noDecomp().formula('Ge(SO4)2').components('1x germanium, 2x sulfur, 8x oxygen'),

    new MaterialDef('sodium_perrhenate').dust().color(0xE6E6FA).iconSet('DULL').noDecomp().formula('NaReO4').components('1x sodium, 1x rhenium, 4x oxygen'),

    new MaterialDef('rhenium_heptasulfide').dust().color(0x2E2B2A).iconSet('DULL').noDecomp().formula('Re2S7').components('2x rhenium, 7x sulfur'),

    new MaterialDef('wollastonite').dust().color(0xF0F8FF).iconSet('DULL').formula('CaSiO3').components('1x calcium, 1x silicon, 3x oxygen'),

    new MaterialDef('calcium_zirconate').dust().color(0xE6E6FA).iconSet('DULL').noDecomp().formula('CaZrO3').components('1x calcium, 1x zirconium, 3x oxygen'),

    new MaterialDef('potassium_fluoride').dust().color(0xFFAAAA).iconSet('DULL').formula('KF').components('1x potassium, 1x fluorine'),

    new MaterialDef('calcium_fluoride').dust().fluid().color(0xFFFAFA).iconSet('DULL').formula('CaF2').components('1x calcium, 2x fluorine'),

    new MaterialDef('potassium_hexafluorozirconate').dust().color(0x99CCFF).iconSet('METALLIC').noDecomp().formula('K2ZrF6').components('2x potassium, 1x zirconium, 6x fluorine'),

    new MaterialDef('potassium_calcium_silicate').dust().color(0xD3D3D3).iconSet('DULL').noDecomp().formula('KCaSiFO3').components('1x potassium, 1x calcium, 1x silicon, 1x fluorine, 3x oxygen'),

    new MaterialDef('calcium_sulfide').dust().color(0xFFFFE0).iconSet('DULL').formula('CaS').components('1x calcium, 1x sulfur'),

    new MaterialDef('potassium_thorium_hexafluoride').dust().color(0xE6E6FA).iconSet('DULL').formula('K2ThF6').components('2x potassium, 1x thorium, 6x fluorine'),

    new MaterialDef('calcium_nitrate').dust().color(0xD3D3D3).iconSet('DULL').formula('Ca(NO3)2').components('1x calcium, 2x nitrogen, 6x oxygen'),

    new MaterialDef('berkelium_osmium_phosphate').dust().color(0x4B0082).iconSet('METALLIC').formula('BkOsPO4').components('1x berkelium, 1x osmium, 1x phosphorus, 4x oxygen'),

    new MaterialDef('dicalcium_trisilicate').dust().color(0xE0E0E0).iconSet('DULL').formula('Ca2Si3O8').components('2x calcium, 3x silicon, 8x oxygen'),

    new MaterialDef('calcium_sulfate').dust().color(0xF5F5DC).iconSet('DULL').noDecomp().formula('CaSO4').components('1x calcium, 1x sulfur, 4x oxygen'),

    new MaterialDef('silver_sulfate').dust().color(0xDCDCDC).iconSet('METALLIC').formula('Ag2SO4').components('2x silver, 1x sulfur, 4x oxygen'),

    new MaterialDef('sanguine_terraria').dust().color(0xFF8888).iconSet('METALLIC').noDecomp().components('2x terrasteel, 1x elementium, 1x manasteel, 1x gaia'),

    new MaterialDef('soul_essence').dust().color(0x1A75FF).iconSet('SHINY'),

    new MaterialDef('mind_numbing_agent').dust().color(0x00FFCC).iconSet('DULL'),

    new MaterialDef('aluminium_hydroxide').dust().color(0xEEEEEE).iconSet('DULL').formula('Al(OH)3').components('1x aluminium, 3x oxygen, 3x hydrogen'),

    new MaterialDef('picolinic_acid').noDecomp().dust().color(0x7E57C2).iconSet('DULL').formula('C6H5NO2').components('6x carbon, 5x hydrogen, 1x nitrogen, 2x oxygen'),

    new MaterialDef('copper_ii_sulfate').dust().fluid().color(0x0F52BA).iconSet('METALLIC').formula('CuSO4').components('1x copper, 1x sulfur, 4x oxygen'),

    new MaterialDef('indium_iii_oxide').dust().fluid().color(0xFFF3B0).iconSet('DULL').noDecomp().formula('In2O3').components('2x indium, 3x oxygen'),

    new MaterialDef('indium_hydroxide').dust().color(0xF4F2E2).iconSet('DULL').noDecomp().formula('In(OH)3').components('1x indium, 3x oxygen, 3x hydrogen'),

    new MaterialDef('zinc_stannate').dust().color(0xF0F0F0).iconSet('DULL').noDecomp().formula('Zn2SnO4').components('2x zinc, 1x tin, 4x oxygen'),

    new MaterialDef('hafnium_silicide').dust().color(0xB0B0B0).iconSet('METALLIC').noDecomp().formula('HfSi').components('1x hafnium, 1x silicon'),

    new MaterialDef('rubidium_aluminium_sulfate').dust().color(0xEAF0F6).iconSet('DULL').noDecomp().formula('RbAl(SO4)2').components('1x rubidium, 1x aluminium, 2x sulfur, 8x oxygen'),

    new MaterialDef('rubidium_carbonate').dust().fluid().color(0xF5F5F5).iconSet('DULL').noDecomp().formula('Rb2CO3').components('2x rubidium, 1x carbon, 3x oxygen'),

    new MaterialDef('arsenic_acid').dust().fluid().color(0xF8F8F8).iconSet('DULL').noDecomp().formula('AsH3O4').components('1x arsenic, 3x hydrogen, 4x oxygen'),

    new MaterialDef('thallium_iodide').dust().color(0xFFF200).iconSet('METALLIC').noDecomp().formula('TlI').components('1x thallium, 1x iodine'),

    new MaterialDef('sodium_iodide').dust().color(0xF8F0D4).iconSet('DULL').formula('NaI').components('1x sodium, 1x iodine'),

    new MaterialDef('thallium_oxide').dust().color(0x3B2F2F).iconSet('DULL').noDecomp().formula('Tl2O').components('2x thallium, 1x oxygen'),

    new MaterialDef('thallium_sulfide').dust().color(0x2C2C2C).iconSet('METALLIC').noDecomp().formula('Tl2S').components('2x thallium, 1x sulfur'),

    new MaterialDef('thallium_sulfate').dust().color(0xEAF2E6).iconSet('DULL').noDecomp().formula('Tl2SO4').components('2x thallium, 1x sulfur, 4x oxygen'),

    new MaterialDef('thallium_carbonate').dust().color(0xF2EFE4).iconSet('DULL').noDecomp().formula('Tl2CO3').components('2x thallium, 1x carbon, 3x oxygen'),

    new MaterialDef('lead_chloride').dust().color(0xEBEBE6).iconSet('DULL').formula('PbCl2').components('1x lead, 2x chlorine'),

    new MaterialDef('scandium_oxide').dust().color(0xEEF0F4).iconSet('DULL').formula('Sc2O3').components('2x scandium, 3x oxygen'),

    new MaterialDef('beryllium_oxide').dust().color(0xEEF4EE).iconSet('DULL').formula('BeO').components('1x beryllium, 1x oxygen'),

    new MaterialDef('potassium_selenide').dust().color(0xE8E8E8).iconSet('DULL').formula('K2Se').components('2x potassium, 1x selenium'),

    new MaterialDef('stromeyerite').dust().color(0x4A4A4A).iconSet('METALLIC').formula('AgCuS').components('1x silver, 1x copper, 1x sulfur'),

    new MaterialDef('thallium_monoselenide').dust().color(0x5C5C5C).iconSet('METALLIC').noDecomp().formula('TlSe').components('1x thallium, 1x selenium'),

    new MaterialDef('caesium_hydroxide').dust().color(0xF0EEFA).iconSet('DULL').formula('CsOH').components('1x caesium, 1x oxygen, 1x hydrogen'),

    new MaterialDef('caesium_potassium_carbonate').dust().color(0xF5F5F5).iconSet('DULL').noDecomp().formula('CsKCO3').components('1x caesium, 1x potassium, 1x carbon, 3x oxygen'),

    new MaterialDef('iron_hydroxide').dust().color(0xB5651D).iconSet('DULL').formula('Fe(OH)3').components('1x iron, 3x oxygen, 3x hydrogen'),

    new MaterialDef('niobium_pentoxide').dust().color(0xFAFAFA).iconSet('DULL').noDecomp().formula('Nb2O5').components('2x niobium, 5x oxygen'),

    new MaterialDef('tantalum_dioxide').dust().color(0xC0C0C0).iconSet('METALLIC').noDecomp().formula('Ta2O2').components('2x tantalum, 2x oxygen'),

    new MaterialDef('manganese_heptoxide').dust().color(0x2F4F2F).iconSet('DULL').noDecomp().formula('Mn2O7').components('2x manganese, 7x oxygen'),    

    new MaterialDef('lead_oxide').dust().color(0xE8DED1).iconSet('DULL').formula('PbO').components('1x lead, 1x oxygen'),

    new MaterialDef('tantalum_pentachloride').dust().fluid().color(0xF5DEB3).iconSet('DULL').noDecomp().formula('TaCl5').components('1x tantalum, 5x chlorine'),

    new MaterialDef('niobium_tantalum_residue').dust().color(0x2B2B2B).iconSet('METALLIC').noDecomp().formula('Nb2Ta2O4').components('2x niobium, 2x tantalum, 4x oxygen'),

    new MaterialDef('cerium_oxide').dust().color(0xF5DEB3).iconSet('DULL').formula('CeO2').components('1x cerium, 2x oxygen'),

    new MaterialDef('thorium_oxide').dust().color(0xe8e8e8).iconSet('DULL').formula('ThO2').components('1x thorium, 2x oxygen'),

    new MaterialDef('phenyl').noDecomp().dust().color(0x3A3A3A).iconSet('DULL').formula('C6H5').components('6x carbon, 5x hydrogen'),

    new MaterialDef('phenylalanine').dust().color(0xF8F9FA).iconSet('DULL').noDecomp().formula('C9H11NO2').components('9x carbon, 11x hydrogen, 1x nitrogen, 2x oxygen'),

    new MaterialDef('cineole_phosphate').dust().color(0xF8F6EE).iconSet('DULL').noDecomp().formula('(C10H18O)(H3PO4)').components('10x carbon, 21x hydrogen, 5x oxygen, 1x phosphorus'),

    new MaterialDef('camphene').dust().color(0xF5F5EE).iconSet('DULL').noDecomp().formula('C10H16').components('10x carbon, 16x hydrogen'),

    new MaterialDef('aluminium_chloride').dust().color(0xF5F5F0).iconSet('DULL').formula('AlCl3').components('1x aluminium, 3x chlorine'),

    new MaterialDef('isoborneol').dust().color(0xF8F8F2).iconSet('DULL').noDecomp().formula('C10H18O').components('10x carbon, 18x hydrogen, 1x oxygen'),

    new MaterialDef('camphor').dust().color(0xE8F0EA).iconSet('GLASS').noDecomp().formula('C10H16O').components('10x carbon, 16x hydrogen, 1x oxygen'),

    new MaterialDef('pgm_bio_ash').dust().color(0x8A8676).iconSet('DULL').noDecomp(),

    new MaterialDef('rare_earth_bio_ash').dust().color(0x857C8A).iconSet('DULL').noDecomp(),

    new MaterialDef('radium_bio_ash').dust().color(0x7D8A6E).iconSet('DULL').noDecomp(),

    new MaterialDef('indium_bio_ash').dust().color(0x6E6C86).iconSet('DULL').noDecomp(),

    new MaterialDef('amygdalin').dust().color(0xEFE4CC).iconSet('DULL').noDecomp().formula('C20H27NO11').components('20x carbon, 27x hydrogen, 1x nitrogen, 11x oxygen'),

    new MaterialDef('iodine_bio_ash').dust().color(0x6F5F7E).iconSet('DULL').noDecomp(),

    new MaterialDef('strontium_bio_ash').dust().color(0x8E6F6A).iconSet('DULL').noDecomp(),

    new MaterialDef('rhenium_bio_ash').dust().color(0x7E8288).iconSet('DULL').noDecomp(),

    new MaterialDef('tantalum_bio_ash').dust().color(0x6E7682).iconSet('DULL').noDecomp(),

    new MaterialDef('caesium_bio_ash').dust().color(0x8E8C9E).iconSet('DULL').noDecomp(),

    new MaterialDef('antimony_bio_ash').dust().color(0x5A5856).iconSet('DULL').noDecomp(),

    new MaterialDef('selenium_bio_ash').dust().color(0x8A5F52).iconSet('DULL').noDecomp(),

    new MaterialDef('tellurium_bio_ash').dust().color(0x7F7A62).iconSet('DULL').noDecomp(),

    new MaterialDef('lutetium_bio_ash').dust().color(0x7D7F8C).iconSet('DULL').noDecomp(),

    new MaterialDef('hafnium_bio_ash').dust().color(0x86787A).iconSet('DULL').noDecomp(),

    new MaterialDef('samarium_bio_ash').dust().color(0x8C7C5E).iconSet('DULL').noDecomp(),

    new MaterialDef('scandium_bio_ash').dust().color(0x7C8590).iconSet('DULL').noDecomp(),

    new MaterialDef('boron_bio_ash').dust().color(0x8B8475).iconSet('DULL').noDecomp(),

    new MaterialDef('uranium_bio_ash').dust().color(0x7E8A55).iconSet('DULL').noDecomp(),

    new MaterialDef('manganese_bio_ash').dust().color(0x6E5E66).iconSet('DULL').noDecomp(),

    new MaterialDef('magnesium_bio_ash').dust().color(0x7F8A78).iconSet('DULL').noDecomp(),

    new MaterialDef('lithium_bio_ash').dust().color(0x8E7276).iconSet('DULL').noDecomp(),

    new MaterialDef('nickel_bio_ash').dust().color(0x6F8070).iconSet('DULL').noDecomp(),

    new MaterialDef('zinc_bio_ash').dust().color(0x7C8086).iconSet('DULL').noDecomp(),

    new MaterialDef('tin_bio_ash').dust().color(0x828079).iconSet('DULL').noDecomp(),

    new MaterialDef('cobalt_bio_ash').dust().color(0x5E6A82).iconSet('DULL').noDecomp(),

    new MaterialDef('copper_bio_ash').dust().color(0x8A6E5A).iconSet('DULL').noDecomp(),

    new MaterialDef('lead_bio_ash').dust().color(0x67667A).iconSet('DULL').noDecomp(),

    new MaterialDef('chromium_bio_ash').dust().color(0x7A5C5C).iconSet('DULL').noDecomp(),

    new MaterialDef('silver_bio_ash').dust().color(0x8C8E92).iconSet('DULL').noDecomp(),

    new MaterialDef('iron_bio_ash').dust().color(0x7A5E50).iconSet('DULL').noDecomp(),

    new MaterialDef('titanium_bio_ash').dust().color(0x7E7A86).iconSet('DULL').noDecomp(),

    new MaterialDef('witherite').noDecomp().dust().color(0xD8D4B8).iconSet('ROUGH').components('1x barium, 1x carbon, 3x oxygen, 3x netherite'),

    new MaterialDef('bismuth_oxide').dust().color(0xE8D27A).iconSet('DULL').formula('Bi2O3').components('2x bismuth, 3x oxygen'),

    new MaterialDef('bismuth_germanate').dust().color(0xD9D9A8).iconSet('SHINY').formula('Bi4Ge3O12').components('2x bismuth_oxide, 3x germanium_dioxide'),

    new MaterialDef('copper_oxide').dust().color(0x3B2F2F).iconSet('DULL').formula('CuO').components('1x copper, 1x oxygen'),

    new MaterialDef('pyromellitic_dianhydride').noDecomp().dust().color(0xE8DFC0).iconSet('DULL').formula('C10H2O6').components('10x carbon, 2x hydrogen, 6x oxygen'),

    new MaterialDef('adipic_acid').dust().color(0xDED1A0).iconSet('DULL').noDecomp().formula('C6H14N2O7').components('1x cyclohexanone, 2x nitric_acid'),

    new MaterialDef('hexamethylenediamine').dust().color(0xDDE8D0).iconSet('DULL').noDecomp().formula('C6H24N4O7').components('1x adiponitrile, 4x hydrogen'),

    new MaterialDef('neoprene').dust().color(0xA67C52).iconSet('DULL').noDecomp().formula('C16H24Cl4').components('4x chloroprene'),

    new MaterialDef('nylon').dust().color(0xE8DFC8).iconSet('DULL').noDecomp().formula('C12H38N6O14').components('1x adipic_acid, 1x hexamethylenediamine'),
    
    new MaterialDef('bismuth_telluride').dust().gem().fluid().color(0x4B4F5C).iconSet('METALLIC').formula('Bi2Te3').components('2x bismuth, 3x tellurium'),

    new MaterialDef('cubic_zirconia').dust().gem().fluid().color(0xD8ECF2).iconSet('DIAMOND').formula('ZrO2').components('1x zirconium, 2x oxygen'),

    //cables might be redundant
    new MaterialDef('hellforged').ore().element('hellforged').color(0xC1D5EC).iconSet('METALLIC').ingot().fluid().materialsAll().singularity()
        //.cable({ voltage: 512, loss: 2 })
        .byproducts(['coagulite', 'gold', 'hellforged'])
        .unify({ block: 'bloodmagic:dungeon_metal', dust: 'bloodmagic:sand_hellforged', ingot: 'bloodmagic:ingot_hellforged', rawOre: 'bloodmagic:rawdemonite', ore: 'bloodmagic:dungeon_ore' }),

    new MaterialDef('iesnium').ore().element('iesnium').color(0x9FD1FF).iconSet('METALLIC').ingot().fluid().materialsAll().singularity()
        //.cable({ voltage: 512, loss: 1 })
        .byproducts(['silver', 'obsidian', 'iesnium'])
        .unify({ dust: 'occultism:iesnium_dust', nugget: 'occultism:iesnium_nugget', ingot: 'occultism:iesnium_ingot', block: 'occultism:iesnium_block', rawOre: 'occultism:raw_iesnium', oreNetherrack: 'occultism:iesnium_ore' }),

    new MaterialDef('allthemodium').noSmelting().ore().element('allthemodium').color(0xFAD64A).iconSet('METALLIC').ingot().fluid().materialsAll().singularity()
        //.cable({ voltage: 8192, loss: 1 })
        .byproducts(['gold', 'diamond', 'allthemodium'])
        .blast({ temp: COIL_TEMPS.HSS_G, eut: IV, duration: 1200 })
        .unify({ ore: 'allthemodium:allthemodium_ore', oreDeepslate: 'allthemodium:allthemodium_slate_ore', dust: 'allthemodium:allthemodium_dust', nugget: 'allthemodium:allthemodium_nugget', rod: 'allthemodium:allthemodium_rod', gear: 'allthemodium:allthemodium_gear', plate: 'allthemodium:allthemodium_plate', ingot: 'allthemodium:allthemodium_ingot', block: 'allthemodium:allthemodium_block' }),

    new MaterialDef('vibranium').noSmelting().ore().element('vibranium').color(0x6DFF6D).iconSet('METALLIC').ingot().fluid().materialsAll().singularity()
        //.cable({ voltage: 32768, loss: 1 })
        .byproducts(['allthemodium', 'emerald', 'vibranium'])
        .blast({ temp: COIL_TEMPS.HSS_G, eut: LuV, duration: 1200 })
        .unify({ oreNetherrack: 'allthemodium:vibranium_ore', dust: 'allthemodium:vibranium_dust', nugget: 'allthemodium:vibranium_nugget', rod: 'allthemodium:vibranium_rod', gear: 'allthemodium:vibranium_gear', plate: 'allthemodium:vibranium_plate', ingot: 'allthemodium:vibranium_ingot', block: 'allthemodium:vibranium_block' }),

    new MaterialDef('unobtainium').noSmelting().ore().element('unobtainium').color(0xA336FF).iconSet('METALLIC').ingot().fluid().materialsAll().singularity()
        //.cable({ voltage: 131072, loss: 1 })
        .byproducts(['vibranium', 'amethyst', 'unobtainium'])
        .blast({ temp: COIL_TEMPS.HSS_G, eut: ZPM, duration: 1200 })
        .unify({ oreEndstone: 'allthemodium:unobtainium_ore', dust: 'allthemodium:unobtainium_dust', nugget: 'allthemodium:unobtainium_nugget', ingot: 'allthemodium:unobtainium_ingot', block: 'allthemodium:unobtainium_block' }),

    new MaterialDef('bismuth_strontium_calcium_copper_oxide').color(0x3A3A42).iconSet('METALLIC').formula('Bi2Sr2CaCu2(CO3)2O6').components('1x bismuth_oxide, 2x strontium_carbonate, 1x quicklime, 2x copper_oxide').noSmelting().ingot().fluid().materialsAll()
        .cable({ voltage: 32768, superconductor: true })
        .blast({ temp: COIL_TEMPS.HSS_G, eut: IV, duration: 1200 }),

    new MaterialDef('copper_alloy').components('1x copper, 1x silicon').color(0x935B3B).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 32, loss: 2 })
        .blast({ temp: COIL_TEMPS.CUPRONICKEL, eut: MV, duration: 400 })
        .unify({ ingot: 'enderio:copper_alloy_ingot', block: 'enderio:copper_alloy_block', nugget: 'enderio:copper_alloy_nugget' }),

    new MaterialDef('conductive_alloy').components('1x iron, 1x redstone').color(0xF7B066).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 128, loss: 1 })
        .blast({ temp: COIL_TEMPS.CUPRONICKEL, eut: MV, duration: 400 })
        .unify({ ingot: 'enderio:conductive_alloy_ingot', block: 'enderio:conductive_alloy_block', nugget: 'enderio:conductive_alloy_nugget' }),

    new MaterialDef('energetic_alloy').components('1x gold, 1x redstone, 1x glowstone').color(0xFFB933).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 512, loss: 2 })
        .blast({ temp: COIL_TEMPS.CUPRONICKEL, eut: MV, duration: 400 })
        .unify({ ingot: 'enderio:energetic_alloy_ingot', block: 'enderio:energetic_alloy_block', nugget: 'enderio:energetic_alloy_nugget' }),

    new MaterialDef('vibrant_alloy').components('1x energetic_alloy, 1x ender_pearl').color(0xB6F132).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 2048, loss: 1 })
        .blast({ temp: COIL_TEMPS.KANTHAL, eut: HV, duration: 400 })
        .unify({ ingot: 'enderio:vibrant_alloy_ingot', block: 'enderio:vibrant_alloy_block', nugget: 'enderio:vibrant_alloy_nugget' }),

    new MaterialDef('pulsating_alloy').components('1x iron, 1x ender_pearl').color(0x66FF82).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 2048, loss: 2 })
        .blast({ temp: COIL_TEMPS.CUPRONICKEL, eut: HV, duration: 400 })
        .unify({ ingot: 'enderio:pulsating_alloy_ingot', block: 'enderio:pulsating_alloy_block', nugget: 'enderio:pulsating_alloy_nugget' }),

    new MaterialDef('soularium').components('1x gold, 1x soul_sand').color(0x56402C).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 128, loss: 0 })
        .blast({ temp: COIL_TEMPS.KANTHAL, eut: HV, duration: 400 })
        .unify({ ingot: 'enderio:soularium_ingot', block: 'enderio:soularium_block', nugget: 'enderio:soularium_nugget' }),

    new MaterialDef('blazing_soularium').color(0x56402C).iconSet('METALLIC').ingot()
        .blast({ temp: COIL_TEMPS.KANTHAL, eut: HV, duration: 400 })
        .unify({ ingot: true, dust: true, block: true, nugget: true, dustSmall: true, dustTiny: true  }),
        

    new MaterialDef('dark_steel').components('1x steel, 1x carbon, 1x obsidian').color(0x3D3D3D).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 512, loss: 2 })
        .blast({ temp: COIL_TEMPS.KANTHAL, eut: HV, duration: 400 })
        .unify({ ingot: 'enderio:dark_steel_ingot', block: 'enderio:dark_steel_block', nugget: 'enderio:dark_steel_nugget' }),

    new MaterialDef('end_steel').components('1x dark_steel, 1x endstone, 1x obsidian').color(0xE6F1A8).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 2048, loss: 0 })
        .blast({ temp: COIL_TEMPS.NICHROME, eut: EV, duration: 400 })
        .unify({ ingot: 'enderio:end_steel_ingot', block: 'enderio:end_steel_block', nugget: 'enderio:end_steel_nugget' }),

    new MaterialDef('manasteel').element('manasteel').color(0x47CCFF).dust().iconSet('METALLIC').ingot().fluid().materialsAll()
        //.cable({ voltage: 128, loss: 1 })
        .unify({ nugget: 'botania:manasteel_nugget', ingot: 'botania:manasteel_ingot', block: 'botania:manasteel_block' }),

    new MaterialDef('elementium').element('elementium').color(0xF687FF).dust().iconSet('METALLIC').ingot().fluid().materialsAll()
        //.cable({ voltage: 512, loss: 2 })
        .unify({ ingot: 'botania:elementium_ingot' }),

    new MaterialDef('terrasteel').element('terrasteel').color(0x34FF23).dust().iconSet('METALLIC').ingot().fluid().materialsAll()
        //.cable({ voltage: 2048, loss: 2 })
        .unify({ nugget: 'botania:terrasteel_nugget', ingot: 'botania:terrasteel_ingot', block: 'botania:terrasteel_block' }),

    new MaterialDef('gaia').element('gaia').color(0xF7A8D8).dust().iconSet('METALLIC').ingot().fluid().materialsAll()
        //.cable({ voltage: 131072, loss: 2 })
        .unify({ ingot: 'botania:gaia_ingot' }),

    new MaterialDef('alfsteel').element('alfsteel').color(0xFD9D32).dust().iconSet('METALLIC').ingot().fluid().materialsAll()
        //.cable({ voltage: 32768, superconductor: true })
        .unify({ nugget: 'mythicbotany:alfsteel_nugget', ingot: 'mythicbotany:alfsteel_ingot', block: 'mythicbotany:alfsteel_block' }),

    new MaterialDef('tenebrium').element('tenebrium').color(0x101010).iconSet('METALLIC').ingot().fluid().materialsAll(),
        //.cable({ voltage: 8388608, superconductor: true }),

    new MaterialDef('pink_slime').element('pink_slime').components('2x iron, 2x gold').color(0xE66EA9).iconSet('SHINY').ingot().fluid().materialsAll()
        //.cable({ voltage: 512, loss: 2 })
        .unify({ ingot: 'industrialforegoing:pink_slime_ingot' }),

    new MaterialDef('plastic').color(0xA9A9A9).iconSet('DULL').ingot().fluid().materialsAll()
        .unify({ ingot: 'industrialforegoing:plastic' }),

    new MaterialDef('deorum').element('deorum').components('4x carbon, 1x gold').color(0xFFD700).iconSet('METALLIC').ingot().fluid().materialsAll()
        //.cable({ voltage: 128, loss: 1 })
        .unify({ ingot: 'forbidden_arcanus:deorum_ingot', block: 'forbidden_arcanus:deorum_block', nugget: 'forbidden_arcanus:deorum_nugget' }),

    new MaterialDef('ferrognetic').components('1x garmonbozia, 1x dark_steel, 1x pink_slime, 1x alfsteel, 1x hellforged, 1x iesnium').pipe().dust().noDecomp()
        .color(0xD1D1D1).iconSet('METALLIC').ingot().fluid().materialsAll().cable({ voltage: 131072, loss: 1 })
        .blast({ temp: COIL_TEMPS.HSS_G, eut: IV, duration: 1200 })
        .unify({ dust: 'forbidden_arcanus:ferrognetic_mixture' }),

    new MaterialDef('refined_obsidian').components('1x obsidian, 1x diamond').color(0x5C3854).iconSet('SHINY').ingot().fluid().materialsAll()
        //.cable({ voltage: 2048, loss: 2 })
        .unify({ dust: 'mekanism:dust_refined_obsidian', ingot: 'mekanism:ingot_refined_obsidian', block: 'mekanism:block_refined_obsidian', nugget: 'mekanism:nugget_refined_obsidian' }),

    new MaterialDef('refined_glowstone').components('1x glowstone, 1x osmium').color(0xFFE30B).iconSet('SHINY').ingot().fluid().materialsAll()
        //.cable({ voltage: 2048, loss: 1 })
        .unify({ ingot: 'mekanism:ingot_refined_glowstone', block: 'mekanism:block_refined_glowstone', nugget: 'mekanism:nugget_refined_glowstone' }),

    new MaterialDef('alloy_infused').pipe().components('1x iron').color(0xE61940).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 32768, loss: 2 })
        .unify({ ingot: 'mekanism:alloy_infused' }),

    new MaterialDef('alloy_reinforced').pipe().components('1x alloy_infused').color(0x00F5FF).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 131072, loss: 2 })
        .unify({ ingot: 'mekanism:alloy_reinforced' }),
    new MaterialDef('alloy_atomic').pipe().components('1x alloy_reinforced').color(0xBF40FF).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 524288, loss: 2 })
        .unify({ ingot: 'mekanism:alloy_atomic' }),

    new MaterialDef('naquamodium').color(0xF8FF40).iconSet('METALLIC').dust().components('5x naquadah, 3x allthemodium').ingot().fluid().materialsAll()
        //.cable({ voltage: 32768, superconductor: true })
        .blast({ temp: COIL_TEMPS.KANTHAL, eut: HV, duration: 1200 }),

    new MaterialDef('naquabranium').color(0x00FF00).iconSet('METALLIC').dust().components('5x naquadah, 3x vibranium').ingot().fluid().materialsAll()
        //.cable({ voltage: 131072, superconductor: true })
        .blast({ temp: COIL_TEMPS.NICHROME, eut: EV, duration: 1200 }),

    new MaterialDef('naquatainium').color(0x9D40FF).iconSet('METALLIC').dust().components('5x naquadria, 3x unobtainium').ingot().fluid().materialsAll()
        //.cable({ voltage: 524288, superconductor: true })
        .blast({ temp: COIL_TEMPS.RTM, eut: IV, duration: 1200 }),

    new MaterialDef('rhenium_nickel_alloy').color(0xEAEAEA).iconSet('METALLIC').components('3x rhenium, 2x nickel').ingot().fluid().materialsAll()
        //.cable({ voltage: 524288, loss: 2 })
        .blast({ temp: COIL_TEMPS.HSS_G, eut: UV, duration: 1200 })
        .rotor({ speed: 800, power: 500, efficiency: 10.0, durability: 163840 }),

    new MaterialDef('rheni_zirconium_alloy').color(0x7B1FA2).iconSet('METALLIC').components('1x rhenium_nickel_alloy, 1x zirconium').ingot().fluid().materialsAll()
        .blast({ temp: COIL_TEMPS.HSS_G, eut: UV, duration: 1200 })
        .rotor({ speed: 1000, power: 750, efficiency: 15.0, durability: 327680 }),

    new MaterialDef('thorium_berkelium_alloy').color(0x7B1FA2).iconSet('METALLIC').components('2x thorium, 1x berkelium').ingot().fluid().materialsAll()
        .cable({ voltage: 131072, superconductor: true })
        .blast({ temp: COIL_TEMPS.NAQUADAH, eut: ZPM, duration: 1200 }),

    new MaterialDef('potassium_calcium_orthosilicate').color(0xDAA520).iconSet('METALLIC').components('2x potassium, 1x calcium, 1x silicon, 4x oxygen').ingot().fluid().materialsAll()
        .blast({ temp: COIL_TEMPS.NAQUADAH, eut: ZPM, duration: 1200 })
        .rotor({ speed: 1200, power: 850, efficiency: 17.0, durability: 400000 }),


    new MaterialDef('alltheneutronium').pipe().color(0xfcfc3d).iconSet('METALLIC').components('2x naquamodium, 2x neutronium, 1x alloy_infused, 3x corrosive').ingot().fluid().materialsAll()
        .cable({ voltage: 8388608, loss: 0 })
        .blast({ temp: COIL_TEMPS.TRITANIUM, eut: LuV, duration: 1200 })
        .rotor({ speed: 1200, power: 300, efficiency: 13.0, durability: 655360 }),

    new MaterialDef('vibtronium').pipe().color(0x72fcb7).iconSet('METALLIC').components('2x naquabranium, 2x alltheneutronium, 1x alloy_reinforced, 3x destructive').ingot().fluid().materialsAll()
        .cable({ voltage: 33554432, loss: 0 })
        .blast({ temp: COIL_TEMPS.DRACONIUM, eut: ZPM, duration: 1200 })
        .rotor({ speed: 1400, power: 400, efficiency: 14.0, durability: 2621440 }),

    new MaterialDef('unobtronium').pipe().color(0xe782f2).iconSet('METALLIC').components('2x naquatainium, 2x vibtronium, 1x alloy_atomic, 3x vengeful').ingot().fluid().materialsAll()
        .cable({ voltage: 134217728, loss: 0 })
        .blast({ temp: COIL_TEMPS.DRACONIUM, eut: UV, duration: 1200 })
        .rotor({ speed: 1600, power: 500, efficiency: 16.0, durability: 10485760 }),

    new MaterialDef('deorum_alloy').pipe().color(0xCCDD22).iconSet('METALLIC').components('3x naquadria, 2x deorum, 2x trinium, 3x steadfast').ingot().fluid().materialsAll()
        .cable({ voltage: 536870912, loss: 0 })
        .blast({ temp: COIL_TEMPS.DRACONIUM_AWAKENED, eut: UV, duration: 1200 })
        .rotor({ speed: 1800, power: 600, efficiency: 18.0, durability: 41943040 }),

    new MaterialDef('demonic_alloy').components('3x demon, 3x tenebrium, 3x caesium, 3x tritanium, 3x gaia').noDecomp().pipe().color(0x22DDCC).iconSet('METALLIC').ingot().fluid().materialsAll()
        .cable({ voltage: 2147483647, loss: 0 })
        .blast({ temp: COIL_TEMPS.DRACONIUM_AWAKENED, eut: UV, duration: 1200 })
        .rotor({ speed: 2000, power: 800, efficiency: 20.0, durability: 167772160 }),

    new MaterialDef('signalum').pipe().color(0xFF5500).iconSet('METALLIC').components('1x silver, 3x copper, 4x redstone').ingot().fluid().materialsAll()
        .cable({ voltage: 128, loss: 1 })
        .blast({ temp: COIL_TEMPS.CUPRONICKEL, eut: HV, duration: 400 })
        .unify({ rod: 'alltheores:signalum_rod', gear: 'alltheores:signalum_gear', plate: 'alltheores:signalum_plate', nugget: 'alltheores:signalum_nugget', block: 'alltheores:signalum_block', dust: 'alltheores:signalum_dust', ingot: 'alltheores:signalum_ingot' }),

    new MaterialDef('lumium').pipe().color(0xFFFFAA).iconSet('METALLIC').components('1x silver, 3x tin, 2x glowstone').ingot().fluid().materialsAll()
        .cable({ voltage: 512, loss: 1 })
        .blast({ temp: COIL_TEMPS.CUPRONICKEL, eut: EV, duration: 600 })
        .unify({ rod: 'alltheores:lumium_rod', gear: 'alltheores:lumium_gear', plate: 'alltheores:lumium_plate', nugget: 'alltheores:lumium_nugget', block: 'alltheores:lumium_block', dust: 'alltheores:lumium_dust', ingot: 'alltheores:lumium_ingot' }),

    new MaterialDef('enderium').pipe().color(0x0B6156).iconSet('METALLIC').components('1x diamond, 3x lead, 2x ender_pearl').ingot().fluid().materialsAll()
        .cable({ voltage: 2048, loss: 1 })
        .blast({ temp: COIL_TEMPS.KANTHAL, eut: IV, duration: 800 })
        .unify({ rod: 'alltheores:enderium_rod', gear: 'alltheores:enderium_gear', plate: 'alltheores:enderium_plate', nugget: 'alltheores:enderium_nugget', block: 'alltheores:enderium_block', dust: 'alltheores:enderium_dust', ingot: 'alltheores:enderium_ingot' }),

    new MaterialDef('draconium').noSmelting().ore().element('draconium').color(0x502C6C).iconSet('SHINY').ingot().fluid().materialsAll()
        .cable({ voltage: 8192, loss: 1 })
        .byproducts(['ender_pearl', 'obsidian', 'draconium'])
        .blast({ temp: COIL_TEMPS.RTM, eut: IV, duration: 1200 })
        .unify({ block: 'draconicevolution:draconium_block', dust: 'draconicevolution:draconium_dust', ingot: 'draconicevolution:draconium_ingot', nugget: 'draconicevolution:draconium_nugget', ore: 'draconicevolution:overworld_draconium_ore', oreDeepslate: 'draconicevolution:deepslate_draconium_ore', oreNetherrack: 'draconicevolution:nether_draconium_ore', oreEndstone: 'draconicevolution:end_draconium_ore' }),

    new MaterialDef('draconium_awakened').noSmelting().element('draconium_awakened').color(0xFF6600).iconSet('BRIGHT').ingot().fluid().materialsAll()
        .cable({ voltage: 2097152, superconductor: true })
        .unify({ block: 'draconicevolution:awakened_draconium_block', dust: 'draconicevolution:awakened_draconium_dust', ingot: 'draconicevolution:awakened_draconium_ingot', nugget: 'draconicevolution:awakened_draconium_nugget' }),

    new MaterialDef('compressed_iron').noDecomp().components('1x iron').color(0x474747).dust().iconSet('METALLIC').ingot().fluid().materialsAll().singularity()
        //.cable({ voltage: 128, loss: 1 })
        .unify({ block: 'pneumaticcraft:compressed_iron_block', gear: 'pneumaticcraft:compressed_iron_gear', ingot: 'pneumaticcraft:ingot_iron_compressed' }),

    new MaterialDef('hop_graphite').noDecomp().components('8x carbon').color(0x1C1C1C).iconSet('DULL').ingot().fluid().materialsAll()
        //.cable({ voltage: 8192, loss: 1 })
        .unify({ dust: 'immersiveengineering:dust_hop_graphite', ingot: 'immersiveengineering:ingot_hop_graphite' }),

    new MaterialDef('eternium').pipe().magnetic().color(0x2d7d69).iconSet('METALLIC').components('2x eternal, 4x sculk, 2x ferrognetic, 3x netherite, 5x neutronium').ingot().fluid().materialsAll()
        //.cable({ voltage: 8388608, loss: 16 })
        .blast({ temp: COIL_TEMPS.TRINIUM, eut: UHV, duration: 1200 }),

    new MaterialDef('cosmic_alloy').pipe().color(0xe4ac29).iconSet('METALLIC').components('3x cosmic_matter, 4x alfsteel, 3x americium, 2x naquadria, 2x nether_star').ingot().fluid().materialsAll()
        //.cable({ voltage: 33554432, loss: 16 })
        .blast({ temp: COIL_TEMPS.DRACONIUM, eut: UEV, duration: 1500 }),

    new MaterialDef('antimatter_alloy').pipe().color(0x8a3947).iconSet('METALLIC').components('3x antimatter, 3x duranium, 2x darmstadtium, 4x iridium, 5x etrium').ingot().fluid().materialsAll()
        //.cable({ voltage: 134217728, loss: 16 })
        .blast({ temp: COIL_TEMPS.DRACONIUM_AWAKENED, eut: UIV, duration: 2000 }),

    new MaterialDef('singularity_alloy').pipe().color(0xab24a2).iconSet('METALLIC').components('8x bedrockium, 5x stabilized_clathrate, 4x thorium_berkelium_alloy, 1x tachyon, 7x californium').ingot().fluid().materialsAll()
        //.cable({ voltage: 536870912, loss: 16 })
        .blast({ temp: COIL_TEMPS.ETRIUM, eut: UXV, duration: 2500 }),

    new MaterialDef('absolute_alloy').pipe().color(0xE6F2FF).iconSet('METALLIC').components('3x strontium, 2x unobtronium, 4x tellurium, 4x radium, 8x tenebrium').ingot().fluid().materialsAll()
        //.cable({ voltage: 2147483647, loss: 16 })
        .blast({ temp: COIL_TEMPS.INFINITY, eut: OpV, duration: 3000 }),

    new MaterialDef('caliche').dust().ore().color(0xE0D8B8).iconSet('DULL').formula('NaIO3').components('1x sodium, 1x iodine, 3x oxygen')
        .byproducts(['caliche', 'iodine', 'sodium']),

    new MaterialDef('calaverite').dust().ore().color(0xDAC084).iconSet('METALLIC').components('2x tellurium, 1x gold').noDecomp()
        .byproducts(['calaverite', 'gold']),

    new MaterialDef('celestite').dust().ore().color(0xADD8E6).iconSet('METALLIC').components('1x strontium, 1x sulfur, 4x oxygen').noDecomp()
        .byproducts(['celestite', 'sulfur']),

    new MaterialDef('radio_thoric_phosphate').dust().ore().color(0x7FFF00).iconSet('RADIOACTIVE').formula('(ThURaFrAt)(PO4)4').components('1x thorium, 1x uranium, 1x radium, 1x francium, 1x astatine, 4x phosphorus, 16x oxygen').noDecomp()
        .byproducts(['thorium', 'uranium', 'plutonium']),

    new MaterialDef('argyrodite').dust().ore().color(0x8C7B70).iconSet('METALLIC').components('1x germanium, 6x sulfur, 8x silver').noDecomp()
        .byproducts(['argyrodite', 'sulfur', 'silver']),

    new MaterialDef('kurilite').dust().ore().color(0x4A5D23).iconSet('METALLIC').components('8x silver, 3x tellurium, 1x selenium').noDecomp()
        .byproducts(['kurilite', 'silver']),

    new MaterialDef('telluride').dust().ore().color(0xC0C0D0).iconSet('METALLIC').components('1x tellurium, 1x silver').noDecomp()
        .byproducts(['telluride', 'silver']),

    new MaterialDef('zircon').dust().ore().color(0xFFB3B3).iconSet('METALLIC').components('1x zirconium, 1x silicon, 4x oxygen').noDecomp()
        .byproducts(['zircon', 'silicon']),

    new MaterialDef('baddeleyite').dust().ore().color(0x9999FF).iconSet('DULL').components('1x zirconium, 2x oxygen').noDecomp()
        .byproducts(['baddeleyite', 'zirconium']),

    new MaterialDef('rhenite').dust().ore().color(0x8A8A8A).iconSet('METALLIC').components('1x rhenium, 2x sulfur').noDecomp()
        .byproducts(['rhenite', 'sulfur']),

    new MaterialDef('hellish').dust().ore().color(0x880808).iconSet('METALLIC').components('1x hellforged, 1x iesnium')
        .byproducts(['hellforged', 'iesnium', 'coagulite']),

    new MaterialDef('tenebrius').dust().ore().color(0x101010).iconSet('METALLIC').components('3x tenebrium, 1x hellforged, 1x iesnium').noDecomp()
        .byproducts(['hellforged', 'iesnium']),

    new MaterialDef('terraria').dust().ore().color(0xF7A8D8).iconSet('METALLIC').components('2x terrasteel, 1x elementium, 1x manasteel, 1x gaia').noDecomp()
        .byproducts(['elementium', 'manasteel', 'coagulite']),

    new MaterialDef('clausthalite').dust().ore().color(0xC8C8D2).iconSet('METALLIC').components('1x lead, 1x selenium')
        .byproducts(['clausthalite', 'lead']),

    new MaterialDef('crookesite').dust().ore().color(0x8A7048).iconSet('METALLIC').components('2x copper, 1x thallium, 1x silver, 1x selenium').noDecomp()
        .byproducts(['crookesite', 'thallium', 'selenium']),

    new MaterialDef('naumannite').dust().ore().color(0x4A4A52).iconSet('METALLIC').components('2x silver, 1x selenium')
        .byproducts(['naumannite', 'selenium']),

    new MaterialDef('roquesite').dust().ore().color(0x8C8C96).iconSet('METALLIC').components('1x copper, 1x indium, 2x sulfur').noDecomp()
        .byproducts(['roquesite', 'indium']),

    new MaterialDef('indite').dust().ore().color(0x5C5C64).iconSet('METALLIC').components('1x iron, 2x indium, 4x sulfur').noDecomp()
        .byproducts(['indite', 'indium']),

    new MaterialDef('sakuraiite').dust().ore().color(0x707888).iconSet('METALLIC').components('1x copper, 1x zinc, 1x indium, 1x tin, 4x sulfur').noDecomp()
        .byproducts(['sakuraiite', 'indium']),

    new MaterialDef('hafnian_zircon').dust().ore().color(0xB8C8D0).iconSet('METALLIC')
        .components('1x zirconium, 1x hafnium, 1x silicon, 4x oxygen').noDecomp().byproducts(['hafnian_zircon', 'hafnium', 'zirconium']),

    new MaterialDef('hafnon').dust().ore().color(0xC0CCD8).iconSet('METALLIC').components('1x hafnium, 1x silicon, 4x oxygen').noDecomp()
        .byproducts(['hafnon', 'hafnium']),

    new MaterialDef('rubicline').dust().ore().color(0xF0C8DC).iconSet('DULL').components('1x rubidium, 1x potassium, 1x aluminium, 3x silicon, 8x oxygen').noDecomp()
        .byproducts(['rubicline', 'rubidium']),

    new MaterialDef('lorandite').dust().ore().color(0xB22222).iconSet('METALLIC').components('1x thallium, 1x arsenic, 2x sulfur').noDecomp()
        .byproducts(['lorandite', 'thallium']),

    new MaterialDef('hutchinsonite').dust().ore().color(0x782828).iconSet('METALLIC').components('1x thallium, 1x lead, 5x arsenic, 9x sulfur').noDecomp()
        .byproducts(['hutchinsonite', 'thallium', 'lead']),

    new MaterialDef('thortveitite').dust().ore().color(0x4A5C3C).iconSet('METALLIC').components('2x scandium, 2x silicon, 7x oxygen').noDecomp()
        .byproducts(['thortveitite', 'scandium']),

    new MaterialDef('kolbeckite').dust().ore().color(0x5C7050).iconSet('DULL').components('1x scandium, 1x phosphorus, 4x oxygen').noDecomp()
        .byproducts(['kolbeckite', 'scandium']),

    new MaterialDef('bazzite').dust().ore().color(0x6EC8C0).iconSet('METALLIC').components('3x beryllium, 2x scandium, 6x silicon, 18x oxygen').noDecomp()
        .byproducts(['bazzite', 'scandium', 'beryllium']),

    new MaterialDef('gallite').dust().ore().color(0xDCC8E6).iconSet('METALLIC').components('1x copper, 1x gallium, 2x sulfur').noDecomp()
        .byproducts(['gallite', 'gallium']),

    new MaterialDef('columbite_tantalite').dust().ore().color(0x3C3C46).iconSet('METALLIC').components('1x iron, 1x manganese, 2x niobium, 2x tantalum, 6x oxygen').noDecomp()
        .byproducts(['columbite_tantalite', 'niobium', 'tantalum']),

    new MaterialDef('microlite').dust().ore().color(0x8C7850).iconSet('METALLIC').components('2x calcium, 2x tantalum, 7x oxygen').noDecomp()
        .byproducts(['microlite', 'tantalum']),

    new MaterialDef('wodginite').dust().ore().color(0x463C34).iconSet('METALLIC').components('1x manganese, 1x iron, 1x tin, 1x tantalum, 1x titanium, 1x niobium, 8x oxygen').noDecomp()
        .byproducts(['wodginite', 'tantalum', 'niobium']),

    new MaterialDef('fergusonite').dust().ore().color(0x3C3428).iconSet('METALLIC').components('1x yttrium, 1x niobium, 4x oxygen').noDecomp()
        .byproducts(['fergusonite', 'yttrium', 'niobium']),

    new MaterialDef('tarkianite').dust().ore().color(0x686868).iconSet('METALLIC').components('1x copper, 4x rhenium, 4x molybdenum, 8x sulfur').noDecomp()
        .byproducts(['tarkianite', 'rhenium', 'molybdenum']),

    new MaterialDef('strontianite').dust().ore().color(0xF0F0DC).iconSet('DULL').components('1x strontium, 1x carbon, 3x oxygen').noDecomp()
        .byproducts(['strontianite', 'strontium']),

    new MaterialDef('samarskite').dust().ore().color(0x2C2418).iconSet('METALLIC').components('1x yttrium, 1x cerium, 1x uranium, 1x iron, 2x niobium, 2x tantalum, 1x titanium, 8x oxygen').noDecomp()
        .byproducts(['samarskite', 'samarium', 'yttrium']),

    new MaterialDef('cerite').dust().ore().color(0x8C7858).iconSet('DULL').components('3x cerium, 1x lanthanum, 1x calcium, 1x iron, 1x magnesium, 3x silicon, 12x oxygen, 1x fluorine').noDecomp()
        .byproducts(['cerite', 'samarium', 'lanthanum']),

    new MaterialDef('xenotime').dust().ore().color(0xC8A050).iconSet('METALLIC').components('1x yttrium, 1x phosphorus, 4x oxygen').noDecomp()
        .byproducts(['xenotime', 'yttrium', 'lutetium']),

    new MaterialDef('gadolinite').dust().ore().color(0x3C3428).iconSet('DULL').components('2x yttrium, 1x cerium, 1x iron, 2x beryllium, 2x silicon, 10x oxygen').noDecomp()
        .byproducts(['gadolinite', 'yttrium']),

    new MaterialDef('laurite').dust().ore().color(0x505860).iconSet('METALLIC').components('1x ruthenium, 2x sulfur').noDecomp()
        .byproducts(['laurite', 'ruthenium', 'osmium']),

    new MaterialDef('germanite').dust().ore().color(0x6E5A4A).iconSet('METALLIC').components('13x copper, 2x iron, 2x germanium, 16x sulfur').noDecomp()
        .byproducts(['germanite', 'germanium', 'gallium']),

    new MaterialDef('renierite').dust().ore().color(0x5A4A3C).iconSet('METALLIC').components('11x copper, 4x zinc, 2x iron, 2x germanium, 2x arsenic, 16x sulfur').noDecomp()
        .byproducts(['renierite', 'germanium']),

    new MaterialDef('bismuthinite').dust().ore().color(0xC8B8C0).iconSet('METALLIC').components('2x bismuth, 3x sulfur')
        .byproducts(['bismuthinite', 'bismuth']),

    new MaterialDef('bismite').dust().ore().color(0xD8C8A8).iconSet('DULL').components('2x bismuth, 3x oxygen')
        .byproducts(['bismite', 'bismuth']),

    new MaterialDef('bismutite').dust().ore().color(0xB8A898).iconSet('DULL').components('2x bismuth, 1x carbon, 5x oxygen')
        .byproducts(['bismutite', 'bismuth']),

    new MaterialDef('thorianite').dust().ore().color(0x1C1C1C).iconSet('METALLIC').components('1x thorium, 2x oxygen')
        .byproducts(['thorianite', 'thorium']),

    new MaterialDef('thorite').dust().ore().color(0x3C3428).iconSet('DULL').components('1x thorium, 1x silicon, 4x oxygen')
        .byproducts(['thorite', 'thorium']),

    new MaterialDef('rhodizite').dust().ore().color(0xF0F0E0).iconSet('METALLIC').components('1x caesium, 1x potassium, 4x aluminium, 4x beryllium, 11x boron, 28x oxygen').noDecomp()
        .byproducts(['rhodizite', 'caesium']),

    new MaterialDef('lanthanite').dust().ore().color(0xD8D8C0).iconSet('DULL').components('2x lanthanum, 3x carbon, 9x oxygen').noDecomp()
        .byproducts(['lanthanite', 'lanthanum']),

    new MaterialDef('yttrialite').dust().ore().color(0x8C8058).iconSet('DULL').components('2x yttrium, 1x thorium, 2x silicon, 7x oxygen').noDecomp()
        .byproducts(['yttrialite', 'lutetium', 'yttrium']),

    new MaterialDef('cryolite').dust().ore().color(0xE8E8E8).iconSet('DULL').components('3x sodium, 1x aluminium, 6x fluorine')
        .byproducts(['cryolite', 'fluorine']),

    new MaterialDef('ullmannite').dust().ore().color(0x9A9A9A).iconSet('METALLIC').components('1x nickel, 1x antimony, 1x sulfur')
        .byproducts(['ullmannite', 'antimony']),

    new MaterialDef('jamesonite').dust().ore().color(0x605868).iconSet('METALLIC').components('4x lead, 2x iron, 6x antimony, 14x sulfur')
        .byproducts(['jamesonite', 'antimony', 'lead']),

    new MaterialDef('chaotic').dust().ore().color(0x090909).iconSet('SHINY')
        .byproducts(['bedrockium', 'draconium']),

    new MaterialDef('blazing_pyrotheum').dust().gem().fluid().color(0xF0AA3E).iconSet('GLASS'),

    new MaterialDef('gelid_cryotheum').dust().gem().fluid().color(0x28C4EF).iconSet('QUARTZ'),

    new MaterialDef('zephyrean_aerotheum').dust().gem().fluid().color(0xACA485).iconSet('GEM_HORIZONTAL'),

    new MaterialDef('tectonic_petrotheum').dust().gem().fluid().color(0x352821).iconSet('GEM_VERTICAL'),

    new MaterialDef('bedrockium').ingot().ore().dust().color(0x101010).iconSet('METALLIC').noSmelting().singularity().noDecomp().materialsBasic()
        .byproducts(['debris', 'netherite', 'bedrockium']),

    new MaterialDef('debris').ore().color(0x6E5A52).iconSet('METALLIC')
        .unify({ rawOre: 'minecraft:ancient_debris' })
        .byproducts(['gold', 'sulfur', 'nether_quartz'])
        .ignoreAllOrePrefixes(),

    new MaterialDef('crimson_iron').ore().color(0xee4f7f).iconSet('METALLIC')
        .unify({ ingot: 'silentgear:crimson_iron_ingot', block: 'silentgear:crimson_iron_block', nugget: 'silentgear:crimson_iron_nugget', dust: 'silentgear:crimson_iron_dust', rawOre: 'silentgear:raw_crimson_iron', oreNetherrack: 'silentgear:crimson_iron_ore' })
        .byproducts(['iron', 'redstone', 'nether_quartz']),

    new MaterialDef('ferricore').ingot().ore().color(0xb1e5db).iconSet('METALLIC')
        .unify({ ingot: 'justdirethings:ferricore_ingot', block: 'justdirethings:ferricore_block', rawOre: 'justdirethings:raw_ferricore', ore: 'justdirethings:raw_ferricore_ore' })
        .byproducts(['iron', 'nickel', 'ferricore']),

    new MaterialDef('blazegold').ingot().ore().color(0xe68e52).iconSet('SHINY')
        .unify({ ingot: 'justdirethings:blazegold_ingot', block: 'justdirethings:blazegold_block', rawOre: 'justdirethings:raw_blazegold', ore: 'justdirethings:raw_blazegold_ore' })
        .byproducts(['gold', 'blaze', 'ferricore']),

    new MaterialDef('eclipsealloy').ingot().ore().color(0x586e75).iconSet('SHINY')
        .unify({ ingot: 'justdirethings:eclipsealloy_ingot', block: 'justdirethings:eclipsealloy_block', rawOre: 'justdirethings:raw_eclipsealloy', ore: 'justdirethings:raw_eclipsealloy_ore' })
        .byproducts(['blazegold', 'ender_pearl', 'obsidian']),

    new MaterialDef('coagulite').gem().ore().color(0x5C0A0A).iconSet('METALLIC').noDecomp()
        .byproducts(['demon', 'source'])
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true, gem: 'evilcraft:condensed_blood' }),

    new MaterialDef('azure_silver').ore().color(0xDE81E6).iconSet('METALLIC')
        .unify({ ingot: 'silentgear:azure_silver_ingot', block: 'silentgear:azure_silver_block', nugget: 'silentgear:azure_silver_nugget', dust: 'silentgear:azure_silver_dust', rawOre: 'silentgear:raw_azure_silver', oreEndstone: 'silentgear:azure_silver_ore' })
        .byproducts(['silver', 'lapis', 'ender_pearl']),

    new MaterialDef('mithril').dust().ingot().ore().color(0x99D9D9).iconSet('METALLIC').noSmelting().materialsBasic()
        .blast({ temp: COIL_TEMPS.HSS_G, eut: IV, duration: 1200 })
        .unify({ ingot: 'irons_spellbooks:mithril_ingot', rawOre: 'irons_spellbooks:raw_mithril', ore: 'irons_spellbooks:mithril_ore', oreDeepslate: 'irons_spellbooks:deepslate_mithril_ore' })
        .byproducts(['adamantite', 'bedrockium']),

    new MaterialDef('adamantite').dust().color(0x4E5B3C).iconSet('METALLIC').noSmelting().ore()
        .byproducts(['mithril', 'bedrockium']),

    new MaterialDef('adamantium').dust().ingot().color(0x4E5B3C).iconSet('METALLIC').noSmelting().materialsBasic().components('1x adamantite, 64x tungsten_carbide, 64x netherite, 16x bedrockium, 16x mithril')
        .blast({ temp: COIL_TEMPS.NAQUADAH, eut: IV, duration: 1200 }),

    new MaterialDef('soul_sand').dust().color(0x5A4232).iconSet('DULL')
        .unify({ dust: 'thermal_extra:soul_sand_dust' }),
    
    new MaterialDef('moon_stone').dust().color(0x5A4232).iconSet('DULL'),

    new MaterialDef('undeath').dust().color(0xd9b6b2).iconSet('DULL').singularity(),

    new MaterialDef('tachyon').gem().dust().color(0x394d55).iconSet('SHINY')
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true, gem: 'gtceu:tachyon' }),

    new MaterialDef('pulsating_crystal').gem().dust().color(0x79ffff).iconSet('SHINY')
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true, gem: 'enderio:pulsating_crystal' }),

    new MaterialDef('vibrant_crystal').gem().dust().color(0xa4ffaf).iconSet('SHINY')
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true, gem: 'enderio:vibrant_crystal' }),

    new MaterialDef('aureal').fluid().gem().color(0xA1C2F7).iconSet('SHINY'),

    new MaterialDef('fire_essence').fluid().gem().color(0xD74C4C).iconSet('FLUID')
        .unify({ gem: 'mysticalagriculture:fire_essence' }),

    new MaterialDef('water_essence').fluid().gem().color(0x4C7DD7).iconSet('FLUID')
        .unify({ gem: 'mysticalagriculture:water_essence' }),

    new MaterialDef('air_essence').fluid().gem().color(0xD7D34C).iconSet('FLUID')
        .unify({ gem: 'mysticalagriculture:air_essence' }),

    new MaterialDef('earth_essence').fluid().gem().color(0x45b23f).iconSet('FLUID')
        .unify({ gem: 'mysticalagriculture:earth_essence' }),

    new MaterialDef('spent_nuclear_waste').fluid().color(0x53D74C).iconSet('RADIOACTIVE'),

    new MaterialDef('semi_stable_clathrate').dust().ingot().color(0x8FFFD7).iconSet('METALLIC').noSmelting().noDecomp()
        .flags(GTMaterialFlags.GENERATE_PLATE),

    new MaterialDef('stabilized_clathrate').dust().ingot().color(0xB1AAA6).iconSet('METALLIC').noSmelting().singularity().noDecomp()
        .flags(GTMaterialFlags.GENERATE_PLATE),

    new MaterialDef('energized_steel').fluid().ingot().color(0xceb08a).iconSet('SHINY').singularity()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .unify({ block: 'powah:steel_energized_block', ingot: 'powah:steel_energized' }),

    new MaterialDef('blazing_crystal').fluid().gem().color(0xf06223).iconSet('SHINY').singularity()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .unify({ block: 'powah:blazing_crystal_block', gem: 'powah:crystal_blazing' }),

    new MaterialDef('niotic_crystal').fluid().gem().color(0x00e3fc).iconSet('SHINY').singularity()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .unify({ block: 'powah:niotic_crystal_block', gem: 'powah:crystal_niotic' }),

    new MaterialDef('spirited_crystal').fluid().gem().color(0x00fc00).iconSet('SHINY').singularity()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .unify({ block: 'powah:spirited_crystal_block', gem: 'powah:crystal_spirited' }),

    new MaterialDef('nitro_crystal').fluid().gem().color(0x970000).iconSet('SHINY').singularity()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .unify({ block: 'powah:nitro_crystal_block', gem: 'powah:crystal_nitro' }),

    new MaterialDef('knightmetal').ingot().color(0xe4f9cb).iconSet('METALLIC').singularity()
        .unify({ ingot: 'twilightforest:knightmetal_ingot', block: 'twilightforest:knightmetal_block' }),

    new MaterialDef('steeleaf').ingot().color(0x518539).iconSet('METALLIC').singularity()
        .unify({ ingot: 'twilightforest:steeleaf_ingot', block: 'twilightforest:steeleaf_block' }),

    new MaterialDef('fiery').ingot().color(0x5b2b19).iconSet('METALLIC').singularity()
        .unify({ ingot: 'twilightforest:fiery_ingot', block: 'twilightforest:fiery_block' }),

    new MaterialDef('carminite').gem().color(0xD74C4C).iconSet('RUBY').singularity()
        .unify({ gem: 'twilightforest:carminite', block: 'twilightforest:carminite_block' }),

    new MaterialDef('bio_organic_nanocomposite').ingot().dust().fluid().color(0x3D5C42).iconSet('DULL')
        .flags(GTMaterialFlags.GENERATE_PLATE),

    new MaterialDef('hepatizon').dust().ingot().fluid().color(0x715A7C).iconSet('METALLIC').components('2x copper, 1x cobalt, 1x nether_quartz').noDecomp()
        .unify({ ingot: 'tconstruct:hepatizon_ingot', block: 'tconstruct:hepatizon_block', nugget: 'tconstruct:hepatizon_nugget' }),

    new MaterialDef('amethyst_bronze').dust().ingot().fluid().color(0xEBC4DB).iconSet('METALLIC').components('1x copper, 1x amethyst')
        .unify({ ingot: 'tconstruct:amethyst_bronze_ingot', block: 'tconstruct:amethyst_bronze_block', nugget: 'tconstruct:amethyst_bronze_nugget' }),

    new MaterialDef('manyullyn').dust().ingot().fluid().color(0xC097F0).iconSet('METALLIC').components('1x debris, 3x cobalt')
        .unify({ ingot: 'tconstruct:manyullyn_ingot', block: 'tconstruct:manyullyn_block', nugget: 'tconstruct:manyullyn_nugget' }),

    new MaterialDef('core').color(0x989CAB).iconSet('METALLIC').singularity(),

    new MaterialDef('elemental_fire').color(0xD55642).iconSet('SHINY').singularity(),

    new MaterialDef('elemental_water').color(0xB7B5ED).iconSet('SHINY').singularity(),

    new MaterialDef('elemental_air').color(0xE3E3BF).iconSet('SHINY').singularity(),

    new MaterialDef('elemental_earth').color(0x289C2B).iconSet('SHINY').singularity(),

    new MaterialDef('drenched_iron').ingot().dust().fluid().ore().element('iron').color(0x5490CF).iconSet('METALLIC').materialsBasic()        
        .byproducts(['iron', 'cobalt'])
        .unify({ ingot: 'elementalcraft:drenched_iron_ingot', block: 'elementalcraft:drenched_iron_block', nugget: 'elementalcraft:drenched_iron_nugget' }),

    new MaterialDef('swift_alloy').ingot().dust().fluid().ore().color(0xEBB760).iconSet('METALLIC').materialsBasic()        
        .byproducts(['drenched_iron', 'gold', 'copper'])
        .unify({ ingot: 'elementalcraft:swift_alloy_ingot', block: 'elementalcraft:swift_alloy_block', nugget: 'elementalcraft:swift_alloy_nugget' }),

    new MaterialDef('fireite').ingot().dust().fluid().ore().color(0x5C0A0A).iconSet('METALLIC').materialsBasic()        
        .byproducts(['swift_alloy', 'netherite'])
        .unify({ ingot: 'elementalcraft:fireite_ingot', block: 'elementalcraft:fireite_block', nugget: 'elementalcraft:fireite_nugget' }),

    new MaterialDef('chaos_shard').gem().color(0x090909).iconSet('RADIOACTIVE')
        .unify({ gem: 'draconicevolution:chaos_shard' }),

    new MaterialDef('unrefined_tenebrius').dust().fluid().element('tenebrium').color(0x101010).iconSet('RADIOACTIVE'),

    new MaterialDef('purified_tenebrius').dust().fluid().element('tenebrium').color(0x101010).iconSet('RADIOACTIVE'),

    new MaterialDef('refined_tenebrius').dust().fluid().gem().element('tenebrium').color(0x101010).iconSet('RADIOACTIVE'),

    new MaterialDef('garmonbozia').gem().dust().fluid().element('garmonbozia').color(0xFFFBD0).iconSet('SHINY').singularity()
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true, dust: 'evilcraft:garmonbozia' }),

    new MaterialDef('thorn_rose').dust().color(0xAB3236).iconSet('WOOD'),

    new MaterialDef('platinum_rhenium_catalyst').dust().polymer().color(0x8B8C8E).iconSet('DULL').components('1x platinum, 1x aluminium, 1x rhenium').noDecomp(),

    new MaterialDef('blue_ice').dust().fluid().color(0x739BD0).iconSet('GLASS')
        .unify({ block: 'minecraft:blue_ice' }),

    new MaterialDef('packed_ice').dust().fluid().color(0xA5C2F5).iconSet('GLASS')
        .unify({ block: 'minecraft:packed_ice' }),

    new MaterialDef('rotten_flesh').fluid().ingot().color(0x934537).iconSet('FLUID')
        .unify({ ingot: 'minecraft:rotten_flesh' }),

    new MaterialDef('recycled_organic_matter').fluid().color(0x6E6259).iconSet('FLUID'),

    new MaterialDef('niter').dust().gem().color(0xF7F5F0).iconSet('DIAMOND').formula('KNO3').components('1x potassium, 1x nitrogen, 3x oxygen')        
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true,dust: 'thermal:niter_dust', gem: 'thermal:niter', block: 'thermal:niter_block' }),

    new MaterialDef('cadmium_copper').ingot().dust().fluid().color(0xC97A4A).iconSet('METALLIC').formula('Cu9Cd').components('9x copper, 1x cadmium')
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE)
        .cable({ voltage: 128, loss: 1 }),

    new MaterialDef('cadmium_telluride').ingot().dust().fluid().color(0x2B2B2B).iconSet('METALLIC').formula('CdTe').components('1x cadmium, 1x tellurium').materialsBasic(),

    new MaterialDef('cadmium_selenide').ingot().dust().fluid().color(0xD94D1A).iconSet('METALLIC').formula('CdSe').components('1x cadmium, 1x selenium').materialsBasic(),

    new MaterialDef('strontium_aluminate').ingot().dust().fluid().color(0xF0EDE0).iconSet('DULL').formula('SrAl2O4').components('1x strontium, 2x aluminium, 4x oxygen').materialsBasic(),

    new MaterialDef('strontium_ferrite').ingot().dust().fluid().color(0x3C3C3C).iconSet('DULL').formula('SrFe12O19').components('1x strontium, 12x iron, 19x oxygen').materialsAll(),

    new MaterialDef('bio_organic_pulp').dust().color(0x7A6248).iconSet('DULL'),

    new MaterialDef('microbial_biomass').fluid().color(0x556B2F).iconSet('FLUID'),

    new MaterialDef('nucleic_acid_mixture').fluid().color(0x4682B4).iconSet('FLUID'),

    new MaterialDef('enzyme_solution').fluid().color(0x9370DB).iconSet('FLUID'),

    new MaterialDef('concentrated_liquid_dna').fluid().color(0xFF69B4).iconSet('SHINY'),

    new MaterialDef('dna_productivity').fluid().color(0x00d200).iconSet('SHINY'),

    new MaterialDef('dna_tolerance').fluid().color(0x0000d6).iconSet('SHINY'),

    new MaterialDef('dna_behavior').fluid().color(0xd8d800).iconSet('SHINY'),

    new MaterialDef('dna_endurance').fluid().color(0x00ccd3).iconSet('SHINY'),

    new MaterialDef('dna_omega').fluid().color(0xa45a26).iconSet('SHINY'),

    new MaterialDef('dna_mutation').fluid().color(0x66008a).iconSet('SHINY'),

    new MaterialDef('samarium_cobalt').dust().ingot().fluid().magnetic().color(0x8C7B4A).iconSet('METALLIC').formula('SmCo5').components('1x samarium, 5x cobalt').materialsBasic(),

    new MaterialDef('antimatter').dust().fluid().plasma().element('antimatter').color(0x7d4d88).iconSet('RADIOACTIVE')
        //.unify({ dust: 'mekanism:pellet_antimatter' }), trying the new unification method
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true, gem: 'mekanism:pellet_antimatter' }),

    new MaterialDef('cosmic_matter').dust().ingot().fluid().element('cosmic').color(0x3b004f).iconSet('METALLIC'),

    new MaterialDef('thorium_doped_calcium_fluoride').dust().gem().fluid().color(0xFF8C00).iconSet('CERTUS').formula('Th:CaF2').noDecomp(),

    new MaterialDef('mana_essence').gem().fluid().color(0x0099FF).iconSet('RADIOACTIVE').singularity(),

    new MaterialDef('ancient').dust().color(0x9085A3).iconSet('SHINY')
        .unify({dust: 'thermal_extra:ancient_dust'}),


    //new MaterialDef('shulker').dust().ingot().color(0x906291).iconSet('SHINY').flags(GTMaterialFlags.GENERATE_PLATE),
    //trying to block gem alternatives
    new MaterialDef('shulker').dust().gem().color(0x906291).iconSet('SHINY').flags(GTMaterialFlags.GENERATE_PLATE)
        .unify({ plate: true, block: true, gem: 'minecraft:shulker_shell', gemFlawless: true, gemExquisite: true }),

    new MaterialDef('soul_infused').dust().fluid().color(0xAB6F53).iconSet('METALLIC').noSmelting().materialsBasic().components('2x soul_sand, 1x iron, 1x copper')
        .blast({ temp: COIL_TEMPS.KANTHAL, eut: HV, duration: 1200 })        
        .unify({ dust: 'thermal_extra:soul_infused_dust', nugget: 'thermal_extra:soul_infused_nugget', ingot: 'thermal_extra:soul_infused_ingot', block: 'thermal_extra:soul_infused_block', rod: 'thermal_extra:soul_infused_rod', plate: 'thermal_extra:soul_infused_plate', gear: 'thermal_extra:soul_infused_gear'}),
    
    new MaterialDef('shellite').dust().fluid().color(0x8643A2).iconSet('METALLIC').noSmelting().materialsBasic().components('2x shulker, 1x lead, 1x nickel')
        .blast({ temp: COIL_TEMPS.NICHROME, eut: EV, duration: 1200 })        
        .unify({ dust: 'thermal_extra:shellite_dust', nugget: 'thermal_extra:shellite_nugget', ingot: 'thermal_extra:shellite_ingot', block: 'thermal_extra:shellite_block', rod: 'thermal_extra:shellite_rod', plate: 'thermal_extra:shellite_plate', gear: 'thermal_extra:shellite_gear'}),

    new MaterialDef('twinite').dust().fluid().color(0xAB6F53).iconSet('METALLIC').noSmelting().materialsBasic().components('2x tin, 1x blaze, 1x obsidian')
        .blast({ temp: COIL_TEMPS.RTM, eut: IV, duration: 1200 })        
        .unify({ dust: 'thermal_extra:twinite_dust', nugget: 'thermal_extra:twinite_nugget', ingot: 'thermal_extra:twinite_ingot', block: 'thermal_extra:twinite_block', rod: 'thermal_extra:twinite_rod', plate: 'thermal_extra:twinite_plate', gear: 'thermal_extra:twinite_gear'}),

    new MaterialDef('dragonsteel').dust().fluid().color(0xAB6F53).iconSet('METALLIC').noSmelting().materialsBasic().components('2x ancient, 1x cinnabar, 1x enderium')
        .blast({ temp: COIL_TEMPS.HSS_G, eut: LuV, duration: 1200 })        
        .unify({ dust: 'thermal_extra:dragonsteel_dust', nugget: 'thermal_extra:dragonsteel_nugget', ingot: 'thermal_extra:dragonsteel_ingot', block: 'thermal_extra:dragonsteel_block', rod: 'thermal_extra:dragonsteel_rod', plate: 'thermal_extra:dragonsteel_plate', gear: 'thermal_extra:dragonsteel_gear'}),

    new MaterialDef('abyssal').dust().fluid().color(0x62825D).iconSet('METALLIC').noSmelting().materialsBasic().singularity().components('2x ancient, 1x netherite, 1x echo_shard')
        .blast({ temp: COIL_TEMPS.NAQUADAH, eut: ZPM, duration: 1200 })        
        .unify({ dust: 'thermal_extra:abyssal_dust', nugget: 'thermal_extra:abyssal_nugget', ingot: 'thermal_extra:abyssal_ingot', block: 'thermal_extra:abyssal_block', rod: 'thermal_extra:abyssal_rod', plate: 'thermal_extra:abyssal_plate', gear: 'thermal_extra:abyssal_gear'}),
        
    new MaterialDef('necrotic').noDecomp().dust().color(0x1A1C1E).iconSet('DULL').components('5x calcium, 3x phosphorus, 3x sulfur'),    
    
    new MaterialDef('tattered').color(0x9A9290).singularity().iconSet('DULL'),
    
    new MaterialDef('wraith_heart').color(0x9ccfe3).singularity().iconSet('DULL'),
    
    new MaterialDef('sunnarium').dust().ingot().fluid().element('sunarium').color(0xF4A028).iconSet('SHINY').materialsBasic().singularity().noSmelting(),

    new MaterialDef('lunarium').dust().ingot().fluid().element('lunarium').color(0x7C8DD0).iconSet('SHINY').materialsBasic().singularity().noSmelting(),

    //modifications
    new MaterialDef('netherite').modify().materialsBasic(),
        //.unify({ plate: 'thermal:netherite_plate' }) seems like thermal removed its own plate without the need for unification once this was registered.

    new MaterialDef('osmiridium').modify()
        .byproducts(['ruthenium']),

    new MaterialDef('monazite').modify()
        .byproducts(['rare_earth', 'gadolinium', 'neodymium']),

    new MaterialDef('bastnasite').modify()
        .byproducts(['rare_earth', 'gadolinium', 'neodymium']),

    new MaterialDef('iridium').modify()
        .byproducts(['osmium_tetroxide', 'rhodium_sulfate'])
        .unify({ rawOre: 'alltheores:raw_iridium', ore: 'alltheores:iridium_ore', oreDeepslate: 'alltheores:deepslate_iridium_ore', oreNetherrack: 'alltheores:nether_iridium_ore' }),

    new MaterialDef('uranium').modify()
        .byproducts(['thorium', 'plutonium'])
        .unify({ rawOre: 'alltheores:raw_uranium', ore: 'alltheores:uranium_ore', oreDeepslate: 'alltheores:deepslate_uranium_ore', oreNetherrack: 'alltheores:nether_uranium_ore' }),

    new MaterialDef('zinc').modify().plasma()
        .byproducts(['cadmium', 'lead', 'silver'])
        .unify({ rawOre: 'alltheores:raw_zinc', ore: 'alltheores:zinc_ore', oreDeepslate: 'alltheores:deepslate_zinc_ore', oreNetherrack: 'alltheores:nether_zinc_ore' }),

    new MaterialDef('osmium').modify()
        .byproducts(['nickel', 'iron'])
        .unify({ rawOre: 'alltheores:raw_osmium' })
        .ignoreAllOrePrefixes(),

    new MaterialDef('glycerol').modify().gem().flags(GTMaterialFlags.CRYSTALLIZABLE)
        .unify({ plate: true, block: true, gemFlawless: true, gemExquisite: true}),

    new MaterialDef('cadmium').modify().ingot().flags(GTMaterialFlags.GENERATE_ROD),

    new MaterialDef('bismuth').modify().flags(GTMaterialFlags.GENERATE_PLATE),

    new MaterialDef('radium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.TRITANIUM),

    new MaterialDef('gadolinium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic(),        

    new MaterialDef('rhenium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('astatine').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('graphite').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.NICHROME).wireMod(2048).flags(GTMaterialFlags.GENERATE_ROTOR),

    new MaterialDef('chromium').modify().plasma(),

    new MaterialDef('calcium').modify().fluid().plasma(),    

    new MaterialDef('plutonium').modify().plasma(),

    new MaterialDef('strontium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsAll().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('tellurium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.DRACONIUM),

    new MaterialDef('californium').modify().plasma().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.DRACONIUM_AWAKENED),

    new MaterialDef('berkelium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().plasma().ingot().materialsBasic().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('polonium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().dust().ingot(),

    new MaterialDef('selenium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().polymerMod().materialsBasic(),

    new MaterialDef('francium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.TRINIUM),

    new MaterialDef('germanium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic(),

    new MaterialDef('zirconium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic(),

    new MaterialDef('dysprosium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('neodymium_praseodymium').dust().color(0x8F8C7A).iconSet('METALLIC').components('3x neodymium, 1x praseodymium').formula('Nd3Pr').noDecomp(),

    new MaterialDef('neodymium_dysprosium').dust().ingot().magnetic().color(0x5A5A66).iconSet('METALLIC').noDecomp().components('1x dysprosium', '1x neodymium_praseodymium_iron_boron').formula('NdPrDyFe14B').materialsBasic()
    .blast({ temp: COIL_TEMPS.NAQUADAH, eut: LuV, duration: 1200 }),

    new MaterialDef('neodymium_terbium').dust().ingot().magnetic().color(0x66605A).iconSet('METALLIC').noDecomp().components('1x terbium', '1x neodymium_praseodymium_iron_boron').formula('NdPrTbFe14B').materialsBasic()
    .blast({ temp: COIL_TEMPS.TRINIUM, eut: ZPM, duration: 1200 }),

    new MaterialDef('neodymium_praseodymium_iron_boron').noSmelting().dust().ingot().color(0x4A4A52).iconSet('METALLIC').noDecomp().components('1x neodymium_praseodymium, 14x iron, 1x boron').formula('NdPrFe14B')
    .blast({ temp: COIL_TEMPS.NAQUADAH, eut: LuV, duration: 1200 }),

    new MaterialDef('promethium').modify().dust().fluid(),
    
    new MaterialDef('praseodymium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('aluminium_oxide').dust().color(0xE8E8E8).components('2x aluminium, 3x oxygen').formula('Al2O3'),
    
    new MaterialDef('neodymium_oxide').dust().color(0x5C7A9E).components('2x neodymium, 3x oxygen').formula('Nd2O3'),

    new MaterialDef('praseodymium_oxide').dust().color(0xC8D46A).components('2x praseodymium, 3x oxygen').formula('Pr2O3'),        

    new MaterialDef('yttrium_oxide').dust().color(0xF6F2E8).iconSet('DULL').formula('Y2O3').components('2x yttrium, 3x oxygen'),

    new MaterialDef('yttrium_aluminium_garnet').dust().color(0xE8E8F0).components('3x yttrium_oxide, 5x aluminium_oxide').formula('Y3Al5O12').noDecomp(),
        
    new MaterialDef('neodymium_doped_yttrium_aluminium_garnet').lens().color(0xC9A8E0).components('2x yttrium_oxide, 5x aluminium_oxide, 1x neodymium_oxide').formula('NdY2Al5O12').noDecomp(),
        
    new MaterialDef('praseodymium_doped_yttrium_aluminium_garnet').lens().color(0xC8D46A).components('2x yttrium_oxide, 5x aluminium_oxide, 1x praseodymium_oxide').formula('PrY2Al5O12').noDecomp(),
    
    new MaterialDef('terbium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('scandium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('hafnium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsAll().blastCoil(COIL_TEMPS.HSS_G),

    new MaterialDef('rubidium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('thallium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.TRINIUM),

    new MaterialDef('protactinium').modify().removeFlags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.FLAMMABLE).fluid().ingot().materialsBasic().blastCoil(COIL_TEMPS.NAQUADAH),

    new MaterialDef('rhodium_plated_palladium').modify().flags(GTMaterialFlags.GENERATE_GEAR),

    new MaterialDef('darmstadtium').modify().flags(GTMaterialFlags.GENERATE_GEAR),

    new MaterialDef('prismarine').dust().color(0x529680).iconSet('DULL').noDecomp(),

    new MaterialDef('beryllium').modify().singularity(),

    new MaterialDef('lapotron').modify().singularity(),

    new MaterialDef('nether_star').modify().ore().color(0xD8D8C0).iconSet('SHINY')
        .byproducts(['nether_quartz', 'glowstone', 'sulfur']),

    new MaterialDef('kevlar_carbon_fiber_mesh').gem().color(0x8A7A46).iconSet('DULL').flags(GTMaterialFlags.GENERATE_PLATE)
        .unify({ block: true, gemFlawless: true, gemExquisite: true}),

    new MaterialDef('kevlar').dust().color(0x76683C).iconSet('DULL').flags(GTMaterialFlags.GENERATE_PLATE),

    new MaterialDef('andesite_alloy').dust().ingot().color(0x7d9284).components('2x andesite, 2x zinc').iconSet('SHINY').flags(GTMaterialFlags.GENERATE_PLATE)
        .unify({ plate: 'create:andesite_alloy'}),        

    //new chemlines

    //bromine
    new MaterialDef('acidified_brine').fluid().color(0x8FA88C).iconSet('FLUID').noDecomp(),
    new MaterialDef('bromine_laden_brine').fluid().color(0xA8743C).iconSet('FLUID').noDecomp(),
    new MaterialDef('bromine_laden_air').fluid().gas().color(0xC47A3A).iconSet('FLUID').noDecomp(),
    new MaterialDef('debrominated_brine').fluid().color(0x9DB0A3).iconSet('FLUID').noDecomp(),
    new MaterialDef('hydrobromic_acid').fluid().color(0xD08F5B).iconSet('FLUID').components('1x hydrogen, 1x bromine').formula('HBr').noDecomp(),
    new MaterialDef('crude_bromine_solution').fluid().color(0x9C4A2A).iconSet('FLUID').noDecomp(),

    //moon stone line
    new MaterialDef('sodium_formate').dust().color(0xE3DCCB).iconSet('DULL').formula('HCOONa').components('1x sodium, 1x carbon, 1x hydrogen, 2x oxygen'),    
    new MaterialDef('sodium_oxalate').dust().color(0xDDD5C2).iconSet('DULL').formula('Na2C2O4').components('2x sodium, 2x carbon, 4x oxygen'),    
    new MaterialDef('oxalic_acid').fluid().color(0xD8CFA8).iconSet('FLUID').formula('H2C2O4').components('2x hydrogen, 2x carbon, 4x oxygen'),
    new MaterialDef('muddy_moon_stone').fluid().color(0x6E5E50).iconSet('FLUID').noDecomp(),
    new MaterialDef('diluted_moon_stone_mud').fluid().color(0x8C7D6B).iconSet('FLUID').noDecomp(),
    new MaterialDef('moon_hydroxide_cake').dust().color(0xA89886).iconSet('DULL').noDecomp(),    
    new MaterialDef('clarified_moon_mud').fluid().color(0x9A8C7A).iconSet('FLUID').noDecomp(),
    new MaterialDef('moon_brine').fluid().color(0x8C8296).iconSet('FLUID').noDecomp(),
    new MaterialDef('kreep_concentrate').dust().color(0xA67C6E).iconSet('DULL').noDecomp(),
    new MaterialDef('moon_silica_residue').dust().color(0xB7B1A6).iconSet('DULL').noDecomp(),
    
    //prismarine line        
    new MaterialDef('prismarine_chloride_slurry').fluid().color(0x4F8F8A).iconSet('FLUID').noDecomp(),
    new MaterialDef('halogen_brine').fluid().color(0x7FA67A).iconSet('FLUID').noDecomp(),
    new MaterialDef('limed_brine').fluid().color(0x8FB5A8).iconSet('FLUID').noDecomp(),
    new MaterialDef('lithium_stripped_brine').fluid().color(0x9BB8C4).iconSet('FLUID').noDecomp(),
    new MaterialDef('prismarine_nodule_residue').dust().color(0x3E4A4F).iconSet('DULL').noDecomp(),
    new MaterialDef('prismarine_magnesia_cake').dust().color(0xB8C9C2).iconSet('DULL').noDecomp(),
    new MaterialDef('lithium_carbonate').dust().color(0xDCD9E6).iconSet('DULL').formula('Li2CO3').components('2x lithium, 1x carbon, 3x oxygen'),

    //bastnasite line
    new MaterialDef('bastnasite_sulfate_slurry').fluid().color(0x8A6F5C).iconSet('FLUID').noDecomp(),
    new MaterialDef('rare_earth_sulfate_liquor').fluid().color(0xA88C6E).iconSet('FLUID').noDecomp(),
    new MaterialDef('heavy_rare_earth_liquor').fluid().color(0xB09A78).iconSet('FLUID').noDecomp(),
    new MaterialDef('rare_earth_chloride_liquor').fluid().color(0xA6B07C).iconSet('FLUID').noDecomp(),
    new MaterialDef('rare_earth_extractant').fluid().color(0xC4A85C).iconSet('FLUID').noDecomp(),
    new MaterialDef('loaded_extractant').fluid().color(0x9C7CA8).iconSet('FLUID').noDecomp(),
    new MaterialDef('lanthanum_raffinate').fluid().color(0xB8B8D0).iconSet('FLUID').noDecomp(),
    new MaterialDef('neodymium_praseodymium_chloride').fluid().color(0x9AA8C4).iconSet('FLUID').noDecomp(),
    new MaterialDef('bastnasite_gangue').dust().color(0x5C5248).iconSet('DULL').noDecomp(),
    new MaterialDef('light_rare_earth_double_sulfate').dust().color(0xC4B49C).iconSet('DULL').noDecomp(),
    new MaterialDef('light_rare_earth_hydroxide').dust().color(0xBCAEC8).iconSet('DULL').noDecomp(),
    new MaterialDef('neodymium_praseodymium_oxide').dust().color(0x8C8CA8).iconSet('DULL').noDecomp(),
    
    //monazite line
    new MaterialDef('caustic_soda_solution').fluid().color(0xB4C0A8).iconSet('FLUID'),
    new MaterialDef('monazite_hydroxide_slurry').fluid().color(0x7C6A58).iconSet('FLUID'),
    new MaterialDef('phosphate_liquor').fluid().color(0xC8B888).iconSet('FLUID'),
    new MaterialDef('rare_earth_chloride_solution').fluid().color(0xB8C48C).iconSet('FLUID'),
    new MaterialDef('rare_earth_nitrate_liquor').fluid().color(0xC8B070).iconSet('FLUID'),
    new MaterialDef('heavy_rare_earth_nitrate').fluid().color(0xD0A868).iconSet('FLUID'),
    new MaterialDef('monazite_loaded_extractant').fluid().color(0xA88CB8).iconSet('FLUID'),
    new MaterialDef('monazite_hydroxide_cake').dust().color(0x8C7C68).iconSet('DULL').noDecomp(),
    new MaterialDef('thorium_cake').dust().color(0x6C7058).iconSet('DULL').noDecomp(),
    new MaterialDef('rare_earth_oxalate').dust().color(0xC8BCA0).iconSet('DULL').noDecomp(),
    new MaterialDef('mixed_rare_earth_oxide').dust().color(0xB09470).iconSet('DULL').noDecomp(),
    new MaterialDef('heavy_rare_earth_fluoride').dust().color(0xC8B8C0).iconSet('DULL').noDecomp(),
    new MaterialDef('heavy_rare_earth_metal_mix').dust().color(0x908C98).iconSet('METALLIC').noDecomp(),

    //pgm line
    new MaterialDef('pgm_calcine').dust().color(0x8C7B6A).iconSet('DULL').noDecomp().components('1x platinum, 1x palladium, 2x oxygen'),
    new MaterialDef('pgm_chloride_liquor').fluid().color(0xC9822B).noDecomp(),
    new MaterialDef('palladous_ammine_liquor').fluid().color(0xB5A46B).noDecomp(),
    new MaterialDef('palladium_tetraammine_liquor').fluid().color(0xD8C18A).noDecomp(),
    new MaterialDef('platinum_salt').dust().color(0xE0A24A).iconSet('DULL').noDecomp().components('2x ammonium_chloride, 1x platinum, 4x chlorine'),
    new MaterialDef('pgm_residue_cake').dust().color(0x5E5448).iconSet('DULL').noDecomp(),
    new MaterialDef('pgm_leach_residue').dust().color(0x6F6A5E).iconSet('DULL').noDecomp(),
    new MaterialDef('ruthenium_tetroxide_solution').fluid().color(0x7A8F5A).noDecomp(),
    new MaterialDef('rhodium_sponge').dust().color(0xA9AFB8).iconSet('METALLIC').noDecomp().components('1x rhodium'),
    new MaterialDef('rhodium_salt').dust().color(0xC25A5A).iconSet('DULL').noDecomp().components('1x rhodium, 3x chlorine'),
    new MaterialDef('zinc_sulfate').dust().color(0xBFC9C2).iconSet('DULL').components('1x zinc, 1x sulfur, 4x oxygen'),
    new MaterialDef('iridium_dioxide').dust().color(0x2F3A4A).iconSet('DULL').noDecomp().components('1x iridium, 2x oxygen'),
    new MaterialDef('fused_pgm_melt').dust().color(0x8A4F2E).iconSet('DULL').noDecomp(),
    new MaterialDef('sodium_ruthenate_liquor').fluid().color(0x3F7A55).noDecomp(),
    new MaterialDef('pgm_oxide_cake').dust().color(0x4A3F44).iconSet('DULL').noDecomp(),

    //indium line
    new MaterialDef('sulfated_zinc_slurry').fluid().color(0xB59A5E).noDecomp(),
    new MaterialDef('zinc_indium_liquor').fluid().color(0x9DB8A8).noDecomp(),
    new MaterialDef('lead_sulfate_cake').dust().color(0x8F8A94).iconSet('DULL').noDecomp().components('1x lead, 1x sulfur, 4x oxygen'),
    new MaterialDef('purified_indium_liquor').fluid().color(0xA9C7C0).noDecomp(),
    new MaterialDef('indium_loaded_extractant').fluid().color(0xC2A66A).noDecomp(),
    new MaterialDef('zinc_raffinate').fluid().color(0xB9C2B0).noDecomp(),

    //rest of the perioditic table
    new MaterialDef('actinium').modify().dust().ingot().fluid().materialsBasic(),
    new MaterialDef('bohrium').modify().dust().ingot().fluid().noSmelting().blastCoil(COIL_TEMPS.DRACONIUM_AWAKENED).materialsBasic(),
    new MaterialDef('copernicium').modify().fluid(),
    new MaterialDef('curium').modify().dust().ingot().fluid().plasma().noSmelting().materialsBasic(), //chemical reaction
    new MaterialDef('dubnium').modify().dust().ingot().fluid().noSmelting().blastCoil(COIL_TEMPS.DRACONIUM_AWAKENED).materialsBasic(),
    new MaterialDef('einsteinium').modify().dust().ingot().fluid().materialsBasic(),
    new MaterialDef('erbium').modify().dust().ingot().fluid().noSmelting().materialsBasic(), //chemical reaction
    new MaterialDef('fermium').modify().fluid().dust(),
    new MaterialDef('flerovium').modify().dust().ingot().fluid().gas().noSmelting().materialsBasic(),
    new MaterialDef('hassium').modify().dust().ingot().fluid().noSmelting().blastCoil(COIL_TEMPS.DRACONIUM_AWAKENED).materialsBasic(),
    new MaterialDef('holmium').modify().dust().ingot().fluid().noSmelting().materialsBasic(),    //chemical reaction
    new MaterialDef('lawrencium').modify().dust().ingot().fluid().noSmelting().materialsBasic(), //chemical reaction
    new MaterialDef('livermorium').modify().fluid(),
    new MaterialDef('meitnerium').modify().dust().ingot().fluid().noSmelting().blastCoil(COIL_TEMPS.DRACONIUM_AWAKENED).materialsBasic(),
    new MaterialDef('mendelevium').modify().dust().ingot().fluid().materialsBasic(),
    new MaterialDef('moscovium').modify().fluid(),
    new MaterialDef('neptunium').modify().dust().ingot().fluid().materialsBasic()
        .unify({nugget: 'aquaculture:neptunium_nugget', ingot: 'aquaculture:neptunium_ingot', block: 'aquaculture:neptunium_block'}),
    new MaterialDef('nihonium').modify().fluid(),
    new MaterialDef('nobelium').modify().dust().ingot().fluid().materialsBasic(),
    new MaterialDef('oganesson').modify().plasma().fluid(),
    new MaterialDef('roentgenium').modify().dust().ingot().fluid().materialsBasic(),
    new MaterialDef('rutherfordium').modify().dust().ingot().fluid().noSmelting().blastCoil(COIL_TEMPS.DRACONIUM_AWAKENED).materialsBasic(),
    new MaterialDef('seaborgium').modify().dust().ingot().fluid().noSmelting().blastCoil(COIL_TEMPS.DRACONIUM_AWAKENED).materialsBasic(),
    new MaterialDef('technetium').modify().dust().ingot().fluid().blastCoil(COIL_TEMPS.DRACONIUM).materialsBasic(),
    new MaterialDef('tennessine').modify().fluid(),
    new MaterialDef('thulium').modify().dust().ingot().fluid().noSmelting().materialsBasic(),    //chemical reaction
    new MaterialDef('ytterbium').modify().dust().ingot().fluid().materialsBasic(),

    new MaterialDef('super_critical_steam').fluid().gas().color(0xE8B8A0).iconSet('FLUID').components('2x hydrogen, 1x oxygen').formula('H2O').noDecomp(),

    //nuclear materials rework
    new MaterialDef('thorium_waste_solution').fluid().color(0xB89A3C).iconSet('RADIOACTIVE'),
    new MaterialDef('thorium_berkelium_waste_solution').fluid().color(0x8A4FB5).iconSet('RADIOACTIVE'),
    new MaterialDef('nuclear_waste').fluid().color(0xB8D13A).iconSet('RADIOACTIVE'),
    
    new MaterialDef('dissolved_nuclear_waste').fluid().color(0x8FAE2E).iconSet('RADIOACTIVE'),
    new MaterialDef('dissolved_thorium_waste').fluid().color(0xC9B458).iconSet('RADIOACTIVE'),
    new MaterialDef('dissolved_berkelium_waste').fluid().color(0x6A3FA0).iconSet('RADIOACTIVE'),

    new MaterialDef('digested_fission_products').fluid().color(0x4FA89A).iconSet('RADIOACTIVE'),
    new MaterialDef('digested_fertile_actinides').fluid().color(0xD08A3E).iconSet('RADIOACTIVE'),
    new MaterialDef('digested_transuranics').fluid().color(0xA23B6E).iconSet('RADIOACTIVE'),

    new MaterialDef('molybdenum_99').dust().color(0x5E7FA8).iconSet('RADIOACTIVE').components('1x molybdenum').formula('Mo⁹⁹'),
    new MaterialDef('radium_227').dust().color(0x7FC9A0).iconSet('RADIOACTIVE').components('1x radium').formula('Ra²²⁷'),

    new MaterialDef('ion_adsorption_clay').dust().color(0xC9A27A).iconSet('DULL').components('4x clay, 1x granite_red, 1x water'),
    new MaterialDef('rare_earth_clay_mud').dust().color(0x9C7F63).iconSet('DULL'),
    new MaterialDef('diluted_rare_earth_clay_mud').dust().color(0xB59A7E).iconSet('DULL'),
    new MaterialDef('erbium_oxide').dust().color(0xE8A0B8).iconSet('DULL').components('2x erbium, 3x oxygen').noDecomp(),
    new MaterialDef('holmium_oxide').dust().color(0xE6C48A).iconSet('DULL').components('2x holmium, 3x oxygen').noDecomp(),
    new MaterialDef('thulium_oxide').dust().color(0xA9D8C4).iconSet('DULL').components('2x thulium, 3x oxygen').noDecomp(),
    new MaterialDef('ytterbium_oxide').dust().color(0xD9D2A6).iconSet('DULL').components('2x ytterbium, 3x oxygen').noDecomp(),
    new MaterialDef('erbium_fluoride').dust().color(0xD6A8C4).iconSet('DULL').components('1x erbium, 3x fluorine').noDecomp(),
    new MaterialDef('holmium_fluoride').dust().color(0xD9B77A).iconSet('DULL').components('1x holmium, 3x fluorine').noDecomp(),
    new MaterialDef('thulium_fluoride').dust().color(0x93C9B3).iconSet('DULL').components('1x thulium, 3x fluorine').noDecomp(),
    new MaterialDef('lanthanum_oxide').dust().color(0xC9CFA8).iconSet('DULL').components('2x lanthanum, 3x oxygen'),
    new MaterialDef('americium_244').dust().color(0xC47A5E).iconSet('RADIOACTIVE').components('1x americium').formula('Am²⁴⁴'),
    new MaterialDef('curium_249').dust().color(0x7E6FB0).iconSet('RADIOACTIVE').components('1x curium').formula('Cm²⁴⁹'),
    new MaterialDef('berkelium_250').dust().color(0xB07FA8).iconSet('RADIOACTIVE').components('1x berkelium').formula('Bk²⁵⁰'),
    new MaterialDef('californium_253').dust().color(0xD2A05A).iconSet('RADIOACTIVE').components('1x californium').formula('Cf²⁵³'),
    new MaterialDef('einsteinium_255').dust().color(0x5EB0A0).iconSet('RADIOACTIVE').components('1x einsteinium').formula('Es²⁵⁵'),
    new MaterialDef('curium_fluoride').dust().color(0xD9C7E6).iconSet('DULL').components('1x curium, 3x fluorine').noDecomp(),
    
    //perovskite photovoltaic cell
    new MaterialDef('caesium_bromide').dust().color(0xE6DDF0).iconSet('DULL').formula('CsBr').components('1x caesium, 1x bromine'),
    new MaterialDef('caesium_chloride').dust().color(0xD9E3EE).iconSet('DULL').formula('CsCl').components('1x caesium, 1x chlorine'),
    new MaterialDef('indium_tin_oxide').dust().color(0xB8C77A).iconSet('DULL').noDecomp().formula('In2O3·SnO2').components('9x indium_iii_oxide, 1x cassiterite'),
    new MaterialDef('perovskite_ink').fluid().color(0xE08A2E).iconSet('FLUID').noDecomp().formula('CsPbBr3·C2H6O').components('1x caesium, 1x lead, 3x bromine, 2x carbon, 6x hydrogen, 1x oxygen'),    	
    new MaterialDef('caesium_lead_bromide').dust().color(0xD9731A).iconSet('DULL').formula('CsPbBr3').components('1x caesium, 1x lead, 3x bromine'),
];


GTCEuStartupEvents.registry('gtceu:material', allthemods => {
    materials.forEach(m => m.register(allthemods));
    let materialBuilder = allthemods.create("infinity")
    //
        .cableProperties(134217728, 1, 0, true)
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element('infinity')
        .color(0xffffff)
        .iconSet("infinity")
        .blastTemp(COIL_TEMPS.ETRIUM, GasTier.HIGHEST, 33554432, 600)
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
});

StartupEvents.postInit(allthemods => {
    materials.forEach(m => m.applyUnification());
});

GTCEuStartupEvents.materialModification(event => {
    materials.forEach(m => m.applyUnification()); 
    materials.forEach(m => m.applyModification());
    materials.forEach(m => m.applyDecomposition());
    overwriteToolStats('allthemodium', 16.0, 6.0, 0, 5);
    overwriteToolStats('vibranium', 20.0, 8.0, 0, 6);
    overwriteToolStats('unobtainium', 24.0, 10.0, 0, 7);
});