// Startup script to initialize the review scheduler
import { reviewScheduler } from "./scheduler";

export function initializeScheduler() {
  try {
    // Start the scheduler
    reviewScheduler.start();

    // Log the status
    const status = reviewScheduler.getStatus();
    console.log("📊 Scheduler Status:", status);

    // Optionally run a manual fetch on startup in development
    if (process.env.NODE_ENV === "development") {
      console.log("🔧 Development mode: You can run a manual fetch if needed");
      // Uncomment the line below to fetch reviews on every startup in development
      // reviewScheduler.runManually()
    }

    return true;
  } catch (error) {
    console.error("❌ Failed to initialize review scheduler:", error);
    return false;
  }
}

// Initialize on module load
if (typeof window === "undefined") {
  // Only run on server side
  initializeScheduler();
}
