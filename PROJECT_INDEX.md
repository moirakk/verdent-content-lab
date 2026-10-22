# Project Index · 项目总索引

## Watch and continue · 观看与接手

[Episode library / 剧集总览](docs/index.html) · [Selected versions / 当前版本](EPISODES.md) · [Actual state / 实际状态](CONTENT_MAP.md) · [Tasks / 待办](TASKS.md) · [Handoff / 接手](HANDOFF.md)

## Find assets · 查找素材

| Need / 用途 | Entry / 入口 |
| --- | --- |
| Character identities / 人物身份 | [Profiles / 档案](characters/README.md), [IP Bible / 人设](brand/IP_BIBLE.md) |
| Style anchors / 画风锚点 | [Accepted references / 认可参考](characters/style-anchors/README.md), [Visual rules / 视觉规范](brand/VISUAL_STYLE.md) |
| Lifestyle locations / 生活布景 | [Scene gallery index / 场景目录](scenes/README.md) |
| Expression sheets / 表情稿 | [Expression index / 表情目录](characters/expressions/README.md) |
| Shared pose studies / 共享动作实验 | [Pose library / 姿势库](characters/poses/README.md) |
| New story art / 新生活短剧画稿 | [Painted story source / 生活短剧源](motion/_painted-story/README.md), [Prompts / 提示词](motion/_painted-story/PROMPTS.md) |
| Halloween art and laptop / 节日画稿与电脑 | [005 / 万圣节集](motion/005-halloween/README.md) |
| Official supplied logos / 用户原 Logo | [Brand assets / 品牌原件](brand/assets/README.md) |
| Audio sources / 声音原件 | Each episode's audio/ and selected template/assets/; see [template map / 模板表](motion/TEMPLATE_MAP.md) / 本集音频目录及选用模板 |
| Media fingerprints and copies / 素材指纹与副本 | [Unified inventory / 统一素材目录](inventory/README.md) |

## Find editable work · 查找修改源

[Current episode/template data / 当前配置与模板](inventory/episodes.json) is generated from episode.json and the selected HTML hash. [Template map / 模板状态表](motion/TEMPLATE_MAP.md) distinguishes current and historical directories / 当前表根据实际配置生成，明确当前和历史模板。

001/002/004 share [the painted story system / 新剧情系统](motion/_painted-story/README.md); their template-story directories are prepared local copies. 003 uses template-blue-polish; 005 uses template-interaction. Earlier templates stay available for historical reuse / 三集共用新剧情系统，本集模板为准备后的副本；003、005 各用独立模板，旧模板保留复用。

[Tools / 工具](scripts/README.md) · [Production stages / 制作阶段](PRODUCTION_GUIDE.md) · [Every HTML version / 全部 HTML 历史](motion/VERSION_GUIDE.md)

## Editorial material · 内容资料

[Comic continuity / 漫画连续性](comics/README.md) · [Publishing drafts / 发布草稿](captions/README.md) · [Story proposals / 故事提案](motion/ideas/README.md) · [Product research / 产品资料](brand/VERDENT_FEATURE_MAP.md)

Comic numbers are independent of motion IDs. A proposal, selected draft, Git sync and published post are different states / 漫画和动态编号独立；提案、选用稿、Git 同步与真实发布是不同状态。

## History and preservation · 历史与保留

- Each episode's versions/index.html browses permanent HTML/source snapshots / 本集版本入口保存永久 HTML 和源码快照。
- [Documentation archive / 说明历史](archive/README.md) preserves the earlier accumulated notes; current instructions live at stable root paths / 旧批次说明另存，当前指引仍在稳定路径。
- Identical media copies support standalone HTML, frozen sources and viewing copies. The inventory groups their fingerprints; it does not authorize deleting required copies / 同素材副本服务于单文件、永久源码和观看副本，目录只做归并查找，不据此删除。
- Temporary browser frame dumps, runtime dependencies and caches stay outside production assets. The render procedure is saved in scripts/ / 临时帧图、依赖缓存不作为生产素材，复现渲染流程已保存。
