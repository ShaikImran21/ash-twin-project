# 🚀 Local Server Guide

## Quick Start

### Option 1: Default Port (8080)

```powershell
.\start_server.ps1
```

Then open: http://localhost:8080/index.html

### Option 2: Custom Port

```powershell
.\start_server.ps1 -Port 3000
```

Then open: http://localhost:3000/index.html

### Option 3: Windows Batch File

```cmd
start_server.bat
```

Or for custom port:

```cmd
start_server.bat 3000
```

---

## 🎯 Available URLs

Once the server is running, you can access:

| URL                                            | Description                       |
| ---------------------------------------------- | --------------------------------- |
| `http://localhost:8080/`                       | Redirects to index.html           |
| `http://localhost:8080/index.html`             | Main application                  |
| `http://localhost:8080/test_unsplash_api.html` | Interactive test suite            |
| `http://localhost:8080/paris.html`             | Paris-specific map (if available) |

---

## 🔧 Port Options

### Common Ports:

- **8080** - Default (recommended)
- **3000** - Node.js default
- **8000** - Python SimpleHTTPServer default
- **5500** - Live Server default
- **4200** - Angular default

### Custom Port Examples:

```powershell
.\start_server.ps1 -Port 8080   # Default
.\start_server.ps1 -Port 3000   # Alternative
.\start_server.ps1 -Port 5500   # Live Server style
.\start_server.ps1 -Port 8888   # Custom
```

---

## 📊 Server Features

✅ **CORS Enabled** - API requests work correctly  
✅ **MIME Types** - Proper content types for all files  
✅ **Logging** - See all requests in console  
✅ **Error Handling** - 404 pages for missing files  
✅ **Auto-detect** - Checks if port is available

---

## 🐛 Troubleshooting

### Port Already in Use?

```
❌ Error: Port 8080 is already in use!
```

**Solution**: Try a different port

```powershell
.\start_server.ps1 -Port 8081
```

### Can't Execute PowerShell Script?

```
❌ Error: Execution policy restricted
```

**Solution 1**: Use the batch file

```cmd
start_server.bat
```

**Solution 2**: Run PowerShell as Administrator and set policy

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Server Won't Stop?

**Solution**: Press `Ctrl+C` in the terminal

### Files Not Loading?

**Check**:

1. Server is running (check terminal)
2. Correct URL (http://localhost:PORT/index.html)
3. File exists in the directory

---

## 💡 Pro Tips

### 1. Open Browser Automatically

```powershell
.\start_server.ps1 -Port 8080
Start-Process "http://localhost:8080/index.html"
```

### 2. Check What's Using a Port

```powershell
Get-NetTCPConnection -LocalPort 8080
```

### 3. Multiple Servers

Run different ports for different projects:

```powershell
# Terminal 1
.\start_server.ps1 -Port 8080

# Terminal 2
.\start_server.ps1 -Port 8081
```

### 4. Server as Background Job

```powershell
Start-Job -ScriptBlock { & ".\start_server.ps1" -Port 8080 }
```

---

## 🌐 Alternative Server Options

### Python (if installed)

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

### Node.js http-server (if installed)

```bash
npm install -g http-server
http-server -p 8080 -c-1
```

### VS Code Live Server Extension

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 📝 Server Logs

When running, you'll see logs like:

```
[10:30:15] GET /index.html
         → 200 OK (125432 bytes)
[10:30:16] GET /style.css
         → 200 OK (15678 bytes)
[10:30:16] GET /script.js
         → 200 OK (45231 bytes)
```

**Log Format**:

- `[HH:MM:SS]` - Timestamp
- `GET/POST` - HTTP method
- `/path` - Requested file
- `200/404` - Status code
- `(bytes)` - File size

---

## 🔒 Security Notes

⚠️ **This server is for LOCAL DEVELOPMENT ONLY**

- Only accessible from your computer (localhost)
- Not suitable for production hosting
- No authentication or security features
- Stop server when not in use

**For Production**: Use proper hosting services like:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

---

## 🎮 Testing Checklist

Once server is running:

- [ ] Open http://localhost:PORT/index.html
- [ ] Check console for "✅ Unsplash Photo Loader initialized"
- [ ] Test Cesium globe loads
- [ ] Test Street View works
- [ ] Collect a waypoint
- [ ] Verify photos load from Unsplash
- [ ] Open test suite: http://localhost:PORT/test_unsplash_api.html
- [ ] Run all tests in test suite

---

## 📚 Related Files

- `start_server.ps1` - PowerShell server script
- `start_server.bat` - Windows batch wrapper
- `SERVER_GUIDE.md` - This guide
- `index.html` - Main application
- `test_unsplash_api.html` - Test suite

---

**Status**: Ready to use!  
**Default Port**: 8080  
**Commands**: `.\start_server.ps1` or `start_server.bat`
