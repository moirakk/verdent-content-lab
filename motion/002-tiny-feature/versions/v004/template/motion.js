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
function state(){
 if(cfg.storyType==='box'){
  if(t<4550)return{pose:0,heads:[[.25,.20],[.74,.31]]};if(t<5000)return{pose:1,heads:[[.25,.20],[.67,.32]]};if(t<5500)return{pose:2,heads:[[.25,.18],[.63,.46]]};if(t<8650)return{pose:3,heads:[[.25,.20],[.70,.30]]};if(t<12450)return{pose:4,heads:[[.43,.21],[.74,.35]]};if(t<13100)return{pose:5,heads:[[.48,.24],[.75,.33]]};if(t<14300)return{pose:6,heads:[[.46,.29],[.72,.32]]};return{pose:7,heads:[[.43,.31],[.72,.34]]};
 }
 if(cfg.storyType==='coffee'){
  if(t<3400)return{pose:0,heads:[[.24,.20],[.71,.31]]};if(t<5450)return{pose:1,heads:[[.24,.20],[.73,.31]]};if(t<6800)return{pose:2,heads:[[.25,.24],[.71,.27]]};if(t<8300)return{pose:3,heads:[[.27,.39],[.73,.23]]};if(t<11800)return{pose:4,heads:[[.25,.20],[.72,.30]]};if(t<13100)return{pose:5,heads:[[.30,.18],[.73,.32]]};if(t<15100)return{pose:6,heads:[[.28,.20],[.71,.57]]};return{pose:7,heads:[[.29,.26],[.74,.15]]};
 }
 if(t<3000)return{pose:0,heads:[[.26,.20],[.73,.30]]};if(t<5950)return{pose:1,heads:[[.26,.20],[.73,.23]]};if(t<8600)return{pose:2,heads:[[.26,.39],[.73,.23]]};if(t<9000)return{pose:3,heads:[[.26,.20],[.73,.32]]};if(t<12000)return{pose:4,heads:[[.26,.20],[.73,.32]]};if(t<15400)return{pose:5,heads:[[.28,.22],[.75,.32]]};if(t<18100)return{pose:6,heads:[[.27,.20],[.73,.50]]};return{pose:7,heads:[[.27,.20],[.74,.35]]};
}
function camera(){let shots;if(cfg.storyType==='box')shots=[[0,1.04,400,590],[3000,1.12,310,560],[4500,1,400,590],[5500,1.12,470,610],[8650,1.03,400,590],[12450,1,400,590],[14500,1.12,435,650]];else if(cfg.storyType==='coffee')shots=[[0,1.08,390,600],[3400,1.12,300,560],[5700,1.02,400,610],[8700,1.07,440,580],[11800,1,400,590],[15100,1.04,435,610]];else shots=[[0,1.12,420,635],[3000,1.12,495,580],[5950,1.06,370,670],[9000,1.10,470,580],[12000,1,400,590],[15400,1.07,430,610],[18100,1.04,410,640]];
 let i=shots.findLastIndex(s=>t>=s[0]);const a=shots[Math.max(0,i-1)],b=shots[i],p=reduced.matches?1:smooth((t-b[0])/240),z=reduced.matches?1:mix(a[1],b[1],p),fx=mix(a[2],b[2],p),fy=mix(a[3],b[3],p);return{z,x:Math.max(800*(1-z),Math.min(0,400-fx*z)),y:Math.max(1000*(1-z),Math.min(0,600-fy*z))};
}
function cast(st){const sheet=cfg.registration,f=sheet.frames[st.pose],cw=sheet.cw,ch=sheet.ch,s=cfg.storyType==='box'?1.50:1.52,x=cfg.storyType==='box'?62:63,baseline=cfg.storyType==='box'?865:844;
 // Preserve the complete painting's native proportions / 保留整张原稿比例。
 const top=Math.max(0,f.t),dy=baseline-(f.b-top)*s,sy=Math.floor(st.pose/4)*ch+top;ctx.drawImage($('cast'),st.pose%4*cw,sy,cw,f.b-top+2,x,dy,cw*s,(f.b-top+2)*s);
 const head={};['Mochi','Lucky'].forEach((who,i)=>{const q=st.heads[i];head[who]={x:x+q[0]*cw*s,y:dy+(f.headY[i]-f.t)*s+20}});return head;
}
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

function cup(){const stages=[{at:0,size:125,x:178},{at:7000,size:205,x:192},{at:10150,size:290,x:212},{at:13900,size:420,x:235}],i=stages.findLastIndex(s=>t>=s.at),stage=stages[i];let x=stage.x,y=948,angle=0;
 if(i>0&&!reduced.matches){const u=clamp((t-stage.at)/650),p=1-Math.pow(1-u,3);x=mix(-stage.size*.6,stage.x,p);if(u>.6)angle=Math.sin((u-.6)*15)*Math.exp(-(u-.6)*8)*.026;const prior=stages[i-1];if(u<.95)drawCup(prior.x+u*900,948,prior.size,u*.12);}
 drawCup(x,y,stage.size,angle);
 // Two short rising steam wisps, bounded above the current cup / 蒸汽只出现在杯口上方。
 if(!reduced.matches){ctx.strokeStyle='#f5eed999';ctx.lineWidth=3;for(let k=0;k<2;k++){const xx=x-stage.size*.15+k*stage.size*.12,yy=y-stage.size*.91;ctx.beginPath();ctx.moveTo(xx,yy);ctx.bezierCurveTo(xx-18,yy-20,xx+Math.sin(t/700+k)*14,yy-40,xx-3,yy-62);ctx.stroke();}}
}
function drawCup(x,y,size,angle){ctx.save();ctx.translate(x,y);ctx.rotate(angle);ellipse(0,2,size*.33,11,'#153b4933');ctx.drawImage($('mug'),-size*.45,-size,size,size);ctx.restore()}

