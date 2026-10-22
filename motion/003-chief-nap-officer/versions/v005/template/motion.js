(() => {
  "use strict";
  const episode = JSON.parse(document.getElementById("episode-config").textContent);
  const paper = document.querySelector(".paper");
  const speaker = document.getElementById("speaker");
  const line = document.getElementById("line");
  const playButton = document.getElementById("play");
  const soundButton = document.getElementById("sound");
  const status = document.getElementById("audio-status");
  const audio = document.getElementById("soundtrack");
  const seek = document.getElementById("seek");
  const clock = document.getElementById("time");
  const manager = document.getElementById("manager");
  const params = new URLSearchParams(location.search);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const fixedTime = Number(params.get("t"));
  const fixed = params.has("t") && Number.isFinite(fixedTime);
  let elapsed = fixed ? Math.max(0, fixedTime) % episode.duration : 0;
  let paused = fixed || reduced.matches;
  let sound = false;
  let frame = null;
  let previous = performance.now();
  let activeBeat = -1;
  let requestId = 0;
  const smooth = value => { const bounded = Math.min(1, Math.max(0, value)); return bounded * bounded * (3 - 2 * bounded); };
  const format = value => `0:${String(Math.floor(value / 1000)).padStart(2, "0")}`;
  const shots = { hook:{x:-23,scale:1.26,mochi:.6}, doubt:{x:0,scale:1,mochi:1}, team:{x:0,scale:.96,mochi:1}, question:{x:9,scale:1.06,mochi:1}, nap:{x:0,scale:1,mochi:1} };
  const actors = Object.fromEntries(["mochi-neutral","mochi-skeptic","lucky-proud","lucky-yawn","lucky-sleep"].map(id => [id,document.getElementById(id)]));
  document.title = `Mochi & Lucky · ${episode.title}`;
  document.getElementById("kicker").textContent = episode.kicker;
  document.getElementById("footer").textContent = episode.footer;
  document.getElementById("transcript").textContent = episode.beats.map(beat => `${beat.speaker}: ${beat.text}`).join("\n") + "\nVerdent Manager divides a cat café website into three illustrated parallel worker tasks. Lucky curls up asleep after naming himself Chief Nap Officer.";
  document.body.classList.toggle("capture", params.get("capture") === "1");
  seek.max = episode.duration - 1;
  audio.volume = .85;

  function setFormat(value) {
    paper.dataset.format = value;
    document.getElementById("reel").setAttribute("aria-pressed", String(value === "reel"));
    document.getElementById("feed").setAttribute("aria-pressed", String(value === "feed"));
  }
  setFormat(params.get("format") === "feed" ? "feed" : "reel");

  function render() {
    let index = 0;
    episode.beats.forEach((beat, position) => { if (elapsed >= beat.at) index = position; });
    const beat = episode.beats[index];
    if (index !== activeBeat) {
      speaker.textContent = beat.speaker;
      line.textContent = beat.text;
      paper.dataset.shot = beat.shot;
      activeBeat = index;
    }
    const blend = reduced.matches ? 1 : smooth((elapsed - beat.at) / 480);
    const before = shots[episode.beats[Math.max(0,index - 1)].shot];
    const after = shots[beat.shot];
    const panel = beat.shot === "team" ? smooth((elapsed - beat.at) / 450) : beat.shot === "question" ? 1 - smooth((elapsed - beat.at) / 450) : 0;
    const nap = smooth((elapsed - 14900) / 650);
    const skeptical = smooth((elapsed - 2600) / 320);
    const yawn = smooth((elapsed - 12300) / 420);
    const acting = reduced.matches ? 0 : 1;
    const speech = smooth((elapsed - beat.voiceAt) / 180) * (1 - smooth((elapsed - beat.voiceAt - 1450) / 300));
    const nod = Math.sin((elapsed - beat.voiceAt) / 190) * speech * acting;
    const hop = Math.sin(Math.PI * Math.min(1, elapsed / 700)) * 16 * acting;
    const stretch = Math.sin(Math.PI * Math.min(1,Math.max(0,(elapsed - 12300) / 2000))) * acting;
    const breathing = Math.sin(elapsed / 650) * .008 * acting;
    actors["mochi-neutral"].setAttribute("opacity", String(1 - skeptical));
    actors["mochi-skeptic"].setAttribute("opacity", String(skeptical));
    actors["mochi-skeptic"].setAttribute("transform", `rotate(${beat.speaker === "Mochi" ? nod * 1.8 : 0} 200 610)`);
    actors["lucky-proud"].setAttribute("opacity", String(1 - yawn));
    actors["lucky-proud"].setAttribute("transform", `translate(0 ${-hop - (beat.speaker === "Lucky" ? nod * 5 : 0)}) rotate(${beat.speaker === "Lucky" ? nod * 1.4 : 0} 600 610)`);
    actors["lucky-yawn"].setAttribute("opacity", String(yawn * (1 - nap)));
    actors["lucky-yawn"].setAttribute("transform", `translate(600 610) scale(${1 + stretch * .045} ${1 - stretch * .035}) translate(-600 -610)`);
    actors["lucky-sleep"].setAttribute("opacity", String(nap));
    actors["lucky-sleep"].setAttribute("transform", `translate(600 610) scale(1 ${1 + breathing}) translate(-600 -610)`);
    const style = paper.style;
    style.setProperty("--cast-x", `${before.x + (after.x - before.x) * blend}%`);
    style.setProperty("--cast-scale", String(before.scale + (after.scale - before.scale) * blend));
    style.setProperty("--mochi-opacity", String(before.mochi + (after.mochi - before.mochi) * blend));
    style.setProperty("--cast-opacity", String(1 - panel * .85));
    style.setProperty("--panel-opacity", String(panel));
    style.setProperty("--nap-opacity", String(nap));
    style.setProperty("--awake-opacity", String(1 - nap));
    style.setProperty("--spark-opacity", String((1 - nap) * (1 - panel)));
    style.setProperty("--footer-opacity", String(smooth((elapsed - episode.footerAt) / 600)));
    manager.setAttribute("aria-hidden", String(panel < .05));
    const work = smooth((elapsed - 5750) / 5000);
    ["work-one","work-two","work-three"].forEach((id,position) => { document.getElementById(id).style.width = `${18 + work * (52 - position * 5)}%`; });
    ["worker-one","worker-two","worker-three"].forEach((id,position) => { document.getElementById(id).style.setProperty("--arrival", String(reduced.matches ? 1 : smooth((elapsed - 5850 - position * 140) / 350))); });
    seek.value = String(Math.round(elapsed));
    seek.setAttribute("aria-valuetext", `${(elapsed / 1000).toFixed(1)} seconds`);
    clock.textContent = `${format(elapsed)} / ${format(episode.duration)}`;
  }

  function tick(now) {
    frame = null;
    if (paused || document.hidden) return;
    elapsed = sound && !audio.paused ? audio.currentTime * 1000 % episode.duration : (elapsed + now - previous) % episode.duration;
    previous = now;
    render();
    frame = requestAnimationFrame(tick);
  }

  async function sync() {
    const currentRequest = ++requestId;
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    paper.classList.toggle("paused", paused || document.hidden);
    playButton.textContent = paused ? "Play" : "Pause";
    playButton.setAttribute("aria-pressed", String(paused));
    if (sound && !paused && !document.hidden) {
      try { audio.currentTime = elapsed / 1000; await audio.play(); }
      catch { if (currentRequest === requestId) { sound = false; audio.pause(); status.textContent = "Sound unavailable. Tap to try again."; } }
    } else audio.pause();
    if (currentRequest !== requestId) { if (!sound || paused || document.hidden) audio.pause(); return; }
    soundButton.textContent = sound ? "Sound on" : "Watch with sound";
    soundButton.setAttribute("aria-pressed", String(sound));
    previous = performance.now();
    if (!paused && !document.hidden) frame = requestAnimationFrame(tick);
  }

  function resetAnimationTime() { paper.getAnimations({ subtree:true }).forEach(animation => { animation.currentTime = elapsed; }); }
  function setTime(value) {
    elapsed = Math.max(0,Math.min(episode.duration - 1,value));
    try { audio.currentTime = elapsed / 1000; } catch {}
    resetAnimationTime();
    render();
    return sync();
  }
  async function toggleSound() {
    sound = !sound;
    if (sound) { paused = false; status.textContent = "English voices + original music."; await setTime(0); }
    else { status.textContent = "Sound off. Captions stay on."; await sync(); }
  }
  async function fullscreen() {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else if (paper.requestFullscreen) await paper.requestFullscreen(); }
    catch { document.getElementById("fullscreen").textContent = "Use browser full screen"; }
  }
  soundButton.addEventListener("click", toggleSound);
  playButton.addEventListener("click", () => { paused = !paused; sync(); });
  document.getElementById("restart").addEventListener("click", () => { paused = false; setTime(0); });
  document.getElementById("fullscreen").addEventListener("click", fullscreen);
  document.getElementById("reel").addEventListener("click", () => setFormat("reel"));
  document.getElementById("feed").addEventListener("click", () => setFormat("feed"));
  seek.addEventListener("input", () => { paused = true; setTime(Number(seek.value)); });
  document.addEventListener("keydown", event => {
    if (event.target.closest("button,input,textarea,select,a") || event.ctrlKey || event.altKey || event.metaKey) return;
    if (event.code === "Space") { event.preventDefault(); paused = !paused; sync(); }
    if (event.key.toLowerCase() === "r") { paused = false; setTime(0); }
    if (event.key.toLowerCase() === "m") toggleSound();
    if (event.key.toLowerCase() === "f") fullscreen();
  });
  document.addEventListener("visibilitychange", sync);
  reduced.addEventListener("change", () => { if (reduced.matches) { paused = true; render(); sync(); } });
  render();
  sync();
  if (fixed) resetAnimationTime();
})();
