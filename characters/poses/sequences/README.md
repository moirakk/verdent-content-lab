# Whole-Body Sequences · 完整角色动作稿

2026-10-20. Generated with the built-in Image Generation tool from our existing original cutouts; original output bytes and alpha are preserved. These are review assets, not approved replacement character standards / 通过内置图像生成工具，以现有原创猫为参考生成；保留原始字节与透明通道，仍为待审动作稿，不自动替代造型标准。

| Active sheet / 选用稿 | Frames / 帧数 | Purpose / 用途 |
| --- | --- | --- |
| [lucky-reach-sheet-v002.png](lucky-reach-sheet-v002.png) | 8, four columns × two rows / 四列两行 | Raised paw → bend elbow → reach down → press; reverse order for return / 举爪、屈肘、向下伸爪、按下；反向播放收回 |
| [mochi-reaction-sheet-v002.png](mochi-reaction-sheet-v002.png) | 4, two columns × two rows / 两列两行 | Skeptical look → lower eyelids → slow blink → downward glance / 怀疑、垂眼、慢眨眼、低头看 |
| [lucky-nap-sheet-v002.png](lucky-nap-sheet-v002.png) | 8, four columns × two rows / 四列两行 | Sit → lower paw → yawn → fold legs → curl asleep / 坐姿、垂爪、哈欠、屈腿、蜷卧 |

Every frame is a complete cat with connected torso, shoulder, elbow, wrist and paw. Do not cut a foreleg out and rotate it. Playback windows select one whole character from the sheet; no anatomical masks are used / 每帧都是完整的猫，躯干肩肘腕爪连续。不再抠出前肢硬转；播放窗口只选整只猫，不做解剖部位遮罩。

## Registration · 定位数据

- Lucky: 1774×887; columns 443.5px apart; row boundary y=455. Feet baselines by frame: 450, 450, 451, 451, 849, 849, 850, 851 / 实测脚底按各帧定位，不假定生成稿完美对齐。
- Mochi: 1254×1254; cells 627×627; baselines: 611, 611, 1205, 1204 / 每格尺寸与脚底见此。
- Lucky nap: 1774×887; measured row boundary y=560; baselines 525, 526, 523, 526, 819, 813, 818, 819; source windows account for uneven gutters / 入睡稿按实测行间距与脚底定位。
- Runtime keeps a constant scale per sequence and registers the feet to stage y=780. It does not rescale each drawing independently / 同套画稿保持统一缩放，脚底对齐舞台，不逐帧任意拉伸。
- Active usage / 使用位置：[Motion 003 source](../../../motion/003-chief-nap-officer/template/motion.js), v012. No original image was overwritten / 原图未覆盖。

## Review & Limits · 验看与边界

All twenty frame silhouettes were inspected. An alpha-connectivity screen finds >99.99% of painted pixels in each frame's main connected component; this detects detached large pieces, not correct anatomy or approved style. Inspect shoulder continuity, pose arcs, face consistency, contact, foot registration and playback as well / 已验二十帧轮廓；透明通道连通检查用于排查大块漂浮部件，不代替肩肘解剖、动作弧线、脸型与播放验看。

The sheets provide 20 AI-generated key drawings, not 24 newly hand-drawn frames per second or a finished release. 003 still uses held poses/key-frame changes and has no phoneme lip sync / 是二十张 AI 生成关键画稿，不宣称每秒 24 张手绘或发布成片；仍有保持帧和姿势切换，无音素口型。

Unselected drafts remain for provenance / 未选稿保留追溯：[Lucky reach v001](lucky-reach-sheet-v001-draft.png), [Mochi v001](mochi-reaction-sheet-v001-draft.png), [Lucky nap v001](lucky-nap-sheet-v001-draft.png). Their framing/scale is not suitable for the active player / 初稿边缘或尺度不合格，不进当前播放器。

[Exact prompts and reference roles / 完整提示词与参考分工](PROMPTS.md)

[Sit-to-nap exact prompts / 入睡动作完整提示词](PROMPTS-NAP-V002.md)
