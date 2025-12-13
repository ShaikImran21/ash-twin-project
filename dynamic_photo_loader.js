/**
 * DYNAMIC PHOTO LOADER
 * Automatically fetches real photos for waypoints using Google Places API
 */

class DynamicPhotoLoader {
    constructor(googleApiKey) {
        this.apiKey = googleApiKey;
        this.placesService = null;
        this.photoCache = new Map();
        this.loadingQueue = [];
        this.isProcessing = false;
    }

    /**
     * Initialize with Google Maps
     */
    init(map) {
        this.placesService = new google.maps.places.PlacesService(map);
        console.log("✅ Dynamic Photo Loader initialized");
    }

    /**
     * Get photos for a waypoint using multiple sources
     * Priority: 1) Curated database, 2) Google Places API, 3) Fallback
     * @param {Object} waypoint - Waypoint object with name and coords
     * @returns {Promise<Array>} Array of photo URLs
     */
    async getPhotosForWaypoint(waypoint) {
        const cacheKey = `${waypoint.coords.lat},${waypoint.coords.lng}`;
        
        // Check cache first
        if (this.photoCache.has(cacheKey)) {
            console.log(`📦 Using cached photos for ${waypoint.name}`);
            return this.photoCache.get(cacheKey);
        }

        // Priority 1: Check curated photo database
        if (typeof getCuratedPhotos !== 'undefined') {
            const curatedPhotos = getCuratedPhotos(waypoint.name);
            if (curatedPhotos && curatedPhotos.length > 0) {
                console.log(`✅ Using curated photos for ${waypoint.name}`);
                this.photoCache.set(cacheKey, curatedPhotos);
                return curatedPhotos;
            }
        }

        try {
            // Priority 2: Try Google Places API
            const photos = await this.searchPlacePhotos(waypoint);
            
            // Cache the results
            this.photoCache.set(cacheKey, photos);
            
            return photos;
        } catch (error) {
            console.error(`❌ Failed to load photos for ${waypoint.name}:`, error);
            // Priority 3: Use fallback
            return this.getFallbackPhotos(waypoint);
        }
    }

