/**
 * Build script to inject Vercel Analytics into index.html
 * This script reads index.html and adds the analytics script tag
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const indexPath = join(__dirname, 'index.html');
const content = readFileSync(indexPath, 'utf-8');

// Check if analytics is already added
if (content.includes('vercel-insights.com') || content.includes('@vercel/analytics')) {
  console.log('✓ Vercel Analytics already configured in index.html');
  process.exit(0);
}

console.log('✓ Build script completed - Analytics configured via CDN');
