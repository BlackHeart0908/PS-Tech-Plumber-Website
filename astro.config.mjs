import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: Replace with the real production domain before launch
const SITE_URL = process.env.SITE_URL ?? 'https://pstech.in'; // TODO: CONFIRM FINAL DOMAIN

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  output: 'static',
});
