vec3 cloudRainColor = mix(nightMiddleSkyColor, dayMiddleSkyColor, sunFactor);

vec3 cloudAmbientColor = mix(ambientColor * (sunVisibility2 * (0.55 + vec3(0.2, 0.1, 0.0) * noonFactor) + 0.35), cloudRainColor * 0.5, rainFactor) * mix(CLOUD_NIGHT_AMBIENT_MULTIPLIER, CLOUD_AMBIENT_MULTIPLIER, sunVisibility2);

vec3 cloudLightColor   = mix(
    lightColor * (
        1.3
        #ifdef CLOUDS_UNBOUND
            + vec3(0.1, -0.1, -0.3) * noonFactor
        #endif
    ),
    cloudRainColor * 0.45,
    noonFactor * rainFactor
) * mix(CLOUD_NIGHT_LIGHT_MULTIPLIER, CLOUD_LIGHT_MULTIPLIER, sunVisibility2);
