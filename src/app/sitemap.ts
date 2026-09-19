import { MetadataRoute } from "next";
import { posts } from "../content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.klainerhealth.co.il";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/patients",
    "/workshops",
    "/contact",
    "/blog",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}