# 部署指南

本项目构建为纯静态站点，可以部署到任何静态托管平台。以下重点介绍 Cloudflare Pages 的部署方式。

## 前置要求

- [Node.js](https://nodejs.org/) 18 或更高版本
- npm 包管理器
- [Cloudflare](https://dash.cloudflare.com/) 账号

## 本地构建

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 本地预览构建结果
npm run preview
```

构建产物位于 `dist/` 目录，包含纯静态的 HTML、CSS、JS 和资源文件。

## 部署到 Cloudflare Pages

### 方式一：Git 集成（推荐）

这是最推荐的方式，每次推送代码时自动构建和部署。

1. **推送代码到 GitHub / GitLab**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **连接 Cloudflare Pages**

   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 **Workers & Pages** > **Create**
   - 选择 **Pages** > **Connect to Git**
   - 选择你的仓库

3. **配置构建设置**

   | 设置项 | 值 |
   |--------|-----|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

4. **环境变量**（可选）

   | 变量名 | 值 |
   |--------|-----|
   | `NODE_VERSION` | `22` |

5. 点击 **Save and Deploy**，等待构建完成。

之后每次推送到 `main` 分支都会自动触发部署。Pull Request 也会自动生成预览链接。

### 方式二：Wrangler CLI

适合 CI/CD 流水线或一次性部署。

```bash
# 安装 Wrangler CLI（如果未安装）
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
npm run build

# 部署到 Cloudflare Pages
npx wrangler pages deploy dist --project-name=personal-homepage
```

首次部署时会自动创建 Cloudflare Pages 项目。

### 方式三：Dashboard 直接上传

最简单的方式，无需命令行操作。

1. 本地运行 `npm run build`
2. 登录 Cloudflare Dashboard > Workers & Pages > Create
3. 选择 **Pages** > **Upload assets**
4. 将 `dist/` 目录拖拽上传
5. 点击部署

## 自定义域名

1. 在 Cloudflare Pages 项目设置中，进入 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名（如 `homepage.example.com`）
4. 根据提示配置 DNS 记录：
   - 如果域名在 Cloudflare 管理：会自动配置 CNAME 记录
   - 如果域名在其他服务商：需要手动添加 CNAME 记录，指向 `<project>.pages.dev`

## 更新 SEO 配置

部署后记得更新 `src/config/site.config.ts` 中的以下字段：

```typescript
seo: {
  canonicalURL: 'https://your-actual-domain.com',  // 你的实际域名
  // ...
},
```

同时更新 `astro.config.mjs` 中的 `site` 字段：

```javascript
export default defineConfig({
  site: 'https://your-actual-domain.com',
});
```

以及 `public/robots.txt` 中的 Sitemap URL。

## 常见问题

### 构建失败：Node.js 版本不兼容

在 Cloudflare Pages 环境变量中设置 `NODE_VERSION=22`。

### 资源 404

确保静态资源放在 `public/` 目录下，且路径正确。`public/avatar.jpg` 对应的访问路径为 `/avatar.jpg`。

### 自定义域名 SSL 证书

Cloudflare Pages 会自动为自定义域名签发 SSL 证书，通常在配置 DNS 后几分钟内生效。
