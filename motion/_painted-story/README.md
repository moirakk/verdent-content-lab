# Painted stories · 水粉生活短剧

2026-10-22 creator feedback: the repeated room, dialogue-led plots and weak/muted music were not engaging. This second story pass keeps the painterly identity but uses three different settings, new complete-character actions, visual jokes and distinct original scores. / 创作者指出场景重复、对白推动、BGM 感知弱且缺乏吸引力；本轮保留水粉身份，改三处生活布景、完整动作稿、视觉笑点及独立原创配乐。

| Episode / 剧集 | Story / 故事 | Setting & action / 场景动作 | Score / 配乐 |
| --- | --- | --- | --- |
| 001 · The Corner Office | Lucky's office upgrade is a cardboard box; both squeeze in / “升级办公室”其实是纸箱，两只挤进去 | Living room; present, climb, sit, make room, settle / 客厅，展示爬入让位落稳 | 108 BPM pizzicato, bass, woodblock + cardboard sounds / 拨弦木音与纸箱声 |
| 002 · One Tiny Feature | Original coffee escalation batch; current rewrite lives in template-verdent / 最初咖啡升级批次，当前品牌改稿在独立模板 | Coffee nook; whole poses, physical cup entrances, reaction / 咖啡角，换杯入场与完整反应 | 94 BPM soft café swing, keys, bass, bell clinks / 轻爵士与杯碰声 |
| 004 · Soft Launch | Original missing-samples story; current website/taste-test rewrite is independent / 最初样品消失故事，当前网页试吃改稿为独立源 | Bakery kitchen; empty tray, crumb face, inspection, guarding / 厨房，空盘嘴边碎屑与护盘 | 116 BPM sneaky minor plucks, ticks and crumbs / 偷偷摸摸拨弦、滴答碎屑声 |

18s / 18s / 20s, 4:5. Full connected whole-cat key drawings, no anatomical cut-apart rig, no glossy 3D cats. Limited animation with discrete painted key poses plus continuous props, camera easing and small event-led body response; no phoneme lip sync. All remain unpublished creator-review drafts. / 全部 4:5；整猫关键姿势及连续道具、镜头缓动、事件驱动身体反馈，无断爪拆分、无三维猫；仍是有限动画待审稿，无音素口型，未发布。

The table records the original shared-art batch; consult [selected films](../../EPISODES.md) for current stories and versions / 上表记录原共享画稿批次，当前选用故事及版本查自动总表。

## Assets · 素材

Six selected transparent sheets/backgrounds are preserved unchanged in `assets/`. Their style reference is the creator-selected 003 blue-studio keyframe. [Generation prompt set / 生成提示记录](PROMPTS.md). The cup is the unchanged earlier built-in imagegen output from `_painted-series/`. Source alpha bounds/head anchors are recorded in `frame-registration.json`; registration and drawing crop source windows without rewriting raster files. / 六张新画稿原像素保留；原蓝底关键帧为造型参考，杯子复用上一批原生成图；透明边界与头部锚点另存，运行时取帧，不修改 PNG。

## Build · 构建

Edit this scene/player for **001 only**, plus its episode.json. 002 now uses [template-verdent](../002-tiny-feature/template-verdent/README.md); 004 uses [template-bakery-preview](../004-that-was-a-sentence/template-bakery-preview/README.md). Their earlier shared cuts and original art are retained / 当前共用源仅用于001，002/004 已独立，旧共享片与画稿保留。 `node scripts/prepare-story-episodes.mjs --review` copies only the chosen scene/pose assets into `template-story/`, normalizes the actual voice/music mix and hides the unfinished video link. Render the exact timeline in Chromium, then mix the embedded soundtrack into the MP4 path named by `videoExport`. Prepare again without `--review`, build each changed episode through `scripts/build-motion.mjs` and rebuild the library. All earlier source templates and immutable HTMLs remain. / 修改后准备临时本集模板，渲染真实时间轴并混入匹配音轨，复制匹配视频后生成新存档、更新目录；旧模板与 HTML 均保留。

New audio uses verified child speech in `audio/v003-story/` with episode-specific original notes/SFX in `audio/story-score-v001/`. Scores are normalized to -23 LUFS before ducking, quieter during speech; the final AAC mix targets -16 LUFS / -1.5 dBTP. The first short-word attempts in 001/002 `audio/v002-story/` are incomplete timing attempts, preserved and not used. / 实际使用新童声与独立原创谱、动作音；配乐避让对白、整片统一响度；两处短词时间不足的尝试保留但不使用。

Normal HTML opens paused on an explicit **Play with sound** button. The library offers the same explicit audio action; pressing it unmutes/restarts the video and pauses other library videos. Playback can still be muted, paused, replayed or sought; reduced motion starts paused and removes ambient/transition motion. The MP4 includes its mixed soundtrack. / 默认点击即从头带声播放；总览同样显式开声，并暂停其他片，仍保留静音暂停重播进度与减少动态；视频内含混音。
