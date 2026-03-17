import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import Critters from 'critters';

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
  vite: {
    plugins: [tailwindcss(), crittersVitePlugin]
  },
  integrations: [sitemap(), vercel()],
  output: 'server'
});
