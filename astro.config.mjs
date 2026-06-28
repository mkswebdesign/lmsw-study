import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://site2.gomks.com',
  integrations: [sitemap()],
});
