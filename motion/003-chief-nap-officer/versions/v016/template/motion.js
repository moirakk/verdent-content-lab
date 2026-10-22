(() => {
  "use strict";
  const element = id => document.getElementById(id);
  const episode = JSON.parse(element("episode-config").textContent);
  const paper = document.querySelector(".paper");
  const audio = element(episode.variant === "B" ? "soundtrack-b" : "soundtrack-a");
  const params = new URLSearchParams(location.search);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const fixed = params.has("t") && Number.isFinite(Number(params.get("t")));
  const clamp = value => Math.max(0, Math.min(1, value));
  const format = value => "0:" + String(Math.floor(value / 1000)).padStart(2, "0");
  const set = (id, key, value) => element(id).setAttribute(key, String(value));
  let elapsed = fixed ? Math.max(0, Math.min(episode.duration - 1, Number(params.get("t")))) : 0;
  let paused = fixed || reduced.matches;
  let sound = false;
  let looping = params.get("once") !== "1";
  let frame = null;
  let previous = performance.now();
  let requestId = 0;
  document.title = "Mochi & Lucky · " + episode.title;
  element("film-title").textContent = episode.title;
  element("transcript").textContent = episode.beats.map(beat => beat.speaker + ": " + beat.text).join("\n") + "\n" + episode.footer;
  element("seek").max = episode.duration - 1;
  audio.volume = .85;
  document.body.classList.toggle("capture", params.get("capture") === "1");

  function render() {
    const beat = episode.beats.filter(item => elapsed >= item.at).at(-1);
    const final = elapsed >= episode.footerAt;
    element("speaker").textContent = final ? "" : beat.speaker;
    element("line").textContent = final ? episode.footer : beat.text;
    let pose = 0;
    episode.frames.forEach(item => { if (elapsed >= item.at) pose = item.pose; });
    const baselines = [672, 672, 671, 672, 1094, 1094, 1094, 1094];
    const sourceLeft = pose % 4 * 280.5;
    const scale = 2.2;
    const breath = reduced.matches ? 1 : 1 + Math.sin(elapsed / 850) * .0015;
    set("cast", "transform", "translate(0 830) scale(1 " + breath + ") translate(0 -830)");
    set("cast-placement", "transform", "translate(" + (18 - sourceLeft * scale) + " " + (830 - baselines[pose] * scale) + ") scale(" + scale + ")");
    set("cast-crop", "clip-path", "url(#cell-" + pose + ")");
    const detail = elapsed >= episode.detail[0] && elapsed < episode.detail[1] && !reduced.matches;
    set("scene", "transform", detail ? "translate(400 480) scale(1.8) translate(-530 -620)" : "translate(0 0)");
    set("cast", "opacity", detail ? 0 : 1);
    set("screen-ui", "opacity", elapsed >= episode.launchAt ? 1 : 0);
    [0, 1, 2].forEach(position => {
      const progress = 28 + clamp((elapsed - episode.launchAt - position * 130) / 16000) * (120 - position * 20);
      set("progress-" + position, "d", "M0 11h" + progress.toFixed(2));
    });
    element("seek").value = String(Math.round(elapsed));
    set("seek", "aria-valuetext", (elapsed / 1000).toFixed(1) + " seconds");
    element("time").textContent = format(elapsed) + " / " + format(episode.duration);
  }

  function tick(now) {
    frame = null;
    if (paused || document.hidden) return;
    const next = sound && !audio.paused ? audio.currentTime * 1000 : elapsed + now - previous;
    if (next >= episode.duration || sound && audio.ended) {
      if (looping) {
        elapsed = next % episode.duration;
        if (sound) { audio.currentTime = elapsed / 1000; audio.play().catch(() => { sound = false; }); }
      } else {
        elapsed = episode.duration - 1;
        paused = true;
        render();
        sync();
        return;
      }
    } else elapsed = next;
    previous = now;
    render();
    frame = requestAnimationFrame(tick);
  }

  async function sync() {
    const request = ++requestId;
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    element("play").textContent = paused ? "Play" : "Pause";
    set("play", "aria-pressed", paused);
    if (sound && !paused && !document.hidden) {
      try { audio.currentTime = elapsed / 1000; await audio.play(); }
      catch {
        if (request === requestId) {
          sound = false;
          audio.pause();
          element("audio-status").textContent = "Sound unavailable. Tap to try again.";
        }
      }
    } else audio.pause();
    if (request !== requestId) {
      if (!sound || paused || document.hidden) audio.pause();
      return;
    }
    element("sound").textContent = sound ? "Sound on" : "Watch with sound";
    set("sound", "aria-pressed", sound);
    previous = performance.now();
    if (!paused && !document.hidden) frame = requestAnimationFrame(tick);
  }

  function setTime(value) {
    elapsed = Math.max(0, Math.min(episode.duration - 1, value));
    try { audio.currentTime = elapsed / 1000; } catch {}
    render();
    return sync();
  }

  async function toggleSound() {
    sound = !sound;
    if (sound) {
      paused = false;
      element("audio-status").textContent = "English child voices + original music.";
      await setTime(0);
    } else {
      element("audio-status").textContent = "Sound off. Captions stay on.";
      await sync();
    }
  }
  element("sound").addEventListener("click", toggleSound);
  element("play").addEventListener("click", () => { paused = !paused; return sync(); });
  element("restart").addEventListener("click", () => { paused = false; looping = true; return setTime(0); });
  element("once").addEventListener("click", () => { paused = false; looping = false; return setTime(0); });
  element("seek").addEventListener("input", () => { paused = true; return setTime(Number(element("seek").value)); });
  element("recording").addEventListener("click", async () => {
    looping = false; sound = true; paused = false;
    document.body.classList.toggle("capture", true);
    try { if (paper.requestFullscreen) await paper.requestFullscreen(); } catch {}
    return setTime(0);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { document.body.classList.toggle("capture", false); return; }
    if (event.target.closest("button,input,textarea,select,a") || event.ctrlKey || event.altKey || event.metaKey) return;
    if (event.code === "Space") { event.preventDefault(); paused = !paused; sync(); }
    if (event.key.toLowerCase() === "r") { paused = false; setTime(0); }
    if (event.key.toLowerCase() === "m") toggleSound();
  });
  document.addEventListener("visibilitychange", sync);
  document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && params.get("capture") !== "1") document.body.classList.toggle("capture", false); });
  reduced.addEventListener("change", () => { if (reduced.matches) { paused = true; render(); sync(); } });
  render();
  sync();
})();
