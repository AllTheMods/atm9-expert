const circuitMaterials = [
    { component: 'infused_star', structural: 'corrosive_etrium_alloy', conductive: 'etrium' },
    { component: 'reinforced_star', structural: 'destructive_scandozirconium', conductive: 'tenebrium' },
    { component: 'atomic_star', structural: 'vengeful_gadomeitnerium_alloy', conductive: 'infinity' },
    { component: 'dark_matter', structural: 'steadfast_rhenobedrock_alloy', conductive: 'dark_matter' },
    { component: 'red_matter', structural: 'demonic_antimatter_alloy', conductive: 'red_matter' }
];

const smdMaterials = {
    1: {
        resistor: 'gtceu:quantum_resistor',
        capacitor: 'gtceu:quantum_capacitor',
        diode: 'gtceu:quantum_diode',
        inductor: 'gtceu:quantum_inductor',
        transistor: 'gtceu:quantum_transistor',
        ram: 'gtceu:qbit_memory',
        alternate_chip: 'gtceu:logic_gate',
        bus: 'gtceu:bus',
        oscillator: 'gtceu:oscillator',
        cpu_1: 'gtceu:cpu_core',
        cpu_2: 'gtceu:central_processing_unit'
    },
    2: {
        resistor: 'gtceu:advanced_quantum_resistor',
        capacitor: 'gtceu:advanced_quantum_capacitor',
        diode: 'gtceu:advanced_quantum_diode',
        inductor: 'gtceu:advanced_quantum_inductor',
        transistor: 'gtceu:advanced_quantum_transistor',
        ram: 'gtceu:advanced_qbit_memory',
        alternate_chip: 'gtceu:advanced_logic_gate',
        bus: 'gtceu:advanced_bus',
        oscillator: 'gtceu:advanced_oscillator',
        cpu_1: 'gtceu:advanced_cpu_core',
        cpu_2: 'gtceu:advanced_central_processing_unit'
    }

};

