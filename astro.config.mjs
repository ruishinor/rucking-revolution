import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import Critters from 'critters';

const hiddenRoutes = new Set([
  '/backstage',
  '/style-guide',
  '/branding-mockup',
  '/learn/after-action-reviews/submit',
]);

const config = {
  site: 'https://ruckingrevolution.org',
};

const crittersVitePlugin = {
  name: 'critters',
  transformIndexHtml: {
    order: 'post',
    async handler(html, ctx) {
      const criticalPaths = ['/', '/learn/articles', '/start-here', '/why-rucking'];
      const pathname = ctx?.filename ? new URL(ctx.filename, config.site).pathname : '';
      if (criticalPaths.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
        return await new Critters().process(html);
      }
      return html;
    }
  }
};

export default defineConfig({
  site: config.site,
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
