'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './FixedAppointmentButton.module.css';

export default function FixedAppointmentButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Main fixed button */}
      <div className={`${styles.fixedButton} ${isVisible ? styles.visible : ''}`}>
        <Link href="/contact" className={styles.appointmentButton}>
          <span className={styles.buttonIcon}>📅</span>
          <span className={styles.buttonText}>קבע פגישה</span>
        </Link>
      </div>

      {/* WhatsApp floating button */}
      <div className={styles.whatsappButton}>
        <a
          href="https://wa.me/972546433573?text=שלום%20איתי!%20אני%20מעוניין/ת%20לקבוע%20פגישה"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappLink}
          aria-label="WhatsApp"
        >
          💬
        </a>
      </div>
    </>
  );
}