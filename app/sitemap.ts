import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/servicePages";
import { blogPosts } from "@/lib/blog";

const base = "https://www.biolumedentalcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dr-dishani-jain/`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...servicePages.map((s) => ({
      url: `${base}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}/`,
      lastModified: new Date(p.isoDate),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
