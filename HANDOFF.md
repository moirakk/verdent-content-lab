# Handoff · 接手指南

**[录制下载 · Watch](成片.html)** · [当前版本 · Versions](EPISODES.md) · [方向 · Brief](PROJECT_BRIEF.md) · [实际状态 · State](CONTENT_MAP.md)

Clone the private repository and open 成片.html locally; viewing needs no setup / 接手者获私有仓库权限后取回完整仓库，本地打开成片入口即可观看。当前五集可录制，均未发布待审 / Five recordable, unpublished review cuts.

## Edit here · 修改源

Each episode.json selects its template; other templates/draft configs are historical / 本集配置指定当前模板，其他模板与改稿配置为历史。

| ID | Config / 配置 | Source / 源码 | QA / 检查 |
| --- | --- | --- | --- |
| 001 | [episode.json](motion/001-have-an-idea/episode.json) | [_painted-story](motion/_painted-story/README.md) | Box poses/logo / 目测纸箱与标志 |
| 002 | [episode.json](motion/002-tiny-feature/episode.json) | [template-verdent](motion/002-tiny-feature/template-verdent/README.md) | `npm run qa:stories` |
| 003 | [episode.json](motion/003-chief-nap-officer/episode.json) | [template-blue-polish](motion/003-chief-nap-officer/template-blue-polish/README.md) | `npm run qa:nap` |
| 004 | [episode.json](motion/004-that-was-a-sentence/episode.json) | [template-bakery-preview](motion/004-that-was-a-sentence/template-bakery-preview/README.md) | `npm run qa:stories` |
| 005 | [episode.json](motion/005-halloween/episode.json) | [template-natural](motion/005-halloween/template-natural/README.md) | `npm run qa:halloween` |

Mixed sound is in the selected template/assets; recordings/recipes are in each episode/audio / 混音在选用模板 assets，原声及配方在本集 audio，视觉修改可沿用。

## Workflow · 操作顺序

1. Install Node 22+, ffmpeg/ffprobe and locked dependencies using [setup commands](scripts/README.md). Python is only needed for audio / 按工具说明安装，Python 仅声音处理需要。
2. Edit selected source/config; choose a **new** videoExport filename. Only 001 needs shared-template preparation / 修改选用源，新导出用新名，001 多准备一步。
3. Run the film's QA, inspect key frames/sound, render, then copy the exact movie into template/assets/episode-export.mp4 / 检查审看后渲染，复制匹配视频供下载。
4. Build that episode, update affected cover/caption, run index/check, commit matching source/output/history together / 单集构建，更新对应封面文案、索引检查，再一起提交。

[Exact commands / 完整命令](scripts/README.md) · [Asset lookup / 素材查找](PROJECT_INDEX.md) · [Next tasks / 待办](TASKS.md)

Never edit versions/vNNN/, delete required media copies or alter supplied art/logo proportions. Private references stay outside docs/. Generated files are rebuilt from source / 永久历史不改、必要副本不删、原稿比例不变；私有参考不进 docs，生成文件通过源码重建。
