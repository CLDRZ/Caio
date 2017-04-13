import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { CepPipe } from './cep-pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CepPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
