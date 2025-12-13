/**
 * DYNAMIC PHOTO LOADER - UNSPLASH EDITION
 * Automatically fetches real photos for waypoints using Unsplash API
 * No Google API required for images!
 */

class DynamicPhotoLoader {
    constructor(unsplashAccessKey = null) {
        this.accessKey = unsplashAccessKey;
        this.photoCache = new Map();
        this.loadingQueue = [];
        this.isProcessing = false;
    }

    /**
     * Initialize photo loader (no external map service needed)
     */
    init() {
        console.log('✅ Unsplash Photo Loader initialized');
    }

    /**
     * Get photos for a waypoint using Unsplash
     * Priority: 1) Curated database, 2) Unsplash API, 3) Unsplash Source fallback
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
            // Priority 2: Try Unsplash API if access key provided
            if (this.accessKey) {
                const photos = await this.searchUnsplashPhotos(waypoint);
                if (photos && photos.length > 0) {
                    this.photoCache.set(cacheKey, photos);
                    return photos;
                }
            }

            // Priority 3: Use Unsplash Source fallback
            const fallbackPhotos = this.getUnsplashSourcePhotos(waypoint);
            this.photoCache.set(cacheKey, fallbackPhotos);
            return fallbackPhotos;
        } catch (error) {
            console.error(`❌ Failed to load photos for ${waypoint.name}:`, error);
            // Final fallback
            return this.getUnsplashSourcePhotos(waypoint);
        }
    }

    /**
     * Search for photos using Unsplash API
     * Requires an Unsplash Access Key
     */
    async searchUnsplashPhotos(waypoint) {
        if (!this.accessKey) {
            console.log('⚠️ No Unsplash access key provided');
            return null;
        }

        try {
            // Build search query based on waypoint name and location
            const searchQuery = this.buildSearchQuery(waypoint);

            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=3&orientation=landscape`,
                {
                    headers: {
                        Authorization: `Client-ID ${this.accessKey}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Unsplash API error: ${response.status}`);
            }

            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const photoUrls = data.results.map(
                    photo => `${photo.urls.regular}&w=1200&h=800&fit=crop`
                );
                console.log(`✅ Found ${photoUrls.length} Unsplash photos for ${waypoint.name}`);
                return photoUrls;
            }

            return null;
        } catch (error) {
            console.error('❌ Unsplash API error:', error);
            return null;
        }
    }

    /**
     * Build smart search query for Unsplash based on waypoint
     */
    buildSearchQuery(waypoint) {
        const name = waypoint.name.toLowerCase();

        // Detect location context
        let location = 'tokyo japan';
        if (name.includes('paris')) location = 'paris france';
        else if (name.includes('london')) location = 'london uk';
        else if (name.includes('tahiti')) location = 'tahiti polynesia';

        // Clean up the waypoint name for better search
        const cleanName = name
            .replace(/\([^)]*\)/g, '') // Remove parentheses content
            .replace(/\d+/g, '') // Remove numbers
            .trim();

        return `${cleanName} ${location}`;
    }

    /**
     * Get specific historical/relevant photos from Unsplash Source
     * Uses smart search terms for accuracy
     */
    getUnsplashSourcePhotos(waypoint) {
        console.log(`📷 Using curated photos for ${waypoint.name}`);

        const name = waypoint.name.toLowerCase();

        // Specific searches for known Tokyo locations
        const specificSearches = {
            // Senso-ji Temple area
            'sumida river': 'sumida+river+tokyo+historic',
            'komagata bridge': 'komagata+bridge+tokyo',
            'hoppy street': 'asakusa+izakaya+tokyo',
            nakamise: 'nakamise+shopping+street+asakusa',
            kaminarimon: 'kaminarimon+gate+asakusa',
            'senso-ji': 'sensoji+temple+asakusa+tokyo',
            denpoin: 'denpoin+garden+tokyo',
            asakusa: 'asakusa+tokyo+historic',

            // Tokyo Tower area
            'shiba park': 'shiba+park+tokyo+tower',
            zojoji: 'zojoji+temple+tokyo',
            'tokyo tower': 'tokyo+tower+historic',

            // Meiji Shrine area
            'meiji shrine': 'meiji+shrine+tokyo',
            'yoyogi park': 'yoyogi+park+tokyo',
            harajuku: 'harajuku+tokyo',
            takeshita: 'takeshita+street+harajuku',

            // Imperial Palace area
            'imperial palace': 'imperial+palace+tokyo',
            nijubashi: 'nijubashi+bridge+tokyo',
            chidorigafuchi: 'chidorigafuchi+moat+tokyo',
            kitanomaru: 'kitanomaru+park+tokyo',

            // Shibuya
            hachiko: 'hachiko+statue+shibuya',
            'shibuya crossing': 'shibuya+crossing+tokyo',
            shibuya: 'shibuya+tokyo',

            // Tsukiji
            tsukiji: 'tsukiji+market+tokyo',

            // Ueno
            ueno: 'ueno+park+tokyo',
            shinobazu: 'shinobazu+pond+tokyo',
            ameyoko: 'ameyoko+market+tokyo',

            // Akihabara
            akihabara: 'akihabara+electric+town+tokyo',
            'kanda myojin': 'kanda+myojin+shrine+tokyo',

            // Roppongi
            roppongi: 'roppongi+hills+tokyo',
            mori: 'mori+tower+roppongi',
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
            `https://source.unsplash.com/1200x800/?${searchTerm},historic&sig=${timestamp + random}`,
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
            const photos = await this.getPhotosForWaypoint({
                name: mainDest.name,
                coords: mainDest.coords,
            });

            this.photoCache.set(cacheKey, photos);
            return photos;
        } catch (error) {
            console.error(`❌ Failed to load photos for ${mainDest.name}:`, error);
            return this.getUnsplashSourcePhotos(mainDest);
        }
    }

