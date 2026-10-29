# Verdent Content Lab · Mochi & Lucky 内容工作室

## 🎬 [成片｜点开录制 · Ready to record](成片.html)

**从这里打开 5 集可录制成片，或下载含配音和 BGM 的视频 / Open the five recordable cuts or download MP4s with voices and music.**

Private sources and archives for the original painted cat series / 原创水粉小猫系列的私有源码与档案。

**Character first. Joke second. Product third. / 先人物，再笑点，最后产品。**

- [Watch all episodes / 观看全部剧集](docs/index.html) — Click **Play with sound**; MP4 downloads include voices and music / 点击带声播放，下载视频已含童声与配乐。
- [Repository status / 仓库现状（2026-10-29）](REPO_STATUS.md) — Recordable films, active drafts and source locations / 成片、改稿及源码位置。
- [Selected versions / 当前版本表](EPISODES.md) — Generated from the actual selected HTML hashes / 通过实际文件校验值确认选用版。
- [Project index / 项目总索引](PROJECT_INDEX.md) — Find sources, art, audio, captions and archives / 查找源码、画稿、声音、文案与历史。
- [Story revision records / 剧情改稿记录](WORK_IN_PROGRESS.md) — 002/004/005 completed and selected; creator review remains / 三条改稿已完成并选用，待创作者验看。
- [Continue work / 接手说明](HANDOFF.md) · [Tasks / 当前待办](TASKS.md)

## Repository layout · 目录分工

| Directory / 目录 | Contents / 内容 |
| --- | --- |
| [brand/](brand/README.md) | Character, visual and editorial rules; product research and proposals / 人设、视觉规范、产品资料及提案 |
| [characters/](characters/README.md) | Profiles, private references, expressions and pose studies / 档案、私有参考、表情与姿势 |
| [scenes/](scenes/README.md) | Reusable lifestyle scene keyframes / 可复用生活场景关键帧 |
| [motion/](motion/README.md) | Episode configs, editable templates, audio, movies and immutable versions / 剧集配置、模板、声音、视频及永久历史 |
| [comics/](comics/README.md) · [captions/](captions/README.md) | Separate comic continuity and version-labelled English publishing drafts / 独立漫画连续性与按版本标记的英文发布草稿 |
| [docs/](docs/README.md) | Generated viewing copies, covers and video downloads / 生成的观看副本、封面与下载 |
| [inventory/](inventory/README.md) | Generated episode/template map and media fingerprints / 生成的集数模板表及素材指纹目录 |
| [scripts/](scripts/README.md) | Build, render, audio and repository checks / 构建、渲染、声音与仓库检查 |
| [archive/](archive/README.md) | Superseded documentation snapshots / 已被替代的说明快照 |

Watch offline without installing anything. Editing requires Node 22+; rendering also needs Playwright/Chromium and ffmpeg. / 离线观看无需安装；修改构建需 Node 22+，渲染另需 Playwright/Chromium 与 ffmpeg。

```sh
npm run index
npm run check
```

These commands refresh indexes and check the repository; they do not rebuild films or create episode versions / 上述命令只更新索引和检查仓库，不重做成片或增加剧集版本。

Keep stable paths, original art and every saved HTML. Sources belong in motion/, viewing copies in docs/. Documentation is bilingual; finished content is English only. The repository stays private and all current films remain unpublished review drafts / 保持路径、原稿与全部 HTML；源码与观看副本分开；说明双语、成品英文；仓库私有，当前片均为未发布待审稿。

Original characters/content. All rights reserved; no open-source licence / 原创内容保留全部权利，不提供开源授权。
