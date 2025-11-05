"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./page.module.css";

type Item = { src: string; name: string; quote?: string };

const ITEMS: Item[] = [
  { src: "/patients/elida.jpg.png", name: "אלידה", quote: "ליווי אמפתי ומקצועי לאורך כל הדרך." },
  { src: "/patients/hadas.jpg.png", name: "הדס", quote: "שקט, בהירות ודיוק תזונתי." },
  { src: "/patients/rotem.jpg.png", name: "רותם", quote: "הישגים שנשמרים לאורך זמן." },
  { src: "/patients/inbal.jpg.png", name: "ענבל", quote: "יותר אנרגיה וביטחון." },
];

export default function Patients() {
  // איזה פריט מוצג כרגע בלייטבוקס; null = סגור
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = (idx: number) => setOpenIndex(idx);
  const close = () => setOpenIndex(null);

  const next = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % ITEMS.length);
  }, [openIndex]);

  const prev = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((openIndex - 1 + ITEMS.length) % ITEMS.length);
  }, [openIndex]);

  // קיצורי מקלדת: ESC לסגירה, חצים ימינה/שמאלה לדפדוף
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, next, prev]);

  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1 className={styles.title}>מטופלים משתפים</h1>
        <p className={styles.lead}>
          מקבץ עדויות ותודות אמיתיות מתהליכי ליווי תזונתי ובריאטרי.
          לחיצה על כרטיס תפתח צפייה נוחה עם חיצים להחלפת תמונות.
        </p>

        {/* רשת כרטיסים קומפקטית */}
        <ul className={styles.grid}>
          {ITEMS.map((it, i) => (
            <li key={i} className={styles.card} onClick={() => open(i)}>
              <div className={styles.thumbWrap}>
                <Image
                  src={it.src}
                  alt={it.name}
                  fill
                  sizes="(max-width: 768px) 40vw, 260px"
                  className={styles.thumb}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.name}>{it.name}</h3>
                {it.quote ? <p className={styles.quote}>{it.quote}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* לייטבוקס */}
      {openIndex !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={close}>
          <button className={styles.closeBtn} onClick={(e) => { e.stopPropagation(); close(); }} aria-label="סגור">×</button>

          <button className={`${styles.navBtn} ${styles.prev}`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="הקודם">‹</button>
          <button className={`${styles.navBtn} ${styles.next}`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="הבא">›</button>

          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImgWrap}>
              <Image
                src={ITEMS[openIndex].src}
                alt={ITEMS[openIndex].name}
                fill
                sizes="90vw"
                className={styles.lightboxImg}
                priority
              />
            </div>
            <div className={styles.caption}>
              <strong>{ITEMS[openIndex].name}</strong>
              {ITEMS[openIndex].quote ? <> · {ITEMS[openIndex].quote}</> : null}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}