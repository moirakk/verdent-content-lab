"""Original Halloween cue / 原创万圣节配乐; standard-library synthesis, no samples."""
from pathlib import Path
import math,wave,struct,json
RATE=32000;DURATION=18.0
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
# Original Halloween wish cue: sparse celesta/plucks, magic silence, candy ostinato.
for at,m in [(0.18,74),(.65,77),(1.12,76),(1.6,73),(2.5,86),(2.7,89),(3.75,86)]:note(at,m,.7,.10,'bell',.3)
for at,m in [(.1,50),(1.15,57),(2.2,53),(3.8,62),(4.8,65),(5.1,68),(5.4,69),(5.7,74),(6.0,77)]:note(at,m,.38,.08,'pluck',-.3)
# Pause before candy shower at 7.8 seconds.
for i in range(40):
 at=7.8+i*.17
 note(at,[74,77,81,80,77,73,76,81][i%8],.25,.055,'bell',(-1)**i*.6)
 if i%4==0:note(at,[50,53,57,49][i//4%4],.38,.08,'bass')
 if i%3==0:note(at+.08,64+i%5,.08,.035,'wood',(-1)**i*.4)
# Dry deadpan hold for Mochi, then a two-note Halloween coda.
note(14.55,62,.55,.075,'pluck',-.4);note(15.15,50,.8,.09,'bass',.3)
note(16.1,77,.5,.05,'bell');note(16.65,74,1.0,.06,'bell')
note(1.28,78,.065,.045,'wood');note(5.30,78,.065,.045,'wood')
# Small stereo echo; keep the anticipation gap truly silent.
for channel in (left,right):
 for i in range(len(channel)-1,3840,-1):
  if not 6.5<=i/RATE<7.8:channel[i]+=channel[i-3840]*.14
peak=max(max(map(abs,left)),max(map(abs,right)));gain=.42/max(peak,.0001)
frames=bytearray()
for i,(l,r) in enumerate(zip(left,right)):
 fade=min(1,(DURATION-i/RATE)/.3)
 frames.extend(struct.pack('<hh',int(l*gain*fade*32767),int(r*gain*fade*32767)))
out=Path(__file__).parent
with wave.open(str(out/'halloween-wish-score-v002.wav'),'wb') as f:f.setparams((2,2,RATE,0,'NONE','not compressed'));f.writeframes(frames)
(out/'score.json').write_text(json.dumps({'title':'A Little More — Halloween Wish','duration':DURATION,'bpm':108,'tonality':'D harmonic minor','instruments':['synthetic celesta','pizzicato-like plucks','soft bass','woodblock paw-scuttle'],'silence':[6.5,7.8],'voice':False,'samples':False,'events':events},indent=2)+'\n')
print('Original 18-second stereo score composed. Peak:',round(peak*gain,3))
