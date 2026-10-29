const cfg=JSON.parse(document.getElementById('episode-config').textContent),$=id=>document.getElementById(id),canvas=$('stage'),g=canvas.getContext('2d'),query=new URLSearchParams(location.search),audio=$('score');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let time=0,playing=false,last=performance.now(),sound=false,loaded=false;
if(query.has('capture'))document.body.classList.add('capture');if(query.has('t')){time=Math.max(0,Math.min(cfg.duration,Number(query.get('t'))||0));playing=false;}
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),ease=x=>{x=clamp(x);return x*x*(3-2*x)};let seed=314159;function rand(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
const colors=['#e3a13a','#a8b957','#c78cba','#f0dcc0','#d57250'];
// Deterministic ballistic arcs land against a bounded packed candy mound.
const particles=Array.from({length:340},(_,i)=>{const col=(i*7)%17,row=Math.floor(i/17),targetX=38+col*45+(rand()-.5)*15,targetY=1338-row*12.5+.0006*(targetX-400)**2,flight=1.1+rand()*.4;return{birth:9+Math.pow(i/339,.70)*4.5,tx:targetX,ty:targetY,flight,r:18+rand()*7,spin:(rand()-.5)*6,rot:rand()*6.28,type:i%4,color:colors[i%5]};});
const snapshotCount=Math.ceil(cfg.duration/1000*60),snapshots=[];for(let frame=0;frame<=snapshotCount;frame++){const t=frame/60,draw=[];for(const p of particles){const age=t-p.birth;if(age<0)continue;const u=clamp(age/p.flight),x=400+(p.tx-400)*u;let y=1096+(p.ty-1096)*u-Math.sin(u*Math.PI)*265;if(u===1){const bounceAge=age-p.flight;y-=Math.abs(Math.sin(bounceAge*14))*10*Math.exp(-bounceAge*7);}draw.push([x,y,p.rot+p.spin*Math.min(age,p.flight),p.r,p.type,p.color]);}snapshots.push(draw);}
function path(points,fill,stroke='#463244'){g.beginPath();points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fillStyle=fill;g.fill();if(stroke){g.strokeStyle=stroke;g.lineWidth=2;g.stroke();}}
function candy(x,y,rot,r,type,color){g.save();g.translate(x,y);g.rotate(rot);const depthScale=clamp(.75+y/1422*.4,.8,1.15);g.scale(depthScale,depthScale);g.shadowColor='#2b204450';g.shadowBlur=3;g.shadowOffsetY=3;if(type===0){path([[-r,-r*.5],[-r*1.5,-r*.85],[-r*1.35,r*.55],[-r,r*.35]],color);path([[r,-r*.5],[r*1.5,-r*.85],[r*1.35,r*.55],[r,r*.35]],color);const shade=g.createLinearGradient(-r,-r,r,r);shade.addColorStop(0,'#fff0cb');shade.addColorStop(.28,color);shade.addColorStop(1,'#66506b');g.fillStyle=shade;g.beginPath();g.ellipse(0,0,r,r*.65,0,0,Math.PI*2);g.fill();g.strokeStyle='#fff2d0';g.lineWidth=3;g.beginPath();g.moveTo(-r*.35,-r*.5);g.lineTo(r*.2,r*.45);g.stroke();}else if(type===1){path([[0,-r],[-r*.8,r],[r*.8,r]],'#ebc46f');path([[-r*.48,r*.2],[-r*.8,r],[r*.8,r],[r*.48,r*.2]],'#d77943',null);path([[0,-r],[-r*.28,-r*.28],[r*.28,-r*.28]],'#f4ead2',null);}else if(type===2){g.fillStyle='#ded6bb';g.fillRect(-2,0,4,r*1.9);g.fillStyle=color;g.beginPath();g.arc(0,0,r*.75,0,Math.PI*2);g.fill();g.strokeStyle='#f0dfc7';g.lineWidth=3;g.beginPath();g.arc(0,0,r*.43,0,Math.PI*1.6);g.stroke();}else{path([[-r,-r*.6],[r*.9,-r*.7],[r,r*.6],[-r*.8,r*.7]],color);g.fillStyle='#e6d5a7';g.fillRect(-r*.2,-r*.6,r*.3,r*1.2);}g.restore();}
const frames={"lucky":[{"x":51,"y":26,"w":343,"h":396},{"x":403,"y":46,"w":471,"h":374},{"x":902,"y":60,"w":440,"h":361},{"x":1404,"y":28,"w":335,"h":395},{"x":53,"y":455,"w":353,"h":389},{"x":462,"y":461,"w":348,"h":373},{"x":842,"y":580,"w":450,"h":249},{"x":1317,"y":565,"w":424,"h":261}],"mochi":[{"x":31,"y":22,"w":487,"h":687},{"x":548,"y":87,"w":545,"h":613},{"x":21,"y":712,"w":526,"h":590},{"x":585,"y":826,"w":521,"h":447}]};
const poseCache=new Map();let motionTime=0;
const pulse=(t,at,width)=>Math.exp(-(((t-at)/width)**2));
function poseArt(id,frame){const key=id+frame;if(!poseCache.has(key)){const a=frames[id][frame],c=document.createElement('canvas');c.width=a.w;c.height=a.h;c.getContext('2d').drawImage($(id),a.x,a.y,a.w,a.h,0,0,a.w,a.h);poseCache.set(key,c);}return poseCache.get(key);}
// Whole original paintings: uniform native scale only, no body or cloth mesh / 整幅原画，等比绘制，无身体布料变形。
function catMotion(id,t){if(reduced.matches)return{dy:0,angle:0};const startle=pulse(t,9.3,.20),settle=t>9.65?Math.sin((t-9.65)*16)*Math.exp(-(t-9.65)*8):0;return id==='lucky'?{dy:-startle*16+settle*2,angle:-startle*.012}:{dy:-startle*10,angle:-startle*.008};}
function cat(id,frame,x,foot,width){const a=frames[id][frame],scale=width/Math.max(...frames[id].map(f=>f.w)),w=a.w*scale,h=a.h*scale,m=catMotion(id,motionTime);g.save();g.translate(x,foot+m.dy);g.rotate(m.angle);g.drawImage(poseArt(id,frame),-w/2,-h,w,h);g.restore();const head={x:x+Math.sin(m.angle)*h,y:foot+m.dy-h+16};return{frame,x,foot,scaleX:scale,scaleY:scale,head,paw:frame===2&&id==='lucky'?{x:x-w/2+(932-a.x)*scale,y:foot+m.dy-h+(399-a.y)*scale}:null};}
const screenCache=new Map();
function wishScreen(t){const key=t<2.86?0:t<5.2?1:t<7.9?0:t<9?2:3;if(screenCache.has(key))return screenCache.get(key);const c=document.createElement('canvas');c.width=640;c.height=430;const s=c.getContext('2d');s.fillStyle='#e5e6c7';s.fillRect(0,0,640,430);s.globalCompositeOperation='multiply';const logo=$('logo'),w=500;s.drawImage(logo,70,53,w,w*logo.height/logo.width);s.globalCompositeOperation='source-over';s.fillStyle='#53644d';s.font='28px Georgia';s.textAlign='center';s.fillText(['Make a wish.','One treat.','A little more…','Wish granted.'][key],320,354);screenCache.set(key,c);return c;}
// Solid laptop: 3D vertices, projected base/lid thickness, hinge, individual keys and mapped logo.
let keyPoint={x:500,y:1205};
function laptop(t){const press=Math.exp(-(((t-2.8)/.12)**2))+Math.exp(-(((t-7.9)/.12)**2)),ring=t>2.8?Math.sin((t-2.8)*24)*Math.exp(-(t-2.8)*6):0,ring2=t>7.9?Math.sin((t-7.9)*24)*Math.exp(-(t-7.9)*6):0,angle=(103+press*3.5+(ring+ring2)*1.9)*Math.PI/180,yaw=-.24;
const P=(x,y,z)=>{const X=x*Math.cos(yaw)+z*Math.sin(yaw),Z=z*Math.cos(yaw)-x*Math.sin(yaw),k=1/(1+Z/1050);return[400+X*k*.74,1219-y*k*.74+Z*.39*k*.74+press*1.5];};
const face=(v,color,stroke='#343f40')=>path(v.map(p=>P(...p)),color,stroke);
g.save();g.fillStyle='#17293c55';g.beginPath();g.ellipse(403,1248,125,19,-.05,0,Math.PI*2);g.fill();
// Base front and side facets visibly separate from the keyboard plane.
face([[-142,0,91],[142,0,91],[142,18,91],[-142,18,91]],'#5c6660');face([[142,0,91],[142,0,-83],[142,18,-83],[142,18,91]],'#434f4f');face([[-142,18,-83],[142,18,-83],[142,18,91],[-142,18,91]],'#8a9180','#59675e');
// Ports on the visible right side.
for(let z=-30;z<=30;z+=27)face([[143,5,z],[143,5,z+14],[143,11,z+14],[143,11,z]],'#26383d',null);
const L=(x,h,depth=0)=>[x,22+Math.sin(angle)*h,-77+Math.cos(angle)*h+depth];
face([L(-142,0,-8),L(142,0,-8),L(142,195,-8),L(-142,195,-8)],'#495958');
face([L(142,0,-8),L(142,195,-8),L(142,195,0),L(142,0,0)],'#293f43');
face([L(-142,195,-8),L(142,195,-8),L(142,195,0),L(-142,195,0)],'#a9ad93');
face([L(-142,0),L(142,0),L(142,195),L(-142,195)],'#62746a','#263c3f');
const glow=(t>2.86&&t<3.6||t>8.12&&t<9.3);if(glow){g.shadowColor='#d8d491';g.shadowBlur=18;}
face([L(-128,13,1),L(128,13,1),L(128,180,1),L(-128,180,1)],'#e5e6c7','#c3c99c');g.shadowBlur=0;
// Original rectangular logo retains its native aspect ratio ON the screen plane.
const im=wishScreen(t),quad=[P(...L(-128,180,2)),P(...L(128,180,2)),P(...L(128,13,2)),P(...L(-128,13,2))];textureQuad(im,quad);
// Physical hinge and keycaps, with a depressed right-hand key at contact.
const hingeA=P(-120,21,-76),hingeB=P(120,21,-76);g.strokeStyle='#bdbea2';g.lineWidth=7;g.lineCap='round';g.beginPath();g.moveTo(...hingeA);g.lineTo(...hingeB);g.stroke();
for(let row=0;row<3;row++)for(let col=0;col<8;col++){let x=-117+col*30,z=-45+row*28,y=24;const hit=row===2&&col===7;if(hit)y-=press*5;face([[x,y,z],[x+23,y,z],[x+23,y,z+20],[x,y,z+20]],hit?'#c2c29b':'#3f5251','#758175');const p=P(x+7,y+1,z+7);g.fillStyle='#c6c9b0';g.fillRect(p[0],p[1],4,1);}
face([[-43,19,51],[43,19,51],[43,19,79],[-43,19,79]],'#78877a','#b0b6a0');keyPoint={x:P(105,24-press*5,20)[0],y:P(105,24-press*5,20)[1]};
// A few painted edge strokes keep the computer in the gouache world.
g.globalAlpha=.23;for(let i=0;i<4;i++){const p=P(-133+i*52,19,88),q=P(-104+i*52,19,88);g.strokeStyle='#e5d7ae';g.lineWidth=2;g.beginPath();g.moveTo(...p);g.lineTo(...q);g.stroke();}g.restore();}
function textureQuad(im,q){const tris=[[0,1,3],[1,2,3]],uv=[[0,0],[im.width,0],[im.width,im.height],[0,im.height]];for(const tri of tris){const [a,b,c]=tri,[p0,p1,p2]=[q[a],q[b],q[c]],[u0,u1,u2]=[uv[a],uv[b],uv[c]],det=(u1[0]-u0[0])*(u2[1]-u0[1])-(u2[0]-u0[0])*(u1[1]-u0[1]);const A=((p1[0]-p0[0])*(u2[1]-u0[1])-(p2[0]-p0[0])*(u1[1]-u0[1]))/det,B=((p1[1]-p0[1])*(u2[1]-u0[1])-(p2[1]-p0[1])*(u1[1]-u0[1]))/det,C=((u1[0]-u0[0])*(p2[0]-p0[0])-(u2[0]-u0[0])*(p1[0]-p0[0]))/det,D=((u1[0]-u0[0])*(p2[1]-p0[1])-(u2[0]-u0[0])*(p1[1]-p0[1]))/det;g.save();g.beginPath();g.moveTo(...p0);g.lineTo(...p1);g.lineTo(...p2);g.closePath();g.clip();g.transform(A,B,C,D,p0[0]-A*u0[0]-C*u0[1],p0[1]-B*u0[0]-D*u0[1]);g.drawImage(im,0,0);g.restore();}}
function bubble(text,x,tipY,age,fade=1){g.save();g.font='32px Georgia';const lines=[];let line='';for(const word of text.split(' ')){const candidate=line?line+' '+word:word;if(g.measureText(candidate).width>320&&line){lines.push(line);line=word}else line=candidate;}lines.push(line);const width=Math.min(368,Math.max(...lines.map(l=>g.measureText(l).width))+42),height=lines.length*40+26,left=clamp(x-width/2,28,772-width),top=Math.max(30,tipY-height-28),pop=reduced.matches?1:ease(age/.13);g.globalAlpha=pop*fade;g.shadowColor='#1b173747';g.shadowBlur=7;g.shadowOffsetY=4;g.fillStyle='#fff0d8';g.strokeStyle='#a88774';g.lineWidth=2;g.beginPath();g.roundRect(left,top,width,height,16);g.fill();g.stroke();g.shadowBlur=0;g.shadowOffsetY=0;path([[x-8,top+height-1],[x+11,top+height-1],[x,tipY]],'#fff0d8','#a88774');g.fillStyle='#382d3d';g.textAlign='center';g.textBaseline='middle';lines.forEach((l,i)=>g.fillText(l,left+width/2,top+33+i*40));g.restore();return{x:left,y:top,width,height,tipY};}
function bucket(){const dt=motionTime-4.45,impact=dt>=0?Math.sin(dt*28)*Math.exp(-dt*8):0;g.save();g.translate(340,1270);g.rotate(impact*.045);g.scale(1+Math.abs(impact)*.025,1-Math.abs(impact)*.018);g.strokeStyle='#785031';g.lineWidth=8;g.beginPath();g.ellipse(0,-41,65,66,0,Math.PI,Math.PI*2);g.stroke();g.fillStyle='#bd6e32';g.beginPath();g.ellipse(0,0,87,71,0,0,Math.PI*2);g.fill();g.fillStyle='#dfa04c';g.beginPath();g.ellipse(0,-41,81,29,0,0,Math.PI*2);g.fill();g.fillStyle='#513744';g.beginPath();g.ellipse(0,-43,66,18,0,0,Math.PI*2);g.fill();path([[-43,-2],[-24,-24],[-13,2]],'#40283c',null);path([[17,2],[28,-24],[47,-2]],'#40283c',null);path([[-42,23],[-20,35],[-3,25],[17,35],[42,18],[28,46],[-22,48]],'#40283c',null);g.restore();}
function draw(ms){
 const t=ms/1000;motionTime=t;g.clearRect(0,0,800,1422);const bg=$('bg'),bs=Math.max(800/bg.width,1422/bg.height);g.drawImage(bg,(800-bg.width*bs)/2,(1422-bg.height*bs)/2,bg.width*bs,bg.height*bs);
 // Same room/cats. Small motivated reframing only / 同一画风场景，仅按动作轻微取景。
 const cam=reduced.matches?1:1+.025*ease((t-3.1)/.4)-.025*ease((t-8.6)/.35)+.018*ease((t-15.7)/.4);
 g.save();g.translate(400,1120);g.scale(cam,cam);g.translate(-400,-1120);
 let lf=0;if(t>=1.95&&t<2.48)lf=1;else if(t>=2.48&&t<2.98)lf=2;else if(t>=2.98&&t<3.6)lf=3;else if(t>=3.6&&t<5.2)lf=4;else if(t>=5.2&&t<6.1)lf=3;else if(t>=6.1&&t<7.38)lf=1;else if(t>=7.38&&t<8.12)lf=2;else if(t>=8.12&&t<9.05)lf=3;else if(t>=9.05&&t<9.65)lf=5;else if(t>=9.65&&t<15.45)lf=6;else if(t>=15.45)lf=7;
 const mf=t<3.55?0:t<5.15?1:t<9.08?0:t<9.72?2:3;
 const approach=reduced.matches?0:(ease((t-1.95)/.43)-ease((t-3.0)/.32))*7+(ease((t-7.3)/.35)-ease((t-8.15)/.32))*7;
 const recoil=reduced.matches?0:pulse(t,9.3,.22)*12;
 g.fillStyle='#16294455';for(const[x,r]of[[207,125],[612-approach+recoil,105]]){g.beginPath();g.ellipse(x,1236,r,17,0,0,Math.PI*2);g.fill();}
 const data=snapshots[Math.min(snapshotCount,Math.floor(t*60))];
 for(let i=0;i<data.length;i++)if(i%4===0&&data[i][1]<1115)candy(...data[i]);
 const peek=ease((t-15.35)/.5),luckyX=612-approach+recoil;
 let mochi,lucky;if(peek>0){laptop(t);mochi=cat('mochi',mf,207-recoil,1230-55*peek,360);lucky=cat('lucky',lf,luckyX,1230-86*peek,320)}else{mochi=cat('mochi',mf,207-recoil,1230,360);if(lf===2){laptop(t);lucky=cat('lucky',lf,luckyX,1230-86*peek,320)}else{lucky=cat('lucky',lf,luckyX,1230-86*peek,320);laptop(t)}}
 bucket();
 // First candy follows a visible arc into the bucket / 首颗糖清楚落桶。
 if(t>=3.3&&t<4.77){const u=clamp((t-3.3)/1.15),x=400-60*u+Math.sin(u*Math.PI)*35;let y=1096+(1227-1096)*u-Math.sin(u*Math.PI)*190,rotation=u*5.7;if(u===1){const age=t-4.45;y=1227+age*74-Math.sin(age*15)*6;rotation=5.7+Math.sin(age*15)*.10;}g.save();g.globalAlpha=1-ease((t-4.62)/.15);candy(x,y,rotation,22,0,'#a8b957');g.restore();}
 if(t>=4.45&&t<4.9){const k=(t-4.45)/.45;g.save();g.globalAlpha=(1-k)*.65;g.strokeStyle='#f5d18a';g.lineWidth=2;for(let i=0;i<5;i++){const a=Math.PI+i*Math.PI/4,x=340+Math.cos(a)*(65+k*18),y=1227+Math.sin(a)*(25+k*16);g.beginPath();g.moveTo(x,y);g.lineTo(x+Math.cos(a)*7,y+Math.sin(a)*7);g.stroke();}g.restore();}
 for(let i=0;i<data.length;i++)if(!(i%4===0&&data[i][1]<1115))candy(...data[i]);
 // The answer glows at the screen, not in unrelated scenery / 反馈只围绕电脑。
 if((t>=2.86&&t<3.55)||(t>=8.12&&t<9.2)){const k=t<4?t-2.86:t-8.12;g.save();g.globalAlpha=Math.sin(clamp(k/(t<4?.69:1.08))*Math.PI)*.8;g.strokeStyle='#f1c66e';g.lineWidth=3;for(let i=0;i<6;i++){const a=i/6*Math.PI*2+k,x=400+Math.cos(a)*57,y=1083+Math.sin(a)*32;g.beginPath();g.moveTo(x-4,y);g.lineTo(x+4,y);g.moveTo(x,y-4);g.lineTo(x,y+4);g.stroke();}g.restore();}
 g.restore();
 const beat=cfg.beats.find(b=>ms>=b.at&&ms<b.captionUntil);let bubbleBounds=null;
 if(beat){const c=beat.speaker==='Lucky'?lucky:mochi,h={x:400+(c.head.x-400)*cam,y:1120+(c.head.y-1120)*cam};bubbleBounds=bubble(beat.text,h.x,h.y,(ms-beat.at)/1000,Math.min(1,(beat.captionUntil-ms)/160));}
 if(t>=18.7){g.save();g.globalAlpha=ease((t-18.7)/.3);g.textAlign='center';g.font='30px Georgia';g.fillStyle='#f4d9aa';g.fillText('Happy Halloween.',400,710);g.restore();}
 window.halloweenState={time:ms,lucky,mochi,keyPoint,bucket:{x:340,y:1270},bubbleBounds,candyCount:data.length,camera:cam};
}
function updateControls(){
 $('seek').value=Math.round(time);$('play').textContent=playing?'Pause':time>=cfg.duration?'Play again':'Play';$('sound').textContent=sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',String(sound));$('start').hidden=started||query.has('capture');
 $('watch').textContent=playing&&sound?'Restart with sound':'Play with sound';
}
let request=0,started=query.has('capture')||query.has('t');
async function sync(){const id=++request;if(!loaded)return;
 if(sound&&playing&&!document.hidden){try{if(Math.abs(audio.currentTime-time/1000)>.12)audio.currentTime=time/1000;await audio.play();if(id!==request&&(!playing||!sound))audio.pause();}catch{if(id===request){playing=false;sound=false;started=false;document.querySelector('.review').textContent='Tap Play with sound to retry.'}}}else audio.pause();last=performance.now();render();}
function render(){if(loaded)draw(time);updateControls();}
function replay(){if(!loaded)return;started=true;time=0;playing=true;audio.currentTime=0;sync();}
function watch(){sound=true;replay();}
function toggle(){if(!loaded)return;if(!started)return watch();if(time>=cfg.duration)return replay();playing=!playing;sync();}
function seek(ms){request++;time=Math.max(0,Math.min(cfg.duration,Number(ms)||0));playing=false;started=true;audio.pause();audio.currentTime=time/1000;render();}
$('start').onclick=watch;$('watch').onclick=watch;$('play').onclick=toggle;$('replay').onclick=replay;
$('sound').onclick=()=>{if(!started)return watch();sound=!sound;sync();};$('seek').oninput=e=>seek(e.target.value);$('seek').max=cfg.duration;
$('full').onclick=async()=>{try{await document.querySelector('.film').requestFullscreen?.()}catch{document.querySelector('.review').textContent='Use your browser fullscreen control.'}};
 document.addEventListener('keydown',e=>{if(e.target.closest('button,input,a,summary')||e.metaKey||e.ctrlKey||e.altKey)return;if(e.code==='Space'){e.preventDefault();toggle()}if(e.key.toLowerCase()==='r')replay();if(e.key.toLowerCase()==='m')$('sound').click()});
 document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',()=>{playing=false;sync()});
function tick(now){if(playing&&loaded&&!document.hidden){time=sound&&!audio.paused?Math.min(cfg.duration,audio.currentTime*1000):Math.min(cfg.duration,time+Math.min(100,now-last));if(time>=cfg.duration||sound&&audio.ended){time=cfg.duration;playing=false;audio.pause();}render();}last=now;requestAnimationFrame(tick);}
Promise.all(['bg','mochi','lucky','logo'].map(id=>$(id).decode())).then(()=>{loaded=true;last=performance.now();render()}).catch(err=>{document.querySelector('.review').textContent='Artwork could not load. Reopen the complete HTML.';console.error(err)});
requestAnimationFrame(tick);window.halloweenPlayer={get time(){return time},get playing(){return playing},get ready(){return loaded},seek};
