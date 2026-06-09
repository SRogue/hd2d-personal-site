/**
 * 轻量级客户端 i18n 运行时
 * 使用 data-i18n="key" 属性标记可翻译元素
 * 使用 data-i18n-attr="attr:key" 翻译属性（如 title、placeholder）
 */
import { translations, type Lang, type TranslationKey } from './translations';

let currentLang: Lang = 'en';

export function getLang(): Lang {
  return currentLang;
}

export function setLang(lang: Lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  applyTranslations();
}

export function t(key: TranslationKey, lang?: Lang): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang ?? currentLang] ?? entry.en;
}

export function applyTranslations() {
  // 翻译文本内容: data-i18n="key"
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n') as TranslationKey;
    const translated = t(key);
    if (translated !== el.textContent) {
      el.textContent = translated;
    }
  });

  // 翻译属性: data-i18n-attr="attr:key" (多个用逗号分隔)
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const pairs = el.getAttribute('data-i18n-attr')!.split(',');
    for (const pair of pairs) {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) {
        el.setAttribute(attr, t(key as TranslationKey));
      }
    }
  });

  // 更新 data-full 属性（用于 About 组件的打字机效果）
  document.querySelectorAll<HTMLElement>('[data-i18n-full]').forEach((el) => {
    const key = el.getAttribute('data-i18n-full') as TranslationKey;
    el.setAttribute('data-full', t(key));
  });

  // 触发语言切换事件
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

// 初始化：从 <html lang="..."> 或默认值读取
export function initI18n() {
  const htmlLang = document.documentElement.lang;
  if (htmlLang.startsWith('zh')) {
    currentLang = 'zh';
  } else {
    currentLang = 'en';
  }
  applyTranslations();
}
