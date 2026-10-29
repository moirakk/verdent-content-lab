"""Mix the approved recorded child lines with smooth music ducking and contact cues.
复用已生成童声，柔和避让配乐并对齐接触声；不调用外部语音服务。
"""
from pathlib import Path
import json,subprocess,math,random,struct,wave,shutil
ROOT=Path(__file__).resolve().parents[1];base=ROOT/'motion/005-halloween';source=base/'audio/v006-natural';out=base/'audio/v007-polish-20261029';out.mkdir(exist_ok=False)
def run(args):return subprocess.run(args,check=True,capture_output=True,text=True).stdout
def duration(p):return float(run(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(p)]))
old=json.loads((source/'mix.json').read_text());lines=[]
for i,line in enumerate(old['lines']):
 dst=out/f'line-{i+1:02}.wav'
 if i==2:run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(source/line['file']),'-af','atempo=0.86','-ar','48000',str(dst)])
 else:shutil.copyfile(source/line['file'],dst)
 line={**line,'file':dst.name,'duration':duration(dst),'postTempo':0.86 if i==2 else 1};lines.append(line)
shutil.copyfile(source/'voice-profiles.json',out/'voice-profiles.json')
sr=48000;rng=random.Random(529);samples=[0.]*(sr*20);cues=[(2.8,'key',.045),(4.45,'bucket',.075),(7.9,'key',.045)]
for k in range(23):cues.append((9.25+k*.235,'paper',.009+k*.00025))
for at,kind,gain in cues:
 length=.11 if kind=='key' else .42 if kind=='bucket' else .1
 for k in range(int(length*sr)):
  t=k/sr;env=math.exp(-t*(40 if kind=='key' else 12 if kind=='bucket' else 26));tone=math.sin(2*math.pi*(520 if kind=='key' else 790)*t)
  v=(tone*.7+rng.uniform(-1,1)*.3) if kind!='paper' else rng.uniform(-1,1)*.8
  samples[int(at*sr)+k]+=gain*v*env
with wave.open(str(out/'contact-cues.wav'),'wb') as w:
 w.setparams((1,2,sr,0,'NONE','uncompressed'));w.writeframes(b''.join(struct.pack('<h',round(max(-.99,min(.99,v))*32767)) for v in samples))
cmd=['ffmpeg','-hide_banner','-loglevel','error','-i',str(base/'audio/v006-score/halloween-wish-score-v004.wav')]
for line in lines:cmd+=['-i',str(out/line['file'])]
cmd+=['-i',str(out/'contact-cues.wav')]
filt=['[0:a]loudnorm=I=-23:TP=-5:LRA=7,aresample=48000[music]']
for i,line in enumerate(lines):filt.append(f'[{i+1}:a]loudnorm=I=-18:TP=-3:LRA=7,aresample=48000,adelay={round(line["start"]*1000)}:all=1[v{i}]')
filt+=['[v0][v1][v2]amix=inputs=3:normalize=0,apad,atrim=duration=20,asplit[side][voice]','[music][side]sidechaincompress=threshold=0.016:ratio=4:attack=18:release=220[duck]','[duck][voice][4:a]amix=inputs=3:duration=first:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=7,atrim=duration=20[mix]']
cmd+=['-filter_complex',';'.join(filt),'-map','[mix]','-c:a','aac','-b:a','192k','-ar','48000','-movflags','+faststart',str(out/'episode-score.m4a')];run(cmd)
(out/'mix.json').write_text(json.dumps({'source':'../v006-natural/mix.json','lines':lines,'duration':duration(out/'episode-score.m4a'),'externalSpeechRequests':False,'pitchChanged':False,'smoothDucking':{'attackMs':18,'releaseMs':220},'foley':cues,'note':'Native child voices retained; Mochi slowed gently, no pitch shift / 保留原童声，Mochi 稍放慢，不变调'},indent=2,ensure_ascii=False)+'\n')
shutil.copyfile(out/'episode-score.m4a',base/'template-natural/assets/episode-score.m4a')
print(json.dumps({'duration':20,'lines':lines},indent=2))
