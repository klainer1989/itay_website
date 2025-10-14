import { ReactNode } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FixedAppointmentButton from "../components/FixedAppointmentButton";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FixedAppointmentButton />
      </body>
    </html>
  );
}

