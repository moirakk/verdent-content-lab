# Verdent Content Lab · Mochi & Lucky 内容工作室

**[🎬 成片｜点开录制 · Ready to record](成片.html)** · **[接手指南 · Handoff](HANDOFF.md)** · **[当前版本 · Selected cuts](EPISODES.md)**

Private source, media and version history for five original painted-cat shorts. All five selected cuts include English child voices, original music and matching MP4 downloads / 五集原创油画猫短片的私有源码、素材与历史；当前选用均含英文童声、原创配乐及匹配视频下载。

## Start here · 按用途进入

| I want to… / 我要… | Open / 入口 |
| --- | --- |
| Watch, record or download / 观看、录制、下载 | Clone/download the whole repository, then open [成片.html](成片.html) **locally** / 取回完整仓库后本地打开 |
| Continue editing on a new computer / 换人换电脑继续修改 | [HANDOFF.md](HANDOFF.md): setup, exact source paths, single-episode workflow / 环境、准确修改源、单集操作 |
| Confirm versions and current state / 查当前版本与进度 | [EPISODES.md](EPISODES.md) · [REPO_STATUS.md](REPO_STATUS.md) · [TASKS.md](TASKS.md) |
| Find art, voices, captions or history / 找画稿、声音、文案、历史 | [PROJECT_INDEX.md](PROJECT_INDEX.md) · [inventory/](inventory/README.md) |
| Understand character/style rules / 了解人设画风 | [PROJECT_BRIEF.md](PROJECT_BRIEF.md) · [brand/](brand/README.md) |

GitHub displays HTML as source; it does not play these files. Open the local recording entrance, then use the green full-screen sound button or download the voiced MP4. Existing films require no server/npm/Python installation / GitHub 文件页显示源码，录制请本地打开；绿色按钮全屏带声，下载视频已有声音，观看无需开发环境。

Current cuts: **001 v005 · 002 v004 · 003 v021 · 004 v009 · 005 v013**. The generated [episode table](EPISODES.md) is authoritative after future edits / 后续改动以自动版本总表为准。

## Editing quick start · 修改前准备

Node 22+ and ffmpeg/ffprobe must be on PATH. Commands run from repository root; `.nvmrc` selects Node 22 / 根目录执行，先安装 Node 与媒体工具。

```sh
npm ci
npx playwright install chromium
npm run doctor -- --render
npm run check -- --assets
```

Then follow [one-film editing instructions](HANDOFF.md). Indexing/checking does not rebuild a film. Current source is selected by each episode.json; similarly named old templates are historical / 下一步按单集指南修改，索引检查不重构成片，准确源码看本集配置。

## Repository map · 仓库分工

| Path / 路径 | Purpose / 用途 |
| --- | --- |
| [motion/](motion/README.md) | Selected configs, working templates, audio, exports and immutable versions / 当前配置源码、声音、视频与永久历史 |
| [docs/](docs/README.md) | Generated viewing library, covers, movies and HTML mirrors / 自动生成的观看副本与封面 |
| [characters/](characters/README.md) · [scenes/](scenes/README.md) · [brand/](brand/README.md) | Character/style references, lifestyle art and supplied logo / 角色画风参考、生活场景及原 Logo |
| [captions/](captions/README.md) · [comics/](comics/README.md) | Versioned English publishing copy and separate comic continuity / 英文发布草稿及独立漫画线 |
| [scripts/](scripts/README.md) · [inventory/](inventory/README.md) | Reproducible tools and generated source/media lookup / 制作检查工具与自动素材索引 |
| [archive/](archive/README.md) | Earlier documentation; current instructions are at root / 旧说明记录，现行指引在根目录 |

**Character first. Joke second. Product third. / 先人物，再笑点，最后产品。** Preserve the exact painted cats, original logo and all saved versions. Documentation is bilingual; audience-facing content stays English only. Keep the repository private and Pages disabled. All motion cuts remain unpublished review drafts / 保留油画猫、原标志和全部历史；说明双语、成品英文；仓库私有、不启用公开 Pages，动态均未发布待审。

Original characters/content. All rights reserved; no open-source licence / 原创内容保留全部权利，不提供开源授权。
