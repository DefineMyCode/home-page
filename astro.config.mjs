import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

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

  adapter: cloudflare()
});