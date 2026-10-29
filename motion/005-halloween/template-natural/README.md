# Halloween natural cut · 万圣节自然节奏版

Selected for v013 on 2026-10-29. 20 seconds; native 800×1422 canvas, review export 720×1280 / 30 fps with H.264/AAC. The creator's original painted cats, costumes, room and supplied Verdent logo are unchanged / 10月29日选用 v013，20秒，竖屏有声视频；原油画猫、装扮、房间及 Logo 原件不改。

Whole connected paintings use equal X/Y scale. No mesh, cloth ripple, face warp or separated limbs. Acting uses authored reach/contact/release poses, a brief recoil and whole-cat peeking above the candy pile. The bucket clears the keyboard contact; the cats come forward at the ending so their eyes remain visible / 整幅原画等比显示，无网格、布料波纹、脸部拉伸或拆肢体；完整动作稿完成伸爪按键收回、受惊及糖堆探头，糖桶让开接触点，结尾前后遮挡保留双眼。

The spoken wish names Verdent; the screen acknowledges the wish before one candy, then a deliberate pause precedes the shower. Three existing child performances retain internal pauses. Mochi's final line is gently slowed without changing pitch, music ducks smoothly and contact cues follow the action / 台词直接向 Verdent 许愿，电脑先回应，单糖后留停顿再出糖雨；沿用三句童声并保留句内停顿，末句稍放慢不变调，配乐柔和避让并对齐动作音。

## Source and review · 修改与审片

[Selected config / 选用配置](../episode.json) + motion.js / style.css / index.html. [Dialogue/score mix / 对白配乐](../audio/v007-polish-20261029/mix.json). Earlier working config is retained in [draft history / 改稿历史](../drafts/2026-10-22-verdent-interaction/episode.json). All old templates and versions remain / 旧模板与存档全部保留。

- Render: `node scripts/render-story-previews.cjs --episode 005-halloween` from repository root / 根目录渲染，先配置新导出文件名。
- Check: `node scripts/check-halloween.cjs` with Playwright supplied as described in scripts/README.md / 验证播放、接触、边界、原比例与确定性。
- After rendering copy the matching movie to assets/episode-export.mp4, build episode.json and refresh indexes / 视频匹配后复制下载资产、构建并更新索引。

Opens paused on Play with sound; source HTML and MP4 both retain full playback controls. Synthetic child voices, fictional wishes and limited painted animation; final creative review remains pending / 默认点击带声，HTML 与视频均有播放控制；合成童声、虚构出糖、有限水粉动画，仍待创作者验看。
