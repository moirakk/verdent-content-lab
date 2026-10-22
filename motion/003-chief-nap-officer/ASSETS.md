> Historical production notes / 历史制作记录: the versions, source selection and limitations below describe that earlier experiment. Current selections: [EPISODES.md](../../EPISODES.md). / 下文属当时批次，当前以总览为准。

# Assets & Sound · 素材与声音说明

## Artwork · 画面

HTML v006/v007 add five original expression/blink frames, paired-eye changes and runtime head/body layers while retaining the approved v005 identity. Shared sources and exact prompts: [pose library](../../characters/poses/README.md), [animation generation record](../../characters/poses/PROMPTS-ANIMATION-V001.md). New image generation used the built-in tool; no outside franchise art was imported / 新增五张原创表情与眨眼帧，保留原版造型；源图与提示词见共享库，未引入其他动画 IP 素材。

Historical v008/v009 changed layout/timing; v010 attempted anatomical masks, but its detached-paw result was rejected. v011 removes that rig entirely. Existing media remain unchanged, while two new complete-character sheets are embedded and frozen: [Lucky eight frames](template/assets/lucky-reach-sheet-v002.png), [Mochi four frames](template/assets/mochi-reaction-sheet-v002.png). [Shared originals and exact prompts](../../characters/poses/sequences/README.md) / 历史 v010 拆关节导致断爪被否决；v011 全部移除该结构，原媒体不改，另内嵌归档两套十二帧完整角色稿，源图与提示词见共享库。

The current player combines full-character key-drawing playback and existing complete poses, not phoneme lip sync or fully hand-drawn animation. [Current 8s repair test](previews/v011-acting-study.mp4) is an offline review, not a browser recording. The GO key is a fictional story prop, not a claimed real Manager control / 当前播放完整角色关键画稿与旧完整姿势，不宣称音素口型或全手绘动画；视频仅前 8 秒离线审片；GO 是剧情道具，不宣称真实产品有该按钮。

- [`template/assets/lucky-proud-v001.png`](template/assets/lucky-proud-v001.png): raised-paw announcement / 举爪宣布。
- [`template/assets/mochi-side-eye-v001.png`](template/assets/mochi-side-eye-v001.png): crossed-paw skeptical reaction / 抱爪怀疑反应。
- [`template/assets/lucky-yawn-v001.png`](template/assets/lucky-yawn-v001.png): stretch/yawn before the sleeping pose / 睡前伸展打哈欠。

These three new transparent originals were generated separately with the built-in image tool and saved unchanged. Reusable source files live in [the pose library](../../characters/poses/README.md); exact prompts and reference roles are in [the generation record](../../characters/poses/PROMPTS.md). HTML v004 embeds all three and freezes the original bytes / 新增三张透明原创姿势，分别由内置工具生成，原图不改；共享库和最终提示词见链接。HTML v004 内嵌三张，并完整归档原素材。

- [`template/assets/cats-gouache-v001.png`](template/assets/cats-gouache-v001.png): unchanged original character painting reused from Motion 002 / 沿用动态 002 的原始角色素材。
- [`template/assets/lucky-sleeping-v001.png`](template/assets/lucky-sleeping-v001.png): new original transparent sleeping pose, generated with the built-in Image Generation tool / 内置图像生成工具制作的原创透明睡姿。
- [`template/assets/verdent-logo-original.png`](template/assets/verdent-logo-original.png): byte-for-byte copy of the creator's official PNG / 创作者官方原图的完整副本，不重画、不拉伸。

The sleeping image has real alpha transparency and stays unedited. HTML handles placement, crossfade, and breathing. The source asset is copied into the frozen template snapshot and embedded into the standalone HTML.

睡姿图片保留真实透明通道，不改动原图；布局、渐变切换和呼吸由 HTML 完成。源素材随版本模板归档，并内嵌进单文件成片。

### Final Image Prompt · 最终图像提示词

```text
Use case: illustration-story. Generate one original transparent cutout animation asset: ONLY the BLACK CAT Lucky from reference image 1, now blissfully asleep curled into a soft compact loaf, front three-quarter view, head gently resting on front paws, eyes fully closed with clear calm curved eyelids, large pointed ears still recognizable, long black tail curled around his paws. Match EXACTLY his existing handmade chunky dry gouache brushwork and matte warm charcoal/near-black fur with subtle brown strokes. Reference image 2 is supporting brush texture, not composition. Same cute young cat identity, large ears, small dark nose, NO orange cat. A single complete sleeping full-body black kitten, centered in a landscape 3:2 transparent canvas, with generous transparent margins so no ears, paws, whiskers or tail are cut off. Cozy and funny rather than sad. No bed, pillow, props, furniture, background, cast shadow, glow, halo, gradient, text, watermark or checkerboard. Genuinely transparent alpha background. Thick individually visible painted fur strokes, irregular natural furry edges; not vector art, not smooth airbrush, not 3D.
```

References / 参考：Motion 002's original character art and the creator-provided painted style reference / 动态 002 原始角色图与创作者提供的绘画参考。

## Voices & Music · 配音与配乐

English synthetic voice preview, not recordings of real children. Audio v002 / HTML v005 is a **pending child-voice casting review**: Mochi uses en-GB-MaisieNeural (UK English), Lucky uses en-US-AnaNeural (US English). Both are listed as child voices in [Microsoft's official voice catalogue](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts). No pitch shifting is applied; Lucky's delivery rate is +5%. The accent difference is explicitly part of the review, not permanently approved casting. Audio v001 / HTML v001–v004 retain the earlier Jenny/Eric adult voices.

新版是英文合成童声，不是真实儿童录音。Mochi 用 Maisie 英式英语、Lucky 用 Ana 美式英语，两者均为官方目录中的童声音色，未用成人声强行变调。Lucky 仅加快 5%。口音差别与具体音色待创作者试听确认；旧声音 v001 与 HTML v001–v004 不动。通过 [edge-tts](https://github.com/rany2/edge-tts) 生成，只提交五句英文对白。

The backing score is an original deterministic instrumental composition made by `scripts/build-episode-audio.py`: soft plucked bass, toy-bell melody, short nap stings. It uses no downloaded or commercial song. Music is ducked under the measured speech windows. The final mixed AAC track is exactly 18 seconds and is embedded in the HTML, so playback needs no speech network connection.

背景音乐由仓库代码原创合成，使用轻拨弦、玩具琴和午睡小音符，不下载商业歌曲。按实际对白区间压低配乐。18 秒混音完整内嵌，播放不需要再连语音服务。

Sources / 源文件：[Current voice configuration / 当前声音配置](audio-config.json) · [Frozen v002 voice profiles / v002 声线留档](audio/v002/voice-profiles.json) · [v002 mix timings / v002 混音记录](audio/v002/mix.json) · [Child-voice mix / 童声混音](template/assets/episode-audio-v002.m4a) · [v001 original mix / v001 原混音](template/assets/episode-audio-v001.m4a).

Reproduction / 重新生成：install `scripts/requirements-audio.txt`, provide ffmpeg/ffprobe on PATH, then run the audio tool with a new version label. The player asset reference must be updated to the new audio filename before building a new HTML version.

复现需安装声音依赖和 ffmpeg/ffprobe，以新版本名生成声音；随后把播放器中的声音文件名切换到新版本，再生成新 HTML。
