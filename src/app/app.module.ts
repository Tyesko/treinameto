import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
