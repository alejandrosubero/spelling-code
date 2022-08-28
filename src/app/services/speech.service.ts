import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  // Init SpeechSynth API
  private synth = window.speechSynthesis;
  private voices = [];

  constructor() { 
    // this.getVoices();
    // if (this.synth.onvoiceschanged !== undefined) {
    //   this.synth.onvoiceschanged = this.getVoices;
    // }
  }
 

  speech(txt:string, rates?:number, pitchs?:number){
  let speech = new SpeechSynthesisUtterance();
  speech.lang ='en-US';
  speech.text= txt;
  speech.volume=1;

  if (rates !== undefined && rates != null && pitchs !==undefined && pitchs != null){
    speech.rate=rates;
    speech.pitch=pitchs;
  }else {
  speech.rate=0.5;
  speech.pitch=0;
  }

 
  
  speechSynthesis.speak(speech);
  }



  getVoices () {
    const voiceSelect = document.querySelector('#voice-select');
    this.voices = this.synth.getVoices();
  
    // Loop through voices and create an option for each one
    this.voices.forEach(voice => {
      // Create option element
      const option = document.createElement('option');
      // Fill option with voice and language
      option.textContent = voice.name + '(' + voice.lang + ')';
  
      // Set needed option attributes
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  };
  

speak(txt:string, rates?:number, pitchs?:number, selectedVoices?:any)  {
  // Check if speaking
  if (txt) {
    console.error('Already speaking...');
    return;
  }

  if (txt !== '') {
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(txt);
    // Speak end
    speakText.onend = e => { console.log('Done speaking...'); };
    // Speak error
    speakText.onerror = e => {console.error('Something went wrong');};
    // Selected voice
    const selectedVoice = selectedVoices.selectedOptions[0].getAttribute('data-name');
    // Loop through voices
    this.voices.forEach(voice => { if (voice.name === selectedVoice) { speakText.voice = voice;}});
    // Set pitch and rate
    speakText.rate = rates;
    speakText.pitch = pitchs;
    // Speak
    this.synth.speak(speakText);
  }
};



}
