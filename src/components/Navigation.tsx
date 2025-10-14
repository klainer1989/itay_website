'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'בית', key: 'home' },
    { href: '/about', label: 'אודות', key: 'about' },
    { href: '/services', label: 'שירותים', key: 'services' },
    { href: '/workshops', label: 'סדנאות', key: 'workshops' },
    { href: '/blog', label: 'בלוג', key: 'blog' },
    { href: '/contact', label: 'צור קשר', key: 'contact' }
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">איתי - תזונה ובריאטריה</Link>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="פתח תפריט"
        >
          ☰
        </button>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {menuItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={styles.menuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}