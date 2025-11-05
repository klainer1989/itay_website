'use client';

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const photos = [
  { src: "/patients/elida.jpg", alt: "אלידה" },
  { src: "/patients/hadas.jpg", alt: "הדס" },
  { src: "/patients/rotem.jpg", alt: "רותם" },
  { src: "/patients/inbal.jpg", alt: "ענבל" },
];

export default function Patients() {
  const [active, setActive] = useState(0);

  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1 className={styles.title}>מטופלים משתפים</h1>
        <p className={styles.subtitle}>
          לחצו על תמונה להחלפה בתצוגה הראשית.
        </p>

        {/* תצוגה ראשית */}
        <div className={styles.hero}>
          <Image
            src={photos[active].src}
            alt={photos[active].alt}
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            className={styles.heroImg}
            priority
          />
        </div>

        {/* תצוגת ממוזערות */}
        <div className={styles.grid}>
          {photos.map((p, i) => (
            <button
              key={p.src}
              className={`${styles.thumb} ${i === active ? styles.active : ""}`}
              onClick={() => setActive(i)}
              aria-label={`פתח/י ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="200px"
                className={styles.thumbImg}
              />
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}