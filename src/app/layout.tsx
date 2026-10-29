import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ef3050",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://esportific.com"),
  title: {
    default: "Esportific – Esports Tournament Software | Event & Standings Platform",
    template: "Esportific – %s",
  },
  description:
    "Esportific is an all-in-one esports tournament software built for gaming organizers. Manage team pools, set custom placement and kill scoring rules, import match results via Excel, and download points table graphics.",
  applicationName: "Esportific",
  authors: [{ name: "Esportific", url: "https://esportific.com" }],
  creator: "Esportific",
  publisher: "Esportific",
  category: "technology",
  keywords: [
    "esportific",
    "tournament software",
    "esports tournament software",
    "tournament management software",
    "esports points table generator",
    "bgmi tournament software",
    "free fire tournament software",
    "scrims management software",
    "esports tournament platform",
    "bulk excel match score import",
    "team pool management software",
    "esports standings graphics",
    "tournament points calculator",
    "esports tournament manager",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Esportific – Esports Tournament Software | Event & Standings Platform",
    description:
      "Create and manage esports tournaments from one simple dashboard. Manage team pools, custom scoring rules, Excel imports, and ready-to-share standings graphics.",
    url: "https://esportific.com",
    siteName: "Esportific",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Home/Hero/Esportific Hero UI Screenshot.png",
        width: 1912,
        height: 1047,
        alt: "Esportific event management and tournament software dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esportific – Esports Tournament Software | Event & Standings Platform",
    description:
      "Create and manage esports tournaments from one simple dashboard. Add teams, calculate points automatically, and download standings graphics.",
    images: [
      {
        url: "/Home/Hero/Esportific Hero UI Screenshot.png",
        alt: "Esportific event management and tournament software dashboard",
      },
    ],
  },
  icons: {
    icon: "/Brand/new-logo - Copy.png",
    shortcut: "/Brand/new-logo - Copy.png",
    apple: "/Brand/new-logo - Copy.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://esportific.com/#organization",
      name: "Esportific",
      url: "https://esportific.com",
      logo: {
        "@type": "ImageObject",
        url: "https://esportific.com/Brand/Logo.png",
        width: 1153,
        height: 267,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@rangrove.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://esportific.com/#website",
      url: "https://esportific.com",
      name: "Esportific",
      publisher: {
        "@id": "https://esportific.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://esportific.com/#software",
      name: "Esportific",
      applicationCategory: "GameApplication",
      operatingSystem: "Web, Android",
      url: "https://esportific.com",
      description:
        "All-in-one esports tournament software for gaming organizers to manage teams, calculate placement and kill points automatically, import Excel sheets, and export standings graphics.",
      screenshot:
        "https://esportific.com/Home/Hero/Esportific%20Hero%20UI%20Screenshot.png",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free credits included, no credit card needed",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "120",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Quick Event Setup",
        "Bulk Excel Team & Match Import",
        "Reusable Teams Pool & Player Roster Management",
        "Custom Placement, Kill Points & Tie-Breaker Rules",
        "Automatic Points Table & Standings Calculation",
        "Downloadable Standings & Points Table Graphics",
        "Activity & Audit Logs",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
