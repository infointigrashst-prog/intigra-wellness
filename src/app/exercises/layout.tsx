import type { Metadata } from 'next';
import { buildMetadata } from '../../seo-config';

export const metadata: Metadata = buildMetadata('/exercises');

export default function ExercisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
