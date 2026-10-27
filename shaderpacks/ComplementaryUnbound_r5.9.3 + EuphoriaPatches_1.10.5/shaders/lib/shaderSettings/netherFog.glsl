#if !defined NETHER_FOG_SETTINGS_FILE
#define NETHER_FOG_SETTINGS_FILE

#define MCWIND_NETHER_FOG 1 //[0 1]
#if defined MCWIND_INTERNAL && MCWIND_NETHER_FOG == 1
    #define MCWIND_NETHER_FOG_INTERNAL
#endif

#define NETHER_FOG_LAYER_SLOW 0.40 // Travel speed of the layer that hugs surfaces
#define NETHER_FOG_LAYER_FAST 2.20 // Travel speed of the layer out in open air
#define NETHER_FOG_SKIN_DEPTH 8 // How many blocks out from terrain the slow layer reaches
#define NETHER_FOG_SKIN_VARY 2.0 // How much the skin's thickness wanders from place to place
#define NETHER_FOG_SKIN_SOFTEN 10.0 // Breaks up the edge of the skin so it does not sit on the block grid
#define NETHER_FOG_LAYER_LIFT 0.15 // How much height decides which layer fog belongs to
#define NETHER_FOG_LAYER_GUST 0.25 // How much the wind shifts the boundary between the layers
#define NETHER_FOG_LAYER_BIAS 2.00 // How sharply fog commits to one layer or the other
#define NETHER_FOG_WALL_PILE 0.40 // How much fog heaps against rock it blows into
#define NETHER_FOG_WALL_SPREAD 3.0 // How far fog slides sideways along a wall instead of into it
#define NETHER_FOG_WIND_POOL 0.50 // How much thicker fog gathers in still air than in wind
#define NETHER_FOG_OPEN_DENSITY 0.50 // Thinnest the wind may sweep fog in the open
#define NETHER_FOG_WIND_CHURN 1.50 // How much fine detail outruns the bulk, so the fog boils rather than slides

#endif
