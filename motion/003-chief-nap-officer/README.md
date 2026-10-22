# Motion 003 · Chief Nap Officer / 首席午睡官

Current: [A motion polish · v019 · 18s](versions/v019/index.html), [browser review MP4](previews/v019-browser-review.mp4). Earlier A v017 remains preserved. [Original A v015](versions/v015/index.html) and [B v016 · 12s](versions/v016/index.html) remain intact. All 4:5, English child speech and original music, not published. [Comparison](variants/README.md).

当前为蓝地板水粉画风双版本：A 完整铺垫 18 秒、B 快节奏 12 秒，均为 4:5，英文童声和原创配乐，默认 A，待审未发布。两版复用同一剧情，不是两条新选题。旧版全部保留。以下 v001–v012 说明是历史记录，不覆盖本次已认可的场景方向。

## Current timing pass / 当前节奏打磨

v019 retimes the eight whole-character contact drawings, holds the press/release clearly, shortens the illustrative UI insert and eases camera changes over 320ms. Crouch and sleep now settle at 15.65s and 16.35s. Original painted assets, child speech and B v016 remain unchanged. / v019 调整八幅整猫接触稿节奏、按下收回停顿与短界面插镜；镜头以 320 毫秒缓入，15.65 秒下蹲、16.35 秒入睡，原画童声与 B 版不变。

Browser-rendered preview: 480×600, 24fps, original speech/music. This improves timing and verification; it does not add newly drawn in-between frames. / 浏览器审片为 480×600、24fps、原童声配乐；本轮改节奏和验证，未新增手绘中间帧。

## Story · 剧情

**Current / 当前：v017 adds a complete eight-drawing reach/contact/release insert, speaker-directed shots, a silent Mochi reaction and score gaps without changing the dialogue / 新增八幅伸爪接触收回插镜、人物镜头、Mochi 静默反应和配乐留白，不改对白。** [Checks / 检查](variants/QA-POLISH.md). Still limited animation, not final release approval / 仍是有限动画待审，不是正式成片。

Historical / 历史：v012 was the 18s story/motion experiment whose style was challenged. The accepted blue studio keyframe supersedes that rendering direction / v012 的画风曾被指出偏离，之后获认可的蓝地板关键帧优先。

Previous repair / 上一轮修复：v011 removed the detached-paw rig and added 8 complete Lucky reach drawings plus 4 Mochi reactions. The creator liked that repair direction, not a finished film / v011 移除断爪结构，补十二帧完整角色稿；认可的是修复方向，不是成片。

[Historical 8s repair test / 历史 8 秒修复片段](previews/v011-acting-study.mp4) · [Previous full 18s v009 / 历史完整预览](previews/v009-native-preview.mp4) · [Repair and rejected study / 修复与失败实验](ACTING_STUDY.md) · [Earlier drawings / 历史动作稿](../../characters/poses/sequences/README.md). All versions remain immutable / 旧版全部保留。

v004 added three original poses, a proud entrance, speaking nods, a skeptical reaction, a yawn/stretch before sleep, closer cameras and staggered workers. v001–v004 and audio v001 remain unchanged / v004 已增加三张原创姿势、得意入场、说话点头、怀疑反应、打哈欠入睡、近景与错峰 worker 入场；所有旧版与原声音均不动。

| Time / 时间 | Beat / 剧情 | Product job / 产品作用 |
| --- | --- | --- |
| 0–2.6s | Lucky: “I started a company.” | Immediate character claim / 首帧抛出事件 |
| 2.6–5.6s | Mochi: “You have no employees.” | A clear challenge / 明确质疑 |
| 5.6–9.6s | Lucky: “About that.” | Illustrated Verdent Manager dispatches three parallel workers / 示意 Manager 的三项并行工作 |
| 9.6–12.3s | Mochi: “Then what do you do?” | Return to the cats / 回到人物 |
| 12.3–18s | Lucky: “Chief Nap Officer.” Then he curls up asleep / 说完后团起来睡觉 | Character payoff; work is still running / 角色反转，工作仍在继续 |

The product moment illustrates task decomposition and parallel execution, checked against [official Manager documentation](https://www.verdent.ai/docs/verdent-manager/core-features/manager) on 2026-10-20. The UI and three-worker count are story illustrations, not a real recording or a performance guarantee. Tasks remain in progress; no instant finished app is claimed.

产品片段依据官方文档的拆任务与并行执行能力绘制。界面和三名 worker 的数量为剧情示意，并非真实录屏或效果承诺；任务仍在进行，不暗示几秒内完成网站。

## Watch · 观看

[Open animation / 打开动画](index.html) · [Versions / 历史版本](versions/index.html) · [Assets & audio / 素材和声音](ASSETS.md)

Click **Watch with sound** for child voices and music. **Recording view** hides controls, requests fullscreen and starts one clean run; Esc returns. **Play once** holds the final frame; Replay loops. Space pauses, R restarts and M toggles sound. `?capture=1` hides controls; `?t=7000` fixes a scene. Both new cuts are 4:5 only. All media is embedded for offline playback.

点声音按钮从头播童声配乐；录屏模式隐藏控制区、尝试全屏并播一次，尾帧停住，Esc 返回。重播恢复循环；空格暂停、R 从头、M 切声音。媒体全部内嵌，可离线打开；减少动态时默认暂停，关闭附加表演和镜头。

## Edit & Preserve · 修改与留档

`episode.json` and `variants/blue-a-polish.json` select the new A using `template-blue-polish/`. Original A/B configurations and `template-blue/` remain unchanged. `template/` is the historical v012 experiment. Original logo, paired art and voices remain; no anatomical masks.

主配置与 blue-a-polish 选新 A，源码为 template-blue-polish；原 A/B 配置及 template-blue 均不改，旧 template 留作 v012 实验。整猫稿不拆肢体，Logo 和童声原文件保留。

```sh
node scripts/build-motion.mjs motion/003-chief-nap-officer/episode.json
```

Generate new audio with a new version name; never overwrite archived media. Keep generated HTML, template, embedded images/audio, and version indexes together. Voice and music sources are in `audio/v001/`, with the reproducible voice configuration in `audio-config.json` and composition code in `scripts/build-episode-audio.py`.

修改配音时另起声音版本；已归档素材不覆盖。HTML、模板、图片、声音和索引一起保留。对白分轨、配乐与混音记录分别保存在 audio/v001 和 audio/v002；新声音版本另存当次 voice-profiles，方便复用与追溯。
