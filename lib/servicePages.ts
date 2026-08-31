export interface ServiceSection {
  heading: string;
  body: string;
  bullets?: string[];
  /** Optional "Learn more" link rendered under the section, e.g. a cross-link to the Laser Dentistry page. */
  link?: { label: string; href: string };
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceStep {
  title: string;
  body: string;
}

export interface ServiceAftercare {
  intro: string;
  items: string[];
}

export interface ServiceHighlightCard {
  heading: string;
  items: string[];
}

export interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroPhotographer: string;
  heroPhotographerUrl: string;
  h1: string;
  /** One or two sentences shown directly under the H1 in the hero. */
  tagline?: string;
  intro: [string, string];
  /** "Signs you may need this" / "Where we use this" card shown beside the intro. */
  highlightCard?: ServiceHighlightCard;
  /** Numbered walk-through of a typical appointment. */
  appointmentSteps?: ServiceStep[];
  aftercare?: ServiceAftercare;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  ctaHeading: string;
  ctaBody: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: "dental-implants-vashi-navi-mumbai",
    title: "Dental Implants",
    metaTitle: "Dental Implants in Vashi, Navi Mumbai | Biolume Dental Care",
    metaDescription:
      "Permanent tooth replacement with 3D-planned implants at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai. Led by Dr. Dishani Jain. Book a consultation.",
    heroImage:
      "https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageAlt:
      "Dentist preparing for a dental implant procedure at a modern clinic in Vashi, Navi Mumbai",
    heroPhotographer: "Jonathan Borba",
    heroPhotographerUrl: "https://www.pexels.com/@jonathanborba",
    h1: "Dental Implants in Vashi, Navi Mumbai",
    tagline:
      "A titanium root, a custom crown, and a plan built on a 3D scan of your own jaw before we ever pick up a drill.",
    intro: [
      "A dental implant is a titanium post placed directly into your jawbone to replace a missing tooth root. Once the bone fuses around it — a process called osseointegration — a crown is fixed on top, giving you a tooth that functions and looks like the natural one that was lost. At Biolume Dental Care in Vashi, every implant placement is preceded by 3D CBCT imaging so we know exactly what we are working with before the procedure begins.",
      "Dr. Dishani Jain has completed Fellowship-level training in dental implantology and has been placing implants for six years at our clinic in Sector 19B, Vashi, Navi Mumbai. Whether you need a single tooth replaced or a full arch supported by implants, the process at Biolume is the same: plan thoroughly, operate precisely, and give you a clear picture of what to expect at every stage.",
    ],
    highlightCard: {
      heading: "Signs You May Need an Implant",
      items: [
        "A missing tooth you've been living around rather than replacing",
        "A loose, uncomfortable denture or bridge",
        "Difficulty chewing comfortably on one side of your mouth",
        "Bone loss starting to show where a tooth used to be",
        "A gap you find yourself covering when you smile",
      ],
    },
    appointmentSteps: [
      {
        title: "3D scan & planning",
        body: "A CBCT scan maps your bone density and the exact space available, so the angle, depth, and size of the implant are decided before anyone touches a drill.",
      },
      {
        title: "Implant placement",
        body: "The titanium post is placed under local anaesthesia. Most patients go home the same day and are back to normal activity within a day or two.",
      },
      {
        title: "Healing (osseointegration)",
        body: "Over two to four months, bone grows around the implant and locks it in place. This is the part that takes patience — there's little to do but let it heal.",
      },
      {
        title: "Crown fitting",
        body: "Once integration is confirmed, a custom, colour-matched crown is fitted and your bite is adjusted until it feels natural.",
      },
    ],
    aftercare: {
      intro: "What you do in the days after placement affects how smoothly the implant integrates.",
      items: [
        "Mild swelling or tenderness for two to three days is normal and settles with the pain relief you're given.",
        "Stick to soft food for the first few days, and avoid chewing directly on the implant site until cleared.",
        "Keep the area clean with gentle brushing — a dislodged clot or trapped debris is the most avoidable cause of delayed healing.",
        "Avoid smoking during healing; it's one of the biggest controllable risks to implant success.",
        "Come in for the follow-up visit even if everything feels fine — it's how we confirm integration before moving to the crown.",
      ],
    },
    sections: [
      {
        heading: "How Dental Implants Work",
        body: "The implant procedure happens in stages. First, the titanium post is placed into the jawbone under local anaesthesia. Over the next two to four months, the bone grows around the implant in a natural process — you go home the same day and resume normal activity within a day or two. Once the implant has integrated, an abutment (a small connector) is attached, and a custom crown is fitted on top. The crown is colour-matched and shaped to blend with your surrounding teeth.",
        bullets: [
          "Stage 1: 3D CBCT imaging and treatment planning",
          "Stage 2: Implant placement under local anaesthesia",
          "Stage 3: Healing and osseointegration (2–4 months)",
          "Stage 4: Crown placement and bite adjustment",
        ],
      },
      {
        heading: "Why 3D CBCT Imaging Changes the Outcome",
        body: "A standard dental X-ray shows teeth in two dimensions. A 3D CBCT scan gives us a full volumetric picture — bone density, the location of nerve canals, remaining tooth roots, and the exact depth and width available for the implant. At Biolume Dental Care in Vashi, we use CBCT imaging on every implant case. This means we can identify whether bone grafting is needed before placing the implant, plan the exact angle and depth in advance, and avoid surprises during surgery. The result is a procedure that is safer, faster, and more predictable.",
      },
      {
        heading: "Single Tooth, Multiple Teeth, and Full-Arch Options",
        body: "Implants are not only for replacing one tooth. If you are missing several teeth in a row, two or three implants can support a bridge, avoiding the need to file down healthy adjacent teeth. If most or all of your teeth are missing, four to six implants can anchor a full set of fixed teeth — often called All-on-4 or All-on-6. At Biolume, we discuss which configuration makes clinical and practical sense for you, not which one involves the most treatment.",
      },
      {
        heading: "When an Implant Is Not the Right Answer",
        body: "Implants are not suitable for everyone. Patients whose jawbone has resorbed significantly may need a bone graft first — this adds time and cost. Uncontrolled diabetes, active gum disease, and heavy smoking all reduce implant success rates, so these need to be addressed before placement. Children and teenagers whose jaws are still developing are not candidates. If an implant is not appropriate for you, Dr. Jain will explain why and what the alternatives are — fixed bridges, partial dentures, or other options — rather than pressing forward when conditions are not right.",
      },
      {
        heading: "What to Expect at Biolume Dental Care, Vashi",
        body: "Your first implant consultation at our Vashi clinic involves a clinical exam, a review of your dental and medical history, and — if indicated — the CBCT scan. We walk you through the imaging together so you understand what we found. Treatment planning is discussed openly: how many visits, what each stage involves, healing time, and what the crown will look like. Pricing is discussed at the consultation; there are no hidden charges. Post-placement, you receive written aftercare instructions and direct contact for any questions during the healing period.",
      },
      {
        heading: "Laser Support at the Implant Stage",
        body: "Laser dentistry is not the main event in implant treatment, but it plays a supporting role at a few points: shaping and uncovering gum tissue at the extraction site before placement, and — if an implant later shows early signs of inflammation around it — decontaminating the site without cutting into healthy tissue. It's used only where it adds a genuine advantage over the conventional approach.",
        link: {
          label: "See where else we use laser treatment",
          href: "/services/laser-dentistry-vashi-navi-mumbai",
        },
      },
    ],
    faqs: [
      {
        q: "How long do dental implants last?",
        a: "With good oral hygiene and regular check-ups, implants can last 15–25 years or longer. The crown on top may need replacement earlier — typically after 10–15 years — due to normal wear, but the implant itself is often a lifelong fixture. Success depends heavily on bone quality, the patient's general health, and how well the implant area is maintained.",
      },
      {
        q: "Are dental implants painful?",
        a: "The placement is done under local anaesthesia, so you should not feel pain during the procedure — pressure and vibration, yes, but not sharp pain. Post-procedure discomfort is typically mild to moderate and manageable with over-the-counter pain medication for two to three days. Most patients are surprised by how tolerable the recovery is compared to what they expected.",
      },
      {
        q: "How long does the full treatment take?",
        a: "From placement to the final crown, the process usually takes three to six months — the bulk of that time is the healing period between stages, not active treatment. If bone grafting is required, add another three to four months. We give you a realistic timeline at the consultation so you can plan accordingly.",
      },
      {
        q: "Do I need a bone graft before getting an implant?",
        a: "Not always. Whether you need a bone graft depends on how much bone remains at the site of the missing tooth. The 3D CBCT scan we take at Biolume shows this precisely. If the bone volume and density are adequate, no graft is needed. If there is a deficiency, we discuss whether a simultaneous graft (done at the same time as placement) or a staged graft (done months before) is appropriate.",
      },
      {
        q: "Can I get dental implants if I smoke?",
        a: "Smoking significantly increases the risk of implant failure — studies consistently show lower success rates in smokers. That said, smoking is not an absolute contraindication. If you smoke, we will have an honest conversation about the specific risk increase, and whether quitting or reducing before and after placement is feasible. The decision is yours, made with accurate information.",
      },
      {
        q: "What does dental implant treatment cost in Navi Mumbai?",
        a: "Implant costs vary based on the number of implants, whether bone grafting or additional procedures are needed, and the crown material chosen. We do not publish prices online because individual cases differ significantly. Pricing is discussed in full at the consultation, so you leave with a clear understanding of the total investment before committing to any treatment.",
      },
    ],
    ctaHeading: "Ready to discuss dental implants?",
    ctaBody:
      "Book a consultation at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai. Dr. Dishani Jain will review your scans with you and walk you through exactly what your case involves.",
  },

  {
    slug: "laser-dentistry-vashi-navi-mumbai",
    title: "Laser Dentistry",
    metaTitle: "Laser Dentistry in Vashi, Navi Mumbai | Biolume Dental Care",
    metaDescription:
      "Gum treatments and minor dental procedures using soft-tissue laser at Biolume Dental Care, Vashi, Navi Mumbai. Less bleeding, faster healing. Book now.",
    heroImage:
      "https://images.pexels.com/photos/4269691/pexels-photo-4269691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageAlt:
      "Dental professional using laser treatment equipment at a clinic in Vashi, Navi Mumbai",
    heroPhotographer: "Cedric Fauntleroy",
    heroPhotographerUrl: "https://www.pexels.com/@cedric-fauntleroy-3306586",
    h1: "Laser Dentistry in Vashi, Navi Mumbai",
    tagline:
      "One instrument, used wherever it genuinely outperforms the conventional alternative — from whitening to healing support after surgery.",
    intro: [
      "Dental laser treatment uses a focused beam of light energy to treat soft tissue — gums, the inner lining of the mouth, and in some cases, early-stage cavities — with considerably more precision than a conventional scalpel. The laser simultaneously cuts and seals, which means less bleeding during the procedure, less swelling afterwards, and in most cases no stitches. At Biolume Dental Care in Vashi, laser dentistry is one of the specialties Dr. Dishani Jain holds Fellowship training in.",
      "The most common misconception about dental lasers is that they are a marketing add-on used to charge more for standard procedures. That is not how we use laser treatment at our Sector 19B, Vashi clinic. Laser is offered when it provides a clinically meaningful advantage over the conventional alternative — better healing, less post-procedure discomfort, or a more precise outcome. If the conventional method is equally good or better, we use that instead.",
    ],
    highlightCard: {
      heading: "Where We Use Laser Treatment",
      items: [
        "Teeth whitening — laser-activated in-chair whitening for faster, more even results",
        "Smile makeovers — gum contouring and reshaping as part of a full redesign",
        "Crown lengthening — exposing more tooth structure with minimal bleeding",
        "Gum depigmentation — evening out dark melanin patches on the gums",
        "Ulcer healing — speeding recovery from mouth ulcers and soft-tissue sores",
        "TMJ therapy — easing jaw joint pain and muscle tension",
        "Extraction & implant healing — supporting faster, more comfortable recovery",
        "Bacterial decontamination — sterilising infected gum pockets before they progress",
        "Root canal treatment — disinfecting canals that hand instruments can't fully reach",
      ],
    },
    appointmentSteps: [
      {
        title: "Assessment",
        body: "We examine the area and confirm laser genuinely is the better tool for what you need — not the default option because it sounds advanced.",
      },
      {
        title: "Comfort first",
        body: "Most laser procedures need little to no anaesthesia. Where it's needed, the area is numbed before we begin.",
      },
      {
        title: "The laser procedure",
        body: "The laser cuts and seals tissue at the same time, so bleeding stays minimal and most procedures finish in well under an hour.",
      },
      {
        title: "Same-visit recovery check",
        body: "You leave with clear aftercare instructions and, for most procedures, no stitches to think about afterwards.",
      },
    ],
    aftercare: {
      intro: "Laser recovery is typically shorter and gentler than conventional surgery, but a few habits protect the result.",
      items: [
        "Stick to soft, lukewarm food for the first 24 hours if soft tissue was treated.",
        "Avoid spicy, acidic, or very hot food until any sensitivity settles.",
        "Keep the area clean with gentle brushing — skip vigorous rinsing on day one.",
        "Mild warmth or tingling for a day or two is normal; pain that worsens rather than settles is not — call the clinic if that happens.",
      ],
    },
    sections: [
      {
        heading: "What Dental Laser Treatment Can Address",
        body: "Soft-tissue dental lasers are most effective for procedures involving the gums and oral mucosa. Common uses at Biolume include gum contouring for smile design, treatment of gum disease (removing infected tissue and stimulating reattachment), frenectomy (releasing a tongue-tie or lip-tie), treating ulcers and other soft tissue lesions, and crown lengthening. In select cases, the laser can also be used for cavity preparation, reducing or eliminating the need for drilling.",
        bullets: [
          "Gum contouring and crown lengthening",
          "Gum disease treatment and pocket sterilisation",
          "Frenectomy (tongue-tie, lip-tie release)",
          "Oral ulcer treatment and tissue biopsies",
          "Cavity preparation in select early-stage cases",
        ],
      },
      {
        heading: "How Laser Compares to Conventional Gum Treatment",
        body: "Traditional gum surgery uses a scalpel to cut and remove diseased tissue, followed by sutures to close the wound. Recovery involves swelling, soreness, and usually five to seven days of restricted diet and activity. Laser gum treatment achieves a similar clinical result but removes tissue more precisely, with minimal bleeding during the procedure. Because the wound is smaller and effectively sealed by the laser itself, recovery is faster — typically two to three days — and stitches are usually not required. For patients who are anxious about surgery, the difference in experience is significant.",
      },
      {
        heading: "Laser Dentistry and Gum Disease",
        body: "In the treatment of periodontitis (gum disease), laser can be used after scaling and root planing to sterilise the pocket between the tooth and gum, remove diseased tissue, and stimulate regrowth of healthy attachment. This reduces the depth of the periodontal pocket more effectively than scaling alone in many cases. At Biolume Dental Care, Vashi, we assess the severity of your gum disease before recommending laser as an adjunct — it is not routine for every patient, only where it adds value.",
      },
      {
        heading: "When Laser Is Not the Better Option",
        body: "Laser treatment is not universally superior to conventional dentistry. It does not replace orthodontic treatment, implant surgery, or complex restorative work. For deep bone surgery, periodontal flap procedures, or procedures that require working below the gum line at significant depth, a conventional surgical approach is often more appropriate. Patients on anticoagulant medication or with certain systemic conditions may also not be suitable candidates. Dr. Jain will be direct with you about when laser adds genuine value and when it does not.",
      },
      {
        heading: "Laser Dentistry at Biolume, Vashi: What the Visit Looks Like",
        body: "Laser procedures at our Vashi clinic are typically shorter than their conventional equivalents. A gum contouring session, for instance, takes 30 to 60 minutes for the full smile line, with minimal discomfort and no need for sutures. You can usually return to your regular diet within a day. We explain what the laser will do, what you will feel (usually warmth or mild pressure), and what to expect during recovery. Because Dr. Jain holds Fellowship-level training in laser dentistry, there is no outsourcing — your treating dentist is doing the procedure.",
      },
    ],
    faqs: [
      {
        q: "Is laser dental treatment painful?",
        a: "Most laser procedures are done under local anaesthesia, so pain during the procedure is minimal. For very minor procedures like ulcer treatment or tongue-tie release in adults, the laser itself often requires no anaesthetic at all. Post-procedure, patients typically describe a mild sensitivity rather than pain — considerably less than after conventional soft tissue surgery.",
      },
      {
        q: "How long does recovery take after laser gum treatment?",
        a: "For most laser gum procedures, recovery is two to three days — compared to five to seven for conventional surgery. Swelling and bleeding are minimal, and you can usually resume a normal diet within 24 to 48 hours. You will receive specific aftercare instructions based on the procedure.",
      },
      {
        q: "Is laser dentistry safe?",
        a: "Yes. Dental lasers have been used clinically for over three decades and have a strong safety record when used by trained practitioners. The laser used at Biolume operates within approved parameters for soft-tissue dental procedures. Protective eyewear is worn by both the patient and the dental team during any laser procedure.",
      },
      {
        q: "Can laser treatment be used for children?",
        a: "Laser is well-suited for children in certain situations — frenectomy (tongue-tie or lip-tie release in infants and young children) is one of the most common uses. The procedure is brief, causes minimal bleeding, and heals quickly. For older children, laser can also be used for gum treatments and cavity preparation in select cases.",
      },
      {
        q: "How do I know if I need laser treatment?",
        a: "You would not typically ask for laser treatment specifically — you would come in with a concern (gum disease, a lip-tie, an ulcer that is not healing, wanting a gum-line adjustment for your smile) and we would assess whether laser is the right tool for that problem. It is recommended only when it provides a clinical advantage. If it does not, we say so.",
      },
    ],
    ctaHeading: "Want to know if laser is right for you?",
    ctaBody:
      "Book a consultation at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai. Dr. Dishani Jain will assess your situation and give you a straightforward recommendation.",
  },

  {
    slug: "smile-makeover-vashi-navi-mumbai",
    title: "Smile Makeover",
    metaTitle: "Smile Makeover in Vashi, Navi Mumbai | Biolume Dental Care",
    metaDescription:
      "Custom smile makeovers with veneers, whitening, bonding, and gum contouring at Biolume Dental Care, Vashi, Navi Mumbai. Preview your result first. Book now.",
    heroImage:
      "https://images.pexels.com/photos/6812494/pexels-photo-6812494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageAlt:
      "Patient with a bright, natural smile after a smile makeover at a dental clinic in Vashi, Navi Mumbai",
    heroPhotographer: "Pavel Danilyuk",
    heroPhotographerUrl: "https://www.pexels.com/@pavel-danilyuk",
    h1: "Smile Makeover in Vashi, Navi Mumbai",
    tagline:
      "A planned combination of cosmetic and restorative work — previewed digitally before anything is touched.",
    intro: [
      "A smile makeover is a planned combination of cosmetic and restorative procedures aimed at changing the appearance of your teeth, gums, and overall smile. It is not one procedure — it might be veneers alone, or a combination of whitening, bonding, gum contouring, and orthodontics, depending on what your teeth actually need. At Biolume Dental Care in Vashi, we start every smile makeover by understanding what you dislike and what you want, then designing a treatment plan that addresses those specific things.",
      "The part most patients appreciate is the digital preview. Before any treatment starts, Dr. Dishani Jain uses digital imaging to show you a simulation of the expected result — what the veneers will look like, how the gum line will sit, what happens to the overall proportions. This is not a binding guarantee of outcome, but it is a meaningful starting point that lets you direct the design rather than simply accept whatever we propose. Our Sector 19B, Vashi clinic treats smile design as a collaboration, not a prescription.",
    ],
    highlightCard: {
      heading: "Signs a Smile Makeover Could Help",
      items: [
        "Chipped, worn, or unevenly shaped front teeth",
        "Yellowing that whitening alone hasn't fixed",
        "Gaps or slight crowding you'd rather mask than move with braces",
        "A gummy smile or an uneven gum line",
        "Teeth that look short after wear or old dental work",
      ],
    },
    appointmentSteps: [
      {
        title: "Consultation & digital preview",
        body: "We photograph your smile and simulate the proposed changes digitally before any treatment starts, so you can ask for adjustments up front.",
      },
      {
        title: "Treatment planning",
        body: "Once you approve the direction, we sequence the actual procedures — whitening, veneers, bonding, or gum contouring — in the order that gives the best result.",
      },
      {
        title: "Preparation & fitting",
        body: "Teeth are prepared as needed, and veneers or bonding are shaped and colour-matched chairside or from a lab impression.",
      },
      {
        title: "Final review",
        body: "We check the bite, shade, and overall look together before you leave, and make small adjustments on the spot if anything's off.",
      },
    ],
    aftercare: {
      intro: "A smile makeover's result holds up better with a few adjustments in the first couple of weeks.",
      items: [
        "Mild sensitivity to hot or cold after whitening or veneer prep usually fades within a few days.",
        "Avoid staining foods and drinks — coffee, red wine, turmeric — for 48 hours after whitening.",
        "Composite bonding can chip under hard or sticky foods; treat it gently, especially early on.",
        "Wear any retainer prescribed if orthodontics was part of the plan — skipping it is the most common reason results shift.",
        "Keep your six-month check-ups; veneers and bonding are inspected as part of the routine visit.",
      ],
    },
    sections: [
      {
        heading: "What a Smile Makeover Can Include",
        body: "The procedures that go into a smile makeover depend entirely on what your current smile looks like and what you want it to look like. Common components include:",
        bullets: [
          "Teeth whitening — professional-grade, in-clinic or take-home",
          "Porcelain or composite veneers — thin covers that change shape, colour, and surface texture",
          "Composite bonding — direct resin applied and sculpted to fill chips, gaps, or irregularities",
          "Gum contouring — reshaping an uneven or excessive gum line using laser",
          "Orthodontics — correcting alignment before applying veneers when spacing is a factor",
          "Crown lengthening — exposing more tooth structure when teeth appear short",
        ],
      },
      {
        heading: "Porcelain Veneers vs Composite Bonding",
        body: "Veneers and composite bonding are both used to change the appearance of front teeth, but they differ in several ways. Porcelain veneers are made in a lab from ceramic material — they are more durable, stain-resistant, and lifelike, but they require some enamel reduction and cannot be reversed. Composite bonding uses resin applied directly to the tooth surface — it requires less or no tooth reduction, can be repaired easily, and costs less, but stains more readily and typically needs replacing after five to eight years. Both options are available at Biolume Dental Care, Vashi. The right choice depends on your aesthetic goals, how much your teeth need to change, and how you want to balance cost against longevity.",
      },
      {
        heading: "Digital Preview Before Any Treatment",
        body: "One of the most common frustrations in cosmetic dentistry is receiving a result that was never properly discussed. At Biolume, the design conversation happens before any treatment begins. Using digital photography and imaging software, we create a visual simulation of the proposed changes — showing you the expected tooth shape, shade, and gum-line position. You can ask for adjustments. This does not eliminate the possibility of minor variations once the physical work is done, but it significantly reduces the gap between expectation and outcome.",
      },
      {
        heading: "Gum Contouring as Part of Smile Design",
        body: "The shape and position of your gum line has as much influence on how your smile looks as the teeth themselves. A high or uneven gum line can make teeth appear short, uneven, or too gummy. Gum contouring uses the dental laser to remove and reshape excess gum tissue precisely, exposing more of the tooth surface and creating an even margin. At Biolume Dental Care in Vashi, this is done in the same appointment as other cosmetic procedures where possible, reducing the total number of visits. Recovery is typically minimal — one to two days of mild sensitivity. Crown lengthening and in-chair whitening in a makeover plan are also frequently laser-assisted for the same reason: precision with less bleeding and downtime.",
        link: {
          label: "More on laser dentistry at Biolume",
          href: "/services/laser-dentistry-vashi-navi-mumbai",
        },
      },
      {
        heading: "Who Should Not Rush into a Smile Makeover",
        body: "Smile makeovers are not always the right starting point. If there is active gum disease, untreated decay, or significant bite issues, these need to be resolved first — cosmetic work placed over compromised foundations will not last. Patients who are still deciding whether they want major changes, or who have a temporary life situation (pregnancy, active orthodontic treatment, significant weight change) are often better served by waiting. We will tell you honestly if a phased approach makes more clinical sense than doing everything at once.",
      },
    ],
    faqs: [
      {
        q: "How long does a smile makeover take?",
        a: "It depends on how many procedures are involved. Whitening alone can be done in a single appointment. A veneer case for six to eight teeth typically takes two to three visits over two to four weeks. If orthodontics is part of the plan, that extends the timeline to several months. At the planning consultation, we give you a realistic timeline based on your specific treatment plan.",
      },
      {
        q: "Are veneers permanent?",
        a: "Porcelain veneers require a small amount of enamel to be removed from the tooth surface, which means the process is not fully reversible — the tooth will always need some form of coverage. The veneers themselves typically last 10–15 years before needing replacement. Composite veneers and bonding do not require enamel removal in most cases and can be reversed or replaced without issue.",
      },
      {
        q: "Will veneers look natural?",
        a: "Done well, veneers are indistinguishable from natural teeth. They are fabricated from ceramic material that reflects light in a similar way to enamel. The colour, translucency, and shape are customised to your face and existing teeth. At Biolume, we aim for results that look like a noticeably better version of your own teeth — not a row of identical white tiles.",
      },
      {
        q: "Can I get a smile makeover if I have crooked teeth?",
        a: "Yes, but the approach depends on the severity. Minor crowding can sometimes be addressed with veneers directly — the veneers are shaped to mask slight misalignment. For more significant crowding or bite issues, orthodontic treatment first gives a better and longer-lasting result. We assess this at the planning stage and recommend the sequence that makes clinical sense.",
      },
      {
        q: "How much does a smile makeover cost in Navi Mumbai?",
        a: "Cost varies significantly depending on what is included — a single tooth bonding repair is a very different investment from a full veneer set combined with gum contouring. We do not publish prices because treatment plans are always customised. Pricing is discussed in full at the planning consultation after we understand exactly what you want and what your teeth need.",
      },
    ],
    ctaHeading: "Start your smile design consultation.",
    ctaBody:
      "Visit Biolume Dental Care at Sector 19B, Vashi, Navi Mumbai. We will map out your smile goals, run the digital preview, and build a plan that fits both your teeth and your timeline.",
  },

  {
    slug: "orthodontics-braces-aligners-vashi-navi-mumbai",
    title: "Orthodontics — Braces & Clear Aligners",
    metaTitle: "Braces & Clear Aligners in Vashi, Navi Mumbai | Biolume Dental",
    metaDescription:
      "Braces and clear aligners planned with digital scans at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai. No messy impressions. Led by Dr. Dishani Jain.",
    heroImage:
      "https://images.pexels.com/photos/28407749/pexels-photo-28407749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageAlt:
      "Close-up of orthodontic braces on teeth being examined at a dental clinic in Vashi, Navi Mumbai",
    heroPhotographer: "Laura Beauty Designer",
    heroPhotographerUrl: "https://www.pexels.com/@laura-beauty-designer-brasil",
    h1: "Braces & Clear Aligners in Vashi, Navi Mumbai",
    intro: [
      "Orthodontic treatment straightens teeth and corrects bite issues by applying controlled, sustained pressure over time. The two main systems are traditional braces — brackets bonded to the teeth with wires threaded through them — and clear aligners, which are removable transparent trays changed every one to two weeks. Both work. The difference is in visibility, comfort, treatment discipline, and which cases each handles best. At Biolume Dental Care in Vashi, we offer both and help you decide based on your actual situation, not which option has a higher margin.",
      "What has changed in recent years is how treatment is planned. At our Sector 19B, Vashi clinic, we use digital intraoral scanning rather than traditional impression trays to map your teeth. Dental impressions involve filling a tray with putty-like material and holding it in your mouth for several minutes — uncomfortable, messy, and prone to distortion. A digital scan takes less than two minutes, creates a precise 3D model of your teeth, and is immediately available for treatment planning. The difference in patient experience is noticeable.",
    ],
    sections: [
      {
        heading: "Braces vs Clear Aligners: A Practical Comparison",
        body: "Both systems can treat most orthodontic problems, but each has genuine trade-offs:",
        bullets: [
          "Braces are fixed — they work continuously without depending on patient compliance; aligners require 20–22 hours of wear per day to work as planned",
          "Clear aligners are removable — you take them out to eat and brush, which makes oral hygiene easier; braces make cleaning more involved",
          "Aligners are nearly invisible; metal braces are visible, though tooth-coloured ceramic braces are less so",
          "Complex bite corrections, significant rotations, and vertical tooth movements are often handled more predictably with braces",
          "Aligners tend to be more comfortable day-to-day; braces can cause initial soreness and occasional irritation from brackets",
        ],
      },
      {
        heading: "Digital Scanning and Treatment Planning",
        body: "After the digital scan, we can show you a simulation of the expected movement at each stage of treatment and the projected final position. This is not a guarantee — biological variation means teeth do not always move exactly as planned — but it gives you a visual understanding of the process and a shared reference point for what we are working towards. The scan data is also used to fabricate aligners or guide bracket positioning with greater accuracy than traditional impressions allow.",
      },
      {
        heading: "How Long Does Orthodontic Treatment Take?",
        body: "Treatment duration depends on the complexity of the case. Mild spacing or crowding in adults can resolve in six to twelve months. Moderate cases typically take twelve to twenty-four months. More complex bite corrections — significant overjet, overbite, crossbite, or large crowding in multiple teeth — may take up to three years in some cases. We assess your specific situation at the initial consultation and give you an honest estimate. Monitoring appointments at Biolume Dental Care, Vashi are typically every four to eight weeks.",
      },
      {
        heading: "Retainers After Treatment",
        body: "Straightened teeth do not stay straight on their own. Once the active phase of treatment ends, retainers are needed to hold the teeth in their new positions while the surrounding bone stabilises. There are two types: removable retainers worn at night, and fixed retainers — thin wires bonded behind the front teeth. Most patients receive both. Skipping retainer wear is the most common reason teeth shift back after orthodontic treatment. We explain this clearly at the end of treatment and provide a retainer plan as part of your discharge.",
      },
      {
        heading: "When Orthodontics Alone Is Not Enough",
        body: "Some patients with bite issues have a skeletal component — where the position of the jaw itself, not just the teeth, is causing the problem. In growing patients, this can sometimes be addressed with growth-modifying appliances. In adults whose growth is complete, significant skeletal discrepancies may require orthognathic (jaw) surgery alongside orthodontics. This is relatively uncommon, but it is worth knowing that if your bite issue stems from jaw position rather than tooth position, orthodontics will improve things but may not fully correct them. We identify this early and refer when appropriate.",
      },
    ],
    faqs: [
      {
        q: "What is the right age to start orthodontic treatment?",
        a: "The ideal age for a first orthodontic assessment is around 7–8 years, when the first permanent molars and incisors have erupted and growth patterns can be evaluated. Active treatment with braces or aligners typically begins between 11 and 14 in children, when most permanent teeth are in place. Adults can be treated at any age — the mechanics are the same, though treatment may take slightly longer due to denser bone.",
      },
      {
        q: "Can I eat normally with braces?",
        a: "With braces, you need to avoid hard foods (hard bread, raw carrots, ice), sticky foods (chewing gum, certain candies), and anything that requires biting with force from the front teeth (corn on the cob, apples — cut them instead). These restrictions exist because hard foods can pop brackets off or bend wires. With clear aligners, you remove the trays to eat and drink anything other than plain water, so there are no food restrictions.",
      },
      {
        q: "Are clear aligners as effective as braces?",
        a: "For most mild to moderate cases, yes — the clinical outcomes are comparable. For more complex cases involving significant rotations, vertical movements, or skeletal components, braces typically produce more reliable results. The key variable with aligners is compliance: they only work when worn the required 20–22 hours per day. Patients who remove them frequently or forget to reinsert them will see slower or incomplete results.",
      },
      {
        q: "Do braces or aligners hurt?",
        a: "Both cause some discomfort in the first few days after each adjustment or new aligner tray — typically described as aching pressure, not sharp pain. This usually settles within 48 to 72 hours. New braces can cause irritation to the inner lips and cheeks until the soft tissues toughen up; wax applied over the brackets helps. Aligners cause less cheek irritation but the same aching pressure during active tooth movement.",
      },
      {
        q: "How often do I need check-up visits during treatment?",
        a: "For braces, monitoring appointments are typically every four to six weeks for wire adjustments. For aligners, the interval is usually six to eight weeks, as multiple trays are issued at once. These visits at Biolume Dental Care, Vashi are important — they let us assess progress, make adjustments to the plan if teeth are not moving as expected, and check that oral hygiene is being maintained.",
      },
    ],
    ctaHeading: "Ready to start your orthodontic assessment?",
    ctaBody:
      "Book a consultation at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai. We will scan your teeth digitally, assess your bite, and give you a clear picture of what treatment involves.",
  },

  {
    slug: "root-canal-treatment-vashi-navi-mumbai",
    title: "Root Canal Treatment",
    metaTitle: "Root Canal Treatment in Vashi, Navi Mumbai | Biolume Dental",
    metaDescription:
      "Pain-free root canal treatment with magnification and rotary instruments at Biolume Dental Care, Vashi, Navi Mumbai. Comfortable, high success rate. Book now.",
    heroImage:
      "https://images.pexels.com/photos/6627706/pexels-photo-6627706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageAlt:
      "Dentist performing a precise dental procedure with magnification at a clinic in Vashi, Navi Mumbai",
    heroPhotographer: "Kaboompics",
    heroPhotographerUrl: "https://www.pexels.com/@kaboompics",
    h1: "Root Canal Treatment in Vashi, Navi Mumbai",
    tagline:
      "Clears the infection out of the tooth and seals it shut, so extraction isn't the only option left on the table.",
    intro: [
      "Root canal treatment (also called endodontic treatment) removes infected or damaged pulp tissue from inside a tooth, cleans and shapes the root canals, and seals them to prevent reinfection. The tooth is then restored — usually with a crown — and can function normally for years. The procedure has a reputation for being painful that does not match the clinical reality: a properly anaesthetised root canal is no more uncomfortable than a routine filling. The pain patients associate with root canals is usually the infection before treatment, not the procedure itself.",
      "At Biolume Dental Care in Vashi, root canal treatment is performed with dental magnification and modern rotary nickel-titanium instruments. Magnification allows Dr. Dishani Jain to see the canal system clearly — locating all canals, including accessory ones that are easily missed with the naked eye — and to work more accurately inside a space that is only a millimetre or two wide. Rotary instruments clean and shape the canals faster and more precisely than manual files, reducing procedure time and increasing the likelihood of complete cleaning.",
    ],
    highlightCard: {
      heading: "Signs You May Need a Root Canal",
      items: [
        "Pain that throbs on its own, without anything touching the tooth",
        "A jolt of pain when you bite or chew on one spot",
        "Hot or cold sensitivity that lingers well after the drink or food is gone",
        "A tender bump or pimple on the gum near a specific tooth",
        "One tooth visibly greying or darkening next to its neighbours",
      ],
    },
    appointmentSteps: [
      {
        title: "Exam and imaging",
        body: "A clinical check plus an X-ray tell us whether the pulp is actually the problem, and map out how many canals we're dealing with before any decision gets made.",
      },
      {
        title: "Getting you numb",
        body: "We anaesthetise the tooth and the tissue around it, and check in with you before starting — nothing proceeds until you're comfortable.",
      },
      {
        title: "Cleaning and shaping the canals",
        body: "Under magnification, the infected pulp comes out and each canal is measured, cleaned, and shaped with rotary nickel-titanium instruments.",
      },
      {
        title: "Sealing the tooth",
        body: "The cleaned canals are packed with gutta-percha to keep bacteria from getting back in, and the tooth is closed with a temporary filling.",
      },
      {
        title: "Crown fitting",
        body: "A separate, shorter visit within four to six weeks fits the permanent crown — the tooth needs that protection since it's more brittle once root-treated.",
      },
    ],
    aftercare: {
      intro: "The weeks right after treatment decide whether the tooth stays protected for the long run.",
      items: [
        "Some tenderness for a couple of days is expected and usually eases with the pain relief you're prescribed.",
        "Keep chewing on the other side until the permanent crown or filling is in place.",
        "Don't skip the crown appointment — an unprotected root-treated tooth is how most of these end up cracking later.",
        "If the discomfort is getting worse instead of fading, or you notice swelling, that's worth a call rather than waiting it out.",
      ],
    },
    sections: [
      {
        heading: "When Root Canal Treatment Is Needed",
        body: "A root canal becomes necessary when the dental pulp — the soft tissue inside the tooth containing nerves and blood vessels — becomes infected or irreversibly inflamed. Common causes include:",
        bullets: [
          "Deep cavity that has reached the pulp",
          "Cracked tooth that has allowed bacteria to enter",
          "Trauma to the tooth — a knock that damages the pulp even without a visible fracture",
          "Repeated dental procedures on the same tooth, which can progressively inflame the pulp",
          "Advanced gum disease reaching the root tip",
        ],
      },
      {
        heading: "When You Do Not Need a Root Canal",
        body: "Not every toothache requires endodontic treatment. Pain from a cavity that has not yet reached the pulp can often be treated with a filling. Sensitivity to temperature that resolves within a few seconds is usually reversible pulpitis — the pulp is inflamed but can recover, and a filling or crown is the appropriate treatment. Persistent sensitivity, spontaneous pain, pain that lingers for more than fifteen seconds after the stimulus is removed, or swelling and a foul taste are signs that the pulp is unlikely to recover. The distinction between reversible and irreversible pulpitis is important because unnecessary root canals are a real occurrence in dentistry. At Biolume, we assess carefully before recommending endodontic treatment.",
      },
      {
        heading: "How the Procedure Works",
        body: "The tooth is fully anaesthetised before treatment begins. A rubber dam is placed to isolate the tooth and maintain a sterile field. Under magnification, access is made through the crown of the tooth to reach the pulp chamber. The canals are identified, measured using an electronic apex locator, and cleaned using rotary instruments with copious irrigation. Once cleaned and shaped, the canals are filled with a material called gutta-percha and sealed. The tooth is then temporised until a permanent crown can be placed — this is usually the next appointment. At Biolume Dental Care, Vashi, single-visit root canal is possible for many cases, meaning cleaning, shaping, and obturation in one session.",
      },
      {
        heading: "Why Magnification Improves the Outcome",
        body: "The root canal system is not simple. Teeth can have two, three, or more canals — some very narrow and curved, some with branches (lateral canals) that are invisible to the naked eye. A missed canal left untreated is a common cause of root canal failure. Dental magnification — loupes or an operating microscope — allows the treating dentist to see the floor of the pulp chamber in detail, identify extra canals that would otherwise be missed, and navigate curved canals without perforation. At Biolume, magnification is standard for all endodontic procedures, not an optional upgrade.",
      },
      {
        heading: "What Happens After Root Canal Treatment",
        body: "After the procedure, some mild soreness for two to three days is normal — the periapical tissues around the root tip need time to settle. This is managed with over-the-counter pain relief in most cases. A temporary filling is placed on the day of treatment; a crown is usually recommended within four to six weeks to protect the tooth from fracture, as root-treated teeth are more brittle than vital ones. Without a crown, a root-treated back tooth is at significant risk of cracking. We explain this clearly so the restoration does not get overlooked.",
      },
      {
        heading: "Laser-Assisted Disinfection",
        body: "Rotary instruments clean the canal walls mechanically, but the canal system has microscopic side branches a file physically cannot reach. In select cases, a laser is used after shaping to disinfect the canal more thoroughly — it doesn't replace the mechanical cleaning, it backs it up in the spots instruments can't get to.",
        link: {
          label: "More on laser dentistry at Biolume",
          href: "/services/laser-dentistry-vashi-navi-mumbai",
        },
      },
    ],
    faqs: [
      {
        q: "Does root canal treatment hurt?",
        a: "No, when the tooth is properly anaesthetised. The area is numbed before treatment begins, and the procedure itself should be painless — you may feel pressure, vibration, and the sensation of liquid irrigation, but not pain. In cases where there is an active acute infection, the local anaesthetic may take longer to work fully; in these situations we sometimes prescribe antibiotics first to reduce the acute infection before treating the tooth. Post-procedure soreness is mild to moderate and typically resolves in two to three days.",
      },
      {
        q: "How long does root canal treatment take?",
        a: "A single-visit root canal at Biolume Dental Care, Vashi, typically takes 60 to 90 minutes. Complex cases — teeth with curved canals, calcified canals, or multiple roots — may require two visits of 45 to 60 minutes each. The crown fitting is a separate appointment.",
      },
      {
        q: "What is the success rate of root canal treatment?",
        a: "The published success rate for root canal treatment in teeth with no previous endodontic work is 85–95% over a 10-year period, depending on the tooth type and the reason for treatment. Retreatment of a previously root-filled tooth has a somewhat lower success rate. Success depends on complete canal cleaning, thorough obturation, and timely placement of a good-quality crown afterwards.",
      },
      {
        q: "Is it better to extract the tooth instead?",
        a: "In most cases, saving the natural tooth through root canal treatment is preferable to extraction. A natural tooth root maintains jaw bone, distributes bite forces properly, and does not require replacement with an implant or bridge. Extraction is the right choice when the tooth is non-restorable — severely fractured, with extensive bone loss, or with a root condition that cannot be treated endodontically. We assess this honestly and discuss the options if both are on the table.",
      },
      {
        q: "Will I need a crown after root canal treatment?",
        a: "For back teeth (molars and premolars), a crown is strongly recommended after root canal treatment. These teeth carry heavy chewing loads and are prone to fracture once the pulp is removed, as the tooth becomes more brittle. For front teeth, a crown may or may not be needed depending on how much tooth structure remains. We discuss this at the time of treatment planning.",
      },
    ],
    ctaHeading: "In pain, or just need a second opinion?",
    ctaBody:
      "Biolume Dental Care is at Sector 19B, Vashi, Navi Mumbai. Same-day appointments are available for acute pain. Dr. Dishani Jain will diagnose, explain your options, and let you decide.",
  },

  {
    slug: "preventive-dentistry-vashi-navi-mumbai",
    title: "Preventive Dentistry",
    metaTitle: "Preventive Dentistry in Vashi, Navi Mumbai | Biolume Dental Care",
    metaDescription:
      "Regular dental check-ups, professional cleaning, fluoride, and digital X-rays at Biolume Dental Care, Vashi. Catch problems early. Book your next visit.",
    heroImage:
      "https://images.pexels.com/photos/6502742/pexels-photo-6502742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageAlt:
      "Dentist examining a patient's teeth during a routine check-up at a clinic in Vashi, Navi Mumbai",
    heroPhotographer: "cottonbro studio",
    heroPhotographerUrl: "https://www.pexels.com/@cottonbro",
    h1: "Preventive Dentistry in Vashi, Navi Mumbai",
    intro: [
      "Preventive dentistry is the most straightforward category in dentistry: catching and addressing problems before they become more complex or expensive. A cavity found at 1mm deep is treated in fifteen minutes with a small filling. Found at 5mm, it may need a root canal and crown. Found as an abscess, it may require extraction. The gap between these outcomes is usually one or two missed check-ups. At Biolume Dental Care in Vashi, the preventive visit is not a formality — it is the most clinically important appointment in the year.",
      "A preventive check-up at our Sector 19B, Vashi clinic includes a clinical exam, intraoral camera review, and digital X-rays where indicated. The intraoral camera is a small wand that captures high-resolution images of every tooth surface, including areas that are difficult to see with the naked eye. The images are displayed on a screen so you can see what we see — a crack, an early cavity, gum recession, staining at a filling margin. This transparency is not a technique; it is how we think dentistry should be done.",
    ],
    sections: [
      {
        heading: "What a Preventive Check-up Includes at Biolume",
        body: "A complete preventive visit at Biolume Dental Care, Vashi covers the following:",
        bullets: [
          "Full clinical exam — all teeth, gum health, bite, jaw joint, soft tissues",
          "Intraoral camera review — close-up images of every tooth surface shared with you in real time",
          "Digital X-rays — low-radiation bitewing and periapical X-rays when due, to detect decay between teeth and bone levels",
          "Professional cleaning — scaling to remove calculus (tartar) above and below the gum line",
          "Polishing — removing surface stains with an air-polishing device",
          "Personalised oral hygiene advice — based on what we actually find, not generic instructions",
          "Fluoride application where appropriate",
        ],
      },
      {
        heading: "Professional Cleaning vs At-Home Brushing",
        body: "Brushing and flossing at home removes soft plaque — the loose film of bacteria that forms on tooth surfaces. When plaque is not removed, it mineralises into calculus (tartar) within 24 to 72 hours. Calculus cannot be removed by brushing. It accumulates on tooth surfaces and below the gum line over months and years, causing gum inflammation, bone loss, and eventually tooth loss. Professional cleaning removes this buildup using ultrasonic scaling and air-polishing — instruments that reach areas a toothbrush cannot. At Biolume in Vashi, the cleaning procedure is more comfortable than many patients expect, particularly with the ultrasonic scaler, which vibrates calculus off rather than scraping.",
      },
      {
        heading: "Intraoral Cameras: Seeing What You Are Dealing With",
        body: "Patients make better decisions about their dental health when they can see what their dentist sees. An intraoral camera is a small, pen-shaped device that captures magnified, high-resolution images of the inside of your mouth, displayed on a screen in front of you. At Biolume Dental Care, Vashi, we use the camera as part of every routine check-up. When we find a crack in a tooth, a cavity beginning at a filling margin, or inflamed gum tissue, we show you the image. This changes the conversation from 'trust me, there's a cavity' to 'here is the cavity — do you want to see it?'",
      },
      {
        heading: "Digital X-Rays: Lower Dose, Better Information",
        body: "Digital X-rays produce significantly less radiation than conventional film X-rays — typically 70–90% less — and the images are available immediately on screen for review. Bitewing X-rays (showing the crowns of upper and lower teeth together) are the primary tool for detecting cavities between teeth, which cannot be seen on clinical examination. Periapical X-rays show the full length of specific teeth including the root tip and surrounding bone. We take X-rays at appropriate intervals based on your individual risk profile — not on a fixed schedule that ignores your clinical history.",
      },
      {
        heading: "How Often Should You Come In?",
        body: "The standard recommendation of every six months works well for most adults with good oral hygiene and no active disease. Patients with a history of gum disease, high cavity rate, orthodontic appliances, or dry mouth may need quarterly visits. Patients with very stable oral health and meticulous hygiene may be fine at twelve-month intervals. At Biolume, we give you a recall interval based on your specific situation — not a blanket six-month reminder for everyone. If anything changes between visits — pain, sensitivity, a cracked feeling, swelling — come in rather than waiting for the next scheduled check-up.",
      },
    ],
    faqs: [
      {
        q: "What happens if I skip check-ups for a few years?",
        a: "Skipping check-ups does not mean nothing is happening — cavities continue to grow, gum disease progresses, and calculus accumulates. The clinical consequence is that problems found after a long gap are typically more advanced and more expensive to treat than they would have been if caught earlier. There is no judgement at Biolume about how long it has been since your last visit — we assess where you are now and build a plan from there.",
      },
      {
        q: "My teeth do not hurt. Do I still need a check-up?",
        a: "Yes. Dental problems are often painless in their early stages. Cavities do not hurt until they reach the pulp. Gum disease is typically painless until it is advanced. A cracked tooth may be symptom-free for months before it fractures completely. The absence of pain is not an indicator of dental health — it is simply an indicator that nothing has reached the nerve yet.",
      },
      {
        q: "Are dental X-rays safe?",
        a: "The radiation dose from modern digital dental X-rays is very low — comparable to the background radiation you receive from the environment over a few days. At Biolume Dental Care, Vashi, we use digital X-rays exclusively, which produce a fraction of the dose of older film-based systems. We also follow the ALARA principle (As Low As Reasonably Achievable), meaning we take X-rays only when the clinical benefit justifies the minimal dose.",
      },
      {
        q: "Do I need fluoride treatment as an adult?",
        a: "Fluoride is not only for children. Adults with a history of frequent cavities, dry mouth, gum recession exposing root surfaces, or who are undergoing orthodontic treatment can benefit from topical fluoride application. At Biolume, we assess whether fluoride is likely to be useful in your specific case and apply it when it is — not routinely to everyone.",
      },
      {
        q: "What is an intraoral camera and does it hurt?",
        a: "An intraoral camera is a small wand, slightly thicker than a pen, that takes magnified images of tooth surfaces. It does not contact the tooth or gum with any force — it simply captures images. There is no discomfort associated with it. The images are shown to you in real time on a screen, so you can see your teeth at close range during the check-up.",
      },
    ],
    ctaHeading: "Due for a check-up?",
    ctaBody:
      "Book your preventive visit at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai. Routine appointments are kept on time, and we will give you a clear picture of where things stand.",
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
