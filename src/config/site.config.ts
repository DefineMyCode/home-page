import type { SiteConfig } from '../types/config';

export const siteConfig: SiteConfig = {
  personal: {
    name: 'Dcsgo',
    avatar: 'https://avatars.githubusercontent.com/u/118088290?v=4',
    bio: '在编程的世界中不断探索的白日梦想家',
  },

  links: [
    {
      label: 'Developer',
      links: [
        {
          title: 'GitHub',
          url: 'https://github.com/DefineMyCode',
          icon: 'github',
          color: '#333333',
        },
        {
          title: 'Gitee',
          url: 'https://gitee.com/deng-chongshuang',
          icon: 'gitee',
          color: '#FF5722',
        },
        {
          title: 'Blog',
          url: 'https://faito.top',
          icon: 'blog',
          color: '#333333',
        },
        {
          title: 'Email',
          url: 'mailto:dcsgomail@163.com',
          icon: 'email',
          color: '#EA4335',
        },
      ],
    },
    {
      label: '\u793e\u4ea4\u5e73\u53f0',
      links: [
        {
          title: '\u54d4\u54e9\u54d4\u54e9',
          url: 'https://space.bilibili.com/415007949',
          icon: 'bilibili',
          color: '#00A1D6',
        },
      ],
    },
  ],

  seo: {
    title: 'Dcsgo',
    description: 'Dcsgo Homepage.',
    favicon: '/favicon.png',
    ogImage: 'https://avatars.githubusercontent.com/u/118088290?v=4',
    canonicalURL: 'https://dcsgo.com.cn',
    locale: 'zh-CN',
  },

  footer: {
    copyright: '\u00a9 2026 Dcsgo. All rights reserved.',
    showPoweredBy: true,
  },
};
