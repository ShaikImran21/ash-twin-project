# Ash Twin Project

A browser-based Google Street View treasure hunt game with automated Trail Mode navigation.

## Features

- 🗺️ **Street View Navigation**: Explore real-world locations through Google Street View
- 🎯 **Random Target Selection**: Hunt for historical landmarks from around the world
- 🎬 **Trail Mode**: Automated route navigation that moves you through Street View
- 📍 **Live Distance Tracking**: Real-time updates showing your distance to the target
- 🗺️ **Minimap**: Visual overview with route polyline and position markers
- 🎵 **Audio Feedback**: Sound effects for actions and arrivals
- ⌨️ **Keyboard Shortcuts**: Quick access with 'I' (Initiate) and 'T' (Trail Mode)

## Setup Instructions

### 1. Get a Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
    - Maps JavaScript API
    - Street View Static API
    - Directions API
4. Create credentials (API Key)
5. Copy your API key

### 2. Configure the Application

1. Open `index.html` in a text editor
2. Find the line: `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=geometry" defer></script>`
3. Replace `YOUR_API_KEY_HERE` with your actual API key

### 3. Add Audio Assets

Create an `assets/` folder in the project directory and add these audio files:

- `boom.wav` - Error/failure sound
- `collect.wav` - Success/arrival sound
- `warp.wav` - Movement/jump sound

### 4. Serve the Application

The app must be served via a web server (not opened directly as a file). Use one of these methods:

**Python (recommended):**

```bash
python -m http.server 8000
```

**Node.js (http-server):**

```bash
npx http-server -p 8000
```

**PHP:**

```bash
php -S localhost:8000
```

Then open: `http://localhost:8000/index.html`

## Project Structure

```
Ash Twin Project/
├── index.html              # Main application (single-file)
├── verse_data_enhanced.js  # Location data (optional - has fallback)
├── assets/
│   ├── boom.wav
│   ├── collect.wav
│   └── warp.wav
└── README.md
```

## How to Play

1. Click **"🎯 INITIATE SEQUENCE"** or press **I** to start
2. A random historical location will be selected
3. You'll be placed in Street View near the target
4. Navigate manually or click **"🎬 TRAIL MODE"** (or press **T**) for automatic navigation
5. Trail Mode will calculate a walking route and automatically move you toward the target
6. Reach within 25 meters to complete the hunt!

## Keyboard Shortcuts

- **I** - Start new level (Initiate Sequence)
- **T** - Toggle Trail Mode on/off

## Technical Details

- **Framework**: Vanilla JavaScript (no dependencies)
- **APIs**: Google Maps JavaScript API v3
- **Style**: Inline CSS with responsive design
- **Browser Compatibility**: Modern browsers with ES6+ support

## Credits

Created as part of the Ash Twin Project treasure hunt series.

## License

[Add your license here]
