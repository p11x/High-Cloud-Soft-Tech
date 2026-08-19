# Dronezz Fly - Enterprise React + Vite Clone

This is an enterprise-grade React + Vite clone of the Dronezz Fly production website. It meticulously recreates the original structure, content, styling, animations, and functionality using modern tools and best practices.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation

## 📦 File Structure

The project is structured following enterprise best practices:
- `src/components/layout/` - Global shared components (Navbar, Footer, Layout).
- `src/pages/` - Route components corresponding to real pages.
- `src/data/` - Content defined as typed data structures.
- `src/index.css` - Global theme variables and Tailwind layers.

## 🖼️ Assets Required (User Action)

The original site relies on a set of images and assets hosted on its AWS S3 bucket. Some of these have been swapped for Unsplash placeholders dynamically to ensure a complete, working build immediately. For full 1:1 parity, you must supply the original asset files into the `public/assets/` directory.

Please download the original assets and place them in `public/assets/`:
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
- `about-dronez-fly.jpg`
- `service-uiux.jpg`, `service-web.jpg`, `service-mobile.jpg`, `service-qa.jpg`, `service-ecommerce.jpg`, `service-team.jpg`, `service-product.jpg`
- `software-development.jpg`, `analytics-dashboard.jpg`, `web-development-team.jpg`, `business-hours.jpg`, `business-apps.jpg`
- `finance-hero.jpg`, `finance.jpg`, `insurance-hero.jpg`, `insurance.jpg`, `education-hero.jpg`, `education.jpg`, etc.

*Note: If the exact file is missing, the application will automatically fallback to a relevant high-quality placeholder from Unsplash.*

## ⚠️ Known Differences & Enhancements

- **Form Submission:** The original site posted contact/career forms to an API endpoint (`/api/careers/apply`). This clone implements a modern mock submission sequence using `react-hook-form`, `zod`, and a simulated delay, providing a graceful success UI.
- **Routing Architecture:** The original app used an SPA structure that mimicked an MPA by checking `window.location.pathname` for `*.html` (e.g. `about.html`). This clone uses true client-side routing via `react-router-dom` with clean URLs (`/about`, `/contact`).
- **CSS Pre-processor:** Original used raw CSS (`index.css`), this version utilizes Tailwind CSS for maintainability.

## 💻 Commands to Run

To run the project locally or build for production:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```
