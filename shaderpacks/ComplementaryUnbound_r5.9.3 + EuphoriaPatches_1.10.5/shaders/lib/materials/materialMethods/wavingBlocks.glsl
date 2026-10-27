#include "/lib/shaderSettings/wavingBlocks.glsl"

#if COLORED_LIGHTING_INTERNAL > 0
    #include "/lib/voxelization/lightVoxelization.glsl"
#endif

// Material ID groups shared between the MCWind override below and DoWave's
// built-in waving fallback further down, so the two lists can't drift apart.
#define MAT_GROUNDED_FOLIAGE (mat == 10003 || mat == 10005 || mat == 10029 || mat == 10025) // Grounded Foliage
#define MAT_UPPER_LAYER_FOLIAGE (mat == 10021 || mat == 10023 || mat == 10027) // Upper Layer Foliage
#define MAT_LEAVES (mat == 10007 || mat == 10009 || mat == 10011) // Leaves
#define MAT_SNOW_LAYER (mat == 10953)
#define MAT_VINE_WALL (mat == 11009 || mat == 10544) // Vine, Glow Lichen
#define MAT_VINE_CEILING (mat == 10923 || mat == 10629 || mat == 10632) // Pale Hanging Moss, Cave Vines
#define MAT_WEEPING_VINES (mat == 10884 || mat == 10885) // Weeping Vines - hangs from the block above, like MAT_VINE_CEILING
#define MAT_TWISTING_VINES (mat == 10887) // Twisting Vines - bottom-anchored, grows upward
#define MAT_VINE (mat == 11009 || mat == 10923) // Vine, Pale Hanging Moss (just those 2 from default Comp) - used by DoWave's own fallback below
#define MAT_FIRE (mat == 10072 || mat == 10076) // Fire, Soul Fire
#define MAT_CAMPFIRE_LIT (mat == 10652 || mat == 10656) // Campfire:Lit, Soul Campfire:Lit
#define MAT_STALK (mat == 10039 || mat == 10753) // Sugar Cane, Bamboo
#define MAT_LILY_PAD (mat == 10489) // Lily Pad
#define MAT_PENDANT (mat == 10562 || mat == 10743 || mat == 10564 || mat == 10988 || mat == 10291) // All types of Lanterns, Chains
#if defined DO_MORE_FOLIAGE_WAVING || defined MCWIND_INTERNAL
    #define MAT_GROUNDED_FOLIAGE_EXTRA (mat == 10769 || mat == 10976) // Torchflower, Open Eye Blossom
#endif

#if defined MCWIND_INTERNAL && (defined GBUFFERS_TERRAIN || defined SHADOW || defined GBUFFERS_BLOCK)

    #define MCW_CAVE_CALM 0.75 // How calm the wind is in caves

    // arm is the length of the chain/lantern, 1 is just a single lantern. The longer the chain, the more it swings
    // Caps at 9 and then it has 0.42 as the max radius of movement. 0.018 is the minimum radius of movement for a single lantern.
    #define MCW_PENDANT_RADIUS (mix(0.018, 0.42, smoothstep(1.0, 9.0, float(arm)))) // Amount of movement in lanterns
    #define MCW_PENDULUM // Makes the lanterns swing like a pendulum instead

    #define MCW_IMPULSE_OFF
    #define MCW_CALM_SMOOTH
    #ifdef GBUFFERS_BLOCK
        // Only the pendant/hanging-sign swing is needed in this stage - the vine, floater, volume and
        // portal families would otherwise compile in unused just because this file got included here.
        #define MCW_VINE_OFF
        #define MCW_FLOATER_OFF
        #define MCW_VOLUME_OFF
        #define MCW_PORTAL_OFF
    #endif

    #include "/mcwind/mcwind.glsl"

    // mcw_leafWeld samples one cell's wood-distance value, which pops at the seam between two leaf
    // blocks whose distance-to-trunk differs. Bilinearly blending the four neighboring cell centers
    // smooths that transition instead of letting it snap. MCW_WELD_SINGLE opts back into the cheaper
    // single-sample read if a pack would rather pay one texture read than four.
    float Weld_MCWIND(vec3 p) {
    #ifdef MCW_WELD_SINGLE
        return mcw_leafWeld(p, p);
    #endif
        vec2 g = p.xz - 0.5;
        vec2 b = floor(g);
        vec2 f = g - b;
        vec3 c00 = vec3(b.x + 0.5, p.y, b.y + 0.5);
        vec3 c10 = vec3(b.x + 1.5, p.y, b.y + 0.5);
        vec3 c01 = vec3(b.x + 0.5, p.y, b.y + 1.5);
        vec3 c11 = vec3(b.x + 1.5, p.y, b.y + 1.5);
        return mix(mix(mcw_leafWeld(c00, c00), mcw_leafWeld(c10, c10), f.x),
                   mix(mcw_leafWeld(c01, c01), mcw_leafWeld(c11, c11), f.x), f.y);
    }

    #define MAT_HANGING_SIGN (mat == MCW_MAT_HANGING_SIGN)

