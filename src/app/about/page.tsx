import Link from 'next/link';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>אודותיי</h1>
          <p className={styles.subtitle}>
            איתי - דיאטן קליני מוסמך ומומחית בתחום הבריאטריה
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2>הרקע המקצועי שלי</h2>
              <p>
                אני איתי, דיאטן קליני מוסמך עם התמחות בתחום הבריאטריה ותזונת ילדים.
                עם מעל 10 שנות ניסיון בתחום, אני מלווה מטופלים במסע לירידה במשקל ובניית אורח חיים בריא.
              </p>

              <h3>ההשכלה והכישורים שלי</h3>
              <ul>
                <li>תואר 1 בתזונה ממכללת תל חי</li>
                <li>תואר 2 בבריאות הציבור מאוניברסיטת חיפה</li>
                <li>התמחות בבריאטריה מבית החולים איכילוב</li>
                <li>קורס מתקדם בתזונת ילדים ונוער</li>
                <li>הסמכה בייעוץ תזונתי מקוון</li>
              </ul>

              <h3>הגישה שלי</h3>
              <p>
                אני מאמין שכל אדם יחיד במינו ומצריך גישה אישית ומותאמת. הליווי שלי מבוסס על:
              </p>
              <ul>
                <li>הבנה עמוקה של הצרכים האישיים של כל מטופל</li>
                <li>יצירת תוכנית תזונה מעשית וישימה</li>
                <li>ליווי צמוד ותמיכה רגשית לאורך כל התהליך</li>
                <li>דגש על שינוי אורח חיים לטווח הארוך</li>
              </ul>
            </div>

            <div className={styles.imageSection}>
              <div className={styles.imagePlaceholder}>
                <p>תמונה של איתי</p>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h4>500+</h4>
                  <p>מטופלים מרוצים</p>
                </div>
                <div className={styles.stat}>
                  <h4>10+</h4>
                  <p>שנות ניסיון</p>
                </div>
                <div className={styles.stat}>
                  <h4>95%</h4>
                  <p>שיעור הצלחה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <h2>המשימה שלי</h2>
          <p>
            המטרה שלי היא לעזור לכם להגיע לבריאות מיטבית ולהרגיש טוב עם עצמכם.
            אני כאן כדי ללוות אתכם בכל שלב של הדרך, החל מההכנה לניתוח ברייטרי ועד למעקב ארוך טווח.
          </p>

          <div className={styles.cta}>
            <h3>מוכנים להתחיל?</h3>
            <Link href="/contact" className={styles.ctaButton}>
              בואו נתחיל יחד
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}