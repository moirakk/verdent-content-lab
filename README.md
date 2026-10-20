# Verdent Content Lab

Mochi & Lucky 的长期内容工作室：复用原创角色、漫画、HTML motion、脚本与社媒内容。维护者：[@moirakk](https://github.com/moirakk)。

> Character first. Joke second. Product third.

Mochi 是冷静、理性、有 dry humor 的黄猫姐姐；Lucky 是热情、活泼、容易上头的黑猫弟弟。英文对白直接叫 Mochi / Lucky，不使用 sis / bro。Verdent 是自然存在于它们世界里的工具；每集先让角色和笑点成立。

## 从这里开始

- [内容总表与发布顺序](CONTENT_MAP.md)
- [IP Bible](brand/IP_BIBLE.md) · [视觉规范](brand/VISUAL_STYLE.md) · [产品功能与笑点库](brand/VERDENT_FEATURE_MAP.md)
- [Mochi](characters/mochi.md) · [Lucky](characters/lucky.md)
- [首条动态样片：Have an idea](motion/001-have-an-idea/index.html)
- [动态模板使用说明](motion/_template/README.md)

## 目录

```text
brand/                      IP、视觉与产品事实
characters/                 角色声线、表情与姿势
motion/_template/           复用 HTML / CSS / JS 源码
motion/001-have-an-idea/     首条独立 HTML 样片与对白配置
motion/experiments/         未定稿的动效试验
comics/ep06/                下一篇正篇
comics/ep07/                后续正篇占位
comics/ideas/               节日篇与选题池
captions/                   英文 caption、发布文案
scripts/                    独立 HTML 构建工具
docs/                       GitHub Pages 预览专用目录
CONTENT_MAP.md              唯一发布状态总表
```

## 本地预览与长期复用

直接在浏览器打开 `motion/001-have-an-idea/index.html`，无需安装依赖、联网或构建。画面为 4:5，推荐录制 1080 × 1350。`?capture=1` 隐藏录制控制按钮；`?t=6500` 固定到第 6.5 秒；空格暂停，R 重播，F 切换全屏。

更新模板或对白后，用 Node.js 18+ 运行 `node scripts/build-motion.mjs`，同时重建单文件样片与 `docs/` 预览。新片复制首条的 `episode.json`，改 id、标题和对白，再运行 `node scripts/build-motion.mjs motion/002-your-title/episode.json`。不要手工修改生成的 HTML。构建后检查预览，再提交源文件与生成文件。

**每一版 HTML 都保留独立文件**，不只依赖 Git 历史。构建时自动保存到 `motion/<id>/versions/v001/`、`v002/` 等目录；当前文件只是最新选用版，原存档永不覆盖。生成的新版本同时保存对白与模板源码，方便恢复或复制继续修改。相同 HTML 的重复构建不另存一份。

从 [001 历史版本列表](motion/001-have-an-idea/versions/index.html) 直接打开任意旧版；`versions/index.json` 记录来源、保存时间与校验值。Git commit 继续保留全仓库历史。每条片有独立编号；motion 001 与漫画 EP.06 是不同系列。添加内容时同步更新 `CONTENT_MAP.md`，只有实际发布后才能写 Published。

## 当前发布顺序

EP.05 **It Works on My Machine.** 已发布 → **Mid-Autumn Special**（接续的特别篇，发布状态待核实）→ **EP.06**（下一篇正篇）→ EP.07。不会把 Mid-Autumn Special 算成 EP.06。

首条 motion 是基于对话重建的原创样片：旧文件 `/mnt/data/verdent_motion_001.html` 在本次环境中不可访问。保留历史对话中的 8 秒节奏、原对白 “Mochi, I have an idea.” / “How tiny?” 与落点 “the project was not tiny.”，不是旧版原件，也尚未标记为已发布。

## GitHub Pages

预览配置采用 `main` 分支的 `/docs`。该目录只包含可展示的静态预览，内部设定、草稿和 caption 不复制进去。私有仓库的 Pages 需要账号套餐支持；仓库保持私有，Pages 网站通常公开可访问。以仓库 Settings → Pages 的实际状态为准。

本次实际启用请求被 GitHub 拒绝（HTTP 422：Your current plan does not support GitHub Pages for this repository）。**Pages 未启用，目前没有线上预览链接**；仓库保持私有，未修改套餐。可直接下载或本地打开样片。

未来套餐支持后，在 Settings → Pages 选择 Deploy from a branch → main → /docs。预期入口 `https://moirakk.github.io/verdent-content-lab/`，首片 `https://moirakk.github.io/verdent-content-lab/motion/001-have-an-idea/`；这些地址目前未部署。

原创角色与内容，保留全部权利；本仓库不附带开源授权。参考插画仅用于研究材质与线条语言，不复制参考账号角色、构图或画面。
