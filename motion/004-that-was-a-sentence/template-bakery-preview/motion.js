(() => {
'use strict';
const $=id=>document.getElementById(id),cfg=JSON.parse($('episode-config').textContent),ctx=$('film').getContext('2d'),audio=$('score'),params=new URLSearchParams(location.search),reduced=matchMedia('(prefers-reduced-motion: reduce)');
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x)},between=(a,b)=>t>=a&&t<b,mix=(a,b,p)=>a+(b-a)*p;
let t=Number(params.get('t'))||0,playing=false,sound=false,started=params.has('t')||params.get('capture')==='1',ready=false,previous=0,request=0,mutedByUser=false;
$('title').textContent=cfg.title;document.title='Mochi & Lucky · '+cfg.title;$('seek').max=cfg.duration-1;$('transcript').textContent=cfg.beats.map(b=>b.speaker+': '+b.text).join('\n');$('download').download='Mochi-Lucky-'+cfg.title.replace(/\s+/g,'-')+'.mp4';document.body.classList.toggle('capture',params.get('capture')==='1');
function ellipse(x,y,rx,ry,color){ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill()}
function polygon(points,color,stroke){ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.fillStyle=color;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}}
function label(s,x,y,size=25,align='center',color='#493b2b'){ctx.font=`600 ${size}px Georgia,serif`;ctx.textAlign=align;ctx.fillStyle=color;ctx.fillText(s,x,y)}
function bubble(s,h,a){ctx.save();ctx.globalAlpha=a;ctx.font='600 30px Georgia,serif';const lines=[];let row='';for(const w of s.split(' ')){const v=row?row+' '+w:w;if(ctx.measureText(v).width>320&&row){lines.push(row);row=w}else row=v}lines.push(row);const w=Math.max(...lines.map(x=>ctx.measureText(x).width))+40,hh=lines.length*36+26,x=Math.max(26,Math.min(774-w,h.x-w/2)),y=Math.max(28,h.y-hh-42);window.storyBubbleBounds={x,y,width:w,height:hh,head:h};ctx.shadowColor='#3d2e2225';ctx.shadowBlur=6;ctx.shadowOffsetY=3;polygon([[x+3,y+2],[x+w-3,y],[x+w,y+hh-2],[h.x+13,y+hh],[h.x+1,h.y-14],[h.x-9,y+hh],[x,y+hh]],'#fff1d6','#9b825e');ctx.shadowColor='transparent';lines.forEach((l,i)=>label(l,x+w/2,y+36+i*36,30));ctx.restore()}
// Independent complete paintings: no separated limbs. Authored timings in ms / 整猫独立动作，非拆肢体。
const schedules={
 Lucky:[[0,0],[2600,1],[3200,10],[6100,0],[7380,1],[7540,2],[7700,3],[7860,4],[8020,5],[8180,6],[8380,7],[8720,8],[9200,9],[9500,10],[10100,11],[10400,10],[11100,0],[12700,1],[13700,0],[15000,10],[17400,11],[17700,10],[20000,10]],
 Mochi:[[0,0],[2900,1],[3600,0],[4000,10],[6500,1],[7700,2],[8200,3],[8600,4],[9000,3],[9300,1],[10100,10],[11200,0],[12700,1],[12850,3],[13000,4],[13150,5],[13300,6],[13600,7],[13800,8],[14000,9],[14300,10],[17000,11],[17300,10],[20000,10]]};
const cache={};
function track(name){const arr=schedules[name],i=Math.max(0,arr.findLastIndex(k=>t>=k[0])),a=arr[i],b=arr[Math.min(i+1,arr.length-1)],u=b[0]===a[0]?0:clamp((t-a[0])/(b[0]-a[0]));return{frame:a[1],next:b[1],p:reduced.matches?0:smooth(u)}}
function actorFrame(name,index){const key=name+index;if(cache[key])return cache[key];const f=cfg.registration[name][index],[l,r,top,b]=f.box,pad=1,c=document.createElement('canvas');c.width=r-l+1+pad*2;c.height=b-top+1+pad*2;c.getContext('2d').drawImage($(name),l,top,r-l+1,b-top+1,pad,pad,r-l+1,b-top+1);return cache[key]={image:c,f,ox:l-pad,oy:top-pad}}
// Complete native paintings with fixed floor anchors; no mesh or face stretching / 整猫原稿固定脚底，无网格和面部拉伸。


