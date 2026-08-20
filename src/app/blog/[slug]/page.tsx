import type { Metadata } from "next";
import styles from "../blog.module.css";
import { posts } from "../../../content/posts";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const wanted = decodeURIComponent(params.slug ?? "")
    .trim()
    .toLowerCase();

  const post = posts.find(
    (p) => (p.slug ?? "").trim().toLowerCase() === wanted
  );

  if (!post) {
    return {
      title: "מאמר לא נמצא | איתי קליינר",
      description: "המאמר המבוקש לא נמצא באתר.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} | איתי קליינר`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://klainerhealth.co.il/blog/${post.slug}`,
      siteName: "איתי קליינר - דיאטן קליני",
      locale: "he_IL",
      type: "article",
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: { slug: string } }
) {
  // import דינמי כדי להימנע מתקלות bundling ב-Vercel
  const { marked } = await import("marked");

  // נרמול ה-slug מה-URL
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
          {post.category} ·{" "}
          {new Date(post.date).toLocaleDateString("he-IL")} ·{" "}
          {post.readTime}
        </p>

        <article
          className={styles.prose}
          dangerouslySetInnerHTML={{
            __html: html as string,
          }}
        />
      </div>
    </main>
  );
}