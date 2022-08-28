import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-text-speech',
  templateUrl: './text-speech.component.html',
  styleUrls: ['./text-speech.component.css']
})
export class TextSpeechComponent implements OnInit {

  text:string = "";

  constructor(private speechService:SpeechService) { }

  ngOnInit(): void {
   
  }

  speech(){
    // this.speechx(this.text);
    this.speechx(this.text, 0.5,1);
    // this.speechx("i", 0.5,0);
    // this.speechx("s", 0.5,0);
    // this.speechx("f", 0.5,0);
  }

  speechx(txt: string, rates?: number, pitchs?: number){
    this.speechService.speech(txt, rates, pitchs)
  }
}
