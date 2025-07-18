import { writeFile, readFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  original_language?: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated?: boolean;
}

interface ReviewData {
  business_name: string;
  business_rating: number;
  total_reviews: number;
  reviews: GoogleReview[];
  last_updated: string;
  fetch_count: number;
}

interface StoredReviews {
  data: ReviewData[];
  latest: ReviewData;
  history: Array<{
    date: string;
    rating: number;
    total_reviews: number;
    new_reviews_count: number;
  }>;
}

export class GoogleReviewsFetcher {
  private apiKey: string;
  private placeId: string;
  private dataDir: string;
  private dataFile: string;

  constructor() {
    this.apiKey = process.env.GOOGLE_PLACES_API_KEY || "";
    this.placeId = process.env.GOOGLE_PLACE_ID || "ChIJyWEHuEHDeUgRB8XJhBnwYQQ";
    this.dataDir = path.join(process.cwd(), "data");
    this.dataFile = path.join(this.dataDir, "google-reviews.json");
  }

  private async ensureDataDirectory(): Promise<void> {
    if (!existsSync(this.dataDir)) {
      await mkdir(this.dataDir, { recursive: true });
    }
  }

  private async loadExistingReviews(): Promise<StoredReviews> {
    try {
      if (existsSync(this.dataFile)) {
        const content = await readFile(this.dataFile, "utf-8");
        return JSON.parse(content);
      }
    } catch (error) {
      console.error("Error loading existing reviews:", error);
    }

    return {
      data: [],
      latest: {
        business_name: "",
        business_rating: 0,
        total_reviews: 0,
        reviews: [],
        last_updated: "",
        fetch_count: 0,
      },
      history: [],
    };
  }

  private async saveReviews(reviews: StoredReviews): Promise<void> {
    await this.ensureDataDirectory();
    const content = JSON.stringify(reviews, null, 2);
    await writeFile(this.dataFile, content, "utf-8");
  }

  private async fetchFromGoogleAPI(): Promise<ReviewData | null> {
    if (!this.apiKey) {
      console.error("Google Places API key not configured");
      return null;
    }

    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.placeId}&fields=name,rating,user_ratings_total,reviews&key=${this.apiKey}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Google Places API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.status !== "OK") {
        throw new Error(`Google Places API error: ${data.status}`);
      }

      const result = data.result;
      return {
        business_name: result.name || "Zayra Dental",
        business_rating: result.rating || 0,
        total_reviews: result.user_ratings_total || 0,
        reviews: result.reviews || [],
        last_updated: new Date().toISOString(),
        fetch_count: 1,
      };
    } catch (error) {
      console.error("Error fetching Google reviews:", error);
      return null;
    }
  }

  private findNewReviews(
    currentReviews: GoogleReview[],
    previousReviews: GoogleReview[],
  ): GoogleReview[] {
    if (previousReviews.length === 0) return currentReviews;

    const previousTimes = new Set(previousReviews.map((review) => review.time));
    return currentReviews.filter((review) => !previousTimes.has(review.time));
  }

  public async fetchAndStoreReviews(): Promise<{
    success: boolean;
    message: string;
    newReviewsCount?: number;
    totalReviews?: number;
  }> {
    try {
      console.log("🔄 Starting Google reviews fetch process...");

      const newData = await this.fetchFromGoogleAPI();
      if (!newData) {
        return {
          success: false,
          message: "Failed to fetch reviews from Google API",
        };
      }

      const existingData = await this.loadExistingReviews();
      const newReviews = this.findNewReviews(
        newData.reviews,
        existingData.latest.reviews,
      );

      // Update history
      existingData.history.push({
        date: new Date().toISOString().split("T")[0],
        rating: newData.business_rating,
        total_reviews: newData.total_reviews,
        new_reviews_count: newReviews.length,
      });

      // Keep only last 365 days of history
      if (existingData.history.length > 365) {
        existingData.history = existingData.history.slice(-365);
      }

      // Update latest data
      existingData.latest = {
        ...newData,
        fetch_count: existingData.latest.fetch_count + 1,
      };

      // Add to data array (keep last 30 fetches)
      existingData.data.push(newData);
      if (existingData.data.length > 30) {
        existingData.data = existingData.data.slice(-30);
      }

      await this.saveReviews(existingData);

      const message =
        newReviews.length > 0
          ? `✅ Successfully fetched ${newReviews.length} new reviews (${newData.total_reviews} total)`
          : `✅ No new reviews found (${newData.total_reviews} total reviews)`;

      console.log(message);

      return {
        success: true,
        message,
        newReviewsCount: newReviews.length,
        totalReviews: newData.total_reviews,
      };
    } catch (error) {
      const errorMessage = `❌ Error in review fetch process: ${error instanceof Error ? error.message : "Unknown error"}`;
      console.error(errorMessage);

      return {
        success: false,
        message: errorMessage,
      };
    }
  }

  public async getLatestReviews(): Promise<ReviewData | null> {
    try {
      const stored = await this.loadExistingReviews();
      return stored.latest.reviews.length > 0 ? stored.latest : null;
    } catch (error) {
      console.error("Error loading latest reviews:", error);
      return null;
    }
  }

  public async getReviewHistory(): Promise<StoredReviews["history"]> {
    try {
      const stored = await this.loadExistingReviews();
      return stored.history;
    } catch (error) {
      console.error("Error loading review history:", error);
      return [];
    }
  }
}

// Singleton instance
export const reviewFetcher = new GoogleReviewsFetcher();
