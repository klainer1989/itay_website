import Link from 'next/link';
import styles from './workshops.module.css';

export default function Workshops() {
  const workshops = [
    {
      id: 'pre-surgery',
      title: 'סדנת הכנה לניתוח',
      description: 'סדנה מקיפה להכנה לניתוח ברייטרי',
      duration: '4 מפגשים',
      participants: 'עד 8 משתתפים',
      price: '800 ש"ח',
      image: '🏥',
      topics: [
        'הכנה נפשית ורגשית לניתוח',
        'שינויי תזונה נדרשים לפני הניתוח',
        'הבנת התהליך הכירurgי',
        'ציפיות ומטרות לאחר הניתוח',
        'טיפים לשלב ההחלמה',
        'תכנון תפריט לשבועות הראשונים'
      ],
      nextDate: '15.11.2024',
      schedule: 'ימי ראשון, 18:00-20:00'
    },
    {
      id: 'post-surgery',
      title: 'סדנת מעקב אחרי ניתוח',
      description: 'ליווי וחיזוק לאחר ניתוח ברייטרי',
      duration: '6 מפגשים',
      participants: 'עד 10 משתתפים',
      price: '1200 ש"ח',
      image: '🔄',
      topics: [
        'התמודדות עם שינויים בגוף',
        'בניית תפריט מאוזן לטווח ארוך',
        'מניעת חוסרים תזונתיים',
        'התמודדות עם אתגרים חברתיים',
        'שילוב פעילות גופנית',
        'שמירה על המוטיבציה'
      ],
      nextDate: '22.11.2024',
      schedule: 'ימי חמישי, 19:00-21:00'
    },
    {
      id: 'maintenance',
      title: 'סדנת שימור תוצאות',
      description: 'שמירה על התוצאות לטווח הארוך',
      duration: '3 מפגשים',
      participants: 'עד 12 משתתפים',
      price: '600 ש"ח',
      image: '🎯',
      topics: [
        'אסטרטגיות לשמירה על המשקל',
        'זיהוי וטיפול בחזרה להרגלים ישנים',
        'בניית מערכת תמיכה',
        'התמודדות עם לחץ חברתי',
        'תכנון ארוחות לטווח ארוך',
        'יצירת אורח חיים בר-קיימא'
      ],
      nextDate: '5.12.2024',
      schedule: 'ימי שלישי, 17:30-19:30'
    }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>הסדנאות שלי</h1>
          <p className={styles.subtitle}>
            למידה קבוצתית, תמיכה הדדית וכלים מעשיים להצלחה
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
                  <div className={styles.detailItem}>
                    <strong>מועד הסדנה הבאה:</strong> {workshop.nextDate}
                  </div>
                  <div className={styles.detailItem}>
                    <strong>זמן:</strong> {workshop.schedule}
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
                  <div className={styles.price}>{workshop.price}</div>
                  <Link href="/contact" className={styles.registerButton}>
                    הרשמה לסדנה
                  </Link>
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

      <section className={styles.faq}>
        <div className={styles.container}>
          <h2>שאלות נפוצות על הסדנאות</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>האם צריך לבוא לכל המפגשים?</h3>
              <p>מומלץ מאוד להגיע לכל המפגשים כדי לקבל את מלוא התוכן. עם זאת, ניתן להחליף מפגש שהוחמץ במחזור הבא.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>האם הסדנאות מתאימות גם למי שטרם עבר ניתוח?</h3>
              <p>בהחלט! סדנת ההכנה מיועדת בדיוק למי שמתכונן לניתוח, וגם הסדנאות האחרות יכולות לעזור בהחלטה.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>מה קורה אם אני מחמיץ מפגש?</h3>
              <p>אני שולחת סיכום לכל המשתתפים, ותמיד ניתן לפנות אלי לשאלות או להבהרות נוספות.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>האם יש הנחות לכמה סדנאות?</h3>
              <p>כן! יש הנחה של 15% למי שנרשם לשתי סדנאות, ו-25% הנחה לשלוש סדנאות.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>מוכנים להצטרף?</h2>
          <p>בחרו את הסדנה המתאימה לכם והרשמו עוד היום</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              הרשמה לסדנה
            </Link>
            <Link href="/services" className={styles.secondaryButton}>
              חזרה לשירותים
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}