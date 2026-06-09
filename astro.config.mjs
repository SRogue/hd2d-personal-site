import { defineConfig } from 'astro/config';

// Vercel 部署在根路径，GitHub Pages 需要仓库名前缀
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  site: isVercel
    ? 'https://your-vercel-domain.vercel.app'
    : 'https://SRogue.github.io',
  base: isVercel ? '/' : '/hd2d-personal-site',
  outDir: 'dist',
  server: {
    host: true,
  },
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-moon',
      wrap: true,
    },
  },
});
