# PRODUCTION_AUDIT

## 1. Contact/Enquiry Form
**Gap**: Current implementation in `/src/pages/ContactPage.tsx` and `/src/pages/CareersPage.tsx` uses a mock `setTimeout` to simulate success.
**Resolution**: Added `/api/contact.ts` (Vercel Serverless Function) using `resend` for transactional email. Integrated frontend form with `fetch`, error states, server-side validation, IP rate-limiting, and an invisible honeypot field. 

## 2. Meta/SEO
**Gap**: Site had a single static `<head>` block. Missing sitemap and robots.
**Resolution**: Installed `react-helmet-async` and created a reusable `SEO.tsx` component. Added unique meta titles, descriptions, and OpenGraph/Twitter card tags to all routes. Created `public/robots.txt` and `public/sitemap.xml`. Injected Organization JSON-LD into the homepage. 
**Note on Prerendering**: We decided not to add full prerendering (like `vite-plugin-ssr`) because standard Vercel deployments handle dynamic React apps reasonably well for modern crawlers, but if B2B SEO is ultra-critical, we recommend migrating this Vite SPA to Next.js or Remix for native SSR.

## 3. Performance
**Gap**: Route components were synchronously imported.
**Resolution**: Implemented route-based code splitting in `src/router.tsx` using `React.lazy` and `Suspense`. Added `vercel.json` with `Cache-Control` headers for assets.

## 4. Security
**Gap**: No security headers.
**Resolution**: Added `vercel.json` setting `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`, and `Strict-Transport-Security`. 
*Note: `npm audit fix` was bypassed as `bun.lock` is used in this environment, but standard best practices apply.*

## 5. Error Handling & Resilience
**Gap**: No top-level ErrorBoundary.
**Resolution**: Created `ErrorBoundary.tsx` with a branded fallback UI and hooked it into React Router (`errorElement`).

## 6. Monitoring & Analytics
**Gap**: No analytics or tracking.
**Resolution**: Added a cookieless, privacy-friendly Plausible Analytics script to `index.html`. 

## 7. Legal/Compliance
**Gap**: No legal pages.
**Resolution**: Authored `PrivacyPolicyPage.tsx` and `TermsOfServicePage.tsx` tailored to the actual data collected. Added links in the `Footer.tsx`. 

## 8. Testing & CI/CD
**Gap**: No testing or CI pipeline.
**Resolution**: Set up Vitest with Zod schema validation tests. Set up Playwright for E2E smoke tests. Created `.github/workflows/ci.yml` for automated CI checks on PRs to main.

## 9. Documentation
**Gap**: Readme didn't reflect production ops.
**Resolution**: Completely rewrote `README.md` and `.env.example` with deployment, environment variable, and testing instructions.
