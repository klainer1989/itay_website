import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'דף הבית' },
    { href: '/about', label: 'אודות' },
    { href: '/services', label: 'שירותים' },
    { href: '/workshops', label: 'סדנאות' },
    { href: '/blog', label: 'בלוג' },
    { href: '/contact', label: 'צור קשר' }
  ];

  const services = [
    'בריאטריה',
    'הכנה לניתוח',
    'ליווי אחרי ניתוח',
    'תזונת ילדים ונוער',
    'תרופות להרזיה',
    'ליווי אישי אונליין'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>איתי - תזונה ובריאטריה</h3>
            <p className={styles.footerDescription}>
              ליווי מקצועי ואישי לירידה במשקל, בריאטריה ותזונה בריאה לכל המשפחה.
              יותר מ-10 שנות ניסיון בתחום.
            </p>

            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com/itay.klainer"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="פייסבוק"
              >
                📘
              </a>
              <a
                href="https://instagram.com/itay_klainer_rd"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="אינסטגרם"
              >
                📷
              </a>
              <a
                href="https://wa.me/97254-643-3573"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="וואטסאפ"
              >
                💬
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>קישורים מהירים</h4>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>השירותים שלנו</h4>
            <ul className={styles.footerLinks}>
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>צור קשר</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:054-643-3573">054-643-3573</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <a href="mailto:klainer1989@gmail.com">klainer1989@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>רחוב הרצל 45, תל אביב</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🕐</span>
                <span>ראשון-חמישי: 8:00-20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>&copy; {currentYear} איתי - תזונה ובריאטריה. כל הזכויות שמורות.</p>
            <div className={styles.footerBottomLinks}>
              <Link href="/privacy">מדיניות פרטיות</Link>
              <Link href="/terms">תנאי שימוש</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}