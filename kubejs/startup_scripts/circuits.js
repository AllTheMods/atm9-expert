

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


global.circuitParts = {
    bus: {
        perStage: [0, 0, 1, 2],
        1: {
            name: 'Bus',
            id: 'bus',
            base: 'silicon_germanium',
            base_count: 1,
            matrix: 'crystalline_matrix',
            matrix_count: 4,
            bacteria: 'PichiaPastoris',
            wire: 'etrium',
            wire_count: 8,
            polymer: { fluid: 'liquid_crystal_kevlar', amount: 144 },
            assemble: { eut: UHV, duration: 80, output: 4 },
            matrix_recipe: {
                assemble: { eut: UHV, duration: 80 },
                foils: ['restonia', 'emeradic', 'palis', 'diamatine', 'enori'],
                foil_amount: 8,
                output: 16,
                coating: { gas: 'tungsten_hexafluoride', amount: 288 },
                alt: {
                    foil_amount: 16,
                    output: 32,
                    coating: { fluid: 'oganesson', amount: 144 }
                }
            }
        },
        2: {
            name: 'Advanced Bus',
            id: 'advanced_bus',
            base: 'indium_phosphide',
            base_count: 1,
            matrix: 'advanced_crystalline_matrix',
            matrix_count: 4,
            bacteria: 'PichiaPastoris',
            wire: 'dark_matter',
            wire_count: 16,
            polymer: { fluid: 'chaos_plastic', amount: 288 },
            assemble: { eut: UXV, duration: 80, output: 4 },
            matrix_recipe: {
                assemble: { eut: UXV, duration: 80 },
                foils: ['empowered_restonia', 'empowered_emeradic', 'empowered_palis', 'empowered_diamatine', 'empowered_enori'],
                foil_amount: 16,
                output: 32,
                coating: { gas: 'tungsten_hexafluoride', amount: 576 },
                alt: {
                    foil_amount: 32,
                    output: 64,
                    coating: { fluid: 'oganesson', amount: 288 }
                }
            }
        }
    },

    oscillator: {
        perStage: [0, 0, 0, 2],
        1: {
            name: 'Oscillator',
            id: 'oscillator',
            base: 'langasite',
            blank_wafer: 'langasite_wafer',
            etched_wafer: 'oscillator_wafer',
            engrave: { lens: 'void_crystal', eut: UHV },
            assemble: { eut: UHV, duration: 80, output: 16 },
            electrode_foil: 'gaia',
            polymer: { fluid: 'liquid_crystal_kevlar', amount: 144 }
        },
        2: {
            name: 'Advanced Oscillator',
            id: 'advanced_oscillator',
            base: 'thorium_doped_calcium_fluoride',
            blank_wafer: 'thorium_doped_calcium_fluoride_wafer',
            etched_wafer: 'advanced_oscillator_wafer',
            engrave: { lens: 'empowered_void_crystal', eut: UXV },
            assemble: { eut: UXV, duration: 80, output: 16 },
            electrode_foil: 'dark_matter',
            polymer: { fluid: 'chaos_plastic', amount: 288 }
        }
    }
}

global.smdSettings = {
    1: { eut: UHV, duration: 80, output: 128, crystal_foil_amount: 64, dust_amount: 8, foil_amount: 32 },
    2: { eut: UXV, duration: 80, output: 256, crystal_foil_amount: 64, dust_amount: 8, foil_amount: 32 }
};

global.smdParts = {
    resistor: {
        1: {
            id: 'quantum_resistor',
            dust: 'bismuth_telluride',
            foil: 'chromium_disilicide',
            crystal_foil: 'empowered_restonia',
            polymer: { fluid: 'polyimide', amount: 576 }
        },
        2: {
            id: 'advanced_quantum_resistor',
            dust: 'bismuth_antimony_telluride',
            dust_2: 'zirconium_diboride',
            foil: 'ruthenium_dioxide',
            crystal_foil: 'empowered_restonia',
            polymer: { fluid: 'naquadria_awakened', amount: 576 }
        }
    },
    transistor: {
        1: {
            id: 'quantum_transistor',
            dust: 'tungsten_diselenide',
            foil: 'nickel_silicide',
            crystal_foil: 'empowered_emeradic',
            polymer: { fluid: 'polyimide', amount: 288 }
        },
        2: {
            id: 'advanced_quantum_transistor',
            dust: 'indium_selenide',
            dust_2: 'zirconium_dioxide',
            foil: 'erbium_disilicide',
            crystal_foil: 'empowered_emeradic',
            polymer: { fluid: 'naquadria_awakened', amount: 288 }
        }
    },
    capacitor: {
        1: {
            id: 'quantum_capacitor',
            dust: 'zirconium_titanate',
            foil: 'titanium_nitride',
            crystal_foil: 'empowered_palis',
            polymer: { fluid: 'polyimide', amount: 144 }
        },
        2: {
            id: 'advanced_quantum_capacitor',
            dust: 'gadolinium_zirconate',
            dust_2: 'barium_titanate',
            foil: 'iridium_dioxide',
            crystal_foil: 'empowered_palis',
            polymer: { fluid: 'naquadria_awakened', amount: 72 }
        }
    },
    diode: {
        1: {
            id: 'quantum_diode',
            dust: 'cadmium_telluride',
            foil: 'nickel_germanide',
            crystal_foil: 'empowered_diamatine',
            polymer: { fluid: 'polyimide', amount: 576 }
        },
        2: {
            id: 'advanced_quantum_diode',
            dust: 'cadmium_zinc_telluride',
            dust_2: 'gadolinium_oxysulfide',
            foil: 'gold_germanium',
            crystal_foil: 'empowered_diamatine',
            polymer: { fluid: 'naquadria_awakened', amount: 576 }
        }
    },
    inductor: {
        1: {
            id: 'quantum_inductor',
            dust: 'gadolinium_iron_garnet',
            foil: 'sendust',
            crystal_foil: 'empowered_enori',
            polymer: { fluid: 'polyimide', amount: 288 }
        },
        2: {
            id: 'advanced_quantum_inductor',
            dust: 'samarium_cobalt',
            dust_2: 'gadolinium_gallium_garnet',
            foil: 'permendur',
            crystal_foil: 'empowered_enori',
            polymer: { fluid: 'naquadria_awakened', amount: 288 }
        }
    }
};

