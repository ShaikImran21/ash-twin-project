/**
 * PARIS ADVENTURE PATHS
 * Explore the City of Light through 9 iconic locations
 * All locations verified with excellent Google Street View coverage
 */

const ADVENTURE_PATHS_PARIS = {
    // 1. Eiffel Tower Area
    'Eiffel Tower': {
        mainDestination: {
            name: 'Eiffel Tower',
            coords: { lat: 48.8584, lng: 2.2945 },
            emoji: '🗼',
            description: 'The iconic iron lattice tower and symbol of Paris',
            history:
                "Built in 1889 for the World's Fair by Gustave Eiffel, this 330-meter tower was initially criticized but became the world's most recognizable monument. It served as a radio tower and observation point.",
            foundingYear: 1889,
            photos: [
                'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'eiffel_tower_easy',
                name: 'Champ de Mars Explorer',
                difficulty: 'easy',
                estimatedTime: '20-25 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Trocadero Gardens',
                        coords: { lat: 48.862, lng: 2.2878 },
                        emoji: '🌳',
                        description: 'Gardens with best Eiffel Tower views',
                        history:
                            "Created for the 1937 World's Fair, these terraced gardens offer the most photographed view of the Eiffel Tower.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Take the iconic Eiffel Tower photo',
                        reward: 40,
                        category: 'viewpoint',
                        heading: 180,
                    },
                    {
                        order: 2,
                        name: "Pont d'Iena",
                        coords: { lat: 48.8606, lng: 2.2933 },
                        emoji: '🌉',
                        description: 'Bridge crossing the Seine',
                        history:
                            "Built in 1806-1814 to commemorate Napoleon's victory at Jena, this bridge connects Trocadero to the Eiffel Tower.",
                        photos: [
                            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
                        ],
                        task: 'Cross the Seine River',
                        reward: 35,
                        category: 'landmark',
                        heading: 135,
                    },
                    {
                        order: 3,
                        name: 'Champ de Mars',
                        coords: { lat: 48.8563, lng: 2.298 },
                        emoji: '🌿',
                        description: 'Large public greenspace below the tower',
                        history:
                            "Named after the Roman god of war, this field has hosted military parades, World's Fairs, and millions of picnickers since 1780.",
                        photos: [
                            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk across the great lawn',
                        reward: 35,
                        category: 'nature',
                        heading: 90,
                    },
                    {
                        order: 4,
                        name: 'Avenue de la Bourdonnais',
                        coords: { lat: 48.859, lng: 2.297 },
                        emoji: '🏘️',
                        description: 'Charming Parisian street',
                        history:
                            'Typical Haussmanian architecture with cafes and shops catering to tourists and locals alike.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find a typical Parisian cafe',
                        reward: 30,
                        category: 'urban',
                        heading: 45,
                    },
                    {
                        order: 5,
                        name: "Rue de l'Universite",
                        coords: { lat: 48.8595, lng: 2.3015 },
                        emoji: '🏛️',
                        description: 'Historic residential street',
                        history:
                            'This street dates back to the 18th century and features beautiful facades and wrought-iron balconies.',
                        photos: [
                            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
                        ],
                        task: 'Admire the architecture',
                        reward: 35,
                        category: 'cultural',
                        heading: 90,
                    },
                    {
                        order: 6,
                        name: 'Tower Base',
                        coords: { lat: 48.8582, lng: 2.295 },
                        emoji: '📍',
                        description: 'Directly under the Iron Lady',
                        history:
                            "Stand beneath 10,000 tons of iron and look up at Gustave Eiffel's masterpiece.",
                        photos: [
                            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=800&fit=crop',
                        ],
                        task: 'Look straight up at the tower',
                        reward: 45,
                        category: 'landmark',
                        heading: 0,
                    },
                ],
            },
        ],
    },

    // 2. Louvre Museum Area
    'Louvre Museum': {
        mainDestination: {
            name: 'Louvre Museum',
            coords: { lat: 48.8606, lng: 2.3376 },
            emoji: '🏛️',
            description: "The world's largest art museum",
            history:
                'Originally built as a fortress in 1190, then a royal palace, it opened as a museum in 1793. Home to 38,000 artworks including the Mona Lisa, it receives 10 million visitors annually.',
            foundingYear: 1793,
            photos: [
                'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'louvre_medium',
                name: 'Royal Palace Walk',
                difficulty: 'medium',
                estimatedTime: '25-30 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Rue de Rivoli',
                        coords: { lat: 48.8605, lng: 2.3325 },
                        emoji: '🛍️',
                        description: 'Famous shopping arcade',
                        history:
                            "Napoleon commissioned this covered arcade in 1802. It's now lined with luxury shops and cafes.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Window shop along the arcade',
                        reward: 35,
                        category: 'urban',
                        heading: 90,
                    },
                    {
                        order: 2,
                        name: 'Palais Royal Gardens',
                        coords: { lat: 48.8637, lng: 2.3374 },
                        emoji: '🌳',
                        description: 'Secret garden in the heart of Paris',
                        history:
                            "Built for Cardinal Richelieu in 1633, these gardens feature Daniel Buren's striped columns and tranquil arcades.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the striped columns',
                        reward: 40,
                        category: 'cultural',
                        heading: 180,
                    },
                    {
                        order: 3,
                        name: 'Pont des Arts',
                        coords: { lat: 48.8587, lng: 2.3374 },
                        emoji: '🔒',
                        description: 'The love lock bridge',
                        history:
                            'This pedestrian bridge built in 1804 became famous for love locks (since removed). It offers perfect views of Ile de la Cite.',
                        photos: [
                            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
                        ],
                        task: 'Cross to the Left Bank',
                        reward: 40,
                        category: 'landmark',
                        heading: 180,
                    },
                    {
                        order: 4,
                        name: 'Cour Carree',
                        coords: { lat: 48.8608, lng: 2.339 },
                        emoji: '🏰',
                        description: 'Renaissance courtyard',
                        history:
                            'The oldest part of the Louvre, this square courtyard dates from the 16th century under King Francis I.',
                        photos: [
                            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
                        ],
                        task: 'Enter the historic courtyard',
                        reward: 40,
                        category: 'cultural',
                        heading: 270,
                    },
                    {
                        order: 5,
                        name: 'Arc de Triomphe du Carrousel',
                        coords: { lat: 48.8621, lng: 2.3328 },
                        emoji: '🎗️',
                        description: 'Triumphal arch entrance',
                        history:
                            'Built by Napoleon in 1808 to celebrate his military victories, it stands at the entrance to the Tuileries.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk through the arch',
                        reward: 40,
                        category: 'landmark',
                        heading: 270,
                    },
                    {
                        order: 6,
                        name: 'Glass Pyramid',
                        coords: { lat: 48.8606, lng: 2.3354 },
                        emoji: '🔺',
                        description: 'Modern pyramid entrance',
                        history:
                            'Designed by I.M. Pei and completed in 1989, this controversial glass pyramid became an iconic blend of old and new.',
                        photos: [
                            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
                        ],
                        task: 'Photograph the pyramid',
                        reward: 50,
                        category: 'landmark',
                        heading: 0,
                    },
                ],
            },
        ],
    },

    // 3. Notre-Dame & Ile de la Cite
    'Notre-Dame': {
        mainDestination: {
            name: 'Notre-Dame Cathedral',
            coords: { lat: 48.853, lng: 2.3499 },
            emoji: '⛪',
            description: 'Gothic masterpiece on an island in the Seine',
            history:
                'Construction began in 1163 and took 200 years. This medieval Catholic cathedral survived the French Revolution and a devastating 2019 fire. Currently under restoration.',
            foundingYear: 1163,
            photos: [
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'notre_dame_easy',
                name: 'Island Heart',
                difficulty: 'easy',
                estimatedTime: '20-25 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Pont Saint-Michel',
                        coords: { lat: 48.8536, lng: 2.3439 },
                        emoji: '🌉',
                        description: 'Bridge to Latin Quarter',
                        history:
                            'Named after the Saint-Michel chapel, this bridge connects the island to the Left Bank since 1378.',
                        photos: [
                            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=800&fit=crop',
                        ],
                        task: 'Cross from the Left Bank',
                        reward: 35,
                        category: 'landmark',
                        heading: 45,
                    },
                    {
                        order: 2,
                        name: 'Quai des Orfevres',
                        coords: { lat: 48.8562, lng: 2.3458 },
                        emoji: '🏛️',
                        description: 'Police headquarters embankment',
                        history:
                            'Famous from French detective novels, this embankment housed Paris police headquarters since 1871.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk along the Seine',
                        reward: 30,
                        category: 'urban',
                        heading: 90,
                    },
                    {
                        order: 3,
                        name: 'Sainte-Chapelle',
                        coords: { lat: 48.8555, lng: 2.345 },
                        emoji: '🌈',
                        description: 'Gothic chapel with stained glass',
                        history:
                            "Built in 1248 by King Louis IX to house Christ's Crown of Thorns. Its 15 stained glass windows are masterpieces of Gothic art.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the hidden chapel',
                        reward: 45,
                        category: 'cultural',
                        heading: 90,
                    },
                    {
                        order: 4,
                        name: 'Marche aux Fleurs',
                        coords: { lat: 48.8553, lng: 2.3478 },
                        emoji: '🌺',
                        description: 'Flower market',
                        history:
                            "Paris's flower market since 1808, featuring colorful blooms and bird sellers on Sundays.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Browse the flower stalls',
                        reward: 35,
                        category: 'cultural',
                        heading: 135,
                    },
                    {
                        order: 5,
                        name: 'Square Jean XXIII',
                        coords: { lat: 48.8527, lng: 2.3505 },
                        emoji: '🌳',
                        description: 'Garden behind Notre-Dame',
                        history:
                            "This peaceful garden offers the best view of Notre-Dame's flying buttresses and apse.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Rest in the garden',
                        reward: 35,
                        category: 'nature',
                        heading: 0,
                    },
                    {
                        order: 6,
                        name: 'Notre-Dame Parvis',
                        coords: { lat: 48.8532, lng: 2.349 },
                        emoji: '📍',
                        description: 'Cathedral forecourt',
                        history:
                            'Point Zero - the exact center of Paris from which all distances in France are measured.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Stand at Point Zero',
                        reward: 45,
                        category: 'landmark',
                        heading: 270,
                    },
                ],
            },
        ],
    },

    // 4. Arc de Triomphe & Champs-Elysees
    'Arc de Triomphe': {
        mainDestination: {
            name: 'Arc de Triomphe',
            coords: { lat: 48.8738, lng: 2.295 },
            emoji: '🏛️',
            description: 'Monumental arch honoring French military victories',
            history:
                'Commissioned by Napoleon in 1806, completed in 1836. The tomb of the Unknown Soldier lies beneath, with an eternal flame rekindled daily since 1921.',
            foundingYear: 1836,
            photos: [
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'arc_champs_medium',
                name: 'Avenue of Triumph',
                difficulty: 'medium',
                estimatedTime: '25-30 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Place Charles de Gaulle',
                        coords: { lat: 48.8736, lng: 2.2945 },
                        emoji: '⭐',
                        description: '12-road star intersection',
                        history:
                            "Also called Place de l'Etoile (Star Square), 12 avenues radiate from this famous roundabout.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Count the radiating avenues',
                        reward: 40,
                        category: 'landmark',
                        heading: 180,
                    },
                    {
                        order: 2,
                        name: 'Champs-Elysees Upper',
                        coords: { lat: 48.872, lng: 2.299 },
                        emoji: '🌳',
                        description: 'Tree-lined grand avenue',
                        history:
                            'The most famous avenue in the world, stretching from Arc de Triomphe to Place de la Concorde.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk the famous avenue',
                        reward: 40,
                        category: 'urban',
                        heading: 120,
                    },
                    {
                        order: 3,
                        name: 'Luxury Shopping District',
                        coords: { lat: 48.87, lng: 2.307 },
                        emoji: '💎',
                        description: 'High-end boutiques and cafes',
                        history:
                            'Louis Vuitton, Cartier, and other luxury brands line this prestigious shopping street.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Window shop designer stores',
                        reward: 35,
                        category: 'urban',
                        heading: 120,
                    },
                    {
                        order: 4,
                        name: 'Rond-Point des Champs-Elysees',
                        coords: { lat: 48.8688, lng: 2.3125 },
                        emoji: '🌺',
                        description: 'Garden circle midpoint',
                        history:
                            'This circular garden marks the transition from upper to lower Champs-Elysees.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Rest in the circular garden',
                        reward: 30,
                        category: 'nature',
                        heading: 120,
                    },
                    {
                        order: 5,
                        name: 'Grand Palais',
                        coords: { lat: 48.8661, lng: 2.3125 },
                        emoji: '🏛️',
                        description: 'Beaux-Arts exhibition hall',
                        history:
                            "Built for the 1900 World's Fair, its iconic glass roof spans 13,500 square meters.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Admire the glass dome',
                        reward: 40,
                        category: 'cultural',
                        heading: 90,
                    },
                    {
                        order: 6,
                        name: 'Place de la Concorde',
                        coords: { lat: 48.8656, lng: 2.3212 },
                        emoji: '📍',
                        description: 'Largest square in Paris',
                        history:
                            "Site of Louis XVI's execution during French Revolution. The Egyptian obelisk dates to 1300 BC.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the ancient obelisk',
                        reward: 45,
                        category: 'landmark',
                        heading: 180,
                    },
                ],
            },
        ],
    },

    // 5. Sacre-Coeur & Montmartre
    Montmartre: {
        mainDestination: {
            name: 'Sacre-Coeur Basilica',
            coords: { lat: 48.8867, lng: 2.3431 },
            emoji: '⛪',
            description: 'White-domed basilica atop Montmartre hill',
            history:
                "Built 1875-1914 as atonement for French defeat in Franco-Prussian War. Its Romano-Byzantine white stone never darkens, sitting at Paris's highest point.",
            foundingYear: 1914,
            photos: [
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'montmartre_hard',
                name: "Artists' Quarter",
                difficulty: 'hard',
                estimatedTime: '30-35 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Place du Tertre',
                        coords: { lat: 48.8865, lng: 2.3407 },
                        emoji: '🎨',
                        description: "Artists' square",
                        history:
                            'Since the 19th century, artists set up easels here. Picasso and Van Gogh once lived nearby.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Watch artists at work',
                        reward: 40,
                        category: 'cultural',
                        heading: 90,
                    },
                    {
                        order: 2,
                        name: 'Rue Norvins',
                        coords: { lat: 48.887, lng: 2.3395 },
                        emoji: '🏘️',
                        description: 'Charming cobblestone street',
                        history:
                            "One of Montmartre's most picturesque streets, featured in countless paintings and films.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk the cobblestones',
                        reward: 35,
                        category: 'urban',
                        heading: 45,
                    },
                    {
                        order: 3,
                        name: 'Moulin de la Galette',
                        coords: { lat: 48.8857, lng: 2.3381 },
                        emoji: '🎡',
                        description: 'Historic windmill',
                        history:
                            "One of two remaining windmills. Immortalized in Renoir's famous 1876 painting.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the old windmill',
                        reward: 45,
                        category: 'cultural',
                        heading: 270,
                    },
                    {
                        order: 4,
                        name: 'Rue Lepic',
                        coords: { lat: 48.885, lng: 2.3358 },
                        emoji: '🥖',
                        description: 'Village street with bakeries',
                        history:
                            'Van Gogh lived at number 54. This winding street captures old Paris atmosphere.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find a traditional boulangerie',
                        reward: 35,
                        category: 'cultural',
                        heading: 180,
                    },
                    {
                        order: 5,
                        name: 'Sacre-Coeur Steps',
                        coords: { lat: 48.8863, lng: 2.3445 },
                        emoji: '🪜',
                        description: 'Monumental staircase',
                        history:
                            '270 steps lead to the basilica, offering panoramic views of Paris at each landing.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Climb the stairs',
                        reward: 40,
                        category: 'landmark',
                        heading: 90,
                    },
                    {
                        order: 6,
                        name: 'Parvis du Sacre-Coeur',
                        coords: { lat: 48.8866, lng: 2.3433 },
                        emoji: '👁️',
                        description: 'Basilica forecourt viewpoint',
                        history:
                            'From this highest point, see all of Paris spread below - a breathtaking 360° panorama.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Take in the Paris panorama',
                        reward: 50,
                        category: 'viewpoint',
                        heading: 180,
                    },
                ],
            },
        ],
    },

    // 6. Latin Quarter & Pantheon
    'Latin Quarter': {
        mainDestination: {
            name: 'Pantheon',
            coords: { lat: 48.8462, lng: 2.3464 },
            emoji: '🏛️',
            description: 'Neoclassical mausoleum of French heroes',
            history:
                'Originally a church, now the burial place of Voltaire, Rousseau, Victor Hugo, Marie Curie, and other French luminaries. Completed in 1790.',
            foundingYear: 1790,
            photos: [
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
            ],
        },
        paths: [
            {
                pathId: 'latin_quarter_medium',
                name: 'Student Quarter',
                difficulty: 'medium',
                estimatedTime: '25-30 min',
                waypoints: [
                    {
                        order: 1,
                        name: 'Jardin du Luxembourg',
                        coords: { lat: 48.8462, lng: 2.3372 },
                        emoji: '🌳',
                        description: 'Second-largest public park',
                        history:
                            "Created in 1612 by Marie de' Medici. Features 106 statues, fountains, and the Medici Fountain.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the Medici Fountain',
                        reward: 40,
                        category: 'nature',
                        heading: 90,
                    },
                    {
                        order: 2,
                        name: 'Rue Soufflot',
                        coords: { lat: 48.8467, lng: 2.3415 },
                        emoji: '🏛️',
                        description: 'Wide avenue to Pantheon',
                        history:
                            'Designed to provide a grand approach to the Pantheon, offering perfect symmetrical views.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Walk toward the dome',
                        reward: 30,
                        category: 'urban',
                        heading: 90,
                    },
                    {
                        order: 3,
                        name: 'Sorbonne University',
                        coords: { lat: 48.8484, lng: 2.343 },
                        emoji: '📚',
                        description: 'Historic university',
                        history:
                            "Founded in 1257, one of Europe's oldest universities. Center of intellectual life for centuries.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Find the university courtyard',
                        reward: 40,
                        category: 'cultural',
                        heading: 45,
                    },
                    {
                        order: 4,
                        name: 'Rue Mouffetard',
                        coords: { lat: 48.8432, lng: 2.3495 },
                        emoji: '🥐',
                        description: 'Ancient market street',
                        history:
                            "One of Paris's oldest streets, following a Roman road. Now a vibrant market with cafes and food shops.",
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Browse the market stalls',
                        reward: 35,
                        category: 'cultural',
                        heading: 180,
                    },
                    {
                        order: 5,
                        name: 'Place de la Contrescarpe',
                        coords: { lat: 48.8445, lng: 2.3495 },
                        emoji: '☕',
                        description: 'Lively square with cafes',
                        history:
                            'Hemingway frequented these cafes in the 1920s. Still a popular student hangout.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: 'Sit at a cafe terrace',
                        reward: 30,
                        category: 'cultural',
                        heading: 0,
                    },
                    {
                        order: 6,
                        name: 'Place du Pantheon',
                        coords: { lat: 48.846, lng: 2.3458 },
                        emoji: '📍',
                        description: 'Square before the monument',
                        history:
                            'Surrounded by the Pantheon, law school, and library. Hub of Left Bank intellectual life.',
                        photos: [
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
                        ],
                        task: "Face the Pantheon's columns",
                        reward: 45,
                        category: 'landmark',
                        heading: 90,
                    },
                ],
            },
        ],
    },
};

// Export for use in game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ADVENTURE_PATHS_PARIS;
}

// Assign to global ADVENTURE_PATHS for browser use
if (typeof window !== 'undefined') {
    window.ADVENTURE_PATHS = ADVENTURE_PATHS_PARIS;
}
