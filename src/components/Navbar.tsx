"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";

const links = [
  { href: "/", label: "בית" },
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/blog", label: "מאמרים" },
  { href: "/patients", label: "מטופלים משתפים" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header} dir="rtl">
      <div className={styles.inner}>

        {/* מותג */}
        <Link href="/" className={styles.brand}>
          <span className={styles.brandName}>איתי קליינר</span>

          <span className={styles.brandTagline}>
            דיאטן קליני | השמנה ובריאטריה | ילדים ונוער | אכילה רגשית
          </span>
        </Link>

        {/* תפריט מחשב */}
        <nav className={styles.navDesktop} aria-label="ניווט ראשי">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* כפתור תפריט במובייל */}
        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>

      </div>

      {/* תפריט מובייל */}
      {open && (
        <nav className={styles.navMobile} aria-label="תפריט נייד">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}