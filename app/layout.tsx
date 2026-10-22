import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

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
  description: "UK-registered medical tourism coordinator connecting international patients with JCI-accredited Istanbul clinics. Rhinoplasty, dental implants, knee replacement, LASIK and more, with itemised quotes before you travel.",
  keywords: "medical tourism Istanbul, Turkey surgery, rhinoplasty Istanbul, dental implants Turkey, knee replacement Turkey, LASIK Istanbul, JCI accredited hospital Istanbul",
  openGraph: {
    title: "Ocean Health & Travel | UK Medical Tourism Coordinator",
    description: "JCI-accredited hospitals in Istanbul. Itemised quotes before you travel. Dedicated coordination.",
    type: "website",
    locale: "en_GB",
    siteName: "Ocean Health & Travel",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ocean Health & Travel — private treatment in Istanbul" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ocean Health & Travel | UK Medical Tourism Coordinator",
    description: "JCI-accredited hospitals in Istanbul. Itemised quotes before you travel. Dedicated coordination.",
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-92GMNGS0XF"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-92GMNGS0XF');
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