const coffeeScreens=[];
function requestComputer(){const count=t<2700?0:t<6900?1:t<10050?2:3,replying=(t>=2200&&t<2700)||(t>=6400&&t<6900)||(t>=9550&&t<10050),key=count+'-'+replying;
 if(!coffeeScreens[key])coffeeScreens[key]=computerScreen(replying?'Updating plan…':count?'Feature plan':'Listening…',['✓ Tiny feature','✓ Add login','✓ Add payments'].slice(0,count));
 // On the rug, below both faces; the coffee grows in the separate left foreground / 电脑在地毯前景，低于两张脸，咖啡在左侧升级。
 drawVerdentComputer(coffeeScreens[key],555,865,1.12,0);window.coffeeState={time:t,requests:count,replying,computer:{x:555,floor:865},cup: t<7000?125:t<10150?205:t<13900?290:420};}
function sceneProps(){cup();}
function render(){if(!ready)return;window.storyBubbleBounds=null;ctx.clearRect(0,0,800,1000);const cam=camera(),st=state();ctx.save();ctx.translate(cam.x,cam.y);ctx.scale(cam.z,cam.z);ctx.drawImage($('room'),0,0,800,1000);ellipse(400,cfg.storyType==='box'?858:841,285,22,'#173b5428');const heads=cast(st);requestComputer();sceneProps();ctx.restore();
 const beat=cfg.beats.filter(b=>b.at<=t).at(-1);if(beat&&t<beat.captionUntil){const h=heads[beat.speaker],screenHead={x:h.x*cam.z+cam.x,y:h.y*cam.z+cam.y},alpha=reduced.matches?1:Math.min(clamp((t-beat.at)/100),clamp((beat.captionUntil-t)/150));bubble(beat.text,screenHead,alpha)}
 $('seek').value=Math.floor(t);$('time').textContent=(t/1000).toFixed(1)+' / '+cfg.duration/1000+'s';$('play').textContent=playing?'Pause':started?'Play':'Play with sound';$('sound').textContent=sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',sound);$('start').hidden=started||params.get('capture')==='1';}
async function sync(){const q=++request;if(sound&&playing&&!document.hidden){try{audio.currentTime=t/1000;await audio.play();if(q!==request&&(!playing||!sound))audio.pause()}catch{if(q===request){sound=false;playing=false;$('status').textContent='Tap Play with sound to retry.';started=false}}}else audio.pause();previous=performance.now();render()}
function seek(value){++request;t=Math.max(0,Math.min(cfg.duration-1,Number(value)||0));playing=false;started=true;audio.pause();audio.currentTime=t/1000;render()}
function start(){if(!ready)return;started=true;sound=true;mutedByUser=false;playing=true;t=0;sync()}
function tick(now){if(ready&&playing&&!document.hidden){t=sound&&!audio.paused?audio.currentTime*1000:t+Math.min(100,now-previous);if(t>=cfg.duration||sound&&audio.ended){t=cfg.duration-1;playing=false;audio.pause()}render()}previous=now;requestAnimationFrame(tick)}
$('start').onclick=start;$('play').onclick=()=>{if(!started)return start();if(t>=cfg.duration-2)t=0;playing=!playing;if(playing&&!mutedByUser)sound=true;sync()};$('sound').onclick=()=>{if(!started)return start();sound=!sound;mutedByUser=!sound;sync()};$('replay').onclick=()=>{started=true;t=0;playing=true;if(!mutedByUser)sound=true;sync()};$('seek').oninput=e=>seek(e.target.value);$('full').onclick=async()=>{try{await document.querySelector('.paper').requestFullscreen?.()}catch{}};document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',()=>{if(reduced.matches){playing=false;sync()}render()});document.addEventListener('keydown',e=>{if(e.target.closest('button,input,a,summary')||e.metaKey||e.ctrlKey||e.altKey)return;if(e.code==='Space'){e.preventDefault();$('play').click()}if(e.key.toLowerCase()==='r')$('replay').click();if(e.key.toLowerCase()==='m')$('sound').click()});
window.paintedPlayer={get ready(){return ready},get time(){return t},get playing(){return playing},seek};
Promise.all(['room','cast','mug','brand'].map(id=>$(id).decode())).then(()=>{ready=true;render();previous=performance.now();requestAnimationFrame(tick)}).catch(()=>{$('status').textContent='Artwork failed to load. Reopen the complete HTML file.'});
})();
