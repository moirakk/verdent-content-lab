# The Corner Office · 当前生活短剧版

**v004 · 18s · 4:5 · unpublished / 未发布。** New painted location, complete connected character actions, visual setup/payoff and a distinct original score with scene sounds. English child speech is verified in `audio/v003-story/`; final audio is embedded in `template-story/assets/episode-score.m4a`. / 新水粉布景、完整整猫动作、视觉铺垫反转、独立原创配乐与动作音；实测英文童声及混音已内嵌。

[Play with sound / 带声播放](index.html) · [MP4 / 带声视频](previews/v004-corner-office-review.mp4) · [History / 历史](versions/index.html) · [Story source & limits / 剧情源码与边界](../_painted-story/README.md)

Default playback waits for **Play with sound**; it starts from zero with dialogue, BGM and SFX together. The MP4 has the same soundtrack. Current editable source is `../_painted-story/` + this `episode.json`, prepared into `template-story/` by `scripts/prepare-story-episodes.mjs`. Earlier unified templates and earlier titles remain history. Limited animation, no phoneme lip sync. / 默认等待点击从头带声播放，视频为同一混音；当前修改统一剧情源和本集配置，再准备本集模板。旧模板旧标题保留，仍为有限动画，无音素口型。

Earlier notes follow / 下文保留旧批次说明。

# Current unified draft · 当前统一画风版

**v003 · 10s · 4:5 · unpublished / 未发布**. Rebuilt using the exact 003 blue-studio cats and room, anchored speech bubbles, grounded props and complete connected pose drawings. English synthetic child voices and original music are embedded, with one-click playback and matching direct MP4 download. / 复用 003 原水粉猫和房间，统一头顶气泡、道具落地和整猫姿势，带英文合成童声、原创配乐、一键播放与匹配视频下载。

[Current HTML / 当前播放](index.html) · [MP4 / 带声视频](previews/unified-painted-review.mp4) · [History / 历史](versions/index.html) · [Shared source / 统一源码](../_painted-series/README.md)

Edit `../_painted-series/` and `episode.json`; synchronize into `template-unified/`, render a matching movie, then build through `scripts/build-motion.mjs`. Earlier templates and versions remain historical. Limited animation, no phoneme lip sync. / 修改统一源码和本集配置，同步到工作模板，导出匹配视频后构建。原模板与旧版保留；有限动画，无音素口型。

The following notes describe earlier drafts; current files above take precedence / 下文为旧稿说明，当前以上方为准。

# Motion 001 · Have an idea / 动态 001 说明

Draft, unpublished. The selected version is v001, an 8-second silent 4:5 loop. Lucky says “Mochi, I have an idea.” Mochi asks “How tiny?” The footer reads “the project was not tiny.” Verdent appears only as a quiet laptop label, with no feature claim or sales call.

The unavailable old HTML was rebuilt from conversation context, with original new SVG art informed by the style reference and real-cat photo. v002 is a 12-second automation-joke alternative reconstructed from the earlier draft configuration and archived later. Archive order does not determine the selected version. v001 was captured as standalone HTML; v002 includes its dialogue and template source.

Open `index.html` locally to watch; use the history links below for older versions. Edit `episode.json` and build from the repository root. Preserve all archives and keep finished creative text English only.

状态：Draft sample / unpublished。8 秒无声循环，4:5。

旧文件 `/mnt/data/verdent_motion_001.html` 本次不可访问，本片依据对话中的人物、画风与轻动效要求重建，不声称复原旧稿。保留历史对白与结尾：Lucky “Mochi, I have an idea.” / Mochi “How tiny?” / “the project was not tiny.”。已查看历史参考截图与真猫照片，所有猫与场景均为新画的原创 SVG。

笑点：Lucky 又有新点子，Mochi 一听就知道项目不会小。Verdent 仅为电脑上的低调文字，没有功能承诺或 CTA。预览后再决定是否定稿。

打开 `index.html`。修改 `episode.json` 后，在根目录运行 `node scripts/build-motion.mjs`。模板、角色及视觉规范参见上级目录说明。

每版单独保存：[打开历史版本](versions/index.html)。现存 HTML 首次捕获时保留原文件；后来生成的版本同时保存模板源码。版本编号按归档顺序，不代表原始创作先后。历史文件永久保留，可以复制修改。

- [v001：当前 8 秒版](versions/v001/index.html)，保留历史 “How tiny?” 对白。
- [v002：12 秒自动化备选](versions/v002/index.html)，依据本次会话早期草稿配置重建后补存；[对白源](versions/v002/episode.json) 与 `versions/v002/template/` 一并保留。
