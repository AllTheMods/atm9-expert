// Thanks to PlunderPixels

#ifndef NETHER_WIND_GLSL
#define NETHER_WIND_GLSL

#ifndef MCW_NF_MAG_LOW
#define MCW_NF_MAG_LOW 0.10
#endif
#ifndef MCW_NF_MAG_HIGH
#define MCW_NF_MAG_HIGH 0.70
#endif
#ifndef MCW_NF_HAZE_CHURN
#define MCW_NF_HAZE_CHURN 0.0004
#endif
#ifndef MCW_NF_STILL_TIME
#define MCW_NF_STILL_TIME 20.0
#endif
#ifndef MCW_NF_HAZE_LOCAL
#define MCW_NF_HAZE_LOCAL 2.0
#endif

#define MCW_NF_LAYER_SPLIT vec3(0.37, 0.23, 0.61)

#define MCW_NF_HAZE_PERIOD (8.0 / 3.0)

#ifndef MCW_NF_SKIN_INNER
#define MCW_NF_SKIN_INNER 0.42
#endif
#ifndef MCW_NF_SKIN_GRAIN
#define MCW_NF_SKIN_GRAIN 0.11
#endif
#ifndef MCW_NF_SKIN_EDGE_GRAIN
#define MCW_NF_SKIN_EDGE_GRAIN 0.63
#endif

#define MCW_NF_NO_GROUND (-1.0)

struct mcwNetherWind {
    vec3 flowNear;
    vec3 flowFar;
    vec3 slow;
    vec3 fast;
    float t;
};

struct mcwNetherProbe {
    float skin;
    float impact;
    vec3 deflect;
};

struct mcwNetherLayers {
    float blend;
    float pool;
};

mcwNetherWind GetNetherWind(vec3 nPlayerPos, float maxDist) {
    mcwNetherWind w;
    w.t = mcw_windPhase;
    w.flowNear = mcw_flowAt(cameraPosition);
    w.flowFar = mcw_flowAt(cameraPosition + nPlayerPos * maxDist);

    vec3 drift = vec3(mcw_windDriftX, 0.0, mcw_windDriftZ);
    w.slow = drift * NETHER_FOG_LAYER_SLOW;
    w.fast = drift * NETHER_FOG_LAYER_FAST;
    return w;
}

vec3 GetNetherLocalWind(mcwNetherWind w, vec3 worldPos, float along) {
    return mcw_windAtFast(worldPos, w.t, MCW_NF_NO_GROUND, mix(w.flowNear, w.flowFar, along));
}

#if NETHER_FOG_SKIN_DEPTH > 0
mcwNetherProbe GetNetherSkin(vec3 worldPos, vec3 local) {
    mcwNetherProbe o;
    o.skin = 0.0;
    o.impact = 0.0;
    o.deflect = vec3(0.0);
    if (!mcw_hasOccupancy()) {
        return o;
    }
    float trust = mcw_caveTrust(worldPos);
    if (trust <= 0.0) {
        return o;
    }

    float vary = mcw_noise(worldPos.xz * MCW_NF_SKIN_GRAIN)
               + mcw_noise(vec2(worldPos.y, worldPos.x + 41.0) * MCW_NF_SKIN_GRAIN);
    float edge = mcw_noise(worldPos.xz * MCW_NF_SKIN_EDGE_GRAIN)
               + mcw_noise(vec2(worldPos.y, worldPos.z + 19.0) * MCW_NF_SKIN_EDGE_GRAIN);
    float rOut = NETHER_FOG_SKIN_DEPTH
               + (vary - 1.0) * (NETHER_FOG_SKIN_VARY * 0.5)
               + (edge - 1.0) * (NETHER_FOG_SKIN_SOFTEN * 0.5);
    rOut = max(rOut, 1.0);
    float rIn = rOut * MCW_NF_SKIN_INNER;

    float strong = 0.0;
    float weak = 0.0;
    vec3 rock = vec3(0.0);
    for (int a = 0; a < 3; a++) {
        vec3 axis = (a == 0) ? vec3(1.0, 0.0, 0.0) : ((a == 1) ? vec3(0.0, 1.0, 0.0) : vec3(0.0, 0.0, 1.0));
        for (int s = 0; s < 2; s++) {
            vec3 dir = (s == 0) ? axis : -axis;
            float hitOut = mcw_readVoxel(worldPos + dir * rOut, cameraPosition).solid ? 1.0 : 0.0;
            float hitIn = mcw_readVoxel(worldPos + dir * rIn, cameraPosition).solid ? 1.0 : 0.0;
            weak += hitOut;
            strong += hitOut * hitIn;
            rock += dir * (hitIn * 0.7 + hitOut * 0.3);
        }
    }
    o.skin = trust * clamp((strong + 0.5 * weak) * 0.5, 0.0, 1.0);

    float wlen = length(local.xz);
    if (wlen < 1.0e-4) {
        return o;
    }
    vec3 flowDir = vec3(local.x, 0.0, local.z) / wlen;

    float edgeA = mcw_noise(worldPos.xz * MCW_NF_SKIN_EDGE_GRAIN + vec2(53.0, 11.0))
                + mcw_noise(vec2(worldPos.y + 7.0, worldPos.z - 23.0) * MCW_NF_SKIN_EDGE_GRAIN);
    float aOut = max(NETHER_FOG_SKIN_DEPTH + (edgeA - 1.0) * (NETHER_FOG_SKIN_SOFTEN * 0.5), 1.0);
    float aIn = aOut * MCW_NF_SKIN_INNER;
    float aheadFar = mcw_readVoxel(worldPos + flowDir * aOut, cameraPosition).solid ? 1.0 : 0.0;
    float aheadNear = mcw_readVoxel(worldPos + flowDir * aIn, cameraPosition).solid ? 1.0 : 0.0;
    o.impact = trust * clamp(aheadNear * 0.65 + aheadFar * 0.35, 0.0, 1.0);

    float rlen = length(rock);
    if (rlen > 1.0e-4) {
        vec3 nOut = -rock / rlen;
        float into = min(dot(flowDir, nOut), 0.0);
        vec3 tangent = flowDir - nOut * dot(flowDir, nOut);
        float tlen = length(tangent);
        if (tlen > 1.0e-4) {
            o.deflect = (tangent / tlen) * ((-into) * o.impact * NETHER_FOG_WALL_SPREAD);
        }
    }
    return o;
}
#endif

mcwNetherLayers GetNetherLayers(vec3 local, float altitude, float shelter, float impact) {
    float mag = length(local.xz);
    float windiness = smoothstep(MCW_NF_MAG_LOW, MCW_NF_MAG_HIGH, mag);

    float open = (1.0 - shelter)
               + NETHER_FOG_LAYER_LIFT * altitude
               + NETHER_FOG_LAYER_GUST * (windiness - 0.5);
    open = clamp(open, 0.0, 1.0);

    mcwNetherLayers o;
    float edge = 0.5 / max(NETHER_FOG_LAYER_BIAS, 1.0);
    o.blend = smoothstep(0.5 - edge, 0.5 + edge, open);
    o.pool = max(1.0 - NETHER_FOG_WIND_POOL * (2.0 * open - 1.0), NETHER_FOG_OPEN_DENSITY)
           * (1.0 + NETHER_FOG_WALL_PILE * impact);
    return o;
}

#endif
