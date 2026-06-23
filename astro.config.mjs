import { defineConfig } from 'astro/config';

/**
 * 双平台部署适配：Cloudflare Pages + GitHub Pages
 * 优先级：
 * 1. 用户显式传入 SITE_URL + BASE_PATH（用于自定义域名或本地调试）
 * 2. Cloudflare Pages（根路径部署）
 * 3. GitHub Pages（子路径 /hd2d-personal-site）
 * 4. 本地开发
 */
function resolveSiteAndBase() {
  if (process.env.SITE_URL && process.env.BASE_PATH) {
    return {
      site: process.env.SITE_URL,
      base: process.env.BASE_PATH,
    };
  }

  // Cloudflare Pages: CF_PAGES=1，CF_PAGES_URL 为完整 URL
  if (process.env.CF_PAGES) {
    return {
      site: process.env.CF_PAGES_URL || 'https://your-pages-domain.pages.dev',
      base: '/',
    };
  }

  // GitHub Pages：由仓库 Actions 显式传入 GITHUB_PAGES=true
  if (process.env.GITHUB_PAGES) {
    return {
      site: 'https://SRogue.github.io',
      base: '/hd2d-personal-site',
    };
  }

  // 本地开发
  return {
    site: 'http://localhost:4321',
    base: '/',
  };
}

const { site, base } = resolveSiteAndBase();

export default defineConfig({
  site,
  base,
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
