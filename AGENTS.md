# Biolume Dental Care — Brightspan Client Project

This is a Brightspan client repo (spoke). **All agency rules live in the hub — do not look for them here.**

## Before doing ANY task, in this order:

1. **Pull the hub:** `../brightspan-topics/` — run `git pull` there first.
   If the folder doesn't exist, clone it as a sibling:
   `git clone https://github.com/tejooob/brightspan-topics ../brightspan-topics`
   **If the pull fails: STOP. Never work against a stale hub.**
2. **Read `../brightspan-topics/AGENTS.md`** — the master brain. Every rule in it applies here.
3. **Read `./biolumedental.md`** — this client's config: services, voice, calendar, banned words, internal links.
4. **For a standard job** (new blog, GBP post, monthly report), follow the matching playbook in `../brightspan-topics/playbooks/`.

## This client's identifiers (pre-resolved — use these, do not guess)

| What | Value |
|---|---|
| Client config file (this repo) | `biolumedental.md` |
| Status file (hub) | `status/biolume-dental.json` |
| Registry entry | `client: "biolume-dental"` in `registry/clients.json` |

## Repo-specific notes

- Framework: Next.js 14 App Router, `trailingSlash: true`, **no `src/` directory** — current blog/schema state is in `biolumedental.md` § 11
- Deploys via Vercel on push to `main`
- **Repo wins over instructions** on framework, paths, and data interfaces — read the real files, match the existing interface exactly, surface conflicts to the operator

## Hard rules (repeated here because they protect the client)

- Never commit `.env` or any credentials; never `git add -A`
- Never push if `npm run build` fails
- Publishing order is HUB FIRST: tracker row + status pushed and confirmed in the hub BEFORE the client repo is pushed (full rules in AGENTS.md → Commit scope)

*This file is intentionally short. If you're reading a long rulebook in this repo, it's stale — the hub wins.*
