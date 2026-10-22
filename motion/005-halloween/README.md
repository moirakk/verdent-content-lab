# A Little More · Halloween Special / 万圣节特辑

Current: **v004**, an 18-second browser-playable limited-animation draft, unpublished. / 当前 v004，18 秒浏览器有限动画待审稿，未发布。

## Story / 故事

Lucky makes a wish to Verdent: “Treats, please.” One candy lands in a pumpkin bucket. “A little more.” A candy shower buries both cats. Mochi: “Define ‘little’.” / Lucky 向 Verdent 许愿要糖，先掉一颗，再贪心多要一点，糖雨埋住两只猫，Mochi 冷面追问“一点”的定义。

This is fictional Halloween magic, not a real software capability claim. The creator requested the candy-wish story on 2026-10-22, replacing the earlier vacuum direction. / 这是万圣节童话魔法，不是真实软件能力宣称；创作者于 10 月 22 日提出糖果许愿，替代之前的吸尘器方向。

## What moves / 实际动作

- Lucky: attentive → raise paws → wishing with closed eyes → gaze up → startled → crouch → peek at Mochi. Eight complete-character drawings; no detached limb rig. / 八幅整猫画稿：抬爪、闭眼许愿、追视、惊吓、缩身和回看，不拆爪。
- Mochi: listen → look up → startle → deadpan crouch. Four complete drawings. / 四幅整猫反应稿。
- First candy launches, follows an arc, contacts the bucket and bounces; 330 candies then follow staggered gravity-like arcs, turn, land and settle against a bounded packed mound. These are deterministic 60 Hz sampled trajectories; not a general rigid-body solver. / 首糖抛物线落桶回弹，330 颗糖错峰旋转落下并堆积；轨迹固定采样，不冒充通用刚体碰撞引擎。
- Magic sparkles respond to the wishes; music pauses before the shower. / 许愿触发火花，糖雨前停乐。

This uses full-pose changes and prop movement, not continuous hand-drawn in-betweens or lip sync. Child speech remains pending. / 当前整猫姿势切换与道具运动，不是全手绘中间帧或口型同步，童声待补。

## Playback / 播放

Open [index.html](index.html), click **Sound off** to enable the embedded original music, and replay. Space pauses; R restarts. `?capture=1` hides controls; `?t=8500` freezes a moment. Reduced motion starts paused; final frame holds. / 单文件离线打开，点击声音按钮启用内嵌 BGM；支持暂停重播、录制模式、固定时间与减少动态，尾帧停住。

[Browser-rendered review MP4](previews/halloween-wish-v004-review.mp4), 432×768, 12 samples/sec encoded at 24fps, with original score. It is a draft preview, not a final release master. / 浏览器采样审片视频，含原创配乐，非最终发布母版。

## Music & Art / 配乐与画稿

- Original [score WAV](audio/v002/halloween-wish-score-v001.wav), [composition source](audio/v002/compose.py), [timed notes](audio/v002/score.json): 108 BPM, D harmonic minor, synthetic celesta, plucks, soft bass and light wooden taps; silence at 6.5–7.8s, faster note density during the candy shower. No third-party music samples. / 原创万圣节钟琴拨弦小调，糖雨前停顿、糖雨段音符加密，无第三方音乐采样。
- New [room](template-wish/assets/halloween-room-v001.png), [Lucky sheet](template-wish/assets/lucky-wish-sheet-v001.png), [Mochi sheet](template-wish/assets/mochi-wish-sheet-v001.png) generated with built-in ImageGen, anchored to the original blue-studio painting. [Exact prompts](PROMPT.md). / 内置 ImageGen 参考原画生成，提示词保留。
- [Supplied Verdent logo](../../brand/assets/verdent-logo-supplied-2026-10-22.png): exact user-provided PNG, unmodified, displayed at its original aspect ratio. / 用户于 10 月 22 日提供的原 PNG，字节未改，原比例显示。
- Native canvas candy, laptop and bucket props; painting strokes come from original raster art. / 糖果、电脑和桶为画布道具，角色背景使用绘画原图。

## Preserved history / 历史保留

v001 is the vacuum storyboard animatic. v002–v004 preserve candy-wish development. Earlier treat-bowl concept, vacuum artwork and first music sketch remain. / v001 为吸尘器动态分镜，v002–v004 保留许愿版本迭代；早期零食碗概念、吸尘器画稿及初版配乐均保留。

## Verification / 检查

Real Chromium playback checked: no JavaScript errors, music starts on user click, replay plays, pause holds timeline, and end holds the final frame. Frame registration and phone-sized screenshots reviewed; logo source checksum matches the supplied file. / Chromium 实测无脚本错误，点击出声，重播播放，暂停和尾帧停住；检查手机截图、整猫裁切及 Logo 原图校验。
