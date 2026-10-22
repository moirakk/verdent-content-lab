# Motion · 动态内容

Browser-playable HTML for recording and reuse. Motion IDs are separate from comic episode numbers. All on-screen creative text is English.

保存可在浏览器播放、录屏和复用的 HTML。动态编号与漫画编号分开，片中文字全部用英文。

[Version Guide / 每个旧版怎么用](VERSION_GUIDE.md) · [Actual status / 实际状态总表](../CONTENT_MAP.md)

Current here means the working file, not a release-approved film. The original painting and accepted blue studio keyframe govern style / 本页“当前”指工作文件，不表示成片已批准；画风以原画和已认可蓝地板关键帧为准。

## Current Work · 当前作品

| ID / 编号 | Title / 标题 | Status / 状态 | Selected / 当前选用 | Links / 入口 |
| --- | --- | --- | --- | --- |
| 001 | Have an idea | Draft, unpublished / 待审，未发布 | v001 · 8s / 8 秒 | [Brief / 说明](001-have-an-idea/README.md) · [Play / 播放](001-have-an-idea/index.html) · [Versions / 历史](001-have-an-idea/versions/index.html) |
| 002 | One Tiny Feature | Draft, unpublished / 待审，未发布 | v001 · 12s / 12 秒 | [Brief / 说明](002-tiny-feature/README.md) · [Play / 播放](002-tiny-feature/index.html) · [Versions / 历史](002-tiny-feature/versions/index.html) |
| 003 | Chief Nap Officer | Blue A acting polish / 蓝地板 A 版表演打磨 | A v017 · 18s; B v016 · 12s / 默认新 A，B 保留 | [A HTML](003-chief-nap-officer/versions/v017/index.html) · [Review MP4](003-chief-nap-officer/previews/v017-blue-acting-review.mp4) · [B HTML](003-chief-nap-officer/versions/v016/index.html) |
| 004 | That Was a Sentence | Visual draft, speech pending / 画面样片、童声待补 | v002 · 18s · captions + music / 字幕配乐 | [Brief / 说明](004-that-was-a-sentence/README.md) · [HTML](004-that-was-a-sentence/index.html) · [Video / 视频](004-that-was-a-sentence/previews/v002-native-preview.mp4) |

| 005 | A Little More | Halloween limited-animation draft / 万圣节有限动画待审 | v008 · 18s · original score / 原创配乐 | [HTML](005-halloween/index.html) · [Review MP4](005-halloween/previews/halloween-wish-v008-review.mp4) · [Brief / 说明](005-halloween/README.md) |

## Per-Episode Layout · 每条作品结构

```text
episode-id/
├── README.md       Story, status, selection / 故事、状态、选用版本
├── episode.json    Dialogue and timing / 对白与时间
├── index.html      Selected standalone HTML / 当前选用版
└── versions/
    ├── index.html  Browse old versions / 历史版本列表
    ├── index.json  Archive records / 归档记录
    ├── v001/       Permanent archive / 永久存档
    └── v002/       Permanent archive / 永久存档
```

The highest number does not determine selection. Keep every archived HTML; copy an old version to continue editing.

最大编号不代表当前选用版。每版 HTML 都保留；继续改旧版时，先复制再修改。

## Create & Edit · 制作入口

- [Template / 共用模板](_template/README.md) — Scene, characters, motion, configuration / 场景、角色、动效与配置。
- [Experiments / 动效试验](experiments/README.md) — Unapproved studies / 尚未确认的试验。
- [Tools / 制作工具](../scripts/README.md) — Build and archive / 生成与归档。
- [Captions / 社媒文案](../captions/README.md) — English publishing copy / 英文发布内容。

Download HTML and open it in a browser; GitHub's file viewer shows source only / 下载 HTML 后用浏览器打开，GitHub 文件页只显示源码。
