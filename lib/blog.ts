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

export const blogPosts: BlogPost[] = [
  {
    slug: "dark-gums-treatment-vashi",
    title: "Dark Gums Treatment in Vashi: What Causes Them and Whether Laser Is Worth It",
    excerpt:
      "Why some gums are naturally dark, when a dark patch deserves a closer look, and what laser depigmentation involves, costs and doesn't fix.",
    metaTitle: "Dark Gums Treatment in Vashi | Biolume Dental Care",
    metaDescription:
      "Dark gums treatment in Vashi: causes, laser depigmentation, cost and recovery, explained by Biolume Dental Care, Sector 19D. Book a gum check today.",
    isoDate: "2026-09-27",
    dateDisplay: "September 27, 2026",
    heroImage: {
      src: "/images/blog/dark-gums-treatment-vashi-hero.jpg",
      alt: "Smiling woman in soft natural light, for a guide to dark gums treatment and laser gum bleaching in Vashi",
      photographer: "Andrea Piacquadio",
      photographerUrl: "https://www.pexels.com/@olly",
    },
    content: [
      {
        type: "p",
        text: "You notice it first in a photo: you're laughing, and the gum above your front teeth looks brown, almost black. At Biolume Dental Care in Sector 19D, Vashi, it's a common quiet question at check-ups, and usually nothing is wrong. Here's what causes dark gums, and what dark gums treatment in Vashi actually involves if you decide you want it at all.",
      },
      {
        type: "h2",
        text: "What Causes Black Gums?",
      },
      {
        type: "p",
        text: "Gums are the one part of a smile nobody thinks about until a group photo puts them in the spotlight. When they do look dark, the reason is almost always melanin, the same pigment that gives your skin its colour.",
      },
      {
        type: "p",
        text: "Some people simply make more of it in their gum tissue. It's usually inherited, it often runs in families, and it tends to show as an even brown band along the front gums. Dentists call this physiological pigmentation, which is a formal way of saying it's normal.",
      },
      {
        type: "p",
        text: "A [clinical study on PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC10746736/) describes it as a genetic trait in some populations, caused by pigment-producing cells in the gum's outer layer.",
      },
      {
        type: "p",
        text: "A few other causes are less common, and they matter because they change the advice:",
      },
      {
        type: "ul",
        items: [
          "Smoking. Tobacco can prompt the gums to produce more pigment, often on the front gums. Dentists call this smoker's melanosis.",
          "Certain long-term medicines. Some can darken the gums over time, so your dentist will ask what you take.",
          "Old metal fillings. Silver amalgam can leave a small grey or blue mark on the gum right next to it.",
          "A sudden change. A patch that appears out of nowhere, grows, or looks different from the rest is not something to bleach. It needs an examination first.",
        ],
      },
      {
        type: "p",
        text: "The first group, inherited pigment, is by far the most common. It isn't harmful, and treating it is a purely cosmetic choice.",
      },
      {
        type: "h2",
        text: "How Gum Depigmentation in Vashi Works",
      },
      {
        type: "p",
        text: "Gum depigmentation removes a very thin top layer of gum, the layer that holds the pigment. New, lighter tissue grows back in its place.",
      },
      {
        type: "p",
        text: "You'll also see it sold as laser gum bleaching, but nothing is actually bleached. The coloured layer is taken away and your gum replaces it.",
      },
      {
        type: "p",
        text: "At Biolume Dental Care, Dr. Dishani Chordia, BDS, does this with a soft-tissue laser. She holds Fellowship training in laser dentistry and does the procedure herself. It's one of several treatments covered on our [laser dentistry page](/services/laser-dentistry-vashi-navi-mumbai/), which explains where a laser genuinely helps and where it doesn't.",
      },
      {
        type: "h3",
        text: "1. A gum check first",
      },
      {
        type: "p",
        text: "Your gums need to be healthy before anything cosmetic happens. If there's bleeding or inflammation, that gets sorted out first.",
      },
      {
        type: "h3",
        text: "2. Numbing",
      },
      {
        type: "p",
        text: "The area is numbed with a local anaesthetic. Most people feel warmth or light pressure, nothing sharp.",
      },
      {
        type: "h3",
        text: "3. The laser pass",
      },
      {
        type: "p",
        text: "The laser removes the pigmented layer across the visible gum line. For one arch, this usually takes somewhere between 20 minutes and an hour.",
      },
      {
        type: "h3",
        text: "4. Healing",
      },
      {
        type: "p",
        text: "For the first few days, the treated gum looks pale and feels tender. New pink tissue fills in over one to two weeks. Stick to soft, lukewarm food for the first day, and skip anything spicy until it settles.",
      },
      {
        type: "p",
        text: "Here's our honest view on laser versus the older scalpel method. In one [split-mouth study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10746736/), the laser side bled less and showed less colour returning over nine months. Pain scores were about the same for both.",
      },
      {
        type: "p",
        text: "[Other researchers](https://pmc.ncbi.nlm.nih.gov/articles/PMC12487293/) note that the final look is much the same either way. The laser's real advantage is a cleaner, quicker appointment with less bleeding. It's a better tool for the job, not a different result.",
      },
      {
        type: "h2",
        text: "Gum Depigmentation Cost in Navi Mumbai",
      },
      {
        type: "p",
        text: "Across India, laser gum depigmentation typically costs somewhere between ₹5,000 and ₹15,000, based on [published clinic pricing](https://dentalarchindia.com/gum-depigmentation-treatment/). Where you land depends on how much of the gum is pigmented and how deep it sits. Treating one arch costs less than treating both.",
      },
      {
        type: "p",
        text: "The exact cost varies from patient to patient. Dr. Chordia will confirm yours after the consultation at Biolume Dental Care, once she has actually seen your gums. Because it's a cosmetic procedure, insurance generally won't cover it.",
      },
      {
        type: "h2",
        text: "Is Dark Gums Treatment Worth It for You?",
      },
      {
        type: "p",
        text: "It's worth considering if the colour bothers you when you smile, talk or look at photos, and your gums are otherwise healthy.",
      },
      {
        type: "p",
        text: "If your gums have always been dark and it doesn't bother you, you don't need treatment. It's a cosmetic choice, not a health one.",
      },
      {
        type: "p",
        text: "If you smoke and plan to keep smoking, the colour tends to come back, so it may not be worth doing yet. And a dark patch that appears suddenly is different: get that checked, don't bleach it.",
      },
      {
        type: "p",
        text: "If you're already thinking about a bigger change to your smile, gum colour and gum shape can be planned together. Our [smile makeover page](/services/smile-makeover-vashi-navi-mumbai/) explains how that planning works at our Vashi clinic.",
      },
      {
        type: "p",
        text: "Not sure which kind of pigmentation you have? That's a normal question to bring to a check-up. It takes a few minutes to look, and you'll leave knowing whether there's anything to decide at all.",
      },
    ],
    faqs: [
      {
        q: "Is gum depigmentation permanent?",
        a: "It's long-lasting, but it isn't always permanent. Because the pigment is often inherited, some colour can slowly return over the years, and it tends to come back sooner in people who smoke. If it does return, a short touch-up session is usually enough.",
      },
      {
        q: "Does laser gum depigmentation hurt?",
        a: "The gum is numbed first, so most people feel warmth or light pressure during the procedure rather than pain. Afterwards, the area feels tender for a few days. Soft food and gentle brushing make that period much easier.",
      },
      {
        q: "How long does it take for the gums to heal?",
        a: "The treated gum looks pale for the first few days, and new pink tissue fills in over roughly one to two weeks. You can usually eat and talk normally straight after the appointment, just with softer food at first.",
      },
      {
        q: "Are dark gums a sign of gum disease?",
        a: "Usually not. Most dark gums are inherited pigment and completely normal. Gum disease tends to show as red, swollen or bleeding gums instead. A dark patch that is new, growing or uneven should be examined before any cosmetic treatment is considered.",
      },
      {
        q: "Can I get laser gum bleaching if I smoke?",
        a: "You can, but the pigment is likely to return faster while you keep smoking. If you're planning to quit, it usually makes sense to wait until you have, so the result lasts longer.",
      },
      {
        q: "What does gum depigmentation cost in Vashi?",
        a: "Across India, laser gum depigmentation typically falls between ₹5,000 and ₹15,000. The exact cost varies from patient to patient, and Dr. Chordia confirms it after the consultation at our Sector 19D clinic.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
