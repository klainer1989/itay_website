// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

// טוענים רכיבי Client רק בדפדפן (ללא SSR) כדי שלא יחסמו SSG/404
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const AccessibilityMenu = dynamic(() => import("@/components/AccessibilityMenu"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://klainerhealth.co.il"),

  title: "איתי קליינר | דיאטן קליני ותזונאי בריאטרי",

  description:
    "איתי קליינר, דיאטן קליני. ייעוץ וליווי תזונתי לירידה במשקל, לפני ואחרי ניתוחים בריאטריים, טיפול בהשמנה ותזונת ילדים.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "איתי קליינר | דיאטן קליני ותזונאי בריאטרי",
    description:
      "ייעוץ וליווי תזונתי לירידה במשקל, ניתוחים בריאטריים, טיפול בהשמנה ותזונת ילדים.",
    url: "https://klainerhealth.co.il",
    siteName: "איתי קליינר - דיאטן קליני",
    locale: "he_IL",
    type: "website",
  },
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
        {/* נטען בדפדפן בלבד */}
        <Navbar />
        <main style={{ minHeight: "60vh" }}>{children}</main>
        {/* תפריט נגישות – גם בדפדפן בלבד */}
        <AccessibilityMenu />
      </body>
    </html>
  );
}