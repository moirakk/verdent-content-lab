import {readFile,readdir,access,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createReadStream} from 'node:fs';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),errors=[];
const exists=async p=>{try{await access(p);return true}catch{return false}};
const hash=b=>createHash('sha256').update(b).digest('hex');
const rows=JSON.parse(await readFile(path.join(root,'episodes.json'),'utf8'));let archives=0,links=0;
const currentTemplates=[];
for(const e of rows.episodes){const base=path.join(root,'motion',e.id),cfg=JSON.parse(await readFile(path.join(base,'episode.json'),'utf8')),html=await readFile(path.join(base,'index.html')),history=JSON.parse(await readFile(path.join(base,'versions/index.json'),'utf8')),selected=history.find(h=>h.sha256===hash(html));currentTemplates.push(cfg.template);
 if(!selected)errors.push(e.id+': current HTML not archived');if(!html.equals(await readFile(path.join(root,'docs/motion',e.id,'index.html'))))errors.push(e.id+': docs differs');const embedded=JSON.parse(html.toString().match(/<script id="episode-config" type="application\/json">([\s\S]*?)<\/script>/)[1]);if(cfg.voicesAvailable!==embedded.voicesAvailable||Boolean(cfg.voicesAvailable)!==e.voicesAvailable)errors.push(e.id+': voice flags differ');
 for(const h of history){const p=path.join(base,'versions',h.version,'index.html'),b=await readFile(p);if(hash(b)!==h.sha256)errors.push(e.id+'/'+h.version+': archive hash differs');if(!b.equals(await readFile(path.join(root,'docs/motion',e.id,'versions',h.version,'index.html'))))errors.push(e.id+'/'+h.version+': archive mirror differs');archives++}
 const check=spawnSync(process.execPath,['--check',path.join(root,cfg.template,'motion.js')],{encoding:'utf8'});if(check.status!==0)errors.push(e.id+': current JS syntax error');
 if(!await exists(path.join(root,e.video)))errors.push(e.id+': missing MP4');else{const probe=spawnSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name','-of','json',path.join(root,e.video)],{encoding:'utf8'});if(probe.error?.code==='ENOENT')errors.push('ffprobe required for media checks');else if(probe.status!==0)errors.push(e.id+': video probe failed');else{const p=JSON.parse(probe.stdout);if(Math.abs(Number(p.format.duration)-cfg.duration/1000)>.12)errors.push(e.id+': duration mismatch');for(const codec of ['h264','aac'])if(!p.streams.some(s=>s.codec_name===codec))errors.push(e.id+': missing '+codec)}}
 if(selected&&e.video){const copy=path.join(root,'docs/media',e.id+'-'+selected.version+'.mp4');if(!await exists(copy)||hash(await readFile(copy))!==hash(await readFile(path.join(root,e.video))))errors.push(e.id+': library video differs')}
}
async function walk(dir){const out=[];for(const e of await readdir(path.join(root,dir),{withFileTypes:true})){if(['.git','node_modules','.venv','__pycache__','.cache','archive'].includes(e.name))continue;const p=path.posix.join(dir,e.name);if(/\/versions\/v\d{3}(\/|$)/.test(p))continue;if(e.isDirectory())out.push(...await walk(p));else if(e.name.endsWith('.md'))out.push(p)}return out}
for(const file of await walk('')){if(/\/template[^/]*\//.test(file)&&!currentTemplates.some(t=>file.startsWith(t+'/')))continue;const text=await readFile(path.join(root,file),'utf8');for(const match of text.matchAll(/\]\(([^)]+)\)/g)){let target=match[1];if(target.includes('://')||target.startsWith('#')||target.startsWith('mailto:'))continue;target=target.split('#')[0].replace(/^<|>$/g,'').replace(/:\d+$/,'');if(target&&!await exists(path.resolve(root,path.dirname(file),target)))errors.push(file+': missing link '+target);links++}}
const inventory=JSON.parse(await readFile(path.join(root,'inventory/episodes.json'),'utf8'));for(const e of inventory.episodes){const cfg=JSON.parse(await readFile(path.join(root,e.config),'utf8'));if(cfg.template!==e.template||hash(await readFile(path.join(root,e.html)))!==e.sha256)errors.push(e.id+': stale inventory; run npm run index')}

const assets=JSON.parse(await readFile(path.join(root,'inventory/assets.json'),'utf8'));let mediaLocations=0;
for(const asset of assets.assets){if(!asset.locations.some(l=>l.path===asset.canonicalPath))errors.push('Invalid canonical media path');for(const loc of asset.locations){mediaLocations++;const file=path.join(root,loc.path);if(!await exists(file)){errors.push('Missing catalogued media '+loc.path);continue}if((await stat(file)).size!==asset.bytes)errors.push('Stale media size '+loc.path);if(process.argv.includes('--assets')){const h=createHash('sha256');for await(const chunk of createReadStream(file))h.update(chunk);if(h.digest('hex')!==asset.sha256)errors.push('Media hash differs '+loc.path)}}}
for(const asset of assets.assets)if(asset.locations.some(l=>l.path==='characters/references/mochi-and-lucky-original.jpeg')&&asset.locations.some(l=>l.path.startsWith('docs/')))errors.push('Private original photo copied into docs');

if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`PASS: ${rows.episodes.length} current films, ${archives} immutable HTML archives, audio/video, ${mediaLocations} media copies, current JS and ${links} Markdown links.`);
