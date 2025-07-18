import { NextRequest, NextResponse } from "next/server";
import pricingData from "../../pricing/pricing.json";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const treatment = searchParams.get("treatment");

    let responseData = pricingData;

    // Filter by category if specified
    if (category && pricingData[category as keyof typeof pricingData]) {
      responseData = {
        [category]: pricingData[category as keyof typeof pricingData],
      };
    }

    // Filter by specific treatment if specified
    if (category && treatment) {
      const categoryData = pricingData[category as keyof typeof pricingData];
      if (
        categoryData &&
        categoryData[treatment as keyof typeof categoryData]
      ) {
        responseData = {
          [category]: {
            [treatment]: categoryData[treatment as keyof typeof categoryData],
          },
        };
      } else {
        return NextResponse.json(
          {
            success: false,
            error: "Treatment not found in specified category",
          },
          { status: 404 },
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        data: responseData,
        lastUpdated: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control":
            "public, max-age=600, s-maxage=600, stale-while-revalidate=3600", // 10 minutes cache
        },
      },
    );
  } catch (error) {
    console.error("Pricing API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch pricing data",
      },
      { status: 500 },
    );
  }
}

// POST method to update pricing (admin only)
export async function POST(request: NextRequest) {
  try {
    // In a real implementation, you'd want to:
    // 1. Verify admin authentication
    // 2. Update the pricing.json file or database
    // 3. Trigger cache revalidation

    const authHeader = request.headers.get("authorization");
    const adminKey = process.env.ADMIN_API_KEY;

    if (!authHeader || !adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    // Validate the pricing data structure
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid pricing data format" },
        { status: 400 },
      );
    }

    // Here you would update the pricing data
    // For now, we'll just return a success message

    return NextResponse.json({
      success: true,
      message: "Pricing data updated successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Pricing update error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update pricing data",
      },
      { status: 500 },
    );
  }
}
