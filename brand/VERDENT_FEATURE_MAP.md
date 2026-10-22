# Verdent Feature Map · 产品功能与内容选题库

Status / 状态：**Working inventory; completed film drafts still need review / 工作清单，成片仍待审**。Checked / 核对：2026-10-20。

## Read First · 使用方式

40 editorial feature entries: Manager/Desktop 18, Cloud 11, VS Code 11. This is a content-planning inventory, not an exhaustive product specification. Official documentation supports the limited factual scope below; no product UI was operated or independently tested in this review / 共 40 个内容功能条目：桌面端 18、Cloud 11、VS Code 11。不是完整规格书；本次核对官方文档，未实操验收产品。

**One episode, one primary capability. Character first. Joke second. Product third. / 每集一个核心能力：先人物，再笑点，最后产品。**

Facts, creative proposals and approval are separate. A feature's presence in docs does not approve a joke or prove a particular subscription supports it. Check current UI, permissions, limits and source before production / 功能事实、创意和批准分开；文档有功能不代表笑点已确认，也不代表所有套餐都支持。制作前再查界面、权限、限制和来源。

- **Content status / 内容状态**: Idea → Brief → Draft → Approved → Published. Only actual releases become Published / 只有实际发布后才记已发布。
- **Possible jokes / 可能笑点**: proposals, never finished approved scripts / 均为提案，不是已批准脚本。
- **Best format / 适合形式**: suggested production approach, not a performance promise / 制作建议，不承诺传播效果。
- Stable IDs M/C/V survive edits; queue and episode briefs reference these IDs / 功能编号固定，后续选题和作品用同一编号关联。
- Motion 003 is a draft of M02. Motion 001/002 are character samples, not verified product demonstrations. EP.05's title alone does not prove feature usage / 003 关联 M02；001/002 不算已验证的功能展示；不凭 EP.05 标题反推使用记录。

[First-batch review queue / 首轮待确认选题](FEATURE_CONTENT_QUEUE.md) · [Content progress / 发布进度](../CONTENT_MAP.md)

## Manager / Desktop · 桌面端

Manager is grouped under Desktop in official navigation. Do not confuse a Manager, a worker, and a Skill / 官方导航使用 Desktop；Manager、worker、Skill 不等同。

