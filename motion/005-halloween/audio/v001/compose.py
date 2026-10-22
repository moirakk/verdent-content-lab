"""Original Halloween cue / 原创万圣节配乐; standard-library synthesis, no samples."""
from pathlib import Path
import math,wave,struct,json
RATE=32000;DURATION=16.0
left=[0.0]*int(RATE*DURATION);right=left.copy();events=[]
def note(at,midi,duration,gain=.12,kind='bell',pan=0):
 freq=440*2**((midi-69)/12);start=int(at*RATE)
 events.append({'at':at,'midi':midi,'duration':duration,'instrument':kind,'gain':gain})
 for k in range(min(int(duration*RATE),len(left)-start)):
  t=k/RATE
  if kind=='pluck':
   v=(math.sin(2*math.pi*freq*t)+.35*math.sin(4*math.pi*freq*t)+.12*math.sin(6*math.pi*freq*t))*math.exp(-t*9)*min(1,t/.003)
  elif kind=='bass':v=math.sin(2*math.pi*freq*t)*math.exp(-t*4)*min(1,t/.008)
  elif kind=='wood':v=(math.sin(2*math.pi*freq*t)+.4*math.sin(2*math.pi*freq*2.71*t))*math.exp(-t*45)*min(1,t/.001)
  else:v=(math.sin(2*math.pi*freq*t)*math.exp(-t*3)+.3*math.sin(2*math.pi*freq*2.76*t)*math.exp(-t*8)+.12*math.sin(2*math.pi*freq*5.4*t)*math.exp(-t*12))*min(1,t/.005)
  v*=gain*min(1,(duration-t)/.03)
  left[start+k]+=v*(1-pan*.35);right[start+k]+=v*(1+pan*.35)
# D harmonic minor; a playful homemade celesta and pizzicato miniature.
beat=60/108
for i,m in enumerate([74,77,76,73,74]):note(.18+i*beat*.5,m,.65,.11,'bell',(-1)**i*.4)
for i,m in enumerate([50,57,53,57,50,57]):note(.1+i*beat,m,.4,.085,'bass')
for at,m in [(3.0,65),(3.28,62),(4.5,62),(4.78,65),(5.06,68),(5.34,69),(5.62,74),(5.9,73),(6.18,74),(6.46,77),(6.74,76)]:note(at,m,.36,.085,'pluck',.35)
for at in [4.5,5.06,5.62,6.18,6.74]:note(at,50,.35,.08,'bass',-.35)
# Deliberate silence from 7.2 to 8.2 seconds: anticipation before the vacuum reveal.
note(8.2,50,.52,.15,'bass');note(8.2,68,.45,.09,'bell',-.2);note(8.2,74,.5,.09,'bell',.2)
# Dry paw-scuttle percussion, not a powered vacuum motor.
for i in range(8):note(9.12+i*.065,65+i%3*4,.09,.09,'wood',(-1)**i*.7)
for i,m in enumerate([74,77,81,86]):note(9.12+i*.1,m,.28,.08,'pluck')
# Empty-room hold, then a tiny comic coda under “Still unplugged.”
note(12.3,62,.6,.10,'pluck',-.4);note(12.85,50,1.0,.12,'bass',.4);note(13.4,74,1.2,.065,'bell')
# Small stereo echo; keep the anticipation gap truly silent.
for channel in (left,right):
 for i in range(len(channel)-1,3840,-1):
  if not 7.2<=i/RATE<8.2:channel[i]+=channel[i-3840]*.14
peak=max(max(map(abs,left)),max(map(abs,right)));gain=.72/max(peak,.72)
frames=bytearray()
for i,(l,r) in enumerate(zip(left,right)):
 fade=min(1,(DURATION-i/RATE)/.3)
 frames.extend(struct.pack('<hh',int(l*gain*fade*32767),int(r*gain*fade*32767)))
out=Path(__file__).parent
with wave.open(str(out/'halloween-score-v001.wav'),'wb') as f:f.setparams((2,2,RATE,0,'NONE','not compressed'));f.writeframes(frames)
(out/'score.json').write_text(json.dumps({'title':'A Very Unplugged Halloween','duration':DURATION,'bpm':108,'tonality':'D harmonic minor','instruments':['synthetic celesta','pizzicato-like plucks','soft bass','woodblock paw-scuttle'],'silence':[7.2,8.2],'voice':False,'samples':False,'events':events},indent=2)+'\n')
print('Original 16-second stereo score composed. Peak:',round(peak*gain,3))
