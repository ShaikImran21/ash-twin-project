# Dynamic Adventure Paths - Integration Guide

## 🌐 Overview

Instead of hardcoded locations, the game can now use **Google Places API** to dynamically generate adventure paths in any city worldwide!

## ✅ What's Been Added

### New Files:

1. **`dynamic_adventure_paths.js`** - Core generator using Google Places API
2. **`dynamic_integration.js`** - Manager that combines static + dynamic paths
3. **Modified `index.html`** - Integrated dynamic system (optional)

## 🎮 How It Works

### Dynamic Path Generation Process:

1. **Pick a City** (Tokyo, Paris, London, etc.)
2. **Find Main Destination** - Major landmark using Google Places API
3. **Find Waypoints** - Restaurants, cafes, stores, parks nearby
4. **Order Optimally** - Uses nearest neighbor algorithm for best route
5. **Generate Path Object** - Same format as hardcoded paths

### APIs Used:

- ✅ **Google Places API** (Nearby Search)
    - Tourist attractions, restaurants, museums, parks
    - Photos, ratings, descriptions
    - You already have the API key!

- ✅ **Google Directions API** (Already in use)
    - Calculate walking routes
    - Used by Trail Mode

- ✅ **Google Street View API** (Already in use)
    - Navigate panoramas
    - Core game mechanic

## 🚀 How to Enable Dynamic Paths

### Option 1: Quick Test (Console)

Open browser console and run:

```javascript
// Initialize the manager
const apiKey = 'AIzaSyAvCO_bcpW5Zuh-Wmizb9AuH8_RxHl6BVY';
const pathManager = new AdventurePathManager();
await pathManager.init(STATE.map, apiKey);

// Generate a path for Tokyo (medium difficulty)
const adventure = await pathManager.getPathForCity('Tokyo', 'medium');
console.log(adventure);

// Use it in the game
STATE.currentAdventurePath = adventure.path;
STATE.currentWaypointIndex = 0;
// ... continue with normal game logic
```

### Option 2: Modify `startLevel()` Function

Replace the static path selection with dynamic:

```javascript
async function startLevel(levelIndex) {
    // ... existing code ...

    // OPTION A: Use only dynamic paths
    if (!pathManager) {
        pathManager = new AdventurePathManager();
        await pathManager.init(STATE.map, 'YOUR_API_KEY');
    }
    const adventure = await pathManager.getDynamicPath();

    // OPTION B: Mix static and dynamic (50/50)
    const adventure = await pathManager.getRandomAdventurePath('mixed');

    // OPTION C: Use static paths (current behavior)
    const adventure = await pathManager.getRandomAdventurePath('static');

    // Apply the adventure
    STATE.currentAdventurePath = adventure.path;
    STATE.currentWaypointIndex = 0;

    // ... rest of code ...
}
```

### Option 3: Add Mode Selector to UI

Add a button to toggle between static/dynamic:

```html
<button onclick="togglePathMode()">🎲 Path Mode: <span id="path-mode">Static</span></button>
```

```javascript
let USE_DYNAMIC_PATHS = false;

function togglePathMode() {
    USE_DYNAMIC_PATHS = !USE_DYNAMIC_PATHS;
    document.getElementById('path-mode').textContent = USE_DYNAMIC_PATHS ? 'Dynamic' : 'Static';
    console.log(`Switched to ${USE_DYNAMIC_PATHS ? 'Dynamic' : 'Static'} paths`);
}
```

## 📍 Supported Cities

The dynamic system includes these cities by default:

- 🗾 **Tokyo** (radius: 5000m)
- 🏯 **Kyoto** (radius: 4000m)
- 🏙️ **Osaka** (radius: 4000m)
- 🗼 **Paris** (radius: 5000m)
- 🏰 **London** (radius: 5000m)
- 🗽 **New York** (radius: 5000m)
- 🏛️ **Rome** (radius: 4000m)
- ⚽ **Barcelona** (radius: 4000m)
- 🚲 **Amsterdam** (radius: 3000m)
- 🦁 **Singapore** (radius: 4000m)

**To add more cities**, edit `dynamic_integration.js`:

```javascript
const cities = [
    { name: 'Berlin', lat: 52.52, lng: 13.405, radius: 4000 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708, radius: 5000 },
    // Add your city here!
];
```

## 🎯 Path Difficulty Levels

Dynamic paths adapt waypoint count based on difficulty:

- **Easy**: 4 waypoints (~30-50 min)
- **Medium**: 6 waypoints (~50-70 min)
- **Hard**: 8 waypoints (~70-100 min)

## 🔧 Customization

### Adjust Search Types