global.circuitLadder = [
    {
        id: 'photonic', tier: 'uev', gen: 1,
        research: { computer: 'gtceu:wetware_processor_computer', mainframe: 'gtceu:wetware_processor_mainframe' },
        stageEut: { processor: UHV, assembly: UHV, computer: UHV, mainframe: UHV },
        cwut: { computer: 20, mainframe: 100 },
        board: 'photonic_printed_circuit_board',
        core: 'advanced_neuroprocessing_unit',
        fineWire: circuitMaterials[0].conductive,
        doubleWire: circuitMaterials[0].conductive,
        frame: circuitMaterials[0].structural,
        plate: circuitMaterials[0].structural,
        bolt: circuitMaterials[0].component,
        foil: 'polyimide',
        polymer: 'polyimide',
        pump: 'uhv', sensor: 'uv',
        smd_capacitor: smdMaterials[1].capacitor,
        smd_resistor: smdMaterials[1].resistor,
        smd_diode: smdMaterials[1].diode,
        smd_inductor: smdMaterials[1].inductor,
        smd_transistor: smdMaterials[1].transistor,
        ram_chip: smdMaterials[1].ram,
        alternate_chip: smdMaterials[1].alternate_chip,
        bus: smdMaterials[1].bus,
        oscillator: smdMaterials[1].oscillator,
        cpu_1: smdMaterials[1].cpu_1,
        cpu_2: smdMaterials[1].cpu_2
    },
    {
        id: 'bioengineered', tier: 'uiv', gen: 1,
        research: { computer: 'gtceu:photonic_processor_computer', mainframe: 'gtceu:photonic_processor_mainframe' },
        stageEut: { processor: UEV, assembly: UEV, computer: UEV, mainframe: UEV },
        cwut: { computer: 24, mainframe: 105 },
        board: 'bioengineered_printed_circuit_board',
        core: 'advanced_neuroprocessing_unit',
        fineWire: circuitMaterials[1].conductive,
        doubleWire: circuitMaterials[1].conductive,
        frame: circuitMaterials[1].structural,
        plate: circuitMaterials[1].structural,
        bolt: circuitMaterials[1].component,
        foil: 'organic_polymer',
        polymer: 'organic_polymer',
        pump: 'uev', sensor: 'uhv',
        smd_capacitor: smdMaterials[1].capacitor,
        smd_resistor: smdMaterials[1].resistor,
        smd_diode: smdMaterials[1].diode,
        smd_inductor: smdMaterials[1].inductor,
        smd_transistor: smdMaterials[1].transistor,
        ram_chip: smdMaterials[1].ram,
        alternate_chip: smdMaterials[1].alternate_chip,
        bus: smdMaterials[1].bus,
        oscillator: smdMaterials[1].oscillator,
        cpu_1: smdMaterials[1].cpu_1,
        cpu_2: smdMaterials[1].cpu_2
    },
    {
        id: 'chaotic', tier: 'uxv', gen: 1,
        research: { computer: 'gtceu:bioengineered_processor_computer', mainframe: 'gtceu:bioengineered_processor_mainframe' },
        stageEut: { processor: UIV, assembly: UIV, computer: UIV, mainframe: UIV },
        cwut: { computer: 28, mainframe: 110 },
        board: 'chaotic_printed_circuit_board',
        core: 'advanced_neuroprocessing_unit',
        fineWire: circuitMaterials[2].conductive,
        doubleWire: circuitMaterials[2].conductive,
        frame: circuitMaterials[2].structural,
        plate: circuitMaterials[2].structural,
        bolt: circuitMaterials[2].component,
        foil: 'chaos_plastic',
        polymer: 'chaos_plastic',
        pump: 'uiv', sensor: 'uev',
        smd_capacitor: smdMaterials[1].capacitor,
        smd_resistor: smdMaterials[1].resistor,
        smd_diode: smdMaterials[1].diode,
        smd_inductor: smdMaterials[1].inductor,
        smd_transistor: smdMaterials[1].transistor,
        ram_chip: smdMaterials[1].ram,
        alternate_chip: smdMaterials[1].alternate_chip,
        bus: smdMaterials[1].bus,
        oscillator: smdMaterials[1].oscillator,
        cpu_1: smdMaterials[1].cpu_1,
        cpu_2: smdMaterials[1].cpu_2
    },
    {
        id: 'naquadric', tier: 'opv', gen: 2,
        research: { computer: 'gtceu:chaotic_processor_computer', mainframe: 'gtceu:chaotic_processor_mainframe' },
        stageEut: { processor: UXV, assembly: UXV, computer: UXV, mainframe: UXV },
        cwut: { computer: 32, mainframe: 115 },
        board: 'naquadric_printed_circuit_board',
        core: 'advanced_neuroprocessing_unit',
        fineWire: circuitMaterials[3].conductive,
        doubleWire: circuitMaterials[3].conductive,
        frame: circuitMaterials[3].structural,
        plate: circuitMaterials[3].structural,
        bolt: circuitMaterials[3].component,
        foil: 'naquadria_awakened',
        polymer: 'naquadria_awakened',
        pump: 'uxv', sensor: 'uiv',
        smd_capacitor: smdMaterials[2].capacitor,
        smd_resistor: smdMaterials[2].resistor,
        smd_diode: smdMaterials[2].diode,
        smd_inductor: smdMaterials[2].inductor,
        smd_transistor: smdMaterials[2].transistor,
        ram_chip: smdMaterials[2].ram,
        alternate_chip: smdMaterials[2].alternate_chip,
        bus: smdMaterials[2].bus,
        oscillator: smdMaterials[2].oscillator,
        cpu_1: smdMaterials[2].cpu_1,
        cpu_2: smdMaterials[2].cpu_2
    },
    {
        id: 'antimatter', tier: 'max', gen: 2,
        research: { computer: 'gtceu:naquadric_processor_computer', mainframe: 'gtceu:naquadric_processor_mainframe' },
        stageEut: { processor: OpV, assembly: OpV, computer: OpV, mainframe: OpV },
        cwut: { computer: 36, mainframe: 120 },
        board: 'antimatter_printed_circuit_board',
        core: 'advanced_neuroprocessing_unit',
        fineWire: circuitMaterials[4].conductive,
        doubleWire: circuitMaterials[4].conductive,
        frame: circuitMaterials[4].structural,
        plate: circuitMaterials[4].structural,
        bolt: circuitMaterials[4].component,
        foil: 'fifth_element',
        polymer: 'fifth_element',
        pump: 'opv', sensor: 'uxv',
        smd_capacitor: smdMaterials[2].capacitor,
        smd_resistor: smdMaterials[2].resistor,
        smd_diode: smdMaterials[2].diode,
        smd_inductor: smdMaterials[2].inductor,
        smd_transistor: smdMaterials[2].transistor,
        ram_chip: smdMaterials[2].ram,
        alternate_chip: smdMaterials[2].alternate_chip,
        bus: smdMaterials[2].bus,
        oscillator: smdMaterials[2].oscillator,
        cpu_1: smdMaterials[2].cpu_1,
        cpu_2: smdMaterials[2].cpu_2
    }
];



const circuitDurations = {
    bus: { 1: { eut: UHV, duration: 600 }, 2: { eut: UXV, duration: 1200 } },
    matrix: { 1: { eut: UHV, duration: 400 }, 2: { eut: UXV, duration: 800 } },
    oscillator_engrave: { 1: { eut: UHV, duration: 400 }, 2: { eut: UXV, duration: 800 } },
    oscillator: { 1: { eut: UHV, duration: 800 }, 2: { eut: UXV, duration: 1600 } },
    smd: { 1: { eut: UHV, duration: 200 }, 2: { eut: UXV, duration: 400 } },
    boule: { 1: { eut: UHV, duration: 1200 }, 2: { eut: UXV, duration: 2400 } },
    boule_cut: { 1: { eut: UHV, duration: 600 }, 2: { eut: UXV, duration: 1200 } },
    chipset_engrave: { 1: { eut: UHV, duration: 400 }, 2: { eut: UXV, duration: 800 } },
    chipset_cut: { 1: { eut: UHV, duration: 400 }, 2: { eut: UXV, duration: 800 } }
};

