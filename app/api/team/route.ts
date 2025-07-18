import { NextRequest, NextResponse } from "next/server";
import teamData from "../../about-us/teamMembers.json";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const member = searchParams.get("member");

    let responseData = teamData;

    // Filter by specific team member if specified
    if (member) {
      const memberData = teamData.find(
        (teamMember) =>
          teamMember.name.toLowerCase().replace(/\s+/g, "-") ===
            member.toLowerCase() ||
          teamMember.name.toLowerCase() === member.toLowerCase(),
      );

      if (!memberData) {
        return NextResponse.json(
          {
            success: false,
            error: "Team member not found",
          },
          { status: 404 },
        );
      }

      responseData = [memberData];
    }

    return NextResponse.json(
      {
        success: true,
        data: responseData,
        count: responseData.length,
        lastUpdated: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control":
            "public, max-age=900, s-maxage=900, stale-while-revalidate=3600", // 15 minutes cache
        },
      },
    );
  } catch (error) {
    console.error("Team API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch team data",
      },
      { status: 500 },
    );
  }
}

// POST method to update team data (admin only)
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const adminKey = process.env.ADMIN_API_KEY;

    if (!authHeader || !adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    // Validate the team data structure
    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid team data format - must be an array" },
        { status: 400 },
      );
    }

    // Validate each team member object
    for (const member of body) {
      if (!member.name || !member.title || !member.image) {
        return NextResponse.json(
          { error: "Invalid team member data - missing required fields" },
          { status: 400 },
        );
      }
    }

    // Here you would update the team data
    // For now, we'll just return a success message

    return NextResponse.json({
      success: true,
      message: "Team data updated successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Team update error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update team data",
      },
      { status: 500 },
    );
  }
}
