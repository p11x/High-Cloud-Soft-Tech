import { Activity, Code, Database, Globe, Layers, Layout, Monitor, ShieldCheck, Smartphone, TestTube, Users, Zap, Cloud, Cpu, Lightbulb, Briefcase } from 'lucide-react';

export const services = [
  {
    title: "Software Development",
    slug: "software-development",
    image: "/assets/service-web.jpg",
    description: "End-to-end software solutions tailored to your unique business requirements.",
    features: ["Custom applications", "API integrations", "Scalable architecture"],
    icon: Code
  },
  {
    title: "IT Services",
    slug: "it-services",
    image: "/assets/service-qa.jpg",
    description: "Reliable IT infrastructure management and technical support.",
    features: ["Infrastructure setup", "Network security", "24/7 technical support"],
    icon: Monitor
  },
  {
    title: "Cloud Technologies",
    slug: "cloud-technologies",
    image: "/assets/service-cloud.jpg",
    description: "Future-ready cloud infrastructure for scale and efficiency.",
    features: ["Cloud migration", "Serverless architecture", "DevOps & CI/CD"],
    icon: Cloud
  },
  {
    title: "Digital Transformation",
    slug: "digital-transformation",
    image: "/assets/service-digital.jpg",
    description: "Modernizing legacy systems to drive innovation and growth.",
    features: ["Legacy modernization", "Process automation", "Technology consulting"],
    icon: Zap
  },
  {
    title: "Enterprise Solutions",
    slug: "enterprise-solutions",
    image: "/assets/service-enterprise.jpg",
    description: "Robust platforms designed for complex organizational workflows.",
    features: ["ERP implementations", "CRM systems", "Data management platforms"],
    icon: Briefcase
  },
  {
    title: "Technology Consulting",
    slug: "technology-consulting",
    image: "/assets/service-consulting.jpg",
    description: "Strategic guidance to navigate the evolving digital landscape.",
    features: ["Tech stack assessment", "Architecture planning", "Agile transformation"],
    icon: Lightbulb
  }
];

export const industries = [
  {
    title: "Finance",
    slug: "finance",
    image: "/assets/finance.jpg",
    heroImage: "/assets/finance-hero.jpg",
    description: "Secure financial applications, dashboards, payment workflows, and compliance-aware digital products.",
    icon: ShieldCheck
  },
  {
    title: "Insurance",
    slug: "insurance",
    image: "/assets/insurance.jpg",
    heroImage: "/assets/insurance-hero.jpg",
    description: "Custom InsurTech applications that connect backend data with user-friendly customer portals.",
    icon: ShieldCheck
  },
  {
    title: "Education",
    slug: "education",
    image: "/assets/education.jpg",
    heroImage: "/assets/education-hero.jpg",
    description: "Learning management systems and education platforms built for students and administrators.",
    icon: Monitor
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    image: "/assets/healthcare.jpg",
    heroImage: "/assets/healthcare-hero.jpg",
    description: "Healthcare solutions focused on privacy, usability, and efficient care delivery.",
    icon: Activity
  },
  {
    title: "Media & Entertainment",
    slug: "media-entertainment",
    image: "/assets/media-content.jpg",
    heroImage: "/assets/media-hero.jpg",
    description: "Scalable media solutions for content delivery and interactive user experiences.",
    icon: Globe
  },
  {
    title: "Oil & Gas Mining",
    slug: "oil-gas-mining",
    image: "/assets/mining-content.jpg",
    heroImage: "/assets/oil-gas-hero.jpg",
    description: "Software for remote asset tracking, field operations, and complex data visualization.",
    icon: Database
  },
  {
    title: "Retail & Ecommerce",
    slug: "retail-ecommerce",
    image: "/assets/retail-ecommerce.jpg",
    heroImage: "/assets/retail-hero.jpg",
    description: "High-performance ecommerce solutions integrated with inventory and marketing tools.",
    icon: Activity
  },
  {
    title: "Logistics & Distribution",
    slug: "logistics-distribution",
    image: "/assets/logistics-distribution.jpg",
    heroImage: "/assets/logistics-hero.jpg",
    description: "Unified logistics tools for tracking, reporting, and operations management.",
    icon: Database
  },
  {
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    image: "/assets/office-location.jpg",
    heroImage: "/assets/office-location.jpg",
    description: "Customer-facing products and back-office tools for reservations, payments, and support.",
    icon: Globe
  },
  {
    title: "Public Sector",
    slug: "public-sector",
    image: "/assets/public-sector-content.jpg",
    heroImage: "/assets/public-sector-hero.jpg",
    description: "Secure portals, case management systems, and public data-sharing platforms.",
    icon: ShieldCheck
  },
  {
    title: "Energy And Utilities",
    slug: "energy-utilities",
    image: "/assets/energy-content.jpg",
    heroImage: "/assets/energy-hero.jpg",
    description: "Digital tools for resource allocation, predictive maintenance, and customer service.",
    icon: Zap
  }
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" }
];
