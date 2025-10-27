import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>איתי - תזונה ובריאטריה</h1>
          <p className={styles.heroSubtitle}>
            ליווי מקצועי ואישי לירידה במשקל, הכנה לניתוח בריאטרי ותזונה בריאה לכל המשפחה
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              קבע פגישה עכשיו
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              למד עוד עליי
            </Link>
          </div>
          <ul className={styles.featuresList} style={{ marginTop: "1.5rem" }}>
            <li>ליווי לפני/אחרי ניתוח בריאטרי (סל״ד, טבעת, שרוול, מיני/מעקף Roux-en-Y)</li>
            <li>מסלולי טיפול לילדים ונוער עם השמנה</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services} id="services">
        <div className={styles.container}>
          <h2>השירותים שלי</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>בריאטריה</h3>
              <p>ליווי מקצועי לפני ואחרי ניתוח בריאטרי</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>תזונת ילדים ונוער</h3>
              <p>תזונה מאוזנת לגיל הרך והמתבגרים</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>ליווי אישי</h3>
              <p>ליווי אונליין ופרטני להשגת יעדים</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>סדנאות</h3>
              <p>סדנאות קבוצתיות להכנה ומעקב</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>מוכן להתחיל?</h2>
          <p>בואו נתחיל את המסע שלכם לבריאות טובה יותר</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              צור קשר עכשיו
            </Link>
            <Link href="/services" className={styles.secondaryButton}>
              צפה בשירותים
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
