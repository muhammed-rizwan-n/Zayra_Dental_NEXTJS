# Google Reviews Automatic Fetcher

This system automatically fetches Google reviews for Zayra Dental and stores them in a local JSON file. The system runs daily at 2:00 AM and keeps a history of reviews and ratings.

## Features

- ✅ **Automatic Daily Fetching**: Runs every day at 2:00 AM
- ✅ **Local Storage**: Saves reviews to `data/google-reviews.json`
- ✅ **New Review Detection**: Only stores new reviews to avoid duplicates
- ✅ **Historical Tracking**: Maintains 365 days of rating/review history
- ✅ **Manual Triggers**: Can be triggered manually for testing
- ✅ **React Component**: Ready-to-use component to display reviews

## Setup

1. **Get Google Places API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the Places API
   - Create an API key
   - Restrict it to Places API for security

2. **Find Your Place ID**:
   - Use [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Search for your business: "Zayra Dental, Leeds"
   - Copy the Place ID

3. **Set Environment Variables**:

   ```bash
   GOOGLE_PLACES_API_KEY=your_api_key_here
   GOOGLE_PLACE_ID=your_place_id_here
   ```

4. **Initialize Data Directory**:
   ```bash
   npm run setup-reviews
   ```

## Usage

### Automatic Operation

The system automatically:

- Starts when the Next.js app starts
- Runs daily at 2:00 AM (timezone: Europe/London)
- Fetches reviews and saves to `data/google-reviews.json`
- Logs all operations to console

### Manual Operations

**Fetch Reviews Manually**:

```bash
npm run fetch-reviews
```

**View Stored Reviews**:

```bash
cat data/google-reviews.json
```

### Using in Components

```tsx
import GoogleReviews from "../components/GoogleReviews";

export default function MyPage() {
  return (
    <div>
      <h2>Customer Reviews</h2>
      <GoogleReviews maxReviews={6} />
    </div>
  );
}
```

## Data Structure

The `data/google-reviews.json` file contains:

```json
{
  "data": [
    // Array of last 30 fetches
  ],
  "latest": {
    "business_name": "Zayra Dental",
    "business_rating": 4.9,
    "total_reviews": 156,
    "reviews": [
      // Array of review objects
    ],
    "last_updated": "2024-01-15T02:00:00.000Z",
    "fetch_count": 45
  },
  "history": [
    // Daily history for last 365 days
    {
      "date": "2024-01-15",
      "rating": 4.9,
      "total_reviews": 156,
      "new_reviews_count": 2
    }
  ]
}
```

## Monitoring

Check logs for:

- ✅ Successful fetches: "Successfully fetched X new reviews"
- ⚠️ No new reviews: "No new reviews found"
- ❌ Errors: "Error in review fetch process"

## Deployment

### Vercel

The system works automatically on Vercel. The cron job will run in serverless functions.

### Other Platforms

For platforms without built-in cron support, you may need to:

1. Use an external cron service (GitHub Actions, etc.)
2. Set up a webhook to trigger the manual fetch
3. Use platform-specific scheduled functions

## Customization

**Change Schedule**:
Edit `lib/scheduler.ts` and modify the cron pattern:

```typescript
// Current: Daily at 2:00 AM
"0 2 * * *";

// Every 6 hours:
"0 */6 * * *";

// Twice daily (9 AM and 9 PM):
"0 9,21 * * *";
```

**Change Timezone**:

```typescript
{
  timezone: "America/New_York"; // or your preferred timezone
}
```

**Adjust History Retention**:

```typescript
// Keep last 30 days instead of 365
if (existingData.history.length > 30) {
  existingData.history = existingData.history.slice(-30);
}
```

## Troubleshooting

**No Reviews Fetched**:

1. Check API key is valid
2. Verify Place ID is correct
3. Ensure API quotas aren't exceeded
4. Check console logs for errors

**Scheduler Not Running**:

1. Check if `NODE_ENV=production` for auto-start
2. Manually start: Import and call `reviewScheduler.start()`
3. Check timezone settings

**Permission Errors**:

1. Ensure `data/` directory exists and is writable
2. Check file permissions on `google-reviews.json`

## Security Notes

- ✅ API key is server-side only
- ✅ No sensitive data exposed to client
- ✅ Reviews are cached locally (no API calls from frontend)
- ✅ Rate limiting handled by Google's API quotas

## Cost

Google Places API pricing (as of 2024):

- Place Details: $17 per 1,000 requests
- Daily fetch = ~$0.60/month
- Manual testing = minimal cost

Most Google Cloud accounts include free tier credits.
