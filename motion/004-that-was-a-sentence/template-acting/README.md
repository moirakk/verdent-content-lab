# Soft Launch acting source · 独立动作源

Selected from v007. Original matte painted kittens and bakery room, with separate complete-character drawings for each cat. The earlier paired-keyframe cut is preserved in template-story and v006. / v007 起选用；保留水粉猫与厨房，将两只猫的整幅动作分别管理。旧成对关键帧剪辑保留。

Each cat has twelve connected whole-body drawings. Authored head/paw landmarks and fixed hind-paw anchors drive a continuous whole-painting mesh between drawings. There are no separated body parts or opacity crossfades. WebGL draws the flat painted texture without triangulation seams; browsers without WebGL fall back to intact painted key poses. This is limited painted animation, with no phoneme lip sync. / 每只十二幅完整动作，头爪锚点与固定后脚驱动整幅连续变形；不拆肢体、不用透明叠化。WebGL 仅绘制平面油画纹理，避免网格接缝；无 WebGL 时回退完整关键姿势。仍为有限动画，无音素口型。

Two timed attempts show anticipation, reach, block, withdrawal and an innocent hold. The tray sits behind paws and in front at its lower lip; its slide begins at contact. New original contact sounds are mixed over the preserved child dialogue and original music. / 两轮动作包括预备、伸爪、拦住、缩回和装无辜；盘底在爪后、前沿在爪前，接触后滑动；保留童声原配乐，加原创接触声。

Edit motion.js, registration.json and [episode config](../episode.json). The configuration contains the registration used at runtime; keep it consistent with registration.json. Do not run the shared preparation script over this template. / 修改脚本、锚点与配置；运行锚点来自配置，需与登记文件一致；共用准备脚本会跳过此源。

1. Choose a new videoExport filename in episode.json / 配置中选新视频名。
2. Render with `node scripts/render-story-previews.cjs --episode 004-that-was-a-sentence` from the repository root / 根目录渲染。
3. Copy that MP4 to assets/episode-export.mp4, then build with `node scripts/build-motion.mjs motion/004-that-was-a-sentence/episode.json` / 匹配视频复制后生成新永久版本。
4. Run `npm run index` and `npm run check -- --assets` / 更新索引并全量检查。

[Exact generation prompts / 原始生图提示](PROMPTS.md). PNG outputs are unchanged; bounds follow actual components because generated sheet spacing is uneven. No original-reference or historical snapshot bytes are modified. / PNG 原像素不改，按实际不等间隔的完整角色定位，历史快照不改。
