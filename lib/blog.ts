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
  {
    slug: "dental-anxiety-dentist-vashi",
    title: "Nervous About the Dentist? How to Pick a Dentist in Vashi Who Takes It Slow",
    excerpt:
      "Dental anxiety is common and fixable. What to ask before you book, what a calm first visit looks like, and when waiting is fine and when it isn't.",
    metaTitle: "Dental Anxiety in Vashi: Finding a Gentle Dentist | Biolume",
    metaDescription:
      "Nervous about the dentist? Here's how to find a calm, unhurried visit for dental anxiety in Vashi, Sector 19D. Dr. Chordia at Biolume explains. Book today.",
    isoDate: "2026-10-01",
    dateDisplay: "October 1, 2026",
    heroImage: {
      src: "/images/blog/dental-anxiety-dentist-vashi-hero.jpg",
      alt: "Thoughtful patient waiting in a dental chair, for a guide to dental anxiety and gentle dentists in Vashi",
      photographer: "Andrea Piacquadio",
      photographerUrl: "https://www.pexels.com/@olly",
    },
    content: [
      {
        type: "p",
        text: "You booked the appointment two weeks ago. Now it's tomorrow, and you're checking whether you can move it. If that's you, you're in good company. At Biolume Dental Care in Sector 19D, Vashi, a lot of adults walk in nervous. Dental anxiety in Vashi is common, it's not a character flaw, and the right dentist makes it much smaller.",
      },
      {
        type: "h2",
        text: "Why Being Nervous About the Dentist Is So Common",
      },
      {
        type: "p",
        text: "Most dental fear comes from a few specific things. The sound of the drill. The feeling of being flat on your back, unable to talk. An old experience, usually from childhood, where something hurt or nobody explained what was happening.",
      },
      {
        type: "p",
        text: "Notice that none of these are really about teeth. They're about control. You can't see what's going on, you can't speak, and you don't know what comes next.",
      },
      {
        type: "p",
        text: "That's useful, because control is something a good dentist can hand back to you. The [NHS inform guide to coping with a fear of the dentist](https://www.nhsinform.scot/healthy-living/dental-health/visiting-the-dentist/coping-with-a-fear-of-the-dentist/) says the same thing: tell your dentist how you feel, and work out the visit together.",
      },
      {
        type: "h2",
        text: "What to Ask Before You Book a Gentle Dentist in Vashi",
      },
      {
        type: "p",
        text: "You can learn a lot from one phone call or message, before you ever sit in the chair. Here are the questions worth asking any clinic, ours included:",
      },
      {
        type: "ul",
        items: [
          "Can my first visit be just a conversation and a look, with no treatment?",
          "Will you explain what you're about to do before you do it?",
          "Can we agree a signal so I can stop you at any point?",
          "Can I see what you're seeing, on a screen or in a mirror?",
          "Is there enough time booked that nobody will rush me?",
        ],
      },
      {
        type: "p",
        text: "The answers matter, but so does the tone. If the person on the other end sounds relaxed and gives you a straight answer, that's a good sign. If you get a sales pitch, that's not.",
      },
      {
        type: "h2",
        text: "What a Calm First Visit Looks Like",
      },
      {
        type: "p",
        text: "At Biolume, Dr. Dishani Chordia, BDS, starts every first visit by talking. You tell her what worries you, what you've had done before, and what you'd like to avoid. Nothing starts until you've said yes.",
      },
      {
        type: "p",
        text: "Then comes the look. We use an intraoral camera and digital X-rays, so you see what we see. Many people find that the unknown is scarier than the actual problem, and being shown a clear picture takes some of the fear away.",
      },
      {
        type: "p",
        text: "After that, you get a plan in plain words. What needs doing, what can wait, and roughly how long it will take. You decide what happens next. Plenty of people leave the first visit having done nothing but talk and get checked, and that's a perfectly good start.",
      },
      {
        type: "h3",
        text: "Small things that help on the day",
      },
      {
        type: "ul",
        items: [
          "Book a time when you're not rushing from work. A calm morning beats a stressed evening.",
          "Eat something first. An empty stomach makes nerves feel worse.",
          "Slow your breathing: in for four, out for six. It sounds too simple, and it works.",
          "Tell the dentist you're nervous. Most people hide it, and it just makes the visit harder.",
        ],
      },
      {
        type: "h2",
        text: "Does Laser Dentistry Help With Dental Fear?",
      },
      {
        type: "p",
        text: "For some treatments, yes, and it's worth knowing why. Laser treatment can mean less bleeding and faster healing, often without stitches, for suitable cases. For a nervous patient, a shorter, cleaner procedure can feel less daunting.",
      },
      {
        type: "p",
        text: "It won't take the fear away by itself, and it doesn't suit every problem. Many treatments still use conventional instruments. Our [laser dentistry page](/services/laser-dentistry-vashi-navi-mumbai/) is straight about where a laser helps and where it doesn't, so you can ask about it at your first visit.",
      },
      {
        type: "h2",
        text: "When Fear Is Fine to Wait on, and When It Isn't",
      },
      {
        type: "p",
        text: "Here's the honest part. If you have no pain, nothing looks wrong, and you had a check-up in the last year, you don't need to rush in. Waiting a few weeks until you feel ready is fine.",
      },
      {
        type: "p",
        text: "But some things shouldn't wait for courage. Swelling in the face or gums, pain that keeps you awake, a tooth that's cracked or loose, or a bad taste that won't go. Fear makes small problems bigger, because a small filling is a much easier visit than a root canal. If any of these sound familiar, call and tell us you're nervous. We'd rather see you early.",
      },
      {
        type: "p",
        text: "If it's been years since your last visit, nobody at the clinic will lecture you. It's a common story, and the useful part is where you go from here. Our [contact page](/contact/) has the address, hours and a booking form, so you can write to us first if talking feels like too much.",
      },
      {
        type: "p",
        text: "You can also read what an [American Dental Association page on dental anxiety](https://www.mouthhealthy.org/all-topics-a-z/anxiety) suggests. Its advice matches ours: ask questions, agree a stop signal, and never feel embarrassed about being scared.",
      },
      {
        type: "p",
        text: "Looking at a gum or smile concern but not sure it's worth a visit? Our guide on [dark gums treatment in Vashi](/blog/dark-gums-treatment-vashi/) shows how we explain a decision honestly, including the cases where we say you don't need treatment.",
      },
    ],
    faqs: [
      {
        q: "Is it normal to be scared of the dentist?",
        a: "Yes. Dental anxiety is very common among adults, and it usually comes from a past bad experience, the sound of the drill, or not knowing what to expect. Telling your dentist you're nervous is the most useful first step.",
      },
      {
        q: "How do I find a gentle dentist in Vashi?",
        a: "Ask before you book. Check whether the clinic will let a first visit be a conversation only, whether they explain each step, and whether you can agree a stop signal. A calm, direct answer on the phone is a good sign.",
      },
      {
        q: "Can I just talk to the dentist at my first visit?",
        a: "Yes. At Biolume Dental Care, a first visit can be a conversation and a gentle check, with no treatment started until you're ready. You decide what happens next.",
      },
      {
        q: "Is a dental check-up painful?",
        a: "A routine check-up is a look and a gentle examination, and most people feel pressure at most. If something needs treatment, it's discussed first, and numbing is used where it's needed.",
      },
      {
        q: "How can I calm down before a dental appointment?",
        a: "Slow your breathing, eat beforehand, and pick a time when you're not rushed. Tell the dentist you're nervous and agree a signal to pause. These small steps make a bigger difference than most people expect.",
      },
      {
        q: "What if I haven't been to a dentist in years?",
        a: "Come as you are. There's no lecture. A first visit after a long gap is mostly a check and a plan, so you know what needs attention and what can wait. The earlier you come, the simpler the treatment usually is.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
