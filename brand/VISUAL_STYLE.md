# Visual Style · 视觉规范 / Mochi & Lucky

## English Guide · 英文说明

Use warm aged ivory paper, controlled rough black linework, muted color blocks, generous empty space, and restrained but cute expressions. Character designs, poses, and compositions must be original. Avoid copying the reference account, rigid component-like cartoon shapes, plastic gradients, glossy 3D highlights, or crowded overlays.

The palette below is shared across episodes. Paper grain stays static and subtle. Use rounded, intentionally asymmetric contours, about 4–6 units at 800-unit width; do not simulate drawing with constant jitter. Mochi keeps fluffy orange-gold fur, cream muzzle/chest, light tabby marks, and a pink nose. Lucky keeps dark short fur, large triangular ears, yellow-green round eyes, and a slim tail. Existing simplified SVG versions remain intact; refine future versions from the original photo.

Default motion is 4:5 at 1080 × 1350, with an 800 × 1000 internal canvas and at least 5% safe margins. Dialogue sits above the characters. Motion 001 loops for 8 seconds; other durations follow the story. Use only gentle blinking, breathing, tails, coffee steam, and screen flicker. Offset character rhythms, support reduced motion and pause/replay, use offline font fallbacks, and keep all finished text English. Allow time for the punchline.

For comics, determine pauses before panel count. Give each panel one action or reaction, including silent reaction panels. Show only product details relevant to the joke. Seasonal accents keep the same paper and line system.

## 方向

参考独立手绘猫漫画的视觉语言：**米白旧纸质感、粗糙但受控的黑色手绘线、低饱和色块、留白多、角色表情克制但萌**。本次已查看历史对话附带的参考账号截图与 Mochi / Lucky 真猫照片；仅吸收纸张、线条和表情克制的方向，不复制截图内容，也不将其作为仓库素材发布。

角色、轮廓、配色组合、道具关系与构图都要原创；不能复制参考账号角色、标志姿势或构图。避免规整的网页组件式卡通、塑料渐变、夸张 3D 高光、满屏装饰和信息卡。

## 基础参数

| Token | 值 | 用途 |
| --- | --- | --- |
| Paper | `#F3EDDF` | 米白旧纸，大面积背景 |
| Ink | `#302E2A` | 温黑轮廓与对白 |
| Mochi | `#D5AE6C` | 黄猫的低饱和赭黄 |
| Lucky | `#363633` | 黑猫，避免纯黑死块 |
| Blush | `#C78F7E` | 少量鼻子与面颊色 |
| Sage | `#8C9B82` | 植物和低调屏幕点缀 |

纸纹静止、细且淡，不影响文字。轮廓以有控制的非对称曲线为主，端点圆润；主要轮廓约 4–6 / 800 单位。不要通过连续抖动模拟手绘。大面积留白留给对白与停顿。

真猫外貌以 [参考照片与说明](../characters/references/README.md) 为锚点。Mochi 保留橘金蓬松毛、浅虎斑、浅奶油口鼻与胸毛、小粉鼻；Lucky 保留温黑短毛、大三角耳、黄绿圆眼与细长尾巴。插画可以简化，但不要把两只都画成只换填色的同一只猫。

表情用眼睑、瞳孔与头部倾角变化，不靠大张嘴。Mochi 可用微垂眼睑表现淡定，Lucky 可用圆眼与歪头表现好奇；这是剧情表演，不是照片推断。已有 SVG 是初始原创造型（包括 Lucky 的奶油色简化眼睛）；后续新版本逐步精修，已有 HTML 存档完整保留。

## Motion

默认 4:5（1080 × 1350），模板内部坐标 800 × 1000。外框留至少 5% 安全区；对白放上部，角色与桌面在下部。英文每次一两行，成片不得出现调试标签。

首条为 8 秒循环，两句对白；其他片可按内容配置时长，末句留停顿。轻动效仅含眨眼、呼吸、尾巴摆动、咖啡蒸汽、屏幕微闪。不同角色错开节奏。避免弹跳字幕、闪屏和持续缩放；遵循 `prefers-reduced-motion`，提供暂停、重播与固定时间预览。

用系统圆润手写感字体回退，不依赖远程字体。标题与对白优先清楚可读；字体不是角色识别的唯一来源。素材必须可离线打开。

## 漫画

先确定对话停顿，再定格数；一格只承载一个动作或反应。保留无对白的反应格。产品界面只画对笑点有用的局部，真实功能核对后使用。节日篇可加少量月亮或月饼色，保持纸色与线条一致。
