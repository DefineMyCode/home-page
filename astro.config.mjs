import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dcsgo.com.cn',
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
