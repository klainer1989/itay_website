import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Itay-Nutrition',
  description: 'תזונה קלינית בריאטרית וילדים',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <header className="siteHeader">
          <div className="container headerInner">
            <Link href="/" className="brand">Itay-Nutrition</Link>
            <nav className="siteNav">
              <Link href="/">בית</Link>
              <Link href="/about">אודות</Link>
              <Link href="/services">שירותים</Link>
              <Link href="/blog">בלוג</Link>
              <Link href="/contact" className="navCta">צור קשר</Link>
            </nav>
          </div>
        </header>

        <main className="siteMain">{children}</main>

        <footer className="siteFooter">
          <div className="container">
            © {new Date().getFullYear()} Itay-Nutrition · כל הזכויות שמורות
          </div>
        </footer>
      </body>
    </html>
  )
}