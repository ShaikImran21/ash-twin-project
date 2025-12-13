// Enhanced location data with multiple photos and detailed histories
const ENHANCED_LOCATIONS = [
    {
        id: 1,
        name: "Senso-ji Temple",
        target: { lat: 35.7147, lng: 139.7967 },
        year: "628 AD",
        emoji: "⛩️",
        photos: [
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800",
            "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800"
        ],
        history: "Tokyo's oldest and most significant temple, Senso-ji was founded in 628 AD when two brothers fishing in the Sumida River discovered a golden statue of Kannon, the Buddhist goddess of mercy. Despite their attempts to return it to the river, the statue kept coming back, leading to the construction of a temple to house it.\n\nThe iconic Kaminarimon (Thunder Gate) with its massive 700kg red lantern has become one of Japan's most photographed structures. The temple was destroyed during World War II air raids but was rebuilt as a symbol of rebirth and peace. Today, over 30 million visitors annually walk through Nakamise Shopping Street, a 250-meter approach lined with traditional shops that has operated since the Edo period.\n\nThe main hall, rebuilt in 1958, maintains traditional architectural techniques while incorporating modern earthquake resistance. Every May, the Sanja Matsuri festival draws millions to witness one of Tokyo's most spectacular celebrations, featuring over 100 portable shrines carried through the streets."
    },
    {
        id: 2,
        name: "Tokyo Tower",
        target: { lat: 35.6586, lng: 139.7454 },
        year: "1958",
        emoji: "🗼",
        photos: [
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800",
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
            "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800"
        ],
        history: "Standing 333 meters tall, Tokyo Tower was completed in 1958 as a broadcasting antenna and observation tower, becoming an enduring symbol of Japan's post-war economic miracle. Inspired by Paris's Eiffel Tower, it was designed by architect Tachū Naitō and remarkably built using steel partially sourced from scrapped American tanks left over from the Korean War.\n\nAt the time of its completion, it was the world's tallest self-supporting steel tower, surpassing even its French inspiration. The distinctive orange and white paint scheme was mandated by aviation safety regulations. During the economic boom of the 1980s, over 3.6 million people visited annually.\n\nThe tower has survived numerous earthquakes, including the massive 2011 Tōhoku earthquake, with only minor damage to its top antenna. Today, despite being surpassed in height by Tokyo Skytree, Tokyo Tower remains a beloved icon of the city, illuminated nightly in seasonal colors and hosting special light shows during holidays and events."
    },
    {
        id: 3,
        name: "Meiji Shrine",
        target: { lat: 35.6764, lng: 139.6993 },
        year: "1920",
        emoji: "🌳",
        photos: [
            "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800",
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
        ],
        history: "Meiji Shrine was constructed in 1920 to commemorate Emperor Meiji and Empress Shōken, who led Japan through the Meiji Restoration and into modernity. The shrine sits within a 170-acre evergreen forest of 120,000 trees representing 365 different species, each donated from regions across Japan and its colonies.\n\nRemarkably, this entire forest is man-made, planted according to a 100-year forest plan that predicted exactly how the ecosystem would evolve. The original structures were destroyed in World War II air raids, but the shrine was faithfully rebuilt in 1958 through public donations. The massive torii gates at the entrance are made from 1,700-year-old cypress trees from Taiwan.\n\nOver 3 million people visit during the first three days of the New Year (Hatsumōde), making it Japan's most popular shrine for New Year celebrations. Traditional Shinto weddings are frequently held here, and visitors can witness authentic ceremonies throughout the year. The Inner Garden features a spectacular iris garden with 150 species, personally designed by Emperor Meiji for his wife."
    },
    {
        id: 4,
        name: "Imperial Palace",
        target: { lat: 35.6852, lng: 139.7528 },
        year: "1457",
        emoji: "🏯",
        photos: [
            "https://images.unsplash.com/photo-1624498488278-013f61753914?w=800",
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
        ],
        history: "The Imperial Palace stands on the site of the original Edo Castle, built in 1457 by Ōta Dōkan. When Tokugawa Ieyasu established the Edo Shogunate in 1603, he made the castle his headquarters, transforming it into the largest fortress in the world at the time. The grounds spanned 16 square kilometers, surrounded by sophisticated defensive moats and walls built using massive stones transported from across Japan.\n\nAfter the Meiji Restoration in 1868, the Emperor moved from Kyoto to Tokyo, converting the castle into the Imperial Palace. Most original structures were destroyed in World War II, but the current palace was completed in 1968. The Double Bridge (Nijubashi) is the palace's most iconic feature, though only one bridge is actually double-layered.\n\nThe East Gardens are open to the public and contain remnants of the original castle, including impressive stone walls constructed without mortar that have survived centuries of earthquakes. The palace grounds cover 1.15 square kilometers in the heart of Tokyo, creating an oasis of traditional Japanese gardens and historical architecture. The Emperor still resides here, making it one of the few active royal palaces integrated into a modern city center."
    },
    {
        id: 5,
        name: "Shibuya Crossing",
        target: { lat: 35.6595, lng: 139.7004 },
        year: "1973",
        emoji: "🚦",
        photos: [
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800",
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800"
        ],
        history: "Shibuya Crossing, often called 'The Scramble,' is the world's busiest pedestrian intersection, where up to 3,000 people cross simultaneously during peak times. The current configuration was established in 1973 when all traffic lights turn red at once, allowing pedestrians to cross in all directions, including diagonally. This organized chaos has become a symbol of Tokyo's incredible population density and efficiency.\n\nThe area was largely rural until the 1920s, but rapidly developed after the Great Kanto Earthquake of 1923. The famous Hachiko statue, commemorating the loyal dog who waited at Shibuya Station for his deceased owner for 9 years, has been a meeting point since 1934. During the 1990s economic bubble, Shibuya became the epicenter of youth culture and fashion trends.\n\nThe massive video screens surrounding the crossing create a sensory overload reminiscent of Blade Runner, appearing in countless films and music videos. Starbucks' second floor overlooking the crossing is one of the most sought-after seats in Tokyo. During the 2020 Halloween celebration, over 1 million people packed the area, leading to crowd control measures in subsequent years."
    },
    {
        id: 6,
        name: "Tsukiji Outer Market",
        target: { lat: 35.6654, lng: 139.7707 },
        year: "1935",
        emoji: "🐟",
        photos: [
            "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800",
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
        ],
        history: "Tsukiji Market's history traces back to 1603 when Tokugawa Ieyasu ordered fishermen from Osaka to relocate to Edo to supply fish to the castle. After the Great Kanto Earthquake of 1923 destroyed the original fish market in Nihonbashi, it was relocated to the Tsukiji district in 1935. For decades, Tsukiji was the largest wholesale fish and seafood market in the world, handling over 2,000 tons daily and serving as the price-setting benchmark for seafood globally.\n\nThe famous tuna auctions, starting at 5 AM, became legendary, with a single bluefin tuna selling for a record $3.1 million in 2019. In October 2018, the inner wholesale market relocated to Toyosu, but the outer market—consisting of hundreds of small restaurants, shops, and vendors—remains a bustling hub.\n\nThese family-run businesses have operated for generations, some for over a century, maintaining traditional techniques and relationships with suppliers. The market's narrow lanes are packed with vendors selling fresh fish, dried goods, kitchen tools, and street food. Visitors can enjoy incredibly fresh sushi for breakfast, watch knife-sharpening demonstrations, and purchase products used by professional chefs worldwide."
    },
    {
        id: 7,
        name: "Ueno Park",
        target: { lat: 35.7145, lng: 139.7740 },
        year: "1873",
        emoji: "🌸",
        photos: [
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800",
            "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
        ],
        history: "Ueno Park, established in 1873, was Japan's first public park and represented a revolutionary concept in a society where such spaces didn't exist. The land was previously occupied by Kan'ei-ji, an immense temple complex that served as the family temple of the Tokugawa shogunate. During the 1868 Battle of Ueno, one of the final conflicts of the Boshin War, the temple was largely destroyed.\n\nThe Meiji government transformed the area into a public park modeled after Western examples, designed by Dutch landscape architect Joost van Kruyss. The park became famous for its cherry blossoms—over 1,000 trees line the paths, creating spectacular tunnel displays during hanami season. Ueno Zoo, opened in 1882, was Japan's first zoological garden and remains one of the country's most popular zoos.\n\nThe park houses an extraordinary concentration of cultural institutions: Tokyo National Museum (Japan's oldest and largest), National Museum of Western Art, National Museum of Nature and Science, and the Tokyo Metropolitan Art Museum. Shinobazu Pond, a remnant of ancient Tokyo Bay, is covered with lotus flowers in summer and is home to a small shrine on an island. During cherry blossom season, over 10 million people visit annually."
    },
    {
        id: 8,
        name: "Akihabara",
        target: { lat: 35.6995, lng: 139.7730 },
        year: "1949",
        emoji: "⚡",
        photos: [
            "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800"
        ],
        history: "Akihabara's transformation reflects Japan's post-war evolution from devastation to technological and cultural superpower. After World War II, the area became a black market for radio parts and vacuum tubes, serving students from nearby universities. By the 1950s, legitimate electronics shops emerged, earning the district its nickname 'Electric Town' (Denki Gai). During the 1980s-90s economic boom, Akihabara became the world's premier destination for electronics.\n\nThe burst of the economic bubble and the rise of the internet shifted the district's focus. In the 2000s, Akihabara underwent a dramatic transformation into the global epicenter of otaku culture—anime, manga, video games, and idol fandom. Multi-story shops dedicated to specific anime franchises appeared, along with maid cafes where staff dress in costume and treat customers as 'masters.'\n\nThe district pioneered the concept of 'media mix'—the integration of anime, games, music, and merchandise. Weekly releases of new manga, games, and collectibles turn Sundays into pilgrimage days for fans worldwide. The pedestrian paradise on Sundays (Hokosha Tengoku) allows the main street to become a massive open-air convention. Akihabara's influence on global pop culture is immeasurable."
    },
    {
        id: 9,
        name: "Roppongi Hills",
        target: { lat: 35.6605, lng: 139.7290 },
        year: "2003",
        emoji: "🏙️",
        photos: [
            "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800",
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800"
        ],
        history: "Roppongi Hills represents one of the largest and most ambitious urban redevelopment projects in Japanese history. The vision began in 1986 when developer Minoru Mori approached 500 landowners in a 11.6-hectare area of aging residential neighborhoods to create a 'city within a city.' The project took 17 years and over 4 billion dollars to complete, finally opening in 2003.\n\nThe centerpiece, Mori Tower, stands 238 meters tall and houses offices, residences, restaurants, the Mori Art Museum, and the Tokyo City View observation deck. The complex includes over 200 shops, restaurants, nine cinema screens, a luxury hotel, apartments, a TV studio, and an outdoor amphitheater. The iconic Maman spider sculpture by Louise Bourgeois has become the complex's symbol.\n\nRoppongi Hills pioneered the concept of vertical urbanism in Tokyo—creating a complete urban ecosystem where residents can work, live, shop, and be entertained without leaving the complex. The development includes earthquake-resistant design that can house 11,000 people for up to three days in emergencies, with its own power generation and water purification systems. It transformed Roppongi from a notorious nightlife district into a sophisticated hub of art, culture, and international business."
    }
];