global.chipsetSettings = {
    1: { eut: UHV, lens: 'praseodymium_doped_yttrium_aluminium_garnet', dopant_amount: 4, atmosphere_amount: 1000 },
    2: { eut: UXV, lens: 'neodymium_doped_yttrium_aluminium_garnet', dopant_amount: 8, atmosphere_amount: 2000 }
};

global.chipsetParts = {
    cpu: {
        1: {
            name: 'CPU Core',
            id: 'cpu_core',
            base: 'bismuth_selenide',
            dopants: ['promethium', 'lutetium'],
            atmosphere: 'argon',
            blank_wafer: 'bismuth_selenide_wafer',
            etched_wafer: 'cpu_core_wafer',
            cut: { duration: 80, output: 16 }
        },
        2: {
            name: 'Advanced CPU Core',
            id: 'advanced_cpu_core',
            base: 'indium_antimonide',
            dopants: ['actinium', 'neptunium'],
            atmosphere: 'krypton',
            blank_wafer: 'indium_antimonide_wafer',
            etched_wafer: 'advanced_cpu_core_wafer',
            cut: { duration: 80, output: 16 }
        }
    },
    cpu_chip: {
        1: {
            name: 'Central Processing Unit',
            id: 'central_processing_unit',
            base: 'lithium_niobate',
            dopants: ['technetium', 'cerium'],
            atmosphere: 'neon',
            blank_wafer: 'lithium_niobate_wafer',
            etched_wafer: 'central_processing_unit_wafer',
            cut: { duration: 80, output: 16 }
        },
        2: {
            name: 'Advanced Central Processing Unit',
            id: 'advanced_central_processing_unit',
            base: 'gallium_nitride',
            base_2: 'aluminium_nitride',
            dopants: ['protactinium', 'lawrencium'],
            atmosphere: 'xenon',
            blank_wafer: 'gallium_nitride_wafer',
            etched_wafer: 'advanced_central_processing_unit_wafer',
            cut: { duration: 80, output: 16 }
        }
    },
    logic: {
        1: {
            name: 'Logic Gate',
            id: 'logic_gate',
            base: 'vanadium_dioxide',
            dopants: ['tungsten', 'lanthanum'],
            atmosphere: 'helium',
            blank_wafer: 'vanadium_dioxide_wafer',
            etched_wafer: 'logic_gate_wafer',
            cut: { duration: 80, output: 16 }
        },
        2: {
            name: 'Advanced Logic Gate',
            id: 'advanced_logic_gate',
            base: 'cobalt_iron_boride',
            base_2: 'magnesium_oxide',
            dopants: ['plutonium', 'francium'],
            atmosphere: 'radon',
            blank_wafer: 'cobalt_iron_boride_wafer',
            etched_wafer: 'advanced_logic_gate_wafer',
            cut: { duration: 80, output: 16 }
        }
    },
    memory: {
        1: {
            name: 'Qbit Memory',
            id: 'qbit_memory',
            base: 'europium_yttrium_silicate',
            dopants: ['mendelevium', 'scandium'],
            atmosphere: 'helium',
            blank_wafer: 'europium_yttrium_silicate_wafer',
            etched_wafer: 'qbit_memory_wafer',
            cut: { duration: 80, output: 16 }
        },
        2: {
            name: 'Advanced Qbit Memory',
            id: 'advanced_qbit_memory',
            base: 'praseodymium_yttrium_silicate',
            dopants: ['einsteinium', 'nobelium'],
            atmosphere: 'helium_3',
            blank_wafer: 'praseodymium_yttrium_silicate_wafer',
            etched_wafer: 'advanced_qbit_memory_wafer',
            cut: { duration: 80, output: 16 }
        }
    }
};
StartupEvents.registry('item', allthemods => {
});