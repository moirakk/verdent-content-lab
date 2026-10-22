# One Tiny Feature · 当前生活短剧版

**v003 · 18s · 4:5 · unpublished / 未发布。** New painted location, complete connected character actions, visual setup/payoff and a distinct original score with scene sounds. English child speech is verified in `audio/v003-story/`; final audio is embedded in `template-story/assets/episode-score.m4a`. / 新水粉布景、完整整猫动作、视觉铺垫反转、独立原创配乐与动作音；实测英文童声及混音已内嵌。

[Play with sound / 带声播放](index.html) · [MP4 / 带声视频](previews/v003-coffee-story-review.mp4) · [History / 历史](versions/index.html) · [Story source & limits / 剧情源码与边界](../_painted-story/README.md)

Default playback waits for **Play with sound**; it starts from zero with dialogue, BGM and SFX together. The MP4 has the same soundtrack. Current editable source is `../_painted-story/` + this `episode.json`, prepared into `template-story/` by `scripts/prepare-story-episodes.mjs`. Earlier unified templates and earlier titles remain history. Limited animation, no phoneme lip sync. / 默认等待点击从头带声播放，视频为同一混音；当前修改统一剧情源和本集配置，再准备本集模板。旧模板旧标题保留，仍为有限动画，无音素口型。

Earlier notes follow / 下文保留旧批次说明。

# Current unified draft · 当前统一画风版

**v002 · 14s · 4:5 · unpublished / 未发布**. Rebuilt using the exact 003 blue-studio cats and room, anchored speech bubbles, grounded props and complete connected pose drawings. English synthetic child voices and original music are embedded, with one-click playback and matching direct MP4 download. / 复用 003 原水粉猫和房间，统一头顶气泡、道具落地和整猫姿势，带英文合成童声、原创配乐、一键播放与匹配视频下载。

[Current HTML / 当前播放](index.html) · [MP4 / 带声视频](previews/unified-painted-review.mp4) · [History / 历史](versions/index.html) · [Shared source / 统一源码](../_painted-series/README.md)

Edit `../_painted-series/` and `episode.json`; synchronize into `template-unified/`, render a matching movie, then build through `scripts/build-motion.mjs`. Earlier templates and versions remain historical. Limited animation, no phoneme lip sync. / 修改统一源码和本集配置，同步到工作模板，导出匹配视频后构建。原模板与旧版保留；有限动画，无音素口型。

The following notes describe earlier drafts; current files above take precedence / 下文为旧稿说明，当前以上方为准。

# Motion 002 · One Tiny Feature / 一个小功能

Draft for visual review, not published. A 12-second, silent, 4:5 loop. Lucky expands a “tiny” idea; Mochi's coffee gets bigger at each beat. The final line is “I'll get a bigger cup.” All audience-facing text is English.

待审效果样片，未发布。12 秒无声、4:5 循环。Lucky 不断追加需求，Mochi 的咖啡杯随之变大，最后平静地说要换更大的杯子。成品文字全英文。

## Watch & Edit · 观看与修改

- [Play / 播放](index.html) · [Version history / 历史版本](versions/index.html)
- `episode.json`: English copy, timing, and cup sizes / 英文对白、节奏与杯子大小。
- `template/`: Episode-specific editable scene, style, and timeline / 本集独立的场景、样式与动画源码。

The episode uses a local template so this experiment does not change Motion 001. Original gouache character art follows the creator's new painted reference, keeping Mochi's cream muzzle/chest and Lucky's yellow-green irises. The generated painting is embedded in the standalone HTML; separate cat layers have gentle breathing, while the cup grows on the dialogue timeline. This adapts a candidate comic joke; EP.06 remains unconfirmed.

本集使用独立源码，不改动态 001。参考创作者新提供的粗笔触插画，生成原创水粉角色素材，保留 Mochi 浅色口鼻与胸毛、Lucky 黄绿虹膜。角色图内嵌进单文件 HTML，分层轻微呼吸，杯子按对白时间轴变大。本集借用了漫画候选笑点，EP.06 仍未定稿。

Build from the repository root / 在仓库根目录生成：

```sh
node scripts/build-motion.mjs motion/002-tiny-feature/episode.json
```

Space pauses/resumes, R replays, F requests fullscreen. `?capture=1` hides controls; `?t=10000` fixes the final scene. A slider allows timeline inspection. Reduced-motion settings disable ambient movement and start paused. Historical HTML remains permanent. Build before viewing; source-template images use asset tokens that the build embeds. See [asset notes / 素材说明](ASSETS.md) for the exact generation prompt.

空格暂停或播放，R 重播，F 全屏；录制参数隐藏控制栏，固定时间参数方便看最后一幕，也可以拖动进度条查看。减少动态效果设置下关闭环境动作并默认暂停。历史 HTML 永久保留。
