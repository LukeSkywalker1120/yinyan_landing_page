# 影焰 AI Landing Page

参考 [ifrogai.com](https://www.ifrogai.com/) 2026 年 10 月 19 日可见的中文官网，使用 React + TypeScript + Vite 实现。此版本保留原站品牌、文案、图片、排版与主要交互，作为后续修改细节的基线。

![首页预览](reference/local-desktop.png)

## 运行

需要 Node.js 20.19+ 或 22.12+（当前使用 Node.js 24）。

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址，默认是 `http://127.0.0.1:5173/`。

```bash
npm run build     # TypeScript 检查及生产构建，输出至 dist/
npm run preview   # 预览生产构建
npm run format    # 格式化可编辑的源码
```

部署时需让 `/apparel/`、`/download/`、`/open-api/` 回退到 `index.html`。

## 页面与交互

| 页面     | 地址         | 已实现内容                                                                            |
| -------- | ------------ | ------------------------------------------------------------------------------------- |
| 首页     | `/`          | 视频首屏、三种生成流程、服装入口、场景介绍、12 项功能、六类作品案例、常见问题、联系区 |
| 服装方案 | `/apparel/`  | 对比滑块、效果展示、方案说明、常见问题                                                |
| 下载     | `/download/` | Windows / macOS 自动推荐、平台下载链接、网页版入口                                    |
| API 接入 | `/open-api/` | 能力介绍、接入场景、邮箱和需求表单                                                    |

通用交互包括滚动导航、手机菜单、语言菜单、代理加盟弹窗、客服和移动端二维码；案例支持图片组纵向滚动预览和视频卡片内播放。弹窗支持 Escape 关闭和焦点管理，页面适配手机、平板和桌面，并尊重系统“减少动态效果”设置。

## 后续从哪里修改

- `src/App.tsx`：页面组装、路径选择、通用弹窗状态。
- `src/components/Hero.tsx`、`HeroVideo.tsx`：首屏文案、布局和视频。
- `src/components/Workflow.tsx`、`WorkflowState*.tsx`：三组流程内容。
- `src/components/Gallery.tsx`、`src/data/gallery.json`：案例界面与案例数据。
- `src/components/FAQ.tsx`、`ContactSection.tsx`：问答和联系区。
- `src/components/SiteHeader.tsx`、`Footer.tsx`：导航和页脚。
- `src/components/*PageSections.tsx`：服装、下载、API 三个子页面。
- `src/styles/reference.css`：原站的基础视觉样式，保留用于还原。
- `src/styles/app.css`：交互组件样式与定制覆盖，后续细节调整优先放这里。
- `public/`：本地静态图片、缩略图、首屏视频。

## 功能边界与素材

这是公开官网的前端实现。桌面和手机菜单的“立即体验”跳转到 [影焰 AI 登录页](https://yy.7w2.cn/login)。免费生成和客户端下载安装链接目前保留原站地址，尚未接入自己的支付或 AI 生成服务。语言菜单链接到原站对应语言页面。

API 表单先保存在当前浏览器的 localStorage，明确显示“登记内容已保存”；用户点击“打开邮件草稿”后由本机邮件客户端处理。当前没有服务端登记，也没有自动发送邮件。

首页、子页面的静态素材，以及 85 张案例封面和 5 张首屏预览图已本地化。图库是当日公开案例的快照，不随原站自动更新。案例预览的大图和案例视频仍使用原站公开 CDN 地址，因此这些预览需要联网。

`reference/assets-manifest.json` 记录素材来源、路径与大小。原站品牌、素材及下载包仍归其各自权利人所有。

## 验证记录

- `npm run build`：类型检查与生产打包。
- `scripts/verify-browser.py`：工作流切换、案例分类、预览、FAQ、弹窗、对比滑块、下载页系统识别、API 本地保存、移动菜单等浏览器交互检查。
- 390、768、1024、1280、1440 像素宽度检查横向溢出。
- `reference/verification.json`：检查结果；同目录 PNG 是桌面、手机和子页面截图。
- `reference/visual-comparison.json`：原站与本地版在相同桌面视口下的区块几何对照。动态视频帧与实时案例可能随时间变化。

可选浏览器验证需要 Python 3、Playwright 与 Chrome；脚本默认使用 macOS Chrome，也可设置 `CHROME_BIN` 指定浏览器路径：

```bash
python3 -m pip install playwright
python3 scripts/verify-browser.py
```
