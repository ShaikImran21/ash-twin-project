# Email OTP Setup Guide

## 📧 Setting Up Gmail for Sending OTPs

To send emails from `vaishnavvenkat48@gmail.com`, follow these steps:

### Step 1: Enable 2-Factor Authentication on Gmail

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with `vaishnavvenkat48@gmail.com`
3. Scroll to "2-Step Verification"
4. Click and follow the steps to enable it

### Step 2: Generate App Password

1. After enabling 2FA, go back to [Security Settings](https://myaccount.google.com/security)
2. Scroll to "2-Step Verification" section
3. At the bottom, find "App passwords"
4. Click on "App passwords"
5. Select:
   - **App**: Mail
   - **Device**: Other (Custom name) → Type "Voyager Travel"
6. Click "Generate"
7. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### Step 3: Configure the Server

1. Open `server.js`
2. Find this line:
   ```javascript
   const EMAIL_PASS = 'YOUR_APP_PASSWORD_HERE';
   ```
3. Replace with your generated app password:
   ```javascript
   const EMAIL_PASS = 'abcd efgh ijkl mnop'; // Use your actual app password
   ```

### Step 4: Install Dependencies

Open terminal in the `travel-destinations` folder and run:

```bash
npm install
```

This will install:
- `express` - Web server
- `nodemailer` - Email sending
- `cors` - Cross-origin requests

### Step 5: Start the Server

```bash
npm start
```

You should see:
```
╔════════════════════════════════════════════════════════╗
║     🚀 VOYAGER AUTHENTICATION SERVER RUNNING           ║
╠════════════════════════════════════════════════════════╣
║  Server: http://localhost:3000                         ║
║  Email: vaishnavvenkat48@gmail.com                     ║
║  Status: Ready to send OTPs                            ║
╚════════════════════════════════════════════════════════╝
```

### Step 6: Update Frontend to Use Backend

The frontend (`auth.js`) has already been configured to call the backend API endpoints:
- `/api/send-otp` - Sends OTP to email
- `/api/verify-otp` - Verifies the OTP

## 🧪 Testing

1. Start the server: `npm start`
2. Open browser: `http://localhost:3000`
3. Go to login page
4. Enter any email address
5. Check that email's inbox for the OTP
6. Enter OTP to login

## 📧 Email Template

The emails sent will look like this:

**Subject:** Your Voyager Login OTP

**Body:** Beautiful HTML email with:
- Voyager branding
- Large OTP display
- 5-minute validity warning
- Security notice

## 🔧 Troubleshooting

### "Invalid login" error
- Make sure 2FA is enabled
- Generate a new app password
- Remove any spaces from the app password

### Emails not sending
- Check if Gmail is blocking the app
- Verify the app password is correct
- Check your internet connection

### Port already in use
- Change PORT in server.js to 3001 or another number
- Or stop the other process using port 3000

## 🚀 Alternative Email Services

If you want to use other email services:

### SendGrid (Recommended for Production)
```javascript
// Install: npm install @sendgrid/mail
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

const msg = {
  to: email,
  from: 'vaishnavvenkat48@gmail.com',
  subject: 'Your Voyager Login OTP',
  html: emailContent
};

await sgMail.send(msg);
```

### AWS SES
```javascript
// Install: npm install aws-sdk
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

const params = {
  Source: 'vaishnavvenkat48@gmail.com',
  Destination: { ToAddresses: [email] },
  Message: {
    Subject: { Data: 'Your Voyager Login OTP' },
    Body: { Html: { Data: emailContent } }
  }
};

await ses.sendEmail(params).promise();
```

## 📊 Production Considerations

For production deployment:

1. **Use Environment Variables**
   ```javascript
   const EMAIL_USER = process.env.EMAIL_USER;
   const EMAIL_PASS = process.env.EMAIL_PASS;
   ```

2. **Use Redis for OTP Storage**
   ```bash
   npm install redis
   ```

3. **Add Rate Limiting**
   ```bash
   npm install express-rate-limit
   ```

4. **Add Logging**
   ```bash
   npm install winston
   ```

5. **Deploy to Cloud**
   - Heroku
   - AWS EC2
   - DigitalOcean
   - Vercel (with serverless functions)

## 🔒 Security Best Practices

- ✅ Never commit app passwords to Git
- ✅ Use environment variables
- ✅ Implement rate limiting (max 3 OTPs per hour per email)
- ✅ Log all authentication attempts
- ✅ Use HTTPS in production
- ✅ Hash OTPs before storing
- ✅ Set short OTP expiry (5 minutes)
- ✅ Limit OTP verification attempts (max 3 tries)

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Verify your Gmail app password
3. Make sure the server is running
4. Check your firewall settings

---

**Ready to send real OTPs from vaishnavvenkat48@gmail.com!** 🎉
