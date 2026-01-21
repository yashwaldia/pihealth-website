import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteConfig = {
  name: "pi-health",
  title: "pi-health | AI-Powered Health Tracking App",
  description: "Track vitals, medications, lab reports, and wellness with AI insights. Comprehensive health companion for Android with pregnancy care, child health tracking, and personalized wellness programs.",
  url: "https://pihealth.online",
  ogImage: "https://pihealth.online/og-image.jpg",
  creator: "@pihealth",
  keywords: [
    "health tracking app",
    "vitals monitor",
    "medication tracker",
    "AI health insights",
    "wellness app",
    "pregnancy care",
    "child health",
    "lab report analysis",
    "blood pressure tracker",
    "diabetes tracker",
    "fitness tracking",
    "nutrition tracker",
    "health companion",
    "medical records",
    "symptom tracker"
  ]
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FA8A61' },
    { media: '(prefers-color-scheme: dark)', color: '#FA8A61' }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "pi-health Team",
      url: siteConfig.url,
    }
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "pi-health - AI-Powered Health Tracking App",
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.creator,
    images: [siteConfig.ogImage],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Alternates
  alternates: {
    canonical: siteConfig.url,
  },

  // App Links (for mobile app)
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },

  // Format Detection
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // Category
  category: "health",

  // Additional meta tags
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "pi-health",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  },
  "description": siteConfig.description,
  "screenshot": siteConfig.ogImage,
  "featureList": [
    "Vital Signs Tracking",
    "Medication Management",
    "Lab Report Analysis",
    "AI Health Insights",
    "Pregnancy Tracking",
    "Child Health Monitoring",
    "Nutrition Tracking",
    "Wellness Programs"
  ],
  "creator": {
    "@type": "Organization",
    "name": "pi-health",
    "url": siteConfig.url
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "pi-health",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/logo.png`,
  "sameAs": [
    "https://twitter.com/pihealth",
    "https://facebook.com/pihealth",
    "https://instagram.com/pihealth"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "narisnarender@gmail.com",
    "contactType": "Customer Support"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.name,
  "url": siteConfig.url,
  "description": siteConfig.description,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen" id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
