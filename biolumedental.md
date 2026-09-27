# biolumedental.md
## Brightspan SEO Client Config File
**Last Updated:** 27 September 2026
**Managed by:** Tejobir Bishnoi, Brightspan
**Status:** Live at https://www.biolumedentalcare.com/ (checked 27 Sep 2026: HTTP 200 on www, served by Vercel, and the apex domain 308-redirects to www). GSC-verified via the metadata tag in `app/layout.tsx`. Onboarded 27 Sep 2026. Blog engine built and first blog post published 27 Sep 2026.

> Repo visibility: **PUBLIC** (`github.com/tejobir/biolume-`). Do not record
> retainer, billing or any other commercial terms in this file while the repo
> is public. Section 12 is deliberately left out.

---

## 1. CLINIC BASICS

Single source of truth in the repo: `lib/doctor.ts`. Every phone number, address, hours line and the JSON-LD read from it. Never hardcode NAP anywhere else.

| Field | Details |
|---|---|
| Clinic Name | Biolume Dental Care |
| Doctor | Dr. Dishani Chordia, BDS. Lead Dentist, Implantologist & Laser Dentistry Specialist |
| Address | Shop No. 10, 2nd Floor, Aykon, Palm Beach Road, above Zudio/Reliance Digital, Phase 2, Sector 19D, Vashi, Navi Mumbai, Maharashtra 400703 |
| Area / Sector | Vashi / Sector 19D |
| Phone | +91 91678 82211 |
| WhatsApp | +91 91678 82211 (same number, per `lib/doctor.ts`). Use it in the CTA only, never in blog body or GBP post text |
| Email | drdishani.biolume@gmail.com |
| Website | https://www.biolumedentalcare.com/ (www is canonical) |
| Google Maps | https://maps.app.goo.gl/Vo4YaJ1stCBpV2rg6 |
| Google Rating | **Not confirmed.** See section 5 before using any rating |
| Clinic Opened | TBC with client |
| GBP Status | TBC. There is a review QR standee in `collateral/review-qr-standee`, so a listing likely exists. Confirm the link and manager access |

### Clinic Hours *(from `lib/doctor.ts`)*
| Day | Hours |
|---|---|
| Monday–Saturday | 10:00 AM – 8:00 PM |
| Sunday | By appointment |

> ⚠️ **Doctor name:** the doctor was renamed site-wide from "Dr. Dishani Jain" to "Dr. Dishani Chordia" on 10 Sep 2026. Always write **Dr. Dishani Chordia** (or "Dr. Chordia"), never "Jain". The visiting-card route stays `/dr-dishani-jain/` because the printed QR cards encode that URL. **Never rename or redirect that route.**

---

## 2. SERVICES

**Primary Service to Lead With:** Dental Implants + Laser Dentistry *(Dr. Chordia holds Fellowships in both. Laser dentistry is the pillar no other Brightspan client in Vashi leads with.)*

**Full Services List** *(exactly as in `components/Services.tsx`)*:

| # | Service | Service page |
|---|---|---|
| 1 | Preventive Dentistry | `/services/preventive-dentistry-vashi-navi-mumbai/` |
| 2 | Restorative Dentistry (composites, crowns, bridges, full mouth rehabilitation) | none |
| 3 | Root Canal Treatment | `/services/root-canal-treatment-vashi-navi-mumbai/` |
| 4 | Periodontics (deep cleaning, ultrasonic scaling, air-polishing) | none |
| 5 | Prosthodontics (dentures, implant-supported dentures) | none |
| 6 | Dental Implants | `/services/dental-implants-vashi-navi-mumbai/` |
| 7 | Laser Dentistry | `/services/laser-dentistry-vashi-navi-mumbai/` |
| 8 | Orthodontics (braces & aligners) | `/services/orthodontics-braces-aligners-vashi-navi-mumbai/` |
| 9 | Smile Makeover (whitening, veneers, bonding, gum contouring) | `/services/smile-makeover-vashi-navi-mumbai/` |
| 10 | Children's Dentistry | `/services/childrens-dentistry-vashi-navi-mumbai/` ⚠️ in PR #1, not on `main` yet |
| 11 | Tooth Jewellery | `/services/tooth-jewellery-vashi-navi-mumbai/` ⚠️ in PR #1, not on `main` yet |
| 12 | TMJ / TMD Management | none |
| 13 | Emergency Dentistry | none |

**Services NOT Offered:** TBC with client. Do not niche content into anything outside the 13 above until it is confirmed.

---

## 3. DIFFERENTIATION & USP

**Core USP:**
A specialist-led dental studio in Sector 19D. It is implant- and laser-led, minimally invasive by default, and explains everything before treating. The positioning is a calm boutique practice, not a volume clinic (`PRODUCT.md`).

