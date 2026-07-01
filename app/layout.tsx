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
  title: "Ocean Health & Travel | UK Medical Tourism Coordinator",
  description: "UK-registered medical tourism coordinator connecting international patients with JCI-accredited Istanbul clinics. Rhinoplasty, dental implants, knee replacement, LASIK and more — 30–70% lower than UK private rates.",
  keywords: "medical tourism Istanbul, Turkey surgery, rhinoplasty Istanbul, dental implants Turkey, knee replacement Turkey, LASIK Istanbul, JCI accredited hospital Istanbul",
  openGraph: {
    title: "Ocean Health & Travel | UK Medical Tourism Coordinator",
    description: "JCI-accredited hospitals in Istanbul. 30–70% lower than UK private rates. Physician-led coordination.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
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
