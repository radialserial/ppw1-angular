import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './util/menu/menu.component';
import { ManualComponent } from './pages/manual/manual.component';
import { BackComponent } from './util/back/back.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TopComponent } from './util/top/top.component';
import { HighlightService } from './util/prism.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManualComponent,
    BackComponent,
    QuizComponent,
    FormularioComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HighlightService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