**Safe Framing Rules:**
- ✅ Use: "Dr. Chordia holds Fellowships in Dental Implants and Laser Dentistry"
- ✅ Use: "minimally invasive by default"
- ✅ Use: "laser treatment can mean less bleeding and faster healing, often without stitches, for suitable cases." Keep the qualifier.
- ✅ Use: "you see what we see". The practice uses intraoral cameras and digital X-rays.
- ✅ Use: "autoclaved instruments, sealed packaging, single-use kits"
- ❌ Avoid: "painless" as an absolute promise
- ❌ Avoid: "the only", "the best", "#1", or any unverified superlative. That includes "best dentist in Vashi" in body copy, even though the homepage `<title>` uses it
- ❌ Avoid: competitor comparisons of any kind, and never name or imply another clinic. **Another Brightspan client (Sector 17) is in the same area.**

**Differentiator Proof Points** *(from the live site's own copy. Confirm with the client before leaning on any of them in a headline)*:
- BDS, Maharashtra University of Health Sciences
- Fellowship in Dental Implants
- Fellowship in Laser Dentistry
- Six years of clinical practice
- Equipment named on site: intraoral scanner, dental laser, digital X-ray / OPG, magnification, rotary endodontics, 3D implant planning

---

## 4. VOICE & TONE

Established in `PRODUCT.md` (the site's own brand brief). This is the confirmed voice, not one invented for the blog.

**Brand Personality:** Quiet confidence. Considered. Unhurried. Three words: **precise, warm, restrained.**
**Principle:** "Show, don't announce." Copy earns authority through specificity, not adjectives. The doctor treats adults like adults.

**Tone Dial:**

| Too Formal ❌ | Just Right ✅ | Too Casual ❌ |
|---|---|---|
| "Laser-assisted soft-tissue management reduces post-operative morbidity." | "With a laser, most gum procedures bleed less and heal faster, often with no stitches at all." | "Zap! Laser dentistry is the future, no more scary drills 😎" |

**Typical Patient Profile** *(from `PRODUCT.md`)*:
- Adults in Navi Mumbai comparing practices and reading credentials before choosing a specialist
- Anxious patients. Address the fear directly
- Implant, smile-design, orthodontic and laser patients
- Secondary: parents booking for children

**Humanizer Rules** *(hub defaults, which fit this brand)*:
- Open on a real moment. Never "In today's world…" or "Are you looking for…"
- Use "you" and "your" throughout, more than "patients"
- Name the fear once, plainly, then answer it
- One light moment per post, never at the patient's expense. Keep it dry and understated to match the restrained register
- One honest "when you do NOT need to come in" line per post
- Sentences ≤25 words; paragraphs ≤3 sentences
- Never start two consecutive sentences with "We"

**Banned Words** *(derived from `PRODUCT.md` anti-references + hub defaults. The client has not supplied their own list yet)*:
- "Cutting-edge", "state-of-the-art", "world-class", "most advanced"
- "Bespoke wellness journey" and similar luxury-spa phrasing
- Hero-metric boasts ("2,000+ smiles", "X happy patients")
- "Best dentist in Vashi" / "best dental clinic" in body copy. It is an unverified superlative
- "Painless" as an absolute guarantee
- "Guaranteed results", "permanent solution" (implant copy says "can last decades", not "forever")
- "Cures", "prevents", "treats" as health claims
- "Cheap", "discount", "offer"
- Any competitor clinic name

### ⚠️ PRICING: client rule overrides the hub default *(operator-confirmed 27 Sep 2026)*
- **Some treatments get no figure at all.** Cost questions route to the consultation.
- **Where a figure is given, it is a range only**, for example "typically ₹X–₹Y". Never give an exact or single price, and never use the hub's "starting from ₹X" format.
- **Every range is followed by the caveat**: the exact cost varies from patient to patient, and Dr. Chordia confirms it after the consultation.
- Ranges must come from verified market research with a real source, per hub `AGENTS.md`. Never invent a clinic price.
- ⚠️ The live service-page FAQs (implants, smile makeover) still say *"We do not publish prices online"*. A blog range linking up to those pages would read as a contradiction. Operator to decide whether to soften that FAQ wording.

**6-Point Final Check Before Publishing:**
1. Any health claim or unsourced statistic? → Remove or source it
2. Any superlative without proof? → Remove
3. Any competitor named or implied? → Remove
4. Phone/WhatsApp number, an exact price, or a range without the consultation caveat in the body text? → Fix
5. Does the opening hook within 80–100 characters? → Fix
6. Does it sound like Dr. Chordia: precise, warm, restrained? → Adjust

---

## 5. SOCIAL PROOF & REAL NUMBERS

**Verified (safe to use):**
- Located in Sector 19D, Vashi, Navi Mumbai (Palm Beach Road)
- Fellowships in Dental Implants and Laser Dentistry *(site copy; confirm certificate names with the client)*
- Six years of clinical practice *(site copy; confirm with the client)*

**Do NOT use until confirmed:**
- Any Google rating or review count. The homepage shows **"4.9 from 200+ reviews"** in `components/Testimonials.tsx`, and nothing on file verifies it against the GBP
- The three homepage testimonials (Aarav Mehta, Priya Shenoy, Kabir Sethi). Treat them as **placeholders** until the client confirms they are real patients who approved their use
- "X patients treated" or any procedure count
- Success rates of any kind
- Year the clinic opened

Never emit `aggregateRating` or `Review` JSON-LD, whatever the GBP rating turns out to be.

---

## 6. SEO CURRENT STATE

**Baseline:** Site is live and GSC-verified. Rank has never been checked. 1 blog post published (see section 7).

**Rank keywords given by operator (27 Sep 2026). Target is #1 for every one of them:**

| Keyword | Owned by | Notes |
|---|---|---|
| dentist in Vashi | Homepage | The one tracked in the hub registry/status |
| dentist in Sector 19D Vashi | Homepage + `/contact/` | Hyper-local. The homepage `keywords` meta already carries "dental clinic Sector 19D Vashi". The most winnable #1 |
| laser dentistry in Vashi | `/services/laser-dentistry-vashi-navi-mumbai/` | Strongest differentiated term in this area |
| cosmetic dentist in Vashi | `/services/smile-makeover-vashi-navi-mumbai/` (closest match) | No dedicated cosmetic page. Consider whether one is needed before blogging at this term |
| best dentist in Vashi | Homepage (`<title>` already targets it) | **No blog post may target it.** It would cannibalise the homepage. Blogs support it only through internal links |

**Cannibalisation warning:** 8 service pages (6 on `main`, 2 more in PR #1) already target "[service] in Vashi, Navi Mumbai". Blog posts must take an **informational** angle (symptoms, decisions, comparisons, aftercare, what-to-expect) and link UP to the matching `/services/[slug]/` page. Never re-target a service page's head term.

**Internal Pages for Linking** *(all with trailing slash)*:
- `/`: homepage
- `/services/`: services index
- `/services/[slug]/`: 6 service pages live on `main` (implants, laser, smile makeover, orthodontics, root canal, preventive), plus children's dentistry and tooth jewellery once PR #1 merges
- `/contact/`: address, hours, map, booking form
- `/dr-dishani-jain/`: digital visiting card (the route name is legacy; see section 1)
- `/blog/`: blog index. Posts live at `/blog/[slug]/`
- `/#contact`: booking anchor (`bookingHref`). There is no third-party booking system yet

**Service areas to reference:** Vashi, Navi Mumbai. Areas beyond Vashi are **TBC with client**. The site names no others, apart from placeholder testimonials.
**Local landmarks (Sector 19D, use naturally):** Palm Beach Road, Aykon building (above Zudio / Reliance Digital), Phase 2 Sector 19D. **Never use Sector 17 references**, because they belong to another Brightspan client.

---

## 7. CONTENT CALENDAR

The blog engine and schema guard were built on 27 Sep 2026 (see section 11). Every unpublished topic below is a **suggestion only**. Each post still needs the standard keyword plan, the cannibalisation check, an H1 check against `topics-used/vashi-dental-topics.md` in the hub, and operator approval.

| # | Topic (working) | Target Keyword | Search Intent | Links up to | Status |
|---|---|---|---|---|---|
| 1 | Dark Gums Treatment in Vashi: What Causes Them and Whether Laser Is Worth It | dark gums treatment Vashi (cluster: black gums causes, gum depigmentation Vashi, gum depigmentation cost Navi Mumbai, is gum depigmentation permanent, does laser gum depigmentation hurt, laser gum bleaching) | Informational / decision guide | `/services/laser-dentistry-vashi-navi-mumbai/`, `/services/smile-makeover-vashi-navi-mumbai/` | ✅ Published 27 Sep 2026: `/blog/dark-gums-treatment-vashi/` |
| 2 | What laser dentistry can (and can't) do: an honest guide | laser dentistry Vashi | Informational / decision | `/services/laser-dentistry-vashi-navi-mumbai/` | ⏸ Deferred. The laser service page already answers pain, recovery, safety, children and laser vs scalpel, so a general laser post would echo it. Prefer single-procedure laser topics (frenectomy, crown lengthening, ulcer care) that the page covers in one bullet only |
| 3 | How to choose a dentist in Vashi when you're nervous | dentist in Vashi | Local commercial-informational. ⚠️ The Sector 17 client already has a "how to choose the right one for your family" checklist, so this post needs a different H1 and angle (anxiety-led, not family-checklist) | `/`, `/contact/` | Suggested |
| 4 | Cosmetic dentistry options explained: whitening vs bonding vs veneers | cosmetic dentist in Vashi | Comparison / decision. ⚠️ The Sector 17 client has whitening, bonding, reshaping and veneers-vs-crowns posts, so pick a distinct angle | `/services/smile-makeover-vashi-navi-mumbai/` | Suggested |
| 5 | Implant planning with a 3D scan: what happens before the implant | dental implant planning Vashi | Informational / what-to-expect | `/services/dental-implants-vashi-navi-mumbai/` | Suggested |

No publishing cadence has been agreed yet. Pick the next topic when asked rather than assuming a fixed interval.

**Area tracker:** `topics-used/vashi-dental-topics.md` in the hub (shared with the Sector 17 client).

---

## 8. GBP POSTS LOG

| Date | Post Topic | Type | Photo Used | CTA | Status |
|---|---|---|---|---|---|
| none yet | | | | | |

Real clinic photos exist in `public/clinic/` (reception, treatment rooms, lounge, OPG, digital equipment). Once PR #1 merges they are the GBP photo pool. Never use stock photos on GBP.

---

## 9. MONTHLY TRACKING SNAPSHOT

| Month | Primary Keyword Rank | New Reviews | Total Reviews | Avg Rating | GBP Posts | Blogs Published |
|---|---|---|---|---|---|---|
| Sep 2026 (Baseline) | Not checked | TBC | TBC | TBC | 0 | 0 |

---

## 10. THINGS TO CONFIRM WITH CLIENT

- [x] Rank target: #1 for all five keywords (confirmed 27 Sep 2026)
- [x] Pricing policy: range only, never exact, always with the consultation caveat; some treatments get no figure (confirmed 27 Sep 2026)
- [ ] Which treatments get no price figure at all, or leave it to judgement per topic?
- [ ] Soften the "We do not publish prices online" service-page FAQ wording to match the range policy?
- [ ] Google Business Profile link, current rating and review count, manager access
- [ ] Whether the homepage "4.9 from 200+ reviews" figure and the three testimonials are real
- [ ] Services NOT offered
- [ ] Client's own banned-words list
- [ ] Preferred CTA: "Book Appointment" / "Call" / "WhatsApp"? (the site currently mixes "Book Now", "Book Appointment", "Book a Consultation")
- [ ] Year the clinic opened
- [ ] Instagram / Facebook URLs
- [ ] Areas served beyond Vashi
- [ ] Whether this repo should be made private, in line with other Brightspan client repos

---

## 11. TECHNICAL NOTES

- **Framework:** Next.js 14 App Router, TypeScript, Tailwind, `trailingSlash: true`. **No `src/` directory.**
- **NAP / doctor data:** `lib/doctor.ts` (`siteUrl`, `doctor`, `addressOneLine`).
- **Service pages:** typed objects in `lib/servicePages.ts` (`ServicePage` interface: `slug`, `metaTitle`, `h1`, `faqs`, …), rendered by `app/services/[slug]/page.tsx` via `components/ServicePageContent.tsx`. The sitemap (`app/sitemap.ts`) maps over `servicePages`, so a blog engine must add its own entries there.
- **Blog:** posts are typed objects appended to `lib/blog.ts` (`BlogPost` interface). The body is a block array (`h2`/`h3`/`p`/`ul`), and `[label](/path/)` inside text becomes a link. FAQs use `{ q, a }`, matching the service pages. `app/blog/[slug]/page.tsx` emits Article + FAQPage + BreadcrumbList JSON-LD. `/blog/` lists the posts, and `app/sitemap.ts` maps over `blogPosts`. Hero images go in `public/images/blog/[slug]-hero.jpg`.
- **LocalBusiness schema:** `@type: Dentist` is emitted from `app/page.tsx` (homepage). It was moved out of `app/layout.tsx` on 27 Sep 2026. `scripts/check-schema.mjs` runs as `postbuild` and fails the build if `aggregateRating` or `Review` ever appears. ⚠️ `/contact/` and `/dr-dishani-jain/` each define their own Dentist block (no rating). The hub rule says homepage only; left in place pending an operator decision.
- **Images:** `next.config.mjs` already allows `images.pexels.com`. Real clinic photography lives in `public/clinic/*.webp`. Prefer it over stock wherever a real photo fits.
- **Brand:** colours `#146155` / `#86ac8e` / `#efeae4`, DAZZLE Unicase (logo only) + Nunito. See `DESIGN.md`.
- **Pexels image preferences:** calm, natural-light clinic interiors and real-looking adults. Avoid cold blue-white clinical stock, gloved open-mouth close-ups and marble/spa clichés (`PRODUCT.md` anti-references).
- **Hosting:** Vercel (confirmed from response headers, 27 Sep 2026). Assumed to auto-deploy on push to `main`; confirm with a real push.
