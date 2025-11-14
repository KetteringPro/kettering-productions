import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ketteringproductions.com"),
  title: "From Chaos to Clarity | Kettering Productions",
  description:
    "A limited series based on a true story of yachts, swinger parties, a SWAT call, an arrest, and the prosecutor who becomes the love interest. Sharp, funny, and made for women who have lived a few lives.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "From Chaos to Clarity | Kettering Productions",
    description:
      "True-story limited series following Roxanne Star from a two-year 'just friends' situationship to an unexpected love story with the prosecutor who walks in completely unaware of what he's about to step into.",
    url: "https://ketteringproductions.com/",
    siteName: "Kettering Productions",
    images: [
      {
        url: "https://ketteringproductions.com/social-from-chaos-to-clarity.png",
        width: 1200,
        height: 630,
        alt: "From Chaos to Clarity – Kettering Productions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "From Chaos to Clarity | Kettering Productions",
    description:
      "A sharp, funny true-story limited series for women who have lived a few lives.",
    images: ["https://ketteringproductions.com/social-from-chaos-to-clarity.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-58JWF71Z2Z"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-58JWF71Z2Z');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}