import { Howl } from 'howler';
class AudioManager{sounds={};load(id,src){this.sounds[id]=new Howl({src:[src]});}play(id){this.sounds[id]?.play();}}
export const audio=new AudioManager();
