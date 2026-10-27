#include "/lib/shaderSettings/enderNebula.glsl"

// MIT License
// Copyright (c) 2023 jedlimlx
// Code is based on the Supplemental Patches Code
// https://github.com/jedlimlx/supplemental-patches/blob/multiloader/src/main/resources/resourcepacks/builtin_shaders/assets/supplemental_patches/euphoria/atmospherics/sky/enderscape_nebula/nebula.glsl

vec3 snapToCubeSphereGrid(vec3 wpos, int resolution) {
    vec3 absW = abs(wpos);
    vec3 faceNormal;
    vec2 uv;

    if (absW.x >= absW.y && absW.x >= absW.z) {
        faceNormal = vec3(sign(wpos.x), 0.0, 0.0);
        uv = wpos.yz / absW.x;
    } else if (absW.y >= absW.z) {
        faceNormal = vec3(0.0, sign(wpos.y), 0.0);
        uv = wpos.xz / absW.y;
    } else {
        faceNormal = vec3(0.0, 0.0, sign(wpos.z));
        uv = wpos.xy / absW.z;
    }

    uv = (floor((uv * 0.5 + 0.5) * float(resolution)) + 0.5) / float(resolution) * 2.0 - 1.0;

    if (faceNormal.x != 0.0) return normalize(vec3(faceNormal.x, uv));
    if (faceNormal.y != 0.0) return normalize(vec3(uv.x, faceNormal.y, uv.y));
    return normalize(vec3(uv, faceNormal.z));
}

const float nebulaNoiseAmps[6] = float[6](0.16, 0.32, 0.48, 0.63, 0.72, 0.74);

#if END_NEBULA_RESOLUTION == 0
    #define NEBULA_GRID_SCALE 800.0
#else
    #define NEBULA_GRID_SCALE float(END_NEBULA_RESOLUTION * 100)
#endif

vec2 GetNebulaDistortion(vec3 x) {
    #if END_NEBULA_QUALITY == 1
        const int octaves = 3;
    #elif END_NEBULA_QUALITY == 2
        const int octaves = 5;
    #elif END_NEBULA_QUALITY == 3
        const int octaves = 8;
    #elif END_NEBULA_QUALITY == 4
        const int octaves = 12;
    #elif END_NEBULA_QUALITY == 5
        const int octaves = 16;
    #endif

    vec2 v = vec2(0.0);
    float amplitude = 1.0;
    for (int i = 0; i < octaves; i++) {
        v += amplitude * vec2(Noise3D(x), Noise3D(3.0 * x - 200.0));
        x *= 2.0;
        amplitude *= 0.5;
    }
    return v;
}

#if END_NEBULA_RESOLUTION == 0
    vec3 unprojectNebulaStarCoord(vec2 c) {
        vec2 s = c / 0.65;
        float r = length(s);
        float d = inversesqrt(r * r + (1.0 - r) * (1.0 - r));
        return normalize(vec3(s.x * d, d * (1.0 - r), s.y * d));
    }
#endif

// Returns (star brightness, per-star random 0-1 value used to vary how much each star blends into the nebula color)
vec2 GetNebulaStars(vec3 wpos, float resolution, float densityMult, float seedOffset) {
    #if END_NEBULA_RESOLUTION == 0
        vec3 starCoord = 0.65 * wpos / (abs(wpos.y) + length(wpos.xz));
        vec2 starCoord2 = starCoord.xz;

        vec2 fractPart = fract(starCoord2 * resolution);
        starCoord2 = floor(starCoord2 * resolution) / resolution;

        float colorRand = hash12(starCoord2 * resolution + 91.7);

        // We need to sample it here for smooth one as otherwise stars have weird noise patterns
        vec3 starDir = unprojectNebulaStarCoord(starCoord2);
        vec3 starNoiseBase = 4.0 * starDir + frameTimeCounter * 0.005 * END_NEBULA_ANIMATION_SPEED - 1417.0 + seedOffset;
        float starNoise = 0.0;
        for (int i = 0; i < 6; i++) {
            int octave = i + 2;
            starNoise += nebulaNoiseAmps[i] * pow(Noise3D(starNoiseBase / pow3(float(octave))), 3.5) * 1.25;
        }
        float localDensity = clamp01(pow(max(0.0, starNoise), 18.0)) * 12.0;

        float threshold = mix(0.97, 0.86, clamp01(localDensity * 0.1));
        float starScale = 1.0 / (1.0 - threshold);

        float star = max0(GetStarNoise(starCoord2) - threshold) * starScale;
        star *= getStarEdgeFactor(fractPart, STAR_ROUNDNESS_END / 10.0, STAR_SOFTNESS_END);
        star *= getTwinklingStars(starCoord2, float(END_TWINKLING_STARS));
    #else
        float threshold = mix(0.97, 0.86, clamp01(densityMult * 0.1)); // denser noise zones get more star cells
        float starScale = 1.0 / (1.0 - threshold);

        ivec3 starCell = ivec3(floor(resolution * wpos + 700.0));
        vec3 starCellHash = hash33(uvec3(starCell));
        float starHash = starCellHash.x * 0.5 + 0.5;
        float colorRand = starCellHash.y * 0.5 + 0.5;

        float star = max0(starHash - threshold) * starScale;
        // Uses starCell coordinates instead of wpos.xy to prevent wpos.z=0 from collapsing
        // directions along the great circle into a static "vertical ring" texture lookup.
        vec2 twinkleCoord = vec2(starCell.xy) / resolution + float(starCell.z) * 1.7;
        star *= getTwinklingStars(twinkleCoord, float(END_TWINKLING_STARS));
    #endif

    return vec2(star, colorRand);
}

