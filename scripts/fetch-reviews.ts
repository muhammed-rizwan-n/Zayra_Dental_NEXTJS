#!/usr/bin/env tsx

// Manual script to fetch Google reviews
// Usage: npx tsx scripts/fetch-reviews.ts

import { reviewFetcher } from "../lib/reviewFetcher";

async function main() {
  console.log("🚀 Starting manual Google reviews fetch...");
  console.log("⏰ Time:", new Date().toISOString());

  try {
    const result = await reviewFetcher.fetchAndStoreReviews();

    console.log("\n📊 Results:");
    console.log(`✅ Success: ${result.success}`);
    console.log(`📝 Message: ${result.message}`);

    if (result.newReviewsCount !== undefined) {
      console.log(`🆕 New reviews: ${result.newReviewsCount}`);
    }

    if (result.totalReviews !== undefined) {
      console.log(`📈 Total reviews: ${result.totalReviews}`);
    }

    // Show latest data
    const latest = await reviewFetcher.getLatestReviews();
    if (latest) {
      console.log("\n📋 Latest Data:");
      console.log(`🏢 Business: ${latest.business_name}`);
      console.log(`⭐ Rating: ${latest.business_rating}/5`);
      console.log(`👥 Total Reviews: ${latest.total_reviews}`);
      console.log(`🔄 Fetch Count: ${latest.fetch_count}`);
      console.log(`📅 Last Updated: ${latest.last_updated}`);
      console.log(`📝 Reviews Fetched: ${latest.reviews.length}`);
    }

    console.log("\n✅ Manual fetch completed successfully!");
  } catch (error) {
    console.error("\n❌ Manual fetch failed:");
    console.error(error);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);
