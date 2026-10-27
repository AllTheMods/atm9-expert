#include "/lib/shaderSettings/netherFog.glsl"

#ifdef MCWIND_NETHER_FOG_INTERNAL
    #define MCW_MOTION_OFF
    #define MCW_WEATHER_OFF
    #define MCW_IMPULSE_OFF
    #include "/mcwind/mcwind.glsl"
    #include "/lib/atmospherics/netherWind.glsl"
#endif

vec3 GetNetherNoise(vec3 viewPos, float VdotU, float dither) {
    float visibility = clamp01(VdotU * 1.875 - 0.225);
    visibility *= 1.0 - VdotU * 0.75 - maxBlindnessDarkness;

    if (visibility > 0.0) {
        vec3 spots = vec3(0.0);

        float eyeAltitude1 = eyeAltitude * 0.005;
        float noiseHeightFactor = max(0.0, 1.5 - eyeAltitude1 / (eyeAltitude1 + 1.0));
        noiseHeightFactor *= noiseHeightFactor;
        float noiseHeight = noiseHeightFactor * 0.5;

        vec3 wpos = (gbufferModelViewInverse * vec4(viewPos, 1.0)).xyz;
             wpos.xz /= wpos.y;

        vec2 cameraPositionM = cameraPosition.xz * 0.0075;
        #ifdef MCWIND_NETHER_FOG_INTERNAL
            vec3 mcwWind = mcw_windAtFast(cameraPosition, mcw_windPhase, MCW_NF_NO_GROUND, mcw_flowAt(cameraPosition));
            vec2 mcwDrift = vec2(mcw_windDriftX, mcw_windDriftZ);
            cameraPositionM -= mod((mcwDrift * NETHER_FOG_LAYER_FAST
                                    + mcwWind.xz * (MCW_NF_HAZE_LOCAL * MCW_NF_STILL_TIME)) * 0.0075,
                                   MCW_NF_HAZE_PERIOD);
        #else
             cameraPositionM.x += frameTimeCounter * 0.004;
        #endif

        int sampleCount = 10;
        int sampleCountP = sampleCount + 5;
        float ditherM = dither + 5.0;
        #ifdef MCWIND_NETHER_FOG_INTERNAL
            float wind = fract(mcw_windPhase * (120.0 / MCW_PHASE_WRAP)
                             + length(mcwDrift) * NETHER_FOG_LAYER_FAST * MCW_NF_HAZE_CHURN);
        #else
            float wind = fract(frameTimeCounter * 0.0125);
        #endif
        for (int i = 0; i < sampleCount; i++) {
            float current = pow2((i + ditherM) / sampleCountP);

            vec2 planePos = wpos.xz * (0.8 + current) * noiseHeight;
            planePos = (planePos * 0.5 + cameraPositionM * 0.5) * 1.5;
            float noiseSpots = texture2DLod(noisetex, planePos * 0.5, 0.0).g;
            vec3 noise = texture2DLod(noisetex, vec2(noiseSpots) + wind, 0.0).g * netherColor * 2.5 - netherColor * 1.3;

            float currentM = 1.0 - current;
            spots += noise * currentM * 6.0;
        }

        #ifdef RAIN_ATMOSPHERE
            spots += 2.0 * isLightningActive();
        #endif

        return spots * visibility / sampleCount;
    }

    return vec3(0.0);
}
