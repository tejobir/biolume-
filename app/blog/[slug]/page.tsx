import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts, getBlogPost, type BlogContentBlock, type BlogPost } from "@/lib/blog";
import { addressOneLine, doctor, siteUrl } from "@/lib/doctor";

interface Props {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  const url = `/blog/${post.slug}/`;
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: doctor.clinic,
      type: "article",
      publishedTime: post.isoDate,
      images: [{ url: post.heroImage.src, width: 1200, height: 800, alt: post.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage.src],
    },
  };
}

function buildJsonLd(post: BlogPost) {
  const url = `${siteUrl}/blog/${post.slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: `${siteUrl}${post.heroImage.src}`,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        mainEntityOfPage: url,
        author: {
          "@type": "Person",
          name: doctor.fullName,
          jobTitle: doctor.specialization,
          url: `${siteUrl}/dr-dishani-jain/`,
        },
        publisher: {
          "@type": "Organization",
          name: doctor.clinic,
          logo: { "@type": "ImageObject", url: `${siteUrl}/biolume-logo.png` },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog/` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

const linkClass =
  "text-teal underline underline-offset-4 decoration-teal/30 hover:text-plum hover:decoration-plum/30 transition-colors";

/** Turns `[label](url)` into links: internal paths via next/link, external in a new tab. */
function renderRichText(text: string) {
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const [, label, href] = match;
    nodes.push(
      href.startsWith("/") ? (
        <Link key={match.index} href={href} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={match.index} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
        </a>
      ),
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="font-display mt-14 mb-4 text-[1.5rem] md:text-[1.75rem] leading-snug tracking-tight text-plum">
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return <h3 className="mt-8 mb-2 text-[1.05rem] font-semibold tracking-wide text-plum">{block.text}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-5 space-y-2.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[15.5px] leading-[1.8] text-plum/75">
            <span className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
            <span>{renderRichText(item)}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-5 text-[16px] leading-[1.85] text-plum/75 text-pretty">{renderRichText(block.text)}</p>;
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(post)) }}
      />
      <Navbar />

      <article className="pt-36 md:pt-44">
        <header className="container-x max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] tracking-wide">
            <Link href="/" className="text-plum/55 hover:text-teal transition-colors">Home</Link>
            <span className="text-plum/30">/</span>
            <Link href="/blog/" className="text-plum/55 hover:text-teal transition-colors">Blog</Link>
          </nav>
          <h1 className="font-display mt-8 text-balance text-[clamp(1.9rem,4.5vw,3.1rem)] leading-[1.1] tracking-tight text-plum">
            {post.title}
          </h1>
          <p className="mt-5 text-[13px] tracking-wide text-plum/60">
            By {doctor.fullName}, {doctor.suffix} · <time dateTime={post.isoDate}>{post.dateDisplay}</time>
          </p>
        </header>

        <figure className="container-x mt-10 max-w-4xl">
          <Image
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            width={1200}
            height={800}
            priority
            sizes="(min-width: 1024px) 56rem, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="mt-2 text-[11px] text-plum/50">
            Photo: Pexels/
            <a href={post.heroImage.photographerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
              {post.heroImage.photographer}
            </a>
          </figcaption>
        </figure>

        <div className="container-x max-w-3xl mt-6">
          {post.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>

        <section className="container-x max-w-3xl mt-20" aria-labelledby="faq-heading">
          <div className="eyebrow text-teal/80 mb-6">
            <span className="eyebrow-rule" />
            Common Questions
          </div>
          <h2 id="faq-heading" className="font-display mb-8 text-[clamp(1.6rem,3.5vw,2.2rem)] leading-snug tracking-tight text-plum">
            Frequently asked questions
          </h2>
          {/* Native <details> keeps every answer in the HTML for crawlers, even while collapsed. */}
          {post.faqs.map((f) => (
            <details key={f.q} className="group border-t border-plum/10">
              <summary className="cursor-pointer list-none py-6 text-[1rem] font-semibold leading-snug text-plum hover:text-teal transition-colors">
                {f.q}
              </summary>
              <p className="pb-7 text-[15px] leading-[1.8] text-plum/70 text-pretty">{f.a}</p>
            </details>
          ))}
          <div className="border-t border-plum/10" />
        </section>
      </article>

      <section className="mt-20 md:mt-24 surface-warm-mint">
        <div className="container-x max-w-3xl py-20 md:py-24">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-snug tracking-tight text-plum text-balance">
            Talk it through with {doctor.fullName}
          </h2>
          <p className="mt-5 max-w-xl text-[15.5px] leading-[1.8] text-plum/70 text-pretty">
            {doctor.clinic}, {addressOneLine}.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={doctor.bookingHref}
              className="group inline-flex items-center gap-3 rounded-full bg-plum text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-teal transition-colors duration-300"
            >
              Book a Consultation
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/blog/" className="inline-flex items-center gap-2 text-sm tracking-wide text-plum/65 hover:text-teal transition-colors">
              <ArrowLeft size={14} strokeWidth={1.5} />
              All articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
