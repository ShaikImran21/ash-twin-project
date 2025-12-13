# Backend Proxy Setup Guide

## 🎯 Why You Need This

**Problem**: Your travel website exposes API keys in the browser and hits CORS restrictions when calling OpenTripMap and Pexels directly.

**Solution**: A secure Node.js backend that:
- Hides API keys in environment variables (never exposed to users)
- Proxies requests to external APIs (no CORS issues)
- Adds error handling and rate limiting awareness
- Works in production with minimal configuration

---

## 🚀 Quick Start (Local Development)

### 1. Install Node.js Dependencies

```bash
cd travel-destinations
npm install
```

This installs:
- `express` - Web server framework
- `cors` - Handle cross-origin requests
- `dotenv` - Load environment variables
- `node-fetch` - Make HTTP requests (like browser fetch)

### 2. Configure API Keys

Your API keys are already in `.env`:

```env
OPENTRIPMAP_API_KEY=5ae2e3f...
PEXELS_API_KEY=P7wmzb4G...
FRONTEND_URL=http://localhost:5500
```

⚠️ **CRITICAL**: Never commit `.env` to Git (already in `.gitignore`)

### 3. Start the Backend Server

```bash
npm start
```

You'll see:
```
🚀 Travel API Proxy Server running on port 3000
📍 Environment: development
🔐 API Keys configured: OpenTripMap=true, Pexels=true
```

### 4. Update Your Frontend

Replace `api-services-real.js` with `api-services-proxy.js`:

```html
<!-- OLD: Direct API calls (insecure) -->
<script src="api-services-real.js"></script>

<!-- NEW: Proxy calls (secure) -->
<script src="api-services-proxy.js"></script>
```

Then use the new API:

```javascript
// Fetch images via proxy
const images = await APIServicesProxy.getPexelsImages('santorini greece', 12);

// Fetch nearby places via proxy
const attractions = await APIServicesProxy.getNearbyAttractions(36.3932, 25.4615, 5000);

// Check if backend is online
const isOnline = await APIServicesProxy.checkProxyHealth();
```

---

## 📡 API Endpoints

### Health Check
```
GET /api/health
Response: { status: 'ok', timestamp: '...', apis: { ... } }
```

### Get Nearby Places
```
GET /api/places?lat=36.3932&lon=25.4615&radius=5000&limit=10
Response: { features: [...] }
```

### Get Place Details
```
GET /api/places/:xid
Response: { name: '...', kinds: '...', info: '...', ... }
```

### Search Images
```
GET /api/images?q=santorini&per_page=12&orientation=landscape
Response: { photos: [...], page: 1, ... }
```

---

## 🌐 Deployment Options

### Option 1: **Vercel** (Serverless Functions) ⭐ RECOMMENDED

**Why**: Zero configuration, auto-scaling, free tier, built for Next.js/Node.js

**Setup**:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Create `vercel.json`:
   ```json
   {
     "version": 2,
     "builds": [
       { "src": "server.js", "use": "@vercel/node" }
     ],
     "routes": [
       { "src": "/api/(.*)", "dest": "server.js" }
     ],
     "env": {
       "NODE_ENV": "production"
     }
   }
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variables in Vercel dashboard:
   - `OPENTRIPMAP_API_KEY`
   - `PEXELS_API_KEY`
   - `FRONTEND_URL` (your production domain)

5. Update frontend:
   ```javascript
   const PROXY_BASE_URL = 'https://your-project.vercel.app';
   ```

**Pros**: Fastest setup, auto HTTPS, great free tier  
**Cons**: Cold starts (minor latency on first request)

---

### Option 2: **Netlify Functions**

**Why**: Similar to Vercel, great for static sites + serverless backend

**Setup**:
1. Create `netlify/functions/api.js`:
   ```javascript
   const serverless = require('serverless-http');
   const app = require('../../server');
   
   module.exports.handler = serverless(app);
   ```

2. Install:
   ```bash
   npm install serverless-http
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

4. Set environment variables in Netlify dashboard

**Pros**: Good integration with static hosting  
**Cons**: Function timeout limits, slightly more setup

---

### Option 3: **Railway** (Always-On Server)

**Why**: Traditional server hosting, no cold starts, simple Docker deployment

