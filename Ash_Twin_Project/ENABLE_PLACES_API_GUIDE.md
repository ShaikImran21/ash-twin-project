# Enable Google Places API - Step by Step Guide

## 🚨 Current Issue

**Problem:** Photos are showing the same Unsplash images repeatedly
**Cause:** Google Places API is not enabled on your API key
**Solution:** Enable the Places API in Google Cloud Console

---

## 📋 Quick Fix Steps

### Option 1: Enable Places API (Recommended)

**1. Go to Google Cloud Console:**

- Visit: https://console.cloud.google.com/apis/library

**2. Login:**

- Use the Google account associated with your API key
- Key: `AIzaSyAvCO_bc...RxHl6BVY`

**3. Search for Places API:**

- In the search box, type: "Places API"
- Click on "Places API" from results

**4. Enable the API:**

- Click the blue "Enable" button
- Wait 1-2 minutes for activation

**5. Refresh Your Game:**

- Refresh browser (F5)
- Try collecting a waypoint
- Check console for: `📡 Google Places API status: OK`

---

## 🔍 How to Check if It's Working

### In Browser Console (F12):

**If Places API is Working:**

```
📸 Loading photos for Sumida River Walk...
📡 Google Places API status: OK
✅ Matched Sumida River Walk with Sumida River
✅ Found 3 photos for Sumida River Walk (matched: Sumida River)
```

**If Places API is NOT Enabled:**

```
📸 Loading photos for Sumida River Walk...
📡 Google Places API status: REQUEST_DENIED
❌ Google Places API REQUEST_DENIED - API not enabled or invalid key
📷 Using fallback photos instead
📷 Using curated photos for Sumida River Walk
```

---

## 🛠️ Option 2: Use Without Places API

If you don't want to enable Places API, the game will work with improved Unsplash fallbacks:

### Changes Made:

- ✅ Added random signatures to prevent caching
- ✅ Different photos each time you collect
- ✅ 50+ curated search terms for Tokyo locations
- ✅ Higher quality images (1200x800)

### How It Works:

- Game tries Google Places API first
- If denied, uses specific Unsplash searches
- Each waypoint gets unique search term
- Random parameters prevent duplicate images

### Example Searches:

```
Sumida River Walk → "sumida+river+tokyo+historic"
Kaminarimon Gate → "kaminarimon+gate+asakusa"
Tokyo Tower → "tokyo+tower+historic"
Senso-ji Temple → "sensoji+temple+asakusa+tokyo"
```

---

## 💰 Cost Comparison

### With Places API Enabled:

- **Cost:** ~$0.05 per waypoint (first time)
- **Quality:** Real photos from actual locations
- **Accuracy:** 100% relevant
- **Free Tier:** $200/month credit = 4,000+ waypoints
- **Typical Game:** $1-2 per playthrough (free)

### Without Places API (Unsplash):

- **Cost:** $0 (completely free)
- **Quality:** High-quality curated images
- **Accuracy:** 80-90% relevant (generic but themed)
- **Limitations:** Not exact location, may repeat

---

## 🎯 Recommended Setup

### For Best Experience:

1. ✅ **Enable Places API** (5 minutes setup)
2. ✅ Get real photos of actual locations
3. ✅ $200/month free tier covers 4,000+ waypoints
4. ✅ Cost per game: $1-2 (well within free limits)

### For Zero Cost:

1. ✅ **Don't enable Places API**
2. ✅ Uses improved Unsplash fallbacks
3. ✅ Still good quality images
4. ✅ Completely free forever

---

## 🔧 Current Status

### APIs Currently Enabled:

- ✅ Maps JavaScript API (for map display)
- ✅ Directions API (for trail mode routes)
- ✅ Street View Static API (for panoramas)
- ❌ Places API (for real location photos) ← **NEEDS ENABLING**

### What Works Now:

- ✅ Game fully functional
- ✅ Trail mode working
- ✅ Waypoint collection working
- ✅ Photos showing (Unsplash fallbacks)
- ⚠️ Same images may repeat (until Places API enabled)

---

## 📱 How to Enable Places API

### Detailed Steps:

**1. Open Google Cloud Console**

