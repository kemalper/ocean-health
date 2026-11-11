import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import BackToTop from "@/app/components/BackToTop";
import CookieConsent from "./components/CookieConsent";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oceanhealthtravel.com"),
  alternates: { canonical: "/" },
  title: "Ocean Health & Travel | UK Medical Tourism Coordinator",
  description: "UK-registered medical tourism coordinator connecting international patients with licensed partner providers in Istanbul. Rhinoplasty, dental implants, knee replacement, LASIK and more, with package quotes that state what is included.",
  keywords: "medical tourism Istanbul, Turkey surgery, rhinoplasty Istanbul, dental implants Turkey, knee replacement Turkey, LASIK Istanbul, licensed partner hospital Istanbul",
  openGraph: {
    title: "Ocean Health & Travel | UK Medical Tourism Coordinator",
    description: "Licensed partner hospitals in Istanbul. Package quotes that state what is included. Dedicated coordination.",
    type: "website",
    locale: "en_GB",
    siteName: "Ocean Health & Travel",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ocean Health & Travel — private treatment in Istanbul" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ocean Health & Travel | UK Medical Tourism Coordinator",
    description: "Licensed partner hospitals in Istanbul. Package quotes that state what is included. Dedicated coordination.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>{children}<FloatingWhatsApp /><BackToTop /><CookieConsent /></body>
    </html>
  );
}
