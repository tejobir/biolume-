import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicePageContent } from "@/components/ServicePageContent";
import { servicePages, getServicePage } from "@/lib/servicePages";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getServicePage(params.slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/services/${page.slug}`,
      siteName: "Biolume Dental Care",
      images: [{ url: page.heroImage, alt: page.heroImageAlt }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.heroImage],
    },
  };
}

function buildJsonLd(page: ReturnType<typeof getServicePage>) {
  if (!page) return null;
  const base = "https://biolumedental.in";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        name: page.title,
        description: page.metaDescription,
        procedureType: "https://schema.org/MedicalProcedure",
        performer: {
          "@type": "Dentist",
          name: "Biolume Dental Care",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 19B",
            addressLocality: "Vashi",
            addressRegion: "Navi Mumbai",
            addressCountry: "IN",
          },
          url: base,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${base}/services` },
          { "@type": "ListItem", position: 3, name: page.title, item: `${base}/services/${page.slug}` },
        ],
      },
    ],
  };
}

export default function ServicePage({ params }: Props) {
  const page = getServicePage(params.slug);
  if (!page) notFound();

  const jsonLd = buildJsonLd(page);

  return (
    <main className="overflow-x-hidden pb-0">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Navbar />
      <ServicePageContent page={page} />
      <Footer />
    </main>
  );
}
