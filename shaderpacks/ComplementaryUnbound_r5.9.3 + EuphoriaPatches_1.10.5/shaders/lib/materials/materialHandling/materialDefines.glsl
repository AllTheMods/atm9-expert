#if defined VOXY_PATCH
    #define BLOCK_LAVA_DEFINE (mat == 10068 || mat == 10070)
    #define BLOCK_LAVA_STILL_DEFINE (mat == 10068 || mat == 10070)
    #define BLOCK_LEAVES_SEASONS_DEFINE (mat == 10009 || mat == 10011)
#elif defined DH_TERRAIN || defined DH_WATER
    #define BLOCK_LAVA_DEFINE mat == DH_BLOCK_LAVA
    #define BLOCK_LAVA_STILL_DEFINE mat == DH_BLOCK_LAVA
    #define BLOCK_LEAVES_SEASONS_DEFINE mat == DH_BLOCK_LEAVES
#else
    #define BLOCK_LAVA_DEFINE (mat == 10068 || mat == 10070)
    #define BLOCK_LAVA_STILL_DEFINE mat == 10068
    #define BLOCK_LEAVES_SEASONS_DEFINE (mat == 10009 || mat == 10011)
#endif
