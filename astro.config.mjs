import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.aniket.xyz',
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true,
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
