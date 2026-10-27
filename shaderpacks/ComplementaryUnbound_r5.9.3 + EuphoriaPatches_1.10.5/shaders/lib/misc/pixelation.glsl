#if !defined PIXELATION_FILE
#define PIXELATION_FILE

#if PIXEL_SCALE == -2
    #define PIXEL_TEXEL_SCALE 4.0
#elif PIXEL_SCALE == -1
    #define PIXEL_TEXEL_SCALE 2.0
#elif PIXEL_SCALE == 2
    #define PIXEL_TEXEL_SCALE 0.5
#elif PIXEL_SCALE == 3
    #define PIXEL_TEXEL_SCALE 0.25
#elif PIXEL_SCALE == 4
    #define PIXEL_TEXEL_SCALE 0.125
#elif PIXEL_SCALE == 5
    #define PIXEL_TEXEL_SCALE 0.0625
#else // 1 or out of range
    #define PIXEL_TEXEL_SCALE 1.0
#endif

#ifdef FRAGMENT_SHADER
    // Thanks to Nestorboy

    // Computes axis-aligned screen space offset to texel center.
    // https://forum.unity.com/threads/the-quest-for-efficient-per-texel-lighting.529948/#post-7536023
    // Later tweaked by plazmal
    vec2 ComputeTexelOffset(vec2 uv, vec4 texelSize) {
        vec2 dUV = (floor(uv * texelSize.zw) + 0.5) * texelSize.xy - uv;

        vec2 dUVdS = dFdx(uv);
        vec2 dUVdT = dFdy(uv);

        float a = dot(dUVdS, dUVdS);
        float b = dot(dUVdS, dUVdT);
        float c = dot(dUVdT, dUVdT);

        float det = a * c - b * b;
        if (det <= a * c * 0.01) return vec2(0.0, 0.0);

        float inv = 1.0 / det;
        vec2 proj = vec2(dot(dUV, dUVdS), dot(dUV, dUVdT));
        return vec2(c * proj.x - b * proj.y, a * proj.y - b * proj.x) * inv;
    }

    vec2 ComputeTexelOffset(sampler2D tex, vec2 uv) {
        vec2 texSize = textureSize(tex, 0) * PIXEL_TEXEL_SCALE;
        vec4 texelSize = vec4(1.0 / texSize.xy, texSize.xy);

        return ComputeTexelOffset(uv, texelSize);
    }

    vec4 TexelSnap(vec4 value, vec2 texelOffset) {
        if(all(equal(texelOffset, vec2(0.0)))) return value;
        vec4 dx = dFdx(value);
        vec4 dy = dFdy(value);

        vec4 valueOffset = dx * texelOffset.x + dy * texelOffset.y;
        valueOffset = clamp(valueOffset, -1.0, 1.0);

        return value + valueOffset;
    }

    vec3 TexelSnap(vec3 value, vec2 texelOffset) {
        if(all(equal(texelOffset, vec2(0.0)))) return value;
        vec3 dx = dFdx(value);
        vec3 dy = dFdy(value);

        vec3 valueOffset = dx * texelOffset.x + dy * texelOffset.y;
        valueOffset = clamp(valueOffset, -1.0, 1.0);

        return value + valueOffset;
    }

    vec2 TexelSnap(vec2 value, vec2 texelOffset) {
        if(all(equal(texelOffset, vec2(0.0)))) return value;
        vec2 dx = dFdx(value);
        vec2 dy = dFdy(value);

        vec2 valueOffset = dx * texelOffset.x + dy * texelOffset.y;
        valueOffset = clamp(valueOffset, -1.0, 1.0);

        return value + valueOffset;
    }

    float TexelSnap(float value, vec2 texelOffset) {
        if(all(equal(texelOffset, vec2(0.0)))) return value;
        float dx = dFdx(value);
        float dy = dFdy(value);

        float valueOffset = dx * texelOffset.x + dy * texelOffset.y;
        valueOffset = clamp(valueOffset, -1.0, 1.0);

        return value + valueOffset;
    }
#endif

#endif // !defined PIXELATION_FILE
