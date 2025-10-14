import Link from 'next/link';
import styles from './blog.module.css';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'הכנה נפשית לניתוח ברייטרי - כל מה שצריך לדעת',
      excerpt: 'ניתוח ברייטרי הוא לא רק שינוי פיזי אלא גם מהפכה נפשית. כיצד להתכונן נכון מבחינה רגשית?',
      date: '2024-10-10',
      category: 'בריאטריה',
      readTime: '5 דקות קריאה',
      image: '🧠'
    },
    {
      id: 2,
      title: '10 טיפים לתזונה נכונה לילדים',
      excerpt: 'איך לוודא שהילדים שלכם מקבלים את כל החומרים התזונתיים הנדרשים להתפתחות תקינה',
      date: '2024-10-05',
      category: 'תזונת ילדים',
      readTime: '7 דקות קריאה',
      image: '🍎'
    },
    {
      id: 3,
      title: 'מה לאכול בשבועות הראשונים אחרי ניתוח ברייטרי',
      excerpt: 'מדריך מפורט לתזונה בתקופת ההחלמה הראשונה אחרי הניתוח',
      date: '2024-09-28',
      category: 'בריאטריה',
      readTime: '8 דקות קריאה',
      image: '🥗'
    },
    {
      id: 4,
      title: 'איך להתמודד עם רגשות בזמן דיאטה',
      excerpt: 'הצד הרגשי של ירידה במשקל ואיך להתמודד עם אכילה רגשית',
      date: '2024-09-20',
      category: 'בריאות נפש',
      readTime: '6 דקות קריאה',
      image: '❤️'
    },
    {
      id: 5,
      title: 'תרופות להרזיה - מתי כדאי ומתי לא',
      excerpt: 'סקירה מקיפה של תרופות להרזיה הזמינות בישראל ומתי הן מתאימות',
      date: '2024-09-15',
      category: 'טיפולים',
      readTime: '10 דקות קריאה',
      image: '💊'
    },
    {
      id: 6,
      title: 'המתכונים הטובים ביותר לאחר ניתוח',
      excerpt: 'אוסף מתכונים טעימים ובריאים המותאמים למי שעבר ניתוח ברייטרי',
      date: '2024-09-10',
      category: 'מתכונים',
      readTime: '4 דקות קריאה',
      image: '👨‍🍳'
    }
  ];

  const categories = ['הכל', 'בריאטריה', 'תזונת ילדים', 'בריאות נפש', 'טיפולים', 'מתכונים'];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>בלוג ומאמרים</h1>
          <p className={styles.subtitle}>
            מידע מקצועי, טיפים שימושיים והכוונה לחיים בריאים יותר
          </p>
        </div>
      </section>

      <section className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.blogFilters}>
            <h3>סינון לפי קטגוריה:</h3>
            <div className={styles.filterButtons}>
              {categories.map((category) => (
                <button key={category} className={styles.filterButton}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleImage}>
                  <span className={styles.articleIcon}>{article.image}</span>
                  <div className={styles.articleCategory}>{article.category}</div>
                </div>

                <div className={styles.articleContent}>
                  <h2 className={styles.articleTitle}>
                    <Link href={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className={styles.articleExcerpt}>{article.excerpt}</p>

                  <div className={styles.articleMeta}>
                    <span className={styles.articleDate}>
                      {new Date(article.date).toLocaleDateString('he-IL')}
                    </span>
                    <span className={styles.articleReadTime}>{article.readTime}</span>
                  </div>

                  <Link href={`/blog/${article.id}`} className={styles.readMoreButton}>
                    קרא עוד
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2>הרשמה לניוזלטר</h2>
            <p>קבלו את המאמרים החדשים וטיפים בתזונה ישירות למייל</p>

            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="כתובת המייל שלכם"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                הרשמה
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>צריכים ייעוץ אישי?</h2>
          <p>המאמרים מועילים, אבל ייעוץ אישי יכול לעזור לכם הרבה יותר</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              קבע פגישה אישית
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