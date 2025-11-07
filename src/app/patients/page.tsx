"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

type Card = {
  id: string;
  title: string;
  caption: string;
};

const cards: Card[] = [
  { id: "elida", title: "אלידה", caption: "ליווי אמפתי ומקצועי לאורך כל הדרך." },
  { id: "hadas", title: "הדס", caption: "שקט, בהירות ודיוק תזונתי." },
  { id: "rotem", title: "רותם", caption: "הישגים שנשמרים לאורך זמן." },
  { id: "inbal", title: "ענבל", caption: "יותר אנרגיה וביטחון." },
];

export default function Patients() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <h1>מטופלים משתפים</h1>
        <p>
          מקבץ עדויות אמיתיות ותודות אמיתיות מתהליך ליווי תזונתי ובריאטרי.
          לחיצה על כרטיס פותחת תצוגת תמונה מלאה עם חיצים להחלפת תמונות.
        </p>
      </header>

      <div className={styles.grid}>
        {cards.map((c) => (
          <button
            key={c.id}
            className={styles.card}
            onClick={() => setOpenId(c.id)}
            aria-label={`פתח את עדות ${c.title}`}
          >
            <div className={styles.thumb}>
              <Image
                src={`/patients/${c.id}.png`}
                alt={`עדות של ${c.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={false}
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
            <div className={styles.meta}>
              <h3>{c.title}</h3>
              <p>{c.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {openId && (
        <div className={styles.lightbox} role="dialog" aria-modal="true">
          <button
            className={styles.close}
            onClick={() => setOpenId(null)}
            aria-label="סגור"
          >
            ✕
          </button>

          <button
            className={styles.navLeft}
            onClick={() => {
              const i = cards.findIndex((x) => x.id === openId);
              const prev = (i - 1 + cards.length) % cards.length;
              setOpenId(cards[prev].id);
            }}
            aria-label="הקודם"
          >
            ‹
          </button>
          <button
            className={styles.navRight}
            onClick={() => {
              const i = cards.findIndex((x) => x.id === openId);
              const next = (i + 1) % cards.length;
              setOpenId(cards[next].id);
            }}
            aria-label="הבא"
          >
            ›
          </button>

          <div className={styles.imgWrap} onClick={() => setOpenId(null)}>
            <Image
              src={`/patients/${openId}.png`}
              alt={`תצוגת תמונה מוגדלת של ${openId}`}
              fill
              sizes="100vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}