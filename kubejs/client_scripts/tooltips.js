// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// priority: 0
const circuits = [
  //ULV
  {
    id: 'gtceu:vacuum_tube',
    text: 'Your first ULV circuit.',
    tier: 'ULV-Tier Circuit',
    colour: 0xFFFFFF
  },
  {
    id: 'gtceu:nand_chip',
    text: 'Your final ULV circuit.',
    tier: 'ULV-Tier Circuit',
    colour: 0xFFFFFF
  },
  //LV
  {
    id: 'gtceu:basic_electronic_circuit',
    text: 'Your first LV circuit.',
    tier: 'LV-Tier Circuit',
    colour: 0xFFFFFF
  },
  {
    id: 'gtceu:basic_integrated_circuit',
    text: 'Your second LV circuit.',
    tier: 'LV-Tier Circuit',
    colour: 0xFFFFFF
  },
  {
    id: 'gtceu:microchip_processor',
    text: 'Your final LV circuit.',
    tier: 'LV-Tier Circuit',
    colour: 0xFFFFFF
  },
  //MV
  {
    id: 'gtceu:good_electronic_circuit',
    text: 'Your first MV circuit.',
    tier: 'MV-Tier Circuit',
    colour: 0x55FFFF
  },
  {
    id: 'gtceu:good_integrated_circuit',
    text: 'Your second MV circuit.',
    tier: 'MV-Tier Circuit',
    colour: 0x55FFFF
  },
  {
    id: 'gtceu:micro_processor',
    text: 'Your final MV circuit.',
    tier: 'MV-Tier Circuit',
    colour: 0x55FFFF
  },
  //HV
  {
    id: 'gtceu:advanced_integrated_circuit',
    text: 'Your first HV circuit.',
    tier: 'HV-Tier Circuit',
    colour: 0xFFAA00
  },
  {
    id: 'gtceu:micro_processor_assembly',
    text: 'Your second HV circuit.',
    tier: 'HV-Tier Circuit',
    colour: 0xFFAA00
  },
  {
    id: 'gtceu:nano_processor',
    text: 'Your final HV circuit.',
    tier: 'HV-Tier Circuit',
    colour: 0xFFAA00
  },
  //EV
  {
    id: 'gtceu:micro_processor_computer',
    text: 'Your first EV circuit.',
    tier: 'EV-Tier Circuit',
    colour: 0xAA00AA
  },
  {
    id: 'gtceu:nano_processor_assembly',
    text: 'Your second EV circuit.',
    tier: 'EV-Tier Circuit',
    colour: 0xAA00AA
  },
  {
    id: 'gtceu:quantum_processor',
    text: 'Your final EV circuit.',
    tier: 'EV-Tier Circuit',
    colour: 0xAA00AA
  },
  //IV
  {
    id: 'gtceu:micro_processor_mainframe',
    text: 'Your first IV circuit.',
    tier: 'IV-Tier Circuit',
    colour: 0x0000AA
  },
  {
    id: 'gtceu:nano_processor_computer',
    text: 'Your second IV circuit.',
    tier: 'IV-Tier Circuit',
    colour: 0x0000AA
  },
  {
    id: 'gtceu:quantum_processor_assembly',
    text: 'Your third IV circuit.',
    tier: 'IV-Tier Circuit',
    colour: 0x0000AA
  },
  {
    id: 'gtceu:crystal_processor',
    text: 'Your final IV circuit.',
    tier: 'IV-Tier Circuit',
    colour: 0x0000AA
  },
  //LuV
  {
    id: 'gtceu:nano_processor_mainframe',
    text: 'Your first LuV circuit.',
    tier: 'LuV-Tier Circuit',
    colour: 0xFF55FF
  },
  {
    id: 'gtceu:quantum_processor_computer',
    text: 'Your second LuV circuit.',
    tier: 'LuV-Tier Circuit',
    colour: 0xFF55FF
  },
  {
    id: 'gtceu:crystal_processor_assembly',
    text: 'Your third LuV circuit.',
    tier: 'LuV-Tier Circuit',
    colour: 0xFF55FF
  },
  {
    id: 'gtceu:wetware_processor',
    text: 'Your final LuV circuit.',
    tier: 'LuV-Tier Circuit',
    colour: 0xFF55FF
  },
  //ZPM
  {
    id: 'gtceu:quantum_processor_mainframe',
    text: 'Your first ZPM circuit.',
    tier: 'ZPM-Tier Circuit',
    colour: 0xFF5555
  },
  {
    id: 'gtceu:crystal_processor_computer',
    text: 'Your second ZPM circuit.',
    tier: 'ZPM-Tier Circuit',
    colour: 0xFF5555
  },
  {
    id: 'gtceu:wetware_processor_assembly',
    text: 'Your final ZPM circuit.',
    tier: 'ZPM-Tier Circuit',
    colour: 0xFF5555
  },
  //UV
  {
    id: 'gtceu:crystal_processor_mainframe',
    text: 'Your first UV circuit.',
    tier: 'UV-Tier Circuit',
    colour: 0x00AAAA
  },
  {
    id: 'gtceu:wetware_processor_computer',
    text: 'Your final UV circuit.',
    tier: 'UV-Tier Circuit',
    colour: 0x00AAAA
  },
  //UHV
  {
    id: 'gtceu:wetware_processor_mainframe',
    text: 'Your first and only UHV circuit.',
    tier: 'UHV-Tier Circuit',
    colour: 0xAA0000
  }
]

