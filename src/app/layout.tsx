import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itay-Nutrition",
  description: "תזונה קלינית בריאטרית וילדים",
};

// חשוב: לאפשר זום במובייל
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
        {/* אם יש לך Nav השאר אותו כאן */}
        <main style={{ minHeight: "60vh" }}>{children}</main>
      </body>
    </html>
  );
}