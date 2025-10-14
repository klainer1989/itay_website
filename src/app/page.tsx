import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            איתי - תזונה ובריאטריה
          </h1>
          <p className={styles.heroSubtitle}>
            ליווי מקצועי ואישי לירידה במשקל, הכנה לניתוח ברייטרי ותזונה בריאה לכל המשפחה
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              קבע פגישה עכשיו
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              למד עוד עליי
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>השירותים שלי</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>בריאטריה</h3>
              <p>ליווי מקצועי לפני ואחרי ניתוח ברייטרי</p>
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

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>מוכן להתחיל?</h2>
          <p>בואו נתחיל את המסע שלכם לבריאות טובה יותר</p>
          <Link href="/contact" className={styles.primaryButton}>
            צור קשר עכשיו
          </Link>
        </div>
      </section>
    </div>
  );
}