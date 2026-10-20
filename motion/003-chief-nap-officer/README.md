# Motion 003 · Chief Nap Officer / 首席午睡官

Draft pilot for the proposed Tiny Company series. 18 seconds, English dialogue, voiced characters, and original light toy-bell/plucked-bass music. Default format is 9:16 for a vertical cut; the player also offers a 4:5 feed composition. Not published.

“小公司”系列的待审试播集。18 秒、英文对白与双角色配音，配原创玩具琴和拨弦小配乐。默认 9:16，也能切换 4:5。尚未发布。

## Story · 剧情

Selected HTML / 当前选用：**v004**. Three additional original poses, a proud little entrance, speaking nods, skeptical reaction, a yawn/stretch before sleep, closer character shots, and staggered worker arrivals. The 18-second dialogue and audio v001 stay unchanged. v001–v003 remain available / 新增三张原创姿势，加入得意小跳、说话点头、怀疑反应、伸展打哈欠再睡着、角色近景和团队错峰入场。18 秒对白与声音 v001 不变，旧版全部保留。

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

Click **Watch with sound** to restart with the English voices and music. Browsers require a user gesture for audible playback; silent playback starts automatically so captions remain usable. Pause, replay, seek, fullscreen, and format controls stay outside the recording frame. Space pauses, R replays, M toggles sound, F requests fullscreen. `?capture=1` hides controls; `?format=feed` starts in 4:5; `?t=15500` fixes the nap scene. Enable sound before hiding controls for recording.

点 **Watch with sound** 从头播放配音与配乐。浏览器有声播放需要点击，默认先无声播放，字幕仍可理解。暂停、重播、拖动、全屏和比例切换均在画面外；录制时先开声音，再隐藏控制区。减少动态效果设置下默认暂停，并关闭环境动作。

## Edit & Preserve · 修改与留档

`episode.json` defines dialogue and timings; `template/` holds this episode's scene and embedded assets. The artwork follows Motion 002's liked visual direction, with original raised-paw, side-eye, yawn and sleeping poses. The official logo is the creator-supplied PNG, unmodified.

对白与节奏在 episode.json，画面和素材在本集 template。沿用动态 002 获认可的视觉方向，增加原创举爪、侧目、打哈欠及睡姿；Logo 使用创作者提供的原始 PNG。

```sh
node scripts/build-motion.mjs motion/003-chief-nap-officer/episode.json
```

Generate new audio with a new version name; never overwrite archived media. Keep generated HTML, template, embedded images/audio, and version indexes together. Voice and music sources are in `audio/v001/`, with the reproducible voice configuration in `audio-config.json` and composition code in `scripts/build-episode-audio.py`.

修改配音时另起声音版本；已归档素材不覆盖。HTML、模板、图片、声音和索引一起保留。对白分轨、配乐与混音记录在 audio/v001，声音配置和生成工具一并保存，方便长期复用。
