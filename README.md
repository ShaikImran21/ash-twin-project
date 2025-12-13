# 🌍 Travel Destinations Platform

A comprehensive travel planning platform with interactive destination exploration, flight booking, transportation search, trip planning, and user authentication. Features stunning UI with real-time API integrations for photos, places, and booking services.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Node.js](https://img.shields.io/badge/node.js-v18+-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

### 🗺️ Core Features
- **Interactive Destination Browser** - Explore popular destinations with stunning photos from Unsplash API
- **Flight Search** - Search and compare flights with real-time pricing (Amadeus API integration ready)
- **Bus Travel** - Find bus routes and book tickets across destinations
- **Trip Planner** - Create custom itineraries with day-by-day planning
- **Photo Gallery** - Browse curated travel photography
- **AR Experience** - Augmented reality travel preview (experimental)
- **Chaos Mode** - Fun interactive demo with animated effects

### 🔐 Authentication & User Management
- **Email OTP Authentication** - Secure login via Brevo/SendGrid/Resend email service
- **Appwrite Integration** - Backend authentication and user management
- **Session Management** - Persistent login sessions with secure tokens
- **User Profiles** - Personalized user dashboard and preferences

### 🎨 Enhanced UI/UX
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **INR Currency Support** - Indian Rupee pricing with proper formatting
- **Interactive Animations** - Rive animations and smooth transitions
- **Dark Mode Support** - Eye-friendly dark theme (coming soon)

### 🔌 API Integrations
- **Unsplash API** - High-quality destination photos
- **OpenTripMap API** - Places of interest and attractions
- **Brevo/SendGrid/Resend** - Email OTP delivery
- **Amadeus API** - Flight and hotel bookings (integration ready)
- **Appwrite** - Backend services and authentication

## 🚀 Quick Start

### Prerequisites
- Node.js v18 or higher
- npm or yarn package manager
- API keys for services (see Configuration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShaikImran21/ash-twin-project.git
   cd ash-twin-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Unsplash API
   UNSPLASH_ACCESS_KEY=your_unsplash_key
   
   # OpenTripMap API
   OPENTRIPMAP_API_KEY=your_opentripmap_key
   
   # Email Service (choose one)
   BREVO_API_KEY=your_brevo_key
   BREVO_SENDER_EMAIL=your@email.com
   BREVO_SENDER_NAME=Your Name
   
   # Appwrite (optional)
   APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   APPWRITE_PROJECT_ID=your_project_id
   APPWRITE_API_KEY=your_api_key
   ```

4. **Start the servers**
   
   **Option A: Using batch files (Windows)**
   ```bash
   start-server.bat        # Main server (port 8080)
   start-api-proxy.bat     # API proxy (port 3001)
   ```
   
   **Option B: Manual start**
   ```bash
   # Terminal 1 - Main Server
   node server.js
   
   # Terminal 2 - API Proxy
   node api-proxy-server.js
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📁 Project Structure

```
travel-destinations/
├── index.html                    # Main landing page
├── landing.html                  # Alternative landing page
├── destinations.html             # Browse destinations
├── flights.html                  # Flight search
├── bus-travel.html              # Bus booking
├── trip-planner.html            # Itinerary planner
├── gallery.html                 # Photo gallery
├── login.html                   # Authentication page
├── profile.html                 # User dashboard
├── ar-experience.html           # AR feature
├── chaos-mode-demo.html         # Fun demo mode
│
├── server.js                    # Main Express server
├── api-proxy-server.js          # API proxy server
├── session-manager.js           # Session handling
│
├── script.js                    # Main JavaScript
├── animations.js                # Animation utilities
├── destinations-data.js         # Destination database
├── transportation-data.js       # Transport data
├── enhanced-card-renderer-inr.js # UI rendering with INR
│
├── styles.css                   # Main styles
├── landing-styles.css           # Landing page styles
├── enhanced-styles.css          # Enhanced UI styles
├── auth-styles.css              # Auth page styles
├── pages-styles.css             # Common page styles
│
├── .env                         # Environment variables (create this)
├── .env.example                 # Example env file
├── package.json                 # Dependencies
├── vercel.json                  # Deployment config
│
└── Ash_Twin_Project/            # Interactive travel game subproject
    ├── index.html               # Game interface
    ├── script.js                # Game logic
    ├── verse_data.js            # Destination data
    └── assets/                  # Audio files (boom.wav, collect.wav, warp.wav)
```

## 🎮 Ash Twin Project

An interactive travel exploration game with:
- **Trail Mode** - Navigate through destinations using Street View
- **Adventure Paths** - Curated journeys through famous locations
- **Collectibles** - Discover hidden gems and earn achievements
- **Dynamic Photos** - Real photos from Unsplash API
- **Sound Effects** - Immersive audio feedback

[Learn more about Ash Twin Project](./Ash_Twin_Project/README.md)

## 🛠️ Configuration

### Getting API Keys

1. **Unsplash API**
   - Sign up at [unsplash.com/developers](https://unsplash.com/developers)
   - Create a new app
   - Copy your Access Key

2. **OpenTripMap API**
   - Register at [opentripmap.io](https://opentripmap.io/product)
   - Get your free API key

3. **Email Service (Brevo)**
   - Sign up at [brevo.com](https://www.brevo.com/)
   - Go to SMTP & API → Create API key
   - Verify your sender email

4. **Appwrite (Optional)**
   - Create account at [appwrite.io](https://appwrite.io/)
   - Create a new project
   - Copy Project ID and generate API key

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variables** in Vercel dashboard
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env`

### Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## 📝 Available Pages

| Page | URL | Description |
|------|-----|-------------|
| Landing | `/` or `/landing.html` | Hero page with featured destinations |
| Destinations | `/destinations.html` | Browse all destinations |
| Flights | `/flights.html` | Search and book flights |
| Bus Travel | `/bus-travel.html` | Find bus routes |
| Trip Planner | `/trip-planner.html` | Create itineraries |
| Gallery | `/gallery.html` | Photo gallery |
| Login/Signup | `/login.html` | Authentication |
| Profile | `/profile.html` | User dashboard |
| AR Experience | `/ar-experience.html` | Experimental AR |
| Chaos Mode | `/chaos-mode-demo.html` | Fun demo |
| Ash Twin Game | `/Ash_Twin_Project/` | Interactive game |

## 💡 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid/Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Rive** - Interactive animations

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Cors** - Cross-origin support
- **Axios** - HTTP client

### APIs & Services
- **Unsplash API** - Photo service
- **OpenTripMap API** - Places data
- **Brevo/SendGrid/Resend** - Email delivery
- **Appwrite** - Backend services

### Development Tools
- **Git** - Version control
- **npm** - Package management
- **Vercel/Netlify** - Deployment platforms

## 🐛 Troubleshooting

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues and solutions.

**Common Issues:**
- **Port already in use**: Change ports in server files
- **API errors**: Check your API keys in `.env`
- **CORS issues**: Ensure API proxy server is running
- **Images not loading**: Verify Unsplash API key and quota

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Shaik Imran**
- GitHub: [@ShaikImran21](https://github.com/ShaikImran21)
- Repository: [ash-twin-project](https://github.com/ShaikImran21/ash-twin-project)

## 🙏 Acknowledgments

- Unsplash for providing beautiful travel photos
- OpenTripMap for destination data
- Rive for interactive animations
- All contributors and users of this project

---

**Made with ❤️ for travel enthusiasts around the world**
