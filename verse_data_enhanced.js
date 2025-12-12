// Location data for Street View Treasure Hunt
// Each location includes coordinates, historical context, clues, and narrative verses

const HUNT_LOCATIONS_WITH_PATHS = [
  {
    name: "Eiffel Tower",
    coords: { lat: 48.8584, lng: 2.2945 },
    year: "1889 AD",
    history: "An iron lattice tower on the Champ de Mars in Paris, France, built for the 1889 World's Fair.",
    clue: "The Iron Lady watches over the city of lights",
    verse: "Built for the World's Fair, a marvel of engineering that pierced the Parisian sky, standing as a testament to human ambition and industrial prowess. Gustave Eiffel's creation was initially criticized but became the symbol of a nation."
  },
  {
    name: "Colosseum",
    coords: { lat: 41.8902, lng: 12.4922 },
    year: "80 AD",
    history: "An ancient amphitheater in the center of Rome, Italy, the largest ever built.",
    clue: "Where gladiators once fought for glory and emperors watched",
    verse: "In the heart of ancient Rome, this grand arena witnessed the clash of warriors and the roar of fifty thousand spectators, a monument to an empire's might and spectacle. Built by emperors Vespasian and Titus, it stood as the greatest entertainment venue of the ancient world."
  },
  {
    name: "Statue of Liberty",
    coords: { lat: 40.6892, lng: -74.0445 },
    year: "1886 AD",
    history: "A colossal neoclassical sculpture on Liberty Island in New York Harbor, gift from France.",
    clue: "A torch-bearing symbol of freedom in the New World",
    verse: "Gift of friendship from France, she stands as a beacon of hope and liberty, welcoming travelers to a land of opportunity and dreams. Lady Liberty has greeted millions of immigrants seeking a new life in America."
  },
  {
    name: "Big Ben",
    coords: { lat: 51.5007, lng: -0.1246 },
    year: "1859 AD",
    history: "The Great Bell of the clock at the north end of the Palace of Westminster in London.",
    clue: "Hear the chimes of time over the Thames",
    verse: "Standing tall beside the River Thames, this Victorian Gothic masterpiece marks the passage of time with its resonant bells. The Elizabeth Tower houses the Great Bell that has rung out across London for over 160 years."
  },
  {
    name: "Taj Mahal",
    coords: { lat: 27.1751, lng: 78.0421 },
    year: "1653 AD",
    history: "An ivory-white marble mausoleum in Agra, India, built by Mughal emperor Shah Jahan.",
    clue: "A monument of eternal love in white marble",
    verse: "Emperor Shah Jahan built this monument of immortal love for his beloved wife Mumtaz Mahal. Twenty thousand artisans labored for twenty-two years to create this jewel of Muslim art in India, a perfect symphony in white marble."
  },
  {
    name: "Machu Picchu",
    coords: { lat: -13.1631, lng: -72.5450 },
    year: "1450 AD",
    history: "An ancient Incan citadel set high in the Andes Mountains in Peru.",
    clue: "Lost city in the clouds, rediscovered after centuries",
    verse: "Hidden among the peaks of the Andes, this sacred Incan city remained concealed from the world for centuries. Built without mortar, its precise stonework has withstood earthquakes and time, a testament to Incan engineering and their connection to the heavens."
  },
  {
    name: "Great Wall of China",
    coords: { lat: 40.4319, lng: 116.5704 },
    year: "221 BC - 1644 AD",
    history: "A series of fortifications built across northern China to protect against invasions.",
    clue: "The dragon of stone that spans mountains and valleys",
    verse: "Stretching over thirteen thousand miles across mountains, deserts, and grasslands, this ancient fortification stands as humanity's most ambitious architectural undertaking. Built over millennia by countless workers, it was meant to protect an empire and define a civilization."
  },
  {
    name: "Pyramids of Giza",
    coords: { lat: 29.9792, lng: 31.1342 },
    year: "2560 BC",
    history: "Ancient pyramid complex on the Giza plateau in Egypt, including the Great Pyramid.",
    clue: "Where pharaohs rest beneath geometric perfection",
    verse: "For over four thousand years, these monumental tombs have stood as wonders of the ancient world. Built as eternal resting places for pharaohs, they represent the pinnacle of Old Kingdom engineering and the Egyptian belief in the afterlife."
  },
  {
    name: "Christ the Redeemer",
    coords: { lat: -22.9519, lng: -43.2105 },
    year: "1931 AD",
    history: "An Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil.",
    clue: "Arms outstretched over Rio, blessing the city below",
    verse: "Atop Corcovado Mountain, this colossal statue of Christ stands with arms wide, overlooking Rio de Janeiro. A symbol of Brazilian Christianity and warm welcome, it has become an icon of the city and nation."
  },
  {
    name: "Petra Treasury",
    coords: { lat: 30.3285, lng: 35.4444 },
    year: "100 BC",
    history: "An ancient city carved into rose-red cliffs in Jordan, capital of the Nabataean Kingdom.",
    clue: "Rose-red city half as old as time",
    verse: "Carved directly into vibrant red sandstone cliffs, this ancient city was a crucial hub on silk and spice trade routes. The Nabataeans created an architectural marvel that remained hidden from the Western world until 1812."
  },
  {
    name: "Angkor Wat",
    coords: { lat: 13.4125, lng: 103.8670 },
    year: "1150 AD",
    history: "A massive temple complex in Cambodia, the largest religious monument in the world.",
    clue: "Temple city rising from the Cambodian jungle",
    verse: "Built by King Suryavarman II as his state temple and eventual mausoleum, this Hindu temple complex is the crown jewel of Khmer architecture. Its five towers symbolize the peaks of Mount Meru, home of the gods in Hindu mythology."
  },
  {
    name: "Sagrada Familia",
    coords: { lat: 41.4036, lng: 2.1744 },
    year: "1882 - Present",
    history: "An unfinished basilica in Barcelona, designed by architect Antoni Gaudí.",
    clue: "Gaudí's divine dream, still reaching for the heavens",
    verse: "Antoni Gaudí's masterpiece has been under construction for over 140 years, a living cathedral that blends Gothic and Art Nouveau forms. Every detail reflects nature's designs, from the tree-like columns to the intricate facades depicting the life of Christ."
  },
  {
    name: "Stonehenge",
    coords: { lat: 51.1789, lng: -1.8262 },
    year: "3000 - 2000 BC",
    history: "A prehistoric monument in Wiltshire, England, consisting of massive standing stones.",
    clue: "Ancient stones arranged in cosmic alignment",
    verse: "On Salisbury Plain, these megalithic stones stand in mysterious circular formation. Erected during the Neolithic period, their purpose remains debated—observatory, temple, or healing sanctuary? The massive bluestones were transported from Wales, 150 miles away."
  },
  {
    name: "Mount Rushmore",
    coords: { lat: 43.8791, lng: -103.4591 },
    year: "1941 AD",
    history: "Monumental sculpture carved into granite in South Dakota's Black Hills.",
    clue: "Four presidents watch over the American frontier",
    verse: "Carved into the granite face of Mount Rushmore are the 60-foot faces of four American presidents: Washington, Jefferson, Theodore Roosevelt, and Lincoln. Sculptor Gutzon Borglum and 400 workers spent 14 years creating this monument to democracy."
  },
  {
    name: "Acropolis of Athens",
    coords: { lat: 37.9715, lng: 23.7257 },
    year: "447 BC",
    history: "Ancient citadel containing the remains of several historically significant buildings, including the Parthenon.",
    clue: "Where democracy was born and gods were honored",
    verse: "Rising above Athens, this rocky outcrop holds the Parthenon and other temples dedicated to Athena, goddess of wisdom. The birthplace of democracy and Western civilization, its marble columns have inspired architects for millennia."
  },
  {
    name: "Golden Gate Bridge",
    coords: { lat: 37.8199, lng: -122.4783 },
    year: "1937 AD",
    history: "An iconic suspension bridge spanning the Golden Gate strait in San Francisco.",
    clue: "International orange spans the bay in fog",
    verse: "Spanning the turbulent waters of the Golden Gate Strait, this Art Deco suspension bridge was once the longest in the world. Its distinctive International Orange color was chosen to enhance visibility in San Francisco's famous fog."
  },
  {
    name: "Alhambra",
    coords: { lat: 37.1760, lng: -3.5881 },
    year: "1238 - 1358 AD",
    history: "A palace and fortress complex in Granada, Spain, showcasing Islamic architecture.",
    clue: "Moorish paradise of fountains and geometric beauty",
    verse: "The last great palace of Moorish Spain, the Alhambra represents the pinnacle of Islamic architecture in Europe. Its intricate tilework, reflecting pools, and geometric designs create a earthly paradise that inspired Washington Irving's tales."
  },
  {
    name: "Notre-Dame Cathedral",
    coords: { lat: 48.8530, lng: 2.3499 },
    year: "1345 AD",
    history: "Medieval Catholic cathedral on the Île de la Cité in Paris, France.",
    clue: "Gothic grandeur on an island in the Seine",
    verse: "This masterpiece of French Gothic architecture has stood for over 850 years, witnessing coronations, revolutions, and the liberation of Paris. Its flying buttresses, rose windows, and gargoyles tell stories of medieval faith and craftsmanship."
  },
  {
    name: "Forbidden City",
    coords: { lat: 39.9163, lng: 116.3972 },
    year: "1420 AD",
    history: "Imperial palace complex in Beijing, home to Chinese emperors for 500 years.",
    clue: "Where the Son of Heaven ruled behind vermillion walls",
    verse: "For five centuries, twenty-four emperors of the Ming and Qing dynasties ruled from within these walls. With 980 buildings and 9,999 rooms, this vast palace complex was the ceremonial and political center of Chinese government."
  },
  {
    name: "Sydney Opera House",
    coords: { lat: -33.8568, lng: 151.2153 },
    year: "1973 AD",
    history: "A multi-venue performing arts center in Sydney, Australia, known for its distinctive shell-like design.",
    clue: "Sails on the harbor where arts come alive",
    verse: "Jørn Utzon's revolutionary design transformed Sydney Harbour with its distinctive white shells. This architectural icon took 14 years to build and hosts over 1,500 performances annually, symbolizing Australia's creative spirit."
  }
];

// Export for use in index.html
if (typeof window !== 'undefined') {
  window.HUNT_LOCATIONS_WITH_PATHS = HUNT_LOCATIONS_WITH_PATHS;
}
