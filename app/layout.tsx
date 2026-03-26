import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Where Are They Now? | College Athletes After the Game",
    template: "%s | Where Are They Now?",
  },
  description:
    "Discover what your favorite college athletes are doing today. Tracking the journeys of former college basketball and football players beyond the court and field.",
  openGraph: {
    type: "website",
    siteName: "Where Are They Now?",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-gray-50 font-sans text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
