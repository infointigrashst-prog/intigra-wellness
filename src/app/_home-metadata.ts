import type { Metadata } from 'next';
import { buildMetadata } from '../seo-config';

/** Root page gets its own explicit metadata (overrides layout defaults) */
export const metadata: Metadata = buildMetadata('/');
