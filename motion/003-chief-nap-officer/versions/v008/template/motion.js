(() => {
  "use strict";
  const episode = JSON.parse(document.getElementById("episode-config").textContent);
  const element = id => document.getElementById(id);
  const paper = document.querySelector(".paper");
  const audio = element("soundtrack");
  const params = new URLSearchParams(location.search);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const parallel = episode.storyType === "parallel";
  const fixed = params.has("t") && Number.isFinite(Number(params.get("t")));
  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => { const bounded = clamp(value); return bounded * bounded * (3 - 2 * bounded); };
  const easeOut = value => 1 - (1 - clamp(value)) ** 3;
  const range = (time, start, duration = 350) => smooth((time - start) / duration);
  const set = (id, name, value) => element(id).setAttribute(name, String(value));
  const show = (id, value) => set(id, "opacity", value);
  const format = value => "0:" + String(Math.floor(value / 1000)).padStart(2, "0");
  let elapsed = fixed ? Math.max(0, Number(params.get("t"))) % episode.duration : 0;
  let paused = fixed || reduced.matches;
  let sound = false;
  let looping = params.get("once") !== "1";
  let frame = null;
  let previous = performance.now();
  let requestId = 0;
  let activeBeat = -1;

  document.title = "Mochi & Lucky · " + episode.title;
  paper.dataset.story = parallel ? "parallel" : "decompose";
  element("film-title").textContent = episode.title;
  element("film-description").textContent = parallel ? "Lucky starts a company, reveals a parallel team and becomes Chief Nap Officer." : "Lucky's one-sentence idea becomes a task plan. He volunteers for taste testing.";
  element("kicker").textContent = episode.kicker;
  element("episode-mark").textContent = episode.id.slice(1, 3);
  element("footer").textContent = episode.footer;
  element("transcript").textContent = episode.beats.map(beat => beat.speaker + ": " + beat.text).join("\n") + "\n" + element("film-description").textContent;
  element("seek").max = episode.duration - 1;
  audio.volume = .85;
  document.body.classList.toggle("capture", params.get("capture") === "1");
  if (!episode.voicesAvailable) element("audio-status").textContent = "Original music only. Child voices pending connection.";
  if (parallel) {
    element("goal").textContent = "Build our cat café site.";
    ["Homepage", "Menu", "Booking"].forEach((title, index) => {
      const name = ["one", "two", "three"][index];
      element("task-title-" + name).textContent = title;
      element("task-detail-" + name).textContent = "Working";
    });
    element("plan-summary-text").textContent = "Working in parallel.";
  }

  function setFormat(value) {
    const feed = value === "feed";
    paper.dataset.format = value;
    set("film", "viewBox", feed ? "0 0 800 1000" : "0 0 800 1422");
    set("stage-layout", "transform", feed ? "translate(80 205) scale(.8)" : "translate(0 280)");
    set("dialogue-layout", "transform", feed ? "translate(0 -32)" : "translate(0 0)");
    set("footer-layout", "transform", feed ? "translate(0 -430)" : "translate(0 0)");
    set("reel", "aria-pressed", !feed);
    set("feed", "aria-pressed", feed);
  }

  function blink(time, moments) {
    if (reduced.matches) return 0;
    return moments.some(start => time >= start && time < start + 125) ? 1 : 0;
  }

  function render() {
    let index = 0;
    episode.beats.forEach((beat, position) => { if (elapsed >= beat.at) index = position; });
    const beat = episode.beats[index];
    if (index !== activeBeat) {
      element("speaker").textContent = beat.speaker;
      element("line").textContent = beat.text;
      paper.dataset.shot = beat.shot;
      activeBeat = index;
    }
    const acting = reduced.matches ? 0 : 1;
    const poseTime = reduced.matches ? elapsed : Math.floor(elapsed / (1000 / 12)) * (1000 / 12);
    const voiceLength = episode.voiceDurations?.[index] || 1800;
    const speech = range(elapsed, beat.voiceAt, 140) * (1 - range(elapsed, beat.voiceAt + voiceLength - 150, 180));
    const emphasis = Math.sin(Math.PI * clamp((poseTime - beat.voiceAt) / 700)) + .35 * Math.sin(Math.PI * clamp((poseTime - beat.voiceAt - 1150) / 500));
    const nod = emphasis * speech * acting;
    const breath = Math.sin(elapsed / 720) * .004 * acting;
    const startHop = Math.sin(Math.PI * clamp(elapsed / 620)) * 18 * acting;
    const reactionAt = parallel ? 9850 : 8250;
    const surprise = Math.sin(Math.PI * clamp((elapsed - reactionAt) / 620)) * acting;
    const proudBlink = blink(elapsed, [1120, 3550, 6020, 11400]);
    const mochiBlink = blink(elapsed, [1800, 5120, 7080, 10150, 14820]);
    let proud = 1;
    let sheepish = 0;
    let taste = 0;
    let yawn = 0;
    let sleep = 0;
    let amused = 0;
    let panel = 0;
    let paperVisible = 0;
    let paperOpen = 0;
    let cameraX = 0;
    let cameraScale = 1;
    let luckyReach = 0;
    let callout = 0;
    if (parallel) {
      const zoom = 1 - range(elapsed, 2600, 500);
      cameraX = 0;
      cameraScale = .9 + zoom * .018;
      panel = range(elapsed, 5600, 450) * (1 - range(elapsed, 9600, 400));
      paperVisible = panel;
      paperOpen = panel;
      const toSheepish = Number(elapsed >= 9935);
      const toConfident = Number(elapsed >= 12385);
      const toYawn = Number(elapsed >= 14965);
      const toSleep = Number(elapsed >= 15735);
      proud = 1 - toSheepish + toConfident * (1 - toYawn);
      sheepish = toSheepish * (1 - toConfident);
      taste = 0;
      yawn = toYawn * (1 - toSleep);
      sleep = toSleep;
      amused = Number(elapsed >= 16100);
    } else {
      const zoom = 1 - range(elapsed, 2400, 500);
      cameraX = -50 * zoom;
      cameraScale = 1 + zoom * .1;
      paperVisible = range(elapsed, 4600, 300);
      paperOpen = range(elapsed, 10100, 450);
      panel = paperOpen;
      const toSheepish = range(elapsed, 8250, 140);
      const toTaste = range(elapsed, 12600, 140);
      proud = 1 - toSheepish;
      sheepish = toSheepish * (1 - toTaste);
      taste = toTaste;
      amused = range(elapsed, 15300, 150);
      const reachProgress = clamp((elapsed - 12700) / 700);
      luckyReach = (Math.sin(Math.PI * reachProgress) * 28 + easeOut(reachProgress) * 20) * acting;
      callout = range(elapsed, 14300, 280);
    }
    if (reduced.matches) {
      cameraX = 0;
      cameraScale = 1;
    }
    set("camera", "transform", "translate(" + cameraX + " 0) translate(400 780) scale(" + cameraScale + ") translate(-400 -780)");
    const catScale = 1 - (reduced.matches ? Number(panel > .5) : panel) * .22;
    const mochiNod = beat.speaker === "Mochi" ? nod : 0;
    const luckyNod = beat.speaker === "Lucky" ? nod : 0;
    set("mochi-motion", "transform", "translate(200 780) scale(" + catScale + " " + (catScale * (1 + breath)) + ") translate(-200 -780)");
    set("lucky-motion", "transform", "translate(" + (-luckyReach) + " " + (-startHop - surprise * 9) + ") translate(600 780) rotate(" + (surprise * 2.3 - luckyNod * .7) + ") scale(" + catScale + " " + (catScale * (1 - breath)) + ") translate(-600 -780)");
    set("mochi-head", "transform", "rotate(" + (mochiNod * 1.3) + " 230 576)");
    set("lucky-head", "transform", "rotate(" + (-luckyNod * 1.6) + " 610 575)");
    const settle = parallel ? Math.sin(Math.PI * clamp((elapsed - 14880) / 1200)) * acting : 0;
    set("lucky-yawn", "transform", "translate(600 780) scale(" + (1 + settle * .025) + " " + (1 - settle * .025) + ") translate(-600 -780)");
    show("mochi-eyes-open", 1 - mochiBlink);
    show("mochi-eyes-closed", mochiBlink);
    show("lucky-eyes-open", 1 - proudBlink);
    show("lucky-eyes-closed", proudBlink);
    show("mochi-skeptic", 1 - amused);
    show("mochi-amused", amused);
    show("lucky-proud", proud);
    show("lucky-sheepish", sheepish);
    show("lucky-taste", taste);
    show("lucky-yawn", yawn);
    show("lucky-sleep", sleep);
    show("idea-lines", acting * (1 - range(elapsed, 1400, 220)));
    show("reaction-lines", surprise);
    show("sleep-letters", sleep);
    ["one", "two", "three"].forEach((name, position) => {
      set("sleep-" + name, "transform", "translate(0 " + (-Math.sin(elapsed / 650 + position) * 7 * acting) + ")");
    });
    show("plan", paperVisible);
    set("plan", "aria-hidden", paperVisible < .05);
    const arrival = reduced.matches ? 1 : easeOut((elapsed - (parallel ? 5600 : 4600)) / 450);
    set("plan", "transform", "translate(0 " + (1 - arrival) * 18 * acting + ") rotate(" + (-.7 + paperOpen * .7) + " 400 20)");
    show("manager-label", paperOpen);
    show("note-label", parallel ? 0 : 1);
    element("note-label").textContent = paperOpen > .5 ? "THE GOAL" : "THE ENTIRE PLAN";
    set("note-label", "x", 130 + paperOpen * 395);
    set("note-label", "y", 81 - paperOpen * 3);
    ["one", "two", "three"].forEach((name, position) => {
      const start = parallel ? 5840 + position * 135 : 10400 + position * 450;
      const reveal = range(elapsed, start, 300) * (parallel ? panel : 1);
      show("task-" + name, reveal);
      set("task-" + name, "transform", "translate(0 " + ((1 - reveal) * -14 * acting) + ") scale(1 " + (reduced.matches ? 1 : .85 + reveal * .15) + ")");
      const progress = parallel ? 80 + range(elapsed, 5900, 5000) * (200 - position * 35) : 0;
      set("work-" + name, "d", "M180 " + (203 + position * 72) + " h" + progress);
      show("work-" + name, parallel ? 1 : 0);
    });
    show("plan-summary", parallel ? panel : range(elapsed, 11750, 300));
    show("taste-card", callout);
    const cardPop = Math.sin(Math.PI * clamp((elapsed - 14300) / 500)) * 5 * acting;
    set("taste-card", "transform", "translate(0 " + ((1 - callout) * 45) + ") rotate(" + (-cardPop) + " 550 548)");
    show("footer", range(elapsed, episode.footerAt, 500));
    element("seek").value = String(Math.round(elapsed));
    set("seek", "aria-valuetext", (elapsed / 1000).toFixed(1) + " seconds");
    element("time").textContent = format(elapsed) + " / " + format(episode.duration);
  }

  function tick(now) {
    frame = null;
    if (paused || document.hidden) return;
    let next = sound && !audio.paused ? audio.currentTime * 1000 : elapsed + now - previous;
    if (sound && audio.ended) next = episode.duration;
    if (next >= episode.duration) {
      if (looping) {
        elapsed = next % episode.duration;
        if (sound) {
          audio.currentTime = elapsed / 1000;
          if (audio.paused) audio.play().catch(() => { sound = false; });
        }
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
      element("audio-status").textContent = episode.voicesAvailable ? "Child voices + original music." : "Original music only. Child voices pending connection.";
      await setTime(0);
    } else {
      element("audio-status").textContent = "Sound off. Captions stay on.";
      await sync();
    }
  }

  async function recordingView() {
    looping = false;
    sound = true;
    paused = false;
    document.body.classList.toggle("capture", true);
    try { if (paper.requestFullscreen) await paper.requestFullscreen(); } catch {}
    await setTime(0);
  }

  element("sound").addEventListener("click", toggleSound);
  element("play").addEventListener("click", () => { paused = !paused; sync(); });
  element("restart").addEventListener("click", () => { paused = false; looping = true; setTime(0); });
  element("once").addEventListener("click", () => { paused = false; looping = false; setTime(0); });
  element("recording").addEventListener("click", recordingView);
  element("reel").addEventListener("click", () => setFormat("reel"));
  element("feed").addEventListener("click", () => setFormat("feed"));
  element("seek").addEventListener("input", () => { paused = true; setTime(Number(element("seek").value)); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.body.classList.toggle("capture", false);
      return;
    }
    if (event.target.closest("button,input,textarea,select,a") || event.ctrlKey || event.altKey || event.metaKey) return;
    if (event.code === "Space") { event.preventDefault(); paused = !paused; sync(); }
    if (event.key.toLowerCase() === "r") { paused = false; setTime(0); }
    if (event.key.toLowerCase() === "m") toggleSound();
  });
  document.addEventListener("visibilitychange", sync);
  document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && params.get("capture") !== "1") document.body.classList.toggle("capture", false); });
  reduced.addEventListener("change", () => { if (reduced.matches) { paused = true; render(); sync(); } });
  setFormat(params.get("format") === "feed" ? "feed" : "reel");
  render();
  sync();
})();
