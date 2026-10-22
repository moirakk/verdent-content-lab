"""Add verified child speech to an existing score / 在既有配乐上加入并核对童声。"""
import argparse, asyncio, json, shutil, subprocess
from pathlib import Path
import edge_tts

def run(cmd):
 return subprocess.run(cmd,check=True,capture_output=True,text=True).stdout

def duration(file):
 return float(run(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(file)]).strip())

async def main():
 p=argparse.ArgumentParser();p.add_argument('episode');p.add_argument('--version',required=True);p.add_argument('--score',required=True);p.add_argument('--profiles',required=True);p.add_argument('--target',required=True);a=p.parse_args()
 config=Path(a.episode).resolve();episode=json.loads(config.read_text());profiles=json.loads(Path(a.profiles).read_text());out=config.parent/'audio'/a.version
 out.mkdir(parents=True,exist_ok=False)
 (out/'voice-profiles.json').write_text(json.dumps(profiles,ensure_ascii=False,indent=2)+'\n')
 clips=[];lines=[]
 try:
  for i,beat in enumerate(episode['beats']):
   profile=profiles[beat['speaker']];clip=out/f'line-{i+1:02}.mp3'
   await asyncio.wait_for(edge_tts.Communicate(beat['text'],profile['voice'],rate=profile['rate'],pitch=profile['pitch']).save(str(clip)),timeout=55)
   length=duration(clip);start=beat['voiceAt']/1000;limit=beat.get('captionUntil',episode['beats'][i+1]['at'] if i+1<len(episode['beats']) else episode['duration'])/1000
   if not .1<length or start+length>limit-.05:raise RuntimeError(f'Line {i+1} does not fit: start={start}, duration={length}, limit={limit}')
   clips.append(clip);lines.append(dict(speaker=beat['speaker'],text=beat['text'],start=start,duration=length,voice=profile['voice']))
  target=Path(a.target);target.parent.mkdir(parents=True,exist_ok=True)
  if target.exists():raise RuntimeError('Audio target already exists')
  cmd=['ffmpeg','-hide_banner','-loglevel','error','-i',str(Path(a.score).resolve())]
  for clip in clips:cmd+=['-i',str(clip)]
  windows='+'.join(f'between(t,{max(0,l["start"]-.08):.3f},{l["start"]+l["duration"]+.12:.3f})' for l in lines)
  filters=[f"[0:a]volume='if({windows},0.30,1)':eval=frame[music]"]
  for i,line in enumerate(lines):filters.append(f'[{i+1}:a]loudnorm=I=-18:TP=-3:LRA=7,aresample=48000,adelay={round(line["start"]*1000)}:all=1[v{i}]')
  filters.append('[music]'+''.join(f'[v{i}]' for i in range(len(lines)))+f'amix=inputs={len(lines)+1}:duration=first:normalize=0,alimiter=limit=0.9,atrim=duration={episode["duration"]/1000}[mix]')
  cmd+=['-filter_complex',';'.join(filters),'-map','[mix]','-c:a','aac','-b:a','160k','-ar','48000','-movflags','+faststart',str(target)]
  run(cmd);summary=dict(version=a.version,duration=duration(target),score=str(Path(a.score)),lines=lines,syntheticChildSpeech=True,musicDuckedUnderSpeech=True)
  (out/'mix.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n');print(json.dumps(summary,ensure_ascii=False,indent=2))
 except Exception as err:
  (out/'ATTEMPT.md').write_text('# Incomplete voice attempt / 未完成配音尝试\n\n'+str(err)+'\n\nDo not mark voices available / 不得标为已配音。\n');raise

if __name__=='__main__':asyncio.run(main())
