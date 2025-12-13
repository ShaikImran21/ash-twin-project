/**
 * DYNAMIC ADVENTURE PATH GENERATOR
 * Uses Google Places API + OpenStreetMap to generate adventure paths on-the-fly
 */

class DynamicAdventureGenerator {
    constructor(googleApiKey) {
        this.apiKey = googleApiKey;
        this.placesService = null;
        this.map = null;
    }

    /**
     * Initialize with Google Maps
     */
    init(map) {
        this.map = map;
        this.placesService = new google.maps.places.PlacesService(map);
        console.log("✅ Dynamic Adventure Generator initialized");
    }

    /**
     * Generate adventure paths for a city
     * @param {Object} cityCenter - {lat, lng, name}
     * @param {number} radius - Search radius in meters
     * @param {string} difficulty - 'easy', 'medium', 'hard'
     * @returns {Promise<Object>} Adventure path data
     */
    async generateAdventurePath(cityCenter, radius = 5000, difficulty = 'medium') {
        console.log(`🎲 Generating ${difficulty} adventure path near ${cityCenter.name}...`);

        try {
            // Step 1: Find main destination (major landmark)
            const mainDestination = await this.findMainDestination(cityCenter, radius);
            
            // Step 2: Find waypoints based on difficulty
            const waypointCount = this.getWaypointCount(difficulty);
            const waypoints = await this.findWaypoints(cityCenter, mainDestination, waypointCount, radius);
            
            // Step 3: Order waypoints optimally (nearest neighbor algorithm)
            const orderedWaypoints = this.orderWaypoints(cityCenter, waypoints, mainDestination);
            
            // Step 4: Create path object
            const path = {
                pathId: `dynamic_${Date.now()}_${difficulty}`,
                name: `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Explorer Route`,
                difficulty: difficulty,
                estimatedTime: this.estimateTime(orderedWaypoints.length),
                waypoints: orderedWaypoints,
                mainDestination: mainDestination
            };

            console.log(`✅ Generated path with ${orderedWaypoints.length} waypoints`);
            return path;

        } catch (error) {
            console.error("❌ Error generating adventure path:", error);
            throw error;
        }
    }

