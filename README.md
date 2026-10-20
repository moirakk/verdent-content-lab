# Verdent Content Lab · Mochi & Lucky 内容工作室

A private home for reusable characters, comics, HTML motion, scripts, and social content. Maintainer: [@moirakk](https://github.com/moirakk).

用于长期保存和复用角色设定、漫画、动态 HTML、脚本与社媒内容的私有仓库。

> Character first. Joke second. Product third. / 先有人物，再有笑点，最后才是产品。

**Language / 语言：Repository documentation is bilingual (English + Chinese). All audience-facing content is English only. 仓库说明中英双语；漫画对白、动态片文字、标题、字幕、成品脚本和社媒文案全部使用英文。**

## Start Here · 接手入口

1. [Handoff / 交接说明](HANDOFF.md) — Current state, next steps, and rules / 当前状态、下一步与协作规则。
2. [Characters / 角色与照片](characters/README.md) — Meet Mochi and Lucky / 确认角色身份与真猫外貌。
3. [Content Map / 内容进度](CONTENT_MAP.md) — Published, planned, and selected versions / 已发布、待制作与当前选用版本。

## Find What You Need · 按用途查找

| Purpose / 目的 | Entry / 入口 |
| --- | --- |
| Understand the IP, style, and product facts / 看人设、画风、功能 | [Brand & Rules / 设定资料](brand/README.md) |
| Find the original cat photo / 找真猫参考图 | [Character References / 角色参考](characters/references/README.md) |
| Watch, edit, or reuse motion / 看动态片、改片、挑旧版 | [Motion / 动态内容](motion/README.md) |
| Continue the comic series / 继续漫画 | [Comics / 漫画内容](comics/README.md) |
| Prepare publishing copy / 准备发布文案 | [Captions / 社媒文案](captions/README.md) |
| Generate and archive HTML / 生成与保存 HTML | [Tools / 制作工具](scripts/README.md) |
| Preview locally / 本地浏览预览 | [Preview Home / 预览首页](docs/index.html) |

## Structure · 仓库结构

Stable paths keep existing works and version links usable. Each section has a bilingual README.

目录路径保持固定，每个分区都有双语说明，方便接手并继续使用已有作品和版本链接。

```text
verdent-content-lab/
├── README.md          Start here / 首页导航
├── HANDOFF.md         Handoff / 交接与下一步
├── CONTENT_MAP.md     Progress / 内容进度表
├── AGENTS.md          Working rules / 协作助手规则
├── brand/             IP, style, features / 设定、画风、产品功能
├── characters/        Character profiles + photo / 角色档案与照片
├── motion/            Animated HTML / 动态内容
│   ├── _template/     Shared working template / 共用工作模板
│   ├── 001-have-an-idea/
│   │   ├── index.html Selected version / 当前选用版
│   │   ├── episode.json Dialogue + timing / 对白与节奏
│   │   └── versions/  Every saved version / 全部历史版本
│   └── experiments/   Motion studies / 动效试验
├── comics/            EP.06, EP.07, ideas / 漫画正篇与选题
├── captions/          English publishing copy / 英文发布文案
├── docs/              Preview copies / 浏览器预览副本
└── scripts/           Build and archive tools / 生成与归档工具
```

## Current State · 当前状态

- Comics / 漫画：EP.05 **It Works on My Machine.** is published / 已发布 → **Mid-Autumn Special** (publication unverified / 发布状态待核实) → **EP.06** (next regular episode / 下一篇正篇) → EP.07.
- Motion 001 / 动态 001：**v001, 8 seconds / 8 秒** is selected; **v002, 12 seconds / 12 秒** is an alternative. Both are unpublished drafts / 两版均为未发布的待审样片。
- Missing archive / 待归档：EP.05 artwork and publishing link / EP.05 原稿与发布链接。EP.06 and EP.07 contain proposals, not finished artwork / EP.06、EP.07 目前只有选题说明。
- Pages / 线上预览：Not enabled; GitHub rejected private-repository Pages under the current plan / 当前套餐不支持该私有仓库的 Pages，尚无线上预览。

## Versions & Preview · 版本与预览

**Every HTML version stays as a separate file. / 每版 HTML 都保留独立文件。** See [Motion 001 History / 动态 001 版本列表](motion/001-have-an-idea/versions/index.html). The highest version number is not necessarily the selected version / 最大编号不代表当前选用版。

Download the repository and open an HTML file in a browser; GitHub's file view displays source code. No installation is needed to watch. Editing and generation steps are in [Tools / 制作工具](scripts/README.md).

下载仓库后用浏览器打开 HTML 即可观看，无需安装；GitHub 文件页展示的是源码。修改与生成步骤见工具说明。

## Ownership · 原创与使用范围

Original characters and content; all rights reserved. No open-source license is granted. Style references guide texture, linework, and spacing; character designs and compositions stay original. The original cat photo stays in private reference materials, outside `docs/`.

原创角色与内容保留全部权利，本仓库不附带开源授权。风格参考只借鉴纸张、线条和留白，不复制角色与构图。真猫照片保存在私有参考资料中，不放入预览目录。
