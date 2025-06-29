import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    default: "Zayra Dental - Private Dentist Leeds | Affordable Dental Care",
    template: "%s | Zayra Dental Leeds",
  },
  description:
    "Expert private dental care in Leeds. Affordable dentist offering teeth whitening, dental implants, veneers & more. Book your appointment today. GDC registered practice.",
  keywords: [
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
    title: "Zayra Dental - Private Dentist Leeds | Affordable Dental Care",
    description:
      "Expert private dental care in Leeds. Affordable dentist offering teeth whitening, dental implants, veneers & more. Book your appointment today.",
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
    title: "Zayra Dental - Private Dentist Leeds",
    description:
      "Expert private dental care in Leeds. Affordable dentist offering comprehensive dental treatments.",
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
    name: "Zayra Dental",
    description:
      "Private dental practice in Leeds offering comprehensive dental care including cosmetic dentistry, dental implants, teeth whitening and general dentistry.",
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
    },
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
        <Navbar />

        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
