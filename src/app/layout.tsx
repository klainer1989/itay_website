import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Itay-Nutrition",
  description: "תזונה קלינית בריאטריה וילדים",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navigation />
        <main style={{ minHeight: "60vh" }}>{children}</main>
      </body>
    </html>
  );
}