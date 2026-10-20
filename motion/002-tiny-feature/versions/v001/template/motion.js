(() => {
  "use strict";
  const episode = JSON.parse(document.getElementById("episode-config").textContent);
  const paper = document.querySelector(".paper");
  const speaker = document.getElementById("speaker");
  const line = document.getElementById("line");
  const playButton = document.getElementById("play");
  const seek = document.getElementById("seek");
  const clock = document.getElementById("time");
  const coffee = document.getElementById("coffee-size");
  const params = new URLSearchParams(location.search);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const requestedTime = Number(params.get("t"));
  const fixed = params.has("t") && Number.isFinite(requestedTime);
  let elapsed = fixed ? Math.max(0, requestedTime) % episode.duration : 0;
  let paused = fixed || reduced.matches;
  let frame = null;
  let previous = performance.now();
  let activeBeat = -1;
  const smooth = value => { const bounded = Math.max(0, Math.min(1, value)); return bounded * bounded * (3 - 2 * bounded); };
  const format = milliseconds => `0:${String(Math.floor(milliseconds / 1000)).padStart(2, "0")}`;
  document.title = `Mochi & Lucky · ${episode.title}`;
  document.getElementById("kicker").textContent = episode.kicker;
  document.getElementById("footer").textContent = episode.footer;
  document.getElementById("transcript").textContent = episode.beats.map(beat => `${beat.speaker}: ${beat.text}`).join("\n");
  document.body.classList.toggle("capture", params.get("capture") === "1");
  seek.max = episode.duration - 1;

  function render() {
    let index = 0;
    episode.beats.forEach((beat, position) => { if (elapsed >= beat.at) index = position; });
    const beat = episode.beats[index];
    if (index !== activeBeat) {
      speaker.textContent = beat.speaker;
      line.textContent = beat.text;
      paper.dataset.stage = String(index);
      paper.dataset.speaker = beat.speaker.toLowerCase();
      activeBeat = index;
    }
    const before = index > 0 ? episode.beats[index - 1].cupScale || 1 : 1;
    const target = beat.cupScale || 1;
    const blend = reduced.matches ? 1 : smooth((elapsed - beat.at) / 800);
    const size = before + (target - before) * blend;
    coffee.setAttribute("transform", `translate(248 195) scale(${size.toFixed(4)}) translate(-248 -195)`);
    const footerOpacity = smooth((elapsed - (episode.footerAt ?? episode.duration - 2200)) / 700);
    paper.style.setProperty("--footer-opacity", String(footerOpacity));
    seek.value = String(Math.round(elapsed));
    clock.textContent = `${format(elapsed)} / ${format(episode.duration)}`;
    seek.setAttribute("aria-valuetext", `${(elapsed / 1000).toFixed(1)} seconds`);
  }

  function tick(now) {
    frame = null;
    if (paused || document.hidden) return;
    elapsed = (elapsed + now - previous) % episode.duration;
    previous = now;
    render();
    frame = requestAnimationFrame(tick);
  }

  function sync() {
    paper.classList.toggle("paused", paused || document.hidden);
    playButton.textContent = paused ? "Play" : "Pause";
    playButton.setAttribute("aria-pressed", String(paused));
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    previous = performance.now();
    if (!paused && !document.hidden) frame = requestAnimationFrame(tick);
  }

  function setTime(value) {
    elapsed = Math.max(0, Math.min(episode.duration - 1, value));
    paper.getAnimations({ subtree:true }).forEach(animation => { animation.currentTime = elapsed; });
    render();
    sync();
  }

  function replay() { setTime(0); }
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (paper.requestFullscreen) await paper.requestFullscreen();
    } catch { document.getElementById("fullscreen").textContent = "Use browser full screen"; }
  }
  playButton.addEventListener("click", () => { paused = !paused; sync(); });
  document.getElementById("restart").addEventListener("click", replay);
  document.getElementById("fullscreen").addEventListener("click", fullscreen);
  seek.addEventListener("input", () => { paused = true; setTime(Number(seek.value)); });
  document.addEventListener("keydown", event => {
    if (event.target.closest("button,input,textarea,select,a") || event.ctrlKey || event.altKey || event.metaKey) return;
    if (event.code === "Space") { event.preventDefault(); paused = !paused; sync(); }
    if (event.key.toLowerCase() === "r") replay();
    if (event.key.toLowerCase() === "f") fullscreen();
  });
  document.addEventListener("visibilitychange", sync);
  reduced.addEventListener("change", () => { if (reduced.matches) { paused = true; render(); sync(); } });
  render();
  sync();
  if (fixed) paper.getAnimations({ subtree:true }).forEach(animation => { animation.currentTime = elapsed; });
})();
