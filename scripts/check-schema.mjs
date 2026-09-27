// CANONICAL COPY — Brightspan required technical-SEO guard.
// Copy this into every client repo at scripts/check-schema.mjs and wire it as the
// "postbuild" script in package.json:  "postbuild": "node scripts/check-schema.mjs"
//
// It fails the build if banned self-serving schema (aggregateRating / Review) appears
// in any generated JSON-LD. Google prohibits a business rating itself on
// LocalBusiness/Dentist/Organization schema — it never renders stars and is flagged
// "invalid item" in the GSC Review-snippets report (the June 2026 incident pattern).
// Stars come from the Google Business Profile, not on-page schema. Because
// `npm run build` runs before every commit, wiring this as "postbuild" means the ban
// cannot silently regress. See hub AGENTS.md → Technical SEO Standards.
//
// NOTE: this scans Next.js App Router output at .next/server/app. If a client repo
// uses a different framework or output mode, point ROOT at that repo's prerendered
// HTML folder instead.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = ".next/server/app";

function walk(dir) {
  let out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (p.endsWith(".html")) out.push(p);
  }
  return out;
}

let files = [];
try {
  files = walk(ROOT);
} catch {
  console.error(`check-schema: could not read ${ROOT} — did the build run first?`);
  process.exit(1);
}

const violations = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  const blocks =
    html.match(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g) || [];
  for (const b of blocks) {
    if (b.includes("aggregateRating")) violations.push(`${f}: aggregateRating`);
    if (/"@type"\s*:\s*"Review"/.test(b)) violations.push(`${f}: Review node`);
  }
}

if (violations.length) {
  console.error("\n❌ Banned self-serving schema detected in generated pages:");
  for (const v of violations) console.error("  - " + v);
  console.error(
    "\nGoogle prohibits a business rating itself on LocalBusiness/Dentist schema."
  );
  console.error(
    "Remove it — stars come from the Google Business Profile. See hub AGENTS.md.\n"
  );
  process.exit(1);
}

console.log(`✓ check-schema: no banned schema in ${files.length} generated pages.`);
