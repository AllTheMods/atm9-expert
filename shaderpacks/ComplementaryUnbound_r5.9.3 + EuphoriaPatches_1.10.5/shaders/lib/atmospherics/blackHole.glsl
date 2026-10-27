// Precomputed global constants
#define BH_ANGULAR_RAD (BLACK_HOLE_SIZE * 0.01745329251)
#define BH_SIZE_FACTOR max(BLACK_HOLE_SIZE * 0.2, 1.0)
#define BH_ADJUSTED_PERIOD max(75 * BLACK_HOLE_SIZE * 0.2, 1.0)
#define BH_SWIRL_RATE (BLACK_HOLE_LENSING_SWIRL * BH_ANGULAR_RAD / BH_ADJUSTED_PERIOD)

vec3 SphericalToWorldDir(float longitudeDeg, float latitudeDeg) {
    float lonRad = radians(longitudeDeg);
    float latRad = radians(latitudeDeg);
    float cosLat = cos(latRad);
    return vec3(cosLat * cos(lonRad), sin(latRad), cosLat * sin(lonRad));
}

float LoopingWanderNoise(float angle, vec2 seed) {
    float sum = 0.0, ampSum = 0.0, amp = 0.5, freq = 1.0;
    for (int i = 0; i < 3; i++) {
        vec2 coord = vec2(cos(angle * freq), sin(angle * freq)) * 7.0 + seed;
        sum += amp * smoothHash12(coord);
        ampSum += amp;
        amp *= 0.3;
        freq *= 2.0;
    }
    float value = sum / ampSum;

    float signedValue = clamp(value * 2.0 - 1.0, -1.0, 1.0);
    float stretched = signedValue * (1.5 - 0.5 * signedValue * signedValue);
    return stretched * 0.5 + 0.5;
}

vec3 getBlackHoleDir() {
    #if BLACK_HOLE_DIRECTION_MODE == 1
        // Fixed manual position
        vec3 worldDir = SphericalToWorldDir(BLACK_HOLE_LONGITUDE, BLACK_HOLE_LATITUDE);
        return normalize((gbufferModelView * vec4(worldDir, 0.0)).xyz);
    #elif BLACK_HOLE_DIRECTION_MODE == 2
        // Slowly wandering position
        float dayP = frameTimeCounter / 86400.0;
        #ifdef EUPHORIA_PATCHES_UNIFORMS
            dayP = euphoriaPatchesCurrentDayMillis >= 0 ? float(euphoriaPatchesCurrentDayMillis) / 86400000.0 : dayP;
        #endif

        float loops = floor(BLACK_HOLE_LOOPS_PER_DAY + 0.5);
        float loopAngle = fract(dayP * loops) * tau;

        float longitude = LoopingWanderNoise(loopAngle, vec2(11.3, 47.9)) * 360.0;

        float latitudeBias = BLACK_HOLE_LATITUDE_BIAS * 90.0; // shifts path toward the upper (+) or lower (-) hemisphere
        float maxSwing = max(89.0 - abs(latitudeBias), 0.0);
        float latitude = latitudeBias + (LoopingWanderNoise(loopAngle * 3, vec2(83.7, 19.2)) * 2.0 - 1.0) * maxSwing;

        vec3 worldDir = SphericalToWorldDir(longitude, latitude);
        worldDir = mix(worldDir, vec3(0, 1, 0), vlFactor); // For Ender Dragon Fight

        return normalize((gbufferModelView * vec4(worldDir, 0.0)).xyz);
    #else
        // Follows the end sun angle
        return normalize((gbufferModelView * vec4(vec3(0.0, SUN_ROTATION_DATA * 2000.0), 1.0)).xyz);
    #endif
}

// Faster alternative to acos
// Source: https://seblagarde.wordpress.com/2014/12/01/inverse-trigonometric-functions-gpu-optimization-for-amd-gcn-architecture/#more-3316
float fastAcos(float x) {
    float absX = min(abs(x), 1.0);
    float res = (0.0464619 * absX - 0.201877) * absX + 1.57018;
    res *= sqrt(1.0 - absX);
    return x >= 0.0 ? res : pi - res;
}

float GetBlackHoleTurbulence(vec2 coord) {
    float sum = 0.0, amp = 0.6;
    for (int i = 0; i < 4; i++) {
        sum += amp * smoothHash12(coord);
        coord *= 2.17;
        amp *= 0.55;
    }
    return sum;
}

