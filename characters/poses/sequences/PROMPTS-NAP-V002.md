# Sit-to-Nap Generation · 坐下入睡动作稿生成记录

2026-10-20. Built-in Image Generation with transparent output. Exact prompts below / 内置图像生成，透明输出，实际提示词如下。

## v001 Draft · 初稿

Reference 1 / 身份起始参考：[original proud Lucky](../lucky-proud-v001.png). Reference 2 / 终点参考：[original sleeping Lucky](../../../motion/003-chief-nap-officer/template/assets/lucky-sleeping-v001.png). Output / 输出：[v001 draft](lucky-nap-sheet-v001-draft.png).

```text
Use case: illustration-story. Asset: one EIGHT-FRAME whole-character animation sheet, FOUR equal columns by TWO equal rows, 2:1 transparent canvas. Reference 1 is the exact identity, face, head size and warm charcoal-black/yellow-green-eyed original Lucky, with chunky dry matte brown/black gouache fur; reference 2 is the final curled sleeping pose and same texture. Create a SHORT CONTINUOUS sit-to-nap action, eight progressive whole-cat drawings, read left to right then next row. Preserve the original kitten, NOT a redesign. Frame 1 sits proudly as reference 1, paw still raised. Frame 2 lowers that paw while eyelids droop. Frame 3 a small cute yawn, head tips forward, front paws start reaching down. Frame 4 forelegs bend naturally, chest lowers halfway. Frame 5 chest lowers toward the planted paws and hindquarters begin tucking. Frame 6 head comes down onto BOTH connected forepaws, hindlegs folded. Frame 7 tail curls gently around the tucked body, eyes close. Frame 8 rests fully asleep in a compact loaf close to reference 2, head on paws. Same head SIZE, face, ear shape, fur and camera angle in every cell; body height decreases naturally as he lies down, DO NOT scale the sleeping cat up to sitting height. All paws remain anatomically connected to shoulder/foreleg/torso in every frame; no detached limbs, duplicated paws, missing neck or cut seams. Frame-to-frame changes should be small and readable, with a believable lowering arc, not eight unrelated poses. Fixed camera and fixed seated/lying ground contact, feet/paws at 86% cell height. PRODUCTION MARGINS: the seated cat should occupy only 68% of each cell height, with at least 10% transparent padding above every ear and around every tail and paw; lying frames naturally smaller vertically. No cropping at cell borders, visible transparent gutters. Genuine transparent alpha, no floor, haze, halo, props, labels, numbers, grid lines, captions, logo, other cats, plastic 3D or vector outline. Do not cut character parts apart; each cell is one complete original kitten.
```

## v002 Selected Edit · 选用修正版

Edit target / 编辑对象：v001 draft above / 上述初稿. Output / 输出：[v002 sheet](lucky-nap-sheet-v002.png).

```text
Use case: precise-object-edit. Repair production framing and SCALE in this exact eight-frame Lucky sit-to-sleep sheet. Keep its eight connected complete cats, gouache texture, original faces and action sequence, exactly FOUR columns by TWO rows. Main correction: give each kitten MUCH MORE transparent space inside its OWN equal square cell; all ears, whiskers, tail and feet fully contained with at least 12% margin on every side, no touching neighboring cells. Seated frame 1 must be ONLY 60% of cell height. The sleeping frames must keep the SAME HEAD SIZE as frame 1, so their entire body naturally occupies LESS HEIGHT, not be enlarged to fill their cells. In the current sheet the crouching/sleeping heads got much larger; reduce those whole kittens to the same skull/ear scale as the first sitting kitten. All frames share the same camera and actual cat scale; DO NOT make every pose equally tall. Align their ground contact consistently to 83% of cell height. Preserve shoulders, elbows, wrists and paws completely connected, no cut-apart parts. Maintain the same eight progressive poses and side/front three-quarter angle, keep the original warm black kitten's identity, no redesign. Genuine transparent alpha, no floor, haze, lettering, grid, props, background or watermark. The output should visibly have large empty transparent gutters between every complete kitten; nothing overlaps a cell boundary.
```

## Actual Registration · 实际定位

Output is 1774×887, but row placement is not a perfect equal grid. Measured row boundary y=560; per-frame source windows live in the SVG. Baselines: 525, 526, 523, 526, 819, 813, 818, 819. One constant 1.14 scale is used; only full-character placement changes / 实际行位置不完全均分；按实测窗口选整猫，统一缩放，仅平移定位，源 PNG 不改。

The initial draft was rejected for tight framing/uneven pose scale, not silently substituted into playback. The revised eight complete silhouettes and their native timeline frames were inspected; alpha connectivity is only a detached-piece screen, not creator approval / 初稿边缘与尺度问题不进播放器；修正版逐帧验轮廓及实际时间轴画面，连通检查不等于创作者批准。