    /**
     * Find a major landmark as main destination
     */
    findMainDestination(center, radius) {
        return new Promise((resolve, reject) => {
            const request = {
                location: new google.maps.LatLng(center.lat, center.lng),
                radius: radius,
                type: ['tourist_attraction', 'museum', 'park'],
                rankBy: google.maps.places.RankBy.PROMINENCE
            };

            this.placesService.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                    // Get details for the top result
                    this.placesService.getDetails({
                        placeId: results[0].place_id,
                        fields: ['name', 'geometry', 'photos', 'formatted_address', 'rating', 'types', 'editorial_summary']
                    }, (place, detailStatus) => {
                        if (detailStatus === google.maps.places.PlacesServiceStatus.OK) {
                            const mainDest = {
                                name: place.name,
                                coords: {
                                    lat: place.geometry.location.lat(),
                                    lng: place.geometry.location.lng()
                                },
                                emoji: this.getEmojiForType(place.types),
                                description: place.editorial_summary?.overview || `Visit the famous ${place.name}`,
                                address: place.formatted_address,
                                rating: place.rating,
                                photos: place.photos ? place.photos.slice(0, 3).map(p => p.getUrl({maxWidth: 800})) : [],
                                foundingYear: null, // Can be enhanced with Wikipedia API
                                history: `${place.name} is a prominent landmark in the area.`
                            };
                            resolve(mainDest);
                        } else {
                            reject("Could not get main destination details");
                        }
                    });
                } else {
                    reject("No tourist attractions found nearby");
                }
            });
        });
    }

    /**
     * Find waypoints (smaller POIs) around the area
     */
    async findWaypoints(center, mainDest, count, radius) {
        const types = [
            'restaurant',
            'cafe',
            'store',
            'point_of_interest',
            'park',
            'shopping_mall',
            'museum'
        ];

        const allWaypoints = [];

        // Search for different types
        for (const type of types) {
            if (allWaypoints.length >= count * 2) break; // Get extra for filtering

            const waypoints = await this.searchWaypointsByType(center, type, radius);
            allWaypoints.push(...waypoints);
        }

        // Filter out duplicates and main destination
        const uniqueWaypoints = this.filterWaypoints(allWaypoints, mainDest);

        // Select best waypoints based on ratings and diversity
        const selectedWaypoints = this.selectBestWaypoints(uniqueWaypoints, count);

        // Format waypoints
        return selectedWaypoints.map((wp, index) => ({
            order: index + 1,
            name: wp.name,
            coords: {
                lat: wp.coords.lat,
                lng: wp.coords.lng
            },
            emoji: wp.emoji,
            description: wp.description,
            challenge: this.generateChallenge(wp.types),
            heading: null // Will be calculated during route
        }));
    }

    /**
     * Search for waypoints by type
     */
    searchWaypointsByType(center, type, radius) {
        return new Promise((resolve) => {
            const request = {
                location: new google.maps.LatLng(center.lat, center.lng),
                radius: radius,
                type: [type]
            };

            this.placesService.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const waypoints = results.map(place => ({
                        name: place.name,
                        coords: {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        },
                        emoji: this.getEmojiForType(place.types),
                        description: `Discover ${place.name}`,
                        rating: place.rating || 3.5,
                        types: place.types
                    }));
                    resolve(waypoints);
                } else {
                    resolve([]);
                }
            });
        });
    }

    /**
     * Filter out duplicates and main destination
     */
    filterWaypoints(waypoints, mainDest) {
        const seen = new Set();
        const filtered = [];

        for (const wp of waypoints) {
            const key = `${wp.coords.lat.toFixed(5)},${wp.coords.lng.toFixed(5)}`;
            
            // Skip if duplicate or too close to main destination
            if (seen.has(key)) continue;
            
            const distToMain = this.calculateDistance(wp.coords, mainDest.coords);
            if (distToMain < 50) continue; // Skip if within 50m of main dest
            
            seen.add(key);
            filtered.push(wp);
        }

        return filtered;
    }

    /**
     * Select best waypoints based on ratings and diversity
     */
    selectBestWaypoints(waypoints, count) {
        // Sort by rating
        waypoints.sort((a, b) => (b.rating || 3) - (a.rating || 3));
        
        // Take top rated, ensuring diversity
        const selected = [];
        const typesSeen = new Set();

        for (const wp of waypoints) {
            if (selected.length >= count) break;
            
            // Prefer diverse types
            const primaryType = wp.types?.[0] || 'point_of_interest';
            
            if (!typesSeen.has(primaryType) || selected.length >= count - 2) {
                selected.push(wp);
                typesSeen.add(primaryType);
            }
        }

        return selected;
    }

    /**
     * Order waypoints for optimal route (nearest neighbor)
     */
    orderWaypoints(start, waypoints, end) {
        if (waypoints.length === 0) return [];

        const ordered = [];
        const remaining = [...waypoints];
        let current = start;

        while (remaining.length > 0) {
            // Find nearest waypoint to current position
            let nearest = null;
            let minDist = Infinity;

            for (const wp of remaining) {
                const dist = this.calculateDistance(current.coords, wp.coords);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = wp;
                }
            }

            if (nearest) {
                ordered.push(nearest);
                remaining.splice(remaining.indexOf(nearest), 1);
                current = nearest;
            } else {
                break;
            }
        }

        // Re-number waypoints
        return ordered.map((wp, index) => ({
            ...wp,
            order: index + 1
        }));
    }

    /**
     * Calculate distance between two points (meters)
     */
    calculateDistance(coord1, coord2) {
        const R = 6371e3; // Earth radius in meters
        const φ1 = coord1.lat * Math.PI / 180;
        const φ2 = coord2.lat * Math.PI / 180;
        const Δφ = (coord2.lat - coord1.lat) * Math.PI / 180;
        const Δλ = (coord2.lng - coord1.lng) * Math.PI / 180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                  Math.cos(φ1) * Math.cos(φ2) *
                  Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return R * c;
    }

    /**
     * Get emoji for place type
     */
    getEmojiForType(types) {
        const emojiMap = {
            'restaurant': '🍜',
            'cafe': '☕',
            'store': '🏪',
            'shopping_mall': '🛍️',
            'park': '🌳',
            'museum': '🏛️',
            'temple': '⛩️',
            'shrine': '⛩️',
            'tourist_attraction': '🎯',
            'church': '⛪',
            'art_gallery': '🎨',
            'library': '📚',
            'point_of_interest': '📍'
        };

        for (const type of types) {
            if (emojiMap[type]) return emojiMap[type];
        }
        return '📍';
    }

    /**
     * Generate challenge text for waypoint
     */
    generateChallenge(types) {
        const challenges = {
            'restaurant': 'Take a photo of the menu board',
            'cafe': 'Find the coffee roasting area',
            'store': 'Spot the most unique item',
            'park': 'Find a tree older than 50 years',
            'museum': 'Locate the main exhibit',
            'temple': 'Find the offering box',
            'shrine': 'Ring the bell if available'
        };

        for (const type of types) {
            if (challenges[type]) return challenges[type];
        }
        return 'Explore and document this location';
    }

    /**
     * Get waypoint count based on difficulty
     */
    getWaypointCount(difficulty) {
        const counts = {
            'easy': 4,
            'medium': 6,
            'hard': 8
        };
        return counts[difficulty] || 6;
    }

    /**
     * Estimate time based on waypoint count
     */
    estimateTime(waypointCount) {
        return `${waypointCount * 8}-${waypointCount * 12} min`;
    }

    /**
     * Generate multiple paths for a location
     */
    async generateMultiplePaths(cityCenter, radius = 5000) {
        console.log(`🎲 Generating multiple paths for ${cityCenter.name}...`);

        const paths = await Promise.all([
            this.generateAdventurePath(cityCenter, radius * 0.7, 'easy'),
            this.generateAdventurePath(cityCenter, radius, 'medium'),
            this.generateAdventurePath(cityCenter, radius * 1.3, 'hard')
        ]);

        return {
            location: cityCenter.name,
            mainDestination: paths[0].mainDestination, // Use same main dest for all
            paths: paths
        };
    }
}

// Export for use in main app
window.DynamicAdventureGenerator = DynamicAdventureGenerator;