// Seamless polar turbulence sampling
float SampleBlackHoleTurbulence(float diskAngle, float diskDist, float ringCount, float wind) {
    float theta = (diskAngle + wind) * ringCount;
    vec2 turbulenceCoord = vec2(cos(theta) * 2.5, sin(theta) * 2.5 + diskDist * 40.0);
    return pow3(clamp01(GetBlackHoleTurbulence(turbulenceCoord)));
}

void GetOrthonormalBasis(vec3 n, out vec3 b1, out vec3 b2) {
    if (abs(n.x) < 1e-3 && abs(n.z) < 1e-3) {
        b1 = vec3(1.0, 0.0, 0.0);
        b2 = cross(b1, n);
        return;
    }

    float horizontalAngle = atan(n.z, n.x);
    b1 = vec3(-sin(horizontalAngle), 0.0, cos(horizontalAngle));
    b2 = cross(b1, n);
}

struct BlackHoleGeometry {
    vec3 rayDir;
    vec3 sunDir;
    float nu;
    float r;
};

BlackHoleGeometry GetBlackHoleGeometry(vec3 nViewPos, vec3 holeDir) {
    mat3 invMV = mat3(gbufferModelViewInverse);
    BlackHoleGeometry geo;
    geo.rayDir = normalize(invMV * nViewPos);
    geo.sunDir = normalize(invMV * holeDir);
    geo.nu = dot(geo.rayDir, geo.sunDir);
    geo.r = fastAcos(geo.nu);
    return geo;
}

// Approximate gravitational lensing with swirling star displacement
vec3 GetBlackHoleLensedDirection(vec3 nViewPos, vec3 holeDir) {
    BlackHoleGeometry geo = GetBlackHoleGeometry(nViewPos, holeDir);
    const float lensRadius = BH_ANGULAR_RAD * BLACK_HOLE_LENSING_RANGE;

    if (geo.nu <= 0.0 || geo.r >= lensRadius || geo.r < 1e-4) return nViewPos;

    float safeR = max(geo.r, BH_ANGULAR_RAD * 0.3);
    float t = clamp01(1.0 - geo.r / lensRadius);
    float bend = BLACK_HOLE_LENSING_STRENGTH * BH_ANGULAR_RAD * pow3(t) / safeR;

    vec3 radial = normalize(geo.rayDir - geo.sunDir * geo.nu);
    float swirlAngle = -frameTimeCounter * BH_SWIRL_RATE / safeR;
    vec3 swirlRadial = radial * cos(swirlAngle) + cross(geo.sunDir, radial) * sin(swirlAngle);

    vec3 warped = normalize(geo.rayDir + swirlRadial * bend);
    return normalize(mat3(gbufferModelView) * warped);
}