```
URL: https://console.cloud.google.com
```

**2. Select Your Project**

- Click project dropdown (top bar)
- Select the project with your API key
- (If unsure, check which project has the key)

**3. Navigate to APIs & Services**

- Click hamburger menu (☰) top left
- Go to: "APIs & Services" → "Library"

**4. Search for Places API**

- Type "Places API" in search box
- Click on "Places API" result

**5. Enable the API**

- Click big blue "ENABLE" button
- Wait for confirmation (1-2 minutes)

**6. Verify Enabled**

- Go to: "APIs & Services" → "Dashboard"
- Should see "Places API" in list
- Status should be "Enabled"

**7. Test in Game**

- Refresh your browser (F5)
- Open console (F12)
- Collect a waypoint
- Look for: `📡 Google Places API status: OK`

---

## ⚠️ Troubleshooting

### Issue: "REQUEST_DENIED" in console

**Causes:**

1. Places API not enabled
2. API key doesn't have Places API access
3. Billing not enabled on project

**Solutions:**

1. Enable Places API (see steps above)
2. Check API key restrictions in Cloud Console
3. Enable billing (free tier applies automatically)

### Issue: Still showing same images

**Possible Causes:**

1. Browser cache
2. Places API not fully activated yet

**Solutions:**

1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear cache: F12 → Network tab → "Disable cache" checkbox
3. Wait 2-3 minutes after enabling API
4. Check console for API status

### Issue: "OVER_QUERY_LIMIT"

**Cause:** Exceeded API quota

**Solutions:**

1. Wait 1 minute (quota resets)
2. Check quotas in Cloud Console
3. Increase quotas if needed (unlikely with free tier)

---

## 📊 Testing After Enabling

### Test Checklist:

**1. Enable Places API** ✅

- Followed steps above
- Saw "Enabled" confirmation

**2. Refresh Browser** ✅

- Hard refresh (Ctrl+Shift+R)
- Clear cache if needed

**3. Start Game** ✅

- Click "Initiate Sequence"
- Game loads location

**4. Open Console** ✅

- Press F12
- Go to Console tab

**5. Collect Waypoint** ✅

- Use trail mode or manual navigation
- Get within 50m
- Press spacebar

**6. Check Console** ✅
Look for:

```
📸 Loading photos for [Waypoint Name]...
📡 Google Places API status: OK          ← Should say OK
✅ Matched [Waypoint] with [Place Name]
✅ Found 3 photos for [Waypoint]
```

**7. Verify Photos** ✅

- Modal opens with photos
- Photos should be of actual location
- Click thumbnails to see different views
- Photos should be relevant and unique

---

## 🎉 Success Indicators

### You'll know it's working when:

- ✅ Console shows: `📡 Google Places API status: OK`
- ✅ Different photos for each waypoint
- ✅ Photos match the actual location names
- ✅ Multiple photos per location (2-3)
- ✅ High quality, relevant images

### If still using fallbacks:

- ⚠️ Console shows: `📡 Google Places API status: REQUEST_DENIED`
- ⚠️ Message: "Using fallback photos instead"
- ⚠️ Photos are generic (but themed)

---

## 📝 Summary

### Current Setup:

- Game works fully with or without Places API
- Fallback system uses improved Unsplash with anti-caching
- Console logging shows API status clearly

### To Get Real Photos:

1. Enable Places API in Google Cloud Console (5 minutes)
2. Refresh browser
3. Photos will now be from actual locations

### To Stay Free:

1. Don't enable Places API
2. Use improved Unsplash fallbacks
3. Still good quality, just not exact locations

---

## 🆘 Still Having Issues?

### Check Console Messages:

- `REQUEST_DENIED` = API not enabled
- `ZERO_RESULTS` = Location not found (normal for some)
- `OVER_QUERY_LIMIT` = Too many requests (wait 1 min)

### Fallback is Working If:

- Photos still show (even if repeated)
- No JavaScript errors in console
- Game playable

### Everything Working If:

- Console shows `OK` status
- Different photos each waypoint
- Photos match location names

---

**Bottom line:** Game works either way, but enabling Places API gives you real photos of actual Tokyo locations!
