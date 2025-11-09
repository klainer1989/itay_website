// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AccessibilityMenu from "@/components/AccessibilityMenu";

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
        {/* קישור דילוג לתוכן ראשי – נגישות */}
        <a href="#main-content" style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden"
        }}
        onFocus={(e) => {
          const el = e.currentTarget;
          el.style.left = "8px";
          el.style.top = "8px";
          el.style.width = "auto";
          el.style.height = "auto";
          el.style.padding = "8px 12px";
          el.style.background = "#000";
          el.style.color = "#fff";
          el.style.zIndex = "10000";
          el.style.borderRadius = "6px";
        }}
        onBlur={(e) => {
          const el = e.currentTarget;
          el.style.left = "-9999px";
          el.style.top = "auto";
          el.style.width = "1px";
          el.style.height = "1px";
          el.style.padding = "0";
          el.style.background = "transparent";
          el.style.color = "inherit";
          el.style.zIndex = "auto";
          el.style.borderRadius = "0";
        }}
        >
          דלג לתוכן הראשי
        </a>

        <Navbar />

        <main id="main-content" style={{ minHeight: "60vh" }}>
          {children}
        </main>

        {/* תפריט נגישות גלובלי */}
        <AccessibilityMenu />
      </body>
    </html>
  );
}