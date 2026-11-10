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
  {
    slug: "implant-planning-3d-scan-vashi",
    title: "Before the Implant: What Your 3D Scan Shows, and What Happens Next",
    excerpt:
      "What an implant planning visit in Vashi actually involves: the 3D scan, what Dr. Chordia checks on screen, the three possible outcomes, and what to ask.",
    metaTitle: "Dental Implant Planning in Vashi: The 3D Scan | Biolume",
    metaDescription:
      "Wondering what happens before a dental implant? See what a 3D scan shows, what planning involves and what to ask at Biolume Dental Care, Vashi. Book a visit.",
    isoDate: "2026-10-06",
    dateDisplay: "October 6, 2026",
    heroImage: {
      src: "/images/blog/implant-planning-3d-scan-vashi-hero.jpg",
      alt: "Dental X-ray on a monitor during dental implant planning in Vashi, Navi Mumbai",
      photographer: "Polina Zimmerman",
      photographerUrl: "https://www.pexels.com/@polina-zimmerman",
    },
    content: [
      {
        type: "p",
        text: "Most people picture an implant as the surgery. The part that decides how it goes happens earlier, at a desk, looking at a screen. Dental implant planning in Vashi starts with a 3D scan of your jaw, and at Biolume Dental Care in Sector 19D, you look at that scan together with Dr. Dishani Chordia before anything is booked. Here's what that visit involves.",
      },
      {
        type: "h2",
        text: "Why Implant Planning Comes Before the Implant",
      },
      {
        type: "p",
        text: "An implant sits inside bone, so the question is never just where the gap is. It's how much bone is there, how dense it is, and what runs through it. A normal dental X-ray is flat. It can show how tall the bone is, but not how wide.",
      },
      {
        type: "p",
        text: "A 3D scan fills that in. The dentist can then pick the size, angle and position of the implant on screen, instead of finding out mid-procedure. That's the whole point of planning: fewer surprises for you, and fewer decisions made on the day.",
      },
      {
        type: "h2",
        text: "What a 3D Scan for Dental Implants Actually Is",
      },
      {
        type: "p",
        text: "The scan is called CBCT, short for cone-beam computed tomography. You stand or sit still while a machine rotates once around your head. It takes under a minute, and nothing touches you. The images are stitched into a 3D model of your jaw that can be turned and sliced on screen.",
      },
      {
        type: "p",
        text: "It's an X-ray technique, so it isn't used casually. The [FDA's page on dental cone-beam CT](https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography) notes that dental X-ray exams, CBCT included, should be done only when they're needed to diagnose or plan treatment. Implant planning is one of the clearest cases where that's true.",
      },
      {
        type: "h2",
        text: "What Dr. Chordia Checks on Screen",
      },
      {
        type: "p",
        text: "Once the model is up, you see it too. Dr. Chordia, who holds Fellowships in Dental Implants and Laser Dentistry, walks through the same short list each time:",
      },
      {
        type: "ul",
        items: [
          "Bone width and height at the gap, measured in millimetres, so the implant size fits the bone you have.",
          "Bone density, which affects how the implant is placed and how long healing may take.",
          "The nerve canal in the lower jaw, so the implant stays a safe distance from it.",
          "The sinus floor in the upper jaw, which limits how long an implant can be in some spots.",
          "Neighbouring teeth and any leftover root pieces at the site.",
        ],
      },
      {
        type: "p",
        text: "You don't need to understand every grey shape. Ask her to point at the bone, then at the nerve, and the picture makes sense quickly. People tend to relax once they can see the plan instead of imagining it.",
      },
      {
        type: "h2",
        text: "Do I Need a Bone Graft Before a Dental Implant?",
      },
      {
        type: "p",
        text: "This is the question most people carry into the room, and the scan answers it. If the bone is wide and dense enough, you may not need one. If it's thin, a graft adds bone first, and that means more time before the implant itself.",
      },
      {
        type: "p",
        text: "A graft isn't a failure of anything. Bone often shrinks after a tooth has been missing for a while, so a gap that's years old is more likely to need support than a recent one. Knowing that at the planning stage is far better than discovering it halfway through.",
      },
      {
        type: "h2",
        text: "The Three Outcomes of an Implant Consultation in Vashi",
      },
      {
        type: "p",
        text: "After the scan and the exam, you'll land in one of three places. All three are normal.",
      },
      {
        type: "h3",
        text: "1. You're ready to go ahead",
      },
      {
        type: "p",
        text: "The bone is suitable and your gums and general health are in good shape. You get a plan with the stages, the rough timeline and what each visit involves. Nothing is booked until you agree.",
      },
      {
        type: "h3",
        text: "2. Something needs sorting first",
      },
      {
        type: "p",
        text: "That could be a bone graft, gum treatment, or a tooth that needs to come out or be saved. Conditions like active gum disease, uncontrolled diabetes and heavy smoking all affect how an implant heals, so they get dealt with first. It adds a step, but it protects the result.",
      },
      {
        type: "h3",
        text: "3. An implant isn't the right choice right now",
      },
      {
        type: "p",
        text: "Sometimes a bridge or a partial denture suits you better, and sometimes it's simply too early, for example in a teenager whose jaw is still growing. If that's the case, Dr. Chordia will say so and explain why. An honest \"not yet\" is part of good planning, and it costs you less than a rushed yes.",
      },
      {
        type: "h2",
        text: "What to Bring and What to Ask",
      },
      {
        type: "p",
        text: "You don't need to prepare much. A little homework makes the visit more useful:",
      },
      {
        type: "ul",
        items: [
          "Bring any old dental X-rays or reports, and a list of your medicines.",
          "Mention diabetes, blood pressure, smoking or any blood thinners. They change the plan.",
          "Ask how many visits there will be, and how long healing usually takes.",
          "Ask what happens if the bone turns out to be thin.",
          "Ask what the crown will look like and when you'd get it.",
          "Ask what you can't eat, and for how long, after placement.",
        ],
      },
      {
        type: "p",
        text: "Cost depends on the number of implants and whether anything else is needed first, so it's settled at the consultation once the scan has been read. Nobody can quote it fairly before that.",
      },
      {
        type: "h2",
        text: "Where This Fits in the Whole Treatment",
      },
      {
        type: "p",
        text: "Planning is stage one of four: scan and plan, placement, healing, then the crown. Placement is done under local anaesthesia, and healing takes a few months while bone grows around the implant. Our [dental implants page](/services/dental-implants-vashi-navi-mumbai/) covers the whole sequence, and the [American Dental Association's implant overview](https://www.mouthhealthy.org/all-topics-a-z/implants) explains the same process in general terms.",
      },
      {
        type: "p",
        text: "Laser plays a small supporting role at certain points, such as shaping gum tissue around the site. It isn't the main event, and it's only used where it helps. You can read where on our [laser dentistry page](/services/laser-dentistry-vashi-navi-mumbai/).",
      },
      {
        type: "p",
        text: "If the idea of any of this makes you tense, you're not the only one. Our piece on [choosing a dentist in Vashi when you're nervous](/blog/dental-anxiety-dentist-vashi/) lists what to ask before you book, and a planning visit is a good low-pressure place to start, because nothing is done to you.",
      },
      {
        type: "h2",
        text: "Book an Implant Planning Visit in Vashi",
      },
      {
        type: "p",
        text: "Biolume Dental Care is at Shop No. 10, 2nd Floor, Aykon, Palm Beach Road, above Zudio/Reliance Digital, Phase 2, Sector 19D, Vashi, Navi Mumbai 400703. We're open Monday to Saturday, 10 AM to 8 PM, and Sundays by appointment. Use the form on our [contact page](/contact/) to book a consultation, and bring your questions.",
      },
    ],
    faqs: [
      {
        q: "What is a 3D scan for dental implants?",
        a: "It's a CBCT scan, where a machine rotates once around your head and builds a 3D model of your jaw. It takes under a minute and shows bone width, density, nerves and the sinus, so the implant can be planned precisely.",
      },
      {
        q: "Is a CBCT scan before a dental implant necessary?",
        a: "For implant planning it's the standard way to see what a flat X-ray can't, such as how wide the bone is and where the nerve runs. Your dentist will confirm whether it's needed in your case.",
      },
      {
        q: "Do I need a bone graft before a dental implant?",
        a: "Not always. If your bone is wide and dense enough at the gap, you may not need one. The 3D scan shows this, and if a graft is needed, Dr. Chordia explains the options and the extra time.",
      },
      {
        q: "How long does it take before a dental implant is placed?",
        a: "If the planning visit shows everything is suitable, placement can be scheduled soon after. If a graft or gum treatment comes first, that adds healing time. You get a realistic timeline at the consultation.",
      },
      {
        q: "What happens at an implant consultation in Vashi?",
        a: "You have an exam, a review of your dental and medical history, and a 3D scan if it's needed. Then you look at the scan with Dr. Chordia and get a plan in plain words. No treatment starts until you agree.",
      },
      {
        q: "Can everyone get dental implants?",
        a: "No. Active gum disease, uncontrolled diabetes, heavy smoking and a jaw that's still growing all affect suitability. Some of these can be treated first. If an implant isn't right for you, you'll be told why and what the alternatives are.",
      },
    ],
  },
  {
    slug: "cosmetic-dentist-vashi-whitening-bonding-veneers",
    title:
      "Cosmetic Dentist in Vashi: Whitening, Bonding or Veneers, Which One Fits What You See?",
    excerpt:
      "Start from what bothers you in the mirror, colour, a chip or the shape, and see whether whitening, bonding or veneers fits. A guide from a cosmetic dentist in Vashi.",
    metaTitle: "Cosmetic Dentist in Vashi: Which Fix? | Biolume Dental Care",
    metaDescription:
      "Not sure if you need whitening, bonding or veneers? Dr. Dishani Chordia explains how to choose at Biolume Dental Care, Vashi. Book a consultation.",
    isoDate: "2026-10-11",
    dateDisplay: "October 11, 2026",
    heroImage: {
      src: "/images/blog/cosmetic-dentist-vashi-whitening-bonding-veneers-hero.jpg",
      alt: "Young woman smiling outdoors, cosmetic dentist in Vashi, Navi Mumbai",
      photographer: "Min An",
      photographerUrl: "https://www.pexels.com/@minan1398",
    },
    content: [
      {
        type: "p",
        text: "You catch your smile in a photo and something is off. Maybe the colour, a chipped edge, or the shape of one tooth. Most people searching for a cosmetic dentist in Vashi already know what bothers them. What they don't know is which fix matches it. Here's how Dr. Dishani Chordia at Biolume Dental Care in Sector 19D sorts it out.",
      },
      {
        type: "h2",
        text: "Start With What You See, Not the Treatment",
      },
      {
        type: "p",
        text: "Whitening, bonding and veneers get compared as if they were rivals. They aren't. Each one solves a different problem, so the useful question is what exactly bothers you.",
      },
      {
        type: "ul",
        items: [
          "Your teeth look yellow or dull, but their shape is fine: that's a colour problem.",
          "You have a small chip, a little gap or one uneven edge: that's a repair problem.",
          "Several front teeth are worn, misshapen or stained in a way that won't lift: that's a design problem.",
        ],
      },
      {
        type: "p",
        text: "Colour points to whitening, repair points to bonding, and design points to veneers. Plenty of people have more than one of these, which is where the order of treatment starts to matter.",
      },
      {
        type: "h2",
        text: "Whitening vs Veneers in Vashi: When Colour Is the Only Issue",
      },
      {
        type: "p",
        text: "If your teeth are healthy and simply darker than you'd like, whitening is usually the first thing to try. It changes the shade of natural tooth and leaves the shape alone. It's also the gentlest option, because nothing is cut away.",
      },
      {
        type: "p",
        text: "There's one catch. Whitening only works on natural enamel. Fillings, crowns and veneers don't change colour, so a whitened smile can end up with a few teeth that no longer match. That's worth knowing before you start, not after.",
      },
      {
        type: "p",
        text: "Some stains also sit inside the tooth rather than on it, often after a root canal or from medicines taken in childhood. Those respond differently, and a quick exam tells you which kind you have. A veneer is rarely the right answer to a colour problem that whitening hasn't been tried on.",
      },
      {
        type: "p",
        text: "Expect some sensitivity to cold during whitening. It usually settles within a day or two. If your teeth already zing at cold water, say so at the start, because it changes how the whitening is done and how strong it is.",
      },
      {
        type: "h2",
        text: "Composite Bonding vs Veneers in Navi Mumbai: Fixing Small Flaws",
      },
      {
        type: "p",
        text: "Bonding uses tooth-coloured resin that is shaped onto the tooth and set with a light. It's done in one visit, and often needs little or no drilling. For a chipped corner or a small gap, it's a sensible, conservative choice.",
      },
      {
        type: "p",
        text: "The trade-off is durability. Resin can chip and pick up stains over time, especially with tea, coffee or turmeric in your routine, and it may need touching up. If you grind your teeth at night, mention it, because grinding is hard on bonding.",
      },
      {
        type: "p",
        text: "Veneers are thin shells, usually porcelain, made in a lab and fixed to the front of the tooth. They resist stains better and many last a decade or more with care. The cost is that some enamel is usually shaved away first, and that part can't be undone. The [American Dental Association's veneers page](https://www.mouthhealthy.org/all-topics-a-z/veneers) explains the same trade-off in general terms.",
      },
      {
        type: "p",
        text: "Day to day, both need ordinary care. Brush twice a day, floss, and go easy on ice, pen caps and fingernails. Bonded and veneered teeth can chip like natural ones, and a night guard is worth considering if you clench. Keep your six-month check-ups, because that's when small edge problems get spotted early and fixed before they grow.",
      },
      {
        type: "p",
        text: "Neither option is a one-time purchase you forget about. Think of both as work that needs a little looking after, the way a good watch does. That's a fair thing to ask any clinic before you commit: what will upkeep look like in year three?",
      },
      {
        type: "h2",
        text: "Whitening Before Bonding or Veneers: Why the Order Matters",
      },
      {
        type: "p",
        text: "If you want more than one of these, whitening comes first. Bonding resin and veneers are matched to the shade of your teeth on the day. Whiten afterwards and your natural teeth lighten while the new work stays put.",
      },
      {
        type: "p",
        text: "So the usual sequence is whitening, a short wait for the shade to settle, then bonding or veneers matched to the new colour. Gum shape counts too. If one tooth looks short because of an uneven gum line, reshaping it with a laser can come before any of this. Our [dark gums guide](/blog/dark-gums-treatment-vashi/) shows what laser work on gums involves.",
      },
      {
        type: "h2",
        text: "When None of These Is the Right Move",
      },
      {
        type: "p",
        text: "Sometimes the honest advice is to fix something else first. Active gum disease, untreated decay and sensitive teeth all need attention before anything cosmetic. Cosmetic work placed over a weak foundation won't hold up.",
      },
      {
        type: "p",
        text: "If your teeth are crooked rather than discoloured, braces or aligners may suit you better than covering the problem. And if you only need a clean, a professional scale and polish can lift surface stains enough that you won't need whitening at all. Dr. Chordia will tell you if that's the case.",
      },
      {
        type: "h2",
        text: "What a Cosmetic Consultation at Biolume Looks Like",
      },
      {
        type: "p",
        text: "You start by saying what you don't like, in your own words. Dr. Chordia examines your teeth and gums, takes photographs, and explains which option fits and in what order. You see what we see, using an intraoral camera, so the advice isn't abstract.",
      },
      {
        type: "p",
        text: "Nothing starts until you agree. Cost depends on how many teeth are involved and which treatment suits them, so it's confirmed after the consultation. When several treatments are combined, our [smile makeover page](/services/smile-makeover-vashi-navi-mumbai/) explains how they're planned together, including the digital preview.",
      },
      {
        type: "p",
        text: "A tip for the visit: bring a photo of a smile you like, or a picture of yourself from a few years back. It tells the dentist more than adjectives do.",
      },
      {
        type: "h2",
        text: "Book a Cosmetic Dentist Visit in Vashi",
      },
      {
        type: "p",
        text: "Biolume Dental Care is at Shop No. 10, 2nd Floor, Aykon, Palm Beach Road, above Zudio/Reliance Digital, Phase 2, Sector 19D, Vashi, Navi Mumbai 400703. We're open Monday to Saturday, 10 AM to 8 PM, and Sundays by appointment. Use the form on our [contact page](/contact/) to book a consultation, and tell us what you'd like to change.",
      },
    ],
    faqs: [
      {
        q: "Which is better, teeth whitening or veneers?",
        a: "They solve different problems. Whitening changes the colour of natural teeth and removes nothing. Veneers change colour, shape and size, but need some enamel removed. If colour is the only issue, whitening usually comes first.",
      },
      {
        q: "Is composite bonding or veneers better for a chipped tooth?",
        a: "For a small chip, bonding is usually the conservative choice and is done in one visit. For several worn or damaged front teeth, veneers can give a more durable result. The exam decides.",
      },
      {
        q: "Should I whiten my teeth before getting veneers or bonding?",
        a: "Yes, in most cases. Veneers and bonding are colour-matched to the shade you have at the time and don't change colour with whitening. Whiten first, let the shade settle, then match the new work to it.",
      },
      {
        q: "How long do veneers last?",
        a: "Many last a decade or more with good care, though it varies by person. Habits such as grinding, biting hard objects and skipping check-ups shorten their life.",
      },
      {
        q: "Can bonded teeth or veneers be whitened?",
        a: "No. Whitening only works on natural enamel, so bonding, veneers, crowns and fillings keep their original shade. This is why whitening comes before other cosmetic work.",
      },
      {
        q: "Where can I find a cosmetic dentist near me in Vashi?",
        a: "Biolume Dental Care is in Sector 19D, Palm Beach Road, Vashi, with Dr. Dishani Chordia leading cosmetic and laser care. Book a consultation through the contact page and bring photos of what you'd like to change.",
      },
      {
        q: "What does cosmetic dentistry cost in Navi Mumbai?",
        a: "It depends on the treatment and the number of teeth. Whitening, bonding and veneers differ widely, so the exact cost varies from patient to patient and Dr. Chordia confirms it after the consultation.",
      },
    ],
  },
  {
    slug: "frenectomy-tongue-tie-lip-tie-vashi",
    title:
      "Tongue Tie or Lip Tie? What a Frenectomy in Vashi Involves, and Who Really Needs One",
    excerpt:
      "Not every tongue tie or lip tie needs treatment. Here is how to tell, what a laser frenectomy in Vashi involves, and what healing looks like for babies, children and adults.",
    metaTitle: "Frenectomy in Vashi: Tongue and Lip Tie | Biolume",
    metaDescription:
      "Wondering if you or your child needs a frenectomy in Vashi? Dr. Dishani Chordia explains laser tongue and lip tie release at Biolume. Book a visit.",
    isoDate: "2026-10-21",
    dateDisplay: "October 21, 2026",
    heroImage: {
      src: "/images/blog/frenectomy-tongue-tie-lip-tie-vashi-hero.jpg",
      alt: "Mother holding a smiling baby by a window, frenectomy in Vashi, Navi Mumbai",
      photographer: "Mohamad Mekawi",
      photographerUrl: "https://www.pexels.com/@mohamad-mekawi-74909946",
    },
    content: [
      {
        type: "p",
        text: "Your baby keeps slipping off the latch. Or your five-year-old can't lick an ice cream cone properly. Or you've never been able to stick your own tongue out very far. Most people searching for a frenectomy in Vashi are describing something like this. Dr. Dishani Chordia at Biolume Dental Care in Sector 19D explains what tongue and lip ties are, and who needs them released.",
      },
      {
        type: "h2",
        text: "What a Frenulum Is, and What Tongue Tie and Lip Tie Mean",
      },
      {
        type: "p",
        text: "A frenulum is a small fold of tissue that anchors one part of your mouth to another. You have one under your tongue and one between your upper lip and your gum. Everyone does, and most are perfectly fine.",
      },
      {
        type: "p",
        text: "A tongue tie means the fold under the tongue is short or tight, so the tongue can't move as freely as it should. A lip tie means the fold under the upper lip is thick or low, and holds the lip close to the gum. A frenectomy is the small procedure that releases one of these folds.",
      },
      {
        type: "p",
        text: "Having a tight-looking frenulum is not the same as having a problem. What matters is whether it gets in the way of feeding, speech, eating or your teeth and gums.",
      },
      {
        type: "h2",
        text: "Lip Tie Treatment for Babies and Children: Who Needs One",
      },
      {
        type: "p",
        text: "In newborns, the usual reason to look at a tie is trouble with feeding. That can mean a shallow latch, clicking sounds, long feeds, or a baby who stays hungry. The NHS is clear that [not every tongue tie needs treatment](https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/breastfeeding/breastfeeding-challenges/tongue-tie/), because some babies feed well despite one.",
      },
      {
        type: "p",
        text: "So the first step for a baby is a feeding assessment, not a procedure. A lactation consultant or paediatrician can tell you whether the tie is actually the cause. Many feeding problems turn out to be positioning issues that are fixed without any cutting.",
      },
      {
        type: "p",
        text: "In older children, the signs shift. A parent might notice a child who struggles to say certain sounds, can't lift the tongue to the roof of the mouth, or avoids foods that need a lot of tongue movement. A lip tie can show up as a gap between the front teeth or gum that looks pulled when the lip lifts.",
      },
      {
        type: "p",
        text: "If you're worried, bring your child in for a look. Dr. Chordia will tell you whether the tie matters, whether it can wait, or whether a speech therapist or paediatric specialist should see your child first.",
      },
      {
        type: "h2",
        text: "Tongue Tie in Adults: Yes, It Happens",
      },
      {
        type: "p",
        text: "Plenty of adults have a tongue tie that was never noticed. Many have simply adapted. You might find it hard to clean food from your back teeth with your tongue, or feel your tongue pulling when you try to reach the roof of your mouth.",
      },
      {
        type: "p",
        text: "A tight lip frenulum in an adult can sit right against the gum between the upper front teeth. It can make brushing there uncomfortable, and it sometimes pulls on the gum. In those cases, releasing it can be part of the plan before braces or gum work.",
      },
      {
        type: "p",
        text: "If nothing bothers you, you don't need to do anything. A tie that causes no trouble is just a feature of your mouth.",
      },
      {
        type: "h2",
        text: "Laser Frenectomy in Navi Mumbai: How It Works Step by Step",
      },
      {
        type: "p",
        text: "At Biolume, Dr. Chordia holds a Fellowship in Laser Dentistry, and a frenectomy is one of the soft-tissue procedures a dental laser is well suited to. The laser cuts and seals the tissue at the same time. For suitable cases, that can mean less bleeding and faster healing, often without stitches.",
      },
      {
        type: "h3",
        text: "Step 1: Examination and a clear explanation",
      },
      {
        type: "p",
        text: "You see the tie on the intraoral camera screen, so you know what is being talked about. Dr. Chordia checks how far the tongue or lip actually moves and explains whether release will help.",
      },
      {
        type: "h3",
        text: "Step 2: Numbing, where needed",
      },
      {
        type: "p",
        text: "Older children and adults usually get a local anaesthetic so the area is numb. Very small ties may need less. If you or your child is nervous, say so at this point. Our [guide for nervous patients](/blog/dental-anxiety-dentist-vashi/) explains how we slow things down.",
      },
      {
        type: "h3",
        text: "Step 3: The release itself",
      },
      {
        type: "p",
        text: "The laser releases the fold in a short procedure. It is usually over in minutes, though the visit as a whole takes longer because of the explanation and aftercare.",
      },
      {
        type: "h3",
        text: "Step 4: Aftercare instructions",
      },
      {
        type: "p",
        text: "You'll be told what to eat, how to keep the area clean, and what to watch for. For tongue ties, gentle tongue exercises are often advised so the tissue doesn't tighten again as it heals.",
      },
      {
        type: "p",
        text: "Our [laser dentistry page](/services/laser-dentistry-vashi-navi-mumbai/) lists the other soft-tissue procedures Dr. Chordia does with the laser.",
      },
      {
        type: "h2",
        text: "Healing After a Frenectomy: What to Expect",
      },
      {
        type: "p",
        text: "The area usually looks white or yellowish for a few days, which is normal healing and not an infection. Mild soreness is common, and soft, cool foods help. Most people find the first few days the most noticeable, with the area settling over the next one to two weeks.",
      },
      {
        type: "p",
        text: "Healing varies with age and how deep the release was. The exercises matter more than people expect, and skipping them is the usual reason a tie tightens up again. Tell us at the follow-up if anything feels wrong, and we'll check it.",
      },
      {
        type: "h2",
        text: "When You Do Not Need a Frenectomy",
      },
      {
        type: "p",
        text: "You don't need one if the tie causes no trouble with feeding, speech, eating or cleaning your teeth. You also don't need one just because someone online called it a tongue tie. And a baby who is feeding well usually needs nothing at all.",
      },
      {
        type: "p",
        text: "A frenectomy also isn't a fix for every speech delay or feeding difficulty. Those have many causes, which is why an assessment comes first and the procedure second, if at all.",
      },
      {
        type: "h2",
        text: "Book a Frenectomy Consultation in Vashi",
      },
      {
        type: "p",
        text: "Biolume Dental Care is at Shop No. 10, 2nd Floor, Aykon, Palm Beach Road, above Zudio/Reliance Digital, Phase 2, Sector 19D, Vashi, Navi Mumbai 400703. We're open Monday to Saturday, 10 AM to 8 PM, and Sundays by appointment. Use the form on our [contact page](/contact/) to book, and tell us what you or your child has been struggling with. Cost depends on the case and is confirmed after the consultation.",
      },
    ],
    faqs: [
      {
        q: "What is a frenectomy?",
        a: "A frenectomy is a short procedure that releases a tight frenulum, the fold of tissue under the tongue or under the upper lip. It's done to help movement, feeding, speech or gum comfort when the tie is causing a real problem.",
      },
      {
        q: "Does a tongue tie always need to be treated?",
        a: "No. Many tongue ties cause no trouble at all. Treatment is considered when a tie affects feeding, speech, eating or oral hygiene. A proper assessment tells you which group you're in.",
      },
      {
        q: "Is a frenectomy painful?",
        a: "Older children and adults are usually numbed first, so the procedure itself is comfortable. Some soreness for a few days afterwards is normal and manageable with soft foods and the aftercare you're given.",
      },
      {
        q: "How long does it take to recover from a tongue tie release?",
        a: "Most people feel the area settle over about one to two weeks. Full healing can take a little longer, depending on age and the type of release. Exercises help keep the tissue from tightening again.",
      },
      {
        q: "Can adults have a frenectomy in Vashi?",
        a: "Yes. Adults with a tight tongue or lip frenulum can be assessed and treated. It may be considered if the tie affects cleaning, comfort or gum health, or before braces and gum treatment.",
      },
      {
        q: "Is laser frenectomy better than a scalpel?",
        a: "The laser seals as it cuts, so for suitable cases there is often less bleeding and no stitches. A scalpel is still a sound option. Dr. Chordia will recommend the tool that suits the case, not the other way round.",
      },
      {
        q: "What does a frenectomy cost in Navi Mumbai?",
        a: "It depends on the type of tie and the age of the patient. The exact cost varies from patient to patient, and Dr. Chordia confirms it after the consultation.",
      },
    ],
  },
  {
    slug: "gummy-smile-treatment-vashi",
    title:
      "Too Much Gum When You Smile? What Gummy Smile Treatment in Vashi Involves, and When Laser Is Enough",
    excerpt:
      "A gummy smile has more than one cause, and the cause decides the treatment. Here is what laser gum contouring in Vashi can do, what it can't, and how to tell if you need it.",
    metaTitle: "Gummy Smile Treatment in Vashi | Biolume Dental Care",
    metaDescription:
      "Gummy smile in Vashi? Learn what causes it and when laser gum contouring helps. Dr. Chordia at Biolume Dental Care explains. Book a consultation.",
    isoDate: "2026-11-10",
    dateDisplay: "November 10, 2026",
    heroImage: {
      src: "/images/blog/gummy-smile-treatment-vashi-hero.jpg",
      alt: "Woman smiling in natural light, gummy smile treatment in Vashi, Navi Mumbai",
      photographer: "Andrea Piacquadio",
      photographerUrl: "https://www.pexels.com/@olly",
    },
    content: [
      {
        type: "p",
        text: "You look at a photo from a wedding and notice it: a wide band of gum above your top teeth. Since then you've been smiling with your lips closed. If that sounds familiar, you're far from alone, and gummy smile treatment in Vashi has more than one route. Dr. Dishani Chordia at Biolume Dental Care in Sector 19D explains what causes it, what laser contouring can do, and when it isn't the answer.",
      },
      {
        type: "h2",
        text: "What Makes a Smile Gummy",
      },
      {
        type: "p",
        text: "A gummy smile means a lot of gum shows when you smile, usually above the top front teeth. There's no single cause, and the cause decides the treatment. That's why a proper look comes before any plan.",
      },
      {
        type: "p",
        text: "The usual reasons are these:",
      },
      {
        type: "ul",
        items: [
          "Gum sitting too low on the teeth. The teeth are a normal length, but gum covers part of them, so they look short. Dentists call this altered passive eruption.",
          "An upper lip that lifts high. When the lip moves up more than usual as you smile, it shows more gum.",
          "A short upper lip, or a tall upper jaw. These come from the structure of your face and jaw, not from the gum itself.",
          "Gum overgrowth. Some medicines can thicken gum tissue, and so can long-standing plaque and inflammation.",
          "Worn or short teeth. Grinding can wear teeth down, which makes the gum look like it's taking over.",
        ],
      },
      {
        type: "p",
        text: "Many people have more than one of these at once. A [review of gummy smile correction](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11679169/) names the position of the gum and the movement of the lip as two of the most common causes. It also says that working out which one you have is what decides the treatment.",
      },
      {
        type: "p",
        text: "Dr. Chordia checks this first. She looks at your smile at rest and at full stretch, and you see the same pictures on the intraoral camera screen. Nothing is decided until you've seen what she sees.",
      },
      {
        type: "h2",
        text: "Gum Contouring in Vashi: How Laser Reshapes the Gum Line",
      },
      {
        type: "p",
        text: "If the gum sits too low on healthy teeth, the usual answer is to move the gum edge up and show more of the tooth. This is called gum contouring. When the bone needs attention too, it's called crown lengthening.",
      },
      {
        type: "p",
        text: "Dr. Chordia holds a Fellowship in Laser Dentistry, and the laser is one of the tools she uses for this. For suitable cases, a laser can mean less bleeding and no stitches. Here is how a visit usually goes.",
      },
      {
        type: "h3",
        text: "Step 1: Mapping the new gum line",
      },
      {
        type: "p",
        text: "Before anything is touched, Dr. Chordia marks where the new gum line would sit. The new line follows the shape of your lip and your teeth, so the smile looks balanced and not simply shorter on top. You approve the plan before she starts.",
      },
      {
        type: "h3",
        text: "Step 2: Numbing the area",
      },
      {
        type: "p",
        text: "The gum is numbed with a local anaesthetic. The aim is that you feel pressure and not pain, and you can ask her to pause at any point.",
      },
      {
        type: "h3",
        text: "Step 3: Reshaping with the laser",
      },
      {
        type: "p",
        text: "The laser removes the extra gum tissue and shapes the new edge, sealing as it goes. For a small number of teeth, the reshaping is often finished in a single visit.",
      },
      {
        type: "h3",
        text: "Step 4: Aftercare and a check-up",
      },
      {
        type: "p",
        text: "You leave with written advice on food, cleaning and what to avoid. Dr. Chordia sees you again to check how the gum is settling.",
      },
      {
        type: "p",
        text: "Gum contouring also fits inside the wider picture of smile design. Our [smile makeover page](/services/smile-makeover-vashi-navi-mumbai/) explains how it sits alongside whitening, bonding and veneers, and our [laser dentistry page](/services/laser-dentistry-vashi-navi-mumbai/) lists the other soft-tissue work Dr. Chordia does with the laser.",
      },
      {
        type: "h2",
        text: "Gummy Smile Laser Treatment in Navi Mumbai: When Contouring Is Enough",
      },
      {
        type: "p",
        text: "Laser contouring works when the problem is gum tissue. It doesn't change how high your lip lifts or how tall your upper jaw is.",
      },
      {
        type: "p",
        text: "If bone sits too close to the gum edge, the plan changes, because the bone may need reshaping too. Dr. Chordia will tell you at the consultation if that applies to you.",
      },
      {
        type: "p",
        text: "If a lip that lifts too high is the main cause, the options are different. Muscle-relaxing injections and lip repositioning surgery are both used for that, and they usually involve another specialist. A tall upper jaw can mean orthodontic or jaw-surgery planning. Removing gum alone in those cases would leave you with short-looking teeth, so Dr. Chordia would refer you instead.",
      },
      {
        type: "p",
        text: "The reason for an honest assessment is simple: you only do what will help. If you'd like some general background first, Cleveland Clinic has a clear page on [gingivectomy](https://my.clevelandclinic.org/health/treatments/24749-gingivectomy), which is the removal of excess gum tissue.",
      },
      {
        type: "h2",
        text: "Healing After Gum Contouring: What to Expect",
      },
      {
        type: "p",
        text: "The gum can look swollen, and a little white or red, for the first few days. Soft, cool foods help, and gentle cleaning keeps the area from getting irritated. Many people are back to their routine soon after, but it depends on how much was done.",
      },
      {
        type: "p",
        text: "The final gum line takes a few weeks to show. In some cases the gum edge can drift back down a little as it heals. That's why Dr. Chordia checks it again and doesn't call it finished on the day.",
      },
      {
        type: "p",
        text: "Results tend to last when the cause was gum position and you keep your gums healthy. They depend on the case, so ask about your own at the consultation.",
      },
      {
        type: "h2",
        text: "When You Do Not Need Treatment for a Gummy Smile",
      },
      {
        type: "p",
        text: "You don't need to do anything if the gum showing doesn't bother you. A smile with some gum in it is still a smile. Candid photos tend to catch everyone at their least rehearsed, and that's often all it is.",
      },
      {
        type: "p",
        text: "Hold off if your gums are red, swollen or bleeding. Overgrowth from inflammation needs sorting out first, and a thorough clean may be all you need. If you're not sure which smile fix suits you, our guide to [whitening, bonding or veneers](/blog/cosmetic-dentist-vashi-whitening-bonding-veneers/) starts from what you see in the mirror.",
      },
      {
        type: "p",
        text: "And if the thing pulling at your upper lip is a thick band of tissue between lip and gum, that's a separate question. Our [frenectomy guide](/blog/frenectomy-tongue-tie-lip-tie-vashi/) covers it.",
      },
      {
        type: "h2",
        text: "Book a Gummy Smile Consultation in Vashi",
      },
      {
        type: "p",
        text: "Biolume Dental Care is at Shop No. 10, 2nd Floor, Aykon, Palm Beach Road, above Zudio/Reliance Digital, Phase 2, Sector 19D, Vashi, Navi Mumbai 400703. We're open Monday to Saturday, 10 AM to 8 PM, and Sundays by appointment. Use the form on our [contact page](/contact/) to book, and tell us what you notice when you smile. Cost depends on the case, and the exact figure is confirmed after the consultation.",
      },
    ],
    faqs: [
      {
        q: "What causes a gummy smile?",
        a: "Gum sitting too low on the teeth, an upper lip that lifts high, a short lip or tall upper jaw, gum overgrowth and worn teeth are the usual ones. Many people have more than one. A check of your smile tells you which applies.",
      },
      {
        q: "Does gum contouring hurt?",
        a: "The gum is numbed first, so you should feel pressure and not pain during the procedure. Some tenderness for a few days afterwards is normal. Soft foods and the aftercare advice you're given help.",
      },
      {
        q: "Is gum contouring permanent?",
        a: "Results tend to last when the cause was gum position and your gums stay healthy. In some cases the gum edge drifts back down a little during healing, so a follow-up visit is part of the plan.",
      },
      {
        q: "Is laser gum contouring better than surgery with a scalpel?",
        a: "The laser seals as it cuts, so for suitable cases there is often less bleeding and no stitches. A scalpel is still a sound option. Dr. Chordia recommends the tool that suits your case.",
      },
      {
        q: "Can a gummy smile be fixed without surgery?",
        a: "Sometimes. If your teeth are short, bonding or veneers can lengthen them. If the lip is the cause, injections are one option. Whether you need anything at all depends on the cause.",
      },
      {
        q: "How long does recovery take after gum contouring?",
        a: "The gum usually feels settled within a week or two, though the final shape takes a few weeks to show. How long depends on how much gum was reshaped.",
      },
      {
        q: "What does gummy smile treatment cost in Navi Mumbai?",
        a: "It depends on how many teeth are involved and whether bone needs attention. The exact cost varies from patient to patient, and Dr. Chordia confirms it after the consultation.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
