#include "/lib/shaderSettings/netherFog.glsl"

#ifdef MCWIND_NETHER_FOG_INTERNAL
    #define MCW_MOTION_OFF
    #define MCW_WEATHER_OFF
    #define MCW_IMPULSE_OFF
    #include "/mcwind/mcwind.glsl"
    #include "/lib/atmospherics/netherWind.glsl"

    #define NETHER_STORM_WIND_OCTAVE (2.0 * NETHER_FOG_WIND_CHURN)
#else
    #define NETHER_STORM_WIND_OCTAVE (-2.0)
#endif

vec4 GetNetherStorm(vec3 color, vec3 translucentMult, vec3 nPlayerPos, vec3 playerPos, float lViewPos, float lViewPos1, float dither) {
    if (isEyeInWater != 0) return vec4(0.0);
    vec4 netherStorm = vec4(1.0, 1.0, 1.0, 0.0);

    #ifdef BORDER_FOG
        float maxDist = min(renderDistance, NETHER_VIEW_LIMIT); // consistency9023HFUE85JG
    #else
        float maxDist = renderDistance;
    #endif

    maxDist = min(maxDist, 512.0); // Going higher than 32 chunks causes way too much performance loss

    #ifndef LOW_QUALITY_NETHER_STORM
        int sampleCount = int(maxDist / 8.0 + 0.001);

        vec3 traceAdd = nPlayerPos * maxDist / sampleCount;
        vec3 tracePos = cameraPosition;
        tracePos += traceAdd * dither;
    #else
        int sampleCount = int(maxDist / 16.0 + 0.001);

        vec3 traceAdd = 0.75 * nPlayerPos * maxDist / sampleCount;
        vec3 tracePos = cameraPosition;
        tracePos += traceAdd * dither;
        tracePos += traceAdd * sampleCount * 0.25;
    #endif

    vec3 translucentMultM = pow(translucentMult, vec3(1.0 / sampleCount));
    float translucentMultM2 = GetLuminance(translucentMultM);

    #ifdef MCWIND_NETHER_FOG_INTERNAL
        mcwNetherWind mcwWind = GetNetherWind(nPlayerPos, maxDist);
        vec3 mcwSlow0 = fract(-mcwWind.slow * 0.001 * vec3(2.0, 0.5, 2.0) + MCW_NF_LAYER_SPLIT);
        vec3 mcwFast0 = fract(-mcwWind.fast * 0.001 * vec3(2.0, 0.5, 2.0));
        vec3 mcwWarp = fract(-mcwWind.fast * 0.001);
        float mcwPoolAccum = 0.0;
        float mcwPoolWeight = 0.0;
    #endif

    for (int i = 0; i < sampleCount; i++) {
        tracePos += traceAdd;

        vec3 tracedPlayerPos = tracePos - cameraPosition;
        float lTracePos = length(tracedPlayerPos);
        if (lTracePos > lViewPos1) break;

        #ifdef MCWIND_NETHER_FOG_INTERNAL
            float mcwAltitude = clamp((tracePos.y - NETHER_STORM_LOWER_ALT) / NETHER_STORM_HEIGHT, -1.0, 1.0);
            float mcwAlong = clamp(lTracePos / maxDist, 0.0, 1.0);
            vec3 mcwLocal = GetNetherLocalWind(mcwWind, tracePos, mcwAlong);
            #if NETHER_FOG_SKIN_DEPTH > 0
                mcwNetherProbe mcwProbe = GetNetherSkin(tracePos, mcwLocal);
            #else
                mcwNetherProbe mcwProbe;
                mcwProbe.skin = 0.0; mcwProbe.impact = 0.0; mcwProbe.deflect = vec3(0.0);
            #endif
            mcwNetherLayers mcwL = GetNetherLayers(mcwLocal, mcwAltitude, mcwProbe.skin, mcwProbe.impact);
            vec3 mcwDefl = mcwProbe.deflect * 0.001 * vec3(2.0, 0.5, 2.0);
            vec3 windSlow = fract(mcwSlow0 + mcwDefl);
            vec3 windFast = fract(mcwFast0 + mcwDefl);
            vec3 warp = mcwWarp;
        #else
            vec3 windFast = vec3(frameTimeCounter * 0.002);
            vec3 warp = windFast;
        #endif

        vec3 tracePosM = tracePos * 0.001;
        tracePosM.y += tracePosM.x;
        tracePosM += Noise3D(tracePosM - warp) * 0.01;
        tracePosM = tracePosM * vec3(2.0, 0.5, 2.0);

        float traceAltitudeM = abs(tracePos.y - NETHER_STORM_LOWER_ALT);
        if (tracePos.y < NETHER_STORM_LOWER_ALT) traceAltitudeM *= 10.0;
        traceAltitudeM = 1.0 - min1(abs(traceAltitudeM) / NETHER_STORM_HEIGHT);

        #ifdef MCWIND_NETHER_FOG_INTERNAL
            float mcwBeforeA = netherStorm.a;
        #endif

        for (int h = 0; h < 4; h++) {
            #ifdef MCWIND_NETHER_FOG_INTERNAL
                float stormSample = pow2(mix(Noise3D(tracePosM + windSlow), Noise3D(tracePosM + windFast), mcwL.blend));
            #else
                float stormSample = pow2(Noise3D(tracePosM + windFast));
            #endif
            stormSample *= traceAltitudeM;
            stormSample = pow2(pow2(stormSample));
            stormSample *= sqrt1(max0(1.0 - lTracePos / maxDist));
            #ifdef MCWIND_NETHER_FOG_INTERNAL
                stormSample *= mcwL.pool;
            #endif

            netherStorm.a += stormSample;
            tracePosM *= 2.0;
            windFast *= NETHER_STORM_WIND_OCTAVE;
            #ifdef MCWIND_NETHER_FOG_INTERNAL
                windSlow *= NETHER_STORM_WIND_OCTAVE;
            #endif
        }

        #ifdef MCWIND_NETHER_FOG_INTERNAL
            float mcwContrib = netherStorm.a - mcwBeforeA;
            mcwPoolAccum += (mcwL.pool) * mcwContrib;
            mcwPoolWeight += mcwContrib;
        #endif

        #ifdef RAIN_ATMOSPHERE
            vec3 lightningPos = getLightningPos(tracePos - cameraPosition, lightningBoltPosition.xyz, false);
            vec2 lightningAdd = lightningFlashEffect(lightningPos, vec3(1.0), 150.0, 0.0, 0) * isLightningActive() * 8.0;
            netherStorm.rgb += lightningAdd.y;
        #endif

        if (lTracePos > lViewPos) {
            netherStorm.rgb *= translucentMultM;
            netherStorm.a *= translucentMultM2;
        }
    }

    #ifdef LOW_QUALITY_NETHER_STORM
        netherStorm.a *= 1.8;
    #endif

    float netherFogDensity = 1.0;
    #ifdef MCWIND_NETHER_FOG_INTERNAL
        if (mcwPoolWeight > 1.0e-6) netherFogDensity = max(netherFogDensity, mcwPoolAccum / mcwPoolWeight);
    #endif
    netherStorm.a = min1(netherStorm.a * NETHER_STORM_I * netherFogDensity);

    netherStorm.rgb *= netherColor * 3.0 * (1.0 - maxBlindnessDarkness);

    //if (netherStorm.a > 0.98) netherStorm.rgb = vec3(1,0,1);
    //netherStorm.a *= 1.0 - max0(netherStorm.a - 0.98) * 50.0;

    return netherStorm;
}
