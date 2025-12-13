// ═══════════════════════════════════════════════════════════
// ADVENTURE PATHS PART 2 - Remaining Locations
// Meiji Shrine, Imperial Palace, Shibuya, Tsukiji, Ueno, Akihabara, Roppongi
// ═══════════════════════════════════════════════════════════

const ADVENTURE_PATHS_PART2 = {
    // ═══════════════════════════════════════════════════════════
    // 3. MEIJI SHRINE - 3 ADVENTURE ROUTES
    // ═══════════════════════════════════════════════════════════
    'Meiji Shrine': {
        mainDestination: {
            name: 'Meiji Shrine Main Hall',
            coords: { lat: 35.6764, lng: 139.6993 },
            emoji: '⛩️',
            foundingYear: 1920,
            description:
                'Shinto shrine dedicated to Emperor Meiji and Empress Shoken. Set in 175-acre forest in the heart of Tokyo.',
            history:
                "Completed in 1920 to honor Emperor Meiji (died 1912) who led Japan's modernization. Original buildings destroyed in WWII bombing, rebuilt 1958. The forest was planted by volunteers - 100,000 trees from across Japan. Now a spiritual oasis in bustling Harajuku.",
            photos: [
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
            ],
        },

        paths: [
            {
                pathId: 'meiji_path_1',
                name: 'Sacred Forest Path',
                difficulty: 'easy',
                estimatedTime: '20-25 minutes',
                totalDistance: '680m',
                description:
                    'Traditional approach through the sacred forest and iconic torii gates',

                waypoints: [
                    {
                        order: 1,
                        id: 'meiji_south_entrance',
                        name: 'Southern Entrance (Harajuku Side)',
                        coords: { lat: 35.6705, lng: 139.7005 },
                        heading: 0,
                        emoji: '🌳',
                        description:
                            'Begin where bustling Harajuku meets tranquil forest. Cross from urban chaos to sacred calm in single step.',
                        history:
                            "This entrance connects modern youth culture district (Harajuku) with ancient Shinto tradition. Demonstrates Tokyo's ability to blend old and new. The transition is dramatic - noise fades as you enter tree canopy.",
                        task: 'Feel the temperature drop as you enter the cool forest',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 30,
                        category: 'entrance',
                        tips: 'Come early morning for peaceful experience',
                        nearbyFood: 'Harajuku area behind you has everything',
                    },
                    {
                        order: 2,
                        id: 'meiji_first_torii',
                        name: 'First Torii Gate',
                        coords: { lat: 35.674, lng: 139.6998 },
                        heading: 350,
                        emoji: '⛩️',
                        description:
                            'Massive 12-meter tall wooden torii marks sacred space boundary. Made from 1,500-year-old cypress.',
                        history:
                            'Built from ancient cypress trees from Taiwan. Original gate 1920, destroyed 1966 by lightning, rebuilt 1975. Passing under torii means entering sacred realm - bow before passing. Represents separation from mundane world.',
                        task: 'Bow before passing under - show respect for sacred space',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Walk on sides of path - center reserved for kami (gods)',
                        nearbyFood: 'Forest path - no food',
                    },
                    {
                        order: 3,
                        id: 'meiji_wine_barrels',
                        name: 'Sake & Wine Barrel Wall',
                        coords: { lat: 35.676, lng: 139.6998 },
                        heading: 0,
                        emoji: '🍶',
                        description:
                            "Wall of sake barrels donated from breweries across Japan. Opposite wall shows wine barrels from France - Emperor Meiji's love of both cultures.",
                        history:
                            "Over 200 sake barrels from all prefectures donated to shrine. Represents national unity. Wine barrels represent Emperor Meiji's appreciation of Western culture. He encouraged modernization while preserving Japanese identity. Barrels replaced every few years.",
                        task: 'Find sake barrels from different regions and French wine barrels',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800',
                        ],
                        reward: 35,
                        category: 'cultural',
                        tips: 'Barrels are offerings - represent regional pride',
                        nearbyFood: 'Viewing area only',
                    },
                    {
                        order: 4,
                        id: 'meiji_cleansing',
                        name: 'Temizuya (Purification Fountain)',
                        coords: { lat: 35.6762, lng: 139.6995 },
                        heading: 330,
                        emoji: '💧',
                        description:
                            'Ritual cleansing station. Purify hands and mouth before approaching shrine.',
                        history:
                            "Traditional Shinto purification ritual. Use ladle to wash left hand, right hand, rinse mouth (don't drink!), cleanse ladle handle. Process symbolizes spiritual cleansing. Water flows constantly from sacred spring.",
                        task: 'Perform proper purification ritual (instructions posted)',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 30,
                        category: 'cultural',
                        tips: 'Watch others first if unsure',
                        nearbyFood: 'Sacred water - not for drinking',
                    },
                    {
                        order: 5,
                        id: 'meiji_main_plaza',
                        name: 'Main Courtyard',
                        coords: { lat: 35.6763, lng: 139.6992 },
                        heading: 0,
                        emoji: '🏛️',
                        description:
                            'Open plaza before main hall. Gravel courtyard where traditional weddings happen.',
                        history:
                            "Traditional Shinto wedding location - one of Tokyo's most popular. Couples wear traditional kimono, walk across white gravel. You might witness ceremony. Plaza designed for crowds during New Year's (3 million visitors in 3 days!).",
                        task: 'If lucky, watch a traditional Shinto wedding ceremony',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
                        ],
                        reward: 40,
                        category: 'viewpoint',
                        tips: 'Wedding season: spring and autumn weekends',
                        nearbyFood: 'Respectful distance from ceremonies',
                    },
                    {
                        order: 6,
                        id: 'meiji_offering_hall',
                        name: 'Offering Hall Entrance',
                        coords: { lat: 35.6764, lng: 139.699 },
                        heading: 0,
                        emoji: '⛩️',
                        description:
                            'Steps to main hall. Make offering, bow twice, clap twice, bow once - traditional Shinto prayer.',
                        history:
                            'Main hall rebuilt 1958 using traditional techniques. Houses sacred objects of Emperor Meiji and Empress. Not open to public but visible from offering area. Priests maintain daily rituals. Simple architecture emphasizes spirituality over decoration.',
                        task: 'Follow Shinto prayer ritual: 2 bows, 2 claps, 1 bow',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Photos OK but silence maintained',
                        nearbyFood: 'Amulet shop sells charms',
                    },
                ],
            },

            {
                pathId: 'meiji_path_2',
                name: 'Harajuku Culture Route',
                difficulty: 'medium',
                estimatedTime: '25-30 minutes',
                totalDistance: '850m',
                description: 'From youth fashion epicenter through Yoyogi Park to sacred grounds',

                waypoints: [
                    {
                        order: 1,
                        id: 'meiji_takeshita',
                        name: 'Takeshita Street Entrance',
                        coords: { lat: 35.6705, lng: 139.7035 },
                        heading: 270,
                        emoji: '🛍️',
                        description:
                            'Famous youth fashion street. Kawaii culture epicenter - crepes, vintage shops, colorful chaos!',
                        history:
                            "Became fashion mecca in 1970s-80s. Birthplace of 'Harajuku style' - mix of vintage, punk, kawaii. Street only 400m but packed with 200+ shops. Influenced global street fashion. Weekends bring crowds of fashionable youth.",
                        task: 'Experience the energy of Tokyo youth culture',
                        photos: [
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
                        ],
                        reward: 40,
                        category: 'shopping',
                        tips: 'Avoid weekends if you dislike crowds',
                        nearbyFood: 'Rainbow crepes, cheese dogs, everything!',
                    },
                    {
                        order: 2,
                        id: 'meiji_yoyogi_entrance',
                        name: 'Yoyogi Park Entrance',
                        coords: { lat: 35.6719, lng: 139.696 },
                        heading: 0,
                        emoji: '🌳',
                        description:
                            "One of Tokyo's largest parks. Musicians, dancers, picnickers gather on weekends.",
                        history:
                            "Site of first successful powered flight in Japan (1910). Became army base, then Washington Heights housing for US military after WWII. Olympic Village for 1964 Tokyo Olympics. Public park since 1967. Symbol of Tokyo's history of transformation.",
                        task: 'Watch street performers and enjoy the open space',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 35,
                        category: 'nature',
                        tips: 'Sunday afternoons have rockabilly dancers',
                        nearbyFood: 'Food trucks and convenience stores',
                    },
                    {
                        order: 3,
                        id: 'meiji_fountain_plaza',
                        name: 'Yoyogi Park Fountain Plaza',
                        coords: { lat: 35.6735, lng: 139.6945 },
                        heading: 340,
                        emoji: '⛲',
                        description:
                            'Central plaza with fountain. Popular for picnics, dog walking, people watching.',
                        history:
                            "Originally parade grounds for Olympics. Now community gathering space. Cherry blossom viewing in spring, fall colors in autumn. Represents Tokyo's need for green space in dense city. Families, students, elderly all use park.",
                        task: "Observe Tokyo's diverse community in relaxed setting",
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 30,
                        category: 'viewpoint',
                        tips: 'Great for rest and people watching',
                        nearbyFood: 'Picnic area - bring food',
                    },
                    {
                        order: 4,
                        id: 'meiji_yoyogi_bridge',
                        name: 'Bridge to Shrine Entrance',
                        coords: { lat: 35.6748, lng: 139.697 },
                        heading: 20,
                        emoji: '🌉',
                        description:
                            'Pedestrian bridge connecting park to shrine. Transition from recreation to reverence.',
                        history:
                            "Bridge crosses over railway. Symbolic transition - leave worldly concerns behind. You'll see people change demeanor as they approach sacred space. Architecture simple but marks psychological boundary.",
                        task: 'Cross from park recreation zone to spiritual forest',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 30,
                        category: 'viewpoint',
                        tips: 'Notice the mood shift as you cross',
                        nearbyFood: 'Last chance for food before shrine',
                    },
                    {
                        order: 5,
                        id: 'meiji_treasure_museum',
                        name: 'Meiji Jingu Treasure Museum',
                        coords: { lat: 35.6772, lng: 139.7005 },
                        heading: 270,
                        emoji: '🏛️',
                        description:
                            "Museum displaying Emperor Meiji's personal belongings and artifacts from Meiji era.",
                        history:
                            "Opened 1921. Contains imperial carriage, clothing, calligraphy, documents. Shows Emperor's daily life and Meiji Restoration period (1868-1912) when Japan modernized. Admission ¥500. Western-style building itself is historic.",
                        task: "View artifacts from Japan's transformation era",
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Worth the entry fee if interested in history',
                        nearbyFood: 'Museum cafe available',
                    },
                    {
                        order: 6,
                        id: 'meiji_north_torii',
                        name: 'Northern Torii Gate',
                        coords: { lat: 35.6768, lng: 139.6985 },
                        heading: 180,
                        emoji: '⛩️',
                        description: 'Second major torii gate. Quieter approach to main shrine.',
                        history:
                            'This gate marks northern sacred boundary. Less crowded than southern approach. Connects to Treasure Museum area. Same traditional significance - bow before entering. Forest around this gate particularly lush.',
                        task: 'Bow respectfully before entering sacred grounds',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Quieter than main southern entrance',
                        nearbyFood: 'Approaching sacred area',
                    },
                ],
            },

            {
                pathId: 'meiji_path_3',
                name: 'Secret Garden Path',
                difficulty: 'hard',
                estimatedTime: '30-35 minutes',
                totalDistance: '920m',
                description: 'Through hidden inner garden and lesser-known forest trails',

                waypoints: [
                    {
                        order: 1,
                        id: 'meiji_west_entrance',
                        name: 'West Gate (Sangubashi)',
                        coords: { lat: 35.678, lng: 139.692 },
                        heading: 90,
                        emoji: '🌲',
                        description:
                            'Least used entrance. Dense forest, few visitors. True hidden path.',
                        history:
                            'This entrance sees 10% of visitors compared to south gate. Preferred by locals seeking quiet contemplation. Path is longer but infinitely more peaceful. Forest here feels untouched.',
                        task: 'Experience the shrine forest in solitude',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 50,
                        secret: true,
                        category: 'hidden',
                        tips: 'Early morning is magical here',
                        nearbyFood: 'Bring your own - nothing nearby',
                    },
                    {
                        order: 2,
                        id: 'meiji_forest_trail',
                        name: 'Deep Forest Trail',
                        coords: { lat: 35.6775, lng: 139.694 },
                        heading: 110,
                        emoji: '🌳',
                        description:
                            'Dense forest planted 100 years ago. Now mature ecosystem in city center.',
                        history:
                            '100,000 trees from all over Japan planted by volunteers 1915-1920. Designed to create self-sustaining forest. Now home to 3,000+ plant species, 100+ bird species. Ecological miracle - creates own microclimate 5°C cooler than surrounding city.',
                        task: 'Listen to birdsong impossible to hear elsewhere in Tokyo',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 45,
                        category: 'nature',
                        tips: 'Bring binoculars for bird watching',
                        nearbyFood: 'Nature zone - no facilities',
                    },
                    {
                        order: 3,
                        id: 'meiji_inner_garden_entrance',
                        name: 'Inner Garden Gate (Gyoen)',
                        coords: { lat: 35.6755, lng: 139.7015 },
                        heading: 180,
                        emoji: '🏯',
                        description:
                            'Entrance to secret garden created by Emperor Meiji for Empress Shoken. Admission ¥500.',
                        history:
                            'Garden created 1893 for Empress who loved iris flowers. Features spring-fed pond, tea house, 150 iris species. Closed to public most of year except June (iris season) and autumn. Represents imperial love and devotion.',
                        task: 'Enter the hidden garden (if open - check season)',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 60,
                        secret: true,
                        category: 'hidden',
                        tips: 'Best in June for iris blooms',
                        nearbyFood: 'Tea house in garden (if open)',
                    },
                    {
                        order: 4,
                        id: 'meiji_iris_pond',
                        name: 'Iris Pond',
                        coords: { lat: 35.6752, lng: 139.7018 },
                        heading: 200,
                        emoji: '🌸',
                        description:
                            'Beautiful pond surrounded by 150 iris varieties. Emperor planted them himself.',
                        history:
                            'Emperor Meiji personally selected and planted irises for his wife. Water comes from natural spring. Garden design combines nature and intention - appears wild but carefully maintained. Represents Japanese aesthetic of subtle beauty.',
                        task: 'Appreciate the imperial love story behind this garden',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 55,
                        secret: true,
                        category: 'nature',
                        tips: 'Reflection photos are stunning',
                        nearbyFood: 'Quiet contemplation area',
                    },
                    {
                        order: 5,
                        id: 'meiji_azumaya',
                        name: 'Azumaya Tea House',
                        coords: { lat: 35.6758, lng: 139.7012 },
                        heading: 250,
                        emoji: '🍵',
                        description: "Traditional tea house overlooking pond. Empress's retreat.",
                        history:
                            "Built for Empress Shoken's tea ceremonies. Original structure destroyed in war, rebuilt faithfully. Demonstrates Japanese architectural harmony with nature. Not open to public but visible from path.",
                        task: 'View the tea house from viewing area',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 50,
                        category: 'cultural',
                        tips: 'Photography allowed from designated spots',
                        nearbyFood: 'Historical viewing area',
                    },
                    {
                        order: 6,
                        id: 'meiji_power_spot',
                        name: "Kiyomasa's Well (Power Spot)",
                        coords: { lat: 35.676, lng: 139.7008 },
                        heading: 270,
                        emoji: '💫',
                        description:
                            "Sacred well believed to have spiritual power. Popular 'power spot' for good fortune.",
                        history:
                            "Named after samurai Kato Kiyomasa who allegedly dug it. Spring water flows year-round at 15°C. Became trendy 'power spot' in 2000s - people photograph it for luck. Represents Japanese belief in spiritual energy (ki) in nature.",
                        task: 'Take photo of the well for good fortune (according to belief)',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800',
                        ],
                        reward: 55,
                        secret: true,
                        category: 'cultural',
                        tips: 'Morning visit for best energy (believers say)',
                        nearbyFood: 'Spiritual area - no food',
                    },
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════
    // 4. IMPERIAL PALACE - 3 ADVENTURE ROUTES
    // ═══════════════════════════════════════════════════════════
    'Imperial Palace': {
        mainDestination: {
            name: 'Imperial Palace East Gardens',
            coords: { lat: 35.6858, lng: 139.7573 },
            emoji: '🏯',
            foundingYear: 1457,
            description:
                "Former site of Edo Castle, now the Emperor's residence. East Gardens open to public.",
            history:
                'Edo Castle built 1457 by Ota Dokan. Became Tokugawa shogunate seat in 1603. Largest castle in the world at its peak. Destroyed by fire multiple times. Imperial family moved here 1868 after Meiji Restoration. Current palace rebuilt 1968. East Gardens opened 1968 on former castle grounds.',
            photos: [
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
            ],
        },

        paths: [
            {
                pathId: 'palace_path_1',
                name: 'Outer Garden & Bridge Route',
                difficulty: 'easy',
                estimatedTime: '20-25 minutes',
                totalDistance: '700m',
                description: 'Classic route around outer moats to famous Nijubashi Bridge',

                waypoints: [
                    {
                        order: 1,
                        id: 'palace_kokyo_gaien',
                        name: 'Kokyo Gaien (Outer Garden Plaza)',
                        coords: { lat: 35.6795, lng: 139.7538 },
                        heading: 30,
                        emoji: '🌳',
                        description:
                            'Vast open plaza with black pine trees. Former military parade ground, now public park.',
                        history:
                            "Created 1889 as parade ground for imperial guards. After WWII, became public space. 50 hectares of rare openness in dense Tokyo. Pine trees planted in rows. Popular for New Year's greeting by Emperor (Jan 2).",
                        task: 'Walk the expansive gravel plaza under the pines',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 30,
                        category: 'viewpoint',
                        tips: 'Great for jogging and cycling',
                        nearbyFood: 'Vending machines only',
                    },
                    {
                        order: 2,
                        id: 'palace_sakurada_gate',
                        name: 'Sakuradamon Gate',
                        coords: { lat: 35.6798, lng: 139.7525 },
                        heading: 340,
                        emoji: '🏯',
                        description:
                            'Historic gate where important assassination occurred in 1860, changing Japanese history.',
                        history:
                            "Site of 1860 Sakuradamon Incident - assassination of Ii Naosuke, shogunate's chief minister. This event weakened Tokugawa shogunate, leading to its fall and Meiji Restoration. Gate survived from Edo period. Important turning point in modernization.",
                        task: 'Stand at the gate where history changed',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Read historical marker',
                        nearbyFood: 'Near government buildings',
                    },
                    {
                        order: 3,
                        id: 'palace_fushimi_yagura',
                        name: 'Fushimi Yagura Turret',
                        coords: { lat: 35.6808, lng: 139.753 },
                        heading: 30,
                        emoji: '🏯',
                        description:
                            'Original Edo Castle defense turret relocated from Fushimi Castle in Kyoto.',
                        history:
                            "Built early 1600s as part of Fushimi Castle near Kyoto. Moved to Edo Castle 1628. One of only three surviving original structures from Edo Castle. Demonstrates castle's defensive architecture - shooting ports for arrows and guns.",
                        task: 'Spot the defensive features in the turret design',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Look for gun ports in walls',
                        nearbyFood: 'Viewing area only',
                    },
                    {
                        order: 4,
                        id: 'palace_nijubashi',
                        name: 'Nijubashi Bridge (Double Bridge)',
                        coords: { lat: 35.6813, lng: 139.754 },
                        heading: 0,
                        emoji: '🌉',
                        description:
                            'Most iconic palace view! Stone bridge with palace behind. Every postcard shows this angle.',
                        history:
                            "Name means 'double bridge' - originally had wooden double-arch bridge (replaced 1964 with steel). Front stone bridge built 1888. Together they create the classic palace view. Only opened to public twice yearly (Jan 2, Emperor's birthday).",
                        task: 'Capture the iconic palace photo',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 50,
                        category: 'landmark',
                        tips: 'Morning light is best for photos',
                        nearbyFood: 'Vending machines nearby',
                    },
                    {
                        order: 5,
                        id: 'palace_moat_walk',
                        name: 'Inner Moat Promenade',
                        coords: { lat: 35.6828, lng: 139.755 },
                        heading: 45,
                        emoji: '🦢',
                        description:
                            'Peaceful walk along historic moat. Swans swim, cherry blossoms bloom in spring.',
                        history:
                            'Moats date from 1600s, part of Edo Castle defenses. Water system connected to rivers. Now home to swans, koi, turtles. Popular 5km jogging route circles palace. Cherry trees planted along banks - spectacular in spring.',
                        task: 'Walk the peaceful moat path',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 35,
                        category: 'nature',
                        tips: 'Late March-early April for cherry blossoms',
                        nearbyFood: 'Benches for rest',
                    },
                    {
                        order: 6,
                        id: 'palace_otemon_gate',
                        name: 'Otemon Gate (Main Gate)',
                        coords: { lat: 35.6865, lng: 139.7568 },
                        heading: 90,
                        emoji: '⛩️',
                        description:
                            'Main entrance to East Gardens. Free entry. Gate itself is reconstructed Edo period architecture.',
                        history:
                            "Original main gate of Edo Castle. Current structure rebuilt 1967 based on historical records. Name means 'Great Hand Gate' - most important entrance. Daimyo (feudal lords) entered here. Now public entrance to gardens.",
                        task: 'Enter the palace grounds through the historic main gate',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 40,
                        category: 'entrance',
                        tips: 'Gardens closed Mondays & Fridays',
                        nearbyFood: 'Vending machines at entrance',
                    },
                ],
            },

            // Imperial Palace - Path 2 & 3 (completing this location)
            {
                pathId: 'palace_path_2',
                name: 'Kitanomaru Park & Museum Route',
                difficulty: 'medium',
                estimatedTime: '25-28 minutes',
                totalDistance: '820m',
                waypoints: [
                    {
                        order: 1,
                        id: 'palace_takebashi',
                        name: 'Takebashi Station Exit',
                        coords: { lat: 35.6905, lng: 139.756 },
                        heading: 270,
                        emoji: '🚇',
                        description: "Start near Tokyo Station's neighbor. Modern meets historic.",
                        history:
                            "Station opened 1966 during Tokyo's rapid expansion. Named after nearby Takebashi (Bamboo Bridge). Serves businesspeople working in surrounding government offices.",
                        task: 'Exit station toward Kitanomaru Park',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 30,
                        category: 'entrance',
                        tips: 'Multiple exits - follow Kitanomaru signs',
                        nearbyFood: 'Station has cafes',
                    },
                    {
                        order: 2,
                        id: 'palace_kitanomaru_entrance',
                        name: 'Kitanomaru Park Entrance',
                        coords: { lat: 35.691, lng: 139.7535 },
                        heading: 220,
                        emoji: '🌳',
                        description:
                            'Former military grounds, now peaceful park. Cherry blossoms and maple trees.',
                        history:
                            "Originally part of Edo Castle's northern bailey (kitanomaru). Became military facility after Meiji Restoration. Converted to public park 1969. Features Nippon Budokan martial arts hall.",
                        task: 'Enter the tranquil park',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 35,
                        category: 'nature',
                        tips: 'Beautiful in spring and autumn',
                        nearbyFood: 'Park benches for picnic',
                    },
                    {
                        order: 3,
                        id: 'palace_budokan',
                        name: 'Nippon Budokan',
                        coords: { lat: 35.693, lng: 139.7505 },
                        heading: 180,
                        emoji: '🎵',
                        description:
                            'Iconic octagonal arena. Built for 1964 Olympics judo, now hosts concerts and martial arts.',
                        history:
                            "Completed 1964 for Tokyo Olympics. Design inspired by Horyu-ji Temple's dream hall. The Beatles played here 1966 (controversial at the time). Seats 14,000. Symbol of Japanese martial arts culture.",
                        task: 'Walk around the iconic octagonal building',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'landmark',
                        tips: 'Concert venue - check schedule',
                        nearbyFood: 'Concert days have food stalls',
                    },
                    {
                        order: 4,
                        id: 'palace_science_museum',
                        name: 'Science Museum',
                        coords: { lat: 35.692, lng: 139.7525 },
                        heading: 140,
                        emoji: '🔬',
                        description:
                            'Science and technology museum. Interactive exhibits on Japanese innovation.',
                        history:
                            "Opened 1964 as part of Olympic modernization. Focuses on Japanese contributions to science. Exhibits cover space, robotics, electricity. Popular with school groups. Represents Japan's post-war tech advancement.",
                        task: 'View the exhibits (if time allows - ¥600 entry)',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 35,
                        category: 'cultural',
                        tips: 'Good for rainy days',
                        nearbyFood: 'Museum cafe available',
                    },
                    {
                        order: 5,
                        id: 'palace_tayasumon',
                        name: 'Tayasumon Gate',
                        coords: { lat: 35.6895, lng: 139.755 },
                        heading: 120,
                        emoji: '🏯',
                        description:
                            'Original Edo Castle gate from 1636. Survived wars and earthquakes.',
                        history:
                            "Built 1636, oldest surviving gate of Edo Castle. Designated Important Cultural Property. Name from Tokugawa Ieyasu's son who had residence nearby. Demonstrates Edo period defensive architecture.",
                        task: 'Pass through 400-year-old gate',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Notice massive wooden beams',
                        nearbyFood: 'Historical area',
                    },
                    {
                        order: 6,
                        id: 'palace_north_gardens',
                        name: 'Kitanomaru Gardens Path',
                        coords: { lat: 35.688, lng: 139.7555 },
                        heading: 140,
                        emoji: '🍁',
                        description:
                            'Beautiful garden path connecting to East Gardens. Maple trees create tunnel of color in autumn.',
                        history:
                            'Garden designed in Japanese landscape style. Combines natural and cultivated elements. Maple trees (momiji) planted intentionally for autumn colors. Path represents transition from military past to peaceful present.',
                        task: 'Walk the maple-lined path',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 40,
                        category: 'nature',
                        tips: 'Mid-November for peak autumn colors',
                        nearbyFood: 'Approaching East Gardens',
                    },
                ],
            },

            {
                pathId: 'palace_path_3',
                name: 'Cherry Blossom Moat Walk',
                difficulty: 'easy',
                estimatedTime: '22-25 minutes',
                totalDistance: '750m',
                waypoints: [
                    {
                        order: 1,
                        id: 'palace_chidorigafuchi_start',
                        name: 'Chidorigafuchi Moat Entrance',
                        coords: { lat: 35.6895, lng: 139.749 },
                        heading: 90,
                        emoji: '🌸',
                        description:
                            "Tokyo's most beautiful cherry blossom viewing spot. 260 trees line the moat.",
                        history:
                            "Moat name means 'Plover Abyss' - shape resembles plovers in flight. Created as Edo Castle outer defense. Cherry trees planted post-WWII. Now one of Tokyo's top 3 hanami (cherry blossom viewing) spots.",
                        task: 'Start the scenic moat walk',
                        photos: [
                            'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 40,
                        category: 'nature',
                        tips: 'Late March-early April for blossoms',
                        nearbyFood: 'Seasonal food stalls during hanami',
                    },
                    {
                        order: 2,
                        id: 'palace_boat_rental',
                        name: 'Chidorigafuchi Boat Dock',
                        coords: { lat: 35.6888, lng: 139.7505 },
                        heading: 120,
                        emoji: '🚣',
                        description:
                            'Rent rowboat to paddle under cherry blossom canopy. Magical experience!',
                        history:
                            'Boat rental service started 1960s. During cherry blossom season, 1-2 hour waits common. Paddling under pink canopy is quintessential Tokyo spring experience. Couples and families create memories here.',
                        task: 'Consider boat rental (¥800/30min) if season is right',
                        photos: [
                            'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 45,
                        category: 'activity',
                        tips: 'Book early during hanami season',
                        nearbyFood: 'Snack vendors nearby',
                    },
                    {
                        order: 3,
                        id: 'palace_british_embassy',
                        name: 'British Embassy View',
                        coords: { lat: 35.6878, lng: 139.7515 },
                        heading: 180,
                        emoji: '🏛️',
                        description:
                            'Glimpse British Embassy across moat. Historical diplomatic presence.',
                        history:
                            'British Embassy established here 1872 during Meiji period when Japan opened to world. Victorian architecture preserved. Represents 150+ years of UK-Japan relations. Embassy survived WWII bombing.',
                        task: 'View the embassy architecture across the water',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 30,
                        category: 'viewpoint',
                        tips: 'Photos from moat side only',
                        nearbyFood: 'Walk continues along moat',
                    },
                    {
                        order: 4,
                        id: 'palace_yasukuni_view',
                        name: 'Yasukuni Shrine View',
                        coords: { lat: 35.687, lng: 139.752 },
                        heading: 200,
                        emoji: '⛩️',
                        description:
                            "Spot the controversial Yasukuni Shrine's torii gate rising above trees.",
                        history:
                            "Yasukuni Shrine (1869) honors Japan's war dead. Controversial because it includes WWII war criminals. Prime Minister visits spark diplomatic tension. Located near palace on former military grounds.",
                        task: 'Observe the shrine from distance',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 35,
                        category: 'viewpoint',
                        tips: 'Politically sensitive topic',
                        nearbyFood: 'Shrine has its own area',
                    },
                    {
                        order: 5,
                        id: 'palace_moat_corner',
                        name: 'Southwest Moat Corner',
                        coords: { lat: 35.6855, lng: 139.7535 },
                        heading: 90,
                        emoji: '🦢',
                        description:
                            'Peaceful moat corner where swans nest. Stone walls tower above water.',
                        history:
                            "Original Edo Castle moat from 1600s. Stone walls (ishigaki) used 'turtle shell' stacking technique - no mortar, stones fit precisely. Withstood earthquakes for 400 years. Swans introduced 1950s, now beloved residents.",
                        task: 'Look for swans and admire ancient stonework',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 40,
                        category: 'nature',
                        tips: 'Swans more active in morning',
                        nearbyFood: 'Approaching palace plaza',
                    },
                    {
                        order: 6,
                        id: 'palace_sakashita_gate',
                        name: 'Sakashitamon Gate',
                        coords: { lat: 35.686, lng: 139.756 },
                        heading: 45,
                        emoji: '🏯',
                        description:
                            'Secondary entrance to East Gardens. Less crowded than main gate.',
                        history:
                            "Built as delivery entrance for Edo Castle. Name means 'Gate Below the Slope'. Reconstructed 1961. Locals use this entrance to avoid tourist crowds at Otemon. Stone walls here particularly impressive.",
                        task: 'Enter East Gardens through quiet gate',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 40,
                        category: 'entrance',
                        tips: "Insider's entrance - fewer people",
                        nearbyFood: 'Gardens entrance area',
                    },
                ],
            },
        ],
    },
};

// Continue with remaining locations...
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ADVENTURE_PATHS_PART2;
}
