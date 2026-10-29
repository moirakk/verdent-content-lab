# Production drafts · 正在制作

Saved initially on 2026-10-22; all three revisions completed on 2026-10-29. **002 v004, 004 v009 and 005 v013 are now in the recording hub with matching voiced MP4s.** Creator review remains; none is published / 三条改稿现已完成并进入成片入口，匹配带声视频；仍待创作者验看，均未发布。 This file retains the revision history and selected source locations / 本页保留改稿记录与选用源码位置。

## Confirmed revision direction · 本轮明确要求

- Verdent participates in the story: a cat addresses the tool, the computer responds and the response causes the next beat. A logo alone is insufficient / 猫对 Verdent 说话、电脑反馈并推动剧情，不能只贴 Logo。
- Keep original painted cat identities/proportions; stronger acting without stretching faces or bodies / 保留油画猫造型比例，加强表演，不拉扯脸和身体。
- Rework Halloween too, with conversational child voices, natural pauses and holiday music / 万圣节也重做，童声自然停顿、保留节日配乐。

| Episode / 剧集 | Draft source / 改稿源 | Prepared / 已有 | Remaining / 剩余 |
| --- | --- | --- | --- |
| 002 · One Tiny Feature | [Config / 配置](motion/002-tiny-feature/drafts/2026-10-22-verdent-interaction/episode.json), [template-verdent](motion/002-tiny-feature/template-verdent/README.md) | Lucky asks Verdent for a feature, login and payments; visible plan replies and solid laptop; measured child audio / 对 Verdent 追加需求、计划反馈、立体电脑与实测童声 | Completed v004 HTML + voiced MP4; laptop below faces and growing coffee at left. Creator review / v004 已完成，电脑低于猫脸、左侧咖啡升级；待审 |
| 004 · Soft Launch | [Config / 配置](motion/004-that-was-a-sentence/drafts/2026-10-22-verdent-interaction/episode.json), [template-bakery-preview](motion/004-that-was-a-sentence/template-bakery-preview/README.md) | Verdent makes bakery-site preview; Lucky tests the cookies instead of the website; new child lines and native-proportion painting renderer / 网页预览与误试吃笑点、新童声及原比例画稿渲染 | Completed v009 HTML + voiced MP4; cookie contact/carry/bite and two protected samples. Creator review / v009 已完成，接触拿起送嘴及余下两块护盘；待审 |
| 005 · A Little More | [Config / 配置](motion/005-halloween/drafts/2026-10-22-verdent-interaction/episode.json), [template-natural](motion/005-halloween/template-natural/README.md) | Three new child lines with outer silence trimmed and internal pauses kept; retimed 20s original score / 三句新童声，去首尾空白保留句内停顿；新20秒原创节日谱 | Completed v013 HTML + voiced MP4, selected in the recording hub; creator review remains / v013 HTML 与带声视频已完成并进入成片入口，待创作者验看 |

Each new audio directory retains raw MP3s, trimmed WAVs, mix metadata, voice profiles and final AAC. Audio generation completed and measured for all three drafts. The creator explicitly authorized sending the five displayed Soft Launch lines to Microsoft's online speech service. This is permission for those lines, not automatic publication / 新声音保留原 MP3、修剪 WAV、混音数据、声线配置与 AAC，三集均已生成实测。创作者明确授权了显示的五句 Soft Launch 台词发送微软在线语音服务；不等于发布授权。

The coffee plan is illustrative; the bakery preview is illustrative. Sources checked 2026-10-22: [Manager task decomposition](https://www.verdent.ai/docs/verdent-manager/core-features/manager), [Cloud generation/preview overview](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview). Candy wishes remain fictional / 咖啡计划、烘焙网页为示意；依据当日核对的官方文档，不作为真实产品录屏或制作速度承诺；出糖为节日虚构。

[Machine-readable draft status / 机器可读状态](production-drafts.json). The shared solid computer helper is [here / 电脑组件](motion/_painted-props/verdent-computer.js); its code was inserted into the coffee/bakery working players so eventual standalone HTML has no external runtime dependency / 电脑组件已插入两集工作脚本，未来单文件 HTML 不依赖外部运行脚本。

Local polish mixes on 2026-10-29 reuse the saved voice recordings, preserve internal pauses and add smoother ducking plus contact-timed original scores. 002/004 export at 800×1000 / 30fps; the untouched originals remain in their earlier audio directories. Playback/contact checks: `node scripts/check-story-revisions.cjs` / 本轮只在本地复用童声、保留停顿，平滑避让配乐并对齐接触音；旧声音与全部旧片不变，检查命令如上。
