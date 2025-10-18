'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    'בריאטריה',
    'הכנה לניתוח',
    'ליווי אחרי ניתוח',
    'תזונת ילדים ונוער',
    'תרופות להרזיה',
    'ליווי אישי אונליין',
    'סדנאות',
    'אחר'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('תודה! ההודעה נשלחה בהצלחה. אחזור אליכם בהקדם.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    `שלום איתי! אני מעוניין/ת לקבל מידע נוסף על השירותים שלך. שמי: ${formData.name || '[השם שלכם]'}`
  );

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>צור קשר</h1>
          <p className={styles.subtitle}>
            נשמח לענות על השאלות שלכם ולעזור לכם להתחיל את המסע לבריאות
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2>פרטי יצירת קשר</h2>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h3>טלפון</h3>
                  <p>054-643-3573</p>
                  <a href="tel:054-643-3573" className={styles.contactLink}>
                    התקשר עכשיו
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <div>
                  <h3>אימייל</h3>
                  <p>klainer1989@gmail.com</p>
                  <a href="mailto:klainer1989@gmail.com" className={styles.contactLink}>
                    שלח מייל
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>💬</div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>הדרך הטובה ביותר ליצירת קשר</p>
                  <a
                    href={`https://wa.me/972501234567?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                  >
                    פתח WhatsApp
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h3>מיקום</h3>
                  <p>רחוב הרצל 45, תל אביב</p>
                  <p>קומה 3, חניה בחינם</p>
                </div>
              </div>

              <div className={styles.hours}>
                <h3>שעות פעילות</h3>
                <div className={styles.hoursGrid}>
                  <div>ראשון-חמישי:</div>
                  <div>8:00-20:00</div>
                  <div>שישי:</div>
                  <div>8:00-14:00</div>
                  <div>שבת:</div>
                  <div>סגור</div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>שלחו לנו הודעה</h2>

              {submitMessage && (
                <div className={styles.successMessage}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">שם מלא *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="השם המלא שלכם"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">אימייל *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">טלפון</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="054-643-3573"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">השירות המעניין אותכם</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">בחרו שירות</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">הודעה *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="ספרו לנו על המטרות שלכם ואיך אנחנו יכולים לעזור..."
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.map}>
        <div className={styles.container}>
          <h2>איך מגיעים אלינו</h2>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapContent}>
              <h3>📍 רחוב הרצל 45, תל אביב</h3>
              <p>קומה 3, יש חניה בחינם בחצר</p>
              <p>בקרבת תחבורה ציבורית - אוטובוס קווים 4, 18, 104</p>
              <div className={styles.mapButtons}>
                <a
                  href="https://maps.google.com/?q=הרצל+45+תל+אביב"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapButton}
                >
                  פתח ב-Google Maps
                </a>
                <a
                  href="https://waze.com/ul?q=הרצל+45+תל+אביב"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapButton}
                >
                  פתח ב-Waze
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}