#ifndef MCW_DOWNWASH_PRESS
#define MCW_DOWNWASH_PRESS 0.55
#endif
#ifndef MCW_DOWNWASH_SPLAY
#define MCW_DOWNWASH_SPLAY 0.35
#endif

#ifdef MCW_WAVE_LOD
    #define MCW_LOD_SKIP if (mcwFade <= 0.0) return true;
    #define MCW_LOD_BLEND playerPos = mix(mcwStart, playerPos, mcwFade);
#else
    #define MCW_LOD_SKIP
    #define MCW_LOD_BLEND
#endif

bool DoWave_MCWIND(inout vec3 playerPos, vec3 worldPos, int mat) {
    vec3 blockCenter = worldPos + clamp(at_midBlock.xyz / 64.0, -2.0, 2.0);
    #ifdef MCW_WAVE_LOD
        float mcwFade = mcw_waveFade(blockCenter, cameraPosition);
        vec3 mcwStart = playerPos;
    #endif

    #ifdef MCWIND_FOLIAGE
        if (MAT_GROUNDED_FOLIAGE
            #if defined DO_MORE_FOLIAGE_WAVING || defined MCWIND_INTERNAL
                || MAT_GROUNDED_FOLIAGE_EXTRA
                || mat == 10972 // Firefly Bush
            #endif
        ) {
            MCW_LOD_SKIP
            float h = mcw_grassHeight(worldPos, blockCenter, 0.0);
            playerPos.xz += mcw_grassPush(blockCenter, h);
            playerPos.xz += mcw_draftPush(blockCenter, cameraPosition, h);
            float dn = mcw_draftDown(blockCenter, cameraPosition);
            if (dn > 0.0) {
                playerPos.y -= dn * h * MCW_DOWNWASH_PRESS;
                vec2 out2 = worldPos.xz - blockCenter.xz;
                float ol = length(out2);
                if (ol > 1.0e-4) {
                    playerPos.xz += (out2 / ol) * dn * h * MCW_DOWNWASH_SPLAY;
                }
            }
            MCW_LOD_BLEND
            return true;
        }

        if (MAT_UPPER_LAYER_FOLIAGE) {
            MCW_LOD_SKIP
            float h = mcw_grassHeight(worldPos, blockCenter, 1.0);
            playerPos.xz += mcw_grassPush(blockCenter, h);
            playerPos.xz += mcw_draftPush(blockCenter, cameraPosition, h);
            float dn = mcw_draftDown(blockCenter, cameraPosition);
            if (dn > 0.0) {
                playerPos.y -= dn * h * MCW_DOWNWASH_PRESS;
                vec2 out2 = worldPos.xz - blockCenter.xz;
                float ol = length(out2);
                if (ol > 1.0e-4) {
                    playerPos.xz += (out2 / ol) * dn * h * MCW_DOWNWASH_SPLAY;
                }
            }
            MCW_LOD_BLEND
            return true;
        }
    #endif

    #ifdef MCWIND_LEAVES
        if (MAT_LEAVES) {
            MCW_LOD_SKIP
            float weld = Weld_MCWIND(worldPos);
            playerPos += mcw_leafSway(worldPos, blockCenter, weld);
            MCW_LOD_BLEND
            return true;
        }

        if (MAT_SNOW_LAYER) {
            MCW_LOD_SKIP
            // A snow layer sitting directly on a leaf canopy should ride the leaf's own sway rather
            // than stand still above it. mcw_readCanopy publishes the leaf surface height per column;
            // if the block right below this snow matches that height, anchor the snow to the SAME
            // sway calculation the leaf underneath it uses.
            float supportY = floor(blockCenter.y) - 1.0;
            vec3 leafCenter = vec3(floor(blockCenter.x) + 0.5, supportY + 0.5, floor(blockCenter.z) + 0.5);
            mcw_Canopy canopy = mcw_readCanopy(leafCenter.xz);
            if (canopy.known && abs(supportY - canopy.y) < 0.1) {
                vec3 snowAnchor = vec3(worldPos.x, leafCenter.y, worldPos.z);
                float weld = Weld_MCWIND(snowAnchor);
                playerPos += mcw_leafSway(snowAnchor, leafCenter, weld);
            }
            MCW_LOD_BLEND
            return true;
        }
    #endif

    #if defined MCWIND_VINES && !defined MCW_VINE_OFF
        if ((MAT_VINE_CEILING || MAT_WEEPING_VINES) && mcw_hasOccupancy()) {
            MCW_LOD_SKIP
            float weld = Weld_MCWIND(worldPos);
            vec3 delta = mcw_leafSway(worldPos, blockCenter, weld);
            delta.xz += mcw_vineSwing(worldPos, blockCenter, weld);
            playerPos += mcw_vineDrop(delta, worldPos, blockCenter);
            MCW_LOD_BLEND
            return true;
        }

        if (MAT_VINE_WALL && mcw_hasOccupancy()) {
            MCW_LOD_SKIP
            float weld = Weld_MCWIND(worldPos);
            vec3 delta = mcw_leafSway(worldPos, blockCenter, weld);
            delta.xz += mcw_vineSwing(worldPos, blockCenter, weld);

            #ifdef GBUFFERS_TERRAIN
                vec3 worldFaceNormal = normalize(mat3(gbufferModelViewInverse) * gl_NormalMatrix * gl_Normal);
            #else
                vec3 worldFaceNormal = normalize(mat3(shadowModelViewInverse) * gl_NormalMatrix * gl_Normal);
            #endif

            playerPos += mcw_vineMotion(delta, worldPos, blockCenter, worldFaceNormal);
            MCW_LOD_BLEND
            return true;
        }

        if (MAT_TWISTING_VINES && mcw_hasOccupancy()) {
            MCW_LOD_SKIP
            float weld = Weld_MCWIND(worldPos);
            vec3 delta = mcw_leafSway(worldPos, blockCenter, weld);
            delta.xz += mcw_vineSwing(worldPos, blockCenter, weld);
            playerPos += mcw_vineRise(delta, worldPos, blockCenter);
            MCW_LOD_BLEND
            return true;
        }
    #endif

    #ifdef MCWIND_PENDANTS
        if ((MAT_PENDANT || MAT_HANGING_SIGN) && mcw_hasOccupancy()) {
            MCW_LOD_SKIP
            playerPos += mcw_pendantSwing(worldPos, blockCenter);
            MCW_LOD_BLEND
            return true;
        }
    #endif

    #ifdef MCWIND_FIRE
        if (MAT_FIRE || MAT_CAMPFIRE_LIT) {
            MCW_LOD_SKIP
            // Wooden base should not sway lol
            bool base = MAT_CAMPFIRE_LIT ? abs(clamp(at_midBlock.y / 64.0, -2.0, 2.0)) > 0.5 : fract(worldPos.y + 0.21) > 0.26;
            float topWeight = base ? 1.0 : 0.0;
            playerPos += mcw_fireLean(blockCenter, topWeight);
            MCW_LOD_BLEND
            return true;
        }
    #endif

    #ifdef MCWIND_STALKS
        if (MAT_STALK) {
            MCW_LOD_SKIP
            float groundY = mcw_groundHeight(blockCenter, cameraPosition);
            playerPos.xz += mcw_stalkSway(worldPos, blockCenter, groundY);
            MCW_LOD_BLEND
            return true;
        }
    #endif

    #ifdef MCWIND_LILY_PAD
        if (MAT_LILY_PAD) {
            MCW_LOD_SKIP
            float phase = mcw_hash(floor(blockCenter.xz)) * 6.28318531;
            playerPos.y += sin(mcw_windPhase * 1.6 + phase) * 0.02 * (0.4 + 0.6 * mcw_windMag(blockCenter));
            MCW_LOD_BLEND
            return true;
        }
    #endif

    return false;
}
#endif

