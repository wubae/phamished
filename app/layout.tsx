// app/layout.tsx
import "./globals.css";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "Phamished",
  icons: {
    icon: "/logo.png",
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