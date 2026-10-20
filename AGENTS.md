# Content Lab Rules

每一版 HTML 都要保留。修改 motion 时先保留已有文件，再通过 `node scripts/build-motion.mjs <episode.json path>` 生成新版本；构建会保存现有 HTML、归档新版本并更新版本索引。`motion/<id>/versions/vNNN/` 与 `docs/motion/<id>/versions/vNNN/` 是永久存档，不得覆盖、删除或改写。历史版本可以复制成新片继续编辑。

新片的源码保存在版本目录中的 `episode.json` 与 `template/`；首次接入归档时捕获的旧 HTML 可能没有分离模板，单文件 HTML 本身可直接编辑。不要声称旧版有无法确认的源码。版本编号按归档顺序，时间为本次保存时间。

已生成 HTML 的编辑必须通过当前模板和 episode.json，随后重建并提交源文件、当前输出、完整历史版本与索引。手工改动的现有 HTML 会在下次构建前自动捕获保存。无需内容变化的重复构建不增加相同 HTML 的副本。

用户给定的人物、原创与发布原则以 `brand/IP_BIBLE.md`、`brand/VISUAL_STYLE.md` 和 `CONTENT_MAP.md` 为准。仓库保持私有。仅 `docs/` 作为可选 Pages 发布目录。
