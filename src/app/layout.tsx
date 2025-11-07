import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Itay-Nutrition",
  description: "תזונה קלינית בריאטרית וילדים",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        <main style={{ minHeight: "60vh" }}>{children}</main>
      </body>
    </html>
  );
}