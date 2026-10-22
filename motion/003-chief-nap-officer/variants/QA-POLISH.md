# v017 Checks · 表演打磨版检查

2026-10-21. Local review only, not creator approval / 本地检查，不代替创作者验收。

- 720 deterministic 25ms timeline samples; all referenced DOM IDs exist and are unique / 每 25 毫秒共 720 点，元素存在且不重名。
- All eight action cells selected at their intended cue; scene and insert visibility sum to one / 八格动作按时切换，不叠底重影。
- Key-press cue at 5.30s equals Manager launch cue / 接触时点与启动时点一致。
- Captions absent during the 16.10s reaction; footer readable at 17.30s / 反应时字幕退场，尾句清楚。
- Reduced-motion camera disabled and contact pose static; yawn after child speech / 减少动态时取消推镜、接触稿固定，先说完再哈欠。
- Sound enable, audio-clock sync, pause, seek, one-shot ending and unavailable-sound state checked / 检查声音、同步、暂停拖动、单次播放尾帧与声音失败提示。
- 22 archive hashes and docs mirrors checked; B v016 and all earlier versions unchanged / 校验 22 个归档哈希及预览镜像，旧版不变。
- Nine native SVG review frames visually inspected; speaker-camera translation clamped to prevent exposed canvas bars / 审查九张离线画面，约束镜头位移避免露底。
- 18s, 800×1000 H.264/AAC review movie, 12 timeline samples/sec encoded at 24fps; successfully decoded end-to-end with ffmpeg / 18 秒离线审片，全片可正常解码，非插帧或最终视频质量承诺。

Browser playback/recording remains unverified; the previous local-file and server restrictions are not bypassed / 浏览器实录仍未验证，不绕过先前本地访问限制。
Remaining: sparse in-between drawings, tiny generated-art variation and insert-to-wide spatial continuity still need review / 尚需验看：中间帧密度、生成画稿微差和插镜到全景的空间连续性。