Edit `dynamic_adventure_paths.js` line 98:

```javascript
const types = [
    'restaurant', // 🍜 Restaurants
    'cafe', // ☕ Cafes
    'store', // 🏪 Stores
    'shopping_mall', // 🛍️ Shopping
    'park', // 🌳 Parks
    'museum', // 🏛️ Museums
    'art_gallery', // 🎨 Galleries
    'library', // 📚 Libraries
    // Add more types!
];
```

### Adjust Search Radius

Larger radius = more diverse waypoints but longer walking:

```javascript
const adventure = await pathManager.getPathForCity('Tokyo', 'medium');
// Uses default radius (5000m for Tokyo)

// Or generate with custom radius:
const city = { name: 'Tokyo', lat: 35.6762, lng: 139.6503, radius: 3000 };
const path = await dynamicGenerator.generateAdventurePath(city, 3000, 'hard');
```

### Filter by Rating

In `selectBestWaypoints()` (line 186):

```javascript
// Only select highly rated places
const filtered = waypoints.filter(wp => wp.rating >= 4.0);
```

## 💡 Benefits of Dynamic Paths

✅ **Infinite Replayability** - Never the same path twice
✅ **Worldwide Coverage** - Any city with Google Places data
✅ **Real-time Data** - Current restaurants, stores, attractions
✅ **User Ratings** - Selects high-quality destinations
✅ **Automatic Updates** - No need to manually add new locations
✅ **Diverse Routes** - Different types of places each time

## 📊 API Usage & Costs

### Google Places API Pricing (as of 2024):

- **Nearby Search**: $32 per 1000 requests
- **Place Details**: $17 per 1000 requests
- **Free Tier**: $200 credit/month (~6,000 paths/month free)

### Per Path Generation:

- 1x Nearby Search (main destination)
- 7x Nearby Search (waypoint types)
- 1x Place Details (main destination)
- **Total: ~$0.30 per path**

### Cost Optimization:

1. **Cache Generated Paths** (already implemented)
2. **Mix with Static Paths** (50/50 reduces cost by half)
3. **Limit Waypoint Types** (reduce API calls)
4. **Use Static for Popular Routes** (Tokyo, Kyoto, etc.)

## 🧪 Testing

Test the dynamic system:

```javascript
// Test in browser console
const generator = new DynamicAdventureGenerator('YOUR_API_KEY');
generator.init(STATE.map);

const tokyo = { name: 'Tokyo', lat: 35.6762, lng: 139.6503 };
const path = await generator.generateAdventurePath(tokyo, 5000, 'medium');

console.log('Main Destination:', path.mainDestination.name);
console.log('Waypoints:', path.waypoints.length);
path.waypoints.forEach((wp, i) => {
    console.log(`${i + 1}. ${wp.emoji} ${wp.name}`);
});
```

## 🔒 API Key Security

**Important**: The API key is currently in the HTML. For production:

1. **Restrict the Key** in Google Cloud Console:
    - HTTP referrers (websites)
    - Limit to your domain only
2. **Backend Proxy** (recommended for production):
    - Create a backend endpoint
    - Backend calls Google Places API
    - Frontend calls your backend
    - Keep API key server-side

3. **Environment Variables**:
    ```javascript
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    ```

## 🎮 Recommended Setup

**For Best Experience:**

```javascript
// Use mixed mode: 70% static, 30% dynamic
async function getAdventure() {
    const useDynamic = Math.random() < 0.3; // 30% chance

    if (useDynamic) {
        return await pathManager.getDynamicPath();
    } else {
        return pathManager.getStaticPath();
    }
}
```

**Why?**

- ✅ Keeps your curated Tokyo experiences
- ✅ Adds variety with dynamic paths
- ✅ Reduces API costs
- ✅ Fallback if API fails

## 🐛 Error Handling

The system includes automatic fallbacks:

```javascript
try {
    const adventure = await pathManager.getDynamicPath();
} catch (error) {
    console.error('Dynamic path failed:', error);
    // Automatically falls back to static path
    const adventure = pathManager.getStaticPath();
}
```

## 📚 Next Steps

1. ✅ Files are already created and integrated
2. ⚠️ **Enable API** in Google Cloud Console:
    - Places API
    - Already have: Maps JavaScript API, Directions API
3. 🧪 Test in console first
4. 🎮 Modify `startLevel()` to use dynamic paths
5. 🚀 Deploy and enjoy infinite adventures!

---

**Questions or Issues?**

- Check browser console for errors
- Verify API key has Places API enabled
- Test with small radius first (1000m)
- Check API quotas in Google Cloud Console
