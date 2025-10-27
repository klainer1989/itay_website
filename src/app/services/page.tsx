import Link from 'next/link';
import styles from './services.module.css';

export default function Services() {
  const services = [
    {
      id: 'bariatric',
      title: 'בריאטריה',
      description: 'ליווי מקצועי לפני ואחרי ניתוח ברייטרי',
      icon: '🏥',
      features: [
        'הכנה מקיפה לניתוח',
        'ליווי צמוד אחרי הניתוח',
        'מעקב תזונתי ארוך טווח',
        'טיפול בסיבוכים תזונתיים'
      ],
      
    },
    {
      id: 'preparation',
      title: 'הכנה לניתוח',
      description: 'תוכנית הכנה מקיפה לניתוח ברייטרי',
      icon: '📋',
      features: [
        'הערכה תזונתית מקיפה',
        'תוכנית הרזיה טרום ניתוח',
        'הכנה נפשית ורגשית',
        'הדרכה על שינויי אורח חיים'
      ],
      
    },
    {
      id: 'post-surgery',
      title: 'ליווי אחרי ניתוח',
      description: 'מעקב וליווי אחרי ניתוח ברייטרי',
      icon: '🔄',
      features: [
        'מעקב תזונתי שוטף',
        'התאמת תפריט לשלבי ההחלמה',
        'מניעת חוסרים תזונתיים',
        'ליווי בחזרה לפעילות'
      ],
      
    },
    {
      id: 'children',
      title: 'תזונת ילדים ונוער',
      description: 'תזונה מאוזנת וטיפול בהשמנה בגיל צעיר',
      icon: '👶',
      features: [
        'הערכה תזונתית לילדים',
        'תפריטים מותאמים לגיל',
        'הדרכת הורים',
        'טיפול בהפרעות אכילה'
      ],
      
    },
    {
      id: 'weight-loss-meds',
      title: 'תרופות להרזיה',
      description: 'ליווי ומעקב בטיפול תרופתי להרזיה',
      icon: '💊',
      features: [
        'הערכה והתאמה לטיפול תרופתי',
        'מעקב תופעות לוואי',
        'התאמת תזונה לטיפול',
        'ליווי רפואי מתמחה'
      ],
      
    },
    {
      id: 'online-coaching',
      title: 'ליווי אישי/משפחתי אונליין',
      description: 'ליווי מרחוק גמיש ונוח',
      icon: '💻',
      features: [
        'פגישות וידאו אישיות',
        'תכנון תפריטים מותאמים',
        'מעקב יומי דרך אפליקציה',
        'זמינות לשאלות בווטסאפ'
      ],
      
    }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>השירותים שלי</h1>
          <p className={styles.subtitle}>
            ליווי מקצועי ואישי לכל שלב במסע הבריאות שלכם
          </p>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>

                <ul className={styles.featuresList}>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className={styles.servicePrice}>{service.price}</div>

                <Link href="/contact" className={styles.serviceButton}>
                  קבע פגישה
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2>איך זה עובד?</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>יצירת קשר</h3>
              <p>פגישת היכרות ראשונית ללא התחייבות</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>הערכה</h3>
              <p>הערכה מקיפה של המצב הבריאותי והתזונתי</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>תכנון</h3>
              <p>בניית תוכנית אישית מותאמת ליעדים שלכם</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>ליווי</h3>
              <p>ליווי צמוד והתאמות לאורך כל התהליך</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>מוכנים לקבל את הליווי הטוב ביותר?</h2>
          <p>הזמינו פגישת היכרות ללא התחייבות ונתחיל יחד את המסע</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              קבע פגישה עכשיו
            </Link>
            <Link href="/workshops" className={styles.secondaryButton}>
              צפה בסדנאות
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}