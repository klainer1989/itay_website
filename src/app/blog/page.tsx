// src/app/blog/page.tsx

import Link from "next/link";
import styles from "./blog.module.css";
// נתיב יחסי נכון: מהתיקייה src/app/blog אל src/content/posts.ts
import type { Post } from "../../content/posts";
import { posts } from "../../content/posts";

export default function BlogPage() {
  const list: Post[] = posts;

  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1>בלוג ומאמרים</h1>
        <p className={styles.subtitle}>
          מאמרים מקצועיים על תזונה, בריאטריה ובריאות מאת איתי קליינר.
        </p>

        <div className={styles.grid}>
          {list.map((post) => (
            <article key={post.slug} className={styles.card}>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className={styles.meta}>
                {post.category} · {new Date(post.date).toLocaleDateString("he-IL")} · {post.readTime}
              </p>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                קרא עוד →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}