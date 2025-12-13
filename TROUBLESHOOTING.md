# 🔧 Troubleshooting Guide - Images Not Showing

## ✅ API is Working!

**Verified:**
- ✅ Backend running on port 3001
- ✅ Unsplash API returning 2-3 photos
- ✅ Image URLs are accessible (Status 200)
- ✅ Sample URL works: https://images.unsplash.com/photo-1499856871958-5b9627545d1a...

## 🔍 Debug Steps

### Step 1: Use the Debug Tool

**Open:** http://localhost:8080/test-unsplash-direct.html

**Click these buttons in order:**
1. **"Check Backend"** → Should show green ✅
2. **"Get Raw JSON"** → Should show API response with photos array
3. **"Get Parsed Images"** → Should show parsed image objects
4. **"Santorini" button** → Should display 6 images

**What to check:**
- If Step 1 fails → Backend not running
- If Step 2 fails → API endpoint issue
- If Step 3 fails → Parsing issue in api-services-proxy.js
- If Step 4 fails → Image rendering issue

### Step 2: Check Browser Console

**Press F12** to open DevTools

**Look for:**
- ❌ Red errors (CORS, network, etc.)
- ⚠️ Yellow warnings
- 📝 Console.log messages showing image URLs

**Common Issues:**
1. **CORS Error**: Backend needs CORS headers (already configured)
2. **404 Not Found**: Wrong image URL
3. **Mixed Content**: HTTP vs HTTPS issue
4. **CSP Error**: Content Security Policy blocking images

### Step 3: Check Network Tab

**In DevTools → Network tab:**
1. Reload page (Ctrl+R)
2. Filter by "Img" or "XHR"
3. Look for image requests
4. Check if they're returning 200 OK

**If images show 403 Forbidden:**
- Unsplash hotlink protection
- Need referrer header

**If images show 429 Too Many Requests:**
- Hit rate limit (50 requests/hour)
- Wait 1 hour or use different query

## 🐛 Known Issues & Fixes

### Issue 1: Images Not Rendering

**Symptoms:** API returns data but images don't show

**Possible Causes:**
1. Image URL is invalid
2. CORS blocking image load
3. CSS hiding images
4. Wrong property in response

**Fix:**
```javascript
// Check if img.url exists
console.log('Image URL:', img.url);

// Try different URL properties
src="${img.url || img.src?.large || img.src?.regular}"
```

### Issue 2: Empty Photos Array

**Symptoms:** API returns but photos array is empty

**Check:**
```javascript
const data = await response.json();
console.log('API Response:', data);
console.log('Photos:', data.photos);
console.log('Results:', data.results); // Unsplash uses 'results'
```

**Fix:** Make sure backend transforms Unsplash `results` to `photos`

### Issue 3: CORS Error

**Symptoms:** "Access-Control-Allow-Origin" error

**Check:**
- Backend has CORS enabled ✅
- FRONTEND_URL in .env matches your dev server

**Fix:**
```env
FRONTEND_URL=http://localhost:8080
```

### Issue 4: Mixed Content

**Symptoms:** "Mixed content" warning (HTTP page loading HTTPS images)

**Check:** Are you on http:// or https://?

**Fix:** Both should work, but ensure consistency

## 🧪 Manual Tests

### Test 1: Direct API Call
```javascript
// In browser console
fetch('http://localhost:3001/api/health')
  .then(r => r.json())
  .then(d => console.log('Health:', d));

fetch('http://localhost:3001/api/images?q=paris&per_page=3')
  .then(r => r.json())
  .then(d => console.log('Images:', d));
```

### Test 2: Check Image URL
```javascript
// In browser console
const testURL = 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?...';
const img = new Image();
img.onload = () => console.log('✅ Image loads!');
img.onerror = () => console.log('❌ Image failed!');
img.src = testURL;
```

### Test 3: API Service
```javascript
// In browser console
APIServicesProxy.getPexelsImages('paris', 3)
  .then(images => console.log('Got images:', images));
```

## 📊 Checklist

Before reporting an issue, verify:

- [ ] Backend is running (http://localhost:3001/api/health)
- [ ] API returns photos (use debug tool)
- [ ] Image URLs are valid (test in new tab)
- [ ] Browser console shows no errors
- [ ] Network tab shows successful requests
- [ ] CORS is not blocking requests
- [ ] Rate limit not exceeded (50/hour)

## 🎯 Quick Fixes

### Fix 1: Hard Refresh
```
Windows: Ctrl + F5
Mac: Cmd + Shift + R
```

### Fix 2: Clear Cache
```
DevTools → Network → Disable cache checkbox
```

### Fix 3: Restart Backend
```bash
cd travel-destinations
# Kill existing process
npm run start:api-proxy
```

### Fix 4: Check .env File
```bash
cat .env
# Should show:
# UNSPLASH_ACCESS_KEY=0MxrzHN86Ygh3Q0J5o_I2gfw0nK2jZE6fn5KZz_t2VI
```

## 📸 Expected Behavior

**When working correctly:**

1. Type "paris" in search
2. See autocomplete dropdown
3. Press Enter
4. Console logs:
   ```
   Fetching images for: paris
   Received 12 images: [...]
   Image 1 URL: https://images.unsplash.com/...
   Loaded successfully: https://images.unsplash.com/...
   ```
5. Images appear in grid

## 🆘 Still Not Working?

1. **Use debug tool first:** http://localhost:8080/test-unsplash-direct.html
2. **Take screenshot** of:
   - Browser console (F12)
   - Network tab showing requests
   - The page itself
3. **Share console output** with error messages

## 💡 Pro Tips

1. **Always check console first** (F12 → Console)
2. **Use Network tab** to see actual requests
3. **Test API directly** before testing UI
4. **Clear cache** when making changes
5. **Check rate limits** if suddenly stops working

---

**Most Common Issue:** Frontend cache not refreshing. Solution: Hard refresh with Ctrl+F5!
