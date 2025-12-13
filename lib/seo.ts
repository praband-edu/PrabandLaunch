/**
 * SEO Constants and Utility Functions
 * Centralized SEO configuration for the Praband website
 */

export const SITE_CONFIG = {
  name: "Praband",
  title: "Praband - AI-Powered Education Management",
  description: "The all-in-one Education Management System for tuition teachers, coaching institutes, training centers, and colleges. Replace scattered tools, WhatsApp groups, and Excel files with one unified platform.",
  url: "https://praband.com",
  ogImage: "/praband/logo.jpeg",
  logo: "/praband/logo.jpeg",
  keywords: [
    "education management system",
    "LMS",
    "learning management system",
    "tuition management",
    "coaching institute software",
    "college management system",
    "student management",
    "academic management",
    "education technology",
    "edtech",
    "online learning platform",
    "classroom management",
    "assessment software",
    "education analytics",
  ],
  author: "Praband",
  creator: "Praband",
  publisher: "Praband",
  locale: "en_US",
  type: "website",
};

/**
 * Generate structured data for Organization
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description: SITE_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@Praband.in",
    },
    sameAs: [
      // Add social media URLs here when available
      // "https://twitter.com/praband",
      // "https://facebook.com/praband",
      // "https://linkedin.com/company/praband",
    ],
  };
}

/**
 * Generate structured data for WebSite
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
  };
}

/**
 * Generate structured data for SoftwareApplication
 */
export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_CONFIG.name,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * Generate FAQPage structured data
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

