# Katie Mayes Astro Rebuild

This repository now contains the Astro redevelopment for the Katie Mayes strategic clarity and messaging advisory site. The previous LMSW study app has been removed from the source path.

## Local Development

```powershell
npm install
npm run dev
```

Current review server used during QA:

```text
http://127.0.0.1:4321/
```

## Build

```powershell
npm run build
```

The build outputs static files to `dist/` and generates a sitemap for `https://site2.gomks.com`.

## Route Map

- `/`
- `/method`
- `/services`
- `/services/outside-eye`
- `/services/thinking-partner`
- `/services/strategic-reset`
- `/for-founders`
- `/for-solo-marketers`
- `/about`
- `/faq`
- `/apply`
- `/contact`

## Content Model

Most reusable copy, navigation, audiences, offers, method steps, FAQ items, and trust language live in:

```text
src/data/site.ts
```

Page assembly lives in `src/pages`, and reusable layout/components live in `src/components`.

## Review Notes

- Production-style imagery is stored in `public/assets/katie-mayes`.
- The apply form is wired as a review interaction with a confirmation state. Before launch, connect it to the approved form endpoint or CRM path.
- The current design intentionally avoids invented testimonials and fake performance metrics. Add approved proof/testimonial content when available.
- `dist/`, `.astro/`, `node_modules/`, logs, and QA screenshots are ignored as generated/local artifacts.

## QA Evidence

QA screenshots and the route report were captured locally under:

```text
qa-screenshots/katie-mayes-review/
```

Checks performed:

- `npm run build`
- Desktop route smoke test for all routes
- Mobile homepage test at `390px`
- Horizontal overflow check on all tested routes
- Mobile menu open-state check
- Apply form confirmation-state check