**Setup**:
1. Create account at [railway.app](https://railway.app)

2. Connect your GitHub repo

3. Railway auto-detects Node.js and deploys

4. Add environment variables in Railway dashboard:
   - `OPENTRIPMAP_API_KEY`
   - `PEXELS_API_KEY`
   - `FRONTEND_URL`
   - `PORT` (Railway auto-assigns)

5. Get your deployment URL: `https://your-app.railway.app`

**Pros**: No cold starts, always-on, simple scaling  
**Cons**: Less generous free tier than Vercel/Netlify

---

### Option 4: **Render** (Free Tier Alternative)

**Setup**:
1. Create account at [render.com](https://render.com)
2. "New Web Service" → Connect GitHub
3. Select `travel-destinations` folder
4. Build: `npm install`
5. Start: `npm start`
6. Add environment variables

**Pros**: Free tier available, simple UI  
**Cons**: Sleeps after 15min inactivity (like Heroku free tier)

---

## 🏆 Recommended Choice

### For Your Travel Website: **Vercel**

**Reasons**:
1. ✅ Simplest deployment (`vercel` command = done)
2. ✅ Auto HTTPS with custom domain
3. ✅ Generous free tier (100GB bandwidth, unlimited requests)
4. ✅ Perfect for frontend + backend combo
5. ✅ Built-in CI/CD (auto-deploy on git push)
6. ✅ Great DX (developer experience)

**Free Tier Limits**:
- 100GB bandwidth/month
- Unlimited serverless function invocations
- Cold start ~1-2 seconds (imperceptible for travel website)

---

## 🔐 Security Best Practices

### ✅ DO:
- Keep `.env` in `.gitignore` (already done)
- Use environment variables on hosting platform
- Restrict `FRONTEND_URL` to your actual domain in production
- Monitor API usage in OpenTripMap/Pexels dashboards
- Use HTTPS in production (Vercel/Netlify/Railway auto-provide this)

### ❌ DON'T:
- Commit API keys to Git
- Use `cors({ origin: '*' })` in production
- Expose `.env` file publicly
- Hardcode API keys in `server.js`
- Use CORS-anywhere or public proxies (security risk)

---

## 🧪 Testing

### Test Backend Locally:
```bash
# Terminal 1: Start backend
npm start

# Terminal 2: Test endpoints
curl http://localhost:3000/api/health
curl "http://localhost:3000/api/places?lat=36.3932&lon=25.4615"
curl "http://localhost:3000/api/images?q=santorini"
```

### Test Frontend Integration:
1. Start backend: `npm start`
2. Open `destinations.html` with Live Server (port 5500)
3. Open browser console
4. Run:
   ```javascript
   await APIServicesProxy.checkProxyHealth(); // Should return true
   await APIServicesProxy.getPexelsImages('bali', 6); // Should return images
   ```

---

## 📊 Rate Limits

**Pexels**:
- Free tier: 200 requests/hour
- Monitor: Dashboard → API Usage

**OpenTripMap**:
- Free tier: 1000 requests/day
- Upgrade: $9/month for 10k/day

**Backend endpoint** to check limits:
```
GET /api/rate-limits
```

---

## 🐛 Troubleshooting

### Issue: "Cannot find module 'express'"
**Fix**: Run `npm install`

### Issue: CORS error still happening
**Fix**: Check `FRONTEND_URL` in `.env` matches your dev server (e.g., `http://localhost:5500`)

### Issue: "API key not configured"
**Fix**: Verify `.env` file exists and has both keys

### Issue: 500 error from proxy
**Fix**: Check backend logs (`npm start`) for error details

### Issue: Images not loading in production
**Fix**: Update `PROXY_BASE_URL` in `api-services-proxy.js` to your deployed backend URL

---

## 📈 Next Steps

1. ✅ Test locally with `npm start`
2. ✅ Update frontend to use `api-services-proxy.js`
3. ✅ Deploy to Vercel: `npm install -g vercel && vercel`
4. ✅ Add environment variables in Vercel dashboard
5. ✅ Update `PROXY_BASE_URL` to your Vercel URL
6. ✅ Test production deployment
7. ✅ Remove old `api-config-real.js` (security risk)

---

## 📞 Support

If you encounter issues:
1. Check `/api/health` endpoint
2. Review backend logs
3. Verify environment variables are set
4. Test with `curl` or Postman before frontend integration

---

**Built for production. Scales beyond hackathons. No hacks, just solid engineering.** 🚀
