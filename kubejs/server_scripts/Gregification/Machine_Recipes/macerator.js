ServerEvents.recipes(allthemods => {
        const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
        allthemods.recipes.gtceu.macerator('gregification:recycle_steel_boiler')
                .itemInputs('railcraft:high_pressure_steam_boiler_tank')
                .itemOutputs('2x alltheores:steel_dust')
                .duration(20)
                .EUt(LV);

        allthemods.recipes.gtceu.macerator('gregification:macerate_thermal_sulfur')
                .itemInputs('thermal:sulfur')
                .itemOutputs('2x gtceu:sulfur_dust')
                .duration(80)
                .EUt(LV);

        allthemods.recipes.gtceu.macerator('gregification:macerate_apatite_sulfur')
                .itemInputs('thermal:apatite')
                .itemOutputs('2x gtceu:apatite_dust')
                .duration(80)
                .EUt(LV);

        allthemods.recipes.gtceu.macerator('gregification:arcane_crystal_dust')
                .itemInputs('forbidden_arcanus:arcane_crystal')
                .itemOutputs('2x forbidden_arcanus:arcane_crystal_dust')
                .duration(100)
                .EUt(MV);

        allthemods.recipes.gtceu.macerator('gregification:thorn_rose_dust')
                .itemInputs('twilightforest:thorn_rose')
                .itemOutputs('gtceu:thorn_rose_dust')
                .duration(800)
                .EUt(UV);

        allthemods.recipes.gtceu.macerator('gregification:waystone_dust')
                .itemInputs('#waystones:waystones')
                .itemOutputs('2x waystones:warp_dust')
                .duration(100)
                .EUt(EV);

        allthemods.recipes.gtceu.macerator('gregification:plascrete_dust')
                .itemInputs('gtceu:plascrete')
                .itemOutputs('2x gtceu:plascrete_dust')
                .duration(60)
                .EUt(LV);

        allthemods.recipes.gtceu.forge_hammer('gregification:blue_ice_dust')
                .itemInputs('#forge:ices/blue')
                .itemOutputs('2x gtceu:blue_ice_dust')
                .duration(60)
                .EUt(LV);

        allthemods.recipes.gtceu.macerator('gregification:magebloom_dust')
                .itemInputs('ars_nouveau:magebloom')
                .itemOutputs('2x gtceu:magebloom_dust')
                .duration(100)
                .EUt(HV);

        allthemods.recipes.gtceu.macerator('gregification:necrotic_dust')
                .itemInputs('#forge:wither_bones')
                .itemOutputs('gtceu:necrotic_dust')
                .duration(100)
                .EUt(HV);

        allthemods.recipes.gtceu.macerator('gregification:yttrium_aluminium_garnet_dust')
                .itemInputs('gtceu:yttrium_aluminium_garnet_boule')
                .itemOutputs('gtceu:yttrium_aluminium_garnet_dust')
                .duration(100)
                .EUt(LuV);

});