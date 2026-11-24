# Box140 – site one-page

TanStack Start + React 19 + Tailwind 4, deployed on Netlify. No backend, forms or persistence.

## Structure
- `src/data/site.ts` – single source of all editable content (copy, services, comparisons, testimonials, hours, WhatsApp/Instagram, map links, `whatsappLink()`).
- `src/routes/__root.tsx` – SEO meta, Open Graph, JSON-LD (AutoWash/LocalBusiness), fonts, hero preload. Adds `js` class to `<html>` so `.reveal` animations only hide content when JS runs.
- `src/components/` – one file per section (Header, Hero, Services, BeforeAfter + CompareSlider, Process/WhyUs, About, Testimonials, Location, Footer/FinalCta/WhatsAppFloat), composed in `HomePage.tsx`.
- `src/lib/images.ts` – Netlify Image CDN URL helpers (`cdn`, `srcSet`) and `delay()` for CSS animation delays.
- `src/styles.css` – theme tokens (`ink`, `steel`, `accent`…) and custom classes inside `@layer components` so Tailwind utilities can override them.
- `public/img/` – placeholder photos; replace keeping filenames.

## Conventions
- All UI copy in pt-BR; sober tone, no superlatives, no fixed prices.
- Images go through `/.netlify/images` as WebP with lazy loading (except the hero).
- Browser APIs only in effects/handlers. Respect `prefers-reduced-motion`.
- TypeScript stays on 6 (Netlify adapter requirement).
