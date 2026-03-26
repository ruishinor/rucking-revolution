import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import Critters from 'critters';

const hiddenRoutes = new Set([
  '/backstage',
  '/style-guide',
  '/branding-mockup',
  '/lead/after-action-reviews/submit',
]);

const crittersVitePlugin = {
  name: 'critters',
  transformIndexHtml: {
    order: 'post',
    async handler(html) {
      return await new Critters().process(html);
    }
  }
};

export default defineConfig({
  site: 'https://ruckingrevolution.org',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss(), crittersVitePlugin]
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !hiddenRoutes.has(pathname);
      }
    })
  ]
});
