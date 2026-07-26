import type { Metadata } from 'next';
import { servicesDetailsData } from '../../../services-data';
import { SITE_NAME, SITE_URL } from '../../../seo-config';

type Props = {
  params: Promise<{ slug: string }>;
};

/* --- Dynamic SEO Engine Integrated with root Layout Template --- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const currentService = servicesDetailsData[resolvedParams.slug];

  if (!currentService) {
    return {
      title: "Service Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  const canonicalPath = `/services/${resolvedParams.slug}`;

  const seoTitle = `${currentService.title} | ${SITE_NAME} Ahmedabad`;
  const seoDescription = `${currentService.tagline} ${currentService.overview.slice(0, 120)}...`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${currentService.title} | ${SITE_NAME}`,
      description: seoDescription,
      url: `${siteUrl}${canonicalPath}`,
      type: "article",
      images: [
        {
          url: `${siteUrl}/assets/intigra-wellness-logo_3.jpeg`,
          width: 800,
          height: 600,
          alt: currentService.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${currentService.title} | ${SITE_NAME}`,
      description: seoDescription,
      images: [`${siteUrl}/assets/intigra-wellness-logo_3.jpeg`],
    },
    other: {
      'geo.region': 'IN-GJ',
      'geo.placename': 'Ahmedabad',
      'geo.position': '23.0225;72.5714',
      'ICBM': '23.0225, 72.5714',
    },
  };
}

export default function ServiceDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
