import type { Metadata } from 'next';
import './globals.css';
import {
  SITE_NAME, DOCTOR_NAME, PHONE, EMAIL, LOGO, OG_IMAGE, SITE_URL
} from '../seo-config';
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Home Visit Physiotherapy, Ahmedabad`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    `${SITE_NAME} offers expert home visit physiotherapy in Ahmedabad led by ${DOCTOR_NAME}. Personalised treatment for back pain, neck pain, geriatric rehab, frozen shoulder, knee pain, and stroke & paralysis rehab at your home.`,
  keywords: [
    'physiotherapy Ahmedabad', 'physiotherapist Ahmedabad',
    'Dr Disha Vaghasiya', 'INTIGRA WELLNESS',
    'home physiotherapy Ahmedabad', 'back pain treatment',
    'geriatric rehab', 'frozen shoulder physiotherapy',
    'stroke rehabilitation Ahmedabad',
  ].join(', '),
  authors: [{ name: SITE_NAME }, { name: DOCTOR_NAME }],
  creator: DOCTOR_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_IN',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — ${DOCTOR_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
    'geo.position': '23.0225;72.5714',
    'ICBM': '23.0225, 72.5714',
  },
};

/** Full JSON-LD schema for the Home Visit Physiotherapy */
const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${SITE_URL}/#doctor`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO,
  image: LOGO,
  description:
    'Expert home visit physiotherapy in Ahmedabad led by Dr. Disha Vaghasiya.',
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: DOCTOR_NAME,
    jobTitle: 'Registered Physiotherapist',
    description: 'BPT — Registered Physiotherapist with 4+ years of clinical experience.',
    worksFor: { '@id': `${SITE_URL}/#doctor` },
    telephone: PHONE,
    email: EMAIL,
  },
  medicalSpecialty: [
    'Physiotherapy',
    'Rehabilitation',
    'Orthopedic Physiotherapy',
    'Neurological Rehabilitation',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '23.0225',
    longitude: '72.5714',
  },
  telephone: PHONE,
  email: EMAIL,
  areaServed: {
    '@type': 'City',
    name: 'Ahmedabad',
    containedInPlace: { '@type': 'State', name: 'Gujarat', containedInPlace: { '@type': 'Country', name: 'India' } },
  },
  sameAs: [
    'https://instagram.com',
    'https://facebook.com',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-theme="light">
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,500;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Stylesheets */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

        {/* JSON-LD — MedicalClinic Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics/>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
