//////////////////////////////////////////
// Complementary Shaders by EminGT      //
// With Euphoria Patches by SpacEagle17 //
//////////////////////////////////////////

//Common//
#include "/lib/common.glsl"
#include "/lib/shaderSettings/raindropColor.glsl"
//#define GLOWING_COLORED_PARTICLES
#define SMOKE_PARTICLE_OPACITY 0.5 //[0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0]

#if defined MIRROR_DIMENSION || defined WORLD_CURVATURE
    #include "/lib/misc/distortWorld.glsl"
#endif

//////////Fragment Shader//////////Fragment Shader//////////Fragment Shader//////////
#ifdef FRAGMENT_SHADER

in vec2 texCoord;
in vec2 lmCoord;

flat in vec3 upVec, sunVec, northVec, eastVec;
in vec3 normal;

flat in vec4 glColor;

//Pipeline Constants//

//Common Variables//
float NdotU = dot(normal, upVec);
float NdotUmax0 = max(NdotU, 0.0);
float SdotU = dot(sunVec, upVec);
float sunFactor = SdotU < 0.0 ? clamp(SdotU + 0.375, 0.0, 0.75) / 0.75 : clamp(SdotU + 0.03125, 0.0, 0.0625) / 0.0625;
float sunVisibility = clamp(SdotU + 0.0625, 0.0, 0.125) / 0.125;
float sunVisibility2 = sunVisibility * sunVisibility;
float shadowTimeVar1 = abs(sunVisibility - 0.5) * 2.0;
float shadowTimeVar2 = shadowTimeVar1 * shadowTimeVar1;
float shadowTime = shadowTimeVar2 * shadowTimeVar2;

#ifdef OVERWORLD
    vec3 lightVec = sunVec * ((timeAngle < 0.5325 || timeAngle > 0.9675) ? 1.0 : -1.0);
#else
    vec3 lightVec = sunVec;
#endif

//Common Functions//

//Includes//
#include "/lib/util/spaceConversion.glsl"
#include "/lib/lighting/mainLighting.glsl"
#include "/lib/util/dither.glsl"

#if MC_VERSION >= 11500
    #include "/lib/atmospherics/fog/mainFog.glsl"
#endif

#ifdef ATM_COLOR_MULTS
    #include "/lib/colors/colorMultipliers.glsl"
#endif

#ifdef COLOR_CODED_PROGRAMS
    #include "/lib/misc/colorCodedPrograms.glsl"
#endif

#if defined BIOME_COLORED_NETHER_PORTALS && !defined BORDER_FOG
    #include "/lib/colors/skyColors.glsl"
#endif

#ifdef SS_BLOCKLIGHT
    #include "/lib/lighting/coloredBlocklight.glsl"
#endif

