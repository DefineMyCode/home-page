import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-domain.pages.dev',
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
