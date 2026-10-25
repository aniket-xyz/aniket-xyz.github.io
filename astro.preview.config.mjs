import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const satteriStub = fileURLToPath(new URL('./scripts/preview/satteri-stub.mjs', import.meta.url));

export default defineConfig({
  site: 'https://www.aniket.xyz',
  trailingSlash: 'always',
  prefetch: { defaultStrategy: 'hover', prefetchAll: true },
  image: { service: { entrypoint: 'astro/assets/services/noop' } },
  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { '@astrojs/markdown-satteri': satteriStub } },
    ssr: { noExternal: ['@astrojs/markdown-satteri'] },
  },
  integrations: [],
});
