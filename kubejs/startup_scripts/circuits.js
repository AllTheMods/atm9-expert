// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

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
        fineWire: 'eternium',
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
    bus: { 1: { eut: UHV, duration: 600, cleanroom: 'sterile' }, 2: { eut: UXV, duration: 1200, cleanroom: 'sterile' } },
    matrix: { 1: { eut: UHV, duration: 400, cleanroom: 'sterile' }, 2: { eut: UXV, duration: 800, cleanroom: 'sterile' } },
    oscillator_engrave: { 1: { eut: UHV, duration: 400, cleanroom: 'sterile' }, 2: { eut: UXV, duration: 800, cleanroom: 'sterile' } },
    oscillator: { 1: { eut: UHV, duration: 800, cleanroom: 'sterile' }, 2: { eut: UXV, duration: 1600, cleanroom: 'sterile' } },
    smd: { 1: { eut: UHV, duration: 200, cleanroom: 'sterile' }, 2: { eut: UXV, duration: 400, cleanroom: 'sterile' } },
    boule: { 1: { eut: UHV, duration: 1200 }, 2: { eut: UXV, duration: 2400 } },
    boule_cut: { 1: { eut: UHV, duration: 600 }, 2: { eut: UXV, duration: 1200 } },
    chipset_engrave: { 1: { eut: UHV, duration: 400, cleanroom: 'sterile' }, 2: { eut: UXV, duration: 800, cleanroom: 'sterile' } },
    chipset_cut: { 1: { eut: UHV, duration: 400, cleanroom: 'sterile' }, 2: { eut: UXV, duration: 800, cleanroom: 'sterile' } },
    substrate: { eut: UHV, duration: 600 },
    neuroprocessor: { eut: UHV, duration: 800, cleanroom: 'sterile' },
    pcb: { photonic: { eut: UHV, duration: 400 }, bioengineered: { eut: UEV, duration: 600 }, chaotic: { eut: UIV, duration: 800 }, naquadric: { eut: UXV, duration: 1000 }, antimatter: { eut: OpV, duration: 1200 } },
    soc_boule: { photonic: { eut: UXV, duration: 2400 }, bioengineered: { eut: OpV, duration: 3000 }, chaotic: { eut: MAX, duration: 3600 } },
    soc_boule_cut: { photonic: { eut: UXV, duration: 1200 }, bioengineered: { eut: OpV, duration: 1500 }, chaotic: { eut: MAX, duration: 1800 } },
    soc_engrave: { photonic: { eut: UXV, duration: 800, cleanroom: 'sterile' }, bioengineered: { eut: OpV, duration: 1000, cleanroom: 'sterile' }, chaotic: { eut: MAX, duration: 1200, cleanroom: 'sterile' } },
    soc_cut: { photonic: { eut: UXV, duration: 800, cleanroom: 'sterile' }, bioengineered: { eut: OpV, duration: 1000, cleanroom: 'sterile' }, chaotic: { eut: MAX, duration: 1200, cleanroom: 'sterile' } }
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
                    { item: 'eternium_fine_wire', amount: 32 },
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
                    { item: 'empowered_restonia_foil', amount: 64 },
                    { item: 'empowered_emeradic_foil', amount: 64 },
                    { item: 'empowered_palis_foil', amount: 64 },
                    { item: 'empowered_diamatine_foil', amount: 64 },
                    { item: 'empowered_enori_foil', amount: 64 }
                ],
                output: { item: 'advanced_crystalline_matrix', amount: 32 }
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
        perStage: [0, 0, 1, 2],
        1: {
            name: 'Oscillator',
            id: 'oscillator',
            boule: {
                machine: circuitDurations.boule[1],
                components: [
                    { dust: 'langasite', amount: 16 },
                    { dust: 'tantalum', amount: 16 },
                    { dust: 'niobium', amount: 16 }
                ],
                output: { item: 'oscillator_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'oscillator_boule', amount: 1 }
                ],
                output: { item: 'oscillator_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.oscillator_engrave[1],
                components: [
                    { item: 'oscillator_wafer', amount: 1 },
                    { lens: 'demon' }
                ],
                output: { item: 'engraved_oscillator_wafer', amount: 1 }
            },
            assemble: {
                machine: circuitDurations.oscillator[1],
                components: [
                    { item: 'engraved_oscillator_wafer', amount: 1 },
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
                    { gem: 'thorium_doped_calcium_fluoride', amount: 32 },
                    { dust: 'strontium', amount: 32 },
                    { dust: 'aluminium', amount: 16 },
                    { dust: 'lithium', amount: 16 },
                    { fluid: 'fluorine', amount: 2000 }
                ],
                output: { item: 'advanced_oscillator_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'advanced_oscillator_boule', amount: 1 }
                ],
                output: { item: 'advanced_oscillator_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.oscillator_engrave[2],
                components: [
                    { item: 'advanced_oscillator_wafer', amount: 1 },
                    { lens: 'steadfast' }
                ],
                output: { item: 'engraved_advanced_oscillator_wafer', amount: 1 }
            },
            assemble: {
                machine: circuitDurations.oscillator[2],
                components: [
                    { item: 'engraved_advanced_oscillator_wafer', amount: 1 },
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
                    { dust: 'tellurium', amount: 32 },
                    { fluid: 'argon', amount: 10000 }
                ],
                output: { item: 'cpu_core_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'cpu_core_boule', amount: 1 }
                ],
                output: { item: 'cpu_core_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[1],
                components: [
                    { item: 'cpu_core_wafer', amount: 1 },
                    { lens: 'praseodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'engraved_cpu_core_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[1],
                components: [
                    { item: 'engraved_cpu_core_wafer', amount: 1 }
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
                    { dust: 'tellurium', amount: 32 },
                    { dust: 'germanium', amount: 32 },
                    { fluid: 'krypton', amount: 20000 }
                ],
                output: { item: 'advanced_cpu_core_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'advanced_cpu_core_boule', amount: 1 }
                ],
                output: { item: 'advanced_cpu_core_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[2],
                components: [
                    { item: 'advanced_cpu_core_wafer', amount: 1 },
                    { lens: 'neodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'engraved_advanced_cpu_core_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[2],
                components: [
                    { item: 'engraved_advanced_cpu_core_wafer', amount: 1 }
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
                    { dust: 'magnesium', amount: 32 },
                    { fluid: 'neon', amount: 10000 }
                ],
                output: { item: 'central_processing_unit_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'central_processing_unit_boule', amount: 1 }
                ],
                output: { item: 'central_processing_unit_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[1],
                components: [
                    { item: 'central_processing_unit_wafer', amount: 1 },
                    { lens: 'praseodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'engraved_central_processing_unit_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[1],
                components: [
                    { item: 'engraved_central_processing_unit_wafer', amount: 1 }
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
                    { dust: 'magnesium', amount: 32 },
                    { dust: 'silicon', amount: 32 },
                    { fluid: 'xenon', amount: 20000 },
                    { fluid: 'ammonia', amount: 5000 }
                ],
                output: { item: 'advanced_central_processing_unit_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'advanced_central_processing_unit_boule', amount: 1 }
                ],
                output: { item: 'advanced_central_processing_unit_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[2],
                components: [
                    { item: 'advanced_central_processing_unit_wafer', amount: 1 },
                    { lens: 'neodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'engraved_advanced_central_processing_unit_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[2],
                components: [
                    { item: 'engraved_advanced_central_processing_unit_wafer', amount: 1 }
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
                    { dust: 'chromium', amount: 32 },
                    { fluid: 'helium', amount: 10000 }
                ],
                output: { item: 'logic_gate_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'logic_gate_boule', amount: 1 }
                ],
                output: { item: 'logic_gate_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[1],
                components: [
                    { item: 'logic_gate_wafer', amount: 1 },
                    { lens: 'praseodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'engraved_logic_gate_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[1],
                components: [
                    { item: 'engraved_logic_gate_wafer', amount: 1 }
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
                    { dust: 'ruthenium', amount: 32 },
                    { dust: 'tantalum', amount: 32 },
                    { fluid: 'radon', amount: 20000 }
                ],
                output: { item: 'advanced_logic_gate_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'advanced_logic_gate_boule', amount: 1 }
                ],
                output: { item: 'advanced_logic_gate_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[2],
                components: [
                    { item: 'advanced_logic_gate_wafer', amount: 1 },
                    { lens: 'neodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'engraved_advanced_logic_gate_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[2],
                components: [
                    { item: 'engraved_advanced_logic_gate_wafer', amount: 1 }
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
                    { dust: 'erbium', amount: 32 },
                    { fluid: 'helium', amount: 10000 }
                ],
                output: { item: 'qbit_memory_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[1],
                components: [
                    { item: 'qbit_memory_boule', amount: 1 }
                ],
                output: { item: 'qbit_memory_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[1],
                components: [
                    { item: 'qbit_memory_wafer', amount: 1 },
                    { lens: 'praseodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'engraved_qbit_memory_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[1],
                components: [
                    { item: 'engraved_qbit_memory_wafer', amount: 1 }
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
                    { dust: 'ytterbium', amount: 32 },
                    { dust: 'erbium', amount: 32 },
                    { fluid: 'helium_3', amount: 20000 }
                ],
                output: { item: 'advanced_qbit_memory_boule', amount: 1 }
            },
            wafer_cut: {
                machine: circuitDurations.boule_cut[2],
                components: [
                    { item: 'advanced_qbit_memory_boule', amount: 1 }
                ],
                output: { item: 'advanced_qbit_memory_wafer', amount: 4 }
            },
            engrave: {
                machine: circuitDurations.chipset_engrave[2],
                components: [
                    { item: 'advanced_qbit_memory_wafer', amount: 1 },
                    { lens: 'neodymium_doped_yttrium_aluminium_garnet' }
                ],
                output: { item: 'engraved_advanced_qbit_memory_wafer', amount: 1 }
            },
            cut: {
                machine: circuitDurations.chipset_cut[2],
                components: [
                    { item: 'engraved_advanced_qbit_memory_wafer', amount: 1 }
                ],
                output: { item: 'advanced_qbit_memory', amount: 4 }
            }
        }
    }
};


// ---- stage 1 core: one advanced neuroprocessing unit for every family, built on GT's neuro processing unit in the circuit assembler.
// Every family's processor stage uses this instead of a printed circuit board.
global.circuitCores = {
    advanced_neuroprocessing_unit: {
        id: 'advanced_neuroprocessing_unit',
        circuit_assemble: {
            machine: circuitDurations.neuroprocessor,
            components: [
                { item: 'neuro_processing_unit', amount: 1 },
                { item: 'stem_cells', amount: 32 },
                { item: 'eternium_fine_wire', amount: 64 },
                { item: 'kevlar_foil', amount: 32 },
                { item: 'infused_star_bolt', amount: 16 },
                { item: 'corrosive_etrium_alloy_plate', amount: 8 }
            ],
            output: { item: 'advanced_neuroprocessing_unit', amount: 4 }
        }
    }
};

// ---- circuit boards: one shared Substrate Board, then one printed circuit board per family (large chemical reactor).
// The first stage (processor) does NOT use these: it uses the advanced_neuroprocessing_unit for every family.
global.circuitBoards = {
    substrate: {
        id: 'substrate_board',
        assemble: {
            machine: circuitDurations.substrate,
            components: [
                { item: 'wetware_printed_circuit_board', amount: 1 },
                { fluid: 'polybenzimidazole', amount: 1152 },
                { bacteria: 'PHABioplastic', amount: 1 }
            ],
            output: { item: 'substrate_board', amount: 4 }
        }
    },
    photonic: {
        id: 'photonic_printed_circuit_board',
        stages: ['assembly', 'computer'],
        print: {
            machine: circuitDurations.pcb.photonic,
            components: [
                { item: 'substrate_board', amount: 1 },
                { item: 'uhv_electric_pump', amount: 1 },
                { item: 'uv_sensor', amount: 1 },
                { item: 'etrium_foil', amount: 64 },
                { fluid: 'polyimide', amount: 1152 }
            ],
            output: { item: 'photonic_printed_circuit_board', amount: 1 }
        }
    },
    bioengineered: {
        id: 'bioengineered_printed_circuit_board',
        stages: ['assembly', 'computer'],
        print: {
            machine: circuitDurations.pcb.bioengineered,
            components: [
                { item: 'substrate_board', amount: 1 },
                { item: 'uev_electric_pump', amount: 1 },
                { item: 'uhv_sensor', amount: 1 },
                { item: 'tenebrium_foil', amount: 96 },
                { fluid: 'organic_polymer', amount: 1152 }
            ],
            output: { item: 'bioengineered_printed_circuit_board', amount: 1 }
        }
    },
    chaotic: {
        id: 'chaotic_printed_circuit_board',
        stages: ['assembly', 'computer'],
        print: {
            machine: circuitDurations.pcb.chaotic,
            components: [
                { item: 'substrate_board', amount: 1 },
                { item: 'uiv_electric_pump', amount: 1 },
                { item: 'uev_sensor', amount: 1 },
                { item: 'infinity_foil', amount: 128 },
                { fluid: 'chaos_plastic', amount: 1152 }
            ],
            output: { item: 'chaotic_printed_circuit_board', amount: 1 }
        }
    },
    naquadric: {
        id: 'naquadric_printed_circuit_board',
        stages: ['assembly', 'computer'],
        print: {
            machine: circuitDurations.pcb.naquadric,
            components: [
                { item: 'substrate_board', amount: 1 },
                { item: 'uxv_electric_pump', amount: 1 },
                { item: 'uiv_sensor', amount: 1 },
                { item: 'dark_matter_foil', amount: 192 },
                { fluid: 'naquadria_awakened', amount: 2304 }
            ],
            output: { item: 'naquadric_printed_circuit_board', amount: 1 }
        }
    },
    antimatter: {
        id: 'antimatter_printed_circuit_board',
        stages: ['assembly', 'computer'],
        print: {
            machine: circuitDurations.pcb.antimatter,
            components: [
                { item: 'substrate_board', amount: 1 },
                { item: 'opv_electric_pump', amount: 1 },
                { item: 'uxv_sensor', amount: 1 },
                { item: 'red_matter_foil', amount: 256 },
                { fluid: 'fifth_element', amount: 2304 }
            ],
            output: { item: 'antimatter_printed_circuit_board', amount: 1 }
        }
    }
};

// ---- SoCs (circuit families use the SoC of their own tier in place of the cpu, the cpu chip and two SMDs)
global.socParts = {
    photonic: {
        name: 'Photonic SoC',
        id: 'photonic_soc',
        stage: 'processor',   // SoCs only go into the processor stage of their own family
        boule: {
            machine: circuitDurations.soc_boule.photonic,
            components: [
                { dust: 'gallium_arsenide', amount: 64 },
                { dust: 'erbium', amount: 64 },
                { dust: 'europium', amount: 64 },
                { dust: 'silicon', amount: 32 },
                { dust: 'zinc', amount: 32 },
                { fluid: 'argon', amount: 30000 }
            ],
            output: { item: 'photonic_soc_boule', amount: 1 }
        },
        wafer_cut: {
            machine: circuitDurations.soc_boule_cut.photonic,
            components: [
                { item: 'photonic_soc_boule', amount: 1 }
            ],
            output: { item: 'photonic_soc_wafer', amount: 4 }
        },
        engrave: {
            machine: circuitDurations.soc_engrave.photonic,
            components: [
                { item: 'photonic_soc_wafer', amount: 1 },
                { lens: 'corrosive' }
            ],
            output: { item: 'engraved_photonic_soc_wafer', amount: 1 }
        },
        cut: {
            machine: circuitDurations.soc_cut.photonic,
            components: [
                { item: 'engraved_photonic_soc_wafer', amount: 1 }
            ],
            output: { item: 'photonic_soc', amount: 4 }
        }
    },
    bioengineered: {
        name: 'Bioengineered SoC',
        id: 'bioengineered_soc',
        stage: 'processor',   // SoCs only go into the processor stage of their own family
        boule: {
            machine: circuitDurations.soc_boule.bioengineered,
            components: [
                { dust: 'indium_gallium_arsenide', amount: 64 },
                { dust: 'thulium', amount: 64 },
                { dust: 'terbium', amount: 64 },
                { dust: 'beryllium', amount: 32 },
                { dust: 'silicon', amount: 32 },
                { fluid: 'krypton', amount: 40000 }
            ],
            output: { item: 'bioengineered_soc_boule', amount: 1 }
        },
        wafer_cut: {
            machine: circuitDurations.soc_boule_cut.bioengineered,
            components: [
                { item: 'bioengineered_soc_boule', amount: 1 }
            ],
            output: { item: 'bioengineered_soc_wafer', amount: 4 }
        },
        engrave: {
            machine: circuitDurations.soc_engrave.bioengineered,
            components: [
                { item: 'bioengineered_soc_wafer', amount: 1 },
                { lens: 'destructive' }
            ],
            output: { item: 'engraved_bioengineered_soc_wafer', amount: 1 }
        },
        cut: {
            machine: circuitDurations.soc_cut.bioengineered,
            components: [
                { item: 'engraved_bioengineered_soc_wafer', amount: 1 }
            ],
            output: { item: 'bioengineered_soc', amount: 4 }
        }
    },
    chaotic: {
        name: 'Chaotic SoC',
        id: 'chaotic_soc',
        stage: 'processor',   // SoCs only go into the processor stage of their own family
        boule: {
            machine: circuitDurations.soc_boule.chaotic,
            components: [
                { dust: 'aluminium_gallium_nitride', amount: 64 },
                { dust: 'hafnium', amount: 64 },
                { dust: 'gadolinium', amount: 64 },
                { dust: 'silicon', amount: 32 },
                { dust: 'magnesium', amount: 32 },
                { fluid: 'xenon', amount: 50000 },
                { fluid: 'ammonia', amount: 10000 }
            ],
            output: { item: 'chaotic_soc_boule', amount: 1 }
        },
        wafer_cut: {
            machine: circuitDurations.soc_boule_cut.chaotic,
            components: [
                { item: 'chaotic_soc_boule', amount: 1 }
            ],
            output: { item: 'chaotic_soc_wafer', amount: 4 }
        },
        engrave: {
            machine: circuitDurations.soc_engrave.chaotic,
            components: [
                { item: 'chaotic_soc_wafer', amount: 1 },
                { lens: 'vengeful' }
            ],
            output: { item: 'engraved_chaotic_soc_wafer', amount: 1 }
        },
        cut: {
            machine: circuitDurations.soc_cut.chaotic,
            components: [
                { item: 'engraved_chaotic_soc_wafer', amount: 1 }
            ],
            output: { item: 'chaotic_soc', amount: 4 }
        }
    }
};

// ---- stage templates: wetware's own recipes, one per stage. Slots are the circuitLadder field names.
// Amounts are the wetware amounts; unless fixed: true they are multiplied by circuitScale[family] and rounded up
// (no cap). In the assembly_line stages (computer, mainframe) any item slot over 64 is split into 64-sized stacks plus the remainder. bus and oscillator come from circuitParts.<part>.perStage, not from here.
global.circuitScale = { photonic: 1.2, bioengineered: 1.4, chaotic: 1.6, naquadric: 1.8, antimatter: 2.0 };

global.circuitRecipes = {
    processor: {
        machine: 'circuit_assembler', duration: 200, output: 2,
        slots: [
            { slot: 'core', amount: 1, fixed: true },
            { slot: 'cpu_1', amount: 1, fixed: true },
            { slot: 'cpu_2', amount: 1, fixed: true },
            { slot: 'smd_capacitor', amount: 8 },
            { slot: 'smd_transistor', amount: 8 },
            { slot: 'fineWire', amount: 8 }
        ],
        // SoC alternate (photonic, bioengineered, chaotic only): drops cpu_1, cpu_2 and the capacitor + transistor SMDs
        soc: {
            duration: 100, output: 4,
            slots: [
                { slot: 'core', amount: 1, fixed: true },
                { slot: 'soc', amount: 1, fixed: true },
                { slot: 'fineWire', amount: 8 },
                { slot: 'bolt', amount: 8 }
            ]
        }
    },
    assembly: {
        machine: 'circuit_assembler', duration: 400, output: 2, previous: 'processor',
        slots: [
            { slot: 'previous', amount: 2, fixed: true },
            { slot: 'board', amount: 1, fixed: true },
            { slot: 'smd_inductor', amount: 6 },
            { slot: 'smd_capacitor', amount: 12 },
            { slot: 'ram_chip', amount: 24 },
            { slot: 'fineWire', amount: 16 },
            { slot: 'solder', amount: 288, fluid: true }
        ]
    },
    computer: {
        machine: 'assembly_line', duration: 400, output: 1, previous: 'assembly', research: 'computer',
        slots: [
            { slot: 'previous', amount: 2, fixed: true },
            { slot: 'board', amount: 1, fixed: true },
            { slot: 'smd_diode', amount: 8 },
            { slot: 'alternate_chip', amount: 16 },
            { slot: 'ram_chip', amount: 32 },
            { slot: 'fineWire', amount: 24 },
            { slot: 'foil', amount: 32 },
            { slot: 'plate', amount: 4 },
            { slot: 'bus', perStage: true },
            { slot: 'oscillator', perStage: true },
            { slot: 'solder', amount: 1152, fluid: true }
        ]
    },
    mainframe: {
        machine: 'assembly_line', duration: 2000, output: 1, previous: 'computer', research: 'mainframe',
        slots: [
            { slot: 'frame', amount: 2, fixed: true },
            { slot: 'previous', amount: 2, fixed: true },
            { slot: 'smd_diode', amount: 32 },
            { slot: 'smd_capacitor', amount: 32 },
            { slot: 'smd_transistor', amount: 32 },
            { slot: 'smd_resistor', amount: 32 },
            { slot: 'smd_inductor', amount: 32 },
            { slot: 'foil', amount: 64 },
            { slot: 'ram_chip', amount: 32 },
            { slot: 'doubleWire', amount: 16 },
            { slot: 'plate', amount: 8 },
            { slot: 'bus', perStage: true },
            { slot: 'oscillator', perStage: true },
            { slot: 'solder', amount: 2880, fluid: true },
            { slot: 'polymer', amount: 1152, fluid: true }
        ]
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
                //.rarity('ie_masterwork')

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

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
