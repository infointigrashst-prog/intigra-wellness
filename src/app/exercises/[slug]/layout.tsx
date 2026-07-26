import type { Metadata } from 'next';
import { exercisesData } from '../../../exercises-data';
import { SITE_NAME, SITE_URL } from '../../../seo-config';

type Props = {
  params: Promise<{ slug: string }>;
};

/* --- Dynamic SEO Engine Integrated with root Layout Template --- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const currentExercise = exercisesData[resolvedParams.slug];

  if (!currentExercise) {
    return {
      title: "Exercise Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  const canonicalPath = `/exercises/${resolvedParams.slug}`;

  const seoTitle = `${currentExercise.title} | Physiotherapy Guide | ${SITE_NAME}`;
  const seoDescription = `${currentExercise.purpose} Learn step-by-step instructions, precautions, and target muscles for ${currentExercise.title} by Dr. Disha Vaghasiya.`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${currentExercise.title} | ${SITE_NAME}`,
      description: seoDescription,
      url: `${siteUrl}${canonicalPath}`,
      type: "article",
      images: [
        {
          url: `${siteUrl}${currentExercise.image}`,
          width: 800,
          height: 600,
          alt: currentExercise.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${currentExercise.title} | ${SITE_NAME}`,
      description: seoDescription,
      images: [`${siteUrl}${currentExercise.image}`],
    },
    other: {
      'geo.region': 'IN-GJ',
      'geo.placename': 'Ahmedabad',
      'geo.position': '23.0225;72.5714',
      'ICBM': '23.0225, 72.5714',
    },
  };
}

export default function ExerciseDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
