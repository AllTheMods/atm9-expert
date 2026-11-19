// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

JEIEvents.hideItems(allthemods => {
	
	const modsToHide = ['mekanism', 'evilcraft', 'gtceu'];
    
    modsToHide.forEach(mod => {
        allthemods.hide({ mod: mod, custom: (stack) => {
            // This checks if the item is a "variant" (fluid-filled)
            return stack.nbt != null || stack.id.includes('bucket');
        }});
    });

	allthemods.hide([
        "sophisticatedstorage:feeding_upgrade",
        "sophisticatedstorage:advanced_feeding_upgrade",
        "sophisticatedstorage:smelting_upgrade",
        "sophisticatedstorage:auto_smelting_upgrade",
        "sophisticatedstorage:smoking_upgrade",
        "sophisticatedstorage:auto_smoking_upgrade",
        "sophisticatedstorage:blasting_upgrade",
        "sophisticatedstorage:auto_blasting_upgrade",
        "sophisticatedstorage:crafting_upgrade",
        "sophisticatedstorage:stonecutter_upgrade",
        "sophisticatedstorage:jukebox_upgrade",
        "sophisticatedstorage:advanced_jukebox_upgrade",
        "sophisticatedstorage:pump_upgrade",
        "sophisticatedstorage:advanced_pump_upgrade",
        "sophisticatedstorage:xp_pump_upgrade",
        "sophisticatedstorage:stack_downgrade_tier_1",
        "sophisticatedstorage:stack_downgrade_tier_2",
        "sophisticatedstorage:stack_downgrade_tier_3",
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_1_plus_conversion",
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_2_conversion",
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_3_conversion",
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_4_conversion",
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_5_conversion",
        "sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_2_conversion",
        "sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_3_conversion",
        "sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_4_conversion",
        "sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_5_conversion",
        "sophisticatedstorage:stack_upgrade_tier_2_to_tier_3_conversion",
        "sophisticatedstorage:stack_upgrade_tier_2_to_tier_4_conversion",
        "sophisticatedstorage:stack_upgrade_tier_2_to_tier_5_conversion",
        "sophisticatedstorage:stack_upgrade_tier_3_to_tier_4_conversion",
        "sophisticatedstorage:stack_upgrade_tier_3_to_tier_5_conversion",
        "sophisticatedstorage:stack_upgrade_tier_4_to_tier_5_conversion",
        "sophisticatedstorage:compression_upgrade",
    ]);
	
  allthemods.hide(/extrastorage:(block|disk|storagepart)_.+/)
  allthemods.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
  allthemods.hide(/extrastorage:advanced_(importer|exporter)/)
  allthemods.hide(/ae2:facade/)
  allthemods.hide(['angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'])
  allthemods.hide('spirit:compressed_soul_sand')
  allthemods.hide('reliquary:rod_of_lyssa')
  allthemods.hide(['mekanism:upgrade_anchor','mekanism:dimensional_stabilizer'])
  allthemods.hide('ars_nouveau:glyph_animate_block')
  allthemods.hide([
    'absentbydesign:slab_tuff',
    'absentbydesign:stairs_tuff',
    'absentbydesign:wall_tuff',
    'absentbydesign:wall_calcite',
    'absentbydesign:stairs_calcite',
    'absentbydesign:slab_calcite'
  ])
  allthemods.hide('croptopia:guide')
  allthemods.hide('ad_astra:etrionic_blast_furnace')
  allthemods.hide('ad_astra:compressor')
  allthemods.hide('#alltheores:ore_hammers')

  Color.DYE.forEach(color => {
    ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
      allthemods.hide(`refinedstorage:${color}_${machine}`)
    })
  })

  if (global.chunk) {
    allthemods.hide('mekanism:dimensional_stabilizer')
    allthemods.hide('ae2:spatial_anchor')
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
