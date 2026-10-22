import math,random,wave,struct,json,subprocess
from pathlib import Path
random.seed(407);sr=48000;duration=20
out=Path('motion/004-that-was-a-sentence/audio/v004-acting');out.mkdir(parents=True,exist_ok=True)
samples=[0.0]*(sr*duration)
cues=[(6.89,'tap',.065),(12.85,'scrape',.075),(16.38,'tap',.075),(16.62,'recoil',.035)]
for at,kind,gain in cues:
    count=int(sr*(.32 if kind=='scrape' else .12))
    for k in range(count):
        t=k/sr;env=math.exp(-t*(11 if kind=='scrape' else 38));noise=random.uniform(-1,1)
        if kind=='tap':v=(math.sin(2*math.pi*710*t)*.55+math.sin(2*math.pi*1200*t)*.18+noise*.22)*env
        elif kind=='scrape':v=noise*env*(.45+.55*math.sin(2*math.pi*38*t)**2)
        else:v=math.sin(2*math.pi*(320*t+120*t*t))*env*.7
        samples[int(at*sr)+k]+=v*gain
with wave.open(str(out/'contacts.wav'),'wb') as w:
    w.setparams((1,2,sr,0,'NONE','not compressed'));w.writeframes(b''.join(struct.pack('<h',int(max(-1,min(1,v))*32767)) for v in samples))
meta={'sampleRate':sr,'duration':duration,'seed':407,'cues':[{'at':at,'kind':kind,'gain':gain}for at,kind,gain in cues],'sourceMix':'../../template-story/assets/episode-score.m4a','note':'Original contact sounds over unchanged child dialogue/music; no new speech. / 原创接触声叠加既有童声配乐，无新增语音。'}
(out/'mix.json').write_text(json.dumps(meta,indent=2,ensure_ascii=False)+'\n')
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i','motion/004-that-was-a-sentence/template-story/assets/episode-score.m4a','-i',str(out/'contacts.wav'),'-filter_complex','[0:a][1:a]amix=inputs=2:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=7[a]','-map','[a]','-t','20','-c:a','aac','-b:a','192k','-ar','48000','-movflags','+faststart',str(out/'episode-score.m4a')],check=True)
Path('motion/004-that-was-a-sentence/template-acting/assets/episode-score.m4a').write_bytes((out/'episode-score.m4a').read_bytes())
