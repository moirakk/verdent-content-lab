# Content Map · 内容进度表

This is the publication-status source of truth. Documentation is bilingual; all finished creative content is English only. Creator-confirmed history is distinguished from proposals and missing assets.

这是发布状态的统一记录；说明双语，成品全英文。已确认历史、创作提案与缺失素材分开标记。

维护日期：2026-10-20（Asia/Shanghai）。历史进度来自创作者本次确认；不根据系统日期推断节日篇已发布。

## Comics · 漫画发布顺序

| Order / 顺序 | ID / 编号 | Title / 标题 | Status / 状态 | Files & next steps / 文件与下一步 |
| --- | --- | --- | --- | --- |
| 1 | EP.05 | It Works on My Machine. | Published, creator-confirmed / 已发布，创作者确认 | Artwork and release link pending / 原稿与链接待归档 |
| 2 | Special | Mid-Autumn Special | Planned; release unverified / 已安排，发布待核实 | [Brief / 节日篇说明](comics/ideas/mid-autumn-special.md); follows EP.05 / 接续 EP.05 |
| 3 | EP.06 | TBD / 待定 | Brief / 选题说明 | [Brief / 正篇说明](comics/ep06/README.md); next regular episode / 下一篇正篇 |
| 4 | EP.07 | TBD / 待定 | Idea / 选题 | [Brief / 占位说明](comics/ep07/README.md) |

## Motion · 动态内容

| ID / 编号 | Title / 标题 | Status / 状态 | Format / 规格 | Source / 来源 |
| --- | --- | --- | --- | --- |
| 001 | Have an idea | Draft, unpublished / 待审样片，未发布 | 4:5, 8s, silent, 2 lines / 8 秒无声、2 句对白 | [HTML](motion/001-have-an-idea/index.html) · [Dialogue / 对白](motion/001-have-an-idea/episode.json); rebuilt from context / 根据对话重建 |
| 002 | One Tiny Feature | Draft, unpublished / 待审样片，未发布 | 4:5, 12s, silent, 4 lines / 12 秒无声、4 句对白 | [HTML](motion/002-tiny-feature/index.html) · [Brief / 说明](motion/002-tiny-feature/README.md); original painted art, growing coffee / 原创水粉角色与变大的咖啡杯 |
| — | Reusable template / 共用模板 | Ready for reuse / 可复用 | Original SVG, paper, subtle motion / 原创 SVG、纸纹、轻动效 | [Template / 模板](motion/_template/README.md) |

Motion 001 uses v001 (8s); v002 is a reconstructed 12s alternative, archived later. Both remain unpublished. Version numbers follow archive order, not selection priority.

001 的 [版本列表](motion/001-have-an-idea/versions/index.html)：`v001` 是当前选用的 8 秒对白版；`v002` 是依据本次会话早期配置重建并补存的 12 秒自动化备选版。编号按归档顺序，两版均未发布；以后每次生成不同 HTML 都保留独立版本。

Motion 002 explores the creator's new gouache reference; its selected version is v001. It adapts the “tiny feature / bigger coffee” candidate joke, so check it before revisiting that idea in comic EP.06. EP.06 remains unconfirmed.

动态 002 当前选用 v001，探索新增水粉参考的效果。已使用“小功能／大咖啡”的候选笑点，之后制作漫画 EP.06 时先查看本集，避免原样重复；EP.06 仍未定稿。

## Status Rules · 状态约定

Idea → Brief → Script → Art / Motion → Review → Approved → Scheduled → Published.

选题 → 创作说明 → 脚本 → 画稿／动效 → 待审 → 已确认 → 已排期 → 已发布。

Only actual releases become Published. Record channel, date, URL, and final asset path; unknown values stay TBD. A draft is not approval. Specials do not take regular episode numbers. Track each content ID, hook, character beat, joke, optional product feature, format, and status; link adaptations to their original content.

Idea → Brief → Script → Art / Motion → Review → Approved → Scheduled → Published。Draft sample 不等于 Approved。记录 Published 时补充渠道、日期、链接、最终素材路径；未知值写 TBD，不补造历史。

每条内容登记：`ID / title / hook / character beat / joke / optional product line + feature / format / status / publish date / channel / link / asset path`。同一笑点跨格式改编须标注来源；功能状态见 [Feature Map](brand/VERDENT_FEATURE_MAP.md)。