vec4 GetBlackHole(vec3 nViewPos, vec3 holeDir) {
    BlackHoleGeometry geo = GetBlackHoleGeometry(nViewPos, holeDir);

    if (geo.nu <= -0.2) return vec4(0.0);

    vec3 rayDir = geo.rayDir;
    vec3 sunDir = geo.sunDir;
    float nu = geo.nu;

    float hemisphereMask = smoothstep(-0.2, 0.0, nu);

    // 2D polar projection along tangent plane
    vec3 tangent, bitangent;
    GetOrthonormalBasis(sunDir, tangent, bitangent);
    vec2 diskPos = vec2(dot(rayDir, tangent), dot(rayDir, bitangent));

    #if BLACK_HOLE_PIXELATION > 0
        float pixelSize = BH_ANGULAR_RAD / BLACK_HOLE_PIXELATION;
        vec2 p = (floor(diskPos / pixelSize) + 0.5) * pixelSize;
    #else
        vec2 p = diskPos;
    #endif

    #if BLACK_HOLE_SHAPE == 1
        float circularDist = length(p);
        float squareDist = max(abs(p.x), abs(p.y));
        float squareness = 1.0 - smoothstep(BH_ANGULAR_RAD, BH_ANGULAR_RAD * 1.7, circularDist);

        float squircleP = mix(2.0, 40.0, squareness);
        vec2 normP = abs(p) / max(squareDist, 1e-6);
        vec2 pPow = pow(normP, vec2(squircleP));

        float diskDist = squareDist * pow(pPow.x + pPow.y, 1.0 / squircleP);
        float holeDist = max(abs(diskPos.x), abs(diskPos.y));
    #else
        float diskDist = length(p);
        float holeDist = diskDist;
    #endif

    vec2 shapePos = p;
    float diskAngle = atan(p.y, p.x);

    float diskMask = float(holeDist < BH_ANGULAR_RAD);

    const float ringCount = max(1.0, floor(BLACK_HOLE_RING_COUNT + 0.5));
    float ringExtent = BH_ANGULAR_RAD * BLACK_HOLE_RING_SIZE + vlFactor * 0.66;

    float windStrength = ringExtent / max(diskDist, BH_ANGULAR_RAD);
    float windRange = BLACK_HOLE_DIFFERENTIAL_AMOUNT * windStrength * BH_SIZE_FACTOR;

    // Differential wind crossfade
    float cyclePhase = frameTimeCounter / BH_ADJUSTED_PERIOD;
    float phaseA = fract(cyclePhase);
    float phaseB = fract(cyclePhase + 0.5);
    float weightB = 1.0 - abs(2.0 * phaseB - 1.0);

    float turbulenceA = SampleBlackHoleTurbulence(diskAngle, diskDist, ringCount, phaseA * windRange);
    float turbulenceB = SampleBlackHoleTurbulence(diskAngle, diskDist, ringCount, phaseB * windRange);
    float turbulence = mix(turbulenceA, turbulenceB, weightB);

    // Precomputed distance ratio
    float ringDist = max0(diskDist - BH_ANGULAR_RAD);
    float distRatio = ringDist / ringExtent;

    float ringFalloff = pow3(clamp01(1.0 - distRatio));
    float ringFadeIn = smoothstep(0.0, 0.3, distRatio);
    float ring = ringFalloff * ringFadeIn * mix(0.35, 1.0, turbulence);

    float rimInner = pow2(clamp01(1.0 - abs(diskDist - BH_ANGULAR_RAD + BH_ANGULAR_RAD * 0.05) / (BH_ANGULAR_RAD * 0.015))) * 1.3;
    float rimOuter = pow3(clamp01(1.0 - abs(diskDist - BH_ANGULAR_RAD - BH_ANGULAR_RAD * 0.02) / (BH_ANGULAR_RAD * 0.15))) * 0.45;
    float rim = rimOuter;

    #if BLACK_HOLE_PIXELATION == 0 || BLACK_HOLE_PIXELATION >= 25 && BLACK_HOLE_SHAPE == 1
        rim += rimInner;
    #endif

    float edgeProximity = clamp01(1.0 - distRatio * 2.5);
    float innerHeat = pow6(edgeProximity);
    vec2 microAngleCoord = vec2(cos(diskAngle * 3.0), sin(diskAngle * 3.0)) * 1.5;
    float microRings = GetBlackHoleTurbulence(vec2(diskDist * 570.0, diskDist * 42.0) + microAngleCoord);

    float ringBrightness = (ring + rim) * BLACK_HOLE * 0.1;
          ringBrightness += innerHeat * BLACK_HOLE * 0.1 * mix(0.6, 1.0, microRings) * (1.0 - diskMask);

    vec3 beamPurple = baseBeamPurple * (2.5 - 1.0 * vlFactor);
    vec3 ringColor = mix(sqrt(beamPurple), sqrt(endOrangeCol), clamp01(distRatio * 1.35));
          ringColor = mix(ringColor, ringColor + 0.5, innerHeat);

    // Horizontal accretion-disk streak
    #if BLACK_HOLE_STREAK > 0
        float streakWidth = BH_ANGULAR_RAD * 0.11;
        float streakFalloff = exp(-pow2(shapePos.y / streakWidth));
        float streakLength = ringExtent * BLACK_HOLE_STREAK * 0.005;
        float streakExtent = exp(-pow2(max0(abs(shapePos.x) - BH_ANGULAR_RAD) / streakLength));
        float streakWind = mix(phaseA, phaseB, weightB) * windRange * 15;
        float streakMovement = frameTimeCounter * (0.2 * diskMask + sign(shapePos.x) * 0.55 * (1.0 - diskMask));
        float streakNoise = GetBlackHoleTurbulence(vec2(shapePos.x * 20.0 - streakWind - streakMovement, shapePos.y * 150.0));
        float streak = streakFalloff * streakExtent * mix(0.5, 1.0, streakNoise);
        ringBrightness += streak * BLACK_HOLE * 0.08  * (1.0 - vlFactor);
    #endif

    float totalMult = ringBrightness * hemisphereMask;
    return vec4(ringColor * totalMult, diskMask);
}
