StartupEvents.registry('item', allthemods => {
    // List your unique blueprint identifiers here
    const customBlueprints = [
        {id: 'blank', name: 'Blank'},
        {id: 'creative_container', name: 'Creative Container'},     //done
        {id: 'mob_swab', name: 'Mob Swab'},                         //done
        {id: 'mekasuit', name: 'MekaSuit'},                         //done
        {id: 'waystone', name: 'Waystone'},                         //done
        {id: 'quantum_computer', name: 'Quantum Computer'},         //done
        {id: 'laser_drill', name: 'Laser Drill'},                   //done
        {id: 'font', name: 'Font'},                                 //done
        {id: 'cake', name: 'Cake'},                                 //done
        {id: 'flight_module', name: 'Flight Module'},               //done
        {id: 'energy_core', name: 'Energy Core'},                   //done
        {id: 'crux', name: 'Crux'},                                 //done
        {id: 'thermal', name: 'Thermal'},                           //done
        {id: 'blood', name: 'Blood-Stained'},                       //done
        {id: 'outworld', name: 'Outworld'}                          //done
    ];

    

    customBlueprints.forEach(bp => {        
        allthemods.create(`gtceu:blueprint_${bp.id}`)            
            .texture('minecraft:item/paper')
            .color(0, 0x007EA7)
            //.rarity('ADVANCED')
            .displayName(`Blueprint (${bp.name})`)                                                
            .tooltip(`§7A ${bp.name} blueprint.`);
        });
});

