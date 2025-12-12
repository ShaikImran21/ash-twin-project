# Setup Guide - Ash Twin Project

## Quick Start (5 Minutes)

### 1. Get Google Maps API Key

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - **Maps JavaScript API** ✓
   - **Directions API** ✓
   - **Street View Static API** (optional but recommended)
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key

### 2. Insert API Key

Open `index.html` in a text editor and find line ~26:

```html
<!-- TODO: Insert your Google Maps API key below -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=geometry" defer></script>
```

Replace `YOUR_API_KEY_HERE` with your actual API key:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&libraries=geometry" defer></script>
```

### 3. Add Audio Files (Optional)

Download or create three sound effects and place them in the `assets/` folder:
- `boom.wav` - Error sound (any short beep or buzz)
- `collect.wav` - Success sound (chime, ding, or tada)
- `warp.wav` - Teleport sound (whoosh or warp effect)

**Free Sound Resources:**
- [Freesound.org](https://freesound.org/)
- [Mixkit.co](https://mixkit.co/free-sound-effects/)
- [Zapsplat.com](https://www.zapsplat.com/)

> **Note:** The game works without audio files (errors are handled gracefully)

### 4. Start Local Server

Choose one method:

**Python (Recommended):**
```bash
cd "Ash Twin Project"
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

**VS Code Live Server:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### 5. Open in Browser

Navigate to: **http://localhost:8000/index.html**

---

## Testing Checklist

### Basic Functionality
- [ ] Page loads without errors (check browser console F12)
- [ ] Click "INITIATE SEQUENCE" - should show a random location
- [ ] Street View loads and displays a panorama
- [ ] Distance updates in the toolbar
- [ ] Minimap shows in bottom-left with two markers (blue = you, red = target)
- [ ] Verse/clue displays at the bottom

### Trail Mode
- [ ] "TRAIL MODE" button is enabled after initiating sequence
- [ ] Click "TRAIL MODE" - should calculate route
- [ ] Blue route line appears on minimap
- [ ] Street View automatically advances through waypoints
- [ ] Heading rotates to face next waypoint
- [ ] Distance decreases as you approach target
- [ ] "Arrived!" message appears when within 25 meters
- [ ] Trail mode stops automatically on arrival

### Keyboard Shortcuts
- [ ] Press **I** key → starts new sequence
- [ ] Press **T** key → toggles trail mode

### Audio (if files added)
- [ ] Error actions play `boom.wav`
- [ ] Success/arrival plays `collect.wav`
- [ ] Each waypoint jump plays `warp.wav`

---

## Troubleshooting

### "Google Maps failed to load"
- Check that your API key is correctly inserted
- Verify the APIs are enabled in Google Cloud Console
- Check browser console for specific error messages

### "Unable to calculate walking route"
- Location may be in an area without walking directions
- Try clicking "INITIATE SEQUENCE" again for a different location
- Check internet connection

### "No Street View near this location"
- Some locations (like Machu Picchu) have limited Street View coverage
- Try a different location
- The game includes 20 locations with good coverage

### Trail Mode doesn't move
- Check browser console for errors
- Verify Directions API is enabled
- Some locations may have sparse panorama coverage

### Audio doesn't play
- Browser may block autoplay - interact with page first
- Check that audio files exist in `assets/` folder
- Audio errors are logged to console (F12)

---

## Project Structure

```
Ash Twin Project/
├── index.html              # Main game file (single-file app)
├── verse_data_enhanced.js  # 20 historical locations worldwide
├── assets/
│   ├── boom.wav           # Error sound (optional)
│   ├── collect.wav        # Success sound (optional)
│   └── warp.wav           # Movement sound (optional)
├── README.md              # Project documentation
├── SETUP_GUIDE.md         # This file
└── .gitignore             # Git ignore rules
```

---

## Adding Custom Locations

Edit `verse_data_enhanced.js` and add entries to the array:

```javascript
{
  name: "Your Location",
  coords: { lat: 40.7128, lng: -74.0060 },  // Decimal coordinates
  year: "2024 AD",
  history: "Brief description...",
  clue: "A short hint or riddle",
  verse: "Longer narrative text about the location..."
}
```

**Tips for good locations:**
- Must have Google Street View coverage
- Urban areas work better than rural
- Famous landmarks are ideal
- Check coverage at [Google Maps](https://maps.google.com) (little yellow person icon)

---

## API Usage & Costs

Google Maps Platform offers a **$200 monthly free credit** which covers:
- ~28,000 Street View loads
- ~40,000 Directions API calls

For personal/testing use, you likely won't exceed free tier.

**Best Practices:**
- Restrict your API key to specific domains/IPs
- Enable only the APIs you need
- Monitor usage in Google Cloud Console

---

## Next Steps

✅ Basic game is complete!

**Enhancement Ideas:**
1. Add scoring system
2. Timer for speed runs
3. Multiplayer support
4. More locations (edit verse_data_enhanced.js)
5. Custom styling/themes
6. Save progress with localStorage
7. Leaderboard system

---

## Need Help?

- Check browser console (F12) for error messages
- Review the project abstract in `project_abstract.txt`
- Open an issue on GitHub
- Test with different locations

**Happy hunting! 🗺️✨**
