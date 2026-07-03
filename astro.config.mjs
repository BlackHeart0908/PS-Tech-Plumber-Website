import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: Replace with the real production domain before launch
const SITE_URL = process.env.SITE_URL ?? 'https://problemsolvertech.in'; // Production domain

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  output: 'static',
});
