import type { Metadata } from 'next';
import { buildMetadata } from '../../seo-config';

export const metadata: Metadata = buildMetadata('/home-visits');

export default function HomeVisitsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
