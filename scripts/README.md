# Tools · 制作与维护工具

Watch built HTML/MP4 without installing anything. Development requires Node 22+, Python with [audio requirements](requirements-audio.txt), and ffmpeg/ffprobe. Browser rendering also requires Playwright + Chromium / 观看无需安装；制作需 Node、Python 声音依赖和 ffmpeg，浏览器渲染另需 Playwright/Chromium。

## Maintain indexes · 维护索引

```sh
npm run index
npm run check
```

index refreshes the episode library, source/template map, media catalog and version guide. check verifies current files, archive hashes/mirrors, audio/video, current JS and active documentation links. Neither rebuilds episode films / 更新目录模板素材及版本索引；检查当前文件、历史哈希镜像、声音视频与文档；均不重构成片。

## Build a changed episode · 构建改动剧集

```sh
npm run build:episode -- motion/005-halloween/episode.json
```

Edit the template selected by episode.json, not an old similarly named directory. Builds preserve existing HTML, freeze new source/assets and update docs copies; identical output does not add a version. Never edit versions/vNNN/ / 修改配置实际选用模板；构建保留旧稿、冻结新源并更新副本，相同输出不重复编号；历史不改。

## Story films 001/002/004 · 生活短剧流程

1. Edit [shared story source](../motion/_painted-story/README.md) for 001/002, or [004 acting source](../motion/004-that-was-a-sentence/template-acting/README.md), plus episode config / 前两集改共用源，004 改独立整猫动作源与配置。
2. Generate speech/score under NEW version names; verify real durations / 声音另起新版本并实测时长。
3. Set a NEW videoExport path; prepare review templates / 设置新视频路径并准备。
4. Render, prepare matching downloads, build changed episodes, refresh indexes and check / 渲染后准备匹配下载，再构建、更新索引检查。

```sh
node scripts/prepare-story-episodes.mjs --review
npm run render:stories
node scripts/prepare-story-episodes.mjs
npm run build:episode -- motion/001-have-an-idea/episode.json
npm run index
npm run check
```

The renderer defaults to all three story films and follows each episode's selected template. Use `--episode 004-that-was-a-sentence` to render only 004. The preparation script skips independent templates and accepts the same `--episode` filter. / 渲染按配置选择源码，可单集处理；准备脚本跳过独立模板。 Preserve existing previews by choosing new videoExport filenames; --replace-preview is for deliberate replacement only after the previous movie is archived. Temporary PNG frames stay in OS temp / 渲染器默认处理三集；新稿选新文件名，替换参数只用于旧片已存档后的明确替换，帧图留临时目录。

Install optional browser tooling with npm install then npx playwright install chromium. An external Playwright module can be supplied with RENDER_PLAYWRIGHT_MODULE / 可安装浏览器工具，或通过该变量使用外置模块。

## Script map · 脚本分工

| Script / 脚本 | Job / 职责 |
| --- | --- |
| build-recording-hub.mjs | Obvious recording entrance with full-screen sound playback and MP4 downloads / 显眼成片入口，全屏带声播放与视频下载 |
| build-motion.mjs | Immutable standalone HTML/source versioning / 单文件及源码永久归档 |
| build-episode-library.mjs | English browser library + bilingual episode table / 英文观看页及双语剧集表 |
| build-repository-index.mjs | Media fingerprints, template map, version guide / 素材指纹、模板与版本索引 |
| check-repository.mjs | Read-only consistency checks / 只读一致性检查 |
| prepare-story-episodes.mjs | Prepare selected art/audio/downloads for current story templates / 准备新剧情模板 |
| render-story-previews.cjs | Actual Chromium sampling + H.264/AAC output / 浏览器采样及带声视频 |
| voice-existing-score.py | Measured child speech over a chosen original score / 原谱上加入实测童声 |
| compose-story-scores.py | Original scene-specific notes/SFX / 独立场景原创配乐动作音 |
| build-episode-audio.py | Earlier generic voice/score workflow; retained / 保留较早通用声音流程 |
| sync-painted-series.mjs | Earlier unified-room source preparation; historical / 早期统一房间模板，历史保留 |

Network is needed to generate remote speech; already embedded playback works offline. Incomplete attempts remain labelled and never imply voices are present / 生成语音需联网，成片可离线；未完成尝试不得标成已有配音。

## Halloween v013 review · 万圣节新版审片

`render-story-previews.cjs --episode 005-halloween` follows render.width/height/fps/player in the selected config. `--config <draft episode.json>` renders a saved working configuration without selecting it as current. / 渲染支持本集尺寸帧率播放器；也可指定改稿配置预渲染，不切换当前成片。

`check-halloween.cjs [episode.json]` checks native character aspect, paw/key contact, dialogue bounds, deterministic seeking, sound start/pause/replay/end and reduced-motion pause. `mix-halloween-polish.py` remixes existing child recordings locally with smooth music ducking and new contact cues; no external TTS call / 检查原比例、接触、气泡、确定性与播放；声音脚本仅本地混合既有童声、柔和避让配乐并加动作声，不外发语音请求。

`check-story-revisions.cjs` verifies the coffee/bakery cuts: head bubbles, cookie contact/carry/bite, website timing, sound controls and deterministic seeking. `mix-story-polish.py` reuses existing child recordings locally with original retimed scores and smooth ducking; no external speech requests. Both mixers preserve earlier audio versions / 咖啡烘焙检查涵盖头顶对白、拿饼干送嘴、网页时序与播放；重混仅本地复用童声并保留旧版本。
