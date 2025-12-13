/**
 * TAHITI ADVENTURE PATHS - STREET VIEW VERIFIED VERSION
 * Only includes locations where Google Street View is confirmed available
 * Focused on: Papeete downtown and main coastal highway
 */

const ADVENTURE_PATHS_TAHITI = {
    // 1. Papeete Downtown - VERIFIED STREET VIEW
    'Papeete Downtown': {
        mainDestination: {
            name: 'Marché de Papeete',
            coords: { lat: -17.535, lng: -149.5696 },
            emoji: '🏪',
            description: 'The vibrant central market of Tahiti',
            history:
                'Established in 1847, this iconic market has been the heart of Papeete for over 170 years.',
            foundingYear: 1847,
            photos: [
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'papeete_downtown_easy',
                name: 'Downtown Explorer',
                difficulty: 'easy',
                estimatedTime: '20-25 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Avenue Bruat',
                        coords: { lat: -17.5365, lng: -149.5685 },
                        emoji: '🏛️',
                        description: 'Main downtown street with government buildings',
                        history:
                            "Named after French Admiral Armand Joseph Bruat, this is Papeete's administrative center.",
                        photos: [
                            'https://images.unsplash.com/photo-1548198831-4f8c6d4c90ad?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk along the main boulevard',
                        reward: 35,
                        category: 'urban',
                        heading: 90,
                    },
                    {
                        order: 2,
                        name: 'Waterfront Promenade',
                        coords: { lat: -17.5342, lng: -149.5668 },
                        emoji: '🌊',
                        description: 'Seaside walkway with cruise ship docks',
                        history:
                            'Where cruise ships dock, bringing thousands of tourists to explore Papeete.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Enjoy the ocean breeze',
                        reward: 40,
                        category: 'viewpoint',
                        heading: 180,
                    },
                    {
                        order: 3,
                        name: 'Rue Paul Gauguin',
                        coords: { lat: -17.5355, lng: -149.5678 },
                        emoji: '🎨',
                        description: 'Street named after famous artist',
                        history:
                            'Paul Gauguin spent years in Tahiti creating his most famous works.',
                        photos: [
                            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find art galleries or shops',
                        reward: 35,
                        category: 'cultural',
                        heading: 45,
                    },
                    {
                        order: 4,
                        name: 'Place Vaiete',
                        coords: { lat: -17.5348, lng: -149.5665 },
                        emoji: '🍴',
                        description: 'Food truck square (roulottes)',
                        history:
                            'Local food trucks serve traditional Tahitian dishes every evening.',
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Spot the colorful food trucks',
                        reward: 40,
                        category: 'cultural',
                        heading: 270,
                    },
                    {
                        order: 5,
                        name: 'Rue du Général de Gaulle',
                        coords: { lat: -17.536, lng: -149.569 },
                        emoji: '🏬',
                        description: 'Shopping street with local stores',
                        history:
                            'Main shopping district with pearl shops, clothing stores, and cafes.',
                        photos: [
                            'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1200&h=800&fit=crop',
                        ],
                        task: 'Window shop for black pearls',
                        reward: 35,
                        category: 'urban',
                        heading: 135,
                    },
                    {
                        order: 6,
                        name: 'Cathedral Notre-Dame',
                        coords: { lat: -17.5355, lng: -149.5684 },
                        emoji: '⛪',
                        description: 'Historic Catholic cathedral',
                        history: 'Built in 1875, one of the oldest churches in Tahiti.',
                        photos: [
                            'https://images.unsplash.com/photo-1548198831-4f8c6d4c90ad?w=1200&h=800&fit=crop',
                        ],
                        task: 'Observe the architecture',
                        reward: 40,
                        category: 'cultural',
                        heading: 0,
                    },
                ],
            },
        ],
    },

    // 2. Coastal Highway East
    'Coastal Highway East': {
        mainDestination: {
            name: 'East Coast Viewpoint',
            coords: { lat: -17.54, lng: -149.54 },
            emoji: '🌴',
            description: 'Scenic coastal road with palm trees',
            history: 'The coastal highway circles Tahiti, offering ocean views and beach access.',
            foundingYear: null,
            photos: [
                'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'coastal_east_medium',
                name: 'Coastal Drive',
                difficulty: 'medium',
                estimatedTime: '25-30 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Papeete Harbor Exit',
                        coords: { lat: -17.538, lng: -149.562 },
                        emoji: '⚓',
                        description: 'Leaving the harbor area',
                        history: 'Historic port where trading ships and yachts anchor.',
                        photos: [
                            'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1200&h=800&fit=crop',
                        ],
                        task: 'Look for boats in the harbor',
                        reward: 35,
                        category: 'viewpoint',
                        heading: 90,
                    },
                    {
                        order: 2,
                        name: 'Coastal Residential Area',
                        coords: { lat: -17.5395, lng: -149.555 },
                        emoji: '🏠',
                        description: 'Local neighborhoods by the sea',
                        history: 'Traditional Tahitian homes with tropical gardens.',
                        photos: [
                            'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200&h=800&fit=crop',
                        ],
                        task: 'Observe local architecture',
                        reward: 30,
                        category: 'cultural',
                        heading: 90,
                    },
                    {
                        order: 3,
                        name: 'Beach Access Point',
                        coords: { lat: -17.5405, lng: -149.548 },
                        emoji: '🏖️',
                        description: 'Small beach with black sand',
                        history: 'Volcanic black sand beaches are characteristic of Tahiti.',
                        photos: [
                            'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the beach entrance',
                        reward: 40,
                        category: 'nature',
                        heading: 180,
                    },
                    {
                        order: 4,
                        name: 'Palm Grove Stretch',
                        coords: { lat: -17.541, lng: -149.543 },
                        emoji: '🌴',
                        description: 'Road lined with coconut palms',
                        history: 'Coconut palms provide shade and sustenance to islanders.',
                        photos: [
                            'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200&h=800&fit=crop',
                        ],
                        task: 'Count the palm trees',
                        reward: 30,
                        category: 'nature',
                        heading: 90,
                    },
                    {
                        order: 5,
                        name: 'Coastal Viewpoint',
                        coords: { lat: -17.5408, lng: -149.541 },
                        emoji: '👁️',
                        description: 'Pullout with ocean views',
                        history: 'Popular spot for photographs and sunset watching.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Take in the ocean view',
                        reward: 45,
                        category: 'viewpoint',
                        heading: 180,
                    },
                    {
                        order: 6,
                        name: 'Lagoon Edge',
                        coords: { lat: -17.5402, lng: -149.5405 },
                        emoji: '🌊',
                        description: 'Protected lagoon waters',
                        history: 'The lagoon inside the reef offers calm, turquoise waters.',
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Spot the color change from lagoon to ocean',
                        reward: 40,
                        category: 'nature',
                        heading: 200,
                    },
                ],
            },
        ],
    },

    // 3. West Papeete
    'West Papeete': {
        mainDestination: {
            name: 'Western Waterfront',
            coords: { lat: -17.532, lng: -149.575 },
            emoji: '🌅',
            description: 'Sunset viewing area west of downtown',
            history: 'Popular sunset spot with views of Moorea island on the horizon.',
            foundingYear: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'west_papeete_easy',
                name: 'Western Shore',
                difficulty: 'easy',
                estimatedTime: '20-25 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Marina Area',
                        coords: { lat: -17.5335, lng: -149.571 },
                        emoji: '⛵',
                        description: 'Yacht marina and sailing club',
                        history: 'Home to sailing yachts that cross the Pacific.',
                        photos: [
                            'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1200&h=800&fit=crop',
                        ],
                        task: 'Look for sailboats',
                        reward: 35,
                        category: 'viewpoint',
                        heading: 270,
                    },
                    {
                        order: 2,
                        name: 'Paofai Gardens Entrance',
                        coords: { lat: -17.533, lng: -149.573 },
                        emoji: '🌸',
                        description: 'Seaside gardens and walking paths',
                        history: 'Public gardens popular for morning walks and exercise.',
                        photos: [
                            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
                        ],
                        task: 'Enter the gardens',
                        reward: 30,
                        category: 'nature',
                        heading: 180,
                    },
                    {
                        order: 3,
                        name: 'Beach Park',
                        coords: { lat: -17.5325, lng: -149.5745 },
                        emoji: '🏖️',
                        description: 'Small public beach with facilities',
                        history: 'Popular family beach with picnic areas and playgrounds.',
                        photos: [
                            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the beach',
                        reward: 40,
                        category: 'nature',
                        heading: 200,
                    },
                    {
                        order: 4,
                        name: 'Moorea Viewpoint',
                        coords: { lat: -17.5318, lng: -149.5755 },
                        emoji: '🏝️',
                        description: 'Clear view of Moorea island',
                        history:
                            "On clear days, Moorea's dramatic peaks are visible across the channel.",
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Spot Moorea island',
                        reward: 45,
                        category: 'viewpoint',
                        heading: 270,
                    },
                    {
                        order: 5,
                        name: 'Coastal Walkway',
                        coords: { lat: -17.5322, lng: -149.5748 },
                        emoji: '🚶',
                        description: 'Pedestrian path along the water',
                        history: 'Popular jogging and walking route with ocean breezes.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk along the promenade',
                        reward: 30,
                        category: 'urban',
                        heading: 90,
                    },
                    {
                        order: 6,
                        name: 'Sunset Point',
                        coords: { lat: -17.532, lng: -149.5752 },
                        emoji: '🌇',
                        description: 'Best sunset viewing location',
                        history: 'Locals gather here to watch the sun set over the Pacific.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Wait for golden hour',
                        reward: 40,
                        category: 'viewpoint',
                        heading: 270,
                    },
                ],
            },
        ],
    },
};

// Export for use in game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ADVENTURE_PATHS_TAHITI;
}
