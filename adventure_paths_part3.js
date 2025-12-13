// ═══════════════════════════════════════════════════════════
// ADVENTURE PATHS PART 3 - Final Locations
// Shibuya, Tsukiji, Ueno, Akihabara, Roppongi
// ═══════════════════════════════════════════════════════════

const ADVENTURE_PATHS_PART3 = {
    // ═══════════════════════════════════════════════════════════
    // 5. SHIBUYA CROSSING - 3 ADVENTURE ROUTES
    // ═══════════════════════════════════════════════════════════
    'Shibuya Crossing': {
        mainDestination: {
            name: 'Shibuya Scramble Crossing',
            coords: { lat: 35.6595, lng: 139.7004 },
            emoji: '🚦',
            foundingYear: 1973,
            description:
                "World's busiest pedestrian crossing. Up to 3,000 people cross per light change. Symbol of Tokyo's energy.",
            history:
                'Became iconic scramble crossing in 1973. Featured in Lost in Translation, Fast & Furious: Tokyo Drift. All traffic stops, pedestrians cross in all directions. Represents organized chaos of Tokyo. Visible from Starbucks above.',
            photos: [
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800',
            ],
        },

        paths: [
            {
                pathId: 'shibuya_path_1',
                name: 'Youth Culture & Shopping Route',
                difficulty: 'easy',
                estimatedTime: '20-25 minutes',
                totalDistance: '680m',
                waypoints: [
                    {
                        order: 1,
                        id: 'shibuya_hachiko',
                        name: 'Hachiko Statue',
                        coords: { lat: 35.659, lng: 139.7006 },
                        heading: 180,
                        emoji: '🐕',
                        description:
                            "Famous statue of loyal dog Hachiko. Most popular meeting spot in Tokyo - 'Meet me at Hachiko!'",
                        history:
                            'Honors Akita dog who waited for deceased owner at station daily for 9 years (1925-1935). Original statue melted for war effort 1944, rebuilt 1948. Symbol of loyalty. Meeting spot for millions.',
                        task: "Touch Hachiko's nose for good luck (local tradition)",
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 35,
                        category: 'landmark',
                        tips: 'Always crowded - early morning best',
                        nearbyFood: 'Station has everything',
                    },
                    {
                        order: 2,
                        id: 'shibuya_109',
                        name: 'Shibuya 109',
                        coords: { lat: 35.66, lng: 139.6988 },
                        heading: 0,
                        emoji: '🏢',
                        description:
                            'Iconic cylindrical fashion building. Birthplace of gyaru fashion trends. 10 floors of trendy boutiques.',
                        history:
                            'Opened 1979, became epicenter of Tokyo teen fashion culture. Name from Tokyu (10-9 in Japanese). Shaped fashion trends for 40+ years. Each floor targets different style tribes.',
                        task: 'Window shop the latest Harajuku fashion',
                        photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'],
                        reward: 40,
                        category: 'shopping',
                        tips: 'Weekends are packed',
                        nearbyFood: 'Food court on top floor',
                    },
                    {
                        order: 3,
                        id: 'shibuya_center_gai',
                        name: 'Center Gai (Center Street)',
                        coords: { lat: 35.6612, lng: 139.699 },
                        heading: 20,
                        emoji: '🎮',
                        description:
                            'Bustling pedestrian street. Arcades, karaoke, restaurants, nightlife. Heart of Shibuya youth culture.',
                        history:
                            "Developed 1970s as entertainment district. Inspired settings in video games (Persona 5, Jet Set Radio). Mix of chain stores and independent shops. Represents Tokyo's vibrant street culture.",
                        task: 'Walk through the neon-lit entertainment zone',
                        photos: [
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
                        ],
                        reward: 40,
                        category: 'entertainment',
                        tips: 'Come at night for full neon effect',
                        nearbyFood: 'Every type of cuisine imaginable',
                    },
                    {
                        order: 4,
                        id: 'shibuya_mega_donki',
                        name: 'Don Quijote Mega Store',
                        coords: { lat: 35.6615, lng: 139.7005 },
                        heading: 140,
                        emoji: '🛒',
                        description:
                            'Massive 24-hour discount store. 7 floors of organized chaos. Find everything from snacks to electronics.',
                        history:
                            'Don Quijote chain famous for cramped aisles and treasure hunt shopping. Shibuya flagship opened 2017. Penguin mascot Donpen. Represents Japanese discount retail culture. Popular with tourists for tax-free shopping.',
                        task: 'Experience the organized chaos of Donki',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 35,
                        category: 'shopping',
                        tips: 'Overwhelming but fun - budget 30+ min',
                        nearbyFood: 'Snack section is massive',
                    },
                    {
                        order: 5,
                        id: 'shibuya_miyashita',
                        name: 'Miyashita Park',
                        coords: { lat: 35.6635, lng: 139.704 },
                        heading: 90,
                        emoji: '🌳',
                        description:
                            'Rooftop park with skating, climbing, cafes. Modern urban renewal project on 3 levels.',
                        history:
                            "Original 1966 park for skateboarding. Rebuilt 2020 as 3-story complex: park above, shops below. Features bouldering wall, food hall, Sequence Miyashita Park hotel. Represents Tokyo's creative use of limited space.",
                        task: 'Explore the multi-level urban park',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 45,
                        category: 'modern',
                        tips: 'Rooftop has best views',
                        nearbyFood: 'Food hall has 20+ restaurants',
                    },
                    {
                        order: 6,
                        id: 'shibuya_starbucks_view',
                        name: 'Starbucks Scramble Square View',
                        coords: { lat: 35.659, lng: 139.701 },
                        heading: 270,
                        emoji: '☕',
                        description:
                            'Famous 2nd floor Starbucks with window overlooking the crossing. Ultimate people-watching spot.',
                        history:
                            'Opened 1996, became instant landmark. Window seats most sought-after in Tokyo. Featured in countless photos and films. Represents coffee culture meeting urban spectacle.',
                        task: 'Get a window seat if possible (good luck!) and watch the crossing',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                        ],
                        reward: 40,
                        category: 'viewpoint',
                        tips: 'Arrive early or wait 30+ min',
                        nearbyFood: 'Coffee and light snacks',
                    },
                ],
            },

            {
                pathId: 'shibuya_path_2',
                name: 'Hidden Nightlife Path',
                difficulty: 'hard',
                estimatedTime: '25-30 minutes',
                totalDistance: '820m',
                waypoints: [
                    {
                        order: 1,
                        id: 'shibuya_nonbei',
                        name: "Nonbei Yokocho (Drunkard's Alley)",
                        coords: { lat: 35.6585, lng: 139.7018 },
                        heading: 270,
                        emoji: '🏮',
                        description:
                            'Tiny alleyway with cramped bars from 1950s. Hidden local drinking spot. 40+ bars, each seats 5-10 people.',
                        history:
                            "Post-war black market turned izakaya alley. Survived redevelopment pressure. Name literally means 'drunkard's alley'. Bars passed through generations. Authentic shitamachi atmosphere in modern Shibuya.",
                        task: 'Explore the narrow alleys (best after 7pm)',
                        photos: [
                            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                        ],
                        reward: 65,
                        secret: true,
                        category: 'hidden',
                        tips: 'Respectful drinking culture - no loud tourists',
                        nearbyFood: 'Every bar serves food',
                    },
                    {
                        order: 2,
                        id: 'shibuya_dogenzaka',
                        name: 'Dogenzaka Love Hotel Hill',
                        coords: { lat: 35.6575, lng: 139.6975 },
                        heading: 200,
                        emoji: '🌆',
                        description:
                            "Famous slope lined with love hotels. Neon signs, quirky architecture. Represents Tokyo's nightlife culture.",
                        history:
                            'Named after bandit Daogen who lived here in Edo period. Became entertainment district in 1900s. Love hotels (themed short-stay hotels) developed post-WWII. Part of Japanese urban culture.',
                        task: 'Walk the neon-lit slope (family-friendly during day)',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                        ],
                        reward: 50,
                        secret: true,
                        category: 'nightlife',
                        tips: 'Interesting architecture, safe area',
                        nearbyFood: 'Izakayas on side streets',
                    },
                    {
                        order: 3,
                        id: 'shibuya_sakuragaoka',
                        name: 'Sakuragaoka Residential Streets',
                        coords: { lat: 35.6555, lng: 139.6955 },
                        heading: 240,
                        emoji: '🏘️',
                        description:
                            'Quiet residential area behind Shibuya chaos. How locals actually live.',
                        history:
                            "Old neighborhood predating Shibuya's development. Mix of old houses and modern apartments. Elderly residents remember pre-war Shibuya. Community maintains traditional festivals. Represents hidden Tokyo.",
                        task: 'Experience quiet Shibuya few tourists see',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 55,
                        secret: true,
                        category: 'hidden',
                        tips: 'Be respectful - residential area',
                        nearbyFood: 'Small local restaurants',
                    },
                    {
                        order: 4,
                        id: 'shibuya_markcity',
                        name: 'Mark City Building',
                        coords: { lat: 35.6575, lng: 139.698 },
                        heading: 45,
                        emoji: '🏢',
                        description:
                            'Shopping complex above station. Connects to multiple exits and attractions.',
                        history:
                            "Opened 2000 as part of Shibuya station redevelopment. Name from 'Shibuya Mark' - area branding. Houses 170+ shops. Connected to Excel Hotel Tokyu. Represents Shibuya's constant evolution.",
                        task: 'Navigate the multi-level shopping complex',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 35,
                        category: 'shopping',
                        tips: 'Easy to get lost - use signs',
                        nearbyFood: 'Multiple food floors',
                    },
                    {
                        order: 5,
                        id: 'shibuya_stream',
                        name: 'Shibuya Stream',
                        coords: { lat: 35.6565, lng: 139.703 },
                        heading: 90,
                        emoji: '🌊',
                        description:
                            'Modern complex along Shibuya River. Restaurants, hotel, offices. River restoration project.',
                        history:
                            'Opened 2018 on former railway yard. Shibuya River (hidden in pipes since 1964) partially restored to surface. 35-story tower with Google offices. Represents eco-conscious urban development.',
                        task: 'Walk along the restored riverside',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'modern',
                        tips: 'Restaurants overlook river',
                        nearbyFood: 'High-end dining options',
                    },
                    {
                        order: 6,
                        id: 'shibuya_hikarie',
                        name: 'Shibuya Hikarie',
                        coords: { lat: 35.6595, lng: 139.703 },
                        heading: 330,
                        emoji: '✨',
                        description:
                            'Sleek skyscraper with shopping, theaters, observation deck. Modern Shibuya landmark.',
                        history:
                            "Completed 2012, first major redevelopment project. Name means 'shining' in Japanese. 34 floors including theater complex. Sky Lobby on 11th floor (free entry). Represents Shibuya's modernization.",
                        task: 'Visit Sky Lobby for free crossing views',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 45,
                        category: 'viewpoint',
                        tips: '11th floor lobby is free!',
                        nearbyFood: 'Multiple restaurant floors',
                    },
                ],
            },

            {
                pathId: 'shibuya_path_3',
                name: 'Fashion & Music Route',
                difficulty: 'medium',
                estimatedTime: '22-27 minutes',
                totalDistance: '750m',
                waypoints: [
                    {
                        order: 1,
                        id: 'shibuya_tower_records',
                        name: 'Tower Records Shibuya',
                        coords: { lat: 35.6608, lng: 139.6998 },
                        heading: 0,
                        emoji: '🎵',
                        description:
                            "Massive 9-floor music store. One of world's largest record stores. Every genre imaginable.",
                        history:
                            'Opened 1995 when Tower Records was global chain. After US parent closed 2006, Japan stores continued. Shibuya flagship survived digital music era. Represents Japanese physical media appreciation. Events and exclusive releases.',
                        task: 'Browse the massive music collection',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'shopping',
                        tips: '7th floor has J-pop, K-pop',
                        nearbyFood: 'Tower Cafe on 8th floor',
                    },
                    {
                        order: 2,
                        id: 'shibuya_hmv',
                        name: 'HMV & Books Shibuya Modi',
                        coords: { lat: 35.6615, lng: 139.7 },
                        heading: 20,
                        emoji: '📚',
                        description:
                            'Book and music store in Modi building. Cafe area for reading. Mix of books, vinyl, merchandise.',
                        history:
                            'HMV entered Japan 1990. After UK parent closed, Japan operations independent. Modi building opened 2015. Combines retail, cafe culture. Represents evolution of physical media stores.',
                        task: 'Check out the cafe reading area',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 35,
                        category: 'shopping',
                        tips: 'Good for rainy days',
                        nearbyFood: 'Cafe seating available',
                    },
                    {
                        order: 3,
                        id: 'shibuya_parco',
                        name: 'Shibuya Parco',
                        coords: { lat: 35.6642, lng: 139.6985 },
                        heading: 0,
                        emoji: '🎨',
                        description:
                            'Art-focused department store. Nintendo Store, Pokemon Center, gallery spaces. Fashion and subculture.',
                        history:
                            'Original Parco opened 1973, pioneered artistic retail. Rebuilt 2019 as cutting-edge fashion and culture space. Rooftop park, art installations. Nintendo official store on 6th floor. Pokemon Center on 7th.',
                        task: 'Visit Nintendo Store and Pokemon Center',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 50,
                        category: 'shopping',
                        tips: 'Nintendo Store often has lines',
                        nearbyFood: 'Rooftop dining floor',
                    },
                    {
                        order: 4,
                        id: 'shibuya_spain_zaka',
                        name: 'Spain-zaka (Spain Slope)',
                        coords: { lat: 35.6625, lng: 139.6975 },
                        heading: 320,
                        emoji: '🎭',
                        description:
                            'Hip slope with cafes, vintage shops, music venues. Underground culture hub since 1960s.',
                        history:
                            'Named for Spanish-style coffee shop that opened 1954. Became gathering place for artists, musicians, activists in 1960s-70s. Clubs hosted punk, rock shows. Maintains alternative culture vibe.',
                        task: 'Walk the slope exploring indie culture',
                        photos: [
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Come evening for live music',
                        nearbyFood: 'Cool cafes and bars',
                    },
                    {
                        order: 5,
                        id: 'shibuya_loft',
                        name: 'Shibuya Loft',
                        coords: { lat: 35.6625, lng: 139.7 },
                        heading: 120,
                        emoji: '🎨',
                        description:
                            '7-floor lifestyle store. Stationery, homeware, quirky Japanese products. Gift shopping paradise.',
                        history:
                            'Loft chain started 1987 by Seibu Group. Curates Japanese design and lifestyle products. Shibuya store opened 1996. Popular with both locals and tourists. Represents Japanese attention to everyday objects.',
                        task: 'Browse unique Japanese design products',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'shopping',
                        tips: '6th floor has best stationery in Tokyo',
                        nearbyFood: 'Nearby food options abundant',
                    },
                    {
                        order: 6,
                        id: 'shibuya_crossing_view',
                        name: 'Magnet by Shibuya 109 Rooftop',
                        coords: { lat: 35.6595, lng: 139.6995 },
                        heading: 180,
                        emoji: '📸',
                        description:
                            'Free rooftop observation deck overlooking the crossing. Alternative to Starbucks.',
                        history:
                            "Opened 2020 in new Magnet building. Free access unlike paid observation decks. Represents Shibuya's accessibility. Great for photos without crowds. Less known than Starbucks viewpoint.",
                        task: 'Get free aerial view of the famous crossing',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                        ],
                        reward: 50,
                        category: 'viewpoint',
                        tips: 'Free! Fewer people than Starbucks',
                        nearbyFood: 'Cafe on lower floors',
                    },
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════
    // 6. TSUKIJI OUTER MARKET - 3 ADVENTURE ROUTES
    // ═══════════════════════════════════════════════════════════
    'Tsukiji Outer Market': {
        mainDestination: {
            name: 'Tsukiji Outer Market Main Street',
            coords: { lat: 35.665, lng: 139.771 },
            emoji: '🐟',
            foundingYear: 1935,
            description:
                "Historic fish market's outer area. Inner wholesale moved 2018 but outer market thrives. Fresh seafood, street food, kitchen supplies.",
            history:
                "Market established 1935 after 1923 earthquake. Inner wholesale market moved to Toyosu 2018 but 400+ outer shops remain. Survived market relocation. Represents Tokyo's food culture and resilience.",
            photos: [
                'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
                'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
            ],
        },

        paths: [
            {
                pathId: 'tsukiji_path_1',
                name: 'Sushi & Seafood Route',
                difficulty: 'easy',
                estimatedTime: '20-25 minutes',
                totalDistance: '600m',
                waypoints: [
                    {
                        order: 1,
                        id: 'tsukiji_entrance',
                        name: 'Market Entrance Gate',
                        coords: { lat: 35.664, lng: 139.77 },
                        heading: 45,
                        emoji: '🎌',
                        description:
                            'Traditional market gate. Morning chaos of vendors and visitors begins here.',
                        history:
                            "Entrance area buzzes from 5am. Restaurant workers buying fresh fish, tourists seeking breakfast sushi. Represents Tokyo's early rising food culture.",
                        task: 'Enter the bustling market',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 30,
                        category: 'entrance',
                        tips: 'Come before 9am for freshest selection',
                        nearbyFood: 'Entire market is food!',
                    },
                    {
                        order: 2,
                        id: 'tsukiji_sushi_dai',
                        name: 'Sushi Dai',
                        coords: { lat: 35.665, lng: 139.771 },
                        heading: 60,
                        emoji: '🍣',
                        description:
                            'Legendary sushi restaurant. 2-3 hour wait for omakase breakfast. Worth it - chefs trained at original market.',
                        history:
                            'Operating since 1960s. Moved from inner market 2018. Maintains direct connections to fish auction. 12-seat counter. Represents pinnacle of sushi craftsmanship.',
                        task: 'At minimum, see the famous line outside',
                        photos: [
                            'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
                            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
                        ],
                        reward: 50,
                        category: 'food',
                        tips: 'Arrive at 6am or accept 2+ hour wait',
                        nearbyFood: 'This IS the destination',
                    },
                    {
                        order: 3,
                        id: 'tsukiji_tamago',
                        name: 'Tsukiji Tamagoyaki Stands',
                        coords: { lat: 35.666, lng: 139.7705 },
                        heading: 30,
                        emoji: '🥚',
                        description:
                            'Sweet Japanese egg omelette on a stick. Perfect street food snack. Multiple competing shops.',
                        history:
                            'Traditional market food for workers. Each shop has secret sweet/savory ratio. Tamagoyaki (rolled omelette) originated as sushi component. Now popular street snack.',
                        task: 'Try tamagoyaki from any stand (¥200-300)',
                        photos: [
                            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
                        ],
                        reward: 35,
                        category: 'food',
                        tips: 'Get it fresh and hot',
                        nearbyFood: 'Street food everywhere',
                    },
                    {
                        order: 4,
                        id: 'tsukiji_knife',
                        name: 'Tsukiji Masamoto Knife Shop',
                        coords: { lat: 35.6648, lng: 139.7715 },
                        heading: 90,
                        emoji: '🔪',
                        description:
                            'Legendary knife maker since 1866. Supplies top sushi chefs worldwide. Each blade hand-forged.',
                        history:
                            'Over 150 years crafting knives. Every professional sushi chef in Japan knows this name. Knives priced $100-$2000+. Craftsmen can customize. Represents Japanese dedication to tools.',
                        task: 'View (or buy!) legendary Japanese cutlery',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 45,
                        category: 'shopping',
                        tips: 'Serious purchases - staff speak some English',
                        nearbyFood: 'Market stalls nearby',
                    },
                    {
                        order: 5,
                        id: 'tsukiji_namiyoke',
                        name: 'Namiyoke Inari Shrine',
                        coords: { lat: 35.6665, lng: 139.772 },
                        heading: 45,
                        emoji: '⛩️',
                        description:
                            'Protective shrine for fishermen and market workers. Unique giant sushi monument and tuna head shrine.',
                        history:
                            'Built 1659 to protect against waves during land reclamation. Market workers pray here for safety and good catch. Features sushi-themed ema (prayer plaques). Blends Shinto with fishing culture.',
                        task: 'Visit the shrine and see the tuna monument',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Quiet respite from market bustle',
                        nearbyFood: 'Return to market for food',
                    },
                    {
                        order: 6,
                        id: 'tsukiji_tea',
                        name: 'Traditional Tea Shops',
                        coords: { lat: 35.6658, lng: 139.77 },
                        heading: 180,
                        emoji: '🍵',
                        description:
                            'Traditional tea shops with fresh matcha, hojicha, and tea sweets. 80+ year family businesses.',
                        history:
                            'Family businesses for multiple generations. Provide tea to market restaurants. Represent Japanese tea culture. Can sample before buying. Many offer tea ceremony demonstrations.',
                        task: 'Sample fresh Japanese teas',
                        photos: [
                            'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800',
                        ],
                        reward: 35,
                        category: 'food',
                        tips: 'Ask for recommendations',
                        nearbyFood: 'Tea and sweets here',
                    },
                ],
            },

            {
                pathId: 'tsukiji_path_2',
                name: 'Kitchen Tools & Street Food',
                difficulty: 'medium',
                estimatedTime: '25-28 minutes',
                totalDistance: '750m',
                waypoints: [
                    {
                        order: 1,
                        id: 'tsukiji_wholesale',
                        name: 'Wholesale Fish Shops',
                        coords: { lat: 35.6645, lng: 139.7695 },
                        heading: 60,
                        emoji: '🐟',
                        description:
                            'Professional shops selling to restaurants. Can buy as individual if brave. Extremely fresh!',
                        history:
                            'These shops supply Tokyo restaurants. Maintain relationships with specific fishermen and boats. Negotiations happen in rapid-fire Japanese. Represents professional food world.',
                        task: 'Watch the professionals negotiate deals',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 40,
                        category: 'cultural',
                        tips: "Don't block vendors working",
                        nearbyFood: 'Not for casual dining',
                    },
                    {
                        order: 2,
                        id: 'tsukiji_kitchenware',
                        name: 'Professional Kitchenware Street',
                        coords: { lat: 35.6652, lng: 139.7708 },
                        heading: 45,
                        emoji: '🔧',
                        description:
                            "Restaurant supply shops. Everything from industrial fridges to sushi rice molds. Chef's paradise.",
                        history:
                            'Developed to serve market restaurants. Now attracts chefs from across Japan. One-stop shopping for restaurant needs. Shows scope of professional food preparation.',
                        task: 'Browse professional cooking equipment',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 35,
                        category: 'shopping',
                        tips: 'Some items for home cooks too',
                        nearbyFood: 'Surrounding market stalls',
                    },
                    {
                        order: 3,
                        id: 'tsukiji_unagi',
                        name: 'Unagi (Eel) Specialty Shops',
                        coords: { lat: 35.6655, lng: 139.7712 },
                        heading: 75,
                        emoji: '🐍',
                        description:
                            'Grilled eel specialists. Rich, sweet-savory sauce. Traditional Tokyo food.',
                        history:
                            'Unagi eating tradition dates to Edo period. Labor-intensive preparation - filleting, skewering, grilling. Each shop has secret sauce recipe passed through generations.',
                        task: 'Try unagi don (eel over rice) if you like eel',
                        photos: [
                            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
                        ],
                        reward: 45,
                        category: 'food',
                        tips: 'Expensive but worth trying',
                        nearbyFood: 'This is the food stop',
                    },
                    {
                        order: 4,
                        id: 'tsukiji_korean',
                        name: 'Korean-Japanese Food Stalls',
                        coords: { lat: 35.6648, lng: 139.7705 },
                        heading: 90,
                        emoji: '🥟',
                        description:
                            "Fusion area with Korean-influenced seafood. Represents Tokyo's Korean community.",
                        history:
                            'Korean community in Tsukiji dates to early 1900s. Created unique fusion dishes. Kimchi seafood combinations. Shows multicultural Tokyo food scene.',
                        task: 'Try Korean-style grilled fish or kimchi stew',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 40,
                        category: 'food',
                        tips: 'Spicy and delicious',
                        nearbyFood: 'Multiple stalls here',
                    },
                    {
                        order: 5,
                        id: 'tsukiji_pottery',
                        name: 'Ceramic & Tableware Shops',
                        coords: { lat: 35.6662, lng: 139.7698 },
                        heading: 0,
                        emoji: '🍶',
                        description:
                            'Traditional Japanese ceramics and restaurant-grade tableware. From rustic to elegant.',
                        history:
                            'Supply restaurants with plates, bowls, sake sets. Also sell to home users. Japanese dining emphasizes presentation. Each dish served on appropriate vessel.',
                        task: 'Browse beautiful Japanese ceramics',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 35,
                        category: 'shopping',
                        tips: 'Great souvenirs if packed carefully',
                        nearbyFood: 'Market continues all around',
                    },
                    {
                        order: 6,
                        id: 'tsukiji_warehouse',
                        name: 'Historic Warehouse District',
                        coords: { lat: 35.6668, lng: 139.7715 },
                        heading: 45,
                        emoji: '🏭',
                        description:
                            'Old market warehouses being converted. Mix of historical preservation and new development.',
                        history:
                            "Original 1935 market buildings. Some preserved as historical structures. Others becoming cafes, galleries. Represents market's evolution after inner market moved.",
                        task: 'See the blend of old and new Tsukiji',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'viewpoint',
                        tips: 'Area rapidly changing',
                        nearbyFood: 'New cafes opening',
                    },
                ],
            },

            {
                pathId: 'tsukiji_path_3',
                name: 'Hidden Alley & Local Route',
                difficulty: 'hard',
                estimatedTime: '22-27 minutes',
                totalDistance: '680m',
                waypoints: [
                    {
                        order: 1,
                        id: 'tsukiji_back_alley',
                        name: 'Market Back Alleys',
                        coords: { lat: 35.6642, lng: 139.7698 },
                        heading: 30,
                        emoji: '🏮',
                        description:
                            'Secret alleys locals use. Tiny shops, no tourists. Real market workers eat here.',
                        history:
                            'These alleys existed before tourist boom. Shops serve regulars - fishmongers, restaurant staff. No-frills, just quality. Represents authentic market culture.',
                        task: 'Navigate the narrow back passages',
                        photos: [
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                        ],
                        reward: 55,
                        secret: true,
                        category: 'hidden',
                        tips: 'Respectful behavior - working area',
                        nearbyFood: 'Local worker eateries',
                    },
                    {
                        order: 2,
                        id: 'tsukiji_tuna_shrine',
                        name: 'Tuna Head Memorial Corner',
                        coords: { lat: 35.6642, lng: 139.7698 },
                        heading: 60,
                        emoji: '🐟',
                        description:
                            'Hidden corner where old market workers leave offerings to giant tuna heads. Local tradition rarely seen.',
                        history:
                            'Workers honor the fish that built the market. Small shrine-like area with tuna memorabilia. Represents gratitude in Japanese culture. Not tourist attraction - genuine tradition.',
                        task: "Observe (don't touch) this sacred worker tradition",
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 60,
                        secret: true,
                        category: 'hidden',
                        tips: 'Be very respectful - sacred to workers',
                        nearbyFood: 'Quiet observation area',
                    },
                    {
                        order: 3,
                        id: 'tsukiji_workers_cafe',
                        name: "Market Workers' Café",
                        coords: { lat: 35.6655, lng: 139.7703 },
                        heading: 90,
                        emoji: '☕',
                        description:
                            'Unglamorous café where actual market workers take breaks. Cheap, fast, authentic.',
                        history:
                            "Open since market's early days. Serves simple food fast and cheap. No English menu. Cash only. Grandmother has run it for 40 years. Authentic slice of market life.",
                        task: 'Have simple breakfast with the workers (if brave)',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 50,
                        secret: true,
                        category: 'food',
                        tips: 'Point at menu pictures',
                        nearbyFood: 'Simple but authentic',
                    },
                    {
                        order: 4,
                        id: 'tsukiji_parking_view',
                        name: 'Delivery Truck Area',
                        coords: { lat: 35.6665, lng: 139.7708 },
                        heading: 180,
                        emoji: '🚛',
                        description:
                            'Loading zone where market operations happen. See the logistics behind the scenes.',
                        history:
                            'Market moves tons of fish daily. Choreographed loading/unloading. Drivers know exact timing. Represents invisible infrastructure of food supply.',
                        task: 'Observe the efficient market operations',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 40,
                        category: 'viewpoint',
                        tips: "Stay out of workers' way",
                        nearbyFood: 'Working area - no food',
                    },
                    {
                        order: 5,
                        id: 'tsukiji_temple_back',
                        name: 'Namiyoke Shrine Back Path',
                        coords: { lat: 35.667, lng: 139.7718 },
                        heading: 90,
                        emoji: '⛩️',
                        description:
                            'Quiet back approach to shrine. Local shortcut with small sub-shrines.',
                        history:
                            'Path used by workers before shift for quick prayer. Sub-shrines to different fishing deities. Moss-covered stones, ancient trees. Peaceful contrast to market chaos.',
                        task: 'Take the peaceful shrine path',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 45,
                        secret: true,
                        category: 'hidden',
                        tips: 'Morning is most atmospheric',
                        nearbyFood: 'Spiritual area',
                    },
                    {
                        order: 6,
                        id: 'tsukiji_dawn_spot',
                        name: 'Dawn Viewing Corner',
                        coords: { lat: 35.6658, lng: 139.7722 },
                        heading: 120,
                        emoji: '🌅',
                        description:
                            'Best spot to watch market wake up. 5am activity with Tokyo Bay sunrise behind.',
                        history:
                            'Photographers discovered this corner. Shows market transformation from dark to bustling. Tokyo Bay sunrise illuminates the scene. Magical but requires early wake-up.',
                        task: 'If willing, come at dawn (5-6am) to see market awaken',
                        photos: [
                            'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800',
                        ],
                        reward: 55,
                        secret: true,
                        category: 'viewpoint',
                        tips: 'Only for early birds',
                        nearbyFood: 'Early morning breakfast stalls',
                    },
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════
    // 7. UENO PARK - 3 ADVENTURE ROUTES
    // ═══════════════════════════════════════════════════════════
    'Ueno Park': {
        mainDestination: {
            name: 'Ueno Park Central Plaza',
            coords: { lat: 35.7145, lng: 139.7725 },
            emoji: '🌸',
            foundingYear: 1873,
            description:
                "One of Japan's first public parks. 800+ cherry trees, museums, zoo, temples. Cultural heart of Tokyo.",
            history:
                "Designated public park 1873, one of Japan's first five. Former grounds of Kaneiji Temple. Cherry tree avenue planted during Edo period. Famous hanami spot since 17th century. Survived WWII relatively intact. Houses Tokyo National Museum, Ueno Zoo, multiple museums.",
            photos: [
                'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
            ],
        },

        paths: [
            {
                pathId: 'ueno_path_1',
                name: 'Museum & Culture Route',
                difficulty: 'easy',
                estimatedTime: '22-27 minutes',
                totalDistance: '780m',
                waypoints: [
                    {
                        order: 1,
                        id: 'ueno_station',
                        name: 'Ueno Station Park Exit',
                        coords: { lat: 35.7138, lng: 139.777 },
                        heading: 270,
                        emoji: '🚉',
                        description:
                            'Historic station built 1883. Gateway to northern Japan. Grand entrance to park.',
                        history:
                            'Terminal for trains to northern Japan since 1883. Represents journeys and homecomings. Featured in films and songs. Architecture combines Western and Japanese styles. Still major transportation hub.',
                        task: 'Exit toward Ueno Park',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 30,
                        category: 'entrance',
                        tips: 'Use Park Exit for direct access',
                        nearbyFood: 'Station has endless options',
                    },
                    {
                        order: 2,
                        id: 'ueno_saigo',
                        name: 'Saigo Takamori Statue',
                        coords: { lat: 35.713, lng: 139.7738 },
                        heading: 300,
                        emoji: '🗿',
                        description:
                            'Bronze statue of samurai leader Saigo Takamori with his dog. Last samurai inspiration.',
                        history:
                            "Saigo Takamori led Satsuma Rebellion 1877 - last samurai uprising. Died in battle but remains national hero. Statue erected 1898. Inspired 'The Last Samurai' film. Meeting spot in park.",
                        task: "Meet the 'Last Samurai' statue",
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Popular photo spot',
                        nearbyFood: 'Food stalls nearby',
                    },
                    {
                        order: 3,
                        id: 'ueno_national_museum',
                        name: 'Tokyo National Museum',
                        coords: { lat: 35.7188, lng: 139.7765 },
                        heading: 0,
                        emoji: '🏛️',
                        description:
                            "Japan's oldest and largest museum. 110,000+ artifacts of Japanese art and archaeology. National treasures housed here.",
                        history:
                            'Founded 1872, oldest museum in Japan. Main building (1938) combines Western and Japanese architecture. Collections span 10,000 years. Contains 89 national treasures. Represents Japanese cultural preservation.',
                        task: 'View the impressive museum buildings (entry ¥1,000)',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 50,
                        category: 'cultural',
                        tips: 'Allow 2+ hours if entering',
                        nearbyFood: 'Museum cafe available',
                    },
                    {
                        order: 4,
                        id: 'ueno_toshogu',
                        name: 'Ueno Toshogu Shrine',
                        coords: { lat: 35.7165, lng: 139.7733 },
                        heading: 180,
                        emoji: '⛩️',
                        description:
                            'Ornate shrine dedicated to Tokugawa Ieyasu. Gold-leaf decorations, survived WWII bombings. 600-year-old ginkgo tree.',
                        history:
                            'Built 1627, rebuilt 1651. Only structure in Ueno to survive 1868 battle. Gold-leaf work rivals Nikko Toshogu. Protected by fortune - bombs fell all around but shrine untouched. 600-year-old ginkgo tree still thrives.',
                        task: 'View the golden shrine (¥500 entry)',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Worth the small entry fee',
                        nearbyFood: 'Tea house in grounds',
                    },
                    {
                        order: 5,
                        id: 'ueno_zoo_entrance',
                        name: 'Ueno Zoo Main Gate',
                        coords: { lat: 35.7155, lng: 139.7728 },
                        heading: 270,
                        emoji: '🐼',
                        description:
                            "Japan's oldest zoo (1882). Home to giant pandas Ri Ri and Shin Shin. 3000+ animals from 400 species.",
                        history:
                            "First zoo in Japan, opened 1882. Originally in Imperial Household. Giant pandas arrived 1972 as gift from China. Every panda birth is national news. Represents Japan's connection to nature in urban setting.",
                        task: 'See the zoo entrance (entry ¥600 if visiting)',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 45,
                        category: 'attraction',
                        tips: 'Panda viewing requires timed ticket',
                        nearbyFood: 'Zoo has food stalls',
                    },
                    {
                        order: 6,
                        id: 'ueno_sakura_avenue',
                        name: 'Cherry Blossom Main Avenue',
                        coords: { lat: 35.7145, lng: 139.7725 },
                        heading: 220,
                        emoji: '🌸',
                        description:
                            "Famous hanami spot with 800+ cherry trees. Spring festival with lanterns and food stalls. One of Tokyo's best.",
                        history:
                            "Cherry trees planted in Edo period. One of Tokyo's best hanami spots since 17th century. During bloom (late March-early April), millions visit. Evening lanterns create magical atmosphere. Represents Japanese celebration of transient beauty.",
                        task: 'Walk under the cherry tree canopy',
                        photos: [
                            'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 50,
                        category: 'nature',
                        tips: 'Peak bloom late March-early April',
                        nearbyFood: 'Festival stalls during hanami',
                    },
                ],
            },

            {
                pathId: 'ueno_path_2',
                name: 'Pond & Temple Route',
                difficulty: 'medium',
                estimatedTime: '24-28 minutes',
                totalDistance: '820m',
                waypoints: [
                    {
                        order: 1,
                        id: 'ueno_shinobazu_south',
                        name: 'Shinobazu Pond South Shore',
                        coords: { lat: 35.7108, lng: 139.7705 },
                        heading: 0,
                        emoji: '🦆',
                        description:
                            'Natural pond with lotus flowers (summer) and waterfowl. Bentendo Temple on island in center.',
                        history:
                            "Natural pond that survived city development. Name from shinobazu (忍ばず) meaning 'not hidden'. Summer lotus blooms cover entire surface. Winter brings migratory birds. Represents natural persistence in urban environment.",
                        task: 'Walk along the peaceful pond shore',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 40,
                        category: 'nature',
                        tips: 'June-August for lotus blooms',
                        nearbyFood: 'Cafes along shore',
                    },
                    {
                        order: 2,
                        id: 'ueno_bentendo',
                        name: 'Bentendo Temple',
                        coords: { lat: 35.7118, lng: 139.7708 },
                        heading: 45,
                        emoji: '⛩️',
                        description:
                            'Octagonal temple on island in pond. Dedicated to Benzaiten, goddess of music and water. Connected by causeway.',
                        history:
                            'Built 1625, current structure from 1958. Octagonal shape unusual in Japan. Benzaiten is Hindu goddess adopted into Buddhism. During Edo period, temple attracted artists and musicians. Survived by being on island during 1945 bombing.',
                        task: 'Cross to the island temple',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Beautiful lotus views in summer',
                        nearbyFood: 'Temple grounds quiet area',
                    },
                    {
                        order: 3,
                        id: 'ueno_kiyomizu',
                        name: 'Kiyomizu Kannon-do Temple',
                        coords: { lat: 35.7133, lng: 139.772 },
                        heading: 90,
                        emoji: '🏯',
                        description:
                            "Temple modeled after Kyoto's Kiyomizu-dera. Stage overlooks pond. Known for doll memorial service.",
                        history:
                            'Built 1631, one of few surviving Edo period buildings in Ueno. Modeled after famous Kyoto temple. Holds annual doll memorial service - parents bring dolls for blessing and burial. Represents Japanese relationship with objects.',
                        task: 'Visit the temple stage with pond views',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Quiet contemplative spot',
                        nearbyFood: 'Park path continues',
                    },
                    {
                        order: 4,
                        id: 'ueno_gojoten',
                        name: 'Gojo Tenjin Shrine',
                        coords: { lat: 35.7125, lng: 139.7715 },
                        heading: 120,
                        emoji: '⛩️',
                        description:
                            "Small shrine famous for plum blossoms. One of Tokyo's 'Three Great Tenjin Shrines'. Honors scholar Sugawara no Michizane.",
                        history:
                            'Founded 1457. Tenjin shrines honor Sugawara no Michizane, patron of learning. Students pray here before exams. 300 plum trees bloom in February (earlier than cherry). Less known but locally beloved.',
                        task: 'Visit the scholarly shrine',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'February for plum blossoms',
                        nearbyFood: 'Park continues',
                    },
                    {
                        order: 5,
                        id: 'ueno_seiyoken',
                        name: 'Seiyoken Restaurant',
                        coords: { lat: 35.714, lng: 139.7715 },
                        heading: 45,
                        emoji: '🍽️',
                        description:
                            "Historic Western restaurant opened 1876. One of Tokyo's first Western dining establishments. Victorian building.",
                        history:
                            "Opened 1876 during Meiji modernization. Introduced Western cuisine to Japanese public. Original building survived until 1945, rebuilt faithfully. Menu includes historic dishes. Represents Japan's adoption of Western culture.",
                        task: 'See the historic Victorian building',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Expensive but historical experience',
                        nearbyFood: 'This is dining destination',
                    },
                    {
                        order: 6,
                        id: 'ueno_fountain',
                        name: 'Central Fountain Plaza',
                        coords: { lat: 35.7148, lng: 139.772 },
                        heading: 0,
                        emoji: '⛲',
                        description:
                            'Main gathering spot in park. Fountain surrounded by open space. Popular for street performers and relaxation.',
                        history:
                            "Created as central meeting point. During cherry blossom season becomes picnic central - tarps cover every inch. Musicians, artists, families gather here. Represents park's role as democratic public space.",
                        task: 'Relax at the fountain',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 35,
                        category: 'viewpoint',
                        tips: 'Great people watching',
                        nearbyFood: 'Vending machines and vendors',
                    },
                ],
            },

            {
                pathId: 'ueno_path_3',
                name: 'Ameyoko Shopping Street Route',
                difficulty: 'medium',
                estimatedTime: '25-30 minutes',
                totalDistance: '850m',
                waypoints: [
                    {
                        order: 1,
                        id: 'ueno_ameyoko_north',
                        name: 'Ameyoko North Entrance',
                        coords: { lat: 35.7105, lng: 139.774 },
                        heading: 180,
                        emoji: '🏪',
                        description:
                            'Bustling market street under train tracks. 400+ shops selling food, clothes, cosmetics at discount. Post-war market atmosphere.',
                        history:
                            "Post-war black market selling American goods ('Ame-ya' = candy shop or American shop). Thrived despite being informal economy. Legalized and became shopping street. Retro atmosphere preserved. Represents Tokyo's post-war recovery.",
                        task: 'Enter the chaotic market street',
                        photos: [
                            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                        ],
                        reward: 45,
                        category: 'shopping',
                        tips: 'Bargaining sometimes possible',
                        nearbyFood: 'Street food everywhere',
                    },
                    {
                        order: 2,
                        id: 'ueno_seafood_stalls',
                        name: 'Fresh Seafood Area',
                        coords: { lat: 35.7095, lng: 139.7742 },
                        heading: 200,
                        emoji: '🦀',
                        description:
                            'Vendors shout prices, crabs crawl in tanks. Fresh and dried seafood at good prices.',
                        history:
                            'Connection to Tsukiji suppliers. Vendors use traditional selling style - shouting, rapid-fire deals. Represents old Tokyo shopping culture. Mix of professional chefs and home cooks shop here.',
                        task: 'Experience the energetic vendors',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 40,
                        category: 'shopping',
                        tips: 'Morning is freshest',
                        nearbyFood: 'Can buy and eat immediately',
                    },
                    {
                        order: 3,
                        id: 'ueno_korean_street',
                        name: 'Korean Food Section',
                        coords: { lat: 35.7092, lng: 139.7745 },
                        heading: 190,
                        emoji: '🌶️',
                        description:
                            "Korean grocery stores, kimchi shops, Korean BBQ restaurants. Tokyo's Korean community hub.",
                        history:
                            "Korean community established post-war. Created mini-Korea in central Tokyo. Shops import directly from Korea. Represents Tokyo's multiculturalism. Now trendy with K-pop/K-drama fans.",
                        task: 'Browse Korean ingredients and snacks',
                        photos: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
                        reward: 40,
                        category: 'food',
                        tips: 'Try Korean street food',
                        nearbyFood: 'Authentic Korean cuisine',
                    },
                    {
                        order: 4,
                        id: 'ueno_sports_shoes',
                        name: 'Discount Sports Gear Area',
                        coords: { lat: 35.709, lng: 139.7748 },
                        heading: 180,
                        emoji: '👟',
                        description:
                            'Shops selling athletic wear, shoes, outdoor gear at 30-50% off retail. Liquidation specialists.',
                        history:
                            "Developed specialty in discounted athletic gear. Connections to factory outlets. Popular with students and budget shoppers. Represents Japan's price-conscious shopping culture.",
                        task: 'Browse discount sportswear',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 35,
                        category: 'shopping',
                        tips: 'Inspect carefully - sometimes seconds',
                        nearbyFood: 'Continue street for food',
                    },
                    {
                        order: 5,
                        id: 'ueno_spice_alley',
                        name: 'International Spice Shops',
                        coords: { lat: 35.7088, lng: 139.7745 },
                        heading: 200,
                        emoji: '🌶️',
                        description:
                            "Indian, Southeast Asian spice shops. Import stores serving Tokyo's diverse communities.",
                        history:
                            "Developed as international food suppliers. Indian, Thai, Vietnamese, Chinese communities shop here. Find ingredients impossible to get elsewhere. Represents modern Tokyo's diversity.",
                        task: 'Smell the exotic spices',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'shopping',
                        tips: 'Great for home cooking',
                        nearbyFood: 'Ethnic restaurants nearby',
                    },
                    {
                        order: 6,
                        id: 'ueno_okachimachi',
                        name: 'Okachimachi Station South',
                        coords: { lat: 35.7083, lng: 139.7745 },
                        heading: 180,
                        emoji: '🚉',
                        description:
                            'Southern end of Ameyoko. Jewelry shops and watch stores in this area.',
                        history:
                            "Okachimachi means 'below the hill'. Historically lower-class merchant area. Now jewelry district. Ameyoko connects Ueno and Okachimachi stations. Represents Tokyo's economic diversity.",
                        task: 'Complete the Ameyoko walk',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 35,
                        category: 'viewpoint',
                        tips: 'Can return to Ueno via Yamanote Line',
                        nearbyFood: 'Station area has dining',
                    },
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════
    // 8. AKIHABARA - 3 ADVENTURE ROUTES
    // ═══════════════════════════════════════════════════════════
    Akihabara: {
        mainDestination: {
            name: 'Akihabara Electric Town',
            coords: { lat: 35.6985, lng: 139.7735 },
            emoji: '⚡',
            foundingYear: 1949,
            description:
                "Otaku paradise! Electronics, anime, manga, games, maid cafes. Tokyo's geek culture epicenter.",
            history:
                "Post-WWII black market for radio parts. Became 'Electric Town' in 1950s-60s. Transformed into anime/gaming mecca 1980s-90s. Now global symbol of Japanese pop culture. Represents Japan's technological and cultural exports.",
            photos: [
                'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
            ],
        },

        paths: [
            {
                pathId: 'akiba_path_1',
                name: 'Otaku Culture Route',
                difficulty: 'easy',
                estimatedTime: '22-26 minutes',
                totalDistance: '720m',
                waypoints: [
                    {
                        order: 1,
                        id: 'akiba_station_electric',
                        name: 'Akihabara Electric Town Exit',
                        coords: { lat: 35.6982, lng: 139.7742 },
                        heading: 270,
                        emoji: '🚉',
                        description:
                            'Exit into otaku paradise. Immediately surrounded by anime, electronics, maid cafes.',
                        history:
                            "Station opened 1890, rebuilt many times. 'Electric Town Exit' added 1950s. Gateway to geek culture. Represents Akihabara's transformation from electronics to anime hub.",
                        task: 'Exit into the neon wonderland',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                        ],
                        reward: 30,
                        category: 'entrance',
                        tips: 'Overwhelming at first - embrace it!',
                        nearbyFood: 'Everywhere!',
                    },
                    {
                        order: 2,
                        id: 'akiba_radio_kaikan',
                        name: 'Radio Kaikan',
                        coords: { lat: 35.6985, lng: 139.7735 },
                        heading: 0,
                        emoji: '🤖',
                        description:
                            'Iconic 10-story building. Anime figures, Gundam models, retro toys on every floor. Ground zero for collectors.',
                        history:
                            'Built 1962 as radio parts building. Rebuilt 2014 as comprehensive hobby center. Featured in Steins;Gate anime. Each floor specializes: figures, models, cards, vintage toys. Symbol of Akiba culture.',
                        task: 'Browse the 10 floors of otaku goods',
                        photos: [
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
                        ],
                        reward: 50,
                        category: 'shopping',
                        tips: 'Can spend hours here',
                        nearbyFood: 'Vending machines on each floor',
                    },
                    {
                        order: 3,
                        id: 'akiba_maid_cafe',
                        name: '@home cafe (Original Maid Cafe)',
                        coords: { lat: 35.7008, lng: 139.7742 },
                        heading: 0,
                        emoji: '👸',
                        description:
                            "Original maid cafe from 2001. Maids greet with 'Welcome home, Master!' Unique Japanese experience.",
                        history:
                            'Pioneer of maid cafe boom starting 2001. Inspired by anime/manga culture. Staff dressed as Victorian maids serve themed food/drinks. Became global symbol of Akiba. Kawaii culture incarnate.',
                        task: 'Experience (or at least see) maid cafe culture',
                        photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Photos cost extra - ask first',
                        nearbyFood: 'Themed food and drinks',
                    },
                    {
                        order: 4,
                        id: 'akiba_animate',
                        name: 'Animate Akihabara',
                        coords: { lat: 35.7002, lng: 139.7738 },
                        heading: 180,
                        emoji: '📚',
                        description:
                            'Massive 9-floor anime/manga store. Latest releases, doujinshi, character goods, cosplay supplies.',
                        history:
                            'Animate chain started 1983. Akiba flagship is largest. Ground floor latest anime. Basement has adult content. Upper floors character goods sorted by series. Represents organized otaku shopping.',
                        task: 'Browse the latest anime merchandise',
                        photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'],
                        reward: 45,
                        category: 'shopping',
                        tips: 'Floors organized by genre',
                        nearbyFood: 'Themed cafes nearby',
                    },
                    {
                        order: 5,
                        id: 'akiba_sega',
                        name: 'Sega Akihabara Arcade',
                        coords: { lat: 35.6995, lng: 139.7735 },
                        heading: 90,
                        emoji: '🕹️',
                        description:
                            '6-floor arcade. Latest rhythm games, crane games (UFO catchers), retro cabinets, photo booths.',
                        history:
                            'Sega flagship arcade. Ground zero for Japanese arcade culture. Rhythm games like Mai Mai, Chunithm popular. Crane games filled with anime prizes. Arcade culture still thrives in Japan.',
                        task: 'Try your skill at crane games or rhythm games',
                        photos: [
                            'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
                        ],
                        reward: 40,
                        category: 'entertainment',
                        tips: '¥100 coins needed - change machines available',
                        nearbyFood: 'Vending machines in arcade',
                    },
                    {
                        order: 6,
                        id: 'akiba_gundam_cafe',
                        name: 'Gundam Cafe',
                        coords: { lat: 35.6988, lng: 139.7733 },
                        heading: 180,
                        emoji: '🤖',
                        description:
                            'Official Gundam franchise cafe. Gundam-shaped food, themed drinks, staff in Federation uniforms.',
                        history:
                            'Opened 2009 celebrating 30 years of Gundam. Official Bandai Namco cafe. Menu includes Zaku-curry, Gundam latte art. Represents commercialization of anime properties.',
                        task: 'See (or eat) Gundam-themed food',
                        photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'],
                        reward: 40,
                        category: 'food',
                        tips: 'Limited edition items sell out fast',
                        nearbyFood: 'Themed menu here',
                    },
                ],
            },

            {
                pathId: 'akiba_path_2',
                name: 'Retro Gaming & Electronics',
                difficulty: 'medium',
                estimatedTime: '24-28 minutes',
                totalDistance: '800m',
                waypoints: [
                    {
                        order: 1,
                        id: 'akiba_super_potato',
                        name: 'Super Potato Retro-kan',
                        coords: { lat: 35.7018, lng: 139.773 },
                        heading: 0,
                        emoji: '🎮',
                        description:
                            'Retro game paradise! 5 floors of classic Nintendo, Sega, PlayStation. Working arcade floor on top.',
                        history:
                            'Preserves gaming history. Famicom, Super Famicom, Mega Drive, PlayStation games. Some sealed, some loose. Top floor has working arcade cabinets. Popular with collectors and nostalgic gamers.',
                        task: 'Browse retro games from 1980s-2000s',
                        photos: [
                            'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
                        ],
                        reward: 50,
                        category: 'shopping',
                        tips: 'Check condition before buying',
                        nearbyFood: 'Rooftop arcade floor',
                    },
                    {
                        order: 2,
                        id: 'akiba_mandarake',
                        name: 'Mandarake Complex',
                        coords: { lat: 35.7015, lng: 139.7738 },
                        heading: 180,
                        emoji: '📚',
                        description:
                            '8-floor used manga/anime/toy store. Rare collectibles, vintage toys, doujinshi. Treasure hunting paradise.',
                        history:
                            "Started 1987 as tiny used manga shop. Now Japan's largest used anime goods chain. Each floor themed: manga, figures, cosplay, adult goods. Represents secondary otaku market.",
                        task: 'Hunt for rare collectibles',
                        photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'],
                        reward: 50,
                        category: 'shopping',
                        tips: 'Prices negotiable on expensive items',
                        nearbyFood: "So engrossing you'll forget food",
                    },
                    {
                        order: 3,
                        id: 'akiba_yodobashi',
                        name: 'Yodobashi-Akiba',
                        coords: { lat: 35.6988, lng: 139.771 },
                        heading: 270,
                        emoji: '🏢',
                        description:
                            'Massive 9-floor electronics superstore. Cameras, computers, appliances, toys, restaurants. One-stop shopping.',
                        history:
                            'Opened 2005, changed Akiba landscape. Traditional big-box retailer. Tax-free shopping for tourists. Represents mainstream vs. otaku Akiba. Has everything including restaurants, clinics.',
                        task: 'Experience mega-electronics store',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'shopping',
                        tips: 'English-speaking staff available',
                        nearbyFood: 'Restaurant floors 8-9',
                    },
                    {
                        order: 4,
                        id: 'akiba_sofmap',
                        name: 'Sofmap Used Electronics',
                        coords: { lat: 35.6998, lng: 139.7728 },
                        heading: 90,
                        emoji: '💻',
                        description:
                            'Used electronics specialist. Cameras, computers, tablets, games. Test before buying.',
                        history:
                            'Chain specializing in used/refurbished electronics. Thorough testing and grading. Popular with budget shoppers and professionals seeking specific older models. Represents Japanese used goods market.',
                        task: 'Browse used cameras and electronics',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'shopping',
                        tips: 'Check warranty and condition grades',
                        nearbyFood: 'Vending machines',
                    },
                    {
                        order: 5,
                        id: 'akiba_parts_street',
                        name: 'Electronics Parts Street',
                        coords: { lat: 35.7005, lng: 139.772 },
                        heading: 270,
                        emoji: '🔌',
                        description:
                            'Original Akiba! Tiny shops selling resistors, capacitors, cables, tools. For serious electronics hobbyists.',
                        history:
                            "This is what Akiba was - electronics components. Post-war radio repair parts market. Shrinking but still serves electronics engineers and hobbyists. Represents Akiba's origins.",
                        task: 'See the original Electric Town spirit',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Staff very knowledgeable if you speak Japanese',
                        nearbyFood: 'Old-school cafes nearby',
                    },
                    {
                        order: 6,
                        id: 'akiba_liberty',
                        name: 'Liberty (Junk Shop)',
                        coords: { lat: 35.7012, lng: 139.7725 },
                        heading: 0,
                        emoji: '🔧',
                        description:
                            "Junk electronics store. Broken goods, spare parts, mystery boxes. Tinkerer's paradise.",
                        history:
                            "Sells broken/untested electronics cheaply. Popular with hackers, artists, experimenters. 'Junk' culture - finding value in broken things. Very Japanese approach to waste.",
                        task: 'Explore the chaotic junk treasure trove',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 45,
                        secret: true,
                        category: 'hidden',
                        tips: 'Cash only, no returns',
                        nearbyFood: 'Bring your own',
                    },
                ],
            },

            {
                pathId: 'akiba_path_3',
                name: 'Hidden Culture & Shrine Route',
                difficulty: 'hard',
                estimatedTime: '26-30 minutes',
                totalDistance: '880m',
                waypoints: [
                    {
                        order: 1,
                        id: 'akiba_kanda_myojin',
                        name: 'Kanda Myojin Shrine',
                        coords: { lat: 35.7025, lng: 139.7685 },
                        heading: 270,
                        emoji: '⛩️',
                        description:
                            'Ancient shrine (730 AD) that blesses tech businesses and otaku. Anime-themed ema prayer boards!',
                        history:
                            'Founded 730 AD, over 1,200 years old. Traditionally protects Kanda/Akiba district. Tech companies pray here for success. Sold anime collaboration ema and charms. Featured in Love Live! anime. Unique blend of ancient and modern.',
                        task: 'See anime ema boards and tech company offerings',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 50,
                        category: 'cultural',
                        tips: 'Festivals in May and September',
                        nearbyFood: 'Shrine has amazake (sweet sake)',
                    },
                    {
                        order: 2,
                        id: 'akiba_2k540',
                        name: '2k540 Aki-Oka Artisan',
                        coords: { lat: 35.7005, lng: 139.7755 },
                        heading: 90,
                        emoji: '🎨',
                        description:
                            'Hidden artisan shops under railway tracks. Handmade leather goods, jewelry, crafts. Secret Akiba.',
                        history:
                            'Opened 2010 in renovated railway arches. Name from distance marker (2km 540m from Tokyo Station). Craftspeople create custom goods. Represents artisan side of tech district. Tourists rarely find this.',
                        task: 'Discover the hidden artisan arcade',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                        ],
                        reward: 60,
                        secret: true,
                        category: 'hidden',
                        tips: 'Open 11am-7pm, closed Wednesdays',
                        nearbyFood: 'Cafe in complex',
                    },
                    {
                        order: 3,
                        id: 'akiba_backstreet',
                        name: 'Akiba Back Alley Shops',
                        coords: { lat: 35.7008, lng: 139.772 },
                        heading: 240,
                        emoji: '🏮',
                        description:
                            'Narrow alleys with tiny specialty shops. Adult goods, military surplus, weird electronics. Real Akiba.',
                        history:
                            'These alleys predate mainstream Akiba tourism. Serve specific niche markets. Some shops same family 50+ years. Represents underground side of otaku culture.',
                        task: 'Navigate the specialist back alleys',
                        photos: [
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                        ],
                        reward: 55,
                        secret: true,
                        category: 'hidden',
                        tips: 'Respectful curiosity appreciated',
                        nearbyFood: 'Hole-in-wall eateries',
                    },
                    {
                        order: 4,
                        id: 'akiba_chuo_dori',
                        name: 'Chuo Dori Pedestrian Zone',
                        coords: { lat: 35.7, lng: 139.7733 },
                        heading: 180,
                        emoji: '🚶',
                        description:
                            'Main street closed to cars on Sundays. Cosplayers gather, street performers, idols recruit.',
                        history:
                            'Pedestrian heaven since 2000s. Sundays transform into performance space. Aspiring idols hand out flyers, cosplayers pose for photos. Shows public space dynamism.',
                        task: 'Experience pedestrian paradise (best on Sunday)',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Sunday afternoons most active',
                        nearbyFood: 'Food trucks on pedestrian days',
                    },
                    {
                        order: 5,
                        id: 'akiba_idol_stage',
                        name: 'Akiba Cultures Zone (Idol Stage)',
                        coords: { lat: 35.701, lng: 139.7745 },
                        heading: 0,
                        emoji: '🎤',
                        description:
                            'Small venue where idol groups perform. Free mini-concerts. Where stars are born.',
                        history:
                            'Akihabara became idol culture center. AKB48 (Akihabara 48) started here 2005. Small venues host aspiring groups daily. Fans support favorites. Represents grassroots entertainment industry.',
                        task: 'Catch a free idol performance (check schedule)',
                        photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'],
                        reward: 45,
                        category: 'entertainment',
                        tips: 'Evening performances common',
                        nearbyFood: 'Nearby convenience stores',
                    },
                    {
                        order: 6,
                        id: 'akiba_don_quijote',
                        name: 'Don Quijote Akiba',
                        coords: { lat: 35.6992, lng: 139.7745 },
                        heading: 180,
                        emoji: '🎡',
                        description:
                            '24-hour discount megastore with Ferris wheel on roof! 8 floors of everything. Akiba landmark.',
                        history:
                            'Don Quijote flagship has Ferris wheel visible across Akiba. Open 24 hours. Tax-free shopping. Organized chaos - maze of products. Represents consumer culture extreme.',
                        task: 'Ride the rooftop Ferris wheel for Akiba views',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                        ],
                        reward: 45,
                        category: 'landmark',
                        tips: 'Ferris wheel ¥500, great photo spot',
                        nearbyFood: '8 floors include food floor',
                    },
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════
    // 9. ROPPONGI HILLS - 3 ADVENTURE ROUTES (FINAL!)
    // ═══════════════════════════════════════════════════════════
    'Roppongi Hills': {
        mainDestination: {
            name: 'Roppongi Hills Mori Tower',
            coords: { lat: 35.6605, lng: 139.7295 },
            emoji: '🏙️',
            foundingYear: 2003,
            description:
                'Ultra-modern urban development. 238m Mori Tower with observation deck, art museum, luxury shopping, offices. Symbol of 21st century Tokyo.',
            history:
                "17-year redevelopment project completed 2003. Built on former TV Asahi site. Mori Building's urban vision - 'vertical garden city'. Houses Google Japan offices, Grand Hyatt hotel, Mori Art Museum, Tokyo City View observation deck. Represents Tokyo's continuous reinvention.",
            photos: [
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
            ],
        },

        paths: [
            {
                pathId: 'roppongi_path_1',
                name: 'Art & Observation Route',
                difficulty: 'easy',
                estimatedTime: '20-25 minutes',
                totalDistance: '680m',
                waypoints: [
                    {
                        order: 1,
                        id: 'roppongi_metro',
                        name: 'Roppongi Station Exit 1C',
                        coords: { lat: 35.6627, lng: 139.7308 },
                        heading: 180,
                        emoji: '🚇',
                        description:
                            'Direct connection to Roppongi Hills. Modern underground shopping connects multiple train lines.',
                        history:
                            "Station serves Hibiya Line and Oedo Line. Underground passages added with Hills development. Represents Tokyo's integrated urban planning - stations become destinations.",
                        task: 'Navigate underground to Hills entrance',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 30,
                        category: 'entrance',
                        tips: 'Follow Roppongi Hills signs',
                        nearbyFood: 'Underground has cafes',
                    },
                    {
                        order: 2,
                        id: 'roppongi_maman',
                        name: 'Maman Spider Sculpture',
                        coords: { lat: 35.6603, lng: 139.7293 },
                        heading: 0,
                        emoji: '🕷️',
                        description:
                            'Giant bronze spider by Louise Bourgeois. 9 meters tall, guards entrance. Iconic photo spot.',
                        history:
                            "Installed 2003. Titled 'Maman' (Mother in French). Bourgeois created series of spiders representing motherhood - protective yet fierce. Part of Hills' public art collection. Loved and feared in equal measure.",
                        task: 'Stand beneath the massive spider for scale photos',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                        ],
                        reward: 40,
                        category: 'art',
                        tips: 'Best photos from low angle',
                        nearbyFood: 'Surrounded by restaurants',
                    },
                    {
                        order: 3,
                        id: 'roppongi_66_plaza',
                        name: '66 Plaza',
                        coords: { lat: 35.6608, lng: 139.729 },
                        heading: 90,
                        emoji: '🎭',
                        description:
                            'Open plaza hosting events, markets, performances. Community heart of Roppongi Hills.',
                        history:
                            "Named for Roppongi's coordinates (6-6). Designed as gathering space. Hosts art installations, food markets, concerts. Represents urban plaza as social space - rare in dense Tokyo.",
                        task: 'Cross the bustling plaza',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 35,
                        category: 'viewpoint',
                        tips: 'Check event schedule online',
                        nearbyFood: 'Plaza cafes and restaurants',
                    },
                    {
                        order: 4,
                        id: 'roppongi_tv_asahi',
                        name: 'TV Asahi Headquarters',
                        coords: { lat: 35.6598, lng: 139.7298 },
                        heading: 180,
                        emoji: '📺',
                        description:
                            'Futuristic TV station building with public atrium. Doraemon cafe and merchandise inside.',
                        history:
                            'Designed by Fumihiko Maki, opened 2003. Glass-enclosed atrium visible from outside. Features Doraemon (popular robot cat character) cafe. TV Asahi produces popular anime and dramas. Public can visit ground floor.',
                        task: 'Visit the Doraemon cafe (if you have time)',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'entertainment',
                        tips: 'Ground floor free to enter',
                        nearbyFood: 'Doraemon cafe inside',
                    },
                    {
                        order: 5,
                        id: 'roppongi_mori_art',
                        name: 'Mori Art Museum Entrance',
                        coords: { lat: 35.6605, lng: 139.7293 },
                        heading: 0,
                        emoji: '🎨',
                        description:
                            'Contemporary art museum on 52nd-53rd floors. Rotating exhibitions of international artists. Same ticket includes Tokyo City View.',
                        history:
                            "Opened 2003 as Japan's first museum in skyscraper. Director David Elliott pioneered concept. Open until 10pm (unusual in Japan). Hosts major international exhibitions. Represents accessible high art.",
                        task: 'See the museum entrance (¥1,800 includes observation deck)',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Combination ticket best value',
                        nearbyFood: 'Museum has cafe',
                    },
                    {
                        order: 6,
                        id: 'roppongi_city_view',
                        name: 'Tokyo City View Observatory',
                        coords: { lat: 35.6605, lng: 139.7295 },
                        heading: 0,
                        emoji: '🌃',
                        description:
                            '52nd floor observatory with 360° views. On clear days, see Mt. Fuji. Rooftop Sky Deck available.',
                        history:
                            '238 meters high (250m with rooftop). Indoor gallery-style observation deck with floor-to-ceiling windows. Open until late. Rooftop Sky Deck (additional ¥500) offers open-air experience 270m up. Popular date spot.',
                        task: 'Ascend to the observation deck for spectacular views',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 50,
                        category: 'viewpoint',
                        tips: 'Sunset time most popular - go earlier or later',
                        nearbyFood: 'Cafe on observatory level',
                    },
                ],
            },

            {
                pathId: 'roppongi_path_2',
                name: 'Shopping & Dining Route',
                difficulty: 'medium',
                estimatedTime: '24-28 minutes',
                totalDistance: '780m',
                waypoints: [
                    {
                        order: 1,
                        id: 'roppongi_keyakizaka',
                        name: 'Keyakizaka Avenue',
                        coords: { lat: 35.659, lng: 139.728 },
                        heading: 45,
                        emoji: '🌳',
                        description:
                            'Tree-lined boulevard connecting station to Hills. 150 zelkova trees. Christmas illuminations are spectacular.',
                        history:
                            'Grand approach designed to evoke European boulevards. Zelkova (keyaki) trees chosen for Tokyo climate resilience. December illuminations draw millions. Represents intentional beauty in urban design.',
                        task: 'Walk the elegant tree-lined avenue',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800',
                        ],
                        reward: 40,
                        category: 'viewpoint',
                        tips: 'November-December for illuminations',
                        nearbyFood: 'Restaurants line both sides',
                    },
                    {
                        order: 2,
                        id: 'roppongi_west_walk',
                        name: 'West Walk Shopping Mall',
                        coords: { lat: 35.6598, lng: 139.7285 },
                        heading: 70,
                        emoji: '🛍️',
                        description:
                            'Upscale shopping mall. International and Japanese luxury brands. Three levels of retail.',
                        history:
                            'Part of original Hills development. Mix of fashion, lifestyle, beauty brands. Targets affluent international residents and tourists. Represents globalized Tokyo consumption.',
                        task: 'Browse the luxury shops',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'shopping',
                        tips: 'Window shopping is free!',
                        nearbyFood: 'Restaurant floor above shops',
                    },
                    {
                        order: 3,
                        id: 'roppongi_grand_hyatt',
                        name: 'Grand Hyatt Tokyo',
                        coords: { lat: 35.6595, lng: 139.729 },
                        heading: 90,
                        emoji: '🏨',
                        description:
                            'Luxury hotel integrated into Hills. Designed by Kohn Pedersen Fox. Even lobby is architectural marvel.',
                        history:
                            "Opened 2003 as part of Hills. 387 rooms. Popular with business travelers and celebrities. Represents Tokyo's luxury hospitality. Public can visit ground floor shops and restaurants.",
                        task: 'See the stunning hotel lobby design',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'viewpoint',
                        tips: 'Oak Door restaurant has great steaks',
                        nearbyFood: 'Multiple high-end restaurants',
                    },
                    {
                        order: 4,
                        id: 'roppongi_tsutaya',
                        name: 'Tsutaya Books Roppongi',
                        coords: { lat: 35.6612, lng: 139.7288 },
                        heading: 0,
                        emoji: '📚',
                        description:
                            'Beautiful bookstore with late hours. International magazines, design books, cafe seating.',
                        history:
                            'Tsutaya books concept - bookstore as lifestyle space. Open until midnight. Curated selection emphasizes design, art, culture. Starbucks integrated inside. Represents Japanese bookstore culture evolution.',
                        task: 'Browse the carefully curated book selection',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Great place to rest with coffee',
                        nearbyFood: 'Starbucks inside',
                    },
                    {
                        order: 5,
                        id: 'roppongi_toho_cinemas',
                        name: 'Toho Cinemas Roppongi Hills',
                        coords: { lat: 35.66, lng: 139.7298 },
                        heading: 135,
                        emoji: '🎬',
                        description:
                            'Premium movie theater with comfortable seating. Shows both Japanese and international films.',
                        history:
                            'Toho chain operates premium theaters. This location features larger seats, food service. Shows latest blockbusters and art films. Represents Japanese cinema culture - respectful, quiet audiences.',
                        task: 'Check out the movie theater (if showing interests you)',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 35,
                        category: 'entertainment',
                        tips: 'Reserved seating - book online',
                        nearbyFood: 'Theater has cafe',
                    },
                    {
                        order: 6,
                        id: 'roppongi_mohri_garden',
                        name: 'Mohri Garden',
                        coords: { lat: 35.6598, lng: 139.7288 },
                        heading: 180,
                        emoji: '🏞️',
                        description:
                            'Traditional Japanese garden with pond and waterfall. Peaceful oasis amid skyscrapers. Illuminated at night.',
                        history:
                            "Recreates Edo-period garden of Mohri clan (feudal lords). 4,300㎡ of manicured nature. Combines traditional landscaping with modern tower backdrop. Represents Tokyo's blend of nature and urbanity.",
                        task: 'Walk the peaceful garden path',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 45,
                        category: 'nature',
                        tips: 'Beautiful in all seasons, special at night',
                        nearbyFood: 'Garden-view restaurants nearby',
                    },
                ],
            },

            {
                pathId: 'roppongi_path_3',
                name: 'Night Culture Route',
                difficulty: 'hard',
                estimatedTime: '26-32 minutes',
                totalDistance: '900m',
                waypoints: [
                    {
                        order: 1,
                        id: 'roppongi_crossing',
                        name: 'Roppongi Crossing',
                        coords: { lat: 35.6625, lng: 139.7298 },
                        heading: 180,
                        emoji: '🚦',
                        description:
                            'Heart of Roppongi nightlife district. Bars, clubs, international restaurants. Never sleeps.',
                        history:
                            'Roppongi developed as entertainment district post-WWII near US military bases. Attracted international crowd. 1980s bubble economy made it legendary nightlife spot. Still draws crowds despite gentrification.',
                        task: 'Experience the international nightlife atmosphere',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 45,
                        category: 'nightlife',
                        tips: 'Comes alive after 9pm',
                        nearbyFood: 'Every cuisine imaginable',
                    },
                    {
                        order: 2,
                        id: 'roppongi_almond',
                        name: 'Almond Cafe (Meeting Spot)',
                        coords: { lat: 35.6628, lng: 139.7295 },
                        heading: 120,
                        emoji: '☕',
                        description:
                            "Famous meeting point for decades. 'Meet you at Almond' is classic Roppongi phrase.",
                        history:
                            "Opened 1970s, became legendary meeting spot. Pink building impossible to miss. Generations met here before cell phones. Still serves as landmark. Represents Tokyo's analog past.",
                        task: 'See the iconic pink building',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 40,
                        category: 'cultural',
                        tips: 'More about location than food',
                        nearbyFood: 'Basic cafe fare',
                    },
                    {
                        order: 3,
                        id: 'roppongi_club_street',
                        name: 'Back Alley Club District',
                        coords: { lat: 35.6625, lng: 139.7315 },
                        heading: 90,
                        emoji: '🎭',
                        description:
                            'Hidden nightlife area. Jazz clubs, intimate bars, live music venues. Where locals go.',
                        history:
                            'These alleys existed before Hills development. Mix of high-end and underground venues. Jazz tradition from 1960s. Some clubs operated 50+ years. Represents authentic Roppongi beneath glitz.',
                        task: 'Navigate the atmospheric back alleys',
                        photos: [
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800',
                        ],
                        reward: 60,
                        secret: true,
                        category: 'hidden',
                        tips: 'Evening only - most open after 8pm',
                        nearbyFood: 'Each bar/club serves food',
                    },
                    {
                        order: 4,
                        id: 'roppongi_midtown',
                        name: 'Tokyo Midtown',
                        coords: { lat: 35.6655, lng: 139.7295 },
                        heading: 0,
                        emoji: '🏢',
                        description:
                            "Rival development to Roppongi Hills. 248m tower (Tokyo's tallest), design museum, shops. Connected by underground.",
                        history:
                            "Opened 2007 on former Defense Agency site. Mitsui Fudosan's answer to Mori's Hills. Midtown Tower houses Ritz-Carlton. More design-focused than Hills. Shows Roppongi's rapid development.",
                        task: "Compare Midtown's aesthetic to Hills",
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 50,
                        category: 'landmark',
                        tips: 'Can walk underground from Hills',
                        nearbyFood: 'Extensive restaurant floors',
                    },
                    {
                        order: 5,
                        id: 'roppongi_national_art',
                        name: 'National Art Center',
                        coords: { lat: 35.665, lng: 139.7265 },
                        heading: 270,
                        emoji: '🎨',
                        description:
                            "Japan's largest art museum (no permanent collection). Stunning wave-like facade by Kisho Kurokawa.",
                        history:
                            'Opened 2007, designed by renowned architect Kurokawa. 14,000㎡ exhibition space. Only hosts temporary exhibitions. Glass wave facade becomes artwork itself. Restaurant by Paul Bocuse on top floor.',
                        task: 'Marvel at the architectural facade',
                        photos: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
                        reward: 50,
                        category: 'cultural',
                        tips: 'Check exhibition schedule online',
                        nearbyFood: 'Paul Bocuse restaurant (expensive)',
                    },
                    {
                        order: 6,
                        id: 'roppongi_sakasai',
                        name: 'Roppongi Sakasai (Slope)',
                        coords: { lat: 35.6615, lng: 139.7305 },
                        heading: 160,
                        emoji: '🌃',
                        description:
                            'Steep slope lined with bars and restaurants. Evening illumination creates magical atmosphere.',
                        history:
                            "One of many slopes defining Roppongi geography. Name means 'slope village'. Atmospheric at night with lanterns and neon. Less tourist-heavy than main crossing. Locals prefer this area.",
                        task: 'Walk down the illuminated evening slope',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                        ],
                        reward: 45,
                        secret: true,
                        category: 'hidden',
                        tips: 'Best experienced after dark',
                        nearbyFood: 'Quality restaurants on slope',
                    },
                ],
            },
        ],
    },
};

// ═══════════════════════════════════════════════════════════
// 🎉 ALL 9 LOCATIONS COMPLETE! 162 WAYPOINTS TOTAL!
// ═══════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ADVENTURE_PATHS_PART3;
}
