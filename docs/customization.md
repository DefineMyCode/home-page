# 样式定制指南

本项目使用原生 CSS 和 CSS 自定义属性（CSS Variables）实现样式系统，所有样式集中在 `src/styles/global.css` 和各组件的 `<style>` 块中。

## 修改主题颜色

打开 `src/styles/global.css`，找到 `:root`（亮色）和 `[data-theme='dark']`（暗色）部分：

### 亮色主题

```css
:root {
  --color-bg: #fafaf9;             /* 页面背景 */
  --color-bg-card: #ffffff;        /* 卡片背景 */
  --color-text-primary: #1a1a2e;   /* 主文字 */
  --color-text-secondary: #6b7280; /* 次要文字 */
  --color-text-muted: #9ca3af;     /* 静音文字 */
  --color-border: #e5e7eb;         /* 边框 */
  --color-accent: #6366f1;         /* 强调色（焦点样式等） */
}
```

### 暗色主题

```css
[data-theme='dark'] {
  --color-bg: #0f0f1a;
  --color-bg-card: #1a1a2e;
  --color-text-primary: #e5e7eb;
  --color-text-secondary: #9ca3af;
  --color-text-muted: #6b7280;
  --color-border: #2d2d3f;
  --color-accent: #818cf8;
}
```

只需修改这些变量的值，整个站点的配色就会随之改变。

## 修改字体

在 `global.css` 中找到 `body` 的 `font-family` 属性：

```css
body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
}
```

当前使用系统字体栈，包含中文回退字体。如需使用自定义字体：

1. 将字体文件放入 `public/fonts/` 目录
2. 在 `global.css` 顶部添加 `@font-face` 声明
3. 更新 `font-family`

```css
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/MyFont.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: 'MyFont', -apple-system, /* ... */;
}
```

## 修改布局

### 页面最大宽度

```css
.container {
  max-width: 680px;   /* 调整这个值 */
  padding: 3rem 1.5rem;
}
```

### 卡片圆角

```css
:root {
  --radius-sm: 8px;    /* 小圆角 */
  --radius-md: 12px;   /* 中等圆角（卡片） */
  --radius-lg: 16px;   /* 大圆角（模态框） */
  --radius-full: 9999px; /* 完全圆形 */
}
```

## 修改链接卡片样式

链接卡片的样式在 `src/components/LinkCard.astro` 的 `<style>` 块中。

### 卡片间距

```css
/* 在 LinkGroup.astro 中 */
.group-links {
  gap: 0.625rem;  /* 卡片之间的间距 */
}
```

### 卡片悬浮效果

```css
/* 在 LinkCard.astro 中 */
.link-card:hover {
  transform: translateY(-2px);      /* 上浮距离 */
  box-shadow: 0 6px 20px var(--color-shadow-hover);  /* 阴影 */
  border-color: var(--brand-color); /* 品牌色边框 */
}
```

## 修改动画

### 入场动画

```css
/* 在 global.css 中 */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);  /* 起始偏移量 */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.5s ease-out both;  /* 持续时间和缓动 */
}
```

### 卡片交错延迟

交错延迟通过组件内联 `style` 的 `--delay` 变量控制，间隔在 `LinkCard.astro` 中：

```typescript
const delay = `${index * 60}ms`;  // 每个卡片间隔 60ms
```

### 禁用所有动画

如果你不想要入场动画，删除 `index.astro` 和各组件中的 `animate-fade-up` class 即可。

## 修改头像样式

头像样式在 `src/components/ProfileCard.astro` 的 `<style>` 中：

```css
.avatar {
  width: 96px;       /* 头像大小 */
  height: 96px;
  border-radius: 50%;  /* 改为 var(--radius-md) 变为圆角方形 */
  border: 3px solid var(--color-border);
}
```

## 修改过渡速度

```css
:root {
  --transition-fast: 0.2s ease;    /* 快速过渡（悬浮等） */
  --transition-normal: 0.3s ease;  /* 正常过渡（主题切换等） */
}
```
