'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const items = [
  { href: '/', label: 'בית' },
  { href: '/about', label: 'אודות' },
  { href: '/services', label: 'שירותים' },
  { href: '/blog', label: 'מאמרים' },
  { href: '/testimonials', label: 'מטופלים משתפים' }, // עמוד תוסיפ/י בהמשך
  { href: '/contact', label: 'צור קשר' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className={styles.header} dir="rtl">
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          Itay-Nutrition
        </Link>

        <nav>
          <ul className={styles.navList}>
            {items.map((it) => {
              const active = pathname === it.href;
              return (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className={`${styles.navLink} ${active ? styles.active : ''}`}
                  >
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}