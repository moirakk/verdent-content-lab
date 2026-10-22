# Handoff · 接手说明

Read [README](README.md) → [Project index](PROJECT_INDEX.md) → [Brief](PROJECT_BRIEF.md) → [Actual state](CONTENT_MAP.md). Current selections are generated in [EPISODES.md](EPISODES.md) / 先看入口、索引、方向与实际状态；当前选用版查自动生成总览。

## Current sources · 当前修改源

- 001/002: [motion/_painted-story](motion/_painted-story/README.md) + per-episode episode.json; prepare into template-story/ / 两集共用剧情源与本集配置，准备为本集模板。
- 004: [template-acting](motion/004-that-was-a-sentence/template-acting/README.md), independent whole-cat acting, tray contact / 独立整猫连续动作与护盘。
- 003: episode.json + template-blue-polish/; 005: episode.json + template-interaction/ / 两条基准片用独立源。
- [Template map](motion/TEMPLATE_MAP.md) labels all earlier templates historical. Never edit a similarly named old template assuming it is current / 模板表标清历史，不按近似目录名猜当前源。

## Routine checks · 常规检查

```sh
npm run index
npm run check
```

Indexes do not rebuild film HTML or add versions. The checker verifies selected hashes, immutable mirrors, current JS, audio/video, media downloads and active Markdown links / 更新索引不重构成片或增版本；检查覆盖当前哈希、历史镜像、脚本、声音视频、下载和文档链接。

## Editing a film · 修改成片

1. Read its current README/config and creator rules; edit the selected source / 先读本集说明与规范，修改选用源。
2. For story films, prepare review templates; render the matching picture/audio into a NEW versioned videoExport path / 新剧情先准备模板，将匹配画面声音导出到新的版本文件。
3. Prepare final templates with matching downloads, then build only the changed episode config / 准备匹配下载后，只构建改动的剧集。
4. Refresh indexes, run checks, inspect playback/sound and phone staging, then sync source/output/archives together / 更新索引、检查实播声音和手机构图，再一并同步。
5. Mark release only after actual publication / 真实发布后再记发布。

Exact commands and dependencies: [scripts/README.md](scripts/README.md). Existing export files and audio versions are preserved by default; choose new names for new work / 具体命令见工具说明，新工作使用新名称，默认保留已有导出与声音。

## Preserve · 必须保留

Every versions/vNNN/ directory under motion/ and docs/motion/ is immutable. Keep supplied art/logo bytes, private reference photos outside docs/, stable episode IDs and earlier templates. Media duplication supports standalone snapshots; do not deduplicate by deleting archive assets / 两处永久历史不可改；原稿 Logo 不变、私有照片不进预览，集数路径和旧模板保留；不删必要副本去重。

The earlier accumulated handoffs are in [documentation history](archive/README.md); they are historical context, not current instructions / 累积交接另存为历史，不当作当前指令。

## Next · 下一步

[Task list](TASKS.md) contains current film-review gaps and archival follow-ups. Git sync and passing checks do not equal creative approval / 待办列出审片与归档缺口；Git 同步和检查通过不等于创意验收。

## Saved unfinished revisions · 已保存未完成改稿

[Production drafts / 制作中](WORK_IN_PROGRESS.md) tracks the new Verdent-led coffee/bakery stories and Halloween voice/motion pass. Selected episode.json files still point at completed films. Resume from each draft config; do not mistake working download placeholders for matching exports / 新品牌剧情与节日优化另存；选用配置仍指向完成片，接手读改稿配置，工作下载占位不可当新片。
