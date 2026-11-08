// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

JEIEvents.hideItems(allthemods => {
	const GTToolItemForJeiGroups = Java.loadClass('com.gregtechceu.gtceu.api.item.tool.GTToolItem');
	
	const modsToHide = ['mekanism', 'evilcraft', 'gtceu'];
    
    modsToHide.forEach(mod => {
        allthemods.hide({ mod: mod, custom: (stack) => {
            // Keep GT tools and fluid buckets available for the pack's collapsible JEI++ groups.
            if (mod === 'gtceu' && (stack.item instanceof GTToolItemForJeiGroups || stack.id.endsWith('_bucket'))) {
                return false;
            }
            // This checks if the item is a "variant" (fluid-filled)
            return stack.nbt != null || stack.id.includes('bucket');
        }});
    });

	
	
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
