# 链星云 | 影焰AI

基于 React、TypeScript、Vite 的 AI 多媒体创意平台官网。

![首页预览](reference/local-desktop.png)

## 运行

需要 Node.js 20.19+ 或 22.12+。

```bash
npm install
npm run dev
npm run build
npm run preview
```

开发地址默认是 `http://127.0.0.1:5173/`。生产部署需让 `/apparel/`、`/download/`、`/open-api/` 回退到 `index.html`。

## 页面与配置

- 首页：视频首屏、工作流、功能、展示案例、常见问题、联系入口。
- `/apparel/`：服装方案与拖动对比。
- `/download/`：平台推荐、网页版入口；客户端安装包待配置。
- `/open-api/`：API 场景说明和本地需求草稿。
- `src/config/brand.ts`：品牌名称、图标、登录地址。
- `public/images/brand/yinyan-logo.png`：用户提供的原始透明图标，导航、页脚和浏览器图标共用。
- `src/data/gallery.json`：本地展示素材；视频分类目前使用同一段本地演示视频。
- `src/styles/`：基础视觉样式与组件定制样式。

“立即体验”“免费生成”和其他进入平台的入口统一跳转 [影焰AI 登录页](https://yy.7w2.cn/login)。网站自身是展示前端，尚未接入生成任务后台。

客服入口统一展示 `public/images/contact/customer-service.jpg` 中的微信二维码，使用用户提供的原图。客户端安装包尚未配置，对应位置显示待配置状态。API 表单只保存在当前浏览器，支持复制内容，不会自动提交到服务器。

## 检查

```bash
npm run format:check
npm run build
```

浏览器检查需 Python 3、Playwright、Chrome，可通过 `CHROME_BIN` 指定浏览器路径，通过 `BASE_URL` 指定检查地址。

```bash
python3 -m pip install playwright
python3 scripts/verify-browser.py
```

`reference/` 保存当前品牌截图与验证结果。
