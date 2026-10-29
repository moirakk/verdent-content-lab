# Repository Status · 仓库现状（2026-10-29）

**[🎬 成片｜点开录制 · Ready to record](成片.html)**

Private repository / 私有仓库：[moirakk/verdent-content-lab](https://github.com/moirakk/verdent-content-lab). Public Pages is disabled. The five selected films can be recorded/downloaded locally; all remain unpublished review cuts, not release-approved / 未开启公开 Pages；五集可本地录制下载，均为未发布审片稿，尚不代表批准发布。

## Recordable cuts · 当前可录制

| ID | Episode / 剧集 | Selected / 版本 | Length / 时长 | Open / 打开 |
| --- | --- | --- | --- | --- |
| 001 | The Corner Office · 纸箱办公室 | v005 | 18s · 4:5 | [HTML](motion/001-have-an-idea/index.html) · [MP4](motion/001-have-an-idea/previews/v005-verdent-box-review.mp4) |
| 002 | One Tiny Feature · 咖啡升级 | v003 | 18s · 4:5 | [HTML](motion/002-tiny-feature/index.html) · [MP4](motion/002-tiny-feature/previews/v003-coffee-story-review.mp4) |
| 003 | Chief Nap Officer · 首席午睡官 | v020 | 18s · 4:5 | [HTML](motion/003-chief-nap-officer/index.html) · [MP4](motion/003-chief-nap-officer/previews/v019-browser-review.mp4) |
| 004 | Soft Launch · 开业前试吃 | v007 | 20s · 4:5 | [HTML](motion/004-that-was-a-sentence/index.html) · [MP4](motion/004-that-was-a-sentence/previews/v007-continuous-acting-review.mp4) |
| 005 | A Little More · 万圣节许愿出糖 | v013 | 20s · 9:16 | [HTML](motion/005-halloween/index.html) · [MP4](motion/005-halloween/previews/halloween-wish-v013-natural-review.mp4) |

Each contains child dialogue, original music and a matching H.264/AAC MP4. 003's HTML is v020; its picture/sound MP4 remains the matching v019 movie because v020 only added the download control. Halloween v013 is the new 20s / 30fps / 720×1280 review cut / 每集有童声、原创配乐与匹配视频；003 的 v020 只补下载按钮，因此匹配视频仍名 v019；万圣节 v013 为新20秒竖屏审片。

## Work in progress · 制作中

- **002:** Lucky directly asks Verdent for a feature, login and payments; the plan and coffee grow together. New source/audio are saved, staging/eye-line review and a matching export remain / 对 Verdent 追加需求，计划与咖啡同步变大；源码声音已有，待复查空间视线并导出。
- **004:** Verdent builds a bakery site; Lucky taste-tests cookies when asked to test the website. New source/audio are saved, visual review and export remain / 网页测试误成试吃；源码声音已有，待审看导出。
- **005:** The earlier work-in-progress is now v013 and in the recording hub; waiting for creator review / 原改稿现已完成 v013 并进入成片入口，待创作者检查。

[Detailed revision notes / 具体改稿说明](WORK_IN_PROGRESS.md) · [Machine-readable status / 状态数据](production-drafts.json).

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

- 5 selected recordable films; **48 immutable HTML versions**. Copies under motion/ and docs/ are checked against saved hashes / 五集可录制，**48 份永久 HTML 版本**，两处存档校验。
- 687 media locations / 228 unique contents. Intentional copies support standalone films and archives; these counts are not episode counts / 素材位置数与去重内容数如前；单文件成片与归档需要副本，不等于剧集数量。
- 2 active new story revisions. Finish Halloween creator review first, then coffee and bakery visual review/export / 两条新剧情待完成；先审万圣节，再完成咖啡、烘焙改稿。
- Comic EP.05 has creator-confirmed publication; original artwork/channel/date/URL still need archival. EP.06, EP.07 and Mid-Autumn material are briefs/proposals, not completed new videos / 漫画 EP.05 已确认发布但资料待补；其余为选题提案。

Run `npm run index`, then `npm run check -- --assets` after changes. Never edit existing versions/vNNN/ / 修改后更新索引并全量检查，历史目录不可改。
