import type { Metadata } from 'next';
import './globals.css';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Itay-Nutrition',
  description: 'תזונה קלינית בריאטרית וילדים',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navigation />
        <main style={{ minHeight: '60vh' }}>{children}</main>
        {/* אפשר להחזיר Footer כאן אם תרצה */}
      </body>
    </html>
  );
}