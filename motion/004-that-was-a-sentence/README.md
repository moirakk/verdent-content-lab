# Motion 004 · That Was a Sentence / 那只是一句话

**Local animation draft, v002; not published / 本地动画样片 v002，未发布。** 18 seconds, original painted limited animation, English captions and original music. Child-voice generation was blocked by current network restrictions, so this version is explicitly instrumental / 18 秒，原创水粉有限动画、英文字幕与原创配乐；当前网络限制导致童声未生成，本版明确为纯配乐样片。

[Open HTML / 打开 HTML](index.html) · [Native video preview / 离线渲染视频预览](previews/v002-native-preview.mp4) · [All HTML versions / 全部 HTML 版本](versions/index.html) · [Assets & limits / 素材与限制](ASSETS.md)

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

Source / 来源：[Official Manager documentation / 官方文档](https://www.verdent.ai/docs/verdent-manager/core-features/manager). Feature / 功能：[M01 in the content map / 功能选题表](../../brand/VERDENT_FEATURE_MAP.md).

## Watch & Record · 播放与录屏

Open the standalone HTML locally in a browser. **Watch with sound** plays this version's music only. **Recording view** starts one clean 18-second run with controls hidden and requests fullscreen; press Esc to return. **Play once** holds the last frame; Replay resumes looping / 用浏览器离线打开单文件 HTML。声音按钮播放本版配乐；录屏模式隐藏控制区、尝试全屏、从头播一次 18 秒，结束停在尾帧；Esc 返回。重播恢复循环。

Default 9:16; Feed toggles 4:5. Use `?t=11500` for a fixed scene, `?format=feed` for 4:5, `?once=1` for one-shot playback. Reduced motion disables blinks, head acting, breathing, zoom and bounce; the story remains readable / 默认竖屏，可切 4:5；减少动态效果时关闭附加表演和镜头运动，保留故事信息。

The MP4 is a 432×768 offline rendering of the same SVG timeline at 12 unique frames per second, encoded at 24fps. It is a review preview, **not a browser screen recording** or a 1080p final export. HTML playback keeps native resolution / 视频为同一 SVG 时间轴的离线低清预览，12 帧独立画面、24fps 编码，不冒充浏览器录屏或高清交付；HTML 保留原始可缩放画面。

## Continue · 继续制作

Edit `episode.json` and this episode's `template/`, then build through the repository tool. Preserve every archive. Generate child voices with a **new audio version**, check measured line durations, change the audio reference and set `voicesAvailable` only after a real mix exists. Never substitute adult voices or relabel music as speech / 修改配置和本集模板后构建；旧版不覆盖。待能联网后，以新声音版本生成童声、检查长度并替换音轨；真正生成前不能把配乐标成配音，也不改用成人声。
