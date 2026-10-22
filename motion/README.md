# Motion · 动态内容

Browser-playable HTML for recording and reuse. Motion IDs are separate from comic episode numbers. All on-screen creative text is English.

保存可在浏览器播放、录屏和复用的 HTML。动态编号与漫画编号分开，片中文字全部用英文。

[Version Guide / 每个旧版怎么用](VERSION_GUIDE.md) · [Actual status / 实际状态总表](../CONTENT_MAP.md)

Current here means the working file, not a release-approved film. The original painting and accepted blue studio keyframe govern style / 本页“当前”指工作文件，不表示成片已批准；画风以原画和已认可蓝地板关键帧为准。

[Episode library / 剧集总览](../EPISODES.md) · [Open browser library / 浏览器入口](../docs/index.html)

## Current Work · 当前作品

| ID / 编号 | Title / 标题 | Status / 状态 | Selected / 当前选用 | Links / 入口 |
| --- | --- | --- | --- | --- |
| 001 | The Corner Office | Review draft / 未发布待审 | v004 / 18s | [HTML](001-have-an-idea/index.html) / [MP4](001-have-an-idea/previews/v004-corner-office-review.mp4) / [History / 历史](001-have-an-idea/versions/index.html) |
| 002 | One Tiny Feature | Review draft / 未发布待审 | v003 / 18s | [HTML](002-tiny-feature/index.html) / [MP4](002-tiny-feature/previews/v003-coffee-story-review.mp4) / [History / 历史](002-tiny-feature/versions/index.html) |
| 003 | Chief Nap Officer | Review draft / 未发布待审 | v019 / 18s | [HTML](003-chief-nap-officer/index.html) / [MP4](003-chief-nap-officer/previews/v019-browser-review.mp4) / [History / 历史](003-chief-nap-officer/versions/index.html) |
| 004 | Soft Launch | Review draft / 未发布待审 | v006 / 20s | [HTML](004-that-was-a-sentence/index.html) / [MP4](004-that-was-a-sentence/previews/v006-soft-launch-review.mp4) / [History / 历史](004-that-was-a-sentence/versions/index.html) |
| 005 | A Little More | Review draft / 未发布待审 | v012 / 18s | [HTML](005-halloween/index.html) / [MP4](005-halloween/previews/halloween-wish-v012-voiced-review.mp4) / [History / 历史](005-halloween/versions/index.html) |

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
