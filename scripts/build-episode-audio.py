import argparse
import asyncio
import json
import math
import os
from pathlib import Path
import random
import shutil
import struct
import subprocess
import wave

import edge_tts


def run(command):
    return subprocess.run(command, check=True, capture_output=True, text=True).stdout


def duration(probe, file):
    return float(run([probe, "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", str(file)]).strip())


def compose_music(file, seconds, speech_windows, sound_effects=None):
    sample_rate = 32000
    samples = [0.0] * round(seconds * sample_rate)
    randomizer = random.Random(303)

    def note(start, midi, length, gain, bell=False):
        frequency = 440 * 2 ** ((midi - 69) / 12)
        for offset in range(round(length * sample_rate)):
            position = round(start * sample_rate) + offset
            if position >= len(samples):
                break
            clock = offset / sample_rate
            envelope = min(1, clock / 0.008) * math.exp(-clock * (7 if bell else 10))
            overtone = 0.24 * math.sin(2 * math.pi * frequency * (2.76 if bell else 2) * clock)
            samples[position] += gain * envelope * (math.sin(2 * math.pi * frequency * clock) + overtone)

    chords = [(48, 52, 55), (45, 48, 52), (41, 45, 48), (43, 47, 50)]
    melody = [72, 76, 79, None, 76, 74, 72, None, 69, 72, 76, None, 74, 71, 67, None]
    for bar in range(math.ceil(seconds / 2)):
        chord = chords[bar % len(chords)]
        for beat in range(4):
            start = bar * 2 + beat * 0.5
            note(start, chord[0] - 12, 0.42, 0.055)
            note(start + 0.25, chord[(beat % 2) + 1], 0.22, 0.035)
            pitch = melody[(bar * 4 + beat) % len(melody)]
            if pitch is not None:
                note(start + 0.04, pitch, 0.5, 0.047 + randomizer.random() * 0.006, bell=True)
    note(14.5, 79, 0.32, 0.07, bell=True)
    note(14.75, 76, 0.32, 0.06, bell=True)
    for effect in sound_effects or []:
        start = effect["at"] / 1000
        gain = effect.get("gain", 0.04)
        if effect["type"] == "chime":
            note(start, 84, 0.35, gain, bell=True)
        elif effect["type"] == "paper":
            for offset in range(round(0.13 * sample_rate)):
                position = round(start * sample_rate) + offset
                if position >= len(samples):
                    break
                envelope = math.sin(math.pi * offset / (0.13 * sample_rate)) ** 2
                samples[position] += randomizer.uniform(-1, 1) * gain * envelope
    payload = bytearray()
    for index, sample in enumerate(samples):
        clock = index / sample_rate
        duck = 0.35 if any(start - 0.08 <= clock <= end + 0.12 for start, end in speech_windows) else 1
        fade = min(1, clock / 0.04, max(0, seconds - clock) / 0.12)
        payload.extend(struct.pack("<h", round(max(-1, min(1, sample * duck * fade)) * 32767)))
    with wave.open(str(file), "wb") as output:
        output.setnchannels(1)
        output.setsampwidth(2)
        output.setframerate(sample_rate)
        output.writeframes(payload)


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("episode")
    parser.add_argument("--version", default="v001")
    args = parser.parse_args()
    config_file = Path(args.episode).resolve()
    episode = json.loads(config_file.read_text())
    root = config_file.parent
    profiles = json.loads((root / "audio-config.json").read_text())
    ffmpeg = os.environ.get("FFMPEG") or shutil.which("ffmpeg")
    probe = os.environ.get("FFPROBE") or shutil.which("ffprobe")
    if not ffmpeg or not probe:
        raise RuntimeError("ffmpeg and ffprobe are required")
    assets = root / "template" / "assets"
    output = assets / f"episode-audio-{args.version}.m4a"
    if output.exists():
        raise RuntimeError("Audio version already exists; select a new --version")
    audio_directory = root / "audio" / args.version
    audio_directory.mkdir(parents=True, exist_ok=False)
    (audio_directory / "voice-profiles.json").write_text(json.dumps(profiles, indent=2, ensure_ascii=False) + "\n")
    assets.mkdir(parents=True, exist_ok=True)
    clips = []
    metadata = []
    for index, beat in enumerate(episode["beats"]):
        profile = profiles[beat["speaker"]]
        clip = audio_directory / f"line-{index + 1:02}.mp3"
        await edge_tts.Communicate(beat["text"], profile["voice"], rate=profile["rate"], pitch=profile["pitch"]).save(str(clip))
        length = duration(probe, clip)
        start = beat["voiceAt"] / 1000
        next_start = episode["beats"][index + 1]["at"] / 1000 if index + 1 < len(episode["beats"]) else episode["duration"] / 1000
        if length <= 0 or start + length > next_start - 0.05:
            raise RuntimeError(f"Line {index + 1} does not fit its story beat")
        clips.append(clip)
        metadata.append({"speaker":beat["speaker"], "text":beat["text"], "start":start, "duration":length, "voice":profile["voice"]})
    seconds = episode["duration"] / 1000
    music = audio_directory / "original-music.wav"
    compose_music(music, seconds, [(line["start"], line["start"] + line["duration"]) for line in metadata], episode.get("soundEffects"))
    command = [ffmpeg, "-hide_banner", "-loglevel", "error", "-i", str(music)]
    for clip in clips:
        command.extend(["-i", str(clip)])
    filters = ["[0:a]volume=1[music]"]
    for index, line in enumerate(metadata):
        delay = round(line["start"] * 1000)
        filters.append(f"[{index + 1}:a]loudnorm=I=-18:TP=-3:LRA=7,aresample=48000,adelay={delay}:all=1[voice{index}]")
    inputs = "[music]" + "".join(f"[voice{index}]" for index in range(len(clips)))
    filters.append(f"{inputs}amix=inputs={len(clips) + 1}:duration=first:normalize=0,alimiter=limit=0.9,atrim=duration={seconds}[mix]")
    command.extend(["-filter_complex", ";".join(filters), "-map", "[mix]", "-c:a", "aac", "-b:a", "160k", "-ar", "48000", "-movflags", "+faststart", str(output)])
    run(command)
    summary = {"version":args.version, "duration":duration(probe, output), "music":"Original deterministic plucked-bass and toy-bell score, ducked under dialogue", "soundEffects":episode.get("soundEffects", []), "lines":metadata}
    (audio_directory / "mix.json").write_text(json.dumps(summary, indent=2) + "\n")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    asyncio.run(main())
