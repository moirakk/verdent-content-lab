# Handoff · 从这里接手

Updated 2026-10-29. Start with [README](README.md), then [confirmed direction](PROJECT_BRIEF.md), [actual state](CONTENT_MAP.md) and [version guide](motion/VERSION_GUIDE.md). This guide gives the practical workflow / 本页提供实际操作，方向、状态与历史分工如前。

## Watch or record · 观看录制

Give the next maintainer access to this private GitHub repository, then clone/download the **whole repository**, then open [成片.html](成片.html) on the local computer. GitHub's file viewer shows HTML source; it does not play the film. No npm/Python/server setup is needed for viewing / 先授予接手者私有仓库访问权限，再取回完整仓库，再本地打开成片入口；GitHub 文件页显示源码，不播放 HTML，观看无需安装开发环境。

The green button restarts one movie with sound/full screen and pauses the others. “下载带声视频” gives the matching MP4. Each episode HTML also embeds its own download, so that HTML can be copied alone for offline review / 绿色按钮从头全屏带声并暂停其他片；下载含声音；各集 HTML 已内嵌资产和匹配视频，可单文件离线审看。

Current selections: **001 v005 · 002 v004 · 003 v021 · 004 v009 · 005 v013**. See [generated episode table](EPISODES.md) for authoritative versions/links. These are unpublished review cuts; further creator feedback and actual publication records remain / 当前五集可录制，自动总表管准确选用；均未发布待审，后续按创作者反馈处理。

## Where to edit · 改哪里

The `template` field in each episode.json selects the working source. Stable IDs are historical names: 004's ID is still “that-was-a-sentence” although its current title is Soft Launch / 以本集配置指定的模板为准，旧 ID 保持稳定，不按 ID 猜当前故事。

| Film / 剧集 | Configuration / 配置 | Editable source / 修改源 | Sound used / 选用声音 | Acting QA / 动作检查 |
| --- | --- | --- | --- | --- |
| 001 · The Corner Office | [episode.json](motion/001-have-an-idea/episode.json) | [_painted-story](motion/_painted-story/README.md), then prepare only 001 / 修改共用源后仅准备001 | template-story/assets/episode-score-raw.m4a → normalized mix / 原始混音再归一化 | Visually review all box poses and logo / 目测纸箱各姿势及标志 |
| 002 · One Tiny Feature | [episode.json](motion/002-tiny-feature/episode.json) | [template-verdent](motion/002-tiny-feature/template-verdent/README.md) | [v005-polish mix](motion/002-tiny-feature/audio/v005-polish-20261029/mix.json) | `npm run qa:stories` |
| 003 · Chief Nap Officer | [episode.json](motion/003-chief-nap-officer/episode.json) | [template-blue-polish](motion/003-chief-nap-officer/template-blue-polish/README.md) | [v004-blue-polish](motion/003-chief-nap-officer/audio/v004-blue-polish/README.md), episode-blue-polish-v001.m4a | `npm run qa:nap` |
| 004 · Soft Launch | [episode.json](motion/004-that-was-a-sentence/episode.json) | [template-bakery-preview](motion/004-that-was-a-sentence/template-bakery-preview/README.md) | [v006-polish mix](motion/004-that-was-a-sentence/audio/v006-polish-20261029/mix.json) | `npm run qa:stories` |
| 005 · A Little More | [episode.json](motion/005-halloween/episode.json) | [template-natural](motion/005-halloween/template-natural/README.md) | [v007-polish mix](motion/005-halloween/audio/v007-polish-20261029/mix.json) | `npm run qa:halloween` |

Other template directories and draft configs are earlier work. Their filenames do not make them current. [Template map](motion/TEMPLATE_MAP.md) labels current/historical roles / 其他模板与改稿配置是早期记录，状态查模板表。

## Set up a new editing computer · 新电脑准备

