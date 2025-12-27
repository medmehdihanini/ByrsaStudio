import type { Metadata } from "next";
import { Rajdhani, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://byrsastudio.com'),
  title: {
    default: "Byrsa Studio - Professional Game Development Agency",
    template: "%s | Byrsa Studio"
  },
  description: "Professional game development studio specializing in Unity, Unreal Engine, VR, AR, MR experiences, 3D modeling, animation, and cross-platform game development. We create immersive gaming experiences that captivate players worldwide.",
  keywords: [
    "game development",
    "game development studio",
    "Unity game development",
    "Unreal Engine development",
    "VR development",
    "AR development",
    "MR development",
    "mixed reality development",
    "3D modeling",
    "3D animation",
    "game design",
    "mobile game development",
    "cross-platform games",
    "game development agency",
    "professional game developers",
    "interactive experiences",
    "game studio",
    "Byrsa Studio",
  ],
  authors: [{ name: "Byrsa Studio" }],
  creator: "Byrsa Studio",
  publisher: "Byrsa Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://byrsastudio.com',
    siteName: 'Byrsa Studio',
    title: 'Byrsa Studio - Professional Game Development Agency',
    description: 'Professional game development studio specializing in Unity, Unreal Engine, VR, AR, MR experiences, 3D modeling, animation, and cross-platform game development.',
    images: [
      {
        url: '/assets/mainlogo.png',
        width: 1200,
        height: 630,
        alt: 'Byrsa Studio Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Byrsa Studio - Professional Game Development Agency',
    description: 'Professional game development studio creating immersive gaming experiences worldwide.',
    images: ['/assets/mainlogo.png'],
    creator: '@byrsastudio',
  },
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
  verification: {
    google: 'your-google-verification-code',
    // Add your verification codes when available
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
        {/* Preload Calendly CSS for better performance */}
        <link
          rel="preload"
          href="https://assets.calendly.com/assets/external/widget.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body
        className={`${rajdhani.variable} ${poppins.variable} antialiased`}
      >
        {/* Calendly Script - Load after page is interactive (non-blocking) */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        
        <CursorGlow />
        <Navbar />
        <ScrollProgress />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
