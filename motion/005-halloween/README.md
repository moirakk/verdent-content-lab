# A Little More · Halloween Special / 万圣节特辑

Current: **v012**, an 18-second browser-playable limited-animation draft, unpublished. / 当前 v012，18 秒浏览器有限动画待审稿，未发布。

## Sound and direct download / 声音与直接下载

**Play with sound** starts the 18-second film from zero with child dialogue and the original Halloween score. **Download MP4 with sound** saves the reviewed 540×960 H.264/AAC export embedded in the HTML; no screen recorder is needed. The download is a baked reviewed export, not a live renderer for later source edits. / 带声播放按钮从头启动童声与原万圣节 BGM；下载按钮保存内嵌的 540×960 带声 MP4，无需录屏。下载对应已审片导出，不会实时渲染未来的源码修改。

[Voice mix](audio/v005/mix.json): Lucky/Ana at 0.25s and 4.95s; Mochi/Maisie at 14.95s. Measured durations 2.088s, 1.872s, 2.136s fit their captions. BGM ducks during speech; the final greeting waits until 17.25s. These are synthetic childlike voices, not real children. / 三句实测长度均落在字幕窗口内，讲话时压低 BGM，节日尾句延至 17.25 秒；为合成童声，非真人儿童。

v011 adds download/play controls to the earlier music-only cut. v012 supplies the complete voiced export, with the same painted art and motions. The actual downloaded bytes were checked against the review MP4. / v011 为旧配乐版增加播放下载，v012 补齐完整童声及匹配视频；实测下载字节与审片文件相同。

## Motion polish / 连续动作打磨

The creator liked v008 and requested stronger animation. v010 preserves its exact art and adds event-driven body compression/recoil, a connected mesh across the whole ghost drawing for delayed cloth motion, a visible first-candy bucket impact and damped bucket wobble. The first candy now dips behind the rim instead of spinning forever. Candy emission accelerates, then settles before Mochi rises slightly and speaks at 14.8s. No new idle rocking was added. / 创作者认可 v008 后要求更强动画感；v010 保留原画，增加动作驱动的蓄力回弹、整猫连续网格上的布料延迟、落桶接触与阻尼轻晃；首糖落入桶中收住，不再持续旋转。糖雨由少变密，落稳后 Mochi 于 14.8 秒稍抬头接话。

Art PNGs and the supplied logo are unchanged. This remains limited key-pose animation augmented with continuous deformation, not newly hand-drawn in-betweens. / 原 PNG 与 Logo 字节未改；当前为关键姿势加连续形变，非新增手绘中间帧。

## Latest visual direction / 最新画面要求

The creator explicitly wants the existing oil/gouache cats and room, not 3D-rendered kittens. [Approved reference](../../characters/style-anchors/halloween-approved-painting-2026-10-22.png). Only the computer interaction gains 3D depth. Lucky wears the white ghost sheet; Mochi has a small painted witch hat. Dialogue appears above the speaking cat’s head and follows its pose, with no top title/dialogue panel. / 明确保留当前油画猫和房间，白布幽灵 Lucky、小女巫帽 Mochi；只增强电脑交互空间感，对白跟随说话猫头顶，不放顶部标题对白栏。

The laptop is built from projected solid geometry: base/lid side thickness, physical hinge, keyboard plane, individual keycaps, trackpad and ports. Lucky’s complete reach/press drawing overlaps the keyboard; a key depresses and the lid responds at 1.28s and 5.30s, accompanied by quiet taps. The original logo is mapped onto the screen plane at its physical aspect ratio. / 电脑由投影立体面组成，有屏幕底座厚度、铰链、键盘键帽、触控板和接口；整猫伸爪按键时触发键帽下沉、屏幕回弹和轻敲声，Logo 按原比例映射到屏幕面。

Some airborne candies pass behind the cats; the foreground pile occludes their bodies. The room raster is unchanged from v004; no 3D character/room experiments enter this template. / 部分飞糖从猫后方经过，前景糖堆遮住身体；背景沿用 v004，没有采用三维猫或三维房间试验。

## Story / 故事

Lucky makes a wish to Verdent: “Treats, please.” One candy lands in a pumpkin bucket. “A little more.” A candy shower buries both cats. Mochi: “Define ‘little’.” / Lucky 向 Verdent 许愿要糖，先掉一颗，再贪心多要一点，糖雨埋住两只猫，Mochi 冷面追问“一点”的定义。

This is fictional Halloween magic, not a real software capability claim. The creator requested the candy-wish story on 2026-10-22, replacing the earlier vacuum direction. / 这是万圣节童话魔法，不是真实软件能力宣称；创作者于 10 月 22 日提出糖果许愿，替代之前的吸尘器方向。

## What moves / 实际动作

