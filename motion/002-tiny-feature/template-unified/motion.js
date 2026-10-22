(() => {
'use strict';
const $=id=>document.getElementById(id), cfg=JSON.parse($('episode-config').textContent), canvas=$('film'), ctx=canvas.getContext('2d'), audio=$('score'), params=new URLSearchParams(location.search), reduce=matchMedia('(prefers-reduced-motion: reduce)');
const clamp=x=>Math.max(0,Math.min(1,x)), smooth=x=>{x=clamp(x);return x*x*(3-2*x)}, tween=(t,a,b)=>smooth((t-a)/(b-a));
let t=Number(params.get('t'))||0, playing=!params.has('t')&&!reduce.matches, sound=false, previous=0, ready=false, request=0;
$('title').textContent=cfg.title;document.title='Mochi & Lucky · '+cfg.title;$('seek').max=cfg.duration-1;$('transcript').textContent=cfg.beats.map(b=>b.speaker+': '+b.text).join('\n');$('download').download='Mochi-Lucky-'+cfg.id+'.mp4';document.body.classList.toggle('capture',params.get('capture')==='1');
function poly(points,fill,stroke){ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}}
function ellipse(x,y,rx,ry,color){ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fillStyle=color;ctx.fill()}
function text(s,x,y,size=26,color='#403b31',align='left'){ctx.font=`600 ${size}px Georgia,serif`;ctx.fillStyle=color;ctx.textAlign=align;ctx.fillText(s,x,y)}
// Deterministic dry-brush flecks inside the current path, never editing source paintings.
function grain(x,y,w,h,colors,count=140){ctx.save();ctx.clip();for(let i=0;i<count;i++){const a=((i*73+19)%997)/997,b=((i*127+31)%991)/991;ctx.strokeStyle=colors[i%colors.length];ctx.lineWidth=1+(i%3);ctx.beginPath();ctx.moveTo(x+a*w,y+b*h);ctx.lineTo(x+a*w+3+i%11,y+b*h-3-i%7);ctx.stroke()}ctx.restore()}
function bubble(line,speaker,head,alpha){ctx.save();ctx.globalAlpha=alpha;ctx.font='600 29px Georgia,serif';const words=line.split(' '),lines=[];let row='';for(const word of words){const trial=row?row+' '+word:word;if(ctx.measureText(trial).width>330&&row){lines.push(row);row=word}else row=trial}lines.push(row);const w=Math.max(...lines.map(l=>ctx.measureText(l).width))+38,h=lines.length*35+26,x=Math.max(25,Math.min(775-w,head.x-w/2)),y=head.y-h-42;
ctx.shadowColor='#26354a33';ctx.shadowBlur=6;ctx.shadowOffsetY=3;poly([[x+4,y+2],[x+w-3,y],[x+w,y+h-2],[head.x+12,y+h],[head.x+2,head.y-17],[head.x-8,y+h],[x,y+h]],'#fff4dd','#78674e');ctx.shadowColor='transparent';lines.forEach((l,i)=>text(l,x+w/2,y+35+i*35,29,'#38332c','center'));ctx.restore()}
function poseAt(){
 if(cfg.storyType==='idea'){if(t<2500)return 0;if(t<3000)return 2;if(t<3400)return 3;if(t<4900)return 0;return 4;}
 if(cfg.storyType==='feature'){if(t<2700)return 0;if(t<3300)return 2;if(t<5700)return 0;if(t<6500)return 3;if(t<9000)return 4;if(t<9800)return 1;return 4;}
 if(t<2400)return 0;if(t<4600)return 4;if(t<7000)return 2;if(t<9500)return 4;if(t<10100)return 2;if(t<11300)return 3;if(t<12600)return 4;if(t<13100)return 2;if(t<15100)return 3;return 4;
}
function cast(){const pose=poseAt(),base=pose<4?672:1094,sx=pose%4*280.5,sy=pose<4?380:800,scale=1.7,bottom=824;
 // Whole connected paired drawings keep all limbs attached and a constant ground plane.
 const event=cfg.storyType==='idea'?5100:cfg.storyType==='feature'?9800:12900;
 const u=(t-event)/1000,anticipation=reduce.matches?0:(u>-.25&&u<0?Math.sin((u+.25)/.25*Math.PI)*.008:0),settle=reduce.matches?0:(u>=0&&u<.6?Math.sin(u*13)*Math.exp(-u*8)*.008:0);
 const sY=1-anticipation+settle;
 ctx.save();ctx.translate(0,bottom);ctx.scale(1,sY);ctx.translate(0,-bottom);ctx.drawImage($('cast'),sx,sy,280.5,base-sy+12,34,bottom-(base-sy)*scale,280.5*scale,(base-sy+12)*scale);ctx.restore();
 return {Mochi:{x:199,y:bottom-(base-sy)*scale*sY+24},Lucky:{x:418,y:bottom-(base-sy)*scale*sY+125}};
}
function screen(){ctx.save();ctx.transform(.97,.12,-.15,1,418,492);ctx.beginPath();ctx.rect(0,0,240,184);ctx.clip();ctx.drawImage($('logo'),5,5,117,50.6);text(cfg.storyType==='decompose'?'Café plan':cfg.storyType==='feature'?'One tiny feature':'A tiny idea',9,79,20);
 if(cfg.storyType==='decompose'){
  ['Choose a menu','Build a homepage','Set up booking'].forEach((s,i)=>{const p=tween(t,10200+i*430,10600+i*430);ctx.globalAlpha=p;text('□  '+s,9,111+i*25,16)});
 }else if(cfg.storyType==='feature'){
  ['Core feature','Login','Payments'].forEach((s,i)=>{ctx.globalAlpha=tween(t,i*3000,i*3000+450);text('+ '+s,9,110+i*26,19)});
 }else {ctx.globalAlpha=tween(t,2200,2800);text('Just a small project.',9,115,18)}ctx.restore();}
function receipt(){const unfold=tween(t,4800,7800),y=829,x=446,segment=136,n=1+unfold*4.7;ellipse(570,955,145,17,'#10284735');
 for(let i=5;i>=0;i--){let p=clamp(n-i);if(!p)continue;const xx=x+(i%2?100:0),yy=y+i*22;ctx.save();ctx.translate(xx,yy);ctx.rotate((i%2?-.10:.07)*p);poly([[0,0],[segment,4],[segment+4,43*p],[-3,39*p]],i%2?'#e2cf9d':'#fff1ce','#b99c69');grain(0,0,145,43,['#eedfb9','#d6c39a','#fff8df'],40);if(p>.8)text(['Idea','A website','Accounts','Payments','An app','And more…'][i],8,27,18);ctx.restore();}
}
function cup(){const growth=1+.32*tween(t,3000,3700)+.38*tween(t,6000,6800)+.82*tween(t,10000,11200),size=136*growth,x=192,y=945;
 ellipse(x+5,y+5,size*.40,12,'#12305030');ctx.drawImage($('mug'),x-size*.47,y-size,size,size);
 if(!reduce.matches){ctx.strokeStyle='#fff3da85';ctx.lineWidth=3;for(let i=0;i<2;i++){const shift=Math.sin(t/700+i)*7;ctx.beginPath();ctx.moveTo(x-17+i*26,y-size+8);ctx.bezierCurveTo(x-32+i*26+shift,y-size-18,x+13+i*26,y-size-37,x-4+i*26+shift,y-size-56);ctx.stroke();}}
}
function plate(){const enter=tween(t,12000,12750),x=960-650*enter,y=867;ctx.save();ctx.translate(x,y);ellipse(0,20,92,19,'#12305038');ellipse(0,0,94,28,'#c3ac80');ellipse(0,-5,92,26,'#f4e4ba');ellipse(0,-7,72,17,'#d6bf93');
 for(let i=0;i<3;i++){const xx=(i-1)*33,yy=i%2?-10:2;ellipse(xx,yy,22,11,'#af7b40');ellipse(xx,yy-3,22,11,'#e3b66b');for(let j=0;j<5;j++)ellipse(xx-13+j*6,yy-4+(j%2)*4,2,1.4,'#997044')}
 ctx.restore();if(t>13100){const p=tween(t,13100,13600);ctx.save();ctx.globalAlpha=p;ctx.translate(330,946);ctx.rotate(-.04);poly([[-98,-20],[105,-24],[103,26],[-101,22]],'#fff0cb','#b89768');text('Taste tester: Lucky',0,7,20,'#4d4b38','center');ctx.restore();}
}
function render(){if(!ready)return;ctx.clearRect(0,0,800,1000);ctx.drawImage($('room'),0,0,800,1000);screen();ellipse(206,827,204,18,'#133b6622');const heads=cast();if(cfg.storyType==='idea')receipt();else if(cfg.storyType==='feature')cup();else plate();
 if(cfg.storyType==='decompose'&&t>=9650&&t<11250){const offsets=[0,180,300,450,610,860,1070,1280];let f=offsets.findLastIndex(v=>t-9650>=v);if(reduce.matches)f=3;ctx.drawImage($('contact'),f%4*396.75,Math.floor(f/4)*495.5,396.75,495.5,0,0,800,1000);}
 if(cfg.storyType==='decompose'&&t>=11250&&t<12600){ctx.save();ctx.translate(-640,-840);ctx.scale(2.2,2.2);ctx.drawImage($('room'),0,0,800,1000);screen();ctx.restore();}
 const beat=cfg.beats.filter(b=>b.at<=t).at(-1);if(beat&&t<(beat.captionUntil??cfg.duration)){const a=reduce.matches?1:Math.min(tween(t,beat.at,beat.at+130),clamp(((beat.captionUntil??cfg.duration)-t)/140));bubble(beat.text,beat.speaker,heads[beat.speaker],a)}
 $('seek').value=Math.floor(t);$('time').textContent=(t/1000).toFixed(1)+' / '+cfg.duration/1000+'s';$('play').textContent=playing?'Pause':'Play';$('sound').textContent=sound?'Sound on':'Play with sound';$('sound').setAttribute('aria-pressed',sound);}
async function sync(){const token=++request;if(sound&&playing&&!document.hidden){try{audio.currentTime=t/1000;await audio.play();if(token!==request&&(!playing||!sound))audio.pause()}catch(e){if(token===request){sound=false;$('status').textContent='Tap Play with sound to retry.'}}}else audio.pause();previous=performance.now();render()}
function seek(value){++request;t=Math.max(0,Math.min(cfg.duration-1,Number(value)||0));playing=false;audio.pause();audio.currentTime=t/1000;render()}
function tick(now){if(ready&&playing&&!document.hidden){t=sound&&!audio.paused?audio.currentTime*1000:t+Math.min(100,now-previous);if(t>=cfg.duration||sound&&audio.ended){t=cfg.duration-1;playing=false;audio.pause()}render()}previous=now;requestAnimationFrame(tick)}
$('sound').onclick=()=>{if(sound){sound=false}else{sound=true;playing=true;t=0}$('status').textContent=sound?'English child voices + original music.':'Sound off. Speech bubbles stay on.';sync()};$('play').onclick=()=>{if(t>=cfg.duration-2)t=0;playing=!playing;sync()};$('replay').onclick=()=>{t=0;playing=true;sync()};$('seek').oninput=e=>seek(e.target.value);$('full').onclick=async()=>{try{await document.querySelector('.paper').requestFullscreen?.()}catch{}};document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',()=>{if(reduce.matches){playing=false;sync()}render()});document.addEventListener('keydown',e=>{if(e.target.closest('button,input,a,summary')||e.metaKey||e.ctrlKey||e.altKey)return;if(e.code==='Space'){e.preventDefault();$('play').click()}if(e.key.toLowerCase()==='r')$('replay').click();if(e.key.toLowerCase()==='m')$('sound').click()});
window.paintedPlayer={get ready(){return ready},get time(){return t},get playing(){return playing},seek};
Promise.all(['room','cast','logo','contact','mug'].map(id=>$(id).decode())).then(()=>{ready=true;render();previous=performance.now();requestAnimationFrame(tick)}).catch(()=>{$('status').textContent='Artwork failed to load. Reopen the complete HTML file.'});
})();
