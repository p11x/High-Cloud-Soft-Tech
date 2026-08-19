# High Cloud Soft Tech Website

Enterprise-grade, production-ready React + Vite application for High Cloud Soft Tech.

## Prerequisites

- Node.js >= 18
- npm or bun

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Copy `.env.example` to `.env` and fill in the required keys.
   ```bash
   cp .env.example .env
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start both the Express backend (port 3001) and Vite frontend (port 3000) concurrently.

## Environment Variables

- `RESEND_API_KEY`: Required for the contact form to send emails via Resend.
- `CONTACT_EMAIL`: The destination email address for form submissions.

## Deployment (Vercel)

This project is configured for zero-config deployment on Vercel:
1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect Vite and run `npm run build`.
3. The `/api/contact.ts` file is automatically deployed as a Vercel Serverless Function.
4. **Important:** Add the `RESEND_API_KEY` and `CONTACT_EMAIL` environment variables in the Vercel project settings.

## CI/CD Pipeline

A GitHub Actions workflow is included (`.github/workflows/ci.yml`). On every pull request to `main`, it runs:
- TypeScript type checking
- Unit tests (Vitest)
- End-to-End tests (Playwright)
- Production build step

**Branch Protection Recommendation:** Ensure that the `main` branch is protected in GitHub and requires the `build-and-test` status check to pass before merging.

## Testing

Run unit tests:
```bash
npx vitest run
```

Run E2E tests:
```bash
npx playwright test
```

## Security & Architecture

- **Contact Pipeline**: Form submissions go to `/api/contact.ts` (Serverless Function). It uses basic IP-based rate limiting, a honeypot field for spam mitigation, server-side validation, and Resend for transactional email.
- **Security Headers**: Defined in `vercel.json` (CSP, XSS, Frame Options).
- **SEO**: Dynamic per-route metadata using `react-helmet-async`, OpenGraph tags, JSON-LD on the homepage, plus `sitemap.xml` and `robots.txt`.
- **Performance**: Lazy loading for all route components, static assets cached aggressively.
