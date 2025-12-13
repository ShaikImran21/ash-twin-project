/**
 * WIKIPEDIA & UNSPLASH API INTEGRATION
 * Fetch real-time historical data and photos for Paris locations
 */

class WikiUnsplashAPI {
    constructor(unsplashAccessKey) {
        this.unsplashKey = unsplashAccessKey;
        this.wikiCache = new Map();
        this.unsplashCache = new Map();
    }

    /**
     * Fetch Wikipedia summary for a location
     * @param {string} locationName - Name of the location
     * @param {string} language - Language code (default: 'en')
     * @returns {Promise<Object>} Wikipedia data with extract, url, and thumbnail
     */
    async fetchWikipediaData(locationName, language = 'en') {
        const cacheKey = `${locationName}_${language}`;
        
        // Check cache first
        if (this.wikiCache.has(cacheKey)) {
            console.log(`📦 Using cached Wikipedia data for ${locationName}`);
            return this.wikiCache.get(cacheKey);
        }

        try {
            // Wikipedia API endpoint
            const url = `https://${language}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(locationName)}`;
            
            console.log(`📚 Fetching Wikipedia data for: ${locationName}`);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Wikipedia API returned ${response.status}`);
            }
            
            const data = await response.json();
            
            const wikiData = {
                title: data.title || locationName,
                extract: data.extract || 'No description available.',
                description: data.description || '',
                url: data.content_urls?.desktop?.page || '',
                thumbnail: data.thumbnail?.source || null,
                coordinates: data.coordinates || null,
                timestamp: new Date().toISOString()
            };
            
            // Cache the result
            this.wikiCache.set(cacheKey, wikiData);
            console.log(`✅ Wikipedia data fetched for ${locationName}`);
            
            return wikiData;
            
        } catch (error) {
            console.error(`❌ Wikipedia fetch failed for ${locationName}:`, error.message);
            return {
                title: locationName,
                extract: 'Historical information unavailable.',
                description: '',
                url: '',
                thumbnail: null,
                coordinates: null,
                error: error.message
            };
        }
    }

    /**
     * Fetch photos from Unsplash API
     * @param {string} query - Search query
     * @param {number} count - Number of photos to fetch (max 30)
     * @returns {Promise<Array>} Array of photo URLs with metadata
     */
    async fetchUnsplashPhotos(query, count = 3) {
        const cacheKey = `${query}_${count}`;
        
        // Check cache first
        if (this.unsplashCache.has(cacheKey)) {
            console.log(`📦 Using cached Unsplash photos for ${query}`);
            return this.unsplashCache.get(cacheKey);
        }

        // Check if API key is available
        if (!this.unsplashKey || this.unsplashKey === 'YOUR_UNSPLASH_ACCESS_KEY') {
            console.warn('⚠️ Unsplash API key not configured');
            return [];
        }

        try {
            const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&client_id=${this.unsplashKey}`;
            
            console.log(`🖼️ Fetching Unsplash photos for: ${query}`);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Unsplash API returned ${response.status}`);
            }
            
            const data = await response.json();
            
            if (!data.results || data.results.length === 0) {
                console.warn(`⚠️ No Unsplash photos found for ${query}`);
                return [];
            }
            
            const photos = data.results.map(photo => ({
                url: photo.urls.regular,
                thumbnail: photo.urls.thumb,
                full: photo.urls.full,
                description: photo.description || photo.alt_description || query,
                photographer: photo.user.name,
                photographer_url: photo.user.links.html,
                download_location: photo.links.download_location,
                color: photo.color,
                width: photo.width,
                height: photo.height
            }));
            
            // Cache the result
            this.unsplashCache.set(cacheKey, photos);
            console.log(`✅ Fetched ${photos.length} Unsplash photos for ${query}`);
            
            return photos;
            
        } catch (error) {
            console.error(`❌ Unsplash fetch failed for ${query}:`, error.message);
            return [];
        }
    }

    /**
     * Get complete location data (Wikipedia + Unsplash)
     * @param {string} locationName - Name of the location
     * @param {Object} options - Additional options
     * @returns {Promise<Object>} Combined data
     */
    async getLocationData(locationName, options = {}) {
        const {
            language = 'en',
            photoCount = 3,
            includeWiki = true,
            includePhotos = true
        } = options;

        console.log(`🌍 Fetching complete data for: ${locationName}`);
        
        const results = {
            location: locationName,
            timestamp: new Date().toISOString()
        };

        try {
            // Fetch Wikipedia data
            if (includeWiki) {
                results.wikipedia = await this.fetchWikipediaData(locationName, language);
            }

            // Fetch Unsplash photos
            if (includePhotos) {
                results.photos = await this.fetchUnsplashPhotos(locationName, photoCount);
            }

            console.log(`✅ Complete data fetched for ${locationName}`);
            return results;
            
        } catch (error) {
            console.error(`❌ Failed to fetch complete data for ${locationName}:`, error);
            results.error = error.message;
            return results;
        }
    }

    /**
     * Preload data for multiple locations
     * @param {Array<string>} locations - Array of location names
     * @returns {Promise<Object>} Map of location data
     */
    async preloadLocations(locations) {
        console.log(`🔄 Preloading data for ${locations.length} locations...`);
        
        const results = {};
        const promises = locations.map(async (location) => {
            try {
                results[location] = await this.getLocationData(location);
            } catch (error) {
                console.error(`Failed to preload ${location}:`, error);
                results[location] = { error: error.message };
            }
        });

        await Promise.all(promises);
        console.log(`✅ Preloaded ${Object.keys(results).length} locations`);
        
        return results;
    }

    /**
     * Clear all caches
     */
    clearCache() {
        this.wikiCache.clear();
        this.unsplashCache.clear();
        console.log('🧹 API caches cleared');
    }

    /**
     * Get cache statistics
     */
    getCacheStats() {
        return {
            wikipedia: {
                entries: this.wikiCache.size,
                keys: Array.from(this.wikiCache.keys())
            },
            unsplash: {
                entries: this.unsplashCache.size,
                keys: Array.from(this.unsplashCache.keys())
            }
        };
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WikiUnsplashAPI;
}