vec3 GetRawWave(in vec3 pos, float wind) {
    float magnitude = sin(wind * 0.0027 + pos.x + pos.y) * 0.04 + 0.04;
    float d0 = sin(wind * 0.0127);
    float d1 = sin(wind * 0.0089);
    float d2 = sin(wind * 0.0114);
    vec3 wave;
    wave.x = magnitude * sin(wind*0.0224 + d1 + d2 + pos.x - pos.z + pos.y);
    wave.y = magnitude * sin(wind*0.0015 + d2 + d0 + pos.x);
    wave.z = magnitude * sin(wind*0.0063 + d0 + d1 - pos.x + pos.z + pos.y);

    return wave;
}

vec3 GetWave(in vec3 pos, float waveSpeed) {
    float wind = frameTimeCounter * waveSpeed * WAVING_SPEED;
    vec3 wave = GetRawWave(pos, wind);

    #define WAVING_I_RAIN_MULT_M WAVING_I_RAIN_MULT * 0.01

    #if WAVING_I_RAIN_MULT > 100
        float windRain = frameTimeCounter * waveSpeed * WAVING_I_RAIN_MULT_M * WAVING_SPEED;
        vec3 waveRain = GetRawWave(pos, windRain);
        wave = mix(wave, waveRain, rainFactor);
    #endif

    float wavingIntensity = WAVING_I * mix(1.0, WAVING_I_RAIN_MULT_M, rainFactor);

    return wave * wavingIntensity;
}

