# Content Lab Rules · 内容工作室协作规则

Repository documentation must be bilingual (English + Chinese). All produced audience-facing content must be English only: comic dialogue, titles, motion text, subtitles, finished scripts, captions, and published image descriptions. Keep direct addresses as Mochi / Lucky, never sis / bro.

仓库说明、导航和交接资料必须中英双语；面向观众的成品文字全部使用英文，包括漫画对白、标题、动态片文字、字幕、成品脚本、社媒文案和发布用图片描述。内部解释可双语。英文对白直接叫 Mochi / Lucky，不使用 sis / bro。

Read README.md → HANDOFF.md → CONTENT_MAP.md, then the relevant section README. Preserve stable paths, original reference photos, and every HTML archive. Never modify or delete `versions/vNNN/`. Build edited motion through the working template and episode configuration; commit sources, outputs, archives, and indexes together. Preview copies belong in docs; private reference photos do not. Mark content as published only after an actual release. Keep the repository private.

接手顺序：README.md → HANDOFF.md → CONTENT_MAP.md → 对应分区 README。已有路径和存档保持稳定，发布状态以实际发布为准。

Official-media planning follows `brand/CONTENT_STRATEGY.md`, whose new recurring-world ideas remain proposals until approved. Use `brand/assets/verdent-logo-original.png` for the official mark; never redraw or distort it. Keep captions readable without sound and give users an explicit sound control.

官媒选题参考长期策略，其中新增世界观仍为待确认提案。官方标志用原文件，不重画、不变形；成片关声音也应看懂，并提供显式声音开关。

每一版 HTML 都要保留。修改 motion 时先保留已有文件，再通过 `node scripts/build-motion.mjs <episode.json path>` 生成新版本；构建会保存现有 HTML、归档新版本并更新版本索引。`motion/<id>/versions/vNNN/` 与 `docs/motion/<id>/versions/vNNN/` 是永久存档，不得覆盖、删除或改写。历史版本可以复制成新片继续编辑。

新片的源码保存在版本目录中的 `episode.json` 与 `template/`；首次接入归档时捕获的旧 HTML 可能没有分离模板，单文件 HTML 本身可直接编辑。不要声称旧版有无法确认的源码。版本编号按归档顺序，时间为本次保存时间。

已生成 HTML 的编辑必须通过当前模板和 episode.json，随后重建并提交源文件、当前输出、完整历史版本与索引。手工改动的现有 HTML 会在下次构建前自动捕获保存。无需内容变化的重复构建不增加相同 HTML 的副本。

用户给定的人物、原创与发布原则以 `brand/IP_BIBLE.md`、`brand/VISUAL_STYLE.md` 和 `CONTENT_MAP.md` 为准。仓库保持私有。仅 `docs/` 作为可选 Pages 发布目录。
