import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "אודות | Itay-Nutrition",
  description: "איתי קליינר – דיאטן קליני לבריאטריה, תזונת ילדים ואורח חיים בריא",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>אודות איתי קליינר</h1>
          <p className={styles.subtitle}>
            אני איתי קליינר – דיאטן קליני (R.D), מלווה מטופלים לפני ואחרי ניתוחים בריאטריים,{" "}
            אנשים בתהליכי שינוי אורח חיים,{" "}
            ילדים ובני נוער עם עודף משקל.{" "}
            הגישה שלי משלבת ידע קליני מעמיק, הקשבה אמיתית, ויחס אישי לאורך כל הדרך.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>צור קשר</Link>
            <Link href="/services" className={styles.secondaryButton}>לשירותים שלי</Link>
          </div>
        </div>
      </section>

      {/* השכלה והתמחויות */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>השכלה והתמחויות</h2>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.badgeTitle}>B.Sc תזונה קלינית – המכללה האקדמית תל־חי</span>
              <span className={styles.badgeText}>
                ידע מדעי וקליני מעמיק על גוף האדם, תזונה ומצבים רפואיים.
              </span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeTitle}>MAN בריאות הציבור – תזונה, בריאות והתנהגות, אוניברסיטת חיפה</span>
              <span className={styles.badgeText}>
                התמקדות בשינוי התנהגותי, קידום בריאות ואורח חיים מאוזן.
              </span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeTitle}>ניסיון קליני</span>
              <span className={styles.badgeText}>
                ליווי אישי ומקצועי במרפאות בריאטריות ובקליניקה פרטית,{" "}
                עם דגש על יחס אנושי ורגישות לצרכים האישיים של כל מטופל.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* הגישה שלי */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>הגישה שלי</h2>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>הקשבה וקשר אישי</h3>
              <p>
                תהליך תזונתי מוצלח מתחיל בהקשבה אמיתית.{" "}
                אני רואה כל אדם מעבר למספרים – עם סיפור חיים, הרגלים, חששות ומטרות ייחודיות.{" "}
                יחד אנחנו בונים תהליך שמתאים לאדם ולא להפך.
              </p>
            </div>
            <div className={styles.card}>
              <h3>איזון ולא שלמות</h3>
              <p>
                המטרה אינה "להיות מושלם" אלא ליצור איזון.{" "}
                אני מאמין שאפשר לאכול טוב, ליהנות ולהרגיש שלמים עם עצמנו בלי אשמה.{" "}
                התזונה הופכת לכלי של חופש ולא של שליטה.
              </p>
            </div>
            <div className={styles.card}>
              <h3>שינוי אמיתי</h3>
              <p>
                השינוי נבנה בצעדים קטנים, מתוך הבנה, יציבות וחיזוק הביטחון העצמי.{" "}
                אני מאמין בשיח אמפתי, אמיתי ומכבד — כזה שמאפשר למטופל לקחת אחריות על התהליך ולצמוח מתוכו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* קריאה לפעולה */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>מוכן/ה לצעד הבא?</h2>
          <p>נשוחח, נגדיר מטרות, ונבנה תוכנית שמתאימה בדיוק לך.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryButton}>קבע/י פגישה</Link>
            <Link href="/services" className={styles.secondaryButton}>לשירותים</Link>
          </div>
        </div>
      </section>
    </main>
  );
}