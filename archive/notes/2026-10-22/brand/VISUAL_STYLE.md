# Historical documentation snapshot / 历史说明快照

Source / 原路径: brand/VISUAL_STYLE.md; saved before repository reorganisation, parent commit ef6b6b7. Current instructions remain at the original stable path / 当前指引仍在原路径。

---

# Visual Style · 画风与动画标准

Status / 状态：Creator-confirmed direction; individual new drawings/films still need review / 方向已确认，具体新画稿与成片仍待审。2026-10-20。

**Locked reference / 已锁定参考：the creator explicitly requested returning to the original blue-floor painting. It takes priority over recent v005–v012 rendering choices. Keep the original natural kittens, broad gouache color masses and coherent painted environment; no fine-fur mascot redesign / 创作者明确要求按原蓝底绘画走，优先于近期 HTML 的渲染取舍；保留自然幼猫、粗水粉色块与统一绘画环境，不再精细毛发吉祥物化。**

## One Sentence · 一句话标准

**The original painted cats, acting more vividly—not redesigned cats, not moving slides / 原来的水粉小猫，演得更生动；不是换一套猫，也不是动态幻灯片。**

## Reference Hierarchy · 参考优先级

1. [Original cat photo](../../../../characters/references/README.md) anchors Mochi/Lucky identity / 真猫照片锚定外貌身份。
2. [Original blue-floor painting](../../../../characters/references/painted-style-2026-10-20.png) is the primary rendering/proportion reference / 原蓝底绘画为笔触、猫体态比例及绘画场景的首要参考。
3. Existing HTMLs, including v005, are historical experiments, not authority to override the original painting. New poses must match the original reference at comparable scale/angle / 包括 v005 在内的 HTML 均不能压过原绘画；新姿势按原图同尺度同角度校验。
4. The Legend of Hei can inspire clear silhouettes, restrained 2D acting, reaction pauses and staging, not its characters/model sheets/scenes / 《罗小黑》只借鉴二维表演和分镜，不复制角色设定或画面。

Older SVG studies remain valid archives, not a requirement to mix two incompatible character styles in one new film / 老 SVG 样片保留，不要求在新片混用不同造型。

## Keep Fixed · 什么不能漂移

| Element / 项目 | Keep / 保留 | Reject / 避免 |
| --- | --- | --- |
| Identity / 造型 | Established face, head/body ratio, ears, coat, nose and tail / 原脸型、头身、耳朵、毛色鼻尾 | Different face or age per pose; copied franchise design / 每姿势换脸变年龄、套别的 IP |
| Mochi | Fluffy orange-gold, cream muzzle/chest, pink nose / 橘金蓬松、浅口鼻胸毛、粉鼻 | Only recoloring Lucky / 只给 Lucky 换色 |
| Lucky | Warm charcoal black, large ears, yellow-green eyes; distinct silhouette / 温黑、大耳黄绿眼、独立轮廓 | A second long-haired Mochi / 另一只长毛 Mochi |
| Medium / 材质 | Broad broken matte gouache strokes, simplified fur-color masses / 大块、断续的哑光水粉笔触，概括毛色 | Fine individual-hair rendering, polished shading, glossy 3D or vector mascot / 逐根精细毛发、抛光明暗、亮面 3D 或矢量吉祥物 |
| Color / 配色 | Warm, coherent, restrained accents; keep orange readable / 温暖统一、点缀克制，橘色有辨识度 | Neon/glow, whole-frame oversaturation or muddy gray / 霓虹光晕、全图过饱和或压成灰 |
| Frame / 画面 | Cats dominate a coherent painted environment; background and characters share brush language / 猫主导统一绘画环境，背景与角色使用同一笔触语言 | Beige slide-deck layouts, pasted cutouts, persistent headline/card dominance / 米白幻灯片版式、贴图感、标题卡长期抢主角 |

Historical paper color / 历史纸色：`#F3EDDF`; not mandatory for new scenes / 不再强制新场景米白底。Use a coherent painted palette derived from the original reference, not a simple background-color swap / 从原参考提取统一绘画色彩，不只是换背景色。Do not enforce old SVG outlines or recent detailed fur on the reference style / 不套旧 SVG 轮廓或近期精细毛发。

## Acting · 神态与动作

