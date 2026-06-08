import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-domain.example',
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-moon',
      wrap: true,
    },
  },
});
