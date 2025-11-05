import Image from "next/image";
import styles from "./page.module.css";

export default function Patients() {
  return (
    <div className={styles.container} dir="rtl">
      <h1 className={styles.title}>מטופלים משתפים</h1>
      <p className={styles.subtitle}>
        תודה לכל המטופלים שהסכימו לשתף את החוויה האישית שלהם 🙏
      </p>

      <div className={styles.gallery}>
        <Image
          src="/patients/elida.png"
          alt="המלצה מאלידה"
          width={600}
          height={400}
          className={styles.image}
        />
        <Image
          src="/patients/hadas.png"
          alt="המלצה מהדס"
          width={600}
          height={400}
          className={styles.image}
        />
        <Image
          src="/patients/rotem.png"
          alt="המלצה מרותם"
          width={600}
          height={400}
          className={styles.image}
        />
        <Image
          src="/patients/inbal.png"
          alt="המלצה מאינבל"
          width={600}
          height={400}
          className={styles.image}
        />
      </div>
    </div>
  );
}