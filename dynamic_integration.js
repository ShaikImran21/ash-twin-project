/**
 * INTEGRATION: Dynamic + Static Adventure Paths
 * This allows switching between hardcoded paths and dynamically generated ones
 */

class AdventurePathManager {
    constructor() {
        this.useStaticPaths = true; // Toggle this to switch modes
        this.dynamicGenerator = null;
        this.staticPaths = null;
        this.cache = new Map(); // Cache generated paths
    }

    /**
     * Initialize the manager
     */
    async init(googleMap, googleApiKey) {
        console.log("🎮 Initializing Adventure Path Manager...");

        // Load static paths if available
        if (typeof ADVENTURE_PATHS_COMPLETE !== 'undefined') {
            this.staticPaths = {
                ...ADVENTURE_PATHS_COMPLETE,
                ...(typeof ADVENTURE_PATHS_PART2 !== 'undefined' ? ADVENTURE_PATHS_PART2 : {}),
                ...(typeof ADVENTURE_PATHS_PART3 !== 'undefined' ? ADVENTURE_PATHS_PART3 : {})
            };
            console.log(`✅ Loaded ${Object.keys(this.staticPaths).length} static locations`);
        }

        // Initialize dynamic generator
        this.dynamicGenerator = new DynamicAdventureGenerator(googleApiKey);
        this.dynamicGenerator.init(googleMap);
        console.log("✅ Dynamic generator ready");
    }

    /**
     * Get a random adventure path
     * @param {string} mode - 'static', 'dynamic', or 'mixed'
     * @returns {Promise<Object>}
     */
    async getRandomAdventurePath(mode = 'mixed') {
        if (mode === 'static' || (mode === 'mixed' && Math.random() < 0.5)) {
            return this.getStaticPath();
        } else {
            return await this.getDynamicPath();
        }
    }

    /**
     * Get a static path from hardcoded data
     */
    getStaticPath() {
        if (!this.staticPaths || Object.keys(this.staticPaths).length === 0) {
            throw new Error("No static paths available");
        }

        const locations = Object.keys(this.staticPaths);
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        const locationData = this.staticPaths[randomLocation];
        
        const paths = locationData.paths;
        const randomPath = paths[Math.floor(Math.random() * paths.length)];

        return {
            location: randomLocation,
            mainDestination: locationData.mainDestination,
            path: randomPath,
            source: 'static'
        };
    }

    /**
     * Get a dynamically generated path
     */
    async getDynamicPath() {
        if (!this.dynamicGenerator) {
            throw new Error("Dynamic generator not initialized");
        }

        // Famous cities and their centers
        const cities = [
            { name: 'Tokyo', lat: 35.6762, lng: 139.6503, radius: 5000 },
            { name: 'Kyoto', lat: 35.0116, lng: 135.7681, radius: 4000 },
            { name: 'Osaka', lat: 34.6937, lng: 135.5023, radius: 4000 },
            { name: 'Paris', lat: 48.8566, lng: 2.3522, radius: 5000 },
            { name: 'London', lat: 51.5074, lng: -0.1278, radius: 5000 },
            { name: 'New York', lat: 40.7128, lng: -74.0060, radius: 5000 },
            { name: 'Rome', lat: 41.9028, lng: 12.4964, radius: 4000 },
            { name: 'Barcelona', lat: 41.3851, lng: 2.1734, radius: 4000 },
            { name: 'Amsterdam', lat: 52.3676, lng: 4.9041, radius: 3000 },
            { name: 'Singapore', lat: 1.3521, lng: 103.8198, radius: 4000 }
        ];

        // Pick random city
        const city = cities[Math.floor(Math.random() * cities.length)];
        const cacheKey = `${city.name}_${Date.now() % 10000}`; // Cache for ~10 requests

        // Check cache
        if (this.cache.has(city.name)) {
            console.log(`📦 Using cached path for ${city.name}`);
            return this.cache.get(city.name);
        }

        try {
            console.log(`🎲 Generating dynamic path for ${city.name}...`);
            
            // Generate path
            const difficulties = ['easy', 'medium', 'hard'];
            const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
            
            const path = await this.dynamicGenerator.generateAdventurePath(city, city.radius, difficulty);

            const result = {
                location: city.name,
                mainDestination: path.mainDestination,
                path: {
                    pathId: path.pathId,
                    name: path.name,
                    difficulty: path.difficulty,
                    estimatedTime: path.estimatedTime,
                    waypoints: path.waypoints
                },
                source: 'dynamic'
            };

            // Cache it
            this.cache.set(city.name, result);
            
            console.log(`✅ Generated ${difficulty} path with ${path.waypoints.length} waypoints`);
            return result;

        } catch (error) {
            console.error(`❌ Failed to generate dynamic path for ${city.name}:`, error);
            
            // Fallback to static path
            console.log("⚠️ Falling back to static path...");
            return this.getStaticPath();
        }
    }

    /**
     * Get path for specific city (dynamic)
     */
    async getPathForCity(cityName, difficulty = 'medium') {
        const cityCoords = {
            'Tokyo': { lat: 35.6762, lng: 139.6503, radius: 5000 },
            'Kyoto': { lat: 35.0116, lng: 135.7681, radius: 4000 },
            'Osaka': { lat: 34.6937, lng: 135.5023, radius: 4000 },
            'Shibuya': { lat: 35.6580, lng: 139.7016, radius: 2000 },
            'Shinjuku': { lat: 35.6938, lng: 139.7034, radius: 2000 },
            'Asakusa': { lat: 35.7148, lng: 139.7967, radius: 1500 }
        };

        const city = cityCoords[cityName];
        if (!city) {
            throw new Error(`City ${cityName} not found`);
        }

        city.name = cityName;
        const path = await this.dynamicGenerator.generateAdventurePath(city, city.radius, difficulty);

        return {
            location: cityName,
            mainDestination: path.mainDestination,
            path: {
                pathId: path.pathId,
                name: path.name,
                difficulty: path.difficulty,
                estimatedTime: path.estimatedTime,
                waypoints: path.waypoints
            },
            source: 'dynamic'
        };
    }

    /**
     * Clear cache
     */
    clearCache() {
        this.cache.clear();
        console.log("🗑️ Path cache cleared");
    }

    /**
     * Get statistics
     */
    getStats() {
        return {
            staticLocations: this.staticPaths ? Object.keys(this.staticPaths).length : 0,
            cachedDynamicPaths: this.cache.size,
            dynamicGeneratorReady: this.dynamicGenerator !== null
        };
    }
}

// Export
window.AdventurePathManager = AdventurePathManager;

/**
 * USAGE EXAMPLE:
 * 
 * // Initialize
 * const pathManager = new AdventurePathManager();
 * await pathManager.init(googleMap, 'YOUR_API_KEY');
 * 
 * // Get random path (mixed mode - uses both static and dynamic)
 * const adventure = await pathManager.getRandomAdventurePath('mixed');
 * 
 * // Get dynamic path only
 * const dynamicAdventure = await pathManager.getRandomAdventurePath('dynamic');
 * 
 * // Get static path only
 * const staticAdventure = await pathManager.getRandomAdventurePath('static');
 * 
 * // Get specific city path
 * const tokyoPath = await pathManager.getPathForCity('Tokyo', 'hard');
 * 
 * // Access the data
 * console.log(adventure.location); // "Tokyo"
 * console.log(adventure.path.waypoints); // Array of waypoints
 * console.log(adventure.mainDestination); // Main destination object
 */
