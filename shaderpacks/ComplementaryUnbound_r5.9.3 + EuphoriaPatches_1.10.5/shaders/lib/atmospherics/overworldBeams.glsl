#include "/lib/colors/lightAndAmbientColors.glsl"

vec3 beamCol = normalize(ColorBeam) * 3.0 * (2.5 - 1.0 * vlFactor) * OVERWORLD_BEAMS_INTENSITY;

vec2 wind = vec2(frameTimeCounter * 0.0019);

float BeamNoise(vec2 planeCoord, vec2 wind) {
    float noise = texture2DLod(noisetex, planeCoord * 0.175   - wind, 0.0).b * 0.5;
          noise+= texture2DLod(noisetex, planeCoord * 0.04375 + wind * 0.5, 0.0).b * 2.0;
          noise+= texture2DLod(noisetex, planeCoord * 0.27    - wind, 0.0).b * 0.5;

    return noise / 3.0;
}

vec4 DrawOverworldBeams(vec3 playerPos, vec3 nViewPos, float scale) {
    float visibility = 1.0 - sunVisibility - maxBlindnessDarkness;
    #if OVERWORLD_BEAMS_CONDITION == 0
        visibility -= moonPhase;
    #endif
    if (visibility > 0.0) {
        float beamPowAfterAltitude = 1.35;
        float lPlayerPosXZ = length(playerPos.xz);

        vec3 localBeamCol = beamCol;

        #ifdef AURORA_INFLUENCE
            localBeamCol = getAuroraAmbientColor(localBeamCol, nViewPos, 1.0, AURORA_CLOUD_INFLUENCE_INTENSITY, 0.85) * OVERWORLD_BEAMS_INTENSITY;
        #endif

        vec2 planeCoordRaw = playerPos.xz + cameraPosition.xz;
        vec2 planeCoord = planeCoordRaw * 0.0014 * scale;

        float noise = BeamNoise(planeCoord, wind);
        float fireNoise = texture2DLod(noisetex, abs(planeCoord * 0.1) - wind, 0.0).b;

        float uncenteredDistance = 1.3 * (250.0 + 0.5 * lPlayerPosXZ);
        float altitude = playerPos.y + cameraPosition.y;
        float signedAltitude = altitude - oceanAltitude;
        float altitudeDis = abs(signedAltitude);
        float altitudeFactor = 0.5 * smoothstep(uncenteredDistance, 0.0, altitudeDis)
                             + 0.5 * smoothstep(4.0 * uncenteredDistance, 0.0, altitudeDis);

        noise = pow2(noise) * 0.7 + 0.3 * fireNoise;
        noise *= pow(altitudeFactor, 3.0);
        noise = pow(noise, beamPowAfterAltitude);

        vec3 beams = noise * localBeamCol * (1.0 + smoothstep(0.0, 128.0, lPlayerPosXZ));

        if(any(isnan(beams))) beams = vec3(0.0);

        float nearPlayerFactor = 1.0 - smoothstep(0.0, 256.0, lPlayerPosXZ);
        float beamAlpha = clamp01(noise * mix(1.0, 3.67, nearPlayerFactor));

        beams.rgb *= pow3(beamAlpha) * 10.0;
        beams.rgb *= sqrt(beams.rgb);
        beams.rgb = sqrt(beams.rgb);

        #if defined VOXY || defined DISTANT_HORIZONS
            beams.rgb *= 4.5;
        #endif

        return vec4(beams, beamAlpha * visibility);
    }
    return vec4(0.0);
}
