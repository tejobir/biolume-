/*
 * Blog posts: typed objects, one per post. /blog/, /blog/[slug]/, the
 * sitemap and each post's JSON-LD (Article + FAQPage + BreadcrumbList) are
 * all generated from this array. Never create a page file per post.
 *
 * Body copy is a block array rather than an HTML or markdown string, so
 * headings render as real <h2>/<h3> tags and nothing goes through
 * dangerouslySetInnerHTML. Inside "p" and "ul" text, `[label](/path/)`
 * becomes a link: internal paths use next/link (keep the trailing slash),
 * external URLs open in a new tab.
 */

export type BlogContentBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogHeroImage {
  /** Local path, e.g. /images/blog/[slug]-hero.jpg (compressed Pexels download, under 150 KB). */
  src: string;
  alt: string;
  /** Pexels attribution is required on every hero image. */
  photographer: string;
  photographerUrl: string;
}

export interface BlogPost {
  slug: string;
  /** The H1. Contains the primary keyword and location. */
  title: string;
  /** Card excerpt on /blog/. */
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  /** YYYY-MM-DD, verified by web search at write time, never the system clock. */
  isoDate: string;
  /** "Month DD, YYYY" */
  dateDisplay: string;
  heroImage: BlogHeroImage;
  content: BlogContentBlock[];
  /** Minimum 5. Also emitted as FAQPage JSON-LD. */
  faqs: BlogFaq[];
}

export const blogPosts: BlogPost[] = [];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
