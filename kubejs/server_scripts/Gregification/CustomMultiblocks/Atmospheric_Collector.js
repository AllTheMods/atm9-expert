ServerEvents.recipes(allthemods => {   
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    const collectorEU = IV;
    const collectorDuration = 600;
    
    //overworld
    allthemods.recipes.gtceu.atmospheric_collector('gregification:overworld_onzone')        
        .outputFluids('gtceu:ozone 64000')
        .circuit(1)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:overworld'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:overworld_hydrogen')
        .outputFluids('gtceu:hydrogen 32000')
        .circuit(2)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:overworld'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:overworld_nitrogen')
        .outputFluids('gtceu:nitrogen 16000')
        .circuit(3)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:overworld'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:overworld_carbon_dioxide')
        .outputFluids('gtceu:carbon_dioxide 8000')
        .circuit(4)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:overworld'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:overworld_helium')
        .outputFluids('gtceu:helium 4000')
        .circuit(5)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:overworld'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:overworld_argon')
        .outputFluids('gtceu:argon 2000')
        .circuit(6)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:overworld'); 

    //nether
    allthemods.recipes.gtceu.atmospheric_collector('gregification:nether_carbon_monoxide')
        .outputFluids('gtceu:carbon_monoxide 64000')
        .circuit(11)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_nether'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:nether_coal_gas')
        .outputFluids('gtceu:coal_gas 32000')
        .circuit(12)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_nether'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:nether_hydrogen_sulfide')
        .outputFluids('gtceu:hydrogen_sulfide 16000')
        .circuit(13)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_nether'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:nether_sulfur_dioxide')
        .outputFluids('gtceu:sulfur_dioxide 8000')
        .circuit(14)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_nether'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:nether_helium_3')
        .outputFluids('gtceu:helium_3 4000')
        .circuit(15)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_nether'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:nether_neon')
        .outputFluids('gtceu:neon 2000')
        .circuit(16)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_nether'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:nether_ether')
        .outputFluids('industrialforegoing:ether_gas 2000')
        .circuit(17)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_nether'); 
    //end
    allthemods.recipes.gtceu.atmospheric_collector ('gregification:end_nitrogen_dioxide')
        .outputFluids('gtceu:nitrogen_dioxide 64000')
        .circuit(21)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_end'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:deuterium')
        .outputFluids('gtceu:deuterium 32000')
        .circuit(22)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_end'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:tritium')
        .outputFluids('gtceu:tritium 8000')
        .circuit(23)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_end'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:helium')
        .outputFluids('gtceu:helium 16000')
        .circuit(24)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_end'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:krypton')
        .outputFluids('gtceu:krypton 2000')
        .circuit(25)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_end'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:xenon')
        .outputFluids('gtceu:xenon 2000')
        .circuit(26)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_end'); 
    
    allthemods.recipes.gtceu.atmospheric_collector('gregification:radon')
        .outputFluids('gtceu:radon 2000')
        .circuit(27)
        .duration(collectorDuration).EUt(collectorEU).dimension('minecraft:the_end'); 

    //blood
    allthemods.recipes.gtceu.atmospheric_collector('gregification:bloodmagic_blood')
        .outputFluids('gtceu:sanguine_concentrate 16000')
        .circuit(18)
        .duration(collectorDuration).EUt(collectorEU).dimension('bloodmagic:dungeon'); 

    allthemods.recipes.gtceu.atmospheric_collector('gregification:evilcraft_blood')
        .outputFluids('evilcraft:blood 8000')
        .circuit(19)
        .duration(collectorDuration).EUt(collectorEU).dimension('bloodmagic:dungeon'); 
        
    allthemods.recipes.gtceu.atmospheric_collector('gregification:terrazine')
        .outputFluids('gtceu:terrazine 100')
        .circuit(30)
        .duration(collectorDuration).EUt(collectorEU).dimension('ad_astra:moon'); 

});