void DoWave_Foliage(inout vec3 playerPos, vec3 worldPos, float waveMult) {
    worldPos.y *= 0.5;

    vec3 wave = GetWave(worldPos, 170.0);
    wave.x = wave.x * 3.0;
    wave.y = 0.0;
    wave.z = wave.z * 8.0 + wave.y * 4.0;

    #ifdef NO_WAVING_INDOORS
        #ifndef WAVE_EVERYTHING
            wave *= clamp(lmCoord.y - 0.87, 0.0, 0.1);
        #else
            wave *= 0.1;
        #endif
    #else
        wave *= 0.1;
    #endif

    playerPos.xyz += wave * waveMult;
}

void DoWave_Leaves(inout vec3 playerPos, vec3 worldPos, float waveMult) {
    worldPos *= vec3(0.75, 0.375, 0.75);

    vec3 wave = GetWave(worldPos, 170.0);
    wave *= vec3(4.0, 3.0, 8.0);

    wave *= 1.0 - inSnowy; // Leaves with snow on top look wrong

    #if defined NO_WAVING_INDOORS && !defined WAVE_EVERYTHING
        wave *= clamp(lmCoord.y - 0.87, 0.0, 0.1);
    #else
        wave *= 0.1;
    #endif

    playerPos.xyz += wave * waveMult;
}