- Lucky: attentive → raise paws → wishing with closed eyes → gaze up → startled → crouch → peek at Mochi. Eight complete-character drawings in the white ghost costume; no detached limb rig. / 八幅整猫画稿：抬爪、闭眼许愿、追视、惊吓、缩身和回看，不拆爪。
- Mochi: listen → look up → startle → deadpan crouch. Four complete drawings with a small purple witch hat. / 四幅整猫反应稿。
- First candy launches, follows an arc, contacts the bucket and bounces; 330 candies then follow staggered gravity-like arcs, turn, land and settle against a bounded packed mound. These are deterministic 60 Hz sampled trajectories; not a general rigid-body solver. / 首糖抛物线落桶回弹，330 颗糖错峰旋转落下并堆积；轨迹固定采样，不冒充通用刚体碰撞引擎。
- Magic sparkles respond to the wishes; music pauses before the shower. / 许愿触发火花，糖雨前停乐。

This uses full-pose changes and prop movement, not continuous hand-drawn in-betweens or lip sync. Three verified synthetic child-voice lines are present; permanent casting and final performance approval remain pending. / 当前整猫姿势切换与道具运动，不是全手绘中间帧或口型同步，已有三句合成童声，永久定音与最终表演仍待确认。

## Playback / 播放

Open [index.html](index.html), click **Sound off** to enable the embedded original music, and replay. Space pauses; R restarts. `?capture=1` hides controls; `?t=8500` freezes a moment. Reduced motion starts paused; final frame holds. / 单文件离线打开，点击声音按钮启用内嵌 BGM；支持暂停重播、录制模式、固定时间与减少动态，尾帧停住。

[Browser-rendered review MP4](previews/halloween-wish-v012-voiced-review.mp4), 540×960, 24 browser samples/sec encoded at 24fps, with original score. It is a draft preview, not a final release master. / 浏览器采样审片视频，含原创配乐，非最终发布母版。

## Music & Art / 配乐与画稿

- Original [score WAV](audio/v004/halloween-wish-score-v003.wav), [composition source](audio/v004/compose.py), [timed notes](audio/v004/score.json): 108 BPM, D harmonic minor, synthetic celesta, plucks, soft bass and light wooden taps; silence at 6.5–7.8s, faster note density during the candy shower. No third-party music samples. / 原创万圣节钟琴拨弦小调，糖雨前停顿、糖雨段音符加密，无第三方音乐采样。
- New [room](template-interaction/assets/halloween-room-v001.png), [Lucky sheet](template-interaction/assets/lucky-ghost-painted-v001.png), [Mochi sheet](template-interaction/assets/mochi-witch-painted-v001.png) generated with built-in ImageGen, anchored to the original blue-studio painting. [Exact prompts](PROMPT.md). / 内置 ImageGen 参考原画生成，提示词保留。
- [Supplied Verdent logo](../../brand/assets/verdent-logo-supplied-2026-10-22.png): exact user-provided PNG, unmodified, displayed at its original aspect ratio. / 用户于 10 月 22 日提供的原 PNG，字节未改，原比例显示。
- Native canvas candy, laptop and bucket props; painting strokes come from original raster art. / 糖果、电脑和桶为画布道具，角色背景使用绘画原图。

## Preserved history / 历史保留

v001 is the vacuum storyboard animatic. v002–v004 preserve the initial candy-wish development. v005–v008 preserve the painted costume, head-bubble and solid-laptop interaction refinements. Earlier concepts and scores remain. / v001 为吸尘器动态分镜，v002–v004 保留许愿版本迭代；早期零食碗概念、吸尘器画稿及初版配乐均保留。

## Verification / 检查

Real Chromium playback checked: no JavaScript errors, music starts on user click, replay plays, pause holds timeline, and end holds the final frame. Frame registration and phone-sized screenshots reviewed; logo source checksum matches the supplied file. / Chromium 实测无脚本错误，点击出声，重播播放，暂停和尾帧停住；检查手机截图、整猫裁切及 Logo 原图校验。

Current source / 当前源码：[template-interaction](template-interaction/motion.js). [Frame registration](template-interaction/frame-registration.json) was measured from each whole-character alpha component; the artwork itself was not edited. / 定位通过整猫透明通道主体测得，原画字节未编辑。

Polish verification / 本轮检查：Chromium screenshots reviewed at contact, cloth recoil, bucket impact and shower start; no JavaScript errors; music/replay/pause/end hold passed again. Current review video uses 24 browser samples/sec at 540×960. v009 is the first motion pass; v010 closes subpixel seams in the cloth mesh. / 检查按键、布料回弹、落桶与糖雨起点截图，播放声音控制复查通过；审片为 540×960、每秒 24 次浏览器采样；v009 初轮动作，v010 修布料细接缝。

Spatial staging check / 空间关系复查：Reviewed key contact, recoil and final hold at phone size. Cats remain on the foreground floor plane with ground shadows; laptop stays between them, pumpkin bucket in front; back candies and foreground pile maintain their occlusion order. Temporary lift is limited to the motivated startle/recoil. / 已在手机尺寸复查接触、回弹和尾帧：猫在近景地面且有落地阴影，电脑居中、南瓜桶在前，飞糖和糖堆前后遮挡分明；短暂离地仅用于受惊回弹。
