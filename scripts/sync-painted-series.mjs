// Copy the editable shared visual system into selected episode templates.
// 将统一视觉源码复制到指定本集模板；不修改 003、005 或任何历史存档。
import {readFile,writeFile,mkdir,cp,copyFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const ids=['001-have-an-idea','002-tiny-feature','004-that-was-a-sentence'];
for(const id of ids){
 const dir=path.join(root,'motion',id),target=path.join(dir,'template-unified');
 await mkdir(target,{recursive:true});await cp(path.join(root,'motion/_painted-series'),target,{recursive:true});
 const audio=id.startsWith('004')?'episode-audio-v002.m4a':'episode-audio-v001.m4a';
 await copyFile(path.join(dir,'template/assets',audio),path.join(target,'assets/episode-score.m4a'));
 let html=await readFile(path.join(target,'index.html'),'utf8');
 if(process.argv.includes('--review'))html=html.replace(/<a id="download"[\s\S]*?<\/a>/,'<a id="download" hidden>Video export in progress</a>');
 else await copyFile(path.join(dir,'previews/unified-painted-review.mp4'),path.join(target,'assets/episode-export.mp4'));
 await writeFile(path.join(target,'index.html'),html);
 console.log('Prepared '+id+(process.argv.includes('--review')?' for temporary render':' with matching MP4'));
}
