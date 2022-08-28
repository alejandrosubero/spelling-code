import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './base/menu/menu.component';
import { TextSpeechComponent } from './componet/text-speech/text-speech.component';
import { TextSpellingComponent } from './componet/text-spelling/text-spelling.component';
import { TextSpellingTestComponent } from './componet/text-spelling-test/text-spelling-test.component';
import { PortadaComponent } from './base/portada/portada.component';
import { TapsTextsComponent } from './componet/taps-texts/taps-texts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialModule/materialModule';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TextSpeechComponent,
    TextSpellingComponent,
    TextSpellingTestComponent,
    PortadaComponent,
    TapsTextsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
