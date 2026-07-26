import type { Metadata } from 'next';
import { buildMetadata } from '../../seo-config';

export const metadata: Metadata = buildMetadata('/faq');

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
