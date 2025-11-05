import Image from "next/image";
import styles from "./page.module.css";

type Patient = { name: string; src: string; alt: string };

const patients: Patient[] = [
  { name: "אלידה", src: "/patients/elida.png", alt: "המלצת מטופלת – אלידה" },
  { name: "הדס",  src: "/patients/hadas.png", alt: "המלצת מטופלת – הדס" },
  { name: "ענבל", src: "/patients/inbal.png", alt: "המלצת מטופלת – ענבל" },
  { name: "רותם", src: "/patients/rotem.png", alt: "המלצת מטופלת – רותם" },
];

export default function Patients() {
  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1 className={styles.title}>מטופלים משתפים</h1>
        <p className={styles.subtitle}>
          מקבץ הוקרות ותודות אמיתיות ממטופלים/ות בתהליך ליווי תזונתי ובריאטרי.
        </p>

        <div className={styles.grid}>
          {patients.map((p) => (
            <figure key={p.src} className={styles.card}>
              <Image
                src={p.src}
                alt={p.alt}
                width={760}
                height={430}
                className={styles.image}
                priority
              />
              <figcaption className={styles.caption}>{p.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}