#!/usr/bin/env tsx

// Check the status of the review system
// Usage: npx tsx scripts/check-status.ts

import { readFile, stat } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

async function main() {
  console.log("🔍 Checking Google Reviews System Status...\n");

  const dataDir = path.join(process.cwd(), "public", "data");
  const dataFile = path.join(dataDir, "google-reviews.json");

  // Check if data directory exists
  if (!existsSync(dataDir)) {
    console.log("❌ Data directory not found");
    console.log("💡 Run: npm run setup-reviews");
    return;
  }

  console.log("✅ Data directory exists");

  // Check if data file exists
  if (!existsSync(dataFile)) {
    console.log("❌ Reviews data file not found");
    console.log("💡 Run: npm run setup-reviews");
    return;
  }

  console.log("✅ Reviews data file exists");

  try {
    // Check file stats
    const stats = await stat(dataFile);
    console.log(`📁 File size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`📅 Last modified: ${stats.mtime.toISOString()}`);

    // Read and parse data
    const content = await readFile(dataFile, "utf-8");
    const data = JSON.parse(content);

    console.log("\n📊 Current Status:");
    console.log(`🏢 Business: ${data.latest?.business_name || "Not set"}`);
    console.log(`⭐ Rating: ${data.latest?.business_rating || 0}/5`);
    console.log(`👥 Total Reviews: ${data.latest?.total_reviews || 0}`);
    console.log(`📝 Cached Reviews: ${data.latest?.reviews?.length || 0}`);
    console.log(`🔄 Fetch Count: ${data.latest?.fetch_count || 0}`);

    if (data.latest?.last_updated) {
      const lastUpdate = new Date(data.latest.last_updated);
      const hoursSince = Math.round(
        (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60),
      );
      console.log(
        `⏰ Last Updated: ${lastUpdate.toLocaleString()} (${hoursSince}h ago)`,
      );
    } else {
      console.log("⏰ Last Updated: Never");
    }

    console.log(`📈 History Entries: ${data.history?.length || 0}`);
    console.log(`💾 Data Snapshots: ${data.data?.length || 0}`);

    // Environment check
    console.log("\n🔧 Environment:");
    console.log(
      `🔑 Google API Key: ${process.env.GOOGLE_PLACES_API_KEY ? "✅ Set" : "❌ Missing"}`,
    );
    console.log(
      `📍 Place ID: ${process.env.GOOGLE_PLACE_ID ? "✅ Set" : "❌ Missing"}`,
    );
    console.log(`🌍 Node ENV: ${process.env.NODE_ENV || "development"}`);

    // Recommendations
    console.log("\n💡 Recommendations:");

    if (!process.env.GOOGLE_PLACES_API_KEY) {
      console.log("⚠️  Set GOOGLE_PLACES_API_KEY in your .env file");
    }

    if (!process.env.GOOGLE_PLACE_ID) {
      console.log("⚠️  Set GOOGLE_PLACE_ID in your .env file");
    }

    if (data.latest?.fetch_count === 0) {
      console.log("⚠️  No reviews have been fetched yet");
      console.log("   Run: npm run fetch-reviews");
    }

    if (data.latest?.reviews?.length === 0 && data.latest?.fetch_count > 0) {
      console.log("⚠️  Reviews fetched but none returned - check Place ID");
    }

    const lastUpdate = data.latest?.last_updated
      ? new Date(data.latest.last_updated)
      : null;
    if (lastUpdate && Date.now() - lastUpdate.getTime() > 48 * 60 * 60 * 1000) {
      console.log("⚠️  Reviews data is more than 48 hours old");
      console.log("   Check if scheduler is running properly");
    }

    console.log("\n✅ Status check completed!");
  } catch (error) {
    console.error("❌ Error reading reviews data:", error);
    console.log("💡 Try: npm run setup-reviews");
  }
}

// Run the script
main().catch(console.error);