void DoWave_Water(inout vec3 playerPos, vec3 worldPos) {
    float waterWaveTime = frameTimeCounter * 6.0 * WAVING_SPEED;
    worldPos.xz *= 14.0;

    float wave  = sin(waterWaveTime * 0.7 - worldPos.z * 0.14 + worldPos.x * 0.07);
          wave += sin(waterWaveTime * 0.5 - worldPos.z * 0.10 + worldPos.x * 0.05);

    #if defined NO_WAVING_INDOORS && !defined WAVE_EVERYTHING
        wave *= clamp(lmCoord.y - 0.87, 0.0, 0.1);
    #else
        wave *= 0.1;
    #endif

    wave = wave * 0.125 - 0.05;

    #ifdef VOXY
        // Fixes water alignment between normal water and voxy water
        float renderDisEdge = min1(max0(length(playerPos) * 2.0 - far) / far);
        wave *= 1.0 - renderDisEdge;
        wave += 0.02 * renderDisEdge;
    #endif

    playerPos.y += wave;

    #if defined GBUFFERS_WATER && WATER_STYLE == 1
        normal = mix(normal, tangent, wave * 0.01);
    #endif
}

void DoWave_Lava(inout vec3 playerPos, vec3 worldPos) {
    if (fract(worldPos.y + 0.005) > 0.06) {
        float lavaWaveTime = frameTimeCounter * 3.0 * WAVING_SPEED;
        worldPos.xz *= 14.0;

        float wave  = sin(lavaWaveTime * 0.7 - worldPos.z * 0.14 + worldPos.x * 0.07);
              wave += sin(lavaWaveTime * 0.5 - worldPos.z * 0.05 + worldPos.x * 0.10);

        #if defined NETHER && defined WAVIER_LAVA
            if (worldPos.y > 30 && worldPos.y < 32) wave *= 4.5;
            else wave *= 2.0;
        #endif

        #ifdef VOXY
            // Fixes lava alignment between normal lava and voxy lava
            float renderDisEdge = min1(max0(length(playerPos) * 2.0 - far) / far);
            wave *= 1.0 - renderDisEdge;
            wave += 0.02 * renderDisEdge;
        #endif

        playerPos.y += wave * 0.0125;
    }
}

