import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HimeComponent } from './hime/hime.component';
import { Routes , RouterModule} from '@angular/router'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HimeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
