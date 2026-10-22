# Painted series system · 统一水粉剧集系统

Creator steering, 2026-10-22: retain 003/005 as visual benchmarks and rebuild 001/002/004 consistently. This editable source uses the exact existing 003 blue-room/cast paintings, warm-black Lucky and orange Mochi, a shared 4:5 stage, anchored speech bubbles and grounded story props. 005 retains its seasonal 9:16 setting. / 创作者以 003、005 为视觉基准，重做其余三集；复用 003 原水粉猫和房间，统一 4:5 舞台、头顶气泡与道具落点，005 保留节日竖屏场景。

The cats use complete connected pose drawings, never cut-apart limbs. The 004 contact insert reuses the complete keyboard sequence from 003. These remain limited-animation review drafts without phoneme lip sync. / 使用完整整猫关键姿势，004 电脑接触插镜复用 003 完整序列；仍为有限动画待审稿，无音素口型。

## Sources · 来源

- `assets/blue-studio-background-v001.png`, `blue-cast-sequence-v001.png`, `lucky-keyboard-insert-v001.png`: exact copies of 003 `template-blue-polish/assets/`. / 原文件字节复制。
- `assets/verdent-logo.png`: unchanged creator-supplied official logo; native aspect preserved. / 用户提供的原 Logo，不重绘、不变形。
- `assets/painted-mug-v001.png`: built-in imagegen, transparent PNG, full prompt in [PROMPTS.md](PROMPTS.md). No edits to the generated raster. / 内置 imagegen 透明素材，保留原像素，提示词见记录。
- Receipt and tasting plate: deterministic scene-native Canvas props with clipped brush marks. / 纸条和点心盘为本场景 Canvas 道具。

## Edit & export · 修改与导出

Edit these common sources, then `node scripts/sync-painted-series.mjs --review` to prepare temporary episode-local sources for rendering. The `--review` option hides the unavailable download and is for intermediate rendering only. / 编辑统一源后复制到本集模板；中间渲染不显示下载按钮。

Render the current timeline through Chromium at 24 fps with each episode's real mixed audio, saving to `motion/<id>/previews/unified-painted-review.mp4`. Then `node scripts/sync-painted-series.mjs` copies the matching export into each template; build the three `episode.json` files with `scripts/build-motion.mjs`. Never rebuild downloads using stale video. / 真实浏览器时间轴渲染并混入本集音轨，再复制匹配视频、生成永久存档；修改画面后需重导视频。

001: 10s, 2 synthetic child lines. 002: 14s, 4 lines. 004: 18s, its existing 5-line mix. One-click sound, pause/replay, seek, full screen, direct offline MP4 download, keyboard controls and reduced motion are shared. / 三集分别 10、14、18 秒，共用声音播放、暂停重播、进度、全屏、离线下载、键盘及减少动态设置。

003 and 005 source/output files are not targets of the sync script. All archived HTML remains immutable. / 同步脚本只操作三集工作模板，历史 HTML 永久保留。
