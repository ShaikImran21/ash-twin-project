/**
 * TAHITI ADVENTURE PATHS
 * Explore the beautiful island of Tahiti through 9 stunning locations
 * Mix of beaches, waterfalls, cultural sites, and natural wonders
 */

const ADVENTURE_PATHS_TAHITI = {
    // 1. Papeete Downtown & Waterfront (HAS STREET VIEW)
    'Papeete Downtown': {
        mainDestination: {
            name: 'Marché de Papeete',
            coords: { lat: -17.535, lng: -149.5696 },
            emoji: '🏪',
            description:
                'The vibrant central market of Tahiti, filled with tropical fruits, flowers, handicrafts, and local food.',
            history:
                'Established in 1847, this iconic market has been the heart of Papeete for over 170 years. It showcases the best of Polynesian culture, from fresh fish and tropical produce to traditional crafts and black pearls.',
            foundingYear: 1847,
            photos: [
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'papeete_market_easy',
                name: 'Waterfront Wanderer',
                difficulty: 'easy',
                estimatedTime: '20-25 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Vaiete Square',
                        coords: { lat: -17.535, lng: -149.567 },
                        emoji: '🌴',
                        description: 'Waterfront plaza with food trucks and ocean views',
                        history:
                            'Popular gathering spot where locals enjoy Polynesian food trucks (roulottes) with fresh seafood and traditional dishes.',
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the food trucks and spot traditional Tahitian dishes',
                        reward: 35,
                        category: 'viewpoint',
                        heading: 90,
                    },
                    {
                        order: 2,
                        name: 'Cathedral Notre-Dame',
                        coords: { lat: -17.5355, lng: -149.5684 },
                        emoji: '⛪',
                        description: 'Historic Catholic cathedral built in 1875',
                        history:
                            'One of the oldest churches in Tahiti, combining European architecture with Polynesian influences.',
                        photos: [
                            'https://images.unsplash.com/photo-1548198831-4f8c6d4c90ad?w=1200&h=800&fit=crop',
                        ],
                        task: 'Observe the architectural blend of cultures',
                        reward: 40,
                        category: 'cultural',
                    },
                    {
                        order: 3,
                        name: 'Bougainville Park',
                        coords: { lat: -17.5358, lng: -149.5692 },
                        emoji: '🌺',
                        description: 'Tropical park with monument to French explorer',
                        history:
                            'Named after Louis Antoine de Bougainville, the French explorer who arrived in Tahiti in 1768.',
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the explorer monument',
                        reward: 30,
                        category: 'landmark',
                    },
                    {
                        order: 4,
                        name: 'Pearl Museum',
                        coords: { lat: -17.5365, lng: -149.5701 },
                        emoji: '📿',
                        description: 'Learn about Tahitian black pearls',
                        history:
                            "Showcases the history and cultivation of French Polynesia's famous black pearls, a symbol of Tahitian luxury.",
                        photos: [
                            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop',
                        ],
                        task: 'Discover how black pearls are formed',
                        reward: 45,
                        category: 'cultural',
                    },
                    {
                        order: 5,
                        name: 'Paofai Gardens',
                        coords: { lat: -17.533, lng: -149.5655 },
                        emoji: '🌸',
                        description: 'Seaside gardens with walking paths',
                        history:
                            'Peaceful waterfront gardens popular for morning walks and sunset views over Moorea island.',
                        photos: [
                            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
                        ],
                        task: 'Spot Moorea island in the distance',
                        reward: 35,
                        category: 'viewpoint',
                    },
                    {
                        order: 6,
                        name: 'Papeete Town Hall',
                        coords: { lat: -17.5348, lng: -149.5688 },
                        emoji: '🏛️',
                        description: 'Colonial-era government building',
                        history:
                            'Built in 1990, replacing an older structure, it represents the administrative center of French Polynesia.',
                        photos: [
                            'https://images.unsplash.com/photo-1548198831-4f8c6d4c90ad?w=1200&h=800&fit=crop',
                        ],
                        task: 'Photograph the architecture',
                        reward: 30,
                        category: 'landmark',
                    },
                ],
            },
        ],
    },

    // 2. Coastal Road West (HAS STREET VIEW)
    'Coastal Road West': {
        mainDestination: {
            name: 'West Coast Viewpoint',
            coords: { lat: -17.55, lng: -149.59 },
            emoji: '🌊',
            description: 'Scenic coastal drive with ocean views and Moorea in distance',
            history:
                'The main coastal road around Tahiti offers stunning views of the Pacific Ocean and neighboring island of Moorea on clear days.',
            foundingYear: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'fautaua_valley_medium',
                name: 'Valley Explorer',
                difficulty: 'medium',
                estimatedTime: '30-35 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Trailhead Entrance',
                        coords: { lat: -17.565, lng: -149.535 },
                        emoji: '🥾',
                        description: 'Start of the scenic valley trail',
                        history:
                            'The trail follows an ancient Polynesian path through the valley, once used by warriors and priests.',
                        photos: [
                            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop',
                        ],
                        task: 'Check trail conditions and permits',
                        reward: 40,
                        category: 'viewpoint',
                    },
                    {
                        order: 2,
                        name: 'Bamboo Forest',
                        coords: { lat: -17.57, lng: -149.53 },
                        emoji: '🎋',
                        description: 'Dense bamboo groves along the path',
                        history:
                            'Bamboo was introduced to Tahiti and now creates mystical forest sections along mountain trails.',
                        photos: [
                            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
                        ],
                        task: 'Listen to bamboo rustling in the wind',
                        reward: 35,
                        category: 'nature',
                    },
                    {
                        order: 3,
                        name: 'Valley Viewpoint',
                        coords: { lat: -17.575, lng: -149.525 },
                        emoji: '🏔️',
                        description: 'Panoramic view of the valley below',
                        history:
                            'Traditional lookout point used by ancient Tahitians to survey their lands.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Take in the mountain scenery',
                        reward: 45,
                        category: 'viewpoint',
                    },
                    {
                        order: 4,
                        name: 'River Crossing',
                        coords: { lat: -17.5775, lng: -149.5225 },
                        emoji: '🌊',
                        description: 'Cross the mountain stream',
                        history:
                            'Crystal-clear mountain water flows from volcanic peaks, creating refreshing pools.',
                        photos: [
                            'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop',
                        ],
                        task: 'Cross safely using stepping stones',
                        reward: 40,
                        category: 'adventure',
                    },
                    {
                        order: 5,
                        name: 'Tropical Flora Section',
                        coords: { lat: -17.5788, lng: -149.521 },
                        emoji: '🌺',
                        description: 'Native plants and flowers',
                        history:
                            'Home to endemic Tahitian species including tiare flowers, the national flower of French Polynesia.',
                        photos: [
                            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
                        ],
                        task: 'Spot native Tahitian flowers',
                        reward: 35,
                        category: 'nature',
                    },
                    {
                        order: 6,
                        name: 'Waterfall Base',
                        coords: { lat: -17.5795, lng: -149.5205 },
                        emoji: '💧',
                        description: 'Pool at the base of the falls',
                        history:
                            "Sacred pool where ancient Tahitians performed rituals and bathed in the waterfall's mist.",
                        photos: [
                            'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=800&fit=crop',
                        ],
                        task: "Feel the waterfall's spray",
                        reward: 50,
                        category: 'nature',
                    },
                ],
            },
        ],
    },

    // 3. Matavai Bay Beach
    'Matavai Bay': {
        mainDestination: {
            name: 'Pointe Venus Beach',
            coords: { lat: -17.495, lng: -149.495 },
            emoji: '🏖️',
            description: 'Historic black sand beach where Captain Cook landed in 1769',
            history:
                'Named after the transit of Venus observed here by Captain Cook in 1769. The black volcanic sand beach features a lighthouse and is significant in both European and Polynesian history.',
            foundingYear: 1769,
            photos: [
                'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'matavai_bay_easy',
                name: 'Historic Coastline',
                difficulty: 'easy',
                estimatedTime: '20-25 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Venus Point Lighthouse',
                        coords: { lat: -17.4945, lng: -149.4945 },
                        emoji: '🗼',
                        description: 'Historic lighthouse overlooking the bay',
                        history:
                            'Built in 1867, this red and white lighthouse marks the spot where European explorers first made significant contact with Tahitians.',
                        photos: [
                            'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the historic plaque',
                        reward: 40,
                        category: 'landmark',
                    },
                    {
                        order: 2,
                        name: 'Black Sand Beach',
                        coords: { lat: -17.496, lng: -149.4955 },
                        emoji: '⚫',
                        description: 'Unique volcanic black sand shoreline',
                        history:
                            "Formed from volcanic lava eroded over centuries, the black sand is characteristic of Tahiti's volcanic origins.",
                        photos: [
                            'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop',
                        ],
                        task: 'Feel the warm black sand',
                        reward: 35,
                        category: 'nature',
                    },
                    {
                        order: 3,
                        name: "Cook's Landing Monument",
                        coords: { lat: -17.4952, lng: -149.4948 },
                        emoji: '⚓',
                        description: "Memorial to Captain Cook's 1769 landing",
                        history:
                            'Captain James Cook arrived here to observe the transit of Venus, marking a pivotal moment in Pacific exploration history.',
                        photos: [
                            'https://images.unsplash.com/photo-1548198831-4f8c6d4c90ad?w=1200&h=800&fit=crop',
                        ],
                        task: 'Read the historical inscription',
                        reward: 45,
                        category: 'cultural',
                    },
                    {
                        order: 4,
                        name: 'Coconut Grove',
                        coords: { lat: -17.497, lng: -149.496 },
                        emoji: '🥥',
                        description: 'Shaded area with coconut palms',
                        history:
                            'Coconut palms have sustained Polynesians for centuries, providing food, drink, oil, and building materials.',
                        photos: [
                            'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200&h=800&fit=crop',
                        ],
                        task: 'Rest under the palm trees',
                        reward: 30,
                        category: 'nature',
                    },
                    {
                        order: 5,
                        name: 'Coral Reef Viewpoint',
                        coords: { lat: -17.4948, lng: -149.494 },
                        emoji: '🐠',
                        description: 'See the barrier reef from shore',
                        history:
                            "Tahiti's coral reefs protect the coastline and support incredible marine biodiversity.",
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Spot colorful fish in the shallows',
                        reward: 40,
                        category: 'viewpoint',
                    },
                    {
                        order: 6,
                        name: 'Picnic Area',
                        coords: { lat: -17.4965, lng: -149.495 },
                        emoji: '🍴',
                        description: 'Beachside picnic tables and facilities',
                        history:
                            'Popular spot for Sunday family gatherings featuring traditional Tahitian feasts.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Enjoy the beach atmosphere',
                        reward: 30,
                        category: 'cultural',
                    },
                ],
            },
        ],
    },

    // 4. Arahoho Blowhole
    'Arahoho Blowhole': {
        mainDestination: {
            name: 'Arahoho Blowhole',
            coords: { lat: -17.5833, lng: -149.3333 },
            emoji: '🌊',
            description: 'Natural sea geyser shooting water high into the air',
            history:
                'This natural phenomenon occurs when ocean waves crash into lava tubes beneath the rocky coast, creating spectacular water jets up to 20 meters high.',
            foundingYear: null,
            photos: [
                'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'arahoho_coastal_easy',
                name: 'Coastal Discovery',
                difficulty: 'easy',
                estimatedTime: '20-25 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Coastal Viewpoint',
                        coords: { lat: -17.582, lng: -149.334 },
                        emoji: '👁️',
                        description: 'Overlook the dramatic coastline',
                        history:
                            'Ancient Tahitians used these cliffs to watch for incoming canoes and monitor ocean conditions.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Watch for the blowhole spray',
                        reward: 35,
                        category: 'viewpoint',
                    },
                    {
                        order: 2,
                        name: 'Lava Rock Formation',
                        coords: { lat: -17.5828, lng: -149.3335 },
                        emoji: '🪨',
                        description: 'Volcanic rock shaped by the sea',
                        history:
                            'These basalt formations are remnants of ancient lava flows that met the ocean millions of years ago.',
                        photos: [
                            'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop',
                        ],
                        task: 'Explore the volcanic rocks safely',
                        reward: 40,
                        category: 'nature',
                    },
                    {
                        order: 3,
                        name: 'Tide Pool Area',
                        coords: { lat: -17.583, lng: -149.333 },
                        emoji: '🦀',
                        description: 'Natural pools with marine life',
                        history:
                            "Tide pools harbor small fish, crabs, and sea urchins, providing a glimpse into Tahiti's marine ecosystem.",
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Spot creatures in the tide pools',
                        reward: 40,
                        category: 'nature',
                    },
                    {
                        order: 4,
                        name: 'Wave Watching Platform',
                        coords: { lat: -17.5832, lng: -149.3332 },
                        emoji: '🌊',
                        description: 'Best spot to see the blowhole',
                        history:
                            'When swells are large, the blowhole can shoot water 20+ meters into the air with a thunderous roar.',
                        photos: [
                            'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop',
                        ],
                        task: 'Time the blowhole eruptions',
                        reward: 50,
                        category: 'viewpoint',
                    },
                    {
                        order: 5,
                        name: 'Coastal Flora',
                        coords: { lat: -17.5825, lng: -149.3338 },
                        emoji: '🌿',
                        description: 'Salt-resistant coastal plants',
                        history:
                            "Hardy plants adapted to survive salt spray and strong winds along Tahiti's rugged coast.",
                        photos: [
                            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
                        ],
                        task: 'Identify coastal vegetation',
                        reward: 30,
                        category: 'nature',
                    },
                    {
                        order: 6,
                        name: 'Beach Access Point',
                        coords: { lat: -17.5835, lng: -149.3328 },
                        emoji: '🏖️',
                        description: 'Small beach near the blowhole',
                        history:
                            'A secluded spot where locals come to fish and enjoy the dramatic coastal scenery.',
                        photos: [
                            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
                        ],
                        task: 'Relax by the waves',
                        reward: 35,
                        category: 'viewpoint',
                    },
                ],
            },
        ],
    },

    // 5. Museum of Tahiti and the Islands
    'Museum of Tahiti': {
        mainDestination: {
            name: 'Museum of Tahiti and the Islands',
            coords: { lat: -17.58, lng: -149.61 },
            emoji: '🏛️',
            description: 'Premier museum showcasing Polynesian culture and history',
            history:
                'Opened in 1974, this museum preserves and presents the rich cultural heritage of French Polynesia through artifacts, traditional crafts, and historical exhibits.',
            foundingYear: 1974,
            photos: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'museum_cultural_medium',
                name: 'Cultural Journey',
                difficulty: 'medium',
                estimatedTime: '25-30 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Museum Entrance',
                        coords: { lat: -17.5795, lng: -149.6095 },
                        emoji: '🚪',
                        description: 'Gateway to Polynesian heritage',
                        history:
                            'The museum building itself reflects traditional Polynesian architecture blended with modern design.',
                        photos: [
                            'https://images.unsplash.com/photo-1548198831-4f8c6d4c90ad?w=1200&h=800&fit=crop',
                        ],
                        task: 'Begin your cultural exploration',
                        reward: 35,
                        category: 'cultural',
                    },
                    {
                        order: 2,
                        name: 'Polynesian Navigation Exhibit',
                        coords: { lat: -17.5798, lng: -149.6098 },
                        emoji: '⛵',
                        description: 'Learn about ancient seafaring',
                        history:
                            'Polynesians were master navigators who sailed thousands of miles using stars, waves, and birds to guide them across the Pacific.',
                        photos: [
                            'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200&h=800&fit=crop',
                        ],
                        task: 'Discover navigation techniques',
                        reward: 45,
                        category: 'cultural',
                    },
                    {
                        order: 3,
                        name: 'Traditional Arts Gallery',
                        coords: { lat: -17.58, lng: -149.61 },
                        emoji: '🎨',
                        description: 'Tapa cloth, carvings, and crafts',
                        history:
                            'Traditional Polynesian arts include intricate wood carvings, woven pandanus mats, and decorated tapa bark cloth.',
                        photos: [
                            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop',
                        ],
                        task: 'Admire traditional craftsmanship',
                        reward: 40,
                        category: 'cultural',
                    },
                    {
                        order: 4,
                        name: 'Archaeological Collection',
                        coords: { lat: -17.5802, lng: -149.6102 },
                        emoji: '🗿',
                        description: 'Ancient Polynesian artifacts',
                        history:
                            "Tools, weapons, and ceremonial objects from Tahiti's pre-European contact period, dating back over 1,000 years.",
                        photos: [
                            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
                        ],
                        task: 'Study ancient artifacts',
                        reward: 45,
                        category: 'cultural',
                    },
                    {
                        order: 5,
                        name: 'Natural History Section',
                        coords: { lat: -17.5804, lng: -149.6104 },
                        emoji: '🐚',
                        description: 'Flora and fauna of French Polynesia',
                        history:
                            "Exhibits on Tahiti's unique ecosystem, including endemic species found nowhere else on Earth.",
                        photos: [
                            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
                        ],
                        task: 'Learn about island biodiversity',
                        reward: 35,
                        category: 'nature',
                    },
                    {
                        order: 6,
                        name: 'Outdoor Gardens',
                        coords: { lat: -17.5806, lng: -149.6106 },
                        emoji: '🌺',
                        description: 'Native plants and tikis',
                        history:
                            'Traditional tiki statues stand among native plants, creating a peaceful garden that connects visitors to Polynesian spirituality.',
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Explore the garden path',
                        reward: 35,
                        category: 'cultural',
                    },
                ],
            },
        ],
    },

    // 6. Teahupo'o Beach (Famous Surfing Spot)
    "Teahupo'o": {
        mainDestination: {
            name: "Teahupo'o Wave",
            coords: { lat: -17.85, lng: -149.27 },
            emoji: '🏄',
            description: 'World-renowned surf break with massive waves',
            history:
                "Known as the 'heaviest wave' in the world, Teahupo'o hosts international surf competitions. The wave breaks over a shallow reef, creating thick, powerful barrels that attract the world's best surfers.",
            foundingYear: null,
            photos: [
                'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'teahupoo_beach_hard',
                name: "Surfer's Paradise",
                difficulty: 'hard',
                estimatedTime: '30-35 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Village Center',
                        coords: { lat: -17.848, lng: -149.272 },
                        emoji: '🏘️',
                        description: 'Small Tahitian village',
                        history:
                            "The quiet village of Teahupo'o comes alive during surf competitions when surfers from around the world gather.",
                        photos: [
                            'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=800&fit=crop',
                        ],
                        task: 'Experience village life',
                        reward: 35,
                        category: 'cultural',
                    },
                    {
                        order: 2,
                        name: 'Boat Launch Area',
                        coords: { lat: -17.849, lng: -149.271 },
                        emoji: '🚤',
                        description: 'Access point to the wave',
                        history:
                            'Local boats ferry surfers and photographers out to the reef break where the famous wave forms.',
                        photos: [
                            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
                        ],
                        task: 'Watch boats head to the break',
                        reward: 40,
                        category: 'viewpoint',
                    },
                    {
                        order: 3,
                        name: 'Reef Viewpoint',
                        coords: { lat: -17.8495, lng: -149.2705 },
                        emoji: '🪸',
                        description: 'See the shallow reef',
                        history:
                            "The wave breaks over a razor-sharp coral reef just inches below the surface, making it one of the world's most dangerous waves.",
                        photos: [
                            'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop',
                        ],
                        task: 'Observe the reef from shore',
                        reward: 45,
                        category: 'viewpoint',
                    },
                    {
                        order: 4,
                        name: "Photographer's Point",
                        coords: { lat: -17.8498, lng: -149.2702 },
                        emoji: '📸',
                        description: 'Best land-based wave viewing',
                        history:
                            'Photographers capture iconic images of surfers inside massive barrels from this vantage point.',
                        photos: [
                            'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=800&fit=crop',
                        ],
                        task: 'Watch for big wave sets',
                        reward: 50,
                        category: 'viewpoint',
                    },
                    {
                        order: 5,
                        name: 'Beach Picnic Area',
                        coords: { lat: -17.8488, lng: -149.2715 },
                        emoji: '🥥',
                        description: 'Relax on black sand beach',
                        history:
                            'Local families gather here for Sunday picnics, enjoying traditional foods while watching the ocean.',
                        photos: [
                            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
                        ],
                        task: 'Enjoy the beach atmosphere',
                        reward: 35,
                        category: 'cultural',
                    },
                    {
                        order: 6,
                        name: 'Lagoon Entry',
                        coords: { lat: -17.8485, lng: -149.2708 },
                        emoji: '🤿',
                        description: 'Calm waters for swimming',
                        history:
                            'Inside the reef, the lagoon offers safe, clear waters for snorkeling and swimming, contrasting with the powerful waves outside.',
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Wade in the calm lagoon',
                        reward: 40,
                        category: 'nature',
                    },
                ],
            },
        ],
    },

    // 7. Papenoo Valley
    'Papenoo Valley': {
        mainDestination: {
            name: 'Papenoo Valley Viewpoint',
            coords: { lat: -17.55, lng: -149.42 },
            emoji: '🏔️',
            description: 'Lush valley with waterfalls and mountain peaks',
            history:
                "Tahiti's largest and deepest valley, carved by ancient rivers and home to numerous waterfalls. Sacred to ancient Tahitians, the valley leads into the heart of the island's volcanic interior.",
            foundingYear: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'papenoo_valley_hard',
                name: 'Mountain Valley Trek',
                difficulty: 'hard',
                estimatedTime: '35-40 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Valley Entrance',
                        coords: { lat: -17.54, lng: -149.43 },
                        emoji: '🚗',
                        description: 'Start of the inland route',
                        history:
                            "The road into Papenoo Valley is one of the few routes crossing Tahiti's mountainous interior.",
                        photos: [
                            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop',
                        ],
                        task: 'Begin the valley journey',
                        reward: 35,
                        category: 'viewpoint',
                    },
                    {
                        order: 2,
                        name: 'Topatari Waterfall',
                        coords: { lat: -17.545, lng: -149.425 },
                        emoji: '💦',
                        description: 'Multi-tiered cascade',
                        history:
                            'One of several waterfalls in the valley, Topatari flows year-round from mountain springs.',
                        photos: [
                            'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=800&fit=crop',
                        ],
                        task: 'Feel the waterfall mist',
                        reward: 45,
                        category: 'nature',
                    },
                    {
                        order: 3,
                        name: 'Ancient Marae Site',
                        coords: { lat: -17.548, lng: -149.422 },
                        emoji: '🗿',
                        description: 'Sacred Polynesian temple ruins',
                        history:
                            'Stone platforms where ancient Tahitians performed religious ceremonies and honored their gods.',
                        photos: [
                            'https://images.unsplash.com/photo-1548198831-4f8c6d4c90ad?w=1200&h=800&fit=crop',
                        ],
                        task: 'Respect the sacred site',
                        reward: 50,
                        category: 'cultural',
                    },
                    {
                        order: 4,
                        name: 'Mountain Stream',
                        coords: { lat: -17.549, lng: -149.421 },
                        emoji: '🌊',
                        description: 'Crystal clear mountain water',
                        history:
                            "The Papenoo River provides fresh water to Papeete and supports the valley's lush ecosystem.",
                        photos: [
                            'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop',
                        ],
                        task: 'Listen to flowing water',
                        reward: 35,
                        category: 'nature',
                    },
                    {
                        order: 5,
                        name: 'Rainforest Trail',
                        coords: { lat: -17.5495, lng: -149.4205 },
                        emoji: '🌿',
                        description: 'Dense tropical vegetation',
                        history:
                            "Ancient trees and endemic plants thrive in the valley's moist microclimate.",
                        photos: [
                            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
                        ],
                        task: 'Identify tropical plants',
                        reward: 40,
                        category: 'nature',
                    },
                    {
                        order: 6,
                        name: 'Summit Overlook',
                        coords: { lat: -17.5498, lng: -149.4202 },
                        emoji: '🏔️',
                        description: 'Panoramic valley view',
                        history:
                            "From this elevation, see both coasts of Tahiti and understand the island's volcanic formation.",
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Take in the mountain vista',
                        reward: 55,
                        category: 'viewpoint',
                    },
                ],
            },
        ],
    },

    // 8. Taravao Peninsula
    'Taravao Peninsula': {
        mainDestination: {
            name: 'Taravao Plateau',
            coords: { lat: -17.75, lng: -149.28 },
            emoji: '⛰️',
            description: "Dramatic cliffs and isthmus connecting Tahiti's two peninsulas",
            history:
                'The narrow isthmus of Taravao connects Tahiti Nui (big Tahiti) with Tahiti Iti (small Tahiti). Strategic viewpoint offering 360-degree ocean views.',
            foundingYear: null,
            photos: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'taravao_coastal_medium',
                name: 'Isthmus Explorer',
                difficulty: 'medium',
                estimatedTime: '25-30 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Taravao Town',
                        coords: { lat: -17.745, lng: -149.285 },
                        emoji: '🏘️',
                        description: 'Small town on the isthmus',
                        history:
                            "Gateway between Tahiti's two peninsulas, Taravao serves as a hub for the southeastern region.",
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Explore the local town',
                        reward: 35,
                        category: 'cultural',
                    },
                    {
                        order: 2,
                        name: 'Taravao Fort Ruins',
                        coords: { lat: -17.748, lng: -149.282 },
                        emoji: '🏰',
                        description: '19th century military fortification',
                        history:
                            'Built by the French in the 1840s to control access between the peninsulas during colonial conflicts.',
                        photos: [
                            'https://images.unsplash.com/photo-1548198831-4f8c6d4c90ad?w=1200&h=800&fit=crop',
                        ],
                        task: 'Examine the old fort',
                        reward: 45,
                        category: 'cultural',
                    },
                    {
                        order: 3,
                        name: 'Plateau Overlook',
                        coords: { lat: -17.7495, lng: -149.2805 },
                        emoji: '👁️',
                        description: 'See both sides of the island',
                        history:
                            'Rare vantage point where you can see the Pacific Ocean on both sides of Tahiti simultaneously.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Spot both coasts',
                        reward: 50,
                        category: 'viewpoint',
                    },
                    {
                        order: 4,
                        name: 'Cliff Walk Path',
                        coords: { lat: -17.7498, lng: -149.2802 },
                        emoji: '🥾',
                        description: 'Hiking trail along dramatic cliffs',
                        history:
                            'Ancient footpath used by Tahitians traveling between the peninsulas before modern roads.',
                        photos: [
                            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk the cliff edge safely',
                        reward: 40,
                        category: 'adventure',
                    },
                    {
                        order: 5,
                        name: 'Seabird Nesting Area',
                        coords: { lat: -17.7502, lng: -149.2798 },
                        emoji: '🐦',
                        description: 'Cliffside bird sanctuary',
                        history:
                            'Frigatebirds and tropicbirds nest on these dramatic cliffs overlooking the ocean.',
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Observe seabirds',
                        reward: 40,
                        category: 'nature',
                    },
                    {
                        order: 6,
                        name: 'Sunset Point',
                        coords: { lat: -17.7505, lng: -149.2795 },
                        emoji: '🌅',
                        description: 'Perfect sunset viewing spot',
                        history:
                            'Locals gather here to watch the sun set over Moorea and the western horizon.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Wait for golden hour',
                        reward: 45,
                        category: 'viewpoint',
                    },
                ],
            },
        ],
    },

    // 9. Punaauia Beach
    Punaauia: {
        mainDestination: {
            name: 'Punaauia Beach',
            coords: { lat: -17.63, lng: -149.6 },
            emoji: '🏝️',
            description: 'Pristine white sand beach with turquoise lagoon',
            history:
                "One of Tahiti's most beautiful beaches, Punaauia offers calm lagoon waters perfect for swimming and snorkeling. The area is known for its luxury resorts and stunning views of Moorea.",
            foundingYear: null,
            photos: [
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'punaauia_beach_easy',
                name: 'Lagoon Paradise',
                difficulty: 'easy',
                estimatedTime: '20-25 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Beach Access',
                        coords: { lat: -17.628, lng: -149.602 },
                        emoji: '🚶',
                        description: 'Public beach entrance',
                        history:
                            'Popular beach access point where families gather on weekends for picnics and swimming.',
                        photos: [
                            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the perfect beach spot',
                        reward: 30,
                        category: 'viewpoint',
                    },
                    {
                        order: 2,
                        name: 'Coral Garden',
                        coords: { lat: -17.629, lng: -149.601 },
                        emoji: '🪸',
                        description: 'Shallow coral reef for snorkeling',
                        history:
                            'Healthy coral reef ecosystem just meters from shore, home to tropical fish and sea turtles.',
                        photos: [
                            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
                        ],
                        task: 'Snorkel the coral garden',
                        reward: 45,
                        category: 'nature',
                    },
                    {
                        order: 3,
                        name: 'Moorea Viewpoint',
                        coords: { lat: -17.6295, lng: -149.6005 },
                        emoji: '🏝️',
                        description: 'Perfect view of sister island',
                        history:
                            'From Punaauia, Moorea appears close enough to touch, its dramatic peaks rising from the sea.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Photograph Moorea',
                        reward: 40,
                        category: 'viewpoint',
                    },
                    {
                        order: 4,
                        name: 'Palm Grove',
                        coords: { lat: -17.6298, lng: -149.6002 },
                        emoji: '🌴',
                        description: 'Shaded coconut palm area',
                        history:
                            'Traditional beach setting where locals relax under swaying palms listening to ukulele music.',
                        photos: [
                            'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200&h=800&fit=crop',
                        ],
                        task: 'Relax in the shade',
                        reward: 30,
                        category: 'cultural',
                    },
                    {
                        order: 5,
                        name: 'Lagoon Swimming Area',
                        coords: { lat: -17.6302, lng: -149.5998 },
                        emoji: '🏊',
                        description: 'Safe, shallow waters',
                        history:
                            'Protected by the barrier reef, the lagoon offers calm, warm waters ideal for families.',
                        photos: [
                            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
                        ],
                        task: 'Take a refreshing swim',
                        reward: 40,
                        category: 'nature',
                    },
                    {
                        order: 6,
                        name: 'Sunset Pier',
                        coords: { lat: -17.6305, lng: -149.5995 },
                        emoji: '🌇',
                        description: 'Traditional wooden pier',
                        history:
                            'Local fishing pier that becomes a prime sunset viewing platform in the evening.',
                        photos: [
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk to the pier end',
                        reward: 35,
                        category: 'viewpoint',
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