| ID | Feature / 功能 | Factual scope / 事实边界 | Content status / 内容状态 | Possible jokes / 可能笑点 | Best format / 适合形式 | Source / 官方来源 |
| --- | --- | --- | --- | --- | --- | --- |
| M01 | Task decomposition / 目标拆解 | Goal → stages, tasks and acceptance criteria / 目标拆成阶段、任务与验收点 | Draft: Motion 004 / 画面样片待审 | A one-sentence plan becomes a long checklist / 一句话计划展开长清单 | 4-panel or motion / 四格或动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/manager) |
| M02 | Parallel workers / 并行工作 | Agents work concurrently; not a speed guarantee / 多 agent 并行，不承诺固定提速 | Draft: Motion 003 / 样片待审 | The team works; the founder naps / 团队工作，创始猫午睡 | Story motion / 剧情动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/manager) |
| M03 | Board & handoff / 看板与待审交付 | Status and To Review outputs / 状态与待审成果；仍需复核 | Idea / 候选 | Mochi's coffee also lands in To Review / 咖啡也进待审栏 | 3-panel / 三格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/manager) |
| M04 | Contextual replies / 任务内回复 | Questions and decisions stay with a task / 问题与决定关联对应任务 | Idea / 候选 | Yes. To which of my five ideas? / 答应了，答应的是五个点子中的哪个 | Chat motion / 对话动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/manager) |
| M05 | Memory / 长期记忆 | Project preferences and prior decisions / 项目偏好与历史决策，非完美记忆保证 | Idea / 候选 | The tool remembers the stack; Lucky forgets the coffee / 工具记得技术栈，Lucky 忘了咖啡 | 3-panel or motion / 三格或动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/manager) |
| M06 | Messaging / 消息触发 | Use connected channels; setup required / 已连接的消息渠道发起工作，需先配置 | Idea / 候选 | Lucky's best idea arrives away from the desk / 最佳点子出现在离桌后 | Phone-to-desk motion / 手机到桌边动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/manager) |
| M07 | Automations / 定时重复任务 | Natural-language schedule; runs can fail or be missed / 自然语言设重复任务，可能失败或错过 | Idea / 候选 | Automate the reminder, not the act of drinking / 能自动提醒，不能代喝水 | Loop motion / 循环动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/automation) |
| M08 | Multiple Managers / 多 Manager | Separate identity, memory and tools / 独立身份、记忆与工具配置 | Idea / 候选 | A manager for every idea, no one for lunch / 点子各有经理，午饭没人管 | 4-panel / 四格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/multi-manager) |
| M09 | Design Mode / 设计方向先行 | Choose a direction before building / 先选视觉方向，再构建 | Idea / 候选 | Lucky asks for more meow, then picks the simplest draft / 要更多喵，最后选最简稿 | Comparison motion / 对照动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/design-mode) |
| M10 | Skills / 可复用工作方法 | Reusable knowledge and workflows, not standalone workers / 知识与流程复用，不等同独立 worker | Idea / 候选 | Mochi saves a process; Lucky saves a nap ritual / 一个存流程，一个存午睡仪式 | 3-panel / 三格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/skills) |
| M11 | Integrations / 插件与外部工具 | Install and authorize services before use / 安装并授权外部服务后使用 | Idea / 候选 | Everything is connected except the goal / 工具全接好，目标没想好 | 4-panel / 四格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/integration) |
| M12 | Image Tool / 图片创作 | Generate variations and save project assets / 创作变体并保存项目素材 | Idea / 候选 | One profile photo becomes eighteen moods / 一张头像变十八种情绪 | Art carousel or motion / 图集或动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/image-tool) |
| M13 | Video generation / 视频生成 | Short video from text or image; model limits apply / 文字或图像生成短片，受模型限制 | Idea / 候选 | Lucky's epic trailer is mostly a yawn / 史诗预告片大半在打哈欠 | Short motion / 短动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/video-generation) |
| M14 | Cloud publishing from Desktop / 桌面端云项目发布 | Cloud project + working preview; not direct local-folder publishing / 需云项目与可用预览，非直接发布本地文件夹 | Idea / 候选 | A tiny snack page gets a grand opening / 零食小页举行盛大开业 | Story + real output / 剧情加真实成果 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/core-features/cloud-projects-and-publishing) |
| M15 | Agent Mode / 执行模式 | Act on a clear task, with permissions / 执行明确任务，仍受权限控制 | Idea / 候选 | Ready to start; Lucky is still naming the project / 已能开工，Lucky 还在取名 | 3-panel / 三格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/advanced-features/agent-mode) |
| M16 | Plan Mode / 规划模式 | Align on a plan before implementation / 实施前对齐方案 | Idea / 候选 | Lucky mistakes a sentence for a plan / Lucky 把一句话当计划 | 4-panel / 四格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/advanced-features/plan-mode) |
| M17 | Code Review / 代码检查 | Review proposed changes, not a zero-bug guarantee / 检查改动，不保证零缺陷 | Idea / 候选 | Lucky wants a stamp; Mochi wants to read / 一个要盖章，一个要先看 | 3-panel / 三格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/advanced-features/code-review) |
| M18 | Workspace isolation / 工作区隔离 | Separate Git workspaces, not a security sandbox claim / 分离 Git 工作区，不宣称安全沙箱 | Idea / 候选 | A tiny experiment needs its own little room / 小实验也有自己的房间 | Split-scene motion / 分屏动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-manager/advanced-features/workspace-isolation) |

## Verdent Cloud · 云端

Browser control surface, Cloud execution. C11 is not Desktop worktree management; C06 is not a VS Code publishing claim / 浏览器操作、云端执行；云端并行不等于桌面 worktree，发布能力不自动归到 VS Code。