- Expressions are motivated by the other cat or an object: confidence → doubt → a held realization → a deliberate response / 神态由对方和道具触发，得意、疑惑、愣住与回应有因果。
- Use eyelids, gaze, ear angle, small mouth changes, head/body turn and posture; give both cats agency / 用眼睑眼神、耳角、嘴角、头身和姿态，两只都有主见。
- Anticipation → action/contact → reaction → settle. A pause can be funnier than more motion / 准备、动作接触、反应、落稳；留停顿，不为动而动。
- Independent rhythms, eye contact and clear screen direction; a character should respond, not idle while a UI card takes over / 节奏错开、目光与方位清楚，不让猫闲置等界面讲课。
- No constant whole-image rocking, random expression changes, oversized human mouths or endless bounces / 不持续摇整图、不随机换脸、不用巨大人嘴或全程弹跳。
- Deadpan humor needs visible listening and a held reaction; the last small action or short line should earn the laugh without an explanatory effect / 冷幽默要有听对方说话和停半拍，靠最后的小动作或短句出笑点，不用解释性特效。
- A still cat with camera zooms, UI fades and occasional blinks is not sufficient. Review a continuous reach/contact/release sequence before expanding production / 静态猫加推拉镜头、界面淡入和眨眼不足以达标；先验一段连续伸爪接触收回，再扩产。
- Do not cut limbs or necks out of a flattened painting and pivot them without proper joint underpainting. v010 visibly detached a paw and was rejected. Use complete-character redraws for the current action repair; inspect every shoulder/elbow/paw connection before showing a preview / 不从扁平画稿硬抠肢体头颈旋转；v010 因断爪被否决。当前用整猫重画修动作，展示前逐帧检查肩肘爪连接。

Current implementation is painted cutout/limited animation. It is **not** a complete model sheet, fully hand-drawn frame animation, phoneme lip sync or proof that the final acting goal is met / 当前只是分层有限动画，不是完整设定表、全逐帧手绘、音素口型，也不等于目标已验收。

## Composition & Recording · 构图与录屏

- Default current story format: 9:16; 4:5 has its own layout. Historical 001/002 keep original proportions / 当前剧情以竖屏为主，另设 4:5；历史作品保持原比例。
- At least 5% safe margins; readable English dialogue; one visual focus at a time / 安全边距、手机可读英文、每拍一个视觉重点。
- Product details serve one capability and remain secondary to the cats / 界面只服务一个能力，不压过人物。
- Match speech, gesture, pauses and quiet score. Sound off must still work / 对白动作停顿配合、配乐轻，静音也看得懂。
- Embed art/audio, use offline font fallbacks, respect reduced motion and offer pause/replay / 素材声音内嵌、离线字体、减少动态与暂停重播。
- Controls stay outside the frame; one-shot recording should hold the final frame / 控制区在画面外，一次录屏尾帧停住。

Do not promise final video quality from a low-resolution MP4. Test the actual browser capture at target size before approval / 低清预览不代表正式画质；批准前实测目标尺寸浏览器录屏。

## Review Gate · 逐项验收

1. Same cat at the start and end, identifiable without a name label / 首尾是同一只猫，不看名字也认得。
2. Understand the emotion with dialogue hidden / 遮住对白仍能读懂神态。
3. Action has a reason and a clear reaction, not just a transform / 动作有原因和反应，不只是变换图片。
4. Text/product moment is legible without pausing / 不暂停也能读懂重点。
5. Child voices are actually present if advertised; music never masks words / 宣称童声就有真实音轨，配乐不盖词。
6. Real browser recording and creator review, not only code/render checks / 实际录屏与创作者验看，不只看代码或离线渲染。

For comic panels use the same identity, material and reaction logic; do not force a motion shot list into every comic / 漫画沿用相同造型材质与反应逻辑，不机械套动态分镜。

## Story variety · 场景与剧情多样性（2026-10-22）

Visual consistency means the same painted character identity, brush language and staging rules across different locations. It does not require every story to reuse the same room. Current 001/002/004 use separate living-room, coffee-nook and kitchen plates at 4:5; 003 stays 4:5 and Halloween 005 stays 9:16. Give each story a visible action/payoff and its own original score/SFX, with explicit sound playback. / 统一的是角色、笔触与空间规则，不是重复同一房间；当前三集分别用客厅、咖啡角、厨房，003 保留 4:5，005 保留节日竖屏；每集有动作反转和独立声音，显式带声播放。
