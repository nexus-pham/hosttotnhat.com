import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import astroIcon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hosttotnhat.com',
  server: {
    host: '0.0.0.0',
    port: 4322,
  },
  integrations: [
    sitemap(),
    astroIcon()
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['nexuspham.tail67c574.ts.net', 'localhost', '127.0.0.1'],
    },
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
