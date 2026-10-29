# Repository Status · 仓库现状（2026-10-29）

**[🎬 成片｜点开录制 · Ready to record](成片.html)**

Private repository / 私有仓库：[moirakk/verdent-content-lab](https://github.com/moirakk/verdent-content-lab). Public Pages is disabled. The five selected films can be recorded/downloaded locally; all remain unpublished review cuts, not release-approved / 未开启公开 Pages；五集可本地录制下载，均为未发布审片稿，尚不代表批准发布。

## Recordable cuts · 当前可录制

| ID | Episode / 剧集 | Selected / 版本 | Length / 时长 | Open / 打开 |
| --- | --- | --- | --- | --- |
| 001 | The Corner Office · 纸箱办公室 | v005 | 18s · 4:5 | [HTML](motion/001-have-an-idea/index.html) · [MP4](motion/001-have-an-idea/previews/v005-verdent-box-review.mp4) |
| 002 | One Tiny Feature · 咖啡升级 | v004 | 18s · 4:5 | [HTML](motion/002-tiny-feature/index.html) · [MP4](motion/002-tiny-feature/previews/v004-verdent-requests-review.mp4) |
| 003 | Chief Nap Officer · 首席午睡官 | v020 | 18s · 4:5 | [HTML](motion/003-chief-nap-officer/index.html) · [MP4](motion/003-chief-nap-officer/previews/v019-browser-review.mp4) |
| 004 | Soft Launch · 开业前试吃 | v009 | 20s · 4:5 | [HTML](motion/004-that-was-a-sentence/index.html) · [MP4](motion/004-that-was-a-sentence/previews/v009-website-test-review.mp4) |
| 005 | A Little More · 万圣节许愿出糖 | v013 | 20s · 9:16 | [HTML](motion/005-halloween/index.html) · [MP4](motion/005-halloween/previews/halloween-wish-v013-natural-review.mp4) |

Each contains child dialogue, original music and a matching H.264/AAC MP4. 003's HTML is v020; its picture/sound MP4 remains the matching v019 movie because v020 only added the download control. Halloween v013 is the new 20s / 30fps / 720×1280 review cut / 每集有童声、原创配乐与匹配视频；003 的 v020 只补下载按钮，因此匹配视频仍名 v019；万圣节 v013 为新20秒竖屏审片。

## Completed revisions · 已完成本轮改稿

- **002 v004:** Lucky directly asks Verdent for a feature, login and payments. The visible plan and coffee grow together; the computer stays below both faces / 对 Verdent 追加需求，计划与咖啡一起变大，电脑低于猫脸。
- **004 v009:** Verdent builds a bakery site; Lucky taste-tests a cookie when asked to test the website. Contact, pickup, carry, bite and Mochi protecting the other two samples are visible / 网页测试误成试吃；接触、拿起、送嘴、咬下与护住余下两块的动作清楚。
- **005 v013:** Halloween wishes, native painted cats, conversational child speech and candy-pile payoff / 万圣节许愿、原比例油画猫、自然童声与糖堆反转。

002/004 are 30fps / 800×1000. All three revised films are now recordable with matching downloads; no unfinished new story revision remains. Creator review is still pending / 三条改稿均可录制且下载匹配，暂无未导出的本轮新剧情；待创作者验看。

[Revision history / 改稿记录](WORK_IN_PROGRESS.md) · [Machine-readable status / 状态数据](production-drafts.json).

## Where things live · 文件位置

| Directory / 目录 | Purpose / 用途 |
| --- | --- |
| 成片.html | Easiest recording/play/download entrance / 最醒目的录制播放下载入口 |
| motion/ | Selected episode configs, source templates, audio, exports and immutable history / 配置源码声音视频及永久历史 |
| docs/ | Browser library, covers and viewing/download copies / 浏览总览、封面和观看下载副本 |
| characters/ · scenes/ · brand/ | Original character references, scene art, visual rules and supplied logo / 角色参考、场景画稿、规范和原 Logo |
| captions/ | Version-labelled English caption drafts / 对应版本的英文发布文案 |
| comics/ | Separate comic continuity; not additional completed motion films / 独立漫画线，不计入动态成片 |
| inventory/ | Generated version/template map and media fingerprints / 自动生成的版本模板表及素材指纹 |
| scripts/ | Build, render, sound, recording hub and checks / 构建渲染声音入口及检查 |
| archive/ | Superseded documents; historical context / 旧说明，仅历史参考 |

## Preservation and remaining work · 保留与后续

- 5 selected recordable films; **51 immutable HTML versions**. Copies under motion/ and docs/ are checked against saved hashes / 五集可录制，**51 份永久 HTML 版本**，两处存档校验。
- 729 media locations / 239 unique contents. Intentional copies support standalone films and archives; these counts are not episode counts / 素材位置数与去重内容数如前；单文件成片与归档需要副本，不等于剧集数量。
- All five cuts are ready for recording; creator review/feedback is the next step / 五集均可录制，下一步是创作者验看反馈。
- Comic EP.05 has creator-confirmed publication; original artwork/channel/date/URL still need archival. EP.06, EP.07 and Mid-Autumn material are briefs/proposals, not completed new videos / 漫画 EP.05 已确认发布但资料待补；其余为选题提案。

Run `npm run index`, then `npm run check -- --assets` after changes. Never edit existing versions/vNNN/ / 修改后更新索引并全量检查，历史目录不可改。
