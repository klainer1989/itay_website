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
  const [errorMessage, setErrorMessage] = useState('');

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

  // ✅ Send real email via /api/contact
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `${formData.service ? `שירות: ${formData.service}\n` : ''}${formData.message}`
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setSubmitMessage('תודה! ההודעה נשלחה בהצלחה. אחזור אליכם בהקדם.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'שגיאה בשליחה');
      }
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setErrorMessage('שגיאה בשליחה. נסו שוב מאוחר יותר.');
    } finally {
      setIsSubmitting(false);
    }
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
                  <p>itay.health@gmail.com</p>
                  <a href="mailto:itay.health@gmail.com" className={styles.contactLink}>
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
                    href={`https://wa.me/972546433573?text=${whatsappMessage}`}
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
                  <p>אביעזר ילין 5, ראשון לציון</p>
                </div>
              </div>

              <div className={styles.hours}>
                <h3>שעות פעילות</h3>
                <div className={styles.hoursGrid}>
                  <div>ראשון–חמישי:</div>
                  <div>8:00–20:00</div>
                  <div>שישי:</div>
                  <div>8:00–14:00</div>
                  <div>שבת:</div>
                  <div>סגור</div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>שלחו לנו הודעה</h2>

              {submitMessage && (
                <div className={styles.successMessage}>{submitMessage}</div>
              )}
              {errorMessage && (
                <div className={styles.errorMessage}>{errorMessage}</div>
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
                  <label htmlFor="service">השירות המעניין אתכם</label>
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
          <h2>איך מגיעים אליי</h2>
          <div className={styles.mapCard}>
            <div className={styles.mapFrame}>
              <iframe
                title="מפת הקליניקה"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=אביעזר+ילין+5,+ראשון+לציון&output=embed"
              ></iframe>
            </div>

            <div className={styles.mapContent}>
              <h3>📍 אביעזר ילין 5, ראשון לציון</h3>
              <p>נגיש בתחבורה ציבורית – קווים 4, 18, 104</p>

              <div className={styles.mapButtons}>
                <a
                  className={styles.primaryButton}
                  href="https://www.google.com/maps/dir/?api=1&destination=אביעזר+ילין+5,+ראשון+לציון"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ניווט ב־Google Maps
                </a>
                <a
                  className={styles.secondaryButton}
                  href="https://waze.com/ul?ll=31.967,34.799&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ניווט ב־Waze
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}