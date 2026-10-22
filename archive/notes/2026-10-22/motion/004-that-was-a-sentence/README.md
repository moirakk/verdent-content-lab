# Historical documentation snapshot / 历史说明快照

Source / 原路径: motion/004-that-was-a-sentence/README.md; saved before repository reorganisation, parent commit ef6b6b7. Current instructions remain at the original stable path / 当前指引仍在原路径。

---

# Soft Launch · 当前生活短剧版

**v006 · 20s · 4:5 · unpublished / 未发布。** New painted location, complete connected character actions, visual setup/payoff and a distinct original score with scene sounds. English child speech is verified in `audio/v003-story/`; final audio is embedded in `template-story/assets/episode-score.m4a`. / 新水粉布景、完整整猫动作、视觉铺垫反转、独立原创配乐与动作音；实测英文童声及混音已内嵌。

[Play with sound / 带声播放](../../../../../motion/004-that-was-a-sentence/index.html) · [MP4 / 带声视频](../../../../../motion/004-that-was-a-sentence/previews/v006-soft-launch-review.mp4) · [History / 历史](../../../../../motion/004-that-was-a-sentence/versions/index.html) · [Story source & limits / 剧情源码与边界](../../../../../motion/_painted-story/README.md)

Default playback waits for **Play with sound**; it starts from zero with dialogue, BGM and SFX together. The MP4 has the same soundtrack. Current editable source is `../_painted-story/` + this `episode.json`, prepared into `template-story/` by `scripts/prepare-story-episodes.mjs`. Earlier unified templates and earlier titles remain history. Limited animation, no phoneme lip sync. / 默认等待点击从头带声播放，视频为同一混音；当前修改统一剧情源和本集配置，再准备本集模板。旧模板旧标题保留，仍为有限动画，无音素口型。

Earlier notes follow / 下文保留旧批次说明。

# Current unified draft · 当前统一画风版

**v005 · 18s · 4:5 · unpublished / 未发布**. Rebuilt using the exact 003 blue-studio cats and room, anchored speech bubbles, grounded props and complete connected pose drawings. English synthetic child voices and original music are embedded, with one-click playback and matching direct MP4 download. / 复用 003 原水粉猫和房间，统一头顶气泡、道具落地和整猫姿势，带英文合成童声、原创配乐、一键播放与匹配视频下载。

[Current HTML / 当前播放](../../../../../motion/004-that-was-a-sentence/index.html) · [MP4 / 带声视频](../../../../../motion/004-that-was-a-sentence/previews/unified-painted-review.mp4) · [History / 历史](../../../../../motion/004-that-was-a-sentence/versions/index.html) · [Shared source / 统一源码](../../../../../motion/_painted-series/README.md)

Edit `../_painted-series/` and `episode.json`; synchronize into `template-unified/`, render a matching movie, then build through `scripts/build-motion.mjs`. Earlier templates and versions remain historical. Limited animation, no phoneme lip sync. / 修改统一源码和本集配置，同步到工作模板，导出匹配视频后构建。原模板与旧版保留；有限动画，无音素口型。

The following notes describe earlier drafts; current files above take precedence / 下文为旧稿说明，当前以上方为准。

# Motion 004 · That Was a Sentence / 那只是一句话

**Current voiced draft v004, unpublished / 当前童声版 v004，未发布。** Five measured synthetic child-voice lines and the original ducked score are now present. The earlier network block is resolved. / 已有五句实测合成童声与避让对白的原创配乐，此前联网障碍已解决。

[Open HTML / 打开 HTML](../../../../../motion/004-that-was-a-sentence/index.html) · [Browser video preview / 浏览器审片](../../../../../motion/004-that-was-a-sentence/previews/v004-voiced-browser-review.mp4) · [All HTML versions / 全部 HTML 版本](../../../../../motion/004-that-was-a-sentence/versions/index.html) · [Assets & limits / 素材与限制](../../../../../motion/004-that-was-a-sentence/ASSETS.md)

## Story · 故事

| Time / 时间 | English dialogue / 英文对白 | Acting / 表演 |
| --- | --- | --- |
| 0–2.4s | Lucky: I have a plan. | Proud little entrance, raised paw, blink / 得意入场、举爪、眨眼 |
| 2.4–4.6s | Mochi: Let's hear it. | Calm reply and small independent head turn / 淡定回应、头部小幅独立动作 |
| 4.6–7.4s | Lucky: Open a cat café. | One small paper note contains his entire plan / 一张纸写完全部计划 |
| 7.4–12.6s | Mochi: That was a sentence. | Lucky pauses, looks uncertain; the paper unfolds into real steps / Lucky 愣住疑惑，纸张展开成明确步骤 |
| 12.6–18s | Lucky: I call taste testing. | Eager reach, taste-testing card, Mochi's knowing smile / 抢着举爪、认领试吃、Mochi 偷笑 |

## One Capability · 一个功能

**M01: Manager goal decomposition / Manager 目标拆解。** One goal becomes phases, tasks and an acceptance point. The three café tasks are an original story illustration, not a real UI recording, completed website, speed guarantee or actual product-generated plan. Taste testing is Lucky's fictional extra task / 一个目标拆成阶段、任务与验收点；猫咖任务为剧情示意，不是真实录屏、完成成果、速度承诺或产品实测输出。试吃是 Lucky 添加的虚构任务。

Source / 来源：[Official Manager documentation / 官方文档](https://www.verdent.ai/docs/verdent-manager/core-features/manager). Feature / 功能：[M01 in the content map / 功能选题表](../../../../../brand/VERDENT_FEATURE_MAP.md).

## Watch & Record · 播放与录屏

Open the standalone HTML locally in a browser. **Watch with sound** plays child dialogue and original music. **Recording view** starts one clean 18-second run with controls hidden and requests fullscreen; press Esc to return. **Play once** holds the last frame; Replay resumes looping / 用浏览器离线打开单文件 HTML。声音按钮播放童声与配乐；录屏模式隐藏控制区、尝试全屏、从头播一次 18 秒，结束停在尾帧；Esc 返回。重播恢复循环。

Default 9:16; Feed toggles 4:5. Use `?t=11500` for a fixed scene, `?format=feed` for 4:5, `?once=1` for one-shot playback. Reduced motion disables blinks, head acting, breathing, zoom and bounce; the story remains readable / 默认竖屏，可切 4:5；减少动态效果时关闭附加表演和镜头运动，保留故事信息。

The current MP4 is an actual Chromium timeline capture, 540×960 at 24 samples/sec, with the verified v002 audio mix. Earlier v002-native-preview.mp4 remains the historical offline music-only render. / 当前视频为 Chromium 实测时间轴采样，540×960、每秒 24 帧，配实测 v002 混音；原离线配乐版视频保留。

Voice timings / 配音实测：[audio/v002/mix.json](../../../../../motion/004-that-was-a-sentence/audio/v002/mix.json). All five line durations fit their beats. This is limited animation, without phoneme lip sync, and still needs creator film review. / 五句均落在时间窗内；仍为有限动画，无音素口型，待创作者成片验收。

## Continue · 继续制作

Edit `episode.json` and this episode's `template/`, then build through the repository tool. Preserve every archive. Generate child voices with a **new audio version**, check measured line durations, change the audio reference and set `voicesAvailable` only after a real mix exists. Never substitute adult voices or relabel music as speech / 修改配置和本集模板后构建；旧版不覆盖。待能联网后，以新声音版本生成童声、检查长度并替换音轨；真正生成前不能把配乐标成配音，也不改用成人声。
