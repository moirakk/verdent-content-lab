"""Local mix of existing child recordings and new original contact-timed scores.
复用已授权童声，本地重混原创配乐与接触音；无外部语音请求。
"""
from pathlib import Path
import importlib.util,json,subprocess,shutil
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('composer',ROOT/'scripts/compose-story-scores.py');composer=importlib.util.module_from_spec(spec);spec.loader.exec_module(composer)
def run(args):return subprocess.run(args,check=True,capture_output=True,text=True).stdout
def duration(p):return float(run(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(p)]))
def mix(eid,source_name,name,template,seconds,style,bpm,chords,cues,gaps):
 base=ROOT/'motion'/eid;source=base/'audio'/source_name;out=base/'audio'/name
 composer.compose(eid,style,seconds,bpm,chords,cues,out_name=name,gaps=gaps)
 metadata=json.loads((source/'mix.json').read_text());lines=[]
 for i,line in enumerate(metadata['lines']):
  dst=out/f'line-{i+1:02}.wav';tempo=.94 if line['speaker']=='Mochi' and i in [3,4] else 1
  if tempo!=1:run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(source/line['file']),'-af',f'atempo={tempo}','-ar','48000',str(dst)])
  else:shutil.copyfile(source/line['file'],dst)
  line={**line,'file':dst.name,'duration':duration(dst),'postTempo':tempo};lines.append(line)
  cfg=json.loads((base/'drafts/2026-10-22-verdent-interaction/episode.json').read_text())
  assert line['start']+line['duration']<cfg['beats'][i]['captionUntil']/1000-.05,'Speech exceeds dialogue hold'
 shutil.copyfile(source/'voice-profiles.json',out/'voice-profiles.json')
 cmd=['ffmpeg','-hide_banner','-loglevel','error','-i',str(out/'score-normalized.wav')]
 for line in lines:cmd+=['-i',str(out/line['file'])]
 filt=['[0:a]aresample=48000[music]']
 for i,line in enumerate(lines):filt.append(f'[{i+1}:a]loudnorm=I=-18:TP=-3:LRA=7,aresample=48000,adelay={round(line["start"]*1000)}:all=1[v{i}]')
 n=len(lines);filt+=[''.join(f'[v{i}]' for i in range(n))+f'amix=inputs={n}:normalize=0,apad,atrim=duration={seconds},asplit[side][voice]','[music][side]sidechaincompress=threshold=0.016:ratio=4:attack=18:release=220[duck]',f'[duck][voice]amix=inputs=2:duration=first:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=7,atrim=duration={seconds}[mix]']
 cmd+=['-filter_complex',';'.join(filt),'-map','[mix]','-c:a','aac','-b:a','192k','-ar','48000','-movflags','+faststart',str(out/'episode-score.m4a')];run(cmd)
 (out/'mix.json').write_text(json.dumps({'source':f'../{source_name}/mix.json','lines':lines,'duration':duration(out/'episode-score.m4a'),'externalSpeechRequests':False,'pitchChanged':False,'smoothDucking':{'attackMs':18,'releaseMs':220},'foley':cues,'note':'Existing child performances, preserved pauses, original score and contact cues / 既有童声保留停顿，原创配乐与接触音'},indent=2,ensure_ascii=False)+'\n')
 shutil.copyfile(out/'episode-score.m4a',base/template/'assets/episode-score.m4a');print(eid,'mixed',duration(out/'episode-score.m4a'))
if __name__=='__main__':
 mix('002-tiny-feature','v004-verdent','v005-polish-20261029','template-verdent',18,'coffee',94,[(48,52,55,59),(45,48,52,55),(50,53,57,60),(43,47,50,53)],[(2.7,'tick'),(6.9,'tick'),(7.35,'cup'),(10.05,'tick'),(10.5,'cup'),(14.45,'cup')],[(3.35,4.1),(12.1,13.8)])
 mix('004-that-was-a-sentence','v005-website-test','v006-polish-20261029','template-bakery-preview',20,'cafe',116,[(45,48,52),(50,53,57),(52,55,59),(45,48,52)],[(3.45,'tick'),(8.18,'tick'),(9.09,'crumb'),(13.3,'box')],[(8.18,9.1),(11.3,12.95)])
