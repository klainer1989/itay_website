"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.css";

type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const MENU: MenuItem[] = [
  { label: "בית", href: "/" },
  {
    label: "אודות",
    href: "/about",
  },
  {
    label: "שירותים",
    children: [
      { label: "בריאטריה – לפני/אחרי ניתוח", href: "/services" },
      { label: "תזונת ילדים ונוער", href: "/services#kids" },
      { label: "ליווי אונליין", href: "/services#online" },
    ],
  },
  {
    label: "מאמרים",
    children: [
      { label: "כל המאמרים", href: "/blog" },
      { label: "בריאטריה", href: "/blog?cat=בריאטריה" },
      { label: "תזונת ילדים", href: "/blog?cat=תזונת ילדים" },
    ],
  },
  { label: "מטופלים משתפים", href: "/patients" },
  { label: "צור קשר", href: "/contact" },
];

export default function Navigation() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // close menus on outside click / route change
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <header className={styles.wrapper} dir="rtl" ref={navRef}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Itay-Nutrition
        </Link>

        {/* Hamburger (mobile) */}
        <button
          aria-label="פתח תפריט"
          className={styles.burger}
          onClick={() => setOpenMobile((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop menu */}
        <nav className={styles.navDesktop} aria-label="תפריט ראשי">
          {MENU.map((item, i) =>
            item.children ? (
              <div
                key={item.label}
                className={styles.dropdown}
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button
                  className={styles.link}
                  aria-haspopup="true"
                  aria-expanded={openIndex === i}
                  onClick={() =>
                    setOpenIndex((cur) => (cur === i ? null : i))
                  }
                >
                  {item.label}
                  <span className={styles.caret} />
                </button>
                <div
                  className={
                    openIndex === i ? styles.menuOpen : styles.menuClosed
                  }
                  role="menu"
                >
                  {item.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={styles.subLink}
                      role="menuitem"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href!} className={styles.link}>
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile drawer */}
      <nav
        className={openMobile ? styles.mobileOpen : styles.mobileClosed}
        aria-label="תפריט נייד"
      >
        {MENU.map((item, i) =>
          item.children ? (
            <details key={item.label} className={styles.details}>
              <summary>{item.label}</summary>
              <div className={styles.mobileSublist}>
                {item.children.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className={styles.mobileLink}
                    onClick={() => setOpenMobile(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              className={styles.mobileLink}
              onClick={() => setOpenMobile(false)}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}