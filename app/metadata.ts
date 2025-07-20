import type { Metadata } from "next";

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
    {
      name: "Dr. Reshma Parambil",
      url: "https://www.zayradental.co.uk",
    },
    { name: "Muhammed Rizwan", url: "https://muhammed-rizwan.vercel.app" },
  ],
  creator: "Zayra Dental",
  publisher: "Zayra Dental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.zayradental.co.uk"),
  alternates: {
    canonical: "https://www.zayradental.co.uk/",
  },
  openGraph: {
    title: "Award-Winning Zayra Dental - CQC Registered Private Dentist Leeds",
    description:
      "CQC registered and Business Awards UK Winner, Zayra Dental provides exceptional private dental care in Leeds. Services include implants, whitening, veneers, and more.",
    url: "https://www.zayradental.co.uk",
    siteName: "Zayra Dental",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.zayradental.co.uk/home/waiting_room.jpg",
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
    images: ["https://www.zayradental.co.uk/home/waiting_room.jpg"],
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
    google: "OrNCapr7kK95PzWbNlwvBm0p4yh7aI5hgObcC7wmafs",
  },
};
