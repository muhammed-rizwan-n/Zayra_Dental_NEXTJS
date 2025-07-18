import { NextResponse } from "next/server";

interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: BusinessHours;
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
  certifications: string[];
  awards: string[];
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export async function GET() {
  try {
    const businessInfo: BusinessInfo = {
      name: "Zayra Dental",
      address: "599 Harehills Lane, Leeds LS9 6NQ, UK",
      phone: "+441132488398",
      email: "info@zayradental.co.uk",
      website: "https://zayra-dental-nextjs.vercel.app",
      hours: {
        monday: "09:00 - 17:00",
        tuesday: "09:00 - 17:00",
        wednesday: "09:00 - 17:00",
        thursday: "09:00 - 17:00",
        friday: "09:00 - 13:00",
        saturday: "Closed",
        sunday: "Closed",
      },
      coordinates: {
        lat: 53.8022349,
        lng: -1.4994857,
      },
      services: [
        "General Dentistry",
        "Cosmetic Dentistry",
        "Dental Implants",
        "Teeth Whitening",
        "Composite Veneers",
        "Root Canal Treatment",
        "Emergency Dental Care",
        "Dental Aligners",
        "Facial Aesthetics",
      ],
      certifications: [
        "CQC Registered",
        "GDC Registered",
        "BDA Member",
        "Dental Protection",
      ],
      awards: [
        "Patient-Centered Dental Care Winner 2024 - Business Awards UK",
        "Rising Star Award Finalist 2024 - Business Awards UK",
        "Dentist of the Year Finalist 2024 - Business Awards UK",
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/zayradental",
        instagram: "https://www.instagram.com/zayradental",
        linkedin: "https://www.linkedin.com/company/zayradental",
      },
    };

    return NextResponse.json(
      {
        success: true,
        data: businessInfo,
      },
      {
        headers: {
          "Cache-Control":
            "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.error("Business info API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch business information",
      },
      { status: 500 },
    );
  }
}
