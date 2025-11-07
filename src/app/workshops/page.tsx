import Link from "next/link";
import styles from "./workshops.module.css";

export default function Workshops() {
  const workshops = [
    {
      id: "pre-surgery",
      title: "סדנת הכנה לניתוח",
      description: "סדנה מקיפה להכנה לניתוח בריאטרי",
      duration: "4 מפגשים",
      participants: "עד 8 משתתפים",
      image: "🏥",
      topics: [
        "הכנה נפשית ורגשית לניתוח",
        "שינויי תזונה נדרשים לפני הניתוח",
        "הבנת התהליך הכירורגי",
        "ציפיות ומטרות לאחר הניתוח",
        "טיפים לשלב ההחלמה",
        "תכנון תפריט לשבועות הראשונים",
      ],
    },
    {
      id: "post-surgery",
      title: "סדנת מעקב אחרי ניתוח",
      description: "ליווי וחיזוק לאחר ניתוח בריאטרי",
      duration: "6 מפגשים",
      participants: "עד 10 משתתפים",
      image: "🔄",
      topics: [
        "התמודדות עם שינויים בגוף",
        "בניית תפריט מאוזן לטווח ארוך",
        "מניעת חוסרים תזונתיים",
        "התמודדות עם אתגרים חברתיים",
        "שילוב פעילות גופנית",
        "שמירה על המוטיבציה",
      ],
    },
    {
      id: "maintenance",
      title: "סדנת שימור תוצאות",
      description: "שמירה על התוצאות לטווח הארוך",
      duration: "3 מפגשים",
      participants: "עד 12 משתתפים",
      image: "🎯",
      topics: [
        "אסטרטגיות לשמירה על המשקל",
        "זיהוי וטיפול בחזרה להרגלים ישנים",
        "בניית מערכת תמיכה",
        "התמודדות עם לחץ חברתי",
        "תכנון ארוחות לטווח ארוך",
        "יצירת אורח חיים בר-קיימא",
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>הסדנאות שלי</h1>
          <p className={styles.subtitle}>
            למידה קבוצתית, תמיכה הדדית וכלים מעשיים להצלחה. לפרטים נוספים ניתן לפנות אליי.
          </p>
        </div>
      </section>

      <section className={styles.workshops}>
        <div className={styles.container}>
          <div className={styles.workshopsGrid}>
            {workshops.map((workshop) => (
              <div key={workshop.id} className={styles.workshopCard}>
                <div className={styles.workshopHeader}>
                  <div className={styles.workshopImage}>{workshop.image}</div>
                  <div className={styles.workshopMeta}>
                    <h3>{workshop.title}</h3>
                    <p className={styles.workshopDescription}>{workshop.description}</p>
                  </div>
                </div>

                <div className={styles.workshopDetails}>
                  <div className={styles.detailItem}>
                    <strong>משך הסדנה:</strong> {workshop.duration}
                  </div>
                  <div className={styles.detailItem}>
                    <strong>מספר משתתפים:</strong> {workshop.participants}
                  </div>
                </div>

                <div className={styles.workshopContent}>
                  <h4>נושאים שנכסה:</h4>
                  <ul className={styles.topicsList}>
                    {workshop.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.workshopFooter}>
                  <a
                    href="https://wa.me/972546433573?text=שלום%20איתי!%20אשמח%20לשמוע%20פרטים%20נוספים%20על%20הסדנאות."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                  >
                    📞 לפרטים נוספים בוואטסאפ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2>למה סדנאות קבוצתיות?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>👥</div>
              <h3>תמיכה הדדית</h3>
              <p>למידה וחיזוק מחוויות של אחרים העוברים תהליך דומה</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>💰</div>
              <h3>חסכוני</h3>
              <p>עלות נמוכה יותר מליווי אישי עם אותה רמת מקצועיות</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🎯</div>
              <h3>ממוקד</h3>
              <p>תוכן מתמחה ומותאם לשלב הספציפי שלכם</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🕐</div>
              <h3>גמיש</h3>
              <p>מספר מועדים ואפשרות להצטרף לסדנאות חוזרות</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>רוצים לשמוע עוד?</h2>
          <p>אשמח לספק פרטים נוספים על הסדנאות והתהליך.</p>
          <div className={styles.ctaButtons}>
            <a
              href="https://wa.me/972546433573?text=שלום%20איתי!%20אני%20מעוניין%20לשמוע%20עוד%20על%20הסדנאות."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              💬 פתח וואטסאפ
            </a>
            <Link href="/services" className={styles.secondaryButton}>
              חזרה לשירותים
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}