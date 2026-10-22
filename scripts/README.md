# Tools · 制作工具

To watch: open an episode's `index.html` in a browser. No installation is needed. GitHub's file viewer displays source, so download first.

只看动画：下载后用浏览器打开作品的 `index.html`，无需安装。GitHub 文件页显示的是源码。

## Update Motion 001 · 更新动态 001

Requires Node.js 18+. Run from the repository root / 需要 Node.js 18+，在仓库根目录运行：

```sh
node scripts/build-motion.mjs
```

Edit dialogue and timing in `motion/001-have-an-idea/episode.json`; edit artwork and motion in `motion/_template/`. The tool preserves existing HTML and archives every different output. Unchanged builds do not add duplicate versions.

对白与节奏改对应的 episode.json，角色画面与动效改共用模板。工具会保留现有 HTML 并存档每个不同输出；内容不变的重复生成不会新增副本。

## Make a New Episode · 制作下一条

Copy an episode configuration into a new directory, change its `id`, title, and beats, and run / 复制一份配置到新目录，修改编号、标题与对白后运行：

```sh
node scripts/build-motion.mjs motion/002-monday/episode.json
```

Use an ID such as `002-monday`, matching the episode directory. The tool writes the standalone HTML, archives, and `docs/` copies. Add a bilingual episode README, English publishing copy, and update the content map and preview links.

编号使用类似 002-monday 的形式，并与目录名一致。生成后补充双语作品说明、英文发布文案，并更新内容进度和预览入口。

An episode may set `template` to its own template directory inside `motion/`. Local `asset:filename.png` image references are loaded from that template's `assets/` folder and embedded into standalone HTML. New archive snapshots include those source images alongside the template.

作品可通过 template 配置使用 motion 内的独立模板。模板中的图片标记从其 assets 目录读取，生成时内嵌进单文件 HTML；归档同时保存模板与原始图片。

## Reuse an Old Version · 继续使用旧版

Open the archived HTML to reuse it as-is. To edit independently, copy it into a new working folder and keep the archive unchanged.

原样复用时直接打开旧 HTML；独立修改时复制到新工作目录，原存档不动。

For an exact template-based continuation, use a separate working copy with the archive's `template/` files as `motion/_template/` and its `episode.json` as the configuration. The build tool always reads the working template; it does not automatically select a historical template. Do not overwrite the shared working template merely to restore one old episode.

需要完整沿用历史模板时，在单独的工作副本中使用该版本的 template 和 episode.json。工具始终读取工作副本的共用模板，不会自动选择历史模板；恢复某一条旧片时不要误覆盖其他作品正在使用的模板。

## Review & Save · 检查与保存

For voiced episodes, install `scripts/requirements-audio.txt` in a Python environment and make ffmpeg/ffprobe available. Run `python scripts/build-episode-audio.py motion/003-chief-nap-officer/episode.json --version v002` to create a new audio version, then update the template's audio asset reference and build the HTML. Never overwrite an existing audio version. Speech generation needs network access; playback of the embedded result does not.

配音集需 Python 声音依赖与 ffmpeg/ffprobe。用新版本名生成声音，再更新模板中的音轨文件名并生成 HTML；已有声音版本不覆盖。生成语音需要联网，成片声音已内嵌，播放无需联网。原始对白分轨和原创配乐也会保留。

New audio runs also save a frozen `voice-profiles.json` beside the raw lines and mix timings. Compare each voice's measured duration against the next beat and sleep transition before building / 新声音版本会另存当次声线配置；构建前按真实音轨长度检查下一句和入睡动作的时间，不能只替换音色而不核对节奏。

Check dialogue, phone-size readability, pause, replay, and version links in a browser. Commit source, generated HTML, archives, and indexes together. Documentation-only edits do not require rebuilding episodes.

用浏览器检查对白、手机尺寸可读性、暂停重播和版本链接。提交时一起保存源码、生成 HTML、存档和索引。只改说明时无需重新生成作品。