Use Node 22+ (`.nvmrc` selects 22), npm, ffmpeg and ffprobe on PATH. Install ffmpeg with the computer's package manager; Python 3 is only needed for sound work. The locked npm dependencies include Playwright and Sharp / 开发用 Node、npm 及可执行的 ffmpeg/ffprobe，Python 仅声音处理需要；浏览器和图像依赖已有锁文件。

```sh
npm ci
npx playwright install chromium
npm run doctor -- --render
npm run check -- --assets
```

For a fresh checkout, clone `https://github.com/moirakk/verdent-content-lab.git` and enter that folder first / 新电脑先克隆该地址并进入仓库目录。

Run commands from repository root. Chromium installation needs network; Linux may additionally require the OS packages reported by Playwright. Watching existing films remains offline / 命令在根目录运行；安装需联网，Linux 按浏览器报告补系统库，既有成片可离线看。

## Change one film · 修改一集

1. Read its config/source and [visual rules](brand/VISUAL_STYLE.md). Make the edit in the selected working template. For 001 only, edit `_painted-story` and run `node scripts/prepare-story-episodes.mjs --review --episode 001-have-an-idea` / 改选用源；001 还需单集准备。
2. Set `videoExport` in that episode.json to a **new** MP4 path, e.g. previews/v022-review.mp4 for the next 003 edit. Preserve earlier movies / 新导出用新文件名，旧视频保留。
3. Run its acting QA and inspect representative frames with sound and muted. Contact, dialogue and shape must still fit the story; code checks do not replace creator review / 运行对应动作检查，并看关键画面及开关声音效果，自动检查不代替创意验看。
4. Render the matching timeline, then copy that exact movie to the selected template's `assets/episode-export.mp4`. For 001, preparing without `--review` also restores its download link / 渲染匹配画面声音，再更新模板下载资产，001 最后还要准备以恢复下载链接。
5. Build only that film, refresh indexes and verify. Update its poster, English caption/alt text and handoff/status only if affected / 只构建改动集，更新索引检查；封面、文案和状态按实际改动同步。

Example for **003**, after editing source and choosing a new videoExport / 下例以003为例，先修改源码及新视频路径：

```sh
npm run qa:nap
npm run render:stories -- --episode 003-chief-nap-officer
node -e 'const fs=require("node:fs"),c=require("./motion/003-chief-nap-officer/episode.json");fs.copyFileSync("motion/"+c.id+"/"+c.videoExport,c.template+"/assets/episode-export.mp4")'
npm run build:episode -- motion/003-chief-nap-officer/episode.json
npm run index
npm run check -- --assets
```

Use the same render/build flow for 002/004/005 with their IDs. 001 has the additional preparation step described above. More details and poster commands: [tools](scripts/README.md) / 其他集替换 ID；001 多一步准备，封面等命令见工具说明。

## Preserve and deliver · 保留与交付

- Keep every `motion/*/versions/vNNN/` and `docs/motion/*/versions/vNNN/` immutable. Builds freeze new sources/assets and capture existing unarchived HTML automatically / 两处永久快照不可改，构建会自动保存新源与现有未存档 HTML。
- Preserve supplied art/logo bytes and native proportions. Private real-cat references stay outside docs/. Repeated media supports standalone/archived films; do not delete it as redundant / 原稿 Logo 不改，私有照片不进 docs，必要副本不删。
- Do not hand-edit generated film HTML, episode READMEs, inventory or version tables. Edit sources/metadata, then build/index / 生成输出不手改，修改源数据后重建。
- Keep source, matching MP4/download, new archive, covers/captions and generated indexes together in a private Git commit. Push the work when authorized; keep Pages disabled / 源码视频存档文案索引一起私有提交，按授权同步，Pages 保持关闭。

[Remaining review tasks](TASKS.md) · [Source/media lookup](PROJECT_INDEX.md) · [Earlier revision record](WORK_IN_PROGRESS.md) · [Documentation history](archive/README.md). Git sync and recordability do not imply publication / 同步和可录制不等于已发布。
