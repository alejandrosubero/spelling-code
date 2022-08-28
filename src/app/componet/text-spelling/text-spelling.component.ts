import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-text-spelling',
  templateUrl: './text-spelling.component.html',
  styleUrls: ['./text-spelling.component.css']
})
export class TextSpellingComponent implements OnInit {

wordsList: Array<string> = new Array<string>();
word:string = "";
existWordsInList = false;
wordx:string = "Word";
indexWord = 0;
indexWordsList = 0;
spellWordList: string[]=[];
public drillWords ='';

  constructor(private speechService:SpeechService) { }

  ngOnInit(): void {
  }

  addWord(){
    let w = this.word.trim();
    this.wordsList.push(w);
    this.word ="";
    this.drillWords= this.wordsList[0];
    this.checkWordsInList();  
  }

checkWordsInList(){
  this.existWordsInList = this.wordsList.length > 0? true: false;
  this.setIndex();
}

setIndex(){
  this.wordx = this.existWordsInList? this.wordsList[this.indexWordsList]:this.wordx;
  this.spellWord();
}

spellWord(){
  this.spellWordList = this.wordx.split("",this.wordx.length);
  console.log(this.spellWordList );
}


nexWord(){
  this.indexWordsList = (this.indexWordsList+1)< this.wordsList.length ? (this.indexWordsList+1): 0;
  this.setIndex();
}

backWork(){
  this.indexWordsList = (this.indexWordsList-1) >= 0 ? (this.indexWordsList-1): (this.wordsList.length-1) ;
  this.setIndex();
}


deleteWordOfList(){
  this.wordsList = this.wordsList.filter(x=> x != this.wordx);
  if(this.wordsList.length > 0){
    this.indexWordsList =0;
  }
  this.checkWordsInList();
}

speech(){
  this.speechx(this.wordx, 0.5,1);
}

speechx(txt: string, rates?: number, pitchs?: number){
  this.speechService.speech(txt, rates, pitchs)
}

spell(){
  this.spellWordList.forEach(item=>{
    this.speechx(item, 0.5,1);
  });
}

spellItem(item){
    this.speechx(item, 0.5,1);
}

drill(){
  if( this.wordsList.length > 0){
    for (let i = 0; i <  this.wordsList.length; i++) {
      this.drillWords = this.wordsList[i];
        this.drillSpeech();
    }


  }
}

drillSpeech(){
  this.speechx(this.drillWords, 0.5,1);
  let spell = this.drillWords .split("", this.drillWords.length);
   spell.forEach(item=>{ this.speechx(item, 0.5,1);});
   this.speechx(this.drillWords, 0.5,1);
}

}
