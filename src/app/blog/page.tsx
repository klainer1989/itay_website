import Link from "next/link"
import styles from "./blog.module.css"

export default function BlogPage() {
  const posts = [
    {
      slug: "bariatric-preparation",
      title: "איך להתכונן נכון לניתוח בריאטרי – גם נפשית וגם פיזית",
      date: "2025-10-30",
      category: "בריאטריה",
      excerpt: "איך להתכונן נכון לתהליך הבריאטרי בצורה מאוזנת ובריאה – גם פיזית וגם רגשית."
    },
    {
      slug: "kids-nutrition-tips",
      title: "10 טיפים לתזונה נכונה לילדים",
      date: "2025-10-15",
      category: "תזונת ילדים",
      excerpt: "שגרה יומיומית נכונה בתזונת הילדים תורמת לבריאות ולהרגלים טובים לכל החיים."
    }
  ]

  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1>בלוג ומאמרים</h1>
        <p className={styles.subtitle}>
          מאמרים מקצועיים על תזונה, בריאות ובריאטריה מאת איתי קליינר.
        </p>

        <div className={styles.grid}>
          {posts.map(post => (
            <article key={post.slug} className={styles.card}>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className={styles.meta}>
                {post.category} · {new Date(post.date).toLocaleDateString("he-IL")}
              </p>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link className={styles.readMore} href={`/blog/${post.slug}`}>
                קרא עוד →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}