export type Lang = 'en' | 'zh';

export const translations = {
  // ── Meta / Page ──
  'meta.title': {
    en: "Alex's Journey · HD-2D Personal Site",
    zh: "Alex 的旅途 · HD-2D 个人主页",
  },
  'meta.description': {
    en: 'A pixel-art HD-2D personal website inspired by Octopath Traveler.',
    zh: '受八方旅人启发的像素风 HD-2D 个人网站。',
  },

  // ── Hero ──
  'hero.title': {
    en: "Alex's Journey",
    zh: 'Alex 的旅途',
  },
  'hero.subtitle': {
    en: '— Chapter I: The Coder of the Starry Night —',
    zh: '— 第一章：星空下的编程者 —',
  },
  'hero.scrollHint': {
    en: '▼ Press to continue ▼',
    zh: '▼ 按下继续 ▼',
  },

  // ── Nav ──
  'nav.about': { en: 'About', zh: '关于' },
  'nav.blog': { en: 'Blog', zh: '博客' },
  'nav.projects': { en: 'Projects', zh: '项目' },
  'nav.contact': { en: 'Contact', zh: '联系' },

  // ── About ──
  'about.name': { en: 'Alex', zh: 'Alex' },
  'about.text': {
    en: "Welcome, traveler. I'm Alex — a developer who codes by moonlight and dreams in pixels. I craft web experiences with React, TypeScript and a touch of magic. ✦",
    zh: '欢迎，旅人。我是 Alex —— 一个在月光下写代码、在像素中做梦的开发者。我用 React、TypeScript 和一点点魔法打造 Web 体验。✦',
  },

  // ── Blog ──
  'blog.title': {
    en: '— Quest Log —',
    zh: '— 冒险日志 —',
  },
  'blog.minRead': {
    en: 'min',
    zh: '分钟',
  },

  // ── Projects ──
  'projects.title': {
    en: '— Equipment —',
    zh: '— 装备栏 —',
  },
  'projects.react-forge.desc': {
    en: 'A component library forged in starlight.',
    zh: '在星光中锻造的组件库。',
  },
  'projects.auth-shield.desc': {
    en: 'OAuth2 toolkit. Blocks 99% of attacks.',
    zh: 'OAuth2 工具包，拦截 99% 的攻击。',
  },
  'projects.realtime-orb.desc': {
    en: 'WebSocket framework with auto-reconnect.',
    zh: '自动重连的 WebSocket 框架。',
  },
  'projects.docsage.desc': {
    en: 'Markdown to docs in one incantation.',
    zh: '一句咒语，Markdown 变文档。',
  },
  'projects.cli-blade.desc': {
    en: 'A swift command-line tool for devs.',
    zh: '为开发者打造的轻快命令行工具。',
  },
  'projects.pixelkingdom.desc': {
    en: "This very website you're exploring.",
    zh: '就是你正在浏览的这个网站。',
  },

  // ── Contact ──
  'contact.title': {
    en: 'Send a Message',
    zh: '发送消息',
  },
  'contact.text': {
    en: 'Find me at the tavern, or send a raven:',
    zh: '来酒馆找我，或者放只渡鸦：',
  },
  'contact.email': { en: '✉ Email', zh: '✉ 邮箱' },
  'contact.github': { en: '⚙ GitHub', zh: '⚙ GitHub' },
  'contact.twitter': { en: '𝕏 Twitter', zh: '𝕏 推特' },
  'contact.footer': {
    en: '— End of Chapter I —',
    zh: '— 第一章 · 完 —',
  },

  // ── Blog Post ──
  'post.back': {
    en: '◄ Back to Quest Log',
    zh: '◄ 返回冒险日志',
  },
  'post.minRead': {
    en: 'min read',
    zh: '分钟阅读',
  },

  // ── BGM ──
  'bgm.toggle': {
    en: 'Toggle BGM',
    zh: '切换背景音乐',
  },

  // ── Language Toggle ──
  'lang.toggle': {
    en: '中文',
    zh: 'EN',
  },
} as const;

export type TranslationKey = keyof typeof translations;
