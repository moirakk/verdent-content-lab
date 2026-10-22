> Historical production notes / 历史制作记录: the versions, source selection and limitations below describe that earlier experiment. Current selections: [EPISODES.md](../../EPISODES.md). / 下文属当时批次，当前以总览为准。

# Artwork & Generation · 素材与生成说明

Mode / 模式：Built-in Image Generation tool / 内置图像生成工具。Date / 日期：2026-10-20。

Asset / 素材：[`template/assets/cats-gouache-v001.png`](template/assets/cats-gouache-v001.png). Original 1536 × 1024 PNG with alpha; preserved without cropping, repainting, or background changes. Embedded into the standalone HTML, with a complete copy in the episode archive.

原始透明 PNG，未裁切、未改色。角色原图随源码保存，并内嵌进独立 HTML；本集历史版本中也保存完整素材。

References / 参考：[Creator's painting / 创作者提供的笔触参考](../../characters/references/painted-style-2026-10-20.png) and [real cats / 真猫照片](../../characters/references/mochi-and-lucky-original.jpeg). References guide appearance and brush texture; neither is copied into the public preview as a reference file.

参考图用于角色识别与笔触方向，原始参考文件保留在私有资料中，不作为预览素材发布。本次生成的是两只猫的新坐姿，未照搬蓝色地面构图。

## Final Prompt · 最终提示词

```text
Use case: illustration-story. Create an ORIGINAL animation character asset, landscape 3:2 composition on a genuinely transparent background. Input image 1 is STYLE reference: lively rough dry gouache brushstrokes, matte layered paint, warm orange furry kitten and charcoal black kitten, tactile ragged fur edges. Input image 2 is SUBJECT identity reference. Do NOT reproduce the blue-floor composition. Paint TWO separate full-body seated cats side by side, same baseline, front view, facing a little toward one another. Left half: Mochi, fluffy orange-gold tabby older sister, cream muzzle and fluffy chest, small pink nose, calm composed slightly half-lidded thoughtful eyes, affectionate dry humor, not angry. Right half: Lucky, black/charcoal short-furred younger brother, large pointed ears, large round bright yellow-green eyes, alert curious sweet expression. The cats must be visually distinct and feel like the photographed cats, with expressive small faces. Both sit upright on their hind legs, forepaws resting low in front, all four paws and ears fully inside canvas. No furniture, no cups, no desk, no blue floor, no shadow field, no accessories, NO TEXT. Keep a CLEAR EMPTY TRANSPARENT GAP covering the central 12 percent of canvas between the cats, and transparent margins on all sides. Cats must not touch or overlap. Each cat fits completely within its own half for separate HTML animation. Tails gently curl inward beside each cat rather than reaching into the other half. Strong handmade painted texture, visible chunky dry-brush marks, slightly uneven silhouettes, restrained cute expressions. Absolutely not vector, CSS cartoon, 3D, glossy digital rendering, or polished airbrush. No checkerboard painted into image; alpha transparency.
```

## Review · 素材验看

The output has true alpha transparency and distinct, separated cats with visible gouache texture. Mochi's eyes are more open than the prompt requested, and her outer tail approaches the image boundary; keep this as draft artwork for creator review. Ambient animation moves each painted cat as a layer rather than synthesizing facial movement.

输出具备真实透明通道、分开的两只猫和明显水粉笔触。Mochi 的眼神比提示词要求更睁开，外侧尾巴也较接近边缘，因此仍作为待审素材。角色以整层做轻微动作，不声称实现逐帧面部动画。
