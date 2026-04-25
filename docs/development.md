# 本地开发指南

## 环境要求

- [Node.js](https://nodejs.org/) 18 或更高版本
- npm 包管理器（随 Node.js 一起安装）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

开发服务器默认运行在 `http://localhost:4321`，支持热更新。

## 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（带热更新） |
| `npm run build` | 构建生产版本到 `dist/` |
| `npm run preview` | 本地预览生产构建结果 |

## 项目结构详解

```
src/
├── config/
│   └── site.config.ts        # 站点配置文件（唯一需要编辑的文件）
├── types/
│   └── config.ts             # TypeScript 接口定义
├── layouts/
│   └── BaseLayout.astro      # 页面外壳（HTML head/body，主题初始化）
├── components/
│   ├── SEOHead.astro          # SEO meta 标签生成
│   ├── ThemeToggle.astro      # 暗/亮模式切换按钮
│   ├── ProfileCard.astro      # 个人信息展示（头像+姓名+简介）
│   ├── LinkCard.astro         # 单个链接卡片（含图标映射+QR模态框）
│   ├── LinkGroup.astro        # 链接分组容器
│   └── Footer.astro           # 页脚
├── styles/
│   └── global.css             # 全局样式（Reset + 主题变量 + 排版）
└── pages/
    └── index.astro            # 主页面（组合所有组件）
```

### 数据流

```
site.config.ts
    ↓
index.astro (读取配置，分发给组件)
    ↓
BaseLayout ← SEOHead (接收 seo + personal)
    ↓
ProfileCard (接收 personal)
    ↓
LinkGroup × N (接收 group + baseIndex)
    ↓ 
LinkCard × N (接收 link + index)
    ↓
Footer (接收 footer)
```

## 添加新图标

图标映射定义在 `src/components/LinkCard.astro` 中的 `iconPaths` 对象里。

1. 获取 SVG 图标的 path data（推荐从 [Lucide](https://lucide.dev/)、[Simple Icons](https://simpleicons.org/) 获取）
2. 在 `iconPaths` 对象中添加新条目：

```typescript
const iconPaths: Record<string, string> = {
  // ... 现有图标
  myicon: 'M12 2L2 7l10 5...', // SVG path data
};
```

3. 如果图标使用 fill 而非 stroke，还需要在 `fillIcons` Set 中添加：

```typescript
const fillIcons = new Set(['github', 'bilibili', 'discord', 'douyin', 'myicon']);
```

4. 在配置文件中使用：

```typescript
{ title: 'My Platform', url: '...', icon: 'myicon', color: '#FF0000' }
```

## Astro 组件基础

Astro 组件使用 `.astro` 文件格式，包含三部分：

```astro
---
// Frontmatter (服务端 TypeScript)
// 在构建时执行，不发送到浏览器
import Component from './Component.astro';
const { prop } = Astro.props;
---

<!-- Template (HTML) -->
<div>{prop}</div>

<style>
  /* Scoped CSS (仅作用于当前组件) */
  div { color: red; }
</style>

<script>
  /* Client-side JavaScript (发送到浏览器) */
</script>
```

更多信息参考 [Astro 官方文档](https://docs.astro.build)。
