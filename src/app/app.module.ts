import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './util/menu/menu.component';
import { ManualComponent } from './pages/manual/manual.component';
import { BackComponent } from './util/back/back.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManualComponent,
    BackComponent,
    QuizComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
