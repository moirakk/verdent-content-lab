# Tools · 制作与维护工具

Start with [Handoff / 接手指南](../HANDOFF.md) for the exact selected sources and edit sequence. Run commands from repository root. Watching existing HTML/MP4 needs no installation / 先读交接了解修改源与顺序，命令在根目录执行，观看成片无需安装。

## Environment · 环境

Node 22+, ffmpeg/ffprobe, and locked Playwright/Sharp are used for rendering and QA. Python 3 is only needed for audio processing; edge-tts is only needed for new online speech / 渲染检查需 Node、媒体工具及锁定依赖；Python 用于声音处理，在线新配音才需语音包。

```sh
npm ci
npx playwright install chromium
npm run doctor -- --render
```

`doctor` is read-only and offline: checks installed tools without generating films or calling services. Without `--render` it checks basic indexing/repository-check prerequisites / 环境检查只读离线，无参数检查基础维护工具，带参数检查浏览器及图像依赖。

Existing managed runtimes can supply `RENDER_PLAYWRIGHT_MODULE` and `RENDER_SHARP_MODULE` as absolute module paths. Normal local installs need neither variable. Do not copy another person's absolute paths / 托管环境可指定外置模块，标准安装无需变量，不照抄他人电脑绝对路径。

## Index and verify · 索引与检查

```sh
npm run index
npm run check -- --assets
```

`index` refreshes the recording hub, episode library, source/template map, media fingerprints and version guide. `check` is read-only; `--assets` additionally hashes all media. Neither renders/rebuilds a film / 索引更新入口、模板素材和版本表；检查只读，附加参数核对全部媒体指纹，两者不重做成片。

Generated files: root 成片.html, docs/index.html, EPISODES.md, inventory JSON, motion README/version/template maps and per-episode READMEs. Edit their generator or metadata, then regenerate / 这些文件由脚本生成，不手改。

## Render and build one film · 单集渲染构建

1. Edit only the template selected by its episode.json. **001** uses `_painted-story` and needs preparation; **002** uses template-verdent, **003** template-blue-polish, **004** template-bakery-preview, **005** template-natural / 修改选用源，001 多准备一步。
2. Choose a new `videoExport` filename. Render with `--episode <id>`; `--config <episode.json path>` previews an unselected working config. The default without either filter renders 001/002/004, so use a filter when changing one film / 新视频用新名；指定单集或工作配置，省略则处理三条生活短剧。
3. Copy the matching video to the selected template's assets/episode-export.mp4. Build that config, refresh indexes and check / 复制匹配下载资产，再构建、索引与检查。

For **001 only**, before rendering / 仅001在渲染前执行：

```sh
node scripts/prepare-story-episodes.mjs --review --episode 001-have-an-idea
```

After rendering 001, run the same command without `--review` to restore its embedded download. Preparation intentionally skips independent templates; do not use the shared source to overwrite 002/004 / 001渲染后去掉该参数再准备以恢复下载，脚本会跳过独立模板。

Example for 003, after editing and choosing a new videoExport / 修改并设置新路径后，以003为例：

```sh
npm run qa:nap
npm run render:stories -- --episode 003-chief-nap-officer
node -e 'const fs=require("node:fs"),c=require("./motion/003-chief-nap-officer/episode.json");fs.copyFileSync("motion/"+c.id+"/"+c.videoExport,c.template+"/assets/episode-export.mp4")'
npm run build:episode -- motion/003-chief-nap-officer/episode.json
npm run index
npm run check -- --assets
```

 Renderer fields are `render.width`, `height`, `fps`, `player` and `audio`; omitted audio defaults to assets/episode-score.m4a. 003 specifies its original episode-blue-polish-v001.m4a. Assets are hydrated into a temporary standalone file and PNG frames remain in OS temp / 尺寸帧率播放器音轨按配置，003 指定原音轨；临时帧在系统临时目录。

Existing preview files are preserved by default. `--replace-preview` is reserved for deliberate replacement of an unarchived working render or after preserving the previous film; never change assets inside an existing versions/vNNN/ / 默认不覆盖视频，仅在工作导出未归档或已保存旧片时明确替换，永久存档内资产不可改。

## Acting checks · 动作与播放检查

