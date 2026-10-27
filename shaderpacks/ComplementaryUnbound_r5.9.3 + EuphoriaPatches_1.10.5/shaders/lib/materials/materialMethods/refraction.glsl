float GetApproxDistance(float depth) {
    return near * far / (far - depth * far);
}

vec2 DoRefraction(inout vec3 color, inout float z0, inout float z1, vec3 viewPos, float lViewPos) {
    // Prep
    if (int(texelFetch(colortex6, texelCoord, 0).g * 255.1) != 241) return texCoord.xy;

    float fovScale = gbufferProjection[1][1];

    vec3 playerPos = ViewToPlayer(viewPos.xyz);
    vec3 worldPos = playerPos.xyz + cameraPosition.xyz;
    vec2 worldPosRM = worldPos.xz * 0.02 + worldPos.y * 0.01 + 0.01 * frameTimeCounter;

    vec2 refractNoise = texture2DLod(noisetex, worldPosRM, 0.0).rb - vec2(0.5);
         refractNoise *= WATER_REFRACTION_INTENSITY * fovScale / (3.0 + lViewPos);

    #if WATER_STYLE < 3
        refractNoise *= 0.015;
    #else
        refractNoise *= 0.02;
    #endif

    // Check
    float approxDif = GetApproxDistance(z1) - GetApproxDistance(z0);
    refractNoise *= clamp(approxDif, 0.0, 1.0);

    vec2 refractCoord = texCoord.xy + refractNoise;

    if (int(texture2D(colortex6, refractCoord).g * 255.1) != 241) return texCoord.xy;

    float z0check = texture2D(depthtex0, refractCoord).r;
    float z1check = texture2D(depthtex1, refractCoord).r;
    float approxDifCheck = GetApproxDistance(z1check) - GetApproxDistance(z0check);
    refractNoise *= clamp(approxDifCheck, 0.0, 1.0);

    // Sample
    refractCoord = texCoord.xy + refractNoise;
    color = texture2D(colortex0, refractCoord).rgb;
    z0 = texture2D(depthtex0, refractCoord).r;
    z1 = texture2D(depthtex1, refractCoord).r;
    return refractCoord;
}

#ifdef BETTER_LABPBR_REFRACTIONS_INTERNAL
    vec3 GetViewPosAt(ivec2 coord) {
        vec4 screenPos = vec4((vec2(coord) + 0.5) / vec2(viewWidth, viewHeight), texelFetch(depthtex0, coord, 0).r, 1.0);
        vec4 viewPos = gbufferProjectionInverse * (screenPos * 2.0 - 1.0);
        return viewPos.xyz / viewPos.w;
    }

    vec3 GetFlatNormalFromDepth(vec3 viewPos, ivec2 coord, out bool isEdge) {
        // Needs to be this complex to avoid artifacts at the edge of translucent blocks T-T
        vec3 ddxL = viewPos - GetViewPosAt(coord - ivec2(1, 0));
        vec3 ddxR = GetViewPosAt(coord + ivec2(1, 0)) - viewPos;
        vec3 ddyD = viewPos - GetViewPosAt(coord - ivec2(0, 1));
        vec3 ddyU = GetViewPosAt(coord + ivec2(0, 1)) - viewPos;

        vec3 ddx = dot(ddxL, ddxL) < dot(ddxR, ddxR) ? ddxL : ddxR;
        vec3 ddy = dot(ddyD, ddyD) < dot(ddyU, ddyU) ? ddyD : ddyU;

        isEdge = max(dot(ddx, ddx), dot(ddy, ddy)) > pow2(length(viewPos) * 0.01);
        vec3 flatNormal = normalize(cross(ddx, ddy));
        return dot(flatNormal, viewPos) > 0.0 ? -flatNormal : flatNormal;
    }

    vec2 DoLabPBRRefraction(inout vec3 color, inout float z0, inout float z1, vec3 viewPos, vec2 texCoordM) {
        if (z0 == z1) return texCoordM; // No translucent surface in front of anything here

        bool isHand = z0 <= 0.56;

        // Rely on the fact that gbuffers_water is the only gbuffer that sets colortex.r to 1.0
        // That way we filter out entities/particles. Hand we can still include via depth check.
        if (texelFetch(colortex6, texelCoord, 0).r < 0.999 && !isHand) return texCoordM;

        int materialMaskInt = int(texelFetch(colortex6, texelCoord, 0).g * 255.1);
        if (materialMaskInt == 241) return texCoordM; // Water already has its own dedicated refraction above

        // Only refract the translucent pixels. Solid ones shuld return the original coord, solid ones have color of 1.0
        if (texelFetch(colortex3, texelCoord, 0).rgb == vec3(1.0)) return texCoordM;

        // normalM is stored in world space, need in view space
        vec3 normalM = mat3(gbufferModelView) * texelFetch(colortex4, texelCoord, 0).xyz;

        vec3 flatNormal;
        float refDistance;
        if (isHand) {
            // Blur the hand normals as I can't think of a better way to get a flat normal for the hand.
            vec3 nSum = texelFetch(colortex4, texelCoord + ivec2( 3,  0), 0).xyz
                        + texelFetch(colortex4, texelCoord + ivec2(-3,  0), 0).xyz
                        + texelFetch(colortex4, texelCoord + ivec2( 0,  3), 0).xyz
                        + texelFetch(colortex4, texelCoord + ivec2( 0, -3), 0).xyz;
            flatNormal = mat3(gbufferModelView) * normalize(nSum);
            refDistance = 3.0; // random number that looks good yay
        } else {
            bool isEdge;
            flatNormal = GetFlatNormalFromDepth(viewPos, texelCoord, isEdge);
            if (isEdge) return texCoordM; // Depth discontinuity check
            refDistance = max(length(viewPos), 8.0);
        }

        vec2 delta = normalM.xy - flatNormal.xy;
        if (dot(delta, delta) < 0.00001) return texCoordM;

        float fovScale = gbufferProjection[1][1] / 1.37373871;
        vec2 distort = delta * vec2(1.0 / aspectRatio, 1.0) * fovScale / refDistance;
        vec2 newCoord = texCoordM + distort * BETTER_LABPBR_REFRACTIONS * 0.01;

        // New coord so when we do depth stuff later in composite1 we have the correct refracted depth
        float z0check = texture2D(depthtex0, newCoord).r;
        float z1check = texture2D(depthtex1, newCoord).r;
        if (z0check == z1check) return texCoordM;
        if ((z0check <= 0.56) != isHand) return texCoordM; // Don't let the sample cross the hand/world boundary

        color = texture2D(colortex0, newCoord).rgb;
        z0 = z0check;
        z1 = z1check;
        return newCoord;
    }
#endif