ItemEvents.tooltip(allthemods => {
  // Re-add Chemlib info to unified materials
  let chemlibTooltips = JsonIO.read('kubejs/client_scripts/chemlibCompat.json')
  chemlibTooltips.forEach((item, tooltips) => {
    allthemods.addAdvanced(item, (stack, advanced, text) => {
      text.add(1, tooltips[0])
      if (tooltips.length > 1) {
        text.add(2, tooltips[1])
      }
    })
  })

  //AllTheModium
  allthemods.add('allthemodium:teleport_pad', [
    Text.translate('tooltip.atm9e.teleport_pad.1'),
    Text.translate('tooltip.atm9e.teleport_pad.2'),
    Text.translate('tooltip.atm9e.teleport_pad.3').red(),
    Text.translate('tooltip.atm9e.teleport_pad.4').red(),
    Text.translate('tooltip.atm9e.teleport_pad.5')
  ])

  //Mekanism
  allthemods.add('mekanism:creative_energy_cube', [[Text.translate('tooltip.atm9e.creative_energy_cube.energize').darkPurple()],])

  // Mob Grinding Utils
  allthemods.addAdvanced('mob_grinding_utils:rotten_egg', (stack, advanced, text) => {
    text.add(3, Text.translate('tooltip.atm9e.rotten_egg').yellow())
  })
  allthemods.addAdvanced('mob_grinding_utils:golden_egg', (stack, advanced, text) => {
    text.add(3, Text.translate('tooltip.atm9e.golden_egg').yellow())
  })

  // RS Infinity Booster
  allthemods.add('rsinfinitybooster:infinity_card', [
    Text.translate('tooltip.atm9e.rs_infinity.wireless'),
    Text.translate('tooltip.atm9e.infinity.same_dim')
  ])
  allthemods.add('rsinfinitybooster:dimension_card', [
    Text.translate('tooltip.atm9e.rs_infinity.wireless'),
    Text.translate('tooltip.atm9e.infinity.cross_dim')
  ])

  // AE2 Infinity Booster
  allthemods.add('aeinfinitybooster:infinity_card', [
    Text.translate('tooltip.atm9e.ae2_infinity.wireless'),
    Text.translate('tooltip.atm9e.infinity.same_dim')
  ])
  allthemods.add('aeinfinitybooster:dimension_card', [
    Text.translate('tooltip.atm9e.ae2_infinity.wireless'),
    Text.translate('tooltip.atm9e.infinity.cross_dim')
  ])

  // Extradisks
  allthemods.add('extradisks:infinite_storage_disk', [Text.translate('tooltip.atm9e.recipe_disabled').red()])
  allthemods.add('extradisks:infinite_storage_block', [Text.translate('tooltip.atm9e.recipe_disabled').red()])
  allthemods.add('extradisks:infinite_storage_part', [Text.translate('tooltip.atm9e.recipe_disabled').red()])
  allthemods.add('extradisks:infinite_fluid_storage_disk', [Text.translate('tooltip.atm9e.recipe_disabled').red()])
  allthemods.add('extradisks:infinite_fluid_storage_block', [Text.translate('tooltip.atm9e.recipe_disabled').red()])
  allthemods.add('extradisks:infinite_fluid_storage_part', [Text.translate('tooltip.atm9e.recipe_disabled').red()])

  //pipes
  allthemods.add('pipez:item_pipe', [
    [Text.translate('tooltip.atm9e.pipez.default'), ' ', Text.of('4'), ' ', Text.translate('tooltip.atm9e.pipez.items_20t')],
    [Text.translate('tooltip.atm9e.pipez.basic'), ' ', Text.of('8'), ' ', Text.translate('tooltip.atm9e.pipez.items_15t')],
    [Text.translate('tooltip.atm9e.pipez.improved').gold(), ' ', Text.of('16').yellow(), ' ', Text.translate('tooltip.atm9e.pipez.items_10t').gold()],
    [Text.translate('tooltip.atm9e.pipez.advanced').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.translate('tooltip.atm9e.pipez.items_5t').darkAqua()],
    [Text.translate('tooltip.atm9e.pipez.ultimate').darkGray(), ' ', Text.of('64').gray(), ' ', Text.translate('tooltip.atm9e.pipez.items_1t').darkGray()]
  ])
  allthemods.add('pipez:fluid_pipe', [
    [Text.translate('tooltip.atm9e.pipez.default'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.translate('tooltip.atm9e.pipez.basic'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.translate('tooltip.atm9e.pipez.improved').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.translate('tooltip.atm9e.pipez.advanced').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.translate('tooltip.atm9e.pipez.ultimate').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  allthemods.add('pipez:gas_pipe', [
    [Text.translate('tooltip.atm9e.pipez.default'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.translate('tooltip.atm9e.pipez.basic'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.translate('tooltip.atm9e.pipez.improved').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.translate('tooltip.atm9e.pipez.advanced').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.translate('tooltip.atm9e.pipez.ultimate').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()]
  ])
  allthemods.add('pipez:energy_pipe', [
    [Text.translate('tooltip.atm9e.pipez.default'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.translate('tooltip.atm9e.pipez.basic'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.translate('tooltip.atm9e.pipez.improved').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.translate('tooltip.atm9e.pipez.advanced').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.translate('tooltip.atm9e.pipez.ultimate').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()]
  ])

  //upgrades
  allthemods.add('pipez:basic_upgrade', [
    [Text.translate('tooltip.atm9e.pipez.item'), ' ', Text.of('8'), ' ', Text.translate('tooltip.atm9e.pipez.items_15t')],
    [Text.translate('tooltip.atm9e.pipez.fluid'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.translate('tooltip.atm9e.pipez.gas'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.translate('tooltip.atm9e.pipez.energy'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])
  allthemods.add('pipez:improved_upgrade', [
    [Text.translate('tooltip.atm9e.pipez.item').gold(), ' ', Text.of('16').yellow(), ' ', Text.translate('tooltip.atm9e.pipez.items_10t').gold()],
    [Text.translate('tooltip.atm9e.pipez.fluid').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.translate('tooltip.atm9e.pipez.gas').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.translate('tooltip.atm9e.pipez.energy').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])
  allthemods.add('pipez:advanced_upgrade', [
    [Text.translate('tooltip.atm9e.pipez.item').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.translate('tooltip.atm9e.pipez.items_5t').darkAqua()],
    [Text.translate('tooltip.atm9e.pipez.fluid').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.translate('tooltip.atm9e.pipez.gas').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.translate('tooltip.atm9e.pipez.energy').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])
  allthemods.add('pipez:ultimate_upgrade', [
    [Text.translate('tooltip.atm9e.pipez.item').darkGray(), ' ', Text.of('64').gray(), ' ', Text.translate('tooltip.atm9e.pipez.items_1t').darkGray()],
    [Text.translate('tooltip.atm9e.pipez.fluid').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.translate('tooltip.atm9e.pipez.gas').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.translate('tooltip.atm9e.pipez.energy').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])

  //GTCEu
  allthemods.add('gtceu:neocube',
    [
      Text.translate('tooltip.atm9e.neocube')
    ]
  )
  allthemods.add('gtceu:neural_node',
    [
      Text.translate('tooltip.atm9e.neural_node')
    ]
  )
  allthemods.add('gtceu:advanced_large_chemical_reactor',
    [
      Text.translate('tooltip.atm9e.alcr')
    ]
  )

  circuits.forEach((circuit) => {
    const shortId = circuit.id.split(':')[1]
    const tierKey = circuit.tier.split('-')[0]
    allthemods.add(circuit.id,
      [
        Text.translate(`tooltip.atm9e.gt_circuit.${shortId}`),
        Text.translate(`tooltip.atm9e.gt_circuit_tier.${tierKey}`).color(circuit.colour)
      ]
    )
  })

  //SophisticatedStorage

  let sophMats = [
    'copper',
    'iron',
    'gold',
    'diamond',
    'netherite'
  ]

  for (let mat of sophMats) {
    allthemods.add(`sophisticatedstorage:${mat}_chest`, [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
    allthemods.add(`sophisticatedstorage:${mat}_barrel`, [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
    allthemods.add(`sophisticatedstorage:limited_${mat}_barrel_1`, [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
    allthemods.add(`sophisticatedstorage:limited_${mat}_barrel_2`, [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
    allthemods.add(`sophisticatedstorage:limited_${mat}_barrel_3`, [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
    allthemods.add(`sophisticatedstorage:limited_${mat}_barrel_4`, [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
  }
  allthemods.add('sophisticatedstorage:chest', [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
  allthemods.add('sophisticatedstorage:barrel', [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
  allthemods.add('sophisticatedstorage:limited_barrel_1', [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
  allthemods.add('sophisticatedstorage:limited_barrel_2', [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
  allthemods.add('sophisticatedstorage:limited_barrel_3', [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
  allthemods.add('sophisticatedstorage:limited_barrel_4', [Text.translate('tooltip.atm9e.sophisticatedstorage.wood_change')])
  
  //PHASING OUT FOR REMOVAL
  allthemods.add(/^generatorgalore:.*/, [Text.translate('tooltip.atm9e.generatorgalore_removal').red()])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
