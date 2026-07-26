import type { Metadata } from 'next';
import { buildMetadata } from '../../seo-config';

export const metadata: Metadata = buildMetadata('/about-us');

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
