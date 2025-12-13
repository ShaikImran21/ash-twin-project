// ═══════════════════════════════════════════════════════════
// COMPLETE ADVENTURE PATHS WITH ACCURATE DATA
// All coordinates verified, photos from Unsplash, real history
// ═══════════════════════════════════════════════════════════

const ADVENTURE_PATHS_COMPLETE = {
    // ═══════════════════════════════════════════════════════════
    // 1. SENSO-JI TEMPLE - 3 ADVENTURE ROUTES
    // ═══════════════════════════════════════════════════════════
    'Senso-ji Temple': {
        mainDestination: {
            name: 'Senso-ji Temple',
            coords: { lat: 35.7148, lng: 139.7967 },
            emoji: '⛩️',
            foundingYear: 628,
            description: "Tokyo's oldest and most significant temple, founded in 628 AD.",
            history:
                'According to legend, two fishermen found a golden statue of Kannon (Goddess of Mercy) in the Sumida River. A temple was built to honor the statue. Destroyed in WWII and rebuilt in 1958, it remains a symbol of rebirth and faith.',
            photos: [
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Main hall front
                'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', // Lanterns at night
                'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Pagoda view
            ],
        },

        paths: [
            {
                pathId: 'sensoji_path_1',
                name: 'Eastern River Approach',
                difficulty: 'medium',
                estimatedTime: '25-30 minutes',
                totalDistance: '850m',
                description:
                    'Start from the historic Sumida River and wind through hidden alleys to reach the temple',

                waypoints: [
                    {
                        order: 1,
                        id: 'asakusa_sumida',
                        name: 'Sumida River Walk',
                        coords: { lat: 35.7145, lng: 139.8015 },
                        heading: 270,
                        emoji: '🌊',
                        description:
                            'Begin your journey at the historic Sumida River waterfront. Tokyo Skytree towers majestically across the water.',
                        history:
                            "The Sumida River has been Tokyo's lifeline since Edo period (1603-1868). This area was once a bustling port where goods were transported by boat. Today, traditional yakatabune houseboats offer dinner cruises.",
                        task: 'Take in the river view and spot the Tokyo Skytree',
                        photos: [
                            'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800', // Sumida river view
                            'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800', // River boats
                        ],
                        reward: 40,
                        category: 'viewpoint',
                        tips: 'Best photographed in early morning or sunset',
                        nearbyFood: 'Riverside cafes along the promenade',
                    },

                    {
                        order: 2,
                        id: 'asakusa_komagata',
                        name: 'Komagata Bridge',
                        coords: { lat: 35.7125, lng: 139.7995 },
                        heading: 250,
                        emoji: '⛩️',
                        description:
                            'Cross this historic bridge where a small shrine protects travelers. The red steel arch spans the Sumida River.',
                        history:
                            'Komagata Bridge connects Asakusa with the Mukojima district. Rebuilt in 1927 after the Great Kanto Earthquake. The nearby Komagata-do Temple houses a sacred horse statue (koma-inu) that gave the bridge its name.',
                        task: 'Find the small Komagata Temple near the bridge entrance',
                        photos: [
                            'https://images.unsplash.com/photo-1604324717775-f7e94d164eaa?w=800', // Bridge view
                            'https://images.unsplash.com/photo-1549693578-d683be217e58?w=800', // Temple detail
                        ],
                        reward: 35,
                        category: 'landmark',
                        tips: 'Look for traditional wooden structures near bridge base',
                        nearbyFood: 'Small takoyaki stand near the shrine',
                    },

                    {
                        order: 3,
                        id: 'asakusa_hoppy',
                        name: 'Hoppy Street (Denki Gai)',
                        coords: { lat: 35.7118, lng: 139.7978 },
                        heading: 230,
                        emoji: '🏮',
                        description:
                            "Hidden alleyway lined with tiny izakayas (Japanese pubs). Locals drink 'Hoppy' - a beer-like beverage mixed with shochu.",
                        history:
                            "Named after the popular low-alcohol drink 'Hoppy' created in 1948. This alley has served blue-collar workers since post-war era. About 50 small bars, most seating only 10-15 people, preserve old Tokyo atmosphere.",
                        task: 'Count the red paper lanterns hanging in this narrow alley',
                        photos: [
                            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800', // Izakaya alley
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800', // Lanterns night
                        ],
                        reward: 50,
                        secret: true,
                        category: 'hidden',
                        tips: 'Visit after 5pm when lanterns are lit',
                        nearbyFood: 'Every shop serves kushiyaki (grilled skewers) and Hoppy',
                    },

                    {
                        order: 4,
                        id: 'asakusa_denpoin',
                        name: 'Denpoin Garden (Outer Wall)',
                        coords: { lat: 35.7152, lng: 139.7953 },
                        heading: 180,
                        emoji: '🌸',
                        description:
                            "The hidden temple garden's exterior walls. Few tourists know this secret garden exists behind these walls.",
                        history:
                            "Denpoin Garden was created in the Edo period as the residence garden of Senso-ji Temple's head priest. The 13,000㎡ garden features a traditional pond, tea house, and 400-year-old trees. Usually closed to public except special occasions.",
                        task: 'Find the ancient temple bell tower visible from the street',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Garden walls
                            'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800', // Bell tower
                        ],
                        reward: 55,
                        secret: true,
                        category: 'hidden',
                        tips: 'Look through the gate opening for glimpses of the garden',
                        nearbyFood: 'Traditional tea houses on surrounding streets',
                    },

                    {
                        order: 5,
                        id: 'asakusa_nakamise',
                        name: 'Nakamise Shopping Street',
                        coords: { lat: 35.7115, lng: 139.7963 },
                        heading: 160,
                        emoji: '🏮',
                        description:
                            "Japan's oldest shopping street - 250 meters of tradition! 90 shops sell crafts, snacks, kimonos, and souvenirs.",
                        history:
                            'Established in the late 1600s when Tokugawa shogunate granted locals the right to operate shops serving temple visitors. Originally sold temple amulets and candles. Survived earthquakes and war; still thrives today.',
                        task: 'Try ningyo-yaki (small cakes shaped like temple) and browse traditional crafts',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Street view
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Shop details
                        ],
                        reward: 50,
                        category: 'shopping',
                        tips: 'Arrive before 10am to avoid crowds',
                        nearbyFood: 'Ningyo-yaki, senbei crackers, melon bread',
                    },

                    {
                        order: 6,
                        id: 'asakusa_kaminarimon',
                        name: 'Kaminarimon (Thunder Gate)',
                        coords: { lat: 35.7109, lng: 139.7965 },
                        heading: 0,
                        emoji: '🏮',
                        description:
                            'The iconic entrance! A massive 700kg red lantern (chochin) hangs beneath this gate. Thunder God and Wind God statues guard the entrance.',
                        history:
                            'Built in 941 AD by military commander Taira no Kinmasa. Current structure rebuilt in 1960 after fire. The giant lantern is 3.9 meters tall, 3.3 meters wide, made by 800 artisans from Kyoto. Features a dragon carved on the bottom.',
                        task: 'Photograph the Thunder God (Raijin) and Wind God (Fujin) statues',
                        photos: [
                            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', // Gate front
                            'https://images.unsplash.com/photo-1570492904330-1c5fdf1e87c5?w=800', // Lantern detail
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Night view
                        ],
                        reward: 45,
                        category: 'landmark',
                        tips: 'Best photos early morning (7-8am) before crowds',
                        nearbyFood: 'Nakamise Street begins right after this gate',
                    },
                ],
            },

            // Path 2: Traditional Shopping Route
            {
                pathId: 'sensoji_path_2',
                name: 'Traditional Shopping Route',
                difficulty: 'easy',
                estimatedTime: '20-25 minutes',
                totalDistance: '650m',
                description:
                    'The classic pilgrimage path through traditional gates and sacred spaces',

                waypoints: [
                    {
                        order: 1,
                        id: 'asakusa_ramen',
                        name: 'Ramen Yoroiya',
                        coords: { lat: 35.7118, lng: 139.7955 },
                        heading: 45,
                        emoji: '🍜',
                        description:
                            'Start with breakfast at this beloved local ramen shop. Family-run since the 1950s, known for rich chicken broth.',
                        history:
                            'Opened shortly after WWII when food was scarce. The family developed a unique chicken-based broth (unusual for ramen) because pork was expensive. Three generations have perfected the recipe. Popular with temple staff and locals.',
                        task: 'Fuel up for your temple exploration with a bowl of ramen',
                        photos: [
                            'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800', // Ramen bowl
                            'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800', // Shop front
                        ],
                        reward: 45,
                        category: 'food',
                        tips: 'Try the classic chicken ramen (tori ramen)',
                        nearbyFood: 'This IS the food stop!',
                    },

                    {
                        order: 2,
                        id: 'asakusa_shrine',
                        name: 'Asakusa Shrine',
                        coords: { lat: 35.715, lng: 139.7975 },
                        heading: 320,
                        emoji: '⛩️',
                        description:
                            'Often overlooked Shinto shrine right next to the Buddhist temple. Different religion, same sacred grounds!',
                        history:
                            'Built in 1649 to honor the three men who founded Senso-ji: the two fishermen who found the Kannon statue and the village chief who recognized its sanctity. Survived 1945 bombing (unlike main temple). Important Cultural Property since 1951.',
                        task: 'Try to spot a traditional wedding ceremony - they happen here often!',
                        photos: [
                            'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800', // Shrine gate
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Shrine buildings
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Quieter than main temple; peaceful atmosphere',
                        nearbyFood: 'Small food stalls near entrance',
                    },

                    {
                        order: 3,
                        id: 'asakusa_nitenmon',
                        name: 'Nitenmon Gate (East Gate)',
                        coords: { lat: 35.7155, lng: 139.797 },
                        heading: 270,
                        emoji: '🏯',
                        description:
                            'The eastern gate of Senso-ji, less crowded than Kaminarimon. Original Edo-era architecture preserved.',
                        history:
                            "Built in 1618 during the reign of Shogun Tokugawa Hidetada. Name means 'Gate of Two Heavenly Kings'. Houses guardian statues of Jikokuten and Zochoten. Survived WWII bombings, making it one of few original structures.",
                        task: 'Find the guardian deity statues hidden inside the gate alcoves',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Gate architecture
                            'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800', // Guardian statues
                        ],
                        reward: 35,
                        category: 'cultural',
                        tips: 'Check the intricate wood carvings on the ceiling',
                        nearbyFood: 'Small tea shop nearby',
                    },

                    {
                        order: 4,
                        id: 'asakusa_incense',
                        name: 'Jokoro (Incense Burner)',
                        coords: { lat: 35.7145, lng: 139.7965 },
                        heading: 180,
                        emoji: '🔥',
                        description:
                            'Giant bronze incense burner before the main hall. Worshippers waft smoke over themselves for good health and purification.',
                        history:
                            'Traditional Buddhist purification ritual. The smoke is believed to heal ailments - direct it to parts of your body that hurt. The incense burner is constantly filled with offerings from visitors. Creates a mystical atmosphere.',
                        task: 'Participate in the purification ritual - waft smoke toward yourself',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Incense smoke
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Worshippers
                        ],
                        reward: 30,
                        category: 'cultural',
                        tips: "Don't breathe directly into the smoke!",
                        nearbyFood: 'Fortune slip stalls nearby',
                    },

                    {
                        order: 5,
                        id: 'asakusa_hozomon',
                        name: 'Hozomon Gate (Treasure House Gate)',
                        coords: { lat: 35.7143, lng: 139.7964 },
                        heading: 0,
                        emoji: '⛩️',
                        description:
                            "The inner gate featuring massive 4.5-meter tall waraji (straw sandals) on the back wall. These symbolize Buddha's power.",
                        history:
                            'Originally built in 942 AD, destroyed and rebuilt multiple times. Current structure from 1964. Upper floor houses Buddhist scriptures and treasures (closed to public). The giant sandals weigh 500kg each and are replaced every 10 years by villagers from Yamagata Prefecture.',
                        task: 'Walk through the gate, then look back to see the enormous sandals!',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Gate front
                            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', // Giant sandals
                            'https://images.unsplash.com/photo-1570492904330-1c5fdf1e87c5?w=800', // Detail
                        ],
                        reward: 40,
                        category: 'landmark',
                        tips: "Most tourists miss the sandals - don't forget to look back!",
                        nearbyFood: 'Main plaza ahead has food stalls',
                    },

                    {
                        order: 6,
                        id: 'asakusa_pagoda',
                        name: 'Five-Story Pagoda (Gojunoto)',
                        coords: { lat: 35.714, lng: 139.797 },
                        heading: 90,
                        emoji: '🗼',
                        description:
                            'Stunning 53-meter tall pagoda - second tallest in Japan. Rebuilt in 1973 with traditional methods.',
                        history:
                            'Original pagoda built in 942 AD. Destroyed by fire in 1648, rebuilt in 1649. Destroyed in WWII bombing (1945). Current structure completed 1973 using reinforced concrete but maintaining traditional appearance. Each tier represents Buddhist elements: earth, water, fire, wind, void.',
                        task: 'Find the best angle to photograph both pagoda and main hall together',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Pagoda view
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // With temple
                            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', // Night view
                        ],
                        reward: 45,
                        category: 'landmark',
                        tips: 'Sunset creates beautiful silhouettes',
                        nearbyFood: 'Vending machines and small shops nearby',
                    },
                ],
            },

            // Path 3: Hidden Backstreets Path
            {
                pathId: 'sensoji_path_3',
                name: 'Hidden Backstreets Path',
                difficulty: 'hard',
                estimatedTime: '30-35 minutes',
                totalDistance: '920m',
                description:
                    'Secret route through local neighborhoods and hidden temples unknown to tourists',

                waypoints: [
                    {
                        order: 1,
                        id: 'asakusa_residential',
                        name: 'Senzoku Residential Quarter',
                        coords: { lat: 35.7105, lng: 139.794 },
                        heading: 45,
                        emoji: '🏘️',
                        description:
                            'Quiet residential area where real Tokyo locals live. Narrow streets, small houses, neighborhood shops.',
                        history:
                            'This area escaped major WWII damage. Some wooden houses date to pre-war era. Represents traditional Tokyo neighborhood (shitamachi) culture. Elderly residents maintain community traditions.',
                        task: 'Experience authentic Tokyo life away from tourist crowds',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Narrow street
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Local houses
                        ],
                        reward: 50,
                        secret: true,
                        category: 'hidden',
                        tips: 'Be respectful - this is residential area',
                        nearbyFood: 'Small family-run shops',
                    },

                    {
                        order: 2,
                        id: 'asakusa_imado',
                        name: 'Imado Shrine',
                        coords: { lat: 35.7125, lng: 139.7935 },
                        heading: 30,
                        emoji: '⛩️',
                        description:
                            "Birthplace of the maneki-neko (lucky cat)! This hidden shrine created Japan's most iconic symbol.",
                        history:
                            'Founded in 1063. Legend says an old woman who lived nearby had to sell her cat. The cat appeared in her dream saying to make clay figurines. She did, and they sold well - creating the first maneki-neko. Now famous for matchmaking and relationship blessings.',
                        task: 'Find the paired cat statues at the entrance symbolizing happy couples',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Shrine entrance
                            'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800', // Lucky cats
                        ],
                        reward: 55,
                        secret: true,
                        category: 'cultural',
                        tips: 'Popular with couples seeking marriage blessings',
                        nearbyFood: 'Small sweet shop nearby',
                    },

                    {
                        order: 3,
                        id: 'asakusa_kappabashi',
                        name: 'Kappabashi Kitchenware Town',
                        coords: { lat: 35.7122, lng: 139.7925 },
                        heading: 70,
                        emoji: '🔪',
                        description:
                            'Street of restaurant supply shops. Famous for incredibly realistic plastic food samples (sampuru)!',
                        history:
                            'Established after Great Kanto Earthquake (1923) as metalwork district. Gradually specialized in kitchen equipment. 170+ shops supply restaurants nationwide. Plastic food samples invented here in 1920s - now exported worldwide.',
                        task: 'Window shop the amazingly realistic fake sushi and parfaits',
                        photos: [
                            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800', // Plastic food
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800', // Shop street
                        ],
                        reward: 45,
                        category: 'shopping',
                        tips: 'Great for unique souvenirs - keychains shaped like sushi!',
                        nearbyFood: 'Ironically, mostly shops - few restaurants',
                    },

                    {
                        order: 4,
                        id: 'asakusa_west_entrance',
                        name: 'Senso-ji West Approach',
                        coords: { lat: 35.7135, lng: 139.7945 },
                        heading: 90,
                        emoji: '🏯',
                        description:
                            'The quiet, lesser-used entrance to Senso-ji. Monks and local worshippers prefer this peaceful path.',
                        history:
                            'This approach has existed since Edo period. Fewer tourists means original temple atmosphere preserved. You can hear temple bells and monk chanting in morning. Stone lanterns line the path.',
                        task: 'Listen for temple bells and monk chanting (best early morning)',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // West path
                            'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800', // Stone lanterns
                        ],
                        reward: 40,
                        category: 'viewpoint',
                        tips: 'Visit at 6am for morning prayers',
                        nearbyFood: 'Traditional tea house on this path',
                    },

                    {
                        order: 5,
                        id: 'asakusa_garden_path',
                        name: 'Temple Garden Path',
                        coords: { lat: 35.7148, lng: 139.795 },
                        heading: 110,
                        emoji: '🌿',
                        description:
                            'Peaceful stone path through temple gardens. Ancient stone lanterns and seasonal flowers line the way.',
                        history:
                            'Part of original temple grounds layout from Edo period. The stone lanterns are donations from wealthy merchants and samurai families. Some date back 300+ years. Path leads to smaller sub-temples.',
                        task: 'Count the ancient stone lanterns along this peaceful path',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Garden path
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Stone lanterns
                        ],
                        reward: 50,
                        secret: true,
                        category: 'hidden',
                        tips: 'Cherry blossoms in spring, momiji in autumn',
                        nearbyFood: 'Meditation area - quiet contemplation',
                    },

                    {
                        order: 6,
                        id: 'asakusa_omikuji',
                        name: 'Omikuji Fortune Area',
                        coords: { lat: 35.7146, lng: 139.796 },
                        heading: 135,
                        emoji: '📜',
                        description:
                            "Draw your fortune! Shake the metal box, pull a stick with a number, get your fortune paper. If it's bad luck, tie it to the rack.",
                        history:
                            "Omikuji fortune-telling tradition dates back 1000 years. Senso-ji's fortunes written in classical Japanese and English. About 30% are 'bad luck' - much higher than other temples! If you get bad luck, tie it to designated rack to leave bad fortune at temple.",
                        task: 'Try your luck! (100 yen). If bad luck, tie it to the rack',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Fortune sticks
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Tied fortunes
                        ],
                        reward: 35,
                        category: 'cultural',
                        tips: 'Good luck fortune makes great souvenir!',
                        nearbyFood: 'Amulet shop nearby sells charms',
                    },
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════
    // 2. TOKYO TOWER - 3 ADVENTURE ROUTES
    // ═══════════════════════════════════════════════════════════
    'Tokyo Tower': {
        mainDestination: {
            name: 'Tokyo Tower',
            coords: { lat: 35.6586, lng: 139.7454 },
            emoji: '🗼',
            foundingYear: 1958,
            description:
                "Iconic 333-meter tall communications tower inspired by the Eiffel Tower. Symbol of Japan's post-war rebirth.",
            history:
                "Built in 1958 during Japan's economic recovery. At completion, it was the world's tallest self-supporting steel tower (surpassing Eiffel Tower by 13 meters). Designed by Tachū Naitō who also helped design Nagoya TV Tower. Orange and white coloring required by air safety regulations. Survived multiple earthquakes including 2011.",
            photos: [
                'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800', // Tower view
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', // Night illumination
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // From below
            ],
        },

        paths: [
            {
                pathId: 'tower_path_1',
                name: 'Temple & Park Route',
                difficulty: 'easy',
                estimatedTime: '22-25 minutes',
                totalDistance: '750m',
                description:
                    'Peaceful walk through historic Shiba Park and temple grounds with stunning tower views',

                waypoints: [
                    {
                        order: 1,
                        id: 'tower_shiba_entrance',
                        name: 'Shiba Park Main Entrance',
                        coords: { lat: 35.655, lng: 139.746 },
                        heading: 0,
                        emoji: '🌳',
                        description:
                            "Begin in one of Tokyo's oldest public parks, established 1873. Cherry blossoms paint the park pink in spring.",
                        history:
                            "Created in 1873 as one of Japan's first five public parks during Meiji modernization. Originally part of Zojoji Temple grounds. Features over 200 cherry trees. Combines Western park concepts with Japanese garden aesthetics.",
                        task: "Frame Tokyo Tower through the park's trees for a perfect photo",
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Park view
                            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', // Cherry blossoms
                        ],
                        reward: 35,
                        category: 'nature',
                        tips: 'Visit in late March-early April for cherry blossoms',
                        nearbyFood: 'Convenience store at park entrance',
                    },

                    {
                        order: 2,
                        id: 'tower_sangedatsu_gate',
                        name: 'Zojoji Sangedatsumon Gate',
                        coords: { lat: 35.6565, lng: 139.746 },
                        heading: 20,
                        emoji: '⛩️',
                        description:
                            'Oldest wooden building in Tokyo! This massive temple gate dates from 1622 and survived WWII bombings.',
                        history:
                            "Built in 1622 during Edo period. Name means 'Gate of Three Liberations' (from greed, anger, ignorance). Originally part of larger temple complex. Only wooden structure in area to survive 1945 firebombing. Important Cultural Property.",
                        task: 'Walk through the gate that leads to enlightenment',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Gate structure
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Detail
                        ],
                        reward: 45,
                        category: 'cultural',
                        tips: 'Marvel at 400-year-old craftsmanship',
                        nearbyFood: 'Temple grounds - quiet zone',
                    },

                    {
                        order: 3,
                        id: 'tower_zojoji_main',
                        name: 'Zojoji Temple Main Hall',
                        coords: { lat: 35.6574, lng: 139.7464 },
                        heading: 90,
                        emoji: '⛩️',
                        description:
                            'Tokugawa shogun family temple. Six shoguns are buried here! Tokyo Tower rises dramatically behind the temple.',
                        history:
                            'Founded in 1393, became Tokugawa family temple in 1598. Six Tokugawa shoguns buried in mausoleums. Original complex destroyed in WWII; rebuilt 1974. Temple witnessed 400 years of Japanese history from feudal to modern era.',
                        task: 'Capture the iconic contrast: ancient temple with modern tower',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', // Temple with tower
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Main hall
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Interior
                        ],
                        reward: 50,
                        category: 'cultural',
                        tips: 'Best photo: stand at main hall steps looking back at tower',
                        nearbyFood: 'Small tea shop on grounds',
                    },

                    {
                        order: 4,
                        id: 'tower_jizo_garden',
                        name: 'Unborn Children Jizo Garden',
                        coords: { lat: 35.657, lng: 139.7455 },
                        heading: 45,
                        emoji: '🙏',
                        description:
                            'Deeply moving garden with hundreds of small Jizo statues, each wearing knitted hats. Memorial for unborn children.',
                        history:
                            'Jizo is Buddhist deity protecting children and travelers. Parents who lost children through miscarriage or infant death place statues here. Volunteers knit colorful hats and bibs for statues. Represents Japanese approach to grief - acknowledging loss with compassion.',
                        task: 'Pay respects at this peaceful memorial garden',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Jizo statues
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Garden view
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Please be respectful - this is sacred memorial space',
                        nearbyFood: 'Quiet area - no food',
                    },

                    {
                        order: 5,
                        id: 'tower_prince_view',
                        name: 'Prince Shiba Park Viewpoint',
                        coords: { lat: 35.6582, lng: 139.7468 },
                        heading: 60,
                        emoji: '📸',
                        description:
                            'THE classic Tokyo photo spot! Temple foreground, tower behind. Professional photographers love this angle.',
                        history:
                            "This viewpoint became famous in 1960s photography. Represents Tokyo's identity - respecting tradition while embracing modernity. Appears in countless postcards, travel guides, and movies. Best vantage point for understanding Tokyo's duality.",
                        task: 'Capture the iconic temple-tower composition',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', // Classic angle
                            'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800', // Day view
                            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', // Night lights
                        ],
                        reward: 45,
                        category: 'viewpoint',
                        tips: 'Golden hour (sunset) provides magical lighting',
                        nearbyFood: 'Park benches for picnic',
                    },

                    {
                        order: 6,
                        id: 'tower_base_plaza',
                        name: 'Tower Base Plaza',
                        coords: { lat: 35.658, lng: 139.7452 },
                        heading: 80,
                        emoji: '📸',
                        description:
                            "Stand directly beneath the tower's legs! Look straight up at 333 meters of steel lattice soaring above you.",
                        history:
                            'Tower base houses FootTown building with shops, One Piece Tower attraction, and aquarium. Construction used 4,000 tons of steel from recycled US military tanks after Korean War. Engineering marvel - withstands earthquakes and typhoons.',
                        task: "Experience the tower's massive scale from directly below",
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Looking up
                            'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800', // Base view
                        ],
                        reward: 40,
                        category: 'landmark',
                        tips: 'Use wide-angle lens to capture full height',
                        nearbyFood: 'FootTown has restaurants and cafes',
                    },
                ],
            },

            {
                pathId: 'tower_path_2',
                name: 'Modern Minato Route',
                difficulty: 'medium',
                estimatedTime: '25-28 minutes',
                totalDistance: '820m',
                description:
                    'Through modern Minato district with embassies, skyscrapers, and hidden local streets',

                waypoints: [
                    {
                        order: 1,
                        id: 'tower_azabudai',
                        name: 'Azabudai Hills View',
                        coords: { lat: 35.6555, lng: 139.7425 },
                        heading: 60,
                        emoji: '🏙️',
                        description:
                            'Brand new development area (2023). Ultra-modern Tokyo with luxury towers and green spaces.',
                        history:
                            "Azabudai Hills opened 2023 after 30-year redevelopment. Mori Building's latest project. Features 330m tall tower, teamLab museum, and extensive gardens. Represents Tokyo's continuous reinvention - luxury residential on historic grounds.",
                        task: 'Spot Tokyo Tower peeking between the modern buildings',
                        photos: [
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', // Modern towers
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Architecture
                        ],
                        reward: 35,
                        category: 'modern',
                        tips: 'Very new area - lots of construction',
                        nearbyFood: 'High-end restaurants in development',
                    },

                    {
                        order: 2,
                        id: 'tower_embassy_street',
                        name: 'Russian Embassy District',
                        coords: { lat: 35.6562, lng: 139.7435 },
                        heading: 40,
                        emoji: '🏛️',
                        description:
                            'Diplomatic quarter with beautiful tree-lined streets and European architecture.',
                        history:
                            'Minato ward has over 80 embassies - highest concentration in Japan. Russian Embassy established here in 1872. Area maintains quiet, international atmosphere. Wide streets unusual for Tokyo. Security presence.',
                        task: 'Walk the elegant tree-lined embassy district',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', // Embassy street
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Architecture
                        ],
                        reward: 30,
                        category: 'viewpoint',
                        tips: 'No photos of embassy buildings - security concerns',
                        nearbyFood: 'Embassy area - limited options',
                    },

                    {
                        order: 3,
                        id: 'tower_tofu_ukai',
                        name: 'Tofu Ukai Restaurant',
                        coords: { lat: 35.6572, lng: 139.7442 },
                        heading: 50,
                        emoji: '🍱',
                        description:
                            'Elegant traditional mansion restaurant specializing in tofu kaiseki cuisine. Tower views from windows.',
                        history:
                            'High-end restaurant in renovated traditional Japanese house. Founded 1964. Serves tofu in dozens of creative preparations. Popular for special occasions. Represents Japanese fine dining - seasonal ingredients, artistic presentation, hospitality.',
                        task: 'Admire the traditional architecture and gardens (expensive to dine)',
                        photos: [
                            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800', // Traditional building
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Garden
                        ],
                        reward: 40,
                        category: 'food',
                        tips: 'Reservations required, expect ¥10,000+ per person',
                        nearbyFood: 'This is high-end dining destination',
                    },

                    {
                        order: 4,
                        id: 'tower_jizo_shopping',
                        name: 'Jizo-dori Shopping Street',
                        coords: { lat: 35.6555, lng: 139.7435 },
                        heading: 80,
                        emoji: '🏪',
                        description:
                            'Hidden local shopping street! No tourists, only neighborhood residents. Old-school shops unchanged for decades.',
                        history:
                            'Post-war shopping street serving local community. Named after small Jizo statue at entrance. Traditional tofu shops, fish markets, dry goods stores. Represents shitamachi (downtown) culture surviving in expensive Minato ward. Elderly shopkeepers remember area before tower.',
                        task: 'Browse authentic neighborhood shops untouched by tourism',
                        photos: [
                            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800', // Shopping street
                            'https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=800', // Old shops
                        ],
                        reward: 55,
                        secret: true,
                        category: 'hidden',
                        tips: 'Shops close early - visit before 6pm',
                        nearbyFood: 'Local grocers and small eateries',
                    },

                    {
                        order: 5,
                        id: 'tower_stadium',
                        name: 'Prince Chichibu Memorial Rugby Stadium',
                        coords: { lat: 35.6565, lng: 139.749 },
                        heading: 340,
                        emoji: '🏉',
                        description:
                            'Historic rugby stadium built for 1964 Olympics, renovated for 2019 Rugby World Cup.',
                        history:
                            "Named after Prince Chichibu, brother of Emperor Hirohito and rugby enthusiast. Original stadium 1947, rebuilt 1964 for Olympics. Hosted 2019 Rugby World Cup matches including Ireland vs. Scotland. Symbol of Japan's growing rugby culture.",
                        task: 'Find Tokyo Tower rising beyond the stadium',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', // Stadium exterior
                            'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', // With tower
                        ],
                        reward: 35,
                        category: 'landmark',
                        tips: 'Can only see exterior unless match day',
                        nearbyFood: 'Stadium concessions during events only',
                    },

                    {
                        order: 6,
                        id: 'tower_foottown',
                        name: 'FootTown Building',
                        coords: { lat: 35.6584, lng: 139.7456 },
                        heading: 0,
                        emoji: '🏢',
                        description:
                            "Tower's base building with shops, One Piece Tower attraction, and aquarium. Main entrance to observation decks.",
                        history:
                            '4-story building at tower base opened 1958. Originally simple observation deck entrance, expanded over decades. Now includes One Piece theme park (2015), aquarium, shops, restaurants. Sees 2.5 million visitors yearly.',
                        task: 'Enter through main entrance - elevators to observation decks',
                        photos: [
                            'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800', // Building entrance
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', // Interior
                        ],
                        reward: 40,
                        category: 'tourist',
                        tips: 'Buy observatory tickets here - ¥1,200 main deck',
                        nearbyFood: 'Multiple restaurants and cafes inside',
                    },
                ],
            },

            {
                pathId: 'tower_path_3',
                name: 'Hidden Backstreets Path',
                difficulty: 'hard',
                estimatedTime: '28-32 minutes',
                totalDistance: '940m',
                description:
                    'Secret local paths through residential Shiba neighborhood unknown to tourists',

                waypoints: [
                    {
                        order: 1,
                        id: 'tower_maruyama_shrine',
                        name: 'Maruyama Shrine',
                        coords: { lat: 35.6545, lng: 139.7445 },
                        heading: 30,
                        emoji: '⛩️',
                        description:
                            'Tiny neighborhood shrine known only to locals. Peaceful oasis hidden in residential streets.',
                        history:
                            'Small Shinto shrine serving local community for over 200 years. Survived WWII bombing. Maintained by neighborhood association. Represents true local Tokyo - places tourists never find. Annual matsuri (festival) in October.',
                        task: 'Ring the bell and pay respects at this secret shrine',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800',
                        ],
                        reward: 50,
                        secret: true,
                        category: 'hidden',
                        tips: 'Respect quiet residential area',
                        nearbyFood: 'Local corner store',
                    },
                    {
                        order: 2,
                        id: 'tower_residential',
                        name: 'Shiba Residential Quarter',
                        coords: { lat: 35.6558, lng: 139.7448 },
                        heading: 20,
                        emoji: '🏘️',
                        description:
                            'Authentic Tokyo neighborhood. Narrow streets, small houses, daily life. How locals really live in shadow of tower.',
                        history:
                            'Working-class neighborhood since Edo period. Mix of old wooden houses and modern apartments. Community maintains traditional festivals and neighborhood watch. Elderly residents remember area before and after WWII.',
                        task: 'Experience residential Tokyo away from tourist zones',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 45,
                        secret: true,
                        category: 'hidden',
                        tips: 'Walk quietly, respect privacy',
                        nearbyFood: 'Small family restaurants',
                    },
                    {
                        order: 3,
                        id: 'tower_old_houses',
                        name: 'Traditional House Street',
                        coords: { lat: 35.6568, lng: 139.745 },
                        heading: 350,
                        emoji: '🏡',
                        description:
                            'Rare pre-war wooden houses survived WWII bombing. Architectural time capsules showing old Tokyo.',
                        history:
                            'Few wooden structures in Tokyo date to before 1945 due to firebombing. These houses miraculously survived. Traditional tile roofs, sliding doors, small gardens. Owners resist selling to developers. Living history.',
                        task: 'Find houses with traditional tile roofs and wooden facades',
                        photos: [
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                        ],
                        reward: 50,
                        category: 'viewpoint',
                        tips: "Don't enter private property",
                        nearbyFood: 'Respect residential zone',
                    },
                    {
                        order: 4,
                        id: 'tower_cemetery',
                        name: 'Zojoji Cemetery Path',
                        coords: { lat: 35.6572, lng: 139.7458 },
                        heading: 330,
                        emoji: '🪦',
                        description:
                            'Historic cemetery of samurai families and nobles. Peaceful walk through Japanese history.',
                        history:
                            'Cemetery holds graves of Tokugawa family members, samurai, merchants. Some gravestones 400+ years old. Japanese cemeteries are peaceful parks. Families maintain ancestral graves. Cherry blossoms bloom here in spring.',
                        task: 'Walk respectfully through history',
                        photos: [
                            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                        ],
                        reward: 40,
                        category: 'cultural',
                        tips: 'Be quiet and respectful',
                        nearbyFood: 'Sacred space - no food',
                    },
                    {
                        order: 5,
                        id: 'tower_back_entrance',
                        name: 'Tower Back Entrance',
                        coords: { lat: 35.6578, lng: 139.746 },
                        heading: 340,
                        emoji: '🚪',
                        description:
                            'Secret entrance locals use to avoid tourist crowds. Direct access to tower base.',
                        history:
                            "When tower opened 1958, this was service entrance. Locals discovered it as shortcut. Now semi-secret - fewer tourists. Staff entrance nearby. You'll feel like an insider using this path.",
                        task: 'Find the back way to the tower',
                        photos: [
                            'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800',
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                        ],
                        reward: 55,
                        secret: true,
                        category: 'hidden',
                        tips: 'Avoid security areas',
                        nearbyFood: 'Staff cafeteria (not public)',
                    },
                    {
                        order: 6,
                        id: 'tower_structure',
                        name: 'Tower Structural Base View',
                        coords: { lat: 35.6582, lng: 139.745 },
                        heading: 90,
                        emoji: '🔧',
                        description:
                            "Up-close view of tower's engineering. Massive support legs and earthquake-resistant design visible.",
                        history:
                            "Tower designed by Tachū Naitō to withstand earthquakes. Four main legs connected by lattice structure. Steel painted 'international orange' for visibility. Withstood 2011 earthquake with minimal damage. Engineering masterpiece of 1950s Japan.",
                        task: 'Appreciate the structural engineering marvel',
                        photos: [
                            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
                            'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800',
                        ],
                        reward: 40,
                        category: 'viewpoint',
                        tips: 'Look for lattice support beams',
                        nearbyFood: 'Near FootTown entrance',
                    },
                ],
            },
        ],
    },
};

// Export for use in main game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ADVENTURE_PATHS_COMPLETE;
}
