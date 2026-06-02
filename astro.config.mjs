import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// NOTE: @astrojs/sitemap is a v2 item (see plan.md). Re-add it with `integrations: [tailwind(), sitemap()]`
// once you have a stable domain — and re-enable the <link rel="sitemap"> in BaseLayout + robots.txt line.

// IMPORTANT: replace `site` with your real custom domain before deploying.
// It drives canonical URLs and absolute Open Graph image paths.
export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
