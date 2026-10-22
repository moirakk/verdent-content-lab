(() => {
'use strict';
const $=id=>document.getElementById(id),cfg=JSON.parse($('episode-config').textContent),ctx=$('film').getContext('2d'),audio=$('score'),params=new URLSearchParams(location.search),reduced=matchMedia('(prefers-reduced-motion: reduce)');
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x)},between=(a,b)=>t>=a&&t<b,mix=(a,b,p)=>a+(b-a)*p;
let t=Number(params.get('t'))||0,playing=false,sound=false,started=params.has('t')||params.get('capture')==='1',ready=false,previous=0,request=0,mutedByUser=false;
$('title').textContent=cfg.title;document.title='Mochi & Lucky · '+cfg.title;$('seek').max=cfg.duration-1;$('transcript').textContent=cfg.beats.map(b=>b.speaker+': '+b.text).join('\n');$('download').download='Mochi-Lucky-'+cfg.title.replace(/\s+/g,'-')+'.mp4';document.body.classList.toggle('capture',params.get('capture')==='1');
function ellipse(x,y,rx,ry,color){ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill()}
function polygon(points,color,stroke){ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.fillStyle=color;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}}
function label(s,x,y,size=25,align='center',color='#493b2b'){ctx.font=`600 ${size}px Georgia,serif`;ctx.textAlign=align;ctx.fillStyle=color;ctx.fillText(s,x,y)}
function bubble(s,h,a){ctx.save();ctx.globalAlpha=a;ctx.font='600 30px Georgia,serif';const lines=[];let row='';for(const w of s.split(' ')){const v=row?row+' '+w:w;if(ctx.measureText(v).width>320&&row){lines.push(row);row=w}else row=v}lines.push(row);const w=Math.max(...lines.map(x=>ctx.measureText(x).width))+40,hh=lines.length*36+26,x=Math.max(26,Math.min(774-w,h.x-w/2)),y=Math.max(28,h.y-hh-42);ctx.shadowColor='#3d2e2225';ctx.shadowBlur=6;ctx.shadowOffsetY=3;polygon([[x+3,y+2],[x+w-3,y],[x+w,y+hh-2],[h.x+13,y+hh],[h.x+1,h.y-14],[h.x-9,y+hh],[x,y+hh]],'#fff1d6','#9b825e');ctx.shadowColor='transparent';lines.forEach((l,i)=>label(l,x+w/2,y+36+i*36,30));ctx.restore()}
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
 let impact=0;const cues=cfg.storyType==='box'?[5150,12900,13600]:cfg.storyType==='coffee'?[12600]:[3100,9100];if(!reduced.matches)for(const c of cues){const u=(t-c)/1000;if(u>=0&&u<.45)impact+=Math.sin(u*18)*Math.exp(-u*9)*.008;}
 const dy=baseline-(f.b-f.t)*s,sy=Math.floor(st.pose/4)*ch+f.t;ctx.save();ctx.translate(x,baseline);ctx.scale(1,1+impact);ctx.translate(-x,-baseline);ctx.drawImage($('cast'),st.pose%4*cw,sy,cw,f.b-f.t+2,x,dy,cw*s,(f.b-f.t+2)*s);ctx.restore();

 // Official unmodified bitmap stamped onto the box face / 原版标志随箱面定位。
 if(cfg.storyType==='box'&&cfg.boxBrand){const stamps=[[246,348],[248,347],[254,355],[253,349],[249,306],[243,306],[260,310],[258,310]],p=stamps[st.pose];ctx.save();ctx.globalCompositeOperation='multiply';ctx.globalAlpha=.57;ctx.translate(x+p[0]*s,baseline+(p[1]-f.b)*s);ctx.transform(s,-.13*s,0,s,0,0);ctx.drawImage($('brand'),0,0,96,41.53);ctx.restore();}
 const head={};['Mochi','Lucky'].forEach((who,i)=>{const q=st.heads[i];head[who]={x:x+q[0]*cw*s,y:dy+(f.headY[i]-f.t)*s+20}});return head;
}
function cup(){const stages=[{at:0,size:125,x:178},{at:6650,size:205,x:192},{at:9750,size:310,x:212},{at:12600,size:480,x:515}],i=stages.findLastIndex(s=>t>=s.at),stage=stages[i];let x=stage.x,y=948,angle=0;
 if(i>0&&!reduced.matches){const u=clamp((t-stage.at)/650),p=1-Math.pow(1-u,3);x=mix(-stage.size*.6,stage.x,p);if(u>.6)angle=Math.sin((u-.6)*15)*Math.exp(-(u-.6)*8)*.026;const prior=stages[i-1];if(u<.95)drawCup(prior.x+u*900,948,prior.size,u*.12);}
 drawCup(x,y,stage.size,angle);
 // Two short rising steam wisps, bounded above the current cup / 蒸汽只出现在杯口上方。
 if(!reduced.matches){ctx.strokeStyle='#f5eed999';ctx.lineWidth=3;for(let k=0;k<2;k++){const xx=x-stage.size*.15+k*stage.size*.12,yy=y-stage.size*.91;ctx.beginPath();ctx.moveTo(xx,yy);ctx.bezierCurveTo(xx-18,yy-20,xx+Math.sin(t/700+k)*14,yy-40,xx-3,yy-62);ctx.stroke();}}
}
function drawCup(x,y,size,angle){ctx.save();ctx.translate(x,y);ctx.rotate(angle);ellipse(0,2,size*.33,11,'#153b4933');ctx.drawImage($('mug'),-size*.45,-size,size,size);ctx.restore()}
function sceneProps(){if(cfg.storyType==='box')return;if(cfg.storyType==='coffee'){cup();return;}
 // A small in-world opening notice, part of the kitchen rather than a title deck.
 ctx.save();ctx.translate(658,260);ctx.rotate(.025);polygon([[-100,-55],[96,-58],[101,53],[-97,56]],'#3e5a49','#b99c6a');label('OPEN',0,-6,28,'center','#fff0cc');label('TOMORROW',0,27,20,'center','#fff0cc');ctx.restore();
 // A few falling crumbs after Lucky's claim / 台词后掉落的碎屑。
 if(!reduced.matches&&between(11500,12100)){const u=(t-11500)/600;for(let i=0;i<3;i++)ellipse(542+i*9,582+u*u*235+i*7,3,2.5,'#d5a461');}
}
function render(){if(!ready)return;ctx.clearRect(0,0,800,1000);const cam=camera(),st=state();ctx.save();ctx.translate(cam.x,cam.y);ctx.scale(cam.z,cam.z);ctx.drawImage($('room'),0,0,800,1000);ellipse(400,cfg.storyType==='box'?858:841,285,22,'#173b5428');const heads=cast(st);sceneProps();ctx.restore();
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
