# Production drafts · 正在制作

Saved on 2026-10-22 at the creator's request to sync existing work first. These are sources and measured audio, not finished or creatively approved new episodes. Current watch/record/download links continue to use completed films in [EPISODES.md](EPISODES.md). / 按创作者“先同步已有内容”保存；本页为制作源码与实测声音，不是已完成或创意批准的新片。观看、录制与下载仍使用已完成版本。

## Confirmed revision direction · 本轮明确要求

- Verdent participates in the story: a cat addresses the tool, the computer responds and the response causes the next beat. A logo alone is insufficient / 猫对 Verdent 说话、电脑反馈并推动剧情，不能只贴 Logo。
- Keep original painted cat identities/proportions; stronger acting without stretching faces or bodies / 保留油画猫造型比例，加强表演，不拉扯脸和身体。
- Rework Halloween too, with conversational child voices, natural pauses and holiday music / 万圣节也重做，童声自然停顿、保留节日配乐。

| Episode / 剧集 | Draft source / 改稿源 | Prepared / 已有 | Remaining / 剩余 |
| --- | --- | --- | --- |
| 002 · One Tiny Feature | [Config / 配置](motion/002-tiny-feature/drafts/2026-10-22-verdent-interaction/episode.json), [template-verdent](motion/002-tiny-feature/template-verdent/README.md) | Lucky asks Verdent for a feature, login and payments; visible plan replies and solid laptop; measured child audio / 对 Verdent 追加需求、计划反馈、立体电脑与实测童声 | Check eye line, physical staging, render matching movie/HTML / 检查视线与空间，导出匹配视频和 HTML |
| 004 · Soft Launch | [Config / 配置](motion/004-that-was-a-sentence/drafts/2026-10-22-verdent-interaction/episode.json), [template-bakery-preview](motion/004-that-was-a-sentence/template-bakery-preview/README.md) | Verdent makes bakery-site preview; Lucky tests the cookies instead of the website; new child lines and native-proportion painting renderer / 网页预览与误试吃笑点、新童声及原比例画稿渲染 | Review clear setup/payoff, contact and export / 复查铺垫反转、接触并导出 |
| 005 · A Little More | [Config / 配置](motion/005-halloween/drafts/2026-10-22-verdent-interaction/episode.json), [template-natural](motion/005-halloween/template-natural/README.md) | Three new child lines with outer silence trimmed and internal pauses kept; retimed 20s original score / 三句新童声，去首尾空白保留句内停顿；新20秒原创节日谱 | Animation still uses prior timing/warping; retime and remove body/cloth deformation before review/export / 动画仍为旧时间与变形逻辑，先重排并去除身体布料变形，再审看导出 |

Each new audio directory retains raw MP3s, trimmed WAVs, mix metadata, voice profiles and final AAC. Audio generation completed and measured for all three drafts. The creator explicitly authorized sending the five displayed Soft Launch lines to Microsoft's online speech service. This is permission for those lines, not automatic publication / 新声音保留原 MP3、修剪 WAV、混音数据、声线配置与 AAC，三集均已生成实测。创作者明确授权了显示的五句 Soft Launch 台词发送微软在线语音服务；不等于发布授权。

The coffee plan is illustrative; the bakery preview is illustrative. Sources checked 2026-10-22: [Manager task decomposition](https://www.verdent.ai/docs/verdent-manager/core-features/manager), [Cloud generation/preview overview](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview). Candy wishes remain fictional / 咖啡计划、烘焙网页为示意；依据当日核对的官方文档，不作为真实产品录屏或制作速度承诺；出糖为节日虚构。

[Machine-readable draft status / 机器可读状态](production-drafts.json). The shared solid computer helper is [here / 电脑组件](motion/_painted-props/verdent-computer.js); its code was inserted into the coffee/bakery working players so eventual standalone HTML has no external runtime dependency / 电脑组件已插入两集工作脚本，未来单文件 HTML 不依赖外部运行脚本。
