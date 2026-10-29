// Read-only onboarding checks / 只读接手环境检查；不安装、不联网、不生成成片。
import {createRequire} from 'node:module';
import {existsSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const require=createRequire(import.meta.url),render=process.argv.includes('--render');let failures=0;
function report(ok,name,detail,required=true){console.log(`${ok?'OK':required?'MISSING':'OPTIONAL'}  ${name} · ${detail}`);if(!ok&&required)failures++}
function binary(name,args,required=true){const r=spawnSync(name,args,{encoding:'utf8',timeout:10000});const ok=r.status===0;report(ok,name,ok?(r.stdout||r.stderr).split('\n')[0]:'install and add to PATH / 安装后加入 PATH',required)}
report(Number(process.versions.node.split('.')[0])>=22,'Node',process.version+' · required for build/index / 构建索引必需');
binary('ffprobe',['-version']);
binary('ffmpeg',['-version'],render);
binary('python3',['--version'],false);
if(render){
 try{const {chromium}=require(process.env.RENDER_PLAYWRIGHT_MODULE||'playwright');const executable=chromium.executablePath();report(existsSync(executable),'Playwright Chromium',existsSync(executable)?'browser installed / 浏览器已安装':'run npx playwright install chromium / 请安装浏览器')}catch{report(false,'Playwright','run npm ci / 请安装锁定依赖')}
 try{const sharp=require(process.env.RENDER_SHARP_MODULE||'sharp');report(true,'Sharp',sharp.versions.sharp+' · image QA / 图像检查')}catch{report(false,'Sharp','run npm ci / 请安装锁定依赖')}
}
console.log(failures?'Setup incomplete / 环境尚未齐全':'Ready for '+(render?'rendering and QA / 渲染及审片检查':'index/check / 索引及仓库检查'));
console.log('Watching needs no tooling: open 成片.html locally / 仅观看无需以上工具，本地打开成片入口。');process.exitCode=failures?1:0;