const luckyMouth=[[120,196],[453,238],[806,268],[1147,265],[98,556],[448,570],[800,600],[1219,580],[112,887],[486,856],[835,858],[1208,854]];
function actor(name){const tr=track(name),a=actorFrame(name,tr.frame),s=1.12,foot={x:name==='Mochi'?215:716,y:842},f=a.f;ellipse(foot.x+4,846,98,11,'#153b4928');ctx.drawImage(a.image,foot.x+(a.ox-f.anchor[0])*s,foot.y+(a.oy-f.anchor[1])*s,a.image.width*s,a.image.height*s);return{head:{x:foot.x+(f.head[0]-f.anchor[0])*s,y:foot.y+(f.box[2]-f.anchor[1])*s-12},face:{x:foot.x+(f.head[0]-f.anchor[0])*s,y:foot.y+(f.head[1]-f.anchor[1])*s},mouth:name==='Lucky'?{x:foot.x+(luckyMouth[tr.frame][0]-f.anchor[0])*s,y:foot.y+(luckyMouth[tr.frame][1]-f.anchor[1])*s}:null,scaleX:s,scaleY:s,frame:tr.frame,paw:{x:foot.x+(f.paw[0]-f.anchor[0])*s,y:foot.y+(f.paw[1]-f.anchor[1])*s}};}
function trayPosition(){return{x:421-42*smooth((t-13300)/500),y:865}}
// Reuses the approved Halloween computer geometry / 复用万圣节已选电脑几何。
// Canvas-painted facets, real hinge/base thickness; original logo or a small illustrative app screen.
function drawVerdentComputer(screen,x,floor,scale,press=0){
 ctx.save();ctx.translate(x,floor);ctx.scale(scale,scale);
 const yaw=-.24,angle=(104+press*2)*Math.PI/180;
 const P=(x,y,z)=>{const X=x*Math.cos(yaw)+z*Math.sin(yaw),Z=z*Math.cos(yaw)-x*Math.sin(yaw),k=1/(1+Z/1050);return[X*k*.74,-y*k*.74+Z*.39*k*.74+press]};
 const face=(v,color,stroke='#465450')=>polygon(v.map(p=>P(...p)),color,stroke);
 ellipse(0,29,118,12,'#182d4030');
 face([[-142,0,91],[142,0,91],[142,18,91],[-142,18,91]],'#6b7366');face([[142,0,91],[142,0,-83],[142,18,-83],[142,18,91]],'#4c5956');face([[-142,18,-83],[142,18,-83],[142,18,91],[-142,18,91]],'#a0a18b','#687365');
 const L=(x,h,depth=0)=>[x,22+Math.sin(angle)*h,-77+Math.cos(angle)*h+depth];
 face([L(-142,0,-8),L(142,0,-8),L(142,195,-8),L(-142,195,-8)],'#596b61');face([L(142,0,-8),L(142,195,-8),L(142,195,0),L(142,0,0)],'#344d4d');face([L(-142,195,-8),L(142,195,-8),L(142,195,0),L(-142,195,0)],'#b6bba0');face([L(-142,0),L(142,0),L(142,195),L(-142,195)],'#657769','#344b4d');
 const q=[P(...L(-128,180,1)),P(...L(128,180,1)),P(...L(128,13,1)),P(...L(-128,13,1))];
 computerTexture(screen,q);
 const a=P(-120,21,-76),b=P(120,21,-76);ctx.strokeStyle='#b8b9a0';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.stroke();
 for(let row=0;row<3;row++)for(let col=0;col<8;col++){const xx=-117+col*30,z=-45+row*28,hit=row===2&&col===7,y=24-(hit?press*3:0);face([[xx,y,z],[xx+23,y,z],[xx+23,y,z+20],[xx,y,z+20]],hit?'#babd96':'#435b54','#82917b')}
 face([[-43,19,51],[43,19,51],[43,19,79],[-43,19,79]],'#87957f','#b4bba0');
 ctx.globalAlpha=.35;ctx.strokeStyle='#e7d5b2';ctx.lineWidth=2;for(let i=0;i<4;i++){const p=P(-133+i*52,19,88),r=P(-104+i*52,19,88);ctx.beginPath();ctx.moveTo(...p);ctx.lineTo(...r);ctx.stroke()}ctx.restore();
}
function computerTexture(im,q){const uv=[[0,0],[im.width,0],[im.width,im.height],[0,im.height]];for(const tri of[[0,1,3],[1,2,3]]){const[p0,p1,p2]=tri.map(i=>q[i]),[u0,u1,u2]=tri.map(i=>uv[i]),det=(u1[0]-u0[0])*(u2[1]-u0[1])-(u2[0]-u0[0])*(u1[1]-u0[1]);const A=((p1[0]-p0[0])*(u2[1]-u0[1])-(p2[0]-p0[0])*(u1[1]-u0[1]))/det,B=((p1[1]-p0[1])*(u2[1]-u0[1])-(p2[1]-p0[1])*(u1[1]-u0[1]))/det,C=((u1[0]-u0[0])*(p2[0]-p0[0])-(u2[0]-u0[0])*(p1[0]-p0[0]))/det,D=((u1[0]-u0[0])*(p2[1]-p0[1])-(u2[0]-u0[0])*(p1[1]-p0[1]))/det;ctx.save();ctx.beginPath();const center=[(p0[0]+p1[0]+p2[0])/3,(p0[1]+p1[1]+p2[1])/3],edge=[p0,p1,p2].map(p=>{const d=Math.hypot(p[0]-center[0],p[1]-center[1]);return[p[0]+(p[0]-center[0])/d*.65,p[1]+(p[1]-center[1])/d*.65]});ctx.moveTo(...edge[0]);ctx.lineTo(...edge[1]);ctx.lineTo(...edge[2]);ctx.closePath();ctx.clip();ctx.transform(A,B,C,D,p0[0]-A*u0[0]-C*u0[1],p0[1]-B*u0[0]-D*u0[1]);ctx.drawImage(im,0,0);ctx.restore()}}
function computerScreen(heading,requests,ready=false){const c=document.createElement('canvas');c.width=640;c.height=430;const s=c.getContext('2d');s.fillStyle='#ece9d1';s.fillRect(0,0,640,430);s.fillStyle='#d7ddc0';s.fillRect(0,0,640,105);s.globalCompositeOperation='multiply';s.drawImage($('brand'),18,5,250,108);s.globalCompositeOperation='source-over';s.font='600 26px Georgia';s.fillStyle='#3c5548';s.fillText(heading,26,147);requests.forEach((v,i)=>{s.fillStyle='#d4dcc1';s.fillRect(25,174+i*66,590,52);s.fillStyle='#3d5547';s.font='27px Georgia';s.fillText(v,41,210+i*66)});if(ready){s.fillStyle='#52705a';s.fillRect(25,357,590,51);s.fillStyle='#fff3d3';s.font='600 25px Georgia';s.fillText('Preview ready',42,391)}return c;}
function computerTable(x,y,width=270){polygon([[x-width/2,y],[x+width/2,y-5],[x+width/2+14,y+20],[x-width/2-13,y+23]],'#bc8952','#8d623e');polygon([[x-width/2-13,y+23],[x+width/2+14,y+20],[x+width/2+9,y+35],[x-width/2-9,y+38]],'#976d43','#805a38');polygon([[x-width*.40,y+34],[x-width*.31,y+34],[x-width*.36,850],[x-width*.43,850]],'#a77747','#805a38');polygon([[x+width*.34,y+34],[x+width*.42,y+34],[x+width*.44,850],[x+width*.37,850]],'#9b7147','#805a38');ctx.strokeStyle='#dcac70';ctx.lineWidth=3;for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(x-width*.4+i*31,y+5);ctx.lineTo(x-width*.3+i*31,y+11);ctx.stroke()}}

