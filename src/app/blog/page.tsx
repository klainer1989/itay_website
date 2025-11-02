import { posts } from "@/content/posts";
import styles from "../blog.module.css";
import { marked } from "marked";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // נרמול ה־slug מה־URL (מונע בעיות של רווחים/תוים נסתרים/אותיות)
  const wanted = decodeURIComponent(params.slug ?? "")
    .trim()
    .toLowerCase();

  const post = posts.find(
    (p) => (p.slug ?? "").trim().toLowerCase() === wanted
  );

  if (!post) {
    return (
      <main className={styles.page} dir="rtl">
        <div className={styles.container}>
          <h1>הפוסט לא נמצא</h1>
          <p className={styles.meta}>
            בדוק/י שהכתובת תקינה: /blog/kids-nutrition
          </p>
        </div>
      </main>
    );
  }

  const html = marked.parse(post.content);

  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <p className={styles.meta}>
          {post.category} · {new Date(post.date).toLocaleDateString("he-IL")} · {post.readTime}
        </p>
        <article
          className={styles.prose}
          dangerouslySetInnerHTML={{ __html: html as string }}
        />
      </div>
    </main>
  );
}