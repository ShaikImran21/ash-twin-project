/* THE NOMAI ARCHIVES 
   This file contains the coordinates for the Ash Twin Project.
*/

const ATP_CONFIG = {
    // API CONFIG
    CESIUM_TOKEN:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZDliZmU3YS01YmQ3LTQ2ZGMtOTI4Yy1lZTMzZDMxOWIwMDUiLCJpZCI6MzY2NzI0LCJpYXQiOjE3NjQ4NjU3NDV9.Ajfr3pZSAk1F4xg0M2kyLgkEAFYmrYyCSlUPuPmvYQ4', // Paste from snippets

    // GAME SETTINGS
    LOOP_DURATION: 22, // Seconds (Speedrun Mode)

    // DESTINATIONS
    PLANETS: {
        TOKYO: {
            name: 'The Neon City',
            coords: { lat: 35.6595, lng: 139.7005 }, // Shibuya
            startHeading: 180,
            loot: [{ id: 1, type: 'RAMEN', lat: 35.6595, lng: 139.7005, height: 10 }],
        },
        CAIRO: {
            name: 'The Sand Planet',
            coords: { lat: 29.9792, lng: 31.1342 }, // Pyramids
            startHeading: 0,
            loot: [],
        },
    },
};