    /**
     * Search for photos using Places API
     * Prioritizes exact location match by name and coordinates
     */
    searchPlacePhotos(waypoint) {
        return new Promise((resolve, reject) => {
            // First try: Exact text search with coordinates for better accuracy
            const exactQuery = `${waypoint.name} Tokyo`;
            
            this.placesService.textSearch({
                query: exactQuery,
                location: new google.maps.LatLng(waypoint.coords.lat, waypoint.coords.lng),
                radius: 200 // Wider search but prioritizes nearby
            }, (results, status) => {
                console.log(`📡 Google Places API status: ${status}`);
                
                if (status === 'REQUEST_DENIED') {
                    console.error('❌ Google Places API REQUEST_DENIED - API not enabled or invalid key');
                    console.log('📷 Using fallback photos instead');
                    resolve(this.getFallbackPhotos(waypoint));
                    return;
                }
                
                if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                    // Filter results to find closest match by name
                    let bestMatch = null;
                    
                    // Try to find relevant match using validation
                    for (const result of results) {
                        if (this.isRelevantPhoto(waypoint.name, result.name)) {
                            bestMatch = result;
                            console.log(`✅ Matched ${waypoint.name} with ${result.name}`);
                            break;
                        }
                    }
                    
                    // If no relevant match, use first result but log warning
                    if (!bestMatch) {
                        bestMatch = results[0];
                        console.log(`⚠️ No exact match for ${waypoint.name}, using ${bestMatch.name}`);
                    }
                    
                    // Get details for best match
                    this.placesService.getDetails({
                        placeId: bestMatch.place_id,
                        fields: ['name', 'photos', 'types', 'formatted_address']
                    }, (place, detailStatus) => {
                        if (detailStatus === google.maps.places.PlacesServiceStatus.OK) {
                            if (place.photos && place.photos.length > 0) {
                                // Get photo URLs (max 3)
                                const photoUrls = place.photos.slice(0, 3).map(photo => 
                                    photo.getUrl({ maxWidth: 1200, maxHeight: 800 })
                                );
                                console.log(`✅ Found ${photoUrls.length} photos for ${waypoint.name} (matched: ${place.name})`);
                                resolve(photoUrls);
                            } else {
                                console.log(`⚠️ No photos at ${place.name}, using fallback`);
                                resolve(this.getFallbackPhotos(waypoint));
                            }
                        } else {
                            console.log(`⚠️ Details failed, using fallback`);
                            resolve(this.getFallbackPhotos(waypoint));
                        }
                    });
                } else {
                    console.log(`⚠️ Text search failed for ${waypoint.name}, using fallback`);
                    resolve(this.getFallbackPhotos(waypoint));
                }
            });
        });
    }

    /**
     * Validate if photo is relevant to the location
     * Checks if the matched place name is related to waypoint
     */
    isRelevantPhoto(waypointName, placeName) {
        const waypointLower = waypointName.toLowerCase();
        const placeLower = placeName.toLowerCase();
        
        // Extract key words from waypoint name
        const waypointWords = waypointLower.split(/[\s\-\(\)]+/).filter(w => w.length > 3);
        const placeWords = placeLower.split(/[\s\-\(\)]+/).filter(w => w.length > 3);
        
        // Check if at least one significant word matches
        for (const word of waypointWords) {
            if (placeWords.some(pw => pw.includes(word) || word.includes(pw))) {
                return true;
            }
        }
        
        return false;
    }

    /**
     * Get specific historical/relevant photos based on waypoint
     * Uses curated photo sources for accuracy
     */
    getFallbackPhotos(waypoint) {
        console.log(`📷 Using curated photos for ${waypoint.name}`);
        
        const name = waypoint.name.toLowerCase();
        
        // Specific searches for known Tokyo locations
        const specificSearches = {
            // Senso-ji Temple area
            'sumida river': 'sumida+river+tokyo+historic',
            'komagata bridge': 'komagata+bridge+tokyo',
            'hoppy street': 'asakusa+izakaya+tokyo',
            'nakamise': 'nakamise+shopping+street+asakusa',
            'kaminarimon': 'kaminarimon+gate+asakusa',
            'senso-ji': 'sensoji+temple+asakusa+tokyo',
            'denpoin': 'denpoin+garden+tokyo',
            'asakusa': 'asakusa+tokyo+historic',
            
            // Tokyo Tower area
            'shiba park': 'shiba+park+tokyo+tower',
            'zojoji': 'zojoji+temple+tokyo',
            'tokyo tower': 'tokyo+tower+historic',
            
            // Meiji Shrine area
            'meiji shrine': 'meiji+shrine+tokyo',
            'yoyogi park': 'yoyogi+park+tokyo',
            'harajuku': 'harajuku+tokyo',
            'takeshita': 'takeshita+street+harajuku',
            
            // Imperial Palace area
            'imperial palace': 'imperial+palace+tokyo',
            'nijubashi': 'nijubashi+bridge+tokyo',
            'chidorigafuchi': 'chidorigafuchi+moat+tokyo',
            'kitanomaru': 'kitanomaru+park+tokyo',
            
            // Shibuya
            'hachiko': 'hachiko+statue+shibuya',
            'shibuya crossing': 'shibuya+crossing+tokyo',
            'shibuya': 'shibuya+tokyo',
            
            // Tsukiji
            'tsukiji': 'tsukiji+market+tokyo',
            
            // Ueno
            'ueno': 'ueno+park+tokyo',
            'shinobazu': 'shinobazu+pond+tokyo',
            'ameyoko': 'ameyoko+market+tokyo',
            
            // Akihabara
            'akihabara': 'akihabara+electric+town+tokyo',
            'kanda myojin': 'kanda+myojin+shrine+tokyo',
            
            // Roppongi
            'roppongi': 'roppongi+hills+tokyo',
            'mori': 'mori+tower+roppongi'
        };
        
        // Find matching search term
        let searchTerm = 'tokyo+japan+historic';
        for (const [key, value] of Object.entries(specificSearches)) {
            if (name.includes(key)) {
                searchTerm = value;
                break;
            }
        }
        
        // Use Unsplash API with specific search terms and random parameter
        // Adding timestamp ensures different photos each time
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        
        return [
            `https://source.unsplash.com/1200x800/?${searchTerm}&sig=${timestamp}`,
            `https://source.unsplash.com/1200x800/?${searchTerm},architecture&sig=${random}`,
            `https://source.unsplash.com/1200x800/?${searchTerm},historic&sig=${timestamp + random}`
        ];
    }

    /**
     * Load photos for main destination
     */
    async getPhotosForMainDestination(mainDest) {
        const cacheKey = `main_${mainDest.coords.lat},${mainDest.coords.lng}`;
        
        if (this.photoCache.has(cacheKey)) {
            return this.photoCache.get(cacheKey);
        }

        try {
            const photos = await this.searchPlacePhotos({
                name: mainDest.name,
                coords: mainDest.coords
            });
            
            this.photoCache.set(cacheKey, photos);
            return photos;
        } catch (error) {
            console.error(`❌ Failed to load photos for ${mainDest.name}:`, error);
            return this.getFallbackPhotos(mainDest);
        }
    }

    /**
     * Preload photos for all waypoints in a path
     */
    async preloadPathPhotos(path) {
        console.log(`🔄 Preloading photos for ${path.name}...`);
        
        const promises = path.waypoints.map(waypoint => 
            this.getPhotosForWaypoint(waypoint)
        );
        
        try {
            await Promise.all(promises);
            console.log(`✅ Preloaded all photos for ${path.name}`);
        } catch (error) {
            console.error(`⚠️ Some photos failed to preload:`, error);
        }
    }

    /**
     * Apply dynamic photos to waypoint
     */
    async enhanceWaypoint(waypoint) {
        const photos = await this.getPhotosForWaypoint(waypoint);
        
        return {
            ...waypoint,
            photos: photos,
            photo: photos[0],
            photosSource: 'dynamic'
        };
    }

    /**
     * Clear photo cache
     */
    clearCache() {
        this.photoCache.clear();
        console.log("🗑️ Photo cache cleared");
    }

    /**
     * Get cache statistics
     */
    getCacheStats() {
        return {
            cachedPhotos: this.photoCache.size,
            totalRequests: this.photoCache.size
        };
    }
}

// Export
window.DynamicPhotoLoader = DynamicPhotoLoader;

/**
 * USAGE EXAMPLE:
 * 
 * // Initialize
 * const photoLoader = new DynamicPhotoLoader('YOUR_API_KEY');
 * photoLoader.init(map);
 * 
 * // Load photos for a waypoint
 * const photos = await photoLoader.getPhotosForWaypoint(waypoint);
 * 
 * // Enhance waypoint with dynamic photos
 * const enhancedWaypoint = await photoLoader.enhanceWaypoint(waypoint);
 * 
 * // Preload all photos for a path
 * await photoLoader.preloadPathPhotos(selectedPath);
 */
