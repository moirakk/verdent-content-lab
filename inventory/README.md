# Generated Inventory · 生成的统一目录

| File / 文件 | Contents / 内容 |
| --- | --- |
| [episodes.json](episodes.json) | Actual selected versions, config/template paths, video links, HTML hashes and template roles / 实际选用版、修改源、视频、哈希与模板状态 |
| [assets.json](assets.json) | Media grouped by SHA-256, preferred source paths, identical locations, sizes and roles / 按指纹归并素材，列出优先源、全部同内容位置、大小与用途 |

Generate with npm run index. These are metadata, not additional artwork copies / 使用索引命令生成，只保存资料，不复制画稿。

“Canonical path” is a lookup preference, not permission to delete the other copies. Standalone templates, immutable archived source and docs previews deliberately reuse media bytes. Archive assets must remain in place / 优先路径只方便查找，不表示其他副本可删；单文件模板、永久源码和观看副本有意重复使用原素材。

Generation/batch JSON in characters/ and scenes/ preserves original plans and prompts; old “planned” labels describe that batch record. Current on-disk availability is reflected here and in the section READMEs / 原批次 JSON 保留计划和提示词，其中 planned 属历史记录；实际文件状态查这里与分区说明。
