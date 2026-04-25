# 内容配置指南

所有可定制的内容都集中在一个文件中：`src/config/site.config.ts`。

## 配置文件结构

```typescript
export const siteConfig: SiteConfig = {
  personal: { ... },  // 个人信息
  links: [ ... ],     // 链接分组
  seo: { ... },       // SEO 配置
  footer: { ... },    // 页脚配置
};
```

## 个人信息 (personal)

| 字段 | 类型 | 说明 |
|------|------|------|
| `name` | string | 显示名称 |
| `avatar` | string | 头像路径（相对于 `public/` 目录）或外部 URL |
| `bio` | string | 一句话简介 |

```typescript
personal: {
  name: '张三',
  avatar: '/avatar.jpg',       // public/avatar.jpg
  bio: '全栈开发者 / 开源爱好者',
},
```

### 更换头像

将头像图片放入 `public/` 目录，然后在配置中更新路径：

```typescript
avatar: '/my-photo.png',  // 对应 public/my-photo.png
```

也可以使用外部 URL：

```typescript
avatar: 'https://avatars.githubusercontent.com/u/12345678',
```

## 链接分组 (links)

链接按分组组织，每个分组包含一个标签和一组链接：

```typescript
links: [
  {
    label: 'Developer',        // 分组标题
    links: [
      {
        title: 'GitHub',       // 显示名称
        url: 'https://github.com/username',  // 链接地址
        icon: 'github',        // 图标标识符
        color: '#333333',      // 品牌色（可选，用于悬浮效果）
      },
    ],
  },
],
```

### 可用图标

| 标识符 | 平台 |
|--------|------|
| `github` | GitHub |
| `blog` | 博客 |
| `linkedin` | LinkedIn |
| `email` | 邮箱 |
| `wechat` | 微信 |
| `weibo` | 微博 |
| `bilibili` | 哔哩哔哩 |
| `xiaohongshu` | 小红书 |
| `zhihu` | 知乎 |
| `douyin` | 抖音 |
| `twitter` | Twitter / X |
| `telegram` | Telegram |
| `discord` | Discord |
| `rss` | RSS |
| `link` | 通用链接（默认回退） |

### 微信二维码

微信没有直接的个人主页链接，使用二维码方式：

```typescript
{
  title: '微信',
  url: '#',
  icon: 'wechat',
  color: '#07C160',
  type: 'qrcode',              // 标记为二维码类型
  qrImage: '/wechat-qr.jpg',   // 二维码图片路径
},
```

1. 将微信二维码图片保存到 `public/wechat-qr.jpg`
2. 设置 `type: 'qrcode'` 和 `qrImage` 字段
3. 点击该卡片时会弹出模态框展示二维码

### 添加新链接

在对应分组的 `links` 数组中添加新对象即可：

```typescript
{
  title: '我的作品集',
  url: 'https://portfolio.example.com',
  icon: 'link',       // 使用通用链接图标
  color: '#6366f1',
},
```

### 添加新分组

在 `links` 数组中添加新的分组对象：

```typescript
links: [
  // ... 现有分组
  {
    label: '其他',
    links: [
      { title: 'RSS', url: '/rss.xml', icon: 'rss', color: '#f97316' },
    ],
  },
],
```

## SEO 配置 (seo)

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 页面标题（显示在浏览器标签页） |
| `description` | string | 页面描述（搜索引擎摘要） |
| `ogImage` | string | 社交分享预览图路径（可选） |
| `canonicalURL` | string | 规范链接 URL（可选） |
| `locale` | string | 语言区域（默认 `zh-CN`） |

```typescript
seo: {
  title: '张三 - 个人主页',
  description: '全栈开发者，开源爱好者。在这里找到我的所有社交链接。',
  ogImage: '/og-image.png',
  canonicalURL: 'https://your-domain.pages.dev',
  locale: 'zh-CN',
},
```

## 页脚配置 (footer)

| 字段 | 类型 | 说明 |
|------|------|------|
| `copyright` | string | 版权文字 |
| `showPoweredBy` | boolean | 是否显示 "Built with Astro" 信息 |

```typescript
footer: {
  copyright: '© 2025 张三. All rights reserved.',
  showPoweredBy: true,
},
```
