import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: { absolute: "Dental Care Articles, Vashi | Biolume Dental Care Blog" },
  description:
    "Plain-language answers on implants, laser dentistry, gum health and more from Dr. Dishani Chordia at Biolume Dental Care, Sector 19D, Vashi, Navi Mumbai.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <section className="container-x pt-36 pb-10 md:pt-44">
        <div className="eyebrow text-teal/80">
          <span className="eyebrow-rule" />
          Blog
        </div>
        <h1 className="font-display mt-5 max-w-3xl text-balance text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] tracking-tight text-plum">
          Straight answers on dental care in Vashi
        </h1>
        <p className="mt-5 max-w-xl text-[15.5px] leading-[1.8] text-plum/70 text-pretty">
          Written by Dr. Dishani Chordia to explain treatments before you sit in the chair, including when you don&apos;t need them.
        </p>
      </section>

      <section className="container-x pb-24">
        {posts.length === 0 ? (
          <p className="text-[15px] text-plum/60">The first article is on its way.</p>
        ) : (
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}/`} className="group block">
                  <Image
                    src={post.heroImage.src}
                    alt={post.heroImage.alt}
                    width={1200}
                    height={800}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                  <time dateTime={post.isoDate} className="mt-4 block text-[12px] tracking-wide text-plum/55">
                    {post.dateDisplay}
                  </time>
                  <h2 className="font-display mt-2 text-[1.25rem] leading-snug tracking-tight text-plum group-hover:text-teal transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-plum/70 text-pretty">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Footer />
    </main>
  );
}
