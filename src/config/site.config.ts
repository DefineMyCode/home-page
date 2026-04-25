import type { SiteConfig } from '../types/config';

export const siteConfig: SiteConfig = {
  personal: {
    name: 'Your Name',
    avatar: '/avatar.jpg',
    bio: 'Developer / Designer / Creator',
  },

  links: [
    {
      label: 'Developer',
      links: [
        {
          title: 'GitHub',
          url: 'https://github.com/yourusername',
          icon: 'github',
          color: '#333333',
        },
        {
          title: 'Blog',
          url: 'https://yourblog.com',
          icon: 'blog',
          color: '#FF5722',
        },
        {
          title: 'LinkedIn',
          url: 'https://linkedin.com/in/yourusername',
          icon: 'linkedin',
          color: '#0077B5',
        },
        {
          title: 'Email',
          url: 'mailto:you@example.com',
          icon: 'email',
          color: '#EA4335',
        },
      ],
    },
    {
      label: '\u793e\u4ea4\u5e73\u53f0',
      links: [
        {
          title: '\u5fae\u4fe1',
          url: '#',
          icon: 'wechat',
          color: '#07C160',
          type: 'qrcode',
          qrImage: '/wechat-qr.jpg',
        },
        {
          title: '\u5fae\u535a',
          url: 'https://weibo.com/yourusername',
          icon: 'weibo',
          color: '#E6162D',
        },
        {
          title: '\u54d4\u54e9\u54d4\u54e9',
          url: 'https://space.bilibili.com/youruid',
          icon: 'bilibili',
          color: '#00A1D6',
        },
        {
          title: '\u5c0f\u7ea2\u4e66',
          url: 'https://www.xiaohongshu.com/user/profile/yourid',
          icon: 'xiaohongshu',
          color: '#FE2C55',
        },
        {
          title: '\u77e5\u4e4e',
          url: 'https://www.zhihu.com/people/yourusername',
          icon: 'zhihu',
          color: '#0084FF',
        },
      ],
    },
  ],

  seo: {
    title: 'Your Name - Personal Homepage',
    description: 'Developer, designer, and creator. Find all my links and social profiles here.',
    ogImage: '/og-image.png',
    canonicalURL: 'https://your-domain.pages.dev',
    locale: 'zh-CN',
  },

  footer: {
    copyright: '\u00a9 2025 Your Name. All rights reserved.',
    showPoweredBy: true,
  },
};
