import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOSInitializer from "../components/AOSInitializer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Award-Winning Zayra Dental - CQC Registered Private Dentist Leeds | Business Awards UK Winner",
    template: "%s | Award-Winning Zayra Dental Leeds",
  },
  description:
    "Business Awards UK Winner! CQC registered expert private dental care in Leeds. Award-winning patient-centered dentist offering teeth whitening, dental implants, veneers & more. Book your appointment today.",
  keywords: [
    "award winning dentist Leeds",
    "Business Awards UK winner",
    "CQC registered dentist Leeds",
    "patient centered dental care",
    "dentist Leeds",
    "private dentist Leeds",
    "dental clinic Leeds",
    "teeth whitening Leeds",
    "dental implants Leeds",
    "cosmetic dentist Leeds",
    "emergency dentist Leeds",
    "dental check up Leeds",
    "affordable dentist Leeds",
    "Harehills Lane dentist",
    "dental practice Leeds",
    "teeth cleaning Leeds",
    "root canal Leeds",
    "dental aligners Leeds",
    "composite veneers Leeds",
  ],
  authors: [{ name: "Dr. Reshma Parambil" }],
  creator: "Zayra Dental",
  publisher: "Zayra Dental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zayradental.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Award-Winning Zayra Dental - CQC Registered Private Dentist Leeds",
    description:
      "Business Awards UK Winner! CQC registered expert private dental care in Leeds. Award-winning patient-centered dentist offering teeth whitening, dental implants, veneers & more.",
    url: "https://zayradental.co.uk",
    siteName: "Zayra Dental",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/home/waiting_room.jpg",
        width: 1200,
        height: 630,
        alt: "Zayra Dental Modern Clinic Interior Leeds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Award-Winning Zayra Dental - CQC Registered Leeds",
    description:
      "Business Awards UK Winner! CQC registered expert private dental care in Leeds. Award-winning patient-centered dentist offering comprehensive treatments.",
    images: ["/home/waiting_room.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    name: "Zayra Dental - Award-Winning CQC Registered Practice",
    description:
      "Business Awards UK Winner! CQC registered private dental practice in Leeds offering award-winning patient-centered comprehensive dental care including cosmetic dentistry, dental implants, teeth whitening and general dentistry.",
    url: "https://zayradental.co.uk",
    logo: "https://zayradental.co.uk/logo.png",
    image: "https://zayradental.co.uk/home/waiting_room.jpg",
    telephone: "+441132488398",
    email: "info@zayradental.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "599 Harehills Lane",
      addressLocality: "Leeds",
      postalCode: "LS9 6NQ",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.8022349",
      longitude: "-1.4994857",
    },
    openingHours: ["Mo-Th 09:00-18:00", "Sa 09:00-16:00"],
    priceRange: "££",
    acceptsReservations: true,
    currenciesAccepted: "GBP",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
    medicalSpecialty: [
      "Cosmetic Dentistry",
      "Restorative Dentistry",
      "Preventive Dentistry",
      "Orthodontics",
      "Oral Surgery",
    ],
    founder: {
      "@type": "Person",
      name: "Dr. Reshma Parambil",
      jobTitle: "Principal Dentist",
      qualifications: "BDS, MDS – Prosthodontics",
      awards: [
        "Business Awards UK - Patient-Centered Dental Care Winner 2024",
        "Business Awards UK - Rising Star Award Finalist 2024",
        "Business Awards UK - Dentist of the Year Finalist 2024",
      ],
    },
    awards: [
      {
        "@type": "Award",
        name: "Patient-Centered Dental Care",
        awarder: "Business Awards UK",
        dateAwarded: "2024",
        description: "Winner for exceptional patient care and satisfaction",
      },
      {
        "@type": "Award",
        name: "Rising Star Award",
        awarder: "Business Awards UK",
        dateAwarded: "2024",
        description:
          "Finalist for innovative dental practice and outstanding growth",
      },
      {
        "@type": "Award",
        name: "Dentist of the Year 2024",
        awarder: "Business Awards UK",
        dateAwarded: "2024",
        description:
          "Finalist for outstanding clinical expertise and patient care",
      },
    ],
    accreditation: [
      {
        "@type": "Organization",
        name: "Care Quality Commission (CQC)",
        description: "Regulated healthcare provider",
      },
      {
        "@type": "Organization",
        name: "General Dental Council (GDC)",
        description: "Registered dental practice",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    sameAs: [
      "https://www.facebook.com/zayradental",
      "https://www.instagram.com/zayradental",
      "https://www.linkedin.com/company/zayradental",
    ],
  };

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://zayradental.co.uk" />
        <meta name="geo.region" content="GB-ENG" />
        <meta name="geo.placename" content="Leeds" />
        <meta name="geo.position" content="53.8022349;-1.4994857" />
        <meta name="ICBM" content="53.8022349, -1.4994857" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInitializer />
        <Navbar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