| ID | Feature / 功能 | Factual scope / 事实边界 | Content status / 内容状态 | Possible jokes / 可能笑点 | Best format / 适合形式 | Source / 官方来源 |
| --- | --- | --- | --- | --- | --- | --- |
| C01 | Project generation / 创建项目 | Idea or reference → project / 想法或参考转成项目 | Idea / 候选 | A website for collecting cardboard boxes / 给收藏纸箱做网站 | Story motion / 剧情动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview) |
| C02 | Templates / 模板起步 | Start from a template / 使用模板作为起点 | Idea / 候选 | Minimal design, forty-seven paw prints / 极简模板添了四十七个猫爪 | Meme / 单图梗 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview) |
| C03 | Design Mode / 设计探索 | Explore an app's direction first / 先探索应用视觉方向 | Idea / 候选 | Does negative space need more cats? / 留白要不要再填猫 | Comparison comic / 对照漫画 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview) |
| C04 | AI editing / 多轮修改 | Iterate on the project through requests / 通过多轮需求调整项目 | Idea / 候选 | One last tiny change returns again / 最后一个小改动又回来了 | Comic series / 连载漫画 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview) |
| C05 | Live Preview / 实时预览 | Test a runnable app before launch / 发布前测试可运行应用 | Idea / 候选 | Lucky tests the logo; Mochi tests the button / 一个看标志，一个真点按钮 | Interaction motion / 交互动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview) |
| C06 | Publish & visibility / 发布与可见性 | Cloud URL, Public/Private, checks and limits / 云端链接、公开私密、检查与资源限制 | Idea / 候选 | A private snack list gets a public launch speech / 私人零食清单也要开发布会 | Story + output / 剧情加成果 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/publish/go-live) |
| C07 | Share a published app / 分享上线链接 | Share a live app, not just a preview screenshot / 分享上线应用，不是只发截图 | Idea / 候选 | The first visitor is Mochi / 第一位访客是 Mochi | 3-panel / 三格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview) |
| C08 | Analytics / 访问分析 | Inspect observed traffic, not guaranteed growth / 查看实际访问，不承诺增长 | Idea / 候选 | Three visits and one very busy refresh button / 三次访问与一个忙碌的刷新键 | 3-panel or motion / 三格或动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview) |
| C09 | Logs & publish repair / 日志与发布修复 | Inspect failed checks and request AI repair / 看失败检查并请求 AI 修复 | Idea / 候选 | Lucky comforts the error log / Lucky 安慰错误日志 | 4-panel / 四格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/publish/go-live) |
| C10 | Iteration & creations / 上线迭代与作品管理 | Reopen work and publish changes / 重新打开作品并发布更新 | Idea / 候选 | Version one is live; version nine is already planned / 一版刚上线，九版已计划 | Subtle motion / 轻动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/getting-started/overview) |
| C11 | Parallel Cloud tasks / 云端并行任务 | Independent task sessions in Cloud, not local worktrees / 云端独立任务会话，不是本地 worktree | Idea / 候选 | One task fixes the site; another names the boxes / 一路修网站，一路给纸箱取名 | Split-scene motion / 分屏动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-cloud/workspace-and-tasks/parallel-work) |

## Verdent for VS Code · 编辑器扩展

Developer workflows inside VS Code. Avoid reusing EP.05's machine joke before its artwork is checked / 编辑器内的开发工作流；未查 EP.05 原稿前，不重复 machine 笑点。