Run the check for the film you changed, then visually inspect its reported temporary frames. These inspect current episode.json selections; they do not certify creative approval / 检查本次改动集并目测输出帧，使用当前选用配置，不代替创意验收。

| Command / 命令 | Coverage / 覆盖 |
| --- | --- |
| `npm run qa:stories` | 002/004: head bubbles, native proportions, requests, cookie contact/carry/bite, deterministic seeking, sound controls / 头顶对白、原比例、请求、拿饼干送嘴及播放 |
| `npm run qa:nap` | 003: laptop pixels with cats shown/hidden, frame/caption clearance, equal scaling, contact frames and sound / 电脑像素无遮挡、边界字幕避让、原比例、接触与声音 |
| `npm run qa:halloween` | 005: native aspect, paw/key contact, dialogue bounds, candy payoff, sound/reduced motion / 原比例、爪键接触、对白、糖果反转及播放 |

When intentionally retiming/revising a story, update its authored QA sample times/expected story events too; preserve earlier checks stored with old review exports / 剧情时序明确改动时，同步调整动作检查采样点及预期事件，旧审片检查记录保留。

001 currently needs visual review of its box/cat poses and logo plus the repository check / 001目前目测纸箱、猫和标志，再做仓库检查。

## Posters and publishing copy · 封面与文案

Extract a representative frame from the **new matching movie**, then use the locked Sharp dependency to save its cover. Example temporary paths below; replace movie/ID with the changed film / 从匹配的新视频取帧再生成封面，下例按修改集替换。

```sh
ffmpeg -hide_banner -loglevel error -ss 11 -i motion/003-chief-nap-officer/previews/v021-clear-computer-review.mp4 -frames:v 1 -y /tmp/verdent-cover.png
node -e 'require("sharp")(process.argv[1]).resize(640).webp({quality:85}).toFile(process.argv[2])' /tmp/verdent-cover.png docs/assets/episodes/003-chief-nap-officer.webp
```

Update captions/motion-XXX.md and captions/README.md when the selected version/story changes. English caption/alt text must describe that actual cut. Run index/check afterwards / 版本故事变化时更新对应文案，英文描述必须对应实际画面，然后刷新检查。

## Audio and earlier tools · 声音与历史工具

Current voices and mixed AACs are already saved; ordinary visual edits reuse them. Local mix metadata and raw recordings are linked in [Handoff](../HANDOFF.md) / 已有童声混音可复用，源与数据见交接。

| Script / 脚本 | Role / 用途 |
| --- | --- |
| doctor.mjs | Offline prerequisite report / 离线环境检查 |
| build-motion.mjs | Self-contained HTML + new immutable source/version / 单文件与新永久源码快照 |
| build-episode-library.mjs · build-repository-index.mjs · build-recording-hub.mjs | Generated navigation/inventory / 自动导航索引 |
| render-story-previews.cjs | Actual Chromium timeline sampling + H.264/AAC / 浏览器采样与视频 |
| prepare-story-episodes.mjs | Current shared source preparation for 001 / 001共用源准备 |
| mix-story-polish.py · mix-halloween-polish.py | Local remix of existing speech, original score, ducking/contact cues / 本地复用童声及配乐动作音 |
| compose-story-scores.py · compose-acting-contacts.py | Original score/foley recipes / 原创配乐动作音配方 |
| voice-performance.py · voice-existing-score.py | Online speech generation, trimming, timing and mixing / 在线配音与修剪时长混音 |
| build-episode-audio.py · sync-painted-series.mjs | Earlier generic audio/unified-room experiments; historical / 早期通用声音与统一房间实验 |

Audio scripts retain version-specific recipes and refuse existing output directories. Choose new version names/paths before reusing a recipe. Do not rerun one-time historic mix scripts as “setup” / 声音配方按版本保存且拒绝覆盖，新混音先改新目录，不把历史脚本当安装命令。

For new online speech only: create a Python venv and install [requirements-audio.txt](requirements-audio.txt). Those scripts send dialogue to Microsoft's online speech service. The earlier permission for five Soft Launch lines is recorded in [revision notes](../WORK_IN_PROGRESS.md) / 只有新在线配音才装 Python 语音依赖；该流程会外发对白，先前五句授权记录见改稿说明。
