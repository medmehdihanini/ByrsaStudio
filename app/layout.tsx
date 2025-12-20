import type { Metadata } from "next";
import { Rajdhani, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByrsaStudio",
  description: "Game Development Agency",
  icons: {
    icon: '/assets/mainlogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${poppins.variable} antialiased`}
      >
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