global.circuitParts = {
    bus: {
        perStage: [0, 0, 1, 2],
        1: {
            name: 'Bus',
            id: 'bus',
            matrix: {
                machine: circuitDurations.matrix[1],
                components: [
                    { fluid: 'tungsten_hexafluoride', amount: 1152 },
                    { item: 'restonia_foil', amount: 32 },
                    { item: 'emeradic_foil', amount: 32 },
                    { item: 'palis_foil', amount: 32 },
                    { item: 'diamatine_foil', amount: 32 },
                    { item: 'enori_foil', amount: 32 }
                ],
                output: { item: 'crystalline_matrix', amount: 16 }
            },
            matrix_alt: {
                machine: circuitDurations.matrix[1],
                components: [
                    { fluid: 'oganesson', amount: 144 },
                    { item: 'restonia_foil', amount: 64 },
                    { item: 'emeradic_foil', amount: 64 },
                    { item: 'palis_foil', amount: 64 },
                    { item: 'diamatine_foil', amount: 64 },
                    { item: 'enori_foil', amount: 64 }
                ],
                output: { item: 'crystalline_matrix', amount: 32 }
            },
            assemble: {
                machine: circuitDurations.bus[1],
                components: [
                    { item: 'silicon_germanium_plate', amount: 1 },
                    { item: 'crystalline_matrix', amount: 4 },
                    { item: 'etrium_fine_wire', amount: 32 },
                    { fluid: 'liquid_crystal_kevlar', amount: 1440 },
                    { bacteria: 'PichiaPastoris', amount: 1 }
                ],
                output: { item: 'bus', amount: 4 }
            }
        },
        2: {
            name: 'Advanced Bus',
            id: 'advanced_bus',
            matrix: {
                machine: circuitDurations.matrix[2],
                components: [
                    { fluid: 'tungsten_hexafluoride', amount: 2304 },
                    { item: 'empowered_restonia_foil', amount: 64 },
                    { item: 'empowered_emeradic_foil', amount: 64 },
                    { item: 'empowered_palis_foil', amount: 64 },
                    { item: 'empowered_diamatine_foil', amount: 64 },
                    { item: 'empowered_enori_foil', amount: 64 }
                ],
                output: { item: 'advanced_crystalline_matrix', amount: 32 }
            },
            matrix_alt: {
                machine: circuitDurations.matrix[2],
                components: [
                    { fluid: 'oganesson', amount: 288 },
                    { item: 'empowered_restonia_foil', amount: 128 },
                    { item: 'empowered_emeradic_foil', amount: 128 },
                    { item: 'empowered_palis_foil', amount: 128 },
                    { item: 'empowered_diamatine_foil', amount: 128 },
                    { item: 'empowered_enori_foil', amount: 128 }
                ],
                output: { item: 'advanced_crystalline_matrix', amount: 64 }
            },
            assemble: {
                machine: circuitDurations.bus[2],
                components: [
                    { item: 'indium_phosphide_plate', amount: 1 },
                    { item: 'advanced_crystalline_matrix', amount: 4 },
                    { item: 'dark_matter_fine_wire', amount: 64 },
                    { fluid: 'chaos_plastic', amount: 2880 },
                    { bacteria: 'PichiaPastoris', amount: 1 }
                ],
                output: { item: 'advanced_bus', amount: 4 }
            }
        }
    },

    oscillator: {
        perStage: [0, 0, 0, 2],
        1: {
            name: 'Oscillator',
            id: 'oscillator',
            boule: {
                machine: circuitDurations.boule[1],
                components: [
                    { dust: 'langasite', amount: 16 }
                ],
                output: { item: 'langasite_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'langasite_boule', amount: 1 }
                ],
                output: { item: 'langasite_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.oscillator_engrave[1],
                components: [
                    { item: 'langasite_wafer', amount: 1 },
                    { lens: 'void_crystal' }
                ],
                output: { item: 'oscillator_wafer', amount: 1 }
            },
            assemble: {
                machine: circuitDurations.oscillator[1],
                components: [
                    { item: 'oscillator_wafer', amount: 1 },
                    { item: 'gaia_foil', amount: 32 },
                    { fluid: 'liquid_crystal_kevlar', amount: 576 }
                ],
                output: { item: 'oscillator', amount: 4 }
            }
        },
        2: {
            name: 'Advanced Oscillator',
            id: 'advanced_oscillator',
            boule: {
                machine: circuitDurations.boule[2],
                components: [
                    { item: 'thorium_doped_calcium_fluoride', amount: 32 }
                ],
                output: { item: 'thorium_doped_calcium_fluoride_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'thorium_doped_calcium_fluoride_boule', amount: 1 }
                ],
                output: { item: 'thorium_doped_calcium_fluoride_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.oscillator_engrave[2],
                components: [
                    { item: 'thorium_doped_calcium_fluoride_wafer', amount: 1 },
                    { lens: 'empowered_void_crystal' }
                ],
                output: { item: 'advanced_oscillator_wafer', amount: 1 }
            },
            assemble: {
                machine: circuitDurations.oscillator[2],
                components: [
                    { item: 'advanced_oscillator_wafer', amount: 1 },
                    { item: 'dark_matter_foil', amount: 64 },
                    { fluid: 'chaos_plastic', amount: 1152 }
                ],
                output: { item: 'advanced_oscillator', amount: 4 }
            }
        }
    }
};


global.smdParts = {
    resistor: {
        1: {
            id: 'quantum_resistor',
            assemble: {
                machine: circuitDurations.smd[1],
                components: [
                    { dust: 'bismuth_telluride', amount: 16 },
                    { item: 'chromium_disilicide_foil', amount: 128 },
                    { item: 'empowered_restonia_foil', amount: 256 },
                    { fluid: 'polyimide', amount: 2304 }
                ],
                output: { item: 'quantum_resistor', amount: 128 }
            }
        },
        2: {
            id: 'advanced_quantum_resistor',
            assemble: {
                machine: circuitDurations.smd[2],
                components: [
                    { dust: 'bismuth_antimony_telluride', amount: 32 },
                    { dust: 'zirconium_diboride', amount: 32 },
                    { item: 'ruthenium_dioxide_foil', amount: 128 },
                    { item: 'empowered_restonia_foil', amount: 256 },
                    { fluid: 'naquadria_awakened', amount: 2304 }
                ],
                output: { item: 'advanced_quantum_resistor', amount: 256 }
            }
        }
    },
    transistor: {
        1: {
            id: 'quantum_transistor',
            assemble: {
                machine: circuitDurations.smd[1],
                components: [
                    { dust: 'tungsten_diselenide', amount: 16 },
                    { item: 'nickel_silicide_foil', amount: 128 },
                    { item: 'empowered_emeradic_foil', amount: 256 },
                    { fluid: 'polyimide', amount: 1152 }
                ],
                output: { item: 'quantum_transistor', amount: 128 }
            }
        },
        2: {
            id: 'advanced_quantum_transistor',
            assemble: {
                machine: circuitDurations.smd[2],
                components: [
                    { dust: 'indium_selenide', amount: 32 },
                    { dust: 'zirconium_dioxide', amount: 32 },
                    { item: 'erbium_disilicide_foil', amount: 128 },
                    { item: 'empowered_emeradic_foil', amount: 256 },
                    { fluid: 'naquadria_awakened', amount: 1152 }
                ],
                output: { item: 'advanced_quantum_transistor', amount: 256 }
            }
        }
    },
    capacitor: {
        1: {
            id: 'quantum_capacitor',
            assemble: {
                machine: circuitDurations.smd[1],
                components: [
                    { dust: 'zirconium_titanate', amount: 16 },
                    { item: 'titanium_nitride_foil', amount: 128 },
                    { item: 'empowered_palis_foil', amount: 256 },
                    { fluid: 'polyimide', amount: 576 }
                ],
                output: { item: 'quantum_capacitor', amount: 128 }
            }
        },
        2: {
            id: 'advanced_quantum_capacitor',
            assemble: {
                machine: circuitDurations.smd[2],
                components: [
                    { dust: 'gadolinium_zirconate', amount: 32 },
                    { dust: 'barium_titanate', amount: 32 },
                    { item: 'iridium_dioxide_foil', amount: 128 },
                    { item: 'empowered_palis_foil', amount: 256 },
                    { fluid: 'naquadria_awakened', amount: 288 }
                ],
                output: { item: 'advanced_quantum_capacitor', amount: 256 }
            }
        }
    },
    diode: {
        1: {
            id: 'quantum_diode',
            assemble: {
                machine: circuitDurations.smd[1],
                components: [
                    { dust: 'cadmium_telluride', amount: 16 },
                    { item: 'nickel_germanide_foil', amount: 128 },
                    { item: 'empowered_diamatine_foil', amount: 256 },
                    { fluid: 'polyimide', amount: 2304 }
                ],
                output: { item: 'quantum_diode', amount: 128 }
            }
        },
        2: {
            id: 'advanced_quantum_diode',
            assemble: {
                machine: circuitDurations.smd[2],
                components: [
                    { dust: 'cadmium_zinc_telluride', amount: 32 },
                    { dust: 'gadolinium_oxysulfide', amount: 32 },
                    { item: 'gold_germanium_foil', amount: 128 },
                    { item: 'empowered_diamatine_foil', amount: 256 },
                    { fluid: 'naquadria_awakened', amount: 2304 }
                ],
                output: { item: 'advanced_quantum_diode', amount: 256 }
            }
        }
    },
    inductor: {
        1: {
            id: 'quantum_inductor',
            assemble: {
                machine: circuitDurations.smd[1],
                components: [
                    { dust: 'gadolinium_iron_garnet', amount: 16 },
                    { item: 'sendust_foil', amount: 128 },
                    { item: 'empowered_enori_foil', amount: 256 },
                    { fluid: 'polyimide', amount: 1152 }
                ],
                output: { item: 'quantum_inductor', amount: 128 }
            }
        },
        2: {
            id: 'advanced_quantum_inductor',
            assemble: {
                machine: circuitDurations.smd[2],
                components: [
                    { dust: 'samarium_cobalt', amount: 32 },
                    { dust: 'gadolinium_gallium_garnet', amount: 32 },
                    { item: 'permendur_foil', amount: 128 },
                    { item: 'empowered_enori_foil', amount: 256 },
                    { fluid: 'naquadria_awakened', amount: 1152 }
                ],
                output: { item: 'advanced_quantum_inductor', amount: 256 }
            }
        }
    }
};


global.chipsetParts = {
    cpu: {
        1: {
            name: 'CPU Core',
            id: 'cpu_core',
            boule: {
                machine: circuitDurations.boule[1],
                components: [
                    { dust: 'bismuth_selenide', amount: 16 },
                    { dust: 'promethium', amount: 32 },
                    { dust: 'lutetium', amount: 32 },
                    { fluid: 'argon', amount: 10000 }
                ],
                output: { item: 'bismuth_selenide_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'bismuth_selenide_boule', amount: 1 }
                ],
                output: { item: 'bismuth_selenide_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[1],
                components: [
                    { item: 'bismuth_selenide_wafer', amount: 1 },
                    { lens: 'praseodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'cpu_core_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[1],
                components: [
                    { item: 'cpu_core_wafer', amount: 1 }
                ],
                output: { item: 'cpu_core', amount: 4 }
            }
        },
        2: {
            name: 'Advanced CPU Core',
            id: 'advanced_cpu_core',
            boule: {
                machine: circuitDurations.boule[2],
                components: [
                    { dust: 'indium_antimonide', amount: 32 },
                    { dust: 'actinium', amount: 64 },
                    { dust: 'neptunium', amount: 64 },
                    { fluid: 'krypton', amount: 20000 }
                ],
                output: { item: 'indium_antimonide_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'indium_antimonide_boule', amount: 1 }
                ],
                output: { item: 'indium_antimonide_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[2],
                components: [
                    { item: 'indium_antimonide_wafer', amount: 1 },
                    { lens: 'neodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'advanced_cpu_core_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[2],
                components: [
                    { item: 'advanced_cpu_core_wafer', amount: 1 }
                ],
                output: { item: 'advanced_cpu_core', amount: 4 }
            }
        }
    },
    cpu_chip: {
        1: {
            name: 'Central Processing Unit',
            id: 'central_processing_unit',
            boule: {
                machine: circuitDurations.boule[1],
                components: [
                    { dust: 'lithium_niobate', amount: 16 },
                    { dust: 'technetium', amount: 32 },
                    { dust: 'cerium', amount: 32 },
                    { fluid: 'neon', amount: 10000 }
                ],
                output: { item: 'lithium_niobate_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'lithium_niobate_boule', amount: 1 }
                ],
                output: { item: 'lithium_niobate_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[1],
                components: [
                    { item: 'lithium_niobate_wafer', amount: 1 },
                    { lens: 'praseodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'central_processing_unit_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[1],
                components: [
                    { item: 'central_processing_unit_wafer', amount: 1 }
                ],
                output: { item: 'central_processing_unit', amount: 4 }
            }
        },
        2: {
            name: 'Advanced Central Processing Unit',
            id: 'advanced_central_processing_unit',
            boule: {
                machine: circuitDurations.boule[2],
                components: [
                    { dust: 'gallium_nitride', amount: 32 },
                    { dust: 'aluminium_nitride', amount: 32 },
                    { dust: 'protactinium', amount: 64 },
                    { dust: 'lawrencium', amount: 64 },
                    { fluid: 'xenon', amount: 20000 }
                ],
                output: { item: 'gallium_nitride_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'gallium_nitride_boule', amount: 1 }
                ],
                output: { item: 'gallium_nitride_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[2],
                components: [
                    { item: 'gallium_nitride_wafer', amount: 1 },
                    { lens: 'neodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'advanced_central_processing_unit_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[2],
                components: [
                    { item: 'advanced_central_processing_unit_wafer', amount: 1 }
                ],
                output: { item: 'advanced_central_processing_unit', amount: 4 }
            }
        }
    },
    logic: {
        1: {
            name: 'Logic Gate',
            id: 'logic_gate',
            boule: {
                machine: circuitDurations.boule[1],
                components: [
                    { dust: 'vanadium_dioxide', amount: 16 },
                    { dust: 'tungsten', amount: 32 },
                    { dust: 'lanthanum', amount: 32 },
                    { fluid: 'helium', amount: 10000 }
                ],
                output: { item: 'vanadium_dioxide_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'vanadium_dioxide_boule', amount: 1 }
                ],
                output: { item: 'vanadium_dioxide_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[1],
                components: [
                    { item: 'vanadium_dioxide_wafer', amount: 1 },
                    { lens: 'praseodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'logic_gate_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[1],
                components: [
                    { item: 'logic_gate_wafer', amount: 1 }
                ],
                output: { item: 'logic_gate', amount: 4 }
            }
        },
        2: {
            name: 'Advanced Logic Gate',
            id: 'advanced_logic_gate',
            boule: {
                machine: circuitDurations.boule[2],
                components: [
                    { dust: 'cobalt_iron_boride', amount: 32 },
                    { dust: 'magnesium_oxide', amount: 32 },
                    { dust: 'plutonium', amount: 64 },
                    { dust: 'francium', amount: 64 },
                    { fluid: 'radon', amount: 20000 }
                ],
                output: { item: 'cobalt_iron_boride_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'cobalt_iron_boride_boule', amount: 1 }
                ],
                output: { item: 'cobalt_iron_boride_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[2],
                components: [
                    { item: 'cobalt_iron_boride_wafer', amount: 1 },
                    { lens: 'neodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'advanced_logic_gate_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[2],
                components: [
                    { item: 'advanced_logic_gate_wafer', amount: 1 }
                ],
                output: { item: 'advanced_logic_gate', amount: 4 }
            }
        }
    },
    memory: {
        1: {
            name: 'Qbit Memory',
            id: 'qbit_memory',
            boule: {
                machine: circuitDurations.boule[1],
                components: [
                    { dust: 'europium_yttrium_silicate', amount: 16 },
                    { dust: 'mendelevium', amount: 32 },
                    { dust: 'scandium', amount: 32 },
                    { fluid: 'helium', amount: 10000 }
                ],
                output: { item: 'europium_yttrium_silicate_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'europium_yttrium_silicate_boule', amount: 1 }
                ],
                output: { item: 'europium_yttrium_silicate_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[1],
                components: [
                    { item: 'europium_yttrium_silicate_wafer', amount: 1 },
                    { lens: 'praseodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'qbit_memory_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[1],
                components: [
                    { item: 'qbit_memory_wafer', amount: 1 }
                ],
                output: { item: 'qbit_memory', amount: 4 }
            }
        },
        2: {
            name: 'Advanced Qbit Memory',
            id: 'advanced_qbit_memory',
            boule: {
                machine: circuitDurations.boule[2],
                components: [
                    { dust: 'praseodymium_yttrium_silicate', amount: 32 },
                    { dust: 'einsteinium', amount: 64 },
                    { dust: 'nobelium', amount: 64 },
                    { fluid: 'helium_3', amount: 20000 }
                ],
                output: { item: 'praseodymium_yttrium_silicate_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'praseodymium_yttrium_silicate_boule', amount: 1 }
                ],
                output: { item: 'praseodymium_yttrium_silicate_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[2],
                components: [
                    { item: 'praseodymium_yttrium_silicate_wafer', amount: 1 },
                    { lens: 'neodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'advanced_qbit_memory_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[2],
                components: [
                    { item: 'advanced_qbit_memory_wafer', amount: 1 }
                ],
                output: { item: 'advanced_qbit_memory', amount: 4 }
            }
        }
    }
};


StartupEvents.registry('item', allthemods => {

    const boules = [
        { id: 'cpu_core_boule', name: 'CPU Core Boule', tooltip: 'Bismuth Selenide Crystal Boule' },
        { id: 'advanced_cpu_core_boule', name: 'Advanced CPU Core Boule', tooltip: 'Indium Antimonide Crystal Boule' },
        { id: 'central_processing_unit_boule', name: 'Central Processing Unit Boule', tooltip: 'Lithium Niobate Crystal Boule' },
        { id: 'advanced_central_processing_unit_boule', name: 'Advanced Central Processing Unit Boule', tooltip: 'Gallium Nitride Crystal Boule' },
        { id: 'logic_gate_boule', name: 'Logic Gate Boule', tooltip: 'Vanadium Dioxide Crystal Boule' },
        { id: 'advanced_logic_gate_boule', name: 'Advanced Logic Gate Boule', tooltip: 'Cobalt Iron Boride Crystal Boule' },
        { id: 'qbit_memory_boule', name: 'Qbit Memory Boule', tooltip: 'Europium Yttrium Silicate Crystal Boule' },
        { id: 'advanced_qbit_memory_boule', name: 'Advanced Qbit Memory Boule', tooltip: 'Praseodymium Yttrium Silicate Crystal Boule' },
        { id: 'oscillator_boule', name: 'Oscillator Boule', tooltip: 'Langasite Crystal Boule' },
        { id: 'advanced_oscillator_boule', name: 'Advanced Oscillator Boule', tooltip: 'Thorium Doped Calcium Fluoride Crystal Boule' },
        { id: 'photonic_soc_boule', name: 'Photonic SoC Boule', tooltip: 'Gallium Arsenide Crystal Boule' },
        { id: 'bioengineered_soc_boule', name: 'Bioengineered SoC Boule', tooltip: 'Indium Gallium Arsenide Crystal Boule' },
        { id: 'chaotic_soc_boule', name: 'Chaotic SoC Boule', tooltip: 'Aluminium Gallium Nitride Crystal Boule' }
    ];

    const blankWafers = [
        { id: 'cpu_core_wafer', name: 'Blank CPU Core Wafer', tooltip: 'Unengraved Bismuth Selenide Wafer', texture: 'gtceu:item/blank_wafer' },
        { id: 'advanced_cpu_core_wafer', name: 'Blank Advanced CPU Core Wafer', tooltip: 'Unengraved Indium Antimonide Wafer', texture: 'gtceu:item/advanced_blank_wafer' },
        { id: 'central_processing_unit_wafer', name: 'Blank Central Processing Unit Wafer', tooltip: 'Unengraved Lithium Niobate Wafer', texture: 'gtceu:item/blank_wafer' },
        { id: 'advanced_central_processing_unit_wafer', name: 'Blank Advanced Central Processing Unit Wafer', tooltip: 'Unengraved Gallium Nitride Wafer', texture: 'gtceu:item/advanced_blank_wafer' },
        { id: 'logic_gate_wafer', name: 'Blank Logic Gate Wafer', tooltip: 'Unengraved Vanadium Dioxide Wafer', texture: 'gtceu:item/blank_wafer' },
        { id: 'advanced_logic_gate_wafer', name: 'Blank Advanced Logic Gate Wafer', tooltip: 'Unengraved Cobalt Iron Boride Wafer', texture: 'gtceu:item/advanced_blank_wafer' },
        { id: 'qbit_memory_wafer', name: 'Blank Qbit Memory Wafer', tooltip: 'Unengraved Europium Yttrium Silicate Wafer', texture: 'gtceu:item/blank_wafer' },
        { id: 'advanced_qbit_memory_wafer', name: 'Blank Advanced Qbit Memory Wafer', tooltip: 'Unengraved Praseodymium Yttrium Silicate Wafer', texture: 'gtceu:item/advanced_blank_wafer' },
        { id: 'oscillator_wafer', name: 'Blank Oscillator Wafer', tooltip: 'Unengraved Langasite Wafer', texture: 'gtceu:item/blank_wafer' },
        { id: 'advanced_oscillator_wafer', name: 'Blank Advanced Oscillator Wafer', tooltip: 'Unengraved Thorium Doped Calcium Fluoride Wafer', texture: 'gtceu:item/advanced_blank_wafer' },
        { id: 'photonic_soc_wafer', name: 'Blank Photonic SoC Wafer', tooltip: 'Unengraved Gallium Arsenide Wafer' },
        { id: 'bioengineered_soc_wafer', name: 'Blank Bioengineered SoC Wafer', tooltip: 'Unengraved Indium Gallium Arsenide Wafer' },
        { id: 'chaotic_soc_wafer', name: 'Blank Chaotic SoC Wafer', tooltip: 'Unengraved Aluminium Gallium Nitride Wafer' }
    ];

    const engravedWafers = [
        { id: 'engraved_cpu_core_wafer', name: 'Engraved CPU Core Wafer', tooltip: 'Cuts into CPU Cores' },
        { id: 'engraved_advanced_cpu_core_wafer', name: 'Engraved Advanced CPU Core Wafer', tooltip: 'Cuts into Advanced CPU Cores' },
        { id: 'engraved_central_processing_unit_wafer', name: 'Engraved Central Processing Unit Wafer', tooltip: 'Cuts into Central Processing Units' },
        { id: 'engraved_advanced_central_processing_unit_wafer', name: 'Engraved Advanced Central Processing Unit Wafer', tooltip: 'Cuts into Advanced Central Processing Units' },
        { id: 'engraved_logic_gate_wafer', name: 'Engraved Logic Gate Wafer', tooltip: 'Cuts into Logic Gates' },
        { id: 'engraved_advanced_logic_gate_wafer', name: 'Engraved Advanced Logic Gate Wafer', tooltip: 'Cuts into Advanced Logic Gates' },
        { id: 'engraved_qbit_memory_wafer', name: 'Engraved Qbit Memory Wafer', tooltip: 'Cuts into Qbit Memory chips' },
        { id: 'engraved_advanced_qbit_memory_wafer', name: 'Engraved Advanced Qbit Memory Wafer', tooltip: 'Cuts into Advanced Qbit Memory chips' },
        { id: 'engraved_oscillator_wafer', name: 'Engraved Oscillator Wafer', tooltip: 'Used to assemble Oscillators' },
        { id: 'engraved_advanced_oscillator_wafer', name: 'Engraved Advanced Oscillator Wafer', tooltip: 'Used to assemble Advanced Oscillators' },
        { id: 'engraved_photonic_soc_wafer', name: 'Engraved Photonic SoC Wafer', tooltip: 'Cuts into Photonic SoCs' },
        { id: 'engraved_bioengineered_soc_wafer', name: 'Engraved Bioengineered SoC Wafer', tooltip: 'Cuts into Bioengineered SoCs' },
        { id: 'engraved_chaotic_soc_wafer', name: 'Engraved Chaotic SoC Wafer', tooltip: 'Cuts into Chaotic SoCs' }
    ];

    const chips = [
        { id: 'cpu_core', name: 'CPU Core', tooltip: 'Processor Core Chip' },
        { id: 'advanced_cpu_core', name: 'Advanced CPU Core', tooltip: 'Advanced Processor Core Chip' },
        { id: 'central_processing_unit', name: 'Central Processing Unit', tooltip: 'Processor Chip' },
        { id: 'advanced_central_processing_unit', name: 'Advanced Central Processing Unit', tooltip: 'Advanced Processor Chip' },
        { id: 'logic_gate', name: 'Logic Gate', tooltip: 'Logic Chip' },
        { id: 'advanced_logic_gate', name: 'Advanced Logic Gate', tooltip: 'Advanced Logic Chip' },
        { id: 'qbit_memory', name: 'Qbit Memory', tooltip: 'Memory Chip' },
        { id: 'advanced_qbit_memory', name: 'Advanced Qbit Memory', tooltip: 'Advanced Memory Chip' }
    ];

    const socs = [
        { id: 'photonic_soc', name: 'Photonic SoC', tooltip: 'UEV-Tier System on Chip, replaces the processor chips and SMDs' },
        { id: 'bioengineered_soc', name: 'Bioengineered SoC', tooltip: 'UIV-Tier System on Chip, replaces the processor chips and SMDs' },
        { id: 'chaotic_soc', name: 'Chaotic SoC', tooltip: 'UXV-Tier System on Chip, replaces the processor chips and SMDs' }
    ];

    const smds = [
        { id: 'quantum_resistor', name: 'Quantum Resistor', tooltip: 'Surface-Mount Resistor' },
        { id: 'advanced_quantum_resistor', name: 'Advanced Quantum Resistor', tooltip: 'Advanced Surface-Mount Resistor' },
        { id: 'quantum_transistor', name: 'Quantum Transistor', tooltip: 'Surface-Mount Transistor' },
        { id: 'advanced_quantum_transistor', name: 'Advanced Quantum Transistor', tooltip: 'Advanced Surface-Mount Transistor' },
        { id: 'quantum_capacitor', name: 'Quantum Capacitor', tooltip: 'Surface-Mount Capacitor' },
        { id: 'advanced_quantum_capacitor', name: 'Advanced Quantum Capacitor', tooltip: 'Advanced Surface-Mount Capacitor' },
        { id: 'quantum_diode', name: 'Quantum Diode', tooltip: 'Surface-Mount Diode' },
        { id: 'advanced_quantum_diode', name: 'Advanced Quantum Diode', tooltip: 'Advanced Surface-Mount Diode' },
        { id: 'quantum_inductor', name: 'Quantum Inductor', tooltip: 'Surface-Mount Inductor' },
        { id: 'advanced_quantum_inductor', name: 'Advanced Quantum Inductor', tooltip: 'Advanced Surface-Mount Inductor' }
    ];

    const circuitComponents = [
        { id: 'oscillator', name: 'Oscillator', tooltip: 'Timing Crystal Component' },
        { id: 'advanced_oscillator', name: 'Advanced Oscillator', tooltip: 'Advanced Timing Crystal Component' },
        { id: 'crystalline_matrix', name: 'Crystalline Matrix', tooltip: 'Crystal Lattice for Bus assembly' },
        { id: 'advanced_crystalline_matrix', name: 'Advanced Crystalline Matrix', tooltip: 'Advanced Crystal Lattice for Bus assembly' },
        { id: 'bus', name: 'Bus', tooltip: 'Data Bus Component' },
        { id: 'advanced_bus', name: 'Advanced Bus', tooltip: 'Advanced Data Bus Component' },
        { id: 'advanced_neuroprocessing_unit', name: 'Advanced Neuroprocessing Unit', tooltip: 'Processor core for UEV and higher circuits' }
    ];

    const circuitBoards = [
        { id: 'substrate_board', name: 'Substrate Board', tooltip: 'Base board for UEV and higher circuit boards' },
        { id: 'photonic_printed_circuit_board', name: 'Photonic Printed Circuit Board', tooltip: 'Circuit Board for UEV-Tier Photonic circuits' },
        { id: 'bioengineered_printed_circuit_board', name: 'Bioengineered Printed Circuit Board', tooltip: 'Circuit Board for UIV-Tier Bioengineered circuits' },
        { id: 'chaotic_printed_circuit_board', name: 'Chaotic Printed Circuit Board', tooltip: 'Circuit Board for UXV-Tier Chaotic circuits' },
        { id: 'naquadric_printed_circuit_board', name: 'Naquadric Printed Circuit Board', tooltip: 'Circuit Board for OpV-Tier Naquadric circuits' },
        { id: 'antimatter_printed_circuit_board', name: 'Antimatter Printed Circuit Board', tooltip: 'Circuit Board for MAX-Tier Antimatter circuits' }
    ];

        const registerItems = list => {
        list.forEach(entry => {
            const item = allthemods.create(`gtceu:${entry.id}`)
                .displayName(entry.name)
                .tooltip(entry.tooltip)
                .rarity('ie_masterwork')

            if (entry.texture) item.texture(entry.texture)
        })
    }

    registerItems(boules)
    registerItems(blankWafers)
    registerItems(engravedWafers)
    registerItems(chips)
    registerItems(socs)
    registerItems(smds)
    registerItems(circuitComponents)
    registerItems(circuitBoards)
});