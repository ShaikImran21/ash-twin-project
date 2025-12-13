# 🚀 Setup Guide - Email API Services

## Choose Your Email Service

I've created 3 server implementations for you:

### 1. **Brevo** (RECOMMENDED - 300 free/day)
File: `server-brevo.js`

### 2. **SendGrid** (100 free/day)
File: `server-sendgrid.js`

### 3. **Resend** (100 free/day - Easiest)
File: `server-resend.js`

---

## 🏆 Option 1: Brevo (Recommended)

### Why Brevo?
- ✅ **300 FREE emails per day** (best free tier)
- ✅ No credit card required
- ✅ Easy setup
- ✅ Professional service

### Setup Steps:

#### 1. Sign Up
- Go to: https://www.brevo.com/
- Click "Sign up free"
- Enter your email and create account
- Verify your email

#### 2. Get API Key
- Login to https://app.brevo.com/
- Go to: **Settings** → **API Keys** (or https://app.brevo.com/settings/keys/api)
- Click "**Create a new API key**"
- Name it: "Voyager Travel"
- Copy the API key (looks like: `xkeysib-abc123...`)

#### 3. Configure Server
- Rename `server-brevo.js` to `server.js`
- Open `server.js`
- Find line 17:
  ```javascript
  const BREVO_API_KEY = 'YOUR_BREVO_API_KEY_HERE';
  ```
- Replace with your key:
  ```javascript
  const BREVO_API_KEY = 'xkeysib-abc123...';
  ```

#### 4. Install & Run
```bash
npm install
node server.js
```

#### 5. Test!
- Open: http://localhost:3000
- Login with any email
- Check that email's inbox!

**That's it! No personal email needed!** 🎉

---

## 📧 Option 2: SendGrid

### Why SendGrid?
- ✅ Industry standard
- ✅ 100 FREE emails per day
- ✅ Very reliable
- ✅ Great documentation

### Setup Steps:

#### 1. Sign Up
- Go to: https://sendgrid.com/
- Click "Start for free"
- Create account (no credit card needed)

#### 2. Verify Sender Email
- Go to: **Settings** → **Sender Authentication**
- Click "**Verify a Single Sender**"
- Enter an email you own (can be any email)
- Verify it from your inbox

#### 3. Get API Key
- Go to: **Settings** → **API Keys**
- Click "**Create API Key**"
- Name: "Voyager Travel"
- Permissions: "Full Access"
- Copy the key (starts with `SG.`)

#### 4. Configure Server
- Rename `server-sendgrid.js` to `server.js`
- Open `server.js`
- Line 17: Add your API key
- Line 31: Change email to your verified sender

#### 5. Install Dependencies
```bash
npm install @sendgrid/mail
node server.js
```

---

## 🎨 Option 3: Resend (Easiest)

### Why Resend?
- ✅ Super simple API
- ✅ Modern & developer-friendly
- ✅ 100 FREE emails per day
- ✅ No sender verification needed (uses resend.dev)

### Setup Steps:

#### 1. Sign Up
- Go to: https://resend.com/
- Click "Get started"
- Sign up (GitHub/email)

#### 2. Get API Key
- Go to: **API Keys** (https://resend.com/api-keys)
- Click "**Create API Key**"
- Name: "Voyager"
- Copy the key (starts with `re_`)

#### 3. Configure Server
- Rename `server-resend.js` to `server.js`
- Open `server.js`
- Find line 17:
  ```javascript
  const RESEND_API_KEY = 'YOUR_RESEND_API_KEY_HERE';
  ```
- Replace with your key:
  ```javascript
  const RESEND_API_KEY = 're_abc123...';
  ```

#### 4. Install & Run
```bash
npm install resend
node server.js
```

**Note:** Resend uses `onboarding@resend.dev` as sender. For custom domain, add your domain in Resend dashboard.

---

## 📊 Quick Comparison

| Feature | Brevo | SendGrid | Resend |
|---------|-------|----------|--------|
| **Free Tier** | 300/day | 100/day | 100/day |
| **Setup Time** | 5 min | 10 min | 3 min |
| **Sender Verification** | Optional | Required | Not needed |
| **Best For** | Most emails | Professional | Simplicity |

---

## 🧪 Testing

After setup, test with:

1. Start server: `node server.js`
2. Open: http://localhost:3000
3. Go to login
4. Enter **any email address** (yours, friend's, test email)
5. Click Continue
6. **Check that email's inbox**
7. Enter OTP
8. Success! 🎉

---

## 💡 Benefits vs Personal Gmail

✅ **No personal email exposed**
- Your email address isn't used at all

✅ **Professional sender**
- Emails from `noreply@voyager-travel.com` (or resend.dev)

✅ **Better deliverability**
- Won't go to spam folder

✅ **Higher limits**
- 100-300 emails/day free

✅ **No Gmail setup needed**
- No app passwords or 2FA

✅ **Analytics**
- See email open rates, clicks, etc.

---

## 🔒 Security Notes

- ✅ Keep API keys secret
- ✅ Don't commit to Git
- ✅ Use environment variables in production
- ✅ Monitor for abuse

---

## 🆘 Troubleshooting

### "API key is invalid"
- Double-check the API key
- Make sure no extra spaces
- Regenerate if needed

### Emails not arriving
- Check spam folder
- Verify sender email (SendGrid)
- Check API key permissions
- Look at server console for errors

### "sender not verified" (SendGrid)
- Go to Sender Authentication
- Verify your sender email
- Update server.js with verified email

---

## 🎯 My Recommendation

**Start with Brevo:**
1. Best free tier (300/day)
2. Easiest setup
3. No sender verification needed
4. Professional service

**If you need more:**
- **SendGrid** for industry standard
- **Resend** for modern/simple API

---

## ✅ Package.json Update

Add to your `package.json` dependencies based on choice:

**For Brevo:** (uses built-in fetch, no package needed)
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

**For SendGrid:**
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "@sendgrid/mail": "^7.7.0"
  }
}
```

**For Resend:**
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "resend": "^3.0.0"
  }
}
```

---

**Ready to send OTPs without using your personal email!** 🚀

Choose your service and follow the steps above!
