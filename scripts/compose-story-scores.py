"""Compose three original story-specific scores / 为三种剧情写原创配乐与动作音。"""
from pathlib import Path
import math,random,wave,struct,json,subprocess
ROOT=Path(__file__).resolve().parents[1]
RATE=32000

def compose(episode,style,seconds,bpm,chords,cues,out_name="story-score-v001",gaps=None):
 out=ROOT/'motion'/episode/'audio'/out_name;out.mkdir(parents=True,exist_ok=False)
 samples=[0.]*(seconds*RATE);rng=random.Random(810+seconds)
 def tone(start,pitch,length,gain,voice='pluck'):
  freq=440*2**((pitch-69)/12)
  for i in range(int(length*RATE)):
   j=round(start*RATE)+i
   if j<0 or j>=len(samples):continue
   t=i/RATE;attack=min(1,t/.008)
   if voice=='bass':v=math.sin(2*math.pi*freq*t)+.18*math.sin(4*math.pi*freq*t);env=attack*math.exp(-t*6)
   elif voice=='bell':v=math.sin(2*math.pi*freq*t)+.23*math.sin(2*math.pi*freq*2.76*t);env=attack*math.exp(-t*6.5)
   elif voice=='wood':v=math.sin(2*math.pi*freq*t)+.25*rng.uniform(-1,1);env=attack*math.exp(-t*38)
   elif voice=='keys':v=math.sin(2*math.pi*freq*t)+.20*math.sin(4*math.pi*freq*t)+.07*math.sin(6*math.pi*freq*t);env=attack*math.exp(-t*5)
   else:v=math.sin(2*math.pi*freq*t)+.3*math.sin(4*math.pi*freq*t);env=attack*math.exp(-t*11)
   samples[j]+=gain*env*v
 def noise(start,length,gain):
  for i in range(int(length*RATE)):
   j=round(start*RATE)+i
   if j<len(samples):samples[j]+=rng.uniform(-1,1)*gain*math.sin(math.pi*i/(length*RATE))**2
 step=60/bpm
 for bar in range(math.ceil(seconds/(4*step))):
  chord=chords[bar%len(chords)];base=bar*4*step
  for beat in range(4):
   tm=base+beat*step
   if tm>seconds-1:continue
   tone(tm,chord[beat%len(chord)]-12,.4,.16,'bass')
   if style=='coffee':
    for note in chord[1:]:tone(tm+step*.66,note+12,.42,.047,'keys')
    noise(tm+.07,.075,.009)
    if beat%2==0:tone(tm+.03,chord[(beat+1)%len(chord)]+24,.35,.055,'bell')
   elif style=='box':
    tone(tm+step*.5,chord[(beat+1)%len(chord)]+12,.26,.075)
    if beat%2==0:tone(tm+.02,chord[(bar+beat)%len(chord)]+24,.3,.06,'wood')
   else:
    tone(tm+step*.75,chord[1]+12,.22,.07,'pluck')
    if beat in [1,3]:tone(tm+.04,chord[-1]+24,.16,.04,'wood')
 for tm,kind in cues:
  if kind=='box':noise(tm,.22,.09);tone(tm,49,.15,.10,'wood')
  elif kind=='cup':tone(tm,83,.55,.10,'bell');tone(tm+.014,91,.3,.036,'bell')
  elif kind=='crumb':noise(tm,.07,.055);tone(tm,65,.08,.055,'wood')
  elif kind=='tick':tone(tm,80,.08,.065,'wood')
 # A short final musical answer, after the final speech / 最后对白后留一个短音乐回答。
 for offset,pitch in [(0,chords[0][0]+24),(.17,chords[0][1]+24),(.36,chords[0][0]+24)]:tone(seconds-.85+offset,pitch,.34,.08,'bell' if style!='cafe' else 'wood')
 # Purposeful music gaps, rather than a continuous identical loop / 留反应空拍。
 gaps=gaps if gaps is not None else {'box':[(3.0,3.3),(12.1,12.6)],'coffee':[(3.35,3.7),(11.55,12.25)],'cafe':[(6.0,6.4),(8.6,9.25)]}[style]
 data=bytearray()
 for i,v in enumerate(samples):
  tm=i/RATE;level=.10 if any(a<=tm<=b for a,b in gaps) else 1
  fade=min(1,tm/.05,max(0,seconds-tm)/.14)
  data+=struct.pack('<h',round(max(-.98,min(.98,v*level*fade))*32767))
 raw=out/'original-score.wav'
 with wave.open(str(raw),'wb') as f:f.setnchannels(1);f.setsampwidth(2);f.setframerate(RATE);f.writeframes(data)
 norm=out/'score-normalized.wav'
 subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(raw),'-af','loudnorm=I=-23:TP=-4:LRA=7','-ar','48000',str(norm)],check=True)
 (out/'score.json').write_text(json.dumps(dict(original=True,style=style,bpm=bpm,duration=seconds,cues=cues,level='-23 LUFS before dialogue ducking',instruments='synthetic plucked bass, pizzicato/soft keys, bell and woodblock; deterministic original notes'),indent=2)+'\n')
 print(episode,style,str(norm))

if __name__=='__main__':
 compose('001-have-an-idea','box',18,108,[(48,52,55),(53,57,60),(50,53,57),(55,59,62)],[(5.25,'box'),(12.8,'box'),(13.4,'box')])
 compose('002-tiny-feature','coffee',18,94,[(48,52,55,59),(45,48,52,55),(50,53,57,60),(43,47,50,53)],[(6.7,'cup'),(9.8,'cup'),(13.1,'cup')])
 compose('004-that-was-a-sentence','cafe',20,116,[(45,48,52),(50,53,57),(52,55,59),(45,48,52)],[(2.9,'crumb'),(6.0,'tick'),(8.6,'tick'),(11.6,'crumb'),(15.1,'cup')])
