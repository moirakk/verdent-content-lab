"""Measured conversational child dialogue / 实测自然节奏童声。
Trim only outer silence; preserve internal pauses, original voices and every old audio version.
只修剪首尾静音，保留句内停顿、原童声与全部旧版。
"""
import argparse,asyncio,json,subprocess,shutil
from pathlib import Path
import edge_tts

def run(args):return subprocess.run(args,check=True,capture_output=True,text=True).stdout
def duration(p):return float(run(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(p)]))
async def main():
 p=argparse.ArgumentParser();p.add_argument('episode');p.add_argument('--recipe',required=True);a=p.parse_args()
 cfgPath=Path(a.episode).resolve();cfg=json.loads(cfgPath.read_text());root=Path(__file__).resolve().parents[1];base=root/'motion'/cfg['id'];recipe=json.loads(Path(a.recipe).read_text());out=base/'audio'/recipe['version'];out.mkdir(exist_ok=False)
 profiles=json.loads((base/'audio'/('v005' if cfg['id'].startswith('005') else 'v003-story')/'voice-profiles.json').read_text())
 (out/'voice-profiles.json').write_text(json.dumps(profiles,indent=2,ensure_ascii=False)+'\n')
 lines=[]
 try:
  for i,(beat,direction) in enumerate(zip(cfg['beats'],recipe['lines'])):
   raw=out/f'line-{i+1:02}-raw.mp3';clip=out/f'line-{i+1:02}.wav';profile=profiles[beat['speaker']]
   if direction.get('reuse'):shutil.copyfile(base/direction['reuse'],raw)
   else:await asyncio.wait_for(edge_tts.Communicate(beat['text'],profile['voice'],rate=direction.get('rate',profile['rate']),pitch='+0Hz').save(str(raw)),timeout=55)
   run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(raw),'-af','silenceremove=start_periods=1:start_duration=0.015:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_duration=0.015:start_threshold=-45dB,areverse,apad=pad_dur=0.09','-ar','48000',str(clip)])
   length=duration(clip);start=beat['voiceAt']/1000;limit=beat['captionUntil']/1000
   if length<.1 or start+length>limit-.04:raise RuntimeError(f'Line {i+1} does not fit: {length:.3f}s at {start:.2f}, caption limit {limit:.2f}')
   lines.append(dict(speaker=beat['speaker'],text=beat['text'],start=start,duration=length,voice=profile['voice'],rate=direction.get('rate',profile['rate']),file=clip.name));print(cfg['id'],i+1,length,flush=True)
  target=out/'episode-score.m4a';cmd=['ffmpeg','-hide_banner','-loglevel','error','-i',str(base/recipe['score'])]
  for line in lines:cmd+=['-i',str(out/line['file'])]
  windows='+'.join(f'between(t,{max(0,l["start"]-.09):.3f},{l["start"]+l["duration"]+.14:.3f})' for l in lines)
  filt=[f"[0:a]volume='if({windows},0.30,0.85)':eval=frame[music]"]
  for i,line in enumerate(lines):filt.append(f'[{i+1}:a]loudnorm=I=-18:TP=-3:LRA=7,aresample=48000,adelay={round(line["start"]*1000)}:all=1[v{i}]')
  filt.append('[music]'+''.join(f'[v{i}]' for i in range(len(lines)))+f'amix=inputs={len(lines)+1}:duration=first:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=7,atrim=duration={cfg["duration"]/1000}[mix]')
  cmd+=['-filter_complex',';'.join(filt),'-map','[mix]','-c:a','aac','-b:a','192k','-ar','48000','-movflags','+faststart',str(target)];run(cmd)
  (out/'mix.json').write_text(json.dumps(dict(recipe=recipe,lines=lines,duration=duration(target),syntheticChildSpeech=True,outerSilenceTrimmed=True,internalPausesPreserved=True,musicDuckedUnderSpeech=True),indent=2,ensure_ascii=False)+'\n')
  shutil.copyfile(target,root/cfg['template']/'assets/episode-score.m4a')
 except Exception as e:
  (out/'ATTEMPT.md').write_text('# Incomplete attempt / 未完成尝试\n\n'+str(e)+'\n');raise
if __name__=='__main__':asyncio.run(main())
