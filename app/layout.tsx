import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "pi-health | AI-Powered Health Tracking App",
  description: "Track vitals, medications, lab reports, and wellness with AI insights. Comprehensive health companion for Android.",
  keywords: "health tracking, vitals monitor, medication tracker, AI health insights, wellness app, pregnancy care, child health",
  openGraph: {
    title: "pi-health - Your AI Health Companion",
    description: "Track vitals, medications, and wellness with AI-powered insights",
    url: "https://pihealth.com",
    siteName: "pi-health",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
