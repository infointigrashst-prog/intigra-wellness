import type { Metadata } from 'next';
import { buildMetadata } from '../../seo-config';

export const metadata: Metadata = buildMetadata('/services');

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
