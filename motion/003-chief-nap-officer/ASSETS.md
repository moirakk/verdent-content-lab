# Assets & Sound · 素材与声音说明

## Artwork · 画面

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

English synthetic voice preview, not human voice acting. Mochi uses JennyNeural at a calmer pace; Lucky uses EricNeural with a lighter pitch and faster delivery. These are the pilot's voice choices, not permanently approved casting. Voice files were generated through [edge-tts](https://github.com/rany2/edge-tts), an external speech client; only the five English lines were submitted.

英文合成配音样片，非真人表演。Mochi 语气较稳，Lucky 轻快一些；属于试播声音方向，尚非永久定音。外部语音服务仅用于五句英文台词。

The backing score is an original deterministic instrumental composition made by `scripts/build-episode-audio.py`: soft plucked bass, toy-bell melody, short nap stings. It uses no downloaded or commercial song. Music is ducked under the measured speech windows. The final mixed AAC track is exactly 18 seconds and is embedded in the HTML, so playback needs no speech network connection.

背景音乐由仓库代码原创合成，使用轻拨弦、玩具琴和午睡小音符，不下载商业歌曲。按实际对白区间压低配乐。18 秒混音完整内嵌，播放不需要再连语音服务。

Sources / 源文件：[Audio configuration / 声音配置](audio-config.json) · [Mix timings / 混音时间记录](audio/v001/mix.json) · [Mixed track / 完整音轨](template/assets/episode-audio-v001.m4a).

Reproduction / 重新生成：install `scripts/requirements-audio.txt`, provide ffmpeg/ffprobe on PATH, then run the audio tool with a new version label. The player asset reference must be updated to the new audio filename before building a new HTML version.

复现需安装声音依赖和 ffmpeg/ffprobe，以新版本名生成声音；随后把播放器中的声音文件名切换到新版本，再生成新 HTML。
