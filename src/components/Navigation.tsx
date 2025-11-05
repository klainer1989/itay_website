"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* לוגו/שם מותג */}
        <Link href="/" className={styles.brand}>Itay-Nutrition</Link>

        {/* כפתור המבורגר במובייל */}
        <button
          className={styles.burger}
          aria-label="פתח תפריט"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>

        {/* קישורי ניווט */}
        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          <ul className={styles.list}>
            <li className={styles.item}><Link className={styles.link} href="/">בית</Link></li>
            <li className={styles.item}><Link className={styles.link} href="/about">אודות</Link></li>
            <li className={styles.item}><Link className={styles.link} href="/services">שירותים</Link></li>

            {/* שים לב: מאמרים הוא לינק פשוט, לא דרופדאון */}
            <li className={styles.item}><Link className={styles.link} href="/blog">מאמרים</Link></li>

            <li className={styles.item}><Link className={styles.link} href="/patients">מטופלים משתפים</Link></li>
            <li className={styles.item}><Link className={styles.link} href="/contact">צור קשר</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}