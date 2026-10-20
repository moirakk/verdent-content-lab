(() => {
  "use strict";
  const episode = JSON.parse(document.getElementById("episode-config").textContent);
  const paper = document.querySelector(".paper");
  const speaker = document.getElementById("speaker");
  const line = document.getElementById("line");
  const playButton = document.getElementById("play");
  const params = new URLSearchParams(location.search);
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const fixedValue = Number(params.get("t"));
  const hasFixedTime = params.has("t") && Number.isFinite(fixedValue);
  let elapsed = hasFixedTime ? Math.max(0, fixedValue) % episode.duration : 0;
  let paused = hasFixedTime || reducedMotion.matches;
  let previousTime = performance.now();
  let previousBeat = -1;
  let frameId = null;

  document.title = `Mochi & Lucky · ${episode.title}`;
  document.getElementById("kicker").textContent = episode.kicker;
  document.getElementById("footer").textContent = episode.footer;
  document.getElementById("transcript").textContent = episode.beats.map(beat => `${beat.speaker}: ${beat.text}`).join("\n");
  document.body.classList.toggle("capture", params.get("capture") === "1");

  function render() {
    let currentBeat = 0;
    episode.beats.forEach((beat, index) => {
      if (elapsed >= beat.at) currentBeat = index;
    });
    if (currentBeat !== previousBeat) {
      const beat = episode.beats[currentBeat];
      speaker.textContent = beat.speaker;
      line.textContent = beat.text;
      paper.dataset.speaker = beat.speaker.toLowerCase();
      previousBeat = currentBeat;
    }
  }

  function tick(now) {
    frameId = null;
    if (paused || document.hidden) return;
    elapsed = (elapsed + now - previousTime) % episode.duration;
    previousTime = now;
    render();
    frameId = requestAnimationFrame(tick);
  }

  function syncPlayback() {
    paper.classList.toggle("paused", paused);
    playButton.textContent = paused ? "Play" : "Pause";
    playButton.setAttribute("aria-pressed", String(paused));
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    previousTime = performance.now();
    if (!paused && !document.hidden) frameId = requestAnimationFrame(tick);
  }

  function restart() {
    elapsed = 0;
    previousBeat = -1;
    render();
    paper.getAnimations({ subtree: true }).forEach(animation => { animation.currentTime = 0; });
    syncPlayback();
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (paper.requestFullscreen) await paper.requestFullscreen();
    } catch {
      document.getElementById("fullscreen").textContent = "Use browser full screen";
    }
  }

  playButton.addEventListener("click", () => { paused = !paused; syncPlayback(); });
  document.getElementById("restart").addEventListener("click", restart);
  document.getElementById("fullscreen").addEventListener("click", toggleFullscreen);
  document.addEventListener("keydown", event => {
    if (event.target.closest("button, input, textarea, select, a") || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.code === "Space") { event.preventDefault(); paused = !paused; syncPlayback(); }
    if (event.key.toLowerCase() === "r") restart();
    if (event.key.toLowerCase() === "f") toggleFullscreen();
  });
  document.addEventListener("visibilitychange", syncPlayback);
  reducedMotion.addEventListener("change", () => { if (reducedMotion.matches) { paused = true; syncPlayback(); } });
  render();
  syncPlayback();
  if (hasFixedTime) paper.getAnimations({ subtree: true }).forEach(animation => { animation.currentTime = elapsed; });
})();
