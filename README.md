# ACE Analytix — Website

A premium, production-grade marketing site built with Next.js 16, React 19, Tailwind v4,
Framer Motion, and Lenis. Designed to address the issues raised in the website audit
(generic tagline, template footer/logo, wrong principal title, missing credentials, dual
CTAs, empty Insights presented as a liability).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where to edit things

| You want to…                         | Edit                                            |
| ------------------------------------ | ----------------------------------------------- |
| Change any copy, services, values    | `src/lib/content.ts` (single source of truth)   |
| Swap brand colours                   | `src/app/globals.css` → `:root` tokens          |
| Add team members + photos            | `team[]` in `src/lib/content.ts` + `/public/team/` |
| Publish a "The Position" edition     | `insights[]` in `src/lib/content.ts` (set `status: "published"`) |
| Wire the contact form to email       | `src/app/api/contact/route.ts` (see note inside)|

## Content fixes baked in (from the audit)

- Hero leads with the real point of view ("Complex problems carry hidden value"); the old
  generic header tagline is gone.
- Footer uses the real line; the "business can be chaotic" template text is removed.
- Daniel is titled **Founder and Managing Partner** with named mandates (TBI, OGP Malawi,
  Edo State, Palladium).
- One consistent CTA everywhere ("Start the conversation") — no dual-CTA conflict.
- Insights presents *The Position* with an anticipatory pre-launch state instead of dead
  links to empty categories.
- Single consistent wordmark; no duplicated logos and no theme footer logo.

## To-do for go-live (content the build can't supply)

1. Add the 10 team photos to `/public/team/` and set each `photo` path in `content.ts`.
   Until then a designed monogram renders (no broken images).
2. Confirm Daniel's full display name in `content.ts`.
3. Publish the first edition of *The Position* (the audit's #1 action).
4. Connect the contact form to an email service (Resend instructions in the API route).
5. Replace the placeholder hero stats with real, defensible numbers.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — zero config. Set any env vars
(e.g. `RESEND_API_KEY`) in the Vercel dashboard.
