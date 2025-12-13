# 🚀 Brevo API Setup - Quick Guide

## Why Brevo?
✅ **300 FREE emails per day** (best free tier!)
✅ No credit card required
✅ No personal email needed
✅ Professional service
✅ 5-minute setup

---

## 📝 Step-by-Step Setup

### Step 1: Create Brevo Account (2 minutes)

1. Go to: **https://www.brevo.com/**
2. Click **"Sign up free"**
3. Enter your email and password
4. Verify your email from inbox
5. Done! ✅

---

### Step 2: Get Your API Key (1 minute)

1. Login to: **https://app.brevo.com/**
2. Click on your name (top-right)
3. Go to: **Settings** → **API Keys**
   - Or directly: **https://app.brevo.com/settings/keys/api**
4. Click **"Create a new API key"**
5. Name it: **"Voyager Travel"**
6. Click **Generate**
7. **Copy the API key** (looks like: `xkeysib-abc123...`)
   - ⚠️ Copy it now! You won't see it again

---

### Step 3: Add API Key to Server (30 seconds)

1. Open file: **`travel-destinations/server.js`**
2. Find **line 21**:
   ```javascript
   const BREVO_API_KEY = 'YOUR_BREVO_API_KEY_HERE';
   ```
3. Replace with your key:
   ```javascript
   const BREVO_API_KEY = 'xkeysib-abc123...'; // Your actual key
   ```
4. **Save the file**

---

### Step 4: Install & Run (1 minute)

Open Command Prompt in `travel-destinations` folder:

```bash
npm install
```

Then start the server:

```bash
npm start
```

You should see:
```
╔════════════════════════════════════════════════════════╗
║     🚀 VOYAGER AUTHENTICATION SERVER                   ║
╠════════════════════════════════════════════════════════╣
║  Server: http://localhost:3000                         ║
║  Email Provider: Brevo API (300 emails/day FREE)       ║
║  Status: ✅ Ready to send OTPs                         ║
╚════════════════════════════════════════════════════════╝

✅ Server ready! Open http://localhost:3000 to test
```

---

### Step 5: Test It! 🎉

1. Open browser: **http://localhost:3000**
2. Click on login
3. Enter **ANY email address** (yours, friend's, test email)
4. Click "Continue"
5. **Check that email's inbox** - OTP will arrive in seconds!
6. Enter the OTP
7. Success! You're logged in! 🎉

---

## 📧 What Happens?

```
User enters email
    ↓
Backend generates random 6-digit OTP
    ↓
Brevo API sends email
    ↓
User receives professional HTML email
    ↓
User enters OTP
    ↓
Authenticated! ✅
```

---

## 🎨 Email Template

Users will receive beautiful emails with:
- **Voyager Travel branding**
- **Large, clear OTP display**
- **5-minute validity warning**
- **Security notice**
- **Professional design**

**Sender:** Voyager Travel <noreply@voyager-travel.com>

---

## 💡 Key Features

✅ **No personal email used** - Your email stays private
✅ **300 emails per day FREE** - More than enough for testing
✅ **Professional sender** - Looks legitimate
✅ **Fast delivery** - OTPs arrive in seconds
✅ **High deliverability** - Won't go to spam
✅ **No verification needed** - Start sending immediately

---

## 🔒 Security

Your API key is secret! 
- ✅ Don't share it
- ✅ Don't commit to GitHub
- ✅ Keep it in server.js only

For production:
- Use environment variables: `process.env.BREVO_API_KEY`

---

## 🆘 Troubleshooting

### "API key is invalid"
- Double-check you copied the entire key
- No extra spaces before/after
- Regenerate a new key if needed

### Emails not arriving
- Check spam/junk folder
- Wait 30 seconds (usually instant though)
- Check server console for error messages
- Verify API key is correct

### Server won't start
- Make sure you ran `npm install`
- Check if port 3000 is available
- Look for error messages in console

### "Cannot find module"
- Run: `npm install` again
- Make sure you're in travel-destinations folder

---

## 📊 Free Tier Limits

- **300 emails per day** - Forever free!
- No credit card required
- No expiration
- Perfect for:
  - Development
  - Testing
  - Small projects
  - Side projects

Need more? Paid plans start at $25/month for unlimited emails.

---

## ✅ Checklist

- [ ] Created Brevo account
- [ ] Got API key from dashboard
- [ ] Added API key to server.js line 21
- [ ] Saved server.js
- [ ] Ran `npm install`
- [ ] Started server with `npm start`
- [ ] Tested login with real email
- [ ] Received OTP email
- [ ] Successfully logged in

---

## 🎯 What You Get

✅ **Professional OTP system**
✅ **No personal email exposed**
✅ **300 free emails daily**
✅ **Beautiful HTML emails**
✅ **Fast & reliable**
✅ **Production-ready code**

---

## 📞 Need Help?

If you're stuck:
1. Check the error message in server console
2. Verify API key is correct (line 21 in server.js)
3. Make sure server is running
4. Test with different email addresses

---

## 🚀 Ready to Go!

That's it! Just 3 things:
1. Sign up at Brevo
2. Get API key
3. Add to server.js line 21

**Total time: 5 minutes**
**Result: Professional OTP emails sent to any address!**

---

**Brevo Website:** https://www.brevo.com/
**API Keys Page:** https://app.brevo.com/settings/keys/api
**Documentation:** https://developers.brevo.com/

🎉 **Your authentication system is ready!**
