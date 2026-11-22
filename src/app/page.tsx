// src/app/page.tsx

import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    icon: "♡",
    title: "בריאטריה",
    description:
      "הכנה לניתוח בריאטרי וליווי תזונתי מקצועי לאחר הניתוח.",
    href: "/services",
  },
  {
    icon: "♧",
    title: "תזונת תינוקות",
    description:
      "ליווי הורים בהזנת תינוקות, הנקה, תמ״ל, התחלת מזונות משלימים וקשיי האכלה.",
    href: "/services",
  },
  {
    icon: "♧",
    title: "תזונת ילדים ונוער",
    description:
      "ליווי תזונתי לילדים ומתבגרים, בניית הרגלים בריאים בגישה משפחתית.",
    href: "/services",
  },
  {
    icon: "✚",
    title: "מחלות מטבוליות",
    description:
      "טיפול תזונתי בסוכרת, כבד שומני, כולסטרול, טריגליצרידים ולחץ דם.",
    href: "/services",
  },
  {
    icon: "◎",
    title: "טיפול בהשמנה",
    description:
      "ליווי תזונתי אישי לירידה במשקל, כולל במהלך טיפול תרופתי.",
    href: "/services",
  },
  {
    icon: "⌂",
    title: "משפחה בריאה",
    description:
      "תוכנית ליווי משפחתית לשיפור הרגלי התזונה ואורח החיים.",
    href: "/services",
  },
  {
    icon: "✧",
    title: "תזונה בגיל השלישי",
    description:
      "התאמת התזונה לצרכים הבריאותיים המשתנים עם הגיל.",
    href: "/services",
  },
  {
    icon: "☆",
    title: "סדנאות וקבוצות",
    description:
      "סדנאות וקבוצות ליווי לתמיכה, למידה ושינוי הרגלים לאורך זמן.",
    href: "/workshops",
  },
];

export default function Home() {
  return (
    <main className={styles.main} dir="rtl">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            תזונה קלינית • בריאטריה • אורח חיים בריא
          </span>

          <h1 className={styles.heroTitle}>
            איתי קליינר
            <span>דיאטן קליני</span>
          </h1>

          <h2 className={styles.heroSubtitle}>
            תזונה מקצועית. גישה אישית.
            <br />
            שינוי לאורך זמן.
          </h2>

          <p className={styles.heroDescription}>
            ליווי תזונתי מבוסס מדע, המותאם לצרכים,
            למטרות ולאורח החיים שלך.
            <br />
            בריאטריה, טיפול בהשמנה, תזונת תינוקות,
            ילדים ונוער, מחלות מטבוליות והגיל השלישי.
          </p>

          <div className={styles.heroButtons}>
            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              קביעת פגישה
            </Link>

            <Link
              href="/about"
              className={styles.secondaryButton}
            >
              קצת עליי
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>
            תחומי התמחות
          </span>

          <h2>תחומי הטיפול שלי</h2>

          <p>
            ליווי מקצועי ואישי המותאם לכל שלב בחיים
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article
              className={styles.serviceCard}
              key={service.title}
            >
              <div
                className={styles.serviceIcon}
                aria-hidden="true"
              >
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link
                href={service.href}
                className={styles.serviceLink}
              >
                לפרטים נוספים
                <span aria-hidden="true"> ←</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.onlineSection}>
        <div>
          <h2>ליווי תזונתי גם אונליין</h2>

          <p>
            טיפול מקצועי, אישי ונגיש גם מרחוק,
            בהתאם לצרכים ולשגרת החיים שלך.
          </p>
        </div>

        <Link
          href="/contact"
          className={styles.secondaryButton}
        >
          לפרטים ותיאום פגישה
        </Link>
      </section>

      <section className={styles.cta}>
        <h2>מתחילים בתהליך שמתאים לך</h2>

        <p>
          שינוי הרגלים מתחיל בהיכרות ובהתאמת הדרך
          לצרכים שלך.
        </p>

        <Link
          href="/contact"
          className={styles.primaryButton}
        >
          לקביעת פגישה
        </Link>
      </section>
    </main>
  );
}