| ID | Feature / 功能 | Factual scope / 事实边界 | Content status / 内容状态 | Possible jokes / 可能笑点 | Best format / 适合形式 | Source / 官方来源 |
| --- | --- | --- | --- | --- | --- | --- |
| V01 | Plan-Code-Verify / 规划编码验证 | Workflow with separate planning and verification / 规划、实施与验证工作流 | Idea / 候选 | Lucky puts celebration first / Lucky 把庆祝写在第一步 | 4-panel / 四格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/getting-started/overview) |
| V02 | Professional Plan / 专业规划 | Translate an idea into an implementation plan / 想法转成实施计划 | Idea / 候选 | A launch plan is more than confetti / 上线计划不只是彩纸 | 4-panel / 四格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/core-features/overview) |
| V03 | Clarification Loop / 需求澄清 | Resolve ambiguities before implementation / 实施前澄清模糊需求 | Idea / 候选 | Define done. Snacks. / 完成的定义是零食 | Dialogue motion / 对话动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/core-features/clarification-loop) |
| V04 | Plan Rules / 规划规则 | Customize planning and clarification guidance / 自定义规划与澄清方式 | Idea / 候选 | One rule: no more tiny additions / 唯一规则是不再加小需求 | Meme / 单图梗 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/core-features/plan-rules) |
| V05 | Code Diff / 改动对比 | Inspect code changes / 查看代码变化，不证明自动正确 | Idea / 候选 | One line becomes a very long scroll / 一行改动变成长卷轴 | Scroll motion / 卷轴动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/core-features/code-diff) |
| V06 | Verify Loop / 验证迭代 | Check results and iterate on failures / 检查结果并针对失败迭代 | Idea / 候选 | It runs. On which machine? / 能跑，但在哪台机器 | Hold: check EP.05 overlap / 先核对 EP.05 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/getting-started/overview) |
| V07 | Browser Tool / 浏览器验证 | Check app interactions in a browser / 浏览器里验证应用交互 | Idea / 候选 | The first tester walks on the keyboard / 第一位测试用户踩键盘 | Interaction motion / 交互动效 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/core-features/browser-tool) |
| V08 | Testing & debugging / 测试排错 | Diagnose an error and test a repair / 定位错误、修复并测试 | Idea / 候选 | The bug is gone; Lucky misses it / Bug 修好了，Lucky 开始想它 | 3-panel / 三格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/getting-started/overview) |
| V09 | Code understanding & refactoring / 理解与重构 | Understand existing structure before changes / 理解现有结构再修改 | Idea / 候选 | Code is easier to organize than Lucky's boxes / 代码比 Lucky 的纸箱好整理 | 4-panel / 四格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/getting-started/overview) |
| V10 | Subagents / 专门化协作 | Specialized tasks with isolated context / 专门化任务与分离上下文 | Idea / 候选 | Lucky tries to delegate his nap / Lucky 想把午睡也委派出去 | 3-panel / 三格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/core-features/overview) |
| V11 | Rules & MCP / 规则与工具扩展 | Configured behavior and external tool access / 配置行为与外部工具访问；正式制作只选一个子点 | Idea / 候选 | All tools ready; the task is feed the cats / 工具就绪，任务是喂猫 | 4-panel / 四格 | [Docs / 文档](https://www.verdent.ai/docs/verdent-for-vscode/getting-started/overview) |

## Research Backlog · 待细分核实

Slides, document/data analysis and deep research stay unassigned until product line, entry point, supported files and an actual demo are confirmed. The Skills docs mention document workflows, but that is not evidence for every product line / 幻灯片、文档、数据分析与深度研究暂不独立做承诺。Skills 文档提及文档流程，但不能据此推广为三条产品线通用能力。

Database, users/auth, custom domains, response feedback, BYOA/BYOK, Smart Suggestions and detailed Cloud configuration have documentation entries but are not yet split into individual story cards here. Add them after a focused source/demo check / 数据库、用户认证、自定义域名、反馈、BYOA/BYOK、智能建议及 Cloud 详细配置另待逐项查证后补卡，不把本表当成全部功能。

## Production Gate · 单集确认流程

1. Choose one ID and a character desire / 选一个编号及人物欲望。
2. Write an English hook, conflict, payoff, and one visible capability moment / 写英文开场、冲突、反转与一个可见的功能动作。
3. Check exact product source and label real footage versus illustration / 查产品来源，区分真实录屏与示意。
4. Get creator approval for feature, story and voices before producing the next full episode / 下一集完整制作前确认功能、故事与声线。
5. Archive every HTML/audio version; update status and release evidence only when it changes / 每版 HTML 与声音留档，按事实更新状态。

No automatic publishing schedule, new automation, or approval is created by this plan / 本方案不创建自动发布排期、不新建自动化，也不等同批准。
