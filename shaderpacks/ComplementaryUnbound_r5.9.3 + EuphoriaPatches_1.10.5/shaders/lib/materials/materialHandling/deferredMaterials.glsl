if (materialMaskInt <= 240) {
    #ifdef IPBR
        #include "/lib/materials/materialHandling/deferredIPBR.glsl"
    #elif defined CUSTOM_PBR
        #if RP_MODE == 2 // seuspbr
            float metalness = materialMaskInt / 240.0;

            intenseFresnel = metalness;
        #elif RP_MODE == 3 // labPBR
            float metalness = float(materialMaskInt >= 215);

            #ifdef BETTER_LABPBR_REFLECTIONS_INTERNAL
                bool isNamedMetal = materialMaskInt >= 215 && materialMaskInt <= 222;
                vec3 physicalMetalF0 = GetLabPBRMetalF0(materialMaskInt, color.rgb);

                // Magnitude: Handled entirely by intenseFresnel to prevent double-darkening.
                // (rawAlbedoF0 scales the blend weight magnitude here instead of tinting reflectColor below)
                float metalF0Scalar = isNamedMetal ? maxOf(physicalMetalF0) * rawAlbedoF0 : rawAlbedoF0;
                intenseFresnel = mix(materialMaskInt / 240.0, metalF0Scalar, metalness);
                isHardcodedMetal = metalness;

                // Hue tint: Separated from brightness so it only alters color, not magnitude
                vec3 albedoHue = color.rgb / (maxOf(color.rgb) + 0.00001);
                vec3 metalF0 = isNamedMetal ? physicalMetalF0 * albedoHue : vec3(1.0);
                float metalF0TintScalar = isNamedMetal ? maxOf(metalF0) : 1.0;
            #else
                intenseFresnel = materialMaskInt / 240.0;
            #endif
        #endif

        #ifdef BETTER_LABPBR_REFLECTIONS_INTERNAL
            // Peak-normalize metalF0 by metalF0TintScalar to isolate pure hue/tint (max channel = 1.0)
            reflectColor = mix(vec3(1.0), isNamedMetal ? metalF0 / (metalF0TintScalar + 0.00001) : color.rgb / (maxOf(color.rgb) + 0.00001), metalness);
        #else
            reflectColor = mix(vec3(1.0), color.rgb / (maxOf(color.rgb) + 0.00001), metalness);
        #endif
    #endif
} else {
    if (materialMaskInt == 251) { // No SSAO, Reduce Reflection
        entityOrParticle = true;
    } else if (materialMaskInt == 254) { // No SSAO, No TAA, Reduce Reflection
        ssao = 1.0;
        entityOrParticle = true;
    }
}