const bakeryScreens=[];
function props(){const step=t<2500?0:t<3450?1:2,key=step;if(!bakeryScreens[key]){const c=computerScreen(step===0?'Build our bakery site':step===1?'Building preview…':'THE TINY BAKERY',[],false),s=c.getContext('2d');
 if(step===2){s.fillStyle='#f3d49b';s.fillRect(25,170,590,170);for(let i=0;i<3;i++){s.fillStyle='#c18a43';s.beginPath();s.ellipse(160+i*156,249,49,35,0,0,Math.PI*2);s.fill();s.fillStyle='#725538';for(let j=0;j<6;j++){s.beginPath();s.arc(160+i*156+Math.cos(j*2.3)*29,246+Math.sin(j*2.3)*19,5,0,Math.PI*2);s.fill()}}s.fillStyle='#52705a';s.fillRect(25,357,590,51);s.fillStyle='#fff3d3';s.font='600 29px Georgia';s.fillText('Preview ready · Test website',42,391)}else{s.fillStyle='#82947a';for(let i=0;i<3;i++)s.fillRect(26,190+i*53,step===0?230:430-i*70,22)}bakeryScreens[key]=c;}
 computerTable(426,687,240);drawVerdentComputer(bakeryScreens[key],426,650,1.05,0);}

function cookie(x,y,angle=0){ctx.save();ctx.translate(x,y);ctx.rotate(angle);ellipse(0,0,23,10,'#b47e3d');ellipse(-1,-3,23,11,'#e4b465');for(let i=0;i<11;i++){const a=i*2.4,r=4+(i%3)*5;ellipse(Math.cos(a)*r,Math.sin(a)*r*.38-4,2,1.5,i%2?'#976535':'#f2d08b')}ctx.restore()}
// The first cookie stays on the tray until a connected whole-cat reach touches it.
// Pickup, carry and bite follow the native paw and face landmarks / 碰到后才拿起，沿原稿爪与嘴送入口。
function snack(lucky,tray){const pickup=8180,bite=9090;let carried=null;
 if(t>=pickup&&t<bite){let x=lucky.paw.x,y=lucky.paw.y-5;if(t>=8860){const u=smooth((t-8860)/(bite-8860));x=mix(x,lucky.mouth.x,u);y=mix(y,lucky.mouth.y,u)}cookie(x,y,Math.min(.7,(t-pickup)/1000));carried={x,y};}
 if(!reduced.matches&&t>=bite&&t<9900){const u=(t-bite)/810;for(let i=0;i<4;i++)ellipse(lucky.mouth.x-3+i*7+(i-1)*u*14,lucky.mouth.y+u*u*124+i*4,3,2,'#d5a461')}
 return{remaining:t<pickup?3:2,carried,bite: t>=bite,contactDistance:t>=pickup&&t<8380?Math.hypot(lucky.paw.x-359,lucky.paw.y-826):null};}
