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
function computerTexture(im,q){const uv=[[0,0],[im.width,0],[im.width,im.height],[0,im.height]];for(const tri of[[0,1,3],[1,2,3]]){const[p0,p1,p2]=tri.map(i=>q[i]),[u0,u1,u2]=tri.map(i=>uv[i]),det=(u1[0]-u0[0])*(u2[1]-u0[1])-(u2[0]-u0[0])*(u1[1]-u0[1]);const A=((p1[0]-p0[0])*(u2[1]-u0[1])-(p2[0]-p0[0])*(u1[1]-u0[1]))/det,B=((p1[1]-p0[1])*(u2[1]-u0[1])-(p2[1]-p0[1])*(u1[1]-u0[1]))/det,C=((u1[0]-u0[0])*(p2[0]-p0[0])-(u2[0]-u0[0])*(p1[0]-p0[0]))/det,D=((u1[0]-u0[0])*(p2[1]-p0[1])-(u2[0]-u0[0])*(p1[1]-p0[1]))/det;ctx.save();ctx.beginPath();ctx.moveTo(...p0);ctx.lineTo(...p1);ctx.lineTo(...p2);ctx.closePath();ctx.clip();ctx.transform(A,B,C,D,p0[0]-A*u0[0]-C*u0[1],p0[1]-B*u0[0]-D*u0[1]);ctx.drawImage(im,0,0);ctx.restore()}}
function computerScreen(heading,requests,ready=false){const c=document.createElement('canvas');c.width=640;c.height=430;const s=c.getContext('2d');s.fillStyle='#ece9d1';s.fillRect(0,0,640,430);s.fillStyle='#d7ddc0';s.fillRect(0,0,640,105);s.globalCompositeOperation='multiply';s.drawImage($('brand'),18,5,250,108);s.globalCompositeOperation='source-over';s.font='600 26px Georgia';s.fillStyle='#3c5548';s.fillText(heading,26,147);requests.forEach((v,i)=>{s.fillStyle='#d4dcc1';s.fillRect(25,174+i*66,590,52);s.fillStyle='#3d5547';s.font='27px Georgia';s.fillText(v,41,210+i*66)});if(ready){s.fillStyle='#52705a';s.fillRect(25,357,590,51);s.fillStyle='#fff3d3';s.font='600 25px Georgia';s.fillText('Preview ready',42,391)}return c;}
function computerTable(x,y,width=270){polygon([[x-width/2,y],[x+width/2,y-5],[x+width/2+14,y+20],[x-width/2-13,y+23]],'#bc8952','#8d623e');polygon([[x-width/2-13,y+23],[x+width/2+14,y+20],[x+width/2+9,y+35],[x-width/2-9,y+38]],'#976d43','#805a38');polygon([[x-width*.40,y+34],[x-width*.31,y+34],[x-width*.36,850],[x-width*.43,850]],'#a77747','#805a38');polygon([[x+width*.34,y+34],[x+width*.42,y+34],[x+width*.44,850],[x+width*.37,850]],'#9b7147','#805a38');ctx.strokeStyle='#dcac70';ctx.lineWidth=3;for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(x-width*.4+i*31,y+5);ctx.lineTo(x-width*.3+i*31,y+11);ctx.stroke()}}