    /**
     * Preload photos for all waypoints in a path
     */
    async preloadPathPhotos(path) {
        console.log(`🔄 Preloading photos for ${path.name}...`);

        const promises = path.waypoints.map(waypoint => this.getPhotosForWaypoint(waypoint));

        try {
            await Promise.all(promises);
            console.log(`✅ Preloaded all photos for ${path.name}`);
        } catch (error) {
            console.error('⚠️ Some photos failed to preload:', error);
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
            photosSource: 'dynamic',
        };
    }

    /**
     * Clear photo cache
     */
    clearCache() {
        this.photoCache.clear();
        console.log('🗑️ Photo cache cleared');
    }

    /**
     * Get cache statistics
     */
    getCacheStats() {
        return {
            cachedPhotos: this.photoCache.size,
            totalRequests: this.photoCache.size,
        };
    }
}

// Export
window.DynamicPhotoLoader = DynamicPhotoLoader;

/**
 * USAGE EXAMPLE:
 *
 * // Initialize WITHOUT Unsplash API key (uses Unsplash Source - free, no signup)
 * const photoLoader = new DynamicPhotoLoader();
 * photoLoader.init();
 *
 * // OR Initialize WITH Unsplash API key (better quality, more control)
 * // Get free key at: https://unsplash.com/developers
 * const photoLoader = new DynamicPhotoLoader('YOUR_UNSPLASH_ACCESS_KEY');
 * photoLoader.init();
 *
 * // Load photos for a waypoint
 * const photos = await photoLoader.getPhotosForWaypoint(waypoint);
 *
 * // Enhance waypoint with dynamic photos
 * const enhancedWaypoint = await photoLoader.enhanceWaypoint(waypoint);
 *
 * // Preload all photos for a path
 * await photoLoader.preloadPathPhotos(selectedPath);
 *
 * PHOTO PRIORITY SYSTEM:
 * 1. Curated photos from curated_photos.js (highest quality, manually selected)
 * 2. Unsplash API search (if access key provided - requires free account)
 * 3. Unsplash Source fallback (always works, no account needed)
 */
