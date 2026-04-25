# 功能说明

## 主题系统

### 暗/亮模式切换

页面右上角有一个主题切换按钮（太阳/月亮图标），点击即可在暗色和亮色模式之间切换。

**工作原理：**

1. **防闪烁**：在 `<head>` 中放置同步内联脚本，在页面首次绘制之前就读取主题偏好并应用，避免出现白屏闪烁。

2. **系统偏好跟随**：首次访问时，自动检测操作系统的颜色偏好（`prefers-color-scheme`），暗色系统自动应用暗色主题。

3. **手动切换持久化**：用户手动切换主题后，选择保存在 `localStorage` 中，刷新页面或重新访问时保持。

4. **CSS 自定义属性**：通过 `data-theme` 属性切换 CSS 变量，实现即时无刷新主题切换，所有颜色平滑过渡。

### 颜色方案

| 属性 | 亮色模式 | 暗色模式 |
|------|----------|----------|
| 背景 | `#FAFAF9` (暖白) | `#0F0F1A` (深蓝黑) |
| 卡片背景 | `#FFFFFF` | `#1A1A2E` |
| 主文字 | `#1A1A2E` | `#E5E7EB` |
| 次要文字 | `#6B7280` | `#9CA3AF` |
| 边框 | `#E5E7EB` | `#2D2D3F` |
| 强调色 | `#6366F1` | `#818CF8` |

## 链接卡片

### 普通链接

- 点击后在新标签页中打开目标网站
- 悬浮时卡片上浮 2px，阴影增强，左侧图标变为品牌色
- 右侧箭头图标指示可点击方向

### 微信二维码

- 标记为 `type: 'qrcode'` 的链接不会跳转
- 点击后弹出原生 `<dialog>` 模态框，展示二维码图片
- 支持点击遮罩层或关闭按钮关闭
- 模态框带有毛玻璃背景效果

## 入场动画

页面加载时，各元素按顺序从下往上淡入：

- 个人信息区域先出现
- 各链接卡片按照顺序依次出现，间隔 60ms
- 动画总时长约 500ms，使用 ease-out 缓动
- 尊重 `prefers-reduced-motion`：如果用户系统设置了减少动画，则所有动画禁用

## SEO

### Meta 标签

页面包含完整的 SEO meta 标签：

- `<title>` 和 `<meta description>`
- Open Graph 标签（`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`）
- Twitter Card 标签（`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`）
- 规范链接 `<link rel="canonical">`

### 结构化数据

页面包含 JSON-LD 格式的 [Person](https://schema.org/Person) 结构化数据，帮助搜索引擎理解页面内容：

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://your-domain.pages.dev",
  "image": "https://your-domain.pages.dev/avatar.jpg",
  "description": "Your description"
}
```

## 无障碍支持

- **键盘导航**：所有交互元素可通过 Tab 键聚焦，Enter 键激活
- **焦点样式**：聚焦时显示 2px 紫色轮廓，与主题色协调
- **ARIA 标签**：主题切换按钮的 `aria-label` 随主题状态动态更新
- **语义化 HTML**：使用 `<main>`, `<section>`, `<footer>`, `<h1>`, `<h2>` 等语义标签
- **图片 alt 文字**：头像图片包含有意义的 alt 文字
- **减弱动画**：通过 `prefers-reduced-motion` 媒体查询禁用动画

## 性能

- **零 JS 框架**：Astro 默认不向浏览器发送任何框架运行时
- **内联脚本**：约 30 行 JS，内联在 HTML 中，无额外网络请求
- **系统字体栈**：使用操作系统内置字体，零字体文件下载
- **内联 SVG 图标**：无图标库或 CDN 依赖
- **CSS 极小**：全部样式压缩后不到 4KB
- **目标**：Lighthouse 全 100 分
