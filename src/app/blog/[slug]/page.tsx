import styles from "../blog.module.css";
// נתיב יחסי במקום "@/content/posts"
import { posts } from "../../../content/posts";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // import דינמי כדי להימנע מתקלות bundling ב־Vercel
  const { marked } = await import("marked");

  // נרמול ה-slug מה-URL
  const wanted = decodeURIComponent(params.slug ?? "").trim().toLowerCase();

  const post = posts.find((p) => (p.slug ?? "").trim().toLowerCase() === wanted);

  if (!post) {
    return (
      <main className={styles.page} dir="rtl">
        <div className={styles.container}>
          <h1>הפוסט לא נמצא</h1>
          <p className={styles.meta}>בדוק/י שהכתובת תקינה: /blog/kids-nutrition</p>
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