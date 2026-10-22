// Prepare episode-local story templates without touching archived files.
// 准备新剧情模板，不覆盖历史版本。
import {readFile,writeFile,mkdir,copyFile,access} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),review=process.argv.includes('--review');
const selectedIndex=process.argv.indexOf('--episode'),selectedId=selectedIndex<0?null:process.argv[selectedIndex+1];
const registration=JSON.parse(await readFile(path.join(root,'motion/_painted-story/frame-registration.json'),'utf8'));
for(const id of ['001-have-an-idea','002-tiny-feature','004-that-was-a-sentence']){
 const dir=path.join(root,'motion',id),cfgPath=path.join(dir,'episode.json'),cfg=JSON.parse(await readFile(cfgPath,'utf8')),target=path.join(dir,'template-story'),assets=path.join(target,'assets'),common=path.join(root,'motion/_painted-story');
 if(selectedId&&id!==selectedId)continue;
 if(cfg.template!==`motion/${id}/template-story`)continue;
 await mkdir(assets,{recursive:true});
 for(const file of ['index.html','style.css','motion.js'])await copyFile(path.join(common,file),path.join(target,file));
 for(const[src,dst]of [[cfg.storyType+'-room-v001.png','episode-room.png'],[cfg.storyType+'-cast-v001.png','episode-cast.png'],['painted-mug-v001.png','painted-mug-v001.png']])await copyFile(path.join(common,'assets',src),path.join(assets,dst));
 await copyFile(path.join(root,'brand/assets/verdent-logo-original.png'),path.join(assets,'verdent-logo-original.png'));
 const raw=path.join(assets,'episode-score-raw.m4a');await access(raw);
 const result=spawnSync('ffmpeg',['-y','-hide_banner','-loglevel','error','-i',raw,'-af','loudnorm=I=-16:TP=-1.5:LRA=7','-c:a','aac','-b:a','192k','-ar','48000','-movflags','+faststart',path.join(assets,'episode-score.m4a')],{encoding:'utf8'});if(result.status!==0)throw Error(result.stderr);
 cfg.voicesAvailable=true;cfg.registration=registration[cfg.storyType];await writeFile(cfgPath,JSON.stringify(cfg,null,2)+'\n');
 let html=await readFile(path.join(target,'index.html'),'utf8');
 if(review)html=html.replace(/<a id="download"[\s\S]*?<\/a>/,'<a id="download" hidden>Export in progress</a>');
 else await copyFile(path.join(dir,cfg.videoExport),path.join(assets,'episode-export.mp4'));
 await writeFile(path.join(target,'index.html'),html);console.log('Prepared '+id+(review?' for review':' with matching movie'));
}
