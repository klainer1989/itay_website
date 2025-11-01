import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page} dir="rtl">
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>Itay-Nutrition</Link>
          <nav className={styles.navLinks}>
            <Link href="/">בית</Link>
            <Link href="/about">אודות</Link>
            <Link href="/services">שירותים</Link>
            <Link href="/contact">צור קשר</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>איתי – תזונה ובריאטריה</h1>
          <p className={styles.heroSubtitle}>
            ליווי מקצועי ואישי לירידה במשקל, הכנה לניתוח בריאטרי ותזונה בריאה לכל המשפחה.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>קבע פגישה עכשיו</Link>
            <Link href="/about" className={styles.secondaryButton}>למד עוד עליי</Link>
          </div>
        </div>
      </section>

      {/* Services (דוגמה קצרה) */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2>השירותים שלי</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>בריאטריה</h3>
              <p className={styles.serviceDescription}>ליווי מקצועי לפני ואחרי ניתוח בריאטרי</p>
              <Link href="/services" className={styles.serviceButton}>לפרטים</Link>
            </div>
            <div className={styles.serviceCard}>
              <h3>תזונת ילדים ונוער</h3>
              <p className={styles.serviceDescription}>בניית הרגלים ותקשורת מיטיבה בבית</p>
              <Link href="/services" className={styles.serviceButton}>לפרטים</Link>
            </div>
            <div className={styles.serviceCard}>
              <h3>ליווי אישי אונליין</h3>
              <p className={styles.serviceDescription}>מעקב נוח, רגיש ומדויק – מרחוק</p>
              <Link href="/services" className={styles.serviceButton}>לפרטים</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>מוכן/ה להתחיל?</h2>
          <p>נבנה תהליך מותאם אישית, רגוע ומדויק – יחד.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryButton}>צור קשר</Link>
            <Link href="/services" className={styles.secondaryButton}>לשירותים</Link>
          </div>
        </div>
      </section>

      {/* כפתור וואטסאפ מרחף */}
      <a
        href="https://wa.me/972546433573?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%99%D7%AA%D7%99!%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label="צ׳אט בוואטסאפ"
      >
        💬
      </a>
    </div>
  );
}