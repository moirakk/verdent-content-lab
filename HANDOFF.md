# Handoff · 交接说明

Updated / 更新：2026-10-20. Access to this private repository is required / 接手者需要此私有仓库的访问权限。

## 1. Language & Principles · 语言与原则

Repository documentation is English + Chinese. All produced content is English only: comic dialogue, motion text, titles, subtitles, finished scripts, captions, and published image descriptions. Internal creative explanations may be bilingual.

仓库说明中英双语；所有面向观众的内容用英文，包括漫画对白、动态片文字、标题、字幕、成品脚本、社媒文案和发布用图片描述。内部创作说明可以双语。

Character first. Joke second. Product third. Verdent is a tool in their world; a story does not need a product demonstration.

先有人物，再有笑点，最后才是产品。Verdent 自然存在于角色世界中，每集不必展示产品解决问题。

| Character / 角色 | Identity & voice / 身份与性格 | Visual anchors / 外貌锚点 |
| --- | --- | --- |
| Mochi | Yellow older sister; calm, rational, dry humor / 黄猫姐姐，冷静、理性、冷面幽默 | Fluffy golden-orange coat, cream muzzle and chest, pink nose / 橘金蓬松毛、浅色口鼻与胸毛、粉鼻 |
| Lucky | Black younger brother; eager, lively, easily carried away / 黑猫弟弟，热情、活泼、容易上头 | Dark short coat, large ears, yellow-green round eyes, long slim tail / 温黑短毛、大耳朵、黄绿圆眼、细长尾巴 |

Use Mochi / Lucky as direct addresses, never sis / bro. Personality is creator-defined, not inferred from the photo.

英文对白直接叫 Mochi / Lucky，不用 sis / bro。性格来自创作者设定，不从照片推断。

Read / 阅读：[Photo / 真猫照片](characters/references/README.md) → [IP Bible / 人物设定](brand/IP_BIBLE.md) → [Visual Style / 视觉规范](brand/VISUAL_STYLE.md).

## 2. Current Work · 当前内容

| Item / 内容 | Status / 状态 | Next step / 下一步 |
| --- | --- | --- |
| EP.05 · It Works on My Machine. | Published, creator-confirmed / 已发布，创作者确认 | Archive artwork and publishing link / 归档原稿与发布链接 |
| Mid-Autumn Special | Follows EP.05; publication unverified / 接续 EP.05，发布状态待核实 | Confirm progress; existing brief is a proposal / 核实进度，现有说明是提案 |
| EP.06 | Next regular comic, brief only / 下一篇正篇，目前只有选题说明 | Confirm story and storyboard / 确定故事与分镜 |
| EP.07 | Unconfirmed idea / 未确认选题 | Continue after EP.06 direction is clear / 待 EP.06 方向明确后推进 |
| Motion 001 | Two unpublished draft versions / 两版未发布样片 | Use v001 as the working baseline / 以 v001 为当前基准继续完善 |
| [Motion 002](motion/002-tiny-feature/README.md) | New 12s painted draft, selected v001 / 新增 12 秒水粉样片，当前 v001 | Review art and cup-growth timing / 验看角色和杯子变大的节奏 |

[CONTENT_MAP.md](CONTENT_MAP.md) is the publication-status source of truth / 发布状态统一维护在内容进度表中。

## 3. Motion 001 Versions · 动态 001 用哪一版

- [Selected / 当前选用](motion/001-have-an-idea/index.html)：v001, 8 seconds / 8 秒。Dialogue / 对白：“Mochi, I have an idea.” / “How tiny?”
- [v001 archive / v001 存档](motion/001-have-an-idea/versions/v001/index.html)：Captured standalone HTML; no separate frozen template / 初次捕获的独立 HTML，未分离保存当时模板。
- [v002 archive / v002 存档](motion/001-have-an-idea/versions/v002/index.html)：12-second alternative, with dialogue and template source / 12 秒备选，附对白与模板源码。
- [History / 全部版本](motion/001-have-an-idea/versions/index.html)：Open locally in a browser / 下载后用浏览器打开。

Both versions were rebuilt from conversation context. The old `/mnt/data/verdent_motion_001.html` was unavailable. v002 was reconstructed from an earlier draft configuration and archived later; version numbers follow archive order, not original creation dates.

两版均根据对话重建，旧环境中的原 HTML 未能取回。v002 根据早期配置补存，版本编号按归档顺序，不冒充原始创作日期。

Motion 002 is a separate original episode with its own local template and [version history](motion/002-tiny-feature/versions/index.html). Its painterly appearance is an experiment based on the newest reference, not a replacement of Motion 001.

动态 002 是独立新作，使用本集模板和历史目录；新水粉画风是依据最新参考进行的本集试验，不替换动态 001。

## 4. How to Continue · 接下来怎么做

| Task / 工作 | Edit / 修改位置 | Finish / 完成后 |
| --- | --- | --- |
| Dialogue or timing / 对白与节奏 | The episode's `episode.json` / 对应作品配置 | Build, review, save all outputs / 生成、检查、保存全部输出 |
| Character art or motion / 角色画面与动作 | `motion/_template/` | Rebuild only intended episodes / 只重新生成本次要更新的作品 |
| Reuse a past version / 复用旧版 | Copy archived HTML into a new working folder / 把旧版复制到新工作目录 | Keep the original archive unchanged / 原存档不动 |
| Continue the comic / 继续漫画 | `comics/ep06/` | Write the story, then storyboard and artwork / 先故事，再分镜和画稿 |
| Publish content / 准备发布 | `captions/` | English copy; update the content map after publishing / 英文文案，实际发布后更新总表 |

Instructions / 操作说明：[Tools / 制作工具](scripts/README.md). A browser can play downloaded HTML; GitHub's file viewer only shows source / 下载后用浏览器播放，GitHub 文件页只看源码。

## 5. Preserve & Verify · 保存与核验

Every version is permanent. Never overwrite or delete `versions/vNNN/`. The selected version may have a lower number. Preview copies in `docs/` are generated outputs; edit the source, not the copies. Keep reference photos outside previews.

所有版本永久保留，不覆盖、不删除。当前选用版可能不是最大编号。`docs/` 是预览副本，修改应从源码进行；参考照片不进入预览目录。

Existing samples passed generation, timeline, and version-integrity checks. Browser screenshot checks were blocked by the local sandbox, so browser visual review remains necessary. Pages is not enabled because the current GitHub plan rejected private-repository Pages; keep the repository private.

现有样片已通过生成、时间轴和版本完整性检查；本机沙箱阻止了浏览器截图检查，仍需人工验看。GitHub 当前套餐不支持该私有仓库的 Pages；保持仓库私有。
