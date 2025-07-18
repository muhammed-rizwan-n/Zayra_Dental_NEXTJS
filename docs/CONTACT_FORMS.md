# Contact Form System

The contact and appointment forms are now fully functional with server-side validation, reCAPTCHA protection, and email sending capabilities.

## Features

- ✅ **Contact Form**: General inquiries and service questions
- ✅ **Appointment Form**: Booking appointments with date/time preferences
- ✅ **reCAPTCHA Protection**: Server-side validation to prevent spam
- ✅ **EmailJS Integration**: Sends emails directly to your inbox
- ✅ **Form Validation**: Comprehensive client and server-side validation
- ✅ **Error Handling**: User-friendly error messages

## API Endpoints

### Contact Form

- **Endpoint**: `POST /api/contact`
- **Purpose**: Handle general contact inquiries

### Appointment Form

- **Endpoint**: `POST /api/appointment`
- **Purpose**: Handle appointment booking requests

## Setup Requirements

### 1. Google reCAPTCHA

1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/)
2. Create a new site (v3 recommended)
3. Add your domain
4. Get your site key and secret key

### 2. EmailJS Configuration

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create email templates
4. Get your service ID, template IDs, and API keys

### 3. Environment Variables

Add these to your `.env.local` file:

```bash
# reCAPTCHA
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here

# EmailJS
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_APPOINTMENT_TEMPLATE_ID=your_emailjs_appointment_template_id
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EMAILJS_PRIVATE_KEY=your_emailjs_private_key
```

## Email Templates

### Contact Form Template

Create a template in EmailJS with these parameters:

- `from_name` - Contact person's name
- `from_email` - Contact person's email
- `phone` - Contact person's phone
- `service` - Service they're interested in
- `message` - Their message
- `to_email` - Your business email (info@zayradental.co.uk)

### Appointment Template

Create a separate template with these parameters:

- `from_name` - Patient's name
- `from_email` - Patient's email
- `phone` - Patient's phone
- `service` - Service they want to book
- `preferred_date` - Their preferred date
- `preferred_time` - Their preferred time
- `message` - Additional notes
- `to_email` - Your business email

## Form Data Schema

### Contact Form

```typescript
{
  name: string; // Full name (min 2 chars)
  email: string; // Valid email address
  phone: string; // Phone number (min 10 chars)
  service: string; // Selected service
  message: string; // Message (min 10 chars)
  recaptchaToken: string; // reCAPTCHA token
}
```

### Appointment Form

```typescript
{
  name: string          // Full name (min 2 chars)
  email: string         // Valid email address
  phone: string         // Phone number (min 10 chars)
  service: string       // Selected service
  preferredDate: string // Preferred appointment date
  preferredTime: string // Preferred appointment time
  message?: string      // Optional additional notes
  recaptchaToken: string // reCAPTCHA token
}
```

## Response Format

### Success Response

```json
{
  "success": true,
  "message": "Thank you for your inquiry! We will get back to you within 24 hours."
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error description",
  "errors": {
    "fieldName": ["Error message"]
  }
}
```

## Testing

### Test Contact Form

1. Fill out the contact form
2. Complete reCAPTCHA
3. Submit and check for success message
4. Verify email is received

### Test Appointment Form

1. Fill out appointment form with date/time
2. Complete reCAPTCHA
3. Submit and check for success message
4. Verify appointment email is received

## Common Issues

### Forms Not Sending Emails

1. Check all environment variables are set
2. Verify EmailJS configuration
3. Check console logs for errors
4. Test EmailJS templates directly

### reCAPTCHA Failures

1. Verify site key is correct
2. Check secret key in environment
3. Ensure domain is registered with Google
4. Check reCAPTCHA score threshold (currently 0.5)

### Validation Errors

1. Ensure all required fields are filled
2. Check email format is valid
3. Verify phone number has minimum length
4. Check message meets minimum character requirement

## Security Features

- ✅ Server-side reCAPTCHA verification
- ✅ Input validation and sanitization
- ✅ Rate limiting through reCAPTCHA
- ✅ No sensitive data exposed to client
- ✅ CORS protection
- ✅ Environment variable protection

## Monitoring

Check server logs for:

- ✅ Successful form submissions
- ❌ reCAPTCHA failures
- ❌ EmailJS errors
- ❌ Validation failures

All errors are logged to the console with descriptive messages for debugging.
