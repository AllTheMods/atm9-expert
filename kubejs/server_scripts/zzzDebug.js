const IHI = Java.loadClass('forestry.api.genetics.capability.IIndividualHandlerItem');

let probeDone = false;

ServerEvents.tick(event => {
    if (probeDone) return;
    probeDone = true;
    const coilTypes = [
        'industrial_energizer', 'bacterial_vat', 'bacterial_growth_chamber', 'crystal_growth_chamber',
        'mana_burner', 'mana_converter', 'acid_brewing_vat', 'industrial_leacher', 'dissolution_tank',
        'oil_processing_plant', 'alloy_blast_smelter'
    ];
    const counts = {};
    const missing = {};

    event.server.recipeManager.getRecipes().forEach(r => {
        const id = String(r.id);
        const type = String(r.type).replace('gtceu:', '');

        if (coilTypes.indexOf(type) !== -1) {
            counts[type] = (counts[type] || 0) + 1;
            let has = false;
            try { has = r.data.contains('ebf_temp'); } catch (e) { has = false; }
            if (!has) {
                missing[type] = (missing[type] || 0) + 1;
                console.log('COIL-AUDIT-MISSING ' + type + ' ' + id);
            }
        }

        if (id.indexOf('gregification:drone_destination_') === 0) {
            try {
                r.outputs.forEach((cap, contents) => {
                    contents.forEach(c => {
                        const ing = c.content;
                        let stacks = [];
                        try { stacks = ing.getItems(); } catch (e) { stacks = []; }
                        stacks.forEach(st => {
                            if (String(st.id).indexOf('bee_drone_ge') !== -1) {
                                let sp = 'none';
                                try { sp = String(IHI.getIndividual(st).getSpecies().id()); } catch (e) { sp = 'ERROR ' + e; }
                                console.log('DRONE-LOADED ' + id + ' species=' + sp + ' tag=' + String(st.nbt).substring(0, 400));
                            }
                        });
                    });
                });
            } catch (e) {
                console.log('DRONE-LOADED-ERR ' + id + ' ' + e);
            }
        }
    });

    Object.keys(counts).forEach(t => {
        console.log('COIL-AUDIT ' + t + ' total=' + counts[t] + ' missing=' + (missing[t] || 0));
    });
});