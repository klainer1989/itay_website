import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FixedAppointmentButton from "../components/FixedAppointmentButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "hebrew"] });

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="he" dir="rtl" className={inter.className}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FixedAppointmentButton />
      </body>
    </html>
  );
}

