# Project Index · 项目整理入口

Updated / 更新：2026-10-22（Asia/Shanghai）。Private original-content workspace / 私有原创内容工作室。

**Watch / 观看：[Episode Library / 剧集总览](docs/index.html)** · [Current status / 实际状态](CONTENT_MAP.md) · [Episode table / 剧集表](EPISODES.md)

## Current films · 当前剧集

| ID | Title / 标题 | Selected / 当前 | Editable source / 修改入口 |
| --- | --- | --- | --- |
| 001 | The Corner Office | v004 · 18s | [Painted story system / 生活短剧源](motion/_painted-story/README.md) + [config / 配置](motion/001-have-an-idea/episode.json) |
| 002 | One Tiny Feature | v003 · 18s | [Painted story system / 生活短剧源](motion/_painted-story/README.md) + [config / 配置](motion/002-tiny-feature/episode.json) |
| 003 | Chief Nap Officer | v019 · 18s | [Episode / 本集](motion/003-chief-nap-officer/README.md), template-blue-polish |
| 004 | Soft Launch | v006 · 20s | [Painted story system / 生活短剧源](motion/_painted-story/README.md) + [config / 配置](motion/004-that-was-a-sentence/episode.json) |
| 005 | A Little More · Halloween | v012 · 18s | [Episode / 本集](motion/005-halloween/README.md), template-interaction |

All five have child voices, original music and downloadable MP4s. All are unpublished review drafts. 44 permanent HTML versions remain; 003/005 films are retained benchmarks. / 五集均有童声、原创配乐与视频下载，均为未发布待审稿；44 个 HTML 历史保留，003、005 成片保留作基准。

## Assets and documents · 素材与文档

| Need / 用途 | Location / 位置 | Contents / 内容 |
| --- | --- | --- |
| Character identity / 人设外貌 | [Characters / 角色](characters/README.md), [IP Bible / 设定](brand/IP_BIBLE.md) | Original profiles, private references / 原始人设与私有参考 |
| Accepted painting / 认可画风 | [Style anchors / 参考](characters/style-anchors/README.md), [Visual rules / 规范](brand/VISUAL_STYLE.md) | Blue-room and Halloween anchors / 蓝底与节日参考 |
| Lifestyle scenes / 生活场景 | [Scene catalog / 场景目录](scenes/ASSET_CATALOG.json) | 12 scene keyframes / 十二处生活关键帧 |
| Expressions / 表情 | [Expression metadata / 表情记录](characters/expressions/batch-ip-everyday-v001.json) | Four PNG sheets; other batch metadata alongside / 四张表情稿及同目录批次资料 |
| Shared pose experiments / 共享姿势 | [Poses / 姿势库](characters/poses/README.md) | Eight single-pose PNGs and sequence experiments / 八张单姿势及动作实验 |
| New story art / 新剧情画稿 | [Story assets / 新剧情素材](motion/_painted-story/README.md), [Prompts / 提示词](motion/_painted-story/PROMPTS.md) | Three rooms, three whole-cat action sheets, mug and registration / 三套房间、三套整猫动作、杯子及对位数据 |
| Voices, BGM, SFX / 声音 | motion/集数/audio/ and template-story/assets/ | Raw clips, profiles, measured timings, original scores, mixed audio; incomplete attempts labelled / 分轨声线时长、原谱混音，未完成尝试有标记 |
| Official logo / 官方标志 | [Brand assets / 品牌原件](brand/assets/README.md) | Original supplied logos preserved / 用户原 Logo 保留 |
| Comics and copy / 漫画文案 | [Comics / 漫画](comics/README.md), [Captions / 文案](captions/README.md) | Separate numbering and release status / 独立编号与发布状态 |
| Future stories / 后续故事 | [Story cards / 故事卡](motion/ideas/next-stories-2026-10-22.md) | Office idea adapted into 001; two ideas remain proposals / 纸箱选题已用于 001，其余两条仍为提案 |
| Editing and exporting / 修改导出 | [Tools / 工具](scripts/README.md) | Build, archive, render, voice and music tools / 构建归档、渲染、配音配乐 |
| Continue work / 接手 | [Handoff / 交接](HANDOFF.md) | Latest source selection and limitations / 当前源与边界 |

## Preservation · 保留方式

Each episode keeps episode.json, editable templates, audio sources, exported previews and versions/index.html. Every versions/vNNN directory is immutable, including rejected experiments. docs/ contains generated viewing copies and video downloads; source edits happen in motion/. Earlier template-unified and _painted-series sources remain historical rather than being deleted. / 每集保留配置、模板、声音原件、视频及历史索引；永久历史含失败实验；docs 为观看副本，motion 为修改源；旧模板不删除。

The repository contains the selected artwork, original prompts, voices, scores, finished mixes, current videos and all archived HTML. Temporary browser frame dumps remain outside Git; the reproducible renderer is saved in scripts/render-story-previews.cjs. Local runtime dependencies and caches are not production assets. / 已保存选中画稿、提示词、分轨、配乐、混音、视频及全部 HTML；临时帧图不进 Git，复现渲染脚本已入库，运行依赖缓存不是内容素材。
