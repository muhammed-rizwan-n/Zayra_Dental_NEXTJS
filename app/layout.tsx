import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOSInitializer from "../components/AOSInitializer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default:
      "Award-Winning Zayra Dental - Private Dentist Leeds | CQC Registered | Business Awards UK Winner",
    template: "%s | Zayra Dental Leeds",
  },
  description:
    "Zayra Dental in Leeds offers award-winning private dental care with a focus on affordability and patient comfort. CQC registered and Business Awards UK Winner. Book your appointment now for implants, whitening, veneers & more.",
  keywords: [
    "private dentist Leeds",
    "award-winning dental clinic",
    "CQC registered dentist",
    "affordable dental care Leeds",
    "teeth whitening Leeds",
    "dental implants Leeds",
    "composite veneers Leeds",
    "emergency dentist Leeds",
    "root canal Leeds",
    "cosmetic dentistry Leeds",
    "Harehills Lane dentist",
    "best dentist in Leeds",
    "dental aligners Leeds",
    "check-up dentist Leeds",
    "gentle dental care Leeds",
    "dental clinic Leeds",
    "UK dental awards winner",
  ],
  authors: [
    { name: "Dr. Reshma Parambil", url: "https://zayradental.co.uk" },
    { name: "Muhammed Rizwan", url: "https://muhammed-rizwan.vercel.app" },
  ],
  creator: "Zayra Dental",
  publisher: "Zayra Dental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zayradental.co.uk"),
  alternates: {
    canonical: "https://zayradental.co.uk/",
  },
  openGraph: {
    title: "Award-Winning Zayra Dental - CQC Registered Private Dentist Leeds",
    description:
      "CQC registered and Business Awards UK Winner, Zayra Dental provides exceptional private dental care in Leeds. Services include implants, whitening, veneers, and more.",
    url: "https://zayradental.co.uk",
    siteName: "Zayra Dental",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://zayradental.co.uk/home/waiting_room.jpg",
        width: 1200,
        height: 630,
        alt: "Modern dental clinic in Leeds - Zayra Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zayra Dental | Award-Winning Private Dentist in Leeds",
    description:
      "Visit Zayra Dental in Leeds — Business Awards UK Winner and CQC registered. Providing trusted, affordable private dental care for all.",
    images: ["https://zayradental.co.uk/home/waiting_room.jpg"],
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
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.9",
    //   reviewCount: 100,
    //   bestRating: "5",
    // },
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "££",
    acceptsReservations: "True",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    medicalSpecialty: [
      "Cosmetic",
      "Restorative",
      "Preventive",
      "Orthodontic",
      "OralSurgery",
    ],
    founder: {
      "@type": "Person",
      name: "Dr. Reshma Parambil",
      jobTitle: "Principal Dentist",
      honorificSuffix: "BDS, MDS – Prosthodontics",
      award: [
        "Patient-Centered Dental Care Winner 2024 - Business Awards UK",
        "Rising Star Award Finalist 2024 - Business Awards UK",
        "Dentist of the Year Finalist 2024 - Business Awards UK",
      ],
    },
    award: [
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
      },
      {
        "@type": "Organization",
        name: "General Dental Council (GDC)",
      },
    ],
    sameAs: [
      "https://www.facebook.com/zayradental",
      "https://www.instagram.com/zayradental",
      "https://www.linkedin.com/company/zayradental",
    ],
    author: {
      "@type": "Person",
      name: "Muhammed Rizwan",
      url: "https://muhammed-rizwan.vercel.app",
      jobTitle: "Web Developer",
    },
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
        <meta
          name="google-site-verification"
          content="OrNCapr7kK95PzWbNlwvBm0p4yh7aI5hgObcC7wmafs"
        />
        <link rel="canonical" href="https://zayradental.co.uk" />
        <meta name="geo.region" content="GB-ENG" />
        <meta name="geo.placename" content="Leeds" />
        <meta name="geo.position" content="53.8022349;-1.4994857" />
        <meta name="ICBM" content="53.8022349, -1.4994857" />

        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/services/dental_treatment.jpeg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/services/bg-emergency.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/services/dental_bonding.jpg"
          as="image"
          type="image/jpeg"
        />

        {/* Minimal critical CSS for instant rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body{font-family:system-ui,-apple-system,sans-serif;color:#473a2f;background:#fff;margin:0;padding:0}
            .hero-modern{padding-top:120px;min-height:80vh}
            .container-modern{max-width:1200px;margin:0 auto;padding:0 1rem}
          `,
          }}
        />

        {/* Performance optimization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if('requestIdleCallback' in window){
              requestIdleCallback(function(){
                var link=document.createElement('link');
                link.rel='stylesheet';
                link.href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap';
                document.head.appendChild(link);
              })
            } else {
              var link=document.createElement('link');
              link.rel='stylesheet';
              link.href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap';
              document.head.appendChild(link);
            }
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInitializer />
        <Navbar />

        <main style={{ marginTop: "80px" }}>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
