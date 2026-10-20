# Motion 002 · One Tiny Feature / 一个小功能

Draft for visual review, not published. A 12-second, silent, 4:5 loop. Lucky expands a “tiny” idea; Mochi's coffee gets bigger at each beat. The final line is “I'll get a bigger cup.” All audience-facing text is English.

待审效果样片，未发布。12 秒无声、4:5 循环。Lucky 不断追加需求，Mochi 的咖啡杯随之变大，最后平静地说要换更大的杯子。成品文字全英文。

## Watch & Edit · 观看与修改

- [Play / 播放](index.html) · [Version history / 历史版本](versions/index.html)
- `episode.json`: English copy, timing, and cup sizes / 英文对白、节奏与杯子大小。
- `template/`: Episode-specific editable scene, style, and timeline / 本集独立的场景、样式与动画源码。

The episode uses a local template so this experiment does not change Motion 001. Original gouache character art follows the creator's new painted reference, keeping Mochi's cream muzzle/chest and Lucky's yellow-green irises. The generated painting is embedded in the standalone HTML; separate cat layers have gentle breathing, while the cup grows on the dialogue timeline. This adapts a candidate comic joke; EP.06 remains unconfirmed.

本集使用独立源码，不改动态 001。参考创作者新提供的粗笔触插画，生成原创水粉角色素材，保留 Mochi 浅色口鼻与胸毛、Lucky 黄绿虹膜。角色图内嵌进单文件 HTML，分层轻微呼吸，杯子按对白时间轴变大。本集借用了漫画候选笑点，EP.06 仍未定稿。

Build from the repository root / 在仓库根目录生成：

```sh
node scripts/build-motion.mjs motion/002-tiny-feature/episode.json
```

Space pauses/resumes, R replays, F requests fullscreen. `?capture=1` hides controls; `?t=10000` fixes the final scene. A slider allows timeline inspection. Reduced-motion settings disable ambient movement and start paused. Historical HTML remains permanent. Build before viewing; source-template images use asset tokens that the build embeds. See [asset notes / 素材说明](ASSETS.md) for the exact generation prompt.

空格暂停或播放，R 重播，F 全屏；录制参数隐藏控制栏，固定时间参数方便看最后一幕，也可以拖动进度条查看。减少动态效果设置下关闭环境动作并默认暂停。历史 HTML 永久保留。
