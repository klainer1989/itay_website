import Image from "next/image";
import styles from "./page.module.css";

const patients = [
  { name: "ענבל", file: "inbal.png", quote: "יותר אנרגיה וביטחון." },
  { name: "רותם", file: "rotem.png", quote: "הישגים שנשמרים לאורך זמן." },
  { name: "הדס", file: "hadas.png", quote: "שקט, בהירות ודיוק תזונתי." },
  { name: "אלידה", file: "elida.png", quote: "ליווי אמפתי ומקצועי לאורך כל הדרך." },
];

export default function Patients() {
  return (
    <main className={styles.page} dir="rtl">
      <h1 className={styles.title}>מטופלים משתפים</h1>
      <p className={styles.subtitle}>
        מקבץ עדויות ותודות אמיתיות מתהליכי ליווי תזונתי ובריאטרי. לחיצה על כרטיס פותחת תצוגת תמונה.
      </p>

      <div className={styles.grid}>
        {patients.map((p) => (
          <article key={p.file} className={styles.card}>
            <div className={styles.thumb}>
              <Image
                src={`/patients/${p.file}`}   // קבצים מתוך public/patients
                alt={p.name}
                fill
                sizes="(min-width: 1024px) 25vw, 90vw"
                className={styles.img}
                priority
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.quote}>{p.quote}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