void DoWave(inout vec3 playerPos, int mat) {
    vec3 worldPos = playerPos.xyz + cameraPosition.xyz;

    #if defined MCWIND_INTERNAL && (defined GBUFFERS_TERRAIN || defined SHADOW)
        if (DoWave_MCWIND(playerPos.xyz, worldPos, mat)) return;
    #endif

    #if defined GBUFFERS_TERRAIN || defined SHADOW
        #ifdef WAVING_FOLIAGE
            if (MAT_GROUNDED_FOLIAGE
                #ifdef DO_MORE_FOLIAGE_WAVING
                    || MAT_GROUNDED_FOLIAGE_EXTRA
                #endif
            ) {
                if (gl_MultiTexCoord0.t < mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26)
                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
            }

            else if (MAT_UPPER_LAYER_FOLIAGE) {
                DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
            }

            #ifdef DO_MORE_FOLIAGE_WAVING
                else if (mat == 10972) { // Firefly Bush
                    if (gl_MultiTexCoord0.t < mc_midTexCoord.t || fract(worldPos.y + 0.21) > 0.26) {
                        vec3 wave = GetWave(worldPos, 170.0);
                        wave.x = wave.x * 8.0 + wave.y * 4.0;
                        wave.y = 0.0;
                        wave.z = wave.z * 3.0;

                        playerPos.xyz += wave * 0.1 * eyeBrightnessM; // lmCoord.y is unreliable for firefly bushes
                    }
                }
            #endif

            #if defined WAVING_LEAVES_ENABLED || defined WAVING_LAVA || defined WAVING_LILY_PAD
                else
            #endif
        #endif

        #ifdef WAVING_LEAVES_ENABLED
            if (MAT_LEAVES) {
                DoWave_Leaves(playerPos.xyz, worldPos, 1.0);
            } else if (MAT_VINE) {
                // Reduced waving on vines to prevent clipping through blocks
                DoWave_Leaves(playerPos.xyz, worldPos, 0.75);
            }
            #if defined NETHER || defined DO_NETHER_VINE_WAVING_OUTSIDE_NETHER
                else if (MAT_WEEPING_VINES || MAT_TWISTING_VINES) {
                    float waveMult = 1.0;
                    #if COLORED_LIGHTING_INTERNAL > 0
                        vec3 playerPosP = playerPos + vec3(0.0, 0.1, 0.0);
                        vec3 voxelPosP = SceneToVoxel(playerPosP);
                        vec3 playerPosN = playerPos - vec3(0.0, 0.1, 0.0);
                        vec3 voxelPosN = SceneToVoxel(playerPosN);

                        if (CheckInsideVoxelVolume(voxelPosP)) {
                            int voxelP = int(GetVoxelVolume(ivec3(voxelPosP)));
                            int voxelN = int(GetVoxelVolume(ivec3(voxelPosN)));
                            if (voxelP != 0 && voxelP != 65 || voxelN != 0 && voxelN != 65) // not air, not weeping vines
                                waveMult = 0.0;
                        }
                    #endif
                    DoWave_Foliage(playerPos.xyz, worldPos, waveMult);
                }
            #endif
            #ifdef WAVING_SUGAR_CANE
                if (mat == 10039) { // Sugar Cane
                    float waveMult = 0.75;
                    #if COLORED_LIGHTING_INTERNAL > 0
                        vec3 voxelPosP = SceneToVoxel(playerPos - vec3(0.0, 0.1, 0.0));

                        if (CheckInsideVoxelVolume(voxelPosP)) {
                            int voxelP = int(texelFetch(voxel_sampler, ivec3(voxelPosP), 0).r);
                            if (voxelP != 0) // not air
                                waveMult = 0.0;
                        }
                    #endif
                    DoWave_Foliage(playerPos.xyz, worldPos, waveMult);
                }
            #endif

            #if defined WAVING_LAVA || defined WAVING_LILY_PAD
                else
            #endif
        #endif

        #ifdef WAVING_LAVA
            if (mat == 10068 || mat == 10070) { // Lava
                DoWave_Lava(playerPos.xyz, worldPos);

                #ifdef GBUFFERS_TERRAIN
                    // G8FL735 Fixes Optifine-Iris parity. Optifine has 0.9 gl_Color.rgb on a lot of versions
                    glColorRaw.rgb = min(glColorRaw.rgb, vec3(0.9));
                #endif
            }

            #ifdef WAVING_LILY_PAD
                else
            #endif
        #endif

        #ifdef WAVING_LILY_PAD
            if (MAT_LILY_PAD) {
                DoWave_Water(playerPos.xyz, worldPos);
            }
        #endif
    #endif

    #if defined GBUFFERS_WATER || defined SHADOW || defined GBUFFERS_TERRAIN
        #ifdef WAVING_WATER_VERTEX
            #if defined WAVING_ANYTHING_TERRAIN && defined SHADOW
                else
            #endif

            if (mat == 32000) { // Water
                if (fract(worldPos.y + 0.005) > 0.06)
                DoWave_Water(playerPos.xyz, worldPos);
            }
        #endif
    #endif
}
void DoInteractiveWave(inout vec3 playerPos, int mat) {
    float strength = 2.0;
    if (mat == 10003 || mat == 10023 || mat == 10015) { // Flowers & Seagrass
        strength = 1.0;
    }
    if (length(playerPos) < 2.0) playerPos.xz += playerPos.xz * max(5.0 / max(length(playerPos * vec3(8.0, 2.0, 8.0) - vec3(0.0, 2.0, 0.0)), 2.0) -0.625, 0.0) * clamp(2.0 / length(playerPos) - 1.0, 0.0, 1.0) * strength; // Emin's code from v4 + smooth transition by me
}

void DoWaveEverything(inout vec3 playerPos) {
    vec3 worldPos = playerPos.xyz + cameraPosition.xyz;
    DoWave_Leaves(playerPos.xyz, worldPos, 1.0);
    DoWave_Foliage(playerPos.xyz, worldPos, 1.0);
}
