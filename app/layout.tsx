import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "For You ❤️",
  description: "A little something special.",
};

import FloatingHearts from "@/components/FloatingHearts";
import MobileGateway from "@/components/MobileGateway";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${playfair.variable} antialiased bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 text-slate-900 overflow-x-hidden min-h-screen`}
      >
        <FloatingHearts />
        <MobileGateway />
        {children}
      </body>
    </html>
  );
}
