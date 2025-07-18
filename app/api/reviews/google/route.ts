import { NextRequest, NextResponse } from "next/server";

interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

interface GooglePlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId =
      process.env.GOOGLE_PLACE_ID || "ChIJyWEHuEHDeUgRB8XJhBnwYQQ"; // Default place ID

    if (!apiKey) {
      return NextResponse.json(
        { error: "Google Places API key not configured" },
        { status: 500 },
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    const placeDetails: GooglePlaceDetails = {
      place_id: placeId,
      name: data.result.name,
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    };

    return NextResponse.json({
      success: true,
      data: placeDetails,
    });
  } catch (error) {
    console.error("Google Reviews API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch Google reviews",
      },
      { status: 500 },
    );
  }
}

// POST method to refresh reviews cache
export async function POST() {
  try {
    // This endpoint can be used to manually refresh the reviews cache
    // You can call this from a webhook or scheduled job

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId =
      process.env.GOOGLE_PLACE_ID || "ChIJyWEHuEHDeUgRB8XJhBnwYQQ";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Google Places API key not configured" },
        { status: 500 },
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;

    const response = await fetch(url, {
      cache: "no-store", // Force fresh data
    });

    const data = await response.json();

    return NextResponse.json({
      success: true,
      message: "Reviews cache refreshed",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Reviews cache refresh error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to refresh reviews cache",
      },
      { status: 500 },
    );
  }
}
