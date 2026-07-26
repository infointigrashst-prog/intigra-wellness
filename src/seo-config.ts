/**
 * seo-config.ts
 * Central SEO configuration for all pages.
 * Edit this file to update metadata, keywords, and structured data across the site.
 */

export const SITE_URL = 'https://www.intigrawellness.com';
export const SITE_NAME = 'INTIGRA WELLNESS';
export const DOCTOR_NAME = 'Dr. Disha Vaghasiya';
export const DEGREE = 'BPT — Registered Physiotherapist';
export const PHONE = '+91-9426638270';
export const EMAIL = 'dr.dishavaghasiya@gmail.com';
export const LOCATION = 'Bodakdev, Ahmedabad, Gujarat, India';
export const OG_IMAGE = `${SITE_URL}/assets/og-image.png`;
export const LOGO = `${SITE_URL}/assets/logo-full.png`;

/** Shared keyword base — added to every page */
const BASE_KEYWORDS = [
  'physiotherapy Ahmedabad',
  'physiotherapist Ahmedabad',
  'Dr Disha Vaghasiya',
  'INTIGRA WELLNESS',
  'home physiotherapy Ahmedabad',
  'rehabilitation clinic Ahmedabad',
  'Bodakdev physiotherapy',
];

export type PageSEO = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  /** Optional: override the OG image for a specific page */
  ogImage?: string;
};

/** Per-page SEO map */
export const PAGE_SEO: Record<string, PageSEO> = {

  '/': {
    title: `${SITE_NAME} | Physiotherapy & Rehabilitation Clinic, Ahmedabad — ${DOCTOR_NAME}`,
    description:
      `${SITE_NAME} is a leading physiotherapy clinic in Ahmedabad, Gujarat. ${DOCTOR_NAME} offers personalised treatment for back pain, neck pain, slip disc, frozen shoulder, knee pain, stroke rehabilitation and home visit physiotherapy across Ahmedabad.`,
    keywords: [
      ...BASE_KEYWORDS,
      'back pain treatment Ahmedabad',
      'neck pain physiotherapy',
      'slip disc treatment',
      'frozen shoulder physiotherapy',
      'knee pain treatment Ahmedabad',
    ],
    canonical: `${SITE_URL}/`,
  },

  '/about-us': {
    title: `About ${DOCTOR_NAME} | ${SITE_NAME} — Physiotherapist Ahmedabad`,
    description:
      `Meet ${DOCTOR_NAME}, BPT Registered Physiotherapist at ${SITE_NAME}, Bodakdev, Ahmedabad. With 12+ years of clinical experience, Dr. Disha specialises in orthopedic rehab, neurological recovery, and personalised home visit physiotherapy.`,
    keywords: [
      ...BASE_KEYWORDS,
      'about Dr Disha Vaghasiya',
      'BPT physiotherapist Ahmedabad',
      'registered physiotherapist Gujarat',
      'orthopedic rehabilitation Ahmedabad',
    ],
    canonical: `${SITE_URL}/about-us`,
  },

  '/services': {
    title: `Physiotherapy Services in Ahmedabad | ${SITE_NAME}`,
    description:
      `Explore comprehensive physiotherapy services at ${SITE_NAME} — back pain, neck pain, slip disc, frozen shoulder, knee pain, sports injury, stroke & paralysis rehab, neurological conditions, pediatric and geriatric physiotherapy in Ahmedabad.`,
    keywords: [
      ...BASE_KEYWORDS,
      'orthopedic physiotherapy Ahmedabad',
      'neurological rehabilitation Ahmedabad',
      'sports injury physiotherapy',
      'pediatric physiotherapy Ahmedabad',
      'geriatric physiotherapy',
      'dry needling Ahmedabad',
      'electrotherapy Ahmedabad',
    ],
    canonical: `${SITE_URL}/services`,
  },

  '/exercises': {
    title: `Home Exercise Library | Physiotherapy Exercises — ${SITE_NAME}`,
    description:
      `Free physiotherapy exercise library by ${DOCTOR_NAME}. Stretching, strengthening and core exercises for back pain, neck pain, knee pain and post-surgery recovery — guided by Ahmedabad's trusted physiotherapist.`,
    keywords: [
      ...BASE_KEYWORDS,
      'physiotherapy exercises home',
      'back pain exercises',
      'neck pain exercises',
      'knee exercises physiotherapy',
      'stretching exercises Ahmedabad',
      'home exercise program physiotherapy',
    ],
    canonical: `${SITE_URL}/exercises`,
  },

  '/home-visits': {
    title: `Home Visit Physiotherapy in Ahmedabad | ${SITE_NAME}`,
    description:
      `${SITE_NAME} offers professional home visit physiotherapy across all areas of Ahmedabad. ${DOCTOR_NAME} provides stroke rehab, post-surgery recovery, elderly care, and personalised treatment at your home — convenient and clinically effective.`,
    keywords: [
      ...BASE_KEYWORDS,
      'home visit physiotherapy Ahmedabad',
      'physiotherapy at home Ahmedabad',
      'home physiotherapy service Gujarat',
      'stroke rehabilitation home visit',
      'elderly physiotherapy home',
      'post surgery home physiotherapy',
    ],
    canonical: `${SITE_URL}/home-visits`,
  },

  '/faq': {
    title: `FAQ — Physiotherapy Questions Answered | ${SITE_NAME}`,
    description:
      `Got questions about physiotherapy? ${SITE_NAME} answers common questions about treatment duration, home visits, conditions treated, booking appointments, and what to expect from sessions with ${DOCTOR_NAME} in Ahmedabad.`,
    keywords: [
      ...BASE_KEYWORDS,
      'physiotherapy FAQ',
      'physiotherapy questions',
      'how many physiotherapy sessions',
      'what does physiotherapy treat',
      'physiotherapy appointment Ahmedabad',
    ],
    canonical: `${SITE_URL}/faq`,
  },

  '/contact-us': {
    title: `Book Physiotherapy Appointment in Ahmedabad | ${SITE_NAME}`,
    description:
      `Book a physiotherapy consultation with ${DOCTOR_NAME} at ${SITE_NAME}, Bodakdev, Ahmedabad. Clinic appointments and home visits available. Call ${PHONE} or fill our appointment form.`,
    keywords: [
      ...BASE_KEYWORDS,
      'book physiotherapy appointment Ahmedabad',
      'physiotherapy clinic Bodakdev',
      'contact physiotherapist Ahmedabad',
      'physiotherapy appointment Gujarat',
    ],
    canonical: `${SITE_URL}/contact-us`,
  },

};

/** Build a full Next.js Metadata object from a PageSEO entry */
export function buildMetadata(path: string) {
  const seo: PageSEO = PAGE_SEO[path] ?? PAGE_SEO['/'];
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    authors: [{ name: SITE_NAME }, { name: DOCTOR_NAME }],
    creator: DOCTOR_NAME,
    publisher: SITE_NAME,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: seo.canonical },

    /* Open Graph */
    openGraph: {
      type: 'website' as const,
      url: seo.canonical,
      siteName: SITE_NAME,
      locale: 'en_IN',
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: seo.ogImage ?? OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${DOCTOR_NAME}`,
        },
      ],
    },

    /* Twitter */
    twitter: {
      card: 'summary_large_image' as const,
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage ?? OG_IMAGE],
    },

    /* Geo tags (not a Next.js built-in field, injected via 'other') */
    other: {
      'geo.region': 'IN-GJ',
      'geo.placename': 'Ahmedabad',
      'geo.position': '23.0225;72.5714',
      'ICBM': '23.0225, 72.5714',
      'DC.language': 'en-IN',
    },
  };
}