//Program//
void main() {
    vec4 color = texture2D(tex, texCoord);
    vec4 colorP = color;
    color *= glColor;

    if (color.a < 0.01) discard;

    vec3 screenPos = vec3(gl_FragCoord.xy / vec2(viewWidth, viewHeight), gl_FragCoord.z);
    vec3 viewPos = ScreenToView(screenPos);
    float lViewPos = length(viewPos);
    vec3 playerPos = ViewToPlayer(viewPos);

    float dither = texture2DLod(noisetex, gl_FragCoord.xy / 128.0, 0.0).b;
    #ifdef TAA
        dither = fract(dither + goldenRatio * mod(float(frameCounter), 3600.0));
    #endif

    #ifdef ATM_COLOR_MULTS
        atmColorMult = GetAtmColorMult();
    #endif

    #ifdef VL_CLOUDS_ACTIVE
        float cloudLinearDepth = texelFetch(gaux2, texelCoord, 0).a;

        if (cloudLinearDepth > 0.0) // Because Iris changes the pipeline position of opaque particles
        if (pow2(cloudLinearDepth + OSIEBCA * dither) * renderDistance < min(lViewPos, renderDistance)) discard;
    #endif

    float emission = 0.0, enderDragonDead = 1.0, materialMask = OSIEBCA * 254.0; // No SSAO, No TAA, Reduce Reflection
    vec2 lmCoordM = lmCoord;
    vec3 normalM = normal, geoNormal = normal, shadowMult = vec3(1.0);
    vec3 worldGeoNormal = normalize(ViewToPlayer(geoNormal * 10000.0));
    float purkinjeOverwrite = 0.0;
    #if defined IPBR && defined IPBR_PARTICLE_FEATURES
        // We don't want to detect particles from the block atlas
        #if MC_VERSION >= 12000
            float atlasCheck = 1100.0; // I think texture atlas got bigger in newer mc
        #else
            float atlasCheck = 900.0;
        #endif

        vec2 tSize = textureSize(tex, 0);
        if (tSize.x < atlasCheck) {
            if (color.b > 1.15 * (color.r + color.g) && color.g > color.r * 1.25 && color.g < 0.425 && color.b > 0.75) { // Water Particle
                materialMask = OSIEBCA * 251.0; // No SSAO, Reduce Reflection
                color.rgb = sqrt3(color.rgb);
                color.rgb *= 0.7;
                if (dither > 0.4) discard;
                #ifdef NO_RAIN_ABOVE_CLOUDS
                    if (cameraPosition.y > maximumCloudsHeight) discard;
                #endif
            #ifdef OVERWORLD
            } else if (color.b > 0.7 && color.r < 0.28 && color.g < 0.425 && color.g > color.r * 1.4) { // physics mod rain
                #ifdef NO_RAIN_ABOVE_CLOUDS
                    if (cameraPosition.y > maximumCloudsHeight) discard;
                #endif
                if (color.a < 0.1 || isEyeInWater == 3) discard;
                color.a *= rainTexOpacity;
                color.rgb = sqrt2(color.rgb) * (blocklightCol * 2.0 * lmCoord.x + ambientColor * lmCoord.y * (0.7 + 0.35 * sunFactor));
                color.rgb *= vec3(WEATHER_TEX_R, WEATHER_TEX_G, WEATHER_TEX_B);
            } else if (color.rgb == vec3(1.0) && color.a < 0.765 && color.a > 0.605) { // physics mod snow (default snow opacity only)
                #ifdef NO_RAIN_ABOVE_CLOUDS
                    if (cameraPosition.y > maximumCloudsHeight) discard;
                #endif
                if (color.a < 0.1 || isEyeInWater == 3) discard;
                color.a *= snowTexOpacity;
                color.rgb = sqrt2(color.rgb) * (blocklightCol * 2.0 * lmCoord.x + lmCoord.y * (0.7 + 0.35 * sunFactor) + ambientColor * 0.2);
                color.rgb *= vec3(WEATHER_TEX_R, WEATHER_TEX_G, WEATHER_TEX_B);
            } else if (abs(glColor.b - 0.9961) < 0.002 && abs(glColor.g - (glColor.r + 1.0) * 0.5) < 0.004 && glColor.r > 0.9) { // WindLink Particle Snow
                #ifdef NO_RAIN_ABOVE_CLOUDS
                    if (cameraPosition.y > maximumCloudsHeight) discard;
                #endif
                if (color.a < 0.1 || isEyeInWater == 3) discard;
                color.a *= snowTexOpacity;
                color.rgb = sqrt2(color.rgb) * (blocklightCol * 2.0 * lmCoord.x + lmCoord.y * (0.7 + 0.35 * sunFactor) + ambientColor * 0.2);
                color.rgb *= vec3(WEATHER_TEX_R, WEATHER_TEX_G, WEATHER_TEX_B);
            #endif
            } else if (color.r == 1.0 && color.b < 0.778 && color.g < 0.97) { // Fire Particle
                #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                    color.rgb = changeColorFunction(color.rgb, 3.0, colorSoul, inSoulValley);
                #endif
                #ifdef PURPLE_END_FIRE_INTERNAL
                    color.rgb = changeColorFunction(color.rgb, 3.0, colorEndBreath, 1.0);
                #endif
                emission = 2.0;
            } else if (color.r == color.g && color.r - 0.5 * color.b < 0.06) { // Underwater Particle
                if (isEyeInWater == 1) {
                    color.rgb = sqrt2(color.rgb) * 0.35;
                    if (fract(playerPos.y + cameraPosition.y) > 0.25) discard;
                }
            } else if (color.a < 0.99 && dot(color.rgb, color.rgb) < 1.0) { // Campfire Smoke
                color.a *= SMOKE_PARTICLE_OPACITY;
                materialMask = OSIEBCA * 251.0; // No SSAO, Reduce Reflection
            } else if (max(abs(colorP.r - colorP.b), abs(colorP.b - colorP.g)) < 0.001) { // Grayscale Particles
                float dotColor = dot(color.rgb, color.rgb);
                if (dotColor > 0.25 && color.g < 0.5 && (color.b > color.r * 1.1 && color.r > 0.3 || color.r > (color.g + color.b) * 3.0)) {
                    // Ender Particle, Crying Obsidian Particle, Redstone Particle
                    emission = clamp(color.r * 8.0, 1.6, 5.0);
                    color.rgb = pow1_5(color.rgb);
                    lmCoordM = vec2(0.0);
                    #if defined NETHER && defined BIOME_COLORED_NETHER_PORTALS
                        if (color.b > color.r * color.r && color.g < 0.16 && color.r > 0.2) color.rgb = changeColorFunction(color.rgb, 10.0, netherColor, 1.0); // Nether Portal
                    #endif
                } else if (color.r > 0.83 && color.g > 0.23 && color.b < 0.4) {
                    // Lava Particles
                    emission = 2.0;
                    color.b *= 0.5;
                    color.r *= 1.2;
                    color.rgb += vec3(min(pow2(pow2(emission * 0.35)), 0.4)) * LAVA_TEMPERATURE * 0.5;
                    emission *= LAVA_EMISSION;
                    #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 3.5, colorSoul, inSoulValley);
                    #endif
                    #ifdef PURPLE_END_FIRE_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 3.5, colorEndBreath, 1.0);
                    #endif
                }
            }
        }
        bool noSmoothLighting = false;
    #else
        #if defined OVERWORLD && defined NO_RAIN_ABOVE_CLOUDS || defined NETHER && (defined BIOME_COLORED_NETHER_PORTALS || defined SOUL_SAND_VALLEY_OVERHAUL_INTERNAL)
            if (atlasSize.x < 900.0) {
                if (color.b > 1.15 * (color.r + color.g) && color.g > color.r * 1.25 && color.g < 0.425 && color.b > 0.75) { // Water Particle
                    #ifdef NO_RAIN_ABOVE_CLOUDS
                        if (cameraPosition.y > maximumCloudsHeight) discard;
                    #endif
                }
                #ifdef OVERWORLD
                if (color.b > 0.7 && color.r < 0.28 && color.g < 0.425 && color.g > color.r * 1.4) { // physics mod rain
                    #ifdef NO_RAIN_ABOVE_CLOUDS
                        if (cameraPosition.y > maximumCloudsHeight) discard;
                    #endif
                    if (color.a < 0.1 || isEyeInWater == 3) discard;
                    color.a *= rainTexOpacity;
                    color.rgb = sqrt2(color.rgb) * (blocklightCol * 2.0 * lmCoord.x + ambientColor * lmCoord.y * (0.7 + 0.35 * sunFactor));
                    color.rgb *= vec3(WEATHER_TEX_R, WEATHER_TEX_G, WEATHER_TEX_B);
                } else if (color.rgb == vec3(1.0) && color.a < 0.765 && color.a > 0.605) { // physics mod snow (default snow opacity only)
                    #ifdef NO_RAIN_ABOVE_CLOUDS
                        if (cameraPosition.y > maximumCloudsHeight) discard;
                    #endif
                    if (color.a < 0.1 || isEyeInWater == 3) discard;
                    color.a *= snowTexOpacity;
                    color.rgb = sqrt2(color.rgb) * (blocklightCol * 2.0 * lmCoord.x + lmCoord.y * (0.7 + 0.35 * sunFactor) + ambientColor * 0.2);
                    color.rgb *= vec3(WEATHER_TEX_R, WEATHER_TEX_G, WEATHER_TEX_B);
                } else if (abs(glColor.b - 0.9961) < 0.002 && abs(glColor.g - (glColor.r + 1.0) * 0.5) < 0.004 && glColor.r > 0.9) { // WindLink Particle Snow
                    #ifdef NO_RAIN_ABOVE_CLOUDS
                        if (cameraPosition.y > maximumCloudsHeight) discard;
                    #endif
                    if (color.a < 0.1 || isEyeInWater == 3) discard;
                    color.a *= snowTexOpacity;
                    color.rgb = sqrt2(color.rgb) * (blocklightCol * 2.0 * lmCoord.x + lmCoord.y * (0.7 + 0.35 * sunFactor) + ambientColor * 0.2);
                    color.rgb *= vec3(WEATHER_TEX_R, WEATHER_TEX_G, WEATHER_TEX_B);
                }
                #endif
                if (color.r == 1.0 && color.b < 0.778 && color.g < 0.97) { // Fire Particle
                    #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 3.0, colorSoul, inSoulValley);
                    #endif
                    #ifdef PURPLE_END_FIRE_INTERNAL
                        color.rgb = changeColorFunction(color.rgb, 3.0, colorEndBreath, 1.0);
                    #endif
                    emission = 2.0;
                }
                if (max(abs(colorP.r - colorP.b), abs(colorP.b - colorP.g)) < 0.001) {
                    if (dot(color.rgb, color.rgb) > 0.25 && color.g < 0.5 && (color.b > color.r * 1.1 && color.r > 0.3 || color.r > (color.g + color.b) * 3.0)) {
                        #if defined NETHER && defined BIOME_COLORED_NETHER_PORTALS
                            vec3 color2 = pow1_5(color.rgb);
                            if (color2.b > color2.r * color2.r && color2.g < 0.16 && color2.r > 0.2) {
                                emission = clamp(color2.r * 8.0, 1.6, 5.0);
                                color.rgb = color.rgb = changeColorFunction(color.rgb, 10.0, netherColor, 1.0);
                                lmCoordM = vec2(0.0);
                            }
                        #endif
                    } else if (color.r > 0.83 && color.g > 0.23 && color.b < 0.4) {
                        #ifdef SOUL_SAND_VALLEY_OVERHAUL_INTERNAL
                            color.rgb = changeColorFunction(color.rgb, 3.5, colorSoul, inSoulValley);
                        #endif
                        #ifdef PURPLE_END_FIRE_INTERNAL
                            color.rgb = changeColorFunction(color.rgb, 3.5, colorEndBreath, 1.0);
                        #endif
                    }
                }
            }
        #endif
        bool noSmoothLighting = true;
    #endif

    #ifdef REDUCE_CLOSE_PARTICLES
        if (lViewPos - 1.0 < dither) discard;
    #endif

    #ifdef GLOWING_COLORED_PARTICLES
        if (atlasSize.x < 900.0) {
            if (dot(glColor.rgb, vec3(1.0)) < 2.99) {
                emission = 5.0;
            }
        }
    #endif

    #if MONOTONE_WORLD > 0
        #if MONOTONE_WORLD == 1
            color.rgb = vec3(1.0);
        #elif MONOTONE_WORLD == 2
            color.rgb = vec3(0.0);
        #else
            color.rgb = vec3(0.5);
        #endif
    #endif

    #ifdef SS_BLOCKLIGHT
        blocklightCol = ApplyMultiColoredBlocklight(blocklightCol, screenPos, playerPos, lmCoord.x);
    #endif

    bool isLightSource = lmCoord.x > 0.99;

    DoLighting(color, shadowMult, playerPos, viewPos, lViewPos, geoNormal, normalM, dither,
               worldGeoNormal, lmCoordM, noSmoothLighting, false, true,
               false, 0, 0.0, 1.0, emission, purkinjeOverwrite, isLightSource,
               enderDragonDead, vec3(1.0));

    #if MC_VERSION >= 11500
        vec3 nViewPos = normalize(viewPos);

        float VdotU = dot(nViewPos, upVec);
        float VdotS = dot(nViewPos, sunVec);
        float sky = 0.0;

        float prevAlpha = color.a;
        DoFog(color, sky, lViewPos, playerPos, VdotU, VdotS, dither, false, 0.0);
        color.a = prevAlpha;
    #endif

    vec3 translucentMult = mix(vec3(0.666), color.rgb * (1.0 - pow2(pow2(color.a))), color.a);

    float SSBLMask = 0.0;
    #ifdef ENTITIES_ARE_LIGHT
        SSBLMask = 1.0;
    #endif

    #ifdef COLOR_CODED_PROGRAMS
        ColorCodeProgram(color, -1);
    #endif

    /* DRAWBUFFERS:063 */
    gl_FragData[0] = color;
    gl_FragData[1] = vec4(0.0, materialMask, 0.0, lmCoord.x + clamp01(purkinjeOverwrite) + clamp01(emission));
    gl_FragData[2] = vec4(1.0 - translucentMult, 1.0);

    #if WATER_REFLECT_QUALITY > 0 && WORLD_SPACE_REFLECTIONS > 0
        /* DRAWBUFFERS:0634 */
        gl_FragData[3] = vec4(0.0, 1.0, 0.0, 1.0);

        #ifdef SS_BLOCKLIGHT
            /* DRAWBUFFERS:06349 */
            gl_FragData[4] = vec4(0.0, 0.0, 0.0, SSBLMask);
        #endif
    #elif defined SS_BLOCKLIGHT
        /* DRAWBUFFERS:0639 */
        gl_FragData[3] = vec4(0.0, 0.0, 0.0, SSBLMask);
    #endif
}

