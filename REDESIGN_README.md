# UnbiaslyAI — Redesign

Editorial-grade single-page rebuild of the UnbiaslyAI marketing site. Next.js 14.2 (App Router), TypeScript, Tailwind, shadcn/ui primitives, TanStack Query.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For production:

```bash
npm run build
npm start
```

## Environment

The Live News and Subscribe routes proxy to the existing UnbiaslyAI backend. The API URL is set in `.env.development` / `.env.production`:

```
NEXT_PUBLIC_UNBIASLY_BASE_API_URL=http://api.unbiasly.ai
```

Vercel will pick this up from the env file automatically. If your backend domain has changed, update both files.

## What's where

```
app/
  page.tsx                    Long-form home (Hero → Product → Features → ABCDEP → Roadmap → Mission → Team → CTA)
  layout.tsx                  Header + Footer + fonts (Fraunces / Inter Tight / JetBrains Mono via <link>)
  globals.css                 Editorial design system, grain texture, motion utilities
  live-news/                  The only standalone page — full feed with EN/HI toggle and infinite scroll
    page.tsx
    hooks.ts
    mobile-filter.tsx
    api/route.ts              Proxies POST /v1/getArticles to the backend
  subscribe/api/route.ts      Proxies POST /v1/subscribe
  privacy-policy/
  terms-and-conditions/
  not-found.tsx

components/
  custom/                     Header, Footer, AppStores, Subscribe, ScrollToTop, ContentContainer, etc.
  sections/                   Home-page sections (one file per section)
  ui/                         shadcn/ui primitives (Button, Sheet, Drawer, Switch, Form, Input, Label)

service/                      API client (unchanged — same contract as the original repo)
lib/utils.ts                  cn() + timeElapsed()
public/                       Logos, app screenshots, founder/advisor photos, app store badges
```

## Founders & Advisors

Update the array in `components/sections/team.tsx`. Saharsh Sikaria currently shows monogram initials because there's no photo in `public/people/`. Drop `saharsh-sikaria.png` into that folder and switch his entry's `photo: null` to `photo: SaharshImg` (with the matching import).

## Design tokens

Defined in `tailwind.config.ts` and `app/globals.css`:

- **Colors**: `paper` `#FAF7F2`, `ink` `#0A0A0A`, `accent` `#E6481E`, `rule` `#E8E2D8`
- **Fonts**: `font-display` Fraunces, `font-sans` Inter Tight, `font-mono` JetBrains Mono
- **Utilities**: `.grain`, `.eyebrow`, `.section-num`, `.hairline`, `.dropcap`, `.link-accent`, `.text-balance`

## Notes

- Fonts load via `<link>` in `app/layout.tsx` (not `next/font`) for build-environment portability — works identically in production.
- The Live News page keeps the exact API integration from the original repo: same `useInfiniteQuery`, same `/live-news/api` route, same types in `service/api.interface.ts`.
- All section anchors on the home page (`#product`, `#features`, `#abcdep`, `#mission`, `#team`, `#advisors`) work from the header nav.
