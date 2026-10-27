void DoTranslucentTweaks(inout vec4 color, inout float fresnelM, inout float reflectMult, float lViewPos) {
    #ifdef MORE_REFLECTIVE_DISTANT_GLASS
        float tweakDistance = 192.0;

        float factor = smoothstep(0.0, tweakDistance, lViewPos);

        color.a = mix(color.a, 1.0, factor * 0.75);
        fresnelM = mix(fresnelM, 1.0, factor * 0.25);
        reflectMult = mix(reflectMult, reflectMult / color.a, factor);
    #endif

    // Reduce glass reflectivity when the camera is really close
    float factor2 = smoothstep(1.8, 0.3, lViewPos);
    reflectMult = mix(reflectMult, 0.0, factor2);

    // Slightly reduce glass opacity when the camera is close
    float factor3 = smoothstep(4.0, 0.5, lViewPos);
    color.a = mix(color.a, pow2(color.a), factor3 * 0.5);
}
