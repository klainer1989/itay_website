import { posts } from "@/content/posts";
import styles from "../blog.module.css";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return <div>הפוסט לא נמצא</div>;

  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <p className={styles.meta}>
          {post.category} · {new Date(post.date).toLocaleDateString("he-IL")} ·{" "}
          {post.readTime}
        </p>

        {/* תוכן הפוסט */}
        <article className={styles.prose}>
          {post.content.split("\n").map((line, i) =>
            line.trim() ? <p key={i}>{line}</p> : <br key={i} />
          )}
        </article>
      </div>
    </main>
  );
}