# Mochi & Lucky · Motion Template

纯 HTML / CSS / JS，内嵌原创 SVG 猫，无远程依赖。4:5，内部 800 × 1000，默认 8 秒循环。

## 文件与生成

- `index.html`：纸张、对白、场景、角色 SVG 与默认配置。
- `style.css`：颜色、布局与轻动效。
- `motion.js`：通用对白时间轴、暂停、固定帧与录制控制。
- `../001-have-an-idea/episode.json`：第一条的标题与对白。

直接打开本目录 `index.html` 可预览模板。新片复制 episode.json 到新编号目录，设置唯一 `id`（如 `002-monday`），然后从仓库根目录运行：

```sh
node scripts/build-motion.mjs motion/002-monday/episode.json
```

会输出该条 `index.html`，并复制到 `docs/motion/<id>/index.html`。每个不同的 HTML 都先保存到 `motion/<id>/versions/v001/`、`v002/` 等永久版本目录；包含单文件 HTML、对白配置，以及生成时的模板源码。构建也会先捕获尚未归档的现有 HTML，再更新当前版。无内容变化的重复构建不会增加副本。首次捕获的旧 HTML 未必有分离源码，其单文件仍可直接修改。

打开 `motion/<id>/versions/index.html` 选择旧版；`versions/index.json` 记录保存时间、内容校验值与来源。版本号按归档顺序，不冒充历史创作日期。历史目录不得覆盖或删除。旧版继续创作时，复制其 `episode.json` 到新编号目录，再把该版本的 `template/` 复制到工作副本中进行修改；单文件 HTML 也可以复制后独立修改。先保存新副本，保留原存档。

样片为单文件，样式、脚本和 SVG 均内联，适合离线录屏。默认构建只更新 001；更改模板后，其他已存在片子也要逐条重新构建。`docs/index.html` 的导航手动维护；预览目录同步保存各版本 HTML 与浏览版历史列表，不发布角色设定或模板源码。

## 配置

`duration` 为毫秒；`beats` 按 `at` 从 0 递增，每个 beat 包含 `speaker`（Mochi / Lucky）和 `text`。最后一句显示到循环结束，留出读完笑点的时间。标题与页脚都是片中内容，保持简短。

`?capture=1` 隐藏片外按钮；`?t=6500` 固定时间并暂停，用于截图。空格暂停 / 播放，R 重播，F 全屏。浏览器设置减少动态效果时，自动从静帧开始，关闭环境动效；可用播放按钮主动阅读对白。

验收：手机宽度可读、文字不重叠、4:5 无裁切、末句有停顿、颜色身份不互换、暂停冻结全部动效。对白文本也以隐藏的可访问 transcript 提供。脚本和浏览器控制不进入录制画面。

内容以 [IP Bible](../../brand/IP_BIBLE.md) 为准。先写人物和笑点，产品可以只是桌面上的工具。