vec3 GetEnderNebula(vec3 viewPos, float VdotU) {
    #if END_NEBULA_HEMISPHERE != 0
        #if END_NEBULA_HEMISPHERE == 1
            if (VdotU < 0.0) return vec3(0.0);
        #else
            if (VdotU > 0.0) return vec3(0.0);
        #endif
        float nebulaBelowHorizonBrightness = min(1.0, abs(VdotU) * 3.0);
    #else
        float nebulaBelowHorizonBrightness = 1.0;
    #endif

    vec3 wpos = normalize((gbufferModelViewInverse * vec4(viewPos * 1000.0, 1.0)).xyz);

    #if END_NEBULA_RESOLUTION > 0
        wpos = snapToCubeSphereGrid(wpos, END_NEBULA_RESOLUTION * 100);
    #endif

    vec2 distortionRaw = GetNebulaDistortion(0.05 * wpos);
    float galaxyMask = smoothstep(1.5, 3.7, distortionRaw.x + distortionRaw.y);

    vec2 distortion = 0.075 * END_NEBULA_DISTORTION_INTENSITY * sin(3.0 * distortionRaw);
    vec3 basis1 = vec3(-wpos.y, wpos.x, wpos.z);
    vec3 basis2 = cross(wpos, basis1);
    vec3 distortedWpos = normalize(wpos + distortion.x * basis1 + distortion.y * basis2);

    // Use hash as direct seed causes float precision issues with large numbers
    float seedOffset = hash1(uint(END_NEBULA_SEED)) * 6967.0;

    // layered noise builds both the nebula shape and a secondary color noise used to mix the two nebula colors
    vec3 noiseBase = 4.0 * distortedWpos + frameTimeCounter * 0.005 * END_NEBULA_ANIMATION_SPEED - 1417 + seedOffset;

    float noise = 0.0;
    float colorNoise = 0.0;
    float coverageNoise = 0.0;
    for (int i = 0; i < 6; i++) {
        int octave = i + 2; // octave 1 is always 0 amplitude, so it's skipped entirely
        float rawLayer = Noise3D(noiseBase / pow3(float(octave)));
        float layer = nebulaNoiseAmps[i] * pow(rawLayer, 3.5);
        noise += layer * 1.25;
        colorNoise += layer / float(octave);
        coverageNoise += nebulaNoiseAmps[i] * rawLayer;
    }

    vec3 beamPurple = sqrt(baseBeamPurple * (2.5 - 1.0 * vlFactor));

    vec3 colorOld = mix(
        sqrt(endOrangeCol),
        beamPurple,
        pow2(cos(6.7 * colorNoise) * 0.5)
    ) * END_NEBULA_COLOR_2_INTENSITY + galaxyMask * 0.5;

    vec3 color = mix(endSkyColor, colorOld, clamp01(colorNoise + galaxyMask * 0.5));

    #if END_NEBULA_RESOLUTION > 0
        noise *= mix(1.0, hash13(NEBULA_GRID_SCALE * wpos), END_NEBULA_GRAININESS); // Causes moire on non-pixelated resolutions, aka remove it there lol
    #endif

    float coverageFactor = 1.0;
    #if END_NEBULA_COVERAGE > 0
        float coverageThreshold = (END_NEBULA_COVERAGE * 0.1 + 1.0) * 3.05 * 0.25;
        float coverageWidth = 0.001 + coverageThreshold * 0.7;
        coverageFactor = smoothstep(coverageThreshold, coverageThreshold + coverageWidth, coverageNoise);
        noise *= coverageFactor;
    #endif

    noise = pow(noise, 1.3);
    noise *= mix(0.8, 1.5, galaxyMask);

    float nebulaStarFactor = mix(0.05, 0.7, clamp01(noise));
    nebulaStarFactor = mix(nebulaStarFactor, 1.5, clamp01(pow3(noise)));
    float nebulaStarDensity = clamp01(nebulaStarFactor + galaxyMask);
    nebulaStarDensity += clamp01(pow(max(0.0, noise), 18.0)) * 12.0;

    float nebulaStars = 0.0;
    float starColorRand = 0.0;
    #if END_NEBULA_STAR_BRIGHTNESS > 0
        vec2 nebulaStarsData = GetNebulaStars(wpos, NEBULA_GRID_SCALE, nebulaStarDensity, seedOffset);
        nebulaStars = nebulaStarsData.x * nebulaStarFactor * coverageFactor * END_NEBULA_STAR_BRIGHTNESS * 0.1;
        starColorRand = nebulaStarsData.y;
    #endif

    vec3 nebula = noise * color;

    #ifdef END_NEBULA_ONLY_STARS
        nebula = vec3(0.0);
    #endif

    float starColorBlend = mix(0.2, 0.93, pow(starColorRand, 0.15));
    nebula = max0(nebula + nebulaStars * mix(vec3(1.0), color, starColorBlend)) * END_NEBULA * 0.1 * nebulaBelowHorizonBrightness;

    #ifdef ATM_COLOR_MULTS
        nebula *= sqrtAtmColorMult; // C72380KD - Reduced atmColorMult impact on some things
    #endif

    return nebula;
}
