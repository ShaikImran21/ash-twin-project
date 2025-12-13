/**
 * CURATED PHOTO DATABASE - PARIS EDITION
 * Manually curated, high-quality photos for each Paris location
 * Uses direct Unsplash photo IDs for consistent, relevant images
 */

const CURATED_PHOTOS = {
    // Eiffel Tower Area
    'Eiffel Tower': [
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop'
    ],
    'Eiffel Tower Base': [
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop'
    ],
    'Trocadero Gardens': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop'
    ],
    "Pont d'Iena": [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop'
    ],
    'Champ de Mars': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop'
    ],
    
    // Louvre Museum Area
    'Louvre Museum': [
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1564594985645-4427056e22e0?w=1200&h=800&fit=crop'
    ],
    'Glass Pyramid': [
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1564594985645-4427056e22e0?w=1200&h=800&fit=crop'
    ],
    'Rue de Rivoli': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=1200&h=800&fit=crop'
    ],
    'Louvre Courtyard': [
        'https://images.unsplash.com/photo-1564594985645-4427056e22e0?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=1200&h=800&fit=crop'
    ],
    'Pont des Arts': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop'
    ],
    
    // Notre-Dame Cathedral Area
    'Notre-Dame Cathedral': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop'
    ],
    'Notre-Dame Facade': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop'
    ],
    'Rue de la Cite': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop'
    ],
    'Parvis Notre-Dame': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop'
    ],
    'Pont Saint-Michel': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop'
    ],
    
    // Generic Paris fallback
    'Paris': [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop'
    ]
};

/**
 * Get curated photos for a specific waypoint/location
 * @param {string} locationName - Name of the location
 * @returns {Array} Array of photo URLs or empty array
 */
function getCuratedPhotos(locationName) {
    // Try exact match first
    if (CURATED_PHOTOS[locationName]) {
        return CURATED_PHOTOS[locationName];
    }
    
    // Try case-insensitive match
    const lowerName = locationName.toLowerCase();
    for (const key in CURATED_PHOTOS) {
        if (key.toLowerCase() === lowerName) {
            return CURATED_PHOTOS[key];
        }
    }
    
    // Try partial match
    for (const key in CURATED_PHOTOS) {
        if (key.toLowerCase().includes(lowerName) || lowerName.includes(key.toLowerCase())) {
            return CURATED_PHOTOS[key];
        }
    }
    
    // Return generic Paris photos as fallback
    return CURATED_PHOTOS['Paris'] || [];
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CURATED_PHOTOS, getCuratedPhotos };
}
