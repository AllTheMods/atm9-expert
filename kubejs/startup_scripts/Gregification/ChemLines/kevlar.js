// @ts-nocheck


GTCEuStartupEvents.registry('gtceu:material', event => {

    
    event.create('kevlar_carbon_fiber_mesh')        
        .color(0x8A7A46)
        .gem()        
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .iconSet(GTMaterialIconSet.DULL);

    event.create('kevlar')
        .color(0x76683C)
        .dust()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .iconSet(GTMaterialIconSet.DULL);
    
});