#endif

//////////Vertex Shader//////////Vertex Shader//////////Vertex Shader//////////
#ifdef VERTEX_SHADER

out vec2 texCoord;
out vec2 lmCoord;

flat out vec3 upVec, sunVec, northVec, eastVec;
out vec3 normal;

flat out vec4 glColor;

//Attributes//

#if defined WAVE_EVERYTHING || defined ATLAS_ROTATION
    attribute vec4 mc_midTexCoord;
#endif

//Common Variables//

//Common Functions//

//Includes//

#ifdef WAVE_EVERYTHING
    #include "/lib/materials/materialMethods/wavingBlocks.glsl"
#endif

#ifdef MCWIND_INTERNAL
    uniform int  mcw_floaterN;
    uniform vec4 mcw_floaterA[16];

    #include "/lib/shaderSettings/wavingBlocks.glsl"
    #include "/lib/shaderSettings/water.glsl"

    #define MCW_GAUX4_DC 0.1494
    #define MCW_FLOAT_PROUD 0.03

    float McwMeshHeight(vec2 xz, float skyLight) {
        float h = 0.0;

        #ifdef WAVING_WATER_VERTEX
            float waterWaveTime = frameTimeCounter * 6.0 * WAVING_SPEED;
            vec2 wp = xz * 14.0;
            float wave  = sin(waterWaveTime * 0.7 - wp.y * 0.14 + wp.x * 0.07);
                  wave += sin(waterWaveTime * 0.5 - wp.y * 0.10 + wp.x * 0.05);
            #if defined NO_WAVING_INDOORS && !defined WAVE_EVERYTHING
                wave *= clamp(skyLight - 0.87, 0.0, 0.1);
            #else
                wave *= 0.1;
            #endif
            h += wave * 0.125 - 0.05;
        #endif

        return h;
    }

    float McwWaveHeight(vec2 xz, float surfaceY, float skyLight) {
        float h = McwMeshHeight(xz, skyLight);

        #if WATER_STYLE >= 2
            vec2 waterPos = 0.032 * (xz + surfaceY * 2.0);
            vec2 wind = vec2(0.0, -frameTimeCounter * (WATER_SPEED_MULT * 0.018));

            float bumpNoise = 1.0;
            #ifdef CLEAR_WATER_SPOTS
                bumpNoise = 1.0 - clamp((1.0 - smoothstep(0.0, 0.5, texture2DLod(noisetex,
                        waterPos.x * 0.045 + waterPos * 0.042 + wind * 0.006, 0.0).g)) * 2.0,
                        0.0, 1.0) * 0.85;
            #endif

            vec2 waterPosM = waterPos * (WATER_SIZE_MULT * 0.01) * 2.5;
            wind *= 2.5;

            float hMed   = texture2DLod(gaux4, waterPosM + wind, 0.0).a - 0.5;
            float hSmall = texture2DLod(gaux4, waterPosM * 4.0 - 2.0 * wind, 0.0).a - 0.5;
            float hBig   = texture2DLod(gaux4, waterPosM * 0.25 - 0.5 * wind, 0.0).a - 0.5;
                  hBig  += texture2DLod(gaux4, waterPosM * 0.05 - 0.05 * wind, 0.0).a - 0.5;
            float hSum = hMed * WATER_BUMP_MED + hSmall * WATER_BUMP_SMALL + hBig * WATER_BUMP_BIG;

            hSum += (0.5 - MCW_GAUX4_DC)
                  * (WATER_BUMP_MED + WATER_BUMP_SMALL + 2.0 * WATER_BUMP_BIG);

            h += hSum * 0.08 * (WATER_BUMPINESS * 0.8) * bumpNoise * (0.25 + 0.75 * skyLight);
        #endif

        return h;
    }

    float GetMCWindFloaterLift(vec3 worldPos, float skyLight) {
        if (mcw_floaterN <= 0) return 0.0;
        float best = 0.36;
        vec2 centre = vec2(0.0);
        float surfaceY = 0.0;
        float since = -1.0;
        for (int i = 0; i < 16; i++) {
            if (i >= mcw_floaterN) break;
            vec4 fa = mcw_floaterA[i];
            vec2 d = worldPos.xz - fa.rg;
            float d2 = dot(d, d);
            if (d2 < best && abs(worldPos.y - fa.b) < 0.6) {
                best = d2;
                centre = fa.rg;
                surfaceY = fa.b;
                since = fa.a;
            }
        }
        if (since < 0.0) return 0.0;

        float h0 = McwMeshHeight(centre, skyLight);

        float tap = 0.25;
        float hxp = McwWaveHeight(centre + vec2(tap, 0.0), surfaceY, skyLight);
        float hxn = McwWaveHeight(centre - vec2(tap, 0.0), surfaceY, skyLight);
        float hzp = McwWaveHeight(centre + vec2(0.0, tap), surfaceY, skyLight);
        float hzn = McwWaveHeight(centre - vec2(0.0, tap), surfaceY, skyLight);
        vec2 slope = clamp(vec2(hxp - hxn, hzp - hzn) / (2.0 * tap), -0.6, 0.6);

        return clamp(h0, -0.35, 0.35) + MCW_FLOAT_PROUD
             + clamp(dot(worldPos.xz - centre, slope), -0.25, 0.25);
    }
#endif

//Program//
void main() {
    vec4 position = gbufferModelViewInverse * gl_ModelViewMatrix * gl_Vertex;
    gl_Position = ftransform();

    texCoord = (gl_TextureMatrix[0] * gl_MultiTexCoord0).xy;
    #ifdef ATLAS_ROTATION
        texCoord += texCoord * float(hash33(mod(cameraPosition * 0.5, vec3(100.0))));
    #endif
    lmCoord  = GetLightMapCoordinates();

    glColor = gl_Color;

    normal = normalize(gl_NormalMatrix * gl_Normal);
    upVec = normalize(gbufferModelView[1].xyz);
    eastVec = normalize(gbufferModelView[0].xyz);
    northVec = normalize(gbufferModelView[2].xyz);
    sunVec = GetSunVector();

    #if defined MIRROR_DIMENSION || defined WORLD_CURVATURE || defined WAVE_EVERYTHING
        #ifdef MIRROR_DIMENSION
            doMirrorDimension(position);
        #endif
        #ifdef WORLD_CURVATURE
            position.y += doWorldCurvature(position.xz);
        #endif
        #ifdef WAVE_EVERYTHING
            DoWaveEverything(position.xyz);
        #endif
        gl_Position = gl_ProjectionMatrix * gbufferModelView * position;
    #endif

    #ifdef MCWIND_INTERNAL
        float mcwFloaterLift = GetMCWindFloaterLift(position.xyz + cameraPosition, lmCoord.y);
        if (mcwFloaterLift != 0.0) {
            position.y += mcwFloaterLift;
            gl_Position = gl_ProjectionMatrix * gbufferModelView * position;
        }
    #endif

    #ifdef FLICKERING_FIX
        gl_Position.z -= 0.000002;
    #endif
}

#endif
