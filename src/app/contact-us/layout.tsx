import type { Metadata } from 'next';
import { buildMetadata } from '../../seo-config';

export const metadata: Metadata = buildMetadata('/contact-us');

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
