import cron from "node-cron";
import { reviewFetcher } from "./reviewFetcher";

export class ReviewScheduler {
  private isRunning = false;
  private task: cron.ScheduledTask | null = null;

  constructor() {
    this.initializeScheduler();
  }

  private initializeScheduler() {
    // Schedule to run daily at 2:00 AM
    // Cron format: minute hour day month dayOfWeek
    // '0 2 * * *' = At 2:00 AM every day
    this.task = cron.schedule(
      "0 2 * * *",
      async () => {
        if (this.isRunning) {
          console.log("⚠️ Review fetch already in progress, skipping...");
          return;
        }

        this.isRunning = true;
        try {
          console.log(
            "🕒 Daily review fetch triggered at:",
            new Date().toISOString(),
          );
          await reviewFetcher.fetchAndStoreReviews();
        } catch (error) {
          console.error("❌ Scheduled review fetch failed:", error);
        } finally {
          this.isRunning = false;
        }
      },
      {
        scheduled: false, // Don't start immediately
        timezone: "Europe/London", // Adjust timezone as needed
      },
    );

    console.log("📅 Review scheduler initialized (runs daily at 2:00 AM)");
  }

  public start() {
    if (this.task) {
      this.task.start();
      console.log("▶️ Review scheduler started");
    }
  }

  public stop() {
    if (this.task) {
      this.task.stop();
      console.log("⏹️ Review scheduler stopped");
    }
  }

  public async runManually(): Promise<void> {
    if (this.isRunning) {
      console.log("⚠️ Review fetch already in progress");
      return;
    }

    this.isRunning = true;
    try {
      console.log(
        "🔄 Manual review fetch triggered at:",
        new Date().toISOString(),
      );
      const result = await reviewFetcher.fetchAndStoreReviews();
      console.log("Manual fetch result:", result);
    } catch (error) {
      console.error("❌ Manual review fetch failed:", error);
    } finally {
      this.isRunning = false;
    }
  }

  public getStatus() {
    return {
      isScheduled: this.task ? true : false,
      isRunning: this.isRunning,
      nextRun: this.task ? "Daily at 2:00 AM" : "Not scheduled",
    };
  }
}

// Create singleton instance
export const reviewScheduler = new ReviewScheduler();

// Auto-start in production
if (process.env.NODE_ENV === "production") {
  reviewScheduler.start();
  console.log("🚀 Review scheduler auto-started in production mode");
}
