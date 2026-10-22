# Selected image prompts · 新画稿提示记录

Built-in imagegen on 2026-10-22, based on `characters/style-anchors/blue-studio-keyframe-v001.png`. Backgrounds: `transparent_background=false`; cast sheets: `true`. Selected PNGs are copied unchanged into this folder's `assets/` and episode-local source folders. / 内置 imagegen，参考原蓝底关键帧；房间不透明、动作稿真透明，选中图原像素复制入库。

## Common background specification · 布景共同提示

“Edit reference / new animation background plate. Use the reference ONLY to preserve its exact broad, broken, matte oil/gouache brush language and warm palette. REMOVE both cats and replace the setting with this scene: [scene below] Portrait 4:5 image. A coherent hand-painted environment with thick visible short diagonal paint strokes and simplified color masses, not realistic detail. Keep all important background landmarks in upper third so animated cats can occupy lower stage. Absolutely NO characters, no animals, no text, no laptop, no logos, no glossy 3D render, no vector art. Different living-space design from reference while keeping the same painting technique.”

- **box-room-v001.png**: “A cozy lived-in living room, low coral/terracotta sofa along the BACK LEFT wall, a softly lit window BACK RIGHT, one indoor plant. Large generous cobalt and teal blue painted rug spans the lower TWO THIRDS as an EMPTY acting stage, straight-on low kitten eye-level camera. No furniture in the foreground. Warm afternoon sunlight. Room for a cardboard box in the central foreground, but DO NOT draw a box.” Original / 原图: `exec-ce8bd876-c308-484a-b0b9-7232370cc696.png`.
- **coffee-room-v001.png**: “A cozy little coffee nook inside a home. Window with softly blurred autumn leaves at BACK LEFT, ochre cupboard and a little coffee pot on high BACK RIGHT shelf. Deep teal and ultramarine painted floor takes the lower TWO THIRDS, EMPTY foreground acting stage. No foreground table, no mugs. Low kitten-eye-level camera. Warm morning light.” Original / 原图: `exec-4cb50f44-0ff4-413a-8dd1-3f269a87581c.png`.
- **cafe-room-v001.png**: “A warm homemade bakery kitchen viewed at low kitten eye level. Dusty sage cabinets and a terracotta tiled backsplash at the BACK, window BACK RIGHT with warm sunset light, a few hanging copper pans high on wall. Cobalt blue painted kitchen mat spans lower TWO THIRDS as EMPTY acting stage. No table in foreground, no trays, no food on floor, no cats.” Original / 原图: `exec-875aa1ef-6fd6-4c8e-ab87-3a699f033bec.png`.

## Common pose-sheet specification · 动作稿共同提示

“Create a transparent animation key-pose sprite sheet in exactly FOUR equal columns by TWO equal rows (8 cells), landscape image. Use the reference as the exact character and painting anchor: Mochi is fluffy orange-gold kitten with cream muzzle/chest, pink nose, calm deadpan eyes; Lucky is warm charcoal-black kitten, huge ears, yellow-green eyes, eager. Keep natural kitten proportions and broad broken MATTE oil/gouache paint strokes. NOT glossy 3D, NOT fine photoreal fur, NOT human bodies. No clothes. Every cat is a COMPLETE CONNECTED WHOLE CHARACTER with all limbs naturally attached. No text. [action specification below] Each whole scene neatly isolated in its own equal cell with at least 5% transparent padding. NO panels, NO dividing lines, NO background of any kind, NO cast shadow, genuine transparent alpha. Maintain identical camera angle and character design and scale across all eight drawings. Intended for a hand-painted kitten comedy; reference style must remain coarse, bold, playful and painterly.”

### box-cast-v001.png

“Both cats and ONE simple tan cardboard box. Mochi is to left, Lucky to right of the box. 8 successive action key drawings: (1) Lucky proudly presents the EMPTY box, Mochi sits listening; (2) Lucky puts forepaws over the near box rim; (3) Lucky climbing into the box, hind paws still outside, anatomical full pose; (4) Lucky proudly SITS INSIDE box with only shoulders/head above rim, Mochi side-eyes; (5) Mochi leans curiously over the box rim while Lucky makes room; (6) Mochi carefully steps front paws into the box, Lucky squishes to right; (7) BOTH cats squeeze snugly inside the SAME box, heads and ears above rim, slightly crowded but cute; (8) BOTH settle together inside, Lucky bright-eyed and Mochi half-lidded calm. The box stays exactly the same size and lower-center location in all cells; no scaling. Keep the combined cats and box grounded on a single matching baseline. No floor or ground shadow.”

Original / 原图: `exec-71f4781d-b146-4869-b3f3-8d24133b0d3b.png`.

### coffee-cast-v001.png

“Both cats only, Mochi on left, Lucky on right, naturally sitting on ground, plenty of transparent space between them. NO MUG, no objects at all. 8 successive action key drawings: (1) Lucky leans forward eagerly, Mochi listens; (2) Mochi half-lidded with one front paw slightly lifted, Lucky waits; (3) Lucky talks enthusiastically with a small raised paw while Mochi glances down left; (4) Mochi lowers her head toward a cup that will be placed in front of her (do NOT draw cup), Lucky proudly sits tall; (5) Lucky adds another idea, eyes wide, Mochi looks back with one eyebrow/eyelid slightly lowered; (6) both kittens notice a LARGE object arriving from the LEFT, lean back a little, ears perk; (7) Lucky crouches low, peering cautiously toward LEFT foreground, Mochi calm looking at him; (8) Lucky rises and stretches his whole neck upward to peek OVER an object, Mochi looks dryly amused. Keep both cats in same positions and matching ground baseline in every cell, with natural pose variation. No floor or ground shadow.”

Original / 原图: `exec-0b66d94f-0520-4109-a1c4-fc452484ec26.png`.

### cafe-cast-v001.png

“Both cats and one small EMPTY cream baking tray on the floor between them. Mochi LEFT, Lucky RIGHT, tray centered. Eight successive key drawings: (1) Lucky caught with biscuit crumbs around his mouth, Mochi staring at empty tray; (2) Lucky proudly sits tall, one paw on his chest, Mochi skeptical; (3) Mochi leans to inspect the empty tray, Lucky freezes ears slightly sideways; (4) Lucky carefully reaches whole connected front paw toward the empty tray while Mochi watches; (5) Lucky looks eagerly up at Mochi, Mochi half-lidded; (6) Mochi takes a protective step toward the tray, Lucky leans back innocently; (7) Mochi sitting upright next to tray with a small knowing head tilt; Lucky crouched and eager to try again; (8) Mochi calmly sits protectively in FRONT of the empty tray, Lucky looking hopefully at her, visible tiny crumbs. NO additional food props, no clothes. Keep exact same character positions, tray size and matching baseline across cells. No floor or ground shadow.”

Original / 原图: `exec-20d7b551-d15c-4bf1-980a-31505f17e57f.png`.

All six original result names are under `/Users/a1234/.codex/generated_images/01a16179-92c0-71a3-be14-7e8813a61cc7/`. The earlier painted mug's full prompt remains in `../_painted-series/PROMPTS.md`. / 原始结果同属上述会话生成目录；原油画杯子提示词保留于上一批记录。
