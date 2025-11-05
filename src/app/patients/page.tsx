"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./page.module.css";

const patients = [
  { name: "ענבל", file: "inbal.png", quote: "יותר אנרגיה וביטחון." },
  { name: "רותם", file: "rotem.png", quote: "הישגים שנשמרים לאורך זמן." },
  { name: "הדס", file: "hadas.png", quote: "שקט, בהירות ודיוק תזונתי." },
  { name: "אלידה", file: "elida.png", quote: "ליווי אמפתי ומקצועי לאורך כל הדרך." },
];

export default function Patients() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className={styles.page} dir="rtl">
      <h1 className={styles.title}>מטופלים משתפים</h1>
      <p className={styles.subtitle}>
        מקבץ עדויות ותודות אמיתיות מתהליכי ליווי תזונתי ובריאטרי.
        לחיצה על כרטיס תפתח תצוגת תמונה.
      </p>

      <div className={styles.grid}>
        {patients.map((p, i) => (
          <article
            key={p.file}
            className={styles.card}
            onClick={() => setOpenIndex(i)}
          >
            <div className={styles.thumb}>
              <Image
                src={`/patients/${p.file}`}
                alt={p.name}
                fill
                sizes="(min-width: 1024px) 25vw, 90vw"
                className={styles.img}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.quote}>{p.quote}</p>
            </div>
          </article>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          open={openIndex !== null}
          close={() => setOpenIndex(null)}
          index={openIndex}
          slides={patients.map((p) => ({ src: `/patients/${p.file}`, alt: p.name }))}
        />
      )}
    </main>
  );
}