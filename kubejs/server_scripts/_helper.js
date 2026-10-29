// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// priority: 100000
/*
global.tiers = { 
    uhv: 2097152, 
    uev: 8388608, 
    uiv: 33554432, 
    uxv: 134217728, 
    opv: 536870912, 
    max: 2147483647 
};


ServerEvents.recipes(activeContext => {
    global.currentRecipeEvent = activeContext;
});

global.addLaserEngraver = (itemIn, lensIn, itemOut, duration, eu, oID) => { 
    // Safely reads the globally captured event stream
    let event = global.currentRecipeEvent;
    
    let outputID = oID ? String(oID) : String(itemOut);
    outputID = outputID.replace(/:/g, '_').replace(/[^a-z0-9_\/]/gi, '_');
    
    event.recipes.gtceu.laser_engraver(`allthemods:laser_engraver/${outputID}`)
        .itemInputs([itemIn, lensIn]) 
        .itemOutputs(itemOut)
        .duration(duration)
        .EUt(eu)
        .cleanroom(CleanroomType.STERILE_CLEANROOM);
};


global.addMixer = (itemsIn, fluidIn, itemsOut, fluidOut, duration, eu) => { 
    let event = global.currentRecipeEvent;

    event.recipes.gtceu.mixer(`gregification:mixer/${String(itemsOut[0]).replace(/[^a-z0-9]/gi, '_')}`)
        .itemInputs(itemsIn)
        .inputFluids(fluidIn)
        .itemOutputs(itemsOut)
        .outputFluids(fluidOut)
        .duration(duration)
        .EUt(eu);
};
*/

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
