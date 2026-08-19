import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense, ReactNode } from 'react';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ui/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<div className="min-h-screen bg-[#0A1428] flex items-center justify-center text-primary">Loading...</div>}>
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <SuspenseWrapper><HomePage /></SuspenseWrapper> },
      { path: 'about', element: <SuspenseWrapper><AboutPage /></SuspenseWrapper> },
      { path: 'services', element: <SuspenseWrapper><ServicesPage /></SuspenseWrapper> },
      { path: 'industries', element: <SuspenseWrapper><IndustriesPage /></SuspenseWrapper> },
      { path: 'careers', element: <SuspenseWrapper><CareersPage /></SuspenseWrapper> },
      { path: 'contact', element: <SuspenseWrapper><ContactPage /></SuspenseWrapper> },
      { path: 'privacy-policy', element: <SuspenseWrapper><PrivacyPolicyPage /></SuspenseWrapper> },
      { path: 'terms-of-service', element: <SuspenseWrapper><TermsOfServicePage /></SuspenseWrapper> },
      { path: '*', element: <SuspenseWrapper><NotFoundPage /></SuspenseWrapper> },
    ],
  },
]);
