import { NextRequest, NextResponse } from "next/server";

interface AnalyticsData {
  totalPatients: number;
  totalAppointments: number;
  averageRating: number;
  totalReviews: number;
  popularServices: Array<{
    name: string;
    count: number;
    percentage: number;
  }>;
  monthlyStats: Array<{
    month: string;
    appointments: number;
    newPatients: number;
  }>;
  demographics: {
    ageGroups: Array<{
      range: string;
      count: number;
      percentage: number;
    }>;
    treatmentTypes: Array<{
      type: string;
      count: number;
    }>;
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const period = searchParams.get("period") || "12months"; // 12months, 6months, 3months, 1month
    const metric = searchParams.get("metric"); // Optional specific metric filter

    // In a real implementation, this would come from your database/analytics service
    const mockAnalyticsData: AnalyticsData = {
      totalPatients: 1247,
      totalAppointments: 3891,
      averageRating: 4.9,
      totalReviews: 156,
      popularServices: [
        { name: "General Check-up", count: 892, percentage: 23 },
        { name: "Teeth Whitening", count: 456, percentage: 12 },
        { name: "Dental Implants", count: 234, percentage: 6 },
        { name: "Composite Veneers", count: 189, percentage: 5 },
        { name: "Root Canal", count: 167, percentage: 4 },
      ],
      monthlyStats: [
        { month: "2024-01", appointments: 298, newPatients: 45 },
        { month: "2024-02", appointments: 312, newPatients: 52 },
        { month: "2024-03", appointments: 334, newPatients: 48 },
        { month: "2024-04", appointments: 289, newPatients: 41 },
        { month: "2024-05", appointments: 356, newPatients: 67 },
        { month: "2024-06", appointments: 378, newPatients: 59 },
        { month: "2024-07", appointments: 345, newPatients: 54 },
        { month: "2024-08", appointments: 391, newPatients: 71 },
        { month: "2024-09", appointments: 367, newPatients: 63 },
        { month: "2024-10", appointments: 402, newPatients: 78 },
        { month: "2024-11", appointments: 389, newPatients: 69 },
        { month: "2024-12", appointments: 426, newPatients: 82 },
      ],
      demographics: {
        ageGroups: [
          { range: "18-25", count: 156, percentage: 12.5 },
          { range: "26-35", count: 298, percentage: 23.9 },
          { range: "36-45", count: 367, percentage: 29.4 },
          { range: "46-55", count: 234, percentage: 18.8 },
          { range: "56-65", count: 134, percentage: 10.7 },
          { range: "65+", count: 58, percentage: 4.7 },
        ],
        treatmentTypes: [
          { type: "Preventive", count: 1456 },
          { type: "Restorative", count: 892 },
          { type: "Cosmetic", count: 678 },
          { type: "Orthodontic", count: 234 },
          { type: "Surgical", count: 189 },
          { type: "Emergency", count: 442 },
        ],
      },
    };

    // Filter data based on period
    let filteredData = { ...mockAnalyticsData };

    if (period === "6months") {
      filteredData.monthlyStats = mockAnalyticsData.monthlyStats.slice(-6);
    } else if (period === "3months") {
      filteredData.monthlyStats = mockAnalyticsData.monthlyStats.slice(-3);
    } else if (period === "1month") {
      filteredData.monthlyStats = mockAnalyticsData.monthlyStats.slice(-1);
    }

    // Filter by specific metric if requested
    if (metric) {
      const allowedMetrics = [
        "totalPatients",
        "totalAppointments",
        "averageRating",
        "totalReviews",
        "popularServices",
        "monthlyStats",
        "demographics",
      ];
      if (allowedMetrics.includes(metric)) {
        filteredData = {
          [metric]: filteredData[metric as keyof AnalyticsData],
        } as AnalyticsData;
      }
    }

    return NextResponse.json(
      {
        success: true,
        data: filteredData,
        period,
        generatedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control":
            "private, max-age=300, s-maxage=300, stale-while-revalidate=600", // 5 minutes cache for analytics
        },
      },
    );
  } catch (error) {
    console.error("Analytics API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch analytics data",
      },
      { status: 500 },
    );
  }
}

// Endpoint to log events (for future analytics collection)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the event data
    if (!body.event || !body.timestamp) {
      return NextResponse.json(
        { error: "Invalid event data - missing required fields" },
        { status: 400 },
      );
    }

    // Here you would log the event to your analytics service
    // For now, we'll just acknowledge receipt

    console.log("Analytics event logged:", {
      event: body.event,
      data: body.data,
      timestamp: body.timestamp,
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    });

    return NextResponse.json({
      success: true,
      message: "Event logged successfully",
      eventId: `evt_${Date.now()}`,
    });
  } catch (error) {
    console.error("Analytics event logging error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to log analytics event",
      },
      { status: 500 },
    );
  }
}
