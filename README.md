# Personal Homepage

基于 [Astro](https://astro.build) 构建的简约个人主页，部署在 [Cloudflare Pages](https://pages.cloudflare.com) 上。

## 特性

- **简约设计** — 居中单列布局，优雅的卡片式链接
- **暗/亮主题** — 支持手动切换，自动跟随系统偏好，刷新后保持
- **混合链接** — 同时支持开发者平台（GitHub、LinkedIn 等）和中文社交平台（微信、微博、B站等）
- **微信二维码** — 点击微信卡片弹出二维码模态框
- **SEO 友好** — Open Graph、Twitter Card、JSON-LD 结构化数据
- **零框架运行时** — 纯静态 HTML/CSS，仅约 30 行内联 JS 用于主题切换
- **单文件配置** — 所有个人信息和链接集中在一个配置文件中
- **无障碍支持** — 键盘导航、ARIA 标签、焦点样式、减弱动画

## 快速开始

```bash
# 1. 克隆项目
git clone <your-repo-url>
cd home-page

# 2. 安装依赖
npm install

# 3. 编辑配置（修改个人信息和链接）
# 编辑 src/config/site.config.ts

# 4. 本地预览
npm run dev

# 5. 构建
npm run build
```

## 技术栈

- **框架**: [Astro](https://astro.build) (Static Site Generator)
- **样式**: 原生 CSS + CSS 自定义属性
- **图标**: 内联 SVG（零外部依赖）
- **部署**: [Cloudflare Pages](https://pages.cloudflare.com)

## 项目结构

```
src/
├── config/site.config.ts   # 站点配置（个人信息、链接、SEO）
├── types/config.ts          # TypeScript 类型定义
├── layouts/BaseLayout.astro # HTML 外壳 + 主题初始化
├── components/              # UI 组件
│   ├── ProfileCard.astro    # 头像 + 姓名 + 简介
│   ├── LinkCard.astro       # 链接卡片（含 SVG 图标映射）
│   ├── LinkGroup.astro      # 链接分组
│   ├── ThemeToggle.astro    # 主题切换按钮
│   ├── Footer.astro         # 页脚
│   └── SEOHead.astro        # SEO meta 标签
├── styles/global.css        # 全局样式
└── pages/index.astro        # 主页面
```

## 文档

- [内容配置指南](docs/configuration.md) — 如何修改个人信息和链接
- [部署指南](docs/deployment.md) — Cloudflare Pages 部署方式
- [功能说明](docs/features.md) — 主题系统、SEO、无障碍等功能详解
- [本地开发](docs/development.md) — 开发环境搭建和项目结构
- [样式定制](docs/customization.md) — 修改主题颜色、布局、动画等

## 许可证

MIT