function render(){if(!ready)return;window.storyBubbleBounds=null;ctx.clearRect(0,0,800,1000);ctx.drawImage($('room'),0,0,800,1000);props();const tray=trayPosition();ellipse(tray.x,tray.y,127,13,'#173b5433');ctx.drawImage($('tray'),158,210,1470,515,tray.x-145,tray.y-87,290,102);
 // Stationary biscuits behind the cat's connected reaching paw / 静止饼干位于伸爪后层。
 for(let i=0;i<3;i++)if(i!==0||t<8180)cookie(tray.x-62+i*61,tray.y-39,i*.12);
 const mochi=actor('Mochi'),lucky=actor('Lucky');
 // Draw only the carried cookie after the paw; the untouched cookies keep proper occlusion.
 const snacking=snack(lucky,tray);ctx.drawImage($('tray'),158,595,1470,130,tray.x-145,tray.y-87+385*102/515,290,130*102/515);
 const beat=cfg.beats.filter(b=>b.at<=t).at(-1);if(beat&&t<beat.captionUntil){const h=beat.speaker==='Mochi'?mochi.head:lucky.head;bubble(beat.text,h,reduced.matches?1:Math.min(clamp((t-beat.at)/100),clamp((beat.captionUntil-t)/150)))}
 if(t>=19000)label('Mochi & Lucky',400,967,22,'center','#f8ecd9');window.actingState={time:t,Mochi:mochi,Lucky:lucky,tray,snacking,websiteReady:t>=3450};
 $('seek').value=Math.floor(t);$('time').textContent=(t/1000).toFixed(1)+' / '+cfg.duration/1000+'s';$('play').textContent=playing?'Pause':started?'Play':'Play with sound';$('sound').textContent=sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',sound);$('start').hidden=started||params.get('capture')==='1';}

async function sync(){const q=++request;if(sound&&playing&&!document.hidden){try{audio.currentTime=t/1000;await audio.play();if(q!==request&&(!playing||!sound))audio.pause()}catch{if(q===request){sound=false;playing=false;$('status').textContent='Tap Play with sound to retry.';started=false}}}else audio.pause();previous=performance.now();render()}
function seek(value){++request;t=Math.max(0,Math.min(cfg.duration-1,Number(value)||0));playing=false;started=true;audio.pause();audio.currentTime=t/1000;render()}
function start(){if(!ready)return;started=true;sound=true;mutedByUser=false;playing=true;t=0;sync()}
function tick(now){if(ready&&playing&&!document.hidden){t=sound&&!audio.paused?audio.currentTime*1000:t+Math.min(100,now-previous);if(t>=cfg.duration||sound&&audio.ended){t=cfg.duration-1;playing=false;audio.pause()}render()}previous=now;requestAnimationFrame(tick)}
$('start').onclick=start;$('play').onclick=()=>{if(!started)return start();if(t>=cfg.duration-2)t=0;playing=!playing;if(playing&&!mutedByUser)sound=true;sync()};$('sound').onclick=()=>{if(!started)return start();sound=!sound;mutedByUser=!sound;sync()};$('replay').onclick=()=>{started=true;t=0;playing=true;if(!mutedByUser)sound=true;sync()};$('seek').oninput=e=>seek(e.target.value);$('full').onclick=async()=>{try{await document.querySelector('.paper').requestFullscreen?.()}catch{}};document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',()=>{if(reduced.matches){playing=false;sync()}render()});document.addEventListener('keydown',e=>{if(e.target.closest('button,input,a,summary')||e.metaKey||e.ctrlKey||e.altKey)return;if(e.code==='Space'){e.preventDefault();$('play').click()}if(e.key.toLowerCase()==='r')$('replay').click();if(e.key.toLowerCase()==='m')$('sound').click()});
window.paintedPlayer={get ready(){return ready},get time(){return t},get playing(){return playing},seek};
Promise.all(['room','Mochi','Lucky','tray','brand'].map(id=>$(id).decode())).then(()=>{ready=true;render();previous=performance.now();requestAnimationFrame(tick)}).catch(()=>{$('status').textContent='Artwork failed to load. Reopen the complete HTML file.'});
})();
