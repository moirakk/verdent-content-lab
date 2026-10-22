import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.resolve(root, process.argv[2] || "motion/001-have-an-idea/episode.json");
const episode = JSON.parse(await readFile(configPath, "utf8"));
if (!/^\d{3}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(episode.id)) throw new Error("Episode id must look like 001-have-an-idea");
if (!Number.isFinite(episode.duration) || episode.duration <= 0) throw new Error("Duration must be positive");
for (const field of ["title", "kicker", "footer"]) {
  if (typeof episode[field] !== "string" || !episode[field].trim()) throw new Error(`Missing ${field}`);
}
if (!Array.isArray(episode.beats) || episode.beats.length === 0) throw new Error("At least one beat is required");
episode.beats.forEach((beat, index) => {
  if (!Number.isFinite(beat.at) || beat.at < 0 || beat.at >= episode.duration || (index === 0 && beat.at !== 0) || (index > 0 && beat.at <= episode.beats[index - 1].at)) throw new Error("Beat times must start at zero, increase, and fit the duration");
  if (!["Mochi", "Lucky"].includes(beat.speaker) || typeof beat.text !== "string" || !beat.text.trim()) throw new Error("Each beat needs a character and text");
  if (/\b(sis|bro)\b/i.test(beat.text)) throw new Error("Dialogue must use character names");
});
const template = path.resolve(root, episode.template || "motion/_template");
if (!template.startsWith(path.join(root, "motion") + path.sep)) throw new Error("Template must be inside motion/");
const [html, css, javascript] = await Promise.all(["index.html", "style.css", "motion.js"].map(file => readFile(path.join(template, file), "utf8")));
const frozenSource = { "index.html": html, "style.css": css, "motion.js": javascript };
const syntax = spawnSync(process.execPath, ["--check", path.join(template, "motion.js")], { encoding: "utf8" });
if (syntax.status !== 0) throw new Error("Template JavaScript is invalid; no output was archived.\n" + syntax.stderr);
let hydratedHtml = html;
for (const match of html.matchAll(/asset:([a-zA-Z0-9._-]+\.(png|webp|jpe?g|m4a|mp3|mp4|wav|ogg))/g)) {
  const asset = match[1];
  const bytes = await readFile(path.join(template, "assets", asset));
  const mimeTypes = { png:"image/png", webp:"image/webp", jpg:"image/jpeg", jpeg:"image/jpeg", m4a:"audio/mp4", mp3:"audio/mpeg", mp4:"video/mp4", wav:"audio/wav", ogg:"audio/ogg" };
  hydratedHtml = hydratedHtml.replaceAll(`asset:${asset}`, `data:${mimeTypes[match[2]]};base64,${bytes.toString("base64")}`);
  frozenSource[`assets/${asset}`] = bytes;
}
const safeJson = JSON.stringify(episode).replace(/</g, "\\u003c");
const escapeHtml = value => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const output = hydratedHtml
  .replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${css}\n</style>`)
  .replace('<script src="motion.js"></script>', () => `<script>\n${javascript}\n</script>`)
  .replace(/<script id="episode-config" type="application\/json">[\s\S]*?<\/script>/, () => `<script id="episode-config" type="application/json">${safeJson}</script>`)
  .replace(/<title>.*?<\/title>/, () => `<title>Mochi &amp; Lucky · ${escapeHtml(episode.title)}</title>`)
  .replace(/(<p class="kicker" id="kicker">).*?(<\/p>)/, (_, start, end) => `${start}${escapeHtml(episode.kicker)}${end}`)
  .replace(/(<p class="speaker" id="speaker">).*?(<\/p>)/, (_, start, end) => `${start}${escapeHtml(episode.beats[0].speaker)}${end}`)
  .replace(/(<h1 id="line">).*?(<\/h1>)/, (_, start, end) => `${start}${escapeHtml(episode.beats[0].text)}${end}`)
  .replace(/(<p id="footer">).*?(<\/p>)/, (_, start, end) => `${start}${escapeHtml(episode.footer)}${end}`);
const episodeDirectory = path.join(root, "motion", episode.id);
const previewDirectory = path.join(root, "docs/motion", episode.id);
const versionsDirectory = path.join(episodeDirectory, "versions");
const historyPath = path.join(versionsDirectory, "index.json");
async function readOptional(file) {
  try { return await readFile(file, "utf8"); }
  catch (error) { if (error.code === "ENOENT") return null; throw error; }
}
async function writeImmutable(file, content) {
  try { await writeFile(file, content, { flag: "wx" }); }
  catch (error) {
    if (error.code !== "EEXIST" || !(await readFile(file)).equals(Buffer.isBuffer(content) ? content : Buffer.from(content))) throw error;
  }
}
const history = JSON.parse(await readOptional(historyPath) || "[]");
await mkdir(versionsDirectory, { recursive: true });
async function archive(content, source) {
  const sha256 = createHash("sha256").update(content).digest("hex");
  if (history.some(entry => entry.sha256 === sha256)) return;
  const version = `v${String(history.length + 1).padStart(3, "0")}`;
  const directory = path.join(versionsDirectory, version);
  await mkdir(directory);
  await writeImmutable(path.join(directory, "index.html"), content);
  const embedded = content.match(/<script id="episode-config" type="application\/json">([\s\S]*?)<\/script>/);
  const archivedEpisode = embedded ? JSON.parse(embedded[1]) : null;
  if (archivedEpisode) await writeImmutable(path.join(directory, "episode.json"), JSON.stringify(archivedEpisode, null, 2) + "\n");
  if (source) {
    await mkdir(path.join(directory, "template"));
    for (const [name, value] of Object.entries(source)) {
      const destination = path.join(directory, "template", name);
      await mkdir(path.dirname(destination), { recursive:true });
      await writeImmutable(destination, value);
    }
  }
  const previewVersion = path.join(previewDirectory, "versions", version);
  await mkdir(previewVersion, { recursive: true });
  await writeImmutable(path.join(previewVersion, "index.html"), content);
  history.push({ version, capturedAt: new Date().toISOString(), sha256, source: source ? "generated-with-template" : "captured-existing-html", note: archivedEpisode?.note || "", title: archivedEpisode?.title || episode.title });
  await writeFile(historyPath, JSON.stringify(history, null, 2) + "\n");
  process.stdout.write(`Preserved ${episode.id}/${version}\n`);
}
const existing = await readOptional(path.join(episodeDirectory, "index.html"));
if (existing !== null) await archive(existing, null);
await archive(output, frozenSource);
const activeHash = createHash("sha256").update(output).digest("hex");
const active = history.find(entry => entry.sha256 === activeHash);
const rows = history.map(entry => `<li><a href="${entry.version}/index.html">${entry.version} · ${escapeHtml(entry.title)}</a>${entry.sha256 === activeHash ? " · current" : ""}${entry.note ? `<p>${escapeHtml(entry.note)}</p>` : ""}<small>Saved ${escapeHtml(entry.capturedAt)}</small></li>`).join("\n");
const historyHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(episode.title)} · Versions</title><style>body{max-width:760px;margin:8vh auto;padding:0 7vw;background:#f3eddf;color:#302e2a;font:17px/1.7 system-ui,sans-serif}a{color:#4f6547}li{margin:24px 0}small{color:#817865}p{margin:4px 0}</style></head><body><p>Mochi &amp; Lucky · Motion archive</p><h1>${escapeHtml(episode.title)}</h1><p>Every saved HTML stays available. Version numbers follow archive order.</p><p><a href="../index.html">Open current version (${active.version})</a></p><ul>${rows}</ul></body></html>\n`;
for (const directory of [versionsDirectory, path.join(previewDirectory, "versions")]) {
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), historyHtml);
}
for (const directory of [episodeDirectory, previewDirectory]) {
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), output);
  process.stdout.write(`Built ${path.relative(root, directory)}/index.html\n`);
}
