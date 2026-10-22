# Handoff · 交接说明

Updated / 更新：2026-10-21（Asia/Shanghai）。

## Reading Order · 接手顺序

[Project Brief](PROJECT_BRIEF.md) → [Content Map](CONTENT_MAP.md) → [Version Guide](motion/VERSION_GUIDE.md) → relevant episode README / 先目标、再状态、再版本，最后看本集说明。

## Authority · 信息以哪里为准

| Topic / 问题 | Source / 唯一职责 |
| --- | --- |
| Creator-confirmed direction / 已确认方向 | [PROJECT_BRIEF.md](PROJECT_BRIEF.md) |
| Identity and style details / 人设与画风细则 | [IP Bible](brand/IP_BIBLE.md) · [Visual Style](brand/VISUAL_STYLE.md) |
| Actual artifacts and release status / 实际文件与发布状态 | [CONTENT_MAP.md](CONTENT_MAP.md) |
| Historical HTML meaning / 旧版用途 | [VERSION_GUIDE.md](motion/VERSION_GUIDE.md) |
| Product factual scope / 产品事实 | [Feature Map](brand/VERDENT_FEATURE_MAP.md), with linked official sources / 附官方来源 |
| Unapproved story/strategy ideas / 未批准选题与策略 | [Queue](brand/FEATURE_CONTENT_QUEUE.md) · [Strategy](brand/CONTENT_STRATEGY.md) |

Do not treat an assistant's generated proposal, a high version number, or a successful render as creator approval / 不把助手提案、大版本号或渲染成功当成创作者批准。

## Current Review Question · 当前最需要解决的问题

**Latest priority / 最新优先：review [A v017 · 18s](motion/003-chief-nap-officer/versions/v017/index.html) and its [review MP4](motion/003-chief-nap-officer/previews/v017-blue-acting-review.mp4). Eight complete contact drawings, bounded speaker shots, caption-free deadpan hold, original child dialogue and remixed score. Source template-blue-polish; config episode.json or variants/blue-a-polish.json. Original A v015/B v016 and their template remain unchanged / 当前验新 A：八幅完整接触稿、人物镜头、无字幕冷反应、原童声与配乐重混；独立模板和配置，原 A/B 不动。**

Do these two cuts preserve the accepted blue-scene cats, read clearly and land the deadpan joke? Ask which timing to refine before expanding / 两版是否保住蓝地板造型、看得清、冷笑话成立？先选节奏再深化，不用扩量替代验收。

Suggested next step only: finish one benchmark scene, then one complete pilot. Do not silently roll back a working file or adopt every new drawing / 建议先验一个标杆片段，再磨完一条试播；不擅自回退当前文件，也不把新画稿全部自动收编。

Previous refinement: 003 v009 kept the original paintings/child audio and fixed framing, face crossfades and yawn timing, but was subsequently judged too slide-like. Its [18s video](motion/003-chief-nap-officer/previews/v009-native-preview.mp4) is preserved as a comparison, not the current acting standard. 004 is untouched / 上一轮 v009 修构图重影与哈欠时机，但后续仍被指出像 PPT；18 秒视频保留作对照，不当作当前表演标准。004 不动。

## Resume Production · 恢复制作流程

Subsequent feedback rejected both v009's slide-deck feel and v010's detached paw. Do not reuse the v010 anatomical rig. Current v011 uses 8 full Lucky drawings and 4 full Mochi reactions, with [8s repair review](motion/003-chief-nap-officer/previews/v011-acting-study.mp4), [source sheets/prompts](characters/poses/sequences/README.md) and [remaining gaps](motion/003-chief-nap-officer/ACTING_STUDY.md). The task is in stage 2, not film delivery. Cold/deadpan visual humor is confirmed / 后续先指出像 PPT，再指出 v010 断爪；不复用该拆分结构。v011 改为十二帧完整角色稿，仍是第 2 阶段动作验证，不称成片；冷幽默方向已确认。

1. Confirm story/capability and what is being reviewed / 确认本次功能、故事与验收目标。
2. Use established original references; review expression drawings together at the same scale/angle / 以原造型为基准，同尺度同角度审表情。
3. Edit the episode's own `template/` and `episode.json`; shared baseline only for episodes actually using it / 改本集工作模板与配置，不误改共用基准。
4. Build through `scripts/build-motion.mjs`; never change `versions/vNNN/` / 用工具生成新版本，历史不动。
5. Generate new speech under a new audio version; verify actual clips, duration, overlap and sound status / 新配音另起版本，核查真实文件、长度、重叠与状态。
6. Review actual browser playback/recording at phone size, then get creator film approval / 实测手机尺寸浏览器播放录屏，再确认成片。
7. Sync source/output/archives together only when authorized; record publication only after release / 授权后再一起同步源码成片历史，真实发布后记状态。

## Limits & Provenance · 限制与事实边界

- Prior checks covered timelines, normalized pose states, blink/head layers, controls, archive hashes and file links. They do not replace actual browser QA / 已查时间轴、姿势、分层、控制、旧版哈希与链接，不代替浏览器验收。
- The last attempt could not bind a local preview server or generate new remote speech under current restrictions. No fresh availability check is implied here / 上次权限限制阻止本地预览服务与新语音生成，本次未重试，不宣称当前仍永久不可用。
- In-app browser blocks local file URLs. Do not bypass that policy; user can manually open the standalone HTML, or inspect the offline MP4 / 应用浏览器阻止 file URL，不绕过；可由用户手动离线打开 HTML，或先看视频。
- Earlier MP4s are 432×768; v017 is 800×1000 with 12 timeline samples/sec encoded at 24fps. All are offline SVG renders, not browser recordings or final exports / 新版为 800×1000，12 次时间轴采样编码 24fps；均非浏览器实录或最终交付。
- No public Pages URL was enabled after the earlier private-plan rejection; do not make the repo public / 上次私有套餐拒绝 Pages，未启用公开链接；不改公有。
- Last local commit/tracking record is `20978fa`; working changes remain uncommitted. Remote state was not freshly fetched / 本地提交与跟踪记录止于该提交；当前改动未提交，本次未联网拉取远端。

Do not change synced project `sources/`, delete experiments, rewrite archived notes or overwrite the supplied photo/logo / 不改同步参考、不删实验、不重写归档说明、不覆盖原照片和 Logo。
