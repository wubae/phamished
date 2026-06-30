// app/layout.tsx
import "./globals.css";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  metadataBase: new URL("https://www.phamished.fit"),

  title: "Phamished",
  description:
    "Nutrition coaching for strength athletes, powerlifters, and fitness-focused individuals by Steven Pham, Registered Dietitian Nutritionist and national-level powerlifter.",

  icons: {
    icon: "/logo.png",
  },

  openGraph: {
    title: "Phamished",
    description:
      "Individual nutrition and fitness services provided by a Registered Dietitian and national-level powerlifter.",
    url: "https://www.phamished.fit",
    siteName: "Phamished",
    images: [
      {
        url: "/landing.png",
        width: 1200,
        height: 630,
        alt: "Phamished nutrition coaching website preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Phamished",
    description:
      "Individual nutrition and fitness services provided by a Registered Dietitian and national-level powerlifter.",
    images: ["/landing.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#141414] overflow-x-hidden">
        <Nav />

        <main className="flex-grow relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}