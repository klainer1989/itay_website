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
        <Link href="/" className={styles.logo}>Itay-Nutrition</Link>

        <nav className={styles.navDesktop} aria-label="ניווט ראשי">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.burger}
          aria-label="פתח תפריט"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className={styles.navMobile} aria-label="תפריט נייד